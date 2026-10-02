import type { LocalizedPage } from '../types';

export default {
  title: "Automatic car hire at Marrakech Menara Airport from MAD 490",
  description: "Automatic car hire at Marrakech Menara Airport from MAD 490 a day: availability, extra cost, models and tips for driving in Morocco for the first time.",
  eyebrow: "Easy driving · automatic gearbox",
  h1: "Automatic car hire at Marrakech Menara Airport",
  lede: "In Morocco, manual is still the norm and automatics must be booked. If you have never driven here, that choice changes a lot, starting with your first hour in Marrakech traffic.",
  highlights: [
    { icon: 'wallet', value: "From MAD 490", label: "Per day, automatic compact" },
    { icon: 'check', value: "No clutch", label: "Two pedals, right foot only" },
    { icon: 'dollar-circle', value: "+15 to 30%", label: "Extra cost compared with manual" },
    { icon: 'passport', value: "Standard licence", label: "No special licence needed" },
  ],
  widget: 'car-rental',
  widgetIntro: {
    heading: "Book an automatic car at Marrakech Menara Airport",
    text: "Type \"Marrakech\" and choose \"Marrakech Airport\", then your dates: filter the results on automatic transmission.",
  },
  cardSections: [
    {
      eyebrow: "Benefits",
      heading: "Why choose an automatic in Marrakech",
      intro: "In dense and unpredictable traffic, an automatic is not a luxury.",
      variant: 'feature',
      items: [
        { icon: 'check', title: "Effortless driving", text: "No clutch, no gears: you keep all your attention for the road." },
        { icon: 'users', title: "Suited to the traffic", text: "Scooters filtering, carts, pedestrians, the Gueliz roundabouts: no stalling, far less stress." },
        { icon: 'map', title: "Comfort on mountain and open roads", text: "Climbs to Imlil and the long straights to Essaouira without fatigue." },
        { icon: 'star', title: "Reassuring on a first trip", text: "First time in Morocco or not used to driving? An automatic makes everything simpler." },
      ],
    },
    {
      eyebrow: "The range",
      heading: "Automatic cars available in Marrakech",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Automatic compacts", text: "Renault Clio, Volkswagen Polo, Hyundai i20: easy to park, ideal for town, Essaouira and Ourika.", tags: ["MAD 490–650/day"] },
        { icon: 'map', title: "Automatic SUVs", text: "Dacia Duster, Kia Sportage: ground clearance and comfort for the Atlas and the Agafay tracks.", tags: ["MAD 750–1,100/day"] },
        { icon: 'star', title: "Automatic saloons", text: "Comfort and space for long distances and business travel.", tags: ["MAD 950–1,500/day"] },
      ],
    },
    {
      eyebrow: "Tips",
      heading: "First drive in an automatic: 4 tips",
      variant: 'compact',
      items: [
        { icon: 'info', title: "Right foot only", text: "Accelerate and brake with the same foot; never rest your left on the brake." },
        { icon: 'lock', title: "Brake before shifting", text: "Keep the brake pressed to move from P to D or R." },
        { icon: 'map', title: "Manage the descents", text: "On the Tichka, use manual mode or L to hold the car rather than the brakes." },
        { icon: 'clock', title: "Book early", text: "Automatic stock is limited: 2 to 3 weeks ahead, especially in high season." },
      ],
    },
    {
      eyebrow: "Compare",
      heading: "Automatic, economy, premium or minivan?",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Economy", text: "Manual small cars at the best price, for confident drivers.", tags: ["From MAD 270/day"], link: { key: 'carBudget', label: "See economy cars" } },
        { icon: 'star', title: "Premium", text: "Premium saloons and SUVs, automatic as standard.", tags: ["From MAD 1,200/day"], link: { key: 'carLuxury', label: "See premium cars" } },
        { icon: 'users', title: "7 to 9-seat minivan", text: "For groups; few automatics, book very early.", tags: ["From MAD 600/day"], link: { key: 'carMinivan', label: "See minivans" } },
      ],
    },
  ],
  body: `
<h2>Automatics in Morocco: a minority, so book ahead</h2>
<p>The Moroccan fleet is mostly manual. Automatics exist at Marrakech airport, but mainly from the compact category up. Two consequences: an <strong>extra 15 to 30%</strong> compared with the same model in manual, and availability that dries up as the season fills. If an automatic is a must (automatic-only licence, injury), say so when booking and get the <strong>transmission confirmed in writing</strong>: "or similar" never guarantees the gearbox type.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Automatic category</th><th>Price / day</th><th>Best for</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Compact (Clio, Polo, i20)</strong></td><td class="num">≈ MAD 490–650 (€45–60)</td><td>Town, Essaouira, Ourika</td></tr>
<tr><td><strong>Compact SUV (Duster, Sportage)</strong></td><td class="num">≈ MAD 750–1,100 (€70–100)</td><td>Atlas, Agafay tracks</td></tr>
<tr><td><strong>Saloon</strong></td><td class="num">≈ MAD 950–1,500 (€90–140)</td><td>Long distances, business</td></tr>
</tbody>
</table>
</div>
<p class="small">Indicative prices in dirhams, converted at an approximate rate of €1 ≈ MAD 10.8. The comparison tool shows the exact price of each offer.</p>

<h2>Your first hour behind the wheel from Marrakech Menara Airport</h2>
<p>Leave the airport towards Gueliz rather than the medina, and take thirty minutes to settle into the local rhythm before heading to your accommodation. Avoid your first drive between 5 and 7 pm, and at night: outside town, some vehicles drive without lights.</p>
<h3>The P-R-N-D quick guide</h3>
<ul>
<li><strong>P</strong> (park): for starting and switching off the engine.</li>
<li><strong>R</strong> (reverse): always with the brake pressed before selecting it.</li>
<li><strong>N</strong> (neutral): rarely needed.</li>
<li><strong>D</strong> (drive): the normal position for driving.</li>
</ul>

<h2>What an automatic does not solve</h2>
<p><strong>Parking in town</strong>, handled by attendants in vests (MAD 5 to 10, MAD 20 overnight, paid on return); <strong>access to the medina</strong>, impossible by car; <strong>speed cameras</strong>, fixed and mobile; and <strong>the Tichka pass</strong>, where a small automatic runs hot on a long climb. If you would rather not drive at all, a <a href="/en/book-transfer/">transfer</a> on arrival, taxis in town and a driver for excursions cover the whole stay, with no deposit or vehicle check.</p>
`,
  faqHeading: "Automatic car hire at Marrakech Menara Airport: frequently asked questions",
  faqs: [
    { q: "How much is an automatic hire car at Marrakech airport?", a: "≈ MAD 490 to 650 (€45 to €60) a day for a compact, ≈ MAD 750 to 1,100 (€70 to €100) for an SUV and ≈ MAD 950 to 1,500 (€90 to €140) for a saloon. Expect 15 to 30% more than the same model with a manual gearbox." },
    { q: "Are automatics easy to find in Marrakech?", a: "They exist but remain a minority, mostly from the compact category up. Book 2 to 3 weeks ahead and get the transmission confirmed in writing." },
    { q: "Do I need a special licence for an automatic?", a: "No, a standard licence is enough. If your licence is restricted to automatics, say so: the company must then guarantee an automatic." },
    { q: "Does an automatic use more fuel?", a: "A little on older models, hardly at all on recent ones. The difference matters far less than the extra hire cost." },
    { q: "It is my first time driving an automatic. Is it hard?", a: "No: right foot only, brake pressed to move from P to D or R, and a few minutes in the car park are enough to get your bearings." },
    { q: "Can I do a Moroccan road trip in an automatic?", a: "Yes. For the Atlas, prefer an SUV or a recent compact, and use manual mode or L on the long Tichka descents." },
    { q: "Is the insurance different for an automatic?", a: "No, the same rules apply: basic excess, optional excess waiver and a deposit on a credit card in the driver's name." },
    { q: "What if I do not want to drive at all?", a: "A transfer on arrival and departure, taxis in town at MAD 15 to 50 a ride and a driver for excursions cover the whole stay, often for a total close to a rental." },
  ],
  cta: {
    heading: "Ready to drive stress-free in Marrakech?",
    text: "Compare automatic cars from the airport rental companies and book in a few clicks.",
    label: "Compare prices",
    href: "#reserver",
    secondary: { label: "See all categories", key: 'carRental' },
  },
} satisfies LocalizedPage;
