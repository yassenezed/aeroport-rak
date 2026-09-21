import type { PageContent } from '../types';

export default {
  fr: {
    title: 'Services à l\'aéroport de Marrakech Ménara',
    description: "Services de l'aéroport de Marrakech : distributeurs, change, cartes SIM et eSIM, wifi, consigne, salons, restauration et assistance aux passagers.",
    eyebrow: 'Marrakech Ménara · Services',
    h1: 'Les services de l\'aéroport de Marrakech',
    lede: "Ce que vous trouverez réellement dans le terminal, où le trouver, et les trois choses à régler avant de sortir du hall : de l'argent liquide, une connexion et un moyen de transport.",
    body: `
<h2>Argent : distributeurs et change</h2>
<p>Plusieurs distributeurs et des bureaux de change sont installés dans le hall public des arrivées, après la douane, ainsi que côté départs. Les distributeurs acceptent Visa et Mastercard et appliquent des frais fixes par retrait : mieux vaut un retrait conséquent que trois petits. Le taux des bureaux de change de l'aéroport est correct sans être le meilleur de la ville ; changez de quoi tenir deux jours et complétez à Guéliz si vous restez longtemps.</p>
<p>Deux règles locales à connaître : le dirham ne s'achète pas hors du Maroc, et il ne s'exporte pas non plus. Prévoyez donc de rechanger vos billets restants <strong>avant</strong> la police des frontières au départ, et conservez le reçu de votre change initial.</p>

<h2>Se connecter : SIM locale, eSIM ou wifi</h2>
<p>Le wifi de l'aéroport existe et dépanne, sans plus. Pour être joignable dès la sortie — utile pour prévenir un chauffeur ou un riad —, deux options.</p>
<ul>
<li><strong>Carte SIM locale</strong> : les comptoirs Maroc Telecom, Orange et inwi se trouvent dans le hall des arrivées. Un forfait touristique avec data coûte quelques dizaines de dirhams. Passeport obligatoire, activation en quelques minutes.</li>
<li><strong>eSIM</strong> : activée avant le départ, elle fonctionne dès l'atterrissage, sans file d'attente ni papiers. C'est la solution la plus simple si votre téléphone est compatible. Voir notre page <a href="/esim-maroc/">eSIM Maroc</a>.</li>
</ul>

<h2>Bagages, consigne et objets trouvés</h2>
<p>Un service de consigne existe au terminal pour déposer des bagages à la journée — pratique lors d'une escale longue ou d'un vol de nuit après une sortie de chambre en fin de matinée. Les tarifs se règlent sur place, en espèces de préférence. Pour tout bagage perdu ou endommagé, la déclaration se fait auprès du comptoir de la compagnie <strong>avant de quitter la zone de livraison</strong> : au-delà, le dossier devient nettement plus difficile à ouvrir.</p>

<h2>Manger, boire, attendre</h2>
<p>Cafés et restauration rapide côté public, offre plus fournie en zone d'embarquement, avec des prix d'aéroport. Si vous voyagez avec des enfants ou que votre vol part tôt, prévoyez de l'eau et de quoi grignoter : les files de la police des frontières ne se traversent pas avec un plateau.</p>
<p>Pour les attentes longues, les salons de l'aéroport offrent des sièges, du wifi et un buffet, accessibles à l'achat sans carte bancaire premium. Notre article sur les <a href="/blog/salons-vip-aeroport-marrakech/">salons VIP du RAK</a> détaille les conditions.</p>

<h2>Passagers à mobilité réduite, familles, formalités</h2>
<p>L'assistance aux passagers à mobilité réduite se demande à la compagnie aérienne au moins 48 heures avant le vol : c'est elle qui déclenche le service, pas l'aéroport. Le terminal dispose d'espaces pour changer un bébé et de points d'eau.</p>
<p>Côté formalités, une fiche de police est à remplir à l'entrée comme à la sortie du territoire ; elle est en général distribuée à bord. Les ressortissants de l'Union européenne, de Suisse, du Canada et des États-Unis n'ont pas besoin de visa pour un séjour touristique de 90 jours, avec un passeport valide au moins six mois.</p>
<div class="callout">
<span class="callout-label">Les trois choses à faire avant de sortir du hall</span>
<p>Retirer des dirhams et fractionner en coupures de 50 et 100. Activer votre connexion, eSIM ou SIM locale. Et savoir précisément où vous allez : nom du riad, nom de la porte de médina, ou confirmation du point de rendez-vous avec votre chauffeur.</p>
</div>
`,
    faqs: [
      {
        q: 'Y a-t-il des distributeurs à l\'aéroport de Marrakech ?',
        a: "Oui, plusieurs distributeurs et des bureaux de change sont installés dans le hall public des arrivées comme côté départs. Ils acceptent Visa et Mastercard, avec des frais fixes par retrait : privilégiez un retrait unique et conséquent.",
      },
      {
        q: 'Où acheter une carte SIM à l\'aéroport de Marrakech ?',
        a: "Aux comptoirs Maroc Telecom, Orange et inwi du hall des arrivées. Un forfait touristique avec data coûte quelques dizaines de dirhams, l'activation prend quelques minutes et le passeport est obligatoire. Une eSIM activée avant le départ évite entièrement cette étape.",
      },
      {
        q: 'Le wifi est-il gratuit à l\'aéroport de Marrakech ?',
        a: "Un réseau wifi est disponible dans le terminal. Il dépanne pour envoyer un message, mais reste inégal aux heures de pointe : pour prévenir un chauffeur de façon fiable, une eSIM ou une SIM locale est préférable.",
      },
      {
        q: 'Existe-t-il une consigne à bagages à Marrakech Ménara ?',
        a: "Oui, un service de consigne permet de déposer des bagages à la journée, utile lors d'une escale ou d'un vol de nuit. Le règlement se fait sur place, en espèces de préférence.",
      },
      {
        q: 'Comment demander une assistance à mobilité réduite ?',
        a: "Auprès de votre compagnie aérienne, au moins 48 heures avant le vol : c'est elle qui déclenche le service auprès de l'aéroport. Signalez-le également au comptoir d'enregistrement le jour du départ.",
      },
    ],
    cta: {
      heading: 'Sortez du terminal sans négocier',
      text: "Un chauffeur avec votre nom, un prix fixe par véhicule et la bonne porte de médina : les trois minutes de réservation qui vous évitent la file de taxis.",
      label: 'Réserver un transfert',
    },
  },
} satisfies PageContent;
