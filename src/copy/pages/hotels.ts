import type { PageContent } from '../types';

export default {
  fr: {
    title: "Hôtels près de l'aéroport Marrakech-Ménara : 15 adresses",
    description: "Hôtels près de l'aéroport de Marrakech-Ménara : 15 adresses de l'Hivernage à la médina, temps de trajet, gamme de prix et 5 avis détaillés.",
    eyebrow: "Hôtels · aéroport et ville",
    h1: "Hôtels près de l'aéroport Marrakech-Ménara et en ville",
    lede: "L'aéroport est à 6 km de la médina : aucun hôtel de Marrakech n'est vraiment loin. Le choix du quartier compte donc davantage que la distance au terminal. Voici 15 adresses sélectionnées, du palace au riad, classées par quartier, avec nos avis détaillés sur cinq d'entre elles.",
    highlights: [
      { icon: 'clock', value: "10–15 min", label: "De l'aéroport à l'Hivernage, le quartier hôtelier le plus proche" },
      { icon: 'building', value: "15 hôtels", label: "Sélectionnés, du palace au riad" },
      { icon: 'star', value: "5 avis détaillés", label: "Accès, points forts et limites" },
      { icon: 'van', value: "Dès ≈ 290 DH", label: "Transfert jusqu'à l'hôtel (≈ 27 €)" },
    ],
    cardSections: [
      {
        eyebrow: "À 10–15 minutes du terminal",
        heading: "Les hôtels les plus proches de l'aéroport Marrakech-Ménara",
        intro: "L'Hivernage, l'avenue de la Ménara et l'Agdal sont les quartiers hôteliers les plus proches de l'aéroport : piscines, accès direct en voiture et médina à quelques minutes.",
        variant: 'feature',
        items: [
          { icon: 'building', title: "Four Seasons Resort Marrakech", text: "Grand resort avec jardins, piscines et spa, à deux pas des jardins de la Ménara.", tags: ["Luxe", "≈ 10 min de l'aéroport"], hotel: 'fourSeasons' },
          { icon: 'building', title: "Savoy Le Grand Hotel", text: "Grand hôtel familial avec vaste piscine et spa, entre l'Hivernage et l'avenue de la Ménara.", tags: ["Haut de gamme", "≈ 10 min de l'aéroport"], hotel: 'savoyGrandHotel' },
          { icon: 'building', title: "Pestana CR7 Marrakech", text: "Hôtel design et animé à l'Hivernage, connu pour son rooftop avec piscine.", tags: ["Milieu à haut de gamme", "≈ 10–15 min"], hotel: 'pestanaCr7' },
          { icon: 'building', title: "Sofitel Marrakech Lounge & Spa", text: "Palace contemporain de l'Hivernage, piscines et spa, à quelques minutes à pied de la médina.", tags: ["Haut de gamme", "≈ 10–15 min"], hotel: 'sofitelLoungeSpa' },
          { icon: 'building', title: "Mövenpick Mansour Eddahbi", text: "Grand hôtel voisin du Palais des congrès, pratique pour les séjours d'affaires et en famille.", tags: ["Haut de gamme", "≈ 10–15 min"], hotel: 'movenpickMansourEddahbi' },
          { icon: 'building', title: "Kenzi Menara Palace", text: "Hôtel de l'avenue Mohammed VI avec piscine et jardins, dans le quartier de l'Agdal.", tags: ["Haut de gamme", "≈ 10–15 min"], hotel: 'kenziMenaraPalace' },
        ],
      },
      {
        eyebrow: "Palaces et resorts",
        heading: "Palaces et grands hôtels de Marrakech",
        intro: "Les adresses d'exception, dont trois ont droit à notre avis détaillé.",
        variant: 'feature',
        items: [
          { icon: 'star', title: "La Mamounia", text: "Le palace historique aux jardins d'oliviers, à la lisière de la médina et à 12–20 minutes de l'aéroport.", tags: ["Luxe", "Notre note 4,8/5"], link: { key: 'mamounia', label: "Lire notre avis" }, hotel: 'mamounia' },
          { icon: 'star', title: "Royal Mansour", text: "Des riads privés dans un domaine clos à l'intérieur des remparts, à quinze minutes de l'aéroport.", tags: ["Luxe", "Notre note 4,9/5"], link: { key: 'mansour', label: "Lire notre avis" }, hotel: 'royalMansour' },
          { icon: 'star', title: "Es Saadi", text: "Domaine familial de l'Hivernage dans un parc de plusieurs hectares, à dix minutes du terminal.", tags: ["Luxe", "Notre note 4,5/5"], link: { key: 'essaadi', label: "Lire notre avis" }, hotel: 'esSaadi' },
          { icon: 'star', title: "Mandarin Oriental Marrakech", text: "Villas avec piscine privée au milieu des oliviers, sur la route du Golf Royal.", tags: ["Luxe", "≈ 25–30 min"], hotel: 'mandarinOriental' },
          { icon: 'star', title: "Fairmont Royal Palm", text: "Resort de golf au pied de l'Atlas, idéal pour un séjour au calme hors de la ville.", tags: ["Luxe", "≈ 20–25 min"], hotel: 'fairmontRoyalPalm' },
        ],
      },
      {
        eyebrow: "En ville et en médina",
        heading: "Hôtels en ville et riads de charme",
        intro: "Guéliz pour la commodité, la médina pour l'atmosphère.",
        variant: 'feature',
        items: [
          { icon: 'building', title: "Radisson Blu Carré Eden", text: "Hôtel moderne au cœur de Guéliz, au-dessus du centre commercial Carré Eden.", tags: ["Haut de gamme", "≈ 15–20 min"], hotel: 'radissonCarreEden' },
          { icon: 'building', title: "ibis Marrakech Gare Voyageurs", text: "L'adresse simple et économique face à la gare ONCF, idéale pour une nuit avant un train.", tags: ["Petit budget", "≈ 15 min"], hotel: 'ibisGare' },
          { icon: 'door', title: "Riad Yasmine", text: "Le patio vert le plus photographié de la médina, secteur Dar el Bacha.", tags: ["Milieu de gamme", "Notre note 4,4/5"], link: { key: 'yasmine', label: "Lire notre avis" }, hotel: 'riadYasmine' },
          { icon: 'door', title: "Riad BE", text: "Patio, bassin et terrasse à Bab Doukkala : l'un des riads les plus simples à rejoindre avec des valises.", tags: ["Milieu de gamme", "Notre note 4,3/5"], link: { key: 'riadbe', label: "Lire notre avis" }, hotel: 'riadBe' },
        ],
      },
    ],
    body: `
<h2>Quel quartier choisir depuis l'aéroport Marrakech-Ménara ?</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Quartier</th><th>Pour qui</th><th>Accès en voiture</th><th>Trajet depuis l'aéroport</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Hivernage, Ménara, Agdal</strong></td><td>Grands hôtels, calme, piscines</td><td>Direct</td><td>10–15 min</td></tr>
<tr><td><strong>Médina</strong></td><td>Première visite, atmosphère, riads</td><td>Dépose à une porte, puis à pied</td><td>15–25 min</td></tr>
<tr><td><strong>Guéliz</strong></td><td>Restaurants, gare, voiture de location</td><td>Direct</td><td>15–20 min</td></tr>
<tr><td><strong>Palmeraie, route du Golf</strong></td><td>Resorts, repos, familles</td><td>Direct</td><td>25–35 min</td></tr>
</tbody>
</table>
</div>
<p>La question décisive : combien de fois par jour comptez-vous rentrer vous reposer ? Si c'est souvent, logez en médina ou à l'Hivernage. Si vous prévoyez Agafay, l'Atlas et des soirées en ville, un resort de la Palmeraie vous fera perdre une heure de voiture par jour.</p>

<h2>Riad ou hôtel : deux expériences différentes</h2>
<p>Le <strong>riad</strong> est une maison traditionnelle autour d'un patio, de cinq à dix chambres, dans la médina : accueil personnel, petit-déjeuner en terrasse, vrai calme une fois la porte franchie. En contrepartie, pas de voiture jusqu'à l'entrée, des escaliers raides et un chauffage inégal en hiver. L'<strong>hôtel</strong>, à l'Hivernage, à Guéliz ou dans la Palmeraie, offre ascenseur, climatisation fiable, piscine et accès en voiture jusqu'à la porte.</p>
<div class="callout">
<span class="callout-label">Avant de réserver en médina</span>
<p>Demandez le nom de la porte de dépose (Bab Doukkala, Bab Laksour, Bab Agnaou…), la durée de marche, un porteur à votre heure d'arrivée, le chauffage en hiver et le mode de paiement du solde : beaucoup de petits riads n'acceptent que les espèces.</p>
</div>

<h2>Arriver tard : le réflexe qui évite la porte close</h2>
<p>Si votre vol atterrit après 22 h, donnez à votre hébergement le <strong>numéro de vol</strong>, pas seulement l'heure : un riad qui sait que vous avez deux heures de retard garde quelqu'un à la porte. Les hôtels de Marrakech proposent rarement une navette gratuite : prévoyez un <a href="/reserver-transfert/">transfert réservé</a> ou un taxi au tarif de nuit.</p>
`,
    faqHeading: "Hôtels près de l'aéroport Marrakech-Ménara : questions fréquentes",
    faqs: [
      { q: "Quel est l'hôtel le plus proche de l'aéroport de Marrakech ?", a: "Il n'y a pas de grand hôtel dans l'enceinte de l'aéroport. Les plus proches se trouvent avenue de la Ménara et à l'Hivernage, comme le Four Seasons ou le Savoy Le Grand Hotel, à une dizaine de minutes en voiture du terminal." },
      { q: "Les hôtels de Marrakech ont-ils une navette gratuite vers l'aéroport ?", a: "Rarement. La plupart proposent un transfert payant sur demande. Un transfert réservé dès 27 € par véhicule ou un taxi de la station restent les solutions les plus simples." },
      { q: "Où dormir pour un vol tôt le matin ?", a: "À l'Hivernage, à la Ménara ou à l'Agdal, à 10–15 minutes du terminal et accessibles en voiture jusqu'à la porte. Évitez la médina pour un départ à l'aube : il faut d'abord rejoindre une porte à pied avec les bagages." },
      { q: "Vaut-il mieux dormir dans la médina ou à Guéliz ?", a: "La médina pour l'atmosphère, les riads et les souks, en acceptant la dépose à une porte. Guéliz pour la commodité : accès en voiture, restaurants et gare ONCF, mais un dépaysement moindre." },
      { q: "Un riad convient-il avec des enfants ?", a: "Cela dépend : escaliers raides, terrasses rarement sécurisées et patios ouverts. Beaucoup de familles préfèrent un hôtel avec piscine à l'Hivernage ou dans la Palmeraie." },
      { q: "Peut-on arriver en voiture devant un riad ?", a: "Presque jamais : les ruelles sont trop étroites. On vous dépose à la porte la plus proche et vous finissez à pied, en trois à dix minutes. Demandez un porteur avec charrette." },
      { q: "Les riads sont-ils chauffés en hiver ?", a: "Inégalement : les nuits de janvier descendent sous 8 °C. Vérifiez la présence d'un chauffage dans la chambre avant de réserver un séjour hivernal." },
      { q: "Faut-il payer en espèces dans les riads ?", a: "Souvent pour le solde : beaucoup de petits établissements n'acceptent la carte que pour l'acompte en ligne. Prévoyez des dirhams et posez la question à la réservation." },
    ],
    cta: {
      heading: "De l'aéroport à la porte de votre hôtel",
      text: "Indiquez le nom de votre hébergement : le chauffeur vous dépose devant l'hôtel, ou à la porte de médina la plus proche de votre riad, prix fixe par véhicule.",
      label: "Réserver mon transfert",
      secondary: { label: "Louer une voiture", key: 'carRental' },
    },
  },
} satisfies PageContent;
