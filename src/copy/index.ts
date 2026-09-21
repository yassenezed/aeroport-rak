// Registre de contenu : chaque route possède un module dans pages/, blog/ ou
// hotels/, nommé d'après sa clé de route et exportant par défaut un objet
// indexé par locale.
import { DEFAULT_LOCALE, type Locale } from '../i18n';
import type { PageContent, ArticleContent, HotelContent, LocalizedPage, LocalizedArticle, LocalizedHotel } from './types';

type Mod<T> = { default: T };

// Deux conventions de nommage cohabitent :
//   <cle>.ts          → l'objet complet, indexé par locale (le français y vit) ;
//   <cle>.<locale>.ts → une seule locale, fusionnée dans l'objet ci-dessus.
// La seconde permet d'ajouter une traduction sans retoucher le fichier source.
const pageMods = import.meta.glob<Mod<PageContent>>('./pages/*.ts', { eager: true });
const blogMods = import.meta.glob<Mod<ArticleContent>>('./blog/*.ts', { eager: true });
const hotelMods = import.meta.glob<Mod<HotelContent>>('./hotels/*.ts', { eager: true });

const LOCALE_SUFFIX = /\.(fr|en|es|de|nl|ar)$/;

function index<T extends Record<string, unknown>>(mods: Record<string, Mod<T>>): Record<string, T> {
  const out: Record<string, T> = {};
  const overlays: [string, Locale, unknown][] = [];

  for (const [path, mod] of Object.entries(mods)) {
    const base = path.split('/').pop()!.replace(/\.ts$/, '');
    const suffix = base.match(LOCALE_SUFFIX);
    if (suffix) {
      overlays.push([base.replace(LOCALE_SUFFIX, ''), suffix[1] as Locale, mod.default]);
    } else {
      out[base] = { ...mod.default };
    }
  }

  for (const [key, locale, content] of overlays) {
    if (!out[key]) continue;
    (out[key] as Record<string, unknown>)[locale] = content;
  }
  return out;
}

export const pages = index(pageMods as Record<string, Mod<Record<string, unknown>>>) as Record<string, PageContent>;
export const articles = index(blogMods as Record<string, Mod<Record<string, unknown>>>) as Record<string, ArticleContent>;
export const hotels = index(hotelMods as Record<string, Mod<Record<string, unknown>>>) as Record<string, HotelContent>;

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
