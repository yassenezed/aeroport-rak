import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: 'Affiliate-Offenlegung — AirportRAK',
  description: 'Wie AirportRAK Geld verdient: Affiliate-Links, Provisionen und warum das weder Ihren Preis noch unsere Empfehlungen verändert.',
  eyebrow: 'AirportRAK',
  h1: 'Affiliate-Offenlegung',
  lede: "Diese Website ist kostenlos und wird über Affiliate-Provisionen finanziert. Hier genau, wie das funktioniert, was es für Sie bedeutet – beim Preis nichts – und was es an unseren Texten nicht ändert.",
  body: `
<h2>Das Prinzip in drei Sätzen</h2>
<p>Einige Seiten enthalten Links zu Plattformen für Transfers, Flüge, Unterkünfte oder Mietwagen. Buchen Sie nach dem Klick auf einen dieser Links, zahlt uns der Partner eine Provision aus seiner eigenen Marge. <strong>Ihr Preis ist identisch mit dem, den Sie direkt auf seiner Website erhalten hätten.</strong></p>

<h2>Was das finanziert</h2>
<p>Das Schreiben und vor allem das Aktualisieren der Seiten: ausgewiesene Preise erheben, Fahrpläne prüfen, geänderte Informationen korrigieren. Ein praktischer Guide, der nicht gepflegt wird, ist nach wenigen Monaten falsch – genau das wollen wir vermeiden, und es macht den Großteil der Arbeit aus.</p>

<h2>Was das nicht ändert</h2>
<ul>
<li><strong>Kein Partner zahlt für die Nennung auf dieser Website</strong> oder für eine bestimmte Position.</li>
<li><strong>Kein Partner liest unsere Texte gegen</strong> oder hat Einfluss darauf, was wir über ihn schreiben.</li>
<li><strong>Wir empfehlen auch Optionen, die uns nichts einbringen</strong>, wenn sie besser sind. Der Taxistand und der Bus 19 gehören dazu: Wir empfehlen sie offen in den Situationen, in denen sie gewinnen, und sie bringen keine Provision.</li>
<li><strong>Wir benennen Schwächen</strong> der Dienste, über die wir schreiben, auch wenn ein Affiliate-Link darauf verweist.</li>
</ul>
<div class="callout">
<span class="callout-label">Ein konkretes Beispiel</span>
<p>Auf unserer Transferseite schreiben wir, dass zu zweit, tagsüber, nach Guéliz das Taxi für 100–150 MAD kaum zu schlagen ist und es keinen Grund gibt, irgendetwas zu buchen. Dieser Rat kostet uns Geld – und er ist die einzige Art, einen lesenswerten Guide zu schreiben.</p>
</div>

<h2>Wo sich diese Links befinden</h2>
<p>Vor allem in den Buchungsblöcken für Transfers und Flüge, in den Handlungsaufrufen am Seitenende und in einigen kontextuellen Links innerhalb der Artikel. Links zu offiziellen Quellen, Rechtstexten oder unseren eigenen Seiten sind nie Affiliate-Links.</p>

<h2>Werbung und gesponserte Inhalte</h2>
<p>Wir veröffentlichen keine als redaktionelle Inhalte getarnten gesponserten Artikel. Sollte sich das ändern, würde jeder bezahlte Inhalt klar und sichtbar am Seitenanfang gekennzeichnet.</p>

<h2>Eine Frage?</h2>
<p>Schreiben Sie uns an <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>. Wenn Sie meinen, eine Empfehlung auf dieser Website sei eher von einer Provision als vom Interesse der Leser geleitet, sagen Sie es: Genau solche Hinweise wollen wir erhalten.</p>
`,
} satisfies LocalizedPage;
