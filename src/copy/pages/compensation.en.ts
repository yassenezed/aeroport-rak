import type { LocalizedPage } from '../types';

export default {
  title: "Delayed flight at Marrakech Menara Airport: your rights",
  description: "Delayed, cancelled or overbooked flight at Marrakech Menara Airport: when compensation applies, how much to claim and how to build the file.",
  eyebrow: 'Marrakech Menara · Your rights',
  h1: 'Delayed or cancelled flight in Marrakech: what can you claim?',
  lede: "A three-hour delay leaving Marrakech can be worth €400 per passenger — but only in certain cases. Here is the rule that applies, the amounts, and the evidence to gather before you leave the airport.",
  body: `
<h2>Which rules apply when leaving Marrakech?</h2>
<p>European regulation <strong>EC 261/2004</strong> covers all flights <em>departing</em> an EU airport, whatever the airline, and flights <em>arriving</em> in the EU when operated by an EU carrier. In practice, for a Marrakech–Europe trip:</p>
<ul>
<li><strong>Marrakech → Paris on Transavia, Ryanair, easyJet, Air France, Vueling…</strong>: covered, because the airline is European.</li>
<li><strong>Marrakech → Paris on Royal Air Maroc</strong>: not covered by EC 261, since the carrier is not European and departure is outside the EU. What remains are the conditions of carriage and the Montreal Convention.</li>
<li><strong>Paris → Marrakech, any airline</strong>: covered, because departure takes place within the EU.</li>
</ul>
<p>UK passengers should note that UK261, the retained version of the rules, applies on the same logic to flights departing the UK or operated by a UK carrier into it, with amounts set in pounds.</p>

<h2>The amounts</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Flight distance</th><th>Compensation</th><th>Examples from Marrakech</th></tr></thead>
<tbody>
<tr><td>Under 1,500 km</td><td class="num">€250</td><td>Malaga, Seville, Lisbon</td></tr>
<tr class="row-highlight"><td>1,500 to 3,500 km</td><td class="num">€400</td><td>London, Paris, Brussels, Milan</td></tr>
<tr><td>Over 3,500 km (outside EU)</td><td class="num">€600</td><td>Montreal, Dubai</td></tr>
</tbody>
</table>
</div>
<p>These amounts are due <strong>per passenger</strong>, including children holding a ticket, and come on top of a refund or re-routing. They are unrelated to the ticket price: a €39 flight can attract €400 in compensation.</p>

<h2>When are you entitled?</h2>
<ul>
<li><strong>A delay of three hours or more</strong> at your final destination.</li>
<li><strong>Cancellation</strong> announced less than 14 days before departure, without equivalent re-routing.</li>
<li><strong>Denied boarding</strong> due to overbooking, when you were present on time.</li>
<li><strong>A missed connection</strong> on a single booking, caused by the first flight's delay.</li>
</ul>
<p>Compensation falls away in cases of <strong>extraordinary circumstances</strong>: weather making the flight impossible, air traffic control strikes, airspace closure, medical emergencies on board. Note that a strike by the airline's own staff generally does not qualify, and neither does a technical fault.</p>

<h2>What the airline owes you on the spot</h2>
<p>Independently of compensation, the right to care applies from <strong>two hours of delay</strong> on a short flight: meals and refreshments proportionate to the wait, two communications, and accommodation with transfers if departure moves to the next day. In Marrakech, in high season, these must be claimed actively at the desk: they are not offered systematically.</p>
<div class="callout">
<span class="callout-label">Evidence to gather before you leave the airport</span>
<p>Photograph the departure board showing the delay, keep your boarding pass, ask the airline desk for a <strong>written delay confirmation</strong>, and retain every receipt — meals, hotel, taxi. Claims are won or lost on those documents.</p>
</div>

<h2>Claiming: the airline first, an intermediary second</h2>
<p>Send a first written claim to the airline, by recorded post or through its online form, citing EC 261/2004, your flight number and the length of the delay. Many straightforward cases settle at this stage, within a few weeks.</p>
<p>If refused or ignored, specialist firms take over with no upfront fee, against a commission of 25 to 35 % on whatever is recovered. It is a trade-off: you receive less, but you handle nothing and only pay on success. Limitation periods vary by country — around six years in the UK and five in France — so an older claim is often still viable.</p>
`,
  faqs: [
    {
      q: 'Am I entitled to compensation if my Marrakech–London flight is four hours late?',
      a: "Yes if the airline is European or British — Ryanair, easyJet, British Airways, Transavia, Vueling — since the rules then apply even on departure from Morocco. The amount is €400 per passenger for that distance. On Royal Air Maroc, the European regulation does not apply to a departure from Marrakech.",
    },
    {
      q: 'How much can you claim for a cancelled flight from Marrakech?',
      a: "€250 for a flight under 1,500 km, €400 between 1,500 and 3,500 km — which covers London, Paris, Brussels and Milan — and €600 beyond. These sums are due per passenger and come on top of a refund or re-routing.",
    },
    {
      q: 'Does bad weather cancel my right to compensation?',
      a: "Yes, weather making the flight impossible counts as an extraordinary circumstance that exempts the airline. A technical fault or a strike by the airline's own staff generally does not, and those do attract compensation.",
    },
    {
      q: 'What must the airline provide while I wait at the airport?',
      a: "From two hours of delay on a short flight: meals and refreshments proportionate to the wait, two communications, and accommodation with transfers if departure moves to the next day. In Marrakech these must be requested at the desk, as they are not always offered.",
    },
    {
      q: 'How long do you have to file a claim?',
      a: "Limitation periods vary by the country where the claim is brought — roughly six years in the UK and five in France — so older flights can often still be pursued. Keep boarding passes, written confirmations and receipts from the day of the flight.",
    },
  ],
} satisfies LocalizedPage;
