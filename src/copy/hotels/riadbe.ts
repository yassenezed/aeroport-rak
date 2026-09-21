import type { HotelContent } from '../types';

export default {
  fr: {
    title: 'Riad BE Marrakech : avis et accès aéroport',
    description: "Riad BE : l'expérience médina par Bab Doukkala, l'un des accès les plus simples de Marrakech quand on arrive avec des bagages. Avis, accès et conseils.",
    eyebrow: 'Marrakech · Riad',
    h1: 'Riad BE',
    lede: "L'expérience de la médina, par la porte la plus commode. Patio, bassin et terrasse, mais à Bab Doukkala : l'un des rares riads où l'arrivée avec des valises ne vire pas à l'expédition.",
    stars: '★★★★',
    area: 'Médina, secteur Bab Doukkala',
    priceRange: 'Moyen',
    rating: 4.3,
    ratingLabel: 'notre note éditoriale',
    verdict: "Le bon compromis pour un premier séjour en riad : patio, bassin et terrasse, mais à Bab Doukkala, l'un des accès les plus simples de la médina pour qui arrive chargé. Ce que l'on perd en profondeur historique, on le gagne en logistique.",
    body: `
<h2>Ce que c'est</h2>
<p>Riad BE occupe une maison de la médina dans le secteur de Bab Doukkala, avec le vocabulaire habituel du riad — patio central, bassin, terrasse sur les toits, petit-déjeuner servi à l'ombre — dans une version un peu plus contemporaine et un peu moins confidentielle que les très petites maisons d'hôtes.</p>
<p>La taille compte ici : suffisamment de chambres pour que l'établissement fonctionne comme un hôtel, assez peu pour que l'on ne s'y sente pas anonyme.</p>

<h2>L'accès depuis l'aéroport</h2>
<p>C'est son argument principal, et il est sous-estimé. <strong>Bab Doukkala est l'une des portes les plus accessibles de la médina</strong> : large, bien desservie, facile à nommer à un chauffeur, et à faible distance de marche du riad. Comptez une vingtaine de minutes de route depuis le RAK, puis quelques minutes à pied.</p>
<p>Pour un premier voyage à Marrakech, ou pour une arrivée en soirée, cette différence avec un riad situé au fond d'un <em>derb</em> se mesure en véritable confort — surtout en tirant une valise.</p>

<h2>À qui cela convient</h2>
<p>À ceux qui veulent l'expérience du riad sans la complexité de l'accès : premiers séjours, couples, petits groupes d'amis. C'est également un bon choix pour un budget intermédiaire, la fourchette de prix restant sensiblement en dessous des adresses les plus cotées de la médina.</p>
<p>Cela convient moins à qui recherche une maison historique confidentielle, ou à qui a besoin d'un accès en voiture jusqu'à la porte — dans ce cas, l'Hivernage ou Guéliz restent les bons quartiers.</p>
`,
    pros: [
      "Bab Doukkala : l'un des accès les plus simples de la médina avec des bagages",
      "Le vocabulaire complet du riad — patio, bassin, terrasse",
      'Un rapport qualité-prix solide pour la médina',
      'Une taille suffisante pour offrir un vrai service hôtelier',
      'Un bon choix pour un premier séjour en riad',
    ],
    cons: [
      'Moins confidentiel que les très petites maisons d\'hôtes',
      'Toujours quelques minutes de marche : aucune voiture ne rejoint l\'entrée',
      'Une décoration contemporaine, moins chargée d\'histoire',
      'Les nuits d\'hiver restent fraîches, comme dans toute maison ancienne',
    ],
    faqs: [
      {
        q: 'Le Riad BE est-il facile à rejoindre depuis l\'aéroport ?',
        a: "Plus que la plupart des riads : Bab Doukkala est une porte large, bien desservie et facile à indiquer à un chauffeur. Comptez une vingtaine de minutes de route, puis quelques minutes à pied seulement.",
      },
      {
        q: 'Quelle porte de médina indiquer à mon chauffeur ?',
        a: "Bab Doukkala. C'est le nom à donner au chauffeur ou à saisir dans votre réservation de transfert : il n'y a pas d'ambiguïté et l'accès est direct depuis la route de l'aéroport.",
      },
      {
        q: 'Est-ce un bon choix pour un premier séjour à Marrakech ?',
        a: "Oui, c'est précisément son intérêt : vous obtenez l'expérience du riad — patio, bassin, terrasse — sans la difficulté d'accès d'une maison enfouie au fond d'un derb, ce qui compte beaucoup le premier jour.",
      },
      {
        q: 'Peut-on y arriver tard le soir ?',
        a: "Oui, à condition de prévenir de votre heure d'arrivée et, idéalement, de votre numéro de vol. L'accès par Bab Doukkala reste praticable en soirée, et le riad peut envoyer quelqu'un à votre rencontre.",
      },
    ],
    cta: {
      heading: 'Arrivée à Bab Doukkala',
      text: "Un chauffeur qui connaît la porte, attend votre vol et vous dépose au plus près, prix fixe par véhicule.",
      label: 'Réserver un transfert',
    },
  },
} satisfies HotelContent;
