import type { ArticleContent } from '../types';

export default {
  fr: {
    title: "Aéroport Marrakech-Ménara → Fès : train, bus ou route ?",
    description: "De l'aéroport de Marrakech-Ménara à Fès : 530 km, train ONCF de 7 h depuis Guéliz, bus, vol via Casablanca ou route. Durées, prix, meilleur choix.",
    eyebrow: 'Distances',
    h1: 'De Marrakech à Fès : quelle option choisir',
    lede: "Cinq cent trente kilomètres séparent les deux villes impériales : c'est le trajet le plus long de ce guide, et celui où le choix du transport change le plus votre journée.",
    excerpt: "Train de nuit, bus, vol via Casablanca ou route : comparatif honnête des façons de relier Marrakech à Fès.",
    date: '2026-08-30',
    facts: [
      { label: 'Distance', value: '530', sub: 'km' },
      { label: 'Train ONCF', value: '≈ 7 h', sub: 'depuis Guéliz' },
      { label: 'Route', value: '6 h', sub: 'par autoroute' },
      { label: 'Billet 2e classe', value: '200–250', sub: 'MAD' },
    ],
    body: `
<h2>Le train : long, mais confortable</h2>
<p>L'ONCF relie Marrakech à Fès en <strong>environ sept heures</strong>, généralement avec un changement à Casablanca. Le billet coûte de l'ordre de <strong>200 à 250 MAD en seconde classe</strong>, 300 à 380 MAD en première. Les trains sont confortables, ponctuels et permettent de travailler ou de dormir.</p>
<p>Rappel indispensable : la gare de Marrakech se trouve à <strong>Guéliz</strong>, pas à l'aéroport. Comptez un taxi de 50 à 70 MAD et une marge d'attente, ce qui porte le total à huit heures environ.</p>
<p>Certains trains de nuit permettent de faire le trajet en dormant, ce qui économise une nuit d'hôtel — une option à considérer sérieusement sur cette distance.</p>

<h2>Les quatre options comparées</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Prix</th><th>Durée porte à porte</th><th>Confort</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Train ONCF</strong></td><td class="num">200–250 MAD + taxi</td><td class="num">≈ 8 h</td><td>Très bon</td></tr>
<tr><td><strong>Bus CTM / Supratours</strong></td><td class="num">200–280 MAD</td><td class="num">8 h–9 h</td><td>Correct</td></tr>
<tr><td><strong>Avion via Casablanca</strong></td><td class="num">Variable, souvent élevé</td><td class="num">5 h–7 h</td><td>Fractionné</td></tr>
<tr><td><strong>Voiture</strong></td><td class="num">Carburant + péages</td><td class="num">6 h</td><td>Fatigant seul</td></tr>
</tbody>
</table>
</div>
<p>L'avion déçoit systématiquement sur cette liaison : pas de vol direct utile, une correspondance par Casablanca, et une fois additionnés les accès aux aéroports, l'enregistrement et l'attente, le gain sur le train est faible pour un prix bien supérieur.</p>

<h2>La route</h2>
<p>L'autoroute passe par Casablanca puis Rabat et Meknès. Six heures de conduite réelle, sur un axe moderne et sans difficulté, mais long et monotone. Cela ne se justifie que si vous comptez vous arrêter en chemin — Rabat et Meknès méritent l'étape — ou si vous voyagez à plusieurs avec une voiture déjà louée.</p>
<div class="callout">
<span class="callout-label">Le bon découpage d'itinéraire</span>
<p>Enchaîner Marrakech et Fès directement gâche les deux. Si votre séjour le permet, coupez à Casablanca ou à Rabat pour une nuit : vous transformez un transfert pénible en étape, et vous arrivez à Fès en état de la visiter.</p>
</div>

<h2>Et si vous volez vers Fès directement ?</h2>
<p>Fès dispose de son propre aéroport, <strong>Fès Saïss (FEZ)</strong>, desservi par plusieurs compagnies européennes. Si Fès est votre destination principale, un vol direct vers FEZ vous évite entièrement ce trajet. Marrakech ne se justifie comme point d'entrée que si vous comptez y passer plusieurs jours.</p>
`,
    faqs: [
      {
        q: 'Combien de temps dure le train entre Marrakech et Fès ?',
        a: "Environ sept heures, généralement avec un changement à Casablanca, pour 200 à 250 MAD en seconde classe. En ajoutant le taxi depuis l'aéroport jusqu'à la gare de Guéliz, comptez huit heures porte à porte.",
      },
      {
        q: 'Vaut-il mieux prendre l\'avion entre Marrakech et Fès ?',
        a: "Rarement. Il n'existe pas de vol direct utile, la correspondance passe par Casablanca, et une fois additionnés les accès, l'enregistrement et l'attente, le gain sur le train est faible pour un prix nettement supérieur.",
      },
      {
        q: 'Quelle distance sépare Marrakech de Fès ?',
        a: "Environ 530 kilomètres, soit six heures de route par l'autoroute via Casablanca, Rabat et Meknès. C'est le trajet le plus long entre deux grandes villes marocaines touristiques.",
      },
      {
        q: 'Existe-t-il un train de nuit entre Marrakech et Fès ?',
        a: "Oui, certaines liaisons permettent de faire le trajet en dormant, ce qui économise une nuit d'hôtel. Sur cette distance, c'est une option à considérer sérieusement, en réservant à l'avance.",
      },
    ],
  },
} satisfies ArticleContent;
