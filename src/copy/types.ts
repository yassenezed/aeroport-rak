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
  widget?: 'flights-arrivals' | 'flights-departures' | 'flight-search' | 'transfer';
  /** Bandeau d'appel à l'action en bas de page. */
  cta?: { heading: string; text?: string; label: string; href?: string };
  /** Bandeau de chiffres clés sous le hero. */
  facts?: { label: string; value: string; sub?: string }[];
  /** Accueil : seconde ligne du H1, mise en couleur. */
  h1Accent?: string;
  /** Accueil : grille de cartes de services (icône, titre, texte, lien). */
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
