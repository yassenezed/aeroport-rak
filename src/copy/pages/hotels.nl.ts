import type { LocalizedPage } from '../types';

export default {
  title: "Hotels bij luchthaven Marrakech-Menara: 15 adressen",
  description: "Hotels bij luchthaven Marrakech-Menara: 15 adressen van Hivernage tot de medina, reistijden, prijsniveau en 5 uitgebreide hotelbeoordelingen.",
  eyebrow: "Hotels · luchthaven en stad",
  h1: "Hotels bij luchthaven Marrakech-Menara en in de stad",
  lede: "De luchthaven ligt op 6 km van de medina: geen enkel hotel in Marrakech ligt echt ver. De wijk kiezen is belangrijker dan de afstand tot de terminal. Dit zijn 15 geselecteerde adressen, van paleis tot riad, per wijk, met uitgebreide beoordelingen van vijf ervan.",
  highlights: [
    { icon: 'clock', value: "10–15 min", label: "Van de luchthaven naar Hivernage, de dichtste hotelwijk" },
    { icon: 'building', value: "15 hotels", label: "Geselecteerd, van paleis tot riad" },
    { icon: 'star', value: "5 beoordelingen", label: "Bereikbaarheid, sterke punten en grenzen" },
    { icon: 'van', value: "Vanaf ≈ 290 MAD", label: "Transfer tot aan het hotel (≈ € 27)" },
  ],
  cardSections: [
    {
      eyebrow: "Op 10–15 minuten van de terminal",
      heading: "De hotels het dichtst bij luchthaven Marrakech-Menara",
      intro: "Hivernage, de Avenue de la Ménara en Agdal zijn de hotelwijken het dichtst bij de luchthaven: zwembaden, rechtstreeks met de auto bereikbaar en de medina op enkele minuten.",
      variant: "feature",
      items: [
        { icon: 'building', title: "Four Seasons Resort Marrakech", text: "Groot resort met tuinen, zwembaden en spa, vlak bij de Ménara-tuinen.", tags: ["Luxe", "≈ 10 min van de luchthaven"], hotel: 'fourSeasons' },
        { icon: 'building', title: "Savoy Le Grand Hotel", text: "Groot gezinsvriendelijk hotel met ruim zwembad en spa, tussen Hivernage en de Avenue de la Ménara.", tags: ["Hogere klasse", "≈ 10 min van de luchthaven"], hotel: 'savoyGrandHotel' },
        { icon: 'building', title: "Pestana CR7 Marrakech", text: "Levendig designhotel in Hivernage, bekend om zijn rooftop met zwembad.", tags: ["Midden tot hogere klasse", "≈ 10–15 min"], hotel: 'pestanaCr7' },
        { icon: 'building', title: "Sofitel Marrakech Lounge & Spa", text: "Hedendaags paleishotel in Hivernage met zwembaden en spa, op enkele minuten lopen van de medina.", tags: ["Hogere klasse", "≈ 10–15 min"], hotel: 'sofitelLoungeSpa' },
        { icon: 'building', title: "Mövenpick Mansour Eddahbi", text: "Groot hotel naast het congrespaleis, handig voor zakenreizen en gezinnen.", tags: ["Hogere klasse", "≈ 10–15 min"], hotel: 'movenpickMansourEddahbi' },
        { icon: 'building', title: "Kenzi Menara Palace", text: "Hotel aan de Avenue Mohammed VI met zwembad en tuinen, in de wijk Agdal.", tags: ["Hogere klasse", "≈ 10–15 min"], hotel: 'kenziMenaraPalace' },
      ],
    },
    {
      eyebrow: "Paleizen en resorts",
      heading: "Paleishotels en grote hotels in Marrakech",
      intro: "De uitzonderlijke adressen, waarvan drie met onze uitgebreide beoordeling.",
      variant: "feature",
      items: [
        { icon: 'star', title: "La Mamounia", text: "Het historische paleishotel met olijfgaarden, aan de rand van de medina en op 12–20 minuten van de luchthaven.", tags: ["Luxe", "Onze score 4,8/5"], link: { key: 'mamounia', label: "Lees onze beoordeling" }, hotel: 'mamounia' },
        { icon: 'star', title: "Royal Mansour", text: "Privériads in een ommuurd domein binnen de stadsmuren, op een kwartier van de luchthaven.", tags: ["Luxe", "Onze score 4,9/5"], link: { key: 'mansour', label: "Lees onze beoordeling" }, hotel: 'royalMansour' },
        { icon: 'star', title: "Es Saadi", text: "Familiedomein in Hivernage in een park van meerdere hectaren, op tien minuten van de terminal.", tags: ["Luxe", "Onze score 4,5/5"], link: { key: 'essaadi', label: "Lees onze beoordeling" }, hotel: 'esSaadi' },
        { icon: 'star', title: "Mandarin Oriental Marrakech", text: "Villa's met privézwembad tussen de olijfbomen, aan de Route du Golf Royal.", tags: ["Luxe", "≈ 25–30 min"], hotel: 'mandarinOriental' },
        { icon: 'star', title: "Fairmont Royal Palm", text: "Golfresort aan de voet van de Atlas, ideaal voor een rustig verblijf buiten de stad.", tags: ["Luxe", "≈ 20–25 min"], hotel: 'fairmontRoyalPalm' },
      ],
    },
    {
      eyebrow: "In de stad en de medina",
      heading: "Stadshotels en charmante riads",
      intro: "Guéliz voor het gemak, de medina voor de sfeer.",
      variant: "feature",
      items: [
        { icon: 'building', title: "Radisson Blu Carré Eden", text: "Modern hotel in het hart van Guéliz, boven winkelcentrum Carré Eden.", tags: ["Hogere klasse", "≈ 15–20 min"], hotel: 'radissonCarreEden' },
        { icon: 'building', title: "ibis Marrakech Gare Voyageurs", text: "Het eenvoudige, voordelige adres tegenover het ONCF-station, ideaal voor een nacht voor een treinreis.", tags: ["Budget", "≈ 15 min"], hotel: 'ibisGare' },
        { icon: 'door', title: "Riad Yasmine", text: "De meest gefotografeerde groene patio van de medina, in de wijk Dar el Bacha.", tags: ["Middenklasse", "Onze score 4,4/5"], link: { key: 'yasmine', label: "Lees onze beoordeling" }, hotel: 'riadYasmine' },
        { icon: 'door', title: "Riad BE", text: "Patio, bassin en dakterras bij Bab Doukkala: een van de makkelijkst bereikbare riads met koffers.", tags: ["Middenklasse", "Onze score 4,3/5"], link: { key: 'riadbe', label: "Lees onze beoordeling" }, hotel: 'riadBe' },
      ],
    },
  ],
  body: `
<h2>Welke wijk kiezen vanaf luchthaven Marrakech-Menara?</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Wijk</th><th>Voor wie</th><th>Met de auto</th><th>Vanaf de luchthaven</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Hivernage, Ménara, Agdal</strong></td><td>Grote hotels, rust, zwembaden</td><td>Rechtstreeks</td><td>10–15 min</td></tr>
<tr><td><strong>Medina</strong></td><td>Eerste bezoek, sfeer, riads</td><td>Afzetten aan een poort, dan te voet</td><td>15–25 min</td></tr>
<tr><td><strong>Guéliz</strong></td><td>Restaurants, station, huurauto</td><td>Rechtstreeks</td><td>15–20 min</td></tr>
<tr><td><strong>Palmeraie, Golfweg</strong></td><td>Resorts, rust, gezinnen</td><td>Rechtstreeks</td><td>25–35 min</td></tr>
</tbody>
</table>
</div>
<p>De beslissende vraag: hoe vaak per dag wilt u terug om te rusten? Vaak, dan logeert u in de medina of Hivernage. Plant u Agafay, de Atlas en avonden in de stad, dan kost een resort in de Palmeraie u elke dag een uur rijden.</p>

<h2>Riad of hotel: twee verschillende ervaringen</h2>
<p>Een <strong>riad</strong> is een traditioneel huis rond een patio, met vijf tot tien kamers, in de medina: persoonlijk onthaal, ontbijt op het terras en echte rust achter de deur. Daartegenover: geen auto tot aan de deur, steile trappen en ongelijke verwarming in de winter. Een <strong>hotel</strong> in Hivernage, Guéliz of de Palmeraie biedt lift, betrouwbare airco, zwembad en toegang met de auto tot de ingang.</p>
<div class="callout">
<span class="callout-label">Voor u in de medina boekt</span>
<p>Vraag de naam van de afzetpoort (Bab Doukkala, Bab Laksour, Bab Agnaou…), de wandeltijd, een drager op uw aankomstuur, de verwarming in de winter en hoe het saldo betaald wordt: veel kleine riads aanvaarden alleen cash.</p>
</div>

<h2>Laat aankomen: de reflex tegen een gesloten deur</h2>
<p>Landt uw vlucht na 22 uur, geef uw verblijf dan het <strong>vluchtnummer</strong> en niet alleen het uur: een riad die weet dat u twee uur vertraging hebt, houdt iemand aan de deur. Hotels in Marrakech hebben zelden een gratis shuttle: voorzie een <a href="/nl/book-transfer/">geboekte transfer</a> of een taxi tegen nachttarief.</p>
`,
  faqHeading: "Hotels bij luchthaven Marrakech-Menara: veelgestelde vragen",
  faqs: [
    { q: "Welk hotel ligt het dichtst bij de luchthaven van Marrakech?", a: "Op het luchthaventerrein zelf staat geen groot hotel. De dichtste liggen aan de Avenue de la Ménara en in Hivernage, zoals het Four Seasons of het Savoy Le Grand Hotel, op zo'n tien minuten rijden van de terminal." },
    { q: "Hebben hotels in Marrakech een gratis luchthavenshuttle?", a: "Zelden. De meeste bieden op aanvraag een betalende transfer aan. Een geboekte transfer vanaf € 27 per voertuig of een taxi van de standplaats blijven het eenvoudigst." },
    { q: "Waar overnachten voor een vroege vlucht?", a: "In Hivernage, Ménara of Agdal, op 10–15 minuten van de terminal en met de auto bereikbaar tot aan de deur. Vermijd de medina bij vertrek in de ochtendschemering: u moet eerst met bagage te voet naar een poort." },
    { q: "Beter overnachten in de medina of in Guéliz?", a: "De medina voor de sfeer, de riads en de soeks, met afzetten aan een poort. Guéliz voor het gemak: toegang met de auto, restaurants en het ONCF-station, maar minder exotisch." },
    { q: "Is een riad geschikt met kinderen?", a: "Dat hangt ervan af: steile trappen, zelden beveiligde terrassen en open patio's. Veel gezinnen verkiezen een hotel met zwembad in Hivernage of de Palmeraie." },
    { q: "Kan ik met de auto tot aan de deur van een riad rijden?", a: "Bijna nooit: de steegjes zijn te smal. U wordt afgezet aan de dichtstbijzijnde poort en loopt drie tot tien minuten. Vraag een drager met handkar." },
    { q: "Zijn riads verwarmd in de winter?", a: "Ongelijk: januarinachten zakken onder 8 °C. Controleer of de kamer verwarming heeft voor u een winterverblijf boekt." },
    { q: "Moet je in riads cash betalen?", a: "Vaak voor het saldo: veel kleine adressen aanvaarden de kaart alleen voor het online voorschot. Neem dirham mee en vraag het bij het boeken." },
  ],
  cta: {
    heading: "Van de luchthaven tot aan uw hotel",
    text: "Geef de naam van uw verblijf: de chauffeur zet u af aan het hotel, of aan de medinapoort het dichtst bij uw riad, tegen een vaste prijs per voertuig.",
    label: "Mijn transfer boeken",
    secondary: { label: "Auto huren", key: 'carRental' },
  },
} satisfies LocalizedPage;
