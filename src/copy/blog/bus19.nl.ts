import type { LocalizedArticle } from '../types';

export default {
  title: "Bus 19 ALSA: luchthaven Marrakech-Menara ↔ Djemaa el-Fna",
  description: "Bus 19 tussen luchthaven Marrakech-Menara en Djemaa el-Fna: prijs, dienstregeling, frequentie, reistijd, halte en wanneer hij niet geschikt is.",
  eyebrow: "Onderweg",
  h1: "Bus 19 tussen luchthaven Marrakech en het centrum",
  lede: "Dertig dirham tot Djemaa el-Fna: het goedkoopste vervoer vanaf de RAK, en het werkt goed – mits u vóór 23.00 uur landt en uw bagage zelf kunt dragen.",
  excerpt: "Prijs, dienstregeling, frequentie en grenzen van ALSA-lijn 19, de bus die de luchthaven voor 30 MAD met Djemaa el-Fna verbindt.",
  date: "2026-09-13",
  facts: [
    { label: "Enkele reis", value: "30", sub: "MAD" },
    { label: "Retour", value: "50", sub: "MAD" },
    { label: "Frequentie", value: "≈ 30", sub: "min" },
    { label: "Reistijd", value: "≈ 20", sub: "min" },
  ],
  body: `
<h2>Hoe het werkt</h2>
<p>Lijn 19, uitgebaat door <strong>ALSA</strong>, verbindt luchthaven Marrakech Menara met het plein Djemaa el-Fna. De halte ligt goed aangegeven voor de terminal en de rit duurt zo'n twintig minuten met enkele tussenhaltes, onder meer in Guéliz.</p>
<p>Een kaartje kost <strong>30 MAD enkele reis</strong> en <strong>50 MAD retour</strong>, dat laatste ongeveer twee weken geldig – de interessantste formule als u dezelfde weg terug neemt. Kopen doet u bij de chauffeur of aan het loket, contant.</p>
<p>Vertrekken volgen elkaar ongeveer elk halfuur op, tussen <strong>6.00 en 23.30 uur</strong>. De tijden kunnen per seizoen en verkeer verschillen: kijk op het bord bij de halte.</p>

<h2>Wanneer hij de juiste keuze is</h2>
<ul>
<li>U landt <strong>overdag</strong>, tussen 8.00 en 21.00 uur.</li>
<li>U reist <strong>alleen of met z'n tweeën</strong>, met bagage die u moeiteloos draagt.</li>
<li>Uw verblijf ligt <strong>dicht bij Djemaa el-Fna</strong> of in het zuidelijke deel van de medina.</li>
<li>Budget is het belangrijkste criterium: 30 MAD tegenover 100 tot 150 MAD met de taxi is een echt verschil.</li>
</ul>

<h2>Wanneer u hem beter niet neemt</h2>
<p>In meerdere gevallen is bus 19 een slecht idee, en dat weet u beter voordat u een koffer naar de halte sleept.</p>
<p><strong>Na 23.30 uur</strong> rijdt hij niet meer – en juist dan landt een groot deel van de budgetvluchten. <strong>Met twee koffers</strong> of een jong kind worden instappen, bagage opbergen en het laatste stuk lopen zwaar. En <strong>als uw riad niet bij het plein ligt</strong>, komen er tien tot twintig minuten lopen door de steegjes bij, met bagage, vaak in het donker.</p>
<div class="callout">
<span class="callout-label">De rekensom met vier personen</span>
<p>Vier personen met de bus: 120 MAD. Een grand taxi of transfer voor dezelfde groep: 150 MAD overdag, of € 27 voor een voertuig tot zeven plaatsen, van deur tot deur. Het verschil wordt verwaarloosbaar, het comfort is van een andere orde.</p>
</div>

<h2>Voor de terugrit naar de luchthaven</h2>
<p>De bus vertrekt in omgekeerde richting vanaf Djemaa el-Fna met dezelfde frequentie. Voor een middagvlucht is dat een prima optie. Voor een vroege vlucht laat het eerste vertrek rond 6.00 uur daarentegen geen marge als uw incheckbalie vroeg sluit: boek dan de avond ervoor een transfer.</p>
`,
  faqs: [
    { q: "Wat kost bus 19 in Marrakech?", a: "30 MAD enkele reis en 50 MAD retour, dat laatste ongeveer twee weken geldig. U betaalt contant bij de chauffeur of aan het loket." },
    { q: "Wat zijn de tijden van bus 19 op luchthaven Marrakech?", a: "Vertrekken ongeveer elk halfuur tussen 6.00 en 23.30 uur. De tijden verschillen per seizoen: kijk op het bord bij de halte voor de terminal." },
    { q: "Waar stopt bus 19 in Marrakech?", a: "Op het plein Djemaa el-Fna, met enkele tussenhaltes zoals Guéliz. Hij rijdt niet naar uw verblijf: ligt uw riad verder van het plein, reken dan op tien tot twintig minuten lopen." },
    { q: "Rijdt bus 19 's nachts?", a: "Nee, het laatste vertrek is rond 23.30 uur. Omdat veel budgetvluchten later landen, is hij bij aankomst vaak onbruikbaar: plan een taxi of een geboekte transfer." },
    { q: "Loont bus 19 voor een groep?", a: "Zelden. Met vier personen kost de bus 120 MAD, tegenover 150 MAD voor een grand taxi of € 27 voor een privétransfer tot zeven plaatsen, van deur tot deur. Het prijsverschil is minimaal, het comfort niet te vergelijken." },
  ],
} satisfies LocalizedArticle;
