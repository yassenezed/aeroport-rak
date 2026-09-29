import type { LocalizedPage } from '../types';

export default {
  title: "Flüge zum Flughafen Marrakesch-Menara: Airlines, Preise",
  description: "Flüge zum Flughafen Marrakesch-Menara: welche Airlines den RAK bedienen, die besten Buchungszeiten, Gepäckfallen bei Billigfliegern und Inlandsanschlüsse.",
  eyebrow: 'Marrakesch Menara · Flüge',
  h1: 'Flüge nach Marrakesch',
  lede: "Der RAK ist nach Casablanca der meistbediente Flughafen Marokkos, mit einem dichten Netz europäischer Strecken und ausgeprägter Saisonalität. Vergleichen Sie Termine und lesen Sie dann, was den Endpreis wirklich bewegt.",
  widget: 'flight-search',
  body: `
<h2>Wer nach Marrakesch fliegt</h2>
<p>Drei Airline-Familien teilen sich den Verkehr. Die <strong>europäischen Billigflieger</strong> – Ryanair, easyJet, Eurowings, Transavia, Vueling, Wizz Air – bedienen die meisten Direktverbindungen aus Deutschland, Österreich, der Schweiz, Frankreich, Spanien und Großbritannien; sie erklären die Ballung der Ankünfte am Abend. Die <strong>klassischen Fluggesellschaften</strong> – Royal Air Maroc, Lufthansa, Swiss, Air France, Iberia, Brussels Airlines – bieten angenehmere Zeiten und Freigepäck zu höheren Preisen. Schließlich verbinden <strong>Royal Air Maroc und Air Arabia Maroc</strong> Marrakesch mit anderen Städten des Landes und mehreren afrikanischen Zielen.</p>

<h2>Wann die Preise steigen und wann sie fallen</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Zeitraum</th><th>Andrang</th><th>Flugpreise</th><th>Klima</th></tr></thead>
<tbody>
<tr><td><strong>März–Mai</strong></td><td>Sehr hoch</td><td>Hoch</td><td>Ideal, 22–28 °C</td></tr>
<tr><td><strong>Juni–August</strong></td><td>Mittel</td><td>Moderat außer im August</td><td>Sehr heiß, 38–45 °C</td></tr>
<tr class="row-highlight"><td><strong>September–November</strong></td><td>Hoch</td><td>Mittel</td><td>Ausgezeichnet, 24–30 °C</td></tr>
<tr><td><strong>Dezember–Februar</strong></td><td>Spitzen an Feiertagen</td><td>Niedrig außerhalb der Feiertage</td><td>Mild am Tag, kalt nachts</td></tr>
</tbody>
</table>
</div>
<p>Das beste Fenster bleibt <strong>Ende September bis Mitte November</strong>: das angenehmste Klima des Jahres, die Medina im gewohnten Rhythmus nach dem Sommer, und Preise, die noch nicht in die Feiertagssaison gekippt sind. Januar und Februar außerhalb der Schulferien bieten die niedrigsten Preise – vorausgesetzt, Sie akzeptieren Nächte unter 8 °C, was in einem kaum beheizten Riad tatsächlich zählt.</p>

<h2>Der angezeigte Preis ist nicht der gezahlte Preis</h2>
<p>Bei einem Billigflieger entsteht die Differenz zwischen Anzeige und Endsumme an drei Stellen. Das <strong>Aufgabegepäck</strong> schlägt oft mit 25 bis 50 € pro Strecke zu Buche, manchmal mehr als das Ticket selbst. Die <strong>Sitzplatzreservierung</strong> wird fällig, sobald man zu mehreren reist und zusammensitzen will. Und das <strong>Handgepäck</strong> selbst ist bei mehreren Anbietern jenseits einer kleinen Tasche kostenpflichtig, wobei die Kontrollen beim Abflug in Marrakesch streng gehandhabt werden.</p>
<div class="callout">
<span class="callout-label">Die Rechnung, die Sie aufmachen sollten</span>
<p>Addieren Sie immer den Rückflug, bevor Sie vergleichen. Ein Billig-Hin-und-Rückflug für 79 € wird mit zwei aufgegebenen Gepäckstücken und reservierten Sitzen zu 179 € – einem Niveau, auf dem eine klassische Airline mit Freigepäck und Tagflügen wieder konkurrenzfähig ist.</p>
</div>

<h2>Anschlüsse ins übrige Marokko</h2>
<p>Ab Marrakesch führen Inlandsverbindungen meist über Casablanca. Für Agadir, Essaouira oder Ouarzazate ist die Straße oft schneller und deutlich günstiger, sobald man die Anfahrtszeiten mitrechnet. Für Fès oder Tanger ist der ONCF-Zug ab dem Bahnhof Guéliz eine komfortable Alternative: Man muss lediglich die Strecke zwischen Flughafen und Bahnhof einplanen, die keine Bahnlinie abdeckt.</p>
<p>Landet Ihr Flug spät und geht Ihr Inlandsanschluss früh, schlafen Sie lieber in Marrakesch als am Flughafen: Hotels in Flughafennähe liegen zehn Minuten entfernt und kosten weniger als ein umgebuchtes Ticket.</p>
`,
  faqs: [
    {
      q: 'Welche Airlines fliegen den Flughafen Marrakesch an?',
      a: "Vor allem Ryanair, easyJet, Eurowings, Transavia, Vueling und Wizz Air auf den europäischen Billigstrecken sowie Royal Air Maroc, Lufthansa, Swiss, Air France, Iberia und Brussels Airlines auf klassischen Flügen. Royal Air Maroc und Air Arabia Maroc bedienen die Inlands- und Afrikaverbindungen.",
    },
    {
      q: 'Wann ist die beste Zeit für einen Flug nach Marrakesch?',
      a: "Ende September bis Mitte November: Das Klima ist optimal, zwischen 24 und 30 °C, und die Preise bleiben vor der Feiertagssaison vernünftig. Januar und Februar außerhalb der Schulferien bieten die niedrigsten Preise, bei frischen Nächten.",
    },
    {
      q: 'Wie lange dauert ein Flug nach Marrakesch?',
      a: "Etwa 3 Std. 40 ab Frankfurt, 3 Std. 50 ab München, 3 Std. 30 ab Zürich, 3 Std. 20 ab Paris und 2 Std. 45 ab Madrid, jeweils im Direktflug.",
    },
    {
      q: 'Gibt es Direktflüge zwischen Marrakesch und anderen marokkanischen Städten?',
      a: "Wenige, und die meisten führen über Casablanca. Für Agadir, Essaouira oder Ouarzazate bleibt die Straße schneller und günstiger, sobald man die Anfahrtszeiten mitrechnet. Für Fès und Tanger ist der ONCF-Zug ab dem Bahnhof Guéliz eine gute Alternative.",
    },
    {
      q: 'Wie früh sollte man einen Flug nach Marrakesch buchen?',
      a: "Sechs bis zehn Wochen im Voraus auf den Billigstrecken in der Normalsaison. Für Schulferien, Weihnachten und das Frühjahr eher drei bis vier Monate: In diesen Zeiträumen verdoppeln sich die Preise am schnellsten.",
    },
  ],
  cta: {
    heading: 'Flüge nach Marrakesch vergleichen',
    text: "Alle Airlines, die den RAK bedienen, zu Ihren Wunschterminen, mit Zwischenstopps und Flugzeiten im Detail.",
    label: 'Flug suchen',
    href: '/de/flights/',
  },
} satisfies LocalizedPage;
