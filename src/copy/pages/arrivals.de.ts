import type { LocalizedPage } from '../types';

export default {
  title: "Ankunft Flughafen Marrakesch-Menara (RAK): Live-Flüge",
  description: "Ankünfte am Flughafen Marrakesch-Menara live: Flugzeiten und Status, Verspätungen, Passkontrolle, Gepäck, dann Taxi oder Transfer in die Stadt.",
  eyebrow: "Live-Anzeige · Ortszeit",
  h1: "Ankunft Flughafen Marrakesch-Menara",
  lede: "Verfolgen Sie die Ankünfte am Flughafen Marrakesch-Menara (RAK) in Echtzeit: planmäßige Zeit, erwartete Zeit, Verspätungen und Landungen. Darunter alles, was zwischen Fluggastbrücke und Bordstein passiert, und wie Sie in die Stadt kommen.",
  widget: 'flights-arrivals',
  highlights: [
    { icon: 'clock', value: "--:--", label: "Ortszeit", live: 'clock' },
    { icon: 'cloud', value: "— °C", label: "Wetter in Marrakesch", live: 'weather' },
    { icon: 'map-pin', value: "Terminal 1 & 2", label: "Ankunftsterminals" },
  ],
  steps: {
    heading: "Ankunft am Flughafen Marrakesch-Menara: die 4 Schritte",
    intro: "Der Weg ist in Terminal 1 und Terminal 2 derselbe. Was sich ändert, ist der Andrang: Ein Flug, der um 22 Uhr landet, ist etwas ganz anderes als einer um 14 Uhr.",
    items: [
      { icon: 'passport', title: 'Passkontrolle in Marrakesch-Menara', text: "Reisepass und Einreisekarte, die an Bord verteilt wird. Kein Visum für Touristen aus der EU, der Schweiz, Großbritannien, den USA und Kanada (90 Tage). 15 bis 40 Minuten je nach Uhrzeit." },
      { icon: 'luggage', title: 'Gepäckausgabe', text: "Die Bänder liegen direkt nach der Kontrolle. Die Bandnummer steht auf den Bildschirmen; rechnen Sie bei Abendflügen mit 20 bis 30 Minuten." },
      { icon: 'shield-check', title: 'Zoll', text: "Meist zügig, mit Stichproben. Bargeld muss erst ab 100.000 MAD angemeldet werden. Drohnen und Funkgeräte werden einbehalten." },
      { icon: 'door', title: 'Ankunftshalle des Flughafens', text: "Geldautomaten, Wechselstuben, SIM-Karten und Mietwagenschalter, dann der Ausgang zum Taxistand, zu den Fahrern und Parkplätzen." },
    ],
  },
  services: {
    heading: "Vom Flughafen Marrakesch-Menara in die Stadt",
    intro: "So verlassen Sie den Flughafen Marrakesch-Menara und starten gut in den Aufenthalt – mit geprüften Preisen.",
    items: [
      { icon: 'van', key: 'bookTransfer', title: 'Privattransfer ab Flughafen', text: "Fahrer mit Namensschild, Flugverfolgung, Festpreis pro Fahrzeug ab 27 €.", cta: 'Buchen' },
      { icon: 'car', key: 'transfers', title: 'Taxi und Bus 19', text: "Offizielle Taxitarife tagsüber und nachts, Fahrplan des Busses 19.", cta: 'Tarife ansehen' },
      { icon: 'tag', key: 'carRental', title: 'Mietwagen', text: "Schalter in der Ankunftshalle, Kaution und Vertragsfallen.", cta: 'Vergleichen' },
      { icon: 'sim', key: 'esim', title: 'eSIM Marokko', text: "Internet ab der Landung, um Ihren Fahrer zu erreichen.", cta: 'eSIM wählen' },
      { icon: 'wallet', key: 'money', title: 'Geld und Umtausch', text: "Geldautomaten, Wechselstuben und welche Scheine Sie abheben.", cta: 'Ratgeber lesen' },
      { icon: 'alert', key: 'compensation', title: 'Verspäteter Flug', text: "Bis zu 400 € Entschädigung bei den meisten Flügen aus Europa.", cta: 'Rechte prüfen' },
    ],
  },
  body: `
<h2>So lesen Sie die Ankunftstafel des Flughafens Marrakesch-Menara</h2>
<p>Die Tafel oben zeigt alle ankommenden Flüge am Flughafen Marrakesch-Menara, über alle Airlines hinweg. Die Zeiten sind in <strong>Ortszeit Marrakesch</strong> angegeben, nicht in der Zeit Ihres Abflugortes: Das ist die häufigste Quelle für Verwirrung, wenn man jemanden abholt.</p>
<ul>
<li><strong>Geplant</strong>: die von der Airline festgelegte Zeit. Sie ändert sich nicht, auch nicht bei Verspätung.</li>
<li><strong>Erwartet</strong>: die im Flug neu berechnete Landezeit. Auf diese Zeit kommt es an.</li>
<li><strong>Gelandet</strong>: Die Maschine ist am Boden. Rechnen Sie 30 bis 60 Minuten, bis der Passagier herauskommt.</li>
<li><strong>Verspätet / Annulliert / Umgeleitet</strong>: Wenden Sie sich an die Airline; ein umgeleiteter Flug landet meist in Casablanca oder Agadir.</li>
</ul>
<p>Für einen Flug ab Marrakesch sehen Sie die Tafel der <a href="/de/departures/">Abflüge am Flughafen Marrakesch</a>.</p>

<h2>Ankunftszeiten: wann am Flughafen Marrakesch am meisten los ist</h2>
<p>Der Flughafen Marrakesch-Menara empfängt seine Flüge in Wellen. Eine erste Welle landet am späten Vormittag und frühen Nachmittag mit Flügen, die früh in Europa gestartet sind. Die eigentliche Spitze liegt aber <strong>zwischen 20 Uhr und Mitternacht</strong>, wenn Billigflieger aus Deutschland, Frankreich, Spanien, Italien und Großbritannien im Minutentakt landen. Dann kommen mehrere Maschinen in derselben halben Stunde an, und die Schlange an der Passkontrolle wächst.</p>
<p>Wenn Sie die Wahl haben, spart Ihnen ein Flug mit Landung zwischen 13 und 17 Uhr eine halbe Stunde am Ausgang. Kommen Sie abends an, bringt Sie der <a href="/de/blog/fast-track-marrakech-airport/">Fast-Track-Service am Flughafen Marrakesch</a> über eine eigene Spur durch die Kontrollen.</p>

<h2>Airlines und Herkunft der Flüge zum Flughafen Marrakesch-Menara</h2>
<p>Die meisten Flüge nach Marrakesch kommen aus Europa. Je nach Saison stehen auf der Tafel unter anderem <strong>Ryanair</strong>, <strong>Discover Airlines</strong>, <strong>Eurowings</strong>, <strong>Condor</strong>, <strong>easyJet</strong>, <strong>TUI fly</strong>, <strong>Royal Air Maroc</strong>, <strong>Transavia</strong>, <strong>Wizz Air</strong> und <strong>Air France</strong>.</p>
<ul>
<li><strong>Deutschland, Österreich, Schweiz</strong>: Frankfurt, München, Berlin, Düsseldorf, Köln/Bonn, Hamburg, Wien, Zürich, Genf, Basel.</li>
<li><strong>Frankreich und Benelux</strong>: Paris, Lyon, Marseille, Toulouse, Brüssel, Amsterdam, Eindhoven.</li>
<li><strong>Großbritannien, Spanien, Italien</strong>: London, Manchester, Madrid, Barcelona, Sevilla, Mailand, Rom, Bologna.</li>
<li><strong>Marokko und Naher Osten</strong>: Casablanca sowie saisonale Verbindungen in die Golfregion.</li>
</ul>
<p>Einen Flug nach Marrakesch ab Ihrer Stadt finden Sie mit unserem <a href="/de/flights/">Flugvergleich</a>.</p>

<h2>Einreise: Reisepass, Visum und Einreisekarte</h2>
<p>Staatsangehörige der EU, der Schweiz, Großbritanniens, der USA und Kanadas reisen <strong>für touristische Aufenthalte bis zu 90 Tagen ohne Visum</strong> nach Marokko ein, mit einem Reisepass, der für den gesamten Aufenthalt gültig ist. Ein Personalausweis reicht nicht. Die Einreisekarte wird an Bord verteilt: Füllen Sie sie während des Fluges mit der Adresse Ihrer Unterkunft aus, damit Sie nicht in letzter Minute die Schlange verlassen müssen. Kinder, die mit nur einem Elternteil reisen, sollten eine Einverständniserklärung des anderen Elternteils dabeihaben.</p>

<h2>Geld abheben am Flughafen Marrakesch</h2>
<p>Diesen Schritt sollten Sie nicht auslassen. Taxis nehmen keine Karten, und Dirham gibt es außerhalb Marokkos nicht zu kaufen: Die Ankunftshalle ist Ihre erste Wechselstelle. Die Automaten funktionieren gut, geben aber gern 200-MAD-Scheine aus. Heben Sie genug für die Fahrt und die ersten Tage ab und wechseln Sie einen Schein im Terminal-Café: Mit 50- und 100-MAD-Scheinen vermeiden Sie Diskussionen über Wechselgeld im Taxi. Alle Tipps finden Sie in unserem Ratgeber <a href="/de/blog/money-in-morocco/">Geld und Umtausch in Marokko</a>.</p>

<h2>Vom Flughafen Marrakesch-Menara weg: Taxi, Transfer oder Bus 19</h2>
<p>Sie werden angesprochen, bevor Sie die Tür erreichen. Das ist selten aufdringlich, aber man sollte darauf vorbereitet sein: Der offizielle Taxistand liegt direkt vor dem Ausgang, und seine Tafel zeigt die Tarife nach Zone. Jedes Angebot <em>innerhalb</em> des Terminals liegt außerhalb dieses Rahmens.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Preis</th><th>Dauer</th><th>Ideal für</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong><a href="/de/book-transfer/">Privattransfer</a></strong></td><td class="num">ab 27 € / Fahrzeug</td><td class="num">15–30 Min.</td><td>Riad in der Medina, Nachtankunft, Familien</td></tr>
<tr><td><strong>Offizielles Petit Taxi</strong></td><td class="num">100–150 MAD (Tag)</td><td class="num">15–30 Min.</td><td>Gueliz, Hivernage tagsüber, max. 3 Personen</td></tr>
<tr><td><strong><a href="/de/blog/bus-19-alsa-marrakech/">Bus 19 (ALSA)</a></strong></td><td class="num">30 MAD / Person</td><td class="num">≈ 20 Min.</td><td>Kleines Budget, leichtes Gepäck, vor 23:30 Uhr</td></tr>
</tbody>
</table>
</div>
<p>Für ein Hotel in Gueliz oder im Hivernage reicht tagsüber das Taxi: Vereinbaren Sie den ausgehängten Preis, bevor der Kofferraum aufgeht (siehe unsere <a href="/de/blog/taxi-tips-marrakech/">Taxi-Tipps für Marrakesch</a>). Für ein Riad in der Medina, einen Flug nach 21 Uhr oder eine Gruppe ab vier Personen legt der <a href="/de/book-transfer/">gebuchte Transfer</a> Preis, Fahrzeug und Absetztor im Voraus fest. Alle Details auf der Seite <a href="/de/transfers/">Transfers vom Flughafen</a>.</p>

<h2>Jemanden am Flughafen Marrakesch abholen</h2>
<p>Sie holen jemanden am Flughafen Marrakesch ab? Verfolgen Sie den Flug auf der Ankunftstafel und fahren Sie nach der <em>erwarteten</em> Zeit los, nicht nach der geplanten. Nur Passagiere betreten den Gepäckbereich: Gewartet wird in der öffentlichen Halle gegenüber den Ausgangstüren. Planen Sie, 20 bis 30 Minuten nach der Landung da zu sein. Mit dem Auto ist die Kurzhaltezone nur zum Ein- und Aussteigen gedacht; zum Warten nutzen Sie den <a href="/de/parking/">Flughafenparkplatz</a>, wenige Gehminuten vom Terminal entfernt.</p>

<div class="callout">
<span class="callout-label">Der Handgriff, der zwanzig Minuten spart</span>
<p>Wartet ein Fahrer auf Sie (gebuchter Transfer oder Abholung durch das Riad), ist der Treffpunkt vor der Ankunftshalle, mit einem Schild mit Ihrem Namen. Schreiben Sie ihm, sobald Sie Netz haben, noch vor dem Zoll: Eine <a href="/de/morocco-esim/">eSIM für Marokko</a>, die Sie vor dem Abflug aktivieren, erspart Ihnen die Suche nach dem Terminal-WLAN.</p>
</div>

<h2>Nachts in Marrakesch ankommen</h2>
<p>Ein großer Teil der Billigflüge landet zwischen 21 und 1 Uhr. Drei praktische Folgen: Das Taxi fährt zum Nachttarif von 150 bis 240 MAD; der Bus 19 verkehrt nach 23:30 Uhr nicht mehr; und die schwach beleuchteten Gassen der Medina sind kein Ort, um mit dem Koffer ein Riad zu suchen. Landet Ihr Flug spät, ist ein gebuchter Transfer kein Luxus: Der Fahrer verfolgt die Flugnummer und wartet bei Verspätung.</p>

<h2>Verspäteter, annullierter oder umgeleiteter Flug nach Marrakesch-Menara</h2>
<p>Erreicht Ihr Flug Marrakesch mit mehr als drei Stunden Verspätung, haben Sie möglicherweise Anspruch auf eine Entschädigung nach der EU-Verordnung 261/2004: Sie gilt für alle Flüge ab der Europäischen Union, unabhängig von der Airline. Für eine Strecke von 1.500 bis 3.500 km wie Frankfurt–Marrakesch beträgt der Betrag <strong>400 € pro Passagier</strong>. Prüfen Sie Ihre Rechte auf unserer Seite <a href="/de/flight-compensation/">Flugentschädigung</a>. Betrieben wird der Flughafen vom <a href="https://www.onda.ma/" target="_blank" rel="noopener">Office National des Aéroports (ONDA)</a>, das auch die offiziellen Fluginformationen veröffentlicht.</p>
<p>Alles zu Terminals, Services und Terminalplan finden Sie in unserem <a href="/de/airport-guide/">Ratgeber zum Flughafen Marrakesch</a>.</p>
`,
  faqHeading: "Ankünfte am Flughafen Marrakesch: häufige Fragen",
  faqs: [
    { q: "Wie erfahre ich die Ankunftszeit eines Fluges in Marrakesch?", a: "Die Ankunftstafel auf dieser Seite zeigt in Echtzeit die geplante Zeit, die erwartete Zeit und den Status jedes Fluges am Flughafen Marrakesch-Menara. Die Zeiten sind in Ortszeit Marrakesch angegeben. Verlassen Sie sich auf die erwartete Zeit, die während des Fluges neu berechnet wird." },
    { q: "Wie lange dauert es nach der Landung, bis man den Flughafen Marrakesch verlässt?", a: "In der Praxis 30 bis 60 Minuten: Die Passkontrolle dauert je nach Andrang 15 bis 40 Minuten, das Gepäck bei Abendflügen 20 bis 30 Minuten. Ankünfte zwischen 20 Uhr und Mitternacht sind am vollsten." },
    { q: "Muss man in Marrakesch eine Einreisekarte ausfüllen?", a: "Ja, bei der Ankunft wird eine Polizei-Einreisekarte verlangt. Sie wird auf den meisten Flügen an Bord verteilt: Füllen Sie sie während des Fluges mit der Adresse Ihrer Unterkunft in Marrakesch aus." },
    { q: "Gibt es Geldautomaten in der Ankunftshalle?", a: "Ja, in der öffentlichen Halle hinter dem Zoll gibt es mehrere Geldautomaten und Wechselstuben. Heben Sie vor dem Hinausgehen ab: Taxis nehmen keine Karten, und Dirham kann man außerhalb Marokkos nicht kaufen." },
    { q: "Wo wartet man auf jemanden, der am Flughafen Marrakesch ankommt?", a: "In der öffentlichen Ankunftshalle gegenüber den Ausgangstüren: Nur Passagiere haben Zugang zum Gepäckbereich. Kommen Sie 20 bis 30 Minuten nach der auf der Tafel angezeigten Landung. Mit dem Auto nutzen Sie besser den Flughafenparkplatz als die Kurzhaltezone." },
    { q: "Wo treffe ich den Fahrer meines Transfers am Flughafen Marrakesch-Menara?", a: "Vor der Ankunftshalle: Der Fahrer hält ein Schild mit Ihrem Namen, und die Buchungsbestätigung nennt den genauen Treffpunkt. Er verfolgt Ihre Flugnummer und wartet bei Verspätung." },
    { q: "Mein Flug landet nach Mitternacht: Gibt es dann noch Taxis?", a: "Ja, der Taxistand ist besetzt, solange Flüge landen. Es gilt lediglich der Nachttarif von 150 bis 240 MAD in die Medina, nach Gueliz und ins Hivernage. Der Bus 19 fährt nur bis 23:30 Uhr." },
    { q: "Mein Flug nach Marrakesch kam verspätet an: Habe ich Anspruch auf Entschädigung?", a: "Beträgt die Ankunftsverspätung mehr als drei Stunden und ist der Flug in der EU gestartet, sieht die Verordnung 261/2004 für eine Strecke von 1.500 bis 3.500 km 400 € pro Passagier vor, außer bei außergewöhnlichen Umständen wie Unwetter." },
  ],
  cta: {
    heading: "Ein Fahrer, der auf Ihren Flug wartet – nicht umgekehrt",
    text: "Flugnummernverfolgung, Wartezeit bei Verspätung inklusive, Festpreis pro Fahrzeug für bis zu sieben Personen und Absetzen am Medina-Tor, das Ihrem Riad am nächsten liegt.",
    label: 'Transfer buchen',
  },
} satisfies LocalizedPage;
