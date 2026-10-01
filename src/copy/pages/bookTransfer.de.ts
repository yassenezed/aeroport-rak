import type { LocalizedPage } from '../types';

export default {
  title: "Transfer Flughafen Marrakesch-Menara buchen, ab 27 €",
  description: "Privattransfer am Flughafen Marrakesch-Menara: Festpreis pro Fahrzeug bis 7 Personen, Fahrer mit Namensschild, Flugverfolgung und kostenlose Stornierung.",
  eyebrow: "Privattransfer · Online-Buchung",
  h1: "Transfer ab Flughafen Marrakesch-Menara buchen",
  lede: "Geben Sie Ziel und Landezeit ein: Der Preis gilt pro Fahrzeug, nicht pro Fahrgast. Ein Fahrer erwartet Sie vor der Ankunftshalle mit Ihrem Namen und bringt Sie zum Medina-Tor, das Ihrem Riad am nächsten liegt.",
  highlights: [
    { icon: 'wallet', value: "Ab 27 €", label: "Pro Fahrzeug, Medina und Guéliz" },
    { icon: 'users', value: "Bis zu 7", label: "Fahrgäste im Van" },
    { icon: 'clock', value: "90 Min.", label: "Kostenlose Wartezeit nach der Landung" },
    { icon: 'shield-check', value: "24 Std.", label: "Kostenlos stornierbar (meiste Angebote)" },
  ],
  widget: 'transfer',
  cardSections: [
    {
      eyebrow: "In der Buchung enthalten",
      heading: "Warum den Transfer am Flughafen Marrakesch-Menara vorab buchen",
      intro: "Was Sie gegenüber einem Taxi vom Taxistand zusätzlich bekommen.",
      variant: 'feature',
      items: [
        { icon: 'wallet', title: "Festpreis pro Fahrzeug", text: "Vor der Reise bekannt, Gepäck inklusive. Kein Verhandeln bei der Ankunft, auch nicht um 2 Uhr nachts.", tags: ["Keine Überraschungen"] },
        { icon: 'users', title: "Fahrer mit Namensschild", text: "Er wartet vor der Ankunftshalle mit Ihrem Namen und hilft mit den Koffern.", tags: ["Persönlicher Empfang"] },
        { icon: 'plane-landing', title: "Flugverfolgung in Echtzeit", text: "Ihre Flugnummer wird verfolgt: Bei Verspätung verschiebt sich die Abholung ohne Aufpreis.", tags: ["Verspätung abgedeckt"] },
        { icon: 'door', title: "Absetzen am richtigen Tor", text: "Der Fahrer hält am Bab, das Ihrem Riad am nächsten liegt und das Ihnen die Unterkunft genannt hat.", tags: ["Medina"] },
        { icon: 'baby', title: "Kindersitz auf Anfrage", text: "Bei der Buchung mit dem Alter des Kindes angeben. Taxis vom Stand haben fast nie einen.", tags: ["Familien"] },
        { icon: 'moon', title: "Rückfahrt zum Flughafen", text: "Um 5 Uhr morgens wartet kein Taxi in der Medina. Mit Hin- und Rückfahrt ist auch die Abreise geregelt.", tags: ["Hin und zurück"] },
      ],
    },
  ],
  steps: {
    heading: "In drei Schritten buchen",
    intro: "Zwei Minuten reichen, wenn Sie Ihre Flugnummer zur Hand haben.",
    items: [
      { icon: 'map-pin', title: "Strecke wählen", text: "Im Formular oben „Marrakech Menara Airport“ als Abholort lassen und Riad, Hotel oder Zielort eingeben." },
      { icon: 'clipboard', title: "Flug und Fahrgäste angeben", text: "Flugnummer, Zahl der Fahrgäste und Koffer, eventuell Kindersitz und eine erreichbare WhatsApp-Nummer." },
      { icon: 'users', title: "Fahrer treffen", text: "Nach dem Zoll die Ankunftshalle verlassen: Ihr Fahrer wartet mit einem Schild mit Ihrem Namen." },
    ],
  },
  body: `
<h2>Transferpreise ab Flughafen Marrakesch-Menara</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Ziel</th><th>Entfernung</th><th>Fahrzeit</th><th>Preis pro Fahrzeug</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Medina, Guéliz, Hivernage</strong></td><td class="num">6–8 km</td><td>15–25 Min.</td><td class="num">ab 27 €</td></tr>
<tr><td><strong>Palmeraie</strong></td><td class="num">≈ 15 km</td><td>25–35 Min.</td><td>im Formular angezeigt</td></tr>
<tr><td><strong>Agafay-Wüste</strong></td><td class="num">≈ 35 km</td><td>40–50 Min.</td><td>im Formular angezeigt</td></tr>
<tr><td><strong>Ourika-Tal, Imlil</strong></td><td class="num">≈ 65 km</td><td>1 Std. 15–1 Std. 30</td><td>im Formular angezeigt</td></tr>
<tr><td><strong>Essaouira</strong></td><td class="num">≈ 185 km</td><td>2 Std. 30–3 Std.</td><td class="num">≈ 95 €</td></tr>
</tbody>
</table>
</div>
<p>Der Preis gilt <strong>pro Fahrzeug</strong>, für bis zu sieben Fahrgäste im Van, nicht pro Person. Für jedes andere Ziel geben Sie es im Formular ein: Der genaue Preis erscheint vor der Zahlung.</p>

<h2>Das passende Fahrzeug wählen</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Fahrzeug</th><th>Fahrgäste</th><th>Koffer</th><th>Für wen</th></tr></thead>
<tbody>
<tr><td><strong>Limousine</strong></td><td class="num">1–3</td><td class="num">2–3</td><td>Paar oder Trio mit je einem Koffer</td></tr>
<tr class="row-highlight"><td><strong>Van</strong></td><td class="num">4–7</td><td class="num">5–7</td><td>Familie oder Freunde, bester Preis pro Platz</td></tr>
<tr><td><strong>Minibus</strong></td><td class="num">8–15</td><td class="num">10+</td><td>Gruppen, Veranstaltungen, Hochzeiten</td></tr>
<tr><td><strong>Geländewagen oder Premium-Van</strong></td><td class="num">1–6</td><td class="num">4–6</td><td>Agafay-Camps, Geschäftsreisen</td></tr>
</tbody>
</table>
</div>
<p>Da der Preis pro Fahrzeug gilt, kostet ein Van für vier oder fünf Personen pro Kopf deutlich weniger als zwei Petits Taxis mit je drei Plätzen. Zum Vergleich mit Taxi und Bus 19 siehe unseren <a href="/de/transfers/">Verkehrsmittel-Vergleich</a>.</p>

<h2>Was Sie bereithalten sollten</h2>
<p>Ihre <strong>Flugnummer</strong> und die Landezeit; den <strong>genauen Namen Ihres Riads oder Hotels</strong>; für die Medina das <strong>Tor zum Absetzen</strong>, das Ihnen die Unterkunft genannt hat; die Zahl der Fahrgäste und Koffer; eine <strong>in Marokko erreichbare Telefonnummer</strong>, am besten WhatsApp, das die meisten Fahrer nutzen.</p>
<div class="callout">
<span class="callout-label">In beide Richtungen buchen</span>
<p>Die Rückfahrt zum Flughafen ist oft schwieriger als die Ankunft: Frühmorgens stehen keine Taxis in den Gassen der Medina. Hin- und Rückfahrt zusammen zu buchen kostet meist weniger als zwei Einzelfahrten.</p>
</div>

<h2>Hochsaison am Flughafen Marrakesch-Menara: früh buchen</h2>
<p>Europäische Schulferien, Brückentage im Frühjahr, der Marathon des Sables und die Feiertage zum Jahresende leeren zuerst die großen Fahrzeuge. Ab fünf Personen zwischen Dezember und April einige Wochen vorher buchen, damit Ihre Gruppe nicht auf mehrere Autos verteilt werden muss.</p>
`,
  faqHeading: "Transfer Flughafen Marrakesch-Menara: häufige Fragen",
  faqs: [
    { q: "Gilt der Preis pro Person oder pro Fahrzeug?", a: "Pro Fahrzeug. Ein Transfer für 27 € in die Medina gilt für bis zu sieben Fahrgäste im Van, Gepäck inklusive. Ab vier Personen ist das deutlich günstiger als zwei Petits Taxis mit je drei Plätzen." },
    { q: "Was passiert, wenn mein Flug Verspätung hat?", a: "Der Fahrer verfolgt Ihre Flugnummer und passt die Abholzeit an. Bei den meisten Angeboten sind bis zu 90 Minuten kostenlose Wartezeit nach der Landung inklusive, genug für Passkontrolle und Gepäck." },
    { q: "Wo wartet der Fahrer am Flughafen Marrakesch?", a: "Vor der Ankunftshalle, mit einem Schild mit Ihrem Namen. Der genaue Treffpunkt steht auf Ihrem Buchungsbeleg. Schreiben Sie dem Fahrer, sobald Sie Empfang haben." },
    { q: "Kann man einen gebuchten Transfer stornieren?", a: "Bei den meisten Anbietern ja: kostenlos bis 24 Stunden vor der Abholung, mit voller Erstattung. Die genauen Bedingungen werden vor der Zahlung angezeigt." },
    { q: "Kann ich einen Kindersitz anfragen?", a: "Ja, bei der Buchung mit Alter und Gewicht des Kindes angeben. Taxis vom Stand bieten fast nie einen an." },
    { q: "Zahlt man online oder vor Ort?", a: "Beides gibt es je nach Anbieter. Die Online-Buchung sichert den Preis, manche Anbieter akzeptieren Zahlung beim Fahrer. Dann Dirham bereithalten." },
    { q: "Kann mich der Fahrer vor meinem Riad absetzen?", a: "Fast nie, denn die Gassen der Medina sind zu eng für Autos. Er hält am nächsten Tor, oft 3 bis 10 Minuten zu Fuß entfernt. Bitten Sie Ihr Riad um einen Gepäckträger." },
    { q: "Kann ich die Rückfahrt zum Flughafen Marrakesch-Menara buchen?", a: "Ja, über die Option Rücktransfer im Formular oder als zweite Fahrt. Seien Sie 2,5 Stunden vor einem internationalen Flug am Flughafen: Ab der Medina 15 bis 25 Minuten einplanen." },
  ],
  cta: {
    heading: "Ihr Transfer in zwei Minuten gebucht",
    text: "Vergleichen Sie die verfügbaren Fahrzeuge für Ihre Landezeit und sichern Sie den Preis. Bei den meisten Buchungen kostenlos stornierbar.",
    label: "Verfügbarkeit prüfen",
    href: "#transfert",
    secondary: { label: "Taxi, Bus und Transfer vergleichen", key: 'transfers' },
  },
} satisfies LocalizedPage;
