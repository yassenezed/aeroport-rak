// Sitemap complet : une entrée par URL, avec les alternatives hreflang.
// Les routes sans contenu et les locales non encore traduites sont exclues,
// puisqu'elles sont servies en noindex.
import type { APIRoute } from 'astro';
import { allRoutes, alternatesFor, DEFAULT_LOCALE, ROUTES, type Locale } from '../i18n';
import { pages, articles, hotels } from '../copy';
import { site } from '../data/site';
import lastmod from '../data/lastmod.json';
import { HOTEL_IMAGES, HOTEL_HERO } from '../data/hotelLinks';

/** Photos à déclarer dans le sitemap (Google Images) : page Hôtels et fiches d'avis. */
function imagesFor(key: string): string[] {
  if (key === 'hotels') return Object.values(HOTEL_IMAGES);
  return HOTEL_HERO[key] ? [HOTEL_HERO[key].src] : [];
}

const DIRS: Record<string, string> = { page: 'pages', blog: 'blog', hotel: 'hotels' };

/** Date de dernière modification du contenu de cette page (git), format AAAA-MM-JJ. */
function lastmodFor(key: string, kind: string, locale: Locale): string | undefined {
  const file = `${DIRS[kind]}/${locale === DEFAULT_LOCALE ? key : `${key}.${locale}`}`;
  return (lastmod as Record<string, string>)[file];
}

function registryFor(kind: string) {
  return kind === 'hotel' ? hotels : kind === 'blog' ? articles : pages;
}

/** Vrai si cette route est réellement traduite dans cette locale. */
function isIndexable(key: string, kind: string, locale: Locale): boolean {
  const content = registryFor(kind)[key] as Record<string, unknown> | undefined;
  return Boolean(content && content[locale]);
}

function priorityFor(key: string, locale: Locale): string {
  if (key === 'home') return locale === DEFAULT_LOCALE ? '1.0' : '0.9';
  if (['arrivals', 'departures', 'transfers', 'bookTransfer', 'carRental'].includes(key)) return '0.9';
  if (['privacy', 'terms', 'disclosure', 'contact', 'about'].includes(key)) return '0.3';
  return '0.7';
}

export const GET: APIRoute = async () => {
  const entries = allRoutes().filter(({ key, kind, locale }) => isIndexable(key, kind, locale));

  const urls = entries.map(({ key, kind, locale, path }) => {
    const mod = lastmodFor(key, kind, locale);
    const alts = alternatesFor(key)
      .filter((a) => isIndexable(key, ROUTES[key].kind, a.locale))
      .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.locale}" href="${site.url}${a.path}"/>`)
      .join('\n');
    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${site.url}${alternatesFor(key)[0].path}"/>`;
    return `  <url>
    <loc>${site.url}${path}</loc>
${alts}
${xDefault}${mod ? `\n    <lastmod>${mod}</lastmod>` : ''}${imagesFor(key).map((src) => `\n    <image:image><image:loc>${site.url}${src}</image:loc></image:image>`).join('')}
    <changefreq>weekly</changefreq>
    <priority>${priorityFor(key, locale)}</priority>
  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

export const prerender = true;
