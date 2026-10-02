import type { LocalizedArticle } from '../types';

export default {
  title: "Parkkosten am Flughafen Marrakesch-Menara nach Dauer",
  description: "Was Parken am Flughafen Marrakesch-Menara für 3 Stunden, 1 Tag, 1 oder 2 Wochen kostet: berechnet nach ONDA-Tarif und verglichen mit dem Taxi.",
  eyebrow: "Flughafen",
  h1: "Parken am Flughafen Marrakesch-Menara: die Kosten nach Reisedauer",
  lede: "6 MAD zum Absetzen, 42 MAD für einen Tag, rund 300 MAD für eine Woche: Parken am RAK gehört zu den günstigsten Posten einer Reise. Hier die Kosten für jede Dauer und der Punkt, ab dem Taxi oder Transfer günstiger werden.",
  excerpt: "Die echten Parkkosten am RAK für 3 Stunden, 1 Tag, 3 Tage, 1 oder 2 Wochen, mit dem ONDA-Tarif und dem Vergleich zu Taxi und Transfer.",
  date: '2026-10-02',
  facts: [
    { label: "1 Stunde", value: "6", sub: "MAD" },
    { label: "24 Stunden", value: "42", sub: "MAD" },
    { label: "1 Woche", value: "≈ 300", sub: "MAD" },
    { label: "Kapazität", value: "1.550", sub: "Plätze" },
  ],
  body: `
<h2>Parkkosten am Flughafen Marrakesch-Menara nach Abwesenheitsdauer</h2>
<p>Berechnet nach dem ONDA-Tarif für ein Auto auf einem Freiluftplatz, mit 42 MAD pro 24 Stunden:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Situation</th><th>Dauer</th><th>Kosten</th><th>≈ in Euro</th></tr></thead>
<tbody>
<tr><td><strong>Jemanden absetzen oder abholen</strong></td><td>bis 1 Std.</td><td class="num">6 MAD</td><td class="num">0,55 €</td></tr>
<tr><td><strong>Zum Abflug begleiten</strong></td><td>2 bis 3 Std.</td><td class="num">11 MAD</td><td class="num">1 €</td></tr>
<tr><td><strong>Hin und zurück am selben Tag</strong></td><td>5 bis 12 Std.</td><td class="num">22 MAD</td><td class="num">2 €</td></tr>
<tr class="row-highlight"><td><strong>Eine Nacht</strong></td><td>12 bis 24 Std.</td><td class="num">42 MAD</td><td class="num">3,90 €</td></tr>
<tr><td><strong>Langes Wochenende</strong></td><td>3 Tage</td><td class="num">≈ 126 MAD</td><td class="num">11,70 €</td></tr>
<tr><td><strong>Eine Woche</strong></td><td>7 Tage</td><td class="num">≈ 294 MAD</td><td class="num">27 €</td></tr>
<tr><td><strong>Zwei Wochen</strong></td><td>14 Tage</td><td class="num">≈ 588 MAD</td><td class="num">54 €</td></tr>
</tbody>
</table>
</div>
<p class="small">Richtwerte: Das ONDA kann den Tarif anpassen, es gilt der Aushang an der Einfahrt. Ungefährer Kurs 1 € ≈ 10,8 MAD. Den vollständigen Tarif und die drei Parkplätze finden Sie auf unserer Seite <a href="/de/parking/">Parken am Flughafen</a>.</p>

<h2>Parken, Taxi oder Transfer: ab wann lohnt sich was?</h2>
<p>Hin- und Rückfahrt mit dem Taxi in die Medina kosten tagsüber 200 bis 300 MAD: so viel wie <strong>5 bis 7 Tage Parken</strong>. Zwei <a href="/de/book-transfer/">Privattransfers</a> kosten rund 580 MAD, also <strong>zwei Wochen Parken</strong>. Wer in oder um Marrakesch wohnt, parkt bei Reisen bis zu zwei Wochen fast immer am günstigsten am Flughafen.</p>
<div class="callout">
<span class="callout-label">Die Kosten, die der Tarif nicht zeigt</span>
<p>Die Stellplätze liegen unter freiem Himmel. Im Sommer wird es im Auto weit über 60 °C heiß: Sonnenschutz, und keine Elektronik, Medikamente oder Kosmetik im Wagen.</p>
</div>

<h2>Drei Tipps für den richtigen Preis</h2>
<p><strong>Behalten Sie das Ticket</strong> von der Schranke: Sie brauchen es zum Bezahlen vor der Ausfahrt. <strong>Nehmen Sie Dirham in bar mit</strong>, Karten werden nicht überall akzeptiert. Und wenn Sie einen <a href="/de/car-rental/">Mietwagen</a> zurückgeben, folgen Sie der Beschilderung des Vermieters, ohne am öffentlichen Parkplatz ein Ticket zu ziehen.</p>
`,
  faqs: [
    { q: "Was kostet ein Tag Parken am Flughafen Marrakesch?", a: "42 MAD für 12 bis 24 Stunden laut ONDA-Tarif, rund 3,90 €. Für kürzere Zeit kosten 5 bis 12 Stunden 22 MAD." },
    { q: "Was kostet eine Woche Parken am RAK?", a: "Rund 294 MAD (≈ 27 €) bei 42 MAD pro 24 Stunden und rund 588 MAD für zwei Wochen." },
    { q: "Ist Parken günstiger als ein Taxi hin und zurück?", a: "Ja bis etwa eine Woche: Ein Taxi hin und zurück in die Medina kostet tagsüber 200 bis 300 MAD, so viel wie 5 bis 7 Tage Parken." },
    { q: "Was kostet kurzes Absetzen?", a: "6 MAD, wenn Sie auf den Parkplatz fahren, bis 1 Stunde. Die Spur vor den Terminals ist nur für kurzes Halten." },
    { q: "Kann man das Parken mit Karte bezahlen?", a: "Nicht überall: Dirham in bar mitnehmen. Bezahlt wird vor der Ausfahrt, an der Kasse oder am Automaten." },
  ],
} satisfies LocalizedArticle;
