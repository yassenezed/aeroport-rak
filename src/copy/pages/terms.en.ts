import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: 'Terms of use — AirportRAK',
  description: 'AirportRAK terms of use: the editorial nature of the site, limits of liability, intellectual property and links to third parties.',
  eyebrow: 'AirportRAK',
  h1: 'Terms of use',
  lede: "What you can expect from this site, and what you cannot. By using AirportRAK, you accept the terms below.",
  body: `
<h2>Nature of the site</h2>
<p>AirportRAK is an independent editorial publication about Marrakech Menara Airport. The site is <strong>not operated, mandated or endorsed</strong> by the Office National Des Aéroports, by Marrakech Menara Airport, or by any airline. It sells no transport service and is not a travel agency.</p>

<h2>Accuracy of information</h2>
<p>We check what we publish and state the date of fare surveys. Prices, timetables, frequencies and procedures nevertheless change without notice: <strong>always confirm with the operator concerned</strong> before making a binding decision, particularly regarding flight times, entry formalities or a booking.</p>
<p>The orders of magnitude we give — waiting times, journey durations, price ranges — are estimates drawn from usual conditions. They constitute neither a guarantee nor an undertaking.</p>

<h2>Limitation of liability</h2>
<p>Information on this site is provided for guidance. We cannot be held liable for a missed flight, a lost connection, a dispute with a provider, denied boarding, or any loss arising from use of the information published. The decision, and its verification, remain yours.</p>
<p>Nothing on this site constitutes legal advice. Passages on passenger rights or entry formalities are general information and do not replace professional advice on your specific situation.</p>

<h2>Links to third-party sites</h2>
<p>The site links to booking platforms, carriers and official sources. We exercise no control over their content, prices, terms or availability, and disclaim all liability in respect of them. Any booking made with a third party is governed solely by the contract concluded with that third party.</p>

<h2>Intellectual property</h2>
<p>The texts, editorial structure, visual identity and graphic elements of this site are protected. Any substantial reproduction or reuse without prior written permission is prohibited. Short quotation remains possible provided the source is stated and a link to the original page is included.</p>
<p>Trade marks, trade names and logos mentioned belong to their respective owners and are cited for information only.</p>

<h2>Acceptable use</h2>
<p>Mass automated extraction of content, reproduction of the site or its structure, and any attempt to disrupt its operation are prohibited.</p>

<h2>Governing law and contact</h2>
<p>These terms are governed by French law. For any question about them: <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>.</p>
`,
} satisfies LocalizedPage;
