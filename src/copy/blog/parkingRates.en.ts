import type { LocalizedArticle } from '../types';

export default {
  title: "Marrakech Menara Airport parking cost by length of stay",
  description: "How much parking at Marrakech Menara Airport costs for 3 hours, 1 day, 1 or 2 weeks: worked out with the ONDA rate card and compared with a taxi.",
  eyebrow: "Airport",
  h1: "Marrakech Menara Airport parking: the cost by length of stay",
  lede: "MAD 6 for a drop-off, MAD 42 for a day, about MAD 300 for a week: RAK parking is one of the cheapest items of any trip. Here is the cost for each length of stay, and the point where a taxi or transfer becomes the better deal.",
  excerpt: "The real cost of RAK parking for 3 hours, 1 day, 3 days, 1 or 2 weeks, using the ONDA rate card and compared with taxis and transfers.",
  date: '2026-10-02',
  facts: [
    { label: "1 hour", value: "6", sub: "MAD" },
    { label: "24 hours", value: "42", sub: "MAD" },
    { label: "1 week", value: "≈ 300", sub: "MAD" },
    { label: "Capacity", value: "1,550", sub: "spaces" },
  ],
  body: `
<h2>Marrakech Menara Airport parking cost by how long you are away</h2>
<p>Worked out with the ONDA rate card for a car in an open-air space, counting MAD 42 per 24-hour period:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Situation</th><th>Duration</th><th>Cost</th><th>≈ in euros</th></tr></thead>
<tbody>
<tr><td><strong>Dropping off or picking up</strong></td><td>up to 1 h</td><td class="num">MAD 6</td><td class="num">€0.55</td></tr>
<tr><td><strong>Seeing someone off</strong></td><td>2 to 3 h</td><td class="num">MAD 11</td><td class="num">€1</td></tr>
<tr><td><strong>Same-day return</strong></td><td>5 to 12 h</td><td class="num">MAD 22</td><td class="num">€2</td></tr>
<tr class="row-highlight"><td><strong>One night</strong></td><td>12 to 24 h</td><td class="num">MAD 42</td><td class="num">€3.90</td></tr>
<tr><td><strong>Long weekend</strong></td><td>3 days</td><td class="num">≈ MAD 126</td><td class="num">€11.70</td></tr>
<tr><td><strong>One week</strong></td><td>7 days</td><td class="num">≈ MAD 294</td><td class="num">€27</td></tr>
<tr><td><strong>Two weeks</strong></td><td>14 days</td><td class="num">≈ MAD 588</td><td class="num">€54</td></tr>
</tbody>
</table>
</div>
<p class="small">Indicative amounts: ONDA may revise the rates and the sign at the entrance prevails. Approximate conversion €1 ≈ MAD 10.8. The full rate card and the three car parks are covered on our <a href="/en/parking/">airport parking</a> page.</p>

<h2>Waiting for a traveller at Marrakech Menara Airport</h2>
<p>The lane in front of the terminals is for drop-off only: to wait, enter the car park, where <strong>the first hour costs MAD 6</strong>. Do not arrive too early: between landing and leaving the hall, allow 30 to 60 minutes for border police and bags. Follow the real landing time on our <a href="/en/arrivals/">arrivals</a> page and leave home accordingly — that is the difference between MAD 6 and MAD 11.</p>
<p>The three car parks hold about <strong>1,550 open-air spaces</strong>, open 24/7: 740 in car park 1, 460 in car park 2 and 350 in car park 3. Details on our <a href="/en/parking/">airport parking</a> page.</p>

<h2>Parking, taxi or transfer: the break-even point</h2>
<p>A return taxi to the medina costs MAD 200 to 300 by day: the price of <strong>5 to 7 days of parking</strong>. Two <a href="/en/book-transfer/">private transfers</a> come to about MAD 580, or <strong>two weeks of parking</strong>. If you live in or around Marrakech, leaving your car at the airport is almost always the cheapest option for trips of up to two weeks.</p>
<div class="callout">
<span class="callout-label">The cost the rate card does not show</span>
<p>The spaces are open-air. In summer the inside of a car goes well above 60 °C: use a sunshade and leave no electronics, medicines or cosmetics inside.</p>
</div>

<h2>Three tips for Marrakech Menara Airport parking</h2>
<p><strong>Keep the ticket</strong> from the barrier: you need it to pay before leaving. <strong>Carry dirhams in cash</strong>, as cards are not accepted everywhere. And if you are returning a <a href="/en/car-rental/">hire car</a>, follow the company's signs without taking a ticket at the public car park.</p>

<h2>No car: the alternatives to parking</h2>
<p>If nobody can keep the car at home or drop you off, compare with a <a href="/en/book-transfer/">return transfer</a>, which also removes the heat risk over a summer week, or with the rank taxi (fares on our <a href="/en/marrakech-airport-taxi/">airport taxi</a> page). For visitors, a rental car goes straight to the company's return area: see our <a href="/en/blog/car-rental-marrakech-airport/">airport car hire guide</a>.</p>
`,
  faqs: [
    { q: "How many spaces does Marrakech airport parking have?", a: "About 1,550 open-air spaces across three car parks: 740 in car park 1, 460 in car park 2 and 350 in car park 3." },
    { q: "Is Marrakech airport parking open at night?", a: "Yes, the car parks run 24/7 and are guarded, including for flights arriving or leaving in the middle of the night." },
    { q: "How much is a day of parking at Marrakech airport?", a: "MAD 42 for 12 to 24 hours on the ONDA rate card, about €3.90. For shorter stays, MAD 22 covers 5 to 12 hours." },
    { q: "How much is a week of parking at RAK?", a: "About MAD 294 (≈ €27) at MAD 42 per 24-hour period, and about MAD 588 for two weeks." },
    { q: "Is parking cheaper than a return taxi?", a: "Yes for up to about a week: a return taxi to the medina costs MAD 200 to 300 by day, the price of 5 to 7 days of parking." },
    { q: "How much does a quick drop-off cost?", a: "MAD 6 if you enter the car park, for up to 1 hour. The lane in front of the terminals is only for brief stops." },
    { q: "Can I pay for parking by card?", a: "Not everywhere: bring dirhams in cash. You pay before leaving, at the cash desk or machine." },
  ],
} satisfies LocalizedArticle;
