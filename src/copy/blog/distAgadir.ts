import type { ArticleContent } from '../types';

export default {
  fr: {
    title: "Aéroport Marrakech-Ménara → Agadir : distance et transports",
    description: "Aller de l'aéroport de Marrakech-Ménara à Agadir : 250 km d'autoroute, 3 h de trajet, bus CTM et Supratours, transfert privé et location de voiture.",
    eyebrow: 'Distances',
    h1: 'De l\'aéroport de Marrakech à Agadir',
    lede: "Deux cent cinquante kilomètres, trois heures par l'autoroute, et un changement complet de décor : on quitte la ville rouge pour l'Atlantique. Voici comment faire ce trajet et ce qu'il coûte réellement.",
    excerpt: "250 km entre le RAK et Agadir : bus, transfert privé, voiture ou avion, avec les durées et les prix comparés.",
    date: '2026-09-01',
    facts: [
      { label: 'Distance', value: '250', sub: 'km' },
      { label: 'Durée', value: '3 h', sub: 'par autoroute' },
      { label: 'Bus', value: '120–180', sub: 'MAD' },
      { label: 'Transfert privé', value: '130–170 €', sub: 'par véhicule' },
    ],
    body: `
<h2>Les options</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Option</th><th>Prix</th><th>Durée</th><th>Départ</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Bus CTM / Supratours</strong></td><td class="num">120–180 MAD / personne</td><td class="num">3 h 30–4 h</td><td>Gare routière de Marrakech</td></tr>
<tr><td><strong>Transfert privé</strong></td><td class="num">130–170 € / véhicule</td><td class="num">3 h</td><td>Terminal de l'aéroport</td></tr>
<tr><td><strong>Voiture de location</strong></td><td class="num">dès 25 € / jour + péages</td><td class="num">3 h</td><td>Comptoirs de l'aéroport</td></tr>
<tr><td><strong>Avion</strong></td><td class="num">variable, via Casablanca</td><td class="num">4 h+ au total</td><td>RAK</td></tr>
</tbody>
</table>
</div>
<p>L'avion n'a aucun intérêt sur cette liaison : il n'existe pas de vol direct utile, et une correspondance par Casablanca porte le trajet bien au-delà des trois heures de route, pour un prix supérieur.</p>

<h2>La route</h2>
<p>L'autoroute A7 relie Marrakech à Agadir en franchissant le Haut Atlas occidental par un tracé moderne. La route est excellente, avec des aires de service régulières, et se parcourt en trois heures sans forcer. Les péages représentent quelques dizaines de dirhams.</p>
<p>Deux points d'attention : la traversée du massif peut être ventée, et les stations-service s'espacent sur la partie centrale — faites le plein avant de quitter Marrakech si votre réservoir est bas.</p>

<h2>Le bus, l'option la plus rationnelle à deux</h2>
<p>CTM et Supratours assurent plusieurs liaisons quotidiennes, en autocar climatisé avec bagages en soute, pour <strong>120 à 180 MAD par personne</strong>. Supratours a l'avantage d'être adossé à l'ONCF, ce qui facilite les trajets combinés train + bus depuis le nord du pays.</p>
<p>Comme pour toutes les liaisons longue distance, les bus partent de la <strong>gare routière de Marrakech</strong> et non de l'aéroport : ajoutez un taxi et une marge d'attente.</p>
<div class="callout">
<span class="callout-label">Si Agadir est votre destination finale</span>
<p>Vérifiez d'abord s'il existe un vol direct vers Agadir Al Massira (AGA) depuis votre ville de départ. Atterrir à Marrakech pour faire trois heures de route ne se justifie que si le prix du billet est nettement inférieur, ou si vous comptez passer quelques jours à Marrakech au passage.</p>
</div>

<h2>Quelle option choisir</h2>
<p><strong>Le bus</strong> à une ou deux personnes, avec du temps devant soi : c'est confortable et très bon marché. <strong>Le transfert privé</strong> à partir de quatre passagers, avec des enfants, ou si votre vol atterrit tard — vous partez directement du terminal. <strong>La voiture de location</strong> si vous comptez explorer la côte entre Essaouira, Taghazout et Agadir, ce que les transports publics ne permettent pas.</p>
`,
    faqs: [
      {
        q: 'Quelle distance sépare Marrakech d\'Agadir ?',
        a: "Environ 250 kilomètres par l'autoroute A7, soit trois heures de route à travers le Haut Atlas occidental. La route est moderne, avec des aires de service régulières et quelques dizaines de dirhams de péages.",
      },
      {
        q: 'Comment aller de l\'aéroport de Marrakech à Agadir ?',
        a: "En bus CTM ou Supratours depuis la gare routière de Marrakech pour 120 à 180 MAD par personne, en transfert privé directement depuis le terminal pour 130 à 170 € par véhicule, ou en voiture de location.",
      },
      {
        q: 'Y a-t-il des vols entre Marrakech et Agadir ?',
        a: "Pas de liaison directe utile : une correspondance par Casablanca porte le trajet bien au-delà des trois heures de route, pour un prix supérieur. Si Agadir est votre destination finale, cherchez un vol direct vers AGA.",
      },
      {
        q: 'Combien coûte un taxi de Marrakech à Agadir ?',
        a: "Un grand taxi négocié se situe généralement entre 800 et 1 200 MAD pour le véhicule. Un transfert privé réservé, à 130 à 170 €, offre un prix fixe, un départ depuis le terminal et le suivi du vol.",
      },
    ],
  },
} satisfies ArticleContent;
