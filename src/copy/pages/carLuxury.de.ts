import type { LocalizedPage } from '../types';

export default {
  title: 'Luxus-Mietwagen in Marrakesch',
  description: 'Limousine, Premium-SUV oder Cabrio am Flughafen Marrakesch mieten: verfügbare Modelle, Preise, hohe Kautionen und die Alternative mit Fahrer.',
  eyebrow: 'Marrakesch Menara · Premium',
  h1: 'Luxus-Mietwagen in Marrakesch',
  lede: "Marrakesch ist eine der wenigen marokkanischen Städte, in denen gehobene Fahrzeuge tatsächlich zur Miete verfügbar sind. Hier die Modelle, die Preise und die Frage, die vor der Unterschrift zu klären ist: selbst fahren oder gefahren werden?",
  body: `
<h2>Was am RAK tatsächlich verfügbar ist</h2>
<p>Das Premiumangebot in Marrakesch gliedert sich in drei Familien. <strong>Deutsche Limousinen</strong> – Mercedes C- und E-Klasse, BMW 3er und 5er, Audi A4 und A6 – für Geschäftsfahrten und Strecken nach Casablanca. <strong>Premium-SUV</strong> – Range Rover, Porsche Cayenne, Mercedes GLE –, die am stärksten nachgefragt werden, weil sie die Pisten von Agafay und die Tichka-Straße mühelos wegstecken. Und einige <strong>Cabrios und Sportwagen</strong>, allen voran der Mustang, meist tageweise für einen Anlass gemietet.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Kategorie</th><th>Preis / Tag</th><th>Typische Kaution</th></tr></thead>
<tbody>
<tr><td><strong>Premium-Limousine</strong></td><td class="num">110–180 €</td><td class="num">20.000–30.000 MAD</td></tr>
<tr class="row-highlight"><td><strong>Premium-SUV</strong></td><td class="num">150–280 €</td><td class="num">30.000–50.000 MAD</td></tr>
<tr><td><strong>Cabrio / Sportwagen</strong></td><td class="num">200–400 €</td><td class="num">40.000–60.000 MAD</td></tr>
<tr><td><strong>VIP-Van mit Fahrer</strong></td><td class="num">150–250 €</td><td class="num">keine</td></tr>
</tbody>
</table>
</div>

<h2>Die Bedingungen sind strenger</h2>
<p>In diesen Klassen ist mit einem <strong>Mindestalter von 25 bis 30 Jahren</strong>, einem Führerscheinbesitz von mindestens drei bis fünf Jahren und einer Kaution zu rechnen, die die üblichen Kartenlimits deutlich übersteigt. Informieren Sie Ihre Bank vor der Abreise, damit Ihr Verfügungsrahmen vorübergehend angehoben wird: Das ist der Ablehnungsgrund Nummer eins am Schalter und lässt sich dort nicht lösen.</p>
<p>Manche Vermieter verlangen zudem einen Wohnsitznachweis und begrenzen die Kilometerleistung oder untersagen das Verlassen des Landes – ein Punkt, den Sie prüfen sollten, wenn Sie nach Süden wollen.</p>
<div class="callout">
<span class="callout-label">Die ehrliche Frage</span>
<p>Ein Premium-SUV für 200 € pro Tag, der vor einem Riad steht, weil die Medina Fußgängerzone ist, kostet dasselbe wie ein privater Fahrer für den Tag, der wartet, Sie absetzt und das Parken regelt. Bei einem städtischen Aufenthalt ist die zweite Option bequemer – und in der Summe oft günstiger.</p>
</div>

<h2>Auto mit Fahrer: der eigentliche Konkurrent</h2>
<p>In Marrakesch ist die Bereitstellung eines Fahrzeugs mit Fahrer eine gängige, gut organisierte Leistung auf einem Preisniveau, das dem einer Premiummiete entspricht. Sie erhalten einen Van oder eine Limousine, einen Fahrer, der die Atlas-Straßen und die Zufahrten kennt, und völlige Sorglosigkeit bei Parken, Kaution und Fahrzeugabnahme.</p>
<p>Sie drängt sich vor allem in drei Fällen auf: bei <strong>Langstrecken</strong> nach Ouarzazate oder Essaouira, wo die Straße Aufmerksamkeit verlangt; bei <strong>Geschäftsreisen</strong> mit mehreren Terminen am Tag; und bei <strong>Familienaufenthalten</strong>, bei denen nach einem Tag im Atlas niemand mehr fahren möchte.</p>

<h2>Richtig buchen</h2>
<p>Die Premiumflotte ist begrenzt: In Marrakesch rotieren dieselben Fahrzeuge zwischen mehreren Stationen. In der Hochsaison – Frühjahr, Jahresendfeiertage, Großveranstaltungen – sollten Sie mehrere Wochen im Voraus buchen und sich das <strong>genaue Modell</strong> schriftlich bestätigen lassen, nicht nur die Kategorie. Fotografieren Sie das Fahrzeug bei der Übernahme im Detail: In diesen Klassen schlägt eine einzige beschädigte Felge mit Tausenden Dirham zu Buche.</p>
`,
  faqs: [
    {
      q: 'Was kostet ein Luxus-Mietwagen in Marrakesch?',
      a: "110 bis 180 € pro Tag für eine Premium-Limousine, 150 bis 280 € für einen SUV wie Range Rover oder Cayenne und 200 bis 400 € für ein Cabrio oder einen Sportwagen. Die Kautionen reichen je nach Modell von 20.000 bis 60.000 MAD.",
    },
    {
      q: 'Welches Alter ist für einen gehobenen Mietwagen in Marokko nötig?',
      a: "In der Regel mindestens 25 Jahre, bei Sportwagen teils 30, mit drei bis fünf Jahren Führerscheinbesitz. Ein Wohnsitznachweis kann verlangt werden, und manche Verträge begrenzen die Kilometerleistung oder untersagen das Verlassen des Landes.",
    },
    {
      q: 'Premium-Mietwagen oder Fahrer?',
      a: "Bei einem städtischen Aufenthalt ist der Fahrer bequemer und in der Summe oft günstiger: keine Kaution, kein Parken, keine Fahrzeugabnahme, und ein Wagen, der auf Sie wartet. Die Premiummiete behält ihren Sinn für eine Rundreise, bei der das Fahren selbst Teil der Reise ist.",
    },
    {
      q: 'Reicht meine Kreditkarte für die Kaution?',
      a: "Selten ohne Vorbereitung: Kautionen von 30.000 bis 60.000 MAD übersteigen Standardlimits. Lassen Sie Ihren Verfügungsrahmen vor der Abreise vorübergehend anheben – das ist die häufigste Ablehnungsursache am Schalter und lässt sich dort nicht beheben.",
    },
  ],
} satisfies LocalizedPage;
