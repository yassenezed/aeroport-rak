import type { LocalizedArticle } from '../types';

export default {
  title: "Marrakech Menara Airport to Essaouira: distance, transport",
  description: "Getting from Marrakech Menara Airport to Essaouira: 180 km, 2 h 30 by road, CTM and Supratours fares, private transfer and car hire.",
  eyebrow: 'Distances',
  h1: 'From Marrakech Airport to Essaouira',
  lede: "A hundred and eighty kilometres of straight road through the argan groves, two and a half hours, and ten degrees cooler on arrival. Here are the four ways to do it and what they cost.",
  excerpt: '180 km and 2 h 30 between RAK and Essaouira: coach, private transfer, grand taxi or hire car, with real prices.',
  date: '2026-09-03',
  facts: [
    { label: 'Distance', value: '180', sub: 'km' },
    { label: 'Duration', value: '2 h 30', sub: 'by road' },
    { label: 'Coach', value: '80–120', sub: 'MAD' },
    { label: 'Private transfer', value: '≈ €95', sub: 'per vehicle' },
  ],
  body: `
<h2>The options, compared</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Price</th><th>Duration</th><th>Departs from</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Private transfer</strong></td><td class="num">≈ €95 / vehicle</td><td class="num">2 h 30</td><td>The airport itself</td></tr>
<tr><td><strong>CTM or Supratours coach</strong></td><td class="num">MAD 80–120 / person</td><td class="num">3 h–3 h 30</td><td>Marrakech bus station</td></tr>
<tr><td><strong>Grand taxi</strong></td><td class="num">MAD 600–900 / vehicle</td><td class="num">2 h 30</td><td>The rank, negotiated</td></tr>
<tr><td><strong>Hire car</strong></td><td class="num">from €25 / day + fuel</td><td class="num">2 h 30</td><td>Airport desks</td></tr>
</tbody>
</table>
</div>
<p>The point often missed: coaches <strong>do not leave from the airport</strong> but from Marrakech bus station. You therefore need to add a taxi and a waiting margin, which pushes the total closer to four hours.</p>

<h2>The road</h2>
<p>The N8 then the R207 cross the argan groves on a steady, well-surfaced route with no particular difficulty. It is a fine drive, with a few standard stops — the argan oil cooperatives, and the goats in the argan trees, whose staging has become a paid attraction best driven past.</p>
<p>Allow two and a half hours driving normally. The final kilometres approaching Essaouira are often windy: that is the town's signature.</p>

<h2>Which option for which traveller</h2>
<p><strong>The coach</strong> is unbeatable on price, at MAD 80–120 per person depending on company and comfort. CTM and Supratours are reliable, air-conditioned, with luggage in the hold. The right choice for one or two people with no time pressure.</p>
<p><strong>The private transfer</strong> becomes rational from three or four passengers: €95 per vehicle against MAD 400 for four coach tickets plus two access taxis narrows the gap sharply — and you leave straight from the terminal, without going via the bus station.</p>
<p><strong>A hire car</strong> makes sense if you intend to roam: Sidi Kaouki, Diabat and the beaches south of Essaouira have no public transport.</p>
<div class="callout">
<span class="callout-label">If you land in the evening</span>
<p>Do not set off the same night. The road has nothing to offer in the dark, the coaches have stopped, and arriving in Essaouira at midnight to find a riad inside the walled medina is the best way to start badly. Sleep in Marrakech and drive in the morning.</p>
</div>

<h2>How long to stay</h2>
<p>Essaouira deserves better than a day trip: with five hours of driving there and back, you would be left with a few hours on the ground. <strong>Two nights</strong> lets you see the listed medina, the port, the ramparts and a beach, and eat fish twice — the minimum to grasp how different its atmosphere is from Marrakech.</p>
`,
  faqs: [
    {
      q: 'How far is Essaouira from Marrakech?',
      a: "About 180 kilometres, or two and a half hours by road via the N8 then the R207, through the argan groves. The route is steady and well surfaced, with no particular difficulty.",
    },
    {
      q: 'How do you get from Marrakech Airport to Essaouira?',
      a: "By private transfer from the terminal, around €95 per vehicle; by CTM or Supratours coach from Marrakech bus station for MAD 80–120 per person; by negotiated grand taxi; or by hire car.",
    },
    {
      q: 'Do Essaouira coaches leave from Marrakech Airport?',
      a: "No, they leave from Marrakech bus station. You therefore need a taxi from the airport plus a waiting margin, which brings the total journey to around four hours.",
    },
    {
      q: 'Can you do Essaouira as a day trip from Marrakech?',
      a: "It is possible but unsatisfying: five hours of driving there and back leaves only a few hours on the ground. Two nights lets you see the medina, the port, the ramparts and a beach without rushing.",
    },
  ],
  cta: {
    heading: 'Straight from the terminal to Essaouira',
    text: "Without going via the bus station: a private vehicle, fixed price, up to seven passengers.",
    label: 'See prices',
  },
} satisfies LocalizedArticle;
