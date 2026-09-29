import type { LocalizedPage } from '../types';

export default {
  title: "Services at Marrakech Menara Airport",
  description: "Marrakech Menara Airport services: ATMs, currency exchange, SIM and eSIM, wifi, VIP lounges, left luggage, bag wrapping, medical unit and assistance.",
  eyebrow: "Marrakech Menara · Services",
  h1: "Marrakech Menara Airport Services",
  lede: "Money, connectivity, lounges, luggage, health: everything you will actually find in the terminals at Marrakech Menara Airport, where to find it and what to sort out before you leave the hall.",
  highlights: [
    { icon: 'building', value: "T1 · T2", label: "Two terminals linked on foot" },
    { icon: 'wifi', value: "Free", label: "Wifi in the terminals" },
    { icon: 'medical', value: "24/7", label: "Emergency medical unit" },
  ],
  cardSections: [
    {
      eyebrow: "Essential services",
      heading: "Essential services at Marrakech Menara Airport",
      intro: "What you will need as soon as you land, and where to find it in the terminal.",
      variant: 'feature',
      items: [
        { icon: 'wallet', title: "Money and exchange", text: "ATMs and exchange desks in the arrivals hall and on the departures side. Dirhams cannot be bought outside Morocco, so withdraw before you leave.", tags: ["Visa & Mastercard", "Exchange", "MAD"], link: { key: 'money', label: "Our money guide" } },
        { icon: 'sim', title: "SIM, eSIM and wifi", text: "Maroc Telecom, Orange and inwi desks in the arrivals hall, passport required. The free wifi helps in a pinch; an eSIM activated before you fly skips the queue.", tags: ["4G", "eSIM", "Free wifi"], link: { key: 'esim', label: "Choose an eSIM" } },
        { icon: 'star', title: "VIP lounges", text: "The Pearl Lounge, the Royal Air Maroc lounge and ONDA's Convives de Marque service offer seating, wifi, sockets and a light buffet, with pay-per-visit access.", tags: ["Wifi", "Buffet", "Paid access"], link: { key: 'vipLounges', label: "Access and prices" } },
        { icon: 'medical', title: "Health and emergencies", text: "An emergency medical unit operates around the clock at the airport. Keep your medication in your cabin bag, with the prescription, rather than in the hold.", tags: ["24/7", "First aid"] },
        { icon: 'accessibility', title: "Reduced mobility assistance", text: "Wheelchair and escort from the aircraft to the exit. Request it from your airline at least 48 hours before the flight.", tags: ["Wheelchair", "Escort", "48 h ahead"] },
        { icon: 'shield-check', title: "Fast track", text: "Priority passage through the checks, with an agent escorting you. Most useful for evening arrivals, when the queues build up.", tags: ["Priority lane", "Arrival and departure"], link: { key: 'fastTrack', label: "Is it worth it?" } },
      ],
    },
    {
      eyebrow: "Amenities",
      heading: "Terminal amenities",
      intro: "To wait, eat, pray or meet your driver in good conditions.",
      variant: 'compact',
      items: [
        { icon: 'shop', title: "Duty-free shops", text: "Perfume, cosmetics, crafts and local products, mostly after security." },
        { icon: 'coffee', title: "Cafés and food", text: "Cafés landside, a wider choice airside, at airport prices." },
        { icon: 'prayer', title: "Prayer rooms", text: "In both terminals, landside and in the departure area." },
        { icon: 'baby', title: "Family areas", text: "Baby-changing facilities and water points for travelling with young children." },
        { icon: 'wifi', title: "Free wifi", text: "An open network in the terminals, slower at peak times." },
        { icon: 'sim', title: "Mobile phone desks", text: "Maroc Telecom, Orange and inwi sell tourist plans on arrival." },
        { icon: 'tag', title: "Car hire desks", text: "International and local agencies in the arrivals hall." },
        { icon: 'van', title: "Driver meeting point", text: "Drivers wait in front of the arrivals hall, holding a sign with your name." },
      ],
    },
    {
      eyebrow: "Luggage",
      heading: "Luggage services at Marrakech airport",
      intro: "Leave a suitcase, protect it, or act fast if it does not arrive.",
      variant: 'feature',
      items: [
        { icon: 'lock', title: "Left luggage", text: "A left-luggage office in the arrivals hall keeps your bags for a few hours or a day: handy for a layover or an evening departure.", tags: ["Arrivals hall", "Paid"], link: { key: 'layover', label: "Layover in Marrakech" } },
        { icon: 'luggage', title: "Bag wrapping", text: "Counters offer to wrap your bags in film before check-in, to protect them from knocks and tampering.", tags: ["Before check-in", "Paid"] },
        { icon: 'trolley', title: "Trolleys and porters", text: "Trolleys are available in the halls. Porters also offer their services: agree on the price before handing over your bags.", tags: ["Trolleys", "Porters"] },
        { icon: 'alert', title: "Lost or damaged bag", text: "Report it at your airline's baggage desk before leaving the reclaim area, with your boarding pass and bag tag.", tags: ["Report immediately", "PIR report"] },
      ],
    },
  ],
  services: {
    heading: "Getting into Marrakech from the airport",
    intro: "The airport is 6 km from the medina. Here are the ways to get there, with checked prices.",
    items: [
      { icon: 'bus', key: 'bus19', title: "Bus 19 (ALSA)", text: "MAD 30 per person, about 20 minutes to Jemaa el-Fna, last departure around 11.30 pm.", cta: "Times and stops" },
      { icon: 'car', key: 'transfers', title: "Official taxi", text: "MAD 100–150 by day, MAD 150–240 at night, fares posted at the rank.", cta: "Taxi fares" },
      { icon: 'van', key: 'bookTransfer', title: "Private transfer", text: "From €27 per vehicle, driver with your name and flight tracking, even at night.", cta: "Book" },
      { icon: 'tag', key: 'carRental', title: "Car hire", text: "Desks in the arrivals hall, from €25 a day.", cta: "Compare" },
      { icon: 'parking', key: 'parking', title: "Airport parking", text: "About MAD 20 an hour and MAD 70–80 a day, opposite the terminals.", cta: "See parking" },
      { icon: 'plane-landing', key: 'arrivals', title: "Live arrivals", text: "Track a flight and its actual landing time before you set off.", cta: "See arrivals" },
    ],
  },
  body: `
<h2>Withdrawing cash at Marrakech airport</h2>
<p>Several ATMs and exchange desks are located in the public arrivals hall, after customs, and on the departures side. The ATMs accept Visa and Mastercard and charge a fixed fee per withdrawal, so one large withdrawal beats three small ones. The airport exchange rate is fair without being the best in town; change enough for two days and top up in Gueliz if you are staying longer.</p>
<p>Two local rules to know: dirhams cannot be bought outside Morocco, and they cannot be taken out either. Plan to change any remaining notes <strong>before</strong> passport control on departure, and keep the receipt from your first exchange. All the tips are in our guide to <a href="/en/blog/money-in-morocco/">money and exchange in Morocco</a>.</p>

<h2>Getting connected as soon as you land</h2>
<p>The terminal's free wifi is fine for sending a message, no more. To be reachable as soon as you walk out, which matters when you need to contact a driver or riad, there are two options:</p>
<ul>
<li><strong>Local SIM card</strong>: Maroc Telecom, Orange and inwi desks are in the arrivals hall. A tourist plan with data costs a few dozen dirhams. Passport required, activation in a few minutes. Comparison in our article on <a href="/en/blog/morocco-sim-cards/">SIM cards in Morocco</a>.</li>
<li><strong>eSIM</strong>: activated before you leave, it works the moment you land, with no queue or paperwork. It is the simplest option if your phone is compatible. See our <a href="/en/morocco-esim/">Morocco eSIM</a> page.</li>
</ul>

<h2>Lost or damaged luggage: what to do</h2>
<p>If your suitcase does not appear on the belt, do not leave the reclaim area: go to the baggage desk of your airline or its ground handler, with your boarding pass and the tag stuck to the back of your ticket. You will be given a <strong>Property Irregularity Report (PIR)</strong> and a file number, both essential to trace the bag and claim compensation. Give the exact address of your accommodation: recovered bags are delivered, but a medina riad is much easier to find with the name of the nearest gate.</p>

<h2>Travelling with children or reduced mobility</h2>
<p>Reduced mobility assistance must be requested from the airline at least 48 hours before the flight: the airline triggers the service with the airport. Mention it again at the check-in desk on the day. With children, bring water and snacks: you cannot cross the passport queues with a tray, and the lounges become a real comfort if there is a delay.</p>
<p>As for formalities, the police card was abolished in September 2019: only your passport is checked, on entry and exit. Citizens of the EU, Switzerland, the UK, Canada and the US need no visa for a tourist stay of up to 90 days, with a passport valid for the whole stay.</p>
<div class="callout">
<span class="callout-label">Three things to do before leaving the hall</span>
<p>Withdraw dirhams and break them into 50 and 100 notes. Activate your connection, eSIM or local SIM. And know exactly where you are going: the riad's name, the medina gate, or the meeting point with your driver.</p>
</div>
`,
  spotlight: {
    icon: 'sparkles',
    heading: "An airport in full transformation",
    text: "Designed for about 8 million passengers a year, Marrakech Menara Airport handled <strong>9.3 million in 2024</strong>. Under ONDA's \"Airports 2030\" plan, the terminal is being expanded to reach <strong>16 million passengers a year by 2028</strong>. Since March 2025, the scanners at the terminal entrance have been removed to cut waiting times. For the terminal layout, see our <a href=\"/en/airport-guide/\">airport guide</a>.",
  },
  faqHeading: "Marrakech airport services: frequently asked questions",
  faqs: [
    { q: "Are there ATMs at Marrakech airport?", a: "Yes, several ATMs and exchange desks are in the public arrivals hall and on the departures side. They accept Visa and Mastercard, with a fixed fee per withdrawal, so make one larger withdrawal." },
    { q: "Is there free wifi at Marrakech Menara Airport?", a: "Yes, free wifi is available in the terminals. It is fine for a message but patchy at peak times: to reach a driver reliably, an eSIM or local SIM is better." },
    { q: "Where can I buy a SIM card at Marrakech airport?", a: "At the Maroc Telecom, Orange and inwi desks in the arrivals hall. A tourist plan with data costs a few dozen dirhams, activation takes a few minutes and a passport is required." },
    { q: "Is there left luggage at Marrakech airport?", a: "Yes, a left-luggage office in the arrivals hall lets you leave bags for a few hours or a day, handy for a layover or an evening flight. Payment is made on site." },
    { q: "Which VIP lounges are there at Marrakech Menara Airport?", a: "The Pearl Lounge, the Royal Air Maroc lounge and ONDA's Convives de Marque service. Access is via your ticket or status, certain cards or lounge programmes, or pay-per-visit for about €25 to €45 depending on the lounge." },
    { q: "Is there a medical service at Marrakech airport?", a: "Yes, an emergency medical unit operates around the clock at the airport for first aid. Keep your medication in your cabin bag with the prescription: pharmacies are in town." },
    { q: "Is there a prayer room at Marrakech airport?", a: "Yes, prayer rooms are provided in both terminals, landside and in the departure area." },
    { q: "How do I request reduced mobility assistance?", a: "Through your airline, at least 48 hours before the flight: the airline triggers the service with the airport. Mention it again at the check-in desk on the day of departure." },
  ],
  cta: {
    heading: "Leave the terminal without haggling",
    text: "A driver with your name, a fixed price per vehicle and the right medina gate: three minutes of booking that spare you the taxi queue.",
    label: "Book a transfer",
  },
} satisfies LocalizedPage;
