import type { LocalizedArticle } from '../types';

export default {
  title: "SIM cards at Marrakech Menara Airport: which network?",
  description: "Buying a SIM card at Marrakech Menara Airport: tourist bundles from the three operators, prices, Atlas coverage and the eSIM alternative.",
  eyebrow: 'Practical',
  h1: "SIM card at Marrakech Menara Airport: which operator to choose?",
  lede: "Three operators, tourist bundles for a few tens of dirhams, and counters in the arrivals hall. Here is which to pick for your itinerary, and when an eSIM does the job better.",
  excerpt: 'Maroc Telecom, Orange or inwi: prices, data allowances, Atlas coverage and how they compare with an eSIM activated before departure.',
  date: '2026-09-11',
  body: `
<h2>The three operators at Marrakech Menara Airport</h2>
<p>The Moroccan market is shared between <strong>Maroc Telecom (IAM)</strong>, <strong>Orange Maroc</strong> and <strong>inwi</strong>. All three have counters in the Marrakech Airport arrivals hall, open long hours, and offer prepaid bundles designed for visitors.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Operator</th><th>Strength</th><th>Coverage</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Maroc Telecom</strong></td><td>Best coverage outside cities</td><td>Excellent, including Atlas and the south</td></tr>
<tr><td><strong>Orange Maroc</strong></td><td>Good data value, familiar interface</td><td>Very good in urban and tourist areas</td></tr>
<tr><td><strong>inwi</strong></td><td>Often the cheapest on data</td><td>Good in cities, patchier in the mountains</td></tr>
</tbody>
</table>
</div>
<p>The deciding factor is not price, which is much of a muchness, but <strong>your itinerary</strong>. If you stay in Marrakech, Essaouira and on the main roads, any of the three will do. If you plan the Atlas, the valleys, Imlil or the Ouarzazate road, Maroc Telecom remains the safest choice.</p>

<h2>What a tourist bundle costs</h2>
<p>Expect <strong>MAD 50–100</strong> for a prepaid SIM including several gigabytes valid for one to four weeks, often with national call credit. Top-ups are available everywhere: operator shops, grocers, kiosks.</p>
<p>Beware bundles advertised as "unlimited": they generally carry a threshold beyond which speeds are heavily reduced. For tourist use — maps, messaging, a few searches — <strong>5 to 10 GB covers one to two weeks comfortably</strong>.</p>

<h2>Buying your SIM at the Marrakech Menara Airport counter</h2>
<ol>
<li><strong>Show your passport</strong>: identity registration is mandatory, without exception.</li>
<li>Choose the bundle and pay, cash preferred.</li>
<li>The agent installs the SIM and checks activation in front of you — <strong>do not leave before you have seen data working</strong>.</li>
<li>Note your new Moroccan number: you will need it for bookings and so your riad or driver can reach you.</li>
</ol>
<p>Your phone must be <strong>carrier-unlocked</strong> to accept a foreign SIM. That is the most common blocker, and it cannot be fixed at the counter.</p>

<h2>Sort out before landing</h2>
<ul>
<li><strong>Make sure your phone is unlocked</strong> by your operator: it is the one thing that cannot be fixed at the counter.</li>
<li><strong>Turn off data roaming</strong> on your home SIM on landing, or keep it only for bank text messages: rates outside the EU remain high.</li>
<li><strong>Keep your WhatsApp number</strong>: it stays tied to your home number even with a Moroccan SIM, as long as you do not change it in the app.</li>
<li><strong>Carry some dirhams</strong> to pay at the counter — see <a href="/en/blog/money-in-morocco/">money and exchange at the airport</a>.</li>
</ul>

<h2>Local SIM or eSIM?</h2>
<p>An <strong>eSIM</strong> is installed before departure, activates on landing and spares you the queue, the paperwork and a change of number. It is the better option for a short stay if your phone supports it — see our <a href="/en/morocco-esim/">Morocco eSIM page</a>.</p>
<p>A <strong>local SIM</strong> keeps two clear advantages: it lets you call Moroccan numbers at local rates, which matters if you need to reach a riad, a hire company or a guide; and it becomes far cheaper on stays beyond two or three weeks.</p>
<div class="callout">
<span class="callout-label">Before leaving the hall</span>
<p>Download the Marrakech map offline while you still have airport wi-fi. The medina lanes match no street sign, and an offline map uses far less data than live navigation.</p>
</div>

<h2>Free Wi-Fi at Marrakech Menara Airport</h2>
<p><strong>Free Wi-Fi</strong> is available in the terminals, slower at peak times. It is enough to message your riad or driver, download an offline map or install a last-minute eSIM. It does not replace mobile data afterwards: once outside the terminal you will need it to follow the taxi ride or find your <a href="/en/book-transfer/">transfer driver</a>. Other facilities (ATMs, lounges, left luggage) are on our <a href="/en/services/">airport services</a> page.</p>
`,
  faqs: [
    { q: "Do I keep WhatsApp with a Moroccan SIM card?", a: "Yes. WhatsApp stays linked to your home number as long as you do not change it in the app: you keep receiving messages while using the Moroccan SIM's data." },
    { q: "Is there free Wi-Fi at Marrakech airport?", a: "Yes, a free Wi-Fi network is open in the terminals. It is slower at peak times but enough to send a message, download an offline map or activate an eSIM." },
    {
      q: 'Which operator should you choose in Morocco?',
      a: "Maroc Telecom for the best coverage outside cities, particularly in the Atlas and towards the south. Orange for good data value in urban and tourist areas. inwi is often cheapest but patchier in the mountains.",
    },
    {
      q: 'How much is a SIM card at Marrakech Airport?',
      a: "MAD 50–100 for a prepaid SIM including several gigabytes valid one to four weeks, with national call credit. Top-ups are sold in every shop and grocer.",
    },
    {
      q: 'Do you need a passport to buy a SIM card in Morocco?',
      a: "Yes, identity registration is mandatory without exception. Your phone must also be carrier-unlocked to accept a foreign SIM.",
    },
    {
      q: 'How much data do you need for a week in Morocco?',
      a: "Five to ten gigabytes covers one to two weeks of tourist use comfortably. Download the Marrakech map offline before you travel, since navigation is what consumes the most.",
    },
  ],
} satisfies LocalizedArticle;
