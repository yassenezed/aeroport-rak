import type { LocalizedArticle } from '../types';

export default {
  title: 'Fast Track at Marrakech Airport',
  description: 'Fast Track at RAK: how much time it really saves, what it costs, when it is worth it and when it is of no use at all.',
  eyebrow: 'Airport',
  h1: 'Fast Track in Marrakech: worth it or not?',
  lede: "RAK's bottleneck is passport control — on arrival as much as on departure. A queue-skip service attacks exactly that, which makes it worthwhile at certain hours and pointless at others.",
  excerpt: 'What Fast Track really saves in Marrakech, what it costs, and the time slots where it genuinely earns its keep.',
  date: '2026-09-08',
  body: `
<h2>What the service covers</h2>
<p>Marketed as "Fast Track" or "VIP meet and greet", what providers offer in Marrakech varies, and the detail is worth reading before buying:</p>
<ul>
<li><strong>Priority access to passport control</strong>, on arrival or departure. This is the core of the service and, in Marrakech, the only element that genuinely saves time.</li>
<li><strong>An escort by an agent</strong> from the airbridge or the terminal entrance.</li>
<li><strong>Baggage assistance</strong>, depending on the package.</li>
<li>Sometimes <strong>lounge access</strong>, charged or included.</li>
</ul>
<p>What it never covers: departure security screening, compulsory for everyone, and baggage delivery, which depends on ground handling.</p>

<h2>How much time you actually save</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Moment</th><th>Passport wait</th><th>Estimated saving</th><th>Verdict</th></tr></thead>
<tbody>
<tr><td>Arrival, 10 am–4 pm</td><td class="num">15–25 min</td><td class="num">10–15 min</td><td>Not worth it</td></tr>
<tr class="row-highlight"><td>Arrival, 8 pm–midnight</td><td class="num">30–45 min</td><td class="num">25–40 min</td><td>Worth it</td></tr>
<tr><td>Departure, 10 am–3 pm</td><td class="num">20–30 min</td><td class="num">15–25 min</td><td>Marginal</td></tr>
<tr class="row-highlight"><td>Departure, 6–9 am</td><td class="num">40–60 min</td><td class="num">30–50 min</td><td>Worth it</td></tr>
</tbody>
</table>
</div>
<p>Figures vary by season and by how many flights coincide. The rule fits in a sentence: <strong>the service is only worth it if your slot is busy</strong>. In the middle of the day off-season, you will be paying to save a quarter of an hour.</p>

<h2>What it costs</h2>
<p>Depending on provider and package, expect roughly <strong>€20 to €60 per person</strong> for a simple queue-skip, more for a full meet-and-greet with escort and lounge. Since the price is per passenger, a family of four quickly reaches a figure worth pausing over.</p>

<h2>When it genuinely earns its keep</h2>
<ul>
<li><strong>A departure between 6 and 9 am in high season</strong>, when several European rotations leave within the hour.</li>
<li><strong>An arrival after 9 pm</strong> with tired young children, or a passenger with reduced mobility.</li>
<li><strong>A tight connection</strong> on arrival, where thirty minutes decide the next flight.</li>
<li><strong>Business travel</strong> with an immediate appointment, where time carries an explicit cost.</li>
</ul>
<div class="callout">
<span class="callout-label">The free alternative</span>
<p>Arrive early. Checking in three hours before the flight rather than two puts you ahead of the 7 am wave, and costs nothing but an hour of sleep. On arrival, getting off the plane among the first has the same effect: queues form within minutes.</p>
</div>

<h2>What to check before buying</h2>
<p>Three things, every time. Is the service offered <strong>on arrival, on departure, or both</strong>? Is it <strong>valid for your terminal</strong>, RAK having two? And what is the <strong>exact meeting point</strong> with the agent — that is the most common source of disappointment, a service paid for but never found.</p>
`,
  faqs: [
    {
      q: 'Does Fast Track exist at Marrakech Airport?',
      a: "Yes, as a queue-skip at passport control, offered on arrival and departure by various providers, often with an escort and sometimes lounge access.",
    },
    {
      q: 'How much time does Fast Track save in Marrakech?',
      a: "Twenty-five to fifty minutes at busy times — arrivals between 8 pm and midnight, departures between 6 and 9 am. In the middle of the day off-season, the saving is about a quarter of an hour, which does not justify the cost.",
    },
    {
      q: 'What does Fast Track cost at RAK?',
      a: "Roughly €20 to €60 per person for a simple queue-skip, more for a full meet-and-greet with escort and lounge. Since it is priced per passenger, recalculate for a family.",
    },
    {
      q: 'Does Fast Track skip security screening?',
      a: "No, never. Departure security screening remains compulsory for all passengers. The service only speeds up border police, which is precisely RAK's bottleneck.",
    },
  ],
} satisfies LocalizedArticle;
