import type { LocalizedPage } from '../types';

export default {
  title: "Marrakech Menara Airport transfers: taxi, bus, prices 2026",
  description: "Getting from Marrakech Menara Airport to the medina: private transfer, taxi, bus 19, riad shuttle or car hire. Real 2026 prices and travel times compared.",
  eyebrow: "Transfer · taxi · bus 19 · car hire",
  h1: "Marrakech Menara Airport transfers: 5 ways into the city",
  lede: "Only six kilometres separate the terminal from Jemaa el-Fna, and no train makes the trip. Landing at midnight, travelling with kids, or on a backpacker budget: here are the five real options, their prices checked on the ground, and which one suits your arrival.",
  highlights: [
    { icon: 'map-pin', value: "6 km", label: "Airport → medina, 15–20 min" },
    { icon: 'van', value: "From €27", label: "Transfer, per vehicle (7 seats)" },
    { icon: 'car', value: "MAD 100–150", label: "Daytime taxi, whole car" },
    { icon: 'bus', value: "MAD 30", label: "Bus 19, per person" },
  ],
  options: {
    heading: "Quick comparison of transport from Marrakech Menara Airport",
    intro: "Prices checked in September 2026, <strong>per vehicle</strong> except the bus. No train serves the airport: the ONCF station is in Gueliz.",
    table: {
      head: ["Transport", "Price", "To the medina", "Comfort", "Best for"],
      rows: [
        ["Private transfer", "from €27", "15–25 min", "Excellent", "Night arrivals, families, riads in the medina"],
        ["Taxi rank", "MAD 100–150<br>MAD 150–240 at night", "15–25 min", "Fair", "Two people by day, Gueliz or Hivernage"],
        ["Bus 19 (ALSA)", "MAD 30 / person", "20–30 min", "Basic", "Tight budget, light luggage, daytime"],
        ["Riad shuttle", "MAD 150–250", "15–25 min", "Very good", "Riads that are hard to find"],
        ["Car hire", "from €25 / day", "—", "Excellent outside the medina", "Atlas, Agafay, Essaouira, road trips"],
      ],
    },
    detailHeading: "The 5 options in detail",
    items: [
      {
        icon: 'van',
        title: "Pre-booked private transfer",
        tagline: "The stress-free choice at night, with family, or for a riad deep in the medina.",
        badge: "Our pick",
        meta: [
          { label: "Price", value: "from €27 / vehicle" },
          { label: "Journey", value: "15–25 min" },
          { label: "Seats", value: "up to 7" },
        ],
        pros: [
          "Driver waiting in the arrivals hall <strong>with a sign bearing your name</strong>",
          "Flight tracking: no extra charge if you are delayed",
          "Fixed price per vehicle, locked in when you book",
          "Drop-off at the medina gate (<em>bab</em>) closest to your riad",
          "Child seat on request, free cancellation up to 24 h with most providers",
        ],
        prices: {
          heading: "Typical prices",
          rows: [
            { label: "Medina, Gueliz, Hivernage", value: "from €27" },
            { label: "Palmeraie, Agafay", value: "by distance" },
            { label: "Essaouira", value: "≈ €95" },
            { label: "Minibus, 8+ seats", value: "on request" },
          ],
          foot: "Prices are per vehicle, not per person.",
        },
        link: { key: 'bookTransfer', label: "Book my transfer" },
      },
      {
        icon: 'car',
        title: "Taxi from the rank",
        tagline: "Available around the clock at the rank right outside the terminal.",
        meta: [
          { label: "Day", value: "MAD 100–150" },
          { label: "Night", value: "MAD 150–240" },
          { label: "Seats", value: "3 (petit taxi)" },
        ],
        pros: [
          "Official rank outside arrivals, with posted fares",
          "Nothing to book or pay in advance",
          "Unbeatable for two by day: €9 to €14 for the whole car",
        ],
        cons: [
          "A petit taxi takes 3 passengers at most: four people need two cars",
          "Cash only, in dirhams",
          "Drop-off at whichever medina gate suits the driver, not always the closest",
        ],
        note: { label: "Tip:", text: "agree the price and destination <strong>before</strong> loading your bags, and ignore touts in the hall: taxis are only taken from the rank." },
        link: { key: 'taxiTips', label: "Our Marrakech taxi tips" },
      },
      {
        icon: 'bus',
        title: "Bus 19 (ALSA)",
        tagline: "The cheapest option, if you travel light and by day.",
        meta: [
          { label: "Price", value: "MAD 30 / person" },
          { label: "Return", value: "MAD 50 (15 days)" },
          { label: "Hours", value: "≈ 6 am – 11.30 pm" },
        ],
        pros: [
          "Stop right outside the terminal, departures roughly every 30 minutes",
          "About twenty minutes to Jemaa el-Fna square",
        ],
        cons: [
          "No departures after about 11.30 pm",
          "Little room for large suitcases",
          "Drops you on the square: you still walk through the medina to your riad",
        ],
        link: { key: 'bus19', label: "Bus 19 timetable and stops" },
      },
      {
        icon: 'door',
        title: "Your riad or hotel shuttle",
        tagline: "Your accommodation's own driver, who knows the right gate and the porter.",
        meta: [
          { label: "Price", value: "MAD 150–250 / vehicle" },
          { label: "Journey", value: "15–25 min" },
          { label: "Booking", value: "through the riad" },
        ],
        pros: [
          "The driver knows exactly where to stop for your riad",
          "Often arranged together with a porter and handcart for your bags",
          "Pay on arrival",
        ],
        cons: [
          "Prices vary widely between riads: compare with a transfer",
          "Not always available for flights landing late at night",
        ],
      },
      {
        icon: 'car',
        title: "Car hire",
        tagline: "For the Atlas, Agafay or Essaouira, not for exploring the medina.",
        meta: [
          { label: "Price", value: "from €25 / day" },
          { label: "Desks", value: "arrivals hall" },
          { label: "Documents", value: "licence, passport, card" },
        ],
        pros: [
          "International and Moroccan rental desks in the arrivals hall",
          "Total freedom for Ourika, Imlil, Agafay or the Essaouira road",
          "Booking online a few days ahead is usually cheaper than at the desk",
        ],
        cons: [
          "The medina is pedestrian: the car stays in a car park",
          "Deposit blocked on a credit card in the driver's name",
        ],
        link: { key: 'carRental', label: "Compare car hire prices" },
      },
    ],
  },
  body: `
<h2>Taxi or transfer from Marrakech Menara Airport: the honest maths</h2>
<p>Taxis are not expensive in Marrakech: MAD 100 to 150 posted for the medina, Gueliz and Hivernage, or €9 to €14 for the whole car. For two people by day, no booking beats that price.</p>
<p>The picture changes in three cases. <strong>At night</strong>, the fare rises to MAD 150–240 for the same ride. <strong>With four or more</strong>, a petit taxi only takes three passengers: two cars, so MAD 200–300 by day and up to MAD 480 at night. <strong>For a hard-to-reach riad</strong>, the driver stops at the gate that suits him, which can add fifteen minutes of walking with your bags. At €27 per vehicle for up to seven people, a pre-booked transfer then becomes both the cheapest and the most comfortable option.</p>

<h2>The real issue: drop-off at the medina gates</h2>
<p>No car can enter the narrow <em>derbs</em>, and several access points are closed to traffic. The driver stops at the nearest <em>bab</em>: Bab Doukkala in the north-west, Bab Laksour near the Koutoubia, Bab Agnaou in the south, Bab el Khemis in the east. You finish on foot, usually three to ten minutes.</p>
<div class="callout">
<span class="callout-label">Two questions to ask your riad</span>
<p>Before you travel, ask for the exact name of the drop-off gate, and whether a porter with a handcart can meet you. Most riads do this free or for a few dirhams if you give them your arrival time.</p>
</div>

<h2>Arriving at night at Marrakech Menara Airport</h2>
<p>After 11.30 pm, bus 19 no longer runs: you are left with a taxi at the night fare or a pre-booked transfer. Withdraw dirhams at the ATM in the arrivals hall before leaving, as taxis do not take cards. Let your riad know too: many lock their door at night and send someone to meet you at the <em>bab</em> if they know your arrival time.</p>
`,
  faqHeading: "Marrakech Menara Airport transfers: frequently asked questions",
  faqs: [
    { q: "Is there a shuttle at Marrakech airport?", a: "There is no free public shuttle. ALSA bus 19 acts as a shuttle to Jemaa el-Fna (MAD 30, 6 am to 11.30 pm), and many riads and hotels offer a paid shuttle on request. A pre-booked transfer from €27 per vehicle is the simplest private shuttle." },
    { q: "What transport should I take if I land in Marrakech at midnight?", a: "A pre-booked transfer, which waits even if you are delayed and drops you at the medina gate closest to your riad. A taxi is still possible at the night fare, MAD 150 to 240 per car. Bus 19 stops running at about 11.30 pm." },
    { q: "How much is a taxi from Marrakech airport to the medina?", a: "MAD 100 to 150 per car by day and MAD 150 to 240 at night, for the medina, Gueliz or Hivernage. The price is per vehicle, with three passengers at most in a petit taxi. Agree it before loading your bags." },
    { q: "How much is a private transfer from Marrakech Menara Airport?", a: "From €27 per vehicle for up to 7 passengers to the medina, Gueliz or Hivernage, with flight tracking. Expect more for the Palmeraie or an Agafay camp, and about €95 to Essaouira." },
    { q: "Can I pay for a taxi by card?", a: "No, Marrakech taxis are paid in cash, in dirhams. There are ATMs and exchange desks in the arrivals hall. A pre-booked transfer is paid online or to the driver, depending on the provider." },
    { q: "Is there a train from Marrakech airport to the city?", a: "No, no railway serves the airport. The ONCF station is in Gueliz, with trains to Rabat, Fez and Tangier: you get there by taxi, transfer or bus." },
    { q: "Can I use Uber, Careem or inDrive at the airport?", a: "Do not rely on them for your arrival. Uber returned to Marrakech in late November 2025, but only with licensed tourist transport operators and patchy availability; Careem and inDrive operate in a grey area. In town, these apps can help." },
    { q: "Can the driver drop me at my riad's door?", a: "Almost never: medina lanes are too narrow for cars. The driver stops at the nearest gate and you finish on foot, usually 3 to 10 minutes. Ask your riad for a porter." },
    { q: "How do I get from Marrakech airport to Essaouira?", a: "The simplest way is a private transfer, about €95 per vehicle for a 2.5 to 3 hour drive. Supratours and CTM buses leave from the city, not the airport, so you first need a taxi to their station." },
  ],
  cta: {
    heading: "Your ride sorted before take-off",
    text: "Fixed price per vehicle, a driver waiting with your name and flight tracking. Or a car to head off into the Atlas.",
    label: "Book a transfer",
    secondary: { label: "Hire a car", key: 'carRental' },
  },
} satisfies LocalizedPage;
