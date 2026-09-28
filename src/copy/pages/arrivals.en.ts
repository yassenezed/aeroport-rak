import type { LocalizedPage } from '../types';

export default {
  title: "Marrakech Airport Arrivals (RAK): live flight board",
  description: "Live arrivals at Marrakech Menara Airport: flight times and status, delays, passport control, baggage, then taxi or transfer into the city.",
  eyebrow: "Live board · local time",
  h1: "Marrakech Menara Airport Arrivals",
  lede: "Track arrivals at Marrakech Menara Airport (RAK) in real time: scheduled time, estimated time, delays and landings. Below, everything that happens between the jet bridge and the kerb, and how to get into the city.",
  widget: 'flights-arrivals',
  highlights: [
    { icon: 'clock', value: "--:--", label: "Local time", live: 'clock' },
    { icon: 'cloud', value: "— °C", label: "Marrakech weather", live: 'weather' },
    { icon: 'map-pin', value: "Terminal 1 & 2", label: "Arrival terminals" },
  ],
  steps: {
    heading: "Arriving at Marrakech Menara Airport: the 4 steps",
    intro: "The route is the same at Terminal 1 and Terminal 2. What changes is the crowd: a flight landing at 10 pm is nothing like one at 2 pm.",
    items: [
      { icon: 'passport', title: 'Passport control at Marrakech Menara', text: "Passport and entry card, handed out on board. No visa for tourists from the EU, UK, US, Canada or Switzerland (90 days). 15 to 40 minutes depending on the hour." },
      { icon: 'luggage', title: 'Baggage reclaim', text: "The belts are just after passport control. The belt number shows on the screens; allow 20 to 30 minutes on evening flights." },
      { icon: 'shield-check', title: 'Customs', text: "Usually smooth, with random checks. Cash only needs declaring above MAD 100,000. Drones and walkie-talkies are held." },
      { icon: 'door', title: 'Airport arrivals hall', text: "ATMs, exchange desks, SIM cards and car hire counters, then the exit to the taxi rank, drivers and car parks." },
    ],
  },
  services: {
    heading: "From Marrakech Menara Airport to the city",
    intro: "The ways to leave Marrakech Menara Airport and start your stay well, with checked prices.",
    items: [
      { icon: 'van', key: 'bookTransfer', title: 'Private airport transfer', text: "Driver with your name, flight tracked, fixed price per vehicle from €27.", cta: 'Book' },
      { icon: 'car', key: 'transfers', title: 'Taxi and bus 19', text: "Official day and night taxi fares, bus 19 timetable.", cta: 'See fares' },
      { icon: 'tag', key: 'carRental', title: 'Car hire', text: "Counters in the arrivals hall, deposit and contract traps.", cta: 'Compare' },
      { icon: 'sim', key: 'esim', title: 'Morocco eSIM', text: "Data from the moment you land, to reach your driver.", cta: 'Choose an eSIM' },
      { icon: 'wallet', key: 'money', title: 'Money and exchange', text: "ATMs, exchange desks and which notes to withdraw.", cta: 'Read the guide' },
      { icon: 'alert', key: 'compensation', title: 'Delayed flight', text: "Up to €400 compensation on most flights from Europe.", cta: 'Check my rights' },
    ],
  },
  body: `
<h2>How to read the Marrakech Menara Airport arrivals board</h2>
<p>The board above shows all arriving flights at Marrakech Menara Airport, across every airline. Times are in <strong>Marrakech local time</strong>, not the time in the departure city: that is the most common source of confusion when you are picking someone up.</p>
<ul>
<li><strong>Scheduled</strong>: the time set by the airline. It does not change, even if the flight is late.</li>
<li><strong>Estimated</strong>: the landing time recalculated in flight. This is the one to watch.</li>
<li><strong>Landed</strong>: the aircraft is on the ground. Add 30 to 60 minutes before the passenger walks out.</li>
<li><strong>Delayed / Cancelled / Diverted</strong>: contact the airline; a diverted flight usually lands in Casablanca or Agadir.</li>
</ul>
<p>For a flight leaving Marrakech, see the <a href="/en/departures/">Marrakech airport departures board</a>.</p>

<h2>Arrival times: when Marrakech airport is busiest</h2>
<p>Marrakech Menara Airport receives its flights in waves. A first wave lands late morning and early afternoon, with flights that left Europe early. But the real peak is <strong>between 8 pm and midnight</strong>, when low-cost airlines land one after another from the UK, France, Spain, Italy and Belgium. Several aircraft then arrive within the same half hour, and the passport control queue grows.</p>
<p>If you have the choice, a flight landing between 1 pm and 5 pm will save you half an hour at the exit. If you arrive in the evening, the <a href="/en/blog/fast-track-marrakech-airport/">Marrakech airport fast track</a> service lets you clear the controls through a dedicated lane.</p>

<h2>Airlines and origins of flights to Marrakech Menara Airport</h2>
<p>Most flights arriving in Marrakech come from Europe. Depending on the season, the board shows <strong>Ryanair</strong>, <strong>easyJet</strong>, <strong>Jet2</strong>, <strong>Transavia</strong>, <strong>Royal Air Maroc</strong>, <strong>British Airways</strong>, <strong>Vueling</strong>, <strong>TUI</strong>, <strong>Wizz Air</strong> and <strong>Air France</strong>, among others.</p>
<ul>
<li><strong>UK and Ireland</strong>: London (Gatwick, Stansted, Luton, Heathrow), Manchester, Bristol, Birmingham, Edinburgh, Dublin.</li>
<li><strong>France and Benelux</strong>: Paris, Lyon, Marseille, Nice, Toulouse, Bordeaux, Brussels, Amsterdam, Eindhoven.</li>
<li><strong>Spain, Italy, Germany, Switzerland</strong>: Madrid, Barcelona, Seville, Malaga, Milan, Rome, Bologna, Munich, Frankfurt, Geneva.</li>
<li><strong>Morocco and the Middle East</strong>: Casablanca, plus seasonal links to the Gulf.</li>
</ul>
<p>To find a flight to Marrakech from your city, use our <a href="/en/flights/">flight comparison</a>.</p>

<h2>Entry formalities: passport, visa and entry card</h2>
<p>Citizens of the EU, the UK, the US, Canada and Switzerland enter Morocco <strong>without a visa for a tourist stay of up to 90 days</strong>, with a passport valid for the whole stay. The entry card is handed out on board: fill it in during the flight, with the address of your accommodation, so you do not have to leave the queue at the last minute. Children travelling with only one parent should carry consent from the other parent.</p>

<h2>Withdrawing cash at Marrakech airport</h2>
<p>This is the step not to skip. Taxis do not take cards and dirhams cannot be bought outside Morocco, so the arrivals hall is your first exchange point. The ATMs work well but tend to dispense MAD 200 notes. Take out enough for the ride and the first few days, then break a note at the terminal café: MAD 50 and 100 notes avoid arguments about change in the taxi. All the tips are in our guide to <a href="/en/blog/money-in-morocco/">money and exchange in Morocco</a>.</p>

<h2>Leaving Marrakech Menara Airport: taxi, transfer or bus 19</h2>
<p>You will be approached before you even reach the door. It is rarely aggressive, but worth anticipating: the official taxi rank is right outside the exit, and its board shows fares by zone. Any offer made <em>inside</em> the terminal is outside that system.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Price</th><th>Time</th><th>Best for</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong><a href="/en/book-transfer/">Private transfer</a></strong></td><td class="num">from €27 / vehicle</td><td class="num">15–30 min</td><td>Medina riad, night arrival, families</td></tr>
<tr><td><strong>Official petit taxi</strong></td><td class="num">MAD 100–150 (day)</td><td class="num">15–30 min</td><td>Gueliz, Hivernage by day, max. 3 people</td></tr>
<tr><td><strong><a href="/en/blog/bus-19-alsa-marrakech/">Bus 19 (ALSA)</a></strong></td><td class="num">MAD 30 / person</td><td class="num">≈ 20 min</td><td>Tight budget, light luggage, before 11.30 pm</td></tr>
</tbody>
</table>
</div>
<p>For a hotel in Gueliz or the Hivernage by day, a taxi is fine: agree the posted fare before the boot opens (see our <a href="/en/blog/taxi-tips-marrakech/">Marrakech taxi tips</a>). For a medina riad, a flight after 9 pm or a group of four or more, a <a href="/en/book-transfer/">pre-booked transfer</a> settles the price, the vehicle and the drop-off gate in advance. Full details on the <a href="/en/transfers/">airport transfers</a> page.</p>

<h2>Meeting someone at Marrakech airport</h2>
<p>Picking someone up at Marrakech airport? Follow the flight on the arrivals board and leave home based on the <em>estimated</em> time, not the scheduled one. Only passengers enter the baggage area: you wait in the public hall, facing the exit doors. Plan to arrive 20 to 30 minutes after landing. By car, the drop-off zone is for short stops only; to wait, use the <a href="/en/parking/">airport car park</a>, a few minutes' walk from the terminal.</p>

<div class="callout">
<span class="callout-label">The habit that saves twenty minutes</span>
<p>If a driver is waiting for you (pre-booked transfer or riad pick-up), the meeting point is in front of the arrivals hall, with a sign bearing your name. Message the driver as soon as you have signal, even before customs: a <a href="/en/morocco-esim/">Morocco eSIM</a> activated before you fly saves hunting for the terminal Wi-Fi.</p>
</div>

<h2>Arriving in Marrakech at night</h2>
<p>A large share of low-cost flights land between 9 pm and 1 am. Three practical consequences: taxis switch to the night fare, MAD 150 to 240; bus 19 stops running after 11.30 pm; and the dimly lit medina lanes are no place to hunt for a riad with a suitcase. If your flight lands late, a pre-booked transfer is not a luxury: the driver tracks the flight number and waits if you are delayed.</p>

<h2>Delayed, cancelled or diverted flight to Marrakech Menara Airport</h2>
<p>If your flight reaches Marrakech more than three hours late, you may be entitled to compensation under EU Regulation 261/2004 (or its UK equivalent): it covers every flight departing the EU or the UK, whatever the airline. For a 1,500 to 3,500 km journey, such as London–Marrakech, the amount is <strong>€400 (or £350) per passenger</strong>. Check your rights on our <a href="/en/flight-compensation/">flight compensation</a> page. The airport is run by the <a href="https://www.onda.ma/" target="_blank" rel="noopener">Office National des Aéroports (ONDA)</a>, which also publishes official flight information.</p>
<p>For terminals, services and the terminal layout, see our <a href="/en/airport-guide/">Marrakech airport guide</a>.</p>
`,
  faqHeading: "Marrakech airport arrivals: frequently asked questions",
  faqs: [
    { q: "How can I check a flight's arrival time in Marrakech?", a: "The arrivals board on this page shows, in real time, the scheduled time, estimated time and status of every flight at Marrakech Menara Airport. Times are in Marrakech local time. Rely on the estimated time, recalculated during the flight." },
    { q: "How long does it take to get out of Marrakech airport after landing?", a: "In practice 30 to 60 minutes: passport control takes 15 to 40 minutes depending on crowds, and baggage 20 to 30 minutes on evening flights. Arrivals between 8 pm and midnight are the busiest." },
    { q: "Do I need to fill in an entry card for Marrakech?", a: "Yes, a police entry card is required on arrival. It is handed out on board most flights: fill it in during the flight, with the address of your accommodation in Marrakech." },
    { q: "Are there ATMs in the arrivals hall?", a: "Yes, several ATMs and exchange desks are in the public hall, after customs. Withdraw before you leave: taxis do not accept cards and dirhams cannot be bought outside Morocco." },
    { q: "Where do I wait for someone arriving at Marrakech airport?", a: "In the public arrivals hall, facing the exit doors: only passengers can enter the baggage area. Arrive 20 to 30 minutes after the landing time shown on the board. By car, use the airport car park rather than the drop-off zone." },
    { q: "Where do I meet my transfer driver at Marrakech Menara?", a: "In front of the arrivals hall: the driver holds a sign with your name and the booking confirmation gives the exact meeting point. They track your flight number and wait if you are delayed." },
    { q: "My flight lands after midnight: are there still taxis?", a: "Yes, the rank is served as long as flights are landing. Fares simply switch to the night rate, MAD 150 to 240 to the medina, Gueliz and the Hivernage. Bus 19 stops at 11.30 pm." },
    { q: "My flight to Marrakech arrived late: am I entitled to compensation?", a: "If the arrival delay exceeds three hours and the flight departed from the EU or the UK, the regulation provides €400 (£350) per passenger for a 1,500 to 3,500 km journey, unless there were extraordinary circumstances such as weather." },
  ],
  cta: {
    heading: "A driver who waits for your flight, not the other way round",
    text: "Flight number tracking, waiting time included if you are delayed, a fixed price per vehicle for up to seven passengers, and drop-off at the medina gate closest to your riad.",
    label: 'Book a transfer',
  },
} satisfies LocalizedPage;
