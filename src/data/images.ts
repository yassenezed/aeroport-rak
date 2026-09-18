import placeholder from '../assets/img/placeholder.png';

// ─────────────────────────────────────────────────────────────────────────────
// Photothèque AirportRAK.
//
// Chaque clé ci-dessous correspond à une photo attendue dans
// `src/assets/img/<clé>.jpg`. Tant que le fichier n'est pas fourni, la clé
// retombe sur `placeholder.png` (dégradé neutre) et le site compile quand même.
//
// Pour activer une photo : déposer le fichier, ajouter son `import` puis son
// entrée dans `imageMap`. Format conseillé : JPG paysage, 1600×900 minimum.
// ─────────────────────────────────────────────────────────────────────────────

export const REQUIRED_PHOTOS = [
  // Hero et identité
  'marrakech-koutoubia',        // hero accueil — Koutoubia au coucher du soleil
  'rak-terminal',               // façade / hall du terminal Ménara
  'rak-arrivals',               // hall des arrivées, sortie douane
  'rak-taxi-rank',              // rang de taxis devant l'aérogare
  'rak-car-rental-desks',       // comptoirs de location dans les arrivées
  'rak-bus-19',                 // arrêt du bus 19 ALSA
  'rak-parking',                // parking de l'aéroport

  // Quartiers et trajets
  'marrakech-medina',           // ruelles de la médina
  'jemaa-el-fna',               // place Jemaa el-Fna en soirée
  'gueliz-hivernage',           // avenue Mohammed VI / Guéliz moderne
  'palmeraie',                  // palmeraie et resorts
  'agafay-desert',              // camps du désert d'Agafay
  'ourika-valley',              // vallée de l'Ourika
  'imlil-toubkal',              // Imlil et le Haut Atlas
  'oukaimeden',                 // station de ski d'Oukaïmeden
  'ouzoud-falls',               // cascades d'Ouzoud
  'ait-ben-haddou',             // ksar d'Aït Ben Haddou
  'ouarzazate',                 // Ouarzazate / Tizi n'Tichka
  'essaouira',                  // remparts et port d'Essaouira
  'agadir',                     // baie d'Agadir
  'casablanca',                 // mosquée Hassan II

  // Transferts et transport
  'marrakech-airport-transfer', // véhicule de transfert privé
  'marrakech-taxi',             // petit taxi beige de Marrakech
  'marrakech-car-rental',       // voiture de location sur la route de l'Atlas
  'getting-around-marrakech',   // calèche / scooter / bus urbain

  // Hébergement
  'hotels-airport-rak',         // hôtel proche de l'aéroport
  'riads-medina',               // patio de riad
  'la-mamounia',                // La Mamounia
  'royal-mansour',              // Royal Mansour
  'es-saadi-palace',            // Es Saadi Palace
  'riad-yasmine',               // Riad Yasmine
  'riad-be-marrakech',          // Riad BE Marrakech

  // Guides et lifestyle
  'majorelle-garden',           // jardin Majorelle
  'souks-marrakech',            // souks, étals d'artisanat
  'things-to-do-marrakech',     // Bahia / Ben Youssef / Saadiens
  'travel-guide-marrakech',     // vue d'ensemble de la ville
  'restaurants-marrakech',      // terrasse ou table marocaine
  'marrakech-with-kids',        // famille en visite
  'marrakech-winter',           // Marrakech en hiver, Atlas enneigé
  'marrakech-weather',          // ciel et palmiers, saisonnalité
  'marrakech-safe',             // rue animée, ambiance rassurante
  'shopping-marrakech',         // babouches, tapis, lanternes
  'camel-quad-marrakech',       // dromadaires en Palmeraie / quad Agafay

  // Pratique
  'morocco-dirham',             // billets et pièces en dirhams
  'morocco-entry',              // passeport / contrôle frontière
  'esim-morocco',               // smartphone avec eSIM
] as const;

const imageMap: Record<string, any> = {};

export const photos = new Proxy(imageMap, {
  get: (target, prop) => target[prop as string] ?? placeholder
});

export const photoCredits: Array<Record<string, unknown>> = [];
