import type { LocalizedPage } from '../types';

export default {
  title: "Aankomsten luchthaven Marrakech (RAK): live vluchten",
  description: "Live aankomsten op luchthaven Marrakech Menara: vluchtstatus, route door de hal, paspoortcontrole, bagage, geldautomaten en de weg naar de stad.",
  eyebrow: "Marrakech Menara · Aankomsten",
  h1: "Aankomsten op luchthaven Marrakech",
  lede: "Het bord hieronder volgt de vluchten zodra ze in Menara landen. Daaronder de echte route van de slurf naar de stoeprand: politie, bagage, geldautomaten en de deur waardoor u het snelst buiten staat.",
  widget: 'flights-arrivals',
  body: `
<h2>Van het vliegtuig naar de stoeprand</h2>
<p>Reken van slurf tot uitgang op <strong>30 tot 60 minuten</strong>, afhankelijk van het uur. De RAK concentreert zijn aankomsten in de avond, wanneer meerdere Europese vluchten binnen hetzelfde halfuur landen: dan bepaalt de grenspolitie of u na twintig minuten buiten staat of een uur wacht.</p>
<ol>
<li><strong>Grenspolitie.</strong> Paspoortcontrole en inreisformulier. Dat wordt op de meeste vluchten aan boord uitgedeeld; vul het tijdens de vlucht in, anders stapt u uit de rij om een pen te zoeken. Burgers van de EU, Zwitserland, het Verenigd Koninkrijk, Canada en de VS hebben voor een toeristisch verblijf tot 90 dagen geen visum nodig.</li>
<li><strong>Bagageafhandeling.</strong> De banden liggen direct na de controle. Bij avondvluchten is het wachten reëel: 20 tot 30 minuten is geen uitzondering.</li>
<li><strong>Douane.</strong> Meestal vlot, met steekproeven. Contant geld hoeft pas boven 100.000 MAD aangegeven te worden.</li>
<li><strong>Openbare hal.</strong> Geldautomaten, wisselkantoren, simkaartbalies, autoverhuurbalies en dan de deuren naar de taxistandplaats en de parkeerterreinen.</li>
</ol>

<h2>Neem geld op voordat u naar buiten gaat</h2>
<p>Deze stap slaat u beter niet over. Taxi's accepteren geen kaarten en dirham is buiten Marokko niet te koop: de aankomsthal is dus uw eerste wisselpunt. De automaten werken goed, maar geven graag biljetten van 200 MAD. Neem genoeg op voor de rit en de eerste dagen en wissel in het café of de winkel van de terminal: met biljetten van 50 en 100 MAD voorkomt u de discussie over wisselgeld in de taxi.</p>
<div class="callout">
<span class="callout-label">De gewoonte die twintig minuten scheelt</span>
<p>Wacht er iemand op u – een geboekte transfer of de shuttle van de riad –, dan is het ontmoetingspunt de stoeprand vóór de aankomsthal, niet binnen in de terminal. Een bericht aan de chauffeur zodra u bereik hebt, nog vóór de douane, volstaat om de ophaling af te stemmen.</p>
</div>

<h2>Naar buiten: wat u te wachten staat</h2>
<p>Men spreekt u aan voordat u de deur bereikt. Dat is normaal en zelden agressief, maar het loont om erop voorbereid te zijn: de officiële taxistandplaats ligt direct voor de uitgang en het bord daar vermeldt de tarieven per zone. Elk aanbod <em>binnen</em> de terminal valt buiten dat kader.</p>
<p>Voor een hotel in Guéliz of Hivernage overdag neemt u de taxi en noemt u het vermelde bedrag voordat de kofferbak opengaat. Voor een riad in de medina, een vlucht na 21.00 uur of een groep van vier of meer legt de geboekte transfer prijs, voertuiggrootte en afzetpoort vooraf vast.</p>

<h2>'s Nachts aankomen</h2>
<p>Een groot deel van de prijsvechtervluchten landt tussen 21.00 en 1.00 uur. Drie praktische gevolgen: het taxitarief gaat naar het nachttarief van 150 tot 240 MAD; bus 19 rijdt na 23.30 uur niet meer; en de slecht verlichte steegjes van de medina lenen zich slecht voor het zoeken naar een riad met een koffer. Landt uw vlucht laat, dan is een geboekte transfer geen luxe: de chauffeur volgt het vluchtnummer en wacht bij vertraging.</p>
`,
  faqs: [
    { q: "Hoe lang duurt het om luchthaven Marrakech na de landing te verlaten?", a: "In de praktijk 30 tot 60 minuten: de grenspolitie kost 15 tot 40 minuten afhankelijk van de drukte, de bagage 20 tot 30 minuten bij avondvluchten. Aankomsten tussen 20.00 uur en middernacht zijn het drukst, omdat meerdere Europese vluchten tegelijk landen." },
    { q: "Moet u in Marrakech een inreisformulier invullen?", a: "Ja, bij aankomst wordt een politieformulier gevraagd. Het wordt op de meeste vluchten aan boord uitgedeeld: vul het tijdens de vlucht in zodat u de rij niet hoeft te verlaten. U hebt het adres van uw verblijf in Marrakech nodig." },
    { q: "Zijn er geldautomaten in de aankomsthal?", a: "Ja, er staan meerdere automaten en wisselkantoren in de openbare hal na de douane. Neem op voordat u naar buiten gaat: taxi's accepteren geen kaarten en dirham is buiten Marokko niet te koop." },
    { q: "Waar treft u uw chauffeur op Marrakech Menara?", a: "Op de stoeprand vóór de aankomsthal. Geboekte transfers vermelden een exact ontmoetingspunt in de bevestigingsvoucher, en de chauffeur houdt een bord met uw naam vast. Stuur hem een bericht zodra u bereik hebt." },
    { q: "Mijn vlucht landt na middernacht – zijn er nog taxi's?", a: "Ja, de standplaats blijft bediend zolang er vluchten binnenkomen. Het tarief gaat alleen naar het nachttarief van 150 tot 240 MAD naar de medina, Guéliz en Hivernage. Bus 19 stopt daarentegen om 23.30 uur." },
  ],
  cta: { heading: 'Een chauffeur die op uw vlucht wacht, niet andersom', text: "Vluchtnummervolging, wachttijd bij vertraging inbegrepen, vaste prijs per voertuig tot zeven passagiers en afzetten bij de medinapoort het dichtst bij uw riad.", label: 'Transfer boeken' },
} satisfies LocalizedPage;
