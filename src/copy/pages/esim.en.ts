import type { LocalizedPage } from '../types';

export default {
  title: 'Morocco eSIM: online the moment you land',
  description: 'eSIM for Morocco: how to be connected the moment you step off the plane in Marrakech, compared with a local SIM card and with EU roaming.',
  eyebrow: 'Marrakech Menara · Connectivity',
  h1: 'Morocco eSIM: connected the moment you land',
  lede: "Morocco is outside the EU roaming zone: your usual plan becomes either very expensive or unusable there. Here are the three ways to settle it, and the one that saves you twenty minutes on arrival.",
  body: `
<h2>Why this needs sorting before you fly</h2>
<p>Outside the European Union, roaming is charged at full price: several pounds per megabyte with some operators, and three-figure bills on return. Most travellers therefore turn data off — and find themselves outside the terminal with no way to call a riad, warn a driver or open a map.</p>
<p>That is precisely the moment you need it most: to confirm a medina gate, find a transfer, or simply check you are walking the right way through lanes where no street sign matches the map.</p>

<h2>The three options, compared</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Indicative price</th><th>Available</th><th>Limits</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Prepaid eSIM</strong></td><td class="num">£4–13 / week</td><td>The moment you land</td><td>Compatible, unlocked phone required</td></tr>
<tr><td><strong>Local SIM</strong></td><td class="num">≈ MAD 50–100</td><td>Arrivals hall counter</td><td>Queue, passport, new number</td></tr>
<tr><td><strong>Roaming on your plan</strong></td><td class="num">Highly variable</td><td>Immediate</td><td>Often prohibitive outside world bundles</td></tr>
</tbody>
</table>
</div>

<h2>How an eSIM actually works</h2>
<p>An eSIM is a SIM card without the plastic: you buy it online, scan a QR code, and the plan activates on landing with no chip to swap. Your usual number stays live for calls and texts, since the eSIM carries data only.</p>
<p>Three things to check before buying: your phone must <strong>support eSIM</strong> (every iPhone since the XS, most recent Androids); it must be <strong>carrier-unlocked</strong>; and installation happens <strong>while you still have wi-fi</strong>, so before departure or from the airport network.</p>
<div class="callout">
<span class="callout-label">The right amount of data</span>
<p>For a week in Marrakech, 3 to 5 GB is plenty: offline maps downloaded in advance, messaging, a few searches. No need to pay for 20 GB unless you plan to work on a hotspot.</p>
</div>

<h2>When a local SIM is still better</h2>
<p>If you need to <strong>call Moroccan numbers</strong> — a riad, a hire company, a guide — a local SIM with voice is more practical and cheaper than an international call. The same goes for longer stays, from two or three weeks, where Maroc Telecom, Orange or inwi bundles become very competitive. The counters are in the arrivals hall: bring your passport and allow ten minutes.</p>
<p>Our detailed article on <a href="/en/blog/morocco-sim-cards/">SIM cards in Morocco</a> compares the three operators' bundles and their coverage, including in the Atlas.</p>
`,
  faqs: [
    {
      q: 'Does an eSIM work the moment you land in Marrakech?',
      a: "Yes, provided you installed it before departure, on wi-fi. The plan activates automatically as soon as your phone picks up a Moroccan network, so you are reachable before you even clear border police.",
    },
    {
      q: 'Is my phone eSIM compatible?',
      a: "Every iPhone since the XS, Google Pixel since the 3, and most recent Samsung Galaxy S and Z models are. The phone must also be carrier-unlocked. Check in your network settings: an option to add an eSIM plan confirms compatibility.",
    },
    {
      q: 'How much data do you need for a week in Marrakech?',
      a: "Three to five gigabytes covers tourist use: maps, messaging and searches. Download the Marrakech map offline before you travel, since that is what consumes the most.",
    },
    {
      q: 'eSIM or local SIM card?',
      a: "An eSIM for a short stay needing data only: no queue, no paperwork, instant connection. A local SIM if you must call Moroccan numbers or stay more than two or three weeks, since local bundles become far better value.",
    },
    {
      q: 'Does EU roaming work in Morocco?',
      a: "No, Morocco is not part of the European roaming zone. Data is billed at international rates, often very high, unless your plan explicitly includes a world option covering Morocco.",
    },
  ],
} satisfies LocalizedPage;
