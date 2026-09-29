import type { PageContent } from '../types';

export default {
  fr: {
    title: "Parking aéroport Marrakech-Ménara : tarifs et accès",
    description: "Parkings de l'aéroport de Marrakech Ménara : tarifs horaires et journaliers, dépose-minute, stationnement longue durée et alternatives moins chères.",
    eyebrow: 'Marrakech Ménara · Parkings',
    h1: 'Se garer à l\'aéroport de Marrakech',
    lede: "Le RAK dispose de parkings en surface devant les terminaux, avec un barème progressif : très bon marché pour une dépose, nettement moins pour une semaine. Voici ce que vous paierez et quand il vaut mieux ne pas venir en voiture.",
    body: `
<h2>Les tarifs, dans les grandes lignes</h2>
<p>Le stationnement de l'aéroport fonctionne à la durée, avec une première tranche très courte et gratuite ou symbolique, puis une facturation horaire qui plafonne à la journée. À titre indicatif, relevé en septembre 2026 :</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Durée</th><th>Tarif indicatif</th><th>Usage</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Moins de 30 minutes</strong></td><td class="num">gratuit ou ≈ 10 MAD</td><td>Dépose et récupération</td></tr>
<tr><td><strong>1 heure</strong></td><td class="num">≈ 20 MAD</td><td>Attendre un vol qui a du retard</td></tr>
<tr><td><strong>24 heures</strong></td><td class="num">≈ 70–80 MAD</td><td>Aller-retour dans la journée</td></tr>
<tr><td><strong>1 semaine</strong></td><td class="num">≈ 450–550 MAD</td><td>Séjour court à l'étranger</td></tr>
</tbody>
</table>
</div>
<p>Ces montants sont donnés à titre d'ordre de grandeur : la grille est révisée périodiquement et l'affichage à l'entrée fait foi. Le paiement s'effectue à la borne ou à la caisse avant de rejoindre le véhicule, en espèces de préférence.</p>

<h2>Dépose et récupération : le bon réflexe</h2>
<p>La zone devant les terminaux est faite pour s'arrêter, pas pour stationner : les agents font circuler rapidement, surtout en soirée. Si vous venez chercher quelqu'un dont le vol vient d'atterrir, n'oubliez pas que <strong>30 à 60 minutes s'écoulent entre l'atterrissage et la sortie du hall</strong>. Mieux vaut attendre au parking, avec un message convenu, que tourner en boucle devant l'aérogare.</p>

<h2>Longue durée : faites le calcul avant</h2>
<p>Pour une semaine, le parking officiel reste raisonnable comparé aux standards européens, mais il n'est pas anodin. Deux alternatives valent d'être comparées :</p>
<ul>
<li><strong>L'aller-retour en transfert ou en taxi.</strong> Deux trajets vers le centre coûtent entre 200 et 300 MAD, soit moins qu'une semaine de stationnement — et vous ne laissez pas une voiture au soleil pendant sept jours.</li>
<li><strong>Le parking gardé d'un hôtel proche.</strong> Certains établissements situés à quelques minutes de l'aéroport proposent une formule nuit plus stationnement, intéressante quand votre vol part à 6 h du matin.</li>
</ul>
<div class="callout">
<span class="callout-label">Voiture de location : ne payez pas le parking</span>
<p>Si vous rendez un véhicule de location, le stationnement de restitution est prévu par le loueur : suivez le fléchage de l'agence et ne prenez pas de ticket à l'entrée du parking public. Prévoyez un quart d'heure pour l'état des lieux et gardez des photos datées du véhicule rendu.</p>
</div>

<h2>Sécurité et bon sens</h2>
<p>Les parkings sont clôturés et surveillés, mais la règle reste la même qu'ailleurs : rien de visible dans l'habitacle, pas de GPS sur le pare-brise, pas de bagage sur la banquette. En été, l'habitacle d'une voiture garée en plein soleil à Marrakech dépasse largement les 60 °C : ne laissez ni appareils électroniques, ni cosmétiques, ni médicaments à l'intérieur.</p>
`,
    faqs: [
      {
        q: 'Combien coûte le parking à l\'aéroport de Marrakech ?',
        a: "Comptez environ 20 MAD pour une heure, 70 à 80 MAD pour 24 heures et 450 à 550 MAD pour une semaine, avec une première tranche de trente minutes gratuite ou symbolique pour les déposes. La grille affichée à l'entrée fait foi, elle est révisée périodiquement.",
      },
      {
        q: 'Y a-t-il une dépose-minute à Marrakech Ménara ?',
        a: "Oui, la zone devant les terminaux permet de s'arrêter le temps de déposer des passagers, avec une tranche courte gratuite ou symbolique. Les agents y font circuler rapidement : pour attendre quelqu'un, entrez plutôt au parking.",
      },
      {
        q: 'Le parking de l\'aéroport de Marrakech est-il surveillé ?',
        a: "Les parkings sont clôturés et surveillés. Appliquez néanmoins les précautions habituelles : rien de visible dans l'habitacle et aucun objet sensible à la chaleur laissé dans une voiture garée en plein soleil.",
      },
      {
        q: 'Vaut-il mieux se garer à l\'aéroport ou venir en taxi ?',
        a: "Pour un séjour d'une semaine, deux trajets aller-retour en taxi ou en transfert coûtent souvent moins cher que le stationnement, et vous évitent de laisser un véhicule exposé. Le parking se justifie surtout pour les allers-retours courts, de quelques heures à deux jours.",
      },
    ],
    cta: {
      heading: 'Pas envie de laisser votre voiture une semaine au soleil ?',
      text: "Un aller-retour en transfert privé revient souvent moins cher qu'un stationnement longue durée, chauffeur compris.",
      label: 'Comparer avec un transfert',
    },
  },
} satisfies PageContent;
