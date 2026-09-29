import type { ArticleContent } from '../types';

export default {
  fr: {
    title: "Aéroport Marrakech-Ménara → Ouarzazate par le Tichka",
    description: "Aller de l'aéroport de Marrakech-Ménara à Ouarzazate : 200 km par le col du Tichka à 2 260 m, 4 h de route, bus CTM, transfert privé et conseils de conduite.",
    eyebrow: 'Distances',
    h1: 'De l\'aéroport de Marrakech à Ouarzazate',
    lede: "Deux cents kilomètres seulement, mais quatre heures de route : entre les deux villes se dresse le col du Tichka, à 2 260 mètres. C'est l'un des plus beaux trajets du Maroc, et l'un de ceux qu'il ne faut pas sous-estimer.",
    excerpt: "200 km et 4 h par le Tichka : durée réelle, options de transport, conditions hivernales et conseils pour ne pas rater Aït-Ben-Haddou.",
    date: '2026-08-31',
    facts: [
      { label: 'Distance', value: '200', sub: 'km' },
      { label: 'Durée réelle', value: '4 h', sub: 'de route' },
      { label: 'Altitude du col', value: '2 260', sub: 'm' },
      { label: 'Bus CTM', value: '100–150', sub: 'MAD' },
    ],
    body: `
<h2>Pourquoi quatre heures pour deux cents kilomètres</h2>
<p>La N9 franchit le Haut Atlas par le <strong>col du Tichka, à 2 260 mètres</strong>. La route a été élargie et sécurisée ces dernières années, mais elle reste une succession de lacets sur plusieurs dizaines de kilomètres, avec des camions lents et des dépassements à négocier. La moyenne réelle tourne autour de cinquante kilomètres par heure.</p>
<p>Ce n'est pas un handicap : c'est l'un des plus beaux itinéraires du pays, avec des villages accrochés aux pentes, des cols panoramiques et un changement complet de paysage au versant sud, où le vert cède la place à l'ocre.</p>

<h2>Les options</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Prix</th><th>Durée</th><th>Départ</th></tr></thead>
<tbody>
<tr><td><strong>Bus CTM / Supratours</strong></td><td class="num">100–150 MAD / personne</td><td class="num">4 h 30–5 h</td><td>Gare routière de Marrakech</td></tr>
<tr class="row-highlight"><td><strong>Transfert privé</strong></td><td class="num">120–160 € / véhicule</td><td class="num">4 h</td><td>Terminal de l'aéroport</td></tr>
<tr><td><strong>Voiture de location</strong></td><td class="num">dès 25 € / jour</td><td class="num">4 h</td><td>Comptoirs de l'aéroport</td></tr>
<tr><td><strong>Grand taxi</strong></td><td class="num">800–1 200 MAD / véhicule</td><td class="num">4 h</td><td>Station, à négocier</td></tr>
</tbody>
</table>
</div>

<h2>Conduire le Tichka</h2>
<ul>
<li><strong>Partez le matin.</strong> La route de nuit n'a aucun intérêt et la visibilité dans les lacets change tout.</li>
<li><strong>Prévoyez des pauses.</strong> Les cols se montent lentement : quatre heures de lacets fatiguent davantage que quatre heures d'autoroute.</li>
<li><strong>Attention en hiver.</strong> Neige et verglas ferment parfois le col entre décembre et février. Vérifiez l'état de la route avant de partir.</li>
<li><strong>Mal des transports.</strong> Les enfants et les passagers sensibles le supportent mal : prévoyez de quoi y remédier.</li>
<li><strong>Carburant.</strong> Faites le plein à Marrakech : les stations sont espacées sur la partie haute.</li>
</ul>
<div class="callout">
<span class="callout-label">Ne passez pas à côté d'Aït-Ben-Haddou</span>
<p>Le ksar classé au patrimoine mondial se trouve à une trentaine de kilomètres avant Ouarzazate, légèrement à l'écart de la N9. C'est l'un des sites les plus spectaculaires du Maroc, et le manquer parce qu'on file droit sur Ouarzazate serait dommage. Comptez une à deux heures de visite.</p>
</div>

<h2>Aller-retour dans la journée : à éviter</h2>
<p>Huit heures de route pour quelques heures sur place, sur une route de montagne : c'est faisable, c'est épuisant, et cela vide le trajet de son intérêt. <strong>Une nuit à Ouarzazate ou à Aït-Ben-Haddou</strong> change complètement l'expérience, et permet de voir le versant sud à la lumière du matin.</p>
<p>Si vous continuez vers les gorges du Dadès, la vallée du Drâa ou Merzouga, Ouarzazate est de toute façon une étape naturelle plutôt qu'une destination finale.</p>
`,
    faqs: [
      {
        q: 'Combien de temps faut-il pour aller de Marrakech à Ouarzazate ?',
        a: "Environ quatre heures pour 200 kilomètres, parce que la N9 franchit le col du Tichka à 2 260 mètres par une longue succession de lacets. La moyenne réelle tourne autour de cinquante kilomètres par heure.",
      },
      {
        q: 'La route du Tichka est-elle dangereuse ?',
        a: "Elle a été élargie et sécurisée ces dernières années et ne présente pas de difficulté particulière de jour, mais elle demande de l'attention : lacets, camions lents et dépassements. En hiver, neige et verglas peuvent fermer le col.",
      },
      {
        q: 'Peut-on faire Ouarzazate en une journée depuis Marrakech ?',
        a: "C'est faisable mais épuisant : huit heures de route de montagne pour quelques heures sur place. Une nuit à Ouarzazate ou à Aït-Ben-Haddou change complètement l'expérience et permet de voir le versant sud au matin.",
      },
      {
        q: 'Comment visiter Aït-Ben-Haddou depuis Marrakech ?',
        a: "Le ksar classé se situe à une trentaine de kilomètres avant Ouarzazate, légèrement à l'écart de la N9. Comptez une à deux heures de visite : c'est l'un des sites les plus spectaculaires du pays et il serait dommage de le manquer.",
      },
    ],
  },
} satisfies ArticleContent;
