import type { PageContent } from '../types';

export default {
  fr: {
    title: "Services aéroport Marrakech-Ménara : wifi, change, salons",
    description: "Services de l'aéroport de Marrakech-Ménara : distributeurs, change, SIM et eSIM, wifi, salons VIP, consigne, filmage des bagages, santé et assistance PMR.",
    eyebrow: "Marrakech-Ménara · Services",
    h1: "Services aéroport Marrakech-Ménara",
    lede: "Argent, connexion, salons, bagages, santé : tout ce que vous trouverez réellement dans les terminaux de l'aéroport de Marrakech-Ménara, où le trouver et ce qu'il faut régler avant de sortir du hall.",
    highlights: [
      { icon: 'building', value: "T1 · T2", label: "Deux terminaux reliés à pied" },
      { icon: 'wifi', value: "Gratuit", label: "Wifi dans les terminaux" },
      { icon: 'medical', value: "24 h/24", label: "Unité médicale d'urgence" },
    ],
    cardSections: [
      {
        eyebrow: "Services essentiels",
        heading: "Les services essentiels de l'aéroport de Marrakech-Ménara",
        intro: "Ce dont vous aurez besoin dès l'atterrissage, et où le trouver dans le terminal.",
        variant: 'feature',
        items: [
          { icon: 'wallet', title: "Argent et change", text: "Distributeurs et bureaux de change dans le hall des arrivées et côté départs. Le dirham ne s'achète pas hors du Maroc : retirez avant de sortir.", tags: ["Visa & Mastercard", "Change", "MAD"], link: { key: 'money', label: "Le guide de l'argent" } },
          { icon: 'sim', title: "SIM, eSIM et wifi", text: "Comptoirs Maroc Telecom, Orange et inwi au hall des arrivées, passeport obligatoire. Le wifi gratuit dépanne ; une eSIM activée avant le vol évite la file.", tags: ["4G", "eSIM", "Wifi gratuit"], link: { key: 'esim', label: "Choisir une eSIM" } },
          { icon: 'star', title: "Salons VIP", text: "Le Pearl Lounge, le salon Royal Air Maroc et le service Convives de Marque de l'ONDA offrent sièges, wifi, prises et buffet léger, avec accès à l'unité.", tags: ["Wifi", "Buffet", "Accès payant"], link: { key: 'vipLounges', label: "Accès et tarifs" } },
          { icon: 'medical', title: "Santé et urgences", text: "Une unité médicale d'urgence intervient 24 h/24 dans l'aéroport. Gardez vos médicaments en cabine, avec l'ordonnance, plutôt qu'en soute.", tags: ["24 h/24", "Premiers secours"] },
          { icon: 'accessibility', title: "Assistance PMR", text: "Fauteuil roulant et accompagnement de l'avion jusqu'à la sortie. La demande se fait auprès de votre compagnie, au moins 48 heures avant le vol.", tags: ["Fauteuil", "Accompagnement", "48 h avant"] },
          { icon: 'shield-check', title: "Fast track", text: "Passage prioritaire aux contrôles, avec un agent qui vous accompagne. Utile surtout pour les arrivées du soir, quand les files s'allongent.", tags: ["Coupe-file", "Arrivée et départ"], link: { key: 'fastTrack', label: "Est-ce utile ?" } },
        ],
      },
      {
        eyebrow: "Commodités",
        heading: "Les commodités du terminal",
        intro: "Pour attendre, manger, prier ou retrouver son chauffeur dans de bonnes conditions.",
        variant: 'compact',
        items: [
          { icon: 'shop', title: "Boutiques hors taxes", text: "Parfums, cosmétiques, artisanat et produits locaux, surtout après la sûreté." },
          { icon: 'coffee', title: "Cafés et restauration", text: "Cafés côté public, offre plus large en zone d'embarquement, aux prix d'aéroport." },
          { icon: 'prayer', title: "Salles de prière", text: "Dans les deux terminaux, côté public comme en zone d'embarquement." },
          { icon: 'baby', title: "Espaces familles", text: "Tables à langer et points d'eau pour voyager avec de jeunes enfants." },
          { icon: 'wifi', title: "Wifi gratuit", text: "Réseau ouvert dans les terminaux, plus lent aux heures de pointe." },
          { icon: 'sim', title: "Comptoirs téléphonie", text: "Maroc Telecom, Orange et inwi vendent des forfaits touristiques à l'arrivée." },
          { icon: 'tag', title: "Loueurs de voitures", text: "Comptoirs des agences internationales et locales dans le hall des arrivées." },
          { icon: 'van', title: "Rendez-vous chauffeurs", text: "Les chauffeurs attendent devant le hall des arrivées, pancarte à votre nom." },
        ],
      },
      {
        eyebrow: "Bagages",
        heading: "Les services bagages à l'aéroport de Marrakech",
        intro: "Déposer une valise, la protéger, ou réagir vite si elle n'arrive pas.",
        variant: 'feature',
        items: [
          { icon: 'lock', title: "Consigne à bagages", text: "Une consigne dans le hall des arrivées garde vos valises quelques heures ou une journée : pratique pour une escale ou un départ en soirée.", tags: ["Hall des arrivées", "Payant"], link: { key: 'layover', label: "Escale à Marrakech" } },
          { icon: 'luggage', title: "Filmage des valises", text: "Des comptoirs proposent de filmer vos bagages avant l'enregistrement, pour les protéger des chocs et des ouvertures.", tags: ["Avant l'enregistrement", "Payant"] },
          { icon: 'trolley', title: "Chariots et porteurs", text: "Des chariots sont à disposition dans les halls. Des porteurs proposent aussi leurs services : convenez du prix avant de leur confier vos valises.", tags: ["Chariots", "Porteurs"] },
          { icon: 'alert', title: "Bagage perdu ou abîmé", text: "Déclarez-le au comptoir bagages de votre compagnie avant de quitter la zone de livraison, avec la carte d'embarquement et l'étiquette.", tags: ["Déclaration immédiate", "Rapport PIR"] },
        ],
      },
    ],
    services: {
      heading: "Rejoindre Marrakech depuis l'aéroport",
      intro: "L'aéroport est à 6 km de la médina. Voici les façons d'y aller, avec les prix vérifiés.",
      items: [
        { icon: 'bus', key: 'bus19', title: "Bus 19 (ALSA)", text: "30 MAD par personne, environ 20 minutes jusqu'à Jemaa el-Fna, dernier départ vers 23 h 30.", cta: "Horaires et arrêts" },
        { icon: 'car', key: 'transfers', title: "Taxi officiel", text: "100 à 150 MAD de jour, 150 à 240 MAD la nuit, tarifs affichés à la station.", cta: "Tarifs des taxis" },
        { icon: 'van', key: 'bookTransfer', title: "Transfert privé", text: "Dès 27 € par véhicule, chauffeur à votre nom et vol suivi, même la nuit.", cta: "Réserver" },
        { icon: 'tag', key: 'carRental', title: "Location de voiture", text: "Comptoirs dans le hall des arrivées, à partir de 25 € par jour.", cta: "Comparer" },
        { icon: 'parking', key: 'parking', title: "Parking de l'aéroport", text: "6 DH la première heure et 42 DH les 24 heures (grille ONDA), face aux terminaux.", cta: "Voir le parking" },
        { icon: 'plane-landing', key: 'arrivals', title: "Arrivées en direct", text: "Suivez un vol et l'heure réelle d'atterrissage avant de partir.", cta: "Voir les arrivées" },
      ],
    },
    body: `
<h2>Retirer de l'argent à l'aéroport de Marrakech</h2>
<p>Plusieurs distributeurs et des bureaux de change sont installés dans le hall public des arrivées, après la douane, ainsi que côté départs. Les distributeurs acceptent Visa et Mastercard et appliquent des frais fixes par retrait : mieux vaut un retrait conséquent que trois petits. Le taux des bureaux de change de l'aéroport est correct sans être le meilleur de la ville ; changez de quoi tenir deux jours et complétez à Guéliz si vous restez longtemps.</p>
<p>Deux règles locales à connaître : le dirham ne s'achète pas hors du Maroc, et il ne s'exporte pas non plus. Prévoyez donc de rechanger vos billets restants <strong>avant</strong> la police des frontières au départ, et conservez le reçu de votre change initial. Tous les conseils dans notre guide <a href="/blog/argent-maroc/">argent et change au Maroc</a>.</p>

<h2>Se connecter dès l'atterrissage</h2>
<p>Le wifi gratuit du terminal dépanne pour envoyer un message, sans plus. Pour être joignable dès la sortie, utile pour prévenir un chauffeur ou un riad, deux options :</p>
<ul>
<li><strong>Carte SIM locale</strong> : les comptoirs Maroc Telecom, Orange et inwi se trouvent dans le hall des arrivées. Un forfait touristique avec data coûte quelques dizaines de dirhams. Passeport obligatoire, activation en quelques minutes. Comparatif dans notre article <a href="/blog/cartes-sim-maroc/">cartes SIM au Maroc</a>.</li>
<li><strong>eSIM</strong> : activée avant le départ, elle fonctionne dès l'atterrissage, sans file d'attente ni papiers. C'est la solution la plus simple si votre téléphone est compatible. Voir notre page <a href="/esim-maroc/">eSIM Maroc</a>.</li>
</ul>

<h2>Bagage perdu ou endommagé : la démarche</h2>
<p>Si votre valise n'apparaît pas sur le tapis, ne quittez pas la zone de livraison : rendez-vous au comptoir bagages de votre compagnie ou de son assistant au sol, avec votre carte d'embarquement et l'étiquette collée au dos du billet. On vous remet un <strong>rapport d'irrégularité (PIR)</strong> et un numéro de dossier, indispensables pour suivre la valise et être indemnisé. Donnez l'adresse exacte de votre hébergement : les bagages retrouvés sont livrés, mais un riad de médina se trouve plus facilement avec le nom de la porte la plus proche.</p>

<h2>Voyager avec des enfants ou à mobilité réduite</h2>
<p>L'assistance aux passagers à mobilité réduite se demande à la compagnie aérienne au moins 48 heures avant le vol : c'est elle qui déclenche le service auprès de l'aéroport. Signalez-le de nouveau au comptoir d'enregistrement le jour du départ. Avec des enfants, prévoyez de l'eau et de quoi grignoter : les files de la police des frontières ne se traversent pas avec un plateau, et les salons deviennent un vrai confort en cas de retard.</p>
<p>Côté formalités, la fiche de police a été supprimée en septembre 2019 : seul le passeport est contrôlé, à l'entrée comme à la sortie. Les ressortissants de l'Union européenne, de Suisse, du Royaume-Uni, du Canada et des États-Unis n'ont pas besoin de visa pour un séjour touristique de 90 jours, avec un passeport valable pendant tout le séjour.</p>
<div class="callout">
<span class="callout-label">Les trois choses à faire avant de sortir du hall</span>
<p>Retirer des dirhams et les fractionner en coupures de 50 et 100. Activer votre connexion, eSIM ou SIM locale. Et savoir précisément où vous allez : nom du riad, nom de la porte de médina, ou point de rendez-vous avec votre chauffeur.</p>
</div>
`,
    spotlight: {
      icon: 'sparkles',
      heading: "Un aéroport en pleine transformation",
      text: "Conçu pour environ 8 millions de passagers par an, l'aéroport de Marrakech-Ménara en a accueilli <strong>9,3 millions en 2024</strong>. Dans le cadre du plan « Aéroports 2030 » de l'ONDA, le terminal doit être agrandi pour atteindre <strong>16 millions de passagers par an d'ici 2028</strong>. Depuis mars 2025, les scanners à l'entrée du terminal ont été supprimés pour réduire l'attente. Pour le plan des terminaux, voir notre <a href=\"/guide-aeroport/\">guide de l'aéroport</a>.",
    },
    faqHeading: "Services de l'aéroport de Marrakech : questions fréquentes",
    faqs: [
      { q: "Y a-t-il des distributeurs à l'aéroport de Marrakech ?", a: "Oui, plusieurs distributeurs et bureaux de change se trouvent dans le hall public des arrivées comme côté départs. Ils acceptent Visa et Mastercard, avec des frais fixes par retrait : privilégiez un retrait unique et conséquent." },
      { q: "Le wifi est-il gratuit à l'aéroport de Marrakech-Ménara ?", a: "Oui, un wifi gratuit est disponible dans les terminaux. Il dépanne pour un message, mais reste inégal aux heures de pointe : pour joindre un chauffeur de façon fiable, une eSIM ou une SIM locale est préférable." },
      { q: "Où acheter une carte SIM à l'aéroport de Marrakech ?", a: "Aux comptoirs Maroc Telecom, Orange et inwi du hall des arrivées. Un forfait touristique avec data coûte quelques dizaines de dirhams, l'activation prend quelques minutes et le passeport est obligatoire." },
      { q: "Existe-t-il une consigne à bagages à l'aéroport de Marrakech ?", a: "Oui, une consigne dans le hall des arrivées permet de déposer des valises quelques heures ou une journée, pratique pour une escale ou un vol en soirée. Le règlement se fait sur place." },
      { q: "Quels salons VIP trouve-t-on à l'aéroport de Marrakech-Ménara ?", a: "Le Pearl Lounge, le salon de Royal Air Maroc et le service Convives de Marque de l'ONDA. L'accès se fait par votre billet ou statut, par certaines cartes ou programmes, ou à l'unité, pour environ 25 à 45 € selon le salon." },
      { q: "Y a-t-il un service médical à l'aéroport de Marrakech ?", a: "Oui, une unité médicale d'urgence intervient 24 h/24 dans l'aéroport pour les premiers soins. Gardez vos traitements en bagage cabine avec l'ordonnance : les pharmacies sont en ville." },
      { q: "Y a-t-il une salle de prière à l'aéroport de Marrakech ?", a: "Oui, des salles de prière sont aménagées dans les deux terminaux, côté public et en zone d'embarquement." },
      { q: "Comment demander une assistance à mobilité réduite ?", a: "Auprès de votre compagnie aérienne, au moins 48 heures avant le vol : c'est elle qui déclenche le service auprès de l'aéroport. Signalez-le également au comptoir d'enregistrement le jour du départ." },
    ],
    cta: {
      heading: "Sortez du terminal sans négocier",
      text: "Un chauffeur avec votre nom, un prix fixe par véhicule et la bonne porte de médina : les trois minutes de réservation qui vous évitent la file de taxis.",
      label: "Réserver un transfert",
    },
  },
} satisfies PageContent;
