import type { LocalizedPage } from '../types';

export default {
  title: "Luxury car hire at Marrakech Menara Airport",
  description: "Hiring a premium saloon, SUV or convertible at Marrakech Menara Airport: models available, rates, high deposits and the chauffeur alternative.",
  eyebrow: 'Marrakech Menara · Premium',
  h1: 'Luxury car hire in Marrakech',
  lede: "Marrakech is one of the few Moroccan cities where genuine high-end cars are available to hire. Here are the models you will find, what they cost, and the question to settle before signing: drive yourself, or be driven?",
  body: `
<h2>What is actually available at RAK</h2>
<p>Marrakech's premium fleet falls into three families. <strong>German saloons</strong> — Mercedes C and E-Class, BMW 3 and 5 Series, Audi A4 and A6 — for business travel and runs to Casablanca. <strong>Premium SUVs</strong> — Range Rover, Porsche Cayenne, Mercedes GLE — which remain the most requested, because they handle the Agafay tracks and the Tichka road effortlessly. And a handful of <strong>convertibles and sports cars</strong>, Mustangs foremost, hired mainly by the day for an occasion.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Category</th><th>Per day</th><th>Typical deposit</th></tr></thead>
<tbody>
<tr><td><strong>Premium saloon</strong></td><td class="num">€110–180</td><td class="num">MAD 20,000–30,000</td></tr>
<tr class="row-highlight"><td><strong>Premium SUV</strong></td><td class="num">€150–280</td><td class="num">MAD 30,000–50,000</td></tr>
<tr><td><strong>Convertible / sports</strong></td><td class="num">€200–400</td><td class="num">MAD 40,000–60,000</td></tr>
<tr><td><strong>VIP van with driver</strong></td><td class="num">€150–250</td><td class="num">none</td></tr>
</tbody>
</table>
</div>

<h2>The conditions are stricter</h2>
<p>In these categories expect a <strong>minimum age of 25 to 30</strong>, a licence held for at least three to five years, and a deposit well above ordinary card limits. Warn your bank before travelling so your authorisation ceiling can be raised temporarily: this is the number one reason for refusal at the desk, and it cannot be fixed on the spot.</p>
<p>Some companies also ask for proof of address and cap the mileage or forbid leaving the country — worth checking if you plan to head south.</p>
<div class="callout">
<span class="callout-label">The question to ask honestly</span>
<p>A premium SUV at €200 a day, parked outside a riad because the medina is pedestrian, costs the same as a private chauffeur for the day who waits, drops you off and handles the parking. If your stay is urban, the second option is more comfortable — and often cheaper overall.</p>
</div>

<h2>Car with driver: the real competitor</h2>
<p>In Marrakech, hiring a vehicle with a driver is a routine, well-organised service at a price comparable to premium rental. You get a van or saloon, a driver who knows the Atlas roads and the access points, and no worries about parking, deposits or inspections.</p>
<p>It stands out for three uses in particular: <strong>long-distance runs</strong> to Ouarzazate or Essaouira, where the road demands attention; <strong>business travel</strong> with several meetings in a day; and <strong>family stays</strong>, where nobody wants to drive after a day in the mountains.</p>

<h2>Booking properly</h2>
<p>The premium fleet is small: in Marrakech, the same cars circulate between several agencies. In high season — spring, the festive period, major events — book several weeks ahead and have the <strong>exact model</strong> confirmed in writing, not just the category. Photograph the car in detail on collection: in these ranges, a single kerbed wheel runs into thousands of dirhams.</p>
`,
  faqs: [
    {
      q: 'How much is luxury car hire in Marrakech?',
      a: "€110–180 a day for a premium saloon, €150–280 for an SUV such as a Range Rover or Cayenne, and €200–400 for a convertible or sports car. Deposits range from MAD 20,000 to 60,000 depending on the model.",
    },
    {
      q: 'What age do you need to hire a high-end car in Morocco?',
      a: "Usually 25 minimum, sometimes 30 for sports cars, with three to five years of licence. Proof of address may be requested, and some contracts cap mileage or forbid leaving the country.",
    },
    {
      q: 'Premium hire car or a chauffeur?',
      a: "For an urban stay, a chauffeur is more comfortable and often cheaper overall: no deposit, no parking, no inspection, and a car that waits for you. Premium hire keeps its appeal for a road trip where the driving is part of the trip.",
    },
    {
      q: 'Will my bank card cover the deposit?',
      a: "Rarely without preparation: deposits of MAD 30,000 to 60,000 exceed standard limits. Have your authorisation ceiling raised temporarily before you travel — it is the leading cause of refusal at the desk and cannot be resolved there.",
    },
  ],
} satisfies LocalizedPage;
