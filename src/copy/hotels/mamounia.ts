import type { HotelContent } from '../types';

export default {
  fr: {
    title: "La Mamounia : avis et accès aéroport Marrakech-Ménara",
    description: "La Mamounia : un siècle d'histoire, de vastes jardins aux portes de la médina, à quinze minutes en voiture de l'aéroport de Marrakech-Ménara.",
    eyebrow: 'Marrakech · Hôtel',
    h1: 'La Mamounia',
    lede: "Le grand hôtel historique de Marrakech, à cinq kilomètres du terminal, à la charnière entre les remparts et la ville : la médina à pied, l'accès en voiture sans contrainte.",
    stars: '★★★★★',
    area: 'Remparts, près de Bab Jdid',
    priceRange: 'Très élevé, forte saisonnalité',
    rating: 4.8,
    ratingLabel: 'notre note éditoriale',
    verdict: "L'adresse où l'hôtel est la destination : un siècle d'histoire, des jardins d'oliviers en pleine ville et la médina accessible à pied. C'est aussi l'un des rares établissements de ce niveau où l'arrivée depuis l'aéroport ne pose aucune question logistique.",
    body: `
<h2>Ce que c'est</h2>
<p>Ouverte en 1923 sur un terrain d'oliviers offert autrefois par un sultan à son fils, La Mamounia est le grand hôtel historique de Marrakech, celui dont le nom circule bien au-delà du Maroc. Churchill y a peint, et l'établissement a traversé un siècle de restaurations successives sans perdre ce qui fait sa singularité : un vaste jardin clos, à deux pas des remparts.</p>
<p>L'expérience tient d'abord à ce jardin. En pleine ville, dans une médina dense et minérale, disposer de plusieurs hectares d'oliviers, d'allées et de bassins change radicalement le rythme d'un séjour. Le reste — restauration, spa, service — est à l'avenant, mais c'est le domaine lui-même qui justifie l'adresse.</p>

<h2>L'accès depuis l'aéroport Marrakech-Ménara</h2>
<p>Cinq kilomètres, douze à vingt minutes selon la circulation, et une dépose devant l'entrée. C'est l'un des rares établissements prestigieux de Marrakech où la question logistique ne se pose pas : aucune porte de médina à négocier, aucun porteur à prévoir, aucune ruelle à remonter avec des valises.</p>
<p>L'hôtel organise généralement les transferts sur demande. À défaut, un taxi au tarif affiché, 100 à 150 MAD en journée, ou un <a href="/reserver-transfert/">transfert réservé</a> font parfaitement l'affaire : le trajet est court et direct.</p>

<h2>À qui cela convient</h2>
<p>À ceux qui viennent pour l'hôtel autant que pour la ville, et qui veulent pouvoir rentrer se reposer entre deux sorties sans que cela devienne une expédition. Aux voyageurs qui souhaitent l'atmosphère de la médina sans en subir les contraintes d'accès. Et aux séjours courts, où la proximité immédiate de la Koutoubia et de Jemaa el-Fna fait gagner un temps réel.</p>
<p>Cela convient moins à qui cherche l'intimité d'une petite maison d'hôtes : La Mamounia est un grand établissement, fréquenté, et cela se ressent aux heures de pointe autour de la piscine et des restaurants.</p>
`,
    pros: [
      "Des jardins historiques qui font l'essentiel de l'expérience, rares en pleine ville",
      "Une position charnière : la médina à pied, l'accès en voiture sans contrainte",
      'Une offre de restauration étoffée, marocaine comme internationale',
      "Un spa et des espaces de détente à l'échelle du domaine",
      "Une dépose directe devant l'entrée depuis l'aéroport, sans porteur ni ruelle",
    ],
    cons: [
      'Des tarifs parmi les plus élevés du Maroc, avec une saisonnalité marquée',
      "L'échelle d'un grand hôtel, loin de l'intimité d'un riad",
      'Une fréquentation sensible aux heures de pointe dans les espaces communs',
      "Les extras — spa, restauration, boissons — alourdissent nettement l'addition",
    ],
    faqs: [
      {
        q: "À quelle distance La Mamounia est-elle de l'aéroport de Marrakech ?",
        a: "Environ 5 km, soit 12 à 20 minutes de route selon la circulation. C'est l'un des grands hôtels les plus proches du terminal, et l'accès se fait entièrement en voiture, avec une dépose devant l'entrée.",
      },
      {
        q: 'La Mamounia est-elle dans la médina ou dans la ville nouvelle ?',
        a: "À la charnière des deux : l'hôtel borde les remparts, à quelques minutes à pied de la Koutoubia et de Jemaa el-Fna, tout en restant accessible en voiture. C'est ce double statut qui explique une bonne partie de son attrait.",
      },
      {
        q: 'Faut-il être client pour profiter des jardins ?',
        a: "Les jardins historiques font partie de l'expérience hôtelière. Une consommation au bar ou un repas permet d'en profiter sans y séjourner, sous réserve de réservation et des règles de l'établissement au moment de votre visite.",
      },
      {
        q: 'Quel transfert prévoir depuis l\'aéroport ?',
        a: "L'hôtel organise généralement les transferts sur demande. À défaut, un transfert privé réservé ou un taxi au tarif affiché suffisent amplement : le trajet est court, direct, et la dépose se fait devant l'entrée.",
      },
    ],
    cta: {
      heading: 'Arriver directement devant l\'entrée',
      text: "Quinze minutes depuis le terminal, prix fixe par véhicule, chauffeur qui suit votre vol.",
      label: 'Réserver un transfert',
    },
  },
} satisfies HotelContent;
