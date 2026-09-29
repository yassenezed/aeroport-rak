import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: "Affiliateverklaring — luchthaven Marrakech-Menara",
  description: "Hoe AirportRAK, gids voor luchthaven Marrakech-Menara, zich financiert: affiliatelinks en commissies zonder effect op uw prijs.",
  eyebrow: "AirportRAK",
  h1: "Affiliateverklaring",
  lede: "Deze site is gratis en wordt gefinancierd met affiliatecommissies. Hier precies hoe dat werkt, wat het voor u betekent – niets, qua prijs – en wat het niet verandert aan wat we schrijven.",
  body: `
<h2>Het principe in drie zinnen</h2>
<p>Sommige pagina's bevatten links naar platforms voor transfers, vluchten, accommodatie of autohuur. Boekt u na het volgen van zo'n link, dan betaalt de partner ons een commissie uit zijn eigen marge. <strong>De prijs die u betaalt is gelijk aan wat u rechtstreeks op zijn site had betaald.</strong></p>

<h2>Wat het financiert</h2>
<p>Het schrijven en vooral het bijwerken van de pagina's: getoonde tarieven nagaan, dienstregelingen controleren, gewijzigde informatie corrigeren. Een praktische gids die niet wordt onderhouden, klopt na een paar maanden niet meer – precies wat we willen vermijden, en het maakt het grootste deel van het werk uit.</p>

<h2>Wat het niet verandert</h2>
<ul>
<li><strong>Geen partner betaalt om op deze site te staan</strong>, of voor een bepaalde positie.</li>
<li><strong>Geen partner leest onze teksten mee</strong> of heeft inspraak in wat we over hem schrijven.</li>
<li><strong>We raden ook opties aan die ons niets opleveren</strong> als ze beter zijn. De taxistandplaats en bus 19 horen daarbij: we bevelen ze openlijk aan waar ze winnen, en ze leveren geen commissie op.</li>
<li><strong>We benoemen de zwakke punten</strong> van de diensten die we bespreken, ook als er een affiliatelink naar verwijst.</li>
</ul>
<div class="callout">
<span class="callout-label">Een concreet voorbeeld</span>
<p>Op onze transferpagina schrijven we dat met z'n tweeën, overdag, naar Guéliz, de taxi voor 100–150 MAD moeilijk te verslaan is en er geen reden is om iets te boeken. Dat advies kost ons geld, en het is de enige manier om een gids te schrijven die het lezen waard is.</p>
</div>

<h2>Waar die links staan</h2>
<p>Vooral in de boekingsblokken voor transfers en vluchten, in de oproepen onderaan de pagina's en in enkele contextuele links binnen artikelen. Links naar officiële bronnen, regelgeving of onze eigen pagina's zijn nooit affiliatelinks.</p>

<h2>Reclame en gesponsorde inhoud</h2>
<p>We publiceren geen gesponsorde artikelen vermomd als redactionele inhoud. Mocht dat beleid veranderen, dan wordt elke betaalde inhoud duidelijk en zichtbaar bovenaan de pagina als zodanig aangeduid.</p>

<h2>Een vraag?</h2>
<p>Schrijf ons via <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>. Vindt u dat een aanbeveling op deze site eerder door een commissie dan door het belang van de lezer is ingegeven, zeg het dan: dat is precies het soort melding dat we willen ontvangen.</p>
`,
} satisfies LocalizedPage;
