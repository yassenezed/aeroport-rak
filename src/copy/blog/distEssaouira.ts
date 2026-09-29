import type { ArticleContent } from '../types';

export default {
  fr: {
    title: "Aéroport Marrakech-Ménara → Essaouira : distance, transports",
    description: "Aller de l'aéroport de Marrakech-Ménara à Essaouira : 180 km, 2 h 30 de route, prix du bus CTM et Supratours, transfert privé et location de voiture.",
    eyebrow: 'Distances',
    h1: 'De l\'aéroport de Marrakech à Essaouira',
    lede: "Cent quatre-vingts kilomètres de route droite à travers l'arganeraie, deux heures trente, et dix degrés de moins à l'arrivée. Voici les quatre façons de faire ce trajet et ce qu'elles coûtent.",
    excerpt: "180 km et 2 h 30 entre le RAK et Essaouira : bus, transfert privé, grand taxi ou voiture de location, avec les prix réels.",
    date: '2026-09-03',
    facts: [
      { label: 'Distance', value: '180', sub: 'km' },
      { label: 'Durée', value: '2 h 30', sub: 'de route' },
      { label: 'Bus', value: '80–120', sub: 'MAD' },
      { label: 'Transfert privé', value: '≈ 95 €', sub: 'par véhicule' },
    ],
    body: `
<h2>Les options, comparées</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Prix</th><th>Durée</th><th>Départ depuis</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Transfert privé</strong></td><td class="num">≈ 95 € / véhicule</td><td class="num">2 h 30</td><td>Directement l'aéroport</td></tr>
<tr><td><strong>Bus CTM ou Supratours</strong></td><td class="num">80–120 MAD / personne</td><td class="num">3 h–3 h 30</td><td>Gare routière de Marrakech</td></tr>
<tr><td><strong>Grand taxi</strong></td><td class="num">600–900 MAD / véhicule</td><td class="num">2 h 30</td><td>Station, à négocier</td></tr>
<tr><td><strong>Voiture de location</strong></td><td class="num">dès 25 € / jour + carburant</td><td class="num">2 h 30</td><td>Comptoirs de l'aéroport</td></tr>
</tbody>
</table>
</div>
<p>Le point souvent oublié : les bus <strong>ne partent pas de l'aéroport</strong> mais de la gare routière de Marrakech. Il faut donc ajouter un taxi et une marge d'attente, ce qui rapproche la durée totale des quatre heures.</p>

<h2>La route</h2>
<p>La N8 puis la R207 traversent l'arganeraie sur un axe régulier, bien revêtu, sans difficulté particulière. C'est une belle route, avec quelques haltes classiques — les coopératives d'huile d'argan, et les chèvres dans les arganiers, dont la mise en scène est devenue une attraction payante à la sortie de laquelle il vaut mieux ne pas s'arrêter.</p>
<p>Comptez deux heures trente en conduisant normalement. Les derniers kilomètres à l'approche d'Essaouira sont souvent venteux : c'est la signature de la ville.</p>

<h2>Quelle option pour quel voyageur</h2>
<p><strong>Le bus</strong> reste imbattable en prix, à 80 à 120 MAD par personne selon la compagnie et le confort. CTM et Supratours sont fiables, climatisés, avec des bagages en soute. C'est le bon choix à une ou deux personnes, sans contrainte horaire.</p>
<p><strong>Le transfert privé</strong> devient rationnel dès trois ou quatre passagers : 95 € par véhicule contre 400 MAD pour quatre billets de bus plus deux taxis d'accès, l'écart se réduit fortement — et vous partez directement du terminal, sans passer par la gare routière.</p>
<p><strong>La voiture de location</strong> s'impose si vous comptez rayonner : Sidi Kaouki, Diabat, les plages au sud d'Essaouira ne sont pas desservies en transport public.</p>
<div class="callout">
<span class="callout-label">Si vous atterrissez le soir</span>
<p>Ne partez pas le soir même. La route de nuit n'a aucun intérêt, les bus ne circulent plus tard, et arriver à Essaouira à minuit pour chercher un riad dans la médina fortifiée est le meilleur moyen de mal commencer. Dormez à Marrakech et prenez la route au matin.</p>
</div>

<h2>Combien de temps rester</h2>
<p>Essaouira mérite mieux qu'une excursion à la journée : avec cinq heures de route aller-retour, il ne vous resterait que quelques heures sur place. <strong>Deux nuits</strong> permettent de voir la médina classée, le port, les remparts, une plage et de dîner deux fois au poisson — ce qui est le minimum pour comprendre la différence d'atmosphère avec Marrakech.</p>
`,
    faqs: [
      {
        q: 'Quelle distance sépare Marrakech d\'Essaouira ?',
        a: "Environ 180 kilomètres, soit deux heures trente de route par la N8 puis la R207, à travers l'arganeraie. La route est régulière et bien revêtue, sans difficulté particulière.",
      },
      {
        q: 'Comment aller de l\'aéroport de Marrakech à Essaouira ?',
        a: "En transfert privé depuis le terminal, autour de 95 € par véhicule, en bus CTM ou Supratours depuis la gare routière de Marrakech pour 80 à 120 MAD par personne, en grand taxi négocié, ou en voiture de location.",
      },
      {
        q: 'Les bus pour Essaouira partent-ils de l\'aéroport de Marrakech ?',
        a: "Non, ils partent de la gare routière de Marrakech. Il faut donc ajouter un taxi depuis l'aéroport et une marge d'attente, ce qui porte le trajet total à environ quatre heures.",
      },
      {
        q: 'Peut-on faire Essaouira en excursion à la journée depuis Marrakech ?',
        a: "C'est possible mais peu satisfaisant : cinq heures de route aller-retour ne laissent que quelques heures sur place. Deux nuits permettent de voir la médina, le port, les remparts et une plage sans courir.",
      },
    ],
    cta: {
      heading: 'Directement du terminal à Essaouira',
      text: "Sans passer par la gare routière : un véhicule privé, prix fixe, jusqu'à sept passagers.",
      label: 'Voir les prix',
    },
  },
} satisfies ArticleContent;
