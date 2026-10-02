import type { LocalizedPage } from '../types';

export default {
  title: "Luxury car hire at Marrakech Menara Airport from MAD 1,200",
  description: "Hire a premium saloon, SUV or convertible at Marrakech Menara Airport: models, prices from MAD 1,200 a day, deposit and the chauffeur-driven option.",
  eyebrow: "Premium car hire · saloons and SUVs",
  h1: "Luxury car hire at Marrakech Menara Airport",
  lede: "Marrakech is one of the few Moroccan cities where high-end cars can genuinely be hired. Here are the models available, their prices, the stricter conditions to expect, and the real question: drive yourself or be driven?",
  highlights: [
    { icon: 'star', value: "From MAD 1,200", label: "Per day, premium saloon" },
    { icon: 'check', value: "Automatic", label: "On almost every model" },
    { icon: 'passport', value: "25 years", label: "Most common minimum age" },
    { icon: 'shield-check', value: "Zero excess", label: "Full cover option available" },
  ],
  widget: 'car-rental',
  widgetIntro: {
    heading: "Book a luxury car at Marrakech Menara Airport",
    text: "Type \"Marrakech\" and choose \"Marrakech Airport\", then your dates: filter the results on the premium, SUV or luxury categories.",
  },
  cardSections: [
    {
      eyebrow: "Our selection",
      heading: "Premium cars available in Marrakech",
      variant: 'feature',
      items: [
        { icon: 'star', title: "Premium saloons", text: "Mercedes C and E-Class, BMW 3 and 5 Series, Audi A4 and A6: comfort and discretion for business travel.", tags: ["MAD 1,200–1,950/day", "Leather, GPS"] },
        { icon: 'map', title: "Premium SUVs", text: "Range Rover, Porsche Cayenne, Mercedes GLE: the most requested, at ease on the Agafay tracks and the Tichka road.", tags: ["MAD 1,600–3,000/day", "Large boot"] },
        { icon: 'sun', title: "Convertibles and sports cars", text: "Led by the Ford Mustang, mostly hired by the day for an occasion or a scenic drive.", tags: ["MAD 2,200–4,300/day", "By the day"] },
        { icon: 'users', title: "VIP van with chauffeur", text: "Mercedes V-Class with driver: the choice for groups and business trips, with no deposit.", tags: ["MAD 1,600–2,700/day", "Driver included"] },
      ],
    },
    {
      eyebrow: "Benefits",
      heading: "Why hire a premium car in Marrakech",
      variant: 'feature',
      items: [
        { icon: 'map', title: "Long-distance comfort", text: "Leather seats, suspension and soundproofing make the difference on the roads to Essaouira or Ouarzazate." },
        { icon: 'shield', title: "Advanced safety", text: "Emergency braking, lane keeping, adaptive cruise control: a real plus when travelling with family." },
        { icon: 'check', title: "Automatic as standard", text: "No stress in Marrakech traffic: almost all premium models are automatic." },
        { icon: 'luggage', title: "Tailored welcome", text: "Keys handed over at the airport or the car delivered to your hotel, depending on the company." },
      ],
    },
    {
      eyebrow: "Compare",
      heading: "Premium, economy or minivan?",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Economy", text: "Small cars for a tight budget, perfect for Essaouira and Ourika.", tags: ["From MAD 270/day"], link: { key: 'carBudget', label: "See economy cars" } },
        { icon: 'users', title: "7 to 9-seat minivan", text: "For families and groups, with room for the luggage.", tags: ["From MAD 600/day"], link: { key: 'carMinivan', label: "See minivans" } },
        { icon: 'check', title: "Automatic", text: "Automatic compacts and SUVs at gentler prices than premium.", tags: ["From MAD 490/day"], link: { key: 'carEasy', label: "See automatics" } },
      ],
    },
  ],
  body: `
<h2>Luxury car prices and deposits at Marrakech Menara Airport</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Category</th><th>Price / day</th><th>Typical deposit</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Premium saloon</strong></td><td class="num">≈ MAD 1,200–1,950 (€110–180)</td><td class="num">MAD 20,000–30,000</td></tr>
<tr><td><strong>Premium SUV</strong></td><td class="num">≈ MAD 1,600–3,000 (€150–280)</td><td class="num">MAD 30,000–50,000</td></tr>
<tr><td><strong>Convertible / sports car</strong></td><td class="num">≈ MAD 2,200–4,300 (€200–400)</td><td class="num">MAD 40,000–60,000</td></tr>
<tr><td><strong>VIP van with chauffeur</strong></td><td class="num">≈ MAD 1,600–2,700 (€150–250)</td><td>none</td></tr>
</tbody>
</table>
</div>
<p class="small">Indicative prices in dirhams, converted at an approximate rate of €1 ≈ MAD 10.8. The comparison tool shows the exact price of each offer.</p>

<h2>Stricter conditions</h2>
<p>For these categories, expect a <strong>minimum age of 25 to 30</strong>, a licence held for <strong>3 to 5 years</strong>, and a deposit that often exceeds a card's usual limit. <strong>Tell your bank before you travel</strong> so it can temporarily raise your authorisation limit: it is the number one reason for refusal at the desk, and it cannot be fixed on the spot. Some companies also limit mileage or tracks: check if you plan to head south.</p>
<p>For a car of this value, <strong>zero-excess cover</strong> is strongly recommended: the slightest scuffed rim costs thousands of dirhams. Photograph the car in detail on departure and on return.</p>

<h2>Drive yourself or be driven?</h2>
<p>A premium SUV at ≈ MAD 2,200 (€200) a day, parked outside a riad because the medina is pedestrian, costs as much as a <strong>private driver for the day</strong> who waits, drops you off and handles parking. A driver makes sense for long roads to Ouarzazate or Essaouira, business days with several meetings, and family trips where nobody wants to drive after a day in the Atlas.</p>
<div class="callout">
<span class="callout-label">Book early and confirm the model</span>
<p>The premium fleet is limited and rotates between several agencies. In spring, at the end of the year and during major events, book several weeks ahead and get <strong>the exact model</strong> confirmed in writing, not just the category.</p>
</div>

<h2>Pick-up and delivery</h2>
<p><strong>At the airport</strong>: keys at the desk or in the car park, sometimes handed over at the terminal for luxury models. <strong>At your hotel</strong>: many premium companies deliver to your hotel or the edge of the medina; arrive by <a href="/en/book-transfer/">transfer</a> and receive the car the next day. <strong>One way</strong>: return possible in Essaouira, Fez or Tangier depending on the company, for a supplement.</p>
`,
  faqHeading: "Luxury car hire at Marrakech Menara Airport: frequently asked questions",
  faqs: [
    { q: "How much is a luxury hire car at Marrakech airport?", a: "≈ MAD 1,200 to 1,950 (€110 to €180) a day for a premium saloon, ≈ MAD 1,600 to 3,000 (€150 to €280) for an SUV such as a Range Rover or Cayenne, and ≈ MAD 2,200 to 4,300 (€200 to €400) for a convertible or sports car. Deposits range from MAD 20,000 to 60,000 depending on the model." },
    { q: "Which premium models can I hire in Marrakech?", a: "Mercedes C, E-Class and GLE, BMW 3 and 5 Series, Audi A4 and A6, Range Rover, Porsche Cayenne and a few convertibles such as the Ford Mustang, depending on availability." },
    { q: "What age do I need to be?", a: "25 to 30 depending on the model, with a licence held for 3 to 5 years. Sports cars and the biggest SUVs have the strictest conditions." },
    { q: "Is fully comprehensive cover included?", a: "Basic cover is, with a high excess. For a car of this value, the zero-excess option is strongly recommended: it covers damage, theft and glass." },
    { q: "Can the car be delivered to my hotel?", a: "Yes, many premium companies deliver to your hotel or the edge of the medina, free or for a fee. Mention it when booking." },
    { q: "Are premium cars automatic?", a: "Almost all of them. Still, get the transmission and exact model confirmed in writing, as \"or similar\" guarantees nothing." },
    { q: "Is a premium SUV worth it for a Moroccan road trip?", a: "For Agafay, the southern tracks or a long drive to Ouarzazate, yes: comfort, ground clearance and a large boot. For a city stay, a private driver is often more practical." },
    { q: "Why might my card be refused at the desk?", a: "Because the deposit, often MAD 20,000 to 60,000, exceeds the usual authorisation limit. Ask your bank to raise it temporarily before you travel." },
  ],
  cta: {
    heading: "Ready to experience Marrakech in first class?",
    text: "Compare premium saloons and SUVs from the airport rental companies and book in a few clicks.",
    label: "Compare prices",
    href: "#reserver",
    secondary: { label: "See all categories", key: 'carRental' },
  },
} satisfies LocalizedPage;
