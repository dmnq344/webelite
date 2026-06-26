// Prospection : envoie (ou prépare) des courriels personnalisés aux prospects.
//
//  - mode 'draft' : génère tous les courriels et te les envoie À TOI pour
//                   validation. Rien n'est envoyé aux prospects.
//  - mode 'auto'  : envoie directement aux prospects depuis ton adresse,
//                   en respectant le plafond quotidien et le délai entre envois.
import { config, senderConfigured } from '../config.js';
import { getTransporter, sleep } from '../mailer.js';
import { buildOutreachEmail } from './template.js';
import { loadContacted, saveContacted, contactKey } from './contacted.js';

// En-tête de désabonnement standard (reconnu par Gmail/Outlook).
function unsubscribeHeader() {
  const addr = config.sender.replyTo || config.smtp.user;
  return addr ? { 'List-Unsubscribe': `<mailto:${addr}?subject=STOP>` } : {};
}

// --- Mode brouillon : un seul courriel récapitulatif vers TOI ---
async function runDraft(targets, dateStr) {
  const blocks = targets
    .map((p, i) => {
      const { subject, text } = buildOutreachEmail(p, config.sender);
      return `━━━━━━━━━━ ${i + 1}. ${p.name} (${p.city}) → ${p.email} ━━━━━━━━━━
Objet : ${subject}

${text}`;
    })
    .join('\n\n\n');

  const intro = `Voici ${targets.length} courriels de prospection prêts à envoyer (mode BROUILLON).
Relis-les, ajuste si besoin, puis passe en mode envoi automatique (OUTREACH_MODE=auto) quand tu es prêt.

`;

  await getTransporter().sendMail({
    from: config.email.from,
    to: config.email.to,
    subject: `✍️ ${targets.length} brouillons de prospection à valider (${dateStr})`,
    text: intro + blocks,
  });

  return { mode: 'draft', candidates: targets.length, sent: 0, drafted: targets.length };
}

// --- Mode auto : envoi réel à chaque prospect ---
async function runAuto(targets, dateStr) {
  if (!senderConfigured()) {
    throw new Error(
      'Envoi auto refusé : SENDER_NAME et SENDER_ADDRESS sont obligatoires (conformité LCAP). ' +
        'Renseigne-les dans .env.'
    );
  }

  const transporter = getTransporter();
  const contacted = loadContacted();
  const headers = unsubscribeHeader();
  let sent = 0;
  const errors = [];

  for (const p of targets) {
    const { subject, text, html } = buildOutreachEmail(p, config.sender);
    try {
      await transporter.sendMail({
        from: config.email.from, // ton adresse
        to: p.email,
        replyTo: config.sender.replyTo,
        subject,
        text,
        html,
        headers,
      });
      contacted.add(contactKey(p));
      saveContacted(contacted); // sauvegarde incrémentale (reprise sûre)
      sent++;
      console.log(`  ✉️  ${sent}/${targets.length} → ${p.name} <${p.email}>`);
    } catch (err) {
      errors.push(`${p.name} <${p.email}> : ${err.message}`);
      console.warn(`  ! Échec ${p.name}: ${err.message}`);
    }
    if (sent < targets.length) await sleep(config.outreach.throttleMs);
  }

  // Récapitulatif vers toi.
  await transporter
    .sendMail({
      from: config.email.from,
      to: config.email.to,
      subject: `📨 Prospection envoyée : ${sent} courriels (${dateStr})`,
      text:
        `${sent} courriels de prospection envoyés depuis ${config.email.from}.\n` +
        (errors.length ? `\nÉchecs (${errors.length}) :\n- ${errors.join('\n- ')}` : ''),
    })
    .catch(() => {});

  return { mode: 'auto', candidates: targets.length, sent, drafted: 0, errors };
}

// Point d'entrée : sélectionne les cibles puis exécute le bon mode.
export async function runOutreach(prospects, dateStr, options = {}) {
  const { forcedMode, dryRun = false } = options;
  const mode = (forcedMode || config.outreach.mode) === 'auto' ? 'auto' : 'draft';

  const contacted = loadContacted();
  const targets = prospects
    .filter((p) => p.email && /.+@.+\..+/.test(p.email))
    .filter((p) => !contacted.has(contactKey(p)))
    .slice(0, config.outreach.dailyCap);

  console.log(
    `\nProspection (${mode}${dryRun ? ' / DRY-RUN' : ''}) : ${targets.length} cible(s) ` +
      `avec courriel (plafond ${config.outreach.dailyCap}).`
  );

  if (targets.length === 0) {
    console.log('Aucun prospect avec courriel à contacter aujourd’hui.');
    return { mode, candidates: 0, sent: 0, drafted: 0 };
  }

  if (dryRun) {
    console.log('Aperçu (aucun courriel envoyé) :');
    for (const p of targets.slice(0, 5)) {
      const { subject } = buildOutreachEmail(p, config.sender);
      console.log(`  • ${p.name} <${p.email}> — Objet : « ${subject} »`);
    }
    return { mode, candidates: targets.length, sent: 0, drafted: 0, dryRun: true };
  }

  return mode === 'auto' ? runAuto(targets, dateStr) : runDraft(targets, dateStr);
}
