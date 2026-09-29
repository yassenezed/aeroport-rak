import type { PageContent } from '../types';

export default {
  fr: {
    title: "Destinations aéroport Marrakech-Ménara : vols directs",
    description: "Plus de 100 villes en vol direct depuis l'aéroport de Marrakech-Ménara : 39 compagnies, 33 pays, vols saisonniers et intérieurs. Liste filtrable à jour.",
    eyebrow: "Vols directs · mis à jour septembre 2026",
    h1: "Destinations aéroport Marrakech-Ménara",
    lede: "L'aéroport de Marrakech-Ménara (RAK) est relié sans escale à plus de cent villes, surtout en Europe, mais aussi au Maroc, au Moyen-Orient et en Amérique du Nord. Retrouvez toutes les destinations, les compagnies qui les desservent et les lignes saisonnières.",
    highlights: [
      { icon: 'map', value: "106 villes", label: "Destinations en vol direct" },
      { icon: 'plane', value: "39 compagnies", label: "Régulières et saisonnières" },
      { icon: 'map-pin', value: "33 pays", label: "Sur 3 continents" },
    ],
    destinations: {
      airlinesHeading: "Les compagnies aériennes à l'aéroport de Marrakech",
      airlinesIntro: "Les low cost européennes dominent le trafic : Ryanair relie à elle seule plus de cinquante villes au RAK. Voici les principales compagnies et leur nombre de destinations.",
      tableHeading: "Toutes les destinations au départ de l'aéroport de Marrakech-Ménara",
      tableIntro: "Villes desservies sans escale, avec les compagnies qui les opèrent. Tapez une ville, un pays ou une compagnie, ou filtrez par région.",
      regionsHeading: "Destinations par région",
    },
    services: {
      heading: "Organiser son vol vers ou depuis Marrakech",
      intro: "Trouver le bon billet, puis tout ce qui se passe au sol une fois arrivé.",
      items: [
        { icon: 'plane', key: 'flights', title: "Comparer les vols", text: "Prix des vols directs vers Marrakech depuis votre ville.", cta: "Chercher un vol" },
        { icon: 'building', key: 'hotels', title: "Hôtels à Marrakech", text: "Riads, palaces et hôtels près de l'aéroport.", cta: "Voir les hôtels" },
        { icon: 'van', key: 'bookTransfer', title: "Transfert depuis l'aéroport", text: "Chauffeur à votre nom, prix fixe par véhicule dès 27 €.", cta: "Réserver" },
        { icon: 'tag', key: 'carRental', title: "Location de voiture", text: "Comptoirs au terminal, prix et pièges du contrat.", cta: "Comparer" },
        { icon: 'plane-landing', key: 'arrivals', title: "Arrivées en direct", text: "Suivre un vol qui atterrit à Marrakech.", cta: "Voir les arrivées" },
        { icon: 'plane-takeoff', key: 'departures', title: "Départs en direct", text: "Horaires, retards et conseils avant le décollage.", cta: "Voir les départs" },
      ],
    },
    body: `
<h2>Vols directs vers l'Europe depuis Marrakech</h2>
<p>Près de huit destinations sur dix au départ de l'aéroport de Marrakech sont européennes. <strong>La France arrive en tête</strong> avec une vingtaine de villes : Paris par quatre aéroports (Charles-de-Gaulle, Orly, Beauvais et Vatry), mais aussi Lyon, Marseille, Nice, Toulouse, Bordeaux, Nantes, Lille, Strasbourg, Montpellier, Rennes ou Brest. Le <strong>Royaume-Uni</strong> suit avec Londres (cinq aéroports), Manchester, Birmingham, Bristol, Édimbourg ou Glasgow, puis l'<strong>Espagne</strong>, l'<strong>Italie</strong> et l'<strong>Allemagne</strong>.</p>
<p>Les lignes vers la Belgique, les Pays-Bas, la Suisse et le Portugal sont assurées toute l'année. L'hiver, la saison la plus douce à Marrakech, ajoute des vols vers la Scandinavie, l'Autriche, la Grèce, la Pologne ou les pays baltes.</p>

<h2>Vols intérieurs au Maroc depuis Marrakech</h2>
<p>Royal Air Maroc relie Marrakech à <strong>Casablanca</strong>, <strong>Dakhla</strong> et <strong>Laâyoune</strong>. Ryanair assure des vols intérieurs vers <strong>Fès</strong>, <strong>Tanger</strong>, <strong>Tétouan</strong>, <strong>Oujda</strong> et <strong>Errachidia</strong>, souvent à petit prix. Il n'existe pas de vol régulier vers Agadir, Essaouira ou Ouarzazate : ces villes se rejoignent par la route, comme le montre le tableau en bas de page.</p>

<h2>Vols long-courriers : Amérique du Nord et Moyen-Orient</h2>
<p>Depuis 2024, l'aéroport de Marrakech-Ménara est relié sans escale à l'Amérique du Nord : <strong>Montréal</strong> avec Air Transat, et en saison <strong>Atlanta</strong> avec Delta et <strong>New York-Newark</strong> avec United. Vers l'est, Qatar Airways dessert <strong>Doha</strong> et Turkish Airlines <strong>Istanbul</strong>, deux plateformes de correspondance vers l'Asie. Saudia relie <strong>Djeddah</strong> et Royal Air Maroc <strong>Médine</strong> en saison, notamment pour la omra.</p>

<h2>Vols saisonniers : ce qui change entre l'été et l'hiver</h2>
<p>Le programme change deux fois par an, fin mars et fin octobre. La saison d'hiver est la plus fournie : les Européens du Nord fuient le froid, et les compagnies ouvrent des lignes vers Copenhague, Oslo, Helsinki, Vienne, Varsovie ou Riga. L'été, Transavia ajoute des vols vers le Cap-Vert et Dakar, et Ryanair vers les Canaries et Palma. Les lignes marquées « saisonnier » dans le tableau ne sont donc pas ouvertes toute l'année : vérifiez les dates avant de réserver.</p>

<h2>Trouver un vol pas cher vers ou depuis Marrakech</h2>
<ul>
<li><strong>Comparez les low cost et les compagnies classiques</strong> : sur Paris ou Londres, cinq ou six compagnies sont en concurrence sur la même semaine.</li>
<li><strong>Réservez six à huit semaines avant</strong>, plus tôt pour les vacances scolaires, Noël et Pâques, les périodes les plus chères.</li>
<li><strong>Regardez l'aéroport de départ</strong> : Beauvais et Vatry sont loin de Paris, Hahn loin de Francfort, Weeze loin de Düsseldorf. Le billet moins cher peut coûter un trajet de plus.</li>
<li><strong>Visez un atterrissage en journée</strong> : les vols du soir arrivent au pic d'affluence de l'aéroport et après le dernier bus 19.</li>
</ul>
<p>Notre <a href="/vols/">comparateur de vols vers Marrakech</a> affiche les prix de toutes les compagnies. Pour suivre un vol en temps réel, consultez les <a href="/arrivees/">arrivées</a> et les <a href="/departs/">départs</a> de l'aéroport.</p>

<h2>Depuis l'aéroport, par la route</h2>
<p>Une fois à Marrakech, les grandes destinations de la région se rejoignent en voiture ou en <a href="/reserver-transfert/">transfert privé</a> :</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Destination</th><th>Distance</th><th>Durée</th><th>Transfert privé</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Médina / Jemaa el-Fna</strong></td><td class="num">6 km</td><td class="num">15–30 min</td><td class="num">dès 27 €</td></tr>
<tr><td><strong>Désert d'Agafay</strong></td><td class="num">30 km</td><td class="num">40–50 min</td><td class="num">35–55 €</td></tr>
<tr><td><strong>Vallée de l'Ourika</strong></td><td class="num">40 km</td><td class="num">1 h</td><td class="num">45–65 €</td></tr>
<tr><td><strong><a href="/blog/distance-essaouira-aeroport-marrakech/">Essaouira</a></strong></td><td class="num">180 km</td><td class="num">2 h 30</td><td class="num">≈ 95 €</td></tr>
<tr><td><strong><a href="/blog/distance-ouarzazate-aeroport-marrakech/">Ouarzazate</a></strong></td><td class="num">200 km</td><td class="num">4 h</td><td class="num">120–160 €</td></tr>
<tr><td><strong><a href="/blog/distance-casablanca-aeroport-marrakech/">Casablanca</a></strong></td><td class="num">240 km</td><td class="num">2 h 30</td><td class="num">130–170 €</td></tr>
<tr><td><strong><a href="/blog/distance-agadir-aeroport-marrakech/">Agadir</a></strong></td><td class="num">250 km</td><td class="num">3 h</td><td class="num">130–170 €</td></tr>
<tr><td><strong><a href="/blog/distance-fes-aeroport-marrakech/">Fès</a></strong></td><td class="num">530 km</td><td class="num">6 h</td><td class="num">sur devis</td></tr>
</tbody>
</table>
</div>
<p>La liste des vols directs est établie à partir des programmes publiés par les compagnies et de la base de routes de <a href="https://fr.wikipedia.org/wiki/A%C3%A9roport_de_Marrakech-M%C3%A9nara" target="_blank" rel="noopener">Wikipédia</a>. Les horaires officiels sont publiés par l'<a href="https://www.onda.ma/" target="_blank" rel="noopener">ONDA</a>, exploitant de l'aéroport.</p>
`,
    faqHeading: "Destinations depuis l'aéroport de Marrakech : questions fréquentes",
    faqs: [
      { q: "Combien de destinations directes depuis l'aéroport de Marrakech ?", a: "L'aéroport de Marrakech-Ménara est relié sans escale à 106 villes dans 33 pays, par 39 compagnies, en comptant les lignes saisonnières. La grande majorité des destinations sont européennes." },
      { q: "Quelles compagnies aériennes desservent Marrakech ?", a: "Ryanair est de loin la première compagnie, avec plus de cinquante destinations, devant easyJet, Transavia et Royal Air Maroc. On trouve aussi Wizz Air, Jet2, Volotea, TUI, Vueling, British Airways, Air France, Iberia, Turkish Airlines, Qatar Airways ou Air Transat." },
      { q: "Quelles compagnies relient Paris et Marrakech en vol direct ?", a: "Air France et easyJet depuis Charles-de-Gaulle, Royal Air Maroc depuis Charles-de-Gaulle et Orly, Transavia et TUI fly depuis Orly, Vueling en saison depuis Orly, et Ryanair depuis Beauvais et Vatry." },
      { q: "Combien de temps dure un vol Paris – Marrakech ?", a: "Environ 3 h 15 sans escale, selon le vent et l'aéroport de départ. Comptez environ 2 h 30 depuis Marseille ou Toulouse et 3 h 30 depuis Lille ou Strasbourg." },
      { q: "Y a-t-il des vols directs entre Marrakech et l'Amérique du Nord ?", a: "Oui : Air Transat relie Montréal toute l'année, Delta dessert Atlanta et United New York-Newark en saison. Comptez environ 7 heures de vol vers la côte est." },
      { q: "Quels sont les vols intérieurs au départ de Marrakech ?", a: "Royal Air Maroc dessert Casablanca, Dakhla et Laâyoune ; Ryanair relie Fès, Tanger, Tétouan, Oujda et Errachidia. Il n'y a pas de vol régulier vers Agadir, Essaouira ou Ouarzazate, accessibles par la route." },
      { q: "Peut-on aller de Marrakech à Essaouira ou Agadir en avion ?", a: "Non, il n'existe pas de vol régulier. Essaouira est à 2 h 30 de route et Agadir à 3 heures par l'autoroute ; un transfert privé ou un bus CTM depuis Marrakech est la solution la plus simple." },
      { q: "Les destinations changent-elles selon la saison ?", a: "Oui. Le programme change fin mars et fin octobre. L'hiver ajoute des lignes vers le nord de l'Europe, l'été des vols vers les Canaries, le Cap-Vert ou Dakar. Les lignes saisonnières sont signalées dans le tableau." },
    ],
    cta: {
      heading: "Vous atterrissez à Marrakech ? Votre chauffeur vous attend",
      text: "Médina, Agafay, Ourika ou Essaouira : prix fixe par véhicule, suivi de votre vol et attente incluse en cas de retard.",
      label: "Réserver un transfert",
    },
  },
} satisfies PageContent;
