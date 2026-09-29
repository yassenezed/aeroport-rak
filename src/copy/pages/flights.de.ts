import type { LocalizedPage } from '../types';

export default {
  title: "Flüge zum Flughafen Marrakesch-Menara: Airlines, Preise",
  description: "Günstige Flüge zum Flughafen Marrakesch-Menara: Flugsuche, Airlines nach Abflugort, Flugzeiten, beste Reisezeit und Zusatzkosten der Billigflieger.",
  eyebrow: "Flugsuche · 39 Airlines",
  h1: "Flüge Flughafen Marrakesch-Menara",
  lede: "Vergleichen Sie die Flüge zum Flughafen Marrakesch-Menara (RAK) aller Airlines und prüfen Sie, was den Preis wirklich bestimmt: Abflugort, Saison, Gepäck und Ankunftszeit.",
  widget: 'flight-search',
  highlights: [
    { icon: 'plane', value: "39 Airlines", label: "Direktflüge zum RAK" },
    { icon: 'map', value: "106 Städte", label: "Nonstop verbunden" },
    { icon: 'clock', value: "≈ 3 Std. 45", label: "Frankfurt → Marrakesch" },
  ],
  services: {
    heading: "Ihre Ankunft am Flughafen Marrakesch vorbereiten",
    intro: "Nach der Buchung: alles, was am Boden passiert.",
    items: [
      { icon: 'map', key: 'destinations', title: "Alle Ziele", text: "Die 106 nonstop verbundenen Städte, filterbar nach Land und Airline.", cta: "Liste ansehen" },
      { icon: 'plane-landing', key: 'arrivals', title: "Ankünfte live", text: "Einen Flug und die tatsächliche Landezeit in Marrakesch verfolgen.", cta: "Ankünfte ansehen" },
      { icon: 'plane-takeoff', key: 'departures', title: "Abflüge live", text: "Wann da sein, Check-in und Kontrollen.", cta: "Abflüge ansehen" },
      { icon: 'van', key: 'bookTransfer', title: "Flughafentransfer", text: "Fahrer mit Namensschild, Festpreis pro Fahrzeug ab 27 €.", cta: "Buchen" },
      { icon: 'building', key: 'hotels', title: "Übernachten", text: "Medina, Guéliz, Hivernage oder nahe dem Flughafen.", cta: "Hotels ansehen" },
      { icon: 'alert', key: 'compensation', title: "Verspätung oder Annullierung", text: "Bis zu 400 € Entschädigung je nach Entfernung.", cta: "Rechte prüfen" },
    ],
  },
  body: `
<h2>Direktflüge zum Flughafen Marrakesch-Menara aus Deutschland, Österreich und der Schweiz</h2>
<p>Aus dem deutschsprachigen Raum fliegen mehrere Airlines nonstop nach Marrakesch, vor allem im Winterhalbjahr. Hier die wichtigsten Verbindungen, die Airlines und die durchschnittliche Flugzeit.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Abflug</th><th>Airlines</th><th>Flugzeit</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Frankfurt</strong> (FRA, Hahn)</td><td>Discover Airlines, Ryanair (Hahn)</td><td class="num">≈ 3 Std. 45</td></tr>
<tr><td><strong>München</strong></td><td>Discover Airlines</td><td class="num">≈ 3 Std. 50</td></tr>
<tr><td><strong>Berlin</strong></td><td>Ryanair, Transavia (saisonal)</td><td class="num">≈ 4 Std. 15</td></tr>
<tr><td><strong>Hamburg</strong></td><td>easyJet</td><td class="num">≈ 4 Std. 15</td></tr>
<tr><td><strong>Düsseldorf</strong> (DUS, Weeze)</td><td>Eurowings (saisonal), Ryanair (Weeze)</td><td class="num">≈ 3 Std. 50</td></tr>
<tr><td><strong>Köln/Bonn</strong></td><td>Ryanair</td><td class="num">≈ 3 Std. 50</td></tr>
<tr><td><strong>Wien</strong></td><td>Austrian Airlines (saisonal)</td><td class="num">≈ 4 Std.</td></tr>
<tr><td><strong>Zürich / Genf / Basel</strong></td><td>Edelweiss (saisonal), Chair Airlines, Swiss, easyJet</td><td class="num">≈ 3 Std.</td></tr>
</tbody>
</table>
</div>
<p>Insgesamt ist der Flughafen Marrakesch-Menara mit 106 Städten durch 39 Airlines verbunden. Die vollständige Liste mit saisonalen Strecken finden Sie auf unserer Seite <a href="/de/destinations/">Ziele ab Marrakesch</a>.</p>

<h2>Wann buchen: Saisons und Flugpreise</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Zeitraum</th><th>Andrang</th><th>Flugpreise</th><th>Klima</th></tr></thead>
<tbody>
<tr><td><strong>März–Mai</strong></td><td>Sehr hoch</td><td>Hoch</td><td>Ideal, 22–28 °C</td></tr>
<tr><td><strong>Juni–August</strong></td><td>Mittel</td><td>Moderat außer August</td><td>Sehr heiß, 38–45 °C</td></tr>
<tr class="row-highlight"><td><strong>September–November</strong></td><td>Hoch</td><td>Mittel</td><td>Hervorragend, 24–30 °C</td></tr>
<tr><td><strong>Dezember–Februar</strong></td><td>Spitzen an Feiertagen</td><td>Niedrig außer Feiertage</td><td>Mild am Tag, kalt nachts</td></tr>
</tbody>
</table>
</div>
<p>Das beste Fenster ist <strong>Ende September bis Mitte November</strong>: das schönste Wetter des Jahres, bevor die Weihnachtspreise beginnen. Januar und Februar außerhalb der Schulferien bieten die niedrigsten Preise, mit Nächten unter 8 °C, was in einem wenig beheizten Riad spürbar ist. Buchen Sie normalerweise sechs bis zehn Wochen vorher, für Schulferien, Ostern und Weihnachten drei bis vier Monate.</p>

<h2>Der angezeigte Preis ist nicht der Endpreis</h2>
<p>Bei Billigfliegern liegt der Unterschied zwischen Angebot und Gesamtpreis in drei Posten. <strong>Aufgabegepäck</strong> kostet oft 25 bis 50 € pro Strecke, manchmal mehr als das Ticket. Die <strong>Sitzplatzwahl</strong> wird berechnet, sobald man zusammensitzen möchte. Und <strong>Handgepäck</strong> über eine kleine Tasche hinaus ist bei mehreren Airlines kostenpflichtig und wird beim Abflug in Marrakesch streng kontrolliert.</p>
<div class="callout">
<span class="callout-label">Die richtige Rechnung</span>
<p>Rechnen Sie immer Hin- und Rückflug zusammen, bevor Sie vergleichen. Ein Billig-Hin-und-Rückflug für 79 € wird mit zwei Koffern und reservierten Sitzen zu 179 €: Auf diesem Niveau ist eine klassische Airline mit Gepäck und Tagesflügen wieder konkurrenzfähig.</p>
</div>

<h2>Die richtige Ankunftszeit wählen</h2>
<p>Viele Billigflüge landen zwischen 20 Uhr und Mitternacht, zur Stoßzeit des Flughafens. Dann ist die Passkontrolle langsamer, das Taxi fährt zum Nachttarif und der Bus 19 fährt nur bis etwa 23:30 Uhr. Bei ähnlichem Preis spart eine Landung am Mittag eine halbe Stunde am Ausgang. Landen Sie spät, buchen Sie einen <a href="/de/book-transfer/">Transfer</a>: Der Fahrer verfolgt den Flug und wartet bei Verspätung.</p>

<h2>Inlands- und Langstreckenflüge ab Marrakesch</h2>
<p>Innerhalb Marokkos verbindet Royal Air Maroc Marrakesch mit <strong>Casablanca</strong>, <strong>Dakhla</strong> und <strong>Laâyoune</strong>, Ryanair fliegt direkt nach <strong>Fès</strong>, <strong>Tanger</strong>, <strong>Tétouan</strong>, <strong>Oujda</strong> und <strong>Errachidia</strong>. Nach Agadir, Essaouira oder Ouarzazate gibt es keine Flüge: Die Straße ist einfacher (siehe <a href="/de/blog/distance-essaouira-marrakech-airport/">Marrakesch–Essaouira</a> und <a href="/de/blog/distance-agadir-marrakech-airport/">Marrakesch–Agadir</a>).</p>
<p>Weiter weg ist der Flughafen Marrakesch-Menara mit <strong>Montreal</strong> (Air Transat) und saisonal mit <strong>Atlanta</strong> (Delta) und <strong>New York-Newark</strong> (United) verbunden. Qatar Airways nach <strong>Doha</strong> und Turkish Airlines nach <strong>Istanbul</strong> öffnen Anschlüsse nach Asien und in die Golfregion.</p>
`,
  faqHeading: "Flüge zum Flughafen Marrakesch: häufige Fragen",
  faqs: [
    { q: "Welche Airlines fliegen zum Flughafen Marrakesch?", a: "39 Airlines bedienen den Flughafen Marrakesch-Menara. Ryanair ist mit mehr als 50 Strecken die größte, vor easyJet, Transavia und Royal Air Maroc. Außerdem fliegen Discover Airlines, Eurowings, Austrian, Edelweiss, Wizz Air, Air France, Turkish Airlines und Qatar Airways." },
    { q: "Welche Airlines fliegen direkt von Deutschland nach Marrakesch?", a: "Discover Airlines ab Frankfurt und München, easyJet ab Hamburg, Ryanair ab Berlin, Köln/Bonn, Frankfurt-Hahn und Weeze sowie saisonal Eurowings ab Düsseldorf und Transavia ab Berlin." },
    { q: "Wie lange dauert ein Flug von Frankfurt nach Marrakesch?", a: "Etwa 3 Stunden 45 Minuten nonstop. Ab München rund 3 Stunden 50, ab Berlin oder Hamburg etwa 4 Stunden 15." },
    { q: "Wann ist ein Flug nach Marrakesch am günstigsten?", a: "Januar und Februar außerhalb der Schulferien sind die günstigsten Monate. Für das beste Verhältnis von Preis und Wetter wählen Sie Ende September bis Mitte November, bei 24 bis 30 °C." },
    { q: "Wie früh sollte man einen Flug nach Marrakesch buchen?", a: "Normalerweise sechs bis zehn Wochen vorher. Für Schulferien, Ostern und Weihnachten besser drei bis vier Monate: Dann steigen die Preise am schnellsten." },
    { q: "Ist Gepäck bei Billigflügen nach Marrakesch inklusive?", a: "Meist nur eine kleine Tasche unter dem Sitz. Aufgabegepäck kostet oft 25 bis 50 € pro Strecke: Vergleichen Sie immer den Gesamtpreis mit Hin- und Rückflug und Gepäck." },
    { q: "Gibt es Inlandsflüge ab Marrakesch?", a: "Ja: Royal Air Maroc nach Casablanca, Dakhla und Laâyoune, Ryanair nach Fès, Tanger, Tétouan, Oujda und Errachidia. Nach Agadir, Essaouira und Ouarzazate gibt es keine Flüge." },
    { q: "Mein Flug nach Marrakesch hat Verspätung: Habe ich Anspruch auf Entschädigung?", a: "Startet der Flug in der EU oder wird er von einer EU-Airline durchgeführt und kommt mehr als drei Stunden verspätet an, sieht die Verordnung 261/2004 400 € pro Passagier für 1.500 bis 3.500 km vor, etwa Frankfurt–Marrakesch." },
  ],
  cta: {
    heading: "Ticket gebucht? Die Ankunft organisieren",
    text: "Ein Fahrer, der Ihren Flug verfolgt, bei Verspätung wartet und Sie am Medina-Tor absetzt, das Ihrem Riad am nächsten liegt, zum Festpreis pro Fahrzeug.",
    label: "Transfer buchen",
  },
} satisfies LocalizedPage;
