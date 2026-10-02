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

/** Photos des hôtels (fichiers dans public/images/hotels/), ex. fourSeasons: '/images/hotels/four-seasons.webp'. */
export const HOTEL_IMAGES: Record<string, string> = {};

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
