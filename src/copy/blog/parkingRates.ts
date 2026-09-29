import type { ArticleContent } from '../types';

export default {
  fr: {
    title: "Tarifs du parking de l'aéroport de Marrakech-Ménara",
    description: "Tarifs du parking de l'aéroport de Marrakech-Ménara : prix à l'heure, à la journée et à la semaine, dépose-minute et alternatives moins chères.",
    eyebrow: 'Aéroport',
    h1: 'Parking de l\'aéroport de Marrakech : la grille des tarifs',
    lede: "Très bon marché pour une dépose, raisonnable pour un aller-retour dans la journée, nettement moins évident pour une semaine. Voici les ordres de grandeur et le calcul à faire avant de laisser sa voiture.",
    excerpt: "Prix à l'heure, à la journée et à la semaine au parking du RAK, avec les alternatives quand le stationnement longue durée n'est plus rentable.",
    date: '2026-09-06',
    facts: [
      { label: '30 minutes', value: 'gratuit', sub: 'ou ≈ 10 MAD' },
      { label: '1 heure', value: '≈ 20', sub: 'MAD' },
      { label: '24 heures', value: '70–80', sub: 'MAD' },
      { label: '1 semaine', value: '450–550', sub: 'MAD' },
    ],
    body: `
<h2>La grille, en ordres de grandeur</h2>
<p>Le stationnement du RAK fonctionne à la durée, avec une première tranche courte gratuite ou symbolique, puis une facturation horaire qui plafonne à la journée. Les montants ci-dessous ont été relevés en septembre 2026 et servent d'ordre de grandeur : <strong>l'affichage à l'entrée fait foi</strong>, la grille étant révisée périodiquement.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Durée</th><th>Tarif indicatif</th><th>Usage typique</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Moins de 30 minutes</strong></td><td class="num">gratuit ou ≈ 10 MAD</td><td>Déposer ou récupérer quelqu'un</td></tr>
<tr><td><strong>1 heure</strong></td><td class="num">≈ 20 MAD</td><td>Attendre un vol retardé</td></tr>
<tr><td><strong>3 heures</strong></td><td class="num">≈ 40 MAD</td><td>Accompagner un départ</td></tr>
<tr><td><strong>24 heures</strong></td><td class="num">70–80 MAD</td><td>Aller-retour dans la journée</td></tr>
<tr><td><strong>3 jours</strong></td><td class="num">≈ 200–240 MAD</td><td>Week-end prolongé</td></tr>
<tr><td><strong>1 semaine</strong></td><td class="num">450–550 MAD</td><td>Séjour à l'étranger</td></tr>
</tbody>
</table>
</div>
<p>Le paiement s'effectue à la borne ou à la caisse <strong>avant</strong> de rejoindre le véhicule. Prévoyez des espèces : la carte n'est pas systématiquement acceptée selon les bornes.</p>

<h2>Le seuil à partir duquel ce n'est plus rentable</h2>
<p>Comparez avec ce que coûte un aller-retour vers la ville : deux trajets en taxi au tarif affiché représentent <strong>200 à 300 MAD</strong>, ou environ 54 € pour deux transferts privés. Au-delà de trois ou quatre jours, le stationnement rejoint puis dépasse ce montant — et vous laissez en plus un véhicule exposé au soleil.</p>
<div class="callout">
<span class="callout-label">Les 60 °C dans l'habitacle</span>
<p>Une voiture garée en plein soleil à Marrakech en été dépasse largement les 60 °C à l'intérieur. N'y laissez ni appareils électroniques, ni cosmétiques, ni médicaments, ni briquet. Et rien de visible sur les sièges, comme partout ailleurs.</p>
</div>

<h2>Dépose et récupération</h2>
<p>La zone devant les terminaux permet de s'arrêter brièvement, et les agents y font circuler rapidement, surtout en soirée. Si vous venez chercher quelqu'un, souvenez-vous qu'il s'écoule <strong>30 à 60 minutes entre l'atterrissage et la sortie du hall</strong> : entrez au parking et attendez-y plutôt que de tourner devant l'aérogare.</p>

<h2>Voiture de location : ne prenez pas de ticket</h2>
<p>Si vous restituez un véhicule loué, le stationnement de retour est prévu par le loueur. Suivez le fléchage de l'agence et ne prenez pas de ticket à l'entrée du parking public, sous peine de payer une durée qui ne vous incombe pas. Comptez un quart d'heure pour l'état des lieux, et conservez des photos datées du véhicule rendu.</p>
`,
    faqs: [
      {
        q: 'Combien coûte une journée de parking à l\'aéroport de Marrakech ?',
        a: "Environ 70 à 80 MAD pour 24 heures, avec une facturation horaire d'environ 20 MAD l'heure en deçà. La grille affichée à l'entrée fait foi, elle est révisée périodiquement.",
      },
      {
        q: 'La dépose est-elle gratuite au RAK ?',
        a: "La première tranche, d'environ trente minutes, est gratuite ou symbolique, ce qui couvre une dépose ou une récupération rapide. Les agents font circuler rapidement devant les terminaux, surtout en soirée.",
      },
      {
        q: 'Combien coûte une semaine de stationnement à l\'aéroport de Marrakech ?',
        a: "De 450 à 550 MAD environ. Au-delà de trois ou quatre jours, deux trajets aller-retour en taxi ou en transfert reviennent souvent moins cher, et vous évitent de laisser un véhicule exposé au soleil.",
      },
      {
        q: 'Peut-on payer le parking par carte à Marrakech Ménara ?',
        a: "Pas systématiquement selon les bornes : prévoyez des espèces en dirhams. Le règlement s'effectue avant de rejoindre le véhicule, à la borne ou à la caisse.",
      },
    ],
  },
} satisfies ArticleContent;
