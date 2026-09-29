// Vols directs au départ de l'aéroport de Marrakech-Ménara (RAK).
// Source : tableau « Airlines and destinations » de Wikipédia (sourcé ligne par
// ligne : AeroRoutes, OAG, communiqués des compagnies), relevé le 29/09/2026.
// À revoir à chaque changement de saison IATA (fin mars, fin octobre).
import type { Locale } from '../i18n';

export type Region = 'europe' | 'morocco' | 'africa' | 'middleEast' | 'americas';

type Names = { fr: string; en?: string; es?: string; de?: string; nl?: string; ar: string };

export interface City {
  id: string;
  name: Names;
  /** Code pays ISO 3166-1 (le nom est traduit via Intl.DisplayNames). */
  country: string;
  region: Region;
  /** Aéroports desservis, en codes IATA, quand la ville en compte plusieurs. */
  airports?: string;
}

/** Compagnies → destinations (id de ville). `s` = saisonnier, `from` = ouverture future. */
export const airlines: { name: string; routes: { city: string; s?: boolean; from?: string }[] }[] = [];

const route = (spec: string) =>
  spec.split(',').map((x) => x.trim()).filter(Boolean).map((x) => {
    const s = x.endsWith('*');
    const [city, from] = x.replace('*', '').split('@');
    return { city, s: s || undefined, from };
  });
const add = (name: string, spec: string) => airlines.push({ name, routes: route(spec) });

// `*` = saisonnier ; `@AAAA-MM-JJ` = ligne qui ouvre à cette date.
add('Ryanair', 'alicante, barcelona, paris, milan, berlin, birmingham, brussels, budapest, cologne, dole, dublin, edinburgh, eindhoven, errachidia, faro, fes, girona, grancanaria, frankfurt, lisbon, liverpool, london, madrid, manchester, marseille, naples, newcastle, nimes, oujda, perpignan, pisa, porto, rome, santander, seville, stockholm, tangier, tetouan, toulouse, tours, venice, turin, valencia, dusseldorf, zaragoza, krakow*, lanzarote*, larochelle*, limoges*, palma*, tenerife*');
add('easyJet', 'basel, birmingham, bordeaux, bristol, geneva, hamburg, lisbon, lille, liverpool, london, lyon, malaga, manchester, milan, nantes, naples, nice, paris, porto, prague@2026-10-25, strasbourg, toulouse, amsterdam*, belfast*, edinburgh*, glasgow*');
add('Transavia', 'amsterdam, bordeaux, brest, brussels, eindhoven, lyon, montpellier, nantes, paris, rennes, berlin*, boavista*, dakar*, marseille*, praia*, sal*, saovicente*');
add('Royal Air Maroc', 'barcelona, bordeaux, brussels, casablanca, dakhla, laayoune, lyon, marseille, nantes, nice, paris, toulouse, medina*');
add('Wizz Air', 'budapest, london, milan, palermo, sofia, warsaw, bucharest*, cluj*, rome*');
add('Jet2', 'birmingham, glasgow, london, manchester, newcastle, leeds*');
add('Volotea', 'nantes, strasbourg, bilbao*, bordeaux*, lille*, lyon*');
add('TUI fly', 'bologna, brussels, lille, paris, rotterdam');
add('TUI Airways', 'birmingham, london, manchester, bristol*');
add('Norwegian', 'copenhagen, helsinki*, oslo*, stockholm*');
add('Vueling', 'barcelona, bilbao*, paris*, santiago*');
add('British Airways', 'london');
add('Air France', 'paris, nice*');
add('Discover Airlines', 'frankfurt, munich');
add('Eurowings', 'dusseldorf*, prague*');
add('Iberia', 'madrid');
add('Air Europa', 'madrid');
add('Binter', 'funchal*, tenerife*');
add('TAP Air Portugal', 'lisbon');
add('Turkish Airlines', 'istanbul');
add('Qatar Airways', 'doha');
add('Saudia', 'jeddah*');
add('Air Transat', 'montreal');
add('Delta Air Lines', 'atlanta*');
add('United Airlines', 'newyork*');
add('Swiss', 'geneva');
add('Edelweiss', 'zurich*');
add('Chair Airlines', 'zurich');
add('Austrian Airlines', 'vienna*');
add('Aegean Airlines', 'athens*');
add('Aer Lingus', 'dublin*');
add('airBaltic', 'riga*');
add('LOT Polish Airlines', 'warsaw*');
add('Luxair', 'luxembourg*');
add('SAS', 'copenhagen*');
add('Animawings', 'bucharest*');
add('Alexandria Airlines', 'sharm*');
add('European Air Charter', 'sofia*');
add('Arkia', 'telaviv');

