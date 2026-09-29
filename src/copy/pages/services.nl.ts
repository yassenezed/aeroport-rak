import type { LocalizedPage } from '../types';

export default {
  title: "Voorzieningen op luchthaven Marrakech-Menara",
  description: "Voorzieningen op luchthaven Marrakech-Menara: geldautomaten, wisselkantoren, sim en eSIM, wifi, VIP-lounges, bagagedepot, inpakservice en medische hulp.",
  eyebrow: "Marrakech-Menara · Voorzieningen",
  h1: "Voorzieningen luchthaven Marrakech-Menara",
  lede: "Geld, internet, lounges, bagage, gezondheid: alles wat u echt vindt in de terminals van luchthaven Marrakech-Menara, waar het is en wat u regelt voordat u de hal verlaat.",
  highlights: [
    { icon: 'building', value: "T1 · T2", label: "Twee terminals, te voet verbonden" },
    { icon: 'wifi', value: "Gratis", label: "Wifi in de terminals" },
    { icon: 'medical', value: "24/7", label: "Medische spoedpost" },
  ],
  cardSections: [
    {
      eyebrow: "Belangrijkste voorzieningen",
      heading: "De belangrijkste voorzieningen op luchthaven Marrakech-Menara",
      intro: "Wat u meteen na de landing nodig hebt en waar u het in de terminal vindt.",
      variant: 'feature',
      items: [
        { icon: 'wallet', title: "Geld en wisselen", text: "Geldautomaten en wisselkantoren in de aankomsthal en aan de vertrekkant. Dirhams zijn buiten Marokko niet te koop: neem op voordat u vertrekt.", tags: ["Visa & Mastercard", "Wisselen", "MAD"], link: { key: 'money', label: "Onze geldgids" } },
        { icon: 'sim', title: "Sim, eSIM en wifi", text: "Balies van Maroc Telecom, Orange en inwi in de aankomsthal, paspoort verplicht. De gratis wifi helpt in nood; een eSIM die u vooraf activeert, bespaart de rij.", tags: ["4G", "eSIM", "Gratis wifi"], link: { key: 'esim', label: "Een eSIM kiezen" } },
        { icon: 'star', title: "VIP-lounges", text: "De Pearl Lounge, de lounge van Royal Air Maroc en de ONDA-service Convives de Marque bieden stoelen, wifi, stopcontacten en een licht buffet, ook tegen betaling.", tags: ["Wifi", "Buffet", "Betaalde toegang"], link: { key: 'vipLounges', label: "Toegang en prijzen" } },
        { icon: 'medical', title: "Gezondheid en noodgevallen", text: "Een medische spoedpost is dag en nacht actief op de luchthaven. Neem uw medicijnen met recept mee in de handbagage, niet in de ruimbagage.", tags: ["24/7", "Eerste hulp"] },
        { icon: 'accessibility', title: "Hulp bij beperkte mobiliteit", text: "Rolstoel en begeleiding van het vliegtuig tot de uitgang. Vraag het aan bij uw maatschappij, minstens 48 uur voor de vlucht.", tags: ["Rolstoel", "Begeleiding", "48 uur vooraf"] },
        { icon: 'shield-check', title: "Fast track", text: "Voorrang bij de controles, met een medewerker die u begeleidt. Vooral handig bij avondaankomsten, als de rijen groeien.", tags: ["Voorrangsrij", "Aankomst en vertrek"], link: { key: 'fastTrack', label: "Is het de moeite?" } },
      ],
    },
    {
      eyebrow: "Comfort",
      heading: "Het comfort in de terminal",
      intro: "Om te wachten, te eten, te bidden of uw chauffeur te vinden.",
      variant: 'compact',
      items: [
        { icon: 'shop', title: "Taxfreewinkels", text: "Parfum, cosmetica, ambachtelijke en lokale producten, vooral na de controle." },
        { icon: 'coffee', title: "Cafés en eten", text: "Cafés aan de openbare kant, meer keus in de vertrekzone, tegen luchthavenprijzen." },
        { icon: 'prayer', title: "Gebedsruimtes", text: "In beide terminals, aan de openbare kant en in de vertrekzone." },
        { icon: 'baby', title: "Gezinsruimtes", text: "Verschoontafels en waterpunten voor reizen met jonge kinderen." },
        { icon: 'wifi', title: "Gratis wifi", text: "Open netwerk in de terminals, trager tijdens de spits." },
        { icon: 'sim', title: "Telefoonbalies", text: "Maroc Telecom, Orange en inwi verkopen toeristenbundels bij aankomst." },
        { icon: 'tag', title: "Autoverhuurbalies", text: "Internationale en lokale verhuurders in de aankomsthal." },
        { icon: 'van', title: "Ontmoetingspunt chauffeurs", text: "Chauffeurs wachten voor de aankomsthal met een bord met uw naam." },
      ],
    },
    {
      eyebrow: "Bagage",
      heading: "Bagagediensten op luchthaven Marrakech",
      intro: "Een koffer achterlaten, hem beschermen of snel reageren als hij niet aankomt.",
      variant: 'feature',
      items: [
        { icon: 'lock', title: "Bagagedepot", text: "Een bagagedepot in de aankomsthal bewaart uw koffers enkele uren of een dag: handig bij een overstap of een avondvlucht.", tags: ["Aankomsthal", "Betalend"], link: { key: 'layover', label: "Overstap in Marrakech" } },
        { icon: 'luggage', title: "Koffers inpakken", text: "Balies bieden aan uw bagage in folie te wikkelen voor het inchecken, tegen stoten en openmaken.", tags: ["Voor het inchecken", "Betalend"] },
        { icon: 'trolley', title: "Karretjes en dragers", text: "Bagagekarretjes staan in de hallen. Ook dragers bieden hun diensten aan: spreek de prijs af voordat u uw koffers afgeeft.", tags: ["Karretjes", "Dragers"] },
        { icon: 'alert', title: "Bagage kwijt of beschadigd", text: "Meld het bij de bagagebalie van uw maatschappij voordat u de bagagehal verlaat, met uw instapkaart en bagagelabel.", tags: ["Direct melden", "PIR-rapport"] },
      ],
    },
  ],
  services: {
    heading: "Van de luchthaven naar Marrakech",
    intro: "De luchthaven ligt op 6 km van de medina. Zo komt u er, met gecontroleerde prijzen.",
    items: [
      { icon: 'bus', key: 'bus19', title: "Bus 19 (ALSA)", text: "30 MAD per persoon, ongeveer 20 minuten tot Jemaa el-Fna, laatste vertrek rond 23.30 uur.", cta: "Dienstregeling en haltes" },
      { icon: 'car', key: 'transfers', title: "Officiële taxi", text: "100–150 MAD overdag en 150–240 MAD 's nachts, tarieven bij de standplaats.", cta: "Taxitarieven" },
      { icon: 'van', key: 'bookTransfer', title: "Privétransfer", text: "Vanaf € 27 per voertuig, chauffeur met naambord en vluchtbewaking, ook 's nachts.", cta: "Boeken" },
      { icon: 'tag', key: 'carRental', title: "Autohuur", text: "Balies in de aankomsthal, vanaf € 25 per dag.", cta: "Vergelijken" },
      { icon: 'parking', key: 'parking', title: "Parkeren op de luchthaven", text: "Ongeveer 20 MAD per uur en 70–80 MAD per dag, tegenover de terminals.", cta: "Parkeren bekijken" },
      { icon: 'plane-landing', key: 'arrivals', title: "Aankomsten live", text: "Volg een vlucht en de werkelijke landingstijd voordat u vertrekt.", cta: "Aankomsten bekijken" },
    ],
  },
  body: `
<h2>Geld opnemen op luchthaven Marrakech</h2>
<p>Er zijn meerdere geldautomaten en wisselkantoren in de openbare aankomsthal na de douane en aan de vertrekkant. De automaten accepteren Visa en Mastercard en rekenen een vaste kost per opname: één grote opname is beter dan drie kleine. De wisselkoers op de luchthaven is redelijk, maar niet de beste van de stad; wissel voor twee dagen en vul aan in Guéliz als u langer blijft.</p>
<p>Twee lokale regels: dirhams zijn buiten Marokko niet te koop en mogen het land ook niet uit. Wissel overgebleven biljetten dus terug <strong>vóór</strong> de paspoortcontrole bij vertrek en bewaar het bonnetje van uw eerste wisseltransactie. Alle tips in onze gids over <a href="/nl/blog/money-in-morocco/">geld en wisselen in Marokko</a>.</p>

<h2>Meteen online na de landing</h2>
<p>De gratis wifi in de terminal volstaat voor een bericht, niet meer. Om bereikbaar te zijn zodra u buiten staat, handig voor uw chauffeur of riad, zijn er twee opties:</p>
<ul>
<li><strong>Lokale simkaart</strong>: de balies van Maroc Telecom, Orange en inwi staan in de aankomsthal. Een toeristenbundel met data kost enkele tientallen dirhams. Paspoort verplicht, activering in enkele minuten. Vergelijking in ons artikel over <a href="/nl/blog/morocco-sim-cards/">simkaarten in Marokko</a>.</li>
<li><strong>eSIM</strong>: vooraf geactiveerd werkt ze vanaf de landing, zonder rij of papierwerk. De eenvoudigste oplossing als uw telefoon compatibel is. Zie onze pagina <a href="/nl/morocco-esim/">eSIM Marokko</a>.</li>
</ul>

<h2>Bagage kwijt of beschadigd: wat te doen</h2>
<p>Verschijnt uw koffer niet op de band, verlaat dan de bagagehal niet: ga met uw instapkaart en het bagagelabel naar de bagagebalie van uw maatschappij of haar afhandelaar. U krijgt een <strong>schaderapport (PIR)</strong> en een dossiernummer, onmisbaar om de koffer op te sporen en schadevergoeding te vragen. Geef het exacte adres van uw accommodatie: teruggevonden bagage wordt bezorgd, maar een riad in de medina vindt men veel makkelijker met de naam van de dichtstbijzijnde poort.</p>

<h2>Reizen met kinderen of met beperkte mobiliteit</h2>
<p>Hulp bij beperkte mobiliteit vraagt u minstens 48 uur voor de vlucht aan bij de maatschappij: die activeert de dienst bij de luchthaven. Meld het op de vertrekdag opnieuw aan de incheckbalie. Met kinderen neemt u water en iets te eten mee: de rijen bij de paspoortcontrole steek je niet over met een dienblad, en de lounges zijn een echte opluchting bij vertraging.</p>
<p>Wat de formaliteiten betreft: het politieformulier is in september 2019 afgeschaft; bij in- en uitreis wordt alleen het paspoort gecontroleerd. Burgers van de EU, Zwitserland, het VK, Canada en de VS hebben geen visum nodig voor een toeristisch verblijf tot 90 dagen, met een paspoort dat geldig is voor het hele verblijf.</p>
<div class="callout">
<span class="callout-label">Drie dingen voordat u de hal verlaat</span>
<p>Dirhams opnemen en opdelen in biljetten van 50 en 100. Uw verbinding activeren, eSIM of lokale simkaart. En precies weten waar u naartoe gaat: naam van de riad, medinapoort of ontmoetingspunt met uw chauffeur.</p>
</div>
`,
  spotlight: {
    icon: 'sparkles',
    heading: "Een luchthaven in volle verandering",
    text: "Ontworpen voor zo'n 8 miljoen passagiers per jaar, verwerkte luchthaven Marrakech-Menara er <strong>9,3 miljoen in 2024</strong>. In het kader van het ONDA-plan ‘Luchthavens 2030’ wordt de terminal uitgebreid tot <strong>16 miljoen passagiers per jaar tegen 2028</strong>. Sinds maart 2025 staan er geen scanners meer bij de ingang van de terminal, om de wachttijden te verkorten. Voor de plattegrond van de terminals, zie onze <a href=\"/nl/airport-guide/\">luchthavengids</a>.",
  },
  faqHeading: "Voorzieningen op luchthaven Marrakech: veelgestelde vragen",
  faqs: [
    { q: "Zijn er geldautomaten op luchthaven Marrakech?", a: "Ja, er zijn meerdere geldautomaten en wisselkantoren in de openbare aankomsthal en aan de vertrekkant. Ze accepteren Visa en Mastercard, met een vaste kost per opname: neem liever één keer meer op." },
    { q: "Is er gratis wifi op luchthaven Marrakech-Menara?", a: "Ja, er is gratis wifi in de terminals. Het volstaat voor een bericht, maar is onbetrouwbaar in de spits: om een chauffeur zeker te bereiken is een eSIM of lokale simkaart beter." },
    { q: "Waar koop ik een simkaart op luchthaven Marrakech?", a: "Bij de balies van Maroc Telecom, Orange en inwi in de aankomsthal. Een toeristenbundel met data kost enkele tientallen dirhams, activering duurt enkele minuten en een paspoort is verplicht." },
    { q: "Is er een bagagedepot op luchthaven Marrakech?", a: "Ja, een bagagedepot in de aankomsthal bewaart koffers enkele uren of een dag, handig bij een overstap of een avondvlucht. U betaalt ter plaatse." },
    { q: "Welke VIP-lounges zijn er op luchthaven Marrakech-Menara?", a: "De Pearl Lounge, de lounge van Royal Air Maroc en de ONDA-service Convives de Marque. Toegang via uw ticket of status, bepaalde kaarten of loungeprogramma's, of tegen betaling, ongeveer € 25 tot 45 per lounge." },
    { q: "Is er medische hulp op luchthaven Marrakech?", a: "Ja, een medische spoedpost is dag en nacht actief op de luchthaven voor eerste hulp. Neem uw medicijnen met recept mee in de handbagage: apotheken zijn in de stad." },
    { q: "Is er een gebedsruimte op luchthaven Marrakech?", a: "Ja, er zijn gebedsruimtes in beide terminals, aan de openbare kant en in de vertrekzone." },
    { q: "Hoe vraag ik hulp bij beperkte mobiliteit aan?", a: "Via uw maatschappij, minstens 48 uur voor de vlucht: zij activeert de dienst bij de luchthaven. Meld het op de vertrekdag ook aan de incheckbalie." },
  ],
  cta: {
    heading: "De terminal uit zonder onderhandelen",
    text: "Een chauffeur met uw naam, een vaste prijs per voertuig en de juiste medinapoort: drie minuten boeken die u de taxirij besparen.",
    label: "Transfer boeken",
  },
} satisfies LocalizedPage;
