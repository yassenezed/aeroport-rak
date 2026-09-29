import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: "Contact — AeroportRAK, luchthaven Marrakech-Menara",
  description: "Contact met AeroportRAK: informatie over luchthaven Marrakech-Menara corrigeren, een verouderd tarief melden of een zakelijke vraag stellen.",
  eyebrow: "AeroportRAK",
  h1: "Contact",
  lede: "Verouderde informatie, een tarief dat niet meer klopt, een aanvulling: schrijf ons. We lezen elk bericht en corrigeren de betreffende pagina's.",
  body: `
<h2>De redactie schrijven</h2>
<p>E-mail: <a href="mailto:${site.contactEmail}">${site.contactEmail}</a></p>
<p>Vermeld bij een foutmelding zo mogelijk <strong>het adres van de betreffende pagina</strong>, de passage in kwestie en wat u ter plaatse hebt vastgesteld, met datum. Een foto van een tarievenbord of dienstregeling zegt meer dan een lange uitleg: zo kunnen we snel en met zekerheid corrigeren.</p>

<h2>Wat we niet kunnen doen</h2>
<p>AeroportRAK is een onafhankelijke redactionele gids, geen luchthavendienst en geen reisbureau. We kunnen dus niet:</p>
<ul>
<li>een vlucht-, hotel- of transferboeking wijzigen, annuleren of terugvinden;</li>
<li>de status van verloren bagage doorgeven – dat regelt de balie van uw maatschappij;</li>
<li>bemiddelen bij een verhuurder, hotel of chauffeur;</li>
<li>een vluchttijd live bevestigen, verder dan wat onze borden voor <a href="/nl/arrivals/">aankomsten</a> en <a href="/nl/departures/">vertrek</a> tonen.</li>
</ul>
<p>Neem daarvoor rechtstreeks contact op met de betreffende aanbieder: alleen diens klantenservice beschikt over uw boekingsgegevens.</p>

<h2>Zakelijke vragen</h2>
<p>Hoteliers, verhuurders, transferbedrijven, toeristenbureaus: we verkopen geen redactionele plaatsing, en geen bedrijf kan zijn vermelding of positie op deze site kopen. Feitelijke correcties over uzelf – openingstijden, tarieven, capaciteit, diensten – ontvangen we graag, met een controleerbare bron.</p>

<h2>Reactietijd</h2>
<p>We antwoorden doorgaans binnen enkele werkdagen. Meldingen van feitelijke fouten krijgen voorrang, omdat ze lezers raken die een reis voorbereiden.</p>
`,
} satisfies LocalizedPage;
