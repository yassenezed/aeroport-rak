import type { PageContent } from '../types';

export default {
  fr: {
    title: "Parking aéroport Marrakech-Ménara : tarifs 2026 et accès",
    description: "Parking de l'aéroport de Marrakech-Ménara : 3 parkings, 1 550 places, 6 DH la 1re heure et 42 DH les 24 h selon la grille ONDA. Dépose et alternatives.",
    eyebrow: "Parking · tarifs et guide 2026",
    h1: "Parking aéroport Marrakech-Ménara : tarifs et guide",
    lede: "Trois parkings en plein air face aux terminaux, plus de 1 500 places et une grille très bon marché. Voici les tarifs officiels, la meilleure façon de déposer ou d'attendre un voyageur, et le calcul à faire pour un séjour d'une semaine.",
    highlights: [
      { icon: 'parking', value: "6 DH", label: "La première heure (≈ 0,55 €)" },
      { icon: 'clock', value: "42 DH", label: "De 12 à 24 heures (≈ 3,90 €)" },
      { icon: 'map-pin', value: "1 550 places", label: "Réparties sur 3 parkings" },
      { icon: 'shield-check', value: "24 h/24", label: "Parkings surveillés jour et nuit" },
    ],
    cardSections: [
      {
        eyebrow: "Infrastructures",
        heading: "Les parkings de l'aéroport Marrakech-Ménara",
        intro: "Trois parkings en surface, devant l'aérogare, ouverts jour et nuit.",
        variant: 'feature',
        items: [
          { icon: 'parking', title: "Parking 1", text: "Le plus grand des trois parkings de l'aéroport, en surface devant l'aérogare.", tags: ["740 places", "24 h/24"] },
          { icon: 'parking', title: "Parking 2", text: "Deuxième parking en capacité, à quelques minutes à pied des halls de départ et d'arrivée.", tags: ["460 places", "24 h/24"] },
          { icon: 'parking', title: "Parking 3", text: "Le plus petit des trois, même grille tarifaire que les autres parkings.", tags: ["350 places", "24 h/24"] },
        ],
      },
      {
        eyebrow: "Bon à savoir",
        heading: "Sécurité et fonctionnement",
        variant: 'compact',
        items: [
          { icon: 'shield-check', title: "Surveillance 24 h/24", text: "Parkings clôturés et gardés jour et nuit, y compris pour les vols tardifs." },
          { icon: 'board', title: "Ticket à l'entrée", text: "Barrière automatique : gardez le ticket, il sert au paiement en sortie." },
          { icon: 'wallet', title: "Paiement avant la sortie", text: "À la caisse ou à la borne ; prévoyez des dirhams en espèces, la carte n'est pas toujours acceptée." },
          { icon: 'sun', title: "Places en plein air", text: "L'été, l'habitacle dépasse 60 °C : pare-soleil, et rien de sensible à la chaleur dans la voiture." },
        ],
      },
      {
        eyebrow: "Alternatives",
        heading: "Pas envie de vous garer ? Les alternatives",
        variant: 'feature',
        items: [
          { icon: 'van', title: "Transfert privé", text: "Un chauffeur vous dépose et vous récupère : ni place à chercher, ni voiture laissée au soleil.", link: { key: 'bookTransfer', label: "Réserver un transfert" } },
          { icon: 'car', title: "Location de voiture", text: "Prenez la voiture à l'arrivée : le stationnement de restitution est prévu par le loueur.", link: { key: 'carRental', label: "Voir les voitures" } },
          { icon: 'bus', title: "Taxi ou bus 19", text: "Taxi de la station ou bus 19 à 30 DH : les solutions sans voiture pour rejoindre la ville.", link: { key: 'transfers', label: "Comparer les transports" } },
        ],
      },
    ],
    body: `
<h2>Tarifs du parking de l'aéroport Marrakech-Ménara</h2>
<p>Grille de l'Office national des aéroports (ONDA) pour les voitures en plein air :</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Durée</th><th>Voiture</th><th>En euros (≈)</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Jusqu'à 1 heure</strong></td><td class="num">6 DH</td><td class="num">0,55 €</td></tr>
<tr><td><strong>1 à 2 heures</strong></td><td class="num">9 DH</td><td class="num">0,85 €</td></tr>
<tr><td><strong>2 à 3 heures</strong></td><td class="num">11 DH</td><td class="num">1 €</td></tr>
<tr><td><strong>3 à 4 heures</strong></td><td class="num">15 DH</td><td class="num">1,40 €</td></tr>
<tr><td><strong>4 à 5 heures</strong></td><td class="num">17 DH</td><td class="num">1,60 €</td></tr>
<tr><td><strong>5 à 12 heures</strong></td><td class="num">22 DH</td><td class="num">2 €</td></tr>
<tr><td><strong>12 à 24 heures</strong></td><td class="num">42 DH</td><td class="num">3,90 €</td></tr>
</tbody>
</table>
</div>
<p class="small">Autocars et véhicules lourds : 8 DH la première heure, 42 DH de 12 à 24 heures. Grille indicative, révisable par l'ONDA : l'affichage à l'entrée du parking fait foi. Conversion approximative 1 € ≈ 10,8 DH.</p>

<h2>Combien coûte une semaine de parking ?</h2>
<p>En appliquant 42 DH par tranche de 24 heures, comptez <strong>environ 300 DH (≈ 27 €) pour 7 jours</strong>, une somme très modeste comparée aux aéroports européens. À titre de comparaison, un aller-retour en taxi vers la médina revient à 200–300 DH de jour, et deux <a href="/reserver-transfert/">transferts privés</a> à environ 580 DH (≈ 54 €). Si vous habitez Marrakech ou sa région et partez une semaine, le parking de l'aéroport est donc souvent la solution la moins chère.</p>
<div class="callout">
<span class="callout-label">Le vrai coût caché : le soleil</span>
<p>Les places sont en plein air. En été, une voiture garée une semaine à Marrakech subit des températures extrêmes : pare-soleil sur le pare-brise, rien d'électronique, aucun médicament ni cosmétique dans l'habitacle, et des fenêtres bien fermées.</p>
</div>

<h2>Déposer ou attendre un voyageur</h2>
<p>La voie devant les terminaux sert à s'arrêter le temps de décharger les bagages, pas à stationner : les agents font circuler rapidement, surtout le soir. Pour attendre quelqu'un, entrez au parking : <strong>la première heure coûte 6 DH</strong>. Comptez 30 à 60 minutes entre l'atterrissage et la sortie du hall, le temps du contrôle des passeports et des bagages : suivez le vol sur notre page <a href="/arrivees/">arrivées</a> avant de partir.</p>

<h2>Voiture de location : pas de ticket à prendre</h2>
<p>Si vous rendez une voiture de location, suivez le fléchage du loueur vers sa zone de restitution et ne prenez pas de ticket à l'entrée du parking public. Prévoyez un quart d'heure pour l'état des lieux et gardez des photos datées du véhicule rendu.</p>
`,
    faqHeading: "Parking de l'aéroport Marrakech-Ménara : questions fréquentes",
    faqs: [
      { q: "Combien coûte le parking à l'aéroport de Marrakech ?", a: "Selon la grille ONDA, 6 DH jusqu'à 1 heure, 9 DH jusqu'à 2 heures, 22 DH de 5 à 12 heures et 42 DH de 12 à 24 heures pour une voiture. L'affichage à l'entrée fait foi, la grille pouvant être révisée." },
      { q: "Combien de places compte le parking de l'aéroport Marrakech-Ménara ?", a: "Environ 1 550 places réparties sur trois parkings en plein air : 740 places au parking 1, 460 au parking 2 et 350 au parking 3." },
      { q: "Combien coûte une semaine de parking ?", a: "Environ 300 DH (≈ 27 €) en comptant 42 DH par tranche de 24 heures. C'est souvent moins cher qu'un aller-retour en transfert privé, mais pensez à protéger la voiture du soleil." },
      { q: "Y a-t-il une dépose-minute gratuite ?", a: "La voie devant les terminaux permet de s'arrêter brièvement pour déposer des passagers. Pour attendre, entrez au parking : la première heure coûte 6 DH." },
      { q: "Le parking de l'aéroport est-il surveillé ?", a: "Oui, les parkings sont clôturés et surveillés 24 h/24. Gardez les précautions habituelles : rien de visible dans l'habitacle et rien de sensible à la chaleur." },
      { q: "Comment payer le parking ?", a: "Prenez le ticket à la barrière d'entrée et payez avant de reprendre la voiture, à la caisse ou à la borne. Prévoyez des dirhams en espèces, la carte n'étant pas toujours acceptée." },
      { q: "Les places sont-elles couvertes ?", a: "La grille publiée concerne des places en plein air : ne comptez pas sur une place à l'ombre. En été, utilisez un pare-soleil et ne laissez ni électronique ni médicaments dans la voiture." },
      { q: "Le parking est-il ouvert la nuit ?", a: "Oui, il fonctionne 24 h/24, y compris pour les vols qui arrivent ou partent en pleine nuit." },
    ],
    cta: {
      heading: "Pas envie de vous garer ?",
      text: "Un transfert privé vous dépose et vous récupère à l'aéroport, sans place à chercher ni voiture laissée au soleil.",
      label: "Réserver un transfert",
      secondary: { label: "Louer une voiture", key: 'carRental' },
    },
  },
} satisfies PageContent;
