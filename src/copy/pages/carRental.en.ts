import type { LocalizedPage } from '../types';

export default {
  title: 'Car hire at Marrakech Airport',
  description: 'Hiring a car at Marrakech Airport: real prices, deposits, excess, vehicle inspection, driving in Morocco and when a car is useless.',
  eyebrow: 'Marrakech Menara · Car hire',
  h1: 'Hiring a car at Marrakech Airport',
  lede: "A car opens up the Atlas, the Ourika, Essaouira and the south. It becomes a liability if you stay in the medina. Here is how to decide, what hire really costs at RAK, and the three lines of the contract that matter.",
  facts: [
    { label: 'From', value: '€25', sub: '/ day' },
    { label: 'Typical deposit', value: '5,000–15,000', sub: 'MAD' },
    { label: 'Minimum age', value: '21', sub: 'years' },
    { label: 'Licence', value: 'National', sub: 'accepted' },
  ],
  body: `
<h2>Do you actually need a car in Marrakech?</h2>
<p>Ask before booking; it settles everything. <strong>If you are staying in Marrakech</strong>: no. The medina is pedestrian, city parking is paid and handled by informal attendants, the traffic takes real getting used to, and a taxi costs MAD 15–50 a ride. A car sitting five days outside a riad is money burnt.</p>
<p><strong>If you are leaving town</strong>: yes, without hesitation. Ourika, Imlil, Agafay, Essaouira, the Tichka and Ouarzazate are infinitely better visited independently than on an organised tour, and Morocco's main roads are in good condition.</p>
<div class="callout">
<span class="callout-label">The most efficient arrangement</span>
<p>Do not take the car on landing. Spend your first two days in the medina without a vehicle, then hire for the three days of excursions, from a Gueliz agency or the airport. You save two days of hire and two nights of parking.</p>
</div>

<h2>Real prices, beyond the headline</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Category</th><th>Per day</th><th>For</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>City car</strong> (Dacia Sandero, Kia Picanto)</td><td class="num">€25–35</td><td>Couple, paved roads</td></tr>
<tr><td><strong>Compact</strong> (Clio, Polo)</td><td class="num">€35–45</td><td>Comfort, effective air conditioning</td></tr>
<tr><td><strong>SUV / 4x4</strong> (Duster, Sportage)</td><td class="num">€55–90</td><td>Tracks, Atlas, Agafay</td></tr>
<tr><td><strong>7-seat minivan</strong></td><td class="num">€70–110</td><td>Family, group</td></tr>
</tbody>
</table>
</div>
<p>Add fuel — diesel runs around MAD 12–14 a litre — tolls on the Casablanca or Agadir motorways, and the excess waiver if you take it.</p>

<h2>The three lines of the contract that matter</h2>
<h3>The deposit</h3>
<p>Between MAD 5,000 and 15,000, held on a credit card <strong>in the main driver's name</strong>. Deferred-debit and prepaid cards are often refused. Check your limit before travelling: it is the most common reason for a refusal at the desk.</p>
<h3>The excess</h3>
<p>The basic contract almost always carries a high excess, payable by you in case of damage. Three routes: accept the risk, buy the hire company's waiver (expensive, €10–20 a day), or use third-party excess insurance at lower cost — knowing that in that case you pay up front and reclaim afterwards.</p>
<h3>The inspection</h3>
<p>This is where disputes are decided. <strong>Photograph and film the car from every angle before you leave</strong>, including wheels, windscreen, roof and interior, with timestamping on. Have every scratch noted on the form. On return, repeat exactly the same sequence. Those ten minutes are the best-value precaution of your trip.</p>

<h2>Driving in Morocco</h2>
<p>A national licence is enough for a tourist stay. Driving is on the right, limits are 60 km/h in town, 100 km/h on open roads and 120 km/h on motorways, and both fixed and mobile speed cameras are numerous and active. The local rule to absorb: <strong>priority is negotiated by eye contact more than by sign</strong>, and two-wheelers, carts and pedestrians appear without warning. At night outside towns, watch for vehicles running without lights.</p>
<p>The gendarmerie checks frequently on intercity roads: keep licence, rental agreement and passport to hand. Fines are settled on the spot against a receipt.</p>
`,
  faqs: [
    {
      q: 'How much does car hire cost at Marrakech Airport?',
      a: "From €25–35 a day for a city car, €35–45 for a compact, and €55–90 for an SUV or 4x4. Add fuel at around MAD 12–14 a litre of diesel, tolls and any excess waiver.",
    },
    {
      q: 'What deposit is required to hire a car in Morocco?',
      a: "Between MAD 5,000 and 15,000 depending on the category, held on a credit card in the main driver's name. Prepaid and some deferred-debit cards are refused: check your limit before travelling.",
    },
    {
      q: 'Is a national driving licence enough in Morocco?',
      a: "Yes, a national licence is sufficient for a tourist stay; an international permit is not required. Keep licence, rental agreement and passport accessible, as gendarmerie checks are frequent on intercity roads.",
    },
    {
      q: 'Do you need a 4x4 for the Atlas from Marrakech?',
      a: "No for Ourika, Imlil or the Tichka pass, which are paved and fine in a city car. A 4x4 only becomes useful for the Agafay tracks, remote valleys and unsurfaced approaches, where ground clearance matters more than drivetrain.",
    },
    {
      q: 'Better to hire at the airport or in town?',
      a: "At the airport if you are leaving immediately on a road trip. In Gueliz if you start with two days in the medina: you save the hire days and the parking during which the car would sit unused.",
    },
  ],
  cta: {
    heading: 'You do not need a car on day one',
    text: "A transfer drops you at your riad, and you take the wheel only when you head for the Atlas or the coast.",
    label: 'Book a transfer',
  },
} satisfies LocalizedPage;
