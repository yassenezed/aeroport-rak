import type { LocalizedPage } from '../types';

export default {
  title: 'Marrakech Airport arrivals (RAK): live flight board',
  description: 'Live arrivals at Marrakech Menara Airport: flight status, the walk through the hall, passport control, baggage, ATMs and the way out into town.',
  eyebrow: 'Marrakech Menara · Arrivals',
  h1: 'Arrivals at Marrakech Airport',
  lede: "The board below tracks flights as they land at Menara. Underneath, the real walk from the airbridge to the kerb: police, baggage, cash machines, and the door that gets you out fastest.",
  widget: 'flights-arrivals',
  body: `
<h2>From the aircraft to the kerb</h2>
<p>Allow <strong>30 to 60 minutes</strong> from the airbridge to the exit, depending on the hour. RAK concentrates its arrivals in the evening, when several European flights land within the same half hour: that is when border police make the difference between walking out in twenty minutes and waiting an hour.</p>
<ol>
<li><strong>Border police.</strong> Passport check and entry card. It is handed out on board on most flights; fill it in during the flight, or you will step out of the queue to find a pen. Citizens of the EU, the UK, Switzerland, Canada and the United States need no visa for a 90-day tourist stay.</li>
<li><strong>Baggage reclaim.</strong> The belts sit just past control. On evening flights the wait is real: 20 to 30 minutes is common.</li>
<li><strong>Customs.</strong> Generally smooth, with spot checks. Cash only needs declaring above MAD 100,000.</li>
<li><strong>Public hall.</strong> ATMs, bureaux de change, SIM card counters, car hire desks, then the doors to the taxi rank and the car parks.</li>
</ol>

<h2>Get cash before you walk out</h2>
<p>This is the step not to skip. Taxis do not take cards and the dirham cannot be bought outside Morocco, so the arrivals hall is your first point of exchange. The ATMs work well but happily dispense MAD 200 notes. Withdraw enough for the ride and the first few days, then break the notes at the terminal café or shop: MAD 50s and 100s will spare you the argument about change in the taxi.</p>
<div class="callout">
<span class="callout-label">The habit that saves twenty minutes</span>
<p>If someone is meeting you — a booked transfer or a riad shuttle — the meeting point is the kerb outside the arrivals hall, not inside the terminal. A text to the driver the moment you pick up signal, before customs, is enough to sync the pickup.</p>
</div>

<h2>Walking out: what awaits</h2>
<p>You will be approached before you reach the door. That is normal and rarely aggressive, but worth anticipating: the official taxi rank sits directly outside the exit, and its board lists fares by zone. Any offer made <em>inside</em> the terminal falls outside that framework.</p>
<p>For a Gueliz or Hivernage hotel by day, take the taxi and state the posted amount before the boot opens. For a medina riad, a flight after 9 pm or a group of four or more, a booked transfer settles the price, the vehicle size and the drop-off gate in advance.</p>

<h2>Landing at night</h2>
<p>A large share of low-cost flights land between 9 pm and 1 am. Three practical consequences: the taxi scale switches to the night rate of MAD 150–240; bus 19 stops running after 11.30 pm; and the dimly lit medina lanes are a poor place to hunt for a riad with a suitcase. If your flight lands late, booking a transfer is not a luxury: the driver tracks the flight number and waits if you are delayed.</p>
`,
  faqs: [
    {
      q: 'How long does it take to clear Marrakech Airport after landing?',
      a: "Between 30 and 60 minutes in practice: border police take 15 to 40 minutes depending on the crowd, and baggage 20 to 30 minutes on evening flights. Arrivals between 8 pm and midnight are the busiest, as several European flights land at once.",
    },
    {
      q: 'Do you need to fill in an entry card in Marrakech?',
      a: "Yes, a police form is required on arrival. It is handed out on board on most flights: complete it during the flight so you do not have to leave the queue. You will need the address of your accommodation in Marrakech.",
    },
    {
      q: 'Are there ATMs in the arrivals hall?',
      a: "Yes, several cash machines and bureaux de change sit in the public hall past customs. Withdraw before you leave: taxis do not take cards, and dirhams cannot be bought outside Morocco.",
    },
    {
      q: 'Where do you meet a driver at Marrakech Menara?',
      a: "On the kerb outside the arrivals hall. Booked transfers state an exact meeting point on the confirmation voucher, and the driver holds a sign with your name. Message them as soon as you pick up signal.",
    },
    {
      q: 'My flight lands after midnight — are there still taxis?',
      a: "Yes, the rank is served as long as flights arrive. The scale simply switches to the night rate, MAD 150–240 to the medina, Gueliz and Hivernage. Bus 19, however, stops at 11.30 pm.",
    },
  ],
  cta: {
    heading: 'A driver who waits for your flight, not the other way round',
    text: "Flight-number tracking, waiting time included if you are delayed, a fixed price per vehicle for up to seven passengers and drop-off at the medina gate nearest your riad.",
    label: 'Book a transfer',
  },
} satisfies LocalizedPage;
