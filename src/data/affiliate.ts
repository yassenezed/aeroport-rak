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
  /** Script de suivi Emerald (t = identifiant partenaire). */
  trackingScript: 'https://emrld.ltd/NTU0NTc0.js?t=554574',

  /** Widget de réservation de transferts (iframe). */
  transfer: {
    promoId: '3879',
    campaignId: '1',
    from: 'Marrakesh Menara Airport',
    to: 'Marrakesh',
    country: 'Morocco',
  },

  /** Widget de recherche vols + hôtels. */
  flights: {
    promoId: '3414',
    campaignId: '111',
    origin: 'PAR',
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
// Langues proposées par le formulaire Travelpayouts ; l'arabe retombe sur l'anglais.
const FLIGHT_WIDGET_LOCALES = ['fr', 'en', 'es', 'de', 'nl'];

export function flightWidgetSrc(locale = 'fr'): string {
  const t = travelpayouts;
  const p = new URLSearchParams({
    currency: 'eur',
    trs: t.trs,
    shmarker: t.marker,
    locale: FLIGHT_WIDGET_LOCALES.includes(locale) ? locale : 'en',
    origin: t.flights.origin,
    destination: t.flights.destination,
    stops: 'any',
    show_hotels: 'true',
    powered_by: 'true',
    border_radius: '0',
    plain: 'true',
    color_button: '#3F4BB8',
    color_button_text: '#ffffff',
    promo_id: t.flights.promoId,
    campaign_id: t.flights.campaignId,
  });
  return `https://tpemd.com/content?${p.toString()}`;
}
