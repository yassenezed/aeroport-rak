import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: "Privacy policy — Marrakech Menara Airport guide",
  description: "How AeroportRAK, the Marrakech Menara Airport guide, handles your data: analytics, affiliate links, cookies, third-party widgets and GDPR.",
  eyebrow: 'AeroportRAK',
  h1: 'Privacy policy',
  lede: "What this site collects, why, for how long, and what you can require. In short: no accounts, no tracking forms, and third-party tools limited strictly to analytics and booking.",
  body: `
<h2>Who handles your data</h2>
<p>The data controller is the publisher of AeroportRAK, reachable at <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>. The site offers no account creation, no personal area and no newsletter.</p>

<h2>What we collect</h2>
<ul>
<li><strong>Analytics</strong>: pages viewed, referrer, device type, country. This helps us understand which content is useful and improve it. It does not identify you personally.</li>
<li><strong>Technical logs</strong> from the host, kept for security and for the proper operation of the site.</li>
<li><strong>Messages you send us</strong>: only if you write to us, and only for as long as it takes to handle your request.</li>
</ul>
<p>We sell no data and pass nothing to data brokers.</p>

<h2>Cookies and third-party services</h2>
<p>Some pages embed tools provided by third parties, which set their own cookies and have their own policies:</p>
<ul>
<li><strong>Booking widgets</strong> (flights, transfers): they use affiliate tracking cookies to attribute any booking to our site.</li>
<li><strong>Flight boards</strong>: supplied by an air-information provider and displayed in an isolated frame.</li>
<li><strong>Analytics</strong>: aggregated traffic statistics.</li>
<li><strong>Weather</strong>: the temperature on the home page comes from Open-Meteo, with no cookie; only your IP address is transmitted, as with any page load.</li>
</ul>
<p>You can block or delete these cookies from your browser settings. The site remains fully readable without them; only the booking widgets may stop working correctly.</p>

<h2>Consent, analytics and advertising</h2>
<p>On your first visit from the European Union, the European Economic Area, the United Kingdom or Switzerland, a banner asks for your consent. Until you accept, no analytics or advertising cookie is set and the affiliate script is not loaded. You can change your mind at any time via the <strong>"Manage cookies"</strong> link at the bottom of every page.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google Ireland Ltd): visitor statistics, IP addresses not stored. Google's consent mode only sends anonymous, cookieless signals until you accept.</li>
<li><strong>Affiliate partners</strong>: Travelpayouts and its partners (Kiwitaxi for transfers, EconomyBookings for car hire, flight search tools), and Booking.com for hotels. They may set a cookie to attribute a booking to our site.</li>
<li><strong>Advertising (Google AdSense)</strong>: the site may display ads. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visits. You can opt out of personalised advertising in <a href="https://adssettings.google.com" rel="noopener" target="_blank">Google Ads Settings</a> or at <a href="https://www.aboutads.info/choices/" rel="noopener" target="_blank">aboutads.info</a>. More: <a href="https://policies.google.com/technologies/partner-sites" rel="noopener" target="_blank">how Google uses data from partner sites</a>.</li>
</ul>

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
