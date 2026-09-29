import type { HotelContent } from '../types';

export default {
  fr: {
    title: "Es Saadi : avis et accès depuis l'aéroport Marrakech-Ménara",
    description: "Es Saadi : un parc de plusieurs hectares à l'Hivernage, plusieurs catégories d'hébergement et dix minutes seulement depuis l'aéroport de Marrakech-Ménara.",
    eyebrow: 'Marrakech · Hôtel',
    h1: 'Es Saadi',
    lede: "Un domaine familial de l'Hivernage, à dix minutes du terminal : c'est l'adresse la plus rapide à rejoindre depuis l'aéroport, et l'une des rares à proposer un vrai parc en pleine ville.",
    stars: '★★★★★',
    area: 'Hivernage, quartier des grands hôtels',
    priceRange: "Élevé, variable selon l'aile",
    rating: 4.5,
    ratingLabel: 'notre note éditoriale',
    verdict: "Un parc de plusieurs hectares en pleine ville, plusieurs catégories d'hébergement dans un même domaine et une gestion familiale de longue date. Le quartier le plus rapide depuis l'aéroport : idéal en famille, ou pour une dernière nuit avant un vol matinal.",
    body: `
<h2>Ce que c'est</h2>
<p>Es Saadi est un domaine, pas un bâtiment : plusieurs hectares de jardins à l'Hivernage, avec des hébergements de niveaux différents réunis sur le même terrain — un hôtel historique, des villas et une aile palace. Cette organisation permet de choisir son niveau de prestation sans changer d'adresse, ce qui est rare à Marrakech.</p>
<p>L'établissement est tenu par la même famille depuis des décennies, et cela se sent dans une forme de continuité du service, moins standardisée que dans une chaîne internationale.</p>

<h2>L'accès depuis l'aéroport</h2>
<p>C'est son atout le plus concret : <strong>l'Hivernage est le quartier le plus proche du RAK</strong>, à quatre ou cinq kilomètres, soit dix à quinze minutes de route. Accès en voiture direct, dépose devant l'entrée, aucun porteur ni ruelle. Pour une arrivée tardive ou un départ à 5 h du matin, la différence avec un riad de médina est considérable.</p>

<h2>À qui cela convient</h2>
<p>Aux familles, grâce au parc, aux piscines et à l'espace, qui manquent cruellement dans la médina. Aux séjours combinant ville et repos, puisque la Koutoubia et Jemaa el-Fna restent à courte distance en taxi. Et aux nuits d'escale ou de transit, pour lesquelles la proximité de l'aéroport est un argument décisif.</p>
<p>Cela convient moins à qui vient chercher l'immersion dans la médina : l'Hivernage est un quartier calme, vert et hôtelier, qui ne ressemble pas au Marrakech historique.</p>
`,
    pros: [
      "Dix à quinze minutes depuis l'aéroport, le meilleur accès de la sélection",
      'Un parc de plusieurs hectares, exceptionnel en pleine ville',
      "Plusieurs catégories d'hébergement au sein d'un même domaine",
      'Une gestion familiale de longue date, peu standardisée',
      'Espace et piscines adaptés aux familles',
    ],
    cons: [
      "L'Hivernage ne procure pas le dépaysement de la médina",
      "Des écarts de prestation sensibles d'une aile à l'autre",
      'Il faut un taxi pour chaque sortie vers les souks',
      "L'addition monte vite avec la restauration et le spa",
    ],
    faqs: [
      {
        q: 'Combien de temps faut-il depuis l\'aéroport pour rejoindre Es Saadi ?',
        a: "Dix à quinze minutes, pour quatre à cinq kilomètres. L'Hivernage est le quartier hôtelier le plus proche du terminal, avec un accès en voiture direct et une dépose devant l'entrée.",
      },
      {
        q: 'Es Saadi convient-il aux familles ?',
        a: "C'est l'un de ses points forts : le parc, les piscines et l'espace disponible compensent exactement ce qui manque dans un riad de médina. Plusieurs catégories d'hébergement permettent en outre d'adapter le budget.",
      },
      {
        q: 'Est-on loin de Jemaa el-Fna depuis l\'Hivernage ?',
        a: "Quelques minutes en taxi, pour une course de l'ordre de 20 à 30 MAD. La Koutoubia est accessible à pied pour les bons marcheurs, mais la plupart des visiteurs prennent un taxi, surtout en été.",
      },
      {
        q: 'Est-ce une bonne adresse pour une dernière nuit avant un vol matinal ?',
        a: "Oui, c'est même l'un de ses usages les plus pertinents : à dix minutes de l'aérogare, vous évitez de traverser la ville à l'aube et de chercher un taxi dans une ruelle de médina.",
      },
    ],
    cta: {
      heading: 'Dix minutes depuis le terminal',
      text: "Un chauffeur qui suit votre vol et vous dépose devant l'entrée, prix fixe par véhicule.",
      label: 'Réserver un transfert',
    },
  },
} satisfies HotelContent;
