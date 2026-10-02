// Liens d'affiliation des hôtels (Travelpayouts / Booking), un par hôtel.
// Laisser une chaîne vide tant que le lien n'est pas généré : le bouton
// « Voir les prix » n'apparaît que pour les hôtels dont le lien est renseigné.
// À générer dans le compte Travelpayouts du projet 579106 (jamais un ancien lien).
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

export const PRICE_LABEL: Record<string, string> = {
  fr: 'Voir les prix',
  en: 'See prices',
  es: 'Ver precios',
  de: 'Preise ansehen',
  nl: 'Prijzen bekijken',
  ar: 'شاهد الأسعار',
};
