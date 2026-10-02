import type { LocalizedPage } from '../types';

export default {
  title: "Parkeren luchthaven Marrakech-Menara: tarieven 2026",
  description: "Parkeren op luchthaven Marrakech-Menara: 3 parkings, 1.550 plaatsen, 6 MAD het 1e uur en 42 MAD per 24 u (ONDA-tarief). Afzetten en alternatieven.",
  eyebrow: "Parkeren · tarieven en gids 2026",
  h1: "Parkeren op luchthaven Marrakech-Menara: tarieven en gids",
  lede: "Drie openluchtparkings voor de terminals, meer dan 1.500 plaatsen en heel lage tarieven. Dit zijn de officiële prijzen, de beste manier om een reiziger af te zetten of op te wachten, en de rekensom voor een week weg.",
  highlights: [
    { icon: 'parking', value: "6 MAD", label: "Het eerste uur (≈ € 0,55)" },
    { icon: 'clock', value: "42 MAD", label: "Van 12 tot 24 uur (≈ € 3,90)" },
    { icon: 'map-pin', value: "1.550 plaatsen", label: "Verdeeld over 3 parkings" },
    { icon: 'shield-check', value: "24/7", label: "Dag en nacht bewaakt" },
  ],
  cardSections: [
    {
      eyebrow: "Voorzieningen",
      heading: "De parkings van luchthaven Marrakech-Menara",
      intro: "Drie parkings op maaiveldniveau voor de terminal, dag en nacht open.",
      variant: "feature",
      items: [
        { icon: 'parking', title: "Parking 1", text: "De grootste van de drie luchthavenparkings, op maaiveldniveau voor het terminalgebouw.", tags: ["740 plaatsen", "24/7"] },
        { icon: 'parking', title: "Parking 2", text: "De tweede grootste, op enkele minuten lopen van de vertrek- en aankomsthallen.", tags: ["460 plaatsen", "24/7"] },
        { icon: 'parking', title: "Parking 3", text: "De kleinste van de drie, met dezelfde tarieven als de andere.", tags: ["350 plaatsen", "24/7"] },
      ],
    },
    {
      eyebrow: "Goed om te weten",
      heading: "Veiligheid en werking",
      variant: "compact",
      items: [
        { icon: 'shield-check', title: "24/7 bewaakt", text: "Omheind en dag en nacht bewaakt, ook voor late vluchten." },
        { icon: 'board', title: "Ticket bij de ingang", text: "Automatische slagboom: bewaar het ticket, u betaalt ermee bij het buitenrijden." },
        { icon: 'wallet', title: "Betalen voor vertrek", text: "Aan de kassa of automaat; neem dirham cash mee, kaarten werken niet altijd." },
        { icon: 'sun', title: "Openluchtplaatsen", text: "In de zomer wordt het in de auto meer dan 60 °C: zonnescherm en niets hittegevoeligs binnen." },
      ],
    },
    {
      eyebrow: "Alternatieven",
      heading: "Liever niet parkeren? De alternatieven",
      variant: "feature",
      items: [
        { icon: 'van', title: "Privétransfer", text: "Een chauffeur zet u af en haalt u op: geen plaats zoeken, geen auto in de zon.", link: { key: 'bookTransfer', label: "Transfer boeken" } },
        { icon: 'car', title: "Autohuur", text: "Haal de auto op bij aankomst: de verhuurder regelt de inleverparking.", link: { key: 'carRental', label: "Auto's bekijken" } },
        { icon: 'bus', title: "Taxi of bus 19", text: "Taxi van de standplaats of bus 19 voor 30 MAD: de manieren zonder auto naar de stad.", link: { key: 'transfers', label: "Vervoer vergelijken" } },
      ],
    },
  ],
  body: `
<h2>Parkeertarieven op luchthaven Marrakech-Menara</h2>
<p>Tarief van het Marokkaanse luchthavenbureau (ONDA) voor auto's op openluchtplaatsen:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Duur</th><th>Auto</th><th>In euro (≈)</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Tot 1 uur</strong></td><td class="num">6 MAD</td><td class="num">€ 0,55</td></tr>
<tr><td><strong>1 tot 2 uur</strong></td><td class="num">9 MAD</td><td class="num">€ 0,85</td></tr>
<tr><td><strong>2 tot 3 uur</strong></td><td class="num">11 MAD</td><td class="num">€ 1</td></tr>
<tr><td><strong>3 tot 4 uur</strong></td><td class="num">15 MAD</td><td class="num">€ 1,40</td></tr>
<tr><td><strong>4 tot 5 uur</strong></td><td class="num">17 MAD</td><td class="num">€ 1,60</td></tr>
<tr><td><strong>5 tot 12 uur</strong></td><td class="num">22 MAD</td><td class="num">€ 2</td></tr>
<tr><td><strong>12 tot 24 uur</strong></td><td class="num">42 MAD</td><td class="num">€ 3,90</td></tr>
</tbody>
</table>
</div>
<p class="small">Autocars en zware voertuigen: 8 MAD voor het eerste uur, 42 MAD van 12 tot 24 uur. Richttarieven die het ONDA kan herzien: het bord aan de ingang geldt. Omrekening bij benadering € 1 ≈ 10,8 MAD.</p>

<h2>Wat kost een week parkeren?</h2>
<p>Aan 42 MAD per periode van 24 uur rekent u <strong>ongeveer 300 MAD (≈ € 27) voor 7 dagen</strong>, een heel bescheiden bedrag vergeleken met Europese luchthavens. Ter vergelijking: een taxi heen en terug naar de medina kost overdag 200–300 MAD, twee <a href="/nl/book-transfer/">privétransfers</a> ongeveer 580 MAD (≈ € 54). Woont u in of rond Marrakech en gaat u een week weg, dan is parkeren op de luchthaven vaak het goedkoopst.</p>
<div class="callout">
<span class="callout-label">De echte verborgen kost: de zon</span>
<p>De plaatsen liggen in open lucht. In de zomer krijgt een auto die een week in Marrakech staat te maken met extreme hitte: zonnescherm achter de voorruit, niets elektronisch, geen medicijnen of cosmetica binnen, en ramen goed dicht.</p>
</div>

<h2>Een reiziger afzetten of opwachten</h2>
<p>De rijstrook voor de terminals dient om kort te stoppen en bagage uit te laden, niet om te parkeren: het personeel houdt het verkeer in beweging, vooral 's avonds. Wacht u op iemand, rijd dan de parking op: <strong>het eerste uur kost 6 MAD</strong>. Reken 30 tot 60 minuten tussen landing en het verlaten van de hal, voor paspoortcontrole en bagage: volg de vlucht vooraf op onze pagina <a href="/nl/arrivals/">aankomsten</a>.</p>

<h2>Huurauto: geen ticket nodig</h2>
<p>Levert u een huurauto in, volg dan de borden van de verhuurder naar zijn inleverzone en neem geen ticket aan de openbare parking. Reken een kwartier voor de inspectie en bewaar gedateerde foto's van de ingeleverde auto.</p>
`,
  faqHeading: "Parkeren op luchthaven Marrakech-Menara: veelgestelde vragen",
  faqs: [
    { q: "Wat kost parkeren op de luchthaven van Marrakech?", a: "Volgens het ONDA-tarief 6 MAD tot 1 uur, 9 MAD tot 2 uur, 22 MAD van 5 tot 12 uur en 42 MAD van 12 tot 24 uur voor een auto. Het bord aan de ingang geldt, want het tarief kan worden herzien." },
    { q: "Hoeveel plaatsen heeft de parking van luchthaven Marrakech-Menara?", a: "Ongeveer 1.550 plaatsen verdeeld over drie openluchtparkings: 740 op parking 1, 460 op parking 2 en 350 op parking 3." },
    { q: "Wat kost een week parkeren?", a: "Ongeveer 300 MAD (≈ € 27) aan 42 MAD per 24 uur. Dat is vaak goedkoper dan een privétransfer heen en terug, maar bescherm de auto tegen de zon." },
    { q: "Is er een gratis afzetzone?", a: "Op de rijstrook voor de terminals kunt u kort stoppen om passagiers af te zetten. Om te wachten rijdt u de parking op: het eerste uur kost 6 MAD." },
    { q: "Is de luchthavenparking bewaakt?", a: "Ja, de parkings zijn omheind en 24/7 bewaakt. Neem de gewone voorzorgen: niets zichtbaars in de auto en niets hittegevoeligs." },
    { q: "Hoe betaal ik het parkeren?", a: "Neem een ticket aan de slagboom en betaal voor u naar de auto teruggaat, aan de kassa of automaat. Neem dirham cash mee, kaarten worden niet altijd aanvaard." },
    { q: "Zijn de plaatsen overdekt?", a: "Het gepubliceerde tarief geldt voor openluchtplaatsen: reken niet op schaduw. Gebruik in de zomer een zonnescherm en laat geen elektronica of medicijnen in de auto." },
    { q: "Is de parking 's nachts open?", a: "Ja, hij werkt 24/7, ook voor vluchten die midden in de nacht aankomen of vertrekken." },
  ],
  cta: {
    heading: "Liever niet parkeren?",
    text: "Een privétransfer zet u af en haalt u op aan de luchthaven, zonder plaats te zoeken en zonder auto in de zon.",
    label: "Transfer boeken",
    secondary: { label: "Auto huren", key: 'carRental' },
  },
} satisfies LocalizedPage;
