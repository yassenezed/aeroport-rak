import type { LocalizedPage } from '../types';

export default {
  title: "Luxe huurauto luchthaven Marrakech-Menara vanaf 1.200 MAD",
  description: "Huur een premium sedan, SUV of cabrio op luchthaven Marrakech-Menara: modellen, prijzen vanaf 1.200 MAD per dag, borg en de optie met chauffeur.",
  eyebrow: "Premium autohuur · sedans en SUV's",
  h1: "Luxe huurauto op luchthaven Marrakech-Menara",
  lede: "Marrakech is een van de weinige Marokkaanse steden waar u echt topklasse-auto's kunt huren. Dit zijn de beschikbare modellen, hun prijzen, de strengere voorwaarden en de echte vraag: zelf rijden of gereden worden?",
  highlights: [
    { icon: 'star', value: "Vanaf 1.200 MAD", label: "Per dag, premium sedan" },
    { icon: 'check', value: "Automaat", label: "Bij bijna alle modellen" },
    { icon: 'passport', value: "25 jaar", label: "Meest gangbare minimumleeftijd" },
    { icon: 'shield-check', value: "Zonder eigen risico", label: "Allriskoptie beschikbaar" },
  ],
  widget: "car-rental",
  widgetIntro: {
    heading: "Luxe huurauto boeken op luchthaven Marrakech-Menara",
    text: "Typ \"Marrakech\" en kies \"Marrakech Airport\", daarna uw data: filter de resultaten op premium, SUV of luxe.",
  },
  cardSections: [
    {
      eyebrow: "Onze selectie",
      heading: "Premium auto's beschikbaar in Marrakech",
      variant: "feature",
      items: [
        { icon: 'star', title: "Premium sedans", text: "Mercedes C- en E-Klasse, BMW 3- en 5-serie, Audi A4 en A6: comfort en discretie voor zakenreizen.", tags: ["1.200–1.950 MAD/dag", "Leer, gps"] },
        { icon: 'map', title: "Premium SUV's", text: "Range Rover, Porsche Cayenne, Mercedes GLE: het meest gevraagd, vlot op de pistes van Agafay en de Tichka.", tags: ["1.600–3.000 MAD/dag", "Grote koffer"] },
        { icon: 'sun', title: "Cabrio's en sportwagens", text: "Met de Ford Mustang voorop, vooral per dag gehuurd voor een gelegenheid of panoramaroute.", tags: ["2.200–4.300 MAD/dag", "Per dag"] },
        { icon: 'users', title: "VIP-van met chauffeur", text: "Mercedes V-Klasse met chauffeur: de keuze voor groepen en zakenreizen, zonder borg.", tags: ["1.600–2.700 MAD/dag", "Chauffeur inbegrepen"] },
      ],
    },
    {
      eyebrow: "Voordelen",
      heading: "Waarom een premium auto huren in Marrakech",
      variant: "feature",
      items: [
        { icon: 'map', title: "Comfort op lange afstand", text: "Lederen zetels, vering en geluidsisolatie maken het verschil op de weg naar Essaouira of Ouarzazate." },
        { icon: 'shield', title: "Geavanceerde veiligheid", text: "Noodremassistent, rijstrookhulp, adaptieve cruisecontrol: een echte plus met het gezin." },
        { icon: 'check', title: "Standaard automaat", text: "Geen stress in het verkeer van Marrakech: bijna alle premium modellen zijn automaat." },
        { icon: 'luggage', title: "Onthaal op maat", text: "Sleuteloverdracht op de luchthaven of levering aan uw hotel, afhankelijk van de verhuurder." },
      ],
    },
    {
      eyebrow: "Vergelijken",
      heading: "Premium, economy of minivan?",
      variant: "feature",
      items: [
        { icon: 'car', title: "Economy", text: "Kleine auto's voor een krap budget, perfect voor Essaouira en Ourika.", tags: ["Vanaf 270 MAD/dag"], link: { key: 'carBudget', label: "Economy bekijken" } },
        { icon: 'users', title: "Minivan 7 tot 9 plaatsen", text: "Voor gezinnen en groepen, met plaats voor de bagage.", tags: ["Vanaf 600 MAD/dag"], link: { key: 'carMinivan', label: "Minivans bekijken" } },
        { icon: 'check', title: "Automaat", text: "Automatische compacte auto's en SUV's, voordeliger dan premium.", tags: ["Vanaf 490 MAD/dag"], link: { key: 'carEasy', label: "Automaten bekijken" } },
      ],
    },
  ],
  body: `
<h2>Prijzen en borg van luxe auto's op luchthaven Marrakech-Menara</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Categorie</th><th>Prijs / dag</th><th>Gebruikelijke borg</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Premium sedan</strong></td><td class="num">≈ 1.200–1.950 MAD (€ 110–180)</td><td class="num">20.000–30.000 MAD</td></tr>
<tr><td><strong>Premium SUV</strong></td><td class="num">≈ 1.600–3.000 MAD (€ 150–280)</td><td class="num">30.000–50.000 MAD</td></tr>
<tr><td><strong>Cabrio / sportwagen</strong></td><td class="num">≈ 2.200–4.300 MAD (€ 200–400)</td><td class="num">40.000–60.000 MAD</td></tr>
<tr><td><strong>VIP-van met chauffeur</strong></td><td class="num">≈ 1.600–2.700 MAD (€ 150–250)</td><td>geen</td></tr>
</tbody>
</table>
</div>
<p class="small">Richtprijzen in dirham, omgerekend aan een koers van ongeveer € 1 ≈ 10,8 MAD. De vergelijker toont de exacte prijs van elke aanbieding.</p>

<h2>Strengere voorwaarden</h2>
<p>Voor deze categorieën geldt meestal een <strong>minimumleeftijd van 25 tot 30 jaar</strong>, een rijbewijs van <strong>3 tot 5 jaar</strong> oud en een borg die vaak boven de gewone kaartlimiet uitkomt. <strong>Verwittig uw bank voor vertrek</strong> zodat ze de autorisatielimiet tijdelijk verhoogt: de belangrijkste reden voor weigering aan de balie, en ter plaatse niet op te lossen. Sommige verhuurders beperken ook kilometers of pistes: controleer dat als u naar het zuiden gaat.</p>
<p>Voor een auto van deze waarde is een <strong>verzekering zonder eigen risico</strong> sterk aan te raden: de minste kras op een velg kost duizenden dirham. Fotografeer de auto grondig bij vertrek en bij inleveren.</p>

<h2>Zelf rijden of gereden worden?</h2>
<p>Een premium SUV van ≈ 2.200 MAD (€ 200) per dag die voor een riad stilstaat omdat de medina autovrij is, kost evenveel als een <strong>privéchauffeur per dag</strong> die wacht, u afzet en het parkeren regelt. Een chauffeur loont voor lange ritten naar Ouarzazate of Essaouira, zakendagen met meerdere afspraken en gezinsreizen waarbij niemand na een dag in de Atlas nog wil rijden.</p>
<div class="callout">
<span class="callout-label">Boek vroeg en laat het model bevestigen</span>
<p>De premium vloot is beperkt en roteert tussen verschillende agentschappen. In de lente, op het eind van het jaar en bij grote evenementen boekt u enkele weken vooraf en laat u <strong>het exacte model</strong> schriftelijk bevestigen, niet alleen de categorie.</p>
</div>

<h2>Ophalen en levering</h2>
<p><strong>Op de luchthaven</strong>: sleutels aan de balie of op de parking, voor luxemodellen soms aan de terminal. <strong>Aan het hotel</strong>: veel premium verhuurders leveren aan uw hotel of aan de rand van de medina; kom aan met een <a href="/nl/book-transfer/">transfer</a> en ontvang de auto de dag erna. <strong>Enkele reis</strong>: inleveren mogelijk in Essaouira, Fez of Tanger afhankelijk van de verhuurder, tegen een toeslag.</p>
`,
  faqHeading: "Luxe huurauto op luchthaven Marrakech-Menara: veelgestelde vragen",
  faqs: [
    { q: "Wat kost een luxe huurauto op de luchthaven van Marrakech?", a: "≈ 1.200 tot 1.950 MAD (€ 110 tot € 180) per dag voor een premium sedan, ≈ 1.600 tot 3.000 MAD (€ 150 tot € 280) voor een SUV zoals een Range Rover of Cayenne, en ≈ 2.200 tot 4.300 MAD (€ 200 tot € 400) voor een cabrio of sportwagen. De borg bedraagt 20.000 tot 60.000 MAD volgens het model." },
    { q: "Welke premium modellen kan ik in Marrakech huren?", a: "Mercedes C-, E-Klasse en GLE, BMW 3- en 5-serie, Audi A4 en A6, Range Rover, Porsche Cayenne en enkele cabrio's zoals de Ford Mustang, afhankelijk van de beschikbaarheid." },
    { q: "Hoe oud moet ik zijn?", a: "25 tot 30 jaar volgens het model, met een rijbewijs van 3 tot 5 jaar. Sportwagens en de grootste SUV's hebben de strengste voorwaarden." },
    { q: "Is een allriskverzekering inbegrepen?", a: "De basisverzekering wel, met een hoog eigen risico. Voor een auto van deze waarde is de optie zonder eigen risico sterk aangeraden: ze dekt schade, diefstal en glas." },
    { q: "Kan de auto aan mijn hotel geleverd worden?", a: "Ja, veel premium verhuurders leveren aan het hotel of de rand van de medina, gratis of tegen betaling. Vermeld het bij het boeken." },
    { q: "Zijn premium auto's automaten?", a: "Bijna allemaal. Laat de transmissie en het exacte model toch schriftelijk bevestigen, want \"of gelijkwaardig\" garandeert niets." },
    { q: "Is een premium SUV de moeite voor een roadtrip in Marokko?", a: "Voor Agafay, de pistes in het zuiden of een lange rit naar Ouarzazate wel: comfort, bodemvrijheid en een grote koffer. Voor een stedentrip is een privéchauffeur vaak praktischer." },
    { q: "Waarom kan mijn kaart aan de balie geweigerd worden?", a: "Omdat de borg, vaak 20.000 tot 60.000 MAD, boven de gebruikelijke autorisatielimiet uitkomt. Vraag uw bank om die voor vertrek tijdelijk te verhogen." },
  ],
  cta: {
    heading: "Klaar om Marrakech in eerste klasse te beleven?",
    text: "Vergelijk de premium sedans en SUV's van de verhuurders op de luchthaven en boek in een paar klikken.",
    label: "Prijzen vergelijken",
    href: "#reserver",
    secondary: { label: "Alle categorieën bekijken", key: 'carRental' },
  },
} satisfies LocalizedPage;
