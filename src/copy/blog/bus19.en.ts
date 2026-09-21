import type { LocalizedArticle } from '../types';

export default {
  title: 'Bus 19 ALSA: Marrakech Airport ↔ Jemaa el-Fna',
  description: 'Bus 19 between Marrakech Airport and Jemaa el-Fna: fare, timetable, frequency, journey time, where to catch it and when it does not work.',
  eyebrow: 'Getting around',
  h1: 'Bus 19 between Marrakech Airport and the centre',
  lede: "Thirty dirhams to reach Jemaa el-Fna: the cheapest way in from RAK, and it works well — provided you land before 11 pm and can carry your own bag.",
  excerpt: "Fare, timetable, frequency and limits of ALSA's line 19, the bus linking the airport to Jemaa el-Fna for MAD 30.",
  date: '2026-09-13',
  facts: [
    { label: 'One way', value: '30', sub: 'MAD' },
    { label: 'Return', value: '50', sub: 'MAD' },
    { label: 'Frequency', value: '≈ 30', sub: 'min' },
    { label: 'Journey', value: '≈ 20', sub: 'min' },
  ],
  body: `
<h2>How it works</h2>
<p>Line 19, run by <strong>ALSA</strong>, links Marrakech Menara Airport to Jemaa el-Fna. The stop is outside the terminal and clearly signed, and the ride takes about twenty minutes with a few intermediate stops, including in Gueliz.</p>
<p>A ticket costs <strong>MAD 30 one way</strong> and <strong>MAD 50 return</strong>, the latter valid for around a fortnight — which makes it the better buy if you come back the same way. Buy from the driver or at the kiosk, in cash.</p>
<p>Departures run roughly every thirty minutes, between <strong>6 am and 11.30 pm</strong>. Timings vary by season and traffic: check the board at the stop.</p>

<h2>When it is the right choice</h2>
<ul>
<li>You land <strong>during the day</strong>, between 8 am and 9 pm.</li>
<li>You travel <strong>as one or two people</strong>, with a bag you can carry without effort.</li>
<li>Your accommodation is <strong>near Jemaa el-Fna</strong> or in the southern medina.</li>
<li>Budget is the main criterion: MAD 30 against MAD 100–150 by taxi is a real difference.</li>
</ul>

<h2>When not to take it</h2>
<p>Bus 19 becomes a bad idea in several situations, and it is better to know before dragging a suitcase to the stop.</p>
<p><strong>After 11.30 pm</strong> it no longer runs — and a large share of low-cost flights land precisely then. <strong>With two suitcases</strong> or a small child, boarding, stowing bags and the final walk become a chore. And <strong>if your riad is not near the square</strong>, you will add ten to twenty minutes on foot through the lanes, with your luggage, often after dark.</p>
<div class="callout">
<span class="callout-label">The sum to do with four people</span>
<p>Four people on the bus: MAD 120. A grand taxi or a transfer for the same group: MAD 150 by day, or €27 for a vehicle seating up to seven, door to door. The gap becomes trivial, and the comfort is in another league.</p>
</div>

<h2>For the return to the airport</h2>
<p>The bus runs back from Jemaa el-Fna at the same frequency. It is a fair option for a midday flight. For an early departure, however, the first bus at around 6 am leaves no margin if your check-in closes early: book a transfer the night before instead.</p>
`,
  faqs: [
    {
      q: 'How much is bus 19 in Marrakech?',
      a: "MAD 30 one way and MAD 50 return, the latter valid for around a fortnight. Payment is in cash, to the driver or at the kiosk.",
    },
    {
      q: 'What are the bus 19 times at Marrakech Airport?',
      a: "Departures roughly every thirty minutes, between 6 am and 11.30 pm. Times vary by season: check the board at the stop, which is just outside the terminal.",
    },
    {
      q: 'Where does bus 19 drop you in Marrakech?',
      a: "At Jemaa el-Fna, with a few intermediate stops including Gueliz. It does not serve your accommodation: if your riad is away from the square, expect ten to twenty minutes on foot through the lanes.",
    },
    {
      q: 'Does bus 19 run at night?',
      a: "No, the last departure is around 11.30 pm. Since many low-cost flights land later, it is often unusable on arrival: plan a taxi or a booked transfer.",
    },
    {
      q: 'Is bus 19 worth it for a group?',
      a: "Rarely. For four people the bus comes to MAD 120, against MAD 150 for a grand taxi or €27 for a private transfer seating up to seven, door to door. The price gap becomes minimal and the comfort is not comparable.",
    },
  ],
} satisfies LocalizedArticle;
