import type { LocalizedPage } from '../types';

export default {
  title: 'Abflüge Flughafen Marrakesch (RAK): Anzeige in Echtzeit',
  description: 'Abflüge in Echtzeit ab Flughafen Marrakesch Menara: empfohlene Ankunftszeit, Check-in, Passkontrolle, Steuerrückerstattung und Geschäfte.',
  eyebrow: 'Marrakesch Menara · Abflüge',
  h1: 'Abflüge vom Flughafen Marrakesch',
  lede: "Die Tafel verfolgt die Abflüge ab Menara in Echtzeit. Darunter: wann Sie da sein sollten, wo sich die Schlangen tatsächlich bilden und wie Sie Ihre letzte Stunde in Marokko nicht stehend in einem Gang verbringen.",
  widget: 'flights-departures',
  body: `
<h2>Wann Sie da sein sollten</h2>
<p>Die Regel, die in Marrakesch funktioniert: <strong>zwei Stunden vor einem Schengen-Flug, drei in der Hochsaison</strong> oder sobald Sie Gepäck aufgeben. Nicht der Check-in ist das Problem, er geht schnell, sondern die Passkontrolle bei der Ausreise – der eigentliche Engpass des RAK. Die Spitzen liegen zwischen 6 und 9 Uhr und erneut am späten Nachmittag, wenn die europäischen Umläufe zurückfliegen.</p>
<p>Verlassen Sie Ihre Unterkunft entsprechend. Aus der Medina sollten Sie 20 bis 30 Minuten Fahrt plus den Fußweg zum Tor mit dem Gepäck einrechnen. Buchen Sie die Rückfahrt am Vorabend über Ihr Riad oder als Transfer: Ein Taxi um 5 Uhr morgens in einer Gasse zu finden, ist Glückssache, und bis zum Morgengrauen gilt der Nachttarif.</p>

<h2>Der Ablauf beim Abflug</h2>
<ol>
<li><strong>Zugangskontrolle zum Terminal.</strong> Eine erste Gepäckdurchleuchtung am Gebäudeeingang, noch vor den Schaltern.</li>
<li><strong>Check-in.</strong> Die Schalter öffnen in der Regel zwei bis drei Stunden vor dem Flug. Online-Check-in spart Zeit, aber nicht beim Gepäck: Die Aufgabe läuft über den Schalter.</li>
<li><strong>Grenzpolizei.</strong> Die längste Etappe. Ausreisekarte, Kontrolle von Pass und Einreisestempel.</li>
<li><strong>Sicherheitskontrolle.</strong> Flüssigkeiten auf 100 ml pro Behälter begrenzt, Elektronik aus der Tasche nehmen.</li>
<li><strong>Abflugbereich.</strong> Duty-free-Shops, Cafés, Lounges und Gates.</li>
</ol>

<h2>Was mitgenommen werden darf und was nicht</h2>
<p>Dirham darf nicht ausgeführt werden: Wechseln Sie Ihre Scheine über einen symbolischen Betrag hinaus <em>vor</em> der Grenzpolizei zurück, in den Wechselstuben der öffentlichen Halle. Im Abflugbereich ist das zu vernünftigen Bedingungen nicht mehr möglich. Bewahren Sie den Beleg Ihres ursprünglichen Umtauschs auf, manche Schalter verlangen ihn.</p>
<p>Zu den Souvenirs: Gewürze, Arganöl und Kosmetik in Behältern über 100 ml gehören ausnahmslos ins Aufgabegepäck. Keramik und zerbrechliche Stücke überstehen den Frachtraum ohne ordentliche Verpackung schlecht; die meisten Händler in der Medina packen auf Wunsch flugtauglich.</p>
<div class="callout">
<span class="callout-label">Steuerrückerstattung</span>
<p>Marokko erstattet Nichtansässigen die Mehrwertsteuer auf bestimmte Einkäufe bei zugelassenen Händlern. Das Formular muss am Zollschalter des Flughafens <strong>vor</strong> der Gepäckaufgabe abgestempelt werden, die Ware muss vorzeigbar sein. Lohnt sich für einen Teppich oder ein Silberstück, selten für Babouches.</p>
</div>

<h2>Lounges und Wartezeit</h2>
<p>Der Abflugbereich des RAK ist ordentlich ausgestattet, füllt sich aber zu denselben Zeiten wie die Schlangen. Wenn Sie am späten Tag abfliegen oder einen langen Anschluss haben, verwandelt ein Lounge-Zugang das Warten – eine der wenigen Komfortausgaben, die sich hier wirklich lohnt. Unsere eigene Seite behandelt die <a href="/de/blog/marrakech-airport-vip-lounges/">Lounges am Flughafen Marrakesch</a> und die Zugangsbedingungen.</p>
`,
  faqs: [
    {
      q: 'Wie früh muss man am Flughafen Marrakesch sein?',
      a: "Zwei Stunden für einen Schengen-Flug, drei in der Hochsaison oder mit aufgegebenem Gepäck. Die Passkontrolle bei der Ausreise ist der Engpass, vor allem zwischen 6 und 9 Uhr und am späten Nachmittag.",
    },
    {
      q: 'Darf man Dirham aus Marokko ausführen?',
      a: "Nein, der Dirham ist über einen symbolischen Betrag hinaus nicht ausführbar. Wechseln Sie Ihre Scheine in den Wechselstuben der öffentlichen Halle zurück, vor der Grenzpolizei: Im Abflugbereich ist das zu vernünftigen Bedingungen nicht mehr möglich. Bewahren Sie den Beleg des ursprünglichen Umtauschs auf.",
    },
    {
      q: 'Gibt es am Flughafen Marrakesch eine Steuerrückerstattung?',
      a: "Ja, für Nichtansässige, auf Einkäufe bei zugelassenen Händlern. Das Formular muss vor der Gepäckaufgabe am Zollschalter abgestempelt werden, die Ware muss vorzeigbar sein. Das betrifft vor allem höherwertige Käufe wie einen Teppich oder ein Silberstück.",
    },
    {
      q: 'Wie kommt man morgens aus der Medina zum Flughafen?',
      a: "Buchen Sie am Vorabend über Ihr Riad oder als Transfer: Ein Taxi um 5 Uhr morgens in einer Gasse zu finden, ist Glückssache, und bis zum Morgengrauen gilt der Nachttarif. Rechnen Sie 20 bis 30 Minuten Fahrt plus den Fußweg zum Tor mit dem Gepäck.",
    },
    {
      q: 'Darf Arganöl ins Handgepäck?',
      a: "Nur in Behältern bis 100 ml, gemeinsam in einem durchsichtigen Plastikbeutel. Darüber hinaus gehören Arganöl, flüssige Gewürze und Kosmetik ins Aufgabegepäck. Im Duty-free-Bereich nach der Kontrolle gekaufte Waren unterliegen dieser Grenze nicht.",
    },
  ],
  cta: {
    heading: 'Ihre Rückfahrt zum Flughafen, am Vorabend geklärt',
    text: "Ein Fahrer am richtigen Medina-Tor zur vereinbarten Zeit, fester Preis, auch um 5 Uhr morgens. Kostenlose Stornierung bei den meisten Buchungen.",
    label: 'Rücktransfer buchen',
  },
} satisfies LocalizedPage;
