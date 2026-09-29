import type { LocalizedPage } from '../types';

export default {
  title: "Reiseführer buchen ab Flughafen Marrakesch-Menara",
  description: "Einen Guide ab Flughafen Marrakesch-Menara buchen: Preise, offizielle Guides, Medina-Führungen, Atlas-Ausflüge und typische Fehler.",
  eyebrow: 'Marrakesch · Führungen',
  h1: 'Einen Guide in Marrakesch buchen',
  lede: "Marrakesch ist am ersten Tag allein nur schwer zu lesen. Ein offizieller Guide für einen gut gewählten halben Tag spart mehr Zeit und Geld, als er kostet – vorausgesetzt, Sie wissen, was Sie kaufen.",
  body: `
<h2>Offizieller Guide oder Falschguide: ein rechtlicher Unterschied</h2>
<p>Ein marokkanischer Fremdenführer besitzt einen <strong>vom Tourismusministerium ausgestellten Berufsausweis</strong> mit Foto und Nummer, der regelmäßig erneuert wird. Er hat eine Ausbildung absolviert, eine Prüfung bestanden und arbeitet legal. Fragen Sie danach: Ein offizieller Guide zeigt ihn ohne Weiteres.</p>
<p>Wer Besucher in der Nähe von Djemaa el-Fna oder an den Medina-Toren anspricht und anbietet, „den Weg zu zeigen“ oder „die Souks zu zeigen“, hat diesen Ausweis in aller Regel nicht. Die Führung endet fast immer in einem Laden, der Provision zahlt, und der anfangs genannte Preis ist nie der endgültige. Gefährlich ist das nicht, es kostet nur Zeit und Geld.</p>

<h2>Was es kostet</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Leistung</th><th>Richtpreis</th><th>Dauer</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Offizieller Guide, Medina</strong></td><td class="num">300–500 MAD</td><td>Halber Tag</td></tr>
<tr><td><strong>Offizieller Guide, ganzer Tag</strong></td><td class="num">500–800 MAD</td><td>8 Stunden</td></tr>
<tr><td><strong>Gruppenführung</strong></td><td class="num">15–30 € / Person</td><td>3–4 Stunden</td></tr>
<tr><td><strong>Ausflug mit Fahrer-Guide</strong></td><td class="num">60–120 € / Fahrzeug</td><td>Tag, Ourika oder Agafay</td></tr>
</tbody>
</table>
</div>
<p>Die Preise gelten für den Guide, ohne Eintritte, Mittagessen und Transport. Ein Trinkgeld von 50 bis 100 MAD am Ende ist üblich, wenn die Leistung gut war, aber nicht verpflichtend.</p>

<h2>Wo ein Guide wirklich etwas ändert</h2>
<p><strong>Medina und Souks</strong>, am ersten Tag. Das ist der lohnendste Einsatz: In drei Stunden verstehen Sie die Logik der Viertel, verorten die Tore und lernen, wo Sie was zu welchem Preis kaufen. Der Rest der Reise wird dadurch deutlich einfacher.</p>
<p><strong>Die historischen Monumente</strong> – Bahia-Palast, Saadiergräber, Ben-Youssef-Medersa –, wo die fast völlig fehlende Beschilderung den Besuch ohne Kommentar stumm lässt.</p>
<p><strong>Ausflüge in den Atlas und die Täler</strong>, wo der Guide zugleich als Berberdolmetscher wirkt und Türen öffnet, die sonst verschlossen blieben.</p>
<div class="callout">
<span class="callout-label">Wo ein Guide nichts bringt</span>
<p>Zum Bummeln auf Djemaa el-Fna am Abend, zum Abendessen, für einen Tag am Pool oder für Agafay als Pauschalangebot: Der Guide bringt nichts, und die Begleitung ist bereits Teil der Leistung.</p>
</div>

<h2>Buchen: vorab oder vor Ort?</h2>
<p>Zwei Wege funktionieren. Ihr <strong>Riad oder Hotel</strong> arbeitet fast immer mit einem ihm bekannten offiziellen Guide: die einfachste und oft sicherste Lösung, und der Preis bleibt verhandelbar. <strong>Online-Buchungsplattformen</strong> erlauben es, Bewertungen zu vergleichen und den Preis vorab zu sichern – nützlich in der Hochsaison oder wenn Sie eine bestimmte Sprache wünschen.</p>
<p>In beiden Fällen sollten Sie drei Punkte vorab klären: die genaue Dauer, was enthalten ist und dass die Führung <strong>keinen Ladenbesuch enthalten wird</strong>. Dieser letzte Satz, zu Beginn klar ausgesprochen, verhindert die meisten Enttäuschungen.</p>
`,
  faqs: [
    {
      q: 'Was kostet ein offizieller Guide in Marrakesch?',
      a: "Zwischen 300 und 500 MAD für einen halben Tag in der Medina und 500 bis 800 MAD für einen ganzen Tag, ohne Eintritte und Mittagessen. Ein Trinkgeld von 50 bis 100 MAD ist üblich, wenn die Leistung gut war.",
    },
    {
      q: 'Wie erkennt man einen offiziellen Guide in Marrakesch?',
      a: "Er besitzt einen vom Tourismusministerium ausgestellten Berufsausweis mit Foto und Nummer und zeigt ihn ohne Weiteres, wenn Sie danach fragen. Wer Besucher auf der Straße anspricht, hat ihn in der Regel nicht.",
    },
    {
      q: 'Braucht man einen Guide für die Medina von Marrakesch?',
      a: "Nicht zwingend, aber ein geführter halber Tag am Anfang ist eine der besten Investitionen der Reise: Sie verstehen die Geografie der Souks, verorten die Tore und kommen danach allein zurecht. Auch die historischen Monumente gewinnen mangels Beschilderung sehr durch Erläuterungen.",
    },
    {
      q: 'Wie vermeidet man Führungen, die im Laden enden?',
      a: "Sagen Sie zu Beginn klar, dass die Führung keinen Verkaufsstopp enthalten wird, und vereinbaren Sie vorab Dauer und Leistungsumfang. Ein offizieller Guide akzeptiert das problemlos; genau das unterscheidet ihn von einem provisionsbezahlten Schlepper.",
    },
    {
      q: 'Kann man einen Guide vor der Ankunft buchen?',
      a: "Ja, entweder über Ihr Riad oder Hotel, das meist mit einem bekannten offiziellen Guide arbeitet, oder über eine Online-Plattform mit Bewertungsvergleich und Sprachauswahl. Buchen Sie in der Hochsaison und für andere Sprachen als Französisch oder Englisch frühzeitig.",
    },
  ],
} satisfies LocalizedPage;
