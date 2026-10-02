import type { PageContent } from '../types';

export default {
  fr: {
    title: "Voiture automatique aéroport Marrakech-Ménara dès 45 €",
    description: "Location de voiture automatique à l'aéroport de Marrakech-Ménara dès 45 €/jour : disponibilité, surcoût, modèles et conseils pour conduire au Maroc.",
    eyebrow: "Conduite facile · boîte automatique",
    h1: "Location voiture automatique aéroport Marrakech-Ménara",
    lede: "Au Maroc, la boîte manuelle reste la norme et l'automatique se réserve. Si vous n'avez jamais conduit ici, ce choix change beaucoup de choses, à commencer par votre première heure dans la circulation de Marrakech.",
    highlights: [
      { icon: 'wallet', value: "Dès 45 €", label: "Par jour, compacte automatique" },
      { icon: 'check', value: "Zéro embrayage", label: "Deux pédales, pied droit seulement" },
      { icon: 'dollar-circle', value: "+15 à 30 %", label: "Surcoût par rapport à la manuelle" },
      { icon: 'passport', value: "Permis B", label: "Aucun permis spécial requis" },
    ],
    widget: 'car-rental',
    widgetIntro: {
      heading: "Réserver une voiture automatique à l'aéroport Marrakech-Ménara",
      text: "Tapez « Marrakech » et choisissez « Marrakech Airport », puis vos dates : filtrez ensuite les résultats sur la transmission automatique.",
    },
    cardSections: [
      {
        eyebrow: "Avantages",
        heading: "Pourquoi choisir une boîte automatique à Marrakech",
        intro: "Dans une circulation dense et imprévisible, l'automatique n'est pas un luxe.",
        variant: 'feature',
        items: [
          { icon: 'check', title: "Conduite sans effort", text: "Pas d'embrayage ni de vitesses : vous gardez toute votre attention pour la route." },
          { icon: 'users', title: "Adaptée à la circulation", text: "Deux-roues qui remontent, charrettes, piétons, ronds-points de Guéliz : impossible de caler, moins de stress." },
          { icon: 'map', title: "Confort en montagne et sur route", text: "Montées vers Imlil et longues lignes droites vers Essaouira se font sans fatigue." },
          { icon: 'star', title: "Rassurante pour un premier séjour", text: "Première fois au Maroc ou conducteur peu habitué ? L'automatique simplifie tout." },
        ],
      },
      {
        eyebrow: "La gamme",
        heading: "Les voitures automatiques disponibles à Marrakech",
        variant: 'feature',
        items: [
          { icon: 'car', title: "Compactes automatiques", text: "Renault Clio, Volkswagen Polo, Hyundai i20 : faciles à garer, idéales pour la ville, Essaouira et l'Ourika.", tags: ["45–60 €/jour"] },
          { icon: 'map', title: "SUV automatiques", text: "Dacia Duster, Kia Sportage : garde au sol et confort pour l'Atlas et les pistes d'Agafay.", tags: ["70–100 €/jour"] },
          { icon: 'star', title: "Berlines automatiques", text: "Confort et espace pour les longues distances et les voyages d'affaires.", tags: ["90–140 €/jour"] },
        ],
      },
      {
        eyebrow: "Conseils",
        heading: "Première conduite en automatique : 4 conseils",
        variant: 'compact',
        items: [
          { icon: 'info', title: "Pied droit uniquement", text: "Accélérez et freinez du même pied ; ne posez jamais le gauche sur le frein." },
          { icon: 'lock', title: "Freinez avant de changer", text: "Gardez le frein enfoncé pour passer de P à D ou R." },
          { icon: 'map', title: "Gérez les descentes", text: "Sur le Tichka, utilisez le mode manuel ou L pour retenir la voiture plutôt que les freins." },
          { icon: 'clock', title: "Réservez tôt", text: "Le stock d'automatiques est limité : 2 à 3 semaines avant, surtout en haute saison." },
        ],
      },
      {
        eyebrow: "Comparer",
        heading: "Automatique, économique, prestige ou minivan ?",
        variant: 'feature',
        items: [
          { icon: 'car', title: "Économique", text: "Citadines manuelles au meilleur prix, pour les conducteurs à l'aise.", tags: ["Dès 25 €/jour"], link: { key: 'carBudget', label: "Voir les économiques" } },
          { icon: 'star', title: "Prestige", text: "Berlines et SUV premium, automatiques de série.", tags: ["Dès 110 €/jour"], link: { key: 'carLuxury', label: "Voir le prestige" } },
          { icon: 'users', title: "Minivan 7 à 9 places", text: "Pour les groupes ; peu d'automatiques, à réserver très tôt.", tags: ["Dès 55 €/jour"], link: { key: 'carMinivan', label: "Voir les minivans" } },
        ],
      },
    ],
    body: `
<h2>L'automatique au Maroc : minoritaire, donc à réserver</h2>
<p>La flotte marocaine est majoritairement manuelle. Les automatiques existent à l'aéroport de Marrakech, mais surtout en catégorie compacte et au-dessus. Deux conséquences : un <strong>surcoût de 15 à 30 %</strong> par rapport au même modèle en manuelle, et une disponibilité qui se raréfie dès que la saison monte. Si l'automatique est une nécessité (permis boîte automatique, blessure), dites-le à la réservation et faites <strong>confirmer la transmission par écrit</strong> : la mention « ou similaire » ne garantit jamais le type de boîte.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Catégorie automatique</th><th>Prix / jour</th><th>Adaptée à</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Compacte (Clio, Polo, i20)</strong></td><td class="num">45–60 €</td><td>Ville, Essaouira, Ourika</td></tr>
<tr><td><strong>SUV compact (Duster, Sportage)</strong></td><td class="num">70–100 €</td><td>Atlas, pistes d'Agafay</td></tr>
<tr><td><strong>Berline</strong></td><td class="num">90–140 €</td><td>Longues distances, affaires</td></tr>
</tbody>
</table>
</div>

<h2>Première heure au volant depuis l'aéroport Marrakech-Ménara</h2>
<p>Sortez de l'aéroport vers Guéliz plutôt que vers la médina, et prenez trente minutes pour vous caler sur le rythme local avant de rejoindre votre hébergement. Évitez la première conduite entre 17 h et 19 h, et de nuit : hors agglomération, certains véhicules roulent sans éclairage.</p>
<h3>Le guide express P-R-N-D</h3>
<ul>
<li><strong>P</strong> (parking) : stationnement, pour démarrer et couper le moteur.</li>
<li><strong>R</strong> (marche arrière) : toujours le frein enfoncé avant de la passer.</li>
<li><strong>N</strong> (point mort) : rarement utile.</li>
<li><strong>D</strong> (drive) : la position normale pour rouler.</li>
</ul>

<h2>Ce que l'automatique ne résout pas</h2>
<p>Le <strong>stationnement en ville</strong>, géré par des gardiens en gilet (5 à 10 MAD, 20 MAD la nuit, à payer au retour) ; l'<strong>accès à la médina</strong>, impossible en voiture ; les <strong>radars</strong>, fixes et mobiles ; et le <strong>col du Tichka</strong>, où une petite automatique chauffe en longue montée. Si vous préférez ne pas conduire du tout, un <a href="/reserver-transfert/">transfert</a> à l'arrivée, des taxis en ville et un chauffeur pour les excursions couvrent tout le séjour, sans caution ni état des lieux.</p>
`,
    faqHeading: "Voiture automatique à l'aéroport Marrakech-Ménara : questions fréquentes",
    faqs: [
      { q: "Combien coûte une voiture automatique à l'aéroport de Marrakech ?", a: "45 à 60 € par jour pour une compacte, 70 à 100 € pour un SUV et 90 à 140 € pour une berline. Comptez 15 à 30 % de plus que le même modèle en boîte manuelle." },
      { q: "Trouve-t-on facilement des automatiques à Marrakech ?", a: "Elles existent mais restent minoritaires, surtout en compacte et au-dessus. Réservez 2 à 3 semaines à l'avance et faites confirmer la transmission par écrit." },
      { q: "Faut-il un permis spécial pour une automatique ?", a: "Non, le permis B suffit. Si votre permis est limité à la boîte automatique, signalez-le : le loueur doit alors vous garantir une automatique." },
      { q: "Une automatique consomme-t-elle plus ?", a: "Un peu sur les anciens modèles, presque pas sur les récents. La différence pèse beaucoup moins que le surcoût de location." },
      { q: "C'est ma première fois en automatique, est-ce difficile ?", a: "Non : pied droit uniquement, frein enfoncé pour passer de P à D ou R, et quelques minutes sur le parking suffisent pour prendre ses repères." },
      { q: "Peut-on faire un road-trip en automatique au Maroc ?", a: "Oui. Pour l'Atlas, préférez un SUV ou une compacte récente, et utilisez le mode manuel ou L dans les longues descentes du Tichka." },
      { q: "L'assurance est-elle différente pour une automatique ?", a: "Non, les mêmes règles s'appliquent : franchise de base, rachat de franchise en option et caution sur carte de crédit au nom du conducteur." },
      { q: "Et si je ne veux pas conduire du tout ?", a: "Un transfert pour l'arrivée et le départ, des taxis en ville à 15–50 MAD la course et un chauffeur pour les excursions couvrent tout le séjour, souvent pour un coût proche d'une location." },
    ],
    cta: {
      heading: "Prêt à conduire sans stress à Marrakech ?",
      text: "Comparez les voitures automatiques des loueurs de l'aéroport et réservez en quelques clics.",
      label: "Comparer les prix",
      href: "#reserver",
      secondary: { label: "Voir toutes les catégories", key: 'carRental' },
    },
  },
} satisfies PageContent;
