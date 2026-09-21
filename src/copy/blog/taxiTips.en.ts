import type { LocalizedArticle } from '../types';

export default {
  title: 'Taxis in Marrakech: fares and how to handle them',
  description: 'Taxis in Marrakech: airport fares posted by day and night, petit versus grand taxi, meters, paying cash and the traps to avoid.',
  eyebrow: 'Getting around',
  h1: 'Taxis in Marrakech: fares and good habits',
  lede: "Marrakech posts its taxi fares at the airport rank, which is good news. What remains is reading them, choosing the right size of car, and agreeing terms before the bags go in the boot.",
  excerpt: 'Day and night fares, petit or grand taxi, meters and small change: what to know before getting into a Moroccan taxi.',
  date: '2026-09-14',
  facts: [
    { label: 'Airport → medina (day)', value: '100–150', sub: 'MAD' },
    { label: 'Airport → medina (night)', value: '150–240', sub: 'MAD' },
    { label: 'City ride', value: '15–50', sub: 'MAD' },
    { label: 'Petit taxi', value: '3', sub: 'passengers max' },
  ],
  body: `
<h2>What you should be paying</h2>
<p>As you leave the arrivals hall the taxi rank is immediately in front of you, and you will be approached before you reach it. Unlike some other Moroccan airports, Marrakech officially posts its fares on a board, by destination zone. That is your best tool: this is not blind haggling, it is matching the quoted price to the posted one.</p>
<p>For the medina, Gueliz or Hivernage — the vast majority of arrivals — the reasonable range is <strong>MAD 100–150 by day</strong> and <strong>MAD 150–240 after dark</strong>, for the whole car. The Palmeraie, further out, naturally sits above that.</p>
<div class="callout">
<span class="callout-label">The sentence to say</span>
<p>"Medina, Bab Doukkala — that's 100 dirhams, like the sign says?" Naming the gate, citing the board and confirming the amount before the boot opens settles almost every misunderstanding. If the driver refuses, the next one will agree: there is always a queue.</p>
</div>

<h2>Petit or grand taxi: decide before getting in</h2>
<p>Marrakech's beige petits taxis are capped at <strong>three passengers</strong>. That is the most common friction point at the rank: a family of four is offered two cars and the bill doubles. Grands taxis take up to six passengers and have a proper boot.</p>
<p>As soon as you are three with large suitcases, or four or more, ask for a grand taxi from the outset — the per-person price then stays very reasonable. Grands taxis also run out-of-town routes: Ourika, Agafay, Essaouira.</p>

<h2>The meter, in town</h2>
<p>Leaving the airport, the established practice is a flat fare from the posted board, not the meter. In town, petits taxis are supposed to have one, but <strong>it is rarely switched on for tourists</strong>: ask as you get in, or agree the price before setting off.</p>
<p>City benchmarks: <strong>MAD 15–30</strong> for a short ride, <strong>MAD 30–50</strong> for a longer crossing, with roughly a 50 % night surcharge. If you are quoted MAD 100 to go from Jemaa el-Fna to Gueliz, that is the tourist price: offer 30 and wait.</p>

<h2>Cash, change and small notes</h2>
<p>Bring dirhams: cards are almost never accepted and change is often short. The ATMs in arrivals work well but happily dispense MAD 200 notes, with which a driver will not break a MAD 100 fare. Withdraw, then break them as soon as you can — at the terminal café or shop — so you hold MAD 50s and 100s.</p>

<h2>When a taxi is the wrong call</h2>
<p>It loses its edge in three specific cases. <strong>Very late arrivals</strong>, where the night scale brings the taxi close to a booked transfer without the comfort. <strong>Groups of four or more</strong>, who often pay for two vehicles. And <strong>hard-to-place riads</strong>, where the driver will drop you at whichever gate suits him rather than the nearest.</p>
<p>In those situations, compare with a <a href="/en/book-transfer/">fixed-price transfer</a>: at €27 per vehicle for up to seven seats, it becomes cheapest from four passengers onwards.</p>
`,
  faqs: [
    {
      q: 'How much is a taxi from Marrakech Airport to the medina?',
      a: "The official board at the rank shows roughly MAD 100–150 by day to the medina, Gueliz and Hivernage, and MAD 150–240 at night. The price is for the whole car, not per passenger.",
    },
    {
      q: 'Do Marrakech taxis use the meter?',
      a: "Not from the airport: the established practice there is a flat fare from the posted board. In town, petits taxis are supposed to have a meter, but it is rarely switched on for tourists. Ask as you get in, or agree the price first.",
    },
    {
      q: 'Petit or grand taxi, what is the difference?',
      a: "The petit taxi is Marrakech's beige saloon, capped at three passengers and confined to the city. The grand taxi takes up to six, has a proper boot and also covers out-of-town routes. From four people, ask for a grand taxi directly.",
    },
    {
      q: 'Can you pay a Marrakech taxi by card?',
      a: "No, bring cash in dirhams. Taxis practically never take cards and drivers struggle to break a large note: carry MAD 50s and 100s.",
    },
    {
      q: 'How much is a taxi ride within Marrakech?',
      a: "MAD 15–30 for a short ride in the centre and MAD 30–50 for a longer crossing, with roughly a 50 % night surcharge. A quote of MAD 100 for a trip within the city is a tourist price.",
    },
  ],
  cta: {
    heading: 'Skip the negotiation at one in the morning',
    text: "A fixed price locked before departure, a driver waiting with your name who knows the right medina gate.",
    label: 'See transfer prices',
  },
} satisfies LocalizedArticle;
