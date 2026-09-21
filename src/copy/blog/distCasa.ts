import type { ArticleContent } from '../types';

export default {
  fr: {
    title: 'Marrakech → Casablanca : train, bus et route',
    description: "Aller de l'aéroport de Marrakech à Casablanca : 240 km, autoroute, train ONCF depuis la gare de Guéliz, bus CTM et transfert privé, avec prix et durées.",
    eyebrow: 'Distances',
    h1: 'De l\'aéroport de Marrakech à Casablanca',
    lede: "Deux cent quarante kilomètres d'autoroute, ou trois heures de train depuis la gare de Guéliz. Le choix dépend surtout d'un détail : aucune ligne ferroviaire ne dessert l'aéroport, il faut d'abord rejoindre la gare.",
    excerpt: "Train ONCF, bus CTM, autoroute ou transfert privé entre le RAK et Casablanca : durées, prix et le maillon d'accès à la gare.",
    date: '2026-09-02',
    facts: [
      { label: 'Distance', value: '240', sub: 'km' },
      { label: 'Autoroute', value: '2 h 30', sub: 'de route' },
      { label: 'Train ONCF', value: '≈ 3 h', sub: 'depuis Guéliz' },
      { label: 'Billet 2e classe', value: '100–140', sub: 'MAD' },
    ],
    body: `
<h2>Le train, la meilleure option — avec une réserve</h2>
<p>L'ONCF relie Marrakech à Casablanca en environ <strong>trois heures</strong>, avec des départs réguliers tout au long de la journée. Le billet coûte de l'ordre de <strong>100 à 140 MAD en seconde classe</strong> et 150 à 210 MAD en première, avec des sièges confortables et des bagages à bord.</p>
<p>La réserve tient au point de départ : la gare de Marrakech se situe dans le quartier de <strong>Guéliz</strong>, pas à l'aéroport. Comptez un taxi de 50 à 70 MAD depuis le RAK, soit dix à quinze minutes, plus une marge d'attente. Le trajet total approche donc les quatre heures.</p>
<p>Attention également à la gare d'arrivée : <strong>Casa-Voyageurs</strong> est la gare principale, tandis que <strong>Casa-Port</strong> est plus proche du centre et de la corniche. Vérifiez laquelle dessert votre destination.</p>

<h2>Les autres options</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Prix</th><th>Durée porte à porte</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Train ONCF</strong></td><td class="num">100–140 MAD + taxi</td><td class="num">≈ 4 h</td></tr>
<tr><td><strong>Bus CTM / Supratours</strong></td><td class="num">100–150 MAD + taxi</td><td class="num">4 h–4 h 30</td></tr>
<tr><td><strong>Transfert privé</strong></td><td class="num">130–170 € / véhicule</td><td class="num">2 h 30</td></tr>
<tr><td><strong>Voiture de location</strong></td><td class="num">dès 25 € / jour + péages</td><td class="num">2 h 30</td></tr>
</tbody>
</table>
</div>
<p>L'autoroute A7 relie les deux villes sans difficulté, avec des péages et des aires régulières. C'est une route facile, rapide et monotone.</p>

<h2>Cas particulier : la correspondance aérienne</h2>
<p>Si vous atterrissez à Marrakech et devez prendre un vol à Casablanca Mohammed V, deux précisions comptent. L'aéroport de Casablanca dispose de <strong>sa propre gare ferroviaire</strong>, directement reliée à Casa-Voyageurs : le train est donc pertinent de bout en bout. Et il faut compter, au total, cinq à six heures entre les deux terminaux en incluant les accès — prévoyez une marge, ou une nuit sur place.</p>
<div class="callout">
<span class="callout-label">L'erreur à éviter en réservant</span>
<p>CMN (Casablanca Mohammed V) apparaît souvent en tête des résultats de recherche sur le Maroc, et se trouve à 240 kilomètres de Marrakech. Si votre destination est Marrakech, vérifiez que votre billet indique bien <strong>RAK</strong>.</p>
</div>

<h2>Quelle option choisir</h2>
<p><strong>Le train</strong> pour un ou deux voyageurs sans contrainte horaire serrée : c'est confortable, ponctuel et peu cher. <strong>Le transfert privé</strong> à partir de trois ou quatre passagers, ou avec des horaires contraints : vous partez du terminal et vous arrivez à votre adresse, sans changement. <strong>La voiture de location</strong> uniquement si vous comptez continuer vers Rabat ou la côte.</p>
`,
    faqs: [
      {
        q: 'Y a-t-il un train entre l\'aéroport de Marrakech et Casablanca ?',
        a: "Pas depuis l'aéroport : la gare ONCF de Marrakech se situe dans le quartier de Guéliz, à dix ou quinze minutes en taxi du terminal. De là, le train rejoint Casablanca en environ trois heures.",
      },
      {
        q: 'Combien coûte le train Marrakech–Casablanca ?',
        a: "De 100 à 140 MAD en seconde classe et de 150 à 210 MAD en première, avec des départs réguliers tout au long de la journée. Ajoutez 50 à 70 MAD de taxi pour rejoindre la gare depuis l'aéroport.",
      },
      {
        q: 'Quelle distance sépare Marrakech de Casablanca ?',
        a: "Environ 240 kilomètres par l'autoroute A7, soit deux heures trente de route en voiture, péages compris. Le train met environ trois heures de gare à gare.",
      },
      {
        q: 'Combien de temps prévoir entre le RAK et l\'aéroport de Casablanca ?',
        a: "Cinq à six heures de terminal à terminal en incluant les accès. L'aéroport Mohammed V dispose de sa propre gare ferroviaire reliée à Casa-Voyageurs, ce qui rend le train pertinent, mais la marge reste indispensable.",
      },
    ],
  },
} satisfies ArticleContent;
