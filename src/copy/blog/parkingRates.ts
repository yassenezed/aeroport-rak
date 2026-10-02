import type { ArticleContent } from '../types';

export default {
  fr: {
    title: "Tarifs parking aéroport Marrakech-Ménara : combien payer",
    description: "Combien coûte le parking de l'aéroport de Marrakech-Ménara pour 3 heures, 1 jour, 1 ou 2 semaines : calcul avec la grille ONDA et comparaison avec le taxi.",
    eyebrow: "Aéroport",
    h1: "Tarifs du parking de l'aéroport Marrakech-Ménara : le coût selon votre séjour",
    lede: "6 DH pour une dépose, 42 DH pour une journée, environ 300 DH pour une semaine : le parking du RAK compte parmi les postes les moins chers d'un voyage. Voici le calcul pour chaque durée, et le moment où le taxi ou le transfert redeviennent intéressants.",
    excerpt: "Le coût réel du parking du RAK pour 3 heures, 1 jour, 3 jours, 1 ou 2 semaines, avec la grille ONDA et la comparaison taxi et transfert.",
    date: '2026-10-02',
    facts: [
      { label: "1 heure", value: "6", sub: "DH" },
      { label: "24 heures", value: "42", sub: "DH" },
      { label: "1 semaine", value: "≈ 300", sub: "DH" },
      { label: "Capacité", value: "1 550", sub: "places" },
    ],
    body: `
<h2>Le coût du parking de l'aéroport Marrakech-Ménara selon la durée</h2>
<p>Calcul établi avec la grille de l'ONDA pour une voiture en plein air, en comptant 42 DH par tranche de 24 heures :</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Situation</th><th>Durée</th><th>Coût</th><th>≈ en euros</th></tr></thead>
<tbody>
<tr><td><strong>Déposer ou récupérer quelqu'un</strong></td><td>jusqu'à 1 h</td><td class="num">6 DH</td><td class="num">0,55 €</td></tr>
<tr><td><strong>Accompagner un départ</strong></td><td>2 à 3 h</td><td class="num">11 DH</td><td class="num">1 €</td></tr>
<tr><td><strong>Aller-retour dans la journée</strong></td><td>5 à 12 h</td><td class="num">22 DH</td><td class="num">2 €</td></tr>
<tr class="row-highlight"><td><strong>Une nuit</strong></td><td>12 à 24 h</td><td class="num">42 DH</td><td class="num">3,90 €</td></tr>
<tr><td><strong>Week-end prolongé</strong></td><td>3 jours</td><td class="num">≈ 126 DH</td><td class="num">11,70 €</td></tr>
<tr><td><strong>Une semaine</strong></td><td>7 jours</td><td class="num">≈ 294 DH</td><td class="num">27 €</td></tr>
<tr><td><strong>Deux semaines</strong></td><td>14 jours</td><td class="num">≈ 588 DH</td><td class="num">54 €</td></tr>
</tbody>
</table>
</div>
<p class="small">Montants indicatifs : la grille peut être révisée par l'ONDA et l'affichage à l'entrée fait foi. Conversion approximative 1 € ≈ 10,8 DH. La grille complète et les trois parkings sont détaillés sur notre page <a href="/parkings/">parking de l'aéroport</a>.</p>

<h2>Parking, taxi ou transfert : le seuil de rentabilité</h2>
<p>Un aller-retour en taxi vers la médina coûte 200 à 300 DH de jour : c'est le prix de <strong>5 à 7 jours de parking</strong>. Deux <a href="/reserver-transfert/">transferts privés</a> reviennent à environ 580 DH, soit <strong>deux semaines de stationnement</strong>. Si vous vivez à Marrakech ou dans sa région, garer sa voiture à l'aéroport est donc presque toujours la solution la moins chère, jusqu'à deux semaines d'absence.</p>
<div class="callout">
<span class="callout-label">Le coût que la grille ne montre pas</span>
<p>Les places sont en plein air. En été, l'habitacle dépasse largement 60 °C : pare-soleil, et ni électronique, ni médicaments, ni cosmétiques dans la voiture.</p>
</div>

<h2>Trois conseils pour payer le juste prix</h2>
<p><strong>Gardez le ticket</strong> pris à la barrière : il sert au paiement avant la sortie. <strong>Prévoyez des dirhams en espèces</strong>, la carte n'est pas acceptée partout. Et si vous rendez une <a href="/location-voiture/">voiture de location</a>, suivez le fléchage du loueur sans prendre de ticket au parking public.</p>
`,
    faqs: [
      { q: "Combien coûte une journée de parking à l'aéroport de Marrakech ?", a: "42 DH pour une durée de 12 à 24 heures selon la grille ONDA, soit environ 3,90 €. En dessous, comptez 22 DH de 5 à 12 heures." },
      { q: "Combien coûte une semaine de parking au RAK ?", a: "Environ 294 DH (≈ 27 €) en comptant 42 DH par tranche de 24 heures, et environ 588 DH pour deux semaines." },
      { q: "Le parking est-il moins cher qu'un taxi aller-retour ?", a: "Oui jusqu'à environ une semaine : un taxi aller-retour vers la médina coûte 200 à 300 DH de jour, le prix de 5 à 7 jours de parking." },
      { q: "Combien coûte une dépose rapide ?", a: "6 DH si vous entrez au parking, pour une durée jusqu'à 1 heure. La voie devant les terminaux ne sert qu'à s'arrêter brièvement." },
      { q: "Peut-on payer le parking par carte ?", a: "Pas partout : prévoyez des dirhams en espèces. Le paiement se fait avant la sortie, à la caisse ou à la borne." },
    ],
  },
} satisfies ArticleContent;
