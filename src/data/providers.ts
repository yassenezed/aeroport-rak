export type AffiliateId = string;

export function buildAffiliateUrl(provider: AffiliateId, sub?: string): string {
  const p = (provider || '').toLowerCase();
  if (p.includes('vip') || p.includes('executive')) {
    return '/transfert-vip-aeroport-marrakech/';
  }
  if (p.includes('shared') || p.includes('budget')) {
    return '/transfert-aeroport-marrakech-pas-cher/';
  }
  if (p.includes('esim') || p.includes('airalo') || p.includes('holafly') || p.includes('sim')) {
    return '/esim-maroc/';
  }
  if (p.includes('lounge') || p.includes('priority') || p.includes('pass') || p.includes('salon')) {
    return '/guide-aeroport-marrakech/';
  }
  if (p.includes('car') || p.includes('discover') || p.includes('hertz') || p.includes('europcar') || p.includes('sixt') || p.includes('rental') || p.includes('economybookings') || p.includes('localrent') || p.includes('getrentacar')) {
    return '/location-voiture-aeroport-marrakech/';
  }
  if (p.includes('hotel') || p.includes('booking') || p.includes('riad') || p.includes('stay')) {
    return '/hotels-pres-aeroport-marrakech/';
  }
  if (p.includes('guide') || p.includes('activity') || p.includes('tour') || p.includes('getyourguide')) {
    return '/guide-touristique/';
  }
  if (p.includes('flight') || p.includes('airline') || p.includes('skyscanner') || p.includes('vol')) {
    return '/vols-marrakech/';
  }
  if (p.includes('taxi')) {
    return '/taxi-aeroport-marrakech/';
  }
  return '/reserver-transfert/';
}

export const providers: Record<string, { name: string }> = new Proxy({}, {
  get: (_target, prop) => {
    const key = String(prop).toLowerCase();
    if (key.includes('vip') || key.includes('executive')) {
      return { name: 'Transfert VIP' };
    }
    if (key.includes('shared') || key.includes('budget') || key.includes('intui')) {
      return { name: 'Transfert économique / partagé' };
    }
    return { name: 'Transfert privé aéroport' };
  }
});
