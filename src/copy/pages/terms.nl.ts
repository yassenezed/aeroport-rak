import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: "Gebruiksvoorwaarden — gids luchthaven Marrakech-Menara",
  description: "Gebruiksvoorwaarden van AeroportRAK, onafhankelijke gids voor luchthaven Marrakech-Menara: aansprakelijkheid, rechten en links.",
  eyebrow: "AeroportRAK",
  h1: "Gebruiksvoorwaarden",
  lede: "Wat u van deze site kunt verwachten, en wat niet. Door AeroportRAK te gebruiken, aanvaardt u de onderstaande voorwaarden.",
  body: `
<h2>Aard van de site</h2>
<p>AeroportRAK is een onafhankelijke redactionele publicatie over luchthaven Marrakech Menara. De site wordt <strong>niet geëxploiteerd, gemandateerd of goedgekeurd</strong> door het Office National Des Aéroports, door luchthaven Marrakech Menara of door enige luchtvaartmaatschappij. Ze verkoopt geen vervoersdiensten en is geen reisbureau.</p>

<h2>Juistheid van de informatie</h2>
<p>We controleren de gepubliceerde informatie en vermelden de datum van tariefcontroles. Tarieven, dienstregelingen, frequenties en procedures veranderen toch zonder aankondiging: <strong>controleer altijd bij de betreffende aanbieder</strong> voordat u een bindende beslissing neemt, zeker over vluchttijden, inreisformaliteiten of een boeking.</p>
<p>De ordes van grootte die we geven – wachttijden, reisduur, prijsmarges – zijn schattingen op basis van gebruikelijke omstandigheden. Ze vormen geen garantie of toezegging.</p>

<h2>Beperking van aansprakelijkheid</h2>
<p>De informatie op deze site is indicatief. We zijn niet aansprakelijk voor een gemiste vlucht, een verloren aansluiting, een geschil met een aanbieder, een instapweigering of schade die voortvloeit uit het gebruik van de gepubliceerde informatie. De beslissing en de controle ervan liggen bij u.</p>
<p>Niets op deze site is juridisch advies. Passages over passagiersrechten of inreisformaliteiten zijn algemene informatie en vervangen geen deskundig advies over uw specifieke situatie.</p>

<h2>Links naar sites van derden</h2>
<p>De site verwijst naar boekingsplatforms, vervoerders en officiële bronnen. We hebben geen zeggenschap over hun inhoud, tarieven, voorwaarden of beschikbaarheid en wijzen elke aansprakelijkheid daarvoor af. Elke boeking bij een derde valt uitsluitend onder het met die derde gesloten contract.</p>

<h2>Intellectueel eigendom</h2>
<p>Teksten, redactionele structuur, huisstijl en grafische elementen van deze site zijn beschermd. Elke substantiële overname of hergebruik zonder voorafgaande schriftelijke toestemming is verboden. Een kort citaat mag, mits de bron wordt vermeld en naar de oorspronkelijke pagina wordt gelinkt.</p>
<p>Genoemde merken, handelsnamen en logo's zijn eigendom van hun respectieve houders en worden alleen ter informatie vermeld.</p>

<h2>Aanvaardbaar gebruik</h2>
<p>Verboden zijn het massaal geautomatiseerd uitlezen van inhoud, het namaken van de site of haar structuur en elke poging de werking ervan te verstoren.</p>

<h2>Toepasselijk recht en contact</h2>
<p>Deze voorwaarden vallen onder Frans recht. Voor vragen erover: <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>.</p>
`,
} satisfies LocalizedPage;
