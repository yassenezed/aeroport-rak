import type { LocalizedArticle } from '../types';

export default {
  title: "Marrakech → Agadir: afstand, weg en vervoer",
  description: "Van luchthaven Marrakech naar Agadir: 250 km snelweg, 3 uur rijden, CTM- en Supratours-bussen, privétransfer en huurauto.",
  eyebrow: "Afstanden",
  h1: "Van luchthaven Marrakech naar Agadir",
  lede: "Tweehonderdvijftig kilometer, drie uur snelweg en een volledige decorwissel: van de rode stad naar de Atlantische Oceaan. Zo maakt u de rit en dit kost hij echt.",
  excerpt: "250 km tussen de RAK en Agadir: bus, privétransfer, auto of vliegtuig, met reistijden en prijzen vergeleken.",
  date: "2026-09-01",
  facts: [
    { label: "Afstand", value: "250", sub: "km" },
    { label: "Duur", value: "3 u", sub: "via snelweg" },
    { label: "Bus", value: "120–180", sub: "MAD" },
    { label: "Privétransfer", value: "€ 130–170", sub: "per voertuig" },
  ],
  body: `
<h2>De opties</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Optie</th><th>Prijs</th><th>Duur</th><th>Vertrek</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Bus CTM / Supratours</strong></td><td class="num">120–180 MAD / persoon</td><td class="num">3 u 30–4 u</td><td>Busstation Marrakech</td></tr>
<tr><td><strong>Privétransfer</strong></td><td class="num">€ 130–170 / voertuig</td><td class="num">3 u</td><td>Luchthaventerminal</td></tr>
<tr><td><strong>Huurauto</strong></td><td class="num">vanaf € 25 / dag + tol</td><td class="num">3 u</td><td>Balies op de luchthaven</td></tr>
<tr><td><strong>Vliegtuig</strong></td><td class="num">wisselend, via Casablanca</td><td class="num">4 u+ in totaal</td><td>RAK</td></tr>
</tbody>
</table>
</div>
<p>Het vliegtuig heeft op deze verbinding geen zin: er is geen nuttige rechtstreekse vlucht, en een overstap in Casablanca maakt de reis veel langer dan drie uur rijden, tegen een hogere prijs.</p>

<h2>De route</h2>
<p>De snelweg A7 verbindt Marrakech met Agadir via een modern tracé door de westelijke Hoge Atlas. De weg is uitstekend, met regelmatige verzorgingsplaatsen, en in drie uur rustig af te leggen. De tol bedraagt enkele tientallen dirham.</p>
<p>Twee aandachtspunten: de oversteek van het massief kan winderig zijn, en op het middenstuk worden tankstations schaars – tank vóór vertrek in Marrakech als uw tank laag is.</p>

<h2>De bus, met z'n tweeën de verstandigste optie</h2>
<p>CTM en Supratours rijden meerdere keren per dag in bussen met airco en bagageruim, voor <strong>120 tot 180 MAD per persoon</strong>. Supratours is gekoppeld aan de ONCF, wat gecombineerde trein-busreizen vanuit het noorden vergemakkelijkt.</p>
<p>Zoals alle langeafstandslijnen vertrekken de bussen van het <strong>busstation van Marrakech</strong>, niet van de luchthaven: tel een taxi en wachttijd erbij op.</p>
<div class="callout">
<span class="callout-label">Als Agadir uw eindbestemming is</span>
<p>Controleer eerst of er een rechtstreekse vlucht naar Agadir Al Massira (AGA) vanaf uw stad bestaat. In Marrakech landen om daarna drie uur te rijden loont alleen als het ticket duidelijk goedkoper is, of als u toch een paar dagen in Marrakech doorbrengt.</p>
</div>

<h2>Welke optie kiezen</h2>
<p><strong>De bus</strong> alleen of met z'n tweeën, met tijd: comfortabel en heel goedkoop. <strong>De privétransfer</strong> vanaf vier passagiers, met kinderen of bij een late landing – vertrek direct bij de terminal. <strong>De huurauto</strong> als u de kust tussen Essaouira, Taghazout en Agadir wilt verkennen, wat met openbaar vervoer niet lukt.</p>
`,
  faqs: [
    { q: "Hoe ver ligt Agadir van Marrakech?", a: "Ongeveer 250 kilometer over de snelweg A7, dus drie uur rijden door de westelijke Hoge Atlas. De route is modern, met regelmatige verzorgingsplaatsen en enkele tientallen dirham tol." },
    { q: "Hoe kom je van luchthaven Marrakech naar Agadir?", a: "Met een CTM- of Supratours-bus vanaf het busstation van Marrakech voor 120 tot 180 MAD per persoon, met een privétransfer direct vanaf de terminal voor € 130 tot € 170 per voertuig, of met een huurauto." },
    { q: "Zijn er vluchten tussen Marrakech en Agadir?", a: "Geen nuttige rechtstreekse verbinding: een overstap in Casablanca maakt de reis veel langer dan drie uur rijden, tegen een hogere prijs. Is Agadir uw eindbestemming, zoek dan een rechtstreekse vlucht naar AGA." },
    { q: "Wat kost een taxi van Marrakech naar Agadir?", a: "Een afgesproken grand taxi kost meestal 800 tot 1.200 MAD voor het voertuig. Een geboekte privétransfer van € 130 tot € 170 biedt een vaste prijs, vertrek bij de terminal en vluchtvolging." },
  ],
} satisfies LocalizedArticle;
