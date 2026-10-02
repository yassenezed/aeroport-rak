import type { LocalizedPage } from '../types';

export default {
  title: "Hotels near Marrakech Menara Airport: 15 top addresses",
  description: "Hotels near Marrakech Menara Airport: 15 picks from Hivernage to the medina, travel times, price levels and 5 in-depth reviews to choose well.",
  eyebrow: "Hotels · airport and city",
  h1: "Hotels near Marrakech Menara Airport and in the city",
  lede: "The airport is 6 km from the medina, so no hotel in Marrakech is really far. Choosing the right district matters more than distance to the terminal. Here are 15 hand-picked addresses, from palace to riad, grouped by district, with in-depth reviews of five of them.",
  highlights: [
    { icon: 'clock', value: "10–15 min", label: "From the airport to Hivernage, the closest hotel district" },
    { icon: 'building', value: "15 hotels", label: "Hand-picked, from palace to riad" },
    { icon: 'star', value: "5 in-depth reviews", label: "Access, strengths and limits" },
    { icon: 'van', value: "From ≈ MAD 290", label: "Transfer to your hotel (≈ €27)" },
  ],
  cardSections: [
    {
      eyebrow: "10–15 minutes from the terminal",
      heading: "The closest hotels to Marrakech Menara Airport",
      intro: "Hivernage, Avenue de la Ménara and Agdal are the hotel districts closest to the airport: pools, direct car access and the medina minutes away.",
      variant: 'feature',
      items: [
        { icon: 'building', title: "Four Seasons Resort Marrakech", text: "A large resort with gardens, pools and a spa, steps from the Menara gardens.", tags: ["Luxury", "≈ 10 min from the airport"], hotel: 'fourSeasons' },
        { icon: 'building', title: "Savoy Le Grand Hotel", text: "A large family-friendly hotel with a big pool and spa, between Hivernage and Avenue de la Ménara.", tags: ["Upscale", "≈ 10 min from the airport"], hotel: 'savoyGrandHotel' },
        { icon: 'building', title: "Pestana CR7 Marrakech", text: "A lively design hotel in Hivernage, known for its rooftop pool.", tags: ["Mid-range to upscale", "≈ 10–15 min"], hotel: 'pestanaCr7' },
        { icon: 'building', title: "Sofitel Marrakech Lounge & Spa", text: "A contemporary Hivernage palace with pools and spa, a short walk from the medina.", tags: ["Upscale", "≈ 10–15 min"], hotel: 'sofitelLoungeSpa' },
        { icon: 'building', title: "Mövenpick Mansour Eddahbi", text: "A large hotel next to the Palais des Congrès, handy for business and family stays.", tags: ["Upscale", "≈ 10–15 min"], hotel: 'movenpickMansourEddahbi' },
        { icon: 'building', title: "Kenzi Menara Palace", text: "A hotel on Avenue Mohammed VI with pool and gardens, in the Agdal district.", tags: ["Upscale", "≈ 10–15 min"], hotel: 'kenziMenaraPalace' },
      ],
    },
    {
      eyebrow: "Palaces and resorts",
      heading: "Palaces and grand hotels in Marrakech",
      intro: "The exceptional addresses, three of which get our in-depth review.",
      variant: 'feature',
      items: [
        { icon: 'star', title: "La Mamounia", text: "The historic palace with olive gardens, on the edge of the medina and 12–20 minutes from the airport.", tags: ["Luxury", "Our rating 4.8/5"], link: { key: 'mamounia', label: "Read our review" }, hotel: 'mamounia' },
        { icon: 'star', title: "Royal Mansour", text: "Private riads in a walled estate inside the ramparts, fifteen minutes from the airport.", tags: ["Luxury", "Our rating 4.9/5"], link: { key: 'mansour', label: "Read our review" }, hotel: 'royalMansour' },
        { icon: 'star', title: "Es Saadi", text: "A family-run Hivernage estate in a park of several hectares, ten minutes from the terminal.", tags: ["Luxury", "Our rating 4.5/5"], link: { key: 'essaadi', label: "Read our review" }, hotel: 'esSaadi' },
        { icon: 'star', title: "Mandarin Oriental Marrakech", text: "Villas with private pools among olive groves, on the Golf Royal road.", tags: ["Luxury", "≈ 25–30 min"], hotel: 'mandarinOriental' },
        { icon: 'star', title: "Fairmont Royal Palm", text: "A golf resort at the foot of the Atlas, ideal for a quiet stay outside the city.", tags: ["Luxury", "≈ 20–25 min"], hotel: 'fairmontRoyalPalm' },
      ],
    },
    {
      eyebrow: "In town and in the medina",
      heading: "City hotels and charming riads",
      intro: "Gueliz for convenience, the medina for atmosphere.",
      variant: 'feature',
      items: [
        { icon: 'building', title: "Radisson Blu Carré Eden", text: "A modern hotel in the heart of Gueliz, above the Carré Eden shopping centre.", tags: ["Upscale", "≈ 15–20 min"], hotel: 'radissonCarreEden' },
        { icon: 'building', title: "ibis Marrakech Gare Voyageurs", text: "The simple, budget address opposite the ONCF station, ideal for a night before a train.", tags: ["Budget", "≈ 15 min"], hotel: 'ibisGare' },
        { icon: 'door', title: "Riad Yasmine", text: "The most photographed green patio in the medina, in the Dar el Bacha area.", tags: ["Mid-range", "Our rating 4.4/5"], link: { key: 'yasmine', label: "Read our review" }, hotel: 'riadYasmine' },
        { icon: 'door', title: "Riad BE", text: "Patio, pool and terrace at Bab Doukkala: one of the easiest riads to reach with suitcases.", tags: ["Mid-range", "Our rating 4.3/5"], link: { key: 'riadbe', label: "Read our review" }, hotel: 'riadBe' },
      ],
    },
  ],
  body: `
<h2>Which district to choose from Marrakech Menara Airport?</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>District</th><th>Best for</th><th>Car access</th><th>From the airport</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Hivernage, Ménara, Agdal</strong></td><td>Big hotels, calm, pools</td><td>Direct</td><td>10–15 min</td></tr>
<tr><td><strong>Medina</strong></td><td>First visit, atmosphere, riads</td><td>Drop-off at a gate, then on foot</td><td>15–25 min</td></tr>
<tr><td><strong>Gueliz</strong></td><td>Restaurants, station, hire car</td><td>Direct</td><td>15–20 min</td></tr>
<tr><td><strong>Palmeraie, Golf road</strong></td><td>Resorts, rest, families</td><td>Direct</td><td>25–35 min</td></tr>
</tbody>
</table>
</div>
<p>The deciding question: how often a day do you plan to go back and rest? If often, stay in the medina or Hivernage. If you plan Agafay, the Atlas and evenings in town, a Palmeraie resort will cost you an hour of driving a day.</p>

<h2>Riad or hotel: two different experiences</h2>
<p>A <strong>riad</strong> is a traditional house around a patio, with five to ten rooms, in the medina: a personal welcome, breakfast on the terrace, real calm once the door closes. In exchange: no car to the door, steep stairs and uneven heating in winter. A <strong>hotel</strong> in Hivernage, Gueliz or the Palmeraie offers lifts, reliable air conditioning, a pool and car access to the entrance.</p>
<div class="callout">
<span class="callout-label">Before booking in the medina</span>
<p>Ask for the name of the drop-off gate (Bab Doukkala, Bab Laksour, Bab Agnaou…), the walking time, a porter at your arrival time, heating in winter and how the balance is paid: many small riads accept cash only.</p>
</div>

<h2>Arriving late: the habit that avoids a locked door</h2>
<p>If your flight lands after 10 pm, give your accommodation your <strong>flight number</strong>, not just the time: a riad that knows you are two hours late keeps someone at the door. Marrakech hotels rarely offer a free shuttle: plan a <a href="/en/book-transfer/">pre-booked transfer</a> or a taxi at the night fare.</p>
`,
  faqHeading: "Hotels near Marrakech Menara Airport: frequently asked questions",
  faqs: [
    { q: "What is the closest hotel to Marrakech airport?", a: "There is no large hotel inside the airport grounds. The closest are on Avenue de la Ménara and in Hivernage, such as the Four Seasons or the Savoy Le Grand Hotel, about ten minutes by car from the terminal." },
    { q: "Do Marrakech hotels have a free airport shuttle?", a: "Rarely. Most offer a paid transfer on request. A pre-booked transfer from €27 per vehicle or a rank taxi remain the simplest options." },
    { q: "Where should I stay for an early-morning flight?", a: "In Hivernage, Ménara or Agdal, 10–15 minutes from the terminal and reachable by car to the door. Avoid the medina for a dawn departure: you first have to walk to a gate with your luggage." },
    { q: "Is it better to stay in the medina or in Gueliz?", a: "The medina for atmosphere, riads and the souks, accepting a drop-off at a gate. Gueliz for convenience: car access, restaurants and the ONCF station, but less of a sense of place." },
    { q: "Is a riad suitable with children?", a: "It depends: steep stairs, rarely secured terraces and open patios. Many families prefer a hotel with a pool in Hivernage or the Palmeraie." },
    { q: "Can I arrive by car at a riad's door?", a: "Almost never: the lanes are too narrow. You are dropped at the nearest gate and finish on foot, in three to ten minutes. Ask for a porter with a handcart." },
    { q: "Are riads heated in winter?", a: "Unevenly: January nights drop below 8 °C. Check that the room has heating before booking a winter stay." },
    { q: "Do riads require cash payment?", a: "Often for the balance: many small places only accept cards for the online deposit. Bring dirhams and ask when booking." },
  ],
  cta: {
    heading: "From the airport to your hotel's door",
    text: "Give the name of your accommodation: the driver drops you at the hotel, or at the medina gate closest to your riad, at a fixed price per vehicle.",
    label: "Book my transfer",
    secondary: { label: "Hire a car", key: 'carRental' },
  },
} satisfies LocalizedPage;
