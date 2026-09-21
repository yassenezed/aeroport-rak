import type { LocalizedPage } from '../types';

export default {
  title: "eSIM Marokko: online vanaf de landing",
  description: "eSIM voor Marokko: hoe u meteen verbonden bent bij het uitstappen in Marrakech, vergeleken met een lokale simkaart en met EU-roaming.",
  eyebrow: "Marrakech Menara · Verbinding",
  h1: "eSIM Marokko: verbonden vanaf de landing",
  lede: "Marokko valt buiten de Europese roamingzone: uw bundel wordt daar óf heel duur óf onbruikbaar. Hier de drie manieren om dat op te lossen, en de manier die u bij aankomst twintig minuten scheelt.",
  body: `
<h2>Waarom u dit vóór vertrek regelt</h2>
<p>Buiten de Europese Unie wordt roaming tegen volle prijs afgerekend: bij sommige providers enkele euro's per megabyte, met rekeningen van drie cijfers na thuiskomst. De meeste reizigers zetten data dus uit en staan dan buiten de terminal zonder een riad te kunnen bellen, een chauffeur te waarschuwen of een kaart te openen.</p>
<p>Precies dan hebt u het het hardst nodig: om een medinapoort te bevestigen, een transfer te vinden of gewoon te checken of u de goede kant op loopt in steegjes waar geen enkel bord met de kaart overeenkomt.</p>

<h2>De drie opties vergeleken</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Oplossing</th><th>Indicatieve prijs</th><th>Beschikbaar</th><th>Beperkingen</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Prepaid eSIM</strong></td><td class="num">€ 4–15 / week</td><td>Vanaf de landing</td><td>Geschikte, simlockvrije telefoon nodig</td></tr>
<tr><td><strong>Lokale sim</strong></td><td class="num">≈ 50–100 MAD</td><td>Balie in de aankomsthal</td><td>Rij, paspoort, nieuw nummer</td></tr>
<tr><td><strong>Roaming op uw bundel</strong></td><td class="num">Zeer wisselend</td><td>Direct</td><td>Zonder wereldoptie vaak onbetaalbaar</td></tr>
</tbody>
</table>
</div>

<h2>De eSIM in de praktijk</h2>
<p>Een eSIM is een simkaart zonder plastic: u koopt hem online, scant een QR-code en de bundel activeert bij de landing zonder dat u een kaartje hoeft te wisselen. Uw gewone nummer blijft actief voor bellen en sms, want de eSIM draagt alleen de data.</p>
<p>Drie controles vóór de aankoop: uw telefoon moet <strong>eSIM ondersteunen</strong> (alle iPhones vanaf de XS, de meeste recente Androids); hij moet <strong>simlockvrij</strong> zijn; en de installatie gebeurt <strong>terwijl u nog wifi hebt</strong>, dus vóór vertrek of via de wifi van de luchthaven.</p>
<div class="callout">
<span class="callout-label">De juiste hoeveelheid data</span>
<p>Voor een week Marrakech is 3 tot 5 GB ruim voldoende: vooraf gedownloade offline kaarten, berichten, wat zoekopdrachten. 20 GB betalen is onnodig, tenzij u via een hotspot wilt werken.</p>
</div>

<h2>Wanneer een lokale sim beter blijft</h2>
<p>Moet u <strong>Marokkaanse nummers bellen</strong> – een riad, een verhuurder, een gids –, dan is een lokale sim met belminuten praktischer en goedkoper dan een internationaal gesprek. Hetzelfde geldt voor langere verblijven vanaf twee à drie weken, waarbij de bundels van Maroc Telecom, Orange of inwi zeer concurrerend worden. De balies staan in de aankomsthal: neem uw paspoort mee en reken op een tiental minuten.</p>
<p>Ons uitgebreide artikel over <a href="/nl/blog/morocco-sim-cards/">simkaarten in Marokko</a> vergelijkt de bundels van de drie providers en hun dekking, ook in de Atlas.</p>
`,
  faqs: [
    { q: "Werkt een eSIM direct na de landing in Marrakech?", a: "Ja, mits u hem vóór vertrek via wifi hebt geïnstalleerd. De bundel activeert automatisch zodra uw telefoon een Marokkaans netwerk vindt, zodat u bereikbaar bent nog voordat u de grenspolitie passeert." },
    { q: "Is mijn telefoon geschikt voor eSIM?", a: "Alle iPhones vanaf de XS, Google Pixels vanaf de 3 en de meeste recente Samsung Galaxy S- en Z-modellen zijn dat. De telefoon moet ook simlockvrij zijn. In de netwerkinstellingen bevestigt een optie om een eSIM-abonnement toe te voegen de geschiktheid." },
    { q: "Hoeveel data heb je nodig voor een week Marrakech?", a: "Drie tot vijf gigabyte volstaat voor toeristisch gebruik: kaarten, berichten en zoekopdrachten. Download de kaart van Marrakech vóór vertrek offline, dat verbruikt het meest." },
    { q: "eSIM of lokale simkaart?", a: "De eSIM voor een kort verblijf met alleen databehoefte: geen rij, geen papierwerk, directe verbinding. De lokale sim als u Marokkaanse nummers moet bellen of langer dan twee à drie weken blijft, want dan zijn lokale bundels veel voordeliger." },
    { q: "Werkt EU-roaming in Marokko?", a: "Nee, Marokko hoort niet bij de Europese roamingzone. Data wordt tegen internationaal tarief afgerekend, vaak zeer hoog, tenzij uw bundel uitdrukkelijk een wereldoptie met Marokko bevat." },
  ],
} satisfies LocalizedPage;
