import type { LocalizedPage } from '../types';

export default {
  title: "Marrakech Menara Airport guide (RAK): terminals and tips",
  description: "A full guide to Marrakech Menara Airport: terminals, layout, entry formalities, waiting times, connections and getting into the city.",
  eyebrow: 'Marrakech Menara · Guide',
  h1: 'Marrakech Menara Airport guide',
  lede: "Everything worth knowing about RAK before you set foot in it: how the terminal is laid out, where the queues form, what border police ask for and how long each step really takes.",
  facts: [
    { label: 'IATA / ICAO code', value: 'RAK', sub: '· GMMX' },
    { label: 'Elevation', value: '471', sub: 'm' },
    { label: 'Runway', value: '3,100', sub: 'm' },
    { label: 'Passengers 2024', value: '9.3', sub: 'million' },
  ],
  body: `
<h2>One airport, two adjoining terminals</h2>
<p>Marrakech Menara runs two linked halls, which makes walking between them simple and quick. T1, the newer one with its white geometric lattice, handles most international flights; T2 takes the overflow and part of the domestic traffic. The split shifts by season and by airline: trust your boarding pass rather than habit.</p>
<p>The airport sits six kilometres from the centre, at 471 metres above sea level, with a single 3,100-metre runway. It passed <strong>9.3 million passengers in 2024</strong>, a volume felt mostly in the evening when European rotations land in series.</p>

<h2>On arrival: the walk and the real timings</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Step</th><th>Usual</th><th>At peak</th></tr></thead>
<tbody>
<tr><td>Airbridge → border police</td><td class="num">5–10 min</td><td class="num">10–15 min</td></tr>
<tr class="row-highlight"><td>Passport control</td><td class="num">15–25 min</td><td class="num">30–45 min</td></tr>
<tr><td>Baggage reclaim</td><td class="num">15–20 min</td><td class="num">25–35 min</td></tr>
<tr><td>Customs and exit</td><td class="num">5 min</td><td class="num">10 min</td></tr>
</tbody>
</table>
</div>
<p>There has been no <strong>police form</strong> to fill in since September 2019: just have your passport and accommodation address ready. You will need your accommodation address.</p>

<h2>On departure: the bottleneck</h2>
<p>It is not check-in that slows RAK down, but exit passport control (the scanners at the terminal entrance were removed in March 2025). Two hours is enough off-season; aim for <strong>three hours</strong> in high season, during school holidays, or if you are checking bags. Peaks run 6 to 9 am, then late afternoon.</p>

<h2>Entry formalities for Morocco</h2>
<ul>
<li><strong>Passport</strong> valid for at least six months beyond your entry date.</li>
<li><strong>No visa</strong> for citizens of the EU, the UK, Switzerland, Canada and the United States, for tourist stays up to 90 days.</li>
<li><strong>No police form</strong> since September 2019, on entry or exit; keep your accommodation address handy.</li>
<li><strong>Cash</strong>: declaration required above MAD 100,000. Dirhams can be neither imported nor exported.</li>
<li><strong>Drones</strong>: importing them is banned and they are routinely seized on arrival.</li>
</ul>
<div class="callout">
<span class="callout-label">Long layover or an overnight at the airport</span>
<p>The terminal is not built for sleeping in. Beyond six hours of waiting, a hotel ten minutes away often costs less than a lounge plus a sleepless night. See our <a href="/en/hotels/">hotels page</a>.</p>
</div>

<h2>Getting into the city</h2>
<p>Four options, and no more: the <strong>taxi</strong> rank, at MAD 100–150 by day and MAD 150–240 at night for the whole car; a <strong>booked transfer</strong>, from €27 per vehicle for up to seven passengers; <strong>bus 19</strong> by ALSA, at MAD 30 per person to Jemaa el-Fna, between 6 am and 11.30 pm; and a <strong>hire car</strong>, with desks in the arrivals hall. Each is covered on our <a href="/en/transfers/">transfers page</a>.</p>
`,
  faqs: [
    {
      q: 'How many terminals does Marrakech Airport have?',
      a: "Two adjoining terminals linked on foot: T1, the newer one, handles most international flights, while T2 takes the overflow and part of the domestic traffic. The split varies by airline and season, so trust your boarding pass.",
    },
    {
      q: 'What is the code for Marrakech Airport?',
      a: "RAK is the IATA code on your ticket, and GMMX the ICAO code used by air traffic control. The airport's official name is Marrakech Menara.",
    },
    {
      q: 'Do you need a visa to enter Morocco via Marrakech?',
      a: "Not for citizens of the EU, the UK, Switzerland, Canada and the United States, for tourist stays up to 90 days. Your passport must be valid for the whole stay (six months' remaining validity is recommended); the police form was abolished in 2019.",
    },
    {
      q: 'Can you sleep at Marrakech Airport?',
      a: "The terminal is not set up for it and is uncomfortable overnight. Beyond six hours of waiting, a hotel ten minutes from the airport often costs less than lounge access followed by a sleepless night.",
    },
    {
      q: 'Can you bring a drone into Morocco?',
      a: "No. Importing drones is banned and units are routinely seized at arrival checks, including hobby models. Put them neither in the cabin nor in the hold.",
    },
  ],
  cta: {
    heading: 'The ride into town, settled in advance',
    text: "Fixed price per vehicle, flight tracking, drop-off at the nearest medina gate: what remains once you have cleared police and collected your bags.",
    label: 'Book a transfer',
  },
} satisfies LocalizedPage;
