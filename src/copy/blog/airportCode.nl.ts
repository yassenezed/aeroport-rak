import type { LocalizedArticle } from '../types';

export default {
  title: "RAK of GMMX: de code van luchthaven Marrakech-Menara",
  description: "Waarom luchthaven Marrakech-Menara RAK heet, wat GMMX betekent en hoe u hem bij het boeken niet verwart met andere Marokkaanse luchthavens.",
  eyebrow: "Luchthaven",
  h1: "RAK en GMMX: de codes van luchthaven Marrakech",
  lede: "Drie letters op uw ticket, vier in de vliegplannen. Hier wat ze betekenen, waar die \"RAK\" vandaan komt die niet op de stadsnaam lijkt, en welke verwarring u bij het boeken voorkomt.",
  excerpt: "RAK, GMMX en de codes van de andere Marokkaanse luchthavens: wat de letters betekenen en hoe u boekingsfouten voorkomt.",
  date: "2026-09-10",
  body: `
<h2>RAK: de IATA-code</h2>
<p><strong>RAK</strong> is de driecijferige lettercode van de Internationale Luchtvervoersvereniging. U ziet hem op tickets, bagagelabels en informatieborden; hij staat voor luchthaven <strong>Marrakech Menara</strong>.</p>
<p>Waarom RAK en niet MAR of MRK? Omdat IATA-codes worden toegekend op beschikbaarheid, niet op taalkundige logica: MAR en MRK waren elders al in gebruik. RAK neemt gewoon drie medeklinkers uit "Marrakech", zoals AGA voor Agadir of CMN voor Casablanca Mohammed V.</p>

<h2>GMMX: de ICAO-code</h2>
<p><strong>GMMX</strong> is de viercijferige lettercode van de Internationale Burgerluchtvaartorganisatie, gebruikt door luchtverkeersleiders, vliegplannen en luchtvaartweerdiensten. De opbouw is geografisch: <strong>GM</strong> staat voor Marokko, de laatste twee letters voor het vliegveld.</p>
<p>U gebruikt hem nooit om te boeken, maar komt hem tegen in apps die vluchten volgen en in luchtvaartweerberichten.</p>

<h2>De andere Marokkaanse luchthavens, om fouten te voorkomen</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Luchthaven</th><th>IATA</th><th>ICAO</th><th>Vanaf Marrakech</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Marrakech Menara</strong></td><td class="num">RAK</td><td class="num">GMMX</td><td>—</td></tr>
<tr><td>Casablanca Mohammed V</td><td class="num">CMN</td><td class="num">GMMN</td><td class="num">240 km</td></tr>
<tr><td>Agadir Al Massira</td><td class="num">AGA</td><td class="num">GMAD</td><td class="num">250 km</td></tr>
<tr><td>Essaouira Mogador</td><td class="num">ESU</td><td class="num">GMMI</td><td class="num">180 km</td></tr>
<tr><td>Ouarzazate</td><td class="num">OZZ</td><td class="num">GMMZ</td><td class="num">200 km</td></tr>
<tr><td>Fez Saïss</td><td class="num">FEZ</td><td class="num">GMFF</td><td class="num">530 km</td></tr>
<tr><td>Rabat Salé</td><td class="num">RBA</td><td class="num">GMME</td><td class="num">320 km</td></tr>
</tbody>
</table>
</div>
<div class="callout">
<span class="callout-label">De klassieke fout</span>
<p>Naar <strong>CMN</strong> boeken in de veronderstelling in Marrakech te landen. Casablanca Mohammed V is de grootste luchthaven van het land en staat vaak bovenaan de zoekresultaten – maar ligt op 240 kilometer, zo'n tweeënhalf uur rijden of een treinrit vanaf Casa-Voyageurs. Controleer altijd de drie letters vóór u betaalt.</p>
</div>

<h2>Marrakech Menara in het kort</h2>
<ul>
<li><strong>Officiële naam</strong>: luchthaven Marrakech Menara, naar de nabijgelegen Menara-tuinen.</li>
<li><strong>Ligging</strong>: 6 km ten zuidwesten van het centrum, op 471 meter hoogte.</li>
<li><strong>Startbaan</strong>: één baan van 3.100 meter.</li>
<li><strong>Verkeer</strong>: ruim 9,3 miljoen passagiers in 2024.</li>
<li><strong>Terminals</strong>: twee aangrenzende hallen, te voet verbonden.</li>
</ul>
`,
  faqs: [
    { q: "Wat is de code van luchthaven Marrakech?", a: "RAK is de IATA-code op ticket en bagagelabel, GMMX de ICAO-code voor luchtverkeersleiding en vliegplannen." },
    { q: "Waarom heet luchthaven Marrakech RAK?", a: "IATA-codes worden op beschikbaarheid toegekend, niet op taalkundige logica: MAR en MRK waren elders al in gebruik. RAK neemt drie medeklinkers uit \"Marrakech\", zoals AGA voor Agadir of CMN voor Casablanca." },
    { q: "Wat betekent GMMX?", a: "Het is de ICAO-code van Marrakech Menara. De opbouw is geografisch: GM staat voor Marokko, de laatste twee letters voor het vliegveld. Hij dient voor vliegplannen en luchtvaartweer, nooit voor boekingen." },
    { q: "Met welke luchthaven verwar je RAK niet?", a: "Met CMN, Casablanca Mohammed V, die vaak bovenaan de zoekresultaten over Marokko staat maar op 240 kilometer van Marrakech ligt, zo'n tweeënhalf uur rijden. Controleer de drie letters vóór u betaalt." },
  ],
} satisfies LocalizedArticle;
