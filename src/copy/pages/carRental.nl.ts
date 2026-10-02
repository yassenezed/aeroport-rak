import type { LocalizedPage } from '../types';

export default {
  title: "Autohuur luchthaven Marrakech-Menara vanaf € 25 per dag",
  description: "Autohuur op luchthaven Marrakech-Menara: vergelijk verhuurders, prijzen vanaf € 25 per dag, borg, verzekering en tips voor de Atlas en Essaouira.",
  eyebrow: "Autohuur · prijsvergelijker",
  h1: "Autohuur op luchthaven Marrakech-Menara",
  lede: "Vergelijk de verhuurders in de aankomsthal en haal uw auto op zodra u geland bent. Een kleine auto voor Essaouira, een SUV voor de Atlas of een minivan voor het gezin: dit zijn de echte prijzen, de borg om in te plannen en de valkuilen in het contract.",
  highlights: [
    { icon: 'wallet', value: "Vanaf € 25", label: "Per dag, kleine auto in het laagseizoen" },
    { icon: 'plane-landing', value: "Aankomsthal", label: "Balies van de verhuurders op de luchthaven" },
    { icon: 'passport', value: "Nationaal rijbewijs", label: "Aanvaard voor een toeristisch verblijf" },
    { icon: 'shield-check', value: "Gratis annuleren", label: "Bij de meeste aanbiedingen" },
  ],
  widget: "car-rental",
  widgetIntro: {
    heading: "Autohuur op luchthaven Marrakech-Menara vergelijken",
    text: "Typ \"Marrakech\" en kies \"Marrakech Airport\" als ophaallocatie, daarna uw data en tijden: de aanbiedingen van internationale en Marokkaanse verhuurders verschijnen met de totaalprijs.",
  },
  cardSections: [
    {
      eyebrow: "Voor u boekt",
      heading: "4 tips om minder te betalen",
      variant: "compact",
      items: [
        { icon: 'clock', title: "Boek 2 tot 3 weken vooraf", text: "Kleine auto's en automaten zijn in de vakanties het eerst weg." },
        { icon: 'dollar-circle', title: "Kies vol-vol", text: "U levert de tank vol in en betaalt alleen de gebruikte brandstof, zonder servicekosten." },
        { icon: 'sun', title: "Mik op het laagseizoen", text: "Januari buiten de feestdagen, juni en november hebben de laagste prijzen van het jaar." },
        { icon: 'shield-check', title: "Houd gratis annuleren", text: "De meeste aanbiedingen zijn gratis te annuleren tot 48 uur voor het ophalen." },
      ],
    },
    {
      eyebrow: "Categorieën",
      heading: "Welke auto huren voor uw reis naar Marrakech?",
      intro: "Kies op basis van uw route, niet op de lokprijs.",
      variant: "feature",
      items: [
        { icon: 'car', title: "Economy", text: "Dacia Sandero, Kia Picanto, Hyundai i10: ideaal voor Essaouira, de Ourika-vallei en verharde wegen.", tags: ["Vanaf € 25/dag", "4–5 plaatsen"], link: { key: 'carBudget', label: "Aanbiedingen bekijken" } },
        { icon: 'star', title: "Premium", text: "Premium sedans en SUV's voor comfortabel reizen of een zakenreis.", tags: ["Vanaf € 110/dag", "Hoge borg"], link: { key: 'carLuxury', label: "Ontdekken" } },
        { icon: 'users', title: "Minivan 7 tot 9 plaatsen", text: "Dacia Jogger, Renault Trafic: het hele gezin en de bagage in één voertuig.", tags: ["Vanaf € 55/dag", "7–9 plaatsen"], link: { key: 'carMinivan', label: "Verkennen" } },
        { icon: 'check', title: "Automaat", text: "Zeldzamer en duurder in Marokko, maar veel rustiger in het verkeer van Marrakech.", tags: ["Vanaf € 45/dag", "Vroeg boeken"], link: { key: 'carEasy', label: "Voertuigen bekijken" } },
      ],
    },
    {
      eyebrow: "Waarom de luchthaven",
      heading: "Waarom een auto huren op luchthaven Marrakech-Menara",
      variant: "feature",
      items: [
        { icon: 'plane-landing', title: "Auto meteen na de landing", text: "De balies staan in de aankomsthal: rijd naar de Atlas of de kust zonder door de stad te moeten." },
        { icon: 'map', title: "Direct de grote wegen op", text: "De luchthaven ligt ten zuidwesten van de stad, richting Agafay, met snelle toegang tot de wegen naar Essaouira en de Atlas." },
        { icon: 'building', title: "Internationale en lokale verhuurders", text: "Grote merken en Marokkaanse agentschappen naast elkaar: de vergelijker toont alles op één pagina." },
        { icon: 'luggage', title: "Makkelijk inleveren voor de vlucht", text: "Lever de auto vlak voor het inchecken in op de luchthavenparking, zonder taxi te zoeken." },
      ],
    },
  ],
  body: `
<h2>Prijzen autohuur in Marrakech in 2026</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Categorie</th><th>Prijs / dag</th><th>Gebruikelijke borg</th><th>Voor</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Kleine auto (Sandero, Picanto)</strong></td><td class="num">€ 25–35</td><td class="num">5.000–8.000 MAD</td><td>Koppels, verharde wegen</td></tr>
<tr><td><strong>Compact (Clio, Polo)</strong></td><td class="num">€ 35–45</td><td class="num">6.000–10.000 MAD</td><td>Comfort, lange afstanden</td></tr>
<tr><td><strong>SUV (Duster, Sportage)</strong></td><td class="num">€ 55–90</td><td class="num">10.000–15.000 MAD</td><td>Atlas, pistes van Agafay</td></tr>
<tr><td><strong>Minivan 7 plaatsen</strong></td><td class="num">€ 55–95</td><td class="num">8.000–15.000 MAD</td><td>Gezinnen, groepen</td></tr>
</tbody>
</table>
</div>
<p>Tel daar brandstof bij (diesel kost rond 12 tot 14 MAD per liter), tol op de snelweg en, als u die neemt, de eigenrisicoverzekering. De prijzen stijgen sterk in de Europese schoolvakanties en in de zomer.</p>

<h2>Hebt u in Marrakech echt een auto nodig?</h2>
<p><strong>Als u in de stad blijft</strong>, niet: de medina is autovrij, parkeren is betalend en wordt bewaakt door parkeerwachters, en een petit taxi kost 15 tot 50 MAD per rit. <strong>Als u de stad uit gaat</strong>, wel: Ourika, Imlil, Agafay, Essaouira of de Tichka-pas ontdekt u veel beter op eigen houtje.</p>
<div class="callout">
<span class="callout-label">De voordeligste aanpak</span>
<p>Breng de eerste dagen zonder auto door in de medina, ga met een <a href="/nl/book-transfer/">transfer</a> naar uw riad en huur alleen voor de uitstapdagen. Zo bespaart u huur en parkeerkosten voor dagen waarop de auto stil zou staan.</p>
</div>

<h2>Roadtrips vanaf luchthaven Marrakech-Menara</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Bestemming</th><th>Afstand</th><th>Rijtijd</th><th>Aanbevolen auto</th></tr></thead>
<tbody>
<tr><td><strong>Agafay-woestijn</strong></td><td class="num">≈ 35 km</td><td>40–50 min</td><td>Kleine auto (SUV voor pistes)</td></tr>
<tr><td><strong>Ourika-vallei</strong></td><td class="num">≈ 65 km</td><td>1 u 15–1 u 30</td><td>Kleine auto</td></tr>
<tr><td><strong>Imlil, Hoge Atlas</strong></td><td class="num">≈ 65 km</td><td>1 u 15–1 u 30</td><td>Kleine auto of SUV</td></tr>
<tr><td><strong>Watervallen van Ouzoud</strong></td><td class="num">≈ 170 km</td><td>2 u 45–3 u</td><td>Compact</td></tr>
<tr><td><strong>Essaouira</strong></td><td class="num">≈ 185 km</td><td>2 u 30–3 u</td><td>Compact</td></tr>
<tr><td><strong>Ouarzazate via de Tichka</strong></td><td class="num">≈ 200 km</td><td>4 u–4 u 30</td><td>Compact of SUV</td></tr>
</tbody>
</table>
</div>
<p>Al deze wegen zijn verhard. De Tichka-pas (2.260 m) is bochtig en druk met vrachtwagens: neem ruim de tijd en rijd hem niet 's nachts. Meer details in onze gidsen over <a href="/nl/blog/distance-essaouira-marrakech-airport/">Essaouira</a> en <a href="/nl/blog/distance-ouarzazate-marrakech-airport/">Ouarzazate</a>.</p>

<h2>De drie regels in het contract die tellen</h2>
<h3>De borg</h3>
<p>5.000 tot 15.000 MAD naargelang de categorie, geblokkeerd op een <strong>creditcard op naam van de hoofdbestuurder</strong>. Prepaidkaarten en veel debetkaarten worden geweigerd: de meest voorkomende reden om aan de balie te worden afgewezen. Controleer uw kaartlimiet voor vertrek.</p>
<h3>Het eigen risico</h3>
<p>Het basiscontract laat bij schade een hoog eigen risico voor uw rekening. U kunt het aanvaarden, de verzekering van de verhuurder kopen (€ 10 tot € 20 per dag) of een goedkopere externe verzekering nemen, waarbij u eerst betaalt en daarna terugvordert.</p>
<h3>De inspectie van de auto</h3>
<p><strong>Fotografeer en film de auto van alle kanten voor vertrek</strong>: velgen, voorruit, dak, interieur en brandstofniveau. Laat elke kras op het formulier noteren en herhaal de foto's bij het inleveren. Die tien minuten voorkomen de meeste geschillen.</p>

<h2>Goed om te weten voor u huurt</h2>
<div class="table-wrap">
<table class="data">
<tbody>
<tr><td><strong>Minimumleeftijd</strong></td><td>Meestal 21 jaar, 23 tot 25 voor premium; toeslag jonge bestuurder mogelijk</td></tr>
<tr><td><strong>Rijbewijs</strong></td><td>Nationaal rijbewijs, naargelang de verhuurder minstens 1 tot 2 jaar in uw bezit</td></tr>
<tr><td><strong>Borg</strong></td><td>Creditcard op naam van de bestuurder, verplicht</td></tr>
<tr><td><strong>Kilometers</strong></td><td>Vaak onbeperkt; controleer bij zeer goedkope aanbiedingen</td></tr>
<tr><td><strong>Snelheidslimieten</strong></td><td>60 km/u in de stad, 100 km/u op de weg, 120 km/u op de snelweg; veel flitspalen</td></tr>
</tbody>
</table>
</div>
<p>Houd rijbewijs, huurcontract en paspoort bij de hand: politiecontroles zijn frequent op de wegen tussen steden, en boetes betaalt u ter plaatse tegen ontvangstbewijs. Meer in onze gidsen over <a href="/nl/blog/car-rental-marrakech-airport/">een auto huren op de luchthaven van Marrakech</a> en <a href="/nl/blog/long-term-car-rental-marrakech/">langdurige autohuur</a>.</p>
`,
  faqHeading: "Autohuur op luchthaven Marrakech-Menara: veelgestelde vragen",
  faqs: [
    { q: "Wat kost een huurauto op de luchthaven van Marrakech?", a: "Vanaf € 25 tot € 35 per dag voor een kleine auto, € 35 tot € 45 voor een compacte en € 55 tot € 90 voor een SUV. Reken daarbij brandstof, tol en een eventuele verzekering. In schoolvakanties en de zomer stijgen de prijzen." },
    { q: "Welke verhuurders zitten op luchthaven Marrakech-Menara?", a: "Grote internationale merken en veel Marokkaanse agentschappen hebben een balie of ontmoetingspunt in de aankomsthal. De vergelijker op deze pagina toont hun aanbiedingen naast elkaar met de totaalprijs." },
    { q: "Hoeveel borg moet ik voorzien?", a: "5.000 tot 15.000 MAD naargelang de categorie, geblokkeerd op een creditcard op naam van de hoofdbestuurder. Prepaidkaarten en veel debetkaarten worden geweigerd: controleer uw limiet voor vertrek." },
    { q: "Volstaat mijn Belgisch of Nederlands rijbewijs in Marokko?", a: "Ja, het nationale rijbewijs volstaat voor een toeristisch verblijf, als u het naargelang de verhuurder minstens 1 tot 2 jaar hebt. Neem het mee met het contract en uw paspoort: controles zijn frequent." },
    { q: "Moet ik een eigenrisicoverzekering nemen?", a: "Die verlaagt of schrapt wat u betaalt bij schade, voor € 10 tot € 20 per dag bij de verhuurder. Een externe verzekering is goedkoper, maar u betaalt eerst en vordert terug. Zonder dekking draagt u zelf het eigen risico." },
    { q: "Heb ik een 4x4 nodig voor de Atlas?", a: "Niet voor Ourika, Imlil of de Tichka-pas, die volledig verhard zijn. Een SUV helpt alleen op de pistes van Agafay of in afgelegen valleien, waar bodemvrijheid belangrijker is dan vierwielaandrijving." },
    { q: "Wat zijn de snelheidslimieten in Marokko?", a: "60 km/u in de stad, 100 km/u op de weg en 120 km/u op de snelweg. Vaste en mobiele flitsers zijn talrijk, en boetes betaalt u ter plaatse tegen ontvangstbewijs." },
    { q: "Wanneer is autohuur het goedkoopst?", a: "In januari buiten de feestdagen, in juni en in november. Europese schoolvakanties, Pasen en de zomer drijven de prijzen op: boek 2 tot 3 weken vooraf en houd gratis annuleren." },
    { q: "Kan ik mijn boeking gratis annuleren?", a: "Bij de meeste aanbiedingen wel, tot 48 uur voor het ophalen. De exacte voorwaarden ziet u voor de betaling: controleer ze, zeker bij actieprijzen." },
    { q: "Beter huren op de luchthaven of in de stad?", a: "Op de luchthaven als u meteen op roadtrip vertrekt. Begint u met een paar dagen in de medina, neem dan een transfer naar de riad en huur alleen voor de uitstapdagen." },
  ],
  cta: {
    heading: "Klaar om de Atlas en de kust te verkennen?",
    text: "Vergelijk de verhuurders op de luchthaven en boek in een paar klikken, gratis annuleren bij de meeste aanbiedingen.",
    label: "Prijzen vergelijken",
    href: "#reserver",
    secondary: { label: "Liever een transfer", key: 'bookTransfer' },
  },
} satisfies LocalizedPage;
