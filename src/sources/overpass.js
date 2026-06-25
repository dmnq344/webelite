// Source de données : OpenStreetMap via l'API Overpass (gratuit, sans clé).
// On récupère les commerces/PME d'une ville du Québec qui N'ONT PAS de site
// web déclaré et qui possèdent au moins un moyen de contact (téléphone/email).

const OVERPASS_ENDPOINTS = [
  'https://overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
  'https://maps.mail.ru/osm/tools/overpass/api/interpreter',
];

// Catégories de commerces qui bénéficient typiquement d'un site web.
function buildQuery(city) {
  return `
[out:json][timeout:90];
area["name"="${city}"]["boundary"="administrative"]->.a;
(
  nwr["shop"]["name"](area.a);
  nwr["craft"]["name"](area.a);
  nwr["office"]["name"](area.a);
  nwr["healthcare"]["name"](area.a);
  nwr["amenity"~"^(restaurant|cafe|bar|fast_food|pub|dentist|doctors|veterinary|pharmacy|clinic|driving_school|car_rental|car_repair|fuel|bank|beauty|hairdresser|spa)$"]["name"](area.a);
  nwr["leisure"~"^(fitness_centre|sports_centre|dance)$"]["name"](area.a);
  nwr["tourism"~"^(hotel|guest_house|motel|bed_and_breakfast)$"]["name"](area.a);
);
out center tags;
`.trim();
}

function hasWebsite(tags) {
  // On exclut uniquement ceux qui ont un VRAI site web.
  // Une simple page Facebook ne compte pas : ce sont au contraire
  // d'excellents prospects (ils ont besoin d'un vrai site).
  return Boolean(
    tags.website || tags['contact:website'] || tags.url || tags['contact:url']
  );
}

function pickContact(tags) {
  const phone =
    tags.phone || tags['contact:phone'] || tags['contact:mobile'] || tags.mobile || '';
  const email = tags.email || tags['contact:email'] || '';
  return { phone: phone.trim(), email: email.trim() };
}

function buildAddress(tags) {
  const parts = [
    [tags['addr:housenumber'], tags['addr:street']].filter(Boolean).join(' '),
    tags['addr:city'],
    tags['addr:postcode'],
  ].filter(Boolean);
  return parts.join(', ');
}

function categoryOf(tags) {
  return (
    tags.shop ||
    tags.craft ||
    tags.amenity ||
    tags.office ||
    tags.healthcare ||
    tags.leisure ||
    tags.tourism ||
    'commerce'
  );
}

async function runOverpass(query) {
  let lastErr;
  for (const endpoint of OVERPASS_ENDPOINTS) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'data=' + encodeURIComponent(query),
      });
      if (!res.ok) {
        lastErr = new Error(`Overpass ${endpoint} -> HTTP ${res.status}`);
        continue;
      }
      return await res.json();
    } catch (err) {
      lastErr = err;
    }
  }
  throw lastErr || new Error('Tous les serveurs Overpass ont échoué');
}

// Récupère les prospects (sans site web) pour une ville donnée.
export async function fetchProspectsForCity(city) {
  const data = await runOverpass(buildQuery(city));
  const elements = data.elements || [];
  const prospects = [];

  for (const el of elements) {
    const tags = el.tags || {};
    if (!tags.name) continue;
    if (hasWebsite(tags)) continue; // on ne veut QUE ceux sans site web

    const { phone, email } = pickContact(tags);
    const address = buildAddress(tags);

    // Il faut un moyen de les contacter, sinon le prospect est inexploitable.
    if (!phone && !email && !address) continue;

    const lat = el.lat ?? el.center?.lat ?? null;
    const lon = el.lon ?? el.center?.lon ?? null;

    prospects.push({
      id: `osm-${el.type}-${el.id}`,
      name: tags.name,
      category: categoryOf(tags),
      phone,
      email,
      address,
      city,
      lat,
      lon,
      facebook: tags['contact:facebook'] || '',
      source: 'OpenStreetMap',
      osmUrl: `https://www.openstreetmap.org/${el.type}/${el.id}`,
    });
  }

  return prospects;
}
