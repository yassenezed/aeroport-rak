import type { LocalizedHotel } from '../types';

export default {
  title: 'La Mamounia Marrakech: review and airport access',
  description: "La Mamounia: a century of history, vast gardens at the edge of the medina, fifteen minutes by car from Marrakech Airport.",
  eyebrow: 'Marrakech · Hotel',
  h1: 'La Mamounia',
  lede: "Marrakech's historic grand hotel, five kilometres from the terminal, on the hinge between the ramparts and the modern town: the medina on foot, car access without constraint.",
  stars: '★★★★★',
  area: 'By the ramparts, near Bab Jdid',
  priceRange: 'Very high, strongly seasonal',
  rating: 4.8,
  ratingLabel: 'our editorial score',
  verdict: "The address where the hotel is the destination: a century of history, olive gardens in the middle of the city and the medina within walking distance. It is also one of the few properties at this level where arriving from the airport raises no logistical question at all.",
  body: `
<h2>What it is</h2>
<p>Opened in 1923 on an olive grove once given by a sultan to his son, La Mamounia is the historic grand hotel of Marrakech, the one whose name travels far beyond Morocco. Churchill painted here, and the property has come through a century of successive restorations without losing what makes it singular: a vast walled garden, a step away from the ramparts.</p>
<p>The experience rests on that garden first. In a dense, mineral medina city, having several hectares of olive trees, walkways and pools changes the rhythm of a stay entirely. The rest — dining, spa, service — follows suit, but it is the estate itself that justifies the address.</p>

<h2>Getting there from the airport</h2>
<p>Five kilometres, twelve to twenty minutes depending on traffic, and a drop-off at the door. This is one of the rare prestigious properties in Marrakech where logistics simply do not arise: no medina gate to negotiate, no porter to arrange, no lane to walk with suitcases.</p>
<p>The hotel usually arranges transfers on request. Failing that, a taxi at the posted fare of MAD 100–150 by day, or a <a href="/en/book-transfer/">booked transfer</a>, does the job perfectly: the drive is short and direct.</p>

<h2>Who it suits</h2>
<p>Those who come for the hotel as much as for the city, and who want to be able to come back and rest between outings without it becoming an expedition. Travellers who want the atmosphere of the medina without its access constraints. And short stays, where being immediately by the Koutoubia and Jemaa el-Fna saves real time.</p>
<p>It suits less well anyone seeking the intimacy of a small guesthouse: La Mamounia is a large, busy property, and that shows at peak hours around the pool and the restaurants.</p>
`,
  pros: [
    'Historic gardens that carry the whole experience, rare in a city centre',
    'A hinge location: the medina on foot, car access without constraint',
    'A substantial dining offer, Moroccan and international',
    'A spa and quiet spaces on the scale of the estate',
    'Drop-off directly at the door from the airport, no porter, no lanes',
  ],
  cons: [
    'Among the highest rates in Morocco, with pronounced seasonality',
    'The scale of a grand hotel, far from the intimacy of a riad',
    'Noticeably busy public areas at peak hours',
    'Extras — spa, dining, drinks — build the bill quickly',
  ],
  faqs: [
    {
      q: 'How far is La Mamounia from Marrakech Airport?',
      a: "About 5 km, or 12 to 20 minutes by road depending on traffic. It is one of the grand hotels closest to the terminal, and access is entirely by car with a drop-off at the door.",
    },
    {
      q: 'Is La Mamounia in the medina or the new town?',
      a: "On the hinge between the two: the hotel borders the ramparts, minutes on foot from the Koutoubia and Jemaa el-Fna, while remaining reachable by car. That dual status explains much of its appeal.",
    },
    {
      q: 'Do you have to be a guest to enjoy the gardens?',
      a: "The historic gardens are part of the hotel experience. A drink at the bar or a meal allows you to enjoy them without staying, subject to reservation and the property's rules at the time of your visit.",
    },
    {
      q: 'What transfer should you arrange from the airport?',
      a: "The hotel generally arranges transfers on request. Otherwise a booked private transfer or a taxi at the posted fare is more than enough: the drive is short, direct, and the drop-off is at the door.",
    },
  ],
  cta: {
    heading: 'Arrive straight at the door',
    text: "Fifteen minutes from the terminal, fixed price per vehicle, a driver tracking your flight.",
    label: 'Book a transfer',
  },
} satisfies LocalizedHotel;
