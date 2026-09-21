import type { LocalizedPage } from '../types';

export default {
  title: 'Automatik-Mietwagen in Marrakesch',
  description: 'Automatikwagen am Flughafen Marrakesch mieten: reale Verfügbarkeit, Aufpreis, Stadtverkehr und Tipps für das erste Mal am Steuer in Marokko.',
  eyebrow: 'Marrakesch Menara · Einfach fahren',
  h1: 'Einfach fahren: Automatik in Marrakesch',
  lede: "In Marokko ist das Schaltgetriebe die Norm, Automatik muss reserviert werden. Wenn Sie hier noch nie gefahren sind, verändert diese Wahl mehr, als Sie denken – angefangen bei Ihrer ersten Stunde im Verkehr.",
  body: `
<h2>Automatik in Marokko: selten, also reservieren</h2>
<p>Die marokkanische Flotte fährt überwiegend mit Schaltgetriebe. Automatikwagen gibt es am RAK, aber vor allem ab der Kompaktklasse und nur in begrenzter Zahl. Zwei Folgen: ein <strong>Aufpreis von 15 bis 30 %</strong> gegenüber demselben Modell mit Schaltung und eine Verfügbarkeit, die mit steigender Saison schwindet.</p>
<p>Ist Automatik eine Notwendigkeit und keine Vorliebe – Automatik-Führerschein, Verletzung, schlicht Komfort –, geben Sie das <strong>bei der Buchung ausdrücklich an</strong> und lassen Sie sich das Getriebe schriftlich bestätigen. Der Zusatz „oder ähnlich“ im Mietvertrag garantiert nie die Getriebeart.</p>

<h2>Warum das hier wirklich zählt</h2>
<p>Der Verkehr in Marrakesch ist nicht aggressiv, aber <strong>dicht, flüssig und seitlich</strong>: Zweiräder, die rechts vorbeiziehen, Karren, querende Fußgänger, Vorfahrt per Blickkontakt statt per Schild. Die großen Kreisverkehre in Guéliz und die Avenue Mohammed VI funktionieren durch ständiges Einfädeln.</p>
<p>In diesem Umfeld setzt der Wegfall der Kupplung genau die Aufmerksamkeit frei, die Sie zum Umschauen brauchen. Das ist das einzige echte Argument – und es genügt.</p>
<div class="callout">
<span class="callout-label">Ihre erste Stunde am Steuer</span>
<p>Fahren Sie vom Flughafen Richtung Guéliz statt in die Medina und nehmen Sie sich dreißig Minuten, um den örtlichen Rhythmus aufzunehmen, bevor Sie zur Unterkunft fahren. Vermeiden Sie die erste Fahrt zwischen 17 und 19 Uhr und bei Nacht: Außerorts sind Fahrzeuge ohne Licht unterwegs.</p>
</div>

<h2>Was die Automatik nicht löst</h2>
<ul>
<li><strong>Parken in der Stadt</strong>, geregelt von informellen Wächtern in Warnweste: 5 bis 10 MAD, 20 MAD für die Nacht, bezahlt bei der Rückkehr, nicht beim Abstellen.</li>
<li><strong>Die Zufahrt zur Medina</strong>, mit dem Auto unmöglich, egal mit welchem Getriebe.</li>
<li><strong>Blitzer</strong>, fest und mobil, auf allen Hauptstraßen aktiv.</li>
<li><strong>Den Tichka-Pass</strong>, wo eine hubraumschwache Automatik bei langen Steigungen heiß wird und die Motorbremse bergab anders funktioniert.</li>
</ul>

<h2>Das richtige Fahrzeug wählen</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Automatik-Kategorie</th><th>Preis / Tag</th><th>Geeignet für</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Kompakt</strong> (Clio, Polo, i20)</td><td class="num">45–60 €</td><td>Stadt, Essaouira, Ourika</td></tr>
<tr><td><strong>Kompakt-SUV</strong> (Duster, Sportage)</td><td class="num">70–100 €</td><td>Atlas, Pisten von Agafay</td></tr>
<tr><td><strong>Limousine</strong></td><td class="num">90–140 €</td><td>Langstrecke, Casablanca</td></tr>
</tbody>
</table>
</div>
<p>Für das erste Mal am Steuer in Marokko ist der kompakte Automatikwagen der richtige Kompromiss: klein genug für die Straßen von Guéliz, stark genug für Klimaanlage und Steigungen und viel leichter zu parken als ein SUV.</p>

<h2>Und wenn Sie lieber gar nicht fahren</h2>
<p>Das ist eine völlig vernünftige Option, und viele Besucher wählen sie nach dem ersten Tag. Ein Transfer für An- und Abreise, Taxis in der Stadt für 15 bis 50 MAD pro Fahrt und ein Fahrzeug mit Fahrer für Ausflüge decken einen ganzen Aufenthalt ab, oft zu Gesamtkosten nahe einer Miete – ohne Kaution, ohne Fahrzeugabnahme und ohne Parken.</p>
`,
  faqs: [
    {
      q: 'Findet man in Marrakesch leicht Automatikwagen?',
      a: "Es gibt sie, aber sie sind in der Minderheit und konzentrieren sich auf die Kompaktklasse und darüber. Buchen Sie frühzeitig und lassen Sie sich das Getriebe schriftlich bestätigen: „oder ähnlich“ im Vertrag garantiert nie die Getriebeart.",
    },
    {
      q: 'Wie viel teurer ist Automatik in Marokko?',
      a: "Zwischen 15 und 30 % mehr als dasselbe Modell mit Schaltung. Ein kompakter Automatikwagen liegt bei rund 45 bis 60 € pro Tag, gegenüber 35 bis 45 € mit Schaltgetriebe.",
    },
    {
      q: 'Ist Autofahren in Marrakesch für Anfänger schwierig?',
      a: "Es ist eher dicht als aggressiv: Zweiräder, die rechts vorbeiziehen, Karren, Fußgänger und Vorfahrt per Blickkontakt. Eine Automatik schafft die nötige Aufmerksamkeit zum Beobachten. Vermeiden Sie die erste Fahrt zwischen 17 und 19 Uhr sowie nachts außerorts.",
    },
    {
      q: 'Wie funktioniert das Parken in Marrakesch?',
      a: "Informelle Wächter in Warnweste beaufsichtigen Straßen und Plätze: 5 bis 10 MAD für einige Stunden und etwa 20 MAD für die Nacht, bezahlt bei der Rückkehr und nicht beim Abstellen. Die Medina bleibt für Autos gesperrt.",
    },
  ],
} satisfies LocalizedPage;
