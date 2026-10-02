import type { LocalizedPage } from '../types';

export default {
  title: "Luxus-Mietwagen Flughafen Marrakesch-Menara ab 1.200 MAD",
  description: "Premium-Limousine, SUV oder Cabrio am Flughafen Marrakesch-Menara mieten: Modelle, Preise ab 1.200 MAD/Tag, Kaution und die Option mit Fahrer.",
  eyebrow: "Premium-Mietwagen · Limousinen und SUVs",
  h1: "Luxus-Mietwagen am Flughafen Marrakesch-Menara",
  lede: "Marrakesch ist eine der wenigen Städte Marokkos, in denen man Oberklassewagen wirklich mieten kann. Hier die verfügbaren Modelle, ihre Preise, die strengeren Bedingungen und die eigentliche Frage: selbst fahren oder fahren lassen?",
  highlights: [
    { icon: 'star', value: "Ab 1.200 MAD", label: "Pro Tag, Premium-Limousine" },
    { icon: 'check', value: "Automatik", label: "Bei fast allen Modellen" },
    { icon: 'passport', value: "25 Jahre", label: "Häufigstes Mindestalter" },
    { icon: 'shield-check', value: "Ohne Selbstbeteiligung", label: "Vollkasko-Option verfügbar" },
  ],
  widget: 'car-rental',
  widgetIntro: {
    heading: "Luxus-Mietwagen am Flughafen Marrakesch-Menara buchen",
    text: "Tippen Sie „Marrakech“ und wählen Sie „Marrakech Airport“, dann Ihre Daten: Filtern Sie die Ergebnisse nach Premium, SUV oder Luxus.",
  },
  cardSections: [
    {
      eyebrow: "Unsere Auswahl",
      heading: "Premium-Fahrzeuge in Marrakesch",
      variant: 'feature',
      items: [
        { icon: 'star', title: "Premium-Limousinen", text: "Mercedes C- und E-Klasse, BMW 3er und 5er, Audi A4 und A6: Komfort und Diskretion für Geschäftsreisen.", tags: ["1.200–1.950 MAD/Tag", "Leder, Navi"] },
        { icon: 'map', title: "Premium-SUVs", text: "Range Rover, Porsche Cayenne, Mercedes GLE: am gefragtesten, souverän auf den Pisten von Agafay und am Tichka.", tags: ["1.600–3.000 MAD/Tag", "Großer Kofferraum"] },
        { icon: 'sun', title: "Cabrios und Sportwagen", text: "Allen voran der Ford Mustang, meist tageweise für einen Anlass oder eine Panoramastrecke gemietet.", tags: ["2.200–4.300 MAD/Tag", "Tageweise"] },
        { icon: 'users', title: "VIP-Van mit Fahrer", text: "Mercedes V-Klasse mit Chauffeur: die Wahl für Gruppen und Geschäftsreisen, ohne Kaution.", tags: ["1.600–2.700 MAD/Tag", "Fahrer inklusive"] },
      ],
    },
    {
      eyebrow: "Vorteile",
      heading: "Warum einen Premium-Wagen in Marrakesch mieten",
      variant: 'feature',
      items: [
        { icon: 'map', title: "Komfort auf langen Strecken", text: "Ledersitze, Fahrwerk und Dämmung machen auf der Strecke nach Essaouira oder Ouarzazate den Unterschied." },
        { icon: 'shield', title: "Moderne Sicherheit", text: "Notbremsassistent, Spurhalter, Abstandstempomat: ein echter Gewinn mit Familie." },
        { icon: 'check', title: "Automatik serienmäßig", text: "Kein Stress im Verkehr von Marrakesch: Fast alle Premium-Modelle sind Automatik." },
        { icon: 'luggage', title: "Empfang nach Maß", text: "Schlüsselübergabe am Flughafen oder Zustellung ins Hotel, je nach Vermieter." },
      ],
    },
    {
      eyebrow: "Vergleichen",
      heading: "Premium, Kleinwagen oder Van?",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Kleinwagen", text: "Für kleines Budget, ideal für Essaouira und das Ourika-Tal.", tags: ["Ab 270 MAD/Tag"], link: { key: 'carBudget', label: "Kleinwagen ansehen" } },
        { icon: 'users', title: "Van mit 7 bis 9 Plätzen", text: "Für Familien und Gruppen, mit Platz für das Gepäck.", tags: ["Ab 600 MAD/Tag"], link: { key: 'carMinivan', label: "Vans ansehen" } },
        { icon: 'check', title: "Automatik", text: "Kompakte und SUVs mit Automatik, günstiger als Premium.", tags: ["Ab 490 MAD/Tag"], link: { key: 'carEasy', label: "Automatik ansehen" } },
      ],
    },
  ],
  body: `
<h2>Preise und Kaution für Luxusautos am Flughafen Marrakesch-Menara</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Kategorie</th><th>Preis / Tag</th><th>Übliche Kaution</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Premium-Limousine</strong></td><td class="num">≈ 1.200–1.950 MAD (110–180 €)</td><td class="num">20.000–30.000 MAD</td></tr>
<tr><td><strong>Premium-SUV</strong></td><td class="num">≈ 1.600–3.000 MAD (150–280 €)</td><td class="num">30.000–50.000 MAD</td></tr>
<tr><td><strong>Cabrio / Sportwagen</strong></td><td class="num">≈ 2.200–4.300 MAD (200–400 €)</td><td class="num">40.000–60.000 MAD</td></tr>
<tr><td><strong>VIP-Van mit Fahrer</strong></td><td class="num">≈ 1.600–2.700 MAD (150–250 €)</td><td>keine</td></tr>
</tbody>
</table>
</div>
<p class="small">Richtpreise in Dirham, umgerechnet zum ungefähren Kurs 1 € ≈ 10,8 MAD. Der Vergleich zeigt den genauen Preis jedes Angebots.</p>

<h2>Strengere Bedingungen</h2>
<p>In diesen Kategorien gelten meist ein <strong>Mindestalter von 25 bis 30 Jahren</strong>, ein Führerschein seit <strong>3 bis 5 Jahren</strong> und eine Kaution, die das übliche Kartenlimit oft übersteigt. <strong>Informieren Sie vor der Reise Ihre Bank</strong>, damit sie das Autorisierungslimit vorübergehend erhöht: der häufigste Ablehnungsgrund am Schalter, der sich vor Ort nicht lösen lässt. Manche Vermieter begrenzen auch Kilometer oder Pisten: prüfen, wenn Sie in den Süden fahren.</p>
<p>Bei einem Auto dieses Werts ist eine <strong>Versicherung ohne Selbstbeteiligung</strong> dringend zu empfehlen: Schon eine zerkratzte Felge kostet Tausende Dirham. Fotografieren Sie das Auto bei Abholung und Rückgabe genau.</p>

<h2>Selbst fahren oder fahren lassen?</h2>
<p>Ein Premium-SUV für ≈ 2.200 MAD (200 €) pro Tag, der vor dem Riad steht, weil die Medina Fußgängerzone ist, kostet so viel wie ein <strong>privater Fahrer für den Tag</strong>, der wartet, Sie absetzt und das Parken übernimmt. Der Fahrer lohnt sich für lange Strecken nach Ouarzazate oder Essaouira, Geschäftstage mit mehreren Terminen und Familienreisen, bei denen nach einem Tag im Atlas niemand mehr fahren will.</p>
<div class="callout">
<span class="callout-label">Früh buchen und Modell bestätigen lassen</span>
<p>Die Premium-Flotte ist begrenzt und rotiert zwischen mehreren Agenturen. Im Frühjahr, zum Jahresende und bei Großveranstaltungen einige Wochen vorher buchen und <strong>das genaue Modell</strong> schriftlich bestätigen lassen, nicht nur die Kategorie.</p>
</div>

<h2>Abholung und Zustellung</h2>
<p><strong>Am Flughafen</strong>: Schlüssel am Schalter oder auf dem Parkplatz, bei Luxusmodellen teils direkt am Terminal. <strong>Im Hotel</strong>: Viele Premium-Vermieter liefern ins Hotel oder an den Rand der Medina; reisen Sie per <a href="/de/book-transfer/">Transfer</a> an und übernehmen Sie das Auto am nächsten Tag. <strong>Einwegmiete</strong>: Rückgabe je nach Vermieter in Essaouira, Fès oder Tanger möglich, gegen Aufpreis.</p>
`,
  faqHeading: "Luxus-Mietwagen am Flughafen Marrakesch-Menara: häufige Fragen",
  faqs: [
    { q: "Was kostet ein Luxus-Mietwagen am Flughafen Marrakesch?", a: "≈ 1.200 bis 1.950 MAD (110 bis 180 €) pro Tag für eine Premium-Limousine, ≈ 1.600 bis 3.000 MAD (150 bis 280 €) für einen SUV wie Range Rover oder Cayenne und ≈ 2.200 bis 4.300 MAD (200 bis 400 €) für ein Cabrio oder einen Sportwagen. Die Kaution liegt je nach Modell bei 20.000 bis 60.000 MAD." },
    { q: "Welche Premium-Modelle kann man in Marrakesch mieten?", a: "Mercedes C-, E-Klasse und GLE, BMW 3er und 5er, Audi A4 und A6, Range Rover, Porsche Cayenne und einige Cabrios wie den Ford Mustang, je nach Verfügbarkeit." },
    { q: "Wie alt muss man sein?", a: "25 bis 30 Jahre je nach Modell, mit einem Führerschein seit 3 bis 5 Jahren. Sportwagen und die größten SUVs haben die strengsten Bedingungen." },
    { q: "Ist eine Vollkaskoversicherung inklusive?", a: "Die Basisversicherung ja, mit hoher Selbstbeteiligung. Bei einem Auto dieses Werts ist die Option ohne Selbstbeteiligung sehr zu empfehlen: Sie deckt Schäden, Diebstahl und Glas." },
    { q: "Kann das Auto ins Hotel geliefert werden?", a: "Ja, viele Premium-Vermieter liefern ins Hotel oder an den Rand der Medina, kostenlos oder gegen Aufpreis. Bei der Buchung angeben." },
    { q: "Haben Premium-Autos Automatik?", a: "Fast alle. Lassen Sie Getriebe und genaues Modell trotzdem schriftlich bestätigen, denn „oder ähnlich“ garantiert nichts." },
    { q: "Lohnt sich ein Premium-SUV für einen Roadtrip in Marokko?", a: "Für Agafay, die Pisten im Süden oder eine lange Fahrt nach Ouarzazate ja: Komfort, Bodenfreiheit und großer Kofferraum. Für einen Stadtaufenthalt ist ein privater Fahrer oft praktischer." },
    { q: "Warum kann meine Karte am Schalter abgelehnt werden?", a: "Weil die Kaution, oft 20.000 bis 60.000 MAD, das übliche Autorisierungslimit übersteigt. Lassen Sie es vor der Reise von Ihrer Bank vorübergehend erhöhen." },
  ],
  cta: {
    heading: "Bereit für Marrakesch in der ersten Klasse?",
    text: "Vergleichen Sie Premium-Limousinen und SUVs der Vermieter am Flughafen und buchen Sie mit wenigen Klicks.",
    label: "Preise vergleichen",
    href: "#reserver",
    secondary: { label: "Alle Kategorien ansehen", key: 'carRental' },
  },
} satisfies LocalizedPage;
