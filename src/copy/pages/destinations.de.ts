import type { LocalizedPage } from '../types';

export default {
  title: "Ziele Flughafen Marrakesch-Menara: alle Direktflüge",
  description: "Über 100 Städte im Direktflug ab Flughafen Marrakesch-Menara: 39 Airlines, 33 Länder, saisonale Strecken und Inlandsflüge. Aktuelle, filterbare Liste.",
  eyebrow: "Direktflüge · Stand September 2026",
  h1: "Ziele Flughafen Marrakesch-Menara",
  lede: "Der Flughafen Marrakesch-Menara (RAK) ist nonstop mit mehr als hundert Städten verbunden, vor allem in Europa, aber auch in Marokko, im Nahen Osten und in Nordamerika. Hier finden Sie alle Ziele, die Airlines und die saisonalen Strecken.",
  highlights: [
    { icon: 'map', value: "106 Städte", label: "Direktflug-Ziele" },
    { icon: 'plane', value: "39 Airlines", label: "Linien- und Saisonflüge" },
    { icon: 'map-pin', value: "33 Länder", label: "Auf 3 Kontinenten" },
  ],
  destinations: {
    airlinesHeading: "Die Airlines am Flughafen Marrakesch",
    airlinesIntro: "Europäische Billigflieger dominieren den Verkehr: Ryanair allein verbindet mehr als fünfzig Städte mit RAK. Hier die wichtigsten Airlines und ihre Zahl an Zielen.",
    tableHeading: "Alle Ziele ab Flughafen Marrakesch-Menara",
    tableIntro: "Nonstop angeflogene Städte mit den Airlines, die sie bedienen. Geben Sie eine Stadt, ein Land oder eine Airline ein oder filtern Sie nach Region.",
    regionsHeading: "Ziele nach Region",
  },
  services: {
    heading: "Ihren Flug nach oder ab Marrakesch planen",
    intro: "Das richtige Ticket finden und alles, was nach der Landung am Boden passiert.",
    items: [
      { icon: 'plane', key: 'flights', title: "Flüge vergleichen", text: "Preise für Direktflüge nach Marrakesch ab Ihrer Stadt.", cta: "Flug suchen" },
      { icon: 'building', key: 'hotels', title: "Hotels in Marrakesch", text: "Riads, Palasthotels und Hotels nahe dem Flughafen.", cta: "Hotels ansehen" },
      { icon: 'van', key: 'bookTransfer', title: "Flughafentransfer", text: "Fahrer mit Namensschild, Festpreis pro Fahrzeug ab 27 €.", cta: "Buchen" },
      { icon: 'tag', key: 'carRental', title: "Mietwagen", text: "Schalter im Terminal, Preise und Vertragsfallen.", cta: "Vergleichen" },
      { icon: 'plane-landing', key: 'arrivals', title: "Ankünfte live", text: "Einen in Marrakesch landenden Flug verfolgen.", cta: "Ankünfte ansehen" },
      { icon: 'plane-takeoff', key: 'departures', title: "Abflüge live", text: "Zeiten, Verspätungen und Tipps vor dem Abflug.", cta: "Abflüge ansehen" },
    ],
  },
  body: `
<h2>Direktflüge nach Deutschland und Europa ab Marrakesch</h2>
<p>Fast acht von zehn Zielen ab dem Flughafen Marrakesch liegen in Europa. Aus <strong>Deutschland</strong> fliegen Discover Airlines ab Frankfurt und München, easyJet ab Hamburg, Ryanair ab Berlin, Köln/Bonn, Frankfurt-Hahn und Weeze, Eurowings saisonal ab Düsseldorf und Transavia saisonal ab Berlin. Aus der <strong>Schweiz</strong> geht es ab Genf, Basel-Mülhausen und Zürich, aus <strong>Österreich</strong> im Winter mit Austrian ab Wien.</p>
<p><strong>Frankreich</strong> hat rund zwanzig Städte, Paris allein vier Flughäfen, gefolgt von <strong>Großbritannien</strong>, <strong>Spanien</strong> und <strong>Italien</strong>. Verbindungen nach Belgien, in die Niederlande und nach Portugal gibt es ganzjährig. Der Winter, die mildeste Jahreszeit in Marrakesch, bringt zusätzliche Flüge nach Skandinavien, Griechenland, Polen und ins Baltikum.</p>

<h2>Inlandsflüge in Marokko ab Marrakesch</h2>
<p>Royal Air Maroc verbindet Marrakesch mit <strong>Casablanca</strong>, <strong>Dakhla</strong> und <strong>Laâyoune</strong>. Ryanair fliegt nach <strong>Fès</strong>, <strong>Tanger</strong>, <strong>Tétouan</strong>, <strong>Oujda</strong> und <strong>Errachidia</strong>, oft sehr günstig. Nach Agadir, Essaouira oder Ouarzazate gibt es keine Linienflüge: Diese Städte erreichen Sie auf der Straße, siehe Tabelle unten.</p>

<h2>Langstreckenflüge: Nordamerika und Naher Osten</h2>
<p>Seit 2024 ist der Flughafen Marrakesch-Menara nonstop mit Nordamerika verbunden: <strong>Montreal</strong> mit Air Transat, saisonal <strong>Atlanta</strong> mit Delta und <strong>New York-Newark</strong> mit United. Richtung Osten bedient Qatar Airways <strong>Doha</strong> und Turkish Airlines <strong>Istanbul</strong>, zwei Drehkreuze für Anschlüsse nach Asien. Saudia fliegt saisonal nach <strong>Dschidda</strong>, Royal Air Maroc nach <strong>Medina</strong>.</p>

<h2>Saisonflüge: was sich zwischen Sommer und Winter ändert</h2>
<p>Der Flugplan wechselt zweimal im Jahr, Ende März und Ende Oktober. Der Winter ist die stärkste Saison: Nordeuropäer fliehen vor der Kälte, und die Airlines eröffnen Strecken nach Kopenhagen, Oslo, Helsinki, Wien, Warschau oder Riga. Im Sommer ergänzt Transavia Flüge zu den Kapverden und nach Dakar, Ryanair zu den Kanaren und nach Palma. Als „saisonal“ markierte Strecken laufen nicht ganzjährig: Prüfen Sie die Daten vor der Buchung.</p>

<h2>Günstige Flüge nach oder ab Marrakesch finden</h2>
<ul>
<li><strong>Billigflieger und klassische Airlines vergleichen</strong>: Ab Frankfurt konkurrieren Discover und Ryanair (über Hahn).</li>
<li><strong>Sechs bis acht Wochen vorher buchen</strong>, früher für Schulferien, Ostern und Weihnachten, die teuersten Zeiten.</li>
<li><strong>Auf den Abflughafen achten</strong>: Hahn liegt weit von Frankfurt, Weeze weit von Düsseldorf. Das günstigere Ticket kann eine zusätzliche Anfahrt kosten.</li>
<li><strong>Auf eine Landung tagsüber achten</strong>: Abendflüge kommen zur Stoßzeit des Flughafens und nach dem letzten Bus 19 an.</li>
</ul>
<p>Unser <a href="/de/flights/">Flugvergleich für Marrakesch</a> zeigt die Preise aller Airlines. Um einen Flug in Echtzeit zu verfolgen, sehen Sie die <a href="/de/arrivals/">Ankünfte</a> und <a href="/de/departures/">Abflüge</a> des Flughafens.</p>

<h2>Vom Flughafen auf der Straße weiter</h2>
<p>In Marrakesch angekommen, erreichen Sie die großen Ziele der Region mit dem Auto oder per <a href="/de/book-transfer/">Privattransfer</a>:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Ziel</th><th>Entfernung</th><th>Fahrzeit</th><th>Privattransfer</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Medina / Jemaa el-Fna</strong></td><td class="num">6 km</td><td class="num">15–30 Min.</td><td class="num">ab 27 €</td></tr>
<tr><td><strong>Agafay-Wüste</strong></td><td class="num">30 km</td><td class="num">40–50 Min.</td><td class="num">35–55 €</td></tr>
<tr><td><strong>Ourika-Tal</strong></td><td class="num">40 km</td><td class="num">1 Std.</td><td class="num">45–65 €</td></tr>
<tr><td><strong><a href="/de/blog/distance-essaouira-marrakech-airport/">Essaouira</a></strong></td><td class="num">180 km</td><td class="num">2,5 Std.</td><td class="num">≈ 95 €</td></tr>
<tr><td><strong><a href="/de/blog/distance-ouarzazate-marrakech-airport/">Ouarzazate</a></strong></td><td class="num">200 km</td><td class="num">4 Std.</td><td class="num">120–160 €</td></tr>
<tr><td><strong><a href="/de/blog/distance-casablanca-marrakech-airport/">Casablanca</a></strong></td><td class="num">240 km</td><td class="num">2,5 Std.</td><td class="num">130–170 €</td></tr>
<tr><td><strong><a href="/de/blog/distance-agadir-marrakech-airport/">Agadir</a></strong></td><td class="num">250 km</td><td class="num">3 Std.</td><td class="num">130–170 €</td></tr>
<tr><td><strong><a href="/de/blog/distance-fes-marrakech-airport/">Fès</a></strong></td><td class="num">530 km</td><td class="num">6 Std.</td><td class="num">auf Anfrage</td></tr>
</tbody>
</table>
</div>
<p>Die Liste der Direktflüge beruht auf den veröffentlichten Flugplänen der Airlines und der Streckendatenbank von <a href="https://de.wikipedia.org/wiki/Flughafen_Marrakesch-Menara" target="_blank" rel="noopener">Wikipedia</a>. Offizielle Flugzeiten veröffentlicht das <a href="https://www.onda.ma/" target="_blank" rel="noopener">ONDA</a>, der Betreiber des Flughafens.</p>
`,
  faqHeading: "Ziele ab Flughafen Marrakesch: häufige Fragen",
  faqs: [
    { q: "Wie viele Direktziele gibt es ab dem Flughafen Marrakesch?", a: "Der Flughafen Marrakesch-Menara ist nonstop mit 106 Städten in 33 Ländern verbunden, bedient von 39 Airlines, saisonale Strecken eingeschlossen. Die große Mehrheit der Ziele liegt in Europa." },
    { q: "Welche Airlines fliegen nach Marrakesch?", a: "Ryanair ist mit mehr als fünfzig Zielen mit Abstand die größte, vor easyJet, Transavia und Royal Air Maroc. Außerdem fliegen Discover Airlines, Eurowings, Wizz Air, Volotea, TUI, Vueling, British Airways, Air France, Turkish Airlines, Qatar Airways und Air Transat." },
    { q: "Welche Airlines fliegen direkt von Deutschland nach Marrakesch?", a: "Discover Airlines ab Frankfurt und München, easyJet ab Hamburg, Ryanair ab Berlin, Köln/Bonn, Frankfurt-Hahn und Weeze sowie saisonal Eurowings ab Düsseldorf und Transavia ab Berlin." },
    { q: "Wie lange dauert ein Flug von Frankfurt nach Marrakesch?", a: "Etwa 3 Stunden 45 Minuten nonstop, je nach Wind. Ab München rechnen Sie mit rund 3 Stunden 50, ab Berlin oder Hamburg mit etwa 4 Stunden 15." },
    { q: "Gibt es Direktflüge zwischen Marrakesch und Nordamerika?", a: "Ja: Air Transat fliegt ganzjährig nach Montreal, Delta saisonal nach Atlanta und United nach New York-Newark. Rechnen Sie mit etwa 7 Stunden Flugzeit zur Ostküste." },
    { q: "Welche Inlandsflüge starten in Marrakesch?", a: "Royal Air Maroc fliegt nach Casablanca, Dakhla und Laâyoune; Ryanair verbindet Fès, Tanger, Tétouan, Oujda und Errachidia. Nach Agadir, Essaouira und Ouarzazate gibt es keine Linienflüge, sie sind per Straße erreichbar." },
    { q: "Kann man von Marrakesch nach Essaouira oder Agadir fliegen?", a: "Nein, es gibt keine Linienflüge. Essaouira liegt 2,5 Stunden, Agadir 3 Stunden über die Autobahn entfernt; ein Privattransfer oder ein CTM-Bus ab Marrakesch ist die einfachste Lösung." },
    { q: "Ändern sich die Ziele je nach Saison?", a: "Ja. Der Flugplan wechselt Ende März und Ende Oktober. Der Winter bringt Strecken nach Nordeuropa, der Sommer Flüge zu den Kanaren, den Kapverden und nach Dakar. Saisonale Strecken sind in der Tabelle markiert." },
  ],
  cta: {
    heading: "Sie landen in Marrakesch? Ihr Fahrer wartet",
    text: "Medina, Agafay, Ourika oder Essaouira: Festpreis pro Fahrzeug, Flugverfolgung und Wartezeit bei Verspätung inklusive.",
    label: "Transfer buchen",
  },
} satisfies LocalizedPage;
