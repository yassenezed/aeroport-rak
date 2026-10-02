import type { PageContent } from '../types';

export default {
  fr: {
    title: "Location voiture aéroport Marrakech-Ménara dès 25 €/jour",
    description: "Location de voiture à l'aéroport de Marrakech-Ménara : comparez les loueurs, prix dès 25 €/jour, caution, assurance et conseils pour l'Atlas et Essaouira.",
    eyebrow: "Location de voiture · comparateur",
    h1: "Location voiture aéroport Marrakech-Ménara",
    lede: "Comparez les loueurs présents dans le hall des arrivées et récupérez votre voiture dès l'atterrissage. Citadine pour Essaouira, SUV pour l'Atlas ou minivan pour la famille : voici les vrais prix, la caution à prévoir et les pièges du contrat.",
    highlights: [
      { icon: 'wallet', value: "Dès 25 €", label: "Par jour, citadine en basse saison" },
      { icon: 'plane-landing', value: "Hall des arrivées", label: "Comptoirs des loueurs à l'aéroport" },
      { icon: 'passport', value: "Permis national", label: "Accepté pour un séjour touristique" },
      { icon: 'shield-check', value: "Annulation gratuite", label: "Sur la plupart des offres" },
    ],
    widget: 'car-rental',
    widgetIntro: {
      heading: "Comparer les loueurs de l'aéroport Marrakech-Ménara",
      text: "Tapez « Marrakech » et choisissez « Marrakech Airport » comme agence de prise en charge, puis vos dates et horaires : les offres des loueurs internationaux et marocains s'affichent avec le prix total.",
    },
    cardSections: [
      {
        eyebrow: "Avant de réserver",
        heading: "4 réflexes pour payer moins cher",
        variant: 'compact',
        items: [
          { icon: 'clock', title: "Réservez 2 à 3 semaines avant", text: "Les petites catégories et les boîtes automatiques partent en premier pendant les vacances." },
          { icon: 'dollar-circle', title: "Choisissez « plein à plein »", text: "Vous rendez le réservoir plein et ne payez que le carburant consommé, sans frais de service." },
          { icon: 'sun', title: "Visez la basse saison", text: "Janvier hors fêtes, juin et novembre affichent les tarifs les plus bas de l'année." },
          { icon: 'shield-check', title: "Gardez l'annulation gratuite", text: "La plupart des offres s'annulent sans frais jusqu'à 48 h avant la prise en charge." },
        ],
      },
      {
        eyebrow: "Catégories",
        heading: "Quelle voiture louer pour votre séjour à Marrakech ?",
        intro: "Choisissez selon votre itinéraire, pas selon le prix d'appel.",
        variant: 'feature',
        items: [
          { icon: 'car', title: "Économique", text: "Dacia Sandero, Kia Picanto, Hyundai i10 : idéale pour Essaouira, l'Ourika et les routes goudronnées.", tags: ["Dès 25 €/jour", "4–5 places"], link: { key: 'carBudget', label: "Voir les offres" } },
          { icon: 'star', title: "Prestige", text: "Berlines et SUV premium pour voyager confortablement ou pour un séjour d'affaires.", tags: ["Dès 110 €/jour", "Caution élevée"], link: { key: 'carLuxury', label: "Découvrir" } },
          { icon: 'users', title: "Minivan 7 à 9 places", text: "Dacia Jogger, Renault Trafic : la famille et les bagages dans un seul véhicule.", tags: ["Dès 55 €/jour", "7–9 places"], link: { key: 'carMinivan', label: "Explorer" } },
          { icon: 'check', title: "Boîte automatique", text: "Plus rare et plus chère au Maroc, mais beaucoup plus reposante dans la circulation de Marrakech.", tags: ["Dès 45 €/jour", "À réserver tôt"], link: { key: 'carEasy', label: "Voir les véhicules" } },
        ],
      },
      {
        eyebrow: "Pourquoi l'aéroport",
        heading: "Pourquoi louer directement à l'aéroport Marrakech-Ménara",
        variant: 'feature',
        items: [
          { icon: 'plane-landing', title: "Voiture dès l'atterrissage", text: "Les comptoirs sont dans le hall des arrivées : vous partez vers l'Atlas ou la côte sans repasser par la ville." },
          { icon: 'map', title: "Sortie directe vers les routes", text: "L'aéroport est au sud-ouest de la ville, côté Agafay, avec un accès rapide aux routes d'Essaouira et de l'Atlas." },
          { icon: 'building', title: "Loueurs internationaux et locaux", text: "Grandes enseignes et agences marocaines se côtoient : le comparateur affiche tout sur une seule page." },
          { icon: 'luggage', title: "Retour simple avant le vol", text: "Rendez la voiture au parking de l'aéroport, juste avant l'enregistrement, sans taxi à trouver." },
        ],
      },
    ],
    body: `
<h2>Prix d'une location de voiture à Marrakech en 2026</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Catégorie</th><th>Prix / jour</th><th>Caution type</th><th>Pour</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Citadine (Sandero, Picanto)</strong></td><td class="num">25–35 €</td><td class="num">5 000–8 000 MAD</td><td>Couple, routes goudronnées</td></tr>
<tr><td><strong>Compacte (Clio, Polo)</strong></td><td class="num">35–45 €</td><td class="num">6 000–10 000 MAD</td><td>Confort, longues distances</td></tr>
<tr><td><strong>SUV (Duster, Sportage)</strong></td><td class="num">55–90 €</td><td class="num">10 000–15 000 MAD</td><td>Atlas, pistes d'Agafay</td></tr>
<tr><td><strong>Minivan 7 places</strong></td><td class="num">55–95 €</td><td class="num">8 000–15 000 MAD</td><td>Famille, groupe</td></tr>
</tbody>
</table>
</div>
<p>Ajoutez le carburant (le gazole tourne autour de 12 à 14 MAD le litre), les péages d'autoroute et, si vous le prenez, le rachat de franchise. Les prix montent nettement pendant les vacances scolaires européennes et l'été.</p>

<h2>Faut-il vraiment une voiture à Marrakech ?</h2>
<p><strong>Si vous restez en ville</strong>, non : la médina est piétonne, le stationnement est payant et confié à des gardiens, et un petit taxi coûte 15 à 50 MAD la course. <strong>Si vous sortez de la ville</strong>, oui : l'Ourika, Imlil, Agafay, Essaouira ou le col du Tichka se visitent bien mieux en autonomie.</p>
<div class="callout">
<span class="callout-label">La formule la plus rentable</span>
<p>Passez vos premiers jours en médina sans voiture, en rejoignant votre riad en <a href="/reserver-transfert/">transfert</a>, puis louez seulement pour les jours d'excursion. Vous économisez la location et le stationnement des jours où la voiture ne servirait pas.</p>
</div>

<h2>Road-trips au départ de l'aéroport Marrakech-Ménara</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Destination</th><th>Distance</th><th>Trajet</th><th>Voiture conseillée</th></tr></thead>
<tbody>
<tr><td><strong>Désert d'Agafay</strong></td><td class="num">≈ 35 km</td><td>40–50 min</td><td>Citadine (SUV pour les pistes)</td></tr>
<tr><td><strong>Vallée de l'Ourika</strong></td><td class="num">≈ 65 km</td><td>1 h 15–1 h 30</td><td>Citadine</td></tr>
<tr><td><strong>Imlil, Haut Atlas</strong></td><td class="num">≈ 65 km</td><td>1 h 15–1 h 30</td><td>Citadine ou SUV</td></tr>
<tr><td><strong>Cascades d'Ouzoud</strong></td><td class="num">≈ 170 km</td><td>2 h 45–3 h</td><td>Compacte</td></tr>
<tr><td><strong>Essaouira</strong></td><td class="num">≈ 185 km</td><td>2 h 30–3 h</td><td>Compacte</td></tr>
<tr><td><strong>Ouarzazate par le Tichka</strong></td><td class="num">≈ 200 km</td><td>4 h–4 h 30</td><td>Compacte ou SUV</td></tr>
</tbody>
</table>
</div>
<p>Toutes ces routes sont goudronnées. Le col du Tichka (2 260 m) est sinueux et chargé en camions : comptez large et évitez de le passer de nuit. Détails dans nos guides <a href="/blog/distance-essaouira-aeroport-marrakech/">Essaouira</a> et <a href="/blog/distance-ouarzazate-aeroport-marrakech/">Ouarzazate</a>.</p>

<h2>Les trois lignes du contrat qui comptent</h2>
<h3>La caution</h3>
<p>Entre 5 000 et 15 000 MAD selon la catégorie, bloquée sur une <strong>carte de crédit au nom du conducteur principal</strong>. Les cartes prépayées et beaucoup de cartes de débit sont refusées : c'est le premier motif de refus au comptoir. Vérifiez votre plafond avant de partir.</p>
<h3>La franchise</h3>
<p>Le contrat de base laisse une franchise élevée à votre charge en cas de dommage. Vous pouvez l'accepter, acheter le rachat de franchise du loueur (10 à 20 € par jour) ou prendre une assurance tierce moins chère, en avançant alors les frais avant remboursement.</p>
<h3>L'état des lieux</h3>
<p><strong>Photographiez et filmez la voiture sous tous les angles avant de partir</strong> : jantes, pare-brise, toit, intérieur, niveau de carburant. Faites noter chaque rayure sur le document, et refaites la même série au retour. Ces dix minutes évitent la plupart des litiges.</p>

<h2>Bon à savoir avant de louer</h2>
<div class="table-wrap">
<table class="data">
<tbody>
<tr><td><strong>Âge minimum</strong></td><td>21 ans en général, 23 à 25 ans pour le premium ; frais « jeune conducteur » possibles</td></tr>
<tr><td><strong>Permis</strong></td><td>Permis national valide depuis au moins 1 à 2 ans selon le loueur</td></tr>
<tr><td><strong>Caution</strong></td><td>Carte de crédit au nom du conducteur, obligatoire</td></tr>
<tr><td><strong>Kilométrage</strong></td><td>Souvent illimité ; vérifiez sur les offres très bon marché</td></tr>
<tr><td><strong>Limites de vitesse</strong></td><td>60 km/h en ville, 100 km/h sur route, 120 km/h sur autoroute ; radars nombreux</td></tr>
</tbody>
</table>
</div>
<p>Gardez permis, contrat de location et passeport à portée de main : la gendarmerie contrôle souvent sur les routes interurbaines, et les amendes se règlent sur place contre reçu. Pour aller plus loin : notre guide <a href="/blog/location-voiture-aeroport-marrakech/">louer une voiture à l'aéroport de Marrakech</a> et la <a href="/blog/location-voiture-longue-duree-marrakech/">location longue durée</a>.</p>
`,
    faqHeading: "Location de voiture à l'aéroport Marrakech-Ménara : questions fréquentes",
    faqs: [
      { q: "Combien coûte une location de voiture à l'aéroport de Marrakech ?", a: "À partir de 25 à 35 € par jour pour une citadine, 35 à 45 € pour une compacte, et 55 à 90 € pour un SUV. Ajoutez le carburant, les péages et l'éventuel rachat de franchise. Les prix montent pendant les vacances scolaires et l'été." },
      { q: "Quels loueurs sont présents à l'aéroport Marrakech-Ménara ?", a: "Les grandes enseignes internationales et de nombreuses agences marocaines ont un comptoir ou un point de rendez-vous dans le hall des arrivées. Le comparateur de cette page affiche leurs offres côte à côte avec le prix total." },
      { q: "Quelle caution faut-il prévoir ?", a: "Entre 5 000 et 15 000 MAD selon la catégorie, bloqués sur une carte de crédit au nom du conducteur principal. Les cartes prépayées et beaucoup de cartes de débit sont refusées : vérifiez votre plafond avant le départ." },
      { q: "Le permis français suffit-il pour conduire au Maroc ?", a: "Oui, le permis national suffit pour un séjour touristique, à condition de le détenir depuis au moins 1 à 2 ans selon le loueur. Gardez-le avec le contrat et le passeport : les contrôles sont fréquents sur les routes." },
      { q: "Faut-il prendre le rachat de franchise ?", a: "Il réduit ou supprime la somme à payer en cas de dommage, pour 10 à 20 € par jour chez le loueur. Une assurance tierce coûte moins cher, mais vous avancez les frais avant d'être remboursé. Sans aucune option, la franchise reste à votre charge." },
      { q: "Faut-il un 4x4 pour l'Atlas ?", a: "Non pour l'Ourika, Imlil ou le col du Tichka, entièrement goudronnés. Un SUV n'est utile que pour les pistes d'Agafay ou les vallées reculées, où la garde au sol compte plus que la transmission." },
      { q: "Quelles sont les limites de vitesse au Maroc ?", a: "60 km/h en ville, 100 km/h sur route et 120 km/h sur autoroute. Les radars fixes et mobiles sont nombreux, et les amendes se paient sur place contre reçu." },
      { q: "Quel est le moment le moins cher pour louer ?", a: "Janvier hors fêtes, juin et novembre. Les vacances scolaires européennes, Pâques et l'été font grimper les prix : réservez 2 à 3 semaines à l'avance, en gardant l'annulation gratuite." },
      { q: "Peut-on annuler sa réservation sans frais ?", a: "Oui sur la plupart des offres, jusqu'à 48 h avant la prise en charge. Les conditions exactes sont affichées avant le paiement : vérifiez-les, surtout sur les tarifs promotionnels." },
      { q: "Faut-il louer à l'aéroport ou en ville ?", a: "À l'aéroport si vous partez tout de suite en road-trip. Si vous commencez par quelques jours en médina, prenez un transfert jusqu'au riad et louez seulement pour les jours d'excursion." },
    ],
    cta: {
      heading: "Prêt à explorer l'Atlas et la côte ?",
      text: "Comparez les loueurs de l'aéroport et réservez en quelques clics, annulation gratuite sur la plupart des offres.",
      label: "Comparer les prix",
      href: "#reserver",
      secondary: { label: "Préférer un transfert", key: 'bookTransfer' },
    },
  },
} satisfies PageContent;
