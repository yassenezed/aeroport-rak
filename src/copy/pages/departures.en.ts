import type { LocalizedPage } from '../types';

export default {
  title: 'Marrakech Airport departures (RAK): live board',
  description: 'Live departures from Marrakech Menara Airport: when to arrive, check-in, exit passport control, VAT refunds and the shops airside.',
  eyebrow: 'Marrakech Menara · Departures',
  h1: 'Departures from Marrakech Airport',
  lede: "The board tracks flights leaving Menara live. Below: when to turn up, where the queues actually form, and how not to spend your last hour in Morocco standing in a corridor.",
  widget: 'flights-departures',
  body: `
<h2>When to turn up</h2>
<p>The rule that works in Marrakech: <strong>two hours before a Schengen flight, three in high season</strong> or whenever you have hold luggage. Check-in is not the problem — it is quick. Exit passport control is RAK's bottleneck. The peaks fall between 6 and 9 am, then again in the late afternoon when the European rotations head back.</p>
<p>Leave your accommodation accordingly. From the medina, allow 20 to 30 minutes on the road plus the walk to the gate with your cases. Book your return the night before, through your riad or as a transfer: finding a taxi at 5 am in a narrow lane is anything but reliable, and the night rate applies until daybreak.</p>

<h2>The departure sequence</h2>
<ol>
<li><strong>Terminal entry check.</strong> Bags are screened at the door of the building, before the desks.</li>
<li><strong>Check-in.</strong> Counters usually open two to three hours before the flight. Online check-in saves time, but not for the hold: bag drop goes through the desk.</li>
<li><strong>Border police.</strong> The longest step. Exit form to complete, passport and entry stamp checked.</li>
<li><strong>Security.</strong> Liquids limited to 100 ml per container, electronics out of the bag.</li>
<li><strong>Airside.</strong> Duty-free shops, cafés, lounges and gates.</li>
</ol>

<h2>What you can take out, and what you cannot</h2>
<p>Dirhams cannot be exported beyond a token amount: change your notes back <em>before</em> border police, at the bureaux de change in the public hall. Once airside you will no longer be able to do it on decent terms. Keep the receipt from your original exchange — some counters ask for it.</p>
<p>On souvenirs: spices, argan oil and any cosmetic over 100 ml go in the hold, without exception. Pottery and fragile items travel badly without serious packing; most medina sellers will prepare a parcel for the flight if you ask.</p>
<div class="callout">
<span class="callout-label">VAT refund</span>
<p>Morocco refunds VAT to non-residents on certain purchases from approved retailers, with a form to be stamped at the airport customs desk <strong>before</strong> you check your bags, goods available for inspection. Worth it for a rug or a piece of silverware, rarely for babouches.</p>
</div>

<h2>Lounges and waiting</h2>
<p>RAK's airside area is decently equipped, but it fills at the same hours as the queues. If you fly out late in the day or face a long connection, lounge access transforms the wait — one of the few comfort purchases that genuinely pays here. Our dedicated page covers the <a href="/en/blog/marrakech-airport-vip-lounges/">lounges at Marrakech Airport</a> and how to get in.</p>
`,
  faqs: [
    {
      q: 'How early should you arrive at Marrakech Airport?',
      a: "Two hours for a Schengen flight, three in high season or with hold luggage. Exit passport control is the congestion point, especially between 6 and 9 am and in the late afternoon.",
    },
    {
      q: 'Can you take dirhams out of Morocco?',
      a: "No, the dirham cannot be exported beyond a token amount. Change your notes back at the bureaux de change in the public hall, before border police: once airside it is no longer possible on decent terms. Keep the receipt from your original exchange.",
    },
    {
      q: 'Is there a VAT refund at Marrakech Airport?',
      a: "Yes, for non-residents, on purchases from approved retailers. The form must be stamped at the customs desk before you check your bags, with the goods available for inspection. It mainly concerns higher-value purchases such as a rug or silverware.",
    },
    {
      q: 'How do you get to the airport from the medina in the morning?',
      a: "Book the night before, through your riad or as a transfer: finding a taxi at 5 am in a lane is unreliable, and the night rate applies until daybreak. Allow 20 to 30 minutes on the road plus the walk to the gate with your cases.",
    },
    {
      q: 'Can you take argan oil in hand luggage?',
      a: "Only in containers of 100 ml or less, together in a clear plastic bag. Beyond that, argan oil, liquid spices and cosmetics go in the hold. Items bought in the duty-free area after security are not subject to this limit.",
    },
  ],
  cta: {
    heading: 'Your ride back to the airport, settled the night before',
    text: "A driver at the right medina gate at the agreed time, fixed price, even at 5 am. Free cancellation on most bookings.",
    label: 'Book my return transfer',
  },
} satisfies LocalizedPage;
