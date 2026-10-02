import type { PageContent } from '../types';

export default {
  fr: {
    title: "Location voiture de luxe aéroport Marrakech-Ménara",
    description: "Louez une berline premium, un SUV ou un cabriolet à l'aéroport de Marrakech-Ménara : modèles, prix dès 1 200 DH/jour, caution et option avec chauffeur.",
    eyebrow: "Location prestige · berlines et SUV",
    h1: "Location voiture de prestige aéroport Marrakech-Ménara",
    lede: "Marrakech est l'une des rares villes du Maroc où le haut de gamme automobile se loue vraiment. Voici les modèles disponibles, leurs prix, les conditions plus strictes à prévoir, et la vraie question : conduire soi-même ou être conduit ?",
    highlights: [
      { icon: 'star', value: "Dès 1 200 DH", label: "Par jour, berline premium" },
      { icon: 'check', value: "Automatique", label: "Sur la quasi-totalité des modèles" },
      { icon: 'passport', value: "25 ans", label: "Âge minimum le plus courant" },
      { icon: 'shield-check', value: "Sans franchise", label: "Option tous risques disponible" },
    ],
    widget: 'car-rental',
    widgetIntro: {
      heading: "Réserver une voiture de prestige à l'aéroport Marrakech-Ménara",
      text: "Tapez « Marrakech » et choisissez « Marrakech Airport », puis vos dates : filtrez ensuite les résultats sur les catégories premium, SUV ou luxe.",
    },
    cardSections: [
      {
        eyebrow: "Notre sélection",
        heading: "Les voitures de prestige disponibles à Marrakech",
        variant: 'feature',
        items: [
          { icon: 'star', title: "Berlines premium", text: "Mercedes Classe C et E, BMW Série 3 et 5, Audi A4 et A6 : confort et discrétion pour les déplacements professionnels.", tags: ["1 200–1 950 DH/jour", "Cuir, GPS"] },
          { icon: 'map', title: "SUV premium", text: "Range Rover, Porsche Cayenne, Mercedes GLE : les plus demandés, à l'aise sur les pistes d'Agafay comme sur le Tichka.", tags: ["1 600–3 000 DH/jour", "Grand coffre"] },
          { icon: 'sun', title: "Cabriolets et sportives", text: "Ford Mustang en tête, louées surtout à la journée pour une occasion ou une route panoramique.", tags: ["2 200–4 300 DH/jour", "À la journée"] },
          { icon: 'users', title: "Van VIP avec chauffeur", text: "Mercedes Classe V avec chauffeur : la solution des groupes et des déplacements d'affaires, sans caution.", tags: ["1 600–2 700 DH/jour", "Chauffeur inclus"] },
        ],
      },
      {
        eyebrow: "Avantages",
        heading: "Pourquoi louer une voiture de prestige à Marrakech",
        variant: 'feature',
        items: [
          { icon: 'map', title: "Confort sur longue distance", text: "Sièges cuir, suspension et insonorisation font la différence sur la route d'Essaouira ou de Ouarzazate." },
          { icon: 'shield', title: "Sécurité avancée", text: "Freinage d'urgence, maintien de voie, régulateur adaptatif : un vrai plus pour voyager en famille." },
          { icon: 'check', title: "Boîte automatique de série", text: "Plus de stress dans la circulation de Marrakech : presque tous les modèles premium sont automatiques." },
          { icon: 'luggage', title: "Accueil sur mesure", text: "Remise des clés à l'aéroport ou livraison à votre hôtel selon le loueur." },
        ],
      },
      {
        eyebrow: "Comparer",
        heading: "Prestige, économique ou minivan ?",
        variant: 'feature',
        items: [
          { icon: 'car', title: "Économique", text: "Citadines pour un budget serré, parfaites pour Essaouira et l'Ourika.", tags: ["Dès 270 DH/jour"], link: { key: 'carBudget', label: "Voir les économiques" } },
          { icon: 'users', title: "Minivan 7 à 9 places", text: "Pour les familles et les groupes, avec de la place pour les valises.", tags: ["Dès 600 DH/jour"], link: { key: 'carMinivan', label: "Voir les minivans" } },
          { icon: 'check', title: "Boîte automatique", text: "Compactes et SUV automatiques à prix plus doux que le prestige.", tags: ["Dès 490 DH/jour"], link: { key: 'carEasy', label: "Voir les automatiques" } },
        ],
      },
    ],
    body: `
<h2>Prix et caution des voitures de prestige à l'aéroport Marrakech-Ménara</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Catégorie</th><th>Prix / jour</th><th>Caution type</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Berline premium</strong></td><td class="num">≈ 1 200–1 950 DH (110–180 €)</td><td class="num">20 000–30 000 DH</td></tr>
<tr><td><strong>SUV premium</strong></td><td class="num">≈ 1 600–3 000 DH (150–280 €)</td><td class="num">30 000–50 000 DH</td></tr>
<tr><td><strong>Cabriolet / sportive</strong></td><td class="num">≈ 2 200–4 300 DH (200–400 €)</td><td class="num">40 000–60 000 DH</td></tr>
<tr><td><strong>Van VIP avec chauffeur</strong></td><td class="num">≈ 1 600–2 700 DH (150–250 €)</td><td>aucune</td></tr>
</tbody>
</table>
</div>
<p class="small">Prix indicatifs en dirhams, convertis au taux approximatif de 1 € ≈ 10,8 DH. Le comparateur affiche le prix exact de chaque offre.</p>

<h2>Des conditions plus strictes</h2>
<p>Sur ces catégories, comptez un <strong>âge minimum de 25 à 30 ans</strong>, un permis détenu depuis <strong>3 à 5 ans</strong>, et une caution qui dépasse souvent le plafond habituel d'une carte. <strong>Prévenez votre banque avant le départ</strong> pour relever temporairement le plafond d'autorisation : c'est le premier motif de refus au comptoir, et il ne se règle pas sur place. Certains loueurs limitent aussi le kilométrage ou les pistes : vérifiez-le si vous partez vers le sud.</p>
<p>Pour un véhicule de cette valeur, l'<strong>assurance sans franchise</strong> est vivement conseillée : la moindre jante marquée se chiffre en milliers de dirhams. Photographiez la voiture dans le détail au départ et au retour.</p>

<h2>Conduire soi-même ou être conduit ?</h2>
<p>Un SUV premium à ≈ 2 200 DH (200 €) par jour, immobilisé devant un riad parce que la médina est piétonne, coûte autant qu'un <strong>chauffeur privé à la journée</strong> qui vous attend, vous dépose et gère le stationnement. Le chauffeur s'impose pour les longues routes vers Ouarzazate ou Essaouira, les journées d'affaires avec plusieurs rendez-vous, et les séjours en famille où personne ne veut conduire après une journée dans l'Atlas.</p>
<div class="callout">
<span class="callout-label">Réservez tôt et faites confirmer le modèle</span>
<p>Le parc premium est limité et tourne entre plusieurs agences. Au printemps, en fin d'année et lors des grands événements, réservez plusieurs semaines à l'avance et faites confirmer <strong>le modèle exact</strong> par écrit, pas seulement la catégorie.</p>
</div>

<h2>Prise en charge et livraison</h2>
<p><strong>À l'aéroport</strong> : remise des clés au comptoir ou au parking, parfois directement au terminal pour les modèles de luxe. <strong>À l'hôtel</strong> : beaucoup de loueurs premium livrent à votre hôtel ou à l'entrée de la médina ; arrivez alors en <a href="/reserver-transfert/">transfert</a> et recevez la voiture le lendemain. <strong>En aller simple</strong> : retour possible à Essaouira, Fès ou Tanger selon le loueur, avec un supplément.</p>
`,
    faqHeading: "Location de prestige à l'aéroport Marrakech-Ménara : questions fréquentes",
    faqs: [
      { q: "Combien coûte une voiture de luxe à l'aéroport de Marrakech ?", a: "≈ 1 200 à 1 950 DH (110 à 180 €) par jour pour une berline premium, ≈ 1 600 à 3 000 DH (150 à 280 €) pour un SUV type Range Rover ou Cayenne, et ≈ 2 200 à 4 300 DH (200 à 400 €) pour un cabriolet ou une sportive. Les cautions vont de 20 000 à 60 000 DH selon le modèle." },
      { q: "Quels modèles de prestige peut-on louer à Marrakech ?", a: "Mercedes Classe C, E et GLE, BMW Série 3 et 5, Audi A4 et A6, Range Rover, Porsche Cayenne et quelques cabriolets comme la Ford Mustang, selon les disponibilités des loueurs." },
      { q: "Quel âge faut-il pour louer une voiture de prestige ?", a: "25 à 30 ans selon le modèle, avec un permis détenu depuis 3 à 5 ans. Les sportives et les plus gros SUV ont les conditions les plus strictes." },
      { q: "L'assurance tous risques est-elle incluse ?", a: "L'assurance de base l'est, avec une franchise élevée. Pour un véhicule de cette valeur, l'option sans franchise est fortement recommandée : elle couvre dommages, vol et bris de glace." },
      { q: "Peut-on se faire livrer la voiture à l'hôtel ?", a: "Oui, beaucoup de loueurs premium livrent à l'hôtel ou à l'entrée de la médina, gratuitement ou contre supplément. Précisez-le à la réservation." },
      { q: "Les voitures de prestige sont-elles automatiques ?", a: "Presque toutes. Faites tout de même confirmer la transmission et le modèle exact par écrit, car la mention « ou similaire » ne garantit rien." },
      { q: "Un SUV premium est-il utile pour un road-trip au Maroc ?", a: "Pour Agafay, les pistes du sud ou une longue route vers Ouarzazate, oui : confort, garde au sol et grand coffre. Pour un séjour urbain, un chauffeur privé est souvent plus pratique." },
      { q: "Pourquoi ma carte peut-elle être refusée au comptoir ?", a: "Parce que la caution, souvent 20 000 à 60 000 DH, dépasse le plafond d'autorisation habituel. Demandez à votre banque de le relever temporairement avant de partir." },
    ],
    cta: {
      heading: "Prêt à vivre Marrakech en première classe ?",
      text: "Comparez les berlines et SUV premium des loueurs de l'aéroport et réservez en quelques clics.",
      label: "Comparer les prix",
      href: "#reserver",
      secondary: { label: "Voir toutes les catégories", key: 'carRental' },
    },
  },
} satisfies PageContent;
