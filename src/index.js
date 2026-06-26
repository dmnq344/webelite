// ==========================================================================
// Agent prospects WebElite — point d'entrée
//
//   1. Balaye les villes du Québec (OpenStreetMap, + Google Places si clé)
//   2. Garde uniquement les entreprises SANS site web et joignables
//   3. Retire les doublons déjà envoyés les jours précédents
//   4. Classe par potentiel, garde les 100 meilleurs
//   5. Envoie la liste par email (CSV en pièce jointe)
//
// Usage :
//   node src/index.js            -> exécution réelle (envoie l'email)
//   node src/index.js --dry-run  -> teste sans envoyer ni marquer les doublons
// ==========================================================================
import { config, emailConfigured } from './config.js';
import { fetchProspectsForCity } from './sources/overpass.js';
import { fetchProspectsFromGoogle } from './sources/googlePlaces.js';
import { loadSeen, saveSeen, dedupKey } from './store.js';
import { rankProspects } from './score.js';
import { writeCsvFile } from './csv.js';
import { sendProspectEmail } from './deliver/email.js';
import { runOutreach } from './outreach/run.js';

const DRY_RUN = process.argv.includes('--dry-run');
const OUTREACH = process.argv.includes('--outreach');
const FORCE_AUTO = process.argv.includes('--auto'); // force le mode envoi auto

function todayStr() {
  // Date au format AAAA-MM-JJ dans le fuseau du Québec.
  const fmt = new Intl.DateTimeFormat('fr-CA', {
    timeZone: 'America/Toronto',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return fmt.format(new Date());
}

// Mélange un tableau (pour ne pas toujours commencer par la même ville).
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function collectProspects(target, seen) {
  const cities = shuffle(config.cities);
  const useGoogle = Boolean(config.googlePlacesApiKey);
  const collected = [];
  const seenThisRun = new Set();

  for (const city of cities) {
    if (collected.length >= target * 1.5) break; // marge pour le tri final

    console.log(`→ ${city}…`);
    let cityProspects = [];
    try {
      cityProspects = await fetchProspectsForCity(city);
    } catch (err) {
      console.warn(`  ! OSM (${city}): ${err.message}`);
    }

    if (useGoogle) {
      try {
        const g = await fetchProspectsFromGoogle(city, config.googlePlacesApiKey);
        cityProspects = cityProspects.concat(g);
      } catch (err) {
        console.warn(`  ! Google (${city}): ${err.message}`);
      }
    }

    let added = 0;
    for (const p of cityProspects) {
      const key = dedupKey(p);
      if (seen.has(key) || seenThisRun.has(key)) continue;
      seenThisRun.add(key);
      collected.push(p);
      added++;
    }
    console.log(`  ✓ ${added} nouveaux prospects (total ${collected.length})`);
  }

  return collected;
}

async function main() {
  const dateStr = todayStr();
  console.log(`\n=== Agent prospects WebElite — ${dateStr}${DRY_RUN ? ' (DRY-RUN)' : ''} ===\n`);

  const seen = loadSeen();
  console.log(`Mémoire : ${seen.size} prospects déjà envoyés.\n`);

  const all = await collectProspects(config.dailyTarget, seen);
  const ranked = rankProspects(all);
  const selected = ranked.slice(0, config.dailyTarget);

  console.log(`\n${selected.length} prospects sélectionnés (objectif : ${config.dailyTarget}).`);

  if (selected.length === 0) {
    console.error('Aucun prospect trouvé. Vérifie ta connexion / tes villes.');
    process.exit(1);
  }

  const csvPath = writeCsvFile(selected, dateStr);
  console.log(`CSV écrit : ${csvPath}`);

  // --- Mode PROSPECTION : envoie des courriels personnalisés aux prospects ---
  if (OUTREACH) {
    if (!DRY_RUN && !emailConfigured()) {
      console.error('\n⚠️  Email non configuré : impossible d’envoyer la prospection.');
      process.exit(1);
    }
    const summary = await runOutreach(selected, dateStr, {
      forcedMode: FORCE_AUTO ? 'auto' : undefined,
      dryRun: DRY_RUN,
    });
    console.log(`\n✓ Prospection terminée :`, summary);
    // En envoi auto, on marque aussi ces prospects comme "vus" pour ne pas les
    // re-sélectionner dans la liste quotidienne.
    if (summary.mode === 'auto' && summary.sent > 0) {
      for (const p of selected) seen.add(dedupKey(p));
      saveSeen(seen);
    }
    return;
  }

  if (DRY_RUN) {
    console.log('\n--- DRY-RUN : aucun email envoyé, doublons non marqués. ---');
    console.log('Aperçu des 5 premiers :');
    for (const p of selected.slice(0, 5)) {
      console.log(`  • ${p.name} — ${p.category} — ${p.phone || p.email || p.address} (${p.city})`);
    }
    return;
  }

  if (!emailConfigured()) {
    console.error(
      '\n⚠️  Email non configuré (SMTP_HOST / SMTP_USER / SMTP_PASS / EMAIL_TO manquants).'
    );
    console.error('   Le CSV a quand même été généré dans /out. Configure .env puis relance.');
    process.exit(1);
  }

  console.log('\nEnvoi de l\'email…');
  const messageId = await sendProspectEmail(selected, dateStr);
  console.log(`✓ Email envoyé à ${config.email.to} (id: ${messageId})`);

  // On marque les prospects envoyés pour ne jamais les renvoyer.
  for (const p of selected) seen.add(dedupKey(p));
  saveSeen(seen);
  console.log(`Mémoire mise à jour : ${seen.size} prospects au total.`);
}

main().catch((err) => {
  console.error('\n❌ Erreur fatale :', err);
  process.exit(1);
});
