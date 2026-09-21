import type { LocalizedPage } from '../types';

export default {
  title: "Transfer luchthaven Marrakech online boeken",
  description: "Boek uw privétransfer vanaf luchthaven Marrakech: vaste prijs per voertuig, vluchtvolging, afzetten bij de medinapoorten en gratis annuleren.",
  eyebrow: "Marrakech Menara · Boeken",
  h1: "Een transfer vanaf luchthaven Marrakech boeken",
  lede: "Geef uw bestemming en landingstijd op: de prijs verschijnt per voertuig, niet per passagier. Een chauffeur wacht u op bij de uitgang van de aankomsthal met uw naam en zet u af bij de medinapoort het dichtst bij uw riad.",
  widget: 'transfer',
  body: `
<h2>Wat een boeking omvat</h2>
<ul>
<li><strong>Een vaste prijs per voertuig</strong>, bekend vóór vertrek, voor maximaal zeven passagiers in een busje. Niets te onderhandelen bij aankomst.</li>
<li><strong>Volgen van het vluchtnummer</strong>: landt u een uur later, dan past de chauffeur zich aan en wacht.</li>
<li><strong>Gratis wachttijd</strong> na de landing, meestal 45 tot 60 minuten – genoeg voor politie en bagage.</li>
<li><strong>Gratis annuleren</strong> tot 24 uur vóór de ophaling bij de meeste aanbieders.</li>
<li><strong>Kinderzitjes</strong> op aanvraag, bij het boeken te vermelden: in een taxi aan de standplaats zijn ze vrijwel nooit beschikbaar.</li>
</ul>

<h2>Het juiste voertuig kiezen</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Voertuig</th><th>Passagiers</th><th>Koffers</th><th>Voor wie</th></tr></thead>
<tbody>
<tr><td><strong>Sedan</strong></td><td class="num">1–3</td><td class="num">2–3</td><td>Stel of trio met handbagage en één koffer</td></tr>
<tr class="row-highlight"><td><strong>Busje</strong></td><td class="num">4–7</td><td class="num">5–7</td><td>Gezin, vriendengroep, beste prijs per plaats</td></tr>
<tr><td><strong>Minibus</strong></td><td class="num">8–15</td><td class="num">10+</td><td>Groep, congres, bruiloft</td></tr>
<tr><td><strong>4x4 of premium busje</strong></td><td class="num">1–6</td><td class="num">4–6</td><td>Woestijnkampen, pistes van Agafay, zakenreizen</td></tr>
</tbody>
</table>
</div>
<p>Het belangrijkste: omdat het tarief per voertuig geldt, is een busje voor vier of vijf personen per persoon veel goedkoper dan twee petits taxis, die elk maar drie passagiers meenemen.</p>

<h2>Wat u klaar moet hebben</h2>
<p>Boeken duurt twee minuten als u dit bij de hand hebt: uw <strong>vluchtnummer</strong> en landingstijd; de <strong>exacte naam van uw riad of hotel</strong>; voor de medina de <strong>afzetpoort</strong> die uw verblijf heeft doorgegeven; het aantal passagiers en koffers; en een <strong>in Marokko bereikbaar telefoonnummer</strong>, bij voorkeur WhatsApp, dat de meeste chauffeurs gebruiken.</p>
<div class="callout">
<span class="callout-label">Boek beide richtingen</span>
<p>De terugrit is vaak lastiger dan de heenrit: om 5 uur 's ochtends staat er in een medinasteeg geen taxirij. Heen en terug in één keer boeken is meestal goedkoper dan twee losse ritten en neemt het probleem weg.</p>
</div>

<h2>Hoogseizoen: boek vroeg</h2>
<p>Europese schoolvakanties, voorjaarsbruggetjes, de Marathon des Sables en de feestdagen eind december maken grote voertuigen als eerste schaars. Reist u tussen december en april met vijf of meer, dan is enkele weken vooruit boeken geen overdreven voorzichtigheid: het voorkomt simpelweg dat uw groep over drie auto's wordt verdeeld.</p>
`,
  faqs: [
    { q: "Is de getoonde prijs per persoon of per voertuig?", a: "Per voertuig. Een transfer van € 27 naar de medina geldt voor maximaal zeven passagiers in een busje, bagage inbegrepen. Daardoor is hij vanaf vier personen duidelijk goedkoper dan een taxi, want een petit taxi neemt er maar drie mee." },
    { q: "Wat gebeurt er als mijn vlucht vertraging heeft?", a: "De chauffeur volgt uw vluchtnummer en past de ophaaltijd aan. Meestal is 45 tot 60 minuten gratis wachttijd na de landing inbegrepen, genoeg voor grenspolitie en bagageafhandeling." },
    { q: "Kan een geboekte transfer geannuleerd worden?", a: "Bij de meeste aanbieders wel: gratis annuleren tot 24 uur vóór de ophaling, met volledige terugbetaling. De exacte voorwaarden staan vóór de betaling op uw bevestigingsvoucher." },
    { q: "Kun je een kinderzitje aanvragen?", a: "Ja, vermeld het bij het boeken met leeftijd en gewicht van het kind. Een doorslaggevend argument voor de transfer: taxi's aan de standplaats hebben ze praktisch nooit." },
    { q: "Waar wacht de chauffeur op luchthaven Marrakech?", a: "Bij de uitgang van de aankomsthal, met een bord met uw naam. Het exacte ontmoetingspunt staat op uw bevestigingsvoucher. Stuur hem een bericht zodra u bereik hebt, nog vóór de douane." },
    { q: "Betaalt u online of ter plaatse?", a: "Beide komen voor, afhankelijk van de aanbieder. Online boeken legt het tarief vast en veel aanbieders staan uitgestelde betaling of betaling aan de chauffeur toe. Betaalt u ter plaatse, neem dan dirham mee: een kaart wordt in het voertuig niet altijd geaccepteerd." },
  ],
  cta: { heading: 'Uw transfer, in twee minuten geregeld', text: "Vergelijk de beschikbare voertuigen voor uw landingstijd en leg het tarief vast. Gratis annuleren bij de meeste boekingen.", label: 'Beschikbaarheid bekijken' },
} satisfies LocalizedPage;
