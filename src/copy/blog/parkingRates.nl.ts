import type { LocalizedArticle } from '../types';

export default {
  title: "Parkeertarieven luchthaven Marrakech-Menara",
  description: "Parkeertarieven van luchthaven Marrakech-Menara: prijzen per uur, dag en week, kiss-and-ride, betalen en goedkopere opties.",
  eyebrow: "Luchthaven",
  h1: "Parkeren op luchthaven Marrakech: de tarieventabel",
  lede: "Heel goedkoop om iemand af te zetten, redelijk voor een dagtrip, veel minder vanzelfsprekend voor een week. Hier de ordes van grootte en de rekensom vóór u de auto neerzet.",
  excerpt: "Prijzen per uur, dag en week op het parkeerterrein van de RAK, met alternatieven als lang parkeren niet meer loont.",
  date: "2026-09-06",
  facts: [
    { label: "30 minuten", value: "gratis", sub: "of ≈ 10 MAD" },
    { label: "1 uur", value: "≈ 20", sub: "MAD" },
    { label: "24 uur", value: "70–80", sub: "MAD" },
    { label: "1 week", value: "450–550", sub: "MAD" },
  ],
  body: `
<h2>De tabel in ordes van grootte</h2>
<p>Parkeren op de RAK wordt per duur berekend, met een korte eerste schijf die gratis of symbolisch is, daarna per uur met een dagmaximum. De onderstaande cijfers zijn in september 2026 gecontroleerd en dienen als richtlijn: <strong>het bord bij de ingang is leidend</strong>, het tarief wordt periodiek herzien.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Duur</th><th>Indicatief tarief</th><th>Typisch gebruik</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Minder dan 30 minuten</strong></td><td class="num">gratis of ≈ 10 MAD</td><td>Iemand afzetten of ophalen</td></tr>
<tr><td><strong>1 uur</strong></td><td class="num">≈ 20 MAD</td><td>Wachten op een vertraagde vlucht</td></tr>
<tr><td><strong>3 uur</strong></td><td class="num">≈ 40 MAD</td><td>Iemand uitzwaaien</td></tr>
<tr><td><strong>24 uur</strong></td><td class="num">70–80 MAD</td><td>Dagtrip</td></tr>
<tr><td><strong>3 dagen</strong></td><td class="num">≈ 200–240 MAD</td><td>Lang weekend</td></tr>
<tr><td><strong>1 week</strong></td><td class="num">450–550 MAD</td><td>Reis naar het buitenland</td></tr>
</tbody>
</table>
</div>
<p>U betaalt bij de automaat of de kassa <strong>voordat</strong> u naar uw auto gaat. Neem contant mee: niet elke automaat accepteert een kaart.</p>

<h2>Vanaf wanneer het niet meer loont</h2>
<p>Vergelijk met een retourrit naar de stad: twee taxiritten tegen het getoonde tarief kosten <strong>200 tot 300 MAD</strong>, twee privétransfers ongeveer € 54. Vanaf drie of vier dagen haalt parkeren dat bedrag in en gaat erboven – en u laat bovendien een auto in de zon staan.</p>
<div class="callout">
<span class="callout-label">60 °C in het interieur</span>
<p>Een auto die in Marrakech in de zomer in de volle zon staat, loopt binnen ruim boven 60 °C op. Laat geen elektronica, cosmetica, medicijnen of aanstekers achter. En niets zichtbaars op de stoelen, zoals overal.</p>
</div>

<h2>Afzetten en ophalen</h2>
<p>Voor de terminals kunt u kort stoppen, en medewerkers houden het verkeer in beweging, vooral 's avonds. Haalt u iemand op, bedenk dan dat er <strong>30 tot 60 minuten zitten tussen landing en het verlaten van de hal</strong>: rijd het parkeerterrein op en wacht daar in plaats van rondjes te rijden.</p>

<h2>Huurauto: geen ticket trekken</h2>
<p>Levert u een huurauto in, dan regelt de verhuurder de inleverplek. Volg de borden van het verhuurkantoor en trek geen ticket bij het openbare parkeerterrein, anders betaalt u tijd die niet de uwe is. Reken een kwartier voor de inspectie en bewaar gedateerde foto's van de ingeleverde auto.</p>
`,
  faqs: [
    { q: "Wat kost een dag parkeren op luchthaven Marrakech?", a: "Ongeveer 70 tot 80 MAD per 24 uur, daaronder per uur zo'n 20 MAD. Het bord bij de ingang is leidend en wordt periodiek herzien." },
    { q: "Is afzetten op de RAK gratis?", a: "De eerste schijf van ongeveer dertig minuten is gratis of symbolisch, genoeg voor een snelle afzet of ophaling. Voor de terminals wordt het verkeer vlot in beweging gehouden, vooral 's avonds." },
    { q: "Wat kost een week parkeren op luchthaven Marrakech?", a: "Ongeveer 450 tot 550 MAD. Vanaf drie of vier dagen zijn twee retourritten met taxi of transfer vaak goedkoper en laat u geen auto in de zon staan." },
    { q: "Kun je parkeren op Marrakech Menara met een kaart betalen?", a: "Niet bij elke automaat: neem contant geld in dirham mee. U betaalt vóór u naar uw auto gaat, bij de automaat of de kassa." },
  ],
} satisfies LocalizedArticle;
