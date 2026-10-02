import type { Locale } from '../i18n';

export interface Faq { q: string; a: string }

export interface LocalizedPage {
  /** Balise <title>, sans le suffixe de marque. */
  title: string;
  /** Meta description, 160 caractères maximum. */
  description: string;
  /** Surtitre affiché au-dessus du H1. */
  eyebrow?: string;
  h1: string;
  lede: string;
  /** Corps de page en HTML : <h2>, <p>, <table class="data">, <div class="callout">… */
  body: string;
  faqs?: Faq[];
  /** Titre H2 de la FAQ ; par défaut le libellé générique « Questions fréquentes ». */
  faqHeading?: string;
  /** Widget affiché juste sous le hero. */
  widget?: 'flights-arrivals' | 'flights-departures' | 'flight-search' | 'transfer' | 'esim' | 'compensation' | 'tours' | 'car-rental';
  /** Titre (H2) et texte d'introduction affichés au-dessus du widget. */
  widgetIntro?: { heading: string; text?: string };
  /** Bandeau d'appel à l'action en bas de page. */
  cta?: { heading: string; text?: string; label: string; href?: string; secondary?: { label: string; key: string } };
  /** Bandeau de chiffres clés sous le hero. */
  facts?: { label: string; value: string; sub?: string }[];
  /** Accueil : seconde ligne du H1, mise en couleur. */
  h1Accent?: string;
  /** Tuiles de chiffres clés avec icône, sous le hero ; `live` affiche l'heure ou la météo en direct. */
  highlights?: { icon: string; value: string; label: string; live?: 'clock' | 'weather' }[];
  /** Page Destinations : titres des blocs compagnies, tableau et listes par région. */
  destinations?: { airlinesHeading: string; airlinesIntro: string; tableHeading: string; tableIntro: string; regionsHeading: string };
  /** Blocs de cartes (services, commodités…) : `feature` = grandes cartes avec étiquettes, `compact` = grille dense. */
  cardSections?: {
    eyebrow?: string;
    heading: string;
    intro?: string;
    variant: 'feature' | 'compact';
    items: { icon: string; title: string; text: string; tags?: string[]; link?: { key: string; label: string } }[];
  }[];
  /** Comparatif d'options (transport…) : tableau rapide puis une carte détaillée par option. */
  options?: {
    heading: string;
    intro?: string;
    table?: { head: string[]; rows: string[][] };
    detailHeading: string;
    items: {
      icon: string;
      title: string;
      tagline: string;
      badge?: string;
      meta: { label: string; value: string }[];
      pros: string[];
      cons?: string[];
      note?: { label: string; text: string };
      prices?: { heading: string; rows: { label: string; value: string }[]; foot?: string };
      link?: { key: string; label: string };
    }[];
  };
  /** Encadré mis en avant en fin de page (projets, actualité). */
  spotlight?: { icon: string; heading: string; text: string };
  /** Parcours en étapes numérotées avec icône. */
  steps?: { heading: string; intro?: string; items: { icon: string; title: string; text: string }[] };
  /** Grille de cartes de services (icône, titre, texte, lien vers une route). */
  services?: {
    heading: string;
    intro: string;
    items: { icon: string; key: string; title: string; text: string; cta: string }[];
  };
}

export type PageContent = Partial<Record<Locale, LocalizedPage>>;

export interface LocalizedArticle extends LocalizedPage {
  /** Date ISO de publication, commune à toutes les locales. */
  date?: string;
  /** Résumé affiché dans l'index du blog. */
  excerpt?: string;
}

export type ArticleContent = Partial<Record<Locale, LocalizedArticle>>;

export interface LocalizedHotel extends LocalizedPage {
  rating?: number;
  ratingLabel?: string;
  priceRange?: string;
  area?: string;
  stars?: string;
  verdict?: string;
  pros?: string[];
  cons?: string[];
}

export type HotelContent = Partial<Record<Locale, LocalizedHotel>>;
