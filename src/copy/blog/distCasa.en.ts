import type { LocalizedArticle } from '../types';

export default {
  title: 'Marrakech → Casablanca: train, coach and road',
  description: 'Getting from Marrakech Airport to Casablanca: 240 km, motorway, ONCF train from Gueliz station, CTM coach and private transfer.',
  eyebrow: 'Distances',
  h1: 'From Marrakech Airport to Casablanca',
  lede: "Two hundred and forty kilometres of motorway, or three hours by train from Gueliz station. The choice hinges on one detail: no railway serves the airport, so you must first reach the station.",
  excerpt: 'ONCF train, CTM coach, motorway or private transfer between RAK and Casablanca: times, prices and the station access leg.',
  date: '2026-09-02',
  facts: [
    { label: 'Distance', value: '240', sub: 'km' },
    { label: 'Motorway', value: '2 h 30', sub: 'by road' },
    { label: 'ONCF train', value: '≈ 3 h', sub: 'from Gueliz' },
    { label: 'Second class', value: '100–140', sub: 'MAD' },
  ],
  body: `
<h2>The train, the best option — with one caveat</h2>
<p>ONCF links Marrakech to Casablanca in about <strong>three hours</strong>, with regular departures throughout the day. A ticket costs around <strong>MAD 100–140 in second class</strong> and MAD 150–210 in first, with comfortable seats and luggage on board.</p>
<p>The caveat is the starting point: Marrakech station sits in the <strong>Gueliz</strong> district, not at the airport. Allow MAD 50–70 for a taxi from RAK, ten to fifteen minutes, plus a waiting margin. Total journey time therefore approaches four hours.</p>
<p>Watch the arrival station too: <strong>Casa-Voyageurs</strong> is the main one, while <strong>Casa-Port</strong> is closer to the centre and the corniche. Check which serves your destination.</p>

<h2>The other options</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Price</th><th>Door-to-door</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>ONCF train</strong></td><td class="num">MAD 100–140 + taxi</td><td class="num">≈ 4 h</td></tr>
<tr><td><strong>CTM / Supratours coach</strong></td><td class="num">MAD 100–150 + taxi</td><td class="num">4 h–4 h 30</td></tr>
<tr><td><strong>Private transfer</strong></td><td class="num">€130–170 / vehicle</td><td class="num">2 h 30</td></tr>
<tr><td><strong>Hire car</strong></td><td class="num">from €25 / day + tolls</td><td class="num">2 h 30</td></tr>
</tbody>
</table>
</div>
<p>The A7 motorway links the two cities without difficulty, with tolls and regular service areas. It is an easy, fast and monotonous drive.</p>

<h2>Special case: an onward flight</h2>
<p>If you land in Marrakech and need a flight from Casablanca Mohammed V, two things matter. Casablanca airport has <strong>its own railway station</strong>, directly linked to Casa-Voyageurs, so the train works end to end. And you should allow five to six hours terminal to terminal including access — plan a margin, or an overnight stay.</p>
<div class="callout">
<span class="callout-label">The booking mistake to avoid</span>
<p>CMN (Casablanca Mohammed V) often tops search results for Morocco, and sits 240 kilometres from Marrakech. If your destination is Marrakech, check that your ticket reads <strong>RAK</strong>.</p>
</div>

<h2>Which option to choose</h2>
<p><strong>The train</strong> for one or two travellers without tight timing: comfortable, punctual and cheap. <strong>A private transfer</strong> from three or four passengers, or with fixed timings: you leave the terminal and arrive at your address, with no change. <strong>A hire car</strong> only if you intend to continue to Rabat or along the coast.</p>
`,
  faqs: [
    {
      q: 'Is there a train between Marrakech Airport and Casablanca?',
      a: "Not from the airport: Marrakech's ONCF station is in the Gueliz district, ten to fifteen minutes by taxi from the terminal. From there, the train reaches Casablanca in about three hours.",
    },
    {
      q: 'How much is the Marrakech–Casablanca train?',
      a: "MAD 100–140 in second class and MAD 150–210 in first, with regular departures throughout the day. Add MAD 50–70 for the taxi from the airport to the station.",
    },
    {
      q: 'How far is Casablanca from Marrakech?',
      a: "About 240 kilometres on the A7 motorway, or two and a half hours by car including tolls. The train takes about three hours station to station.",
    },
    {
      q: 'How long should you allow between RAK and Casablanca airport?',
      a: "Five to six hours terminal to terminal including access. Mohammed V has its own railway station linked to Casa-Voyageurs, which makes the train viable, but a margin remains essential.",
    },
  ],
} satisfies LocalizedArticle;
