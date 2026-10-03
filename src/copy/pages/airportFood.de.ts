import type { LocalizedPage } from '../types';

export default {
  title: "Restaurants am Flughafen Marrakesch-Menara und Duty-free",
  description: "Restaurants und Shops am Flughafen Marrakesch-Menara: Starbucks, Paul, Cafés vor und nach der Kontrolle, Duty-free, Öffnungszeiten und McDonald's.",
  eyebrow: "Restaurants · Cafés · Duty-free",
  h1: "Restaurants und Shops am Flughafen Marrakesch-Menara",
  lede: "Ein Kaffee vor dem Boarding, ein Sandwich für den Flug, ein letztes Parfüm im Duty-free: Das Angebot des Flughafens ist ordentlich, aber begrenzt, und nachts deutlich kleiner. Hier steht, was Sie finden, auf welcher Seite der Kontrolle, und wie Sie nicht hungrig an Bord gehen.",
  highlights: [
    { icon: 'coffee', value: "6 Marken", label: "Cafés und schnelle Küche" },
    { icon: 'shop', value: "Duty-free", label: "Abflugbereich, nach der Kontrolle" },
    { icon: 'moon', value: "Wenig nachts", label: "Nur wenige Theken nachts geöffnet" },
    { icon: 'wallet', value: "Karte möglich", label: "In den meisten Verkaufsstellen" },
  ],
  cardSections: [
    {
      eyebrow: "Essen und Trinken",
      heading: "Cafés und Restaurants am Flughafen Marrakesch-Menara",
      intro: "Die Marken in den Terminals. Genaue Standorte und Zeiten ändern sich mit Bauarbeiten und Saison: Folgen Sie der Beschilderung.",
      variant: 'feature',
      items: [
        { icon: 'coffee', title: "Starbucks", text: "Kaffee, heiße und kalte Getränke, Gebäck: der bekannteste Treffpunkt vor dem Boarding.", tags: ["Kaffee", "Snacks"] },
        { icon: 'coffee', title: "Paul", text: "Französische Bäckerei: Sandwiches, Salate und Gebäck, praktisch als Mahlzeit für den Flug.", tags: ["Bäckerei", "Zum Mitnehmen"] },
        { icon: 'coffee', title: "La Table du Marché", text: "Ruhigeres Restaurant mit Gerichten, Salaten und Desserts für eine echte Mahlzeit vor einem Langstreckenflug.", tags: ["Restaurant", "Ganze Mahlzeit"] },
        { icon: 'coffee', title: "Segafredo", text: "Italienische Kaffeebar: Espresso, Getränke und kleine Speisen.", tags: ["Kaffee", "Schnell"] },
        { icon: 'coffee', title: "Pomme de Pain", text: "Sandwiches, Wraps und schnelle Menüs zu vernünftigen Preisen.", tags: ["Fast Food", "Menüs"] },
        { icon: 'coffee', title: "Maymana", text: "Snack- und Süßwarentheke für die Wartezeit zwischen Kontrolle und Gate.", tags: ["Snacks", "Süßes"] },
      ],
    },
    {
      eyebrow: "Einkaufen",
      heading: "Shops und Duty-free am Flughafen",
      variant: 'feature',
      items: [
        { icon: 'shop', title: "Duty-free (Abflug)", text: "Nach der Passkontrolle: Parfüm, Kosmetik, Alkohol, Tabak und Süßwaren, mit Marken wie Victoria's Secret, Lacoste oder Montblanc.", tags: ["Nach der Kontrolle", "Bordkarte nötig"] },
        { icon: 'sparkles', title: "Kunsthandwerk und Souvenirs", text: "Arganöl, marokkanische Kosmetik, verpackte Gewürze und kleines Kunsthandwerk: bequem, aber teurer als in der Medina.", tags: ["Souvenirs", "Flughafenpreise"] },
        { icon: 'book', title: "Presse und Reisebedarf", text: "Zeitungen, Bücher, Adapter, Ladegeräte und Wasser für den Flug.", tags: ["Notfallkauf", "Vor und nach der Kontrolle"] },
      ],
    },
  ],
  body: `
<h2>Vor oder nach der Kontrolle: Wo essen am Flughafen Marrakesch-Menara?</h2>
<p>Beim Abflug können Sicherheits- und Passkontrolle in der Hochsaison zwischen 30 Minuten und über einer Stunde dauern. Die richtige Reihenfolge: <strong>zuerst durch die Kontrollen</strong>, dann im Abflugbereich niederlassen, wo das Duty-free und die meisten Cafés liegen. Vor der Kontrolle gibt es nur wenige Cafés und Snacktheken, praktisch für Begleitpersonen oder wer eine <a href="/de/arrivals/">Ankunft</a> abholt.</p>
<div class="callout">
<span class="callout-label">Nachtflug oder sehr früher Abflug</span>
<p>Zwischen Mitternacht und 5 Uhr sind die meisten Theken geschlossen oder nur minimal besetzt. Essen Sie vorher in der Stadt und kaufen Sie nach der Kontrolle eine Flasche Wasser.</p>
</div>

<h2>Gibt es einen McDonald's am Flughafen Marrakesch?</h2>
<p>Nach unserem Kenntnisstand gibt es <strong>keinen McDonald's im Flughafen Marrakesch-Menara</strong>. Die nächsten liegen in der Stadt: Avenue Mohammed V in Guéliz, am Bahnhof und in den Einkaufszentren (Carré Eden, Menara Mall), 10–15 Minuten mit dem Auto. Für einen schnellen Imbiss vor Ort sind Paul und Pomme de Pain die naheliegenden Alternativen.</p>

<h2>Das Duty-free am Flughafen Marrakesch-Menara</h2>
<p>Das Duty-free liegt im Abflugbereich nach der Passkontrolle: An der Kasse wird die Bordkarte verlangt. Es gibt Parfüm, Kosmetik, Alkohol, Tabak, Schokolade und eine Auswahl marokkanischer Produkte. Die Preise entsprechen internationalen Duty-free-Shops: Arganöl und Kunsthandwerk sind in der Medina deutlich günstiger, wenn Sie Zeit zum Vergleichen haben.</p>
<p class="small">Im Duty-free gekaufte Flüssigkeiten: im versiegelten Beutel mit Beleg lassen, vor allem bei einem Umstieg in Europa.</p>

<h2>Preise und Bezahlung</h2>
<p>Rechnen Sie mit Flughafenpreisen: etwa <strong>30 bis 50 MAD (≈ 3 bis 5 €) für einen Kaffee</strong> und 60 bis 120 MAD (≈ 6 bis 11 €) für ein Sandwich oder Menü. Karten werden in den meisten Verkaufsstellen akzeptiert, Euro oft auch, das Wechselgeld kommt dann aber in Dirham zu einem schlechten Kurs.</p>

<h2>Weitere nützliche Services</h2>
<p>WLAN, Wechselstuben, Geldautomaten, VIP-Lounges und Gebetsraum: siehe unsere Seite <a href="/de/services/">Flughafen-Services</a>, und den Check-in auf der Seite <a href="/de/departures/">Abflüge</a>.</p>
`,
  faqHeading: "Restaurants am Flughafen Marrakesch-Menara: häufige Fragen",
  faqs: [
    { q: "Gibt es einen McDonald's am Flughafen Marrakesch?", a: "Nein, nach unserem Kenntnisstand gibt es keinen McDonald's im Flughafen. Die nächsten liegen in der Stadt, in Guéliz und in den Einkaufszentren Carré Eden und Menara Mall, 10–15 Minuten mit dem Auto." },
    { q: "Wo kann man am Flughafen Marrakesch essen?", a: "Die wichtigsten Marken sind Starbucks, Paul, La Table du Marché, Segafredo, Pomme de Pain und Maymana. Das meiste Angebot liegt im Abflugbereich nach der Kontrolle." },
    { q: "Gibt es Restaurants nach der Sicherheitskontrolle?", a: "Ja, im Abflugbereich liegen die meisten Cafés und das Duty-free. Gehen Sie zuerst durch die Kontrollen und essen Sie dann in Gate-Nähe." },
    { q: "Haben die Flughafenrestaurants nachts geöffnet?", a: "Nur sehr wenige. Zwischen Mitternacht und 5 Uhr sind die meisten geschlossen: Essen Sie vor einem Nachtflug in der Stadt." },
    { q: "Wo ist das Duty-free am Flughafen Marrakesch-Menara?", a: "Im Abflugbereich nach der Passkontrolle. Beim Bezahlen wird die Bordkarte verlangt." },
    { q: "Was kann man im Duty-free in Marrakesch kaufen?", a: "Parfüm, Kosmetik, Alkohol, Tabak, Schokolade und marokkanische Produkte wie Arganöl, mit Marken wie Victoria's Secret, Lacoste oder Montblanc." },
    { q: "Kann man in den Flughafenrestaurants mit Karte zahlen?", a: "Ja, in den meisten. Euro werden oft angenommen, das Wechselgeld gibt es aber in Dirham zu einem ungünstigen Kurs." },
    { q: "Was kostet ein Kaffee am Flughafen Marrakesch?", a: "Etwa 30 bis 50 MAD (≈ 3 bis 5 €) für einen Kaffee und 60 bis 120 MAD (≈ 6 bis 11 €) für ein Sandwich oder Menü." },
  ],
  cta: {
    heading: "In der Stadt essen, dann entspannt zum Flughafen",
    text: "Ein Fahrer holt Sie am Hotel oder am nächsten Medina-Tor ab, Festpreis pro Fahrzeug, auch für einen Nachtflug.",
    label: "Transfer buchen",
    secondary: { label: "Flughafen-Services ansehen", key: 'services' },
  },
} satisfies LocalizedPage;
