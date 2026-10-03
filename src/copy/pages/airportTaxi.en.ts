import type { LocalizedPage } from '../types';

export default {
  title: "Marrakech Menara Airport taxi: 2026 fares and tips",
  description: "Taxi at Marrakech Menara Airport: posted fares to the medina (MAD 100–150 by day, 150–240 at night), small or large taxi, payment and traps to avoid.",
  eyebrow: "Taxi · fares posted at the rank",
  h1: "Marrakech Menara Airport taxi: fares and how it works",
  lede: "The taxi rank is right outside the arrivals hall, open day and night, and Marrakech posts its fares there by zone. Here are the real prices, the right size of car and the sentence that avoids misunderstandings before your bags go in the boot.",
  highlights: [
    { icon: 'sun', value: "MAD 100–150", label: "To the medina by day (whole car)" },
    { icon: 'moon', value: "MAD 150–240", label: "The same ride at night" },
    { icon: 'users', value: "3 or 6", label: "Passengers: small or large taxi" },
    { icon: 'clock', value: "24/7", label: "Rank outside arrivals" },
  ],
  widget: 'transfer',
  widgetIntro: {
    heading: "Prefer a fixed price? Compare with a transfer",
    text: "From €27 (≈ MAD 290) per vehicle for up to 7 passengers, driver with a name sign and flight tracking: often cheaper than a taxi at night or for four.",
  },
  cardSections: [
    {
      eyebrow: "Small or large taxi",
      heading: "Which taxi to take at Marrakech Menara Airport?",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Petit taxi", text: "Marrakech's beige saloon, limited to 3 passengers and to the city. The right choice for two or three with little luggage.", tags: ["3 passengers max", "Medina, Gueliz, Hivernage"] },
        { icon: 'van', title: "Grand taxi", text: "Up to 6 passengers and a real boot. It also runs trips out of town: Ourika, Agafay, Essaouira.", tags: ["6 passengers max", "City and beyond"] },
        { icon: 'shield-check', title: "Pre-booked transfer", text: "Fixed price per vehicle, a driver waiting with your name and drop-off at the right medina gate.", tags: ["Up to 7 passengers", "From €27"], link: { key: 'bookTransfer', label: "See prices" } },
      ],
    },
  ],
  steps: {
    heading: "Taking a taxi at the airport in 4 steps",
    items: [
      { icon: 'wallet', title: "Get dirhams", text: "Before leaving, at the ATM in the arrivals hall: taxis do not take cards." },
      { icon: 'map-pin', title: "Go to the rank", text: "Walk out of the hall: the rank is right in front. Ignore touts who approach you inside." },
      { icon: 'board', title: "Read the board", text: "Fares are posted by zone: check the one for your destination, day or night." },
      { icon: 'check', title: "Confirm before loading", text: "State the destination and the posted price, then load the bags once you agree." },
    ],
  },
  body: `
<h2>Marrakech Menara Airport taxi fares by destination</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Destination</th><th>Day</th><th>Night</th><th>Ride</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Medina, Gueliz, Hivernage</strong></td><td class="num">MAD 100–150</td><td class="num">MAD 150–240</td><td>15–25 min</td></tr>
<tr><td><strong>Palmeraie</strong></td><td colspan="2">Higher: check the amount on the board</td><td>25–35 min</td></tr>
<tr><td><strong>Agafay, Ourika, Essaouira</strong></td><td colspan="2">Grand taxi, price agreed before leaving</td><td>40 min to 3 h</td></tr>
</tbody>
</table>
</div>
<p class="small">Prices for the whole car, not per passenger, checked in 2026. The board at the rank prevails.</p>

<h2>The sentence that avoids misunderstandings</h2>
<p>"Medina, Bab Doukkala: that's 100 dirhams, as on the board?" Naming the medina gate, quoting the board and confirming the amount <strong>before the boot opens</strong> settles most disputes. If one driver refuses, the next will accept: there is always a queue.</p>
<div class="callout">
<span class="callout-label">Small notes</span>
<p>ATMs often give MAD 200 notes, which drivers struggle to change. Break one at the terminal café to have 50 and 100 dirham notes.</p>
</div>

<h2>From Marrakech to the airport</h2>
<p>For the return, a petit taxi from town usually costs <strong>MAD 70 to 150 by day</strong> from the medina, agreed before you get in as the meter is rarely used. Early in the morning there are no taxis in the lanes: ask your riad to book one, or book a <a href="/en/book-transfer/">transfer</a> both ways.</p>

<h2>Taxi or transfer: which to choose?</h2>
<p>The taxi is unbeatable for two by day. A <a href="/en/book-transfer/">pre-booked transfer</a> wins <strong>at night</strong>, <strong>for four or more</strong> (a petit taxi only takes three) and for a <strong>hard-to-find riad</strong>, since the driver knows the nearest gate. Also compare <a href="/en/blog/bus-19-alsa-marrakech/">bus 19</a> at MAD 30 and every option on our <a href="/en/transfers/">transfers</a> page.</p>

<h2>Uber, Careem or inDrive at the airport?</h2>
<p>Do not rely on them for your arrival: Uber returned to Marrakech in late November 2025, but only with licensed tourist transport operators and patchy availability, while Careem and inDrive operate in a grey area. The taxi rank and a pre-booked transfer remain the reliable options.</p>
`,
  faqHeading: "Marrakech Menara Airport taxi: frequently asked questions",
  faqs: [
    { q: "How much is a taxi from Marrakech airport to the medina?", a: "MAD 100 to 150 by day and MAD 150 to 240 at night to the medina, Gueliz or Hivernage, according to the board at the rank. That is the price for the whole car, not per passenger." },
    { q: "Where do I get a taxi at Marrakech airport?", a: "At the rank right outside the arrivals hall, open 24/7. Ignore people offering a taxi inside the terminal: taxis are only taken from the rank." },
    { q: "Do airport taxis use the meter?", a: "No: from the airport the practice is a fixed fare posted by zone. Confirm the board price with the driver before loading your bags." },
    { q: "How many passengers fit in a Marrakech taxi?", a: "Three at most in a petit taxi, up to six in a grand taxi. With four and suitcases, ask for a grand taxi straight away or book a transfer for up to 7." },
    { q: "Can I pay the taxi by card?", a: "No, cash in dirhams only. Withdraw at the ATM in the arrivals hall and keep 50 and 100 dirham notes." },
    { q: "How much is a taxi from Marrakech to the airport?", a: "Usually MAD 70 to 150 by day from the medina, agreed before getting in. For a very early departure, have your riad book one or book a transfer." },
    { q: "Are there taxis at night at Marrakech airport?", a: "Yes, the rank runs 24/7 at the night fare (MAD 150 to 240 to the medina). For a late flight, a pre-booked transfer waits even if you are delayed." },
    { q: "Taxi or transfer from Marrakech airport?", a: "A taxi for two by day; a transfer at night, for four or more, or for a riad deep in the medina. From €27 per vehicle, it is often the cheaper option in those cases." },
  ],
  cta: {
    heading: "Rather not haggle at 1 am?",
    text: "A fixed price locked in before you fly, a driver waiting with your name who knows the right medina gate.",
    label: "Book a transfer",
    secondary: { label: "Compare taxi, bus and transfer", key: 'transfers' },
  },
} satisfies LocalizedPage;
