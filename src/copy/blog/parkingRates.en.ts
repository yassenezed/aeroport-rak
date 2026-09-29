import type { LocalizedArticle } from '../types';

export default {
  title: "Marrakech Menara Airport parking rates",
  description: "Marrakech Menara Airport parking tariffs: hourly, daily and weekly prices, drop-off zone, payment and cheaper alternatives.",
  eyebrow: 'Airport',
  h1: 'Marrakech Airport parking: the tariff table',
  lede: "Very cheap for a drop-off, reasonable for a same-day return, markedly less obvious for a week. Here are the orders of magnitude and the sum to do before leaving your car.",
  excerpt: 'Hourly, daily and weekly prices at RAK parking, with the alternatives for when long-stay no longer adds up.',
  date: '2026-09-06',
  facts: [
    { label: '30 minutes', value: 'free', sub: 'or ≈ MAD 10' },
    { label: '1 hour', value: '≈ 20', sub: 'MAD' },
    { label: '24 hours', value: '70–80', sub: 'MAD' },
    { label: '1 week', value: '450–550', sub: 'MAD' },
  ],
  body: `
<h2>The tariff, in orders of magnitude</h2>
<p>RAK parking is charged by duration, with a short first band that is free or nominal, then hourly charging capped daily. The figures below were checked in September 2026 and serve as a guide: <strong>the board at the entrance is authoritative</strong>, since the scale is revised periodically.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Duration</th><th>Indicative rate</th><th>Typical use</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Under 30 minutes</strong></td><td class="num">free or ≈ MAD 10</td><td>Dropping off or collecting someone</td></tr>
<tr><td><strong>1 hour</strong></td><td class="num">≈ MAD 20</td><td>Waiting for a delayed flight</td></tr>
<tr><td><strong>3 hours</strong></td><td class="num">≈ MAD 40</td><td>Seeing someone off</td></tr>
<tr><td><strong>24 hours</strong></td><td class="num">MAD 70–80</td><td>Same-day return trip</td></tr>
<tr><td><strong>3 days</strong></td><td class="num">≈ MAD 200–240</td><td>Long weekend</td></tr>
<tr><td><strong>1 week</strong></td><td class="num">MAD 450–550</td><td>Trip abroad</td></tr>
</tbody>
</table>
</div>
<p>Pay at the machine or the kiosk <strong>before</strong> returning to your vehicle. Bring cash: cards are not accepted at every machine.</p>

<h2>The point where it stops adding up</h2>
<p>Compare it with a return trip into town: two taxi rides at the posted fare come to <strong>MAD 200–300</strong>, or about €54 for two private transfers. Beyond three or four days, parking matches then exceeds that figure — and you also leave a car exposed to the sun.</p>
<div class="callout">
<span class="callout-label">Sixty degrees inside</span>
<p>A car parked in full sun in Marrakech in summer passes 60 °C inside. Leave no electronics, cosmetics, medicines or lighters in it. And nothing visible on the seats, as anywhere else.</p>
</div>

<h2>Drop-off and collection</h2>
<p>The area in front of the terminals allows a brief stop, and attendants keep traffic moving, especially in the evening. If you are collecting someone, remember that <strong>30 to 60 minutes pass between landing and the exit</strong>: park and wait there rather than circling the building.</p>

<h2>Hire car: do not take a ticket</h2>
<p>If you are returning a rental, the return parking is arranged by the hire company. Follow their signs and do not take a ticket at the public car park entrance, or you will pay for time that is not yours. Allow a quarter of an hour for the inspection and keep dated photos of the returned vehicle.</p>
`,
  faqs: [
    {
      q: 'How much is a day of parking at Marrakech Airport?',
      a: "Around MAD 70–80 for 24 hours, with hourly charging of about MAD 20 below that. The board at the entrance is authoritative and is revised periodically.",
    },
    {
      q: 'Is drop-off free at RAK?',
      a: "The first band, around thirty minutes, is free or nominal, which covers a quick drop-off or collection. Attendants keep traffic moving in front of the terminals, especially in the evening.",
    },
    {
      q: 'How much is a week of parking at Marrakech Airport?',
      a: "About MAD 450–550. Beyond three or four days, two return rides by taxi or transfer often cost less, and spare you leaving a car in the sun.",
    },
    {
      q: 'Can you pay for parking by card at Marrakech Menara?',
      a: "Not at every machine: bring cash in dirhams. Payment is made before returning to your vehicle, at the machine or the kiosk.",
    },
  ],
} satisfies LocalizedArticle;
