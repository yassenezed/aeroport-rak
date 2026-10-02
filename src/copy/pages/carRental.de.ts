import type { LocalizedPage } from '../types';

export default {
  title: "Mietwagen Flughafen Marrakesch-Menara ab 270 MAD pro Tag",
  description: "Mietwagen am Flughafen Marrakesch-Menara: Anbieter vergleichen, Preise ab 270 MAD/Tag, Kaution, Versicherung und Tipps für Atlas und Essaouira.",
  eyebrow: "Mietwagen · Preisvergleich",
  h1: "Mietwagen am Flughafen Marrakesch-Menara",
  lede: "Vergleichen Sie die Vermieter in der Ankunftshalle und übernehmen Sie Ihr Auto direkt nach der Landung. Kleinwagen für Essaouira, SUV für den Atlas oder Van für die Familie: hier die echten Preise, die einzuplanende Kaution und die Fallen im Vertrag.",
  highlights: [
    { icon: 'wallet', value: "Ab 270 MAD", label: "Pro Tag, Kleinwagen in der Nebensaison" },
    { icon: 'plane-landing', value: "Ankunftshalle", label: "Schalter der Vermieter am Flughafen" },
    { icon: 'passport', value: "Nationaler Führerschein", label: "Für Urlaubsreisen akzeptiert" },
    { icon: 'shield-check', value: "Kostenlose Stornierung", label: "Bei den meisten Angeboten" },
  ],
  widget: 'car-rental',
  widgetIntro: {
    heading: "Mietwagen am Flughafen Marrakesch-Menara vergleichen",
    text: "Tippen Sie „Marrakech“ und wählen Sie „Marrakech Airport“ als Abholort, dann Daten und Uhrzeiten: Die Angebote internationaler und marokkanischer Vermieter erscheinen mit Gesamtpreis.",
  },
  cardSections: [
    {
      eyebrow: "Vor der Buchung",
      heading: "4 Tipps, um weniger zu zahlen",
      variant: 'compact',
      items: [
        { icon: 'clock', title: "2 bis 3 Wochen vorher buchen", text: "Kleinwagen und Automatik sind in den Ferien zuerst ausgebucht." },
        { icon: 'dollar-circle', title: "„Voll/Voll“ wählen", text: "Sie geben den Tank voll zurück und zahlen nur den verbrauchten Kraftstoff, ohne Servicegebühr." },
        { icon: 'sun', title: "Nebensaison nutzen", text: "Januar außerhalb der Feiertage, Juni und November haben die niedrigsten Preise des Jahres." },
        { icon: 'shield-check', title: "Kostenlose Stornierung behalten", text: "Die meisten Angebote sind bis 48 Stunden vor Abholung kostenlos stornierbar." },
      ],
    },
    {
      eyebrow: "Kategorien",
      heading: "Welcher Mietwagen für Ihre Marrakesch-Reise?",
      intro: "Wählen Sie nach Ihrer Route, nicht nach dem Lockpreis.",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Economy", text: "Dacia Sandero, Kia Picanto, Hyundai i10: ideal für Essaouira, das Ourika-Tal und asphaltierte Straßen.", tags: ["Ab 270 MAD/Tag", "4–5 Plätze"], link: { key: 'carBudget', label: "Angebote ansehen" } },
        { icon: 'star', title: "Premium", text: "Premium-Limousinen und SUVs für bequemes Reisen oder Geschäftsreisen.", tags: ["Ab 1.200 MAD/Tag", "Hohe Kaution"], link: { key: 'carLuxury', label: "Entdecken" } },
        { icon: 'users', title: "Van mit 7 bis 9 Plätzen", text: "Dacia Jogger, Renault Trafic: die ganze Familie samt Gepäck in einem Fahrzeug.", tags: ["Ab 600 MAD/Tag", "7–9 Plätze"], link: { key: 'carMinivan', label: "Erkunden" } },
        { icon: 'check', title: "Automatik", text: "In Marokko seltener und teurer, im Verkehr von Marrakesch aber deutlich entspannter.", tags: ["Ab 490 MAD/Tag", "Früh buchen"], link: { key: 'carEasy', label: "Fahrzeuge ansehen" } },
      ],
    },
    {
      eyebrow: "Warum am Flughafen",
      heading: "Warum den Mietwagen am Flughafen Marrakesch-Menara nehmen",
      variant: 'feature',
      items: [
        { icon: 'plane-landing', title: "Auto direkt nach der Landung", text: "Die Schalter liegen in der Ankunftshalle: Fahren Sie in den Atlas oder an die Küste, ohne durch die Stadt zu müssen." },
        { icon: 'map', title: "Direkt auf die Fernstraßen", text: "Der Flughafen liegt südwestlich der Stadt, Richtung Agafay, mit schnellem Zugang zu den Straßen nach Essaouira und in den Atlas." },
        { icon: 'building', title: "Internationale und lokale Anbieter", text: "Große Marken und marokkanische Agenturen nebeneinander: Der Vergleich zeigt alles auf einer Seite." },
        { icon: 'luggage', title: "Einfache Rückgabe vor dem Flug", text: "Geben Sie das Auto kurz vor dem Check-in auf dem Flughafenparkplatz ab, ganz ohne Taxisuche." },
      ],
    },
  ],
  body: `
<h2>Mietwagenpreise in Marrakesch 2026</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Kategorie</th><th>Preis / Tag</th><th>Übliche Kaution</th><th>Für</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Kleinwagen (Sandero, Picanto)</strong></td><td class="num">≈ 270–380 MAD (25–35 €)</td><td class="num">5.000–8.000 MAD</td><td>Paare, asphaltierte Straßen</td></tr>
<tr><td><strong>Kompaktwagen (Clio, Polo)</strong></td><td class="num">≈ 380–490 MAD (35–45 €)</td><td class="num">6.000–10.000 MAD</td><td>Komfort, lange Strecken</td></tr>
<tr><td><strong>SUV (Duster, Sportage)</strong></td><td class="num">≈ 600–950 MAD (55–90 €)</td><td class="num">10.000–15.000 MAD</td><td>Atlas, Pisten von Agafay</td></tr>
<tr><td><strong>Van mit 7 Plätzen</strong></td><td class="num">≈ 600–1.050 MAD (55–95 €)</td><td class="num">8.000–15.000 MAD</td><td>Familien, Gruppen</td></tr>
</tbody>
</table>
</div>
<p class="small">Richtpreise in Dirham, umgerechnet zum ungefähren Kurs 1 € ≈ 10,8 MAD. Der Vergleich zeigt den genauen Preis jedes Angebots.</p>
<p>Dazu kommen Kraftstoff (Diesel kostet rund 12 bis 14 MAD pro Liter), Autobahnmaut und, falls gewünscht, die Selbstbeteiligungsversicherung. In den europäischen Schulferien und im Sommer steigen die Preise deutlich.</p>

<h2>Braucht man in Marrakesch wirklich ein Auto?</h2>
<p><strong>Wenn Sie in der Stadt bleiben</strong>, nein: Die Medina ist Fußgängerzone, Parken kostet Geld und wird von Wächtern betreut, und ein Petit Taxi kostet 15 bis 50 MAD pro Fahrt. <strong>Wenn Sie die Stadt verlassen</strong>, ja: Ourika, Imlil, Agafay, Essaouira oder der Tichka-Pass lassen sich auf eigene Faust viel besser erkunden.</p>
<div class="callout">
<span class="callout-label">Die sparsamste Lösung</span>
<p>Verbringen Sie die ersten Tage ohne Auto in der Medina, fahren Sie per <a href="/de/book-transfer/">Transfer</a> zum Riad und mieten Sie nur für die Ausflugstage. So sparen Sie Miete und Parkgebühren für Tage, an denen das Auto nur herumstehen würde.</p>
</div>

<h2>Roadtrips ab Flughafen Marrakesch-Menara</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Ziel</th><th>Entfernung</th><th>Fahrzeit</th><th>Empfohlenes Auto</th></tr></thead>
<tbody>
<tr><td><strong>Agafay-Wüste</strong></td><td class="num">≈ 35 km</td><td>40–50 Min.</td><td>Kleinwagen (SUV für Pisten)</td></tr>
<tr><td><strong>Ourika-Tal</strong></td><td class="num">≈ 65 km</td><td>1 Std. 15–1 Std. 30</td><td>Kleinwagen</td></tr>
<tr><td><strong>Imlil, Hoher Atlas</strong></td><td class="num">≈ 65 km</td><td>1 Std. 15–1 Std. 30</td><td>Kleinwagen oder SUV</td></tr>
<tr><td><strong>Ouzoud-Wasserfälle</strong></td><td class="num">≈ 170 km</td><td>2 Std. 45–3 Std.</td><td>Kompaktwagen</td></tr>
<tr><td><strong>Essaouira</strong></td><td class="num">≈ 185 km</td><td>2 Std. 30–3 Std.</td><td>Kompaktwagen</td></tr>
<tr><td><strong>Ouarzazate über den Tichka</strong></td><td class="num">≈ 200 km</td><td>4 Std.–4 Std. 30</td><td>Kompaktwagen oder SUV</td></tr>
</tbody>
</table>
</div>
<p>Alle diese Straßen sind asphaltiert. Der Tichka-Pass (2.260 m) ist kurvig und stark von Lkw befahren: Planen Sie großzügig und fahren Sie ihn nicht nachts. Details in unseren Ratgebern zu <a href="/de/blog/distance-essaouira-marrakech-airport/">Essaouira</a> und <a href="/de/blog/distance-ouarzazate-marrakech-airport/">Ouarzazate</a>.</p>

<h2>Die drei wichtigen Punkte im Vertrag</h2>
<h3>Die Kaution</h3>
<p>5.000 bis 15.000 MAD je nach Kategorie, geblockt auf einer <strong>Kreditkarte auf den Namen des Hauptfahrers</strong>. Prepaid- und viele Debitkarten werden abgelehnt: der häufigste Ablehnungsgrund am Schalter. Prüfen Sie Ihr Kartenlimit vor der Reise.</p>
<h3>Die Selbstbeteiligung</h3>
<p>Der Basisvertrag lässt bei Schäden eine hohe Selbstbeteiligung bei Ihnen. Sie können sie akzeptieren, die Versicherung des Vermieters kaufen (≈ 110 bis 220 MAD, 10 bis 20 € pro Tag) oder eine günstigere Drittversicherung abschließen, bei der Sie zuerst zahlen und sich das Geld später erstatten lassen.</p>
<h3>Die Fahrzeugübergabe</h3>
<p><strong>Fotografieren und filmen Sie das Auto vor der Abfahrt von allen Seiten</strong>: Felgen, Windschutzscheibe, Dach, Innenraum und Tankstand. Lassen Sie jeden Kratzer im Protokoll vermerken und wiederholen Sie die Fotos bei der Rückgabe. Diese zehn Minuten verhindern die meisten Streitfälle.</p>

<h2>Gut zu wissen vor der Anmietung</h2>
<div class="table-wrap">
<table class="data">
<tbody>
<tr><td><strong>Mindestalter</strong></td><td>Meist 21 Jahre, 23 bis 25 für Premium; Junge-Fahrer-Gebühr möglich</td></tr>
<tr><td><strong>Führerschein</strong></td><td>Nationaler Führerschein, je nach Vermieter seit mindestens 1 bis 2 Jahren</td></tr>
<tr><td><strong>Kaution</strong></td><td>Kreditkarte auf den Namen des Fahrers, Pflicht</td></tr>
<tr><td><strong>Kilometer</strong></td><td>Oft unbegrenzt; bei sehr günstigen Angeboten prüfen</td></tr>
<tr><td><strong>Tempolimits</strong></td><td>60 km/h innerorts, 100 km/h auf Landstraßen, 120 km/h auf Autobahnen; viele Radarkontrollen</td></tr>
</tbody>
</table>
</div>
<p>Halten Sie Führerschein, Mietvertrag und Pass griffbereit: Polizeikontrollen sind auf Überlandstraßen häufig, Bußgelder werden vor Ort gegen Quittung bezahlt. Mehr dazu in unseren Ratgebern zum <a href="/de/blog/car-rental-marrakech-airport/">Mietwagen am Flughafen Marrakesch</a> und zur <a href="/de/blog/long-term-car-rental-marrakech/">Langzeitmiete</a>.</p>
`,
  faqHeading: "Mietwagen am Flughafen Marrakesch-Menara: häufige Fragen",
  faqs: [
    { q: "Was kostet ein Mietwagen am Flughafen Marrakesch?", a: "Ab 270 bis 380 MAD (25 bis 35 €) pro Tag für einen Kleinwagen, ≈ 380 bis 490 MAD (35 bis 45 €) für einen Kompaktwagen und ≈ 600 bis 950 MAD (55 bis 90 €) für einen SUV. Dazu kommen Kraftstoff, Maut und eine eventuelle Versicherung. In Schulferien und im Sommer steigen die Preise." },
    { q: "Welche Vermieter gibt es am Flughafen Marrakesch-Menara?", a: "Große internationale Marken und viele marokkanische Agenturen haben einen Schalter oder Treffpunkt in der Ankunftshalle. Der Vergleich auf dieser Seite zeigt ihre Angebote nebeneinander mit Gesamtpreis." },
    { q: "Wie hoch ist die Kaution?", a: "5.000 bis 15.000 MAD je nach Kategorie, geblockt auf einer Kreditkarte des Hauptfahrers. Prepaid- und viele Debitkarten werden abgelehnt: Prüfen Sie Ihr Limit vor der Reise." },
    { q: "Reicht der deutsche Führerschein in Marokko?", a: "Ja, der nationale Führerschein genügt für eine Urlaubsreise, wenn Sie ihn je nach Vermieter seit mindestens 1 bis 2 Jahren besitzen. Führen Sie ihn mit Vertrag und Pass mit: Kontrollen sind häufig." },
    { q: "Lohnt sich eine Versicherung ohne Selbstbeteiligung?", a: "Sie senkt oder streicht Ihren Anteil bei Schäden, für ≈ 110 bis 220 MAD (10 bis 20 €) pro Tag beim Vermieter. Eine Drittversicherung ist günstiger, aber Sie zahlen zuerst und fordern dann zurück. Ohne Schutz tragen Sie die Selbstbeteiligung." },
    { q: "Braucht man für den Atlas einen Geländewagen?", a: "Nicht für Ourika, Imlil oder den Tichka-Pass, die komplett asphaltiert sind. Ein SUV hilft nur auf den Pisten von Agafay oder in abgelegenen Tälern, wo Bodenfreiheit wichtiger ist als Allrad." },
    { q: "Welche Tempolimits gelten in Marokko?", a: "60 km/h innerorts, 100 km/h auf Landstraßen und 120 km/h auf Autobahnen. Feste und mobile Radarkontrollen sind häufig, Bußgelder werden vor Ort gegen Quittung bezahlt." },
    { q: "Wann ist ein Mietwagen am günstigsten?", a: "Im Januar außerhalb der Feiertage, im Juni und im November. Europäische Schulferien, Ostern und der Sommer treiben die Preise: 2 bis 3 Wochen vorher buchen und kostenlose Stornierung behalten." },
    { q: "Kann ich kostenlos stornieren?", a: "Bei den meisten Angeboten ja, bis 48 Stunden vor der Abholung. Die genauen Bedingungen stehen vor der Zahlung: Prüfen Sie sie, besonders bei Aktionspreisen." },
    { q: "Besser am Flughafen oder in der Stadt mieten?", a: "Am Flughafen, wenn Sie direkt zum Roadtrip aufbrechen. Beginnen Sie mit ein paar Tagen in der Medina, nehmen Sie einen Transfer zum Riad und mieten Sie nur für die Ausflugstage." },
  ],
  cta: {
    heading: "Bereit für den Atlas und die Küste?",
    text: "Vergleichen Sie die Vermieter am Flughafen und buchen Sie mit wenigen Klicks, bei den meisten Angeboten kostenlos stornierbar.",
    label: "Preise vergleichen",
    href: "#reserver",
    secondary: { label: "Lieber einen Transfer", key: 'bookTransfer' },
  },
} satisfies LocalizedPage;
