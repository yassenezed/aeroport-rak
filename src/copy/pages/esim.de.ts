import type { LocalizedPage } from '../types';

export default {
  title: "eSIM Marokko: online ab Flughafen Marrakesch-Menara",
  description: "eSIM für Marokko: sofort online beim Aussteigen am Flughafen Marrakesch-Menara, im Vergleich zur lokalen SIM und zum EU-Roaming.",
  eyebrow: 'Marrakesch Menara · Verbindung',
  h1: 'eSIM Marokko: ab der Landung verbunden',
  lede: "Marokko gehört nicht zur EU-Roamingzone: Ihr Tarif wird dort entweder sehr teuer oder unbrauchbar. Hier die drei Wege, das zu lösen, und derjenige, der Ihnen bei der Ankunft zwanzig Minuten spart.",
  body: `
<h2>Warum das vor der Abreise geklärt werden sollte</h2>
<p>Außerhalb der Europäischen Union wird Roaming zum vollen Preis abgerechnet: bei manchen Anbietern mehrere Euro pro Megabyte, mit dreistelligen Rechnungen nach der Rückkehr. Die meisten Reisenden schalten daher die Daten ab und stehen dann vor dem Terminal, ohne ein Riad anrufen, einen Fahrer informieren oder eine Karte öffnen zu können.</p>
<p>Genau dann braucht man es am dringendsten: um ein Medina-Tor zu bestätigen, einen Transfer zu finden oder schlicht zu prüfen, ob man in Gassen, in denen kein Schild zur Karte passt, in die richtige Richtung geht.</p>

<h2>Die drei Optionen im Vergleich</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Lösung</th><th>Richtpreis</th><th>Verfügbar</th><th>Grenzen</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Prepaid-eSIM</strong></td><td class="num">4–15 € / Woche</td><td>Ab der Landung</td><td>Kompatibles, entsperrtes Telefon nötig</td></tr>
<tr><td><strong>Lokale SIM</strong></td><td class="num">≈ 50–100 MAD</td><td>Schalter in der Ankunftshalle</td><td>Warteschlange, Reisepass, neue Nummer</td></tr>
<tr><td><strong>Roaming Ihres Tarifs</strong></td><td class="num">Sehr unterschiedlich</td><td>Sofort</td><td>Ohne Welt-Option oft prohibitiv</td></tr>
</tbody>
</table>
</div>

<h2>Die eSIM konkret</h2>
<p>Eine eSIM ist eine SIM-Karte ohne Plastik: Sie kaufen sie online, scannen einen QR-Code, und der Tarif aktiviert sich bei der Landung, ohne Kartenwechsel. Ihre gewohnte Nummer bleibt für Anrufe und SMS aktiv, denn die eSIM trägt nur die Daten.</p>
<p>Drei Prüfungen vor dem Kauf: Ihr Telefon muss <strong>eSIM unterstützen</strong> (alle iPhones ab dem XS, die meisten neueren Android-Geräte); es muss <strong>netzunabhängig entsperrt</strong> sein; und die Installation erfolgt, <strong>solange Sie noch WLAN haben</strong>, also vor dem Abflug oder über das Flughafen-WLAN.</p>
<div class="callout">
<span class="callout-label">Das richtige Datenvolumen</span>
<p>Für eine Woche in Marrakesch reichen 3 bis 5 GB bequem: vorab heruntergeladene Offline-Karten, Messenger, ein paar Suchanfragen. 20 GB zu bezahlen ist unnötig, außer Sie wollen per Hotspot arbeiten.</p>
</div>

<h2>Wann die lokale SIM besser bleibt</h2>
<p>Wenn Sie <strong>marokkanische Nummern anrufen</strong> müssen – ein Riad, eine Autovermietung, einen Guide –, ist eine lokale SIM mit Sprachminuten praktischer und günstiger als ein Auslandsgespräch. Dasselbe gilt für längere Aufenthalte ab zwei oder drei Wochen, bei denen die Tarife von Maroc Telecom, Orange oder inwi sehr wettbewerbsfähig werden. Die Schalter liegen in der Ankunftshalle: Reisepass mitbringen und rund zehn Minuten einplanen.</p>
<p>Unser ausführlicher Artikel zu <a href="/de/blog/morocco-sim-cards/">SIM-Karten in Marokko</a> vergleicht die Tarife der drei Anbieter und ihre Abdeckung, auch im Atlas.</p>
`,
  faqs: [
    {
      q: 'Funktioniert eine eSIM sofort nach der Landung in Marrakesch?',
      a: "Ja, sofern Sie sie vor der Abreise im WLAN installiert haben. Der Tarif aktiviert sich automatisch, sobald Ihr Telefon ein marokkanisches Netz findet – Sie sind also erreichbar, noch bevor Sie die Grenzpolizei passieren.",
    },
    {
      q: 'Ist mein Telefon eSIM-fähig?',
      a: "Alle iPhones ab dem XS, Google Pixel ab dem 3 und die meisten neueren Samsung Galaxy S und Z sind es. Das Telefon muss zudem netzunabhängig entsperrt sein. In den Netzeinstellungen bestätigt eine Option zum Hinzufügen eines eSIM-Tarifs die Kompatibilität.",
    },
    {
      q: 'Wie viele Daten braucht man für eine Woche in Marrakesch?',
      a: "Drei bis fünf Gigabyte reichen für touristische Nutzung: Karten, Messenger und Suchanfragen. Laden Sie die Karte von Marrakesch vor der Abreise offline herunter, das verbraucht am meisten.",
    },
    {
      q: 'eSIM oder lokale SIM-Karte?',
      a: "Die eSIM für einen kurzen Aufenthalt mit reinem Datenbedarf: keine Schlange, kein Papierkram, sofortige Verbindung. Die lokale SIM, wenn Sie marokkanische Nummern anrufen müssen oder länger als zwei bis drei Wochen bleiben, denn dann sind lokale Tarife deutlich günstiger.",
    },
    {
      q: 'Funktioniert EU-Roaming in Marokko?',
      a: "Nein, Marokko gehört nicht zur europäischen Roamingzone. Daten werden zum internationalen Tarif abgerechnet, oft sehr hoch, sofern Ihr Tarif nicht ausdrücklich eine Welt-Option mit Marokko enthält.",
    },
  ],
} satisfies LocalizedPage;
