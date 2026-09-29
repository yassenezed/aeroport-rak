// ─────────────────────────────────────────────────────────────────────────────
// Paramètres d'affiliation et de mesure — point unique de configuration.
//
// À FOURNIR / CONFIRMER par le propriétaire du site :
//  - `travelpayouts.trs` et `.marker` : identifiants du compte Travelpayouts
//    (repris du compte existant ; à remplacer si un sous-ID dédié est créé
//    pour AirportRAK afin de suivre les revenus séparément).
//  - `travelpayouts.transfer.promoId` / `.campaignId` et `flights.*` :
//    valeurs affichées dans le code du widget généré côté Travelpayouts.
//  - `gaId` : identifiant de mesure GA4 du nouveau domaine (format G-XXXXXXX).
//    Laissé vide, aucun script d'analytics n'est injecté.
// ─────────────────────────────────────────────────────────────────────────────

export const gaId = '';

export const travelpayouts = {
  trs: '554574',
  marker: '697149',
  /** Travelpayouts Drive (compte 579106, propre à AirportRAK) : chargé en différé
   *  après l'affichage de la page, voir BaseLayout. */
  trackingScript: 'https://emrld.ltd/NTc5MTA2.js?t=579106',

  /** Widget de réservation de transferts (iframe). */
  transfer: {
    promoId: '3879',
    campaignId: '1',
    from: 'Marrakesh Menara Airport',
    to: 'Marrakesh',
    country: 'Morocco',
  },

  /** Widget de recherche vols + hôtels (Aviasales, promo 7879). */
  flights: {
    trs: '579106',
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
    trs: t.flights.trs,
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
