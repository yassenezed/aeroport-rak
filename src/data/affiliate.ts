// ─────────────────────────────────────────────────────────────────────────────
// Paramètres d'affiliation et de mesure — point unique de configuration.
//
// À FOURNIR / CONFIRMER par le propriétaire du site :
//  - `travelpayouts.trs` (projet AirportRAK, 579106) et `.marker` (compte) :
//    identifiants Travelpayouts utilisés par tous les widgets et par Drive.
//  - `travelpayouts.transfer.promoId` / `.campaignId` et `flights.*` :
//    valeurs affichées dans le code du widget généré côté Travelpayouts.
//  - `gaId` : identifiant de mesure GA4 du nouveau domaine (format G-XXXXXXX).
//    Laissé vide, aucun script d'analytics n'est injecté.
// ─────────────────────────────────────────────────────────────────────────────

export const gaId = '';

export const travelpayouts = {
  trs: '579106',
  marker: '697149',
  /** Travelpayouts Drive du projet AirportRAK : chargé en différé après
   *  l'affichage de la page, voir BaseLayout. */
  trackingScript: 'https://emrld.ltd/NTc5MTA2.js?t=579106',

  /** Widget de réservation de transferts (iframe). */
  transfer: {
    promoId: '3879',
    campaignId: '1',
    from: 'Marrakesh Menara Airport',
    to: 'Marrakesh',
    country: 'Morocco',
  },

  /** Widget eSIM Airalo (promo 8588). */
  esim: {
    promoId: '8588',
    campaignId: '541',
  },

  /** Widget indemnisation vol retardé / annulé (promo 8679). */
  compensation: {
    promoId: '8679',
    campaignId: '120',
  },

  /** Widget de recherche vols + hôtels (Aviasales, promo 7879). */
  flights: {
    promoId: '7879',
    campaignId: '100',
    searchUrl: 'www.aviasales.com/search',
    destination: 'RAK',
  },
};

/** URL du widget transferts (à insérer dans un iframe srcdoc). */
export function transferWidgetSrc(locale = 'fr'): string {
  const t = travelpayouts;
  const p = new URLSearchParams({
    currency: 'EUR',
    trs: t.trs,
    shmarker: t.marker,
    locale,
    from: t.transfer.from,
    to: t.transfer.to,
    country: t.transfer.country,
    powered_by: 'true',
    transfer_options_limit: '10',
    transfer_options: 'MCR',
    disable_currency_selector: 'true',
    hide_form_extras: 'true',
    hide_external_links: 'true',
    campaign_id: t.transfer.campaignId,
    promo_id: t.transfer.promoId,
  });
  return `https://tpemd.com/content?${p.toString()}`;
}

/** URL du widget vols + hôtels. */
// Langues prises en charge par le formulaire Aviasales ; l'arabe retombe sur l'anglais.
const FLIGHT_WIDGET_LOCALES = ['fr', 'en', 'es', 'de', 'nl'];

// Ville de départ et devise pré-remplies selon le marché de chaque langue.
const FLIGHT_MARKETS: Record<string, { origin: string; currency: string }> = {
  fr: { origin: 'PAR', currency: 'eur' }, // Paris
  en: { origin: 'LON', currency: 'gbp' }, // Londres
  es: { origin: 'MAD', currency: 'eur' }, // Madrid
  de: { origin: 'FRA', currency: 'eur' }, // Francfort
  nl: { origin: 'AMS', currency: 'eur' }, // Amsterdam
  ar: { origin: 'RUH', currency: 'usd' }, // Riyad
};

export function flightWidgetSrc(locale = 'fr'): string {
  const t = travelpayouts;
  const market = FLIGHT_MARKETS[locale] ?? FLIGHT_MARKETS.fr;
  const p = new URLSearchParams({
    currency: market.currency,
    trs: t.trs,
    shmarker: t.marker,
    show_hotels: 'true',
    powered_by: 'true',
    locale: FLIGHT_WIDGET_LOCALES.includes(locale) ? locale : 'en',
    searchUrl: t.flights.searchUrl,
    origin: market.origin,
    destination: t.flights.destination,
    // Charte AirportRAK : bleu Majorelle, safran, indigo.
    primary_override: '#3F4BB8',
    color_button: '#3F4BB8',
    color_icons: '#E9A13B',
    dark: '#15172B',
    light: '#FFFFFF',
    secondary: '#FFFFFF',
    special: '#DDE1EC',
    color_focused: '#3F4BB8',
    border_radius: '8',
    // Sans cadre propre : le conteneur du site fait déjà office de carte.
    plain: 'true',
    promo_id: t.flights.promoId,
    campaign_id: t.flights.campaignId,
  });
  return `https://tpemd.com/content?${p.toString()}`;
}

/** URL du widget eSIM Airalo. Langues du widget : anglais, russe, espagnol. */
const ESIM_WIDGET_LOCALES = ['en', 'es'];

export function esimWidgetSrc(locale = 'fr'): string {
  const t = travelpayouts;
  const p = new URLSearchParams({
    trs: t.trs,
    shmarker: t.marker,
    locale: ESIM_WIDGET_LOCALES.includes(locale) ? locale : 'en',
    powered_by: 'true',
    // Charte AirportRAK : bleu Majorelle, indigo.
    color_button: '#3F4BB8',
    color_focused: '#3F4BB8',
    secondary: '#FFFFFF',
    dark: '#15172B',
    light: '#FFFFFF',
    special: '#DDE1EC',
    border_radius: '8',
    plain: 'true',
    no_labels: 'true',
    promo_id: t.esim.promoId,
    campaign_id: t.esim.campaignId,
  });
  return `https://tpemd.com/content?${p.toString()}`;
}

/** URL du widget indemnisation vol (formulaire AirHelp dans une iframe).
 *  Le formulaire n'accepte aucun réglage de couleur, seulement la langue :
 *  fr, en, es, de, nl existent ; l'arabe n'existe pas et retombe sur l'anglais. */
const COMPENSATION_WIDGET_LOCALES = ['fr', 'en', 'de', 'nl', 'es'];

export function compensationWidgetSrc(locale = 'fr'): string {
  const t = travelpayouts;
  const p = new URLSearchParams({
    trs: t.trs,
    shmarker: t.marker,
    lang: COMPENSATION_WIDGET_LOCALES.includes(locale) ? locale : 'en',
    powered_by: 'true',
    campaign_id: t.compensation.campaignId,
    promo_id: t.compensation.promoId,
  });
  return `https://tpemd.com/content?${p.toString()}`;
}
