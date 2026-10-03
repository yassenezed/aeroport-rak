// Thèmes du blog : ordre d'affichage, articles rattachés et icône.
// Utilisé par l'index du blog et par les « articles liés » en bas de chaque article.
export const BLOG_THEMES: { id: string; icon: string; keys: string[] }[] = [
  { id: 'airport', icon: 'plane-landing', keys: ['toCity', 'layover', 'fastTrack', 'vipLounges', 'parkingRates', 'airportCode'] },
  { id: 'transport', icon: 'bus', keys: ['taxiTips', 'bus19'] },
  { id: 'rental', icon: 'car', keys: ['carRentalGuide', 'longTermCar'] },
  { id: 'distances', icon: 'map', keys: ['distEssaouira', 'distOuarzazate', 'distAgadir', 'distCasa', 'distFes'] },
  { id: 'practical', icon: 'wallet', keys: ['money', 'simCards'] },
];

/** Articles à suggérer après `key` : même thème d'abord, puis les autres thèmes dans l'ordre. */
export function relatedKeys(key: string, count = 3): string[] {
  const own = BLOG_THEMES.find((th) => th.keys.includes(key));
  const same = own ? own.keys.filter((k) => k !== key) : [];
  const rest = BLOG_THEMES.filter((th) => th !== own).flatMap((th) => th.keys);
  return [...same, ...rest].slice(0, count);
}
