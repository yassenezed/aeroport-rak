import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: "Privacybeleid — AeroportRAK, luchthaven Marrakech-Menara",
  description: "Hoe AeroportRAK, gids voor luchthaven Marrakech-Menara, uw gegevens verwerkt: statistieken, affiliatelinks, cookies en de AVG.",
  eyebrow: "AeroportRAK",
  h1: "Privacybeleid",
  lede: "Wat deze site verzamelt, waarom, hoe lang en wat u kunt eisen. Kortom: geen accounts, geen volgformulieren en diensten van derden strikt beperkt tot statistieken en boekingen.",
  body: `
<h2>Wie uw gegevens verwerkt</h2>
<p>Verwerkingsverantwoordelijke is de uitgever van AeroportRAK, bereikbaar via <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>. De site biedt geen accountaanmaak, geen persoonlijke omgeving en geen nieuwsbrief.</p>

<h2>Wat we verzamelen</h2>
<ul>
<li><strong>Bezoekersstatistieken</strong>: bekeken pagina's, herkomst, type apparaat, land. Dat helpt ons te begrijpen welke inhoud nuttig is en die te verbeteren. U bent er niet persoonlijk mee te identificeren.</li>
<li><strong>Technische logs</strong> van de host, bewaard voor beveiliging en de goede werking van de site.</li>
<li><strong>Berichten die u ons stuurt</strong>: alleen als u ons schrijft, en alleen zolang de afhandeling duurt.</li>
</ul>
<p>We verkopen geen gegevens en geven niets door aan datahandelaren.</p>

<h2>Cookies en diensten van derden</h2>
<p>Sommige pagina's bevatten hulpmiddelen van derden, die eigen cookies plaatsen en een eigen beleid hebben:</p>
<ul>
<li><strong>Boekingswidgets</strong> (vluchten, transfers): ze gebruiken affiliatecookies om een eventuele boeking aan onze site toe te schrijven.</li>
<li><strong>Vluchtborden</strong>: geleverd door een aanbieder van vluchtinformatie en getoond in een afgeschermd kader.</li>
<li><strong>Statistieken</strong>: geaggregeerde bezoekcijfers.</li>
<li><strong>Weer</strong>: de temperatuur op de homepage komt van Open-Meteo, zonder cookie; alleen uw IP-adres wordt doorgegeven, zoals bij elke paginalading.</li>
</ul>
<p>U kunt deze cookies blokkeren of verwijderen via de instellingen van uw browser. De site blijft zonder ze volledig leesbaar; alleen de boekingswidgets werken dan mogelijk niet goed.</p>

<h2>Toestemming, bezoekersstatistieken en reclame</h2>
<p>Bij uw eerste bezoek vanuit de Europese Unie, de Europese Economische Ruimte, het Verenigd Koninkrijk of Zwitserland vraagt een banner om uw toestemming. Zolang u niet accepteert, worden geen analyse- of advertentiecookies geplaatst en wordt het affiliatescript niet geladen. U kunt uw keuze altijd wijzigen via de link <strong>"Cookies beheren"</strong> onderaan elke pagina.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google Ireland Ltd): bezoekersstatistieken, IP-adressen worden niet bewaard. De toestemmingsmodus van Google stuurt tot uw akkoord alleen anonieme signalen zonder cookies.</li>
<li><strong>Affiliatepartners</strong>: Travelpayouts en zijn partners (Kiwitaxi voor transfers, EconomyBookings voor autohuur, vluchtzoekmachines), en Booking.com voor hotels. Zij kunnen een cookie plaatsen om een boeking aan onze website toe te schrijven.</li>
<li><strong>Reclame (Google AdSense)</strong>: de website kan advertenties tonen. Externe leveranciers, waaronder Google, gebruiken cookies om advertenties te tonen op basis van uw eerdere bezoeken aan deze of andere websites. Met de advertentiecookies van Google kunnen Google en zijn partners u passende advertenties tonen. U kunt gepersonaliseerde advertenties uitschakelen via de <a href="https://adssettings.google.com" rel="noopener" target="_blank">advertentie-instellingen van Google</a> of op <a href="https://www.youronlinechoices.com/nl/" rel="noopener" target="_blank">youronlinechoices.com</a>. Meer informatie: <a href="https://policies.google.com/technologies/partner-sites?hl=nl" rel="noopener" target="_blank">hoe Google gegevens van partnersites gebruikt</a>.</li>
</ul>

<h2>Affiliatelinks</h2>
<p>Volgt u vanaf deze site een boekingslink, dan kan de betreffende partner uw herkomst vastleggen om ons een commissie toe te kennen als u boekt. Dat mechanisme <strong>verhoogt nooit de prijs die u betaalt</strong>. Het staat beschreven op onze <a href="/nl/affiliate-disclosure/">affiliateverklaring</a>.</p>

<h2>Bewaartermijn</h2>
<p>Statistieken worden geaggregeerd bewaard. De technische logs van de host volgen diens termijnen. Per e-mail ontvangen berichten worden verwijderd zodra de vraag is afgehandeld, tenzij ze een aan de site doorgevoerde correctie documenteren.</p>

<h2>Uw rechten</h2>
<p>Onder de AVG hebt u recht op inzage, rectificatie, wissing, beperking en bezwaar met betrekking tot uw gegevens. Schrijf naar <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>: we antwoorden binnen een maand. U kunt ook een klacht indienen bij de bevoegde toezichthouder, de Autoriteit Persoonsgegevens in Nederland of de Gegevensbeschermingsautoriteit in België.</p>

<h2>Wijzigingen</h2>
<p>Dit beleid kan worden aangepast, met name als we een hulpmiddel van derden toevoegen of verwijderen. Wezenlijke wijzigingen worden op deze pagina vermeld.</p>
`,
} satisfies LocalizedPage;
