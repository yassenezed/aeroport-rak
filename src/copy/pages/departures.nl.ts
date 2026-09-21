import type { LocalizedPage } from '../types';

export default {
  title: "Vertrek luchthaven Marrakech (RAK): live vertrekbord",
  description: "Live vertrekkende vluchten op luchthaven Marrakech Menara: aanbevolen aankomsttijd, inchecken, paspoortcontrole, btw-teruggave en winkels.",
  eyebrow: "Marrakech Menara · Vertrek",
  h1: "Vertrek van luchthaven Marrakech",
  lede: "Het bord volgt live de vluchten die uit Menara vertrekken. Daaronder: hoe laat u er moet zijn, waar de rijen echt ontstaan en hoe u uw laatste uur in Marokko niet staand in een gang doorbrengt.",
  widget: 'flights-departures',
  body: `
<h2>Hoe laat u er moet zijn</h2>
<p>De regel die in Marrakech werkt: <strong>twee uur vóór een Schengenvlucht, drie in het hoogseizoen</strong> of zodra u ruimbagage hebt. Het inchecken is het probleem niet, dat gaat snel, maar de paspoortcontrole bij vertrek, de eigenlijke bottleneck van de RAK. De pieken liggen tussen 6.00 en 9.00 uur en opnieuw aan het eind van de middag, wanneer de Europese rotaties terugvliegen.</p>
<p>Vertrek daarop afgestemd uit uw verblijf. Vanuit de medina rekent u 20 tot 30 minuten rijden plus de wandeling naar de poort met uw koffers. Boek de terugrit de avond ervoor via uw riad of als transfer: om 5 uur 's ochtends een taxi vinden in een steeg is een gok, en tot zonsopgang geldt het nachttarief.</p>

<h2>Het verloop bij vertrek</h2>
<ol>
<li><strong>Toegangscontrole terminal.</strong> Een eerste bagagescan bij de ingang van het gebouw, nog vóór de balies.</li>
<li><strong>Inchecken.</strong> De balies openen meestal twee tot drie uur vóór de vlucht. Online inchecken scheelt tijd, maar niet voor ruimbagage: afgeven gaat via de balie.</li>
<li><strong>Grenspolitie.</strong> De langste stap. Uitreisformulier, controle van paspoort en inreisstempel.</li>
<li><strong>Beveiliging.</strong> Vloeistoffen maximaal 100 ml per verpakking, elektronica uit de tas.</li>
<li><strong>Vertrekzone.</strong> Taxfreewinkels, cafés, lounges en gates.</li>
</ol>

<h2>Wat u mag meenemen en wat niet</h2>
<p>Dirham mag niet worden uitgevoerd: wissel uw biljetten boven een symbolisch bedrag <em>vóór</em> de grenspolitie terug, bij de wisselkantoren in de openbare hal. In de vertrekzone lukt dat niet meer tegen redelijke voorwaarden. Bewaar het bonnetje van uw eerste wissel, sommige loketten vragen erom.</p>
<p>Souvenirs: specerijen, arganolie en cosmetica in verpakkingen boven 100 ml gaan zonder uitzondering in de ruimbagage. Aardewerk en breekbare spullen verdragen het ruim slecht zonder degelijke verpakking; de meeste verkopers in de medina maken op verzoek een vliegklaar pakket.</p>
<div class="callout">
<span class="callout-label">Btw-teruggave</span>
<p>Marokko betaalt niet-ingezetenen de btw terug op bepaalde aankopen bij erkende handelaren. Het formulier moet bij de douanebalie van de luchthaven worden afgestempeld <strong>vóór</strong> het afgeven van de bagage, met de goederen beschikbaar voor controle. De moeite waard voor een tapijt of zilverwerk, zelden voor babouches.</p>
</div>

<h2>Lounges en wachten</h2>
<p>De vertrekzone van de RAK is behoorlijk uitgerust, maar raakt vol op dezelfde tijden als de rijen. Vertrekt u laat op de dag of hebt u een lange overstap, dan maakt een loungetoegang van het wachten iets anders – een van de weinige comfortuitgaven die hier echt lonen. Onze pagina over de <a href="/nl/blog/marrakech-airport-vip-lounges/">lounges op luchthaven Marrakech</a> beschrijft de toegangsvoorwaarden.</p>
`,
  faqs: [
    { q: "Hoe vroeg moet u op luchthaven Marrakech zijn?", a: "Twee uur voor een Schengenvlucht, drie in het hoogseizoen of met ruimbagage. De paspoortcontrole bij vertrek is het knelpunt, vooral tussen 6.00 en 9.00 uur en aan het eind van de middag." },
    { q: "Mag je dirham mee Marokko uit nemen?", a: "Nee, de dirham mag boven een symbolisch bedrag niet worden uitgevoerd. Wissel uw biljetten terug bij de wisselkantoren in de openbare hal, vóór de grenspolitie: in de vertrekzone lukt dat niet meer tegen redelijke voorwaarden. Bewaar het bonnetje van uw eerste wissel." },
    { q: "Is er btw-teruggave op luchthaven Marrakech?", a: "Ja, voor niet-ingezetenen, op aankopen bij erkende handelaren. Het formulier moet vóór het afgeven van de bagage bij de douanebalie worden afgestempeld, met de goederen beschikbaar. Het gaat vooral om duurdere aankopen zoals een tapijt of zilverwerk." },
    { q: "Hoe komt u 's ochtends vanuit de medina naar de luchthaven?", a: "Boek de avond ervoor via uw riad of als transfer: om 5 uur 's ochtends een taxi vinden in een steeg is een gok, en tot zonsopgang geldt het nachttarief. Reken 20 tot 30 minuten rijden plus de wandeling naar de poort met uw koffers." },
    { q: "Mag arganolie in de handbagage?", a: "Alleen in verpakkingen van maximaal 100 ml, samen in een doorzichtig plastic zakje. Daarboven gaan arganolie, vloeibare specerijen en cosmetica in de ruimbagage. Aankopen in de taxfreezone na de beveiliging vallen niet onder die grens." },
  ],
  cta: { heading: 'Uw rit naar de luchthaven, de avond ervoor geregeld', text: "Een chauffeur bij de juiste medinapoort op het afgesproken uur, vaste prijs, ook om 5 uur 's ochtends. Gratis annuleren bij de meeste boekingen.", label: 'Retourtransfer boeken' },
} satisfies LocalizedPage;
