import type { LocalizedPage } from '../types';

export default {
  title: "Book a Marrakech Menara Airport transfer from €27",
  description: "Private transfer at Marrakech Menara Airport: fixed price per vehicle for up to 7 people, driver with name sign, flight tracking and free cancellation.",
  eyebrow: "Private transfer · online booking",
  h1: "Book a Marrakech Menara Airport transfer",
  lede: "Enter your destination and landing time: the price shown is per vehicle, not per passenger. A driver waits outside arrivals with your name and drops you at the medina gate closest to your riad.",
  highlights: [
    { icon: 'wallet', value: "From €27", label: "Per vehicle, medina and Gueliz" },
    { icon: 'users', value: "Up to 7", label: "Passengers in a people carrier" },
    { icon: 'clock', value: "90 min", label: "Free waiting after landing" },
    { icon: 'shield-check', value: "24 h", label: "Free cancellation (most offers)" },
  ],
  widget: 'transfer',
  cardSections: [
    {
      eyebrow: "Included in your booking",
      heading: "Why book your Marrakech Menara Airport transfer",
      intro: "What you get on top of a taxi from the rank.",
      variant: 'feature',
      items: [
        { icon: 'wallet', title: "Fixed price per vehicle", text: "Known before you travel, luggage included. Nothing to haggle over on arrival, even at 2 am.", tags: ["No surprises"] },
        { icon: 'users', title: "Driver with a name sign", text: "Waiting outside the arrivals hall with your name, and helping with your bags.", tags: ["Meet and greet"] },
        { icon: 'plane-landing', title: "Live flight tracking", text: "Your flight number is tracked: if you are delayed, the pickup time moves at no extra cost.", tags: ["Delays covered"] },
        { icon: 'door', title: "Drop-off at the right gate", text: "The driver stops at the bab closest to your riad, the one your host has given you.", tags: ["Medina"] },
        { icon: 'baby', title: "Child seat on request", text: "Mention it when booking, with the child's age. Rank taxis almost never have one.", tags: ["Families"] },
        { icon: 'moon', title: "Return to the airport", text: "At 5 am, no taxi waits in the medina. Booking a return trip sorts out your departure too.", tags: ["Return trip"] },
      ],
    },
  ],
  steps: {
    heading: "Book in three steps",
    intro: "Two minutes is enough if you have your flight number to hand.",
    items: [
      { icon: 'map-pin', title: "Choose your route", text: "In the form above, keep \"Marrakech Menara Airport\" as the pickup and enter your riad, hotel or destination town." },
      { icon: 'clipboard', title: "Add flight and passengers", text: "Flight number, number of passengers and bags, any child seat, and a WhatsApp number you can be reached on." },
      { icon: 'users', title: "Meet your driver", text: "After customs, walk out of the arrivals hall: your driver is waiting with your name on a sign." },
    ],
  },
  body: `
<h2>Transfer prices from Marrakech Menara Airport</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Destination</th><th>Distance</th><th>Journey</th><th>Price per vehicle</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Medina, Gueliz, Hivernage</strong></td><td class="num">6–8 km</td><td>15–25 min</td><td class="num">from €27</td></tr>
<tr><td><strong>Palmeraie</strong></td><td class="num">≈ 15 km</td><td>25–35 min</td><td>shown in the form</td></tr>
<tr><td><strong>Agafay desert</strong></td><td class="num">≈ 35 km</td><td>40–50 min</td><td>shown in the form</td></tr>
<tr><td><strong>Ourika valley, Imlil</strong></td><td class="num">≈ 65 km</td><td>1 h 15–1 h 30</td><td>shown in the form</td></tr>
<tr><td><strong>Essaouira</strong></td><td class="num">≈ 185 km</td><td>2 h 30–3 h</td><td class="num">≈ €95</td></tr>
</tbody>
</table>
</div>
<p>The price is <strong>per vehicle</strong>, for up to seven passengers in a people carrier, not per person. For any other destination, enter it in the form: the exact fare is shown before payment.</p>

<h2>Choosing the right vehicle</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Vehicle</th><th>Passengers</th><th>Suitcases</th><th>Best for</th></tr></thead>
<tbody>
<tr><td><strong>Saloon</strong></td><td class="num">1–3</td><td class="num">2–3</td><td>A couple or trio with one suitcase each</td></tr>
<tr class="row-highlight"><td><strong>People carrier</strong></td><td class="num">4–7</td><td class="num">5–7</td><td>Families or friends, the best price per seat</td></tr>
<tr><td><strong>Minibus</strong></td><td class="num">8–15</td><td class="num">10+</td><td>Groups, events, weddings</td></tr>
<tr><td><strong>4x4 or premium van</strong></td><td class="num">1–6</td><td class="num">4–6</td><td>Agafay camps, business travel</td></tr>
</tbody>
</table>
</div>
<p>Because the fare is per vehicle, a people carrier for four or five costs far less per person than two petit taxis, which take three passengers each. To compare with the taxi and bus 19, see our <a href="/en/transfers/">transport comparison</a>.</p>

<h2>What to have ready</h2>
<p>Your <strong>flight number</strong> and landing time; the <strong>exact name of your riad or hotel</strong>; for the medina, the <strong>drop-off gate</strong> your host has given you; the number of passengers and bags; a <strong>phone number reachable in Morocco</strong>, ideally WhatsApp, which most drivers use.</p>
<div class="callout">
<span class="callout-label">Book both ways</span>
<p>The trip back to the airport is often harder than the arrival: early in the morning there are no taxis in the medina lanes. Booking a return in one go usually costs less than two separate trips.</p>
</div>

<h2>High season at Marrakech Menara Airport: book early</h2>
<p>European school holidays, spring bank holidays, the Marathon des Sables and the end-of-year festivities empty the large vehicles first. With five or more between December and April, book a few weeks ahead so you do not have to split your group across several cars.</p>
`,
  faqHeading: "Marrakech Menara Airport transfer: frequently asked questions",
  faqs: [
    { q: "Is the price per person or per vehicle?", a: "Per vehicle. A €27 transfer to the medina covers up to seven passengers in a people carrier, luggage included. From four people, it is much cheaper than two petit taxis, which take three passengers each." },
    { q: "What happens if my flight is delayed?", a: "The driver tracks your flight number and adjusts the pickup time. Up to 90 minutes of free waiting after landing is included in most offers, enough for passport control and baggage." },
    { q: "Where does the driver meet me at Marrakech airport?", a: "Outside the arrivals hall, with a sign bearing your name. The exact meeting point is on your confirmation voucher. Message the driver as soon as you have signal." },
    { q: "Can I cancel a booked transfer?", a: "With most operators, yes: free cancellation up to 24 hours before pickup, with a full refund. The exact terms are shown before payment." },
    { q: "Can I request a child car seat?", a: "Yes, mention it when booking, with the child's age and weight. Rank taxis almost never offer one." },
    { q: "Do I pay online or on arrival?", a: "Both exist depending on the operator. Booking online locks the fare, and some providers accept payment to the driver. In that case, bring dirhams." },
    { q: "Can the driver drop me at my riad's door?", a: "Almost never, as medina lanes are too narrow for cars. The driver stops at the nearest gate, often 3 to 10 minutes' walk away. Ask your riad to send a porter." },
    { q: "Can I book the return transfer to Marrakech Menara Airport?", a: "Yes, by ticking the return transfer in the form or booking a second trip. Aim to reach the airport 2.5 hours before an international flight: allow 15 to 25 minutes from the medina." },
  ],
  cta: {
    heading: "Your transfer sorted in two minutes",
    text: "Compare the vehicles available for your landing time and lock in the fare. Free cancellation on most bookings.",
    label: "Check availability",
    href: "#transfert",
    secondary: { label: "Compare taxi, bus and transfer", key: 'transfers' },
  },
} satisfies LocalizedPage;
