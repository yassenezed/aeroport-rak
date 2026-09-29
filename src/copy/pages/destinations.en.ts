import type { LocalizedPage } from '../types';

export default {
  title: "Marrakech Airport Destinations: all direct flights",
  description: "Over 100 cities by direct flight from Marrakech Menara Airport: 39 airlines, 33 countries, seasonal and domestic routes. Up-to-date searchable list.",
  eyebrow: "Direct flights · updated September 2026",
  h1: "Marrakech Menara Airport Destinations",
  lede: "Marrakech Menara Airport (RAK) has non-stop flights to more than a hundred cities, mostly in Europe but also in Morocco, the Middle East and North America. Here are all the destinations, the airlines that fly them and the seasonal routes.",
  highlights: [
    { icon: 'map', value: "106 cities", label: "Direct destinations" },
    { icon: 'plane', value: "39 airlines", label: "Scheduled and seasonal" },
    { icon: 'map-pin', value: "33 countries", label: "On 3 continents" },
  ],
  destinations: {
    airlinesHeading: "Airlines at Marrakech airport",
    airlinesIntro: "European low-cost carriers dominate: Ryanair alone links more than fifty cities to RAK. Here are the main airlines and how many destinations each serves.",
    tableHeading: "All destinations from Marrakech Menara Airport",
    tableIntro: "Cities served non-stop, with the airlines operating them. Type a city, country or airline, or filter by region.",
    regionsHeading: "Destinations by region",
  },
  services: {
    heading: "Planning your flight to or from Marrakech",
    intro: "Find the right ticket, then everything that happens on the ground once you land.",
    items: [
      { icon: 'plane', key: 'flights', title: "Compare flights", text: "Prices of direct flights to Marrakech from your city.", cta: "Search flights" },
      { icon: 'building', key: 'hotels', title: "Hotels in Marrakech", text: "Riads, palaces and hotels near the airport.", cta: "See hotels" },
      { icon: 'van', key: 'bookTransfer', title: "Airport transfer", text: "Driver with your name, fixed price per vehicle from €27.", cta: "Book" },
      { icon: 'tag', key: 'carRental', title: "Car hire", text: "Desks in the terminal, prices and contract traps.", cta: "Compare" },
      { icon: 'plane-landing', key: 'arrivals', title: "Live arrivals", text: "Track a flight landing in Marrakech.", cta: "See arrivals" },
      { icon: 'plane-takeoff', key: 'departures', title: "Live departures", text: "Times, delays and tips before take-off.", cta: "See departures" },
    ],
  },
  body: `
<h2>Direct flights to the UK and Europe from Marrakech</h2>
<p>Nearly eight in ten destinations from Marrakech airport are in Europe. The <strong>United Kingdom</strong> is one of the best-connected markets: London is served from five airports (Gatwick, Heathrow, Luton, Stansted and Southend) by British Airways, easyJet, Ryanair, Jet2, TUI and Wizz Air, and there are direct flights from Manchester, Birmingham, Bristol, Liverpool, Newcastle, Leeds-Bradford, Edinburgh, Glasgow and Belfast. Dublin is served by Ryanair and, in winter, Aer Lingus.</p>
<p><strong>France</strong> has around twenty cities, with Paris served by four airports, followed by <strong>Spain</strong>, <strong>Italy</strong> and <strong>Germany</strong>. Routes to Belgium, the Netherlands, Switzerland and Portugal run all year. Winter, the mildest season in Marrakech, adds flights to Scandinavia, Austria, Greece, Poland and the Baltics.</p>

<h2>Domestic flights in Morocco from Marrakech</h2>
<p>Royal Air Maroc links Marrakech with <strong>Casablanca</strong>, <strong>Dakhla</strong> and <strong>Laayoune</strong>. Ryanair flies to <strong>Fez</strong>, <strong>Tangier</strong>, <strong>Tetouan</strong>, <strong>Oujda</strong> and <strong>Errachidia</strong>, often at low fares. There are no scheduled flights to Agadir, Essaouira or Ouarzazate: those are reached by road, as shown in the table at the bottom of the page.</p>

<h2>Long-haul flights: North America and the Middle East</h2>
<p>Since 2024, Marrakech Menara Airport has had non-stop links to North America: <strong>Montreal</strong> with Air Transat, and seasonally <strong>Atlanta</strong> with Delta and <strong>New York-Newark</strong> with United. To the east, Qatar Airways serves <strong>Doha</strong> and Turkish Airlines <strong>Istanbul</strong>, two connecting hubs for Asia. Saudia flies to <strong>Jeddah</strong> and Royal Air Maroc to <strong>Medina</strong> in season.</p>

<h2>Seasonal flights: what changes between summer and winter</h2>
<p>The schedule changes twice a year, at the end of March and the end of October. Winter is the busiest season: Northern Europeans escape the cold and airlines open routes to Copenhagen, Oslo, Helsinki, Vienna, Warsaw and Riga. In summer, Transavia adds flights to Cape Verde and Dakar, and Ryanair to the Canaries and Palma. Routes marked "seasonal" in the table do not run all year, so check dates before booking.</p>

<h2>Finding a cheap flight to or from Marrakech</h2>
<ul>
<li><strong>Compare low-cost and full-service airlines</strong>: from London, six airlines compete in the same week.</li>
<li><strong>Book six to eight weeks ahead</strong>, earlier for school holidays, Christmas and Easter, the most expensive periods.</li>
<li><strong>Check the departure airport</strong>: Southend and Stansted are further from central London than Gatwick; Beauvais and Vatry are far from Paris.</li>
<li><strong>Aim for a daytime landing</strong>: evening flights arrive at the airport's busiest time and after the last bus 19.</li>
</ul>
<p>Our <a href="/en/flights/">Marrakech flight comparison</a> shows prices across all airlines. To follow a flight in real time, see the airport's <a href="/en/arrivals/">arrivals</a> and <a href="/en/departures/">departures</a>.</p>

<h2>From the airport by road</h2>
<p>Once in Marrakech, the region's main destinations are reached by car or <a href="/en/book-transfer/">private transfer</a>:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Destination</th><th>Distance</th><th>Time</th><th>Private transfer</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Medina / Jemaa el-Fna</strong></td><td class="num">6 km</td><td class="num">15–30 min</td><td class="num">from €27</td></tr>
<tr><td><strong>Agafay desert</strong></td><td class="num">30 km</td><td class="num">40–50 min</td><td class="num">€35–55</td></tr>
<tr><td><strong>Ourika valley</strong></td><td class="num">40 km</td><td class="num">1 h</td><td class="num">€45–65</td></tr>
<tr><td><strong><a href="/en/blog/distance-essaouira-marrakech-airport/">Essaouira</a></strong></td><td class="num">180 km</td><td class="num">2 h 30</td><td class="num">≈ €95</td></tr>
<tr><td><strong><a href="/en/blog/distance-ouarzazate-marrakech-airport/">Ouarzazate</a></strong></td><td class="num">200 km</td><td class="num">4 h</td><td class="num">€120–160</td></tr>
<tr><td><strong><a href="/en/blog/distance-casablanca-marrakech-airport/">Casablanca</a></strong></td><td class="num">240 km</td><td class="num">2 h 30</td><td class="num">€130–170</td></tr>
<tr><td><strong><a href="/en/blog/distance-agadir-marrakech-airport/">Agadir</a></strong></td><td class="num">250 km</td><td class="num">3 h</td><td class="num">€130–170</td></tr>
<tr><td><strong><a href="/en/blog/distance-fes-marrakech-airport/">Fez</a></strong></td><td class="num">530 km</td><td class="num">6 h</td><td class="num">on request</td></tr>
</tbody>
</table>
</div>
<p>The list of direct flights is compiled from airline schedules and the <a href="https://en.wikipedia.org/wiki/Marrakesh_Menara_Airport" target="_blank" rel="noopener">Wikipedia</a> route database. Official timetables are published by <a href="https://www.onda.ma/" target="_blank" rel="noopener">ONDA</a>, the airport operator.</p>
`,
  faqHeading: "Marrakech airport destinations: frequently asked questions",
  faqs: [
    { q: "How many direct destinations are there from Marrakech airport?", a: "Marrakech Menara Airport has non-stop flights to 106 cities in 33 countries, operated by 39 airlines, including seasonal routes. The vast majority of destinations are in Europe." },
    { q: "Which airlines fly to Marrakech?", a: "Ryanair is by far the largest, with more than fifty destinations, ahead of easyJet, Transavia and Royal Air Maroc. Wizz Air, Jet2, Volotea, TUI, Vueling, British Airways, Air France, Iberia, Turkish Airlines, Qatar Airways and Air Transat also fly there." },
    { q: "Which airlines fly direct from London to Marrakech?", a: "British Airways from Heathrow and Gatwick, easyJet from Gatwick, Luton and Southend, Ryanair and Jet2 from Stansted, and TUI and Wizz Air from Gatwick." },
    { q: "How long is the flight from London to Marrakech?", a: "About 3 hours 30 minutes non-stop, depending on wind and the departure airport. Allow around 3 hours 45 from Manchester or Birmingham and about 4 hours from Edinburgh or Glasgow." },
    { q: "Are there direct flights between Marrakech and North America?", a: "Yes: Air Transat flies to Montreal all year, and Delta to Atlanta and United to New York-Newark in season. Allow about 7 hours of flying to the East Coast." },
    { q: "What domestic flights leave from Marrakech?", a: "Royal Air Maroc serves Casablanca, Dakhla and Laayoune; Ryanair links Fez, Tangier, Tetouan, Oujda and Errachidia. There are no scheduled flights to Agadir, Essaouira or Ouarzazate, which are reached by road." },
    { q: "Can I fly from Marrakech to Essaouira or Agadir?", a: "No, there are no scheduled flights. Essaouira is 2 hours 30 by road and Agadir 3 hours by motorway; a private transfer or a CTM bus from Marrakech is the simplest option." },
    { q: "Do destinations change with the season?", a: "Yes. The schedule changes at the end of March and the end of October. Winter adds routes to Northern Europe; summer adds flights to the Canaries, Cape Verde and Dakar. Seasonal routes are marked in the table." },
  ],
  cta: {
    heading: "Landing in Marrakech? Your driver is waiting",
    text: "Medina, Agafay, Ourika or Essaouira: a fixed price per vehicle, flight tracking and waiting time included if you are delayed.",
    label: "Book a transfer",
  },
} satisfies LocalizedPage;
