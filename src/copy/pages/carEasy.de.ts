import type { LocalizedPage } from '../types';

export default {
  title: "Mietwagen mit Automatik, Flughafen Marrakesch-Menara ab 45 €",
  description: "Mietwagen mit Automatik am Flughafen Marrakesch-Menara ab 45 €/Tag: Verfügbarkeit, Aufpreis, Modelle und Tipps für die erste Fahrt in Marokko.",
  eyebrow: "Entspannt fahren · Automatikgetriebe",
  h1: "Mietwagen mit Automatik am Flughafen Marrakesch-Menara",
  lede: "In Marokko ist das Schaltgetriebe noch die Regel, Automatik muss reserviert werden. Wenn Sie hier noch nie gefahren sind, verändert diese Wahl viel, angefangen bei Ihrer ersten Stunde im Verkehr von Marrakesch.",
  highlights: [
    { icon: 'wallet', value: "Ab 45 €", label: "Pro Tag, Kompaktwagen mit Automatik" },
    { icon: 'check', value: "Ohne Kupplung", label: "Zwei Pedale, nur rechter Fuß" },
    { icon: 'dollar-circle', value: "+15 bis 30 %", label: "Aufpreis gegenüber Schaltwagen" },
    { icon: 'passport', value: "Klasse B", label: "Kein Sonderführerschein nötig" },
  ],
  widget: 'car-rental',
  widgetIntro: {
    heading: "Automatik-Mietwagen am Flughafen Marrakesch-Menara buchen",
    text: "Tippen Sie „Marrakech“ und wählen Sie „Marrakech Airport“, dann Ihre Daten: Filtern Sie die Ergebnisse nach Automatikgetriebe.",
  },
  cardSections: [
    {
      eyebrow: "Vorteile",
      heading: "Warum Automatik in Marrakesch",
      intro: "In dichtem, unberechenbarem Verkehr ist Automatik kein Luxus.",
      variant: 'feature',
      items: [
        { icon: 'check', title: "Fahren ohne Anstrengung", text: "Keine Kupplung, keine Gänge: Ihre ganze Aufmerksamkeit bleibt bei der Straße." },
        { icon: 'users', title: "Passend zum Verkehr", text: "Roller, Karren, Fußgänger, die Kreisel in Guéliz: kein Abwürgen, viel weniger Stress." },
        { icon: 'map', title: "Komfort in Bergen und auf Landstraßen", text: "Anstiege nach Imlil und lange Geraden nach Essaouira ohne Ermüdung." },
        { icon: 'star', title: "Beruhigend beim ersten Besuch", text: "Zum ersten Mal in Marokko oder wenig Fahrpraxis? Automatik macht alles einfacher." },
      ],
    },
    {
      eyebrow: "Das Angebot",
      heading: "Automatik-Mietwagen in Marrakesch",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Kompaktwagen mit Automatik", text: "Renault Clio, Volkswagen Polo, Hyundai i20: leicht zu parken, ideal für Stadt, Essaouira und Ourika.", tags: ["45–60 €/Tag"] },
        { icon: 'map', title: "SUVs mit Automatik", text: "Dacia Duster, Kia Sportage: Bodenfreiheit und Komfort für Atlas und Agafay-Pisten.", tags: ["70–100 €/Tag"] },
        { icon: 'star', title: "Limousinen mit Automatik", text: "Komfort und Platz für lange Strecken und Geschäftsreisen.", tags: ["90–140 €/Tag"] },
      ],
    },
    {
      eyebrow: "Tipps",
      heading: "Erste Fahrt mit Automatik: 4 Tipps",
      variant: 'compact',
      items: [
        { icon: 'info', title: "Nur der rechte Fuß", text: "Gas und Bremse mit demselben Fuß; den linken nie auf die Bremse stellen." },
        { icon: 'lock', title: "Vor dem Wählen bremsen", text: "Bremse gedrückt halten, um von P auf D oder R zu schalten." },
        { icon: 'map', title: "Gefälle beherrschen", text: "Am Tichka den manuellen Modus oder L nutzen, statt nur zu bremsen." },
        { icon: 'clock', title: "Früh buchen", text: "Automatik ist knapp: 2 bis 3 Wochen vorher, vor allem in der Hochsaison." },
      ],
    },
    {
      eyebrow: "Vergleichen",
      heading: "Automatik, Kleinwagen, Premium oder Van?",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Kleinwagen", text: "Schaltwagen zum besten Preis, für sichere Fahrer.", tags: ["Ab 25 €/Tag"], link: { key: 'carBudget', label: "Kleinwagen ansehen" } },
        { icon: 'star', title: "Premium", text: "Premium-Limousinen und SUVs, serienmäßig mit Automatik.", tags: ["Ab 110 €/Tag"], link: { key: 'carLuxury', label: "Premium ansehen" } },
        { icon: 'users', title: "Van mit 7 bis 9 Plätzen", text: "Für Gruppen; wenige Automatikmodelle, sehr früh buchen.", tags: ["Ab 55 €/Tag"], link: { key: 'carMinivan', label: "Vans ansehen" } },
      ],
    },
  ],
  body: `
<h2>Automatik in Marokko: in der Minderheit, also reservieren</h2>
<p>Die marokkanische Flotte ist überwiegend manuell. Automatikwagen gibt es am Flughafen Marrakesch, aber vor allem ab der Kompaktklasse. Zwei Folgen: ein <strong>Aufpreis von 15 bis 30 %</strong> gegenüber demselben Modell mit Schaltung, und eine Verfügbarkeit, die in der Saison schnell knapp wird. Ist Automatik ein Muss (Automatik-Führerschein, Verletzung), sagen Sie es bei der Buchung und lassen Sie <strong>das Getriebe schriftlich bestätigen</strong>: „oder ähnlich“ garantiert nie den Getriebetyp.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Automatik-Kategorie</th><th>Preis / Tag</th><th>Geeignet für</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Kompakt (Clio, Polo, i20)</strong></td><td class="num">45–60 €</td><td>Stadt, Essaouira, Ourika</td></tr>
<tr><td><strong>Kompakt-SUV (Duster, Sportage)</strong></td><td class="num">70–100 €</td><td>Atlas, Agafay-Pisten</td></tr>
<tr><td><strong>Limousine</strong></td><td class="num">90–140 €</td><td>Lange Strecken, Geschäftsreisen</td></tr>
</tbody>
</table>
</div>

<h2>Die erste Stunde am Steuer ab Flughafen Marrakesch-Menara</h2>
<p>Fahren Sie vom Flughafen Richtung Guéliz statt zur Medina und nehmen Sie sich dreißig Minuten, um sich an den örtlichen Rhythmus zu gewöhnen, bevor Sie zur Unterkunft fahren. Meiden Sie die erste Fahrt zwischen 17 und 19 Uhr und nachts: Außerorts fahren manche Fahrzeuge ohne Licht.</p>
<h3>Kurzanleitung P-R-N-D</h3>
<ul>
<li><strong>P</strong> (Parken): zum Starten und Abstellen des Motors.</li>
<li><strong>R</strong> (Rückwärts): immer mit gedrückter Bremse einlegen.</li>
<li><strong>N</strong> (Neutral): selten nötig.</li>
<li><strong>D</strong> (Drive): die normale Fahrstufe.</li>
</ul>

<h2>Was Automatik nicht löst</h2>
<p>Das <strong>Parken in der Stadt</strong>, betreut von Wächtern in Warnwesten (5 bis 10 MAD, 20 MAD über Nacht, bei Rückkehr zahlen); den <strong>Zugang zur Medina</strong>, mit dem Auto unmöglich; die <strong>Radarkontrollen</strong>, fest und mobil; und den <strong>Tichka-Pass</strong>, wo ein kleiner Automatikwagen bei langer Steigung heiß läuft. Wenn Sie lieber gar nicht fahren, decken ein <a href="/de/book-transfer/">Transfer</a> bei Ankunft, Taxis in der Stadt und ein Fahrer für Ausflüge den ganzen Aufenthalt ab, ohne Kaution und Übergabeprotokoll.</p>
`,
  faqHeading: "Automatik-Mietwagen am Flughafen Marrakesch-Menara: häufige Fragen",
  faqs: [
    { q: "Was kostet ein Automatik-Mietwagen am Flughafen Marrakesch?", a: "45 bis 60 € pro Tag für einen Kompaktwagen, 70 bis 100 € für einen SUV und 90 bis 140 € für eine Limousine. Rechnen Sie mit 15 bis 30 % mehr als beim selben Modell mit Schaltung." },
    { q: "Findet man in Marrakesch leicht Automatikwagen?", a: "Es gibt sie, aber in der Minderheit, vor allem ab der Kompaktklasse. 2 bis 3 Wochen vorher buchen und das Getriebe schriftlich bestätigen lassen." },
    { q: "Braucht man für Automatik einen besonderen Führerschein?", a: "Nein, Klasse B genügt. Ist Ihr Führerschein auf Automatik beschränkt, sagen Sie es: Der Vermieter muss Ihnen dann einen Automatikwagen garantieren." },
    { q: "Verbraucht Automatik mehr?", a: "Bei älteren Modellen etwas, bei neuen kaum. Der Unterschied fällt viel weniger ins Gewicht als der Mietaufpreis." },
    { q: "Ich fahre zum ersten Mal Automatik. Ist das schwierig?", a: "Nein: nur der rechte Fuß, Bremse gedrückt für P zu D oder R, und ein paar Minuten auf dem Parkplatz genügen zur Eingewöhnung." },
    { q: "Kann man mit Automatik einen Roadtrip in Marokko machen?", a: "Ja. Für den Atlas besser einen SUV oder neueren Kompaktwagen nehmen und in den langen Abfahrten am Tichka den manuellen Modus oder L nutzen." },
    { q: "Ist die Versicherung bei Automatik anders?", a: "Nein, es gelten dieselben Regeln: Basis-Selbstbeteiligung, optionale Zusatzversicherung und Kaution auf der Kreditkarte des Fahrers." },
    { q: "Und wenn ich gar nicht fahren will?", a: "Ein Transfer bei Ankunft und Abreise, Taxis in der Stadt für 15 bis 50 MAD pro Fahrt und ein Fahrer für Ausflüge decken den ganzen Aufenthalt ab, oft zu Kosten nahe einer Miete." },
  ],
  cta: {
    heading: "Bereit, in Marrakesch entspannt zu fahren?",
    text: "Vergleichen Sie die Automatikwagen der Vermieter am Flughafen und buchen Sie mit wenigen Klicks.",
    label: "Preise vergleichen",
    href: "#reserver",
    secondary: { label: "Alle Kategorien ansehen", key: 'carRental' },
  },
} satisfies LocalizedPage;
