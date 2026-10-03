import type { ArticleContent } from '../types';

export default {
  fr: {
    title: "Taxi en ville et vers l'aéroport Marrakech-Ménara : prix",
    description: "Taxi en ville à Marrakech : petit ou grand taxi, compteur, prix des courses (15 à 50 DH), paiement et retour vers l'aéroport de Marrakech-Ménara.",
    eyebrow: 'Transports',
    h1: "Taxi en ville à Marrakech : compteur, prix des courses et bons réflexes",
    lede: "Marrakech affiche ses tarifs de taxi au rang de l'aéroport, et c'est une bonne nouvelle. Reste à savoir les lire, à choisir le bon gabarit de voiture et à se mettre d'accord avant que les bagages ne partent dans le coffre.",
    excerpt: "Tarifs jour et nuit, petit ou grand taxi, compteur, monnaie : tout ce qu'il faut savoir avant de monter dans un taxi marocain.",
    date: '2026-09-14',
    facts: [
      { label: 'Aéroport → médina (jour)', value: '100–150', sub: 'MAD' },
      { label: 'Aéroport → médina (nuit)', value: '150–240', sub: 'MAD' },
      { label: 'Course en ville', value: '15–50', sub: 'MAD' },
      { label: 'Petit taxi', value: '3', sub: 'passagers max' },
    ],
    body: `
<div class="callout"><span class="callout-label">Vous arrivez en avion ?</span><p>Prix de la station, petit ou grand taxi et mode d'emploi à la sortie du terminal : voir notre page <a href="/taxi-aeroport-marrakech/">taxi aéroport Marrakech</a>.</p></div>
<h2>Ce que vous devriez payer</h2>
<p>À la sortie du hall des arrivées, la station de taxis est immédiatement devant vous, et vous serez abordé avant même de l'atteindre. Contrairement à d'autres aéroports marocains, Marrakech affiche officiellement ses tarifs sur un panneau, par zone de destination. C'est votre meilleur outil : il ne s'agit pas de marchander à l'aveugle, mais de faire coïncider le prix annoncé avec le prix affiché.</p>
<p>Pour la médina, Guéliz ou l'Hivernage — l'écrasante majorité des arrivées —, la fourchette raisonnable est de <strong>100 à 150 MAD en journée</strong> et de <strong>150 à 240 MAD après la tombée de la nuit</strong>, pour la voiture entière. La Palmeraie, plus éloignée, monte naturellement au-dessus.</p>
<div class="callout">
<span class="callout-label">La phrase à dire</span>
<p>« Médina, Bab Doukkala — c'est bien 100 dirhams, comme sur le panneau ? » Nommer la porte, citer l'affichage et confirmer le montant avant d'ouvrir le coffre règle l'essentiel des malentendus. Si le chauffeur refuse, le suivant acceptera : il y a toujours une file.</p>
</div>

<h2>Petit taxi ou grand taxi : choisissez avant de monter</h2>
<p>Les petits taxis beiges de Marrakech sont limités à <strong>trois passagers</strong>. C'est la source de friction la plus fréquente à la station : une famille de quatre se voit proposer deux voitures, et l'addition double. Les grands taxis acceptent jusqu'à six passagers et disposent d'un vrai coffre.</p>
<p>Dès que vous êtes trois avec de grandes valises, ou quatre et plus, demandez d'emblée un grand taxi — le prix par personne reste alors très correct. Les grands taxis assurent également les liaisons vers l'extérieur : Ourika, Agafay, Essaouira.</p>

<h2>Le compteur, en ville</h2>
<p>Au départ de l'aéroport, la pratique établie est un tarif forfaitaire affiché au panneau, pas le compteur. En ville, les petits taxis sont censés en avoir un, mais <strong>il est rarement enclenché avec les touristes</strong> : demandez-le en montant, ou convenez du prix avant de partir.</p>
<p>Les ordres de grandeur en ville : <strong>15 à 30 MAD</strong> pour une course courte, <strong>30 à 50 MAD</strong> pour une traversée plus longue, avec une majoration d'environ 50 % la nuit. Si l'on vous annonce 100 MAD pour aller de Jemaa el-Fna à Guéliz, c'est le prix touriste : proposez 30 et attendez.</p>

<h2>Espèces, monnaie et petits billets</h2>
<p>Prévoyez des dirhams : la carte n'est presque jamais acceptée et la monnaie manque souvent. Les distributeurs du hall des arrivées fonctionnent bien, mais délivrent volontiers des billets de 200 MAD, avec lesquels un chauffeur ne rendra pas la monnaie sur une course à 100. Retirez, puis fractionnez dès que possible — au café du terminal ou à la boutique — pour disposer de coupures de 50 et 100 MAD.</p>

<h2>Quand le taxi n'est pas le bon choix</h2>
<p>Il perd de son intérêt dans trois cas précis. Les <strong>arrivées très tardives</strong>, où le barème de nuit rapproche le taxi du prix d'un transfert réservé sans en offrir le confort. Les <strong>groupes de quatre et plus</strong>, qui paient souvent deux véhicules. Et les <strong>riads difficiles à situer</strong>, où le chauffeur vous déposera à la porte qui l'arrange plutôt qu'à la plus proche.</p>
<p>Dans ces situations, comparez avec un <a href="/reserver-transfert/">transfert à prix fixe</a> : à 27 € le véhicule jusqu'à sept places, il devient le moins cher dès que vous êtes quatre.</p>
`,
    faqs: [
      {
        q: "Combien coûte un taxi de l'aéroport de Marrakech à la médina ?",
        a: "Le panneau officiel de la station affiche environ 100 à 150 MAD en journée vers la médina, Guéliz et l'Hivernage, et 150 à 240 MAD la nuit. Le prix vaut pour la voiture entière, pas par passager.",
      },
      {
        q: "Le compteur fonctionne-t-il dans les taxis de Marrakech ?",
        a: "Au départ de l'aéroport, non : la pratique établie est un forfait affiché au panneau. En ville, les petits taxis sont censés en avoir un, mais il est rarement enclenché avec les touristes. Demandez-le en montant, ou convenez du prix avant de partir.",
      },
      {
        q: 'Petit taxi ou grand taxi, quelle différence ?',
        a: "Le petit taxi est la berline beige de Marrakech, limitée à trois passagers et cantonnée à la ville. Le grand taxi accepte jusqu'à six personnes, dispose d'un vrai coffre et assure aussi les liaisons vers l'extérieur. À quatre et plus, demandez directement un grand taxi.",
      },
      {
        q: 'Peut-on payer un taxi par carte à Marrakech ?',
        a: "Non, prévoyez des espèces en dirhams. Les taxis n'acceptent pratiquement jamais la carte et les chauffeurs rendent difficilement la monnaie sur un gros billet : munissez-vous de coupures de 50 et 100 MAD.",
      },
      {
        q: 'Combien coûte une course de taxi dans Marrakech ?',
        a: "De 15 à 30 MAD pour une course courte en centre-ville et de 30 à 50 MAD pour une traversée plus longue, avec une majoration d'environ 50 % la nuit. Un tarif annoncé à 100 MAD pour un trajet intra-muros est un prix touriste.",
      },
    ],
    cta: {
      heading: 'Évitez la négociation à une heure du matin',
      text: "Un prix fixe bloqué avant le départ, un chauffeur qui attend avec votre nom et qui connaît la bonne porte de la médina.",
      label: 'Voir les prix des transferts',
    },
  },
} satisfies ArticleContent;
