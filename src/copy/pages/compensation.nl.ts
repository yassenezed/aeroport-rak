import type { LocalizedPage } from '../types';

export default {
  title: "Vertraagde vlucht luchthaven Marrakech-Menara: tot € 600",
  description: "Vlucht vertraagd of geannuleerd op luchthaven Marrakech-Menara? Controleer gratis of u recht hebt op € 250, 400 of 600 volgens de EU-verordening 261/2004.",
  eyebrow: "Passagiersrechten · EU-verordening 261/2004",
  h1: "Compensatie bij vertraging: luchthaven Marrakech-Menara",
  lede: "Is uw vlucht van of naar luchthaven Marrakech-Menara met meer dan drie uur vertraging aangekomen, of geannuleerd? Dan hebt u mogelijk recht op € 250, 400 of 600 per passagier. Controleer uw vlucht in een minuut en lees wat echt voor u geldt.",
  widget: "compensation",
  highlights: [
    { icon: 'wallet', value: "€ 250", label: "Onder 1.500 km: Madrid, Sevilla, Lissabon" },
    { icon: 'wallet', value: "€ 400", label: "1.500–3.500 km: Amsterdam, Brussel, Eindhoven" },
    { icon: 'wallet', value: "€ 600", label: "Boven 3.500 km: Stockholm, Helsinki, Riga" },
  ],
  cardSections: [
    {
      eyebrow: "Wie is gedekt?",
      heading: "Welke vluchten van luchthaven Marrakech-Menara gedekt zijn",
      intro: "Het hangt af van de richting van de vlucht en de nationaliteit van de maatschappij.",
      variant: 'feature',
      items: [
        { icon: 'plane-landing', title: "Nederland, België of EU → Marrakech", text: "Alle vluchten die vertrekken uit de Europese Unie zijn gedekt, ongeacht de maatschappij, ook Royal Air Maroc.", tags: ["Gedekt", "Alle maatschappijen"] },
        { icon: 'plane-takeoff', title: "Marrakech → Europa, Europese maatschappij", text: "Gedekt als een Europese maatschappij de vlucht uitvoert: Transavia, Ryanair, TUI fly, easyJet, Air France, Wizz Air…", tags: ["Gedekt", "EU-maatschappij"] },
        { icon: 'alert', title: "Marrakech → Europa, niet-Europese maatschappij", text: "Royal Air Maroc, Qatar Airways, Turkish Airlines of Saudia vanuit Marokko vallen niet onder de verordening. Hun vervoersvoorwaarden blijven gelden.", tags: ["Niet gedekt"] },
        { icon: 'shield-check', title: "Vluchten met het Verenigd Koninkrijk", text: "De Britse regeling UK261 geeft dezelfde rechten, in ponden, voor vluchten vanuit het VK en voor Britse maatschappijen.", tags: ["UK261", "£ 220 tot 520"] },
      ],
    },
    {
      eyebrow: "Vertraagde vlucht",
      heading: "Vertraging: wat de maatschappij op de luchthaven moet bieden",
      intro: "Nog vóór enige compensatie moet de maatschappij u vanaf een bepaalde wachttijd op de luchthaven verzorgen.",
      variant: 'feature',
      items: [
        { icon: 'coffee', title: "2 uur of meer, vlucht onder 1.500 km", text: "Maaltijden en verfrissingen in verhouding tot de wachttijd en twee communicaties (telefoon of e-mail).", tags: ["Maaltijden", "Drankjes", "Communicatie"] },
        { icon: 'clock', title: "3 uur of meer, vlucht van 1.500 tot 3.500 km", text: "Dezelfde verzorging, die geldt voor de meeste vluchten tussen Marrakech en de Benelux: Amsterdam, Eindhoven, Brussel.", tags: ["Maaltijden", "Drankjes", "Communicatie"] },
        { icon: 'building', title: "4 uur of meer, vlucht boven 3.500 km", text: "Idem, en als het vertrek naar de volgende dag verschuift: hotel en vervoer tussen luchthaven en hotel, ongeacht de afstand.", tags: ["Hotel", "Vervoer", "Maaltijden"] },
      ],
    },
    {
      eyebrow: "Geannuleerde vlucht",
      heading: "Geannuleerde vlucht: uw opties",
      intro: "Bij annulering moet de maatschappij u laten kiezen en u verzorgen.",
      variant: 'feature',
      items: [
        { icon: 'wallet', title: "Volledige terugbetaling", text: "De ticketprijs binnen zeven dagen terugbetaald, ook het ongebruikte deel van een retour." },
        { icon: 'plane', title: "Vervangende vlucht", text: "Vervoer naar uw bestemming zo snel mogelijk, of op een latere datum naar keuze." },
        { icon: 'tag', title: "Compensatie van € 250 tot 600", text: "Als u minder dan 14 dagen voor vertrek werd verwittigd, tenzij u werd omgeboekt dicht bij het oorspronkelijke schema." },
        { icon: 'users', title: "Verzorging", text: "Maaltijden, communicatie en zo nodig hotel en vervoer terwijl u op de vervangende vlucht wacht." },
      ],
    },
    {
      eyebrow: "Uitzonderingen",
      heading: "Buitengewone omstandigheden",
      intro: "In deze gevallen moet de maatschappij u nog steeds verzorgen, maar hoeft ze geen compensatie te betalen.",
      variant: 'compact',
      items: [
        { icon: 'cloud', title: "Weer", text: "Storm, harde wind, mist of onweer die de vlucht gevaarlijk maken." },
        { icon: 'shield', title: "Veiligheid", text: "Veiligheidsdreiging, sluiting van het luchtruim, politieke instabiliteit." },
        { icon: 'alert', title: "Natuurverschijnselen", text: "Aardbeving, vulkaanuitbarsting of een andere onvoorzienbare gebeurtenis." },
        { icon: 'users', title: "Staking luchtverkeersleiding", text: "Stakingen buiten de maatschappij, zoals die van de Franse luchtverkeersleiding." },
      ],
    },
  ],
  steps: {
    heading: "Zo claimt u uw compensatie",
    intro: "U kunt zelf bij de maatschappij claimen, of de controledienst hierboven gebruiken, die alleen bij succes betaald wordt.",
    items: [
      { icon: 'clipboard', title: "Bewaar uw documenten", text: "Instapkaart, boekingsbevestiging en elk bewijs van de vertraging of annulering: e-mails, sms'jes, foto's van het vluchtbord." },
      { icon: 'clock', title: "Noteer de aankomsttijd", text: "De vertraging wordt gemeten bij aankomst, wanneer de deuren van het toestel opengaan. Vraag de reden van de vertraging schriftelijk aan de balie." },
      { icon: 'users', title: "Claim bij de maatschappij", text: "Stuur een schriftelijke claim naar de klantenservice met verwijzing naar verordening 261/2004, het vluchtnummer, de datum en het bedrag." },
      { icon: 'shield-check', title: "Laat uw rechten gelden", text: "Geen antwoord binnen twee maanden of een weigering? Wend u tot de ILT in Nederland of de FOD Mobiliteit in België." },
    ],
  },
  body: `
<h2>Hoeveel kunt u krijgen voor een vlucht van of naar Marrakech?</h2>
<p>Het bedrag hangt niet af van de ticketprijs, maar van de <strong>afstand van de vlucht</strong>. Voor luchthaven Marrakech-Menara geeft dat:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Afstand</th><th>Compensatie</th><th>Voorbeelden van routes met Marrakech</th></tr></thead>
<tbody>
<tr><td><strong>Tot 1.500 km</strong></td><td class="num">€ 250</td><td>Madrid, Barcelona, Sevilla, Málaga, Lissabon</td></tr>
<tr class="row-highlight"><td><strong>1.500 tot 3.500 km</strong></td><td class="num">€ 400</td><td>Amsterdam, Eindhoven, Rotterdam, Brussel, Charleroi, Parijs, Londen, Frankfurt</td></tr>
<tr><td><strong>Boven 3.500 km</strong></td><td class="num">€ 600</td><td>Stockholm, Helsinki, Riga</td></tr>
</tbody>
</table>
</div>
<p>De compensatie is verschuldigd als de vlucht <strong>drie uur of meer te laat</strong> op de bestemming aankomt, of bij een late annulering of instapweigering. Ze kan worden gehalveerd als de maatschappij u heeft omgeboekt met een aankomst dicht bij de geplande tijd. Directe vluchten van Marrakech naar Montreal, Atlanta of New York worden door niet-Europese maatschappijen van buiten de EU uitgevoerd: die zijn niet gedekt.</p>

<h2>Welke maatschappijen gedekt zijn vanuit Marrakech</h2>
<p>Vanaf luchthaven Marrakech-Menara geldt de verordening als de maatschappij Europees is. Dat geldt voor de meeste vluchten naar de Benelux: <strong>Transavia, Ryanair, TUI fly, easyJet, Air France, Wizz Air, Vueling, Norwegian, SAS</strong> en de andere maatschappijen uit de EU, Noorwegen en Zwitserland. <strong>Royal Air Maroc</strong> is vanuit Marokko daarentegen niet gedekt, net zomin als Qatar Airways, Turkish Airlines, Saudia, Air Transat, Delta of United. Bekijk alle routes en maatschappijen op onze pagina <a href="/nl/destinations/">bestemmingen vanuit Marrakech</a>.</p>

<h2>Veelvoorkomende vertragingen in Marrakech: wat telt</h2>
<p>Veel prijsvechters komen 's avonds in Marrakech aan, aan het eind van de dag van het toestel: een vroege vertraging werkt door tot de laatste vlucht. Wordt een vlucht <strong>omgeleid</strong> naar Casablanca of Agadir, dan telt de aankomsttijd in Marrakech, uw eindbestemming. Stakingen van de Franse luchtverkeersleiding treffen vaak vluchten uit de Benelux die over Frankrijk vliegen: die gelden als buitengewoon.</p>
<div class="callout">
<span class="callout-label">Goed om te weten</span>
<p>Een technisch defect aan het toestel is meestal <strong>geen</strong> buitengewone omstandigheid, en een staking van het eigen personeel van de maatschappij evenmin: in beide gevallen behoudt u uw recht op compensatie.</p>
</div>

<h2>Hoe lang hebt u om te claimen?</h2>
<p>De verordening zelf noemt geen termijn: het recht van het land waar u claimt, geldt. In <strong>Nederland is dat 2 jaar</strong>, in België 1 jaar, in Duitsland 3 jaar, in Frankrijk en Spanje 5 jaar. Wacht toch niet: bewijs gaat snel verloren. Om een vlucht live te volgen, bekijkt u de <a href="/nl/arrivals/">aankomsten</a> en het <a href="/nl/departures/">vertrek</a> van luchthaven Marrakech.</p>
`,
  faqHeading: "Compensatie op luchthaven Marrakech: veelgestelde vragen",
  faqs: [
    { q: "Geldt verordening 261/2004 voor vluchten vanuit Marrakech?", a: "Ja voor alle vluchten vanuit de EU naar Marrakech, ongeacht de maatschappij. Vanuit Marrakech alleen als de maatschappij Europees is, zoals Transavia, Ryanair, TUI fly of easyJet. Royal Air Maroc is vanuit Marokko niet gedekt." },
    { q: "Hoeveel krijg ik voor een vertraagde vlucht Amsterdam–Marrakech?", a: "€ 400 per passagier, omdat de vlucht ongeveer 2.525 km lang is. De vertraging bij aankomst moet meer dan drie uur bedragen en niet door buitengewone omstandigheden komen." },
    { q: "En voor een vlucht Brussel–Marrakech of Eindhoven–Marrakech?", a: "Ook € 400 per passagier: Brussel ligt op ongeveer 2.380 km en Eindhoven op ongeveer 2.465 km, telkens bij meer dan drie uur vertraging bij aankomst." },
    { q: "Mijn vlucht met Royal Air Maroc vanuit Marrakech is vertraagd: kan ik claimen?", a: "Niet volgens de Europese verordening, omdat de maatschappij niet Europees is en de vlucht van buiten de EU vertrekt. Uw werkelijke kosten kunt u wel claimen via de vervoersvoorwaarden en het Verdrag van Montreal." },
    { q: "Mijn vlucht werd omgeleid naar Casablanca of Agadir: wat nu?", a: "De aankomsttijd in Marrakech, uw eindbestemming, telt. Komt u meer dan drie uur te laat aan en is de oorzaak niet buitengewoon, dan blijft de compensatie verschuldigd." },
    { q: "Wanneer hoeft de maatschappij niet te betalen?", a: "Bij buitengewone omstandigheden: gevaarlijk weer, veiligheidsdreiging, natuurrampen, stakingen van de luchtverkeersleiding. Een technisch defect of een staking van het eigen personeel ontslaat haar meestal niet." },
    { q: "Hoe lang heb ik om compensatie te claimen?", a: "In Nederland 2 jaar, in België 1 jaar, in Duitsland 3 jaar, in Frankrijk en Spanje 5 jaar. Bewaar uw documenten en claim zo snel mogelijk." },
    { q: "Mijn vlucht naar Marrakech is geannuleerd: wat zijn mijn rechten?", a: "De maatschappij moet u terugbetaling binnen zeven dagen of een vervangende vlucht aanbieden en u verzorgen tijdens het wachten. Werd u minder dan 14 dagen vooraf verwittigd, dan kunt u bovendien € 250 tot 600 claimen, afhankelijk van de afstand." },
  ],
  cta: {
    heading: "Te laat geland in Marrakech? Uw chauffeur wacht",
    text: "Onze chauffeurs volgen uw vlucht en wachten zonder meerprijs bij vertraging, ook midden in de nacht, en zetten u af bij de medinapoort die het dichtst bij uw riad ligt.",
    label: "Transfer boeken",
  },
} satisfies LocalizedPage;
