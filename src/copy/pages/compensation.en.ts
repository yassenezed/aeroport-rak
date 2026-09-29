import type { LocalizedPage } from '../types';

export default {
  title: "Delayed flight at Marrakech Menara Airport: up to €600",
  description: "Flight delayed or cancelled at Marrakech Menara Airport? Check for free whether you can claim €250, €400 or €600 (or £220 to £520) under EU261 and UK261.",
  eyebrow: "Passenger rights · EU261 & UK261",
  h1: "Delayed flight compensation: Marrakech Menara Airport",
  lede: "Did your flight to or from Marrakech Menara Airport arrive more than three hours late, or get cancelled? You may be owed €250, €400 or €600 per passenger. Check your flight in a minute, then read what really applies to your case.",
  widget: 'compensation',
  highlights: [
    { icon: 'wallet', value: "€250 / £220", label: "Under 1,500 km: Madrid, Seville, Lisbon" },
    { icon: 'wallet', value: "€400 / £350", label: "1,500–3,500 km: London, Manchester, Dublin" },
    { icon: 'wallet', value: "€600 / £520", label: "Over 3,500 km: Stockholm, Helsinki, Riga" },
  ],
  cardSections: [
    {
      eyebrow: "Who is covered?",
      heading: "Which Marrakech Menara Airport flights are covered",
      intro: "It depends on the direction of the flight and where the airline is based.",
      variant: 'feature',
      items: [
        { icon: 'plane-landing', title: "UK or EU → Marrakech", text: "Every flight departing the UK or the EU is covered, whatever the airline, Royal Air Maroc included.", tags: ["Covered", "All airlines"] },
        { icon: 'plane-takeoff', title: "Marrakech → UK, UK airline", text: "UK261 covers flights to the UK operated by a UK airline: British Airways, Jet2, TUI Airways, easyJet UK.", tags: ["Covered", "UK261"] },
        { icon: 'shield-check', title: "Marrakech → Europe, EU airline", text: "EU261 covers flights operated by an EU airline: Ryanair, easyJet Europe, Transavia, Air France, Vueling, Wizz Air, Aer Lingus…", tags: ["Covered", "EU261"] },
        { icon: 'alert', title: "Marrakech → Europe, non-European airline", text: "Royal Air Maroc, Qatar Airways, Turkish Airlines or Saudia departing Morocco are not covered. Their conditions of carriage still apply.", tags: ["Not covered"] },
      ],
    },
    {
      eyebrow: "Delayed flight",
      heading: "Delays: what the airline must provide at the airport",
      intro: "Even before any compensation, the airline must look after you at the airport once the wait reaches a certain length.",
      variant: 'feature',
      items: [
        { icon: 'coffee', title: "2 h or more, under 1,500 km", text: "Meals and refreshments in proportion to the wait, plus two communications (calls or emails).", tags: ["Meals", "Drinks", "Communications"] },
        { icon: 'clock', title: "3 h or more, 1,500 to 3,500 km", text: "The same care, which applies to most flights between Marrakech and the UK or Europe: London, Paris, Brussels, Frankfurt.", tags: ["Meals", "Drinks", "Communications"] },
        { icon: 'building', title: "4 h or more, over 3,500 km", text: "The same, and if departure moves to the next day: a hotel and transport between the airport and the hotel, whatever the distance.", tags: ["Hotel", "Transport", "Meals"] },
      ],
    },
    {
      eyebrow: "Cancelled flight",
      heading: "Cancelled flight: your options",
      intro: "If your flight is cancelled, the airline must give you a choice and look after you.",
      variant: 'feature',
      items: [
        { icon: 'wallet', title: "Full refund", text: "The ticket price refunded within seven days, including the unused part of a return trip." },
        { icon: 'plane', title: "Replacement flight", text: "Re-routing to your destination as soon as possible, or at a later date of your choice." },
        { icon: 'tag', title: "Compensation of €250 to €600", text: "If you were told less than 14 days before departure, unless you were re-routed close to the original schedule." },
        { icon: 'users', title: "Care", text: "Meals, communications and, if needed, a hotel and transport while you wait for the replacement flight." },
      ],
    },
    {
      eyebrow: "Exceptions",
      heading: "Extraordinary circumstances",
      intro: "In these cases the airline must still look after you, but it does not have to pay compensation.",
      variant: 'compact',
      items: [
        { icon: 'cloud', title: "Weather", text: "Storms, high winds, fog or thunderstorms making the flight unsafe." },
        { icon: 'shield', title: "Security", text: "Security threats, airspace closures, political instability." },
        { icon: 'alert', title: "Natural events", text: "Earthquakes, volcanic eruptions or other unforeseeable events." },
        { icon: 'users', title: "Air traffic control strikes", text: "Strikes outside the airline, such as French air traffic control strikes." },
      ],
    },
  ],
  steps: {
    heading: "How to claim your compensation",
    intro: "You can claim directly from the airline, or use the checking service above, which is only paid if the claim succeeds.",
    items: [
      { icon: 'clipboard', title: "Keep your documents", text: "Boarding pass, booking confirmation and any proof of the delay or cancellation: emails, texts, photos of the departures board." },
      { icon: 'clock', title: "Note the arrival time", text: "The delay is measured on arrival, when the aircraft doors open. Ask the airline desk for the reason for the delay in writing." },
      { icon: 'users', title: "Claim from the airline", text: "Send a written claim to customer service, quoting EU261 or UK261, the flight number, the date and the amount you are claiming." },
      { icon: 'shield-check', title: "Enforce your rights", text: "If there is no reply within two months, or a refusal, go to an ADR scheme or the civil aviation authority of the departure country." },
    ],
  },
  body: `
<h2>How much can you claim for a flight to or from Marrakech?</h2>
<p>The amount depends not on the ticket price but on the <strong>flight distance</strong>. For Marrakech Menara Airport, that gives:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Distance</th><th>EU261</th><th>UK261</th><th>Examples of routes with Marrakech</th></tr></thead>
<tbody>
<tr><td><strong>Up to 1,500 km</strong></td><td class="num">€250</td><td class="num">£220</td><td>Madrid, Barcelona, Seville, Malaga, Lisbon</td></tr>
<tr class="row-highlight"><td><strong>1,500 to 3,500 km</strong></td><td class="num">€400</td><td class="num">£350</td><td>London, Manchester, Birmingham, Bristol, Edinburgh, Dublin, Paris, Amsterdam, Frankfurt</td></tr>
<tr><td><strong>Over 3,500 km</strong></td><td class="num">€600</td><td class="num">£520</td><td>Stockholm, Helsinki, Riga</td></tr>
</tbody>
</table>
</div>
<p>Compensation is due when the flight reaches its destination <strong>three hours or more late</strong>, or in the event of a late cancellation or denied boarding. It can be halved if the airline re-routed you with an arrival close to the original time. Direct flights from Marrakech to Montreal, Atlanta or New York are operated by non-European airlines from outside the EU and UK, so they are not covered.</p>

<h2>Which airlines are covered from Marrakech</h2>
<p>From Marrakech Menara Airport, EU261 applies if the airline is European, which is the case for most flights to Europe: <strong>Ryanair, easyJet Europe, Transavia, Air France, Vueling, Iberia, Volotea, Wizz Air, TUI fly, Discover Airlines, Eurowings, TAP, Aer Lingus, Norwegian, SAS</strong> and other EU, Norwegian and Swiss airlines. UK261 applies to flights to the UK operated by <strong>British Airways, Jet2, TUI Airways and easyJet UK</strong>. <strong>Royal Air Maroc</strong> is not covered when departing Morocco, nor are Qatar Airways, Turkish Airlines, Saudia, Air Transat, Delta or United. See all routes and airlines on our <a href="/en/destinations/">destinations from Marrakech</a> page.</p>

<h2>Common delays at Marrakech: what matters</h2>
<p>Many low-cost flights reach Marrakech in the evening, at the end of the aircraft's day: an early delay knocks on to the last flight. When a flight is <strong>diverted</strong> to Casablanca or Agadir, it is the arrival time in Marrakech, your final destination, that counts. French air traffic control strikes often hit flights from the UK, Belgium and the Netherlands that cross French airspace: these count as extraordinary.</p>
<div class="callout">
<span class="callout-label">Good to know</span>
<p>A technical fault with the aircraft is usually <strong>not</strong> an extraordinary circumstance, and neither is a strike by the airline's own staff: in both cases you keep your right to compensation.</p>
</div>

<h2>How long do you have to claim?</h2>
<p>The regulation sets no deadline: it depends on the law of the country where you claim. It is <strong>6 years in England and Wales</strong> (5 in Scotland), 5 years in France and Spain, 3 years in Germany, 2 years in the Netherlands and 1 year in Belgium. Do not wait, though: evidence gets lost fast. To follow a flight in real time, see Marrakech airport <a href="/en/arrivals/">arrivals</a> and <a href="/en/departures/">departures</a>.</p>
`,
  faqHeading: "Flight compensation at Marrakech airport: frequently asked questions",
  faqs: [
    { q: "Do EU261 and UK261 apply to flights from Marrakech?", a: "Yes for all flights from the EU or the UK to Marrakech, whatever the airline. From Marrakech, EU261 applies only to EU airlines (Ryanair, easyJet Europe, Transavia…) and UK261 to UK airlines flying to the UK (British Airways, Jet2, TUI, easyJet UK). Royal Air Maroc is not covered departing Morocco." },
    { q: "How much can I claim for a delayed London–Marrakech flight?", a: "£350 per passenger under UK261, or €400 under EU261, as the flight covers about 2,270 km. The arrival delay must exceed three hours and not be caused by extraordinary circumstances." },
    { q: "And for a Madrid–Marrakech or Seville–Marrakech flight?", a: "€250 per passenger, because these flights are under 1,500 km (about 1,050 km from Madrid and 680 km from Seville), again for an arrival delay of more than three hours." },
    { q: "My Royal Air Maroc flight from Marrakech is delayed: can I claim?", a: "Not under EU261 or UK261, as the airline is not European and the flight departs outside the EU and UK. You can still claim your actual costs under the airline's conditions of carriage and the Montreal Convention." },
    { q: "My flight was diverted to Casablanca or Agadir: what happens?", a: "The arrival time in Marrakech, your final destination, is what counts. If you arrive more than three hours late and the cause is not extraordinary, compensation is still due." },
    { q: "When does the airline not have to pay?", a: "In extraordinary circumstances: dangerous weather, security threats, natural disasters, air traffic control strikes. A technical fault or a strike by the airline's own staff usually does not exempt it." },
    { q: "How long do I have to claim?", a: "It depends on where you claim: 6 years in England and Wales, 5 in Scotland, 5 in France and Spain, 3 in Germany, 2 in the Netherlands, 1 in Belgium. Keep your documents and claim as soon as possible." },
    { q: "My flight to Marrakech was cancelled: what are my rights?", a: "The airline must offer a refund within seven days or a replacement flight, and look after you while you wait. If you were told less than 14 days before departure, you can also claim €250 to €600 (£220 to £520) depending on distance." },
  ],
  cta: {
    heading: "Landed late in Marrakech? Your driver is waiting",
    text: "Our drivers track your flight and wait at no extra cost if you are delayed, even in the middle of the night, then drop you at the medina gate closest to your riad.",
    label: "Book a transfer",
  },
} satisfies LocalizedPage;
