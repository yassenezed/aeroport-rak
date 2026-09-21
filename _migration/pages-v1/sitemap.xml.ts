import type { APIRoute } from 'astro';
import { allPaths, defaultLang } from '../i18n';
import { site } from '../data/site';

const NOINDEX = new Set(['/politique-confidentialite/', '/credits-photos/', '/divulgation-affiliation/']);

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = allPaths()
    .filter((p) => p[defaultLang] && !NOINDEX.has(p.canonical))
    .map((p) => `  <url><loc>${site.url}${p[defaultLang]}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
