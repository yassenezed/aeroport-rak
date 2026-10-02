import type { LocalizedPage } from '../types';

export default {
  title: "Van mit 7 bis 9 Sitzen mieten, Flughafen Marrakesch-Menara",
  description: "Van mit 7 oder 9 Sitzen am Flughafen Marrakesch-Menara mieten ab 600 MAD/Tag: echte Sitz- und Kofferplätze, Preise und die Alternative mit Fahrer.",
  eyebrow: "Van-Miete · Familien und Gruppen",
  h1: "Van mieten am Flughafen Marrakesch-Menara",
  lede: "Ab fünf Personen ist nicht die Zahl der Sitze das Problem, sondern der Kofferraum. Hier, was die Vans am Flughafen Marrakesch wirklich fassen, was sie kosten und wann ein Van mit Fahrer günstiger ist.",
  highlights: [
    { icon: 'users', value: "7 bis 9", label: "Sitze, Führerschein Klasse B genügt" },
    { icon: 'wallet', value: "Ab 600 MAD", label: "Pro Tag, 7-Sitzer" },
    { icon: 'luggage', value: "6–8 Koffer", label: "In einem 9-Sitzer" },
    { icon: 'shield-check', value: "Kostenlos stornierbar", label: "Bei den meisten Angeboten" },
  ],
  widget: 'car-rental',
  widgetIntro: {
    heading: "Van am Flughafen Marrakesch-Menara buchen",
    text: "Tippen Sie „Marrakech“ und wählen Sie „Marrakech Airport“, dann Ihre Daten: Filtern Sie die Ergebnisse auf Fahrzeuge ab 7 Sitzen.",
  },
  cardSections: [
    {
      eyebrow: "Das Angebot",
      heading: "Welcher Van in Marrakesch?",
      variant: 'feature',
      items: [
        { icon: 'car', title: "7-Sitzer", text: "Dacia Lodgy oder Jogger: ideal für 5 Personen mit Gepäck oder 7 mit weichen Taschen.", tags: ["600–800 MAD/Tag", "1–2 Koffer bei 7"] },
        { icon: 'car', title: "Komfort-Van", text: "Volkswagen Touran, Citroën Berlingo: mehr Komfort und etwas mehr Kofferraum.", tags: ["750–1.050 MAD/Tag", "2 Koffer bei 7"] },
        { icon: 'van', title: "9-Sitzer", text: "Renault Trafic, Volkswagen Transporter: die echte Lösung für 6 bis 9 Personen mit Koffern.", tags: ["1.100–1.600 MAD/Tag", "6–8 Koffer"] },
        { icon: 'users', title: "Kleinbus 12 bis 16 Sitze", text: "Mercedes Sprinter für große Gruppen und Hochzeiten, meist mit Fahrer.", tags: ["1.600–2.400 MAD/Tag", "Mit Fahrer"] },
      ],
    },
    {
      eyebrow: "Vorteile",
      heading: "Warum einen Van in Marrakesch mieten",
      variant: 'feature',
      items: [
        { icon: 'wallet', title: "Günstiger als zwei Autos", text: "Ein Fahrzeug, eine Tankfüllung, ein Parkplatz: Ab sechs Personen kostet der Van weniger als zwei Kleinwagen." },
        { icon: 'users', title: "Alle zusammen", text: "Kein Konvoi, der sich auf der Tichka-Strecke verliert: Die Gruppe fährt und hält gemeinsam." },
        { icon: 'baby', title: "Ideal für Familien", text: "Kindersitze auf Anfrage bei den meisten Vermietern, Klimaanlage hinten in den Vans." },
        { icon: 'map', title: "Perfekt für Roadtrips", text: "Essaouira, Ouzoud oder Ouarzazate: Auf der Straße ist ein beladener Van viel bequemer als ein voller Kompaktwagen." },
      ],
    },
    {
      eyebrow: "Vergleichen",
      heading: "Van, Kleinwagen oder Premium?",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Kleinwagen", text: "Für 2 bis 4 Reisende mit wenig Gepäck und kleinem Budget.", tags: ["Ab 270 MAD/Tag"], link: { key: 'carBudget', label: "Kleinwagen ansehen" } },
        { icon: 'star', title: "Premium und SUV", text: "Premium-Komfort für lange Strecken in kleiner Gruppe.", tags: ["Ab 1.200 MAD/Tag"], link: { key: 'carLuxury', label: "Premium ansehen" } },
        { icon: 'check', title: "Automatik", text: "Entspannter in der Stadt; Vans mit Automatik sind selten, früh buchen.", tags: ["Ab 490 MAD/Tag"], link: { key: 'carEasy', label: "Automatik ansehen" } },
      ],
    },
  ],
  body: `
<h2>Sitze und Koffer: die Tabelle gegen böse Überraschungen</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Fahrzeug</th><th>Sitze</th><th>Koffer, 3. Reihe aufgestellt</th><th>Preis / Tag</th></tr></thead>
<tbody>
<tr><td><strong>Dacia Lodgy / Jogger</strong></td><td class="num">7</td><td class="num">1–2</td><td class="num">≈ 600–800 MAD (55–75 €)</td></tr>
<tr><td><strong>VW Touran / Citroën Berlingo</strong></td><td class="num">7</td><td class="num">2</td><td class="num">≈ 750–1.050 MAD (70–95 €)</td></tr>
<tr class="row-highlight"><td><strong>Renault Trafic / VW Transporter</strong></td><td class="num">9</td><td class="num">6–8</td><td class="num">≈ 1.100–1.600 MAD (100–150 €)</td></tr>
<tr><td><strong>Mercedes Sprinter</strong></td><td class="num">12–16</td><td class="num">12+</td><td class="num">≈ 1.600–2.400 MAD (150–220 €)</td></tr>
</tbody>
</table>
</div>
<p class="small">Richtpreise in Dirham, umgerechnet zum ungefähren Kurs 1 € ≈ 10,8 MAD. Der Vergleich zeigt den genauen Preis jedes Angebots.</p>
<p>Die einfache Regel: <strong>Ab sechs Personen mit Koffern direkt zum 9-Sitzer</strong>. Der Führerschein Klasse B reicht bis 9 Sitze inklusive Fahrer; darüber braucht man eine Fahrerlaubnis zur Personenbeförderung, daher der Fahrer bei Kleinbussen.</p>

<h2>Mit einem großen Fahrzeug rund um den Flughafen Marrakesch-Menara fahren</h2>
<p>Auf der Straße nach Essaouira und den Hauptachsen ist ein Van völlig problemlos. Zwei Stellen verlangen mehr Aufmerksamkeit: <strong>die Umgebung der Medina</strong> mit engen, von Rollern und Karren belebten Straßen, wo ein Parkplatz nahe einem Tor Glückssache ist; und <strong>der Tichka-Pass</strong>, dessen Kehren und Lkw-Überholmanöver beladen vorausschauendes Fahren verlangen.</p>
<div class="callout">
<span class="callout-label">Kindersitze</span>
<p>Sie werden nie automatisch gestellt: Bestellen Sie sie bei der Buchung mit Alter und Gewicht jedes Kindes. In der Hochsaison ist der Bestand begrenzt.</p>
</div>

<h2>Van mit Fahrer: die vollständige Rechnung</h2>
<p>Rechnen Sie Miete, Kraftstoff (ein 9-Sitzer verbraucht ordentlich), Maut, Parken und die geblockte Kaution zusammen. Ein Van mit Fahrer für einen Tag ins Ourika-Tal oder nach Agafay kostet oft ähnlich viel, ganz ohne Aufwand. Die beste Kombination: ein <a href="/de/book-transfer/">Transfer</a> bei Ankunft und Abreise, ab 290 MAD (27 €) für bis zu 7 Personen, und die Van-Miete nur für die Tage, an denen Sie wirklich fahren.</p>
<p>Große Fahrzeuge sind zuerst ausgebucht: In Schulferien, zu Weihnachten und im Frühjahr sind 9-Sitzer <strong>mehrere Wochen im Voraus</strong> weg.</p>
`,
  faqHeading: "Van-Miete am Flughafen Marrakesch-Menara: häufige Fragen",
  faqs: [
    { q: "Was kostet ein Van am Flughafen Marrakesch?", a: "≈ 600 bis 1.050 MAD (55 bis 95 €) pro Tag für einen 7-Sitzer und ≈ 1.100 bis 1.600 MAD (100 bis 150 €) für einen 9-Sitzer mit echtem Kofferraum. Ein Sprinter mit 12 bis 16 Sitzen, meist mit Fahrer, kostet ≈ 1.600 bis 2.400 MAD (150 bis 220 €) pro Tag." },
    { q: "Wie viele Koffer passen in einen 7-Sitzer?", a: "Nur ein bis zwei bei aufgestellter dritter Reihe im Dacia Lodgy oder Jogger. Zu siebt mit Aufgabekoffern lieber einen 9-Sitzer wie den Renault Trafic nehmen." },
    { q: "Braucht man für einen 9-Sitzer einen besonderen Führerschein?", a: "Nein, Klasse B reicht bis 9 Sitze inklusive Fahrer. Darüber, etwa beim Sprinter, ist eine Fahrerlaubnis zur Personenbeförderung nötig: Diese Fahrzeuge werden mit Fahrer gemietet." },
    { q: "Ist ein Van günstiger als zwei Autos?", a: "Meist ja ab sechs Personen: ein Fahrzeug, eine Tankfüllung, ein Parkplatz und eine Zusatzversicherung statt zwei." },
    { q: "Haben Vans Automatik?", a: "Selten: Die meisten sind Schaltwagen. Wenn Sie Automatik brauchen, früh buchen und das Getriebe schriftlich bestätigen lassen." },
    { q: "Gibt es Kindersitze?", a: "Ja bei den meisten Vermietern, auf Anfrage mit Alter und Gewicht jedes Kindes. Sie werden nie automatisch gestellt." },
    { q: "Kann man mit dem Van einen Roadtrip in Marokko machen?", a: "Ja: Essaouira, Ouzoud oder Ouarzazate gehen mit dem Van sehr gut. Am Tichka mehr Zeit einplanen und nicht nahe der Medina parken." },
    { q: "Wann sollte man einen Van buchen?", a: "Mehrere Wochen im Voraus für Schulferien, Weihnachten und Frühjahr: Große Fahrzeuge sind in Marrakesch als Erstes vergriffen." },
  ],
  cta: {
    heading: "Bereit, Marokko als Gruppe zu entdecken?",
    text: "Vergleichen Sie die Vans der Vermieter am Flughafen und buchen Sie mit wenigen Klicks, bei den meisten Angeboten kostenlos stornierbar.",
    label: "Preise vergleichen",
    href: "#reserver",
    secondary: { label: "Alle Kategorien ansehen", key: 'carRental' },
  },
} satisfies LocalizedPage;
