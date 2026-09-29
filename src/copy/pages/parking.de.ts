import type { LocalizedPage } from '../types';

export default {
  title: "Parken am Flughafen Marrakesch-Menara: Tarife und Zufahrt",
  description: "Parkplätze am Flughafen Marrakesch-Menara: Stunden- und Tagestarife, Kurzhaltezone, Langzeitparken und günstigere Alternativen.",
  eyebrow: 'Marrakesch Menara · Parken',
  h1: 'Parken am Flughafen Marrakesch',
  lede: "Der RAK verfügt über oberirdische Parkplätze vor den Terminals, mit gestaffeltem Tarif: sehr günstig zum Absetzen, deutlich weniger für eine Woche. Hier, was Sie zahlen und wann Sie besser nicht mit dem Auto kommen.",
  body: `
<h2>Die Tarife im Überblick</h2>
<p>Das Flughafenparken wird nach Dauer berechnet, mit einer sehr kurzen ersten Stufe, die kostenlos oder symbolisch ist, danach stundenweise mit Tagesdeckel. Als Anhaltspunkt, geprüft im September 2026:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Dauer</th><th>Richtpreis</th><th>Verwendung</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Unter 30 Minuten</strong></td><td class="num">kostenlos oder ≈ 10 MAD</td><td>Absetzen und Abholen</td></tr>
<tr><td><strong>1 Stunde</strong></td><td class="num">≈ 20 MAD</td><td>Auf einen verspäteten Flug warten</td></tr>
<tr><td><strong>24 Stunden</strong></td><td class="num">≈ 70–80 MAD</td><td>Tagesrundfahrt</td></tr>
<tr><td><strong>1 Woche</strong></td><td class="num">≈ 450–550 MAD</td><td>Kurze Auslandsreise</td></tr>
</tbody>
</table>
</div>
<p>Das sind Größenordnungen: Der Tarif wird periodisch überarbeitet, maßgeblich ist die Anzeige am Eingang. Bezahlt wird am Automaten oder an der Kasse, bevor Sie zum Fahrzeug zurückkehren, vorzugsweise bar.</p>

<h2>Absetzen und Abholen: der richtige Reflex</h2>
<p>Der Bereich vor den Terminals ist zum Halten gedacht, nicht zum Parken: Die Mitarbeiter halten den Verkehr in Bewegung, besonders abends. Wenn Sie jemanden abholen, dessen Flug gerade gelandet ist, denken Sie daran, dass <strong>zwischen Landung und Verlassen der Halle 30 bis 60 Minuten vergehen</strong>. Warten Sie lieber mit einer vereinbarten Nachricht auf dem Parkplatz, als vor dem Gebäude im Kreis zu fahren.</p>

<h2>Langzeitparken: vorher rechnen</h2>
<p>Für eine Woche bleibt der offizielle Parkplatz im europäischen Vergleich vernünftig, ist aber nicht unerheblich. Zwei Alternativen lohnen den Vergleich:</p>
<ul>
<li><strong>Hin- und Rückfahrt per Transfer oder Taxi.</strong> Zwei Fahrten ins Zentrum kosten 200 bis 300 MAD, weniger als eine Woche Parken – und Sie lassen kein Auto sieben Tage in der Sonne stehen.</li>
<li><strong>Der bewachte Parkplatz eines nahen Hotels.</strong> Manche Häuser wenige Minuten vom Flughafen bieten Übernachtung plus Parken an, interessant bei einem Abflug um 6 Uhr morgens.</li>
</ul>
<div class="callout">
<span class="callout-label">Mietwagen: zahlen Sie nicht fürs Parken</span>
<p>Wenn Sie ein Mietfahrzeug zurückgeben, ist der Rückgabeparkplatz vom Vermieter vorgesehen: Folgen Sie der Beschilderung der Station und ziehen Sie am Eingang des öffentlichen Parkplatzes kein Ticket. Planen Sie eine Viertelstunde für die Abnahme ein und bewahren Sie datierte Fotos des zurückgegebenen Fahrzeugs auf.</p>
</div>

<h2>Sicherheit und gesunder Menschenverstand</h2>
<p>Die Parkplätze sind eingezäunt und bewacht, doch es gilt dieselbe Regel wie überall: nichts Sichtbares im Innenraum, kein Navi an der Scheibe, keine Tasche auf der Rückbank. Im Sommer überschreitet der Innenraum eines in der Sonne geparkten Autos in Marrakesch deutlich 60 °C: Lassen Sie weder Elektronik noch Kosmetik oder Medikamente darin.</p>
`,
  faqs: [
    {
      q: 'Was kostet das Parken am Flughafen Marrakesch?',
      a: "Rund 20 MAD für eine Stunde, 70 bis 80 MAD für 24 Stunden und 450 bis 550 MAD für eine Woche, mit einer ersten Stufe von dreißig Minuten kostenlos oder symbolisch zum Absetzen. Maßgeblich ist die Tafel am Eingang, sie wird periodisch überarbeitet.",
    },
    {
      q: 'Gibt es in Marrakesch Menara eine Kurzhaltezone?',
      a: "Ja, der Bereich vor den Terminals erlaubt es, zum Absetzen von Passagieren zu halten, mit einer kurzen kostenlosen oder symbolischen Stufe. Die Mitarbeiter halten den Verkehr in Bewegung: Zum Warten fahren Sie besser auf den Parkplatz.",
    },
    {
      q: 'Ist der Parkplatz am Flughafen Marrakesch bewacht?',
      a: "Die Parkplätze sind eingezäunt und bewacht. Treffen Sie dennoch die üblichen Vorkehrungen: nichts Sichtbares im Innenraum und nichts Hitzeempfindliches in einem in der Sonne geparkten Auto.",
    },
    {
      q: 'Lieber am Flughafen parken oder mit dem Taxi kommen?',
      a: "Für einen einwöchigen Aufenthalt kosten zwei Hin- und Rückfahrten mit Taxi oder Transfer oft weniger als das Parken und ersparen Ihnen ein ungeschütztes Fahrzeug. Parken lohnt sich vor allem für kurze Rundfahrten von einigen Stunden bis zwei Tagen.",
    },
  ],
  cta: {
    heading: 'Ihr Auto nicht eine Woche in der Sonne lassen?',
    text: "Eine Hin- und Rückfahrt per Privattransfer kostet oft weniger als Langzeitparken, Fahrer inklusive.",
    label: 'Mit Transfer vergleichen',
  },
} satisfies LocalizedPage;
