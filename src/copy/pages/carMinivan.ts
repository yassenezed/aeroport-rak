import type { PageContent } from '../types';

export default {
  fr: {
    title: 'Location de minivan 7 à 9 places à Marrakech',
    description: "Louer un monospace ou un minivan à l'aéroport de Marrakech : capacités réelles, bagages, prix, et comparaison avec un van privé avec chauffeur.",
    eyebrow: 'Marrakech Ménara · Grand format',
    h1: 'Louer un minivan à l\'aéroport de Marrakech',
    lede: "À cinq et plus, le problème n'est pas le nombre de sièges : c'est le coffre. Voici ce que contiennent réellement les monospaces disponibles au RAK, ce qu'ils coûtent, et quand un van avec chauffeur revient moins cher.",
    body: `
<h2>Sept places sur le papier, cinq valises dans le coffre</h2>
<p>C'est la déconvenue classique. Un monospace annoncé sept places — Dacia Lodgy, Dacia Jogger, Citroën Berlingo, Volkswagen Touran — ne dispose, <strong>une fois la troisième rangée dépliée</strong>, que d'un coffre résiduel minuscule. Concrètement : soit sept passagers avec des sacs souples sur les genoux, soit cinq passagers et de vraies valises.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Véhicule</th><th>Places</th><th>Valises, 3e rangée dépliée</th><th>Prix / jour</th></tr></thead>
<tbody>
<tr><td><strong>Dacia Lodgy / Jogger</strong></td><td class="num">7</td><td class="num">1–2</td><td class="num">55–75 €</td></tr>
<tr class="row-highlight"><td><strong>VW Touran / Citroën Berlingo</strong></td><td class="num">7</td><td class="num">2</td><td class="num">70–95 €</td></tr>
<tr><td><strong>Renault Trafic / VW Transporter</strong></td><td class="num">9</td><td class="num">6–8</td><td class="num">100–150 €</td></tr>
<tr><td><strong>Mercedes Sprinter</strong></td><td class="num">12–16</td><td class="num">12+</td><td class="num">150–220 €</td></tr>
</tbody>
</table>
</div>
<p>La règle simple : à partir de six personnes avec des bagages en soute, passez directement au van neuf places. La différence de prix est largement compensée par le fait de ne pas louer deux voitures.</p>

<h2>Conduire un grand véhicule à Marrakech</h2>
<p>Deux difficultés, à anticiper. Dans la <strong>médina et ses abords</strong>, les rues d'accès aux portes sont étroites, encombrées de deux-roues et de charrettes : un van de neuf places y manœuvre mal, et le stationnement à proximité d'une <em>bab</em> relève de la chance. Sur la <strong>route du Tichka</strong>, les lacets et les dépassements de camions demandent une conduite anticipative, surtout chargé.</p>
<p>En revanche, sur l'autoroute vers Casablanca ou Agadir et sur la route d'Essaouira, un van est parfaitement à l'aise et bien plus confortable qu'une compacte remplie à ras bord.</p>
<div class="callout">
<span class="callout-label">Sièges enfants</span>
<p>Ils ne sont jamais fournis d'office : commandez-les au moment de la réservation, en précisant l'âge et le poids de chaque enfant. Le stock de rehausseurs et de sièges bébé est limité en haute saison, et les récupérer sur place relève souvent de l'improvisation.</p>
</div>

<h2>Van avec chauffeur : faites le calcul complet</h2>
<p>Pour un groupe, la location autonome n'est pas toujours la moins chère. Additionnez la location du van, le carburant — un neuf places consomme sérieusement —, les péages, le stationnement et la caution immobilisée. Face à cela, un van privé avec chauffeur à la journée, pour l'Ourika ou Agafay, se situe dans le même ordre de prix, sans aucune de ces contraintes.</p>
<p>Le bon arbitrage, souvent : <strong>un transfert pour l'arrivée et le départ</strong>, à 27 € par véhicule jusqu'à sept passagers, et une location de van uniquement pour les journées où vous roulez réellement.</p>

<h2>Réserver tôt, vraiment</h2>
<p>Le parc de grands véhicules est le premier à manquer à Marrakech, bien avant les citadines. Aux vacances scolaires européennes, à Noël et au printemps, les neuf places partent plusieurs semaines à l'avance. Si vous voyagez à six ou plus entre décembre et avril, ne comptez pas sur une disponibilité de dernière minute.</p>
`,
    faqs: [
      {
        q: 'Combien de valises tiennent dans un monospace 7 places à Marrakech ?',
        a: "Une à deux seulement lorsque la troisième rangée est dépliée sur un Dacia Lodgy ou un Jogger, deux sur un Touran. À sept passagers avec des valises en soute, il faut passer à un van neuf places type Renault Trafic ou Volkswagen Transporter.",
      },
      {
        q: 'Quel est le prix d\'un minivan à l\'aéroport de Marrakech ?',
        a: "De 55 à 95 € par jour pour un monospace sept places, et 100 à 150 € pour un van neuf places avec un vrai volume de coffre. Un Sprinter de douze à seize places se situe entre 150 et 220 € par jour.",
      },
      {
        q: 'Peut-on conduire un van dans la médina de Marrakech ?',
        a: "Non, la médina est inaccessible à tout véhicule, et les rues qui mènent aux portes sont étroites et encombrées. Un van de neuf places y manœuvre difficilement et le stationnement près d'une porte est aléatoire : prévoyez un parking à Guéliz ou à l'hôtel.",
      },
      {
        q: 'Les sièges enfants sont-ils fournis avec un minivan ?',
        a: "Jamais d'office : ils se commandent à la réservation, en précisant l'âge et le poids de chaque enfant. Le stock est limité en haute saison, et compter sur une disponibilité au comptoir est risqué.",
      },
    ],
  },
} satisfies PageContent;
