import type { LocalizedPage } from '../types';

export default {
  title: "Flugverspätung Flughafen Marrakesch-Menara: bis 600 €",
  description: "Flug am Flughafen Marrakesch-Menara verspätet oder annulliert? Prüfen Sie kostenlos, ob Ihnen 250, 400 oder 600 € nach der EU-Verordnung 261/2004 zustehen.",
  eyebrow: "Fluggastrechte · EU-Verordnung 261/2004",
  h1: "Entschädigung bei Verspätung: Flughafen Marrakesch-Menara",
  lede: "Ist Ihr Flug von oder zum Flughafen Marrakesch-Menara mit mehr als drei Stunden Verspätung angekommen oder wurde er annulliert? Dann stehen Ihnen möglicherweise 250, 400 oder 600 € pro Passagier zu. Prüfen Sie Ihren Flug in einer Minute und lesen Sie, was in Ihrem Fall wirklich gilt.",
  widget: 'compensation',
  highlights: [
    { icon: 'wallet', value: "250 €", label: "Unter 1.500 km: Madrid, Sevilla, Lissabon" },
    { icon: 'wallet', value: "400 €", label: "1.500–3.500 km: Frankfurt, München, Berlin" },
    { icon: 'wallet', value: "600 €", label: "Über 3.500 km: Stockholm, Helsinki, Riga" },
  ],
  cardSections: [
    {
      eyebrow: "Wer ist geschützt?",
      heading: "Welche Flüge am Flughafen Marrakesch-Menara abgedeckt sind",
      intro: "Entscheidend sind die Flugrichtung und der Sitz der Airline.",
      variant: 'feature',
      items: [
        { icon: 'plane-landing', title: "Deutschland oder EU → Marrakesch", text: "Alle Flüge mit Abflug in der Europäischen Union sind abgedeckt, unabhängig von der Airline, auch Royal Air Maroc.", tags: ["Abgedeckt", "Alle Airlines"] },
        { icon: 'plane-takeoff', title: "Marrakesch → Europa, EU-Airline", text: "Abgedeckt, wenn eine europäische Airline fliegt: Discover Airlines, Eurowings, Ryanair, easyJet, Transavia, Air France…", tags: ["Abgedeckt", "EU-Airline"] },
        { icon: 'alert', title: "Marrakesch → Europa, Nicht-EU-Airline", text: "Royal Air Maroc, Qatar Airways, Turkish Airlines oder Saudia ab Marokko fallen nicht unter die Verordnung. Es gelten ihre Beförderungsbedingungen.", tags: ["Nicht abgedeckt"] },
        { icon: 'shield-check', title: "Flüge der Schweizer Airlines", text: "Die Schweiz wendet die Verordnung über ein Abkommen mit der EU an: Swiss und Edelweiss sind wie EU-Airlines abgedeckt.", tags: ["Abgedeckt", "Swiss, Edelweiss"] },
      ],
    },
    {
      eyebrow: "Verspäteter Flug",
      heading: "Verspätung: was die Airline am Flughafen leisten muss",
      intro: "Schon vor jeder Entschädigung muss die Airline Sie ab einer bestimmten Wartezeit am Flughafen betreuen.",
      variant: 'feature',
      items: [
        { icon: 'coffee', title: "Ab 2 Std., Flug unter 1.500 km", text: "Mahlzeiten und Erfrischungen im Verhältnis zur Wartezeit sowie zwei Kommunikationen (Anrufe oder E-Mails).", tags: ["Mahlzeiten", "Getränke", "Kommunikation"] },
        { icon: 'clock', title: "Ab 3 Std., Flug 1.500 bis 3.500 km", text: "Dieselbe Betreuung, die für die meisten Flüge zwischen Marrakesch und Deutschland gilt: Frankfurt, München, Berlin, Hamburg.", tags: ["Mahlzeiten", "Getränke", "Kommunikation"] },
        { icon: 'building', title: "Ab 4 Std., Flug über 3.500 km", text: "Ebenso, und wenn der Abflug auf den nächsten Tag verschoben wird: Hotel und Transfer zwischen Flughafen und Hotel, unabhängig von der Entfernung.", tags: ["Hotel", "Transfer", "Mahlzeiten"] },
      ],
    },
    {
      eyebrow: "Annullierter Flug",
      heading: "Annullierter Flug: Ihre Möglichkeiten",
      intro: "Bei einer Annullierung muss die Airline Ihnen die Wahl lassen und Sie betreuen.",
      variant: 'feature',
      items: [
        { icon: 'wallet', title: "Volle Erstattung", text: "Der Ticketpreis wird innerhalb von sieben Tagen erstattet, auch der nicht genutzte Teil eines Hin- und Rückflugs." },
        { icon: 'plane', title: "Ersatzflug", text: "Eine Beförderung zum Ziel so schnell wie möglich oder zu einem späteren Termin Ihrer Wahl." },
        { icon: 'tag', title: "Entschädigung von 250 bis 600 €", text: "Wenn Sie weniger als 14 Tage vor Abflug informiert wurden, außer bei einer Ersatzbeförderung nahe am ursprünglichen Flugplan." },
        { icon: 'users', title: "Betreuung", text: "Mahlzeiten, Kommunikation und bei Bedarf Hotel und Transfer, während Sie auf den Ersatzflug warten." },
      ],
    },
    {
      eyebrow: "Ausnahmen",
      heading: "Außergewöhnliche Umstände",
      intro: "In diesen Fällen muss die Airline Sie weiterhin betreuen, aber keine Entschädigung zahlen.",
      variant: 'compact',
      items: [
        { icon: 'cloud', title: "Wetter", text: "Sturm, starker Wind, Nebel oder Gewitter, die den Flug gefährlich machen." },
        { icon: 'shield', title: "Sicherheit", text: "Sicherheitsbedrohung, Luftraumsperrung, politische Instabilität." },
        { icon: 'alert', title: "Naturereignisse", text: "Erdbeben, Vulkanausbruch oder andere unvorhersehbare Ereignisse." },
        { icon: 'users', title: "Fluglotsenstreik", text: "Streiks außerhalb der Airline, etwa der französischen Flugsicherung." },
      ],
    },
  ],
  steps: {
    heading: "So fordern Sie Ihre Entschädigung",
    intro: "Sie können sich direkt an die Airline wenden oder den Prüfservice oben nutzen, der nur im Erfolgsfall bezahlt wird.",
    items: [
      { icon: 'clipboard', title: "Unterlagen aufbewahren", text: "Bordkarte, Buchungsbestätigung und jeden Nachweis der Verspätung oder Annullierung: E-Mails, SMS, Fotos der Anzeigetafel." },
      { icon: 'clock', title: "Ankunftszeit notieren", text: "Die Verspätung wird bei der Ankunft gemessen, wenn die Flugzeugtüren öffnen. Lassen Sie sich den Grund der Verspätung am Schalter schriftlich geben." },
      { icon: 'users', title: "Bei der Airline fordern", text: "Senden Sie eine schriftliche Forderung an den Kundenservice mit Verweis auf die Verordnung 261/2004, Flugnummer, Datum und Betrag." },
      { icon: 'shield-check', title: "Rechte durchsetzen", text: "Ohne Antwort binnen zwei Monaten oder bei Ablehnung wenden Sie sich an die Schlichtungsstelle söp oder das Luftfahrt-Bundesamt." },
    ],
  },
  body: `
<h2>Wie viel steht Ihnen bei einem Flug von oder nach Marrakesch zu?</h2>
<p>Der Betrag hängt nicht vom Ticketpreis ab, sondern von der <strong>Flugstrecke</strong>. Für den Flughafen Marrakesch-Menara bedeutet das:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Entfernung</th><th>Entschädigung</th><th>Beispiele für Strecken mit Marrakesch</th></tr></thead>
<tbody>
<tr><td><strong>Bis 1.500 km</strong></td><td class="num">250 €</td><td>Madrid, Barcelona, Sevilla, Málaga, Lissabon</td></tr>
<tr class="row-highlight"><td><strong>1.500 bis 3.500 km</strong></td><td class="num">400 €</td><td>Frankfurt, München, Berlin, Hamburg, Düsseldorf, Köln, Wien, Zürich, Genf, Paris</td></tr>
<tr><td><strong>Über 3.500 km</strong></td><td class="num">600 €</td><td>Stockholm, Helsinki, Riga</td></tr>
</tbody>
</table>
</div>
<p>Die Entschädigung ist fällig, wenn der Flug sein Ziel mit <strong>drei Stunden Verspätung oder mehr</strong> erreicht, bei kurzfristiger Annullierung oder bei Nichtbeförderung. Sie kann halbiert werden, wenn die Airline Sie mit einer Ankunft nahe der geplanten Zeit umgebucht hat. Direktflüge von Marrakesch nach Montreal, Atlanta oder New York werden von Nicht-EU-Airlines außerhalb der EU durchgeführt: Sie sind nicht abgedeckt.</p>

<h2>Welche Airlines ab Marrakesch abgedeckt sind</h2>
<p>Ab dem Flughafen Marrakesch-Menara gilt die Verordnung, wenn die Airline europäisch ist. Das trifft auf die meisten Flüge nach Deutschland, Österreich und in die Schweiz zu: <strong>Discover Airlines, Eurowings, Ryanair, easyJet, Transavia, Austrian, Swiss, Edelweiss, Air France, Wizz Air, TUI fly, Norwegian, SAS</strong> und die übrigen Airlines aus EU, Norwegen und Schweiz. <strong>Royal Air Maroc</strong> ist ab Marokko dagegen nicht abgedeckt, ebenso wenig Qatar Airways, Turkish Airlines, Saudia, Air Transat, Delta oder United. Alle Strecken und Airlines finden Sie auf unserer Seite <a href="/de/destinations/">Ziele ab Marrakesch</a>.</p>

<h2>Häufige Verspätungen in Marrakesch: was zählt</h2>
<p>Viele Billigflüge erreichen Marrakesch am Abend, am Ende des Tagesumlaufs der Maschine: Eine frühe Verspätung zieht sich bis zum letzten Flug durch. Wird ein Flug nach Casablanca oder Agadir <strong>umgeleitet</strong>, zählt für die Verspätung die Ankunftszeit in Marrakesch, Ihrem Endziel. Streiks der französischen Flugsicherung treffen oft Flüge, die Frankreich überfliegen: Sie gelten als außergewöhnlich.</p>
<div class="callout">
<span class="callout-label">Gut zu wissen</span>
<p>Ein technischer Defekt am Flugzeug ist in der Regel <strong>kein</strong> außergewöhnlicher Umstand, ebenso wenig ein Streik des eigenen Personals der Airline: In beiden Fällen behalten Sie Ihren Anspruch auf Entschädigung.</p>
</div>

<h2>Wie lange haben Sie Zeit?</h2>
<p>Die Verordnung selbst nennt keine Frist: Es gilt das Recht des Landes, in dem Sie klagen. In <strong>Deutschland sind es 3 Jahre</strong> ab Ende des Jahres, in dem der Flug stattfand, in Österreich 3 Jahre, in Frankreich und Spanien 5 Jahre, in den Niederlanden 2 Jahre. Warten Sie dennoch nicht: Nachweise gehen schnell verloren. Um einen Flug in Echtzeit zu verfolgen, sehen Sie die <a href="/de/arrivals/">Ankünfte</a> und <a href="/de/departures/">Abflüge</a> am Flughafen Marrakesch.</p>
`,
  faqHeading: "Entschädigung am Flughafen Marrakesch: häufige Fragen",
  faqs: [
    { q: "Gilt die EU-Verordnung 261/2004 für Flüge ab Marrakesch?", a: "Ja für alle Flüge aus der EU nach Marrakesch, unabhängig von der Airline. Ab Marrakesch nur, wenn die Airline europäisch ist, etwa Discover Airlines, Eurowings, Ryanair oder easyJet. Royal Air Maroc ist ab Marokko nicht abgedeckt." },
    { q: "Wie viel bekomme ich bei einem verspäteten Flug Frankfurt–Marrakesch?", a: "400 € pro Passagier, da der Flug rund 2.470 km lang ist. Die Ankunftsverspätung muss mehr als drei Stunden betragen und darf nicht auf außergewöhnlichen Umständen beruhen." },
    { q: "Und bei einem Flug München–Marrakesch oder Berlin–Marrakesch?", a: "Ebenfalls 400 € pro Passagier: München liegt rund 2.500 km und Berlin rund 2.890 km entfernt, jeweils bei einer Ankunftsverspätung von mehr als drei Stunden." },
    { q: "Mein Royal-Air-Maroc-Flug ab Marrakesch ist verspätet: Habe ich Anspruch?", a: "Nicht nach der EU-Verordnung, da die Airline nicht europäisch ist und der Flug außerhalb der EU startet. Ihre tatsächlichen Kosten können Sie aber nach den Beförderungsbedingungen und dem Montrealer Übereinkommen geltend machen." },
    { q: "Mein Flug wurde nach Casablanca oder Agadir umgeleitet: was nun?", a: "Maßgeblich ist die Ankunftszeit in Marrakesch, Ihrem Endziel. Kommen Sie dort mehr als drei Stunden verspätet an und ist die Ursache nicht außergewöhnlich, bleibt die Entschädigung fällig." },
    { q: "Wann muss die Airline nicht zahlen?", a: "Bei außergewöhnlichen Umständen: gefährliches Wetter, Sicherheitsbedrohungen, Naturkatastrophen, Fluglotsenstreiks. Ein technischer Defekt oder ein Streik des eigenen Personals befreit sie in der Regel nicht." },
    { q: "Wie lange kann ich Entschädigung fordern?", a: "In Deutschland 3 Jahre ab Ende des Jahres, in dem der Flug stattfand. In Österreich 3 Jahre, in Frankreich und Spanien 5 Jahre, in den Niederlanden 2 Jahre. Bewahren Sie Ihre Unterlagen auf und fordern Sie möglichst schnell." },
    { q: "Mein Flug nach Marrakesch wurde annulliert: welche Rechte habe ich?", a: "Die Airline muss Ihnen die Erstattung binnen sieben Tagen oder einen Ersatzflug anbieten und Sie während der Wartezeit betreuen. Wurden Sie weniger als 14 Tage vorher informiert, können Sie zusätzlich 250 bis 600 € je nach Entfernung fordern." },
  ],
  cta: {
    heading: "Verspätet in Marrakesch gelandet? Ihr Fahrer wartet",
    text: "Unsere Fahrer verfolgen Ihren Flug und warten bei Verspätung ohne Aufpreis, auch mitten in der Nacht, und bringen Sie zum Medina-Tor, das Ihrem Riad am nächsten liegt.",
    label: "Transfer buchen",
  },
} satisfies LocalizedPage;
