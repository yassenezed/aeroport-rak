import type { LocalizedPage } from '../types';

export default {
  title: "Marrakech Menara Airport transfer: options and prices",
  description: "Transfer, taxi, bus 19 or hire car from Marrakech Menara Airport: real fares in dirhams and euros, medina gate drop-offs and night arrivals.",
  eyebrow: 'Marrakech Menara · Transfers',
  h1: 'Transfers from Marrakech Airport',
  lede: "Six kilometres to Jemaa el-Fna: the drive is short, it is the last hundred metres that cause trouble, since no car enters the medina lanes. Here are the four ways out of the terminal, what they really cost, and which one fits your flight.",
  facts: [
    { label: 'Airport → medina', value: '6', sub: 'km' },
    { label: 'Real duration', value: '15–30', sub: 'min' },
    { label: 'Train', value: 'None', sub: 'to RAK' },
    { label: 'Booked transfer', value: '€27', sub: 'from' },
  ],
  body: `
<h2>The four ways out of the terminal</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Price</th><th>Best for</th><th>The catch</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Pre-booked private transfer</strong></td><td class="num">from €27 / vehicle</td><td>Night flights, medina riads, families, groups</td><td>Must be booked before you fly</td></tr>
<tr><td><strong>Taxi from the rank</strong></td><td class="num">MAD 100–150 by day</td><td>Leaving without planning anything</td><td>Agree the fare before loading; three passengers max in a petit taxi</td></tr>
<tr><td><strong>Bus 19 (ALSA)</strong></td><td class="num">MAD 30 / person</td><td>Tight budget, light luggage, daytime arrival</td><td>Nothing after 11.30 pm, drops at Jemaa el-Fna only</td></tr>
<tr><td><strong>Hire car</strong></td><td class="num">from €25 / day</td><td>Atlas, Ourika, Essaouira, road trips</td><td>Useless and cumbersome for the medina alone</td></tr>
</tbody>
</table>
</div>
<p>There is no train to RAK, and no ride-hailing service on which to base an arrival. Every fare on this page is <strong>per vehicle</strong>, except the bus, and was checked in September 2026.</p>

<h2>Taxi or transfer: the honest maths</h2>
<p>Taxis are not expensive in Marrakech, and that should be said: MAD 100–150 posted for the medina, Gueliz and Hivernage, roughly £8–12 for the whole car. For two people by day, no booking will beat that, and the wait is just the queue.</p>
<p>The balance tips in three specific situations. <strong>At night</strong>, the scale rises to MAD 150–240, around £12–19, for identical comfort. <strong>From four passengers</strong>, a petit taxi takes only three: you will be offered two cars, so MAD 200–300 by day and up to MAD 480 at night, above the transfer. <strong>For a hard-to-find riad</strong>, the driver will drop you at whichever gate suits him, not the nearest one — which can mean fifteen extra minutes on foot with luggage.</p>
<p>In short: at €27 per vehicle for up to seven seats, a booked transfer becomes the cheapest option as soon as you are four, and the most comfortable as soon as it is dark.</p>

<h2>The real issue: drop-off at the medina gates</h2>
<p>Almost never outside your riad, and it is not obstruction: the <em>derbs</em> are too narrow for a car and several entrances are closed to traffic. The driver stops at the nearest <em>bab</em> — Bab Doukkala to the north-west, Bab Laksour by the Koutoubia, Bab Agnaou to the south, Bab el Khemis to the east — and you finish on foot, usually three to ten minutes.</p>
<div class="callout">
<span class="callout-label">What to ask your riad</span>
<p>Two things, by message, before you travel: the exact name of the drop-off gate, and whether a porter can come with a handcart. Most riads do it free or for a few dirhams if you give them your arrival time. That is the detail that changes everything at one in the morning on cobbles.</p>
</div>

<h2>Bus 19, when it makes sense</h2>
<p>ALSA's line 19 links the airport to Jemaa el-Fna for MAD 30 one way, MAD 50 return valid for a fortnight, with a departure roughly every thirty minutes between 6 am and 11.30 pm. The ride takes about twenty minutes and the stop is outside the terminal.</p>
<p>It is excellent for two people, by day, with a bag you can carry. It becomes painful with two suitcases, a child, or when you land at 10.45 pm and still have to cross the medina on foot. The bus drops you on the square, not at your accommodation.</p>

<h2>What about a hire car?</h2>
<p>If you are not leaving Marrakech, it will get in your way: the medina is pedestrian, city parking is paid and watched by informal attendants, and the traffic takes some getting used to. It earns its keep for the Atlas, the Ourika valley, Essaouira or a road trip south. In that case, pick it up when you actually need it rather than on landing: our <a href="/en/car-rental/">car hire pages</a> cover deposits, excesses and the local pitfalls.</p>
`,
  faqs: [
    {
      q: 'How much is a transfer from Marrakech Airport?',
      a: "A private transfer to the medina, Gueliz or Hivernage starts at €27 per vehicle for up to seven passengers, with flight tracking and child seats available depending on the operator. For the Palmeraie or an Agafay desert camp, expect more; Essaouira runs around €95. These prices are per car, not per person.",
    },
    {
      q: 'What is the best way from Marrakech Airport to the centre?',
      a: "By day, for two, heading to Gueliz or Hivernage: the taxi rank, at MAD 100–150 per car. For a riad deep in the medina, a night flight or a group of four or more: a booked transfer, which locks both the price and the drop-off gate. With a backpack and a tight budget: bus 19 at MAD 30.",
    },
    {
      q: 'Is there a train between Marrakech Airport and the city?',
      a: "No, no railway serves the terminal. Marrakech's ONCF station is in Gueliz, a few kilometres away, with trains to Casablanca, Rabat, Fes and Tangier. You must first get there by taxi, transfer or bus 19.",
    },
    {
      q: 'Can you book a transfer and pay later?',
      a: "With most operators, yes: booking locks the fare, payment comes later and cancellation is generally free up to 24 hours before pickup. It is the sensible reflex for an evening flight or a loaded group, since large vehicles are the first thing to run out in high season.",
    },
    {
      q: 'Can the driver drop me outside my riad in the medina?',
      a: "Almost never: the derbs are too narrow and several entrances are closed to traffic. The driver leaves you at the nearest gate and you finish on foot, usually three to ten minutes. Ask your riad for a porter with a handcart when you book.",
    },
    {
      q: 'Can you use Uber, Careem or inDrive in Marrakech?',
      a: "Do not count on it for your arrival. Uber returned to Marrakech in late November 2025, but only with licensed tourist-transport operators, and availability remains irregular; Careem and inDrive operate in a still-unclear legal space. Pick-up outside the terminals is the friction point with taxis. In town, these apps can help out.",
    },
  ],
  cta: {
    heading: 'Lock your ride before take-off',
    text: "Fixed price per vehicle, a driver waiting with your name, flight tracking and free cancellation on most bookings: settled before you even board.",
    label: 'See transfer prices',
  },
} satisfies LocalizedPage;
