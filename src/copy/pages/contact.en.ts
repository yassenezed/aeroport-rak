import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: "Contact — AeroportRAK, Marrakech Menara Airport guide",
  description: "Contact AeroportRAK: correct information about Marrakech Menara Airport, report an out-of-date fare, or make a professional enquiry.",
  eyebrow: 'AeroportRAK',
  h1: 'Contact us',
  lede: "Out-of-date information, a fare that no longer matches, a detail to add: write to us. We read every message and correct the pages concerned.",
  body: `
<h2>Writing to the editors</h2>
<p>Email: <a href="mailto:${site.contactEmail}">${site.contactEmail}</a></p>
<p>To report an error, please include <strong>the address of the page concerned</strong>, the passage in question and what you observed on site, with the date. A photo of a fare board or a timetable is worth more than a long explanation: it lets us correct quickly and with certainty.</p>

<h2>What we cannot do</h2>
<p>AeroportRAK is an independent editorial guide, not an airport service or a travel agency. We therefore cannot:</p>
<ul>
<li>change, cancel or retrieve a flight, hotel or transfer booking;</li>
<li>tell you the status of a lost bag — that is handled by your airline's desk;</li>
<li>intervene with a hire company, hotel or driver;</li>
<li>confirm a live flight time beyond what our <a href="/en/arrivals/">arrivals</a> and <a href="/en/departures/">departures</a> boards show.</li>
</ul>
<p>For those matters, contact the operator directly: only their customer service holds the details of your booking.</p>

<h2>Professional enquiries</h2>
<p>Hoteliers, hire companies, transfer operators, tourist boards: we do not sell editorial placement, and no business can buy its presence or its position on this site. We do, however, welcome factual corrections about you — opening hours, prices, capacity, services — with a verifiable source.</p>

<h2>Response time</h2>
<p>We usually reply within a few working days. Reports of factual errors are handled first, because they directly affect readers planning a trip.</p>
`,
} satisfies LocalizedPage;
