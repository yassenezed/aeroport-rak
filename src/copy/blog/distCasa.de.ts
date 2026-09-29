import type { LocalizedArticle } from '../types';

export default {
  title: "Flughafen Marrakesch-Menara → Casablanca: Zug, Bus, Straße",
  description: "Vom Flughafen Marrakesch-Menara nach Casablanca: 240 km, Autobahn, ONCF-Zug ab Bahnhof Guéliz, CTM-Bus und Privattransfer.",
  eyebrow: 'Entfernungen',
  h1: 'Vom Flughafen Marrakesch nach Casablanca',
  lede: "Zweihundertvierzig Kilometer Autobahn oder drei Stunden Zug ab Bahnhof Guéliz. Die Wahl hängt vor allem an einem Detail: Keine Bahnlinie erreicht den Flughafen, man muss erst zum Bahnhof.",
  excerpt: 'ONCF-Zug, CTM-Bus, Autobahn oder Privattransfer zwischen RAK und Casablanca: Fahrzeiten, Preise und der Zubringer zum Bahnhof.',
  date: '2026-09-02',
  facts: [
    { label: 'Entfernung', value: '240', sub: 'km' },
    { label: 'Autobahn', value: '2 Std. 30', sub: 'Fahrt' },
    { label: 'ONCF-Zug', value: '≈ 3 Std.', sub: 'ab Guéliz' },
    { label: '2. Klasse', value: '100–140', sub: 'MAD' },
  ],
  body: `
<h2>Der Zug, die beste Option – mit einer Einschränkung</h2>
<p>Die ONCF verbindet Marrakesch mit Casablanca in etwa <strong>drei Stunden</strong>, mit regelmäßigen Abfahrten über den Tag. Das Ticket kostet rund <strong>100 bis 140 MAD in der zweiten Klasse</strong> und 150 bis 210 MAD in der ersten, mit bequemen Sitzen und Gepäck an Bord.</p>
<p>Die Einschränkung ist der Startpunkt: Der Bahnhof von Marrakesch liegt in <strong>Guéliz</strong>, nicht am Flughafen. Rechnen Sie mit einem Taxi für 50 bis 70 MAD ab RAK, zehn bis fünfzehn Minuten, plus Wartezeit. Die Gesamtdauer nähert sich damit vier Stunden.</p>
<p>Achten Sie auch auf den Zielbahnhof: <strong>Casa-Voyageurs</strong> ist der Hauptbahnhof, <strong>Casa-Port</strong> liegt näher am Zentrum und an der Corniche. Prüfen Sie, welcher Ihr Ziel bedient.</p>

<h2>Die anderen Optionen</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Preis</th><th>Tür zu Tür</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>ONCF-Zug</strong></td><td class="num">100–140 MAD + Taxi</td><td class="num">≈ 4 Std.</td></tr>
<tr><td><strong>Bus CTM / Supratours</strong></td><td class="num">100–150 MAD + Taxi</td><td class="num">4 Std.–4 Std. 30</td></tr>
<tr><td><strong>Privattransfer</strong></td><td class="num">130–170 € / Fahrzeug</td><td class="num">2 Std. 30</td></tr>
<tr><td><strong>Mietwagen</strong></td><td class="num">ab 25 € / Tag + Maut</td><td class="num">2 Std. 30</td></tr>
</tbody>
</table>
</div>
<p>Die Autobahn A7 verbindet beide Städte problemlos, mit Maut und regelmäßigen Raststätten. Eine einfache, schnelle und eintönige Strecke.</p>

<h2>Sonderfall: Anschlussflug</h2>
<p>Landen Sie in Marrakesch und müssen einen Flug ab Casablanca Mohammed V nehmen, zählen zwei Punkte. Der Flughafen Casablanca hat <strong>einen eigenen Bahnhof</strong> mit direkter Verbindung nach Casa-Voyageurs: Der Zug funktioniert also durchgehend. Und rechnen Sie insgesamt fünf bis sechs Stunden von Terminal zu Terminal inklusive Zubringer – planen Sie Puffer oder eine Übernachtung ein.</p>
<div class="callout">
<span class="callout-label">Der Buchungsfehler, den man vermeiden sollte</span>
<p>CMN (Casablanca Mohammed V) steht oft oben in den Suchergebnissen zu Marokko und liegt 240 Kilometer von Marrakesch entfernt. Ist Marrakesch Ihr Ziel, prüfen Sie, ob Ihr Ticket <strong>RAK</strong> ausweist.</p>
</div>

<h2>Welche Option wählen</h2>
<p><strong>Der Zug</strong> für ein oder zwei Reisende ohne enge Zeitvorgaben: bequem, pünktlich und günstig. <strong>Der Privattransfer</strong> ab drei oder vier Personen oder bei festen Zeiten: ab Terminal bis zur Adresse, ohne Umstieg. <strong>Der Mietwagen</strong> nur, wenn Sie nach Rabat oder an der Küste weiterfahren.</p>
`,
  faqs: [
    { q: 'Gibt es einen Zug zwischen Flughafen Marrakesch und Casablanca?', a: "Nicht ab dem Flughafen: Der ONCF-Bahnhof von Marrakesch liegt in Guéliz, zehn bis fünfzehn Taximinuten vom Terminal. Von dort erreicht der Zug Casablanca in etwa drei Stunden." },
    { q: 'Was kostet der Zug Marrakesch–Casablanca?', a: "100 bis 140 MAD in der zweiten und 150 bis 210 MAD in der ersten Klasse, mit regelmäßigen Abfahrten. Dazu 50 bis 70 MAD Taxi vom Flughafen zum Bahnhof." },
    { q: 'Wie weit ist Casablanca von Marrakesch entfernt?', a: "Etwa 240 Kilometer über die Autobahn A7, also zweieinhalb Stunden mit dem Auto inklusive Maut. Der Zug braucht etwa drei Stunden von Bahnhof zu Bahnhof." },
    { q: 'Wie viel Zeit zwischen RAK und dem Flughafen Casablanca einplanen?', a: "Fünf bis sechs Stunden von Terminal zu Terminal inklusive Zubringer. Mohammed V hat einen eigenen, mit Casa-Voyageurs verbundenen Bahnhof, was den Zug sinnvoll macht, doch Puffer bleibt unverzichtbar." },
  ],
} satisfies LocalizedArticle;
