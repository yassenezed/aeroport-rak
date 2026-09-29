import type { LocalizedArticle } from '../types';

export default {
  title: "Luchthaven Marrakech-Menara → Essaouira: afstand, vervoer",
  description: "Van luchthaven Marrakech-Menara naar Essaouira: 180 km, 2,5 uur rijden, prijzen van CTM- en Supratours-bussen, privétransfer en huurauto.",
  eyebrow: "Afstanden",
  h1: "Van luchthaven Marrakech naar Essaouira",
  lede: "Honderdtachtig kilometer rechte weg door de arganbossen, tweeënhalf uur en tien graden minder bij aankomst. Hier de vier manieren om te reizen en wat ze kosten.",
  excerpt: "180 km en 2,5 uur tussen de RAK en Essaouira: bus, privétransfer, grand taxi of huurauto, met echte prijzen.",
  date: "2026-09-03",
  facts: [
    { label: "Afstand", value: "180", sub: "km" },
    { label: "Duur", value: "2 u 30", sub: "rijden" },
    { label: "Bus", value: "80–120", sub: "MAD" },
    { label: "Privétransfer", value: "≈ € 95", sub: "per voertuig" },
  ],
  body: `
<h2>De opties vergeleken</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Optie</th><th>Prijs</th><th>Duur</th><th>Vertrek</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Privétransfer</strong></td><td class="num">≈ € 95 / voertuig</td><td class="num">2 u 30</td><td>Op de luchthaven zelf</td></tr>
<tr><td><strong>Bus CTM of Supratours</strong></td><td class="num">80–120 MAD / persoon</td><td class="num">3 u–3 u 30</td><td>Busstation Marrakech</td></tr>
<tr><td><strong>Grand taxi</strong></td><td class="num">600–900 MAD / voertuig</td><td class="num">2 u 30</td><td>Standplaats, af te spreken</td></tr>
<tr><td><strong>Huurauto</strong></td><td class="num">vanaf € 25 / dag + brandstof</td><td class="num">2 u 30</td><td>Balies op de luchthaven</td></tr>
</tbody>
</table>
</div>
<p>Wat vaak wordt vergeten: de bussen <strong>vertrekken niet van de luchthaven</strong>, maar van het busstation van Marrakech. U moet dus een taxi en wachttijd optellen, wat de totale duur richting vier uur duwt.</p>

<h2>De route</h2>
<p>De N8 en daarna de R207 lopen gelijkmatig en goed geasfalteerd door de arganbossen, zonder bijzondere moeilijkheid. Een mooie route met enkele klassieke stops – de coöperaties voor arganolie en de geiten in de arganbomen, waarvan de enscenering een betaalde attractie is geworden waar u beter aan voorbij rijdt.</p>
<p>Reken op tweeënhalf uur bij normaal rijden. De laatste kilometers richting Essaouira zijn vaak winderig: het handelsmerk van de stad.</p>

<h2>Welke optie voor wie</h2>
<p><strong>De bus</strong> blijft qua prijs onverslaanbaar, met 80 tot 120 MAD per persoon afhankelijk van maatschappij en comfort. CTM en Supratours zijn betrouwbaar, hebben airco en een bagageruim. De juiste keuze alleen of met z'n tweeën zonder haast.</p>
<p><strong>De privétransfer</strong> wordt verstandig vanaf drie of vier passagiers: € 95 per voertuig tegenover 400 MAD voor vier bustickets plus twee taxi's erheen verkleint het verschil sterk – en u vertrekt direct bij de terminal, zonder busstation.</p>
<p><strong>De huurauto</strong> ligt voor de hand als u wilt rondtoeren: Sidi Kaouki, Diabat en de stranden ten zuiden van Essaouira hebben geen openbaar vervoer.</p>
<div class="callout">
<span class="callout-label">Als u 's avonds landt</span>
<p>Vertrek niet dezelfde avond. De weg biedt 's nachts niets, de bussen rijden niet meer, en om middernacht in Essaouira een riad zoeken in de ommuurde medina is de beste manier om slecht te beginnen. Slaap in Marrakech en vertrek 's ochtends.</p>
</div>

<h2>Hoe lang blijven</h2>
<p>Essaouira verdient meer dan een dagtrip: met vijf uur rijden heen en terug blijven er maar een paar uur ter plaatse over. <strong>Twee nachten</strong> geven tijd voor de medina op de werelderfgoedlijst, de haven, de stadsmuren en een strand, en twee keer vis eten – het minimum om het verschil in sfeer met Marrakech te voelen.</p>
`,
  faqs: [
    { q: "Hoe ver ligt Essaouira van Marrakech?", a: "Ongeveer 180 kilometer, dus tweeënhalf uur rijden via de N8 en daarna de R207, door de arganbossen. De weg is gelijkmatig en goed geasfalteerd, zonder bijzondere moeilijkheid." },
    { q: "Hoe kom je van luchthaven Marrakech naar Essaouira?", a: "Met een privétransfer vanaf de terminal voor ongeveer € 95 per voertuig, met een CTM- of Supratours-bus vanaf het busstation van Marrakech voor 80 tot 120 MAD per persoon, met een afgesproken grand taxi of met een huurauto." },
    { q: "Vertrekken de bussen naar Essaouira van luchthaven Marrakech?", a: "Nee, ze vertrekken van het busstation van Marrakech. U hebt dus een taxi vanaf de luchthaven en wachttijd nodig, wat de totale reis op ongeveer vier uur brengt." },
    { q: "Kun je Essaouira als dagtrip vanuit Marrakech doen?", a: "Het kan, maar bevredigt weinig: vijf uur rijden heen en terug laat maar een paar uur ter plaatse. Twee nachten geven tijd voor medina, haven, stadsmuren en een strand zonder haast." },
  ],
  cta: { heading: "Direct van de terminal naar Essaouira", text: "Zonder omweg via het busstation: een privévoertuig, vaste prijs, tot zeven passagiers.", label: "Prijzen bekijken" },
} satisfies LocalizedArticle;
