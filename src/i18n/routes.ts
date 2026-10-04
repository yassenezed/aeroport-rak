// ─────────────────────────────────────────────────────────────────────────────
// Table des routes du site.
//
// Convention : le français vit à la racine avec des slugs
// français, les cinq autres langues vivent sous /<lang>/ avec des slugs anglais
// (/de/arrivals, /es/arrivals…). Un seul jeu de slugs « intl » sert donc aux
// cinq locales non francophones.
//
// Pour ajouter une langue : l'ajouter à LOCALES, rien d'autre à toucher ici.
// ─────────────────────────────────────────────────────────────────────────────

export const LOCALES = ['fr', 'en', 'es', 'de', 'nl', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'fr';

/** Locales servies sous un préfixe d'URL (toutes sauf la locale par défaut). */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

export const LOCALE_NAMES: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  nl: 'Nederlands',
  ar: 'العربية',
};

/** Locales écrites de droite à gauche. */
export const RTL_LOCALES: Locale[] = ['ar'];

export type RouteKind = 'page' | 'blog' | 'hotel';

export interface RouteDef {
  /** Slug français, sans barre oblique. Chaîne vide pour l'accueil. */
  fr: string;
  /** Slug employé par en / es / de / nl / ar. */
  intl: string;
  kind: RouteKind;
}

// ── Les 24 pages principales ────────────────────────────────────────────────
export const PAGES = {
  home: { fr: '', intl: '', kind: 'page' },
  arrivals: { fr: 'arrivees', intl: 'arrivals', kind: 'page' },
  departures: { fr: 'departs', intl: 'departures', kind: 'page' },
  destinations: { fr: 'destinations', intl: 'destinations', kind: 'page' },
  services: { fr: 'services', intl: 'services', kind: 'page' },
  flights: { fr: 'vols', intl: 'flights', kind: 'page' },
  esim: { fr: 'esim-maroc', intl: 'morocco-esim', kind: 'page' },
  compensation: { fr: 'indemnisation-vol', intl: 'flight-compensation', kind: 'page' },
  tourGuide: { fr: 'guide-touristique-marrakech', intl: 'tour-guide-marrakech', kind: 'page' },
  transfers: { fr: 'transferts', intl: 'transfers', kind: 'page' },
  airportTaxi: { fr: 'taxi-aeroport-marrakech', intl: 'marrakech-airport-taxi', kind: 'page' },
  airportFood: { fr: 'restaurants-boutiques-aeroport-marrakech', intl: 'marrakech-airport-restaurants-shops', kind: 'page' },
  bookTransfer: { fr: 'reserver-transfert', intl: 'book-transfer', kind: 'page' },
  carRental: { fr: 'location-voiture', intl: 'car-rental', kind: 'page' },
  carBudget: { fr: 'location-voiture-economique', intl: 'budget-car-rental', kind: 'page' },
  carLuxury: { fr: 'location-voiture-prestige', intl: 'luxury-car-rental', kind: 'page' },
  carMinivan: { fr: 'location-minivan', intl: 'minivan-rental', kind: 'page' },
  carEasy: { fr: 'location-conduite-facile', intl: 'easy-drive-rental', kind: 'page' },
  parking: { fr: 'parkings', intl: 'parking', kind: 'page' },
  hotels: { fr: 'hotels', intl: 'hotels', kind: 'page' },
  airportGuide: { fr: 'guide-aeroport', intl: 'airport-guide', kind: 'page' },
  about: { fr: 'a-propos', intl: 'about', kind: 'page' },
  contact: { fr: 'contact', intl: 'contact', kind: 'page' },
  privacy: { fr: 'politique-confidentialite', intl: 'privacy-policy', kind: 'page' },
  terms: { fr: 'conditions-utilisation', intl: 'terms-of-use', kind: 'page' },
  disclosure: { fr: 'divulgation-affiliation', intl: 'affiliate-disclosure', kind: 'page' },
  legalNotice: { fr: 'mentions-legales', intl: 'legal-notice', kind: 'page' },
} as const satisfies Record<string, RouteDef>;

// ── Les 5 fiches hôtels (mêmes slugs dans toutes les langues) ───────────────
export const HOTELS = {
  mamounia: { fr: 'hotels/la-mamounia', intl: 'hotels/la-mamounia', kind: 'hotel' },
  mansour: { fr: 'hotels/royal-mansour', intl: 'hotels/royal-mansour', kind: 'hotel' },
  essaadi: { fr: 'hotels/es-saadi', intl: 'hotels/es-saadi', kind: 'hotel' },
  yasmine: { fr: 'hotels/riad-yasmine', intl: 'hotels/riad-yasmine', kind: 'hotel' },
  riadbe: { fr: 'hotels/riad-be', intl: 'hotels/riad-be', kind: 'hotel' },
} as const satisfies Record<string, RouteDef>;

