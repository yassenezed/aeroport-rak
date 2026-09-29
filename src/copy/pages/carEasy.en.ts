import type { LocalizedPage } from '../types';

export default {
  title: "Automatic car hire at Marrakech Menara Airport",
  description: "Hiring an automatic at Marrakech Menara Airport: real availability, the premium, city driving and advice for your first time at the wheel in Morocco.",
  eyebrow: 'Marrakech Menara · Easy drive',
  h1: 'Easy-drive hire: automatics in Marrakech',
  lede: "In Morocco, manual is the norm and automatics have to be reserved. If you have never driven here, that choice changes more than you might think — starting with your first hour in traffic.",
  body: `
<h2>Automatics in Morocco: a minority, so book ahead</h2>
<p>The Moroccan fleet is predominantly manual. Automatics exist at RAK, but they cluster in the compact category and above and make up a limited share of the fleet. Two consequences: a <strong>premium of 15 to 30 %</strong> over the same model with a manual gearbox, and availability that thins out as the season builds.</p>
<p>If an automatic is a necessity rather than a preference — an automatic-only licence, an injury, or simply comfort — say so <strong>explicitly when booking</strong> and have the transmission confirmed in writing. A rental contract's "or similar" never guarantees the gearbox.</p>

<h2>Why it genuinely matters here</h2>
<p>Marrakech traffic is not aggressive, but it is <strong>dense, fluid and lateral</strong>: two-wheelers filtering up the inside, carts, pedestrians crossing, priority negotiated by eye contact rather than by sign. The big Gueliz roundabouts and Avenue Mohammed VI work on continuous merging.</p>
<p>In that setting, not having to manage a clutch frees exactly the attention you need to look around. That is the only real argument, and it is enough.</p>
<div class="callout">
<span class="callout-label">Your first hour at the wheel</span>
<p>Leave the airport towards Gueliz rather than the medina, and give yourself thirty minutes to settle into the local rhythm before heading to your accommodation. Avoid a first drive between 5 and 7 pm, and avoid driving at night: outside towns, some vehicles run without lights.</p>
</div>

<h2>What an automatic does not solve</h2>
<ul>
<li><strong>City parking</strong>, handled by informal attendants in hi-vis vests: MAD 5–10, MAD 20 overnight, paid on your return rather than on arrival.</li>
<li><strong>Medina access</strong>, impossible by car whatever the gearbox.</li>
<li><strong>Speed cameras</strong>, fixed and mobile, active on all main roads.</li>
<li><strong>The Tichka pass</strong>, where a small-engined automatic heats up on sustained climbs and engine braking behaves differently on the descent.</li>
</ul>

<h2>Choosing the right car</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Automatic category</th><th>Per day</th><th>Suited to</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Compact</strong> (Clio, Polo, i20)</td><td class="num">€45–60</td><td>City, Essaouira, Ourika</td></tr>
<tr><td><strong>Compact SUV</strong> (Duster, Sportage)</td><td class="num">€70–100</td><td>Atlas, Agafay tracks</td></tr>
<tr><td><strong>Saloon</strong></td><td class="num">€90–140</td><td>Long distance, Casablanca</td></tr>
</tbody>
</table>
</div>
<p>For a first drive in Morocco, a compact automatic is the right compromise: small enough for Gueliz streets, strong enough for the air conditioning and the hills, and far easier to park than an SUV.</p>

<h2>And if you would rather not drive at all</h2>
<p>That is a perfectly reasonable option, and many visitors choose it after the first day. A transfer for arrival and departure, taxis in town at MAD 15–50 a ride, and a car with driver for excursions cover an entire stay, often for a total close to the cost of hiring — with no deposit, no inspection and no parking.</p>
`,
  faqs: [
    {
      q: 'Are automatic cars easy to find in Marrakech?',
      a: "They exist but remain a minority, concentrated in the compact category and above. Book ahead and have the transmission confirmed in writing: a contract's \"or similar\" never guarantees the gearbox.",
    },
    {
      q: 'How much extra is an automatic in Morocco?',
      a: "Between 15 and 30 % more than the same model with a manual gearbox. A compact automatic runs around €45–60 a day, against €35–45 manual.",
    },
    {
      q: 'Is driving in Marrakech hard for a beginner?',
      a: "It is dense rather than aggressive: two-wheelers filtering up the inside, carts, pedestrians, and priority negotiated by eye contact. An automatic frees the attention you need to observe. Avoid a first drive between 5 and 7 pm, and at night outside towns.",
    },
    {
      q: 'How does street parking work in Marrakech?',
      a: "Informal attendants in hi-vis vests watch streets and squares: expect MAD 5–10 for a few hours and around MAD 20 overnight, paid on your return rather than on arrival. The medina itself stays closed to cars.",
    },
  ],
} satisfies LocalizedPage;
