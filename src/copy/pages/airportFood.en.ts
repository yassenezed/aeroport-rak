import type { LocalizedPage } from '../types';

export default {
  title: "Marrakech Menara Airport restaurants: food and duty free",
  description: "Restaurants and shops at Marrakech Menara Airport: Starbucks, Paul, cafés before and after security, duty free, opening hours and McDonald's.",
  eyebrow: "Restaurants · cafés · duty free",
  h1: "Restaurants and shops at Marrakech Menara Airport",
  lede: "A coffee before boarding, a sandwich for the flight, a last perfume at duty free: the airport's offer is decent but limited, and shrinks sharply at night. Here is what you will find, on which side of security, and our tips to avoid boarding hungry.",
  highlights: [
    { icon: 'coffee', value: "6 brands", label: "Cafés and quick food identified" },
    { icon: 'shop', value: "Duty free", label: "Departures side, after security" },
    { icon: 'moon', value: "Reduced offer", label: "Few counters open at night" },
    { icon: 'wallet', value: "Cards accepted", label: "At most outlets" },
  ],
  cardSections: [
    {
      eyebrow: "Eat and drink",
      heading: "Cafés and restaurants at Marrakech Menara Airport",
      intro: "The brands present in the terminals. Exact locations and hours change with works and seasons: follow the signs on site.",
      variant: 'feature',
      items: [
        { icon: 'coffee', title: "Starbucks", text: "Coffee, hot and cold drinks, pastries: the best-known spot before boarding.", tags: ["Coffee", "Snacks"] },
        { icon: 'coffee', title: "Paul", text: "French bakery: sandwiches, salads and pastries, handy to take a meal on board.", tags: ["Bakery", "Takeaway"] },
        { icon: 'coffee', title: "La Table du Marché", text: "A calmer sit-down option with dishes, salads and desserts, for a real meal before a long flight.", tags: ["Restaurant", "Full meal"] },
        { icon: 'coffee', title: "Segafredo", text: "Italian coffee bar: espresso, drinks and light bites.", tags: ["Coffee", "Quick"] },
        { icon: 'coffee', title: "Pomme de Pain", text: "Sandwiches, wraps and quick meal deals at reasonable prices.", tags: ["Fast food", "Meal deals"] },
        { icon: 'coffee', title: "Maymana", text: "Snack and sweets counter to pass the time between security and the gate.", tags: ["Snacks", "Sweets"] },
      ],
    },
    {
      eyebrow: "Shopping",
      heading: "Shops and duty free at the airport",
      variant: 'feature',
      items: [
        { icon: 'shop', title: "Duty free (departures)", text: "After passport control: perfumes, cosmetics, alcohol, tobacco and confectionery, with brands such as Victoria's Secret, Lacoste or Montblanc.", tags: ["After security", "Boarding pass required"] },
        { icon: 'sparkles', title: "Crafts and souvenirs", text: "Argan oil, Moroccan cosmetics, packaged spices and small crafts: convenient, but pricier than in the medina.", tags: ["Souvenirs", "Airport prices"] },
        { icon: 'book', title: "Press and travel goods", text: "Newspapers, books, adapters, chargers and water bottles for the flight.", tags: ["Essentials", "Before and after security"] },
      ],
    },
  ],
  body: `
<h2>Before or after security: where to eat at Marrakech Menara Airport?</h2>
<p>On departure, security and passport control can take from 30 minutes to over an hour in high season. The right habit: <strong>clear the checks first</strong>, then settle airside, where the duty free and most cafés are. Landside, the offer is limited to a few cafés and snack counters, useful for those seeing someone off or waiting for an <a href="/en/arrivals/">arrival</a>.</p>
<div class="callout">
<span class="callout-label">Night or very early flight</span>
<p>Between midnight and 5 am, most counters are closed or run a minimal service. Have dinner in town before leaving and keep a bottle of water bought after security.</p>
</div>

<h2>Is there a McDonald's at Marrakech airport?</h2>
<p>To our knowledge, <strong>there is no McDonald's inside Marrakech Menara Airport</strong> today. The nearest ones are in town: avenue Mohammed V in Gueliz, near the train station and in the malls (Carré Eden, Menara Mall), 10–15 minutes by car. For a quick meal on site, Paul and Pomme de Pain are the closest alternatives.</p>

<h2>Duty free at Marrakech Menara Airport</h2>
<p>The duty free is on the departures side, after passport control: your boarding pass is requested at the till. You will find perfumes, cosmetics, alcohol, tobacco, chocolates and a selection of Moroccan products. Prices are in line with international duty free: for argan oil and crafts, the medina is much cheaper if you have time to compare.</p>
<p class="small">Liquids bought at duty free: keep them in the sealed bag with the receipt, especially if you have a connection in Europe.</p>

<h2>Prices and payment</h2>
<p>Expect airport prices: around <strong>MAD 30 to 50 (≈ €3 to 5) for a coffee</strong> and MAD 60 to 120 (≈ €6 to 11) for a sandwich or meal deal. Cards are accepted at most outlets, and euros often too, with change given in dirhams at a poor rate. Keep a few dirhams for small purchases.</p>

<h2>Other services worth knowing</h2>
<p>Wi-Fi, exchange offices, ATMs, VIP lounges and prayer room: see our <a href="/en/services/">airport services</a> page, and check-in details on the <a href="/en/departures/">departures</a> page.</p>
`,
  faqHeading: "Marrakech Menara Airport restaurants: frequently asked questions",
  faqs: [
    { q: "Is there a McDonald's at Marrakech airport?", a: "No, to our knowledge there is no McDonald's inside the airport. The nearest are in town, in Gueliz and in the Carré Eden and Menara Mall shopping centres, 10–15 minutes by car." },
    { q: "Where can I eat at Marrakech airport?", a: "The main brands are Starbucks, Paul, La Table du Marché, Segafredo, Pomme de Pain and Maymana. Most of the offer is on the departures side, after security." },
    { q: "Are there restaurants after security?", a: "Yes, the boarding area holds most of the cafés and the duty free. Clear the checks first, then eat near your gate." },
    { q: "Are the airport restaurants open at night?", a: "Very few. Between midnight and 5 am, most counters are closed or on minimal service: have dinner in town before a night flight." },
    { q: "Where is the duty free at Marrakech Menara Airport?", a: "On the departures side, after passport control. Your boarding pass is requested when you pay." },
    { q: "What can you buy at Marrakech duty free?", a: "Perfumes, cosmetics, alcohol, tobacco, chocolates and Moroccan products such as argan oil, with brands like Victoria's Secret, Lacoste or Montblanc." },
    { q: "Can I pay by card at the airport restaurants?", a: "Yes, at most outlets. Euros are often accepted, but change is given in dirhams at an unfavourable rate." },
    { q: "How much is a coffee at Marrakech airport?", a: "Around MAD 30 to 50 (≈ €3 to 5) for a coffee and MAD 60 to 120 (≈ €6 to 11) for a sandwich or meal deal." },
  ],
  cta: {
    heading: "Dinner in town, then a stress-free ride to the airport",
    text: "A driver picks you up at your hotel or the nearest medina gate, fixed price per vehicle, even for a night flight.",
    label: "Book a transfer",
    secondary: { label: "See airport services", key: 'services' },
  },
} satisfies LocalizedPage;
