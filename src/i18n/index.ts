import fr from '../locales/fr.json';
import en from '../locales/en.json';
import es from '../locales/es.json';
import de from '../locales/de.json';
import nl from '../locales/nl.json';
import ar from '../locales/ar.json';

export * from './routes';
import { DEFAULT_LOCALE, LOCALES, RTL_LOCALES, type Locale } from './routes';

const DICT = { fr, en, es, de, nl, ar } as const;

/** Traducteur : t('nav.arrivals'). Retombe sur le français si une clé manque. */
export function useTranslations(locale: Locale) {
  const dict: any = DICT[locale] ?? DICT[DEFAULT_LOCALE];
  return function t(key: string): string {
    const parts = key.split('.');
    let node: any = dict;
    for (const p of parts) {
      node = node?.[p];
      if (node === undefined) break;
    }
    if (typeof node === 'string') return node;
    let fallback: any = DICT[DEFAULT_LOCALE];
    for (const p of parts) fallback = fallback?.[p];
    return typeof fallback === 'string' ? fallback : key;
  };
}

export function isRtl(locale: Locale): boolean {
  return RTL_LOCALES.includes(locale);
}

/** Code de langue complet pour og:locale. */
export const OG_LOCALES: Record<Locale, string> = {
  fr: 'fr_FR',
  en: 'en_GB',
  es: 'es_ES',
  de: 'de_DE',
  nl: 'nl_NL',
  ar: 'ar_MA',
};

/** Déduit la locale d'un chemin (/de/arrivals/ → de). */
export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  return (LOCALES as readonly string[]).includes(seg as string) && seg !== DEFAULT_LOCALE
    ? (seg as Locale)
    : DEFAULT_LOCALE;
}
