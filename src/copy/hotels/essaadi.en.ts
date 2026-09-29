import type { LocalizedHotel } from '../types';

export default {
  title: "Es Saadi: review and access from Marrakech Menara Airport",
  description: "Es Saadi: a multi-hectare estate in Hivernage, several accommodation tiers and only ten minutes from Marrakech Menara Airport.",
  eyebrow: 'Marrakech · Hotel',
  h1: 'Es Saadi',
  lede: "A family-run estate in Hivernage, ten minutes from the terminal: the quickest address to reach from the airport, and one of the few with a genuine park in the middle of the city.",
  stars: '★★★★★',
  area: 'Hivernage, the grand hotel district',
  priceRange: 'High, varies by wing',
  rating: 4.5,
  ratingLabel: 'our editorial score',
  verdict: "Several hectares of grounds in the middle of the city, multiple accommodation tiers within one estate, and long-standing family management. The fastest district to reach from the airport: ideal with children, or for a last night before an early flight.",
  body: `
<h2>What it is</h2>
<p>Es Saadi is an estate rather than a building: several hectares of gardens in Hivernage, with accommodation at different levels gathered on the same grounds — a historic hotel, villas and a palace wing. That structure lets you choose your level of comfort without changing address, which is rare in Marrakech.</p>
<p>The property has been run by the same family for decades, and it shows in a continuity of service that feels less standardised than an international chain.</p>

<h2>Getting there from the airport</h2>
<p>This is its most concrete advantage: <strong>Hivernage is the district closest to RAK</strong>, four or five kilometres away, ten to fifteen minutes by road. Direct car access, drop-off at the door, no porter and no lanes. For a late arrival or a 5 am departure, the difference from a medina riad is considerable.</p>

<h2>Who it suits</h2>
<p>Families, thanks to the park, the pools and the space that the medina so badly lacks. Stays combining city and rest, since the Koutoubia and Jemaa el-Fna remain a short taxi ride away. And layover or transit nights, for which proximity to the airport is decisive.</p>
<p>It suits less well anyone after immersion in the medina: Hivernage is a quiet, green hotel district that looks nothing like historic Marrakech.</p>
`,
  pros: [
    'Ten to fifteen minutes from the airport, the best access in this selection',
    'Several hectares of grounds, exceptional in the middle of the city',
    'Multiple accommodation tiers within a single estate',
    'Long-standing family management, far from standardised',
    'Space and pools that suit families',
  ],
  cons: [
    'Hivernage does not deliver the change of scene of the medina',
    'Noticeable differences in standard between wings',
    'You need a taxi for every trip to the souks',
    'The bill climbs quickly with dining and spa',
  ],
  faqs: [
    {
      q: 'How long is the trip from the airport to Es Saadi?',
      a: "Ten to fifteen minutes, for four or five kilometres. Hivernage is the hotel district closest to the terminal, with direct car access and a drop-off at the door.",
    },
    {
      q: 'Does Es Saadi work for families?',
      a: "It is one of its strengths: the park, the pools and the available space are exactly what a medina riad lacks. Several accommodation tiers also let you adjust the budget.",
    },
    {
      q: 'Is Hivernage far from Jemaa el-Fna?',
      a: "A few minutes by taxi, for a fare of around MAD 20–30. The Koutoubia is walkable for good walkers, but most visitors take a taxi, particularly in summer.",
    },
    {
      q: 'Is it a good choice for a last night before an early flight?',
      a: "Yes, that is one of its most sensible uses: ten minutes from the terminal, you avoid crossing the city at dawn and hunting for a taxi in a medina lane.",
    },
  ],
  cta: {
    heading: 'Ten minutes from the terminal',
    text: "A driver who tracks your flight and drops you at the door, fixed price per vehicle.",
    label: 'Book a transfer',
  },
} satisfies LocalizedHotel;
