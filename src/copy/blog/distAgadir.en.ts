import type { LocalizedArticle } from '../types';

export default {
  title: "Marrakech Menara Airport to Agadir: distance and transport",
  description: "Getting from Marrakech Menara Airport to Agadir: 250 km of motorway, 3 h drive, CTM and Supratours coaches, private transfer and car hire.",
  eyebrow: 'Distances',
  h1: "From Marrakech Menara Airport to Agadir",
  lede: "Two hundred and fifty kilometres, three hours by motorway, and a complete change of scene: you leave the red city for the Atlantic. Here is how to make the trip and what it really costs.",
  excerpt: '250 km between RAK and Agadir: coach, private transfer, car or plane, with times and prices compared.',
  date: '2026-09-01',
  facts: [
    { label: 'Distance', value: '250', sub: 'km' },
    { label: 'Duration', value: '3 h', sub: 'by motorway' },
    { label: 'Coach', value: '120–180', sub: 'MAD' },
    { label: 'Private transfer', value: '€130–170', sub: 'per vehicle' },
  ],
  body: `
<h2>Marrakech Menara Airport to Agadir: the options</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Price</th><th>Duration</th><th>Departs</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>CTM / Supratours coach</strong></td><td class="num">MAD 120–180 / person</td><td class="num">3 h 30–4 h</td><td>Marrakech bus station</td></tr>
<tr><td><strong>Private transfer</strong></td><td class="num">€130–170 / vehicle</td><td class="num">3 h</td><td>Airport terminal</td></tr>
<tr><td><strong>Hire car</strong></td><td class="num">from €25 / day + tolls</td><td class="num">3 h</td><td>Airport desks</td></tr>
<tr><td><strong>Plane</strong></td><td class="num">variable, via Casablanca</td><td class="num">4 h+ in total</td><td>RAK</td></tr>
</tbody>
</table>
</div>
<p>Flying has no merit on this route: there is no useful direct service, and a connection through Casablanca pushes the journey well beyond the three-hour drive, at a higher price.</p>

<h2>The road</h2>
<p>The A7 motorway links Marrakech to Agadir, crossing the western High Atlas on a modern alignment. The road is excellent, with regular service areas, and takes three hours without pushing. Tolls amount to a few tens of dirhams.</p>
<p>Two things to watch: the crossing of the massif can be windy, and filling stations thin out on the middle section — top up before leaving Marrakech if your tank is low.</p>

<h2>The journey step by step from Marrakech Menara Airport</h2>
<ol>
<li><strong>By car</strong>: collect the car at the desk in the arrivals hall, join the Marrakech ring road then the A7 motorway to Agadir. Fill up before leaving town. Documents, deposit and inspection: see our <a href="/en/blog/car-rental-marrakech-airport/">airport car hire guide</a>.</li>
<li><strong>By transfer</strong>: the driver waits with a name sign in the arrivals hall and drives straight to your address in Agadir or Taghazout, with no change.</li>
<li><strong>By coach</strong>: first take a taxi to the bus station or the company's office (fares on our <a href="/en/marrakech-airport-taxi/">airport taxi</a> page), then the coach for three and a half to four hours.</li>
</ol>

<h2>The coach, the most rational option for two</h2>
<p>CTM and Supratours run several daily services in air-conditioned coaches with luggage in the hold, for <strong>MAD 120–180 per person</strong>. Supratours has the advantage of being tied to ONCF, which makes combined train-and-coach journeys from the north of the country easier.</p>
<p>As with all long-distance services, coaches leave from <strong>Marrakech bus station</strong> and not from the airport: add a taxi and a waiting margin.</p>
<div class="callout">
<span class="callout-label">If Agadir is your final destination</span>
<p>First check whether there is a direct flight to Agadir Al Massira (AGA) from your departure city. Landing in Marrakech to then drive three hours only makes sense if the fare is markedly lower, or if you plan to spend a few days in Marrakech on the way.</p>
</div>

<h2>Which option to choose from Marrakech Menara Airport</h2>
<p><strong>The coach</strong> for one or two people with time to spare: comfortable and very cheap. <strong>A private transfer</strong> from four passengers, with children, or if your flight lands late — you leave straight from the terminal. <strong>A hire car</strong> if you intend to explore the coast between Essaouira, Taghazout and Agadir, which public transport does not cover.</p>

<h2>Landing at night at Marrakech Menara Airport</h2>
<p>After a flight, three hours of night motorway across the High Atlas is not a good idea, and the last coaches leave well before late arrivals. Two solutions: a <a href="/en/book-transfer/">private transfer</a> that takes you straight to Agadir while you rest, or a night in a <a href="/en/hotels/">hotel near the airport</a> before driving in the morning.</p>
`,
  faqs: [
    { q: "Does the bus to Agadir leave from Marrakech airport?", a: "No. CTM and Supratours coaches leave from their stations in town: take a taxi from the airport first, then allow three and a half to four hours." },
    { q: "Can I hire a car at Marrakech airport and return it in Agadir?", a: "Yes, most major companies allow it, but often charge a one-way fee for returning in another city. Compare the total, fees included, before booking." },
    {
      q: 'How far is Agadir from Marrakech?',
      a: "About 250 kilometres on the A7 motorway, or three hours by road across the western High Atlas. The route is modern, with regular service areas and a few tens of dirhams in tolls.",
    },
    {
      q: 'How do you get from Marrakech Airport to Agadir?',
      a: "By CTM or Supratours coach from Marrakech bus station for MAD 120–180 per person, by private transfer straight from the terminal for €130–170 per vehicle, or by hire car.",
    },
    {
      q: 'Are there flights between Marrakech and Agadir?',
      a: "No useful direct service: a connection through Casablanca pushes the journey well beyond the three-hour drive, at a higher price. If Agadir is your final destination, look for a direct flight to AGA.",
    },
    {
      q: 'How much is a taxi from Marrakech to Agadir?',
      a: "A negotiated grand taxi generally runs MAD 800–1,200 for the vehicle. A booked private transfer, at €130–170, offers a fixed price, departure from the terminal and flight tracking.",
    },
  ],
} satisfies LocalizedArticle;
