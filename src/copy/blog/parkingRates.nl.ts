import type { LocalizedArticle } from '../types';

export default {
  title: "Parkeerkosten luchthaven Marrakech-Menara per verblijf",
  description: "Wat parkeren op luchthaven Marrakech-Menara kost voor 3 uur, 1 dag, 1 of 2 weken: berekend met het ONDA-tarief en vergeleken met de taxi.",
  eyebrow: "Luchthaven",
  h1: "Parkeren op luchthaven Marrakech-Menara: de kosten per verblijf",
  lede: "6 MAD om iemand af te zetten, 42 MAD voor een dag, ongeveer 300 MAD voor een week: parkeren aan de RAK is een van de goedkoopste posten van een reis. Dit zijn de kosten per duur, en het punt waarop taxi of transfer weer voordeliger worden.",
  excerpt: "De echte parkeerkosten aan de RAK voor 3 uur, 1 dag, 3 dagen, 1 of 2 weken, met het ONDA-tarief en de vergelijking met taxi en transfer.",
  date: '2026-10-02',
  facts: [
    { label: "1 uur", value: "6", sub: "MAD" },
    { label: "24 uur", value: "42", sub: "MAD" },
    { label: "1 week", value: "≈ 300", sub: "MAD" },
    { label: "Capaciteit", value: "1.550", sub: "plaatsen" },
  ],
  body: `
<h2>Parkeerkosten op luchthaven Marrakech-Menara volgens hoelang u weg bent</h2>
<p>Berekend met het ONDA-tarief voor een auto op een openluchtplaats, aan 42 MAD per periode van 24 uur:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Situatie</th><th>Duur</th><th>Kosten</th><th>≈ in euro</th></tr></thead>
<tbody>
<tr><td><strong>Iemand afzetten of ophalen</strong></td><td>tot 1 u</td><td class="num">6 MAD</td><td class="num">€ 0,55</td></tr>
<tr><td><strong>Iemand uitzwaaien</strong></td><td>2 tot 3 u</td><td class="num">11 MAD</td><td class="num">€ 1</td></tr>
<tr><td><strong>Heen en terug op één dag</strong></td><td>5 tot 12 u</td><td class="num">22 MAD</td><td class="num">€ 2</td></tr>
<tr class="row-highlight"><td><strong>Eén nacht</strong></td><td>12 tot 24 u</td><td class="num">42 MAD</td><td class="num">€ 3,90</td></tr>
<tr><td><strong>Lang weekend</strong></td><td>3 dagen</td><td class="num">≈ 126 MAD</td><td class="num">€ 11,70</td></tr>
<tr><td><strong>Eén week</strong></td><td>7 dagen</td><td class="num">≈ 294 MAD</td><td class="num">€ 27</td></tr>
<tr><td><strong>Twee weken</strong></td><td>14 dagen</td><td class="num">≈ 588 MAD</td><td class="num">€ 54</td></tr>
</tbody>
</table>
</div>
<p class="small">Richtbedragen: het ONDA kan het tarief herzien en het bord aan de ingang geldt. Omrekening bij benadering € 1 ≈ 10,8 MAD. Het volledige tarief en de drie parkings staan op onze pagina <a href="/nl/parking/">parkeren op de luchthaven</a>.</p>

<h2>Parkeren, taxi of transfer: het omslagpunt</h2>
<p>Een taxi heen en terug naar de medina kost overdag 200 tot 300 MAD: de prijs van <strong>5 tot 7 dagen parkeren</strong>. Twee <a href="/nl/book-transfer/">privétransfers</a> kosten ongeveer 580 MAD, ofwel <strong>twee weken parkeren</strong>. Woont u in of rond Marrakech, dan is de auto op de luchthaven laten bijna altijd het goedkoopst voor reizen tot twee weken.</p>
<div class="callout">
<span class="callout-label">De kost die het tarief niet toont</span>
<p>De plaatsen liggen in open lucht. In de zomer wordt het in de auto ruim boven 60 °C: zonnescherm, en geen elektronica, medicijnen of cosmetica in de wagen.</p>
</div>

<h2>Drie tips om de juiste prijs te betalen</h2>
<p><strong>Bewaar het ticket</strong> van de slagboom: u hebt het nodig om voor vertrek te betalen. <strong>Neem dirham cash mee</strong>, kaarten worden niet overal aanvaard. En levert u een <a href="/nl/car-rental/">huurauto</a> in, volg dan de borden van de verhuurder zonder ticket aan de openbare parking te nemen.</p>
`,
  faqs: [
    { q: "Wat kost een dag parkeren op de luchthaven van Marrakech?", a: "42 MAD voor 12 tot 24 uur volgens het ONDA-tarief, ongeveer € 3,90. Korter: 22 MAD voor 5 tot 12 uur." },
    { q: "Wat kost een week parkeren aan de RAK?", a: "Ongeveer 294 MAD (≈ € 27) aan 42 MAD per 24 uur, en ongeveer 588 MAD voor twee weken." },
    { q: "Is parkeren goedkoper dan een taxi heen en terug?", a: "Ja tot ongeveer een week: een taxi heen en terug naar de medina kost overdag 200 tot 300 MAD, de prijs van 5 tot 7 dagen parkeren." },
    { q: "Wat kost iemand snel afzetten?", a: "6 MAD als u de parking oprijdt, tot 1 uur. De rijstrook voor de terminals is alleen voor kort stoppen." },
    { q: "Kan ik het parkeren met een kaart betalen?", a: "Niet overal: neem dirham cash mee. U betaalt voor vertrek, aan de kassa of automaat." },
  ],
} satisfies LocalizedArticle;
