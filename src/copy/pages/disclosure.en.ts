import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: 'Affiliate disclosure — AirportRAK',
  description: 'How AirportRAK makes money: affiliate links, commissions, and why this changes neither the price you pay nor our recommendations.',
  eyebrow: 'AirportRAK',
  h1: 'Affiliate disclosure',
  lede: "This site is free and funded by affiliate commissions. Here is exactly how that works, what it means for you — nothing, on price — and what it does not change in what we write.",
  body: `
<h2>The principle, in three sentences</h2>
<p>Some pages contain links to platforms selling transfers, flights, accommodation or car hire. If you book after following one of those links, the partner pays us a commission out of its own margin. <strong>The price you pay is identical to what you would have got by going to their site directly.</strong></p>

<h2>What it funds</h2>
<p>Writing, and above all updating the pages: checking posted fares, verifying timetables, correcting information that has changed. A practical guide that is not maintained becomes wrong within months — which is precisely what we are trying to avoid, and it accounts for most of the work.</p>

<h2>What it does not change</h2>
<ul>
<li><strong>No partner pays to appear on this site</strong>, or to hold a particular position.</li>
<li><strong>No partner reviews our texts</strong> or has any say over what we write about them.</li>
<li><strong>We also recommend options that earn us nothing</strong> when they are better. The taxi rank and bus 19 fall into that category: we recommend them openly in the situations where they win, and they generate no commission.</li>
<li><strong>We point out the flaws</strong> of the services we cover, including where an affiliate link points to them.</li>
</ul>
<div class="callout">
<span class="callout-label">A concrete example</span>
<p>On our transfers page we write that for two people, by day, heading to Gueliz, a taxi at MAD 100–150 is hard to beat and there is no reason to book anything. That advice costs us money, and it is the only way to write a guide worth reading.</p>
</div>

<h2>Where those links are</h2>
<p>Mainly in the transfer and flight booking blocks, in the call-to-action panels at the foot of pages, and in some contextual links inside articles. Links to official sources, regulatory texts or our own pages are never affiliate links.</p>

<h2>Advertising and sponsored content</h2>
<p>We do not publish sponsored articles disguised as editorial content. Should that policy change, any paid content would be identified as such clearly and visibly at the top of the page.</p>

<h2>A question?</h2>
<p>Write to us at <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>. If you think a recommendation on this site is driven by a commission rather than by the reader's interest, say so: that is exactly the kind of report we want to receive.</p>
`,
} satisfies LocalizedPage;
