import type { LocalizedPage } from '../types';

export default {
  title: "Günstiger Mietwagen Flughafen Marrakesch-Menara ab 25 €",
  description: "Günstiger Mietwagen am Flughafen Marrakesch-Menara ab 25 €/Tag: Sandero, Picanto, i10. Vermieter vergleichen und versteckte Kosten vermeiden.",
  eyebrow: "Economy-Mietwagen · ab 25 €/Tag",
  h1: "Günstiger Mietwagen am Flughafen Marrakesch-Menara",
  lede: "Der Kleinwagen ist die meistgemietete Kategorie in Marrakesch und die richtige für Essaouira, Ourika oder Imlil. Hier erfahren Sie, was ein Kleinwagen ab Flughafen wirklich kostet und wie Sie wenig zahlen, ohne am Schalter überrascht zu werden.",
  highlights: [
    { icon: 'wallet', value: "Ab 25 €", label: "Pro Tag, in der Nebensaison" },
    { icon: 'car', value: "5–6 L/100 km", label: "Durchschnittsverbrauch eines Kleinwagens" },
    { icon: 'map-pin', value: "Leicht zu parken", label: "Ideale Größe rund um die Medina" },
    { icon: 'shield-check', value: "Kostenlos stornierbar", label: "Bis 48 Std. vorher, bei den meisten Angeboten" },
  ],
  widget: 'car-rental',
  widgetIntro: {
    heading: "Kleinwagen am Flughafen Marrakesch-Menara buchen",
    text: "Tippen Sie „Marrakech“ und wählen Sie „Marrakech Airport“, dann Ihre Daten: Sortieren Sie die Ergebnisse nach Preis, um die Kleinwagen zuerst zu sehen.",
  },
  cardSections: [
    {
      eyebrow: "Vorteile",
      heading: "Warum ein Kleinwagen in Marrakesch",
      intro: "Die meistgebuchte Kategorie, aus gutem Grund.",
      variant: 'feature',
      items: [
        { icon: 'wallet', title: "Der niedrigste Preis", text: "25 bis 35 € pro Tag in der Normalsaison, weniger bei Wochenmiete: mehrere Miettage zum Preis eines organisierten Ausflugs." },
        { icon: 'sun', title: "Wenig Verbrauch", text: "Ein Kleinwagen braucht 5 bis 6 L/100 km: Hin und zurück nach Essaouira bleibt bezahlbar, auch bei Diesel für 12–14 MAD." },
        { icon: 'map-pin', title: "Leicht zu parken", text: "An den Toren der Medina und in Guéliz sind die Plätze eng: Ein Kleinwagen passt, wo ein SUV aufgibt." },
        { icon: 'map', title: "Reicht für den Atlas", text: "Ourika, Imlil und der Tichka-Pass sind asphaltiert: Ein Kleinwagen schafft sie mit zwei oder drei Personen problemlos." },
      ],
    },
    {
      eyebrow: "Modelle",
      heading: "Die meistgemieteten Kleinwagen in Marrakesch",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Dacia Sandero", text: "Der Bestseller in Marokko: 5 Plätze, guter Kofferraum für seine Größe, robust in den Bergen.", tags: ["25–32 €/Tag", "≈ 5,8 L/100 km"] },
        { icon: 'car', title: "Kia Picanto", text: "Sehr kompakt und wendig, ideal zu zweit in der Stadt und an der Küste.", tags: ["25–30 €/Tag", "≈ 5 L/100 km"] },
        { icon: 'car', title: "Hyundai i10", text: "4 Plätze, wirksame Klimaanlage, am leichtesten rund um die Medina zu parken.", tags: ["25–30 €/Tag", "≈ 4,8 L/100 km"] },
        { icon: 'car', title: "Renault Clio", text: "Eine Stufe mehr Komfort und Leistung, besser zu viert oder für Ouarzazate.", tags: ["32–40 €/Tag", "≈ 5,6 L/100 km"] },
      ],
    },
    {
      eyebrow: "Tipps",
      heading: "4 Tipps, um weniger zu zahlen",
      variant: 'compact',
      items: [
        { icon: 'clock', title: "Früh buchen", text: "Online-Preise 2 bis 3 Wochen vorher sind in der Hochsaison günstiger als am Schalter." },
        { icon: 'sun', title: "Nebensaison wählen", text: "Januar außerhalb der Feiertage, Juni und November; Schulferien und Eid meiden." },
        { icon: 'dollar-circle', title: "Voll/Voll", text: "Tank auf dem Ausgangsstand zurückgeben und nur den Verbrauch zahlen." },
        { icon: 'check', title: "Wochenweise mieten", text: "Ab fünf Miettagen sinkt der Tagespreis deutlich." },
      ],
    },
    {
      eyebrow: "Vergleichen",
      heading: "Kleinwagen, Premium, Van oder Automatik?",
      variant: 'feature',
      items: [
        { icon: 'star', title: "Premium und SUV", text: "Premium-Limousinen und SUVs für Komfort auf langen Strecken.", tags: ["Ab 110 €/Tag"], link: { key: 'carLuxury', label: "Premium ansehen" } },
        { icon: 'users', title: "Van mit 7 bis 9 Plätzen", text: "Familien und Gruppen: alle samt Koffern in einem Fahrzeug.", tags: ["Ab 55 €/Tag"], link: { key: 'carMinivan', label: "Vans ansehen" } },
        { icon: 'check', title: "Automatik", text: "Entspannter im Verkehr von Marrakesch, früh buchen.", tags: ["Ab 45 €/Tag"], link: { key: 'carEasy', label: "Automatik ansehen" } },
      ],
    },
  ],
  steps: {
    heading: "Mietwagen am Flughafen in 3 Schritten abholen",
    items: [
      { icon: 'clipboard', title: "Vor dem Flug buchen", text: "Vergleichen Sie die Angebote oben und buchen Sie: Sie erhalten einen Buchungsbeleg per E-Mail." },
      { icon: 'plane-landing', title: "Zum Schalter gehen", text: "Nach Passkontrolle und Gepäck zum Schalter oder Treffpunkt des Vermieters in der Ankunftshalle." },
      { icon: 'shield-check', title: "Prüfen und losfahren", text: "Gehen Sie mit dem Mitarbeiter ums Auto, fotografieren Sie jeden Mangel, prüfen Sie den Tank und fahren Sie los." },
    ],
  },
  body: `
<h2>Der echte Preis eines günstigen Mietwagens am Flughafen Marrakesch-Menara</h2>
<p>Anzeigen für 12 € pro Tag gibt es, aber sie sind unvollständig. Diese Vertragszeilen treiben die Rechnung in die Höhe:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Vertragszeile</th><th>Was beworben wird</th><th>Was Sie zahlen</th></tr></thead>
<tbody>
<tr><td><strong>Selbstbeteiligung</strong></td><td>„Versicherung inklusive“</td><td>5.000 bis 15.000 MAD zu Ihren Lasten bei Schäden</td></tr>
<tr><td><strong>Versicherung ohne Selbstbeteiligung</strong></td><td>Optional</td><td>10 bis 20 € pro Tag, manchmal mehr als die Miete</td></tr>
<tr><td><strong>Kraftstoff</strong></td><td>„Voll/Voll“</td><td>Bei manchen voller Tank im Voraus berechnet, nicht erstattet</td></tr>
<tr><td><strong>Zweiter Fahrer</strong></td><td>Nicht erwähnt</td><td>5 bis 10 € pro Tag</td></tr>
<tr><td><strong>Rückgabe außerhalb der Öffnungszeiten</strong></td><td>Nicht erwähnt</td><td>Nacht- oder Sonntagszuschlag</td></tr>
</tbody>
</table>
</div>
<p>Der richtige Reflex: Fragen Sie vor der Bestätigung nach dem <strong>Gesamtbetrag inklusive Selbstbeteiligung</strong>. Ein seriöser Vermieter nennt ihn ohne Weiteres.</p>

<h2>Marokkanische Agentur oder internationale Marke?</h2>
<p>Marokkanische Agenturen sind oft 20 bis 40 % günstiger, mit etwas älteren, aber gepflegten Autos und einem Ansprechpartner vor Ort. Ihre Schwäche ist eine unterschiedlich gründliche Fahrzeugübergabe: Wählen Sie eine mit vielen aktuellen Bewertungen. Internationale Marken kosten mehr, bieten aber Standardabläufe und einfachere Reklamationen: der vernünftige Kompromiss für die erste Miete in Marokko.</p>
<div class="callout">
<span class="callout-label">Die Vorsicht, die mehr wert ist als jeder Vertrag</span>
<p>Filmen Sie das Auto bei der Abholung von allen Seiten (Felgen, Windschutzscheibe, Dach, Schweller, Innenraum) mit Zeitstempel und wiederholen Sie dieselbe Serie bei der Rückgabe. Zehn Minuten, die die meisten Streitfälle klären.</p>
</div>

<h2>Benötigte Dokumente</h2>
<div class="table-wrap">
<table class="data">
<tbody>
<tr><td><strong>Mindestalter</strong></td><td>Meist 21 Jahre; Junge-Fahrer-Gebühr unter 23–25 möglich</td></tr>
<tr><td><strong>Führerschein</strong></td><td>Nationaler Führerschein, seit mindestens 1 Jahr</td></tr>
<tr><td><strong>Kaution</strong></td><td>Kreditkarte auf den Namen des Hauptfahrers (5.000 bis 8.000 MAD)</td></tr>
<tr><td><strong>Ausweis</strong></td><td>Reisepass</td></tr>
</tbody>
</table>
</div>

<h2>Abholung und Rückgabe</h2>
<p><strong>Am Flughafen</strong>: am einfachsten, wenn Sie direkt an die Küste oder in den Atlas fahren. <strong>In der Stadt</strong>: Beginnen Sie in der Medina, fahren Sie per <a href="/de/book-transfer/">Transfer</a> zum Riad und mieten Sie am Ausflugstag, in Guéliz oder mit Zustellung. <strong>Einwegmiete</strong>: Die meisten Vermieter akzeptieren eine Rückgabe in Essaouira, Fès oder Tanger, gegen einen Aufpreis je nach Entfernung.</p>
`,
  faqHeading: "Günstiger Mietwagen am Flughafen Marrakesch-Menara: häufige Fragen",
  faqs: [
    { q: "Was kostet ein kleiner Mietwagen am Flughafen Marrakesch?", a: "25 bis 35 € pro Tag in der Normalsaison für einen Dacia Sandero, Kia Picanto oder Hyundai i10, bei Wochenmiete weniger. Deutlich günstigere Anzeigen enthalten oft keine Versicherung ohne Selbstbeteiligung, die 10 bis 20 € pro Tag kostet." },
    { q: "Welcher Kleinwagen wird in Marrakesch am meisten gemietet?", a: "Der Dacia Sandero, der in Marokko gebaut wird: 5 Plätze, guter Kofferraum und robust. Kia Picanto und Hyundai i10 sind kleiner und noch leichter zu parken." },
    { q: "Reicht ein Kleinwagen für den Atlas?", a: "Ja für Ourika, Imlil und den Tichka-Pass, die komplett asphaltiert sind. Grenzen sind die Leistung am Berg mit vier Erwachsenen samt Gepäck und die Klimaanlage über 42 °C im Hochsommer." },
    { q: "Welche Dokumente brauche ich?", a: "Einen seit mindestens einem Jahr gültigen nationalen Führerschein, den Reisepass und eine Kreditkarte des Hauptfahrers für die Kaution, 5.000 bis 8.000 MAD bei einem Kleinwagen." },
    { q: "Gibt es Kleinwagen mit Automatik?", a: "Selten: Kleinwagen sind fast alle Schaltwagen. Automatik beginnt in der Kompaktklasse, ab etwa 45 bis 60 € pro Tag, und sollte früh gebucht werden." },
    { q: "Gibt es versteckte Kosten?", a: "Die häufigsten: hohe Selbstbeteiligung, Zusatzversicherung, zweiter Fahrer, Nachtrückgabe und schlecht geregelter Kraftstoff. Fragen Sie vor der Bestätigung nach dem Gesamtbetrag inklusive Selbstbeteiligung." },
    { q: "Wann ist ein Mietwagen am günstigsten?", a: "Im Januar außerhalb der Feiertage, im Juni und im November. Europäische Schulferien, Ostern, Eid und der Sommer können die Preise verdoppeln: 2 bis 3 Wochen vorher buchen." },
    { q: "Kann ich das Auto in einer anderen Stadt zurückgeben?", a: "Ja bei den meisten Vermietern, etwa in Essaouira, Fès oder Tanger, gegen eine Einweggebühr je nach Entfernung. Prüfen Sie das im Angebot vor der Buchung." },
  ],
  cta: {
    heading: "Bereit, Marokko günstig zu entdecken?",
    text: "Vergleichen Sie die Kleinwagen aller Vermieter am Flughafen und buchen Sie mit wenigen Klicks, bei den meisten Angeboten kostenlos stornierbar.",
    label: "Preise vergleichen",
    href: "#reserver",
    secondary: { label: "Alle Kategorien ansehen", key: 'carRental' },
  },
} satisfies LocalizedPage;
