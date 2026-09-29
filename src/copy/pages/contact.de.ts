import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: "Kontakt — AeroportRAK, Flughafen Marrakesch-Menara",
  description: "AeroportRAK kontaktieren: eine Information zum Flughafen Marrakesch-Menara korrigieren, einen veralteten Preis melden oder eine geschäftliche Anfrage stellen.",
  eyebrow: 'AeroportRAK',
  h1: 'Kontakt',
  lede: "Eine veraltete Information, ein Preis, der nicht mehr stimmt, eine Ergänzung: Schreiben Sie uns. Wir lesen jede Nachricht und korrigieren die betroffenen Seiten.",
  body: `
<h2>An die Redaktion schreiben</h2>
<p>E-Mail: <a href="mailto:${site.contactEmail}">${site.contactEmail}</a></p>
<p>Nennen Sie bei einer Fehlermeldung möglichst <strong>die Adresse der betroffenen Seite</strong>, die fragliche Stelle und was Sie vor Ort festgestellt haben, mit Datum. Ein Foto einer Preistafel oder eines Fahrplans ist mehr wert als eine lange Erklärung: So können wir schnell und sicher korrigieren.</p>

<h2>Was wir nicht tun können</h2>
<p>AeroportRAK ist ein unabhängiger redaktioneller Guide, kein Flughafenservice und kein Reisebüro. Wir können daher nicht:</p>
<ul>
<li>eine Flug-, Hotel- oder Transferbuchung ändern, stornieren oder auffinden;</li>
<li>den Status eines verlorenen Gepäckstücks mitteilen – das ist Sache des Schalters Ihrer Airline;</li>
<li>bei einer Autovermietung, einem Hotel oder einem Fahrer eingreifen;</li>
<li>eine Flugzeit in Echtzeit bestätigen, über das hinaus, was unsere Tafeln für <a href="/de/arrivals/">Ankünfte</a> und <a href="/de/departures/">Abflüge</a> zeigen.</li>
</ul>
<p>Wenden Sie sich dafür direkt an den jeweiligen Anbieter: Nur dessen Kundenservice verfügt über die Daten Ihrer Buchung.</p>

<h2>Geschäftliche Anfragen</h2>
<p>Hoteliers, Autovermieter, Transferanbieter, Tourismusämter: Wir verkaufen keine redaktionellen Platzierungen, und kein Betrieb kann seine Nennung oder Position auf dieser Website kaufen. Sachliche Korrekturen zu Ihnen – Öffnungszeiten, Preise, Kapazitäten, Leistungen – nehmen wir mit überprüfbarer Quelle gern entgegen.</p>

<h2>Antwortzeit</h2>
<p>Wir antworten in der Regel innerhalb weniger Werktage. Meldungen sachlicher Fehler haben Vorrang, weil sie Leser betreffen, die gerade eine Reise planen.</p>
`,
} satisfies LocalizedPage;
