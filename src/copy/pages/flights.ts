import type { PageContent } from '../types';

export default {
  fr: {
    title: 'Vols Marrakech (RAK) : compagnies, saisons et prix',
    description: "Vols vers l'aéroport de Marrakech : compagnies desservant le RAK, meilleures périodes pour réserver, bagages low cost et correspondances intérieures.",
    eyebrow: 'Marrakech Ménara · Vols',
    h1: 'Vols vers Marrakech',
    lede: "Le RAK est l'aéroport le plus desservi du Maroc après Casablanca, avec une forte densité de lignes européennes et une saisonnalité marquée. Comparez les dates, puis lisez ce qui change vraiment le prix final.",
    widget: 'flight-search',
    body: `
<h2>Qui vole vers Marrakech</h2>
<p>Trois familles de compagnies se partagent le trafic. Les <strong>low cost européennes</strong> — Ryanair, easyJet, Transavia, Vueling, Wizz Air — assurent l'essentiel des lignes directes depuis la France, l'Espagne, le Royaume-Uni, la Belgique, les Pays-Bas et l'Italie ; ce sont elles qui expliquent la concentration des arrivées en soirée. Les <strong>compagnies classiques</strong> — Royal Air Maroc, Air France, Iberia, Lufthansa, Brussels Airlines — proposent des horaires plus confortables et des bagages inclus, à des tarifs supérieurs. Enfin, <strong>Royal Air Maroc et Air Arabia Maroc</strong> relient Marrakech aux autres villes du pays et à plusieurs destinations africaines.</p>

<h2>Quand les prix montent, quand ils descendent</h2>
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
<p>La fenêtre la plus intéressante reste <strong>fin septembre à mi-novembre</strong> : le climat est le meilleur de l'année, la médina a retrouvé son rythme après l'été, et les tarifs n'ont pas encore basculé dans la saison des fêtes. Janvier et février, hors vacances scolaires, offrent les prix les plus bas — à condition d'accepter des nuits qui descendent sous les 8 °C, ce qui compte réellement dans un riad peu chauffé.</p>

<h2>Le prix affiché n'est pas le prix payé</h2>
<p>Sur une low cost, l'écart entre l'annonce et le total se joue sur trois lignes. Le <strong>bagage en soute</strong> ajoute souvent 25 à 50 € par trajet, soit parfois plus que le billet lui-même. L'<strong>attribution de siège</strong> est facturée dès que l'on voyage à plusieurs et que l'on veut être assis ensemble. Le <strong>bagage cabine</strong> lui-même est payant au-delà d'un petit sac chez plusieurs transporteurs, et les contrôles au départ de Marrakech sont appliqués avec rigueur.</p>
<div class="callout">
<span class="callout-label">Le calcul à faire</span>
<p>Additionnez toujours le retour avant de comparer. Un aller-retour low cost à 79 € devient 179 € avec deux bagages en soute et des sièges réservés — un niveau auquel une compagnie classique, bagage inclus et horaires diurnes, redevient compétitive.</p>
</div>

<h2>Correspondances vers le reste du Maroc</h2>
<p>Depuis Marrakech, les liaisons intérieures passent par Casablanca dans la plupart des cas. Pour Agadir, Essaouira ou Ouarzazate, la route est souvent plus rapide et bien moins chère que l'avion une fois les temps d'accès comptés. Pour Fès ou Tanger, le train ONCF au départ de la gare de Guéliz est une alternative confortable : il faut simplement prévoir le trajet entre l'aéroport et la gare, qu'aucune ligne ferroviaire ne relie.</p>
<p>Si votre vol arrive tard et que votre correspondance intérieure part tôt, mieux vaut dormir à Marrakech qu'à l'aéroport : les hôtels proches du RAK sont à dix minutes et coûtent moins cher qu'un billet modifié.</p>
`,
    faqs: [
      {
        q: 'Quelles compagnies desservent l\'aéroport de Marrakech ?',
        a: "Principalement Ryanair, easyJet, Transavia, Vueling et Wizz Air pour les liaisons low cost européennes, ainsi que Royal Air Maroc, Air France, Iberia, Lufthansa et Brussels Airlines sur les vols classiques. Royal Air Maroc et Air Arabia Maroc assurent les liaisons intérieures et africaines.",
      },
      {
        q: 'Quelle est la meilleure période pour prendre un vol vers Marrakech ?',
        a: "De fin septembre à mi-novembre : le climat est optimal, entre 24 et 30 °C, et les tarifs restent raisonnables avant la saison des fêtes. Janvier et février hors vacances scolaires offrent les prix les plus bas, avec des nuits fraîches.",
      },
      {
        q: 'Combien de temps dure un vol Paris–Marrakech ?',
        a: "Environ 3 h 20 en vol direct depuis Paris. Comptez 2 h 45 depuis Madrid, 3 h 30 depuis Bruxelles, 3 h 45 depuis Amsterdam et 3 h 30 depuis Londres.",
      },
      {
        q: 'Y a-t-il des vols directs entre Marrakech et les autres villes marocaines ?',
        a: "Peu, et la plupart transitent par Casablanca. Pour Agadir, Essaouira ou Ouarzazate, la route reste plus rapide et moins chère une fois les temps d'accès comptés. Pour Fès et Tanger, le train ONCF depuis la gare de Guéliz est une bonne alternative.",
      },
      {
        q: 'Faut-il réserver son vol longtemps à l\'avance pour Marrakech ?',
        a: "Six à dix semaines à l'avance sur les lignes low cost en saison normale. Pour les vacances scolaires, Noël et le printemps, visez plutôt trois à quatre mois : ce sont les périodes où les prix doublent le plus vite.",
      },
    ],
    cta: {
      heading: 'Comparez les vols vers Marrakech',
      text: "Toutes les compagnies desservant le RAK, sur les dates de votre choix, avec le détail des escales et des durées.",
      label: 'Rechercher un vol',
      href: '/vols/',
    },
  },
} satisfies PageContent;