const C = (id: string, country: string, region: Region, name: Names, airports?: string): City => ({ id, name, country, region, airports });
const same = (n: string, ar: string): Names => ({ fr: n, ar });

export const cities: City[] = [
  C('paris', 'FR', 'europe', { fr: 'Paris', es: 'París', nl: 'Parijs', ar: 'باريس' }, 'CDG · ORY · BVA · XCR'),
  C('london', 'GB', 'europe', { fr: 'Londres', en: 'London', es: 'Londres', de: 'London', nl: 'Londen', ar: 'لندن' }, 'LGW · LHR · LTN · STN · SEN'),
  C('athens', 'GR', 'europe', { fr: 'Athènes', en: 'Athens', es: 'Atenas', de: 'Athen', nl: 'Athene', ar: 'أثينا' }),
  C('dublin', 'IE', 'europe', { fr: 'Dublin', es: 'Dublín', ar: 'دبلن' }),
  C('riga', 'LV', 'europe', same('Riga', 'ريغا')),
  C('madrid', 'ES', 'europe', same('Madrid', 'مدريد')),
  C('nice', 'FR', 'europe', { fr: 'Nice', es: 'Niza', de: 'Nizza', ar: 'نيس' }),
  C('montreal', 'CA', 'americas', { fr: 'Montréal', en: 'Montreal', es: 'Montreal', de: 'Montreal', nl: 'Montreal', ar: 'مونتريال' }),
  C('sharm', 'EG', 'africa', { fr: 'Charm el-Cheikh', en: 'Sharm El Sheikh', es: 'Sharm el-Sheij', de: 'Scharm El-Scheich', nl: 'Sharm-el-Sheikh', ar: 'شرم الشيخ' }),
  C('bucharest', 'RO', 'europe', { fr: 'Bucarest', en: 'Bucharest', es: 'Bucarest', de: 'Bukarest', nl: 'Boekarest', ar: 'بوخارست' }),
  C('telaviv', 'IL', 'middleEast', same('Tel Aviv', 'تل أبيب')),
  C('vienna', 'AT', 'europe', { fr: 'Vienne', en: 'Vienna', es: 'Viena', de: 'Wien', nl: 'Wenen', ar: 'فيينا' }),
  C('funchal', 'PT', 'europe', { fr: 'Funchal (Madère)', en: 'Funchal (Madeira)', es: 'Funchal (Madeira)', de: 'Funchal (Madeira)', nl: 'Funchal (Madeira)', ar: 'فونشال (ماديرا)' }),
  C('tenerife', 'ES', 'europe', same('Tenerife', 'تينيريفي'), 'TFN · TFS'),
  C('zurich', 'CH', 'europe', { fr: 'Zurich', es: 'Zúrich', de: 'Zürich', nl: 'Zürich', ar: 'زيورخ' }),
  C('atlanta', 'US', 'americas', same('Atlanta', 'أتلانتا')),
  C('frankfurt', 'DE', 'europe', { fr: 'Francfort', en: 'Frankfurt', es: 'Fráncfort', de: 'Frankfurt', nl: 'Frankfurt', ar: 'فرانكفورت' }, 'FRA · HHN'),
  C('munich', 'DE', 'europe', { fr: 'Munich', es: 'Múnich', de: 'München', nl: 'München', ar: 'ميونخ' }),
  C('basel', 'FR', 'europe', { fr: 'Bâle-Mulhouse', en: 'Basel-Mulhouse', es: 'Basilea-Mulhouse', de: 'Basel-Mülhausen', nl: 'Bazel-Mulhouse', ar: 'بازل-مولوز' }),
  C('birmingham', 'GB', 'europe', same('Birmingham', 'برمنغهام')),
  C('bordeaux', 'FR', 'europe', { fr: 'Bordeaux', es: 'Burdeos', ar: 'بوردو' }),
  C('bristol', 'GB', 'europe', same('Bristol', 'بريستول')),
  C('geneva', 'CH', 'europe', { fr: 'Genève', en: 'Geneva', es: 'Ginebra', de: 'Genf', nl: 'Genève', ar: 'جنيف' }),
  C('hamburg', 'DE', 'europe', { fr: 'Hambourg', en: 'Hamburg', es: 'Hamburgo', de: 'Hamburg', nl: 'Hamburg', ar: 'هامبورغ' }),
  C('lisbon', 'PT', 'europe', { fr: 'Lisbonne', en: 'Lisbon', es: 'Lisboa', de: 'Lissabon', nl: 'Lissabon', ar: 'لشبونة' }),
  C('lille', 'FR', 'europe', same('Lille', 'ليل')),
  C('liverpool', 'GB', 'europe', same('Liverpool', 'ليفربول')),
  C('lyon', 'FR', 'europe', same('Lyon', 'ليون')),
  C('malaga', 'ES', 'europe', { fr: 'Malaga', en: 'Málaga', es: 'Málaga', de: 'Málaga', nl: 'Málaga', ar: 'مالقة' }),
  C('manchester', 'GB', 'europe', same('Manchester', 'مانشستر')),
  C('milan', 'IT', 'europe', { fr: 'Milan', es: 'Milán', de: 'Mailand', nl: 'Milaan', ar: 'ميلانو' }, 'MXP · BGY'),
  C('nantes', 'FR', 'europe', same('Nantes', 'نانت')),
  C('naples', 'IT', 'europe', { fr: 'Naples', es: 'Nápoles', de: 'Neapel', nl: 'Napels', ar: 'نابولي' }),
  C('porto', 'PT', 'europe', { fr: 'Porto', es: 'Oporto', ar: 'بورتو' }),
  C('prague', 'CZ', 'europe', { fr: 'Prague', es: 'Praga', de: 'Prag', nl: 'Praag', ar: 'براغ' }),
  C('strasbourg', 'FR', 'europe', { fr: 'Strasbourg', es: 'Estrasburgo', de: 'Straßburg', nl: 'Straatsburg', ar: 'ستراسبورغ' }),
  C('toulouse', 'FR', 'europe', same('Toulouse', 'تولوز')),
  C('amsterdam', 'NL', 'europe', { fr: 'Amsterdam', es: 'Ámsterdam', ar: 'أمستردام' }),
  C('belfast', 'GB', 'europe', same('Belfast', 'بلفاست')),
  C('edinburgh', 'GB', 'europe', { fr: 'Édimbourg', en: 'Edinburgh', es: 'Edimburgo', de: 'Edinburgh', nl: 'Edinburgh', ar: 'إدنبرة' }),
  C('glasgow', 'GB', 'europe', same('Glasgow', 'غلاسكو')),
  C('sofia', 'BG', 'europe', { fr: 'Sofia', es: 'Sofía', ar: 'صوفيا' }),
  C('dusseldorf', 'DE', 'europe', same('Düsseldorf', 'دوسلدورف'), 'DUS · NRN'),
  C('newcastle', 'GB', 'europe', same('Newcastle', 'نيوكاسل')),
  C('leeds', 'GB', 'europe', same('Leeds-Bradford', 'ليدز برادفورد')),
  C('warsaw', 'PL', 'europe', { fr: 'Varsovie', en: 'Warsaw', es: 'Varsovia', de: 'Warschau', nl: 'Warschau', ar: 'وارسو' }),
  C('luxembourg', 'LU', 'europe', { fr: 'Luxembourg', es: 'Luxemburgo', de: 'Luxemburg', nl: 'Luxemburg', ar: 'لوكسمبورغ' }),
  C('copenhagen', 'DK', 'europe', { fr: 'Copenhague', en: 'Copenhagen', es: 'Copenhague', de: 'Kopenhagen', nl: 'Kopenhagen', ar: 'كوبنهاغن' }),
  C('helsinki', 'FI', 'europe', same('Helsinki', 'هلسنكي')),
  C('oslo', 'NO', 'europe', same('Oslo', 'أوسلو')),
  C('stockholm', 'SE', 'europe', { fr: 'Stockholm', es: 'Estocolmo', ar: 'ستوكهولم' }),
  C('doha', 'QA', 'middleEast', same('Doha', 'الدوحة')),
  C('barcelona', 'ES', 'europe', { fr: 'Barcelone', en: 'Barcelona', es: 'Barcelona', de: 'Barcelona', nl: 'Barcelona', ar: 'برشلونة' }),
  C('brussels', 'BE', 'europe', { fr: 'Bruxelles', en: 'Brussels', es: 'Bruselas', de: 'Brüssel', nl: 'Brussel', ar: 'بروكسل' }, 'BRU · CRL'),
  C('casablanca', 'MA', 'morocco', same('Casablanca', 'الدار البيضاء')),
  C('dakhla', 'MA', 'morocco', same('Dakhla', 'الداخلة')),
  C('laayoune', 'MA', 'morocco', { fr: 'Laâyoune', en: 'Laayoune', es: 'El Aaiún', de: 'Laâyoune', nl: 'Laayoune', ar: 'العيون' }),
  C('marseille', 'FR', 'europe', { fr: 'Marseille', es: 'Marsella', ar: 'مرسيليا' }),
  C('medina', 'SA', 'middleEast', { fr: 'Médine', en: 'Medina', es: 'Medina', de: 'Medina', nl: 'Medina', ar: 'المدينة المنورة' }),
  C('alicante', 'ES', 'europe', same('Alicante', 'أليكانتي')),
  C('berlin', 'DE', 'europe', { fr: 'Berlin', es: 'Berlín', ar: 'برلين' }),
  C('budapest', 'HU', 'europe', same('Budapest', 'بودابست')),
  C('cologne', 'DE', 'europe', { fr: 'Cologne', en: 'Cologne', es: 'Colonia', de: 'Köln', nl: 'Keulen', ar: 'كولونيا' }),
  C('dole', 'FR', 'europe', same('Dole-Jura', 'دول-جورا')),
  C('eindhoven', 'NL', 'europe', same('Eindhoven', 'آيندهوفن')),
  C('errachidia', 'MA', 'morocco', same('Errachidia', 'الرشيدية')),
  C('faro', 'PT', 'europe', same('Faro', 'فارو')),
  C('fes', 'MA', 'morocco', { fr: 'Fès', en: 'Fez', es: 'Fez', de: 'Fès', nl: 'Fez', ar: 'فاس' }),
  C('girona', 'ES', 'europe', { fr: 'Gérone', en: 'Girona', es: 'Girona', de: 'Girona', nl: 'Girona', ar: 'جيرونا' }),
  C('grancanaria', 'ES', 'europe', { fr: 'Grande Canarie', en: 'Gran Canaria', es: 'Gran Canaria', de: 'Gran Canaria', nl: 'Gran Canaria', ar: 'غران كناريا' }),
  C('oujda', 'MA', 'morocco', same('Oujda', 'وجدة')),
  C('nimes', 'FR', 'europe', { fr: 'Nîmes', es: 'Nimes', ar: 'نيم' }),
  C('perpignan', 'FR', 'europe', same('Perpignan', 'بربينيان')),
  C('pisa', 'IT', 'europe', { fr: 'Pise', en: 'Pisa', es: 'Pisa', de: 'Pisa', nl: 'Pisa', ar: 'بيزا' }),
  C('rome', 'IT', 'europe', { fr: 'Rome', es: 'Roma', de: 'Rom', nl: 'Rome', ar: 'روما' }, 'CIA · FCO'),
  C('santander', 'ES', 'europe', same('Santander', 'سانتاندير')),
  C('seville', 'ES', 'europe', { fr: 'Séville', en: 'Seville', es: 'Sevilla', de: 'Sevilla', nl: 'Sevilla', ar: 'إشبيلية' }),
  C('tangier', 'MA', 'morocco', { fr: 'Tanger', en: 'Tangier', es: 'Tánger', de: 'Tanger', nl: 'Tanger', ar: 'طنجة' }),
  C('tetouan', 'MA', 'morocco', { fr: 'Tétouan', en: 'Tetouan', es: 'Tetuán', de: 'Tétouan', nl: 'Tetouan', ar: 'تطوان' }),
  C('tours', 'FR', 'europe', same('Tours', 'تور')),
  C('venice', 'IT', 'europe', { fr: 'Venise (Trévise)', en: 'Venice (Treviso)', es: 'Venecia (Treviso)', de: 'Venedig (Treviso)', nl: 'Venetië (Treviso)', ar: 'البندقية (تريفيزو)' }),
  C('turin', 'IT', 'europe', { fr: 'Turin', es: 'Turín', de: 'Turin', nl: 'Turijn', ar: 'تورينو' }),
  C('valencia', 'ES', 'europe', { fr: 'Valence', en: 'Valencia', es: 'Valencia', de: 'Valencia', nl: 'Valencia', ar: 'فالنسيا' }),
  C('zaragoza', 'ES', 'europe', { fr: 'Saragosse', en: 'Zaragoza', es: 'Zaragoza', de: 'Saragossa', nl: 'Zaragoza', ar: 'سرقسطة' }),
  C('krakow', 'PL', 'europe', { fr: 'Cracovie', en: 'Kraków', es: 'Cracovia', de: 'Krakau', nl: 'Krakau', ar: 'كراكوف' }),
  C('lanzarote', 'ES', 'europe', same('Lanzarote', 'لانزاروتي')),
  C('larochelle', 'FR', 'europe', same('La Rochelle', 'لا روشيل')),
  C('limoges', 'FR', 'europe', same('Limoges', 'ليموج')),
  C('palma', 'ES', 'europe', { fr: 'Palma de Majorque', en: 'Palma de Mallorca', es: 'Palma de Mallorca', de: 'Palma de Mallorca', nl: 'Palma de Mallorca', ar: 'بالما دي مايوركا' }),
  C('jeddah', 'SA', 'middleEast', { fr: 'Djeddah', en: 'Jeddah', es: 'Yeda', de: 'Dschidda', nl: 'Jeddah', ar: 'جدة' }),
  C('brest', 'FR', 'europe', same('Brest', 'بريست')),
  C('montpellier', 'FR', 'europe', same('Montpellier', 'مونبلييه')),
  C('rennes', 'FR', 'europe', same('Rennes', 'رين')),
  C('boavista', 'CV', 'africa', same('Boa Vista', 'بوا فيستا')),
  C('dakar', 'SN', 'africa', same('Dakar', 'داكار')),
  C('praia', 'CV', 'africa', same('Praia', 'برايا')),
  C('sal', 'CV', 'africa', same('Sal', 'سال')),
  C('saovicente', 'CV', 'africa', same('São Vicente', 'ساو فيسنتي')),
  C('bologna', 'IT', 'europe', { fr: 'Bologne', en: 'Bologna', es: 'Bolonia', de: 'Bologna', nl: 'Bologna', ar: 'بولونيا' }),
  C('rotterdam', 'NL', 'europe', same('Rotterdam', 'روتردام')),
  C('istanbul', 'TR', 'middleEast', { fr: 'Istanbul', es: 'Estambul', ar: 'إسطنبول' }),
  C('newyork', 'US', 'americas', { fr: 'New York (Newark)', es: 'Nueva York (Newark)', ar: 'نيويورك (نيوآرك)' }),
  C('bilbao', 'ES', 'europe', same('Bilbao', 'بلباو')),
  C('santiago', 'ES', 'europe', { fr: 'Saint-Jacques-de-Compostelle', en: 'Santiago de Compostela', es: 'Santiago de Compostela', de: 'Santiago de Compostela', nl: 'Santiago de Compostela', ar: 'سانتياغو دي كومبوستيلا' }),
  C('palermo', 'IT', 'europe', { fr: 'Palerme', en: 'Palermo', es: 'Palermo', de: 'Palermo', nl: 'Palermo', ar: 'باليرمو' }),
  C('cluj', 'RO', 'europe', same('Cluj-Napoca', 'كلوج نابوكا')),
];

/** Nom d'une ville dans la langue demandée (repli : anglais, puis français). */
export const cityName = (c: City, l: Locale) => c.name[l] ?? c.name.en ?? c.name.fr;

/** Nom de pays localisé (ICU de Node, au build). */
export const countryName = (cc: string, l: Locale) => new Intl.DisplayNames([l], { type: 'region' }).of(cc) ?? cc;

/** Compagnies desservant une ville, avec drapeau saisonnier / date d'ouverture. */
export function airlinesFor(cityId: string) {
  return airlines.flatMap((a) => a.routes.filter((r) => r.city === cityId).map((r) => ({ name: a.name, s: r.s, from: r.from })));
}

export const stats = {
  cities: cities.length,
  airlines: airlines.length,
  countries: new Set(cities.map((c) => c.country)).size,
};
