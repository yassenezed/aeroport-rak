import type { LocalizedPage } from '../types';

export default {
  title: 'Ankünfte Flughafen Marrakesch (RAK): Flüge in Echtzeit',
  description: 'Ankünfte in Echtzeit am Flughafen Marrakesch Menara: Flugstatus, Weg durch die Halle, Passkontrolle, Gepäck, Geldautomaten und Weiterfahrt in die Stadt.',
  eyebrow: 'Marrakesch Menara · Ankünfte',
  h1: 'Ankünfte am Flughafen Marrakesch',
  lede: "Die Tafel unten verfolgt die Flüge, sobald sie in Menara landen. Darunter der tatsächliche Weg von der Fluggastbrücke zum Bordstein: Polizei, Gepäck, Geldautomaten und die Tür, durch die man am schnellsten hinauskommt.",
  widget: 'flights-arrivals',
  body: `
<h2>Vom Flugzeug zum Bordstein</h2>
<p>Von der Fluggastbrücke bis zum Ausgang sollten Sie <strong>30 bis 60 Minuten</strong> einplanen, je nach Uhrzeit. Der RAK bündelt seine Ankünfte am Abend, wenn mehrere europäische Flüge in derselben halben Stunde landen: Dann entscheidet die Grenzpolizei darüber, ob Sie in zwanzig Minuten draußen sind oder eine Stunde warten.</p>
<ol>
<li><strong>Grenzpolizei.</strong> Passkontrolle und Einreisekarte. Sie wird auf den meisten Flügen an Bord verteilt; füllen Sie sie im Flugzeug aus, sonst verlassen Sie die Schlange, um einen Stift zu suchen. Staatsangehörige der EU, der Schweiz, Großbritanniens, Kanadas und der USA benötigen für einen touristischen Aufenthalt bis 90 Tage kein Visum.</li>
<li><strong>Gepäckausgabe.</strong> Die Bänder liegen direkt hinter der Kontrolle. Bei Abendflügen ist die Wartezeit real: 20 bis 30 Minuten sind keine Seltenheit.</li>
<li><strong>Zoll.</strong> In der Regel zügig, mit Stichproben. Bargeld ist erst ab 100.000 MAD anzumelden.</li>
<li><strong>Öffentliche Halle.</strong> Geldautomaten, Wechselstuben, SIM-Karten-Schalter, Mietwagenschalter und dann die Türen zum Taxistand und zu den Parkplätzen.</li>
</ol>

<h2>Geld abheben, bevor Sie hinausgehen</h2>
<p>Diesen Schritt sollten Sie nicht überspringen. Taxis nehmen keine Karten, und Dirham lässt sich außerhalb Marokkos nicht kaufen: Die Ankunftshalle ist damit Ihre erste Wechselstelle. Die Automaten funktionieren gut, geben aber gern 200-MAD-Scheine aus. Heben Sie genug für die Fahrt und die ersten Tage ab und wechseln Sie im Café oder Shop des Terminals: Mit 50er- und 100er-Scheinen ersparen Sie sich die Diskussion über Wechselgeld im Taxi.</p>
<div class="callout">
<span class="callout-label">Der Reflex, der zwanzig Minuten spart</span>
<p>Wenn Sie jemand abholt – ein gebuchter Transfer oder der Shuttle des Riads –, ist der Treffpunkt der Bordstein vor der Ankunftshalle, nicht das Innere des Terminals. Eine Nachricht an den Fahrer, sobald Sie Netz haben, noch vor dem Zoll, genügt zur Abstimmung.</p>
</div>

<h2>Der Weg nach draußen: was Sie erwartet</h2>
<p>Man spricht Sie an, bevor Sie die Tür erreichen. Das ist normal und selten aggressiv, lässt sich aber vorwegnehmen: Der offizielle Taxistand liegt direkt vor dem Ausgang, und seine Tafel nennt die Tarife nach Zonen. Jedes Angebot <em>innerhalb</em> des Terminals fällt aus diesem Rahmen.</p>
<p>Für ein Hotel in Guéliz oder im Hivernage am Tag nehmen Sie das Taxi und nennen den ausgewiesenen Betrag, bevor der Kofferraum geöffnet wird. Für ein Riad in der Medina, einen Flug nach 21 Uhr oder eine Gruppe ab vier Personen klärt der gebuchte Transfer Preis, Fahrzeuggröße und Absetzpunkt im Voraus.</p>

<h2>Nachts ankommen</h2>
<p>Ein großer Teil der Billigflüge landet zwischen 21 und 1 Uhr. Drei praktische Folgen: Der Taxitarif wechselt auf den Nachtsatz von 150 bis 240 MAD; der Bus 19 fährt nach 23:30 Uhr nicht mehr; und die schwach beleuchteten Gassen der Medina eignen sich schlecht für die Suche nach einem Riad mit Koffer. Landet Ihr Flug spät, ist ein gebuchter Transfer kein Luxus: Der Fahrer verfolgt die Flugnummer und wartet bei Verspätung.</p>
`,
  faqs: [
    {
      q: 'Wie lange dauert es, den Flughafen Marrakesch nach der Landung zu verlassen?',
      a: "In der Praxis 30 bis 60 Minuten: Die Grenzpolizei braucht je nach Andrang 15 bis 40 Minuten, die Gepäckausgabe bei Abendflügen 20 bis 30 Minuten. Ankünfte zwischen 20 Uhr und Mitternacht sind am stärksten belastet, weil mehrere europäische Flüge gleichzeitig landen.",
    },
    {
      q: 'Muss man in Marrakesch eine Einreisekarte ausfüllen?',
      a: "Ja, bei der Ankunft wird ein Polizeiformular verlangt. Es wird auf den meisten Flügen an Bord verteilt: Füllen Sie es während des Flugs aus, um die Schlange nicht verlassen zu müssen. Sie benötigen die Adresse Ihrer Unterkunft in Marrakesch.",
    },
    {
      q: 'Gibt es Geldautomaten in der Ankunftshalle?',
      a: "Ja, mehrere Automaten und Wechselstuben befinden sich in der öffentlichen Halle hinter dem Zoll. Heben Sie ab, bevor Sie hinausgehen: Taxis nehmen keine Karten, und Dirham lässt sich außerhalb Marokkos nicht kaufen.",
    },
    {
      q: 'Wo trifft man seinen Fahrer in Marrakesch Menara?',
      a: "Am Bordstein vor der Ankunftshalle. Gebuchte Transfers nennen im Bestätigungsvoucher einen genauen Treffpunkt, und der Fahrer hält ein Schild mit Ihrem Namen. Schreiben Sie ihm, sobald Sie Netz haben.",
    },
    {
      q: 'Mein Flug landet nach Mitternacht – gibt es noch Taxis?',
      a: "Ja, der Stand wird bedient, solange Flüge ankommen. Der Tarif wechselt lediglich auf den Nachtsatz von 150 bis 240 MAD in die Medina, nach Guéliz und ins Hivernage. Der Bus 19 endet dagegen um 23:30 Uhr.",
    },
  ],
  cta: {
    heading: 'Ein Fahrer, der auf Ihren Flug wartet – nicht umgekehrt',
    text: "Verfolgung der Flugnummer, Wartezeit bei Verspätung inklusive, fester Preis pro Fahrzeug für bis zu sieben Personen und Absetzen am nächstgelegenen Medina-Tor.",
    label: 'Transfer buchen',
  },
} satisfies LocalizedPage;
