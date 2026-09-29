import type { PageContent } from '../types';

export default {
  fr: {
    title: "Guide touristique Marrakech dès l'aéroport Marrakech-Ménara",
    description: "Guide touristique à Marrakech dès l'aéroport de Marrakech-Ménara : visites de la médina, excursions Agafay et Atlas, tarifs 2026, guides officiels.",
    eyebrow: "Visites guidées · médina et excursions",
    h1: "Guide touristique à Marrakech : visites et excursions",
    lede: "À quinze minutes de l'aéroport de Marrakech-Ménara, la médina se comprend mal seul le premier jour. Un guide officiel sur une demi-journée bien choisie vous fait gagner plus de temps et d'argent qu'il n'en coûte. Voici les visites qui valent le coup, les vrais prix et comment éviter les faux guides.",
    widget: 'tours',
    highlights: [
      { icon: 'users', value: "300–500 MAD", label: "Guide officiel, demi-journée" },
      { icon: 'clock', value: "3–4 heures", label: "Pour comprendre la médina" },
      { icon: 'shield-check', value: "Carte officielle", label: "Délivrée par le ministère du Tourisme" },
    ],
    cardSections: [
      {
        eyebrow: "Idées de visites",
        heading: "Les visites guidées qui valent le coup à Marrakech",
        intro: "Toutes se rejoignent facilement depuis l'aéroport de Marrakech-Ménara ou depuis votre riad.",
        variant: 'feature',
        items: [
          { icon: 'map', title: "Médina et souks", text: "Le meilleur usage d'un guide, le premier jour : les quartiers, les portes, les souks des artisans et où acheter quoi, à quel prix.", tags: ["Demi-journée", "À pied"] },
          { icon: 'building', title: "Palais et monuments", text: "Palais de la Bahia, tombeaux saadiens, médersa Ben Youssef : sans commentaire, faute de panneaux explicatifs, la visite reste muette.", tags: ["2–3 heures", "Entrées en sus"] },
          { icon: 'sparkles', title: "Jardin Majorelle et Guéliz", text: "Le jardin bleu d'Yves Saint Laurent, le musée berbère et la ville nouvelle. Réservez les billets à l'avance, les files sont longues.", tags: ["2 heures", "Billets à réserver"] },
          { icon: 'sun', title: "Désert d'Agafay", text: "Le désert de pierre à 40 minutes de la ville : coucher de soleil sur l'Atlas, dîner sous tente, balade à dos de dromadaire ou en quad.", tags: ["Demi-journée", "Soirée"] },
          { icon: 'wave', title: "Vallée de l'Ourika et Imlil", text: "Villages berbères, cascades et premiers sommets du Haut Atlas, à une heure ou une heure trente. Le guide sert aussi d'interprète.", tags: ["Journée", "Randonnée"] },
          { icon: 'van', title: "Essaouira et Ouzoud", text: "La cité portuaire classée à 2 h 30, ou les cascades d'Ouzoud à 3 heures : des journées longues, plus confortables avec un chauffeur-guide.", tags: ["Journée", "Chauffeur-guide"] },
        ],
      },
    ],
    steps: {
      heading: "Réserver un guide à Marrakech sans mauvaise surprise",
      intro: "Trois points à régler avant de commencer, que vous réserviez en ligne ou sur place.",
      items: [
        { icon: 'shield-check', title: "Vérifiez la carte officielle", text: "Un guide agréé présente sans difficulté sa carte professionnelle du ministère du Tourisme, avec sa photo et son numéro." },
        { icon: 'clipboard', title: "Fixez durée et contenu", text: "Mettez-vous d'accord à l'avance sur la durée exacte, les lieux visités et ce qui est inclus : entrées, transport, déjeuner." },
        { icon: 'alert', title: "Refusez les arrêts en boutique", text: "Annoncez dès le départ que la visite ne comportera pas d'arrêt commercial. Un guide officiel l'accepte sans discuter." },
      ],
    },
    body: `
<h2>Guide officiel ou faux guide : la différence est réglementaire</h2>
<p>Un guide touristique marocain est titulaire d'une <strong>carte professionnelle délivrée par le ministère du Tourisme</strong>, avec sa photo et son numéro. Il a suivi une formation, passé un examen et exerce légalement. Demandez-la : un guide officiel la présente sans difficulté.</p>
<p>Les personnes qui abordent les visiteurs autour de Jemaa el-Fna ou aux portes de la médina pour « montrer le chemin » n'ont, dans leur grande majorité, pas cette carte. La visite se termine presque toujours dans une boutique qui leur verse une commission, et le prix annoncé au départ n'est jamais le prix final. C'est dès l'arrivée à l'aéroport de Marrakech-Ménara qu'il faut avoir ce réflexe en tête.</p>

<h2>Combien coûte un guide à Marrakech en 2026</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Prestation</th><th>Tarif indicatif</th><th>Durée</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Guide officiel, médina</strong></td><td class="num">300–500 MAD</td><td>Demi-journée</td></tr>
<tr><td><strong>Guide officiel, journée complète</strong></td><td class="num">500–800 MAD</td><td>8 heures</td></tr>
<tr><td><strong>Visite guidée en groupe</strong></td><td class="num">15–30 € / personne</td><td>3–4 heures</td></tr>
<tr><td><strong>Excursion avec chauffeur-guide</strong></td><td class="num">60–120 € / véhicule</td><td>Journée, Ourika ou Agafay</td></tr>
</tbody>
</table>
</div>
<p>Les tarifs s'entendent pour le guide, hors entrées de monuments, déjeuner et transport. Un pourboire de 50 à 100 MAD en fin de visite est d'usage si la prestation a été bonne, sans être obligatoire.</p>

<h2>Où un guide change vraiment quelque chose</h2>
<p><strong>La médina et les souks</strong>, le premier jour. En trois heures, vous comprenez la logique des quartiers, vous situez les portes et vous apprenez où acheter quoi et à quel prix : le reste du séjour devient beaucoup plus simple. <strong>Les monuments historiques</strong>, où l'absence de signalétique rend la visite muette sans commentaire. <strong>Les excursions dans l'Atlas et les vallées</strong>, où le guide fait aussi office d'interprète en berbère.</p>
<div class="callout">
<span class="callout-label">Où un guide ne sert à rien</span>
<p>Pour flâner à Jemaa el-Fna le soir, pour un dîner, une journée à la piscine ou Agafay en formule tout compris : le guide n'apporte rien, l'accompagnement fait déjà partie de la prestation.</p>
</div>

<h2>Réserver avant de partir ou sur place ?</h2>
<p>Votre <strong>riad ou hôtel</strong> travaille presque toujours avec un guide officiel qu'il connaît : c'est la solution la plus simple, et le prix reste négociable. Les <strong>plateformes en ligne</strong> permettent de comparer les avis, de choisir la langue et de bloquer le tarif à l'avance, ce qui est utile en haute saison. Enfin, les <strong>visites audioguidées</strong> proposées ci-dessus se font seul, avec votre téléphone et des écouteurs, à partir d'une dizaine d'euros : une alternative économique pour découvrir la médina à votre rythme, sans rendez-vous. Pour rejoindre la médina depuis l'aéroport, réservez votre <a href="/reserver-transfert/">transfert</a> ; pour une excursion en autonomie, voyez la <a href="/location-voiture/">location de voiture</a> et nos pages <a href="/blog/distance-essaouira-aeroport-marrakech/">Marrakech–Essaouira</a> et <a href="/blog/distance-ouarzazate-aeroport-marrakech/">Marrakech–Ouarzazate</a>.</p>
`,
    faqHeading: "Guide touristique à Marrakech : questions fréquentes",
    faqs: [
      { q: "Combien coûte un guide officiel à Marrakech ?", a: "Entre 300 et 500 MAD pour une demi-journée dans la médina, et 500 à 800 MAD pour une journée complète, hors entrées de monuments et déjeuner. Un pourboire de 50 à 100 MAD est d'usage si la prestation a été bonne." },
      { q: "Comment reconnaître un guide officiel à Marrakech ?", a: "Il détient une carte professionnelle délivrée par le ministère du Tourisme, avec sa photo et son numéro, et la présente sans difficulté. Les personnes qui abordent les visiteurs dans la rue pour proposer une visite n'en ont généralement pas." },
      { q: "Faut-il un guide pour visiter la médina de Marrakech ?", a: "Ce n'est pas obligatoire, mais une demi-journée guidée le premier jour est l'un des meilleurs investissements du séjour : vous comprenez les souks, vous situez les portes et vous circulez ensuite seul sans vous perdre." },
      { q: "Quelles excursions faire depuis Marrakech avec un guide ?", a: "Le désert d'Agafay à 40 minutes, la vallée de l'Ourika et Imlil dans le Haut Atlas à une heure ou une heure trente, et en journée Essaouira à 2 h 30 ou les cascades d'Ouzoud à 3 heures." },
      { q: "Comment éviter les visites qui finissent en boutique ?", a: "Annoncez au départ que la visite ne comportera pas d'arrêt commercial, et convenez de la durée et de ce qui est inclus. Un guide officiel accepte sans problème : c'est ce qui le distingue d'un rabatteur payé à la commission." },
      { q: "Peut-on réserver un guide avant d'arriver à l'aéroport de Marrakech ?", a: "Oui, par votre riad ou hôtel, ou sur une plateforme en ligne qui permet de comparer les avis et de choisir la langue. En haute saison et pour une langue rare, réservez plusieurs jours à l'avance." },
      { q: "Le guide peut-il venir me chercher à l'aéroport de Marrakech-Ménara ?", a: "Les guides ne font en général pas le transport. Réservez plutôt un transfert jusqu'à votre riad, puis retrouvez votre guide le lendemain matin à la porte de médina la plus proche." },
      { q: "Qu'est-ce qu'une visite audioguidée de Marrakech ?", a: "Un parcours commenté que vous suivez seul avec votre téléphone et des écouteurs, à partir d'une dizaine d'euros. Moins personnalisé qu'un guide officiel, il permet de découvrir la médina ou les monuments à votre rythme, sans rendez-vous." },
      { q: "Faut-il laisser un pourboire au guide ?", a: "Ce n'est pas obligatoire, mais d'usage lorsque la visite a été bonne : 50 à 100 MAD pour une demi-journée, un peu plus pour une journée complète ou un petit groupe." },
    ],
    cta: {
      heading: "De l'aéroport au riad, avant la première visite",
      text: "Un chauffeur vous attend à l'aéroport de Marrakech-Ménara et vous dépose à la porte de médina la plus proche : le lendemain, votre guide vous y retrouve.",
      label: "Réserver un transfert",
    },
  },
} satisfies PageContent;
