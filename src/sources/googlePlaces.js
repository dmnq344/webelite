// Source/enrichissement OPTIONNEL : Google Places API (clé requise).
// Active uniquement si GOOGLE_PLACES_API_KEY est défini.
// On utilise l'API Places (v1) "searchText" puis on garde les établissements
// SANS websiteUri (= sans site web).

const TEXT_SEARCH_URL = 'https://places.googleapis.com/v1/places:searchText';

const FIELD_MASK = [
  'places.id',
  'places.displayName',
  'places.formattedAddress',
  'places.nationalPhoneNumber',
  'places.internationalPhoneNumber',
  'places.websiteUri',
  'places.primaryType',
  'places.location',
].join(',');

const QUERIES = [
  'restaurant',
  'salon de coiffure',
  'esthétique',
  'plombier',
  'électricien',
  'entrepreneur en construction',
  'garage automobile',
  'boutique',
  'fleuriste',
  'boulangerie',
  'clinique dentaire',
  'gym',
];

async function searchText(query, apiKey) {
  const res = await fetch(TEXT_SEARCH_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': FIELD_MASK,
    },
    body: JSON.stringify({
      textQuery: query,
      languageCode: 'fr',
      regionCode: 'CA',
    }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Google Places HTTP ${res.status}: ${body.slice(0, 200)}`);
  }
  return res.json();
}

export async function fetchProspectsFromGoogle(city, apiKey) {
  const prospects = [];
  for (const q of QUERIES) {
    let data;
    try {
      data = await searchText(`${q} à ${city}, Québec`, apiKey);
    } catch (err) {
      console.warn(`  ! Google Places (${q} / ${city}): ${err.message}`);
      continue;
    }
    for (const p of data.places || []) {
      if (p.websiteUri) continue; // on ne garde que ceux SANS site web
      const phone = p.nationalPhoneNumber || p.internationalPhoneNumber || '';
      const address = p.formattedAddress || '';
      if (!phone && !address) continue;
      prospects.push({
        id: `gplaces-${p.id}`,
        name: p.displayName?.text || '(sans nom)',
        category: p.primaryType || q,
        phone: phone.trim(),
        email: '',
        address,
        city,
        lat: p.location?.latitude ?? null,
        lon: p.location?.longitude ?? null,
        facebook: '',
        source: 'Google Places',
        osmUrl: '',
      });
    }
  }
  return prospects;
}
