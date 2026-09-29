import type { LocalizedPage } from '../types';

export default {
  title: "Services am Flughafen Marrakesch-Menara: WLAN, Geld, Lounges",
  description: "Services am Flughafen Marrakesch-Menara: Geldautomaten, Wechsel, SIM und eSIM, WLAN, VIP-Lounges, Gepäckaufbewahrung, Folierung, Sanitätsdienst, Assistenz.",
  eyebrow: "Marrakesch-Menara · Services",
  h1: "Services Flughafen Marrakesch-Menara",
  lede: "Geld, Internet, Lounges, Gepäck, Gesundheit: alles, was Sie in den Terminals des Flughafens Marrakesch-Menara tatsächlich finden, wo es ist und was Sie vor dem Verlassen der Halle erledigen sollten.",
  highlights: [
    { icon: 'building', value: "T1 · T2", label: "Zwei Terminals, zu Fuß verbunden" },
    { icon: 'wifi', value: "Kostenlos", label: "WLAN in den Terminals" },
    { icon: 'medical', value: "24/7", label: "Medizinischer Notdienst" },
  ],
  cardSections: [
    {
      eyebrow: "Wichtige Services",
      heading: "Die wichtigsten Services am Flughafen Marrakesch-Menara",
      intro: "Was Sie gleich nach der Landung brauchen und wo Sie es im Terminal finden.",
      variant: 'feature',
      items: [
        { icon: 'wallet', title: "Geld und Umtausch", text: "Geldautomaten und Wechselstuben in der Ankunftshalle und im Abflugbereich. Dirham gibt es außerhalb Marokkos nicht: Heben Sie vor dem Hinausgehen ab.", tags: ["Visa & Mastercard", "Wechsel", "MAD"], link: { key: 'money', label: "Unser Geld-Ratgeber" } },
        { icon: 'sim', title: "SIM, eSIM und WLAN", text: "Schalter von Maroc Telecom, Orange und inwi in der Ankunftshalle, Reisepass nötig. Das Gratis-WLAN hilft im Notfall; eine vorab aktivierte eSIM spart die Schlange.", tags: ["4G", "eSIM", "Gratis-WLAN"], link: { key: 'esim', label: "eSIM wählen" } },
        { icon: 'star', title: "VIP-Lounges", text: "Pearl Lounge, die Lounge von Royal Air Maroc und der ONDA-Service Convives de Marque bieten Sitze, WLAN, Steckdosen und ein leichtes Buffet, auch gegen Gebühr.", tags: ["WLAN", "Buffet", "Kostenpflichtig"], link: { key: 'vipLounges', label: "Zugang und Preise" } },
        { icon: 'medical', title: "Gesundheit und Notfälle", text: "Ein medizinischer Notdienst ist rund um die Uhr am Flughafen im Einsatz. Nehmen Sie Medikamente mit Rezept ins Handgepäck, nicht ins Aufgabegepäck.", tags: ["24/7", "Erste Hilfe"] },
        { icon: 'accessibility', title: "Hilfe bei eingeschränkter Mobilität", text: "Rollstuhl und Begleitung vom Flugzeug bis zum Ausgang. Beantragen Sie den Service bei Ihrer Airline mindestens 48 Stunden vor dem Flug.", tags: ["Rollstuhl", "Begleitung", "48 Std. vorher"] },
        { icon: 'shield-check', title: "Fast Track", text: "Bevorzugter Durchgang bei den Kontrollen, mit Begleitung durch einen Mitarbeiter. Vor allem bei abendlichen Ankünften nützlich, wenn die Schlangen wachsen.", tags: ["Priority Lane", "Ankunft und Abflug"], link: { key: 'fastTrack', label: "Lohnt sich das?" } },
      ],
    },
    {
      eyebrow: "Annehmlichkeiten",
      heading: "Annehmlichkeiten im Terminal",
      intro: "Zum Warten, Essen, Beten oder um Ihren Fahrer zu treffen.",
      variant: 'compact',
      items: [
        { icon: 'shop', title: "Duty-free-Shops", text: "Parfüm, Kosmetik, Kunsthandwerk und lokale Produkte, vor allem nach der Sicherheitskontrolle." },
        { icon: 'coffee', title: "Cafés und Gastronomie", text: "Cafés im öffentlichen Bereich, mehr Auswahl im Abflugbereich, zu Flughafenpreisen." },
        { icon: 'prayer', title: "Gebetsräume", text: "In beiden Terminals, im öffentlichen Bereich und im Abflugbereich." },
        { icon: 'baby', title: "Familienbereiche", text: "Wickelmöglichkeiten und Wasserstellen für Reisen mit kleinen Kindern." },
        { icon: 'wifi', title: "Kostenloses WLAN", text: "Offenes Netz in den Terminals, zu Stoßzeiten langsamer." },
        { icon: 'sim', title: "Mobilfunkschalter", text: "Maroc Telecom, Orange und inwi verkaufen Touristentarife bei der Ankunft." },
        { icon: 'tag', title: "Mietwagenschalter", text: "Internationale und lokale Anbieter in der Ankunftshalle." },
        { icon: 'van', title: "Treffpunkt Fahrer", text: "Die Fahrer warten vor der Ankunftshalle mit einem Schild mit Ihrem Namen." },
      ],
    },
    {
      eyebrow: "Gepäck",
      heading: "Gepäckservices am Flughafen Marrakesch",
      intro: "Einen Koffer abgeben, ihn schützen oder schnell reagieren, wenn er nicht ankommt.",
      variant: 'feature',
      items: [
        { icon: 'lock', title: "Gepäckaufbewahrung", text: "Eine Gepäckaufbewahrung in der Ankunftshalle verwahrt Ihre Koffer einige Stunden oder einen Tag: praktisch bei einem Aufenthalt oder einem Abendflug.", tags: ["Ankunftshalle", "Kostenpflichtig"], link: { key: 'layover', label: "Aufenthalt in Marrakesch" } },
        { icon: 'luggage', title: "Koffer-Folierung", text: "Schalter bieten an, Ihr Gepäck vor dem Check-in in Folie einzuwickeln, zum Schutz vor Stößen und Öffnen.", tags: ["Vor dem Check-in", "Kostenpflichtig"] },
        { icon: 'trolley', title: "Gepäckwagen und Träger", text: "Gepäckwagen stehen in den Hallen bereit. Auch Träger bieten ihre Dienste an: Vereinbaren Sie den Preis, bevor Sie ihnen Ihr Gepäck überlassen.", tags: ["Gepäckwagen", "Träger"] },
        { icon: 'alert', title: "Gepäck verloren oder beschädigt", text: "Melden Sie es am Gepäckschalter Ihrer Airline, bevor Sie die Gepäckausgabe verlassen, mit Bordkarte und Gepäckabschnitt.", tags: ["Sofort melden", "PIR-Bericht"] },
      ],
    },
  ],
  services: {
    heading: "Vom Flughafen nach Marrakesch",
    intro: "Der Flughafen liegt 6 km von der Medina entfernt. So kommen Sie hin, mit geprüften Preisen.",
    items: [
      { icon: 'bus', key: 'bus19', title: "Bus 19 (ALSA)", text: "30 MAD pro Person, etwa 20 Minuten bis Jemaa el-Fna, letzte Abfahrt gegen 23:30 Uhr.", cta: "Fahrplan und Haltestellen" },
      { icon: 'car', key: 'transfers', title: "Offizielles Taxi", text: "100–150 MAD tagsüber, 150–240 MAD nachts, Tarife am Taxistand ausgehängt.", cta: "Taxipreise" },
      { icon: 'van', key: 'bookTransfer', title: "Privattransfer", text: "Ab 27 € pro Fahrzeug, Fahrer mit Namensschild und Flugverfolgung, auch nachts.", cta: "Buchen" },
      { icon: 'tag', key: 'carRental', title: "Mietwagen", text: "Schalter in der Ankunftshalle, ab 25 € pro Tag.", cta: "Vergleichen" },
      { icon: 'parking', key: 'parking', title: "Flughafenparkplatz", text: "Etwa 20 MAD pro Stunde und 70–80 MAD pro Tag, gegenüber den Terminals.", cta: "Parken ansehen" },
      { icon: 'plane-landing', key: 'arrivals', title: "Ankünfte live", text: "Verfolgen Sie einen Flug und die tatsächliche Landezeit, bevor Sie losfahren.", cta: "Ankünfte ansehen" },
    ],
  },
  body: `
<h2>Geld abheben am Flughafen Marrakesch</h2>
<p>Mehrere Geldautomaten und Wechselstuben befinden sich in der öffentlichen Ankunftshalle hinter dem Zoll sowie im Abflugbereich. Die Automaten akzeptieren Visa und Mastercard und berechnen eine feste Gebühr pro Abhebung: Eine größere Abhebung ist besser als drei kleine. Der Wechselkurs am Flughafen ist ordentlich, aber nicht der beste der Stadt; tauschen Sie für zwei Tage und ergänzen Sie in Guéliz, wenn Sie länger bleiben.</p>
<p>Zwei lokale Regeln: Dirham kann man außerhalb Marokkos nicht kaufen und auch nicht ausführen. Tauschen Sie übrige Scheine daher <strong>vor</strong> der Passkontrolle bei der Ausreise zurück und bewahren Sie den Beleg Ihres ersten Umtauschs auf. Alle Tipps in unserem Ratgeber <a href="/de/blog/money-in-morocco/">Geld und Umtausch in Marokko</a>.</p>

<h2>Gleich nach der Landung online</h2>
<p>Das kostenlose WLAN im Terminal reicht für eine Nachricht, mehr nicht. Um beim Verlassen erreichbar zu sein, etwa für den Fahrer oder das Riad, gibt es zwei Möglichkeiten:</p>
<ul>
<li><strong>Lokale SIM-Karte</strong>: Die Schalter von Maroc Telecom, Orange und inwi befinden sich in der Ankunftshalle. Ein Touristentarif mit Daten kostet einige Dutzend Dirham. Reisepass nötig, Aktivierung in wenigen Minuten. Vergleich in unserem Artikel über <a href="/de/blog/morocco-sim-cards/">SIM-Karten in Marokko</a>.</li>
<li><strong>eSIM</strong>: Vor der Abreise aktiviert, funktioniert sie ab der Landung, ohne Schlange und Papierkram. Die einfachste Lösung, wenn Ihr Telefon kompatibel ist. Siehe unsere Seite <a href="/de/morocco-esim/">eSIM Marokko</a>.</li>
</ul>

<h2>Gepäck verloren oder beschädigt: so gehen Sie vor</h2>
<p>Erscheint Ihr Koffer nicht auf dem Band, verlassen Sie die Gepäckausgabe nicht: Gehen Sie mit Bordkarte und Gepäckabschnitt zum Gepäckschalter Ihrer Airline oder ihres Abfertigers. Sie erhalten einen <strong>Schadensbericht (PIR)</strong> und eine Vorgangsnummer, die für die Suche und die Entschädigung unerlässlich sind. Geben Sie die genaue Adresse Ihrer Unterkunft an: Gefundenes Gepäck wird zugestellt, aber ein Riad in der Medina findet man mit dem Namen des nächsten Tores viel leichter.</p>

<h2>Reisen mit Kindern oder eingeschränkter Mobilität</h2>
<p>Hilfe für Reisende mit eingeschränkter Mobilität beantragen Sie bei der Airline mindestens 48 Stunden vor dem Flug: Sie löst den Service beim Flughafen aus. Weisen Sie am Abflugtag am Check-in-Schalter erneut darauf hin. Mit Kindern sollten Sie Wasser und Snacks dabeihaben: Die Schlangen an der Passkontrolle durchquert man nicht mit einem Tablett, und bei Verspätung sind die Lounges eine echte Erleichterung.</p>
<p>Zu den Formalitäten: Die Polizeikarte wurde im September 2019 abgeschafft; bei Ein- und Ausreise wird nur der Reisepass kontrolliert. Staatsangehörige der EU, der Schweiz, Großbritanniens, Kanadas und der USA benötigen für touristische Aufenthalte bis 90 Tage kein Visum, mit einem für den gesamten Aufenthalt gültigen Reisepass.</p>
<div class="callout">
<span class="callout-label">Drei Dinge vor dem Verlassen der Halle</span>
<p>Dirham abheben und in 50er- und 100er-Scheine aufteilen. Die Verbindung aktivieren, eSIM oder lokale SIM. Und genau wissen, wohin es geht: Name des Riads, Medina-Tor oder Treffpunkt mit dem Fahrer.</p>
</div>
`,
  spotlight: {
    icon: 'sparkles',
    heading: "Ein Flughafen im Umbau",
    text: "Ausgelegt für rund 8 Millionen Passagiere pro Jahr, zählte der Flughafen Marrakesch-Menara <strong>2024 bereits 9,3 Millionen</strong>. Im Rahmen des ONDA-Plans „Flughäfen 2030“ wird das Terminal erweitert, um <strong>bis 2028 16 Millionen Passagiere pro Jahr</strong> abzufertigen. Seit März 2025 gibt es keine Scanner mehr am Terminaleingang, um Wartezeiten zu verkürzen. Den Terminalplan finden Sie in unserem <a href=\"/de/airport-guide/\">Flughafen-Ratgeber</a>.",
  },
  faqHeading: "Services am Flughafen Marrakesch: häufige Fragen",
  faqs: [
    { q: "Gibt es Geldautomaten am Flughafen Marrakesch?", a: "Ja, mehrere Geldautomaten und Wechselstuben befinden sich in der öffentlichen Ankunftshalle und im Abflugbereich. Sie akzeptieren Visa und Mastercard, mit fester Gebühr pro Abhebung: Heben Sie lieber einmal mehr ab." },
    { q: "Gibt es kostenloses WLAN am Flughafen Marrakesch-Menara?", a: "Ja, in den Terminals gibt es kostenloses WLAN. Für eine Nachricht reicht es, zu Stoßzeiten ist es aber unzuverlässig: Um einen Fahrer sicher zu erreichen, ist eine eSIM oder lokale SIM besser." },
    { q: "Wo kauft man eine SIM-Karte am Flughafen Marrakesch?", a: "An den Schaltern von Maroc Telecom, Orange und inwi in der Ankunftshalle. Ein Touristentarif mit Daten kostet einige Dutzend Dirham, die Aktivierung dauert wenige Minuten und der Reisepass ist Pflicht." },
    { q: "Gibt es eine Gepäckaufbewahrung am Flughafen Marrakesch?", a: "Ja, eine Gepäckaufbewahrung in der Ankunftshalle verwahrt Koffer einige Stunden oder einen Tag, praktisch bei einem Aufenthalt oder einem Abendflug. Bezahlt wird vor Ort." },
    { q: "Welche VIP-Lounges gibt es am Flughafen Marrakesch-Menara?", a: "Die Pearl Lounge, die Lounge von Royal Air Maroc und den ONDA-Service Convives de Marque. Zugang über Ticket oder Status, bestimmte Karten oder Lounge-Programme oder gegen Gebühr, etwa 25 bis 45 € je nach Lounge." },
    { q: "Gibt es einen Sanitätsdienst am Flughafen Marrakesch?", a: "Ja, ein medizinischer Notdienst ist rund um die Uhr für die Erstversorgung am Flughafen. Nehmen Sie Ihre Medikamente mit Rezept ins Handgepäck: Apotheken gibt es in der Stadt." },
    { q: "Gibt es einen Gebetsraum am Flughafen Marrakesch?", a: "Ja, in beiden Terminals gibt es Gebetsräume, im öffentlichen Bereich und im Abflugbereich." },
    { q: "Wie beantrage ich Hilfe bei eingeschränkter Mobilität?", a: "Über Ihre Airline, mindestens 48 Stunden vor dem Flug: Sie löst den Service beim Flughafen aus. Weisen Sie am Abflugtag auch am Check-in-Schalter darauf hin." },
  ],
  cta: {
    heading: "Das Terminal verlassen, ohne zu verhandeln",
    text: "Ein Fahrer mit Ihrem Namen, ein Festpreis pro Fahrzeug und das richtige Medina-Tor: drei Minuten Buchung, die Ihnen die Taxischlange ersparen.",
    label: "Transfer buchen",
  },
} satisfies LocalizedPage;
