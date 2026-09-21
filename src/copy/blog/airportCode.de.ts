import type { LocalizedArticle } from '../types';

export default {
  title: 'RAK oder GMMX: der Code des Flughafens Marrakesch',
  description: 'Warum der Flughafen Marrakesch RAK heißt, was GMMX bedeutet und wie man ihn bei der Buchung nicht mit anderen marokkanischen Flughäfen verwechselt.',
  eyebrow: 'Flughafen',
  h1: 'RAK und GMMX: die Codes des Flughafens Marrakesch',
  lede: "Drei Buchstaben auf Ihrem Ticket, vier in den Flugplänen. Hier, was sie bedeuten, woher das „RAK“ kommt, das dem Stadtnamen nicht ähnelt, und welche Verwechslungen man bei der Buchung vermeiden sollte.",
  excerpt: 'RAK, GMMX und die Codes der anderen marokkanischen Flughäfen: was die Buchstaben bedeuten und wie man Buchungsfehler vermeidet.',
  date: '2026-09-10',
  body: `
<h2>RAK: der IATA-Code</h2>
<p><strong>RAK</strong> ist der dreibuchstabige Code des Internationalen Luftverkehrsverbands. Ihn sehen Sie auf Tickets, Gepäckanhängern und Anzeigetafeln; er bezeichnet den Flughafen <strong>Marrakesch Menara</strong>.</p>
<p>Warum RAK und nicht MAR oder MRK? Weil IATA-Codes nach Verfügbarkeit vergeben werden, nicht nach sprachlicher Logik: MAR und MRK waren anderswo bereits belegt. RAK übernimmt einfach drei Konsonanten aus „Marrakech“, wie AGA für Agadir oder CMN für Casablanca Mohammed V.</p>

<h2>GMMX: der ICAO-Code</h2>
<p><strong>GMMX</strong> ist der vierbuchstabige Code der Internationalen Zivilluftfahrtorganisation, verwendet von Fluglotsen, Flugplänen und Flugwetterdiensten. Seine Struktur ist geografisch: <strong>GM</strong> steht für Marokko, die beiden letzten Buchstaben für den Flugplatz.</p>
<p>Zum Buchen nutzen Sie ihn nie, begegnen ihm aber in Flugverfolgungs-Apps und Flugwetterberichten.</p>

<h2>Die anderen marokkanischen Flughäfen, um Fehler zu vermeiden</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Flughafen</th><th>IATA</th><th>ICAO</th><th>Ab Marrakesch</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Marrakesch Menara</strong></td><td class="num">RAK</td><td class="num">GMMX</td><td>—</td></tr>
<tr><td>Casablanca Mohammed V</td><td class="num">CMN</td><td class="num">GMMN</td><td class="num">240 km</td></tr>
<tr><td>Agadir Al Massira</td><td class="num">AGA</td><td class="num">GMAD</td><td class="num">250 km</td></tr>
<tr><td>Essaouira Mogador</td><td class="num">ESU</td><td class="num">GMMI</td><td class="num">180 km</td></tr>
<tr><td>Ouarzazate</td><td class="num">OZZ</td><td class="num">GMMZ</td><td class="num">200 km</td></tr>
<tr><td>Fès Saïss</td><td class="num">FEZ</td><td class="num">GMFF</td><td class="num">530 km</td></tr>
<tr><td>Rabat Salé</td><td class="num">RBA</td><td class="num">GMME</td><td class="num">320 km</td></tr>
</tbody>
</table>
</div>
<div class="callout">
<span class="callout-label">Der klassische Fehler</span>
<p>Nach <strong>CMN</strong> buchen im Glauben, in Marrakesch zu landen. Casablanca Mohammed V ist der größte Flughafen des Landes und steht oft oben in den Suchergebnissen – liegt aber 240 Kilometer entfernt, rund zweieinhalb Stunden Fahrt oder eine Bahnfahrt ab Casa-Voyageurs. Prüfen Sie vor dem Bezahlen immer die drei Buchstaben.</p>
</div>

<h2>Marrakesch Menara in Kürze</h2>
<ul>
<li><strong>Offizieller Name</strong>: Flughafen Marrakesch Menara, nach den benachbarten Menara-Gärten.</li>
<li><strong>Lage</strong>: 6 km südwestlich des Zentrums, auf 471 Metern Höhe.</li>
<li><strong>Startbahn</strong>: eine einzige Bahn von 3.100 Metern.</li>
<li><strong>Verkehr</strong>: über 9,3 Millionen Passagiere 2024.</li>
<li><strong>Terminals</strong>: zwei angrenzende, zu Fuß verbundene Hallen.</li>
</ul>
`,
  faqs: [
    { q: 'Wie lautet der Code des Flughafens Marrakesch?', a: "RAK ist der IATA-Code auf Ticket und Gepäckanhänger, GMMX der ICAO-Code für Flugsicherung und Flugpläne." },
    { q: 'Warum heißt der Flughafen Marrakesch RAK?', a: "IATA-Codes werden nach Verfügbarkeit vergeben, nicht nach sprachlicher Logik: MAR und MRK waren anderswo belegt. RAK übernimmt drei Konsonanten aus „Marrakech“, wie AGA für Agadir oder CMN für Casablanca." },
    { q: 'Was bedeutet GMMX?', a: "Es ist der ICAO-Code von Marrakesch Menara. Die Struktur ist geografisch: GM steht für Marokko, die letzten beiden Buchstaben für den Flugplatz. Er dient Flugplänen und Flugwetter, nie Buchungen." },
    { q: 'Mit welchem Flughafen sollte man RAK nicht verwechseln?', a: "Mit CMN, Casablanca Mohammed V, der oft oben in den Suchergebnissen zu Marokko steht, aber 240 Kilometer von Marrakesch entfernt liegt, rund zweieinhalb Stunden Fahrt. Prüfen Sie die drei Buchstaben vor dem Bezahlen." },
  ],
} satisfies LocalizedArticle;
