// Génère les images de partage (Open Graph, 1200×630, JPG) :
//  - une image de marque par langue : public/og/aeroportrak-<locale>.jpg
//  - une image par fiche d'hôtel : public/og/hotels/<slug>.jpg
// Usage : node scripts/og.mjs   (sources dans brand/)
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const W = 1200, H = 630;
const FONT_BOLD = '/System/Library/Fonts/Supplemental/Arial Bold.ttf';
const FONT = '/System/Library/Fonts/Supplemental/Arial.ttf';
const FONT_AR = '/System/Library/Fonts/Supplemental/Arial Unicode.ttf';
mkdirSync('public/og/hotels', { recursive: true });

const TEXT = {
  fr: ['Aéroport Marrakech-Ménara', 'Vols, transferts, parking, location de voiture'],
  en: ['Marrakech Menara Airport', 'Flights, transfers, parking, car hire'],
  es: ['Aeropuerto de Marrakech-Menara', 'Vuelos, traslados, parking, alquiler de coches'],
  de: ['Flughafen Marrakesch-Menara', 'Flüge, Transfers, Parken, Mietwagen'],
  nl: ['Luchthaven Marrakech-Menara', 'Vluchten, transfers, parkeren, autohuur'],
  ar: ['مطار مراكش المنارة', 'الرحلات، النقل، المواقف، كراء السيارات'],
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const FAMILY = { [FONT_BOLD]: 'Arial Bold', [FONT]: 'Arial', [FONT_AR]: 'Arial Unicode MS' };
const text = (t, size, font, color, width) =>
  sharp({ text: { text: `<span foreground="${color}">${esc(t)}</span>`, fontfile: font, font: `${FAMILY[font]} ${size}`, dpi: 96, rgba: true, width, wrap: 'word' } }).png().toBuffer();

async function brand(locale) {
  const rtl = locale === 'ar';
  const shade = Buffer.from(`<svg width="${W}" height="${H}"><defs><linearGradient id="g" x1="${rtl ? 1 : 0}" y1="0" x2="${rtl ? 0 : 1}" y2="0"><stop offset="0" stop-color="#15172B" stop-opacity="0.92"/><stop offset="0.62" stop-color="#15172B" stop-opacity="0.55"/><stop offset="1" stop-color="#15172B" stop-opacity="0.05"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><rect x="0" y="${H - 8}" width="${W}" height="8" fill="#E9A13B"/></svg>`);
  const logo = await sharp('public/logo.png').resize({ height: 92 }).toBuffer();
  const [title, sub] = TEXT[locale];
  const tBuf = await text(title, 46, rtl ? FONT_AR : FONT_BOLD, '#FFFFFF', 1070);
  const sBuf = await text(sub, 24, rtl ? FONT_AR : FONT, '#E9A13B', 900);
  const uBuf = await text('aeroportrak.com', 18, FONT, '#FFFFFF', 400);
  const [tm, sm, lm, um] = await Promise.all([tBuf, sBuf, logo, uBuf].map((b) => sharp(b).metadata()));
  const x = (w) => (rtl ? W - 64 - w : 64);
  await sharp('brand/og-base-terminal.jpg').resize(W, H, { fit: 'cover' })
    .composite([
      { input: shade, left: 0, top: 0 },
      { input: logo, left: x(lm.width), top: 60 },
      { input: tBuf, left: x(tm.width), top: H - 96 - sm.height - 14 - tm.height },
      { input: sBuf, left: x(sm.width), top: H - 96 - sm.height },
      { input: uBuf, left: x(um.width), top: H - 58 },
    ])
    .jpeg({ quality: 82, mozjpeg: true }).toFile(`public/og/aeroportrak-${locale}.jpg`);
}

const HOTELS = {
  'la-mamounia-marrakech-aeroport-menara': 'La Mamounia depuis marrakech menara.jpeg',
  'royal-mansour-marrakech-aeroport-menara': 'RM-Marrakech-14-1.webp',
  'es-saadi-marrakech-aeroport-menara': 'Es Saadi marrakech menara.jpeg',
  'riad-yasmine-marrakech-aeroport-menara': 'riad-yasmine.jpg',
  'riad-be-marrakech-aeroport-menara': 'RIAD BE Marrakech Menara.jpg',
};

for (const l of Object.keys(TEXT)) await brand(l);
for (const [slug, src] of Object.entries(HOTELS)) {
  const logo = await sharp('public/logo.png').resize({ height: 60 }).toBuffer();
  const band = Buffer.from(`<svg width="${W}" height="110"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#15172B" stop-opacity="0"/><stop offset="1" stop-color="#15172B" stop-opacity="0.85"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>`);
  await sharp(`brand/hotels-originals/${src}`).resize(W, H, { fit: 'cover' })
    .composite([{ input: band, left: 0, top: H - 110 }, { input: logo, left: 40, top: H - 82 }])
    .jpeg({ quality: 82, mozjpeg: true }).toFile(`public/og/hotels/${slug}.jpg`);
}
console.log('OG images generated');
