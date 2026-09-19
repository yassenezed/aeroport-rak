import fr from '../locales/fr.json';

// ─────────────────────────────────────────────────────────────────────────────
// AirportRAK i18n — French is the default locale and lives at the ROOT
// (French slugs, no prefix). Trailing slashes everywhere.
// `pathMappings` is the single source of truth: one entry per page, keyed by
// the canonical path. To add a language later: add its JSON to `translations`,
// add it to `languages`, then give entries a `<lang>` slug (e.g. en: '/...').
// ─────────────────────────────────────────────────────────────────────────────

export const languages = {
  fr: 'Français'
} as const;

export const defaultLang: Lang = 'fr';

export const translations = { fr } as const;

export type Lang = keyof typeof translations;

type PathEntry = Partial<Record<Lang, string>>;

const pathMappings: Record<string, PathEntry> = {
  // ── Accueil ──
  '/': { fr: '/' },

  // ── Transferts (hub + pages de conversion) ──
  '/reserver-transfert/': { fr: '/reserver-transfert/' },
  '/transfert-aeroport-marrakech/': { fr: '/transfert-aeroport-marrakech/' },
  '/taxi-aeroport-marrakech/': { fr: '/taxi-aeroport-marrakech/' },
  '/taxi-aeroport-marrakech/prix/': { fr: '/taxi-aeroport-marrakech/prix/' },

  // ── Trajets depuis le RAK ──
  '/transfert-aeroport-marrakech-medina/': { fr: '/transfert-aeroport-marrakech-medina/' },
  '/transfert-aeroport-marrakech-essaouira/': { fr: '/transfert-aeroport-marrakech-essaouira/' },

  // ── Comparatifs et avis ──
  '/meilleur-transfert-aeroport-marrakech/': { fr: '/meilleur-transfert-aeroport-marrakech/' },

  // ── Location de voiture ──
  '/location-voiture-aeroport-marrakech/': { fr: '/location-voiture-aeroport-marrakech/' },
  '/location-voiture-aeroport-marrakech/pas-cher/': { fr: '/location-voiture-aeroport-marrakech/pas-cher/' },
  '/location-4x4-aeroport-marrakech/': { fr: '/location-4x4-aeroport-marrakech/' },
  '/meilleure-location-voiture-aeroport-marrakech/': { fr: '/meilleure-location-voiture-aeroport-marrakech/' },
  '/louer-voiture-marrakech-guide/': { fr: '/louer-voiture-marrakech-guide/' },
  '/conduire-au-maroc/': { fr: '/conduire-au-maroc/' },

  // ── Guide de l'aéroport ──
  '/guide-aeroport-marrakech/': { fr: '/guide-aeroport-marrakech/' },
  '/guide-aeroport-marrakech/arrivees/': { fr: '/guide-aeroport-marrakech/arrivees/' },
  '/guide-aeroport-marrakech/departs/': { fr: '/guide-aeroport-marrakech/departs/' },
  '/guide-aeroport-marrakech/parking/': { fr: '/guide-aeroport-marrakech/parking/' },
  '/guide-aeroport-marrakech/services/': { fr: '/guide-aeroport-marrakech/services/' },
  '/guide-aeroport-marrakech/aller-a-la-medina/': { fr: '/guide-aeroport-marrakech/aller-a-la-medina/' },
  '/guide-aeroport-marrakech/aller-a-gueliz/': { fr: '/guide-aeroport-marrakech/aller-a-gueliz/' },

  // ── Hôtels, riads et hébergement ──
  '/hotels-pres-aeroport-marrakech/': { fr: '/hotels-pres-aeroport-marrakech/' },
  '/ou-dormir-marrakech/': { fr: '/ou-dormir-marrakech/' },
  '/meilleurs-hotels-marrakech/': { fr: '/meilleurs-hotels-marrakech/' },
  '/riads-medina-marrakech/': { fr: '/riads-medina-marrakech/' },
  '/avis-la-mamounia/': { fr: '/avis-la-mamounia/' },
  '/avis-royal-mansour/': { fr: '/avis-royal-mansour/' },
  '/avis-es-saadi-palace/': { fr: '/avis-es-saadi-palace/' },
  '/avis-riad-yasmine/': { fr: '/avis-riad-yasmine/' },
  '/avis-riad-be-marrakech/': { fr: '/avis-riad-be-marrakech/' },

  // ── Vols ──
  '/vols-marrakech/': { fr: '/vols-marrakech/' },
  '/vols-marrakech/pas-chers/': { fr: '/vols-marrakech/pas-chers/' },
  '/vols-marrakech-depuis-france/': { fr: '/vols-marrakech-depuis-france/' },
  '/destinations-aeroport-marrakech/': { fr: '/destinations-aeroport-marrakech/' },

  // ── Guides voyage et que faire ──
  '/guide-voyage-marrakech/': { fr: '/guide-voyage-marrakech/' },
  '/que-faire-marrakech/': { fr: '/que-faire-marrakech/' },
  '/quand-partir-marrakech/': { fr: '/quand-partir-marrakech/' },
  '/securite-marrakech/': { fr: '/securite-marrakech/' },
  '/se-deplacer-marrakech/': { fr: '/se-deplacer-marrakech/' },
  '/medina-marrakech/': { fr: '/medina-marrakech/' },
  '/jemaa-el-fna/': { fr: '/jemaa-el-fna/' },
  '/restaurants-marrakech/': { fr: '/restaurants-marrakech/' },
  '/marrakech-en-famille/': { fr: '/marrakech-en-famille/' },
  '/marrakech-en-hiver/': { fr: '/marrakech-en-hiver/' },
  '/shopping-souvenirs-marrakech/': { fr: '/shopping-souvenirs-marrakech/' },
  '/balade-chameau-quad-marrakech/': { fr: '/balade-chameau-quad-marrakech/' },

  // ── Excursions depuis Marrakech ──
  '/excursion-vallee-ourika/': { fr: '/excursion-vallee-ourika/' },
  '/excursion-cascades-ouzoud/': { fr: '/excursion-cascades-ouzoud/' },
  '/excursion-desert-agafay/': { fr: '/excursion-desert-agafay/' },
  '/trek-imlil-toubkal/': { fr: '/trek-imlil-toubkal/' },
  '/excursion-ait-ben-haddou/': { fr: '/excursion-ait-ben-haddou/' },
  '/ski-oukaimeden/': { fr: '/ski-oukaimeden/' },
  '/excursion-marrakech-essaouira/': { fr: '/excursion-marrakech-essaouira/' },
  '/excursion-marrakech-casablanca/': { fr: '/excursion-marrakech-casablanca/' },

  // ── Transport interville ──
  '/marrakech-agadir-transport/': { fr: '/marrakech-agadir-transport/' },
  '/route-marrakech-agadir-en-voiture/': { fr: '/route-marrakech-agadir-en-voiture/' },
  '/marrakech-ou-agadir/': { fr: '/marrakech-ou-agadir/' },

  // ── Services ──
  '/esim-maroc/': { fr: '/esim-maroc/' },
  '/indemnisation-vol/': { fr: '/indemnisation-vol/' },
  '/guide-touristique/': { fr: '/guide-touristique/' },
  '/formalites-entree-maroc/': { fr: '/formalites-entree-maroc/' },

  // ── Utilitaires / légal ──
  '/divulgation-affiliation/': { fr: '/divulgation-affiliation/' },
  '/a-propos/': { fr: '/a-propos/' },
  '/contact/': { fr: '/contact/' },
  '/politique-confidentialite/': { fr: '/politique-confidentialite/' },
  '/credits-photos/': { fr: '/credits-photos/' },
};

