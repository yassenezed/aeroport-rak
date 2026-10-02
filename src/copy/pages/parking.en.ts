import type { LocalizedPage } from '../types';

export default {
  title: "Marrakech Menara Airport parking: 2026 rates and access",
  description: "Marrakech Menara Airport parking: 3 car parks, 1,550 spaces, MAD 6 for the first hour and MAD 42 for 24 hours on the ONDA rate card. Drop-off and alternatives.",
  eyebrow: "Parking · 2026 rates and guide",
  h1: "Marrakech Menara Airport parking: rates and guide",
  lede: "Three open-air car parks in front of the terminals, over 1,500 spaces and very low rates. Here are the official prices, the best way to drop off or wait for a traveller, and the maths for a one-week trip.",
  highlights: [
    { icon: 'parking', value: "MAD 6", label: "First hour (≈ €0.55)" },
    { icon: 'clock', value: "MAD 42", label: "12 to 24 hours (≈ €3.90)" },
    { icon: 'map-pin', value: "1,550 spaces", label: "Across 3 car parks" },
    { icon: 'shield-check', value: "24/7", label: "Car parks guarded day and night" },
  ],
  cardSections: [
    {
      eyebrow: "Facilities",
      heading: "The car parks at Marrakech Menara Airport",
      intro: "Three surface car parks in front of the terminal building, open day and night.",
      variant: 'feature',
      items: [
        { icon: 'parking', title: "Car park 1", text: "The largest of the airport's three car parks, at ground level in front of the terminal building.", tags: ["740 spaces", "24/7"] },
        { icon: 'parking', title: "Car park 2", text: "The second largest, a few minutes' walk from the departures and arrivals halls.", tags: ["460 spaces", "24/7"] },
        { icon: 'parking', title: "Car park 3", text: "The smallest of the three, with the same rates as the other car parks.", tags: ["350 spaces", "24/7"] },
      ],
    },
    {
      eyebrow: "Good to know",
      heading: "Security and how it works",
      variant: 'compact',
      items: [
        { icon: 'shield-check', title: "Guarded 24/7", text: "Fenced and guarded day and night, including for late flights." },
        { icon: 'board', title: "Ticket at the entrance", text: "Automatic barrier: keep the ticket, you need it to pay on the way out." },
        { icon: 'wallet', title: "Pay before leaving", text: "At the cash desk or machine; carry dirhams in cash, as cards are not always accepted." },
        { icon: 'sun', title: "Open-air spaces", text: "In summer the inside of a car tops 60 °C: use a sunshade and leave nothing heat-sensitive inside." },
      ],
    },
    {
      eyebrow: "Alternatives",
      heading: "Rather not park? The alternatives",
      variant: 'feature',
      items: [
        { icon: 'van', title: "Private transfer", text: "A driver drops you off and picks you up: no space to find, no car left in the sun.", link: { key: 'bookTransfer', label: "Book a transfer" } },
        { icon: 'car', title: "Car hire", text: "Pick up a car on arrival: return parking is arranged by the rental company.", link: { key: 'carRental', label: "See cars" } },
        { icon: 'bus', title: "Taxi or bus 19", text: "Rank taxi or bus 19 at MAD 30: the car-free ways into the city.", link: { key: 'transfers', label: "Compare transport" } },
      ],
    },
  ],
  body: `
<h2>Marrakech Menara Airport parking rates</h2>
<p>Rate card of Morocco's national airports office (ONDA) for cars in open-air spaces:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Duration</th><th>Car</th><th>In euros (≈)</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Up to 1 hour</strong></td><td class="num">MAD 6</td><td class="num">€0.55</td></tr>
<tr><td><strong>1 to 2 hours</strong></td><td class="num">MAD 9</td><td class="num">€0.85</td></tr>
<tr><td><strong>2 to 3 hours</strong></td><td class="num">MAD 11</td><td class="num">€1</td></tr>
<tr><td><strong>3 to 4 hours</strong></td><td class="num">MAD 15</td><td class="num">€1.40</td></tr>
<tr><td><strong>4 to 5 hours</strong></td><td class="num">MAD 17</td><td class="num">€1.60</td></tr>
<tr><td><strong>5 to 12 hours</strong></td><td class="num">MAD 22</td><td class="num">€2</td></tr>
<tr><td><strong>12 to 24 hours</strong></td><td class="num">MAD 42</td><td class="num">€3.90</td></tr>
</tbody>
</table>
</div>
<p class="small">Coaches and heavy vehicles: MAD 8 for the first hour, MAD 42 for 12 to 24 hours. Indicative rates that ONDA may revise: the sign at the car park entrance prevails. Approximate conversion €1 ≈ MAD 10.8.</p>

<h2>How much does a week of parking cost?</h2>
<p>At MAD 42 per 24-hour period, allow <strong>about MAD 300 (≈ €27) for 7 days</strong>, a very modest sum compared with European airports. By comparison, a return taxi trip to the medina costs MAD 200–300 by day, and two <a href="/en/book-transfer/">private transfers</a> about MAD 580 (≈ €54). If you live in or around Marrakech and travel for a week, airport parking is often the cheapest option.</p>
<div class="callout">
<span class="callout-label">The real hidden cost: the sun</span>
<p>The spaces are open-air. In summer, a car parked for a week in Marrakech faces extreme heat: a sunshade on the windscreen, nothing electronic, no medicines or cosmetics inside, and windows fully closed.</p>
</div>

<h2>Dropping off or waiting for a traveller</h2>
<p>The lane in front of the terminals is for stopping to unload luggage, not for parking: staff keep traffic moving, especially in the evening. To wait for someone, go into the car park: <strong>the first hour costs MAD 6</strong>. Allow 30 to 60 minutes between landing and leaving the hall, for passport control and baggage: check the flight on our <a href="/en/arrivals/">arrivals</a> page before you set off.</p>

<h2>Hire car: no ticket needed</h2>
<p>If you are returning a hire car, follow the company's signs to its return area and do not take a ticket at the public car park entrance. Allow a quarter of an hour for the vehicle check and keep dated photos of the car you hand back.</p>
`,
  faqHeading: "Marrakech Menara Airport parking: frequently asked questions",
  faqs: [
    { q: "How much is parking at Marrakech airport?", a: "On the ONDA rate card, MAD 6 for up to 1 hour, MAD 9 for up to 2 hours, MAD 22 for 5 to 12 hours and MAD 42 for 12 to 24 hours for a car. The sign at the entrance prevails, as rates may be revised." },
    { q: "How many spaces does Marrakech Menara Airport parking have?", a: "About 1,550 spaces across three open-air car parks: 740 in car park 1, 460 in car park 2 and 350 in car park 3." },
    { q: "How much is a week of parking?", a: "About MAD 300 (≈ €27) at MAD 42 per 24-hour period. That is often cheaper than a return private transfer, but protect the car from the sun." },
    { q: "Is there a free drop-off zone?", a: "The lane in front of the terminals lets you stop briefly to drop off passengers. To wait, go into the car park: the first hour costs MAD 6." },
    { q: "Is the airport car park secure?", a: "Yes, the car parks are fenced and guarded 24/7. Take the usual precautions: nothing visible inside the car and nothing heat-sensitive." },
    { q: "How do I pay for parking?", a: "Take a ticket at the entrance barrier and pay before returning to your car, at the cash desk or machine. Carry dirhams in cash, as cards are not always accepted." },
    { q: "Are the spaces covered?", a: "The published rates are for open-air spaces: do not count on shade. In summer, use a sunshade and leave no electronics or medicines in the car." },
    { q: "Is the car park open at night?", a: "Yes, it operates 24/7, including for flights arriving or leaving in the middle of the night." },
  ],
  cta: {
    heading: "Rather not park?",
    text: "A private transfer drops you off and picks you up at the airport, with no space to find and no car left in the sun.",
    label: "Book a transfer",
    secondary: { label: "Hire a car", key: 'carRental' },
  },
} satisfies LocalizedPage;
