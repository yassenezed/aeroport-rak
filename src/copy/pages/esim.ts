import type { PageContent } from '../types';

export default {
  fr: {
    title: "eSIM Maroc : connecté dès l'aéroport Marrakech-Ménara",
    description: "eSIM Maroc : être connecté dès la sortie de l'avion à l'aéroport de Marrakech-Ménara, comparée à la carte SIM locale et au roaming.",
    eyebrow: 'Marrakech Ménara · Connexion',
    h1: 'eSIM Maroc : être connecté dès l\'atterrissage',
    lede: "Le Maroc n'est pas dans la zone de roaming européenne : votre forfait y devient soit très cher, soit inutilisable. Voici les trois façons de régler la question, et celle qui vous fera gagner vingt minutes à l'arrivée.",
    body: `
<h2>Pourquoi cela se prépare avant de partir</h2>
<p>Hors Union européenne, le roaming est facturé au prix fort : quelques euros par mégaoctet chez certains opérateurs, avec des factures à trois chiffres au retour. La plupart des voyageurs coupent donc les données et se retrouvent, à la sortie du terminal, sans moyen d'appeler un riad, de prévenir un chauffeur ou d'ouvrir un plan.</p>
<p>C'est précisément le moment où l'on en a le plus besoin : pour confirmer une porte de médina, retrouver un transfert, ou simplement vérifier qu'on marche dans la bonne direction dans des ruelles où aucune plaque ne correspond à Google Maps.</p>

<h2>Les trois options, comparées</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Solution</th><th>Prix indicatif</th><th>Disponible</th><th>Limites</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>eSIM prépayée</strong></td><td class="num">4–15 € / semaine</td><td>Dès l'atterrissage</td><td>Téléphone compatible et déverrouillé requis</td></tr>
<tr><td><strong>SIM locale</strong></td><td class="num">≈ 50–100 MAD</td><td>Comptoir du hall des arrivées</td><td>File d'attente, passeport, changement de numéro</td></tr>
<tr><td><strong>Roaming de votre forfait</strong></td><td class="num">Très variable</td><td>Immédiat</td><td>Souvent prohibitif hors offres monde</td></tr>
</tbody>
</table>
</div>

<h2>L'eSIM, concrètement</h2>
<p>Une eSIM est une carte SIM dématérialisée : vous l'achetez en ligne, vous scannez un QR code, et le forfait s'active à l'atterrissage sans manipuler de puce. Votre numéro habituel reste actif pour les appels et les SMS, l'eSIM ne portant que les données.</p>
<p>Trois vérifications avant d'acheter : votre téléphone doit <strong>supporter l'eSIM</strong> (tous les iPhone depuis le XS, la plupart des Android récents) ; il doit être <strong>déverrouillé opérateur</strong> ; et l'installation se fait <strong>pendant que vous avez encore du wifi</strong>, donc avant de décoller ou depuis le wifi de l'aéroport.</p>
<div class="callout">
<span class="callout-label">Le bon volume de données</span>
<p>Pour un séjour d'une semaine à Marrakech, 3 à 5 Go suffisent largement : cartes hors ligne téléchargées à l'avance, messagerie, quelques recherches. Inutile de payer pour 20 Go, sauf si vous comptez travailler en partage de connexion.</p>
</div>

<h2>Quand la SIM locale reste préférable</h2>
<p>Si vous devez <strong>appeler des numéros marocains</strong> — un riad, un loueur, un guide —, une SIM locale avec de la voix est plus pratique et moins chère qu'un appel international. C'est également le cas pour un long séjour, à partir de deux ou trois semaines, où les forfaits de Maroc Telecom, Orange ou inwi deviennent très compétitifs. Les comptoirs sont dans le hall des arrivées : prévoyez votre passeport et une dizaine de minutes.</p>
<p>Notre article détaillé sur les <a href="/blog/cartes-sim-maroc/">cartes SIM au Maroc</a> compare les forfaits des trois opérateurs et leurs couvertures respectives, y compris dans l'Atlas.</p>
`,
    faqs: [
      {
        q: 'Une eSIM fonctionne-t-elle dès l\'atterrissage à Marrakech ?',
        a: "Oui, à condition de l'avoir installée avant le départ, en wifi. Le forfait s'active automatiquement dès que votre téléphone accroche un réseau marocain, ce qui vous rend joignable avant même de passer la police des frontières.",
      },
      {
        q: 'Mon téléphone est-il compatible eSIM ?',
        a: "Tous les iPhone depuis le XS, les Google Pixel depuis le 3, et la plupart des Samsung Galaxy S et Z récents le sont. Le téléphone doit également être déverrouillé opérateur. Vous pouvez vérifier dans les réglages réseau : une option « ajouter un forfait eSIM » signale la compatibilité.",
      },
      {
        q: 'Combien de données prévoir pour une semaine à Marrakech ?',
        a: "Trois à cinq gigaoctets suffisent pour un usage touristique : cartes, messagerie et recherches. Téléchargez la carte de Marrakech hors ligne avant de partir, c'est ce qui consomme le plus.",
      },
      {
        q: 'eSIM ou carte SIM locale, que choisir ?',
        a: "L'eSIM pour un séjour court et un besoin de données uniquement : pas de file, pas de papiers, connexion immédiate. La SIM locale si vous devez appeler des numéros marocains ou rester plus de deux ou trois semaines, car les forfaits locaux deviennent alors bien plus avantageux.",
      },
      {
        q: 'Le roaming européen fonctionne-t-il au Maroc ?',
        a: "Non, le Maroc ne fait pas partie de la zone de roaming européenne. Les données y sont facturées au tarif international, souvent très élevé, sauf si votre forfait inclut explicitement une option monde couvrant le Maroc.",
      },
    ],
  },
} satisfies PageContent;
