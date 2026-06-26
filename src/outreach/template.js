// Modèle de courriel de prospection personnalisé (français, Québec).
// Conçu pour une agence de création de sites web qui contacte des commerces
// locaux sans site. Inclut la conformité LCAP (identification + désabonnement).

// Traduit la catégorie OSM/Google en un mot naturel en français.
const CATEGORY_FR = {
  restaurant: 'restaurant',
  cafe: 'café',
  bar: 'bar',
  fast_food: 'restaurant',
  pub: 'pub',
  bakery: 'boulangerie',
  beauty: 'salon d’esthétique',
  hairdresser: 'salon de coiffure',
  spa: 'spa',
  dentist: 'clinique dentaire',
  doctors: 'clinique',
  clinic: 'clinique',
  veterinary: 'clinique vétérinaire',
  pharmacy: 'pharmacie',
  car_repair: 'garage',
  fuel: 'station-service',
  fitness_centre: 'centre de conditionnement physique',
  sports_centre: 'centre sportif',
  hotel: 'hôtel',
  florist: 'boutique de fleurs',
  car: 'concession automobile',
};

function categoryLabel(category) {
  return CATEGORY_FR[category] || 'commerce';
}

function firstName(senderName) {
  return (senderName || '').trim().split(/\s+/)[0] || '';
}

// Construit { subject, text, html } pour un prospect donné.
export function buildOutreachEmail(prospect, sender) {
  const type = categoryLabel(prospect.category);
  const city = prospect.city || 'votre région';
  const hasFacebook = Boolean(prospect.facebook);

  const subject = `Un site web pour ${prospect.name} ?`;

  const constatLigne = hasFacebook
    ? `J’ai vu votre page Facebook, mais je n’ai pas trouvé de site web pour ${prospect.name}.`
    : `En cherchant les ${type}s à ${city}, j’ai remarqué que ${prospect.name} n’a pas encore de site web.`;

  const offre = sender.portfolio
    ? `Vous pouvez voir des exemples de mon travail ici : ${sender.portfolio}`
    : '';

  const signatureLignes = [
    sender.name,
    sender.business,
    sender.phone ? `📞 ${sender.phone}` : '',
    sender.portfolio || '',
  ].filter(Boolean);

  // --- Version texte ---
  const text = [
    `Bonjour,`,
    ``,
    constatLigne,
    ``,
    `Je conçois des sites web professionnels pour les ${type}s de ${city} : simples, rapides à charger, et pensés pour attirer plus de clients via Google et les recherches locales.`,
    ``,
    `Un bon site, c’est souvent la différence entre un client qui vous trouve… ou qui appelle le concurrent d’à côté.`,
    offre,
    ``,
    `Si vous êtes ouvert à en discuter (sans engagement), répondez simplement à ce courriel${
      sender.phone ? ` ou appelez-moi au ${sender.phone}` : ''
    }.`,
    ``,
    `Au plaisir,`,
    ...signatureLignes,
    ``,
    `—`,
    legalFooterText(prospect, sender),
  ]
    .filter((l) => l !== undefined)
    .join('\n');

  // --- Version HTML ---
  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#222;line-height:1.5;max-width:560px;">
    <p>Bonjour,</p>
    <p>${escapeHtml(constatLigne)}</p>
    <p>Je conçois des sites web professionnels pour les ${escapeHtml(type)}s de
      ${escapeHtml(city)} : simples, rapides à charger, et pensés pour attirer
      plus de clients via Google et les recherches locales.</p>
    <p>Un bon site, c’est souvent la différence entre un client qui vous trouve…
      ou qui appelle le concurrent d’à côté.</p>
    ${offre ? `<p>${escapeHtml(offre)}</p>` : ''}
    <p>Si vous êtes ouvert à en discuter (sans engagement), répondez simplement à
      ce courriel${sender.phone ? ` ou appelez-moi au <strong>${escapeHtml(sender.phone)}</strong>` : ''}.</p>
    <p>Au plaisir,<br>${signatureLignes.map(escapeHtml).join('<br>')}</p>
    <hr style="border:none;border-top:1px solid #ddd;margin:18px 0;">
    <p style="font-size:11px;color:#999;">${legalFooterHtml(prospect, sender)}</p>
  </div>`;

  return { subject, text, html };
}

// Pied de page conforme LCAP : identification + désabonnement.
function legalFooterText(prospect, sender) {
  const lines = [
    `${sender.business}${sender.address ? ` — ${sender.address}` : ''}`,
    `Vous recevez ce courriel car ${prospect.name} est inscrit dans des annuaires publics (OpenStreetMap). Pour ne plus jamais être contacté, répondez avec le mot « STOP ».`,
  ];
  return lines.join('\n');
}

function legalFooterHtml(prospect, sender) {
  return [
    `${escapeHtml(sender.business)}${sender.address ? ` — ${escapeHtml(sender.address)}` : ''}`,
    `Vous recevez ce courriel car ${escapeHtml(
      prospect.name
    )} est inscrit dans des annuaires publics. Pour ne plus être contacté, répondez « STOP ».`,
  ].join('<br>');
}

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
