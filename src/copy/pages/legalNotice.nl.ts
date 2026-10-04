import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: "Juridisch — AeroportRAK, luchthaven Marrakech-Menara",
  description: "Juridische informatie van AeroportRAK, onafhankelijke gids voor luchthaven Marrakech-Menara: uitgever, hosting, intellectueel eigendom en aansprakelijkheid.",
  eyebrow: 'AeroportRAK',
  h1: 'Juridische informatie',
  lede: "Wie deze website uitgeeft, wie haar host en binnen welke grenzen de gepubliceerde informatie mag worden gebruikt.",
  body: `
<h2>Uitgever</h2>
<p><strong>${site.name}</strong> (${site.url.replace('https://', '')}), onafhankelijke informatiegids over luchthaven Marrakech-Menara.<br>
Contact: <a href="mailto:${site.contactEmail}">${site.contactEmail}</a><br>
Verantwoordelijke uitgever: de uitgever van de website.</p>

<h2>Hosting</h2>
<p>Hostinger International Ltd.<br>61 Lordou Vironos Street, 6023 Larnaca, Cyprus<br>hostinger.com</p>

<h2>Onafhankelijke website</h2>
<p>${site.name} is niet de officiële website van de luchthaven en is niet verbonden aan het Nationaal Luchthavenbureau (ONDA), luchtvaartmaatschappijen of de Marokkaanse autoriteiten. Officiële informatie staat op onda.ma.</p>

<h2>Juistheid van de informatie</h2>
<p>Prijzen, tijden en diensten worden zorgvuldig gecontroleerd, maar kunnen zonder aankondiging wijzigen. Ze zijn indicatief: controleer ze altijd bij uw luchtvaartmaatschappij of de betrokken aanbieder voordat u reist. De uitgever is niet aansprakelijk voor beslissingen die uitsluitend op deze website zijn gebaseerd.</p>

<h2>Affiliatelinks en reclame</h2>
<p>Sommige links en boekingsmodules zijn affiliatelinks: bij een boeking kan een commissie worden ontvangen, zonder extra kosten voor u. De website kan ook advertenties tonen. Details staan in onze <a href="/nl/affiliate-disclosure/">affiliateverklaring</a> en ons <a href="/nl/privacy-policy/">privacybeleid</a>.</p>

<h2>Intellectueel eigendom</h2>
<p>De teksten, vormgeving, het logo en de eigen beelden van ${site.name} zijn beschermd. Elke overname, ook gedeeltelijk, zonder schriftelijke toestemming is verboden. Merken en foto's van derden blijven eigendom van hun respectieve houders.</p>

<h2>Persoonsgegevens en cookies</h2>
<p>De verwerking van uw gegevens en het gebruik van cookies staan beschreven in het <a href="/nl/privacy-policy/">privacybeleid</a>. U kunt uw keuze altijd wijzigen via de link "Cookies beheren" onderaan elke pagina.</p>
`,
} satisfies LocalizedPage;
