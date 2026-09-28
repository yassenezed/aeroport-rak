import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: 'Privacy policy — AirportRAK',
  description: 'How AirportRAK handles visitor data: analytics, affiliate links, cookies, third-party widgets and your GDPR rights.',
  eyebrow: 'AirportRAK',
  h1: 'Privacy policy',
  lede: "What this site collects, why, for how long, and what you can require. In short: no accounts, no tracking forms, and third-party tools limited strictly to analytics and booking.",
  body: `
<h2>Who handles your data</h2>
<p>The data controller is the publisher of AirportRAK, reachable at <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>. The site offers no account creation, no personal area and no newsletter.</p>

<h2>What we collect</h2>
<ul>
<li><strong>Analytics</strong>: pages viewed, referrer, device type, country. This helps us understand which content is useful and improve it. It does not identify you personally.</li>
<li><strong>Technical logs</strong> from the host, kept for security and for the proper operation of the site.</li>
<li><strong>Messages you send us</strong>: only if you write to us, and only for as long as it takes to handle your request.</li>
</ul>
<p>We sell no data, build no advertising profiles and pass nothing to data brokers.</p>

<h2>Cookies and third-party services</h2>
<p>Some pages embed tools provided by third parties, which set their own cookies and have their own policies:</p>
<ul>
<li><strong>Booking widgets</strong> (flights, transfers): they use affiliate tracking cookies to attribute any booking to our site.</li>
<li><strong>Flight boards</strong>: supplied by an air-information provider and displayed in an isolated frame.</li>
<li><strong>Analytics</strong>: aggregated traffic statistics.</li>
<li><strong>Weather</strong>: the temperature on the home page comes from Open-Meteo, with no cookie; only your IP address is transmitted, as with any page load.</li>
</ul>
<p>You can block or delete these cookies from your browser settings. The site remains fully readable without them; only the booking widgets may stop working correctly.</p>

<h2>Affiliate links</h2>
<p>When you follow a booking link from this site, the partner concerned may record your referrer so that a commission can be attributed to us if you book. This mechanism <strong>never increases the price you pay</strong>. It is set out on our <a href="/en/affiliate-disclosure/">affiliate disclosure</a> page.</p>

<h2>Retention</h2>
<p>Analytics are kept in aggregated form. The host's technical logs follow the retention period it defines. Emails we receive are deleted once the request has been handled, except where they document a correction made to the site.</p>

<h2>Your rights</h2>
<p>Under the GDPR you have rights of access, rectification, erasure, restriction and objection regarding data about you. Write to <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>: we respond within one month. You may also lodge a complaint with the competent supervisory authority — the ICO for UK residents, the CNIL for residents of France.</p>

<h2>Changes</h2>
<p>This policy may be adjusted, particularly if we add or remove a third-party tool. Any substantial change will be noted on this page.</p>
`,
} satisfies LocalizedPage;
