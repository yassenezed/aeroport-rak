import type { HotelContent } from '../types';

export default {
  fr: {
    title: "Royal Mansour : avis et accès aéroport Marrakech-Ménara",
    description: "Royal Mansour : riads privés dans un domaine clos, service hors norme, à quinze minutes de l'aéroport de Marrakech-Ménara en voiture.",
    eyebrow: 'Marrakech · Hôtel',
    h1: 'Royal Mansour',
    lede: "Non pas des chambres, mais des riads privés de plusieurs étages, réunis dans un domaine clos à l'intérieur des remparts. L'établissement le plus singulier de Marrakech, et probablement le plus cher.",
    stars: '★★★★★',
    area: 'Intérieur des remparts, près de l\'Hivernage',
    priceRange: 'Exceptionnel',
    rating: 4.9,
    ratingLabel: 'notre note éditoriale',
    verdict: "Une reconstitution intégrale d'une médina à l'échelle d'un hôtel : chaque hôte occupe son propre riad, avec patio, terrasse et piscine. Le service circule par des souterrains pour rester invisible. C'est un objet unique, dont le prix est à la hauteur de l'ambition.",
    body: `
<h2>Ce que c'est</h2>
<p>Le Royal Mansour ne fonctionne pas comme un hôtel classique. Le domaine reproduit une médina miniature : des ruelles, des portes, des patios, et <strong>des riads individuels de plusieurs niveaux</strong> attribués à chaque réservation, avec leur propre cour, leur terrasse et souvent leur bassin. On ne traverse pas un couloir pour rentrer chez soi, on rentre chez soi.</p>
<p>La particularité la plus commentée tient à l'organisation du service : le personnel circule par un réseau de galeries souterraines et n'apparaît qu'au moment où on le sollicite. Le résultat est une intimité rare pour un établissement de cette taille.</p>
<p>L'artisanat mobilisé — zelliges, stucs sculptés, bois de cèdre, tadelakt — a impliqué des centaines d'artisans marocains, et c'est visible dans le détail plutôt que dans l'effet d'ensemble.</p>

<h2>L'accès depuis l'aéroport Marrakech-Ménara</h2>
<p>Environ six kilomètres, quinze à vingt minutes, avec une arrivée en voiture directement au domaine. Aucune contrainte de médina : l'établissement se situe à l'intérieur des remparts mais dispose d'un accès routier propre. Les transferts sont pris en charge par l'hôtel sur demande, et à ce niveau de prestation, c'est la voie la plus simple.</p>

<h2>À qui cela convient</h2>
<p>À ceux qui recherchent l'intimité absolue plutôt que la vie d'un grand hôtel, aux voyages d'exception, aux familles disposant d'un riad entier. La configuration en maisons individuelles est particulièrement adaptée à un groupe qui veut être ensemble sans partager un palier d'hôtel.</p>
<p>Cela convient moins à qui cherche l'animation, la rencontre ou une ambiance de lobby : ici, tout est conçu pour que vous ne croisiez personne.</p>
`,
    pros: [
      'Des riads privés entiers plutôt que des chambres, avec patio et terrasse',
      'Une intimité inégalée, servie par une organisation invisible du personnel',
      'Un artisanat marocain de très haut niveau, dans le détail',
      "Un accès routier direct, sans aucune contrainte de médina",
      'Des espaces de restauration et un spa à la hauteur du reste',
    ],
    cons: [
      'Des tarifs qui placent l\'établissement hors de portée de la plupart des séjours',
      "Une atmosphère volontairement feutrée, sans vie collective",
      'Le domaine invite à ne pas en sortir, au risque de peu voir la ville',
      'La réservation en haute saison demande une anticipation considérable',
    ],
    faqs: [
      {
        q: 'Le Royal Mansour est-il loin de l\'aéroport de Marrakech ?',
        a: "Environ six kilomètres, soit quinze à vingt minutes de route. L'accès se fait entièrement en voiture, directement au domaine, sans aucune contrainte liée à la médina bien que l'hôtel se situe à l'intérieur des remparts.",
      },
      {
        q: 'Qu\'est-ce qu\'un riad privé au Royal Mansour ?',
        a: "Une maison individuelle de plusieurs niveaux attribuée à votre réservation, avec son patio, sa terrasse et généralement son bassin. Vous n'occupez pas une chambre dans un bâtiment commun : vous occupez une maison entière au sein du domaine.",
      },
      {
        q: 'Le service souterrain est-il une légende ?',
        a: "Non, c'est une réalité de conception : un réseau de galeries permet au personnel de circuler sans apparaître dans les ruelles du domaine. C'est ce qui explique le niveau d'intimité de l'établissement.",
      },
      {
        q: 'L\'hôtel organise-t-il les transferts depuis l\'aéroport ?',
        a: "Oui, sur demande, et à ce niveau de prestation c'est la solution la plus simple. Un transfert privé réservé indépendamment fonctionne également : le trajet est court et l'accès direct.",
      },
    ],
    cta: {
      heading: 'Un trajet à la hauteur de l\'arrivée',
      text: "Véhicule privé depuis le terminal, suivi du vol et prix fixe, quinze minutes jusqu'au domaine.",
      label: 'Réserver un transfert',
    },
  },
} satisfies HotelContent;
