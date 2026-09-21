import type { LocalizedHotel } from '../types';

export default {
  title: 'Royal Mansour Marrakech: review and airport access',
  description: 'Royal Mansour: private riads inside a walled estate, service out of the ordinary, and fifteen minutes by car from Marrakech Airport.',
  eyebrow: 'Marrakech · Hotel',
  h1: 'Royal Mansour',
  lede: "Not rooms but private multi-storey riads, gathered inside a walled estate within the ramparts. The most singular property in Marrakech, and probably the most expensive.",
  stars: '★★★★★',
  area: 'Inside the ramparts, near Hivernage',
  priceRange: 'Exceptional',
  rating: 4.9,
  ratingLabel: 'our editorial score',
  verdict: "A complete reconstruction of a medina at hotel scale: every guest occupies their own riad, with courtyard, terrace and plunge pool. Staff move through underground passages to stay invisible. It is a one-off, and the price matches the ambition.",
  body: `
<h2>What it is</h2>
<p>Royal Mansour does not work like a conventional hotel. The estate reproduces a miniature medina: lanes, doors, courtyards, and <strong>individual multi-storey riads</strong> allocated to each booking, with their own courtyard, terrace and often a pool. You do not cross a corridor to get home; you go home.</p>
<p>Its most-discussed feature is how service is organised: staff move through a network of underground galleries and appear only when called. The result is a rare degree of privacy for a property of this size.</p>
<p>The craftsmanship involved — zellige, carved stucco, cedar, tadelakt — drew on hundreds of Moroccan artisans, and it shows in the detail rather than in the overall effect.</p>

<h2>Getting there from the airport</h2>
<p>About six kilometres, fifteen to twenty minutes, arriving by car directly at the estate. No medina constraint: the property sits inside the ramparts but has its own road access. Transfers are handled by the hotel on request, and at this level of service that is the simplest route.</p>

<h2>Who it suits</h2>
<p>Those seeking absolute privacy rather than the life of a grand hotel, exceptional trips, and families taking a whole riad. The layout in individual houses suits a group that wants to be together without sharing a hotel landing.</p>
<p>It suits less well anyone looking for buzz, encounters or lobby atmosphere: here, everything is designed so that you cross paths with no one.</p>
`,
  pros: [
    'Whole private riads rather than rooms, with courtyard and terrace',
    'Unmatched privacy, served by an invisible staff circulation system',
    'Moroccan craftsmanship of a very high order, in the detail',
    'Direct road access, with no medina constraint whatsoever',
    'Dining and spa facilities on a par with the rest',
  ],
  cons: [
    'Rates that put the property beyond most trips',
    'A deliberately hushed atmosphere, with no collective life',
    'The estate invites you never to leave it, at the risk of seeing little of the city',
    'High-season booking requires considerable forward planning',
  ],
  faqs: [
    {
      q: 'Is Royal Mansour far from Marrakech Airport?',
      a: "About six kilometres, or fifteen to twenty minutes by road. Access is entirely by car, directly to the estate, with no medina constraint despite the hotel sitting inside the ramparts.",
    },
    {
      q: 'What is a private riad at Royal Mansour?',
      a: "An individual multi-storey house allocated to your booking, with its own courtyard, terrace and usually a pool. You do not occupy a room in a shared building: you occupy a whole house within the estate.",
    },
    {
      q: 'Is the underground service a myth?',
      a: "No, it is a design reality: a network of galleries lets staff move without appearing in the estate's lanes. That is what accounts for the property's level of privacy.",
    },
    {
      q: 'Does the hotel arrange airport transfers?',
      a: "Yes, on request, and at this level of service that is the simplest option. A separately booked private transfer also works: the drive is short and access is direct.",
    },
  ],
  cta: {
    heading: 'A ride to match the arrival',
    text: "A private vehicle from the terminal, flight tracking and a fixed price, fifteen minutes to the estate.",
    label: 'Book a transfer',
  },
} satisfies LocalizedHotel;
