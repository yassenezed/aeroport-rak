import type { PageContent } from '../types';

export default {
  fr: {
    title: 'Départs aéroport Marrakech (RAK) : vols en direct',
    description: "Départs en temps réel de l'aéroport de Marrakech Ménara : heure d'arrivée conseillée, enregistrement, police des frontières, détaxe et boutiques.",
    eyebrow: 'Marrakech Ménara · Départs',
    h1: 'Départs de l\'aéroport de Marrakech',
    lede: "Le tableau suit les vols au départ de Ménara en direct. En dessous : à quelle heure se présenter, où se forment réellement les files, et comment ne pas passer votre dernière heure au Maroc debout dans un couloir.",
    widget: 'flights-departures',
    body: `
<h2>À quelle heure se présenter</h2>
<p>La règle qui fonctionne à Marrakech : <strong>2 heures avant un vol Schengen, 3 heures en haute saison</strong> ou dès que vous avez des bagages en soute. Ce n'est pas l'enregistrement qui pose problème — il est rapide —, mais le contrôle des passeports au départ, qui reste le goulet d'étranglement du RAK. Les pics se situent entre 6 h et 9 h, puis en fin d'après-midi, quand les rotations européennes repartent en série.</p>
<p>Quittez votre hébergement en conséquence. Depuis la médina, comptez 20 à 30 minutes de trajet plus le temps de rejoindre la porte à pied avec vos valises. Réservez votre retour la veille, auprès du riad ou en transfert : trouver un taxi à 5 h du matin dans une ruelle n'a rien d'évident, et le tarif de nuit s'applique jusqu'au lever du jour.</p>

<h2>Le parcours au départ</h2>
<ol>
<li><strong>Contrôle d'accès au terminal.</strong> Un premier passage des bagages à l'entrée de l'aérogare, avant même les comptoirs.</li>
<li><strong>Enregistrement.</strong> Les comptoirs ouvrent en général 2 à 3 heures avant le vol. L'enregistrement en ligne fait gagner du temps, mais pas pour la soute : le dépôt des bagages passe par le comptoir.</li>
<li><strong>Police des frontières.</strong> L'étape la plus longue. Fiche de sortie à remplir, contrôle du passeport et du tampon d'entrée.</li>
<li><strong>Sûreté.</strong> Liquides limités à 100 ml par contenant, appareils électroniques à sortir du sac.</li>
<li><strong>Zone d'embarquement.</strong> Boutiques hors taxes, cafés, salons et portes.</li>
</ol>

<h2>Ce qu'on peut emporter, ce qu'on ne peut pas</h2>
<p>Les dirhams ne s'exportent pas : au-delà d'une somme symbolique, rechangez vos billets <em>avant</em> la police des frontières, aux bureaux de change du hall public. Une fois côté embarquement, vous ne pourrez plus le faire dans de bonnes conditions. Gardez le reçu de votre change initial, certains guichets le demandent.</p>
<p>Côté souvenirs : les épices, l'huile d'argan et les cosmétiques en flacon dépassant 100 ml partent en soute, sans exception. Les poteries et objets fragiles supportent mal la soute sans emballage sérieux ; la plupart des vendeurs de la médina savent préparer un colis pour l'avion si vous le demandez.</p>
<div class="callout">
<span class="callout-label">Détaxe</span>
<p>Le Maroc applique un remboursement de TVA aux non-résidents sur certains achats effectués chez des commerçants agréés, avec un formulaire à faire viser au comptoir douanier de l'aéroport <strong>avant</strong> l'enregistrement des bagages, marchandises présentables à l'appui. Cela vaut pour un tapis ou une pièce d'orfèvrerie, rarement pour des babouches.</p>
</div>

<h2>Salons et attente</h2>
<p>La zone d'embarquement du RAK est correctement équipée, mais elle sature aux mêmes heures que les files. Si vous partez en fin de journée ou avec une longue correspondance, un accès salon transforme l'attente — c'est l'un des rares achats de confort qui se justifie vraiment ici. Notre page dédiée détaille les <a href="/blog/salons-vip-aeroport-marrakech/">salons de l'aéroport de Marrakech</a> et leurs conditions d'accès.</p>
`,
    faqs: [
      {
        q: 'Combien de temps avant mon vol dois-je arriver à l\'aéroport de Marrakech ?',
        a: "Deux heures pour un vol Schengen, trois heures en haute saison ou avec des bagages en soute. Le contrôle des passeports au départ est le point de congestion, surtout entre 6 h et 9 h et en fin d'après-midi.",
      },
      {
        q: 'Peut-on emporter des dirhams hors du Maroc ?',
        a: "Non, le dirham n'est pas exportable au-delà d'une somme symbolique. Rechangez vos billets aux bureaux de change du hall public, avant la police des frontières : une fois côté embarquement, ce n'est plus possible dans de bonnes conditions. Conservez le reçu de votre change initial.",
      },
      {
        q: 'Y a-t-il une détaxe à l\'aéroport de Marrakech ?',
        a: "Oui, pour les non-résidents, sur les achats effectués chez des commerçants agréés. Le formulaire doit être visé au comptoir douanier avant l'enregistrement des bagages, avec les marchandises présentables. Cela concerne surtout les achats de valeur, comme un tapis ou une pièce d'orfèvrerie.",
      },
      {
        q: 'Comment aller à l\'aéroport depuis la médina le matin ?',
        a: "Réservez la veille, auprès de votre riad ou en transfert : trouver un taxi à 5 h du matin dans une ruelle est aléatoire, et le tarif de nuit s'applique jusqu'au lever du jour. Comptez 20 à 30 minutes de trajet, plus le temps de rejoindre la porte à pied avec les valises.",
      },
      {
        q: 'Peut-on mettre de l\'huile d\'argan dans son bagage cabine ?',
        a: "Seulement en flacons de 100 ml ou moins, réunis dans un sac plastique transparent. Au-delà, l'huile d'argan, les épices liquides et les cosmétiques partent en soute. Les achats effectués en zone hors taxes après la sûreté ne sont pas concernés par cette limite.",
      },
    ],
    cta: {
      heading: 'Votre retour vers l\'aéroport, réglé la veille',
      text: "Un chauffeur devant la bonne porte de médina à l'heure convenue, prix fixe, même à 5 h du matin. Annulation gratuite sur la plupart des réservations.",
      label: 'Réserver mon transfert retour',
    },
  },
} satisfies PageContent;
