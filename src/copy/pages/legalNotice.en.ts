import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: "Legal notice — AeroportRAK, Marrakech Menara Airport guide",
  description: "Legal notice of AeroportRAK, the independent Marrakech Menara Airport guide: publisher, hosting provider, intellectual property and liability.",
  eyebrow: 'AeroportRAK',
  h1: 'Legal notice',
  lede: "Who publishes this site, who hosts it, and within what limits the published information may be used.",
  body: `
<h2>Publisher</h2>
<p><strong>${site.name}</strong> (${site.url.replace('https://', '')}), an independent information guide to Marrakech Menara Airport.<br>
Contact: <a href="mailto:${site.contactEmail}">${site.contactEmail}</a><br>
Publication director: the site publisher.</p>

<h2>Hosting provider</h2>
<p>Hostinger International Ltd.<br>61 Lordou Vironos Street, 6023 Larnaca, Cyprus<br>hostinger.com</p>

<h2>Independent website</h2>
<p>${site.name} is not the official airport website and is not affiliated with the National Airports Office (ONDA), airlines or the Moroccan authorities. Official information is published on onda.ma.</p>

<h2>Accuracy of information</h2>
<p>Fares, schedules and services are checked carefully but may change without notice. They are given for guidance only: always check with your airline or the provider concerned before travelling. The publisher cannot be held liable for decisions based solely on this site.</p>

<h2>Affiliate links and advertising</h2>
<p>Some links and booking modules are affiliate links: a commission may be earned if you book, at no extra cost to you. The site may also display advertising. Details are in our <a href="/en/affiliate-disclosure/">affiliate disclosure</a> and <a href="/en/privacy-policy/">privacy policy</a>.</p>

<h2>Intellectual property</h2>
<p>The texts, layout, logo and original visuals of ${site.name} are protected. Any reproduction, even partial, without written permission is prohibited. Trademarks and photographs of third-party establishments remain the property of their respective owners.</p>

<h2>Personal data and cookies</h2>
<p>How your data is processed and how cookies are used is described in the <a href="/en/privacy-policy/">privacy policy</a>. You can change your choices at any time via the "Manage cookies" link at the bottom of every page.</p>
`,
} satisfies LocalizedPage;
