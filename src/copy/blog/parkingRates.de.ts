import type { LocalizedArticle } from '../types';

export default {
  title: "Parktarife am Flughafen Marrakesch-Menara",
  description: "Parktarife am Flughafen Marrakesch-Menara: Preise pro Stunde, Tag und Woche, Kurzhaltezone, Bezahlung und günstigere Alternativen.",
  eyebrow: 'Flughafen',
  h1: 'Parken am Flughafen Marrakesch: die Tariftabelle',
  lede: "Sehr günstig zum Absetzen, vernünftig für einen Tagesausflug, deutlich weniger eindeutig für eine Woche. Hier die Größenordnungen und die Rechnung vor dem Abstellen.",
  excerpt: 'Preise pro Stunde, Tag und Woche am RAK-Parkplatz, mit Alternativen, wenn sich Langzeitparken nicht mehr lohnt.',
  date: '2026-09-06',
  facts: [
    { label: '30 Minuten', value: 'kostenlos', sub: 'oder ≈ 10 MAD' },
    { label: '1 Stunde', value: '≈ 20', sub: 'MAD' },
    { label: '24 Stunden', value: '70–80', sub: 'MAD' },
    { label: '1 Woche', value: '450–550', sub: 'MAD' },
  ],
  body: `
<h2>Die Tabelle in Größenordnungen</h2>
<p>Parken am RAK wird nach Dauer abgerechnet, mit einer kurzen ersten Stufe, kostenlos oder symbolisch, danach stundenweise mit Tagesdeckel. Die folgenden Werte wurden im September 2026 geprüft und dienen als Anhaltspunkt: <strong>Maßgeblich ist die Tafel am Eingang</strong>, der Tarif wird periodisch überarbeitet.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Dauer</th><th>Richtpreis</th><th>Typische Nutzung</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Unter 30 Minuten</strong></td><td class="num">kostenlos oder ≈ 10 MAD</td><td>Jemanden absetzen oder abholen</td></tr>
<tr><td><strong>1 Stunde</strong></td><td class="num">≈ 20 MAD</td><td>Auf einen verspäteten Flug warten</td></tr>
<tr><td><strong>3 Stunden</strong></td><td class="num">≈ 40 MAD</td><td>Jemanden zum Abflug begleiten</td></tr>
<tr><td><strong>24 Stunden</strong></td><td class="num">70–80 MAD</td><td>Tagesausflug</td></tr>
<tr><td><strong>3 Tage</strong></td><td class="num">≈ 200–240 MAD</td><td>Langes Wochenende</td></tr>
<tr><td><strong>1 Woche</strong></td><td class="num">450–550 MAD</td><td>Auslandsreise</td></tr>
</tbody>
</table>
</div>
<p>Bezahlt wird am Automaten oder an der Kasse, <strong>bevor</strong> Sie zum Fahrzeug zurückkehren. Nehmen Sie Bargeld mit: Nicht jeder Automat akzeptiert Karten.</p>

<h2>Ab wann es sich nicht mehr lohnt</h2>
<p>Vergleichen Sie mit einer Hin- und Rückfahrt in die Stadt: Zwei Taxifahrten zum ausgewiesenen Tarif kosten <strong>200 bis 300 MAD</strong>, zwei Privattransfers etwa 54 €. Ab drei oder vier Tagen erreicht und übertrifft das Parken diesen Betrag – und Sie lassen zudem ein Auto in der Sonne stehen.</p>
<div class="callout">
<span class="callout-label">60 °C im Innenraum</span>
<p>Ein in Marrakesch im Sommer in der prallen Sonne geparktes Auto überschreitet innen deutlich 60 °C. Lassen Sie weder Elektronik noch Kosmetik, Medikamente oder Feuerzeuge darin. Und nichts Sichtbares auf den Sitzen, wie überall.</p>
</div>

<h2>Absetzen und Abholen</h2>
<p>Vor den Terminals ist kurzes Halten möglich, und die Mitarbeiter halten den Verkehr in Bewegung, besonders abends. Holen Sie jemanden ab, denken Sie daran, dass <strong>zwischen Landung und Verlassen der Halle 30 bis 60 Minuten vergehen</strong>: Fahren Sie auf den Parkplatz und warten Sie dort, statt vor dem Gebäude zu kreisen.</p>

<h2>Mietwagen: kein Ticket ziehen</h2>
<p>Geben Sie einen Mietwagen zurück, ist der Rückgabeparkplatz vom Vermieter vorgesehen. Folgen Sie der Beschilderung der Station und ziehen Sie am öffentlichen Parkplatz kein Ticket, sonst zahlen Sie Zeit, die Sie nichts angeht. Planen Sie eine Viertelstunde für die Abnahme und bewahren Sie datierte Fotos des zurückgegebenen Fahrzeugs auf.</p>
`,
  faqs: [
    { q: 'Was kostet ein Tag Parken am Flughafen Marrakesch?', a: "Etwa 70 bis 80 MAD für 24 Stunden, darunter stundenweise rund 20 MAD pro Stunde. Maßgeblich ist die Tafel am Eingang, sie wird periodisch überarbeitet." },
    { q: 'Ist das Absetzen am RAK kostenlos?', a: "Die erste Stufe von etwa dreißig Minuten ist kostenlos oder symbolisch, was kurzes Absetzen oder Abholen abdeckt. Vor den Terminals wird der Verkehr zügig in Bewegung gehalten, besonders abends." },
    { q: 'Was kostet eine Woche Parken am Flughafen Marrakesch?', a: "Etwa 450 bis 550 MAD. Ab drei oder vier Tagen kosten zwei Hin- und Rückfahrten mit Taxi oder Transfer oft weniger und ersparen Ihnen ein Auto in der Sonne." },
    { q: 'Kann man in Marrakesch Menara das Parken mit Karte bezahlen?', a: "Nicht an jedem Automaten: Nehmen Sie Bargeld in Dirham mit. Bezahlt wird vor der Rückkehr zum Fahrzeug, am Automaten oder an der Kasse." },
  ],
} satisfies LocalizedArticle;
