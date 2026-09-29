import type { LocalizedPage } from '../types';

export default {
  title: "Hiring a tour guide from Marrakech Menara Airport",
  description: "Hiring a guide from Marrakech Menara Airport onwards: rates, official guides, medina tours, Atlas excursions and mistakes to avoid.",
  eyebrow: 'Marrakech · Guided tours',
  h1: 'Hiring a guide in Marrakech',
  lede: "Marrakech is a hard city to read on your own on the first day. An official guide, for a well-chosen half day, saves more time and money than it costs — provided you know what you are buying.",
  body: `
<h2>Official guide or faux guide: a legal distinction</h2>
<p>A Moroccan tour guide holds a <strong>professional card issued by the Ministry of Tourism</strong>, bearing their photo and number and renewed periodically. They have trained, sat an exam and work legally. Ask to see it: an official guide produces it without hesitation.</p>
<p>The people who approach visitors near Jemaa el-Fna or at the medina gates offering to "show the way" or "take you round the souks" overwhelmingly do not hold that card. The service almost always ends in a shop paying them commission, and the price first quoted is never the final one. It is not dangerous, simply a waste of time and money.</p>

<h2>What it costs</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Service</th><th>Indicative rate</th><th>Duration</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Official guide, medina</strong></td><td class="num">MAD 300–500</td><td>Half day</td></tr>
<tr><td><strong>Official guide, full day</strong></td><td class="num">MAD 500–800</td><td>8 hours</td></tr>
<tr><td><strong>Small-group walking tour</strong></td><td class="num">€15–30 / person</td><td>3–4 hours</td></tr>
<tr><td><strong>Driver-guide excursion</strong></td><td class="num">€60–120 / vehicle</td><td>Day, Ourika or Agafay</td></tr>
</tbody>
</table>
</div>
<p>Rates cover the guide only, excluding monument entry, lunch and transport. A tip of MAD 50–100 at the end is customary when the tour has been good, without being obligatory.</p>

<h2>Where a guide genuinely changes things</h2>
<p><strong>The medina and the souks</strong>, on day one. This is the most profitable use: in three hours you grasp how the quarters fit together, you locate the gates, and you learn what to buy where and at what price. The rest of the trip becomes far easier.</p>
<p><strong>Historic monuments</strong> — the Bahia Palace, the Saadian Tombs, the Ben Youssef Madrasa — where the near-total absence of interpretive signage leaves the visit mute without commentary.</p>
<p><strong>Excursions in the Atlas and the valleys</strong>, where the guide also acts as a Berber interpreter and opens doors that would otherwise stay shut.</p>
<div class="callout">
<span class="callout-label">Where a guide adds nothing</span>
<p>Wandering Jemaa el-Fna in the evening, dinner, a day by the pool, or an all-inclusive Agafay package: a guide brings nothing, and the accompaniment is already part of the deal.</p>
</div>

<h2>Book ahead or on the spot?</h2>
<p>Two approaches work. Your <strong>riad or hotel</strong> almost always works with an official guide they know: the simplest and often safest route, and the price remains negotiable. <strong>Online booking platforms</strong> let you compare reviews and lock the rate in advance, useful in high season or if you want a specific language.</p>
<p>Either way, agree three things upfront: the exact duration, what is included, and that the tour <strong>will not include a shop stop</strong>. That last sentence, said plainly at the start, prevents most disappointments.</p>
`,
  faqs: [
    {
      q: 'How much does an official guide cost in Marrakech?',
      a: "Between MAD 300 and 500 for a half day in the medina, and MAD 500 to 800 for a full day, excluding monument entry and lunch. A tip of MAD 50–100 is customary if the tour has been good.",
    },
    {
      q: 'How do you recognise an official guide in Marrakech?',
      a: "They hold a professional card issued by the Ministry of Tourism, with photo and number, and produce it without hesitation if you ask. People who approach visitors in the street to offer a tour generally do not have one.",
    },
    {
      q: 'Do you need a guide to visit the Marrakech medina?',
      a: "Not strictly, but a guided half day on the first morning is one of the best investments of the trip: you learn the geography of the souks, you locate the gates, and you can then navigate alone. Historic monuments, with little signage, also gain a great deal from commentary.",
    },
    {
      q: 'How do you avoid tours that end in a shop?',
      a: "State clearly at the outset that the tour will include no commercial stop, and agree the duration and inclusions in advance. An official guide accepts without difficulty; that is precisely what separates them from a commission-paid tout.",
    },
    {
      q: 'Can you book a guide before arriving in Marrakech?',
      a: "Yes, either through your riad or hotel, which usually works with a known official guide, or via an online platform letting you compare reviews and choose the language. Book ahead in high season and for languages other than French or English.",
    },
  ],
} satisfies LocalizedPage;
