import type { LocalizedPage } from '../types';

export default {
  title: "Parken am Flughafen Marrakesch-Menara: Preise 2026",
  description: "Parken am Flughafen Marrakesch-Menara: 3 Parkplätze, 1.550 Stellplätze, 6 MAD für die 1. Stunde und 42 MAD für 24 h laut ONDA-Tarif. Bringen und Alternativen.",
  eyebrow: "Parken · Preise und Ratgeber 2026",
  h1: "Parken am Flughafen Marrakesch-Menara: Preise und Ratgeber",
  lede: "Drei Freiluftparkplätze vor den Terminals, über 1.500 Stellplätze und sehr niedrige Tarife. Hier die offiziellen Preise, der beste Weg, Reisende abzusetzen oder abzuholen, und die Rechnung für eine Woche Urlaub.",
  highlights: [
    { icon: 'parking', value: "6 MAD", label: "Erste Stunde (≈ 0,55 €)" },
    { icon: 'clock', value: "42 MAD", label: "12 bis 24 Stunden (≈ 3,90 €)" },
    { icon: 'map-pin', value: "1.550 Plätze", label: "Auf 3 Parkplätzen" },
    { icon: 'shield-check', value: "24/7", label: "Tag und Nacht bewacht" },
  ],
  cardSections: [
    {
      eyebrow: "Anlagen",
      heading: "Die Parkplätze am Flughafen Marrakesch-Menara",
      intro: "Drei ebenerdige Parkplätze vor dem Terminalgebäude, Tag und Nacht geöffnet.",
      variant: 'feature',
      items: [
        { icon: 'parking', title: "Parkplatz 1", text: "Der größte der drei Flughafenparkplätze, ebenerdig vor dem Terminalgebäude.", tags: ["740 Plätze", "24/7"] },
        { icon: 'parking', title: "Parkplatz 2", text: "Der zweitgrößte, wenige Gehminuten von den Abflug- und Ankunftshallen entfernt.", tags: ["460 Plätze", "24/7"] },
        { icon: 'parking', title: "Parkplatz 3", text: "Der kleinste der drei, mit denselben Tarifen wie die anderen.", tags: ["350 Plätze", "24/7"] },
      ],
    },
    {
      eyebrow: "Gut zu wissen",
      heading: "Sicherheit und Ablauf",
      variant: 'compact',
      items: [
        { icon: 'shield-check', title: "Rund um die Uhr bewacht", text: "Eingezäunt und Tag und Nacht bewacht, auch bei späten Flügen." },
        { icon: 'board', title: "Ticket an der Einfahrt", text: "Automatische Schranke: Ticket aufbewahren, es wird bei der Ausfahrt bezahlt." },
        { icon: 'wallet', title: "Vor der Ausfahrt zahlen", text: "An der Kasse oder am Automaten; Dirham in bar mitnehmen, Karten gehen nicht immer." },
        { icon: 'sun', title: "Stellplätze unter freiem Himmel", text: "Im Sommer wird es im Auto über 60 °C heiß: Sonnenschutz und nichts Hitzeempfindliches darin." },
      ],
    },
    {
      eyebrow: "Alternativen",
      heading: "Lieber nicht parken? Die Alternativen",
      variant: 'feature',
      items: [
        { icon: 'van', title: "Privattransfer", text: "Ein Fahrer bringt und holt Sie ab: keine Parkplatzsuche, kein Auto in der Sonne.", link: { key: 'bookTransfer', label: "Transfer buchen" } },
        { icon: 'car', title: "Mietwagen", text: "Übernehmen Sie das Auto bei der Ankunft: Die Rückgabefläche stellt der Vermieter.", link: { key: 'carRental', label: "Autos ansehen" } },
        { icon: 'bus', title: "Taxi oder Bus 19", text: "Taxi vom Stand oder Bus 19 für 30 MAD: die Wege in die Stadt ohne Auto.", link: { key: 'transfers', label: "Verkehrsmittel vergleichen" } },
      ],
    },
  ],
  body: `
<h2>Parkgebühren am Flughafen Marrakesch-Menara</h2>
<p>Tarif des marokkanischen Flughafenamts (ONDA) für Autos auf Freiluftplätzen:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Dauer</th><th>Auto</th><th>In Euro (≈)</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Bis 1 Stunde</strong></td><td class="num">6 MAD</td><td class="num">0,55 €</td></tr>
<tr><td><strong>1 bis 2 Stunden</strong></td><td class="num">9 MAD</td><td class="num">0,85 €</td></tr>
<tr><td><strong>2 bis 3 Stunden</strong></td><td class="num">11 MAD</td><td class="num">1 €</td></tr>
<tr><td><strong>3 bis 4 Stunden</strong></td><td class="num">15 MAD</td><td class="num">1,40 €</td></tr>
<tr><td><strong>4 bis 5 Stunden</strong></td><td class="num">17 MAD</td><td class="num">1,60 €</td></tr>
<tr><td><strong>5 bis 12 Stunden</strong></td><td class="num">22 MAD</td><td class="num">2 €</td></tr>
<tr><td><strong>12 bis 24 Stunden</strong></td><td class="num">42 MAD</td><td class="num">3,90 €</td></tr>
</tbody>
</table>
</div>
<p class="small">Reisebusse und schwere Fahrzeuge: 8 MAD für die erste Stunde, 42 MAD für 12 bis 24 Stunden. Richtwerte, die das ONDA anpassen kann: Es gilt der Aushang an der Einfahrt. Ungefährer Kurs 1 € ≈ 10,8 MAD.</p>

<h2>Was kostet eine Woche Parken?</h2>
<p>Bei 42 MAD pro 24 Stunden sind es <strong>rund 300 MAD (≈ 27 €) für 7 Tage</strong>, ein sehr bescheidener Betrag im Vergleich zu europäischen Flughäfen. Zum Vergleich: Hin- und Rückfahrt mit dem Taxi in die Medina kosten tagsüber 200–300 MAD, zwei <a href="/de/book-transfer/">Privattransfers</a> rund 580 MAD (≈ 54 €). Wer in oder um Marrakesch wohnt und eine Woche verreist, parkt am Flughafen oft am günstigsten.</p>
<div class="callout">
<span class="callout-label">Die eigentlichen versteckten Kosten: die Sonne</span>
<p>Die Stellplätze liegen unter freiem Himmel. Im Sommer ist ein eine Woche geparktes Auto in Marrakesch extremer Hitze ausgesetzt: Sonnenschutz an die Scheibe, nichts Elektronisches, keine Medikamente oder Kosmetik im Innenraum, Fenster gut schließen.</p>
</div>

<h2>Reisende absetzen oder abholen</h2>
<p>Die Spur vor den Terminals dient zum kurzen Halten und Ausladen, nicht zum Parken: Das Personal hält den Verkehr in Bewegung, besonders abends. Wer jemanden abholt, fährt auf den Parkplatz: <strong>Die erste Stunde kostet 6 MAD</strong>. Zwischen Landung und Verlassen der Halle vergehen 30 bis 60 Minuten für Passkontrolle und Gepäck: Verfolgen Sie den Flug vorab auf unserer Seite <a href="/de/arrivals/">Ankünfte</a>.</p>

<h2>Mietwagen: kein Ticket nötig</h2>
<p>Geben Sie einen Mietwagen zurück, folgen Sie der Beschilderung des Vermieters zu seiner Rückgabefläche und ziehen Sie kein Ticket am öffentlichen Parkplatz. Planen Sie eine Viertelstunde für die Übergabe ein und behalten Sie datierte Fotos des Fahrzeugs.</p>
`,
  faqHeading: "Parken am Flughafen Marrakesch-Menara: häufige Fragen",
  faqs: [
    { q: "Was kostet das Parken am Flughafen Marrakesch?", a: "Laut ONDA-Tarif 6 MAD bis 1 Stunde, 9 MAD bis 2 Stunden, 22 MAD für 5 bis 12 Stunden und 42 MAD für 12 bis 24 Stunden für ein Auto. Es gilt der Aushang an der Einfahrt, da der Tarif angepasst werden kann." },
    { q: "Wie viele Stellplätze hat der Flughafen Marrakesch-Menara?", a: "Rund 1.550 Plätze auf drei Freiluftparkplätzen: 740 auf Parkplatz 1, 460 auf Parkplatz 2 und 350 auf Parkplatz 3." },
    { q: "Was kostet eine Woche Parken?", a: "Rund 300 MAD (≈ 27 €) bei 42 MAD pro 24 Stunden. Das ist oft günstiger als Hin- und Rücktransfer, aber schützen Sie das Auto vor der Sonne." },
    { q: "Gibt es eine kostenlose Kurzhaltezone?", a: "Auf der Spur vor den Terminals können Sie kurz halten, um Fahrgäste abzusetzen. Zum Warten auf den Parkplatz fahren: Die erste Stunde kostet 6 MAD." },
    { q: "Ist der Flughafenparkplatz bewacht?", a: "Ja, die Parkplätze sind eingezäunt und rund um die Uhr bewacht. Übliche Vorsicht: nichts Sichtbares im Auto und nichts Hitzeempfindliches." },
    { q: "Wie bezahle ich das Parken?", a: "Ticket an der Einfahrtsschranke ziehen und vor der Rückkehr zum Auto an der Kasse oder am Automaten zahlen. Dirham in bar mitnehmen, Karten werden nicht immer akzeptiert." },
    { q: "Sind die Stellplätze überdacht?", a: "Der veröffentlichte Tarif gilt für Freiluftplätze: Rechnen Sie nicht mit Schatten. Im Sommer Sonnenschutz nutzen und keine Elektronik oder Medikamente im Auto lassen." },
    { q: "Ist der Parkplatz nachts geöffnet?", a: "Ja, er ist rund um die Uhr in Betrieb, auch für Flüge mitten in der Nacht." },
  ],
  cta: {
    heading: "Lieber nicht parken?",
    text: "Ein Privattransfer bringt und holt Sie am Flughafen ab, ohne Parkplatzsuche und ohne Auto in der Sonne.",
    label: "Transfer buchen",
    secondary: { label: "Auto mieten", key: 'carRental' },
  },
} satisfies LocalizedPage;
