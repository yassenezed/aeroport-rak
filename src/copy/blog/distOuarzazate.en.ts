import type { LocalizedArticle } from '../types';

export default {
  title: 'Marrakech → Ouarzazate over the Tichka pass',
  description: 'Getting from Marrakech Airport to Ouarzazate: 200 km over the Tichka pass at 2,260 m, 4 h drive, CTM coaches, transfers and driving advice.',
  eyebrow: 'Distances',
  h1: 'From Marrakech Airport to Ouarzazate',
  lede: "Only two hundred kilometres, but four hours on the road: between the two towns stands the Tichka pass, at 2,260 metres. It is one of Morocco's finest drives, and one not to underestimate.",
  excerpt: '200 km and 4 h over the Tichka: real duration, transport options, winter conditions and how not to miss Ait Ben Haddou.',
  date: '2026-08-31',
  facts: [
    { label: 'Distance', value: '200', sub: 'km' },
    { label: 'Real duration', value: '4 h', sub: 'by road' },
    { label: 'Pass elevation', value: '2,260', sub: 'm' },
    { label: 'CTM coach', value: '100–150', sub: 'MAD' },
  ],
  body: `
<h2>Why four hours for two hundred kilometres</h2>
<p>The N9 crosses the High Atlas at the <strong>Tichka pass, 2,260 metres up</strong>. The road has been widened and made safer in recent years, but it remains tens of kilometres of hairpins, with slow lorries and overtaking to judge. Real average speed works out around fifty kilometres an hour.</p>
<p>That is not a drawback: it is one of the country's most beautiful routes, with villages clinging to the slopes, panoramic passes and a complete change of landscape on the southern side, where green gives way to ochre.</p>

<h2>The options</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Price</th><th>Duration</th><th>Departs</th></tr></thead>
<tbody>
<tr><td><strong>CTM / Supratours coach</strong></td><td class="num">MAD 100–150 / person</td><td class="num">4 h 30–5 h</td><td>Marrakech bus station</td></tr>
<tr class="row-highlight"><td><strong>Private transfer</strong></td><td class="num">€120–160 / vehicle</td><td class="num">4 h</td><td>Airport terminal</td></tr>
<tr><td><strong>Hire car</strong></td><td class="num">from €25 / day</td><td class="num">4 h</td><td>Airport desks</td></tr>
<tr><td><strong>Grand taxi</strong></td><td class="num">MAD 800–1,200 / vehicle</td><td class="num">4 h</td><td>The rank, negotiated</td></tr>
</tbody>
</table>
</div>

<h2>Driving the Tichka</h2>
<ul>
<li><strong>Leave in the morning.</strong> Driving it at night has no merit, and visibility in the hairpins changes everything.</li>
<li><strong>Plan breaks.</strong> The passes climb slowly: four hours of bends tire you more than four hours of motorway.</li>
<li><strong>Take care in winter.</strong> Snow and ice sometimes close the pass between December and February. Check road conditions before setting off.</li>
<li><strong>Travel sickness.</strong> Children and sensitive passengers cope badly: bring something for it.</li>
<li><strong>Fuel.</strong> Fill up in Marrakech: stations are spread out on the upper section.</li>
</ul>
<div class="callout">
<span class="callout-label">Do not drive past Ait Ben Haddou</span>
<p>The World Heritage ksar lies about thirty kilometres before Ouarzazate, slightly off the N9. It is one of Morocco's most spectacular sites, and missing it because you pressed straight on to Ouarzazate would be a shame. Allow one to two hours for the visit.</p>
</div>

<h2>A day return: avoid it</h2>
<p>Eight hours of driving for a few hours on the ground, on a mountain road: it can be done, it is exhausting, and it drains the trip of its point. <strong>A night in Ouarzazate or Ait Ben Haddou</strong> changes the experience entirely, and lets you see the southern side in morning light.</p>
<p>If you are continuing to the Dades gorges, the Draa valley or Merzouga, Ouarzazate is in any case a natural stop rather than a final destination.</p>
`,
  faqs: [
    {
      q: 'How long does it take to get from Marrakech to Ouarzazate?',
      a: "About four hours for 200 kilometres, because the N9 crosses the Tichka pass at 2,260 metres through a long series of hairpins. Real average speed works out around fifty kilometres an hour.",
    },
    {
      q: 'Is the Tichka road dangerous?',
      a: "It has been widened and made safer in recent years and presents no particular difficulty in daylight, but it demands attention: hairpins, slow lorries and overtaking. In winter, snow and ice can close the pass.",
    },
    {
      q: 'Can you do Ouarzazate in a day from Marrakech?',
      a: "It is feasible but exhausting: eight hours of mountain driving for a few hours on the ground. A night in Ouarzazate or Ait Ben Haddou changes the experience entirely and lets you see the southern side in the morning.",
    },
    {
      q: 'How do you visit Ait Ben Haddou from Marrakech?',
      a: "The listed ksar sits about thirty kilometres before Ouarzazate, slightly off the N9. Allow one to two hours: it is one of the country's most spectacular sites and would be a shame to miss.",
    },
  ],
} satisfies LocalizedArticle;
