import type { LocalizedPage } from '../types';

export default {
  title: "Transfer luchthaven Marrakech-Menara: taxi, bus en prijzen",
  description: "Van luchthaven Marrakech-Menara naar de medina: privétransfer, taxi, bus 19, shuttle van de riad of huurauto. Echte prijzen 2026 en reistijden vergeleken.",
  eyebrow: "Transfer · taxi · bus 19 · huurauto",
  h1: "Transfer luchthaven Marrakech-Menara: 5 manieren naar de stad",
  lede: "Slechts zes kilometer scheidt de terminal van de Jemaa el-Fna, en er rijdt geen trein. Landing om middernacht, gezin met bagage of rugzak met klein budget: dit zijn de vijf echte opties, hun ter plaatse gecontroleerde prijzen en welke bij uw aankomst past.",
  highlights: [
    { icon: 'map-pin', value: "6 km", label: "Luchthaven → medina, 15–20 min" },
    { icon: 'van', value: "Vanaf € 27", label: "Transfer, per voertuig (7 plaatsen)" },
    { icon: 'car', value: "100–150 MAD", label: "Taxi overdag, hele auto" },
    { icon: 'bus', value: "30 MAD", label: "Bus 19, per persoon" },
  ],
  options: {
    heading: "Snelle vergelijking van vervoer vanaf luchthaven Marrakech-Menara",
    intro: "Prijzen gecontroleerd in september 2026, <strong>per voertuig</strong> behalve de bus. Er rijdt geen trein naar de luchthaven: het ONCF-station ligt in Guéliz.",
    table: {
      head: ["Vervoer", "Prijs", "Naar de medina", "Comfort", "Ideaal voor"],
      rows: [
        ["Privétransfer", "vanaf € 27", "15–25 min", "Uitstekend", "Nachtelijke aankomst, gezinnen, riads in de medina"],
        ["Taxistandplaats", "100–150 MAD<br>150–240 MAD 's nachts", "15–25 min", "Redelijk", "Met twee overdag, Guéliz of Hivernage"],
        ["Bus 19 (ALSA)", "30 MAD / pers.", "20–30 min", "Eenvoudig", "Klein budget, lichte bagage, overdag"],
        ["Shuttle van de riad", "150–250 MAD", "15–25 min", "Zeer goed", "Moeilijk vindbare riads"],
        ["Huurauto", "vanaf € 25 / dag", "—", "Uitstekend buiten de medina", "Atlas, Agafay, Essaouira, rondreis"],
      ],
    },
    detailHeading: "De 5 opties in detail",
    items: [
      {
        icon: 'van',
        title: "Vooraf geboekte privétransfer",
        tagline: "De meest ontspannen keuze 's nachts, met gezin of voor een riad midden in de medina.",
        badge: "Onze tip",
        meta: [
          { label: "Prijs", value: "vanaf € 27 / voertuig" },
          { label: "Rit", value: "15–25 min" },
          { label: "Plaatsen", value: "tot 7" },
        ],
        pros: [
          "Chauffeur wacht in de aankomsthal <strong>met een bordje met uw naam</strong>",
          "Vluchtvolging: geen toeslag bij vertraging",
          "Vaste prijs per voertuig, vastgelegd bij het boeken",
          "Afzetten bij de medinapoort (<em>bab</em>) die het dichtst bij uw riad ligt",
          "Kinderzitje op aanvraag, bij de meeste aanbieders gratis annuleren tot 24 uur vooraf",
        ],
        prices: {
          heading: "Richtprijzen",
          rows: [
            { label: "Medina, Guéliz, Hivernage", value: "vanaf € 27" },
            { label: "Palmeraie, Agafay", value: "naargelang afstand" },
            { label: "Essaouira", value: "≈ € 95" },
            { label: "Minibus vanaf 8 plaatsen", value: "op aanvraag" },
          ],
          foot: "Prijzen per voertuig, niet per persoon.",
        },
        link: { key: 'bookTransfer', label: "Mijn transfer boeken" },
      },
      {
        icon: 'car',
        title: "Taxi van de standplaats",
        tagline: "Dag en nacht beschikbaar aan de standplaats vlak voor de terminal.",
        meta: [
          { label: "Dag", value: "100–150 MAD" },
          { label: "Nacht", value: "150–240 MAD" },
          { label: "Plaatsen", value: "3 (petit taxi)" },
        ],
        pros: [
          "Officiële standplaats bij de uitgang van aankomst, met uitgehangen tarieven",
          "Niets te boeken of vooraf te betalen",
          "Met twee overdag onklopbaar: € 9 tot € 14 voor de hele auto",
        ],
        cons: [
          "Een petit taxi neemt maximaal 3 passagiers: met vier hebt u twee auto's nodig",
          "Alleen contant, in dirham",
          "Afzetten bij de medinapoort die de chauffeur uitkomt, niet altijd de dichtstbijzijnde",
        ],
        note: { label: "Tip:", text: "spreek prijs en bestemming af <strong>voordat</strong> de bagage wordt ingeladen, en negeer ronselaars in de hal: taxi's neemt u alleen aan de standplaats." },
        link: { key: 'taxiTips', label: "Onze taxitips voor Marrakech" },
      },
      {
        icon: 'bus',
        title: "Bus 19 (ALSA)",
        tagline: "De goedkoopste optie, als u licht en overdag reist.",
        meta: [
          { label: "Prijs", value: "30 MAD / pers." },
          { label: "Retour", value: "50 MAD (15 dagen)" },
          { label: "Dienstregeling", value: "≈ 6.00 – 23.30 u" },
        ],
        pros: [
          "Halte vlak voor de terminal, ongeveer elke 30 minuten een vertrek",
          "Ongeveer twintig minuten tot het Jemaa el-Fna-plein",
        ],
        cons: [
          "Geen vertrekken meer na ongeveer 23.30 uur",
          "Weinig plaats voor grote koffers",
          "Stopt op het plein: daarna loopt u nog door de medina naar uw riad",
        ],
        link: { key: 'bus19', label: "Dienstregeling en haltes van bus 19" },
      },
      {
        icon: 'door',
        title: "Shuttle van uw riad of hotel",
        tagline: "De chauffeur van uw accommodatie, die de juiste poort en de drager kent.",
        meta: [
          { label: "Prijs", value: "150–250 MAD / voertuig" },
          { label: "Rit", value: "15–25 min" },
          { label: "Boeken", value: "via de riad" },
        ],
        pros: [
          "De chauffeur weet precies waar hij voor uw riad moet stoppen",
          "Vaak afgestemd met een drager met handkar voor de bagage",
          "Betalen bij aankomst",
        ],
        cons: [
          "Prijzen verschillen sterk per accommodatie: vergelijk met een transfer",
          "Niet altijd mogelijk bij vluchten die laat in de nacht landen",
        ],
      },
      {
        icon: 'car',
        title: "Huurauto",
        tagline: "Voor de Atlas, Agafay of Essaouira, niet om de medina te bezoeken.",
        meta: [
          { label: "Prijs", value: "vanaf € 25 / dag" },
          { label: "Balies", value: "aankomsthal" },
          { label: "Documenten", value: "rijbewijs, paspoort, kaart" },
        ],
        pros: [
          "Balies van internationale en Marokkaanse verhuurders in de aankomsthal",
          "Volledige vrijheid voor Ourika, Imlil, Agafay of de weg naar Essaouira",
          "Enkele dagen vooraf online boeken is meestal goedkoper dan aan de balie",
        ],
        cons: [
          "De medina is autovrij: de auto blijft op een parking",
          "Borg geblokkeerd op een creditcard op naam van de bestuurder",
        ],
        link: { key: 'carRental', label: "Huurautoprijzen vergelijken" },
      },
    ],
  },
  body: `
<h2>Taxi of transfer vanaf luchthaven Marrakech-Menara: de eerlijke rekensom</h2>
<p>Taxi's zijn niet duur in Marrakech: 100 tot 150 MAD uitgehangen voor de medina, Guéliz en Hivernage, oftewel € 9 tot € 14 voor de hele auto. Met twee overdag verslaat geen enkele boeking die prijs.</p>
<p>In drie gevallen kantelt de rekensom. <strong>'s Nachts</strong> stijgt het tarief naar 150–240 MAD voor dezelfde rit. <strong>Vanaf vier personen</strong> neemt een petit taxi maar drie passagiers: twee auto's, dus 200–300 MAD overdag en tot 480 MAD 's nachts. <strong>Bij een slecht bereikbare riad</strong> stopt de chauffeur bij de poort die hem uitkomt, wat een kwartier extra lopen met koffers kan betekenen. Voor € 27 per voertuig tot zeven plaatsen is de geboekte transfer dan de goedkoopste en comfortabelste keuze.</p>

<h2>Het echte punt: afzetten bij de poorten van de medina</h2>
<p>Geen auto komt in de smalle <em>derbs</em>, en verschillende toegangen zijn afgesloten voor verkeer. De chauffeur stopt bij de dichtstbijzijnde <em>bab</em>: Bab Doukkala in het noordwesten, Bab Laksour bij de Koutoubia, Bab Agnaou in het zuiden, Bab el Khemis in het oosten. Het laatste stuk loopt u, meestal drie tot tien minuten.</p>
<div class="callout">
<span class="callout-label">Twee vragen voor uw riad</span>
<p>Vraag voor vertrek de exacte naam van de afzetpoort, en of een drager met handkar op u kan wachten. De meeste riads doen dat gratis of voor een paar dirham als u uw aankomsttijd doorgeeft.</p>
</div>

<h2>'s Nachts aankomen op luchthaven Marrakech-Menara</h2>
<p>Na 23.30 uur rijdt bus 19 niet meer: dan blijven de taxi tegen nachttarief of een geboekte transfer over. Haal dirham uit de geldautomaat in de aankomsthal voor u naar buiten gaat, want taxi's nemen geen kaart aan. Verwittig ook uw riad: veel riads sluiten 's nachts de deur en sturen iemand naar de <em>bab</em> als ze uw aankomsttijd kennen.</p>
`,
  faqHeading: "Transfer vanaf luchthaven Marrakech-Menara: veelgestelde vragen",
  faqs: [
    { q: "Welk vervoer kies ik als ik om middernacht in Marrakech land?", a: "Een geboekte transfer, die ook bij vertraging wacht en u afzet bij de medinapoort het dichtst bij uw riad. Een taxi kan ook, tegen nachttarief: 150 tot 240 MAD per auto. Bus 19 rijdt niet meer na ongeveer 23.30 uur." },
    { q: "Wat kost een taxi van de luchthaven van Marrakech naar de medina?", a: "100 tot 150 MAD per auto overdag en 150 tot 240 MAD 's nachts, naar de medina, Guéliz of Hivernage. De prijs geldt per voertuig, met maximaal drie passagiers in een petit taxi. Bevestig hem voor het inladen." },
    { q: "Wat kost een privétransfer vanaf luchthaven Marrakech-Menara?", a: "Vanaf € 27 per voertuig voor maximaal 7 passagiers naar de medina, Guéliz of Hivernage, met vluchtvolging. Reken op meer voor de Palmeraie of een kamp in Agafay, en ongeveer € 95 naar Essaouira." },
    { q: "Kan ik de taxi met een kaart betalen?", a: "Nee, taxi's in Marrakech betaalt u contant in dirham. In de aankomsthal vindt u geldautomaten en wisselkantoren. Een geboekte transfer betaalt u online of aan de chauffeur, afhankelijk van de aanbieder." },
    { q: "Is er een trein tussen de luchthaven van Marrakech en de stad?", a: "Nee, er loopt geen spoorlijn naar de luchthaven. Het ONCF-station ligt in Guéliz, met treinen naar Rabat, Fez en Tanger: u komt er met taxi, transfer of bus." },
    { q: "Kan ik Uber, Careem of inDrive gebruiken op de luchthaven?", a: "Reken er bij aankomst niet op. Uber is eind november 2025 teruggekeerd in Marrakech, maar alleen met erkende toeristische vervoerders en een wisselende beschikbaarheid; Careem en inDrive werken in een grijze zone. In de stad kunnen ze van pas komen." },
    { q: "Kan de chauffeur me voor mijn riad afzetten?", a: "Bijna nooit: de steegjes van de medina zijn te smal voor auto's. De chauffeur stopt bij de dichtstbijzijnde poort en u loopt het laatste stuk, meestal 3 tot 10 minuten. Vraag uw riad om een drager." },
    { q: "Hoe kom ik van de luchthaven van Marrakech naar Essaouira?", a: "Het eenvoudigst met een privétransfer, ongeveer € 95 per voertuig voor 2,5 tot 3 uur rijden. Bussen van Supratours en CTM vertrekken in de stad, niet op de luchthaven: eerst met de taxi naar hun busstation." },
  ],
  cta: {
    heading: "Uw rit geregeld voor het opstijgen",
    text: "Vaste prijs per voertuig, een chauffeur die met uw naam wacht en vluchtvolging. Of een auto om de Atlas te verkennen.",
    label: "Transfer boeken",
    secondary: { label: "Auto huren", key: 'carRental' },
  },
} satisfies LocalizedPage;
