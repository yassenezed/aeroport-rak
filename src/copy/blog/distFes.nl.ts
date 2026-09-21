import type { LocalizedArticle } from '../types';

export default {
  title: "Marrakech → Fez: trein, bus, vliegtuig of weg?",
  description: "Van Marrakech naar Fez: 530 km, 7 uur ONCF-trein vanaf Guéliz, bus, vlucht via Casablanca of de weg. Reistijden, prijzen en de beste keuze.",
  eyebrow: "Afstanden",
  h1: "Van Marrakech naar Fez: welke optie",
  lede: "Vijfhonderddertig kilometer scheiden de twee keizerssteden: de langste rit in deze gids, en die waarbij de keuze van vervoer uw dag het meest bepaalt.",
  excerpt: "Nachttrein, bus, vlucht via Casablanca of de weg: een eerlijke vergelijking van de manieren om Marrakech en Fez te verbinden.",
  date: "2026-08-30",
  facts: [
    { label: "Afstand", value: "530", sub: "km" },
    { label: "ONCF-trein", value: "≈ 7 u", sub: "vanaf Guéliz" },
    { label: "Weg", value: "6 u", sub: "via snelweg" },
    { label: "2e klas", value: "200–250", sub: "MAD" },
  ],
  body: `
<h2>De trein: lang, maar comfortabel</h2>
<p>De ONCF verbindt Marrakech met Fez in <strong>ongeveer zeven uur</strong>, meestal met een overstap in Casablanca. Een kaartje kost zo'n <strong>200 tot 250 MAD in tweede klas</strong> en 300 tot 380 MAD in eerste. De treinen zijn comfortabel, stipt en laten u werken of slapen.</p>
<p>Onmisbare herinnering: het station van Marrakech ligt in <strong>Guéliz</strong>, niet op de luchthaven. Reken op 50 tot 70 MAD taxi en wachttijd, wat het totaal op ongeveer acht uur brengt.</p>
<p>Sommige nachttreinen laten u slapend reizen en besparen een hotelnacht – op deze afstand een optie om serieus te overwegen.</p>

<h2>De vier opties vergeleken</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Optie</th><th>Prijs</th><th>Deur tot deur</th><th>Comfort</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>ONCF-trein</strong></td><td class="num">200–250 MAD + taxi</td><td class="num">≈ 8 u</td><td>Zeer goed</td></tr>
<tr><td><strong>Bus CTM / Supratours</strong></td><td class="num">200–280 MAD</td><td class="num">8–9 u</td><td>Redelijk</td></tr>
<tr><td><strong>Vlucht via Casablanca</strong></td><td class="num">wisselend, vaak hoog</td><td class="num">5–7 u</td><td>Versnipperd</td></tr>
<tr><td><strong>Auto</strong></td><td class="num">brandstof + tol</td><td class="num">6 u</td><td>Vermoeiend alleen</td></tr>
</tbody>
</table>
</div>
<p>Het vliegtuig stelt op deze verbinding steeds teleur: geen nuttige rechtstreekse vlucht, een overstap in Casablanca, en met toegangsritten, inchecken en wachten erbij is de winst op de trein klein tegen een veel hogere prijs.</p>

<h2>De weg</h2>
<p>De snelweg loopt via Casablanca, dan Rabat en Meknes. Zes uur echt rijden over een moderne, probleemloze maar lange en eentonige route. Alleen zinvol als u onderweg wilt stoppen – Rabat en Meknes zijn de etappe waard – of met meerdere personen en een al gehuurde auto reist.</p>
<div class="callout">
<span class="callout-label">De juiste verdeling van de route</span>
<p>Marrakech en Fez direct na elkaar bederft ze allebei. Laat uw reis het toe, overnacht dan in Casablanca of Rabat: zo wordt een zware transfer een etappe, en komt u uitgerust in Fez aan.</p>
</div>

<h2>En als u rechtstreeks naar Fez vliegt?</h2>
<p>Fez heeft een eigen luchthaven, <strong>Fez Saïss (FEZ)</strong>, bediend door meerdere Europese maatschappijen. Is Fez uw hoofdbestemming, dan bespaart een rechtstreekse vlucht u deze rit helemaal. Marrakech loont als toegangspoort alleen als u er meerdere dagen blijft.</p>
`,
  faqs: [
    { q: "Hoe lang duurt de trein tussen Marrakech en Fez?", a: "Ongeveer zeven uur, meestal met een overstap in Casablanca, voor 200 tot 250 MAD in tweede klas. Met de taxi van de luchthaven naar station Guéliz rekent u acht uur van deur tot deur." },
    { q: "Is vliegen tussen Marrakech en Fez beter?", a: "Zelden. Er is geen nuttige rechtstreekse vlucht, de overstap gaat via Casablanca, en met toegangsritten, inchecken en wachten is de winst op de trein klein tegen een duidelijk hogere prijs." },
    { q: "Hoe ver ligt Fez van Marrakech?", a: "Ongeveer 530 kilometer, dus zes uur over de snelweg via Casablanca, Rabat en Meknes. Het is de langste rit tussen twee grote toeristische steden in Marokko." },
    { q: "Is er een nachttrein tussen Marrakech en Fez?", a: "Ja, sommige verbindingen laten u slapend reizen en besparen een hotelnacht. Op deze afstand een serieuze optie – tijdig boeken." },
  ],
} satisfies LocalizedArticle;
