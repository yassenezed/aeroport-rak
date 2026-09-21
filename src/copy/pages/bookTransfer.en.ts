import type { LocalizedPage } from '../types';

export default {
  title: 'Book a Marrakech Airport transfer online',
  description: 'Book a private transfer from Marrakech Airport: fixed price per vehicle, flight tracking, medina gate drop-off and free cancellation.',
  eyebrow: 'Marrakech Menara · Booking',
  h1: 'Book a transfer from Marrakech Airport',
  lede: "Enter your destination and landing time: the price shows per vehicle, not per passenger. A driver meets you outside arrivals with your name and drops you at the medina gate nearest your riad.",
  widget: 'transfer',
  body: `
<h2>What a booking includes</h2>
<ul>
<li><strong>A fixed price per vehicle</strong>, known before you travel, for up to seven passengers in a minivan. Nothing to negotiate on arrival.</li>
<li><strong>Flight-number tracking</strong>: if you land an hour late, the driver adjusts and waits.</li>
<li><strong>Free waiting time</strong> after landing — usually 45 to 60 minutes, enough for police and baggage.</li>
<li><strong>Free cancellation</strong> up to 24 hours before pickup with most operators.</li>
<li><strong>Child seats</strong> on request, to be flagged when booking: they are almost never available in a rank taxi.</li>
</ul>

<h2>Choosing the right vehicle</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Vehicle</th><th>Passengers</th><th>Suitcases</th><th>Who for</th></tr></thead>
<tbody>
<tr><td><strong>Saloon</strong></td><td class="num">1–3</td><td class="num">2–3</td><td>Couple or trio with cabin bags and one case</td></tr>
<tr class="row-highlight"><td><strong>Minivan</strong></td><td class="num">4–7</td><td class="num">5–7</td><td>Family, group of friends, best value per seat</td></tr>
<tr><td><strong>Minibus</strong></td><td class="num">8–15</td><td class="num">10+</td><td>Groups, conferences, weddings</td></tr>
<tr><td><strong>4x4 or premium van</strong></td><td class="num">1–6</td><td class="num">4–6</td><td>Desert camps, Agafay tracks, business travel</td></tr>
</tbody>
</table>
</div>
<p>The point to remember: since the fare is per vehicle, a minivan for four or five works out far cheaper per person than two petits taxis, which are capped at three passengers each.</p>

<h2>What to have ready</h2>
<p>Booking takes two minutes if you have these to hand: your <strong>flight number</strong> and landing time; the <strong>exact name of your riad or hotel</strong>; for the medina, the <strong>drop-off gate</strong> your accommodation has given you; the number of passengers and suitcases; and a <strong>phone number reachable in Morocco</strong>, ideally WhatsApp, which most drivers use.</p>
<div class="callout">
<span class="callout-label">Book both directions</span>
<p>The return is often trickier than the arrival: at 5 am, in a medina lane, there is no taxi queue. Booking a return in one go usually costs less than two separate trips and removes the problem entirely.</p>
</div>

<h2>High season: book early</h2>
<p>European school holidays, spring bank holidays, the Marathon des Sables and the Christmas period drain large-vehicle availability before anything else. If you travel as a party of five or more between December and April, booking several weeks ahead is not excessive caution: it is simply what stops you splitting your group across three cars.</p>
`,
  faqs: [
    {
      q: 'Is the price shown per person or per vehicle?',
      a: "Per vehicle. A €27 transfer to the medina covers up to seven passengers in a minivan, luggage included. That is what makes it markedly cheaper than a taxi from four people onwards, since a petit taxi is capped at three.",
    },
    {
      q: 'What happens if my flight is delayed?',
      a: "The driver tracks your flight number and adjusts the pickup time. Free waiting of 45 to 60 minutes after landing is usually included, which covers border police and baggage reclaim.",
    },
    {
      q: 'Can a booked transfer be cancelled?',
      a: "With most operators, yes: free cancellation up to 24 hours before pickup, with a full refund. The exact terms appear on your confirmation voucher before payment.",
    },
    {
      q: 'Can you request a child seat?',
      a: "Yes, flag it when booking and state the child's age and weight. It is a decisive argument for a transfer: rank taxis practically never carry them.",
    },
    {
      q: 'Where does the driver wait at Marrakech Airport?',
      a: "Outside the arrivals hall, holding a sign with your name. The exact meeting point is on your confirmation voucher. Message them as soon as you pick up signal, before customs.",
    },
    {
      q: 'Do you pay online or on the day?',
      a: "Both exist depending on the operator. Booking online locks the fare, and many providers allow deferred payment or payment to the driver. If you pay on the day, bring dirhams: cards are not always accepted in the vehicle.",
    },
  ],
  cta: {
    heading: 'Your transfer, sorted in two minutes',
    text: "Compare the vehicles available for your landing time and lock the fare. Free cancellation on most bookings.",
    label: 'Check availability',
  },
} satisfies LocalizedPage;
