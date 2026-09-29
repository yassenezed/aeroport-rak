import type { LocalizedPage } from '../types';

export default {
  title: "Marrakech Menara Airport parking: rates and access",
  description: 'Parking at Marrakech Menara Airport: hourly and daily rates, drop-off zone, long-stay parking and cheaper alternatives.',
  eyebrow: 'Marrakech Menara · Parking',
  h1: 'Parking at Marrakech Airport',
  lede: "RAK has surface car parks in front of the terminals with a stepped tariff: very cheap for a drop-off, markedly less so for a week. Here is what you will pay and when it is better not to drive at all.",
  body: `
<h2>The rates, broadly</h2>
<p>Airport parking is charged by duration, with a very short first band that is free or nominal, then hourly charging capped daily. As a guide, checked in September 2026:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Duration</th><th>Indicative rate</th><th>Use</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Under 30 minutes</strong></td><td class="num">free or ≈ MAD 10</td><td>Drop-off and pickup</td></tr>
<tr><td><strong>1 hour</strong></td><td class="num">≈ MAD 20</td><td>Waiting for a delayed flight</td></tr>
<tr><td><strong>24 hours</strong></td><td class="num">≈ MAD 70–80</td><td>Same-day return trip</td></tr>
<tr><td><strong>1 week</strong></td><td class="num">≈ MAD 450–550</td><td>Short trip abroad</td></tr>
</tbody>
</table>
</div>
<p>These are orders of magnitude: the scale is revised periodically and the board at the entrance is what counts. Pay at the machine or the kiosk before returning to your vehicle, cash preferred.</p>

<h2>Drop-off and pickup: the right habit</h2>
<p>The area in front of the terminals is built for stopping, not parking: attendants keep traffic moving, especially in the evening. If you are collecting someone whose flight has just landed, remember that <strong>30 to 60 minutes pass between touchdown and the exit</strong>. Better to wait in the car park, with an agreed message, than to circle the building.</p>

<h2>Long stays: do the sums first</h2>
<p>For a week, the official car park stays reasonable by European standards, but it is not trivial. Two alternatives are worth comparing:</p>
<ul>
<li><strong>A return trip by transfer or taxi.</strong> Two rides into town cost MAD 200–300, less than a week of parking — and you do not leave a car baking for seven days.</li>
<li><strong>A nearby hotel's secure car park.</strong> Some properties minutes from the airport offer a night-plus-parking package, useful when your flight leaves at 6 am.</li>
</ul>
<div class="callout">
<span class="callout-label">Hire car: do not take a ticket</span>
<p>If you are returning a rental, the drop-off parking is arranged by the hire company: follow their signs and do not take a ticket at the public car park entrance. Allow a quarter of an hour for the inspection and keep dated photos of the returned vehicle.</p>
</div>

<h2>Security and common sense</h2>
<p>The car parks are fenced and patrolled, but the rule is the same as anywhere: nothing visible in the cabin, no sat-nav on the windscreen, no bag on the back seat. In summer, the interior of a car parked in full sun in Marrakech passes 60 °C comfortably: leave no electronics, cosmetics or medicines inside.</p>
`,
  faqs: [
    {
      q: 'How much is parking at Marrakech Airport?',
      a: "Around MAD 20 for an hour, MAD 70–80 for 24 hours and MAD 450–550 for a week, with a first band of thirty minutes free or nominal for drop-offs. The board at the entrance is authoritative and is revised periodically.",
    },
    {
      q: 'Is there a drop-off zone at Marrakech Menara?',
      a: "Yes, the area in front of the terminals lets you stop long enough to set down passengers, with a short free or nominal band. Attendants keep traffic moving, so to wait for someone, use the car park instead.",
    },
    {
      q: 'Is Marrakech Airport parking guarded?',
      a: "The car parks are fenced and patrolled. Still take the usual precautions: nothing visible in the cabin, and nothing heat-sensitive left in a car parked in full sun.",
    },
    {
      q: 'Is it better to park at the airport or take a taxi?',
      a: "For a week-long trip, two return rides by taxi or transfer often cost less than the parking, and spare you leaving a car exposed. Parking makes sense mainly for short returns, from a few hours to two days.",
    },
  ],
  cta: {
    heading: 'Rather not leave your car in the sun for a week?',
    text: "A return trip by private transfer often costs less than long-stay parking, driver included.",
    label: 'Compare with a transfer',
  },
} satisfies LocalizedPage;
