import type { LocalizedPage } from '../types';

export default {
  title: "Taxi am Flughafen Marrakesch-Menara: Preise 2026",
  description: "Taxi am Flughafen Marrakesch-Menara: ausgehängte Preise in die Medina (100–150 MAD tagsüber, 150–240 nachts), kleines oder großes Taxi, Bezahlung und Fallen.",
  eyebrow: "Taxi · Preise am Taxistand ausgehängt",
  h1: "Taxi am Flughafen Marrakesch-Menara: Preise und Ablauf",
  lede: "Der Taxistand liegt direkt vor der Ankunftshalle, Tag und Nacht geöffnet, und Marrakesch hängt dort seine Tarife nach Zonen aus. Hier die echten Preise, die richtige Fahrzeuggröße und der Satz, der Missverständnisse vermeidet, bevor die Koffer im Kofferraum sind.",
  highlights: [
    { icon: 'sun', value: "100–150 MAD", label: "In die Medina, tagsüber (ganzes Auto)" },
    { icon: 'moon', value: "150–240 MAD", label: "Dieselbe Fahrt nachts" },
    { icon: 'users', value: "3 oder 6", label: "Fahrgäste: kleines oder großes Taxi" },
    { icon: 'clock', value: "24/7", label: "Taxistand vor der Ankunft" },
  ],
  widget: 'transfer',
  widgetIntro: {
    heading: "Lieber ein Festpreis? Mit einem Transfer vergleichen",
    text: "Ab 27 € (≈ 290 MAD) pro Fahrzeug für bis zu 7 Personen, Fahrer mit Namensschild und Flugverfolgung: nachts oder zu viert oft günstiger als ein Taxi.",
  },
  cardSections: [
    {
      eyebrow: "Kleines oder großes Taxi",
      heading: "Welches Taxi am Flughafen Marrakesch-Menara?",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Petit Taxi", text: "Die beige Limousine von Marrakesch, für höchstens 3 Fahrgäste und nur in der Stadt. Richtig für zwei oder drei mit wenig Gepäck.", tags: ["Max. 3 Fahrgäste", "Medina, Guéliz, Hivernage"] },
        { icon: 'van', title: "Grand Taxi", text: "Bis zu 6 Fahrgäste und ein echter Kofferraum. Fährt auch aus der Stadt hinaus: Ourika, Agafay, Essaouira.", tags: ["Max. 6 Fahrgäste", "Stadt und Umland"] },
        { icon: 'shield-check', title: "Gebuchter Transfer", text: "Festpreis pro Fahrzeug, Fahrer mit Namensschild und Absetzen am richtigen Medina-Tor.", tags: ["Bis zu 7 Personen", "Ab 27 €"], link: { key: 'bookTransfer', label: "Preise ansehen" } },
      ],
    },
  ],
  steps: {
    heading: "In 4 Schritten ein Taxi am Flughafen nehmen",
    items: [
      { icon: 'wallet', title: "Dirham abheben", text: "Vor dem Verlassen am Geldautomaten der Ankunftshalle: Taxis nehmen keine Karte." },
      { icon: 'map-pin', title: "Zum Taxistand", text: "Verlassen Sie die Halle: Der Stand liegt direkt davor. Ignorieren Sie Schlepper im Gebäude." },
      { icon: 'board', title: "Tafel lesen", text: "Die Tarife hängen nach Zonen aus: Prüfen Sie den für Ihr Ziel, tags oder nachts." },
      { icon: 'check', title: "Vor dem Einladen bestätigen", text: "Nennen Sie Ziel und ausgehängten Preis und laden Sie das Gepäck erst nach der Einigung ein." },
    ],
  },
  body: `
<h2>Taxipreise am Flughafen Marrakesch-Menara nach Ziel</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Ziel</th><th>Tag</th><th>Nacht</th><th>Fahrzeit</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Medina, Guéliz, Hivernage</strong></td><td class="num">100–150 MAD</td><td class="num">150–240 MAD</td><td>15–25 Min.</td></tr>
<tr><td><strong>Palmeraie</strong></td><td colspan="2">Teurer: Betrag auf der Tafel prüfen</td><td>25–35 Min.</td></tr>
<tr><td><strong>Agafay, Ourika, Essaouira</strong></td><td colspan="2">Grand Taxi, Preis vor der Abfahrt vereinbaren</td><td>40 Min. bis 3 Std.</td></tr>
</tbody>
</table>
</div>
<p class="small">Preise für das ganze Auto, nicht pro Person, Stand 2026. Es gilt die Tafel am Taxistand.</p>

<h2>Der Satz, der Missverständnisse vermeidet</h2>
<p>„Medina, Bab Doukkala: Das sind 100 Dirham, wie auf der Tafel?“ Das Medina-Tor nennen, die Tafel zitieren und den Betrag <strong>vor dem Öffnen des Kofferraums</strong> bestätigen, das klärt die meisten Streitfälle. Lehnt ein Fahrer ab, nimmt der nächste an: Es gibt immer eine Schlange.</p>
<div class="callout">
<span class="callout-label">Kleine Scheine</span>
<p>Geldautomaten geben oft 200-MAD-Scheine aus, auf die Fahrer schwer herausgeben. Wechseln Sie im Terminal-Café, um 50- und 100-Dirham-Scheine zu haben.</p>
</div>

<h2>Von Marrakesch zum Flughafen</h2>
<p>Für die Rückfahrt kostet ein Petit Taxi aus der Stadt meist <strong>70 bis 150 MAD tagsüber</strong> ab der Medina, vor dem Einsteigen zu vereinbaren, denn das Taxameter läuft selten. Frühmorgens gibt es keine Taxis in den Gassen: Lassen Sie Ihr Riad eines bestellen oder buchen Sie einen <a href="/de/book-transfer/">Transfer</a> in beide Richtungen.</p>

<h2>Taxi oder Transfer: was wählen?</h2>
<p>Das Taxi ist zu zweit tagsüber unschlagbar. Der <a href="/de/book-transfer/">gebuchte Transfer</a> gewinnt <strong>nachts</strong>, <strong>ab vier Personen</strong> (ein Petit Taxi nimmt nur drei) und bei einem <strong>schwer auffindbaren Riad</strong>, weil der Fahrer das nächste Tor kennt. Vergleichen Sie auch den <a href="/de/blog/bus-19-alsa-marrakech/">Bus 19</a> für 30 MAD und alle Optionen auf unserer Seite <a href="/de/transfers/">Transfers</a>.</p>

<h2>Uber, Careem oder inDrive am Flughafen?</h2>
<p>Verlassen Sie sich bei der Ankunft nicht darauf: Uber ist Ende November 2025 nach Marrakesch zurückgekehrt, aber nur mit lizenzierten Tourismusunternehmen und unregelmäßiger Verfügbarkeit, Careem und inDrive bewegen sich in einer Grauzone. Taxistand und gebuchter Transfer bleiben die verlässlichen Lösungen.</p>
`,
  faqHeading: "Taxi am Flughafen Marrakesch-Menara: häufige Fragen",
  faqs: [
    { q: "Was kostet ein Taxi vom Flughafen Marrakesch in die Medina?", a: "100 bis 150 MAD tagsüber und 150 bis 240 MAD nachts in die Medina, nach Guéliz oder ins Hivernage, laut Tafel am Taxistand. Das ist der Preis für das ganze Auto, nicht pro Person." },
    { q: "Wo nimmt man am Flughafen Marrakesch ein Taxi?", a: "Am Taxistand direkt vor der Ankunftshalle, rund um die Uhr geöffnet. Ignorieren Sie Taxiangebote im Terminal: Taxis nimmt man nur am Stand." },
    { q: "Nutzt das Flughafentaxi das Taxameter?", a: "Nein: Ab Flughafen gilt ein nach Zonen ausgehängter Festpreis. Bestätigen Sie den Tafelpreis vor dem Einladen mit dem Fahrer." },
    { q: "Wie viele Personen passen in ein Taxi in Marrakesch?", a: "Höchstens drei im Petit Taxi, bis zu sechs im Grand Taxi. Zu viert mit Koffern direkt ein Grand Taxi verlangen oder einen Transfer bis 7 Plätze buchen." },
    { q: "Kann man das Taxi mit Karte bezahlen?", a: "Nein, nur bar in Dirham. Heben Sie am Automaten der Ankunftshalle ab und halten Sie 50- und 100-Dirham-Scheine bereit." },
    { q: "Was kostet ein Taxi von Marrakesch zum Flughafen?", a: "Meist 70 bis 150 MAD tagsüber ab der Medina, vor dem Einsteigen zu vereinbaren. Für eine sehr frühe Abfahrt lassen Sie Ihr Riad buchen oder reservieren einen Transfer." },
    { q: "Gibt es nachts Taxis am Flughafen Marrakesch?", a: "Ja, der Stand ist rund um die Uhr in Betrieb, zum Nachttarif (150 bis 240 MAD in die Medina). Bei einem späten Flug wartet ein gebuchter Transfer auch bei Verspätung." },
    { q: "Taxi oder Transfer ab Flughafen Marrakesch?", a: "Das Taxi zu zweit tagsüber; der Transfer nachts, ab vier Personen oder für ein Riad tief in der Medina. Ab 27 € pro Fahrzeug ist er dann oft die günstigere Wahl." },
  ],
  cta: {
    heading: "Keine Lust, um 1 Uhr nachts zu verhandeln?",
    text: "Ein vor dem Abflug fixierter Festpreis, ein Fahrer mit Ihrem Namen, der das richtige Medina-Tor kennt.",
    label: "Transfer buchen",
    secondary: { label: "Taxi, Bus und Transfer vergleichen", key: 'transfers' },
  },
} satisfies LocalizedPage;
