import type { LocalizedPage } from '../types';

export default {
  title: "Cheap car hire at Marrakech Menara Airport: from €25/day",
  description: "Budget car hire at Marrakech Menara Airport: real prices from €25 a day, local versus international agencies, and the traps in a cheap contract.",
  eyebrow: 'Marrakech Menara · Budget',
  h1: 'Budget car hire in Marrakech',
  lede: "The £10-a-day adverts exist, and they are not false — they are simply incomplete. Here is what a small car really costs in Morocco, and how to pay little without being caught at the desk.",
  body: `
<h2>What you actually get at that price</h2>
<p>The budget category in Morocco means a <strong>Dacia Sandero, Kia Picanto, Hyundai i10 or Fiat Panda</strong>: four or five seats, a modest boot, air conditioning, manual gearbox. These cars are built or heavily imported in Morocco, which explains rates well below European levels. Expect <strong>€25–35 a day</strong> in normal season, less on a weekly hire.</p>
<p>They are perfectly adequate for Marrakech, Essaouira, Ourika, Imlil and the Tichka: all those roads are paved. Their real limits are air conditioning in high summer, which struggles on small engines above 42 °C, and pulling power in the mountains with four people aboard.</p>

<h2>How a low price becomes a high one</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Contract line</th><th>What is advertised</th><th>What you pay</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Excess</strong></td><td>"Insurance included"</td><td>MAD 5,000–15,000 excess on you</td></tr>
<tr><td><strong>Excess waiver</strong></td><td>Optional</td><td>€10–20 / day, sometimes more than the hire</td></tr>
<tr><td><strong>Fuel</strong></td><td>"Full to full"</td><td>Tank charged upfront, unused fuel not refunded by some</td></tr>
<tr><td><strong>Additional driver</strong></td><td>Not mentioned</td><td>€5–10 / day</td></tr>
<tr><td><strong>Out-of-hours return</strong></td><td>Not mentioned</td><td>Night or Sunday supplement</td></tr>
</tbody>
</table>
</div>
<p>The habit that protects you: ask for <strong>the total amount to be charged, excess included</strong>, in writing, before confirming. A serious hire company provides it without difficulty.</p>

<h2>Local agency or international brand?</h2>
<p><strong>Moroccan agencies</strong> are often 20 to 40 % cheaper, with older but properly maintained vehicles and a real person on site. The risk lies in the highly variable quality of the vehicle inspection and in how disputes are handled. Pick one with a meaningful volume of recent reviews.</p>
<p><strong>International brands</strong> at RAK cost more but offer standardised procedures, a newer fleet and simpler recourse if something goes wrong. On a tight budget, that is the sensible compromise for a first hire in Morocco.</p>
<div class="callout">
<span class="callout-label">The precaution worth more than any contract</span>
<p>Film the car from every angle on collection — wheels, windscreen, roof, sills, interior — with timestamping on, and repeat exactly the same sequence on return. It is the only evidence that counts in a dispute over a scratch, and it takes ten minutes.</p>
</div>

<h2>Paying less, concretely</h2>
<ul>
<li><strong>Book ahead</strong>: walk-up prices in high season are consistently higher than online.</li>
<li><strong>Hire by the week</strong>: the daily rate falls sharply beyond five days.</li>
<li><strong>Do not collect the car on landing</strong> if your first two days are in the medina — you would be paying for an unusable vehicle.</li>
<li><strong>Decline the sat-nav</strong> at €8 a day: your phone with an offline map does better.</li>
<li><strong>Compare the hire company's excess waiver</strong> with third-party cover, often three times cheaper, accepting that you pay up front in a claim.</li>
</ul>
`,
  faqs: [
    {
      q: 'What does a small hire car really cost in Marrakech?',
      a: "€25 to €35 a day in normal season for a Dacia Sandero, Kia Picanto or similar, with weekly rates lower. Adverts well below that usually exclude the excess waiver, which can add €10–20 a day.",
    },
    {
      q: 'Are local Moroccan agencies reliable?',
      a: "The good ones are, and they cost 20 to 40 % less than international brands. Quality comes down to how seriously the vehicle inspection is done: choose an agency with numerous recent reviews, and film the car on collection and return.",
    },
    {
      q: 'Is a city car enough for the Atlas from Marrakech?',
      a: "Yes for Ourika, Imlil, Essaouira and the Tichka pass, which are paved. Its limits are air conditioning in high summer and pulling power in the mountains when fully loaded. Only unsurfaced tracks justify an SUV.",
    },
    {
      q: 'Should you take the hire company\'s excess waiver?',
      a: "It is not compulsory, and it is often the most expensive line. Specialist third-party cover typically costs three times less, with one trade-off: you pay for damage up front and reclaim afterwards.",
    },
  ],
} satisfies LocalizedPage;
