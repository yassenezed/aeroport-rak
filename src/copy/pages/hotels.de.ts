import type { LocalizedPage } from '../types';

export default {
  title: "Hotels nahe Flughafen Marrakesch-Menara: 15 Adressen",
  description: "Hotels nahe dem Flughafen Marrakesch-Menara: 15 Adressen von Hivernage bis zur Medina, Fahrzeiten, Preisniveau und 5 ausführliche Hotelbewertungen.",
  eyebrow: "Hotels · Flughafen und Stadt",
  h1: "Hotels nahe dem Flughafen Marrakesch-Menara und in der Stadt",
  lede: "Der Flughafen liegt 6 km von der Medina entfernt: Kein Hotel in Marrakesch ist wirklich weit weg. Wichtiger als die Entfernung zum Terminal ist die Wahl des Viertels. Hier 15 ausgewählte Adressen, vom Palast bis zum Riad, nach Vierteln geordnet, mit ausführlichen Bewertungen von fünf davon.",
  highlights: [
    { icon: 'clock', value: "10–15 Min.", label: "Vom Flughafen ins Hivernage, das nächstgelegene Hotelviertel" },
    { icon: 'building', value: "15 Hotels", label: "Ausgewählt, vom Palast bis zum Riad" },
    { icon: 'star', value: "5 Bewertungen", label: "Anfahrt, Stärken und Grenzen" },
    { icon: 'van', value: "Ab ≈ 290 MAD", label: "Transfer bis zum Hotel (≈ 27 €)" },
  ],
  cardSections: [
    {
      eyebrow: "10–15 Minuten vom Terminal",
      heading: "Die nächstgelegenen Hotels am Flughafen Marrakesch-Menara",
      intro: "Hivernage, Avenue de la Ménara und Agdal sind die Hotelviertel, die dem Flughafen am nächsten liegen: Pools, direkte Zufahrt mit dem Auto und die Medina in wenigen Minuten.",
      variant: 'feature',
      items: [
        { icon: 'building', title: "Four Seasons Resort Marrakech", text: "Großes Resort mit Gärten, Pools und Spa, gleich bei den Ménara-Gärten.", tags: ["Luxus", "≈ 10 Min. vom Flughafen"], hotel: 'fourSeasons' },
        { icon: 'building', title: "Savoy Le Grand Hotel", text: "Großes familienfreundliches Hotel mit weitläufigem Pool und Spa, zwischen Hivernage und Avenue de la Ménara.", tags: ["Gehoben", "≈ 10 Min. vom Flughafen"], hotel: 'savoyGrandHotel' },
        { icon: 'building', title: "Pestana CR7 Marrakech", text: "Lebhaftes Designhotel im Hivernage, bekannt für seinen Rooftop-Pool.", tags: ["Mittel bis gehoben", "≈ 10–15 Min."], hotel: 'pestanaCr7' },
        { icon: 'building', title: "Sofitel Marrakech Lounge & Spa", text: "Zeitgenössisches Palasthotel im Hivernage mit Pools und Spa, wenige Gehminuten von der Medina.", tags: ["Gehoben", "≈ 10–15 Min."], hotel: 'sofitelLoungeSpa' },
        { icon: 'building', title: "Mövenpick Mansour Eddahbi", text: "Großes Hotel neben dem Kongresspalast, praktisch für Geschäfts- und Familienreisen.", tags: ["Gehoben", "≈ 10–15 Min."], hotel: 'movenpickMansourEddahbi' },
        { icon: 'building', title: "Kenzi Menara Palace", text: "Hotel an der Avenue Mohammed VI mit Pool und Gärten, im Viertel Agdal.", tags: ["Gehoben", "≈ 10–15 Min."], hotel: 'kenziMenaraPalace' },
      ],
    },
    {
      eyebrow: "Paläste und Resorts",
      heading: "Palasthotels und Grandhotels in Marrakesch",
      intro: "Die außergewöhnlichen Adressen, drei davon mit ausführlicher Bewertung.",
      variant: 'feature',
      items: [
        { icon: 'star', title: "La Mamounia", text: "Das historische Palasthotel mit Olivengärten am Rand der Medina, 12–20 Minuten vom Flughafen.", tags: ["Luxus", "Unsere Note 4,8/5"], link: { key: 'mamounia', label: "Zur Bewertung" }, hotel: 'mamounia' },
        { icon: 'star', title: "Royal Mansour", text: "Private Riads in einem ummauerten Anwesen innerhalb der Stadtmauern, fünfzehn Minuten vom Flughafen.", tags: ["Luxus", "Unsere Note 4,9/5"], link: { key: 'mansour', label: "Zur Bewertung" }, hotel: 'royalMansour' },
        { icon: 'star', title: "Es Saadi", text: "Familiengeführtes Anwesen im Hivernage in einem mehrere Hektar großen Park, zehn Minuten vom Terminal.", tags: ["Luxus", "Unsere Note 4,5/5"], link: { key: 'essaadi', label: "Zur Bewertung" }, hotel: 'esSaadi' },
        { icon: 'star', title: "Mandarin Oriental Marrakech", text: "Villen mit privatem Pool zwischen Olivenbäumen, an der Route du Golf Royal.", tags: ["Luxus", "≈ 25–30 Min."], hotel: 'mandarinOriental' },
        { icon: 'star', title: "Fairmont Royal Palm", text: "Golfresort am Fuß des Atlas, ideal für einen ruhigen Aufenthalt außerhalb der Stadt.", tags: ["Luxus", "≈ 20–25 Min."], hotel: 'fairmontRoyalPalm' },
      ],
    },
    {
      eyebrow: "In der Stadt und in der Medina",
      heading: "Stadthotels und charmante Riads",
      intro: "Guéliz für den Komfort, die Medina für die Atmosphäre.",
      variant: 'feature',
      items: [
        { icon: 'building', title: "Radisson Blu Carré Eden", text: "Modernes Hotel mitten in Guéliz, über dem Einkaufszentrum Carré Eden.", tags: ["Gehoben", "≈ 15–20 Min."], hotel: 'radissonCarreEden' },
        { icon: 'building', title: "ibis Marrakech Gare Voyageurs", text: "Die einfache, günstige Adresse gegenüber dem ONCF-Bahnhof, ideal für eine Nacht vor der Zugfahrt.", tags: ["Günstig", "≈ 15 Min."], hotel: 'ibisGare' },
        { icon: 'door', title: "Riad Yasmine", text: "Der meistfotografierte grüne Innenhof der Medina, im Viertel Dar el Bacha.", tags: ["Mittelklasse", "Unsere Note 4,4/5"], link: { key: 'yasmine', label: "Zur Bewertung" }, hotel: 'riadYasmine' },
        { icon: 'door', title: "Riad BE", text: "Innenhof, Becken und Dachterrasse am Bab Doukkala: eines der am einfachsten mit Koffern erreichbaren Riads.", tags: ["Mittelklasse", "Unsere Note 4,3/5"], link: { key: 'riadbe', label: "Zur Bewertung" }, hotel: 'riadBe' },
      ],
    },
  ],
  body: `
<h2>Welches Viertel ab Flughafen Marrakesch-Menara wählen?</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Viertel</th><th>Für wen</th><th>Zufahrt mit dem Auto</th><th>Ab Flughafen</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Hivernage, Ménara, Agdal</strong></td><td>Große Hotels, Ruhe, Pools</td><td>Direkt</td><td>10–15 Min.</td></tr>
<tr><td><strong>Medina</strong></td><td>Erster Besuch, Atmosphäre, Riads</td><td>Absetzen an einem Tor, dann zu Fuß</td><td>15–25 Min.</td></tr>
<tr><td><strong>Guéliz</strong></td><td>Restaurants, Bahnhof, Mietwagen</td><td>Direkt</td><td>15–20 Min.</td></tr>
<tr><td><strong>Palmeraie, Golfstraße</strong></td><td>Resorts, Erholung, Familien</td><td>Direkt</td><td>25–35 Min.</td></tr>
</tbody>
</table>
</div>
<p>Die entscheidende Frage: Wie oft am Tag wollen Sie zum Ausruhen zurückkehren? Wenn oft, wohnen Sie in der Medina oder im Hivernage. Planen Sie Agafay, den Atlas und Abende in der Stadt, kostet Sie ein Resort in der Palmeraie täglich eine Stunde Fahrt.</p>

<h2>Riad oder Hotel: zwei verschiedene Erlebnisse</h2>
<p>Ein <strong>Riad</strong> ist ein traditionelles Haus um einen Innenhof mit fünf bis zehn Zimmern in der Medina: persönlicher Empfang, Frühstück auf der Terrasse, echte Ruhe hinter der Tür. Dafür: keine Zufahrt bis zur Tür, steile Treppen und ungleichmäßige Heizung im Winter. Ein <strong>Hotel</strong> im Hivernage, in Guéliz oder der Palmeraie bietet Aufzug, zuverlässige Klimaanlage, Pool und Zufahrt bis zum Eingang.</p>
<div class="callout">
<span class="callout-label">Vor der Buchung in der Medina</span>
<p>Fragen Sie nach dem Namen des Tors zum Absetzen (Bab Doukkala, Bab Laksour, Bab Agnaou…), dem Fußweg, einem Gepäckträger zur Ankunftszeit, der Heizung im Winter und der Zahlungsart für den Restbetrag: Viele kleine Riads nehmen nur Bargeld.</p>
</div>

<h2>Späte Ankunft: der Reflex gegen die verschlossene Tür</h2>
<p>Landet Ihr Flug nach 22 Uhr, geben Sie Ihrer Unterkunft die <strong>Flugnummer</strong>, nicht nur die Uhrzeit: Ein Riad, das von Ihrer zweistündigen Verspätung weiß, lässt jemanden an der Tür. Hotels in Marrakesch bieten selten einen kostenlosen Shuttle: Planen Sie einen <a href="/de/book-transfer/">gebuchten Transfer</a> oder ein Taxi zum Nachttarif ein.</p>
`,
  faqHeading: "Hotels nahe Flughafen Marrakesch-Menara: häufige Fragen",
  faqs: [
    { q: "Welches Hotel liegt dem Flughafen Marrakesch am nächsten?", a: "Auf dem Flughafengelände gibt es kein großes Hotel. Am nächsten liegen die Häuser an der Avenue de la Ménara und im Hivernage, etwa das Four Seasons oder das Savoy Le Grand Hotel, rund zehn Autominuten vom Terminal." },
    { q: "Haben Hotels in Marrakesch einen kostenlosen Flughafenshuttle?", a: "Selten. Die meisten bieten auf Anfrage einen kostenpflichtigen Transfer an. Ein gebuchter Transfer ab 27 € pro Fahrzeug oder ein Taxi vom Stand sind am einfachsten." },
    { q: "Wo übernachten vor einem frühen Flug?", a: "Im Hivernage, an der Ménara oder im Agdal, 10–15 Minuten vom Terminal und mit dem Auto bis zur Tür erreichbar. Meiden Sie die Medina bei Abflug im Morgengrauen: Erst müssen Sie mit Gepäck zu Fuß zu einem Tor." },
    { q: "Besser in der Medina oder in Guéliz übernachten?", a: "Die Medina für Atmosphäre, Riads und Souks, mit Absetzen an einem Tor. Guéliz für Komfort: Zufahrt mit dem Auto, Restaurants und ONCF-Bahnhof, aber weniger Flair." },
    { q: "Ist ein Riad für Kinder geeignet?", a: "Das hängt ab: steile Treppen, selten gesicherte Terrassen und offene Innenhöfe. Viele Familien bevorzugen ein Hotel mit Pool im Hivernage oder in der Palmeraie." },
    { q: "Kann man mit dem Auto bis vor ein Riad fahren?", a: "Fast nie: Die Gassen sind zu eng. Sie werden am nächsten Tor abgesetzt und gehen drei bis zehn Minuten zu Fuß. Bitten Sie um einen Gepäckträger mit Handkarren." },
    { q: "Sind Riads im Winter beheizt?", a: "Unterschiedlich: Januarnächte fallen unter 8 °C. Prüfen Sie vor einer Winterbuchung, ob das Zimmer beheizt ist." },
    { q: "Muss man in Riads bar bezahlen?", a: "Oft den Restbetrag: Viele kleine Häuser akzeptieren Karten nur für die Online-Anzahlung. Nehmen Sie Dirham mit und fragen Sie bei der Buchung." },
  ],
  cta: {
    heading: "Vom Flughafen bis vor Ihr Hotel",
    text: "Nennen Sie den Namen Ihrer Unterkunft: Der Fahrer bringt Sie zum Hotel oder zum Medina-Tor nächst Ihrem Riad, zum Festpreis pro Fahrzeug.",
    label: "Transfer buchen",
    secondary: { label: "Auto mieten", key: 'carRental' },
  },
} satisfies LocalizedPage;
