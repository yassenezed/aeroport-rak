import type { PageContent } from '../types';

export default {
  fr: {
    title: "Vols vers l'aéroport Marrakech-Ménara : compagnies et prix",
    description: "Vols pas chers vers l'aéroport de Marrakech-Ménara : comparateur, compagnies par ville, durées de vol, meilleure période et pièges des low cost.",
    eyebrow: "Comparateur de vols · 39 compagnies",
    h1: "Vols aéroport Marrakech-Ménara",
    lede: "Comparez les vols vers l'aéroport de Marrakech-Ménara (RAK) sur toutes les compagnies, puis vérifiez ce qui fait vraiment le prix : ville de départ, saison, bagages et horaire d'arrivée.",
    widget: 'flight-search',
    highlights: [
      { icon: 'plane', value: "39 compagnies", label: "Vols directs vers le RAK" },
      { icon: 'map', value: "106 villes", label: "Reliées sans escale" },
      { icon: 'clock', value: "≈ 3 h 15", label: "Vol Paris → Marrakech" },
    ],
    services: {
      heading: "Préparer votre arrivée à l'aéroport de Marrakech",
      intro: "Une fois le billet réservé, tout ce qui se passe au sol.",
      items: [
        { icon: 'map', key: 'destinations', title: "Toutes les destinations", text: "Les 106 villes reliées en direct, filtrables par pays et compagnie.", cta: "Voir la liste" },
        { icon: 'plane-landing', key: 'arrivals', title: "Arrivées en direct", text: "Suivre un vol et l'heure réelle d'atterrissage à Marrakech.", cta: "Voir les arrivées" },
        { icon: 'plane-takeoff', key: 'departures', title: "Départs en direct", text: "À quelle heure arriver, enregistrement et contrôles.", cta: "Voir les départs" },
        { icon: 'van', key: 'bookTransfer', title: "Transfert depuis l'aéroport", text: "Chauffeur à votre nom, prix fixe par véhicule dès 27 €.", cta: "Réserver" },
        { icon: 'building', key: 'hotels', title: "Où dormir à Marrakech", text: "Médina, Guéliz, Hivernage ou près de l'aéroport.", cta: "Voir les hôtels" },
        { icon: 'alert', key: 'compensation', title: "Vol retardé ou annulé", text: "Jusqu'à 400 € d'indemnisation selon la distance.", cta: "Vérifier mes droits" },
      ],
    },
    body: `
<h2>Vols directs vers l'aéroport de Marrakech-Ménara depuis la France et l'Europe</h2>
<p>La France est le premier marché de l'aéroport de Marrakech, avec une vingtaine de villes reliées sans escale. Voici les principales lignes, avec les compagnies qui les opèrent et la durée moyenne du vol.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Départ</th><th>Compagnies</th><th>Durée</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Paris</strong> (CDG, Orly, Beauvais, Vatry)</td><td>Air France, easyJet, Royal Air Maroc, Transavia, TUI fly, Ryanair, Vueling (saison)</td><td class="num">≈ 3 h 15</td></tr>
<tr><td><strong>Lyon</strong></td><td>easyJet, Transavia, Royal Air Maroc, Volotea (saison)</td><td class="num">≈ 2 h 50</td></tr>
<tr><td><strong>Marseille</strong></td><td>Ryanair, Royal Air Maroc, Transavia (saison)</td><td class="num">≈ 2 h 35</td></tr>
<tr><td><strong>Toulouse</strong></td><td>Ryanair, easyJet, Royal Air Maroc</td><td class="num">≈ 2 h 25</td></tr>
<tr><td><strong>Nantes</strong></td><td>easyJet, Transavia, Royal Air Maroc, Volotea</td><td class="num">≈ 2 h 55</td></tr>
<tr><td><strong>Bordeaux</strong></td><td>easyJet, Transavia, Royal Air Maroc, Volotea (saison)</td><td class="num">≈ 2 h 40</td></tr>
<tr><td><strong>Bruxelles</strong> (Zaventem, Charleroi)</td><td>Ryanair, Royal Air Maroc, Transavia, TUI fly</td><td class="num">≈ 3 h 25</td></tr>
<tr><td><strong>Genève</strong></td><td>easyJet, Swiss</td><td class="num">≈ 3 h</td></tr>
</tbody>
</table>
</div>
<p>Au total, l'aéroport de Marrakech-Ménara est relié à 106 villes par 39 compagnies. La liste complète, avec les lignes saisonnières, se trouve sur notre page <a href="/destinations/">destinations au départ de Marrakech</a>.</p>

<h2>Quand réserver : saisons et prix des vols</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Période</th><th>Fréquentation</th><th>Prix des vols</th><th>Climat</th></tr></thead>
<tbody>
<tr><td><strong>Mars–mai</strong></td><td>Très forte</td><td>Élevés</td><td>Idéal, 22–28 °C</td></tr>
<tr><td><strong>Juin–août</strong></td><td>Moyenne</td><td>Modérés hors août</td><td>Très chaud, 38–45 °C</td></tr>
<tr class="row-highlight"><td><strong>Septembre–novembre</strong></td><td>Forte</td><td>Moyens</td><td>Excellent, 24–30 °C</td></tr>
<tr><td><strong>Décembre–février</strong></td><td>Pics aux fêtes</td><td>Bas hors fêtes</td><td>Doux le jour, froid la nuit</td></tr>
</tbody>
</table>
</div>
<p>La fenêtre la plus intéressante reste <strong>fin septembre à mi-novembre</strong> : le climat est le meilleur de l'année et les tarifs n'ont pas encore basculé dans la saison des fêtes. Janvier et février, hors vacances scolaires, offrent les prix les plus bas, avec des nuits sous les 8 °C, ce qui compte dans un riad peu chauffé. Réservez six à dix semaines à l'avance en temps normal, trois à quatre mois pour les vacances scolaires, Noël et Pâques.</p>

<h2>Le prix affiché n'est pas le prix payé</h2>
<p>Sur une low cost, l'écart entre l'annonce et le total se joue sur trois lignes. Le <strong>bagage en soute</strong> ajoute souvent 25 à 50 € par trajet, parfois plus que le billet lui-même. Le <strong>choix du siège</strong> est facturé dès que l'on veut être assis ensemble. Et le <strong>bagage cabine</strong> est payant au-delà d'un petit sac chez plusieurs transporteurs, avec des contrôles rigoureux au départ de Marrakech.</p>
<div class="callout">
<span class="callout-label">Le calcul à faire</span>
<p>Additionnez toujours l'aller et le retour avant de comparer. Un aller-retour low cost à 79 € devient 179 € avec deux bagages en soute et des sièges réservés : à ce niveau, une compagnie classique, bagage inclus et horaires de jour, redevient compétitive.</p>
</div>

<h2>Choisir son horaire d'arrivée</h2>
<p>Beaucoup de vols low cost atterrissent entre 20 h et minuit, au pic d'affluence de l'aéroport. À cette heure-là, la police des frontières est plus lente, le taxi passe au tarif de nuit et le bus 19 s'arrête vers 23 h 30. À prix proche, un vol qui atterrit en milieu de journée fait gagner une demi-heure à la sortie et quelques dizaines de dirhams sur le trajet. Si vous arrivez tard, réservez un <a href="/reserver-transfert/">transfert</a> : le chauffeur suit le vol et attend en cas de retard.</p>

<h2>Vols intérieurs et long-courriers depuis Marrakech</h2>
<p>Au Maroc, Royal Air Maroc relie Marrakech à <strong>Casablanca</strong>, <strong>Dakhla</strong> et <strong>Laâyoune</strong>, et Ryanair assure des vols directs vers <strong>Fès</strong>, <strong>Tanger</strong>, <strong>Tétouan</strong>, <strong>Oujda</strong> et <strong>Errachidia</strong>. Il n'existe pas de vol vers Agadir, Essaouira ou Ouarzazate : la route est plus simple (voir nos pages <a href="/blog/distance-essaouira-aeroport-marrakech/">Marrakech–Essaouira</a> et <a href="/blog/distance-agadir-aeroport-marrakech/">Marrakech–Agadir</a>).</p>
<p>Pour aller plus loin, l'aéroport de Marrakech-Ménara est relié à <strong>Montréal</strong> (Air Transat), et en saison à <strong>Atlanta</strong> (Delta) et <strong>New York-Newark</strong> (United). Qatar Airways vers <strong>Doha</strong> et Turkish Airlines vers <strong>Istanbul</strong> ouvrent les correspondances vers l'Asie et le Golfe.</p>
`,
    faqHeading: "Vols vers l'aéroport de Marrakech : questions fréquentes",
    faqs: [
      { q: "Quelles compagnies volent vers l'aéroport de Marrakech ?", a: "39 compagnies desservent l'aéroport de Marrakech-Ménara. Ryanair est la première avec plus de 50 lignes, devant easyJet, Transavia et Royal Air Maroc. On trouve aussi Air France, Jet2, Wizz Air, Volotea, Vueling, TUI, British Airways, Iberia, Turkish Airlines et Qatar Airways." },
      { q: "Quelles compagnies font Paris–Marrakech en vol direct ?", a: "Air France et easyJet depuis Charles-de-Gaulle, Royal Air Maroc depuis Charles-de-Gaulle et Orly, Transavia et TUI fly depuis Orly, Vueling en saison depuis Orly, et Ryanair depuis Beauvais et Vatry." },
      { q: "Combien de temps dure un vol Paris–Marrakech ?", a: "Environ 3 h 15 sans escale. Comptez environ 2 h 25 depuis Toulouse, 2 h 35 depuis Marseille, 2 h 50 depuis Lyon et 3 h 25 depuis Bruxelles." },
      { q: "Quelle est la meilleure période pour un vol pas cher vers Marrakech ?", a: "Janvier et février hors vacances scolaires sont les mois les moins chers. Pour le meilleur rapport entre prix et climat, visez fin septembre à mi-novembre, entre 24 et 30 °C." },
      { q: "Combien de temps à l'avance réserver son vol pour Marrakech ?", a: "Six à dix semaines à l'avance en temps normal. Pour les vacances scolaires, Noël et Pâques, visez trois à quatre mois : c'est là que les prix doublent le plus vite." },
      { q: "Les bagages sont-ils inclus sur les vols low cost vers Marrakech ?", a: "Non, en général seul un petit sac sous le siège est inclus. Le bagage en soute ajoute souvent 25 à 50 € par trajet : comparez toujours le prix total, aller et retour, bagages compris." },
      { q: "Y a-t-il des vols intérieurs depuis Marrakech ?", a: "Oui : Royal Air Maroc vers Casablanca, Dakhla et Laâyoune, et Ryanair vers Fès, Tanger, Tétouan, Oujda et Errachidia. Il n'y a pas de vol vers Agadir, Essaouira ou Ouarzazate." },
      { q: "Mon vol pour Marrakech est retardé : ai-je droit à une indemnisation ?", a: "Si le vol part de l'Union européenne, ou s'il est opéré par une compagnie européenne, et arrive avec plus de trois heures de retard, le règlement 261/2004 prévoit 400 € par passager pour un trajet de 1 500 à 3 500 km, comme Paris–Marrakech." },
    ],
    cta: {
      heading: "Billet réservé ? Organisez l'arrivée",
      text: "Un chauffeur qui suit votre vol, attend en cas de retard et vous dépose à la porte de médina la plus proche de votre riad, à prix fixe par véhicule.",
      label: "Réserver un transfert",
    },
  },
} satisfies PageContent;
