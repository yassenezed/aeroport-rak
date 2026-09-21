import type { LocalizedPage } from '../types';

export default {
  title: 'Flights to Marrakech (RAK): airlines, seasons and fares',
  description: 'Flights to Marrakech Airport: which airlines serve RAK, the best months to book, low-cost baggage traps and domestic connections.',
  eyebrow: 'Marrakech Menara · Flights',
  h1: 'Flights to Marrakech',
  lede: "RAK is Morocco's busiest airport after Casablanca, with a dense network of European routes and a pronounced season. Compare dates, then read what actually moves the final price.",
  widget: 'flight-search',
  body: `
<h2>Who flies to Marrakech</h2>
<p>Three families of airlines share the traffic. <strong>European low-cost carriers</strong> — Ryanair, easyJet, Transavia, Vueling, Wizz Air — run most direct routes from the UK, France, Spain, Belgium, the Netherlands and Italy; they explain why arrivals cluster in the evening. <strong>Full-service airlines</strong> — Royal Air Maroc, British Airways, Air France, Iberia, Lufthansa, Brussels Airlines — offer friendlier timings and included baggage at higher fares. Finally, <strong>Royal Air Maroc and Air Arabia Maroc</strong> link Marrakech to other Moroccan cities and several African destinations.</p>

<h2>When fares rise, and when they fall</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Period</th><th>Crowds</th><th>Airfares</th><th>Weather</th></tr></thead>
<tbody>
<tr><td><strong>March–May</strong></td><td>Very high</td><td>High</td><td>Ideal, 22–28 °C</td></tr>
<tr><td><strong>June–August</strong></td><td>Moderate</td><td>Moderate outside August</td><td>Very hot, 38–45 °C</td></tr>
<tr class="row-highlight"><td><strong>September–November</strong></td><td>High</td><td>Mid-range</td><td>Excellent, 24–30 °C</td></tr>
<tr><td><strong>December–February</strong></td><td>Peaks at Christmas</td><td>Low outside holidays</td><td>Mild by day, cold at night</td></tr>
</tbody>
</table>
</div>
<p>The sweet spot is <strong>late September to mid-November</strong>: the best weather of the year, the medina back to its rhythm after summer, and fares that have not yet tipped into the festive season. January and February outside school holidays are cheapest — provided you accept nights dropping below 8 °C, which matters more than you think in a barely heated riad.</p>

<h2>The advertised fare is not the fare you pay</h2>
<p>On a low-cost carrier, the gap between headline and total comes down to three lines. <strong>Hold luggage</strong> often adds £20–45 each way, sometimes more than the ticket itself. <strong>Seat selection</strong> gets charged the moment you travel together and want to sit together. And <strong>cabin baggage</strong> beyond a small bag is chargeable with several carriers, with checks at Marrakech applied strictly.</p>
<div class="callout">
<span class="callout-label">The sum to do</span>
<p>Always add the return before comparing. A £69 low-cost return becomes £159 with two hold bags and reserved seats — a level at which a full-service airline, baggage included and flying in daylight, becomes competitive again.</p>
</div>

<h2>Onward connections within Morocco</h2>
<p>From Marrakech, domestic links mostly route through Casablanca. For Agadir, Essaouira or Ouarzazate, the road is usually faster and far cheaper once access times are counted. For Fes or Tangier, the ONCF train from Gueliz station is a comfortable alternative: you simply need to plan the leg between airport and station, which no railway covers.</p>
<p>If your flight lands late and your domestic connection leaves early, sleep in Marrakech rather than at the airport: hotels near RAK are ten minutes away and cost less than a changed ticket.</p>
`,
  faqs: [
    {
      q: 'Which airlines fly to Marrakech Airport?',
      a: "Mainly Ryanair, easyJet, Transavia, Vueling and Wizz Air on European low-cost routes, plus Royal Air Maroc, British Airways, Air France, Iberia, Lufthansa and Brussels Airlines on full-service flights. Royal Air Maroc and Air Arabia Maroc handle domestic and African links.",
    },
    {
      q: 'When is the best time to fly to Marrakech?',
      a: "Late September to mid-November: the weather is at its best, 24 to 30 °C, and fares stay reasonable ahead of the festive season. January and February outside school holidays are the cheapest, with chilly nights.",
    },
    {
      q: 'How long is the flight to Marrakech?',
      a: "About 3 h 30 direct from London, 3 h 20 from Paris, 2 h 45 from Madrid, 3 h 30 from Brussels and 3 h 45 from Amsterdam.",
    },
    {
      q: 'Are there direct flights between Marrakech and other Moroccan cities?',
      a: "Few, and most route through Casablanca. For Agadir, Essaouira or Ouarzazate the road stays faster and cheaper once access times are counted. For Fes and Tangier, the ONCF train from Gueliz station is a good alternative.",
    },
    {
      q: 'How far ahead should you book a flight to Marrakech?',
      a: "Six to ten weeks ahead on low-cost routes in normal season. For school holidays, Christmas and spring, aim for three to four months: those are the periods where fares double fastest.",
    },
  ],
  cta: {
    heading: 'Compare flights to Marrakech',
    text: "Every airline serving RAK, on your dates, with stopovers and durations laid out.",
    label: 'Search flights',
    href: '/en/flights/',
  },
} satisfies LocalizedPage;
