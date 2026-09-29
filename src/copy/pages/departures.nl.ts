import type { LocalizedPage } from '../types';

export default {
  title: "Vertrek luchthaven Marrakech-Menara (RAK): live vluchten",
  description: "Live vertrek vanaf luchthaven Marrakech-Menara: vluchtstatus, hoe laat u er moet zijn, inchecken, controles, btw-teruggave en de weg naar de terminal.",
  eyebrow: "Live bord · lokale tijd",
  h1: "Vertrek luchthaven Marrakech-Menara",
  lede: "Volg de vertrekkende vluchten op luchthaven Marrakech-Menara (RAK) in realtime: tijden, gates, vertragingen en annuleringen. Daaronder: hoe laat u er moet zijn, hoe de controles verlopen en hoe u zonder stress bij de terminal komt.",
  widget: 'flights-departures',
  highlights: [
    { icon: 'clock', value: "--:--", label: "Lokale tijd", live: 'clock' },
    { icon: 'clipboard', value: "Opent 3 uur voor vertrek", label: "Inchecken" },
    { icon: 'log-out', value: "45 min voor vertrek", label: "Instappen" },
  ],
  steps: {
    heading: "Vertrek vanaf luchthaven Marrakech-Menara: de 5 stappen",
    intro: "De route is dezelfde in terminal 1 en terminal 2. Reken in de spits op 1 tot 1,5 uur tussen de ingang van de terminal en de gate.",
    items: [
      { icon: 'door', title: "Toegang tot de terminal", text: "Sinds maart 2025 staan er geen scanners meer bij de ingang van de terminal: u loopt meteen de incheckhal in. Houd paspoort en instapkaart bij de hand." },
      { icon: 'clipboard', title: "Inchecken op luchthaven Marrakech-Menara", text: "Balies openen meestal 3 uur voor internationale vluchten en sluiten 45 tot 60 minuten vooraf. Bagage geeft u af aan de balie, ook na online inchecken." },
      { icon: 'passport', title: "Paspoortcontrole", text: "De langste stap. Paspoort en inreisstempel worden gecontroleerd, zonder formulier." },
      { icon: 'shield-check', title: "Veiligheidscontrole", text: "Vloeistoffen tot 100 ml per verpakking in een doorzichtig zakje; laptop en tablet uit de tas." },
      { icon: 'plane-takeoff', title: "Gate", text: "Taxfreewinkels, cafés en lounges, daarna de gate. Het instappen begint ongeveer 45 minuten voor vertrek." },
    ],
  },
  services: {
    heading: "Uw vertrek uit Marrakech voorbereiden",
    intro: "Op tijd bij de terminal, rustig wachten en zorgeloos naar huis vliegen.",
    items: [
      { icon: 'van', key: 'bookTransfer', title: "Transfer naar de luchthaven", text: "Ophalen bij riad of hotel, vaste prijs, ook om 5 uur 's ochtends.", cta: "Boeken" },
      { icon: 'car', key: 'transfers', title: "Taxi en bus 19", text: "Taxiprijzen vanuit de medina en dienstregeling van bus 19 naar de luchthaven.", cta: "Tarieven bekijken" },
      { icon: 'parking', key: 'parking', title: "Parkeren op luchthaven Marrakech", text: "Tarieven per uur en per dag, en waar u iemand afzet.", cta: "Parkeren bekijken" },
      { icon: 'star', key: 'vipLounges', title: "VIP-lounges op luchthaven Marrakech-Menara", text: "Toegang, prijzen en voorzieningen van de lounges na de controle.", cta: "Ontdekken" },
      { icon: 'shield-check', key: 'fastTrack', title: "Fast track", text: "In de spits via een aparte rij door de controles.", cta: "Meer weten" },
      { icon: 'alert', key: 'compensation', title: "Vertraging of annulering", text: "Uw rechten en mogelijke compensatie per maatschappij.", cta: "Rechten checken" },
    ],
  },
  body: `
<h2>Zo leest u het vertrekbord van luchthaven Marrakech-Menara</h2>
<p>Het bord hierboven toont alle vertrekkende vluchten op luchthaven Marrakech-Menara, in <strong>lokale tijd van Marrakech</strong>. Elke regel vermeldt de geplande tijd, de bestemming, het vluchtnummer, de maatschappij en de status, doorlopend bijgewerkt.</p>
<ul>
<li><strong>Gepland / Op tijd</strong>: de vlucht vertrekt volgens schema. Het inchecken is misschien nog niet open.</li>
<li><strong>Inchecken</strong>: de balies zijn open; ga er meteen naartoe als u ruimbagage hebt.</li>
<li><strong>Instappen / Laatste oproep</strong>: de passagiers stappen in. Bij de laatste oproep sluit de gate binnen enkele minuten.</li>
<li><strong>Vertraagd / Geannuleerd</strong>: de verwachte tijd vervangt de geplande. Volg de instructies van de maatschappij per sms of in de app.</li>
<li><strong>Vertrokken</strong>: het toestel heeft de gate verlaten.</li>
</ul>
<p>Om een vlucht naar Marrakech te volgen, bekijkt u het <a href="/nl/arrivals/">aankomstenbord van luchthaven Marrakech</a>.</p>

<h2>Hoe laat moet u op de luchthaven zijn voor een vlucht vanuit Marrakech?</h2>
<p>De regel die werkt: <strong>2,5 tot 3 uur voor een vlucht naar Europa</strong>, 3 uur in het hoogseizoen of zodra u ruimbagage hebt. Niet het inchecken vertraagt, maar de paspoort- en veiligheidscontrole, de flessenhals van de luchthaven.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Soort vlucht</th><th>Aanbevolen aankomst</th><th>Waarom</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Europa, met ruimbagage</strong></td><td class="num">3 uur vooraf</td><td>Bagage afgeven, dan paspoort- en veiligheidscontrole</td></tr>
<tr><td><strong>Europa, alleen handbagage</strong></td><td class="num">2,5 uur vooraf</td><td>Online instapkaart, maar dezelfde controles</td></tr>
<tr><td><strong>Hoogseizoen, vakanties, ramadan</strong></td><td class="num">3,5 uur vooraf</td><td>Langere rijen bij de paspoortcontrole</td></tr>
<tr><td><strong>Binnenlandse vlucht (Casablanca …)</strong></td><td class="num">1,5 uur vooraf</td><td>Geen paspoortcontrole</td></tr>
</tbody>
</table>
</div>
<p>De balies sluiten meestal 45 tot 60 minuten voor vertrek, de gate 20 minuten vooraf. Wie te laat komt, mist de vlucht, ook als het toestel nog aan de grond staat.</p>

<h2>De spitsuren bij vertrek</h2>
<p>Twee vertrekgolven vullen de terminal. De eerste, <strong>tussen 6 en 9 uur</strong>, zijn de toestellen die in Marrakech overnachtten en vroeg terugvliegen naar Europa. De tweede bouwt zich op in de late namiddag en avond, wanneer de prijsvechters na elkaar vertrekken. Valt uw vlucht in een van die vensters, plan dan een halfuur extra of boek de <a href="/nl/blog/fast-track-marrakech-airport/">fast track op luchthaven Marrakech</a>, met een eigen rij.</p>

<h2>Terminal 1 of terminal 2: waar moet u zijn?</h2>
<p>Luchthaven Marrakech-Menara heeft twee aangrenzende terminals, te voet verbonden. <strong>Terminal 1</strong> verwerkt de meeste internationale vluchten, <strong>terminal 2</strong> de rest, waaronder een deel van de binnenlandse en chartervluchten. De toewijzing verschilt per maatschappij en seizoen: de terminal staat op uw instapkaart en op het vertrekbord. Bij twijfel gaat u naar T1; T2 ligt op enkele minuten lopen. De plattegrond staat in onze <a href="/nl/airport-guide/">gids voor luchthaven Marrakech</a>.</p>

<h2>Naar luchthaven Marrakech voor uw vlucht</h2>
<p>De luchthaven ligt op 6 km van de medina, 15 tot 30 minuten rijden afhankelijk van het uur. Tel de tijd erbij om met uw koffers naar de medinapoort het dichtst bij uw riad te lopen.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Optie</th><th>Prijs</th><th>Duur</th><th>Goed om te weten</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong><a href="/nl/book-transfer/">Geboekte transfer</a></strong></td><td class="num">vanaf € 27 / voertuig</td><td class="num">15–30 min</td><td>Ophalen op het afgesproken uur, ook voor zonsopgang</td></tr>
<tr><td><strong>Petit taxi</strong></td><td class="num">70–150 MAD (dag)</td><td class="num">15–30 min</td><td>'s Nachts duurder; spreek de prijs af voor u instapt</td></tr>
<tr><td><strong><a href="/nl/blog/bus-19-alsa-marrakech/">Bus 19 (ALSA)</a></strong></td><td class="num">30 MAD / persoon</td><td class="num">≈ 20 min</td><td>Vanaf Jemaa el-Fna en Gueliz, niet vroeg in de ochtend</td></tr>
<tr><td><strong>Huurauto</strong></td><td class="num">—</td><td class="num">15–30 min</td><td>Reken 30 minuten extra voor het inleveren</td></tr>
</tbody>
</table>
</div>
<p>Voor een vlucht vóór 9 uur boekt u uw rit <strong>de dag ervoor</strong>, via de riad of als <a href="/nl/book-transfer/">transfer</a>: om 5 uur 's ochtends een taxi vinden in een steegje is allesbehalve vanzelfsprekend, en tot zonsopgang geldt het nachttarief. De tarieven staan op de pagina <a href="/nl/transfers/">transfers en taxi's van de luchthaven</a> en in onze <a href="/nl/blog/taxi-tips-marrakech/">taxitips voor Marrakech</a>.</p>

<h2>Iemand afzetten of parkeren</h2>
<p>De kiss-and-ride-zone voor de terminal is alleen voor heel korte stops. Wilt u iemand tot aan de balie begeleiden, gebruik dan het <a href="/nl/parking/">parkeerterrein van de luchthaven</a>: ongeveer 20 MAD per uur, 70 tot 80 MAD per dag.</p>

<h2>Dirhams, souvenirs en bagage: wat u moet weten</h2>
<p>Dirhams mogen niet het land uit boven een symbolisch bedrag: wissel uw laatste biljetten <em>vóór</em> de paspoortcontrole bij de wisselkantoren in de openbare hal, en bewaar het bonnetje van uw eerste wisseltransactie. Voor souvenirs geldt: arganolie, specerijen en cosmetica in verpakkingen boven 100 ml gaan zonder uitzondering in de ruimbagage. Aardewerk reist slecht zonder goede verpakking; de meeste verkopers in de medina pakken het op verzoek vliegklaar in. Meer tips in onze gids over <a href="/nl/blog/money-in-morocco/">geld en wisselen in Marokko</a>.</p>
<div class="callout">
<span class="callout-label">Btw-teruggave</span>
<p>Marokko betaalt niet-ingezetenen de btw terug op bepaalde aankopen bij erkende handelaars. Het formulier moet bij de douanebalie van de luchthaven worden afgestempeld <strong>vóór</strong> u uw bagage incheckt, met de goederen bij de hand. Dat loont voor een tapijt of zilverwerk, zelden voor babouches.</p>
</div>

<h2>Na de controle: winkels, lounges en wifi</h2>
<p>Na de veiligheidscontrole vindt u taxfreewinkels, cafés en restaurants, plus gratis wifi die in de spits overbelast kan zijn. De vertrekzone loopt op dezelfde uren vol als de rijen: vertrekt u laat op de dag of hebt u een lange overstap, dan maakt toegang tot een van de <a href="/nl/blog/marrakech-airport-vip-lounges/">VIP-lounges van luchthaven Marrakech</a> het wachten een stuk aangenamer.</p>

<h2>Vertraagde of geannuleerde vlucht vanuit Marrakech</h2>
<p>Voor vluchten vanuit Marokko geldt de Europese verordening 261/2004 als de maatschappij Europees is (Transavia, Ryanair, TUI fly, easyJet, Corendon …): bij meer dan drie uur vertraging bij aankomst bedraagt de compensatie <strong>€ 400 per passagier</strong> voor een traject van 1.500 tot 3.500 km, zoals Marrakech–Amsterdam. Niet-Europese maatschappijen die vanuit Marrakech vertrekken, vallen er niet onder. Controleer uw situatie op onze pagina <a href="/nl/flight-compensation/">vluchtcompensatie</a>. De luchthaven wordt beheerd door het <a href="https://www.onda.ma/" target="_blank" rel="noopener">Office National des Aéroports (ONDA)</a>.</p>
`,
  faqHeading: "Vertrek vanaf luchthaven Marrakech: veelgestelde vragen",
  faqs: [
    { q: "Hoe vroeg moet ik voor mijn vlucht op luchthaven Marrakech zijn?", a: "2,5 tot 3 uur voor een vlucht naar Europa, 3,5 uur in het hoogseizoen. De paspoortcontrole bij vertrek is de flessenhals, vooral tussen 6 en 9 uur en in de late namiddag. Voor een binnenlandse vlucht volstaat 1,5 uur." },
    { q: "Hoe laat opent het inchecken op luchthaven Marrakech?", a: "Meestal 3 uur voor internationale vluchten; het sluit 45 tot 60 minuten voor vertrek, afhankelijk van de maatschappij. Ook na online inchecken geeft u ruimbagage af aan de balie." },
    { q: "Van welke terminal vertrekt mijn vlucht op Marrakech-Menara?", a: "De meeste internationale vluchten vertrekken vanaf terminal 1; terminal 2 verwerkt een deel van de binnenlandse en chartervluchten. De terminal staat op uw instapkaart en op het vertrekbord; beide terminals zijn te voet verbonden." },
    { q: "Mag ik dirhams mee het land uit nemen?", a: "Nee, de dirham mag niet worden uitgevoerd boven een symbolisch bedrag. Wissel uw biljetten bij de wisselkantoren in de openbare hal, vóór de paspoortcontrole, en bewaar het bonnetje van uw eerste wisseltransactie." },
    { q: "Mag arganolie in de handbagage?", a: "Alleen in verpakkingen van maximaal 100 ml in een doorzichtig plastic zakje. Grotere hoeveelheden, ook arganolie, vloeibare specerijen en cosmetica, gaan in de ruimbagage. Taxfree-aankopen na de controle vallen er niet onder." },
    { q: "Wat kost een taxi van de medina naar luchthaven Marrakech?", a: "Reken overdag op 70 tot 150 MAD met een petit taxi, 's nachts meer; spreek de prijs af voor u instapt. Voor een vroeg vertrek boekt u de dag ervoor een transfer of de chauffeur van uw riad." },
    { q: "Is er btw-teruggave op luchthaven Marrakech?", a: "Ja, voor niet-ingezetenen, op aankopen bij erkende handelaars. Het formulier moet bij de douanebalie worden afgestempeld vóór u uw bagage incheckt, met de goederen bij de hand." },
    { q: "Mijn vlucht vanuit Marrakech is vertraagd: heb ik recht op compensatie?", a: "Ja als de maatschappij Europees is en de vertraging bij aankomst meer dan drie uur bedraagt: € 400 per passagier voor 1.500 tot 3.500 km, behalve bij buitengewone omstandigheden. Niet-Europese maatschappijen vanuit Marokko vallen niet onder verordening 261/2004." },
  ],
  cta: {
    heading: "Uw rit naar de luchthaven, de dag ervoor geregeld",
    text: "Een chauffeur bij de juiste medinapoort op het afgesproken uur, vaste prijs, ook om 5 uur 's ochtends. Gratis annuleren bij de meeste boekingen.",
    label: "Terugtransfer boeken",
  },
} satisfies LocalizedPage;
