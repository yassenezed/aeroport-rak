import type { LocalizedPage } from '../types';

export default {
  title: "Reiseführer Marrakesch ab Flughafen Marrakesch-Menara",
  description: "Reiseführer in Marrakesch ab Flughafen Marrakesch-Menara: Medina-Führungen, Ausflüge nach Agafay und in den Atlas, Preise 2026 und offizielle Guides.",
  eyebrow: "Führungen · Medina und Ausflüge",
  h1: "Reiseführer in Marrakesch: Führungen und Ausflüge",
  lede: "Eine Viertelstunde vom Flughafen Marrakesch-Menara entfernt ist die Medina am ersten Tag allein schwer zu verstehen. Ein offizieller Guide für einen gut gewählten halben Tag spart mehr Zeit und Geld, als er kostet. Hier die lohnenden Führungen, echte Preise und wie Sie falsche Guides meiden.",
  widget: 'tours',
  highlights: [
    { icon: 'users', value: "300–500 MAD", label: "Offizieller Guide, halber Tag" },
    { icon: 'clock', value: "3–4 Stunden", label: "Um die Medina zu verstehen" },
    { icon: 'shield-check', value: "Offizieller Ausweis", label: "Vom Tourismusministerium ausgestellt" },
  ],
  cardSections: [
    {
      eyebrow: "Ideen für Führungen",
      heading: "Führungen, die sich in Marrakesch lohnen",
      intro: "Alle sind vom Flughafen Marrakesch-Menara oder von Ihrem Riad aus leicht erreichbar.",
      variant: 'feature',
      items: [
        { icon: 'map', title: "Medina und Souks", text: "Der beste Einsatz eines Guides, am ersten Tag: die Viertel, die Tore, die Handwerkersouks und wo man was zu welchem Preis kauft.", tags: ["Halber Tag", "Zu Fuß"] },
        { icon: 'building', title: "Paläste und Monumente", text: "Bahia-Palast, Saadiergräber, Medersa Ben Youssef: Fast ohne Erklärungstafeln bleibt der Besuch ohne Kommentar stumm.", tags: ["2–3 Stunden", "Eintritt extra"] },
        { icon: 'sparkles', title: "Jardin Majorelle und Guéliz", text: "Der blaue Garten von Yves Saint Laurent, das Berbermuseum und die Neustadt. Tickets vorab buchen: Die Schlangen sind lang.", tags: ["2 Stunden", "Tickets buchen"] },
        { icon: 'sun', title: "Agafay-Wüste", text: "Die Steinwüste 40 Minuten von der Stadt: Sonnenuntergang über dem Atlas, Abendessen im Zelt, Dromedar- oder Quadtour.", tags: ["Halber Tag", "Abend"] },
        { icon: 'wave', title: "Ourika-Tal und Imlil", text: "Berberdörfer, Wasserfälle und die ersten Gipfel des Hohen Atlas, ein bis anderthalb Stunden entfernt. Der Guide ist auch Dolmetscher.", tags: ["Ganzer Tag", "Wandern"] },
        { icon: 'van', title: "Essaouira und Ouzoud", text: "Die Hafenstadt, Weltkulturerbe, 2,5 Stunden entfernt, oder die Ouzoud-Wasserfälle 3 Stunden entfernt: lange Tage, bequemer mit Fahrer-Guide.", tags: ["Ganzer Tag", "Fahrer-Guide"] },
      ],
    },
  ],
  steps: {
    heading: "Einen Guide in Marrakesch ohne böse Überraschung buchen",
    intro: "Drei Punkte, die Sie vorab klären sollten, ob online oder vor Ort gebucht.",
    items: [
      { icon: 'shield-check', title: "Offiziellen Ausweis prüfen", text: "Ein lizenzierter Guide zeigt seinen Berufsausweis des Tourismusministeriums mit Foto und Nummer ohne Zögern." },
      { icon: 'clipboard', title: "Dauer und Inhalt festlegen", text: "Vereinbaren Sie vorher die genaue Dauer, die Orte und was inbegriffen ist: Eintritte, Transport, Mittagessen." },
      { icon: 'alert', title: "Keine Ladenbesuche", text: "Sagen Sie gleich zu Beginn, dass die Führung ohne Verkaufsstopps stattfindet. Ein offizieller Guide akzeptiert das ohne Diskussion." },
    ],
  },
  body: `
<h2>Offizieller Guide oder falscher Guide: der Unterschied ist gesetzlich</h2>
<p>Ein marokkanischer Reiseführer besitzt einen <strong>Berufsausweis des Tourismusministeriums</strong> mit Foto und Nummer. Er hat eine Ausbildung und Prüfung absolviert und arbeitet legal. Fragen Sie danach: Ein offizieller Guide zeigt ihn ohne Zögern.</p>
<p>Wer Besucher rund um den Jemaa el-Fna oder an den Medina-Toren anspricht, um „den Weg zu zeigen“, hat diesen Ausweis meist nicht. Der Rundgang endet fast immer in einem Laden, der ihm Provision zahlt, und der anfangs genannte Preis ist nie der Endpreis. Denken Sie daran, sobald Sie am Flughafen Marrakesch-Menara landen.</p>

<h2>Was ein Guide in Marrakesch 2026 kostet</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Leistung</th><th>Richtpreis</th><th>Dauer</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Offizieller Guide, Medina</strong></td><td class="num">300–500 MAD</td><td>Halber Tag</td></tr>
<tr><td><strong>Offizieller Guide, ganzer Tag</strong></td><td class="num">500–800 MAD</td><td>8 Stunden</td></tr>
<tr><td><strong>Gruppenführung</strong></td><td class="num">15–30 € / Person</td><td>3–4 Stunden</td></tr>
<tr><td><strong>Ausflug mit Fahrer-Guide</strong></td><td class="num">60–120 € / Fahrzeug</td><td>Ganzer Tag, Ourika oder Agafay</td></tr>
</tbody>
</table>
</div>
<p>Die Preise gelten für den Guide, ohne Eintritte, Mittagessen und Transport. Ein Trinkgeld von 50 bis 100 MAD am Ende ist üblich, wenn die Führung gut war, aber keine Pflicht.</p>

<h2>Wo ein Guide wirklich etwas bringt</h2>
<p><strong>Die Medina und die Souks</strong>, am ersten Tag. In drei Stunden verstehen Sie die Logik der Viertel, finden die Tore und lernen, wo man was zu welchem Preis kauft: Der Rest des Aufenthalts wird viel einfacher. <strong>Die historischen Monumente</strong>, wo fehlende Beschilderung den Besuch ohne Kommentar stumm lässt. <strong>Ausflüge in den Atlas und die Täler</strong>, wo der Guide auch Berberisch übersetzt.</p>
<div class="callout">
<span class="callout-label">Wo ein Guide nichts bringt</span>
<p>Für einen Abendbummel über den Jemaa el-Fna, ein Abendessen, einen Pooltag oder ein Agafay-Pauschalpaket: Ein Guide bringt nichts, die Begleitung ist bereits Teil der Leistung.</p>
</div>

<h2>Vorab buchen oder vor Ort?</h2>
<p>Ihr <strong>Riad oder Hotel</strong> arbeitet fast immer mit einem offiziellen Guide zusammen, den es kennt: die einfachste Lösung, und der Preis bleibt verhandelbar. <strong>Online-Plattformen</strong> erlauben, Bewertungen zu vergleichen, die Sprache zu wählen und den Preis vorab festzulegen, was in der Hochsaison hilft. Die <strong>Audio-Touren</strong> oben machen Sie allein mit Handy und Kopfhörern, ab etwa 10 €: eine günstige Art, die Medina im eigenen Tempo und ohne Termin zu entdecken. Für den Weg vom Flughafen in die Medina buchen Sie einen <a href="/de/book-transfer/">Transfer</a>; für einen Ausflug auf eigene Faust siehe <a href="/de/car-rental/">Mietwagen</a> sowie unsere Seiten <a href="/de/blog/distance-essaouira-marrakech-airport/">Marrakesch–Essaouira</a> und <a href="/de/blog/distance-ouarzazate-marrakech-airport/">Marrakesch–Ouarzazate</a>.</p>
`,
  faqHeading: "Reiseführer in Marrakesch: häufige Fragen",
  faqs: [
    { q: "Was kostet ein offizieller Guide in Marrakesch?", a: "300 bis 500 MAD für einen halben Tag in der Medina und 500 bis 800 MAD für einen ganzen Tag, ohne Eintritte und Mittagessen. Ein Trinkgeld von 50 bis 100 MAD ist üblich, wenn die Führung gut war." },
    { q: "Woran erkenne ich einen offiziellen Guide in Marrakesch?", a: "Er besitzt einen Berufsausweis des Tourismusministeriums mit Foto und Nummer und zeigt ihn ohne Zögern. Wer Besucher auf der Straße anspricht, hat meist keinen." },
    { q: "Braucht man einen Guide für die Medina von Marrakesch?", a: "Pflicht ist es nicht, aber ein geführter halber Tag am ersten Tag ist eine der besten Investitionen der Reise: Sie verstehen die Souks, finden die Tore und bewegen sich danach allein, ohne sich zu verlaufen." },
    { q: "Welche Ausflüge kann man ab Marrakesch mit Guide machen?", a: "Die Agafay-Wüste in 40 Minuten, das Ourika-Tal und Imlil im Hohen Atlas in ein bis anderthalb Stunden sowie Tagesausflüge nach Essaouira (2,5 Stunden) oder zu den Ouzoud-Wasserfällen (3 Stunden)." },
    { q: "Wie vermeide ich Führungen, die im Laden enden?", a: "Sagen Sie zu Beginn, dass es keine Verkaufsstopps gibt, und vereinbaren Sie Dauer und Leistungen. Ein offizieller Guide akzeptiert das: Das unterscheidet ihn von einem Schlepper auf Provision." },
    { q: "Kann ich einen Guide vor der Landung in Marrakesch buchen?", a: "Ja, über Ihr Riad oder Hotel oder auf einer Online-Plattform, auf der Sie Bewertungen vergleichen und die Sprache wählen. In der Hochsaison oder für eine seltene Sprache mehrere Tage im Voraus buchen." },
    { q: "Kann mich der Guide am Flughafen Marrakesch-Menara abholen?", a: "Guides übernehmen in der Regel keinen Transport. Buchen Sie einen Transfer zu Ihrem Riad und treffen Sie Ihren Guide am nächsten Morgen am nächstgelegenen Medina-Tor." },
    { q: "Was ist eine Audio-Tour durch Marrakesch?", a: "Ein kommentierter Rundgang, den Sie allein mit Handy und Kopfhörern machen, ab etwa 10 €. Weniger persönlich als ein offizieller Guide, aber Sie entdecken Medina oder Monumente im eigenen Tempo und ohne Termin." },
    { q: "Gibt man dem Guide Trinkgeld?", a: "Es ist keine Pflicht, aber üblich, wenn die Führung gut war: 50 bis 100 MAD für einen halben Tag, etwas mehr für einen ganzen Tag oder eine kleine Gruppe." },
  ],
  cta: {
    heading: "Vom Flughafen zum Riad, vor der ersten Führung",
    text: "Ein Fahrer erwartet Sie am Flughafen Marrakesch-Menara und bringt Sie zum nächstgelegenen Medina-Tor: Am nächsten Morgen trifft Sie Ihr Guide dort.",
    label: "Transfer buchen",
  },
} satisfies LocalizedPage;
