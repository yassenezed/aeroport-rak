import type { PageContent } from '../types';

export default {
  fr: {
    title: "Location voiture pas chère aéroport Marrakech-Ménara",
    description: "Location de voiture économique à l'aéroport de Marrakech-Ménara dès 270 DH/jour : Sandero, Picanto, i10. Comparez les loueurs et évitez les frais cachés.",
    eyebrow: "Location économique · dès 270 DH/jour",
    h1: "Location voiture économique aéroport Marrakech-Ménara",
    lede: "La citadine est la catégorie la plus louée à Marrakech, et la bonne pour Essaouira, l'Ourika ou Imlil. Voici ce que coûte vraiment une petite voiture au départ de l'aéroport, et comment payer peu sans mauvaise surprise au comptoir.",
    highlights: [
      { icon: 'wallet', value: "Dès 270 DH", label: "Par jour, en basse saison" },
      { icon: 'car', value: "5–6 L/100 km", label: "Consommation moyenne d'une citadine" },
      { icon: 'map-pin', value: "Facile à garer", label: "Taille idéale autour de la médina" },
      { icon: 'shield-check', value: "Annulation gratuite", label: "Jusqu'à 48 h avant, sur la plupart des offres" },
    ],
    widget: 'car-rental',
    widgetIntro: {
      heading: "Réserver une voiture économique à l'aéroport Marrakech-Ménara",
      text: "Tapez « Marrakech » et choisissez « Marrakech Airport », puis vos dates : triez ensuite les résultats par prix pour afficher les citadines en premier.",
    },
    cardSections: [
      {
        eyebrow: "Avantages",
        heading: "Pourquoi choisir une citadine à Marrakech",
        intro: "La catégorie la plus réservée, et pour de bonnes raisons.",
        variant: 'feature',
        items: [
          { icon: 'wallet', title: "Le prix le plus bas", text: "≈ 270 à 380 DH (25 à 35 €) par jour en saison normale, moins à la semaine : de quoi louer plusieurs jours pour le prix d'une excursion organisée." },
          { icon: 'sun', title: "Peu de carburant", text: "Une citadine consomme 5 à 6 L/100 km : l'aller-retour vers Essaouira reste raisonnable, même avec le gazole à 12–14 DH." },
          { icon: 'map-pin', title: "Facile à garer", text: "Près des portes de la médina et à Guéliz, les places sont étroites : une petite voiture passe là où un SUV renonce." },
          { icon: 'map', title: "Suffisante pour l'Atlas", text: "L'Ourika, Imlil et le col du Tichka sont goudronnés : une citadine y monte sans difficulté, à deux ou trois passagers." },
        ],
      },
      {
        eyebrow: "Modèles",
        heading: "Les citadines les plus louées à Marrakech",
        variant: 'feature',
        items: [
          { icon: 'car', title: "Dacia Sandero", text: "Le modèle phare au Maroc : 5 places, bon coffre pour sa taille, robuste sur les routes de montagne.", tags: ["270–350 DH/jour", "≈ 5,8 L/100 km"] },
          { icon: 'car', title: "Kia Picanto", text: "Très compacte et maniable, idéale à deux pour la ville et les routes côtières.", tags: ["270–320 DH/jour", "≈ 5 L/100 km"] },
          { icon: 'car', title: "Hyundai i10", text: "4 places, climatisation efficace, la plus facile à garer autour de la médina.", tags: ["270–320 DH/jour", "≈ 4,8 L/100 km"] },
          { icon: 'car', title: "Renault Clio", text: "Un cran au-dessus en confort et en reprise, à privilégier à quatre ou pour Ouarzazate.", tags: ["350–430 DH/jour", "≈ 5,6 L/100 km"] },
        ],
      },
      {
        eyebrow: "Astuces",
        heading: "4 astuces pour payer moins cher",
        variant: 'compact',
        items: [
          { icon: 'clock', title: "Réservez tôt", text: "Les prix en ligne 2 à 3 semaines avant sont plus bas qu'au comptoir en haute saison." },
          { icon: 'sun', title: "Visez la basse saison", text: "Janvier hors fêtes, juin et novembre ; évitez les vacances scolaires et l'Aïd." },
          { icon: 'dollar-circle', title: "Plein à plein", text: "Rendez le réservoir au niveau du départ et ne payez que ce que vous consommez." },
          { icon: 'check', title: "Louez à la semaine", text: "Le prix par jour baisse nettement au-delà de cinq jours de location." },
        ],
      },
      {
        eyebrow: "Comparer",
        heading: "Citadine, prestige, minivan ou automatique ?",
        variant: 'feature',
        items: [
          { icon: 'star', title: "Prestige et SUV premium", text: "Berlines et SUV haut de gamme pour le confort sur longue distance.", tags: ["Dès 1 200 DH/jour"], link: { key: 'carLuxury', label: "Voir le prestige" } },
          { icon: 'users', title: "Minivan 7 à 9 places", text: "Familles et groupes : tout le monde et les valises dans un seul véhicule.", tags: ["Dès 600 DH/jour"], link: { key: 'carMinivan', label: "Voir les minivans" } },
          { icon: 'check', title: "Boîte automatique", text: "Plus reposante dans la circulation de Marrakech, à réserver tôt.", tags: ["Dès 490 DH/jour"], link: { key: 'carEasy', label: "Voir les automatiques" } },
        ],
      },
    ],
    steps: {
      heading: "Récupérer sa voiture à l'aéroport en 3 étapes",
      items: [
        { icon: 'clipboard', title: "Réservez avant le vol", text: "Comparez les offres ci-dessus et réservez : vous recevez un bon de confirmation par e-mail." },
        { icon: 'plane-landing', title: "Allez au comptoir", text: "Après la police et les bagages, rejoignez le comptoir ou le point de rendez-vous du loueur dans le hall des arrivées." },
        { icon: 'shield-check', title: "Contrôlez puis partez", text: "Faites le tour de la voiture avec l'agent, photographiez chaque défaut, vérifiez le carburant, et prenez la route." },
      ],
    },
    body: `
<h2>Le vrai prix d'une voiture pas chère à l'aéroport Marrakech-Ménara</h2>
<p>Les annonces à ≈ 130 DH (12 €) par jour existent, mais elles sont incomplètes. Voici les lignes du contrat qui font monter la note :</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Ligne du contrat</th><th>Ce qui est annoncé</th><th>Ce que vous payez</th></tr></thead>
<tbody>
<tr><td><strong>Franchise</strong></td><td>« Assurance incluse »</td><td>5 000 à 15 000 DH à votre charge en cas de dommage</td></tr>
<tr><td><strong>Rachat de franchise</strong></td><td>Optionnel</td><td>≈ 110 à 220 DH (10 à 20 €) par jour, parfois plus que la location</td></tr>
<tr><td><strong>Carburant</strong></td><td>« Plein / plein »</td><td>Chez certains, plein facturé au départ et non remboursé</td></tr>
<tr><td><strong>Second conducteur</strong></td><td>Non mentionné</td><td>≈ 50 à 110 DH (5 à 10 €) par jour</td></tr>
<tr><td><strong>Retour hors horaires</strong></td><td>Non mentionné</td><td>Supplément de nuit ou de dimanche</td></tr>
</tbody>
</table>
</div>
<p class="small">Prix indicatifs en dirhams, convertis au taux approximatif de 1 € ≈ 10,8 DH. Le comparateur affiche le prix exact de chaque offre.</p>
<p>Le bon réflexe : demandez le <strong>montant total débité, franchise comprise</strong>, avant de valider. Un loueur sérieux le donne sans difficulté.</p>

<h2>Agence marocaine ou enseigne internationale ?</h2>
<p>Les agences marocaines sont souvent 20 à 40 % moins chères, avec des voitures un peu plus anciennes mais entretenues et un interlocuteur sur place. Leur point faible : un état des lieux plus ou moins rigoureux. Choisissez-en une avec beaucoup d'avis récents. Les enseignes internationales coûtent plus cher mais offrent des procédures standard et un recours plus simple : le compromis raisonnable pour une première location au Maroc.</p>
<div class="callout">
<span class="callout-label">La précaution qui vaut tous les contrats</span>
<p>Filmez la voiture sous tous les angles au départ (jantes, pare-brise, toit, bas de caisse, intérieur) avec l'horodatage activé, et refaites la même série au retour. Dix minutes qui règlent la plupart des contestations.</p>
</div>

<h2>Documents nécessaires</h2>
<div class="table-wrap">
<table class="data">
<tbody>
<tr><td><strong>Âge minimum</strong></td><td>21 ans en général ; frais « jeune conducteur » possibles avant 23–25 ans</td></tr>
<tr><td><strong>Permis</strong></td><td>Permis national valide depuis au moins 1 an</td></tr>
<tr><td><strong>Caution</strong></td><td>Carte de crédit au nom du conducteur principal (5 000 à 8 000 DH)</td></tr>
<tr><td><strong>Identité</strong></td><td>Passeport</td></tr>
</tbody>
</table>
</div>

<h2>Prise en charge et restitution</h2>
<p><strong>À l'aéroport</strong> : la solution la plus simple si vous partez directement vers la côte ou l'Atlas. <strong>En ville</strong> : si vous commencez par la médina, rejoignez votre riad en <a href="/reserver-transfert/">transfert</a> et louez le jour du départ en excursion, à Guéliz ou avec livraison. <strong>En aller simple</strong> : la plupart des loueurs acceptent un retour à Essaouira, Fès ou Tanger, moyennant un supplément selon la distance.</p>
`,
    faqHeading: "Location économique à l'aéroport Marrakech-Ménara : questions fréquentes",
    faqs: [
      { q: "Quel est le prix d'une petite voiture de location à l'aéroport de Marrakech ?", a: "≈ 270 à 380 DH (25 à 35 €) par jour en saison normale pour une Dacia Sandero, une Kia Picanto ou une Hyundai i10, moins à la semaine. Les annonces bien plus basses excluent souvent le rachat de franchise, qui ajoute ≈ 110 à 220 DH (10 à 20 €) par jour." },
      { q: "Quelle est la voiture économique la plus louée à Marrakech ?", a: "La Dacia Sandero, produite au Maroc : 5 places, bon coffre et robuste. Les Kia Picanto et Hyundai i10 sont plus petites et encore plus faciles à garer." },
      { q: "Une citadine suffit-elle pour l'Atlas ?", a: "Oui pour l'Ourika, Imlil et le col du Tichka, entièrement goudronnés. Sa limite est la reprise en côte à quatre adultes chargés, et la climatisation au-delà de 42 °C en plein été." },
      { q: "Quels documents faut-il pour louer ?", a: "Un permis national valide depuis au moins un an, un passeport et une carte de crédit au nom du conducteur principal pour la caution, de 5 000 à 8 000 DH sur une citadine." },
      { q: "Peut-on louer une citadine automatique ?", a: "C'est rare : les citadines sont presque toutes en boîte manuelle. Les automatiques commencent en catégorie compacte, autour de 490 à 650 DH (45 à 60 €) par jour, et se réservent à l'avance." },
      { q: "Y a-t-il des frais cachés ?", a: "Les plus fréquents : franchise élevée, rachat de franchise, second conducteur, retour de nuit et carburant mal géré. Demandez le montant total débité, franchise comprise, avant de valider." },
      { q: "Quand louer le moins cher ?", a: "Janvier hors fêtes, juin et novembre. Les vacances scolaires européennes, Pâques, l'Aïd et l'été peuvent faire doubler les prix : réservez 2 à 3 semaines à l'avance." },
      { q: "Peut-on rendre la voiture dans une autre ville ?", a: "Oui chez la plupart des loueurs, à Essaouira, Fès ou Tanger par exemple, avec un supplément d'aller simple qui dépend de la distance. Vérifiez-le dans l'offre avant de réserver." },
    ],
    cta: {
      heading: "Prêt à explorer le Maroc à petit prix ?",
      text: "Comparez les citadines de tous les loueurs de l'aéroport et réservez en quelques clics, annulation gratuite sur la plupart des offres.",
      label: "Comparer les prix",
      href: "#reserver",
      secondary: { label: "Voir toutes les catégories", key: 'carRental' },
    },
  },
} satisfies PageContent;
