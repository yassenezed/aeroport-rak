import type { ArticleContent } from '../types';

export default {
  fr: {
    title: "Carte SIM à l'aéroport Marrakech-Ménara : quel opérateur ?",
    description: "Acheter une carte SIM à l'aéroport de Marrakech-Ménara : forfaits touristiques des trois opérateurs, prix, couverture dans l'Atlas et alternative eSIM.",
    eyebrow: 'Pratique',
    h1: 'Quelle carte SIM choisir au Maroc',
    lede: "Trois opérateurs, des forfaits touristiques à quelques dizaines de dirhams et des comptoirs dans le hall des arrivées. Voici lequel choisir selon votre itinéraire, et quand une eSIM fait mieux l'affaire.",
    excerpt: "Maroc Telecom, Orange ou inwi : prix, données incluses, couverture dans l'Atlas et comparaison avec une eSIM activée avant le départ.",
    date: '2026-09-11',
    body: `
<h2>Les trois opérateurs</h2>
<p>Le marché marocain se partage entre <strong>Maroc Telecom (IAM)</strong>, <strong>Orange Maroc</strong> et <strong>inwi</strong>. Tous trois disposent de comptoirs dans le hall des arrivées de l'aéroport de Marrakech, ouverts sur une large amplitude horaire, et proposent des forfaits prépayés conçus pour les visiteurs.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Opérateur</th><th>Point fort</th><th>Couverture</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Maroc Telecom</strong></td><td>La meilleure couverture hors des villes</td><td>Excellente, y compris Atlas et sud</td></tr>
<tr><td><strong>Orange Maroc</strong></td><td>Bon rapport données/prix, interface familière</td><td>Très bonne en zones urbaines et touristiques</td></tr>
<tr><td><strong>inwi</strong></td><td>Souvent le moins cher en données</td><td>Bonne en ville, plus irrégulière en montagne</td></tr>
</tbody>
</table>
</div>
<p>Le critère décisif n'est pas le prix, qui se tient dans un mouchoir, mais <strong>votre itinéraire</strong>. Si vous restez à Marrakech, Essaouira et sur les grands axes, les trois conviennent. Si vous prévoyez l'Atlas, les vallées, Imlil ou la route d'Ouarzazate, Maroc Telecom reste le choix le plus sûr.</p>

<h2>Ce que coûte un forfait touristique</h2>
<p>Comptez <strong>50 à 100 MAD</strong> pour une carte SIM prépayée incluant plusieurs gigaoctets de données valables une à quatre semaines, souvent avec un crédit d'appels national. Les recharges se trouvent partout : boutiques d'opérateurs, épiceries, kiosques.</p>
<p>Attention aux offres annoncées « illimitées » : elles comportent généralement un volume au-delà duquel le débit est fortement réduit. Pour un usage touristique — cartes, messagerie, quelques recherches —, <strong>5 à 10 Go couvrent largement une à deux semaines</strong>.</p>

<h2>La procédure au comptoir</h2>
<ol>
<li><strong>Présentez votre passeport</strong> : l'enregistrement de l'identité est obligatoire, sans exception.</li>
<li>Choisissez le forfait et payez, en espèces de préférence.</li>
<li>L'agent installe la SIM et vérifie l'activation devant vous — <strong>ne partez pas avant d'avoir vu les données fonctionner</strong>.</li>
<li>Notez votre nouveau numéro marocain : vous en aurez besoin pour vos réservations et pour que votre riad ou votre chauffeur puisse vous joindre.</li>
</ol>
<p>Votre téléphone doit être <strong>déverrouillé opérateur</strong> pour accepter une SIM étrangère. C'est le point qui bloque le plus souvent, et il ne se règle pas au comptoir.</p>

<h2>SIM locale ou eSIM ?</h2>
<p>L'<strong>eSIM</strong> s'installe avant le départ, s'active dès l'atterrissage et vous évite la file, les papiers et le changement de numéro. C'est la meilleure solution pour un séjour court, si votre téléphone est compatible — voir notre page <a href="/esim-maroc/">eSIM Maroc</a>.</p>
<p>La <strong>SIM locale</strong> garde deux avantages nets : elle permet d'appeler des numéros marocains au tarif local, ce qui compte si vous devez joindre un riad, un loueur ou un guide ; et elle devient bien plus économique sur un séjour de plus de deux ou trois semaines.</p>
<div class="callout">
<span class="callout-label">Avant de sortir du hall</span>
<p>Téléchargez la carte de Marrakech en mode hors ligne pendant que vous êtes encore connecté au wifi de l'aéroport. Les ruelles de la médina ne correspondent à aucune plaque de rue, et une carte hors ligne consomme bien moins de données qu'une navigation en direct.</p>
</div>
`,
    faqs: [
      {
        q: 'Quel opérateur choisir au Maroc ?',
        a: "Maroc Telecom pour la meilleure couverture hors des villes, notamment dans l'Atlas et vers le sud. Orange pour un bon rapport données/prix en zones urbaines et touristiques. inwi est souvent le moins cher mais plus irrégulier en montagne.",
      },
      {
        q: 'Combien coûte une carte SIM à l\'aéroport de Marrakech ?',
        a: "De 50 à 100 MAD pour une SIM prépayée incluant plusieurs gigaoctets valables une à quatre semaines, avec un crédit d'appels national. Les recharges se trouvent dans toutes les boutiques et épiceries.",
      },
      {
        q: 'Faut-il un passeport pour acheter une carte SIM au Maroc ?',
        a: "Oui, l'enregistrement de l'identité est obligatoire et sans exception. Votre téléphone doit également être déverrouillé opérateur pour accepter une carte SIM étrangère.",
      },
      {
        q: 'Combien de données prévoir pour une semaine au Maroc ?',
        a: "Cinq à dix gigaoctets couvrent largement une à deux semaines d'usage touristique. Téléchargez la carte de Marrakech hors ligne avant de partir : c'est ce qui consomme le plus en navigation.",
      },
    ],
  },
} satisfies ArticleContent;
