import type { LocalizedPage } from '../types';

export default {
  title: 'Where to stay in Marrakech: districts, riads and hotels',
  description: 'Choosing where to stay in Marrakech: medina, Gueliz, Hivernage or Palmeraie, riad or hotel, plus our reviews of five properties.',
  eyebrow: 'Marrakech · Accommodation',
  h1: 'Where to stay in Marrakech',
  lede: "The district matters more than the property: it decides your travel time, your noise level and the way you experience the city. Here is how to choose, then our detailed reviews of five addresses.",
  body: `
<h2>Riad or hotel: two different experiences</h2>
<p>A <strong>riad</strong> is a traditional house built around a courtyard, usually five to ten rooms, inside the medina. You are received personally, breakfast is served on the terrace, and the quiet behind the door is real. In exchange: no car to the entrance, often steep stairs, rooms that are dim by design, and uneven heating in winter.</p>
<p>A <strong>hotel</strong>, in Gueliz, Hivernage or the Palmeraie, offers a lift, reliable air conditioning, a pool and vehicle access to the door. It is the comfort option, with less of a change of scene.</p>

<h2>The four districts, and who they suit</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>District</th><th>Who for</th><th>Car access</th><th>To the airport</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Medina</strong></td><td>First visit, atmosphere, riads</td><td>Drop-off at a gate, then on foot</td><td class="num">15–30 min</td></tr>
<tr><td><strong>Gueliz</strong></td><td>Restaurants, convenience, hire car</td><td>Direct</td><td class="num">10–20 min</td></tr>
<tr><td><strong>Hivernage</strong></td><td>Large hotels, quiet, spas</td><td>Direct</td><td class="num">10–15 min</td></tr>
<tr><td><strong>Palmeraie</strong></td><td>Pools, rest, families</td><td>Direct</td><td class="num">25–35 min</td></tr>
</tbody>
</table>
</div>
<p>The deciding question is simple: how often do you expect to come back to rest during the day? If the answer is "often", stay in the medina or Hivernage. If you plan a day in Agafay, another in the Atlas and evenings in town, the Palmeraie will cost you an hour in the car every day.</p>

<h2>What to ask before booking in the medina</h2>
<ul>
<li><strong>The name of the drop-off gate</strong> — Bab Doukkala, Bab Laksour, Bab Agnaou, Bab el Khemis — and the walking time from it.</li>
<li><strong>A porter with a handcart</strong> at your arrival time: most riads offer it free or for a few dirhams.</li>
<li><strong>Heating</strong> in winter: January nights drop below 8 °C and a stone riad cools quickly.</li>
<li><strong>Air conditioning</strong> in summer, when 42 °C by day is routine.</li>
<li><strong>Payment method</strong>: many small riads take only cash for the balance.</li>
</ul>
<div class="callout">
<span class="callout-label">Late arrival</span>
<p>If your flight lands after 10 pm, give your accommodation the flight number, not just the hour. A riad that knows you are two hours late keeps someone at the door; otherwise you will be ringing a bell in an empty lane.</p>
</div>

<h2>Our detailed reviews</h2>
<p>We have reviewed five properties representative of what Marrakech offers, from historic palace to boutique riad: <a href="/en/hotels/la-mamounia/">La Mamounia</a>, <a href="/en/hotels/royal-mansour/">Royal Mansour</a>, <a href="/en/hotels/es-saadi/">Es Saadi</a>, <a href="/en/hotels/riad-yasmine/">Riad Yasmine</a> and <a href="/en/hotels/riad-be/">Riad BE</a>. Each page covers the district, the price bracket, what works and what is worth knowing before you book.</p>
`,
  faqs: [
    {
      q: 'Is it better to stay in the medina or in Gueliz?',
      a: "The medina for atmosphere, riads and proximity to the souks, accepting drop-off at a gate and a walk. Gueliz for convenience: car access, restaurants, the ONCF station and easier driving, but less of a change of scene.",
    },
    {
      q: 'Does a riad work with children?',
      a: "It depends on the riad: stairs are often steep, terraces rarely fenced and courtyards open. Many families prefer a hotel in Hivernage or the Palmeraie with a pool. Some spacious riads work very well, but ask directly.",
    },
    {
      q: 'Can you drive to a riad in the medina?',
      a: "Almost never: the derbs are too narrow and several entrances are closed to traffic. You are dropped at the nearest gate and finish on foot in three to ten minutes. Ask for a porter with a handcart when booking.",
    },
    {
      q: 'Are Marrakech riads heated in winter?',
      a: "Unevenly. January and February nights drop below 8 °C and stone buildings cool quickly. Check explicitly that the room has heating before booking a winter stay.",
    },
    {
      q: 'Do you need cash in riads?',
      a: "Often, for the balance: many small properties take cards only for the online deposit, or not at all. Bring dirhams and ask when you book.",
    },
  ],
  cta: {
    heading: 'From the airport to your riad door',
    text: "Give your property's name: the driver knows the nearest medina gate and drops you there, fixed price per vehicle.",
    label: 'Book my transfer',
  },
} satisfies LocalizedPage;
