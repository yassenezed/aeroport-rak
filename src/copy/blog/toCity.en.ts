import type { LocalizedArticle } from '../types';

export default {
  title: 'Marrakech Airport to the city centre: the options',
  description: 'Getting to central Marrakech from the airport: taxi, transfer, bus 19 or hire car, with real prices, timings and medina gate drop-offs.',
  eyebrow: 'Getting around',
  h1: 'From RAK to central Marrakech',
  lede: "Six kilometres, four options, and one real difficulty: the medina cannot be driven through. Here is what each solution costs and which one matches your landing time.",
  excerpt: 'Taxi, transfer, bus 19 or hire car: the four ways into the centre, with real prices and the facts on medina gate drop-offs.',
  date: '2026-09-15',
  facts: [
    { label: 'Distance', value: '6', sub: 'km' },
    { label: 'Taxi (day)', value: '100–150', sub: 'MAD' },
    { label: 'Bus 19', value: '30', sub: 'MAD' },
    { label: 'Transfer', value: '€27', sub: 'from' },
  ],
  body: `
<h2>The comparison in one table</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Price</th><th>Duration</th><th>Drop-off</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Private transfer</strong></td><td class="num">from €27 / vehicle</td><td class="num">15–30 min</td><td>Chosen medina gate, or exact address</td></tr>
<tr><td><strong>Taxi</strong></td><td class="num">MAD 100–150 by day</td><td class="num">15–30 min</td><td>Whichever gate suits the driver</td></tr>
<tr><td><strong>Bus 19</strong></td><td class="num">MAD 30 / person</td><td class="num">≈ 20 min</td><td>Jemaa el-Fna only</td></tr>
<tr><td><strong>Hire car</strong></td><td class="num">from €25 / day</td><td class="num">15–30 min</td><td>Car park, then on foot</td></tr>
</tbody>
</table>
</div>

<h2>The taxi: the default choice, and a good one</h2>
<p>Marrakech posts its fares at the airport rank, by zone. For the medina, Gueliz and Hivernage the range is <strong>MAD 100–150 by day</strong>, roughly £8–12 for the whole car, and MAD 150–240 after dark. The price covers the ride, not each passenger.</p>
<p>The rule that avoids 90 % of trouble: name your gate, cite the board, confirm the amount, <strong>then</strong> open the boot. If the driver refuses, the next one will agree.</p>
<p>Mind the vehicle size: the beige petit taxi is capped at three passengers. With four people and suitcases you will be offered two cars — ask for a grand taxi instead, or pay double.</p>

<h2>The booked transfer: when it becomes cheaper</h2>
<p>At €27 per vehicle for up to seven passengers, a transfer is of no interest to two people landing at 2 pm. It is of great interest in three cases: <strong>at night</strong>, when the taxi climbs to MAD 150–240; <strong>from four passengers</strong>, when two petits taxis cost more; and for a <strong>hard-to-place riad</strong>, where the driver will stop at whichever gate suits him rather than the nearest one.</p>
<p>Add flight tracking, waiting time included if you are delayed, and the option of child seats, which taxis practically never carry.</p>

<h2>Bus 19: unbeatable, with conditions</h2>
<p>ALSA's line 19 links the airport to Jemaa el-Fna for <strong>MAD 30 one way, MAD 50 return</strong> valid for a fortnight, with a departure roughly every thirty minutes between 6 am and 11.30 pm. The stop is outside the terminal and the ride takes about twenty minutes.</p>
<p>It works perfectly for two people, by day, with a bag you can carry. It becomes painful with two suitcases, a child, or after 10 pm — and it serves only the square, not your accommodation.</p>

<h2>The last hundred metres</h2>
<p>Whichever option you take, the medina finishes on foot: the <em>derbs</em> are too narrow and several entrances are closed to traffic. Depending on your area you will be dropped at <strong>Bab Doukkala, Bab Laksour, Bab Agnaou or Bab el Khemis</strong>, three to ten minutes' walk away.</p>
<div class="callout">
<span class="callout-label">The two messages to send before you travel</span>
<p>To your riad: "Which gate should I give the driver?" and "Can you send a porter at this time?" Those two answers turn a tricky night arrival into a formality.</p>
</div>
`,
  faqs: [
    {
      q: 'How much is a taxi from Marrakech Airport to the centre?',
      a: "MAD 100–150 by day to the medina, Gueliz and Hivernage, and MAD 150–240 at night, for the whole car rather than per passenger. Fares are posted on a board at the taxi rank.",
    },
    {
      q: 'Does bus 19 run at night in Marrakech?',
      a: "No, the last departure is around 11.30 pm. Since many low-cost flights land after that, it is often unusable on arrival: plan a taxi or a transfer.",
    },
    {
      q: 'How long is the trip from the airport to Jemaa el-Fna?',
      a: "Fifteen to thirty minutes by car depending on traffic, for six kilometres, and about twenty minutes on bus 19 including stops. Late afternoons and Ramadan lengthen the journey noticeably.",
    },
    {
      q: 'Can a taxi drop me at my riad?',
      a: "No, the medina is not accessible by car. The driver stops at the nearest gate — Bab Doukkala, Bab Laksour, Bab Agnaou or Bab el Khemis — and you finish on foot, usually in three to ten minutes.",
    },
  ],
  cta: {
    heading: 'The journey settled before you land',
    text: "Fixed price per vehicle, a driver tracking your flight, drop-off at the medina gate nearest your riad.",
    label: 'Book a transfer',
  },
} satisfies LocalizedArticle;
