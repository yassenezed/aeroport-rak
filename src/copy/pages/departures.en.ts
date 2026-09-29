import type { LocalizedPage } from '../types';

export default {
  title: "Marrakech Airport Departures (RAK): live flight board",
  description: "Live departures from Marrakech Menara Airport: flight status, when to arrive, check-in, security, VAT refund and how to get to the terminal.",
  eyebrow: "Live board · local time",
  h1: "Marrakech Menara Airport Departures",
  lede: "Track departures from Marrakech Menara Airport (RAK) in real time: times, gates, delays and cancellations. Below: when to arrive, how the checks work and how to reach the terminal without stress.",
  widget: 'flights-departures',
  highlights: [
    { icon: 'clock', value: "--:--", label: "Local time", live: 'clock' },
    { icon: 'clipboard', value: "Opens 3 h before the flight", label: "Check-in" },
    { icon: 'log-out', value: "45 min before take-off", label: "Boarding" },
  ],
  steps: {
    heading: "Departing Marrakech Menara Airport: the 5 steps",
    intro: "The route is the same at Terminal 1 and Terminal 2. Allow 1 to 1.5 hours between the terminal entrance and the gate at peak times.",
    items: [
      { icon: 'shield', title: "Entrance screening", text: "A first bag scan right at the terminal entrance, before the check-in desks. At busy times the queue forms outside." },
      { icon: 'clipboard', title: "Check-in at Marrakech Menara Airport", text: "Desks usually open 3 hours before international flights and close 45 to 60 minutes before. Bags are dropped at the desk, even if you checked in online." },
      { icon: 'passport', title: "Passport control", text: "The longest step. Passport and entry stamp are checked; you may be asked for an exit card, available on site." },
      { icon: 'shield-check', title: "Security", text: "Liquids limited to 100 ml per container in a clear bag; laptops and tablets out of the bag." },
      { icon: 'plane-takeoff', title: "Departure gate", text: "Duty-free shops, cafés and lounges, then the gate. Boarding usually starts about 45 minutes before take-off." },
    ],
  },
  services: {
    heading: "Getting ready to leave Marrakech",
    intro: "Reach the terminal on time, wait in comfort and fly home with peace of mind.",
    items: [
      { icon: 'van', key: 'bookTransfer', title: "Transfer to the airport", text: "Pick-up at your riad or hotel, fixed price even at 5 am.", cta: "Book" },
      { icon: 'car', key: 'transfers', title: "Taxi and bus 19", text: "Taxi fares from the medina and bus 19 times to the airport.", cta: "See fares" },
      { icon: 'parking', key: 'parking', title: "Marrakech airport parking", text: "Hourly and daily rates, and where to drop off a passenger.", cta: "See parking" },
      { icon: 'star', key: 'vipLounges', title: "Marrakech Menara Airport VIP lounges", text: "Access, prices and services of the airside lounges.", cta: "Discover" },
      { icon: 'shield-check', key: 'fastTrack', title: "Fast track", text: "Clear the checks through a dedicated lane at peak times.", cta: "Learn more" },
      { icon: 'alert', key: 'compensation', title: "Delayed or cancelled flight", text: "Your rights and possible compensation depending on the airline.", cta: "Check my rights" },
    ],
  },
  body: `
<h2>How to read the Marrakech Menara Airport departures board</h2>
<p>The board above shows every flight leaving Marrakech Menara Airport, in <strong>Marrakech local time</strong>. Each line gives the scheduled time, destination, flight number, airline and status, updated continuously.</p>
<ul>
<li><strong>Scheduled / On time</strong>: the flight leaves as planned. Check-in may not be open yet.</li>
<li><strong>Check-in</strong>: the desks are open; go straight there if you have hold luggage.</li>
<li><strong>Boarding / Final call</strong>: passengers are boarding. At final call, the gate closes within minutes.</li>
<li><strong>Delayed / Cancelled</strong>: the estimated time replaces the scheduled one. Follow the airline's instructions by text or in its app.</li>
<li><strong>Departed</strong>: the aircraft has left the gate.</li>
</ul>
<p>To follow a flight landing in Marrakech, see the <a href="/en/arrivals/">Marrakech airport arrivals board</a>.</p>

<h2>What time should you get to the airport for a flight from Marrakech?</h2>
<p>The rule that works: <strong>2.5 to 3 hours before a flight to Europe</strong>, 3 hours in high season or whenever you have hold luggage. Check-in is not what slows you down; the two security checks and above all passport control are the airport's bottleneck.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Flight type</th><th>Arrive</th><th>Why</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Europe / UK, hold luggage</strong></td><td class="num">3 h before</td><td>Bag drop, then passport control and security</td></tr>
<tr><td><strong>Europe / UK, cabin bag only</strong></td><td class="num">2.5 h before</td><td>Online boarding pass, but the same checks</td></tr>
<tr><td><strong>High season, holidays, Ramadan</strong></td><td class="num">3.5 h before</td><td>Longer queues at passport control</td></tr>
<tr><td><strong>Domestic flight (Casablanca…)</strong></td><td class="num">1.5 h before</td><td>No passport control</td></tr>
</tbody>
</table>
</div>
<p>Desks usually close 45 to 60 minutes before take-off, and the gate 20 minutes before. A passenger who arrives too late misses the flight, even if the aircraft is still on the ground.</p>

<h2>Peak departure times</h2>
<p>Two waves of departures fill the terminal. The first, <strong>between 6 and 9 am</strong>, is the aircraft that spent the night in Marrakech flying back to Europe early. The second builds in the late afternoon and evening, when low-cost rotations leave one after another. If your flight falls in one of these slots, add half an hour or book the <a href="/en/blog/fast-track-marrakech-airport/">Marrakech airport fast track</a>, which takes you through a dedicated lane.</p>

<h2>Terminal 1 or Terminal 2: where to go?</h2>
<p>Marrakech Menara Airport has two adjoining terminals, linked on foot. <strong>Terminal 1</strong> handles most international flights; <strong>Terminal 2</strong> takes the rest, including some domestic flights and charters. Allocation varies by airline and season: the terminal is on your boarding pass and on the departures board. If in doubt, go to T1; T2 is a few minutes' walk away. The detailed layout is in our <a href="/en/airport-guide/">Marrakech airport guide</a>.</p>

<h2>Getting to Marrakech airport for your flight</h2>
<p>The airport is 6 km from the medina, 15 to 30 minutes by road depending on the time of day. Add the time to walk to the medina gate nearest your riad, suitcases in hand.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Price</th><th>Time</th><th>Good to know</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong><a href="/en/book-transfer/">Pre-booked transfer</a></strong></td><td class="num">from €27 / vehicle</td><td class="num">15–30 min</td><td>Pick-up at the agreed time, even before dawn</td></tr>
<tr><td><strong>Petit taxi</strong></td><td class="num">MAD 70–100 (day)</td><td class="num">15–30 min</td><td>More at night; agree the price before getting in</td></tr>
<tr><td><strong><a href="/en/blog/bus-19-alsa-marrakech/">Bus 19 (ALSA)</a></strong></td><td class="num">MAD 30 / person</td><td class="num">≈ 20 min</td><td>From Jemaa el-Fna and Gueliz, no early-morning service</td></tr>
<tr><td><strong>Hire car</strong></td><td class="num">—</td><td class="num">15–30 min</td><td>Allow 30 extra minutes for the return inspection</td></tr>
</tbody>
</table>
</div>
<p>For a flight before 9 am, book your ride <strong>the day before</strong>, with your riad or as a <a href="/en/book-transfer/">transfer</a>: finding a taxi in a medina lane at 5 am is anything but easy, and the night fare applies until daybreak. Fare details are on the <a href="/en/transfers/">airport transfers and taxis</a> page and in our <a href="/en/blog/taxi-tips-marrakech/">Marrakech taxi tips</a>.</p>

<h2>Dropping someone off or parking</h2>
<p>The drop-off zone in front of the terminal is for very short stops only. To walk someone to the desk, use the <a href="/en/parking/">airport car park</a>: about MAD 20 an hour, MAD 70 to 80 a day. At busy times only ticketed passengers pass the terminal entrance check, so goodbyes often happen outside the doors.</p>

<h2>Dirhams, souvenirs and luggage: what to know</h2>
<p>Dirhams cannot be taken out beyond a token amount: change your last notes <em>before</em> passport control, at the exchange desks in the public hall, and keep the receipt from your original exchange. For souvenirs, argan oil, spices and cosmetics in containers over 100 ml go in the hold, no exceptions. Pottery travels badly without proper packing; most medina sellers know how to prepare a parcel for the plane. More tips in our guide to <a href="/en/blog/money-in-morocco/">money and exchange in Morocco</a>.</p>
<div class="callout">
<span class="callout-label">VAT refund</span>
<p>Morocco refunds VAT to non-residents on certain purchases from approved retailers. The form must be stamped at the airport customs desk <strong>before</strong> you check in your bags, with the goods available for inspection. It makes sense for a carpet or silverwork, rarely for babouches.</p>
</div>

<h2>Airside: shops, lounges and wifi</h2>
<p>After security, the departure area offers duty-free shops, cafés and restaurants, plus free wifi that can be saturated at peak times. It fills up at the same hours as the queues: if you leave late in the day or have a long connection, access to one of the <a href="/en/blog/marrakech-airport-vip-lounges/">Marrakech airport VIP lounges</a> transforms the wait.</p>

<h2>Delayed or cancelled flight from Marrakech</h2>
<p>For flights leaving Morocco, EU Regulation 261/2004 applies if the airline is European (Ryanair, easyJet, Transavia, Air France…), and UK261 if it is a UK carrier (Jet2, British Airways, easyJet UK): beyond a three-hour arrival delay, compensation reaches <strong>€400 (£350) per passenger</strong> for a 1,500 to 3,500 km journey, such as Marrakech–London. Non-European airlines departing Marrakech are not covered. Check your case on our <a href="/en/flight-compensation/">flight compensation</a> page. The airport is run by the <a href="https://www.onda.ma/" target="_blank" rel="noopener">Office National des Aéroports (ONDA)</a>.</p>
`,
  faqHeading: "Marrakech airport departures: frequently asked questions",
  faqs: [
    { q: "How early should I arrive at Marrakech airport before my flight?", a: "2.5 to 3 hours before a flight to Europe or the UK, 3.5 hours in high season. Passport control on departure is the bottleneck, especially between 6 and 9 am and in the late afternoon. For a domestic flight, 1.5 hours is enough." },
    { q: "What time does check-in open at Marrakech airport?", a: "Usually 3 hours before international flights, closing 45 to 60 minutes before departure depending on the airline. Even if you checked in online, hold luggage is dropped at the desk." },
    { q: "Which terminal does my flight leave from at Marrakech Menara?", a: "Most international flights leave from Terminal 1, with Terminal 2 handling some domestic flights and charters. The terminal is on your boarding pass and the departures board; the two terminals are linked on foot." },
    { q: "Can I take dirhams out of Morocco?", a: "No, the dirham cannot be exported beyond a token amount. Change your notes at the exchange desks in the public hall, before passport control, and keep the receipt from your original exchange." },
    { q: "Can I take argan oil in my hand luggage?", a: "Only in containers of 100 ml or less, in a clear plastic bag. Anything larger, including argan oil, liquid spices and cosmetics, goes in the hold. Duty-free purchases made after security are not affected." },
    { q: "How much is a taxi from the medina to Marrakech airport?", a: "Allow MAD 70 to 100 by day for a petit taxi, more at night; agree the price before getting in. For an early departure, book a transfer or your riad's driver the day before." },
    { q: "Is there a VAT refund at Marrakech airport?", a: "Yes, for non-residents, on purchases from approved retailers. The form must be stamped at the customs desk before you check in your bags, with the goods available for inspection." },
    { q: "My flight from Marrakech is delayed: am I entitled to compensation?", a: "Yes if the airline is European or British and the arrival delay exceeds three hours: €400 (£350) per passenger for a 1,500 to 3,500 km journey, unless there were extraordinary circumstances. Non-European airlines departing Morocco are not covered." },
  ],
  cta: {
    heading: "Your ride to the airport, sorted the day before",
    text: "A driver at the right medina gate at the agreed time, fixed price, even at 5 am. Free cancellation on most bookings.",
    label: "Book my return transfer",
  },
} satisfies LocalizedPage;
