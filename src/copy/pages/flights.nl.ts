import type { LocalizedPage } from '../types';

export default {
  title: "Vluchten naar Marrakech (RAK): maatschappijen en seizoenen",
  description: "Vluchten naar Marrakech: welke maatschappijen de RAK bedienen, de beste boekingsperiodes, bagagevalkuilen bij prijsvechters en binnenlandse aansluitingen.",
  eyebrow: "Marrakech Menara · Vluchten",
  h1: "Vluchten naar Marrakech",
  lede: "De RAK is na Casablanca de drukst bediende luchthaven van Marokko, met een dicht netwerk van Europese routes en een uitgesproken seizoen. Vergelijk data en lees daarna wat de eindprijs echt bepaalt.",
  widget: "flight-search",
  body: `
<h2>Wie naar Marrakech vliegt</h2>
<p>Drie groepen maatschappijen verdelen het verkeer. De <strong>Europese prijsvechters</strong> – Transavia, Ryanair, easyJet, Vueling, Wizz Air – verzorgen de meeste rechtstreekse routes vanuit Nederland, België, Frankrijk, Spanje en het Verenigd Koninkrijk; zij verklaren waarom de aankomsten zich 's avonds opstapelen. De <strong>klassieke maatschappijen</strong> – Royal Air Maroc, KLM via Parijs of Casablanca, Brussels Airlines, Air France, Iberia – bieden prettiger tijden en inbegrepen bagage tegen hogere tarieven. Tot slot verbinden <strong>Royal Air Maroc en Air Arabia Maroc</strong> Marrakech met andere Marokkaanse steden en verschillende Afrikaanse bestemmingen.</p>

<h2>Wanneer de prijzen stijgen en dalen</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Periode</th><th>Drukte</th><th>Vliegprijzen</th><th>Klimaat</th></tr></thead>
<tbody>
<tr><td><strong>Maart–mei</strong></td><td>Zeer hoog</td><td>Hoog</td><td>Ideaal, 22–28 °C</td></tr>
<tr><td><strong>Juni–augustus</strong></td><td>Gemiddeld</td><td>Gematigd behalve augustus</td><td>Zeer heet, 38–45 °C</td></tr>
<tr class="row-highlight"><td><strong>September–november</strong></td><td>Hoog</td><td>Gemiddeld</td><td>Uitstekend, 24–30 °C</td></tr>
<tr><td><strong>December–februari</strong></td><td>Pieken rond de feestdagen</td><td>Laag buiten de feestdagen</td><td>Zacht overdag, koud 's nachts</td></tr>
</tbody>
</table>
</div>
<p>Het beste venster blijft <strong>eind september tot half november</strong>: het beste weer van het jaar, de medina terug in haar ritme na de zomer, en prijzen die nog niet in het feestseizoen zijn beland. Januari en februari buiten de schoolvakanties zijn het goedkoopst – mits u nachten onder de 8 °C accepteert, wat in een nauwelijks verwarmde riad echt meetelt.</p>

<h2>De getoonde prijs is niet de betaalde prijs</h2>
<p>Bij een prijsvechter zit het verschil tussen advertentie en totaal in drie regels. <strong>Ruimbagage</strong> kost vaak € 25 tot € 50 per traject, soms meer dan het ticket zelf. <strong>Stoelreservering</strong> wordt berekend zodra u samen reist en naast elkaar wilt zitten. En <strong>handbagage</strong> boven een klein tasje is bij meerdere maatschappijen betalend, met strikte controles bij vertrek uit Marrakech.</p>
<div class="callout">
<span class="callout-label">De rekensom</span>
<p>Tel altijd de terugvlucht mee voordat u vergelijkt. Een budgetretour van € 79 wordt € 179 met twee ruimbagagestukken en gereserveerde stoelen – een niveau waarop een klassieke maatschappij met inbegrepen bagage en dagvluchten weer concurrerend wordt.</p>
</div>

<h2>Aansluitingen naar de rest van Marokko</h2>
<p>Vanuit Marrakech lopen binnenlandse verbindingen meestal via Casablanca. Voor Agadir, Essaouira of Ouarzazate is de weg vaak sneller en veel goedkoper zodra u de reistijd naar de luchthavens meerekent. Voor Fez of Tanger is de ONCF-trein vanaf station Guéliz een comfortabel alternatief: u moet alleen het stuk tussen luchthaven en station inplannen, waar geen spoorlijn rijdt.</p>
<p>Landt uw vlucht laat en vertrekt uw binnenlandse aansluiting vroeg, slaap dan liever in Marrakech dan op de luchthaven: hotels bij de RAK liggen op tien minuten en kosten minder dan een omgeboekt ticket.</p>
`,
  faqs: [
    { q: "Welke maatschappijen vliegen op luchthaven Marrakech?", a: "Vooral Transavia, Ryanair, easyJet, Vueling en Wizz Air op de Europese budgetroutes, plus Royal Air Maroc, Brussels Airlines, Air France en Iberia op klassieke vluchten. Royal Air Maroc en Air Arabia Maroc verzorgen de binnenlandse en Afrikaanse verbindingen." },
    { q: "Wat is de beste periode om naar Marrakech te vliegen?", a: "Eind september tot half november: het klimaat is optimaal, tussen 24 en 30 °C, en de prijzen blijven redelijk vóór het feestseizoen. Januari en februari buiten de schoolvakanties zijn het goedkoopst, met frisse nachten." },
    { q: "Hoe lang duurt een vlucht naar Marrakech?", a: "Ongeveer 3 uur 45 rechtstreeks vanaf Amsterdam, Eindhoven of Rotterdam, 3 uur 30 vanaf Brussel en Charleroi, en 3 uur 20 vanaf Parijs." },
    { q: "Zijn er rechtstreekse vluchten tussen Marrakech en andere Marokkaanse steden?", a: "Weinig, en de meeste gaan via Casablanca. Voor Agadir, Essaouira of Ouarzazate blijft de weg sneller en goedkoper zodra u de toegangstijden meerekent. Voor Fez en Tanger is de ONCF-trein vanaf station Guéliz een goed alternatief." },
    { q: "Hoe ver vooruit moet u een vlucht naar Marrakech boeken?", a: "Zes tot tien weken op de budgetroutes in het normale seizoen. Voor schoolvakanties, Kerstmis en het voorjaar eerder drie tot vier maanden: in die periodes verdubbelen de prijzen het snelst." },
  ],
  cta: { heading: "Vergelijk vluchten naar Marrakech", text: "Alle maatschappijen die de RAK bedienen, op uw data, met overstappen en reistijden op een rij.", label: "Vlucht zoeken", href: "/nl/flights/" },
} satisfies LocalizedPage;