// Reverse map: any localised path -> its canonical key.
const reversePathMappings: Record<string, string> = {};
for (const [canonical, langs] of Object.entries(pathMappings)) {
  for (const lang of Object.keys(languages)) {
    if ((langs as any)[lang]) reversePathMappings[(langs as any)[lang]] = canonical;
  }
}

/** Normalise a pathname: strip query/hash & .html, force one leading + trailing slash. */
function normalize(path: string): string {
  let p = (path || '/').split('#')[0].split('?')[0];
  p = p.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  if (!p.startsWith('/')) p = '/' + p;
  if (!p.endsWith('/')) p = p + '/';
  return p;
}

/** Resolve any localised path to its canonical key. */
function toCanonical(path: string): string {
  const clean = normalize(path);
  return reversePathMappings[clean] ?? clean;
}

export function getLangFromUrl(_url: URL): Lang {
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang] ?? translations[defaultLang];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) value = value[k];
      else return key;
    }
    return typeof value === 'string' ? value : key;
  };
}

/** Map a path to its equivalent in `targetLang`. */
export function getLocalizedPath(path: string, targetLang: Lang = defaultLang): string {
  const canonical = toCanonical(path);
  const entry = pathMappings[canonical];
  if (entry && (entry as any)[targetLang]) return (entry as any)[targetLang];
  return canonical;
}

/** Languages that have a real twin for this path — used for hreflang alternates. */
export function getAlternateLinks(currentPath: string): { lang: Lang; href: string }[] {
  const canonical = toCanonical(currentPath);
  const entry = pathMappings[canonical];
  const langs = (entry ? Object.keys(entry) : [defaultLang]) as Lang[];
  return langs.map((lang) => ({ lang, href: getLocalizedPath(canonical, lang) }));
}

/** Header language switcher — a single locale today, kept for future languages. */
export function getLanguageSwitchLinks(currentPath: string): { lang: Lang; href: string; exists: boolean }[] {
  const canonical = toCanonical(currentPath);
  const entry = pathMappings[canonical];
  return (Object.keys(languages) as Lang[]).map((lang) => {
    const exists = !!(entry && (entry as any)[lang]);
    return { lang, href: exists ? (entry as any)[lang] : '/', exists };
  });
}

/** All canonical paths (used to generate sitemaps). */
export function allPaths(): { canonical: string; fr?: string }[] {
  return Object.entries(pathMappings).map(([canonical, langs]) => ({ canonical, fr: langs.fr }));
}
