import type { LocalizedPage } from '../types';

export default {
  title: "Aankomsten luchthaven Marrakech-Menara (RAK): live vluchten",
  description: "Live aankomsten op luchthaven Marrakech-Menara: vluchttijden en status, vertragingen, paspoortcontrole, bagage, en daarna taxi of transfer naar de stad.",
  eyebrow: "Live bord · lokale tijd",
  h1: "Aankomsten luchthaven Marrakech-Menara",
  lede: "Volg de aankomsten op luchthaven Marrakech-Menara (RAK) in realtime: geplande tijd, verwachte tijd, vertragingen en landingen. Daaronder alles wat er gebeurt tussen de slurf en de stoeprand, en hoe u in de stad komt.",
  widget: 'flights-arrivals',
  highlights: [
    { icon: 'clock', value: "--:--", label: "Lokale tijd", live: 'clock' },
    { icon: 'cloud', value: "— °C", label: "Weer in Marrakech", live: 'weather' },
    { icon: 'map-pin', value: "Terminal 1 & 2", label: "Aankomstterminals" },
  ],
  steps: {
    heading: "Aankomst op luchthaven Marrakech-Menara: de 4 stappen",
    intro: "De route is dezelfde in terminal 1 en terminal 2. Wat verandert, is de drukte: een vlucht die om 22 uur landt, is iets heel anders dan een vlucht van 14 uur.",
    items: [
      { icon: 'passport', title: "Paspoortcontrole op Marrakech-Menara", text: "Paspoort wordt gecontroleerd en gestempeld; sinds 2019 geen formulier meer. Geen visum voor toeristen uit de EU, Zwitserland, het VK, de VS en Canada (90 dagen). 15 tot 40 minuten, afhankelijk van het uur." },
      { icon: 'luggage', title: "Bagageafhandeling", text: "De banden liggen direct na de controle. Het bandnummer staat op de schermen; reken op 20 tot 30 minuten bij avondvluchten." },
      { icon: 'shield-check', title: "Douane", text: "Meestal vlot, met steekproeven. Contant geld hoeft pas boven 100.000 MAD aangegeven te worden. Drones en portofoons worden ingehouden." },
      { icon: 'door', title: "Aankomsthal van de luchthaven", text: "Geldautomaten, wisselkantoren, simkaarten en autoverhuurbalies, daarna de uitgang naar de taxistandplaats, de chauffeurs en de parkeerterreinen." },
    ],
  },
  services: {
    heading: "Van luchthaven Marrakech-Menara naar de stad",
    intro: "Zo verlaat u luchthaven Marrakech-Menara en begint u goed aan uw verblijf, met gecontroleerde prijzen.",
    items: [
      { icon: 'van', key: 'bookTransfer', title: "Privétransfer vanaf de luchthaven", text: "Chauffeur met naambord, vlucht gevolgd, vaste prijs per voertuig vanaf € 27.", cta: "Boeken" },
      { icon: 'car', key: 'transfers', title: "Taxi en bus 19 op luchthaven Marrakech", text: "Officiële taxitarieven overdag en 's nachts, dienstregeling van bus 19.", cta: "Tarieven bekijken" },
      { icon: 'tag', key: 'carRental', title: "Autohuur op luchthaven Marrakech-Menara", text: "Balies in de aankomsthal, borg en valkuilen in het contract.", cta: "Vergelijken" },
      { icon: 'sim', key: 'esim', title: "eSIM Marokko", text: "Internet vanaf de landing om uw chauffeur te bereiken.", cta: "eSIM kiezen" },
      { icon: 'wallet', key: 'money', title: "Geld en wisselen", text: "Geldautomaten, wisselkantoren en welke biljetten u opneemt.", cta: "Gids lezen" },
      { icon: 'alert', key: 'compensation', title: "Vertraagde vlucht", text: "Tot € 400 compensatie op de meeste vluchten uit Europa.", cta: "Rechten checken" },
    ],
  },
  body: `
<h2>Zo leest u het aankomstenbord van luchthaven Marrakech-Menara</h2>
<p>Het bord hierboven toont alle aankomende vluchten op luchthaven Marrakech-Menara, van alle maatschappijen. De tijden staan in <strong>lokale tijd van Marrakech</strong>, niet in de tijd van uw vertrekstad: dat is de grootste bron van verwarring als u iemand komt ophalen.</p>
<ul>
<li><strong>Gepland</strong>: de tijd die de maatschappij heeft vastgelegd. Die verandert niet, ook niet bij vertraging.</li>
<li><strong>Verwacht</strong>: de landingstijd die tijdens de vlucht opnieuw is berekend. Daar moet u naar kijken.</li>
<li><strong>Geland</strong>: het toestel staat aan de grond. Reken 30 tot 60 minuten voordat de passagier naar buiten komt.</li>
<li><strong>Vertraagd / Geannuleerd / Omgeleid</strong>: neem contact op met de maatschappij; een omgeleide vlucht landt meestal in Casablanca of Agadir.</li>
</ul>
<p>Voor een vlucht vanuit Marrakech bekijkt u het bord met <a href="/nl/departures/">vertrekken van luchthaven Marrakech</a>.</p>

<h2>Aankomsttijden: wanneer het op luchthaven Marrakech het drukst is</h2>
<p>Luchthaven Marrakech-Menara ontvangt zijn vluchten in golven. Een eerste golf landt laat in de ochtend en vroeg in de middag, met vluchten die vroeg uit Europa vertrokken. De echte piek ligt echter <strong>tussen 20 uur en middernacht</strong>, wanneer prijsvechters na elkaar landen uit Nederland, België, Frankrijk, Spanje en het Verenigd Koninkrijk. Dan komen meerdere toestellen binnen hetzelfde halfuur aan en groeit de rij bij de paspoortcontrole.</p>
<p>Als u kunt kiezen, levert een vlucht die tussen 13 en 17 uur landt een halfuur winst op bij de uitgang. Komt u 's avonds aan, dan brengt de <a href="/nl/blog/fast-track-marrakech-airport/">fast track op luchthaven Marrakech</a> u via een aparte rij door de controles.</p>

<h2>Maatschappijen en herkomst van vluchten naar luchthaven Marrakech-Menara</h2>
<p>De meeste vluchten naar Marrakech komen uit Europa. Afhankelijk van het seizoen ziet u op het bord onder meer <strong>Transavia</strong>, <strong>Ryanair</strong>, <strong>TUI fly</strong>, <strong>easyJet</strong>, <strong>Royal Air Maroc</strong>, <strong>Corendon</strong>, <strong>Wizz Air</strong>, <strong>Vueling</strong> en <strong>Air France</strong>.</p>
<ul>
<li><strong>Nederland en België</strong>: Amsterdam, Eindhoven, Rotterdam, Brussel, Charleroi.</li>
<li><strong>Frankrijk en Zwitserland</strong>: Parijs, Lyon, Marseille, Toulouse, Genève.</li>
<li><strong>VK, Spanje, Italië, Duitsland</strong>: Londen, Manchester, Madrid, Barcelona, Sevilla, Milaan, Rome, München, Frankfurt.</li>
<li><strong>Marokko en het Midden-Oosten</strong>: Casablanca, plus seizoensverbindingen met de Golfregio.</li>
</ul>
<p>Een vlucht naar Marrakech vanuit uw stad vindt u met onze <a href="/nl/flights/">vluchtvergelijker</a>.</p>

<h2>Inreisformaliteiten: paspoort en visum</h2>
<p>Burgers van de EU, Zwitserland, het VK, de VS en Canada reizen Marokko <strong>zonder visum in voor een toeristisch verblijf tot 90 dagen</strong>, met een paspoort dat geldig is voor de hele duur van het verblijf. Een identiteitskaart volstaat niet. Het politieformulier is in september 2019 afgeschaft: u toont alleen uw paspoort, dat wordt gestempeld. Houd het adres van uw accommodatie bij de hand, de beambte kan ernaar vragen. Kinderen die met één ouder reizen, nemen best een toestemmingsverklaring van de andere ouder mee.</p>

<h2>Geld opnemen op luchthaven Marrakech</h2>
<p>Deze stap mag u niet overslaan. Taxi's accepteren geen kaart en dirhams zijn buiten Marokko niet te koop: de aankomsthal is dus uw eerste wisselpunt. De automaten werken goed, maar geven vaak biljetten van 200 MAD. Neem genoeg op voor de rit en de eerste dagen en wissel een biljet in het café van de terminal: met briefjes van 50 en 100 MAD voorkomt u gedoe over wisselgeld in de taxi. Alle tips staan in onze gids over <a href="/nl/blog/money-in-morocco/">geld en wisselen in Marokko</a>.</p>

<h2>Van luchthaven Marrakech-Menara weg: taxi, transfer of bus 19</h2>
<p>U wordt al aangesproken voordat u de deur bereikt. Dat is zelden opdringerig, maar het is goed om erop voorbereid te zijn: de officiële taxistandplaats ligt direct voor de uitgang, en het bord daar toont de tarieven per zone. Elk aanbod <em>binnen</em> de terminal valt buiten dat kader.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Optie</th><th>Prijs</th><th>Duur</th><th>Ideaal voor</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong><a href="/nl/book-transfer/">Privétransfer</a></strong></td><td class="num">vanaf € 27 / voertuig</td><td class="num">15–30 min</td><td>Riad in de medina, nachtelijke aankomst, gezinnen</td></tr>
<tr><td><strong>Officiële petit taxi</strong></td><td class="num">100–150 MAD (dag)</td><td class="num">15–30 min</td><td>Gueliz, Hivernage overdag, max. 3 personen</td></tr>
<tr><td><strong><a href="/nl/blog/bus-19-alsa-marrakech/">Bus 19 (ALSA)</a></strong></td><td class="num">30 MAD / persoon</td><td class="num">≈ 20 min</td><td>Klein budget, lichte bagage, vóór 23.30 uur</td></tr>
</tbody>
</table>
</div>
<p>Voor een hotel in Gueliz of het Hivernage volstaat overdag de taxi: spreek het aangegeven tarief af voordat de kofferbak opengaat (zie onze <a href="/nl/blog/taxi-tips-marrakech/">taxitips voor Marrakech</a>). Voor een riad in de medina, een vlucht na 21 uur of een groep van vier of meer legt de <a href="/nl/book-transfer/">geboekte transfer</a> vooraf de prijs, het voertuig en de afzetpoort vast. Alle details op de pagina <a href="/nl/transfers/">transfers vanaf de luchthaven</a>.</p>

<h2>Iemand ophalen op luchthaven Marrakech</h2>
<p>Haalt u iemand op op luchthaven Marrakech? Volg de vlucht op het aankomstenbord en vertrek op basis van de <em>verwachte</em> tijd, niet de geplande. Alleen passagiers komen in de bagagezone: u wacht in de openbare hal, tegenover de uitgangsdeuren. Kom 20 tot 30 minuten na de landing aan. Met de auto is de kiss-and-ride-zone alleen voor korte stops; om te wachten gebruikt u het <a href="/nl/parking/">parkeerterrein van de luchthaven</a>, op enkele minuten lopen van de terminal.</p>

<div class="callout">
<span class="callout-label">De gewoonte die twintig minuten scheelt</span>
<p>Wacht er een chauffeur op u (geboekte transfer of ophaalservice van de riad), dan is het ontmoetingspunt vóór de aankomsthal, met een bord met uw naam. Stuur hem een bericht zodra u bereik hebt, nog vóór de douane: een <a href="/nl/morocco-esim/">eSIM voor Marokko</a> die u voor vertrek activeert, bespaart u het zoeken naar de wifi van de terminal.</p>
</div>

<h2>'s Nachts aankomen in Marrakech</h2>
<p>Een groot deel van de prijsvechters landt tussen 21 en 1 uur. Drie praktische gevolgen: de taxi rijdt tegen het nachttarief van 150 tot 240 MAD; bus 19 rijdt na 23.30 uur niet meer; en de slecht verlichte steegjes van de medina zijn geen plek om met een koffer een riad te zoeken. Landt uw vlucht laat, dan is een geboekte transfer geen luxe: de chauffeur volgt het vluchtnummer en wacht bij vertraging.</p>

<h2>Vertraagde, geannuleerde of omgeleide vlucht naar Marrakech-Menara</h2>
<p>Komt uw vlucht meer dan drie uur te laat aan in Marrakech, dan hebt u mogelijk recht op compensatie volgens de Europese verordening 261/2004: die geldt voor alle vluchten die vertrekken vanuit de Europese Unie, ongeacht de maatschappij. Voor een traject van 1.500 tot 3.500 km, zoals Amsterdam–Marrakech, bedraagt het bedrag <strong>€ 400 per passagier</strong>. Controleer uw rechten op onze pagina <a href="/nl/flight-compensation/">vluchtcompensatie</a>. De luchthaven wordt beheerd door het <a href="https://www.onda.ma/" target="_blank" rel="noopener">Office National des Aéroports (ONDA)</a>, dat ook de officiële vluchtinformatie publiceert.</p>
<p>Alles over de terminals, de voorzieningen en de plattegrond leest u in onze <a href="/nl/airport-guide/">gids voor luchthaven Marrakech</a>.</p>
`,
  faqHeading: "Aankomsten op luchthaven Marrakech: veelgestelde vragen",
  faqs: [
    { q: "Hoe weet ik de aankomsttijd van een vlucht in Marrakech?", a: "Het aankomstenbord op deze pagina toont in realtime de geplande tijd, de verwachte tijd en de status van elke vlucht op luchthaven Marrakech-Menara. De tijden staan in lokale tijd van Marrakech. Ga uit van de verwachte tijd, die tijdens de vlucht opnieuw wordt berekend." },
    { q: "Hoelang duurt het om na de landing luchthaven Marrakech te verlaten?", a: "In de praktijk 30 tot 60 minuten: de paspoortcontrole duurt 15 tot 40 minuten afhankelijk van de drukte, de bagage 20 tot 30 minuten bij avondvluchten. Aankomsten tussen 20 uur en middernacht zijn het drukst." },
    { q: "Moet ik in Marrakech een politieformulier invullen?", a: "Nee. Het politieformulier bij in- en uitreis is op de Marokkaanse luchthavens in september 2019 afgeschaft. Alleen uw paspoort wordt gecontroleerd en gestempeld; houd het adres van uw accommodatie bij de hand voor het geval de beambte ernaar vraagt." },
    { q: "Zijn er geldautomaten in de aankomsthal?", a: "Ja, in de openbare hal na de douane staan meerdere geldautomaten en wisselkantoren. Neem geld op voordat u naar buiten gaat: taxi's accepteren geen kaart en dirhams zijn buiten Marokko niet te koop." },
    { q: "Waar wacht ik op iemand die aankomt op luchthaven Marrakech?", a: "In de openbare aankomsthal, tegenover de uitgangsdeuren: alleen passagiers hebben toegang tot de bagagezone. Kom 20 tot 30 minuten na de landing die op het bord staat. Met de auto gebruikt u beter het parkeerterrein dan de kiss-and-ride-zone." },
    { q: "Waar vind ik de chauffeur van mijn transfer op Marrakech-Menara?", a: "Vóór de aankomsthal: de chauffeur houdt een bord met uw naam vast en de boekingsbevestiging vermeldt het exacte ontmoetingspunt. Hij volgt uw vluchtnummer en wacht bij vertraging." },
    { q: "Mijn vlucht landt na middernacht: zijn er dan nog taxi's?", a: "Ja, de standplaats wordt bediend zolang er vluchten landen. Alleen geldt dan het nachttarief van 150 tot 240 MAD naar de medina, Gueliz en het Hivernage. Bus 19 rijdt tot 23.30 uur." },
    { q: "Mijn vlucht naar Marrakech kwam te laat aan: heb ik recht op compensatie?", a: "Als de aankomstvertraging meer dan drie uur bedraagt en de vlucht uit de EU vertrok, voorziet verordening 261/2004 in € 400 per passagier voor een traject van 1.500 tot 3.500 km, behalve bij buitengewone omstandigheden zoals het weer." },
  ],
  cta: {
    heading: "Een chauffeur die op uw vlucht wacht, niet andersom",
    text: "Vluchtnummer gevolgd, wachttijd bij vertraging inbegrepen, vaste prijs per voertuig tot zeven passagiers en afzetten bij de medinapoort die het dichtst bij uw riad ligt.",
    label: "Transfer boeken",
  },
} satisfies LocalizedPage;
