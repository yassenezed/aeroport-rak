import type { LocalizedPage } from '../types';

export default {
  title: 'Destinations from Marrakech Airport',
  description: 'Where to go from Marrakech Airport: medina, Gueliz, Palmeraie, Agafay, Ourika, Essaouira, Agadir and Ouarzazate, with distances, times and prices.',
  eyebrow: 'Marrakech Menara · Destinations',
  h1: 'Where to go from Marrakech Airport',
  lede: "Menara is the gateway to central Morocco: the medina is fifteen minutes away, the Agafay dunes forty, the Atlas an hour and the Atlantic two and a half. Here are the real distances and what each journey costs.",
  body: `
<h2>Distances and driving times from RAK</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Destination</th><th>Distance</th><th>By car</th><th>Private transfer</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Medina / Jemaa el-Fna</strong></td><td class="num">6 km</td><td class="num">15–30 min</td><td class="num">from €27</td></tr>
<tr><td><strong>Gueliz / Hivernage</strong></td><td class="num">4–5 km</td><td class="num">10–20 min</td><td class="num">from €27</td></tr>
<tr><td><strong>Palmeraie</strong></td><td class="num">12 km</td><td class="num">25–35 min</td><td class="num">€30–40</td></tr>
<tr><td><strong>Agafay desert</strong></td><td class="num">30 km</td><td class="num">40–50 min</td><td class="num">€35–55</td></tr>
<tr><td><strong>Ourika valley</strong></td><td class="num">40 km</td><td class="num">1 h</td><td class="num">€45–65</td></tr>
<tr><td><strong>Imlil / Toubkal</strong></td><td class="num">65 km</td><td class="num">1 h 30</td><td class="num">€60–85</td></tr>
<tr><td><strong>Essaouira</strong></td><td class="num">180 km</td><td class="num">2 h 30</td><td class="num">≈ €95</td></tr>
<tr><td><strong>Ouarzazate</strong></td><td class="num">200 km</td><td class="num">4 h</td><td class="num">€120–160</td></tr>
<tr><td><strong>Agadir</strong></td><td class="num">250 km</td><td class="num">3 h</td><td class="num">€130–170</td></tr>
<tr><td><strong>Casablanca</strong></td><td class="num">240 km</td><td class="num">2 h 30</td><td class="num">€130–170</td></tr>
</tbody>
</table>
</div>
<p>Times assume normal conditions, outside the late-afternoon exodus. The Ouarzazate road crosses the Tichka pass at 2,260 metres: a fine drive, but not one covered at motorway pace, and one that demands care in winter.</p>

<h2>The districts of Marrakech, in a minute</h2>
<h3>The medina</h3>
<p>The historic core, its riads and its souks. No car enters: you are dropped at a gate and finish on foot. The choice for those who come for the atmosphere and accept the noise, the heat and the lanes. Have the exact name of your drop-off <em>bab</em> ready.</p>
<h3>Gueliz</h3>
<p>The modern town, gridded and drivable, with restaurants, galleries and the ONCF station. Quieter, far easier with children or a hire car, less of a change of scene. Ten minutes from the airport.</p>
<h3>Hivernage</h3>
<p>The district of large hotels and conference venues, between Gueliz and the medina, within walking distance of the Koutoubia. Plenty of greenery, little street life.</p>
<h3>The Palmeraie</h3>
<p>Twelve kilometres out, villas and pool hotels in a palm grove. Restful, but you will depend on a car or taxi for every outing — a detail that weighs heavily on a short stay.</p>

<h2>The excursions people actually ask for</h2>
<p><strong>Agafay</strong> is the stone desert forty minutes from town: tented dinners, camp nights and sunset over the Atlas, without the ten-hour drive to the Sahara. <strong>Ourika</strong> offers water, shade and waterfalls an hour away — the locals' escape when the city bakes. <strong>Imlil</strong> is the trailhead for Toubkal. <strong>Essaouira</strong> deserves more than a day trip: two and a half hours of road, a listed medina, wind, and a temperature ten degrees lower.</p>
<div class="callout">
<span class="callout-label">Heading straight to Essaouira or Agadir on arrival</span>
<p>It is common, and it needs planning. A private transfer from RAK to Essaouira runs around €95 per vehicle, against three to four hours by CTM coach from Marrakech bus station for a few pounds per person. If you land in the evening, sleep in Marrakech and leave in the morning: the coast road has nothing to offer in the dark.</p>
</div>
`,
  faqs: [
    {
      q: 'How far is Marrakech Airport from the medina?',
      a: "Six kilometres, or 15 to 30 minutes by car depending on the hour. Bus 19 takes about twenty minutes and drops you directly at Jemaa el-Fna.",
    },
    {
      q: 'How long does it take to get from Marrakech to Essaouira?',
      a: "Two and a half hours by road, for 180 kilometres. A private transfer costs around €95 per vehicle, and CTM or Supratours coaches make the trip from Marrakech bus station for a few pounds per person.",
    },
    {
      q: 'Can you reach Ouarzazate from Marrakech Airport in a day?',
      a: "Yes, but allow four hours each way over the Tichka pass at 2,260 metres. A day return is tiring and leaves little time there: a night in Ouarzazate or Ait Ben Haddou changes the experience entirely.",
    },
    {
      q: 'Which district of Marrakech should you stay in?',
      a: "The medina for atmosphere and riads, accepting the lanes and the noise. Gueliz for convenience, restaurants and driving. Hivernage for large, quiet hotels. The Palmeraie for pools and rest, provided you accept twelve kilometres each time you go out.",
    },
  ],
  cta: {
    heading: 'A direct ride to your destination',
    text: "Medina, Agafay, Ourika or Essaouira: give your arrival address and get a fixed price per vehicle, driver included.",
    label: 'Price my journey',
  },
} satisfies LocalizedPage;
