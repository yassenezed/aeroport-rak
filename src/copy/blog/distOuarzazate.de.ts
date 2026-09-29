import type { LocalizedArticle } from '../types';

export default {
  title: "Flughafen Marrakesch-Menara → Ouarzazate über den Tichka",
  description: "Vom Flughafen Marrakesch-Menara nach Ouarzazate: 200 km über den Tichka-Pass auf 2.260 m, 4 Std. Fahrt, CTM-Busse, Transfers und Fahrtipps.",
  eyebrow: 'Entfernungen',
  h1: 'Vom Flughafen Marrakesch nach Ouarzazate',
  lede: "Nur zweihundert Kilometer, aber vier Stunden Fahrt: Zwischen den Städten liegt der Tichka-Pass auf 2.260 Metern. Eine der schönsten Strecken Marokkos – und eine, die man nicht unterschätzen sollte.",
  excerpt: '200 km und 4 Stunden über den Tichka: reale Fahrzeit, Verkehrsmittel, Winterbedingungen und wie man Aït-Ben-Haddou nicht verpasst.',
  date: '2026-08-31',
  facts: [
    { label: 'Entfernung', value: '200', sub: 'km' },
    { label: 'Reale Dauer', value: '4 Std.', sub: 'Fahrt' },
    { label: 'Passhöhe', value: '2.260', sub: 'm' },
    { label: 'CTM-Bus', value: '100–150', sub: 'MAD' },
  ],
  body: `
<h2>Warum vier Stunden für zweihundert Kilometer</h2>
<p>Die N9 überquert den Hohen Atlas am <strong>Tichka-Pass auf 2.260 Metern</strong>. Die Straße wurde in den letzten Jahren verbreitert und gesichert, bleibt aber über Dutzende Kilometer eine Folge von Kehren, mit langsamen Lastwagen und Überholmanövern. Der reale Schnitt liegt bei etwa fünfzig Kilometern pro Stunde.</p>
<p>Das ist kein Nachteil: Es ist eine der schönsten Routen des Landes, mit an Hängen klebenden Dörfern, Aussichtspässen und einem kompletten Landschaftswechsel auf der Südseite, wo Grün dem Ocker weicht.</p>

<h2>Die Optionen</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Preis</th><th>Dauer</th><th>Abfahrt</th></tr></thead>
<tbody>
<tr><td><strong>Bus CTM / Supratours</strong></td><td class="num">100–150 MAD / Person</td><td class="num">4 Std. 30–5 Std.</td><td>Busbahnhof Marrakesch</td></tr>
<tr class="row-highlight"><td><strong>Privattransfer</strong></td><td class="num">120–160 € / Fahrzeug</td><td class="num">4 Std.</td><td>Flughafenterminal</td></tr>
<tr><td><strong>Mietwagen</strong></td><td class="num">ab 25 € / Tag</td><td class="num">4 Std.</td><td>Schalter am Flughafen</td></tr>
<tr><td><strong>Grand Taxi</strong></td><td class="num">800–1.200 MAD / Fahrzeug</td><td class="num">4 Std.</td><td>Stand, zu verhandeln</td></tr>
</tbody>
</table>
</div>

<h2>Den Tichka fahren</h2>
<ul>
<li><strong>Morgens losfahren.</strong> Nachts bietet die Strecke nichts, und die Sicht in den Kehren ändert alles.</li>
<li><strong>Pausen einplanen.</strong> Pässe steigen langsam: Vier Stunden Kurven ermüden mehr als vier Stunden Autobahn.</li>
<li><strong>Vorsicht im Winter.</strong> Schnee und Glätte sperren den Pass zwischen Dezember und Februar gelegentlich. Prüfen Sie den Straßenzustand vor der Abfahrt.</li>
<li><strong>Reiseübelkeit.</strong> Kinder und empfindliche Mitfahrer vertragen es schlecht: Vorsorge mitnehmen.</li>
<li><strong>Kraftstoff.</strong> In Marrakesch tanken: Auf dem oberen Abschnitt liegen die Tankstellen weit auseinander.</li>
</ul>
<div class="callout">
<span class="callout-label">Aït-Ben-Haddou nicht auslassen</span>
<p>Der zum Welterbe zählende Ksar liegt etwa dreißig Kilometer vor Ouarzazate, leicht abseits der N9. Einer der spektakulärsten Orte Marokkos – ihn zu verpassen, weil man direkt nach Ouarzazate durchfährt, wäre schade. Rechnen Sie ein bis zwei Stunden Besichtigung.</p>
</div>

<h2>Hin und zurück an einem Tag: besser nicht</h2>
<p>Acht Stunden Bergstraße für wenige Stunden vor Ort: machbar, erschöpfend, und es nimmt der Strecke ihren Sinn. <strong>Eine Nacht in Ouarzazate oder Aït-Ben-Haddou</strong> verändert das Erlebnis völlig und zeigt die Südseite im Morgenlicht.</p>
<p>Fahren Sie weiter zu den Dadès-Schluchten, ins Draa-Tal oder nach Merzouga, ist Ouarzazate ohnehin eher Etappe als Endziel.</p>
`,
  faqs: [
    { q: 'Wie lange dauert die Fahrt von Marrakesch nach Ouarzazate?', a: "Etwa vier Stunden für 200 Kilometer, weil die N9 den Tichka-Pass auf 2.260 Metern über eine lange Folge von Kehren überquert. Der reale Schnitt liegt bei etwa fünfzig km/h." },
    { q: 'Ist die Tichka-Straße gefährlich?', a: "Sie wurde in den letzten Jahren verbreitert und gesichert und ist tagsüber nicht besonders schwierig, verlangt aber Aufmerksamkeit: Kehren, langsame Lastwagen und Überholmanöver. Im Winter können Schnee und Glätte den Pass sperren." },
    { q: 'Kann man Ouarzazate an einem Tag ab Marrakesch besuchen?', a: "Machbar, aber erschöpfend: acht Stunden Bergstraße für wenige Stunden vor Ort. Eine Nacht in Ouarzazate oder Aït-Ben-Haddou verändert das Erlebnis völlig und zeigt die Südseite am Morgen." },
    { q: 'Wie besucht man Aït-Ben-Haddou ab Marrakesch?', a: "Der Welterbe-Ksar liegt etwa dreißig Kilometer vor Ouarzazate, leicht abseits der N9. Planen Sie ein bis zwei Stunden ein: einer der spektakulärsten Orte des Landes, den man nicht verpassen sollte." },
  ],
} satisfies LocalizedArticle;
