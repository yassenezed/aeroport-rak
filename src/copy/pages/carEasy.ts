import type { PageContent } from '../types';

export default {
  fr: {
    title: 'Voiture automatique à louer à Marrakech',
    description: "Louer une boîte automatique à l'aéroport de Marrakech : disponibilité réelle, surcoût, conduite en ville et conseils pour un premier volant au Maroc.",
    eyebrow: 'Marrakech Ménara · Conduite facile',
    h1: 'Location à conduite facile : boîte automatique à Marrakech',
    lede: "Au Maroc, la boîte manuelle reste la norme et l'automatique se réserve. Si vous n'avez jamais conduit ici, ce choix change plus de choses que vous ne l'imaginez — à commencer par votre première heure de circulation.",
    body: `
<h2>L'automatique au Maroc : minoritaire, donc à réserver</h2>
<p>La flotte marocaine est majoritairement manuelle. Les boîtes automatiques existent au RAK, mais elles se concentrent sur les catégories compacte et supérieure, et représentent une part limitée du parc. Deux conséquences : un <strong>surcoût de 15 à 30 %</strong> par rapport au même modèle en manuelle, et une disponibilité qui se raréfie dès que la saison monte.</p>
<p>Si l'automatique est une nécessité et non une préférence — permis boîte automatique, blessure, simple confort —, mentionnez-le <strong>explicitement à la réservation</strong> et faites confirmer la transmission par écrit. La mention « ou similaire » d'un contrat de location ne garantit jamais le type de boîte.</p>

<h2>Pourquoi cela compte vraiment ici</h2>
<p>La circulation de Marrakech n'est pas agressive, mais elle est <strong>dense, fluide et latérale</strong> : deux-roues qui remontent par la droite, charrettes, piétons qui traversent, priorités qui se négocient au regard plutôt qu'au panneau. Les grands ronds-points de Guéliz et l'avenue Mohammed VI fonctionnent à l'insertion permanente.</p>
<p>Dans ce contexte, ne pas avoir à gérer l'embrayage libère exactement l'attention dont vous avez besoin pour regarder autour de vous. C'est le seul vrai argument, et il suffit.</p>
<div class="callout">
<span class="callout-label">Première heure au volant</span>
<p>Sortez de l'aéroport en direction de Guéliz plutôt que vers la médina, et prenez trente minutes pour vous caler sur le rythme local avant de rejoindre votre hébergement. Évitez la première conduite entre 17 h et 19 h, et évitez-la de nuit : hors agglomération, des véhicules circulent sans éclairage.</p>
</div>

<h2>Ce que l'automatique ne résout pas</h2>
<ul>
<li><strong>Le stationnement en ville</strong>, confié à des gardiens informels en gilet : comptez 5 à 10 MAD, 20 MAD pour la nuit, et payez au retour, pas au départ.</li>
<li><strong>L'accès à la médina</strong>, impossible en voiture quelle que soit la boîte.</li>
<li><strong>Les radars</strong>, fixes et mobiles, actifs sur toutes les grandes routes.</li>
<li><strong>Le col du Tichka</strong>, où une automatique de petite cylindrée chauffe en montée prolongée et où le frein moteur se gère différemment en descente.</li>
</ul>

<h2>Bien choisir son véhicule</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Catégorie automatique</th><th>Prix / jour</th><th>Adaptée à</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Compacte (Clio, Polo, i20)</strong></td><td class="num">45–60 €</td><td>Ville, Essaouira, Ourika</td></tr>
<tr><td><strong>SUV compact (Duster, Sportage)</strong></td><td class="num">70–100 €</td><td>Atlas, pistes d'Agafay</td></tr>
<tr><td><strong>Berline</strong></td><td class="num">90–140 €</td><td>Longue distance, Casablanca</td></tr>
</tbody>
</table>
</div>
<p>Pour un premier volant au Maroc, la compacte automatique est le bon compromis : assez petite pour les rues de Guéliz, assez puissante pour la climatisation et les côtes, et beaucoup plus simple à garer qu'un SUV.</p>

<h2>Et si vous préférez ne pas conduire du tout</h2>
<p>C'est une option parfaitement raisonnable, et beaucoup de visiteurs la choisissent après une première journée. Un transfert pour l'arrivée et le départ, des taxis en ville à 15–50 MAD la course, et un véhicule avec chauffeur pour les excursions couvrent l'intégralité d'un séjour, souvent pour un coût total proche de celui d'une location — sans caution, sans état des lieux et sans stationnement.</p>
`,
    faqs: [
      {
        q: 'Trouve-t-on facilement des voitures automatiques à Marrakech ?',
        a: "Elles existent mais restent minoritaires, concentrées sur les catégories compacte et supérieure. Réservez à l'avance et faites confirmer la transmission par écrit : la mention « ou similaire » d'un contrat ne garantit jamais le type de boîte.",
      },
      {
        q: 'Combien coûte une boîte automatique en plus au Maroc ?',
        a: "Entre 15 et 30 % de plus que le même modèle en boîte manuelle. Une compacte automatique se situe autour de 45 à 60 € par jour, contre 35 à 45 € en manuelle.",
      },
      {
        q: 'La conduite est-elle difficile à Marrakech pour un débutant ?',
        a: "Elle est dense plutôt qu'agressive : deux-roues remontant par la droite, charrettes, piétons et priorités négociées au regard. Une boîte automatique libère l'attention nécessaire pour observer. Évitez la première conduite entre 17 h et 19 h, et de nuit hors agglomération.",
      },
      {
        q: 'Comment fonctionne le stationnement en ville à Marrakech ?',
        a: "Des gardiens informels en gilet surveillent les rues et les places : comptez 5 à 10 MAD pour quelques heures et environ 20 MAD pour la nuit, à régler au retour et non au départ. La médina, elle, reste inaccessible en voiture.",
      },
    ],
  },
} satisfies PageContent;
