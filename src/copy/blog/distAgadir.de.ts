import type { LocalizedArticle } from '../types';

export default {
  title: 'Marrakesch → Agadir: Entfernung, Straße, Verkehrsmittel',
  description: 'Vom Flughafen Marrakesch nach Agadir: 250 km Autobahn, 3 Std. Fahrt, CTM- und Supratours-Busse, Privattransfer und Mietwagen.',
  eyebrow: 'Entfernungen',
  h1: 'Vom Flughafen Marrakesch nach Agadir',
  lede: "Zweihundertfünfzig Kilometer, drei Stunden Autobahn und ein kompletter Szenenwechsel: von der roten Stadt an den Atlantik. So gelingt die Fahrt und das kostet sie wirklich.",
  excerpt: '250 km zwischen RAK und Agadir: Bus, Privattransfer, Auto oder Flugzeug, mit Fahrzeiten und Preisen im Vergleich.',
  date: '2026-09-01',
  facts: [
    { label: 'Entfernung', value: '250', sub: 'km' },
    { label: 'Dauer', value: '3 Std.', sub: 'Autobahn' },
    { label: 'Bus', value: '120–180', sub: 'MAD' },
    { label: 'Privattransfer', value: '130–170 €', sub: 'pro Fahrzeug' },
  ],
  body: `
<h2>Die Optionen</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Preis</th><th>Dauer</th><th>Abfahrt</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Bus CTM / Supratours</strong></td><td class="num">120–180 MAD / Person</td><td class="num">3 Std. 30–4 Std.</td><td>Busbahnhof Marrakesch</td></tr>
<tr><td><strong>Privattransfer</strong></td><td class="num">130–170 € / Fahrzeug</td><td class="num">3 Std.</td><td>Flughafenterminal</td></tr>
<tr><td><strong>Mietwagen</strong></td><td class="num">ab 25 € / Tag + Maut</td><td class="num">3 Std.</td><td>Schalter am Flughafen</td></tr>
<tr><td><strong>Flugzeug</strong></td><td class="num">variabel, über Casablanca</td><td class="num">4 Std.+ gesamt</td><td>RAK</td></tr>
</tbody>
</table>
</div>
<p>Das Flugzeug lohnt sich auf dieser Verbindung nicht: Es gibt keinen sinnvollen Direktflug, und ein Umstieg in Casablanca verlängert die Reise weit über drei Stunden Fahrt hinaus, zu einem höheren Preis.</p>

<h2>Die Strecke</h2>
<p>Die Autobahn A7 verbindet Marrakesch mit Agadir über eine moderne Trasse durch den westlichen Hohen Atlas. Die Straße ist ausgezeichnet, mit regelmäßigen Raststätten, und in drei Stunden ohne Hast zu schaffen. Die Maut beträgt einige Dutzend Dirham.</p>
<p>Zwei Hinweise: Die Überquerung des Massivs kann windig sein, und auf dem Mittelstück werden Tankstellen selten – tanken Sie vor der Abfahrt in Marrakesch, wenn der Tank knapp ist.</p>

<h2>Der Bus, zu zweit die vernünftigste Option</h2>
<p>CTM und Supratours fahren mehrmals täglich in klimatisierten Reisebussen mit Gepäckraum, für <strong>120 bis 180 MAD pro Person</strong>. Supratours ist an die ONCF angebunden, was kombinierte Zug-Bus-Reisen aus dem Norden erleichtert.</p>
<p>Wie alle Fernlinien fahren die Busse am <strong>Busbahnhof von Marrakesch</strong> ab, nicht am Flughafen: Rechnen Sie Taxi und Wartezeit hinzu.</p>
<div class="callout">
<span class="callout-label">Wenn Agadir Ihr Endziel ist</span>
<p>Prüfen Sie zuerst, ob es einen Direktflug nach Agadir Al Massira (AGA) ab Ihrer Stadt gibt. In Marrakesch zu landen, um dann drei Stunden zu fahren, lohnt nur, wenn das Ticket deutlich günstiger ist oder Sie ohnehin einige Tage in Marrakesch verbringen.</p>
</div>

<h2>Welche Option wählen</h2>
<p><strong>Der Bus</strong> allein oder zu zweit mit Zeit: bequem und sehr günstig. <strong>Der Privattransfer</strong> ab vier Personen, mit Kindern oder bei später Landung – Abfahrt direkt am Terminal. <strong>Der Mietwagen</strong>, wenn Sie die Küste zwischen Essaouira, Taghazout und Agadir erkunden wollen, was öffentliche Verkehrsmittel nicht leisten.</p>
`,
  faqs: [
    { q: 'Wie weit ist Agadir von Marrakesch entfernt?', a: "Etwa 250 Kilometer über die Autobahn A7, also drei Stunden durch den westlichen Hohen Atlas. Die Strecke ist modern, mit regelmäßigen Raststätten und einigen Dutzend Dirham Maut." },
    { q: 'Wie kommt man vom Flughafen Marrakesch nach Agadir?', a: "Per CTM- oder Supratours-Bus ab dem Busbahnhof von Marrakesch für 120 bis 180 MAD pro Person, per Privattransfer direkt ab Terminal für 130 bis 170 € pro Fahrzeug oder mit dem Mietwagen." },
    { q: 'Gibt es Flüge zwischen Marrakesch und Agadir?', a: "Keine sinnvolle Direktverbindung: Ein Umstieg in Casablanca verlängert die Reise weit über drei Stunden Fahrt hinaus, zu höherem Preis. Ist Agadir Ihr Endziel, suchen Sie einen Direktflug nach AGA." },
    { q: 'Was kostet ein Taxi von Marrakesch nach Agadir?', a: "Ein verhandeltes Grand Taxi liegt meist bei 800 bis 1.200 MAD für das Fahrzeug. Ein gebuchter Privattransfer für 130 bis 170 € bietet festen Preis, Abfahrt am Terminal und Flugverfolgung." },
  ],
} satisfies LocalizedArticle;
