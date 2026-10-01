import type { LocalizedPage } from '../types';

export default {
  title: "Transfer Flughafen Marrakesch-Menara: Taxi, Bus, Preise",
  description: "Vom Flughafen Marrakesch-Menara in die Medina: Privattransfer, Taxi, Bus 19, Riad-Shuttle oder Mietwagen. Echte Preise 2026 und Fahrzeiten im Vergleich.",
  eyebrow: "Transfer · Taxi · Bus 19 · Mietwagen",
  h1: "Transfer ab Flughafen Marrakesch-Menara: 5 Wege in die Stadt",
  lede: "Nur sechs Kilometer trennen das Terminal vom Jemaa el-Fna, und kein Zug fährt diese Strecke. Landung um Mitternacht, Familie mit Gepäck oder Rucksack mit kleinem Budget: Hier sind die fünf echten Möglichkeiten, ihre vor Ort geprüften Preise und welche zu Ihrer Ankunft passt.",
  highlights: [
    { icon: 'map-pin', value: "6 km", label: "Flughafen → Medina, 15–20 Min." },
    { icon: 'van', value: "Ab 27 €", label: "Transfer, pro Fahrzeug (7 Plätze)" },
    { icon: 'car', value: "100–150 MAD", label: "Taxi tagsüber, ganzes Auto" },
    { icon: 'bus', value: "30 MAD", label: "Bus 19, pro Person" },
  ],
  options: {
    heading: "Schnellvergleich: Verkehrsmittel ab Flughafen Marrakesch-Menara",
    intro: "Preise geprüft im September 2026, <strong>pro Fahrzeug</strong> außer beim Bus. Kein Zug fährt zum Flughafen: Der ONCF-Bahnhof liegt in Guéliz.",
    table: {
      head: ["Verkehrsmittel", "Preis", "Bis zur Medina", "Komfort", "Ideal für"],
      rows: [
        ["Privattransfer", "ab 27 €", "15–25 Min.", "Sehr hoch", "Nachtankunft, Familien, Riads in der Medina"],
        ["Taxistand", "100–150 MAD<br>150–240 MAD nachts", "15–25 Min.", "Mittel", "Zu zweit tagsüber, Guéliz oder Hivernage"],
        ["Bus 19 (ALSA)", "30 MAD / Pers.", "20–30 Min.", "Einfach", "Kleines Budget, leichtes Gepäck, tagsüber"],
        ["Riad-Shuttle", "150–250 MAD", "15–25 Min.", "Gut", "Schwer auffindbare Riads"],
        ["Mietwagen", "ab 25 € / Tag", "—", "Sehr hoch außerhalb der Medina", "Atlas, Agafay, Essaouira, Rundreise"],
      ],
    },
    detailHeading: "Die 5 Möglichkeiten im Detail",
    items: [
      {
        icon: 'van',
        title: "Vorab gebuchter Privattransfer",
        tagline: "Die entspannteste Wahl bei Nacht, mit Familie oder für ein Riad mitten in der Medina.",
        badge: "Unsere Empfehlung",
        meta: [
          { label: "Preis", value: "ab 27 € / Fahrzeug" },
          { label: "Fahrzeit", value: "15–25 Min." },
          { label: "Plätze", value: "bis zu 7" },
        ],
        pros: [
          "Fahrer wartet in der Ankunftshalle <strong>mit Namensschild</strong>",
          "Flugverfolgung: kein Aufpreis bei Verspätung",
          "Festpreis pro Fahrzeug, bei der Buchung fixiert",
          "Absetzen am Medina-Tor (<em>Bab</em>), das Ihrem Riad am nächsten liegt",
          "Kindersitz auf Anfrage, bei den meisten Anbietern kostenlos stornierbar bis 24 Std. vorher",
        ],
        prices: {
          heading: "Richtpreise",
          rows: [
            { label: "Medina, Guéliz, Hivernage", value: "ab 27 €" },
            { label: "Palmeraie, Agafay", value: "je nach Strecke" },
            { label: "Essaouira", value: "≈ 95 €" },
            { label: "Minibus ab 8 Plätzen", value: "auf Anfrage" },
          ],
          foot: "Preise pro Fahrzeug, nicht pro Person.",
        },
        link: { key: 'bookTransfer', label: "Transfer buchen" },
      },
      {
        icon: 'car',
        title: "Taxi vom Taxistand",
        tagline: "Rund um die Uhr am Taxistand direkt vor dem Terminal.",
        meta: [
          { label: "Tag", value: "100–150 MAD" },
          { label: "Nacht", value: "150–240 MAD" },
          { label: "Plätze", value: "3 (Petit Taxi)" },
        ],
        pros: [
          "Offizieller Taxistand vor der Ankunft, mit ausgehängten Tarifen",
          "Nichts zu buchen oder vorab zu bezahlen",
          "Zu zweit tagsüber unschlagbar: 9 bis 14 € für das ganze Auto",
        ],
        cons: [
          "Ein Petit Taxi nimmt höchstens 3 Fahrgäste: Zu viert braucht man zwei Autos",
          "Nur Barzahlung in Dirham",
          "Absetzen an dem Medina-Tor, das dem Fahrer passt, nicht immer am nächsten",
        ],
        note: { label: "Tipp:", text: "Preis und Ziel <strong>vor</strong> dem Einladen des Gepäcks vereinbaren und Schlepper in der Halle ignorieren: Taxis nimmt man nur am Taxistand." },
        link: { key: 'taxiTips', label: "Unsere Taxi-Tipps für Marrakesch" },
      },
      {
        icon: 'bus',
        title: "Bus 19 (ALSA)",
        tagline: "Die günstigste Lösung, wenn Sie mit leichtem Gepäck und tagsüber reisen.",
        meta: [
          { label: "Preis", value: "30 MAD / Pers." },
          { label: "Hin und zurück", value: "50 MAD (15 Tage)" },
          { label: "Betriebszeit", value: "≈ 6:00 – 23:30" },
        ],
        pros: [
          "Haltestelle direkt vor dem Terminal, Abfahrt etwa alle 30 Minuten",
          "Rund zwanzig Minuten bis zum Platz Jemaa el-Fna",
        ],
        cons: [
          "Keine Abfahrten mehr nach etwa 23:30 Uhr",
          "Wenig Platz für große Koffer",
          "Endet am Platz: Bis zum Riad geht es zu Fuß durch die Medina",
        ],
        link: { key: 'bus19', label: "Fahrplan und Haltestellen des Bus 19" },
      },
      {
        icon: 'door',
        title: "Shuttle Ihres Riads oder Hotels",
        tagline: "Der Fahrer Ihrer Unterkunft, der das richtige Tor und den Gepäckträger kennt.",
        meta: [
          { label: "Preis", value: "150–250 MAD / Fahrzeug" },
          { label: "Fahrzeit", value: "15–25 Min." },
          { label: "Buchung", value: "über das Riad" },
        ],
        pros: [
          "Der Fahrer weiß genau, wo er für Ihr Riad halten muss",
          "Oft mit einem Gepäckträger und Handkarren abgestimmt",
          "Bezahlung bei Ankunft",
        ],
        cons: [
          "Preise schwanken stark je nach Unterkunft: mit einem Transfer vergleichen",
          "Nicht immer möglich bei sehr späten Landungen",
        ],
      },
      {
        icon: 'car',
        title: "Mietwagen",
        tagline: "Für den Atlas, Agafay oder Essaouira, nicht für die Medina.",
        meta: [
          { label: "Preis", value: "ab 25 € / Tag" },
          { label: "Schalter", value: "Ankunftshalle" },
          { label: "Dokumente", value: "Führerschein, Pass, Karte" },
        ],
        pros: [
          "Schalter internationaler und marokkanischer Vermieter in der Ankunftshalle",
          "Volle Freiheit für Ourika, Imlil, Agafay oder die Straße nach Essaouira",
          "Online einige Tage vorher gebucht meist günstiger als am Schalter",
        ],
        cons: [
          "Die Medina ist Fußgängerzone: Das Auto bleibt auf dem Parkplatz",
          "Kaution wird auf einer Kreditkarte des Fahrers geblockt",
        ],
        link: { key: 'carRental', label: "Mietwagenpreise vergleichen" },
      },
    ],
  },
  body: `
<h2>Taxi oder Transfer ab Flughafen Marrakesch-Menara: die ehrliche Rechnung</h2>
<p>Taxis sind in Marrakesch nicht teuer: 100 bis 150 MAD ausgehängt für Medina, Guéliz und Hivernage, also 9 bis 14 € für das ganze Auto. Zu zweit am Tag schlägt keine Buchung diesen Preis.</p>
<p>In drei Fällen kippt die Rechnung. <strong>Nachts</strong> steigt der Tarif auf 150–240 MAD für dieselbe Fahrt. <strong>Ab vier Personen</strong> nimmt ein Petit Taxi nur drei Fahrgäste: zwei Autos, also 200–300 MAD am Tag und bis zu 480 MAD nachts. <strong>Bei einem schwer erreichbaren Riad</strong> hält der Fahrer an dem Tor, das ihm passt, was fünfzehn Minuten Fußweg mit Koffern bedeuten kann. Für 27 € pro Fahrzeug bis zu sieben Plätzen ist der gebuchte Transfer dann die günstigste und bequemste Lösung.</p>

<h2>Das eigentliche Thema: Absetzen an den Toren der Medina</h2>
<p>Kein Auto kommt in die engen <em>Derbs</em>, und mehrere Zufahrten sind für den Verkehr gesperrt. Der Fahrer hält am nächsten <em>Bab</em>: Bab Doukkala im Nordwesten, Bab Laksour bei der Koutoubia, Bab Agnaou im Süden, Bab el Khemis im Osten. Den Rest gehen Sie zu Fuß, meist drei bis zehn Minuten.</p>
<div class="callout">
<span class="callout-label">Zwei Fragen an Ihr Riad</span>
<p>Fragen Sie vor der Reise nach dem genauen Namen des Tors und ob ein Gepäckträger mit Handkarren auf Sie warten kann. Die meisten Riads bieten das kostenlos oder für ein paar Dirham an, wenn Sie Ihre Ankunftszeit mitteilen.</p>
</div>

<h2>Nachts am Flughafen Marrakesch-Menara ankommen</h2>
<p>Nach 23:30 Uhr fährt der Bus 19 nicht mehr: Es bleiben das Taxi zum Nachttarif oder ein gebuchter Transfer. Heben Sie vor dem Verlassen am Geldautomaten in der Ankunftshalle Dirham ab, denn Taxis nehmen keine Karte. Informieren Sie auch Ihr Riad: Viele schließen nachts die Tür und schicken jemanden zum <em>Bab</em>, wenn sie Ihre Ankunftszeit kennen.</p>
`,
  faqHeading: "Transfer ab Flughafen Marrakesch-Menara: häufige Fragen",
  faqs: [
    { q: "Welches Verkehrsmittel, wenn ich um Mitternacht in Marrakesch lande?", a: "Ein gebuchter Transfer, der auch bei Verspätung wartet und Sie am Medina-Tor nächst Ihrem Riad absetzt. Ein Taxi ist zum Nachttarif möglich, 150 bis 240 MAD pro Auto. Der Bus 19 fährt nach etwa 23:30 Uhr nicht mehr." },
    { q: "Was kostet ein Taxi vom Flughafen Marrakesch in die Medina?", a: "100 bis 150 MAD pro Auto tagsüber und 150 bis 240 MAD nachts, für Medina, Guéliz oder Hivernage. Der Preis gilt pro Fahrzeug, mit höchstens drei Fahrgästen im Petit Taxi. Vor dem Einladen bestätigen lassen." },
    { q: "Was kostet ein Privattransfer ab Flughafen Marrakesch-Menara?", a: "Ab 27 € pro Fahrzeug für bis zu 7 Fahrgäste in die Medina, nach Guéliz oder ins Hivernage, mit Flugverfolgung. Für die Palmeraie oder ein Agafay-Camp mehr, nach Essaouira rund 95 €." },
    { q: "Kann man das Taxi mit Karte bezahlen?", a: "Nein, Taxis in Marrakesch werden bar in Dirham bezahlt. Geldautomaten und Wechselstuben gibt es in der Ankunftshalle. Ein gebuchter Transfer wird je nach Anbieter online oder beim Fahrer bezahlt." },
    { q: "Gibt es einen Zug vom Flughafen Marrakesch in die Stadt?", a: "Nein, keine Bahnlinie führt zum Flughafen. Der ONCF-Bahnhof liegt in Guéliz, mit Zügen nach Rabat, Fès und Tanger: Man erreicht ihn per Taxi, Transfer oder Bus." },
    { q: "Kann man am Flughafen Uber, Careem oder inDrive nutzen?", a: "Verlassen Sie sich bei der Ankunft nicht darauf. Uber ist Ende November 2025 nach Marrakesch zurückgekehrt, aber nur mit lizenzierten Tourismusunternehmen und unregelmäßiger Verfügbarkeit; Careem und inDrive bewegen sich in einer Grauzone. In der Stadt können die Apps helfen." },
    { q: "Kann der Fahrer mich vor meinem Riad absetzen?", a: "Fast nie: Die Gassen der Medina sind zu eng für Autos. Der Fahrer hält am nächsten Tor, den Rest gehen Sie zu Fuß, meist 3 bis 10 Minuten. Bitten Sie Ihr Riad um einen Gepäckträger." },
    { q: "Wie kommt man vom Flughafen Marrakesch nach Essaouira?", a: "Am einfachsten mit einem Privattransfer, rund 95 € pro Fahrzeug für 2,5 bis 3 Stunden Fahrt. Supratours- und CTM-Busse fahren in der Stadt ab, nicht am Flughafen: Erst mit dem Taxi zu deren Busbahnhof." },
  ],
  cta: {
    heading: "Ihre Fahrt geregelt vor dem Abflug",
    text: "Festpreis pro Fahrzeug, Fahrer mit Namensschild und Flugverfolgung. Oder ein Mietwagen für den Atlas.",
    label: "Transfer buchen",
    secondary: { label: "Auto mieten", key: 'carRental' },
  },
} satisfies LocalizedPage;
