import type { LocalizedArticle } from '../types';

export default {
  title: "RAK or GMMX: the Marrakech Menara Airport code",
  description: "Why Marrakech Menara Airport is written RAK, what GMMX means, and how not to confuse it with other Moroccan airports when booking.",
  eyebrow: 'Airport',
  h1: "RAK and GMMX: the codes for Marrakech Menara Airport",
  lede: "Three letters on your ticket, four on flight plans. Here is what they mean, where that \"RAK\" that looks nothing like the city name comes from, and the confusions to avoid when booking.",
  excerpt: 'RAK, GMMX and the codes of the other Moroccan airports: what the letters mean and how to avoid a booking mistake.',
  date: '2026-09-10',
  body: `
<h2>RAK: the IATA code of Marrakech Menara Airport</h2>
<p><strong>RAK</strong> is the three-letter code assigned by the International Air Transport Association. It is what you see on tickets, bag tags and display boards, and it designates <strong>Marrakech Menara</strong> Airport.</p>
<p>Why RAK rather than MAR or MRK? Because IATA codes are allocated by availability, not by linguistic logic: MAR and MRK were already taken elsewhere. RAK simply reuses three consonants from "Marrakech", as AGA does for Agadir or CMN for Casablanca Mohammed V.</p>

<h2>GMMX: the ICAO code of Marrakech Menara Airport</h2>
<p><strong>GMMX</strong> is the four-letter code of the International Civil Aviation Organization, used by air traffic controllers, flight plans and aviation weather services. Its structure is geographic: <strong>GM</strong> identifies Morocco, the last two letters the aerodrome.</p>
<p>You will never use it to book, but you will come across it in flight-tracking apps and aviation weather reports.</p>

<h2>Where you will see the RAK code</h2>
<ul>
<li><strong>When booking</strong>: type "RAK" rather than "Marrakech" in a search tool to avoid results for other cities. Our <a href="/en/flights/">flight search</a> starts from this code.</li>
<li><strong>On your bag tag</strong>: at check-in, make sure the tag on your suitcase says RAK. A wrong tag is the first cause of lost luggage.</li>
<li><strong>On the screens</strong>: the <a href="/en/arrivals/">arrivals</a> and <a href="/en/departures/">departures</a> boards use the code and flight number.</li>
</ul>

<h2>The other Moroccan airports, to avoid errors</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Airport</th><th>IATA</th><th>ICAO</th><th>From Marrakech</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Marrakech Menara</strong></td><td class="num">RAK</td><td class="num">GMMX</td><td>—</td></tr>
<tr><td>Casablanca Mohammed V</td><td class="num">CMN</td><td class="num">GMMN</td><td class="num">240 km</td></tr>
<tr><td>Agadir Al Massira</td><td class="num">AGA</td><td class="num">GMAD</td><td class="num">250 km</td></tr>
<tr><td>Essaouira Mogador</td><td class="num">ESU</td><td class="num">GMMI</td><td class="num">180 km</td></tr>
<tr><td>Ouarzazate</td><td class="num">OZZ</td><td class="num">GMMZ</td><td class="num">200 km</td></tr>
<tr><td>Fes Saiss</td><td class="num">FEZ</td><td class="num">GMFF</td><td class="num">530 km</td></tr>
<tr><td>Rabat Sale</td><td class="num">RBA</td><td class="num">GMME</td><td class="num">320 km</td></tr>
</tbody>
</table>
</div>
<div class="callout">
<span class="callout-label">The classic mistake</span>
<p>Booking into <strong>CMN</strong> believing you will land in Marrakech. Casablanca Mohammed V is the country's main airport and often tops search results — but it is 240 kilometres away, about two and a half hours by road or a train ride from Casa-Voyageurs. Always check the three letters before paying.</p>
</div>

<h2>Marrakech Menara Airport in brief</h2>
<ul>
<li><strong>Official name</strong>: Marrakech Menara Airport, after the nearby Menara gardens.</li>
<li><strong>Location</strong>: 6 km south-west of the centre, at 471 metres above sea level.</li>
<li><strong>Runway</strong>: a single 3,100-metre runway.</li>
<li><strong>Traffic</strong>: more than 9.3 million passengers in 2024.</li>
<li><strong>Terminals</strong>: two adjoining halls, linked on foot.</li>
</ul>

<h2>Once you land at RAK</h2>
<p>The airport is six kilometres from the medina: rank taxi, bus 19 or pre-booked transfer — options and prices are compared in our <a href="/en/blog/rak-to-city-center/">airport → city centre</a> guide. For a late arrival, see also our <a href="/en/marrakech-airport-taxi/">airport taxi</a> page.</p>
`,
  faqs: [
    { q: "What does RAK mean on a bag tag?", a: "It is the destination airport code: RAK means Marrakech Menara. Check it at check-in, especially with a connection, so your suitcase ends up in the right place." },
    { q: "Should I search for RAK or Marrakech when booking a flight?", a: "RAK is safer: the code refers to a single airport, whereas a search by city name may suggest other Moroccan airports." },
    {
      q: 'What is the code for Marrakech Airport?',
      a: "RAK is the IATA code that appears on your ticket and bag tags, and GMMX is the ICAO code used by air traffic control and flight plans.",
    },
    {
      q: 'Why is Marrakech Airport called RAK?',
      a: "IATA codes are allocated by availability rather than linguistic logic: MAR and MRK were already in use elsewhere. RAK reuses three consonants from \"Marrakech\", as AGA does for Agadir or CMN for Casablanca.",
    },
    {
      q: 'What does GMMX mean?',
      a: "It is the ICAO code for Marrakech Menara. Its structure is geographic: GM identifies Morocco and the last two letters the aerodrome. It is used for flight plans and aviation weather, never for bookings.",
    },
    {
      q: 'Which airport should not be confused with RAK?',
      a: "CMN, Casablanca Mohammed V, which often tops search results for Morocco but lies 240 kilometres from Marrakech, about two and a half hours by road. Check the three letters before paying.",
    },
  ],
} satisfies LocalizedArticle;
