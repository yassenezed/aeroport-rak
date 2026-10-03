// Liens d'affiliation des hôtels (Travelpayouts / Booking).
// Ordre de priorité pour le bouton « Voir les prix » :
//   1. le lien propre à l'hôtel (HOTEL_LINKS) ;
//   2. le lien d'affiliation général Booking pour Marrakech (HOTEL_FALLBACK_LINK) ;
//   3. à défaut, une recherche Booking sur le nom de l'hôtel (lien provisoire, non affilié).
// À générer dans le compte Travelpayouts du projet 579106 (jamais un ancien lien du site Casa).
export const HOTEL_LINKS: Record<string, string> = {
  mamounia: '',
  royalMansour: '',
  esSaadi: '',
  riadYasmine: '',
  riadBe: '',
  fourSeasons: '',
  pestanaCr7: '',
  sofitelLoungeSpa: '',
  movenpickMansourEddahbi: '',
  savoyGrandHotel: '',
  kenziMenaraPalace: '',
  radissonCarreEden: '',
  ibisGare: '',
  mandarinOriental: '',
  fairmontRoyalPalm: '',
};

/** Nom officiel (latin) de chaque hôtel, utilisé pour la recherche Booking provisoire. */
const HOTEL_NAMES: Record<string, string> = {
  mamounia: 'La Mamounia Marrakech',
  royalMansour: 'Royal Mansour Marrakech',
  esSaadi: 'Es Saadi Marrakech Resort',
  riadYasmine: 'Riad Yasmine Marrakech',
  riadBe: 'Riad BE Marrakech',
  fourSeasons: 'Four Seasons Resort Marrakech',
  pestanaCr7: 'Pestana CR7 Marrakech',
  sofitelLoungeSpa: 'Sofitel Marrakech Lounge and Spa',
  movenpickMansourEddahbi: 'Movenpick Hotel Mansour Eddahbi Marrakech',
  savoyGrandHotel: 'Savoy Le Grand Hotel Marrakech',
  kenziMenaraPalace: 'Kenzi Menara Palace Marrakech',
  radissonCarreEden: 'Radisson Blu Hotel Marrakech Carre Eden',
  ibisGare: 'ibis Marrakech Gare Voyageurs',
  mandarinOriental: 'Mandarin Oriental Marrakech',
  fairmontRoyalPalm: 'Fairmont Royal Palm Marrakech',
};

/** Lien d'affiliation général Booking (Marrakech), utilisé quand un hôtel n'a pas son propre lien. */
export const HOTEL_FALLBACK_LINK = '';

/** Photos des hôtels pour les cartes (640×400, public/images/hotels/). Originaux dans brand/hotels-originals/. */
export const HOTEL_IMAGES: Record<string, string> = {
  esSaadi: '/images/hotels/es-saadi-marrakech-aeroport-menara.webp',
  fairmontRoyalPalm: '/images/hotels/fairmont-royal-palm-marrakech-aeroport-menara.webp',
  mamounia: '/images/hotels/la-mamounia-hd-marrakech-aeroport-menara.webp',
  mandarinOriental: '/images/hotels/mandarin-oriental-marrakech-aeroport-menara.webp',
  movenpickMansourEddahbi: '/images/hotels/movenpick-mansour-eddahbi-marrakech-aeroport-menara.webp',
  pestanaCr7: '/images/hotels/pestana-cr7-marrakech-aeroport-menara.webp',
  royalMansour: '/images/hotels/royal-mansour-marrakech-aeroport-menara.webp',
  sofitelLoungeSpa: '/images/hotels/sofitel-lounge-spa-marrakech-aeroport-menara.webp',
  fourSeasons: '/images/hotels/four-seasons-marrakech-aeroport-menara.webp',
  savoyGrandHotel: '/images/hotels/savoy-le-grand-hotel-marrakech-aeroport-menara.webp',
  kenziMenaraPalace: '/images/hotels/kenzi-menara-palace-marrakech-aeroport-menara.webp',
  riadYasmine: '/images/hotels/riad-yasmine-marrakech-aeroport-menara.webp',
  riadBe: '/images/hotels/riad-be-marrakech-aeroport-menara.webp',
  ibisGare: '/images/hotels/ibis-marrakech-gare-voyageurs-aeroport-menara.webp',
  radissonCarreEden: '/images/hotels/radisson-blu-carre-eden-marrakech-aeroport-menara.webp',
};

/** Grande photo des pages d'avis, par clé de route (mamounia, mansour…). */
export const HOTEL_HERO: Record<string, { src: string; width: number; height: number }> = {
  yasmine: { src: '/images/hotels/riad-yasmine-marrakech-aeroport-menara-large.webp', width: 900, height: 506 },
  riadbe: { src: '/images/hotels/riad-be-marrakech-aeroport-menara-large.webp', width: 1024, height: 576 },
  mamounia: { src: '/images/hotels/la-mamounia-hd-marrakech-aeroport-menara-large.webp', width: 1200, height: 675 },
  mansour: { src: '/images/hotels/royal-mansour-marrakech-aeroport-menara-large.webp', width: 1200, height: 675 },
  essaadi: { src: '/images/hotels/es-saadi-marrakech-aeroport-menara-large.webp', width: 618, height: 323 },
};

/** Fin du texte alternatif des photos d'hôtels, par langue (SEO image). */
export const HOTEL_ALT_SUFFIX: Record<string, string> = {
  fr: "hôtel près de l'aéroport Marrakech-Ménara",
  en: 'hotel near Marrakech Menara Airport',
  es: 'hotel cerca del aeropuerto de Marrakech-Menara',
  de: 'Hotel nahe Flughafen Marrakesch-Menara',
  nl: 'hotel bij luchthaven Marrakech-Menara',
  ar: 'فندق قرب مطار مراكش المنارة',
};

export const PRICE_LABEL: Record<string, string> = {
  fr: 'Voir les prix',
  en: 'See prices',
  es: 'Ver precios',
  de: 'Preise ansehen',
  nl: 'Prijzen bekijken',
  ar: 'شاهد الأسعار',
};

/** URL du bouton « Voir les prix » et attribut rel adapté (affilié ou non). */
export function hotelPriceLink(id: string, name: string): { href: string; rel: string } {
  const own = HOTEL_LINKS[id];
  if (own) return { href: own, rel: 'sponsored nofollow noopener' };
  if (HOTEL_FALLBACK_LINK) return { href: HOTEL_FALLBACK_LINK, rel: 'sponsored nofollow noopener' };
  const q = encodeURIComponent(HOTEL_NAMES[id] ?? `${name} Marrakech`);
  return { href: `https://www.booking.com/searchresults.html?ss=${q}`, rel: 'nofollow noopener' };
}
