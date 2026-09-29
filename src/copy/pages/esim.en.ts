import type { LocalizedPage } from '../types';

export default {
  title: "Morocco eSIM: online from Marrakech Menara Airport",
  description: "Morocco eSIM for Marrakech Menara Airport: plans from $6, QR code setup, compatible phones and how it compares with a local SIM card and roaming.",
  eyebrow: "Internet in Morocco · from landing",
  h1: "Morocco eSIM: online from Marrakech Menara Airport",
  lede: "No queue at the desk, no sky-high roaming: activate an eSIM before you leave and you are online as soon as the plane touches down at Marrakech Menara Airport, ready to message your driver or find your riad.",
  widget: 'esim',
  highlights: [
    { icon: 'sim', value: "From $6", label: "Morocco data plan" },
    { icon: 'clock', value: "2 minutes", label: "QR code setup" },
    { icon: 'plane-landing', value: "On landing", label: "Online at RAK" },
  ],
  cardSections: [
    {
      eyebrow: "Benefits",
      heading: "Why an eSIM for arriving at Marrakech Menara Airport",
      intro: "The simplest way to get internet in Morocco, without changing phone or number.",
      variant: 'feature',
      items: [
        { icon: 'plane-landing', title: "Online as you step off the plane", text: "The plan activates as soon as your phone finds a Moroccan network, even before passport control. Ideal for messaging a driver or riad." },
        { icon: 'wallet', title: "No roaming charges", text: "Morocco is outside EU and UK roaming deals: data is very expensive on your usual plan. An eSIM has a fixed price, paid upfront." },
        { icon: 'users', title: "Keep your number", text: "Your usual SIM stays active for calls and texts. The eSIM only carries data, so WhatsApp keeps your number." },
        { icon: 'sparkles', title: "100% online", text: "No card to insert, no passport to show, no queue at the arrivals hall desk: everything happens on your phone." },
      ],
    },
  ],
  steps: {
    heading: "Set up your Morocco eSIM in 3 steps",
    intro: "Install it at home, on wifi, the day before you fly: on arrival, you just switch it on.",
    items: [
      { icon: 'clipboard', title: "Choose a plan", text: "Pick the data and validity that suit your stay in the tool above. For a week, 3 GB is usually enough." },
      { icon: 'sim', title: "Scan the QR code", text: "You receive a QR code by email. Scan it from your phone's settings, on wifi, before you leave: installation takes two minutes." },
      { icon: 'plane-landing', title: "Activate on landing", text: "In Marrakech, switch on the eSIM line and data roaming on that line only. You are online before you reach the baggage belt." },
    ],
  },
  body: `
<h2>eSIM, local SIM or roaming: which to choose in Morocco?</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Typical price</th><th>Available</th><th>Limits</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Prepaid eSIM</strong></td><td class="num">≈ $6 to $20 depending on data</td><td>From landing</td><td>Compatible, unlocked phone</td></tr>
<tr><td><strong>Local SIM</strong></td><td class="num">≈ MAD 50 to 100</td><td>Desk in the arrivals hall</td><td>Queue, passport, new number</td></tr>
<tr><td><strong>Roaming on your plan</strong></td><td class="num">Highly variable</td><td>Immediate</td><td>Often very expensive without a worldwide add-on</td></tr>
</tbody>
</table>
</div>
<p>As an example, Airalo's Morocco plans checked in September 2026 start at around $6.50 for 1 GB over 7 days and $18 for 3 GB over 30 days. Current prices are shown in the tool above.</p>

<h2>eSIM-compatible phones</h2>
<p>Most recent smartphones support eSIM, as long as they are <strong>carrier-unlocked</strong>:</p>
<ul>
<li><strong>Apple</strong>: iPhone XR, XS and all later models.</li>
<li><strong>Samsung</strong>: Galaxy S20 and later, plus the Galaxy Z Flip and Z Fold.</li>
<li><strong>Google</strong>: Pixel 3 and later.</li>
<li><strong>Other brands</strong>: some recent Huawei, Xiaomi, Oppo and Motorola models.</li>
</ul>
<p>To check, open your phone's network settings: if "Add cellular plan" or "Add eSIM" appears, it is compatible.</p>

<h2>Coverage in and around Marrakech</h2>
<p>Morocco eSIMs run on the 4G networks of the local operators, Maroc Telecom, Orange and inwi. Coverage is very good in Marrakech, at the airport, in the medina and Gueliz, and on the roads to Essaouira and Agadir. It becomes patchy in the High Atlas valleys and the Agafay desert: download offline maps before an excursion.</p>

<h2>How much data do you need?</h2>
<p>For a week in Marrakech, <strong>3 to 5 GB</strong> is plenty: messaging, maps, a few searches and photos sent. Download the Marrakech map offline before you leave, as it is the biggest data user. Aim for 10 GB or more only if you tether a laptop or stream video.</p>
<div class="callout">
<span class="callout-label">When a local SIM is still better</span>
<p>If you need to call Moroccan numbers (riad, car hire, guide) or stay longer than two or three weeks, a local SIM with calls becomes better value. The Maroc Telecom, Orange and inwi desks are in the arrivals hall: see our comparison of <a href="/en/blog/morocco-sim-cards/">SIM cards in Morocco</a> and the <a href="/en/services/">airport services</a>.</p>
</div>
`,
  faqHeading: "Morocco eSIM and Marrakech airport: frequently asked questions",
  faqs: [
    { q: "What is an eSIM and how does it work in Morocco?", a: "An eSIM is a virtual SIM card built into your phone. You buy a plan online, receive a QR code by email, install it on wifi before you leave, and the connection activates as soon as you land at Marrakech Menara Airport." },
    { q: "Does an eSIM work as soon as I land in Marrakech?", a: "Yes, if it was installed before departure. The plan activates as soon as your phone picks up a Moroccan network, so you are reachable even before passport control." },
    { q: "Is my phone eSIM compatible?", a: "iPhone XR, XS and later, Samsung Galaxy S20 and later, and Google Pixel 3 and later are, as are some recent Huawei, Xiaomi and Oppo models. The phone must also be carrier-unlocked." },
    { q: "Can I keep my WhatsApp number with a Morocco eSIM?", a: "Yes. The eSIM only provides data: your usual SIM keeps your number for calls and texts, and WhatsApp keeps working with your number." },
    { q: "How much does an eSIM for Morocco cost?", a: "Allow about $6.50 for 1 GB over 7 days and $18 for 3 GB over 30 days with Airalo (September 2026 prices). That is far cheaper than international roaming with most UK and European operators." },
    { q: "How much data do I need for a week in Marrakech?", a: "Three to five gigabytes is enough for tourist use: messaging, maps and searches. Download the Marrakech map offline before you leave to save data." },
    { q: "Does the network work in the Atlas and Agafay?", a: "4G coverage is very good in Marrakech and on the main roads, but patchy in the High Atlas valleys and the Agafay desert. Download offline maps before an excursion." },
    { q: "eSIM or local SIM card: which should I choose?", a: "An eSIM for a short stay when you only need data: no queue, no paperwork, instant connection. A local SIM if you need to call Moroccan numbers or stay more than two or three weeks." },
  ],
  cta: {
    heading: "Online on landing, met at the exit",
    text: "With your eSIM, message your driver as you step off the plane: they track your flight, wait with a sign and drop you at the right medina gate.",
    label: "Book a transfer",
  },
} satisfies LocalizedPage;