// ── Le blog : index + 17 articles ──────────────────────────────────────────
export const BLOG = {
  blogIndex: { fr: 'blog', intl: 'blog', kind: 'blog' },
  money: { fr: 'blog/argent-maroc', intl: 'blog/money-in-morocco', kind: 'blog' },
  simCards: { fr: 'blog/cartes-sim-maroc', intl: 'blog/morocco-sim-cards', kind: 'blog' },
  toCity: { fr: 'blog/rak-centre-ville', intl: 'blog/rak-to-city-center', kind: 'blog' },
  airportCode: { fr: 'blog/code-aeroport-marrakech', intl: 'blog/marrakech-airport-code', kind: 'blog' },
  distAgadir: { fr: 'blog/distance-agadir-aeroport-marrakech', intl: 'blog/distance-agadir-marrakech-airport', kind: 'blog' },
  distCasa: { fr: 'blog/distance-casablanca-aeroport-marrakech', intl: 'blog/distance-casablanca-marrakech-airport', kind: 'blog' },
  distEssaouira: { fr: 'blog/distance-essaouira-aeroport-marrakech', intl: 'blog/distance-essaouira-marrakech-airport', kind: 'blog' },
  distFes: { fr: 'blog/distance-fes-aeroport-marrakech', intl: 'blog/distance-fes-marrakech-airport', kind: 'blog' },
  distOuarzazate: { fr: 'blog/distance-ouarzazate-aeroport-marrakech', intl: 'blog/distance-ouarzazate-marrakech-airport', kind: 'blog' },
  layover: { fr: 'blog/escale-marrakech', intl: 'blog/layover-marrakech', kind: 'blog' },
  fastTrack: { fr: 'blog/fast-track-aeroport-marrakech', intl: 'blog/fast-track-marrakech-airport', kind: 'blog' },
  carRentalGuide: { fr: 'blog/location-voiture-aeroport-marrakech', intl: 'blog/car-rental-marrakech-airport', kind: 'blog' },
  longTermCar: { fr: 'blog/location-voiture-longue-duree-marrakech', intl: 'blog/long-term-car-rental-marrakech', kind: 'blog' },
  parkingRates: { fr: 'blog/parking-aeroport-marrakech-tarifs', intl: 'blog/parking-marrakech-airport-rates', kind: 'blog' },
  vipLounges: { fr: 'blog/salons-vip-aeroport-marrakech', intl: 'blog/marrakech-airport-vip-lounges', kind: 'blog' },
  taxiTips: { fr: 'blog/taxi-marrakech', intl: 'blog/taxi-tips-marrakech', kind: 'blog' },
  bus19: { fr: 'blog/bus-19-alsa-marrakech', intl: 'blog/bus-19-alsa-marrakech', kind: 'blog' },
} as const satisfies Record<string, RouteDef>;

export const ROUTES = { ...PAGES, ...HOTELS, ...BLOG } as Record<string, RouteDef>;
export type RouteKey = keyof typeof PAGES | keyof typeof HOTELS | keyof typeof BLOG;

/** Chemin absolu d'une route dans une locale donnée, barres obliques comprises. */
export function pathFor(key: RouteKey | string, locale: Locale = DEFAULT_LOCALE): string {
  const route = ROUTES[key as string];
  if (!route) return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
  const slug = locale === DEFAULT_LOCALE ? route.fr : route.intl;
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return slug ? `${prefix}/${slug}/` : `${prefix}/`;
}

/** Toutes les variantes d'une route, pour les balises hreflang. */
export function alternatesFor(key: RouteKey | string): { locale: Locale; path: string }[] {
  return LOCALES.map((locale) => ({ locale, path: pathFor(key, locale) }));
}

/** Retrouve la clé de route correspondant à un chemin. */
export function keyForPath(path: string): { key: RouteKey; locale: Locale } | null {
  const clean = ('/' + path.replace(/^\/|\/$/g, '') + '/').replace('//', '/');
  for (const locale of LOCALES) {
    for (const key of Object.keys(ROUTES)) {
      if (pathFor(key, locale) === clean) return { key: key as RouteKey, locale };
    }
  }
  return null;
}

/** Liste complète des URL du site, pour le sitemap et le rendu statique. */
export function allRoutes(): { key: RouteKey; locale: Locale; path: string; kind: RouteKind }[] {
  const out: { key: RouteKey; locale: Locale; path: string; kind: RouteKind }[] = [];
  for (const locale of LOCALES) {
    for (const [key, def] of Object.entries(ROUTES)) {
      out.push({ key: key as RouteKey, locale, path: pathFor(key, locale), kind: def.kind });
    }
  }
  return out;
}
