import type { LocalizedPage } from '../types';

export default {
  title: 'Services at Marrakech Menara Airport',
  description: 'Marrakech Airport services: ATMs, currency exchange, SIM cards and eSIM, wi-fi, left luggage, lounges, food and passenger assistance.',
  eyebrow: 'Marrakech Menara · Services',
  h1: 'Services at Marrakech Airport',
  lede: "What you will actually find in the terminal, where to find it, and the three things to sort before you leave the hall: cash, a connection, and a way into town.",
  body: `
<h2>Money: ATMs and exchange</h2>
<p>Several cash machines and bureaux de change sit in the public arrivals hall past customs, and on the departures side. The ATMs take Visa and Mastercard and charge a flat fee per withdrawal: one substantial withdrawal beats three small ones. Airport exchange rates are fair without being the best in town; change enough for two days and top up in Gueliz if you are staying longer.</p>
<p>Two local rules worth knowing: dirhams cannot be bought outside Morocco, and they cannot be taken out either. Plan to change your remaining notes back <strong>before</strong> border police on departure, and keep the receipt from your original exchange.</p>

<h2>Getting connected: local SIM, eSIM or wi-fi</h2>
<p>Airport wi-fi exists and will do at a push, no more. To be reachable the moment you walk out — useful for warning a driver or a riad — there are two routes.</p>
<ul>
<li><strong>Local SIM card</strong>: Maroc Telecom, Orange and inwi counters sit in the arrivals hall. A tourist bundle with data costs a few tens of dirhams. Passport required, activation in minutes.</li>
<li><strong>eSIM</strong>: activated before you travel, it works the moment you land, with no queue and no paperwork. The simplest option if your phone supports it. See our <a href="/en/morocco-esim/">Morocco eSIM page</a>.</li>
</ul>

<h2>Luggage, left luggage and lost property</h2>
<p>A left-luggage service operates in the terminal for daytime storage — handy on a long layover or a night flight after a late-morning checkout. Fees are paid on site, cash preferred. For any lost or damaged bag, report it at your airline's desk <strong>before leaving the reclaim area</strong>: after that the claim becomes considerably harder to open.</p>

<h2>Eating, drinking, waiting</h2>
<p>Cafés and fast food landside, a fuller offer airside, at airport prices. If you travel with children or fly early, bring water and something to eat: border police queues are not crossed holding a tray.</p>
<p>For long waits, the airport lounges offer seating, wi-fi and a buffet, available to buy without a premium bank card. Our article on the <a href="/en/blog/marrakech-airport-vip-lounges/">lounges at RAK</a> covers the terms.</p>

<h2>Reduced mobility, families, formalities</h2>
<p>Assistance for passengers with reduced mobility is requested from your airline at least 48 hours before the flight: the airline triggers the service, not the airport. The terminal has baby-changing facilities and water points.</p>
<p>On formalities, a police form must be completed on entering and leaving the country; it is usually handed out on board. Citizens of the EU, the UK, Switzerland, Canada and the United States need no visa for a 90-day tourist stay, with a passport valid at least six months.</p>
<div class="callout">
<span class="callout-label">Three things to do before leaving the hall</span>
<p>Withdraw dirhams and break them into MAD 50s and 100s. Turn on your connection, eSIM or local SIM. And know exactly where you are going: the riad's name, the medina gate, or a confirmed meeting point with your driver.</p>
</div>
`,
  faqs: [
    {
      q: 'Are there ATMs at Marrakech Airport?',
      a: "Yes, several cash machines and bureaux de change sit in the public arrivals hall and on the departures side. They take Visa and Mastercard, with a flat fee per withdrawal, so favour one substantial withdrawal.",
    },
    {
      q: 'Where can you buy a SIM card at Marrakech Airport?',
      a: "At the Maroc Telecom, Orange and inwi counters in the arrivals hall. A tourist bundle with data costs a few tens of dirhams, activation takes minutes and a passport is required. An eSIM activated before you travel skips the step entirely.",
    },
    {
      q: 'Is wi-fi free at Marrakech Airport?',
      a: "A wi-fi network is available in the terminal. It will do for sending a message, but it is uneven at peak times: to reach a driver reliably, an eSIM or local SIM is better.",
    },
    {
      q: 'Is there left luggage at Marrakech Menara?',
      a: "Yes, a storage service lets you leave bags for the day, useful on a layover or a night flight. Payment is made on site, cash preferred.",
    },
    {
      q: 'How do you request reduced-mobility assistance?',
      a: "Through your airline, at least 48 hours before the flight: the airline triggers the service with the airport. Mention it again at the check-in desk on the day.",
    },
  ],
  cta: {
    heading: 'Leave the terminal without negotiating',
    text: "A driver with your name, a fixed price per vehicle and the right medina gate: three minutes of booking that spare you the taxi queue.",
    label: 'Book a transfer',
  },
} satisfies LocalizedPage;
