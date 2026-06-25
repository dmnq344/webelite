// Scoring : on classe les prospects par « potentiel ». Plus le score est
// élevé, plus l'entreprise a besoin d'un site web ET est facile à contacter.

export function scoreProspect(p) {
  let score = 0;

  // Joignable = priorité absolue
  if (p.phone) score += 30;
  if (p.email) score += 25;
  if (p.address) score += 10;

  // Une page Facebook (mais pas de site) = prospect très qualifié :
  // l'entreprise est active en ligne mais sans vrai site.
  if (p.facebook) score += 20;

  // Catégories à fort taux de conversion pour la création de site web.
  const hot = [
    'restaurant',
    'cafe',
    'beauty',
    'hairdresser',
    'spa',
    'dentist',
    'doctors',
    'clinic',
    'fitness_centre',
    'car_repair',
    'craft',
  ];
  if (hot.includes(p.category)) score += 15;

  return score;
}

export function rankProspects(prospects) {
  return [...prospects].sort((a, b) => scoreProspect(b) - scoreProspect(a));
}
