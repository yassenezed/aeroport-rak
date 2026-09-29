import type { LocalizedPage } from '../types';

export default {
  title: "Abflug Flughafen Marrakesch-Menara (RAK): Live-Flüge",
  description: "Abflüge am Flughafen Marrakesch-Menara live: Flugstatus, wann Sie da sein sollten, Check-in, Kontrollen, Mehrwertsteuer-Erstattung und Anfahrt.",
  eyebrow: "Live-Anzeige · Ortszeit",
  h1: "Abflug Flughafen Marrakesch-Menara",
  lede: "Verfolgen Sie die Abflüge am Flughafen Marrakesch-Menara (RAK) in Echtzeit: Zeiten, Gates, Verspätungen und Annullierungen. Darunter: wann Sie da sein sollten, wie die Kontrollen ablaufen und wie Sie entspannt zum Terminal kommen.",
  widget: 'flights-departures',
  highlights: [
    { icon: 'clock', value: "--:--", label: "Ortszeit", live: 'clock' },
    { icon: 'clipboard', value: "Öffnet 3 Std. vor Abflug", label: "Check-in" },
    { icon: 'log-out', value: "45 Min. vor dem Start", label: "Boarding" },
  ],
  steps: {
    heading: "Abflug vom Flughafen Marrakesch-Menara: die 5 Schritte",
    intro: "Der Weg ist in Terminal 1 und Terminal 2 derselbe. Rechnen Sie zu Spitzenzeiten mit 1 bis 1,5 Stunden vom Terminaleingang bis zum Gate.",
    items: [
      { icon: 'door', title: "Zugang zum Terminal", text: "Seit März 2025 gibt es am Terminaleingang keine Scanner mehr: Sie gehen direkt in die Check-in-Halle. Halten Sie Reisepass und Bordkarte bereit." },
      { icon: 'clipboard', title: "Check-in am Flughafen Marrakesch-Menara", text: "Schalter öffnen meist 3 Stunden vor internationalen Flügen und schließen 45 bis 60 Minuten vorher. Gepäck wird am Schalter abgegeben, auch nach Online-Check-in." },
      { icon: 'passport', title: "Passkontrolle", text: "Der längste Schritt. Reisepass und Einreisestempel werden geprüft, ein Formular ist nicht nötig." },
      { icon: 'shield-check', title: "Sicherheitskontrolle", text: "Flüssigkeiten bis 100 ml pro Behälter in einem durchsichtigen Beutel; Laptop und Tablet aus der Tasche nehmen." },
      { icon: 'plane-takeoff', title: "Abfluggate", text: "Duty-free-Shops, Cafés und Lounges, dann das Gate. Das Boarding beginnt etwa 45 Minuten vor dem Start." },
    ],
  },
  services: {
    heading: "Die Abreise aus Marrakesch vorbereiten",
    intro: "Pünktlich am Terminal, entspannt warten und sorgenfrei nach Hause fliegen.",
    items: [
      { icon: 'van', key: 'bookTransfer', title: "Transfer zum Flughafen", text: "Abholung am Riad oder Hotel, Festpreis auch um 5 Uhr morgens.", cta: "Buchen" },
      { icon: 'car', key: 'transfers', title: "Taxi und Bus 19", text: "Taxipreise ab der Medina und Fahrzeiten des Busses 19 zum Flughafen.", cta: "Tarife ansehen" },
      { icon: 'parking', key: 'parking', title: "Parken am Flughafen Marrakesch", text: "Stunden- und Tagestarife und wo Sie einen Passagier absetzen.", cta: "Parken ansehen" },
      { icon: 'star', key: 'vipLounges', title: "VIP-Lounges am Flughafen Marrakesch-Menara", text: "Zugang, Preise und Leistungen der Lounges im Abflugbereich.", cta: "Entdecken" },
      { icon: 'shield-check', key: 'fastTrack', title: "Fast Track", text: "Zu Spitzenzeiten über eine eigene Spur durch die Kontrollen.", cta: "Mehr erfahren" },
      { icon: 'alert', key: 'compensation', title: "Verspätung oder Annullierung", text: "Ihre Rechte und mögliche Entschädigung je nach Airline.", cta: "Rechte prüfen" },
    ],
  },
  body: `
<h2>So lesen Sie die Abflugtafel des Flughafens Marrakesch-Menara</h2>
<p>Die Tafel oben zeigt alle Abflüge am Flughafen Marrakesch-Menara in <strong>Ortszeit Marrakesch</strong>. Jede Zeile nennt planmäßige Zeit, Ziel, Flugnummer, Airline und Status, laufend aktualisiert.</p>
<ul>
<li><strong>Geplant / Pünktlich</strong>: Der Flug startet planmäßig. Der Check-in ist eventuell noch nicht geöffnet.</li>
<li><strong>Check-in</strong>: Die Schalter sind offen; gehen Sie direkt hin, wenn Sie Aufgabegepäck haben.</li>
<li><strong>Boarding / Letzter Aufruf</strong>: Die Passagiere steigen ein. Beim letzten Aufruf schließt das Gate in wenigen Minuten.</li>
<li><strong>Verspätet / Annulliert</strong>: Die erwartete Zeit ersetzt die geplante. Folgen Sie den Anweisungen der Airline per SMS oder App.</li>
<li><strong>Gestartet</strong>: Das Flugzeug hat das Gate verlassen.</li>
</ul>
<p>Um einen Flug nach Marrakesch zu verfolgen, sehen Sie die <a href="/de/arrivals/">Ankunftstafel des Flughafens Marrakesch</a>.</p>

<h2>Wann sollte man für einen Abflug in Marrakesch am Flughafen sein?</h2>
<p>Die Regel, die funktioniert: <strong>2,5 bis 3 Stunden vor einem Flug nach Europa</strong>, 3 Stunden in der Hochsaison oder mit Aufgabegepäck. Nicht der Check-in bremst, sondern die Pass- und die Sicherheitskontrolle, das Nadelöhr des Flughafens.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Flugart</th><th>Empfohlene Ankunft</th><th>Warum</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Europa, mit Aufgabegepäck</strong></td><td class="num">3 Std. vorher</td><td>Gepäckabgabe, dann Pass- und Sicherheitskontrolle</td></tr>
<tr><td><strong>Europa, nur Handgepäck</strong></td><td class="num">2,5 Std. vorher</td><td>Online-Bordkarte, aber dieselben Kontrollen</td></tr>
<tr><td><strong>Hochsaison, Ferien, Ramadan</strong></td><td class="num">3,5 Std. vorher</td><td>Längere Schlangen an der Passkontrolle</td></tr>
<tr><td><strong>Inlandsflug (Casablanca …)</strong></td><td class="num">1,5 Std. vorher</td><td>Keine Passkontrolle</td></tr>
</tbody>
</table>
</div>
<p>Die Schalter schließen meist 45 bis 60 Minuten vor dem Start, das Gate 20 Minuten vorher. Wer zu spät kommt, verpasst den Flug, auch wenn das Flugzeug noch am Boden steht.</p>

<h2>Die Stoßzeiten beim Abflug</h2>
<p>Zwei Abflugwellen füllen das Terminal. Die erste, <strong>zwischen 6 und 9 Uhr</strong>, sind die Maschinen, die in Marrakesch übernachtet haben und früh nach Europa zurückfliegen. Die zweite baut sich am späten Nachmittag und Abend auf, wenn die Billigflieger im Takt starten. Fällt Ihr Flug in eines dieser Fenster, planen Sie eine halbe Stunde mehr ein oder buchen Sie den <a href="/de/blog/fast-track-marrakech-airport/">Fast Track am Flughafen Marrakesch</a> mit eigener Spur.</p>

<h2>Terminal 1 oder Terminal 2: wohin?</h2>
<p>Der Flughafen Marrakesch-Menara hat zwei nebeneinanderliegende Terminals, die zu Fuß verbunden sind. <strong>Terminal 1</strong> wickelt die meisten internationalen Flüge ab, <strong>Terminal 2</strong> den Rest, darunter einen Teil der Inlands- und Charterflüge. Die Zuteilung hängt von Airline und Saison ab: Das Terminal steht auf Ihrer Bordkarte und auf der Abflugtafel. Im Zweifel gehen Sie zu T1; T2 ist wenige Gehminuten entfernt. Den genauen Plan finden Sie in unserem <a href="/de/airport-guide/">Ratgeber zum Flughafen Marrakesch</a>.</p>

<h2>Anfahrt zum Flughafen Marrakesch für Ihren Flug</h2>
<p>Der Flughafen liegt 6 km von der Medina entfernt, je nach Tageszeit 15 bis 30 Minuten Fahrt. Rechnen Sie die Zeit hinzu, mit dem Koffer zum nächstgelegenen Medina-Tor Ihres Riads zu laufen.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Preis</th><th>Dauer</th><th>Gut zu wissen</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong><a href="/de/book-transfer/">Gebuchter Transfer</a></strong></td><td class="num">ab 27 € / Fahrzeug</td><td class="num">15–30 Min.</td><td>Abholung zur vereinbarten Zeit, auch vor Sonnenaufgang</td></tr>
<tr><td><strong>Petit Taxi</strong></td><td class="num">70–150 MAD (Tag)</td><td class="num">15–30 Min.</td><td>Nachts teurer; Preis vor dem Einsteigen vereinbaren</td></tr>
<tr><td><strong><a href="/de/blog/bus-19-alsa-marrakech/">Bus 19 (ALSA)</a></strong></td><td class="num">30 MAD / Person</td><td class="num">≈ 20 Min.</td><td>Ab Jemaa el-Fna und Gueliz, kein Frühbetrieb</td></tr>
<tr><td><strong>Mietwagen</strong></td><td class="num">—</td><td class="num">15–30 Min.</td><td>30 Minuten extra für die Rückgabe einplanen</td></tr>
</tbody>
</table>
</div>
<p>Für einen Flug vor 9 Uhr buchen Sie die Fahrt <strong>am Vortag</strong>, über das Riad oder als <a href="/de/book-transfer/">Transfer</a>: Um 5 Uhr morgens in einer Gasse ein Taxi zu finden, ist alles andere als sicher, und bis Sonnenaufgang gilt der Nachttarif. Tarifdetails auf der Seite <a href="/de/transfers/">Transfers und Taxis am Flughafen</a> und in unseren <a href="/de/blog/taxi-tips-marrakech/">Taxi-Tipps für Marrakesch</a>.</p>

<h2>Jemanden absetzen oder parken</h2>
<p>Die Kurzhaltezone vor dem Terminal ist nur für sehr kurze Stopps gedacht. Um jemanden bis zum Schalter zu begleiten, nutzen Sie den <a href="/de/parking/">Flughafenparkplatz</a>: etwa 20 MAD pro Stunde, 70 bis 80 MAD pro Tag.</p>

<h2>Dirham, Souvenirs und Gepäck: was Sie wissen sollten</h2>
<p>Dirham dürfen nur in symbolischer Höhe ausgeführt werden: Tauschen Sie Ihre letzten Scheine <em>vor</em> der Passkontrolle in den Wechselstuben der öffentlichen Halle und bewahren Sie den Beleg Ihres ersten Umtauschs auf. Bei Souvenirs gilt: Arganöl, Gewürze und Kosmetik in Behältern über 100 ml gehören ausnahmslos ins Aufgabegepäck. Keramik reist ohne gute Verpackung schlecht; die meisten Händler der Medina verpacken auf Wunsch flugtauglich. Mehr Tipps in unserem Ratgeber <a href="/de/blog/money-in-morocco/">Geld und Umtausch in Marokko</a>.</p>
<div class="callout">
<span class="callout-label">Mehrwertsteuer-Erstattung</span>
<p>Marokko erstattet Nichtansässigen die Mehrwertsteuer auf bestimmte Einkäufe bei zugelassenen Händlern. Das Formular muss am Zollschalter des Flughafens <strong>vor</strong> der Gepäckaufgabe abgestempelt werden, die Ware muss vorgezeigt werden können. Das lohnt sich für einen Teppich oder Silberarbeiten, selten für Babuschen.</p>
</div>

<h2>Im Abflugbereich: Shops, Lounges und WLAN</h2>
<p>Nach der Sicherheitskontrolle bietet der Abflugbereich Duty-free-Shops, Cafés und Restaurants sowie kostenloses WLAN, das zu Spitzenzeiten überlastet sein kann. Er füllt sich zu denselben Zeiten wie die Schlangen: Wenn Sie spät am Tag abfliegen oder lange Umsteigezeit haben, macht der Zugang zu einer der <a href="/de/blog/marrakech-airport-vip-lounges/">VIP-Lounges am Flughafen Marrakesch</a> das Warten angenehm.</p>

<h2>Verspätung oder Annullierung beim Abflug aus Marrakesch</h2>
<p>Bei Flügen ab Marokko gilt die EU-Verordnung 261/2004, wenn die Airline europäisch ist (Ryanair, Eurowings, Discover Airlines, easyJet, Transavia …): Ab drei Stunden Ankunftsverspätung beträgt die Entschädigung <strong>400 € pro Passagier</strong> für eine Strecke von 1.500 bis 3.500 km wie Marrakesch–Frankfurt. Nicht-europäische Airlines ab Marrakesch fallen nicht darunter. Prüfen Sie Ihren Fall auf unserer Seite <a href="/de/flight-compensation/">Flugentschädigung</a>. Betrieben wird der Flughafen vom <a href="https://www.onda.ma/" target="_blank" rel="noopener">Office National des Aéroports (ONDA)</a>.</p>
`,
  faqHeading: "Abflug am Flughafen Marrakesch: häufige Fragen",
  faqs: [
    { q: "Wie früh sollte ich vor meinem Flug am Flughafen Marrakesch sein?", a: "2,5 bis 3 Stunden vor einem Flug nach Europa, 3,5 Stunden in der Hochsaison. Die Passkontrolle bei der Ausreise ist das Nadelöhr, vor allem zwischen 6 und 9 Uhr und am späten Nachmittag. Für einen Inlandsflug genügen 1,5 Stunden." },
    { q: "Wann öffnet der Check-in am Flughafen Marrakesch?", a: "Meist 3 Stunden vor internationalen Flügen; er schließt je nach Airline 45 bis 60 Minuten vor Abflug. Auch nach Online-Check-in wird das Aufgabegepäck am Schalter abgegeben." },
    { q: "Von welchem Terminal fliegt mein Flug in Marrakesch-Menara ab?", a: "Die meisten internationalen Flüge starten von Terminal 1, Terminal 2 wickelt einen Teil der Inlands- und Charterflüge ab. Das Terminal steht auf Ihrer Bordkarte und der Abflugtafel; beide Terminals sind zu Fuß verbunden." },
    { q: "Darf man Dirham aus Marokko ausführen?", a: "Nein, der Dirham darf nur in symbolischer Höhe ausgeführt werden. Tauschen Sie Ihre Scheine in den Wechselstuben der öffentlichen Halle vor der Passkontrolle und bewahren Sie den Beleg Ihres ersten Umtauschs auf." },
    { q: "Darf Arganöl ins Handgepäck?", a: "Nur in Behältern bis 100 ml in einem durchsichtigen Plastikbeutel. Größere Mengen, auch Arganöl, flüssige Gewürze und Kosmetik, müssen ins Aufgabegepäck. Duty-free-Einkäufe nach der Sicherheitskontrolle sind nicht betroffen." },
    { q: "Was kostet ein Taxi von der Medina zum Flughafen Marrakesch?", a: "Rechnen Sie tagsüber mit 70 bis 150 MAD im Petit Taxi, nachts mit mehr; vereinbaren Sie den Preis vor dem Einsteigen. Für einen frühen Abflug buchen Sie am Vortag einen Transfer oder den Fahrer Ihres Riads." },
    { q: "Gibt es am Flughafen Marrakesch eine Mehrwertsteuer-Erstattung?", a: "Ja, für Nichtansässige bei Einkäufen in zugelassenen Geschäften. Das Formular muss vor der Gepäckaufgabe am Zollschalter abgestempelt werden, die Ware muss vorzeigbar sein." },
    { q: "Mein Flug ab Marrakesch hat Verspätung: Habe ich Anspruch auf Entschädigung?", a: "Ja, wenn die Airline europäisch ist und die Ankunftsverspätung drei Stunden übersteigt: 400 € pro Passagier für 1.500 bis 3.500 km, außer bei außergewöhnlichen Umständen. Nicht-europäische Airlines ab Marokko unterliegen der Verordnung 261/2004 nicht." },
  ],
  cta: {
    heading: "Ihre Fahrt zum Flughafen, am Vortag geregelt",
    text: "Ein Fahrer am richtigen Medina-Tor zur vereinbarten Zeit, Festpreis, auch um 5 Uhr morgens. Kostenlose Stornierung bei den meisten Buchungen.",
    label: "Rücktransfer buchen",
  },
} satisfies LocalizedPage;
