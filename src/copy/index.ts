// Registre de contenu : chaque route possède un module dans pages/, blog/ ou
// hotels/, nommé d'après sa clé de route et exportant par défaut un objet
// indexé par locale.
import { DEFAULT_LOCALE, type Locale } from '../i18n';
import type { PageContent, ArticleContent, HotelContent, LocalizedPage, LocalizedArticle, LocalizedHotel } from './types';

type Mod<T> = { default: T };

const pageMods = import.meta.glob<Mod<PageContent>>('./pages/*.ts', { eager: true });
const blogMods = import.meta.glob<Mod<ArticleContent>>('./blog/*.ts', { eager: true });
const hotelMods = import.meta.glob<Mod<HotelContent>>('./hotels/*.ts', { eager: true });

function index<T>(mods: Record<string, Mod<T>>): Record<string, T> {
  const out: Record<string, T> = {};
  for (const [path, mod] of Object.entries(mods)) {
    const key = path.split('/').pop()!.replace(/\.ts$/, '');
    out[key] = mod.default;
  }
  return out;
}

export const pages = index(pageMods);
export const articles = index(blogMods);
export const hotels = index(hotelMods);

export interface Resolved<T> {
  content: T;
  /** Faux quand on sert le français faute de traduction : la page part en noindex. */
  translated: boolean;
}

/** Renvoie la variante de locale demandée, avec repli sur le français. */
function pick<T>(content: Partial<Record<Locale, T>> | undefined, locale: Locale): Resolved<T> | null {
  if (!content) return null;
  const exact = content[locale];
  if (exact) return { content: exact, translated: true };
  const fallback = content[DEFAULT_LOCALE];
  if (fallback) return { content: fallback, translated: locale === DEFAULT_LOCALE };
  return null;
}

export function getPage(key: string, locale: Locale): Resolved<LocalizedPage> | null {
  return pick(pages[key], locale);
}
export function getArticle(key: string, locale: Locale): Resolved<LocalizedArticle> | null {
  return pick(articles[key], locale);
}
export function getHotel(key: string, locale: Locale): Resolved<LocalizedHotel> | null {
  return pick(hotels[key], locale);
}

/** Clés d'articles publiés, hors index du blog. */
export const articleKeys = Object.keys(articles).filter((k) => k !== 'blogIndex');
export const hotelKeys = Object.keys(hotels);

/** Vrai si une route dispose d'un module de contenu (au moins en français). */
export function hasContent(key: string, kind: 'page' | 'blog' | 'hotel'): boolean {
  const registry = kind === 'hotel' ? hotels : kind === 'blog' ? articles : pages;
  return Boolean(registry[key]);
}
