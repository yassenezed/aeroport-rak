import type { PageContent } from '../types';

export default {
  fr: {
    title: "Voiture de prestige à l'aéroport Marrakech-Ménara",
    description: "Louer une berline, un SUV premium ou un cabriolet à l'aéroport de Marrakech-Ménara : modèles, tarifs, cautions et option avec chauffeur.",
    eyebrow: 'Marrakech Ménara · Prestige',
    h1: 'Location de voiture de prestige à Marrakech',
    lede: "Marrakech est l'une des rares villes marocaines où le haut de gamme automobile est réellement disponible à la location. Voici les modèles qu'on y trouve, ce qu'ils coûtent, et la question à se poser avant de signer : conduire soi-même, ou être conduit ?",
    body: `
<h2>Ce que l'on trouve réellement au RAK</h2>
<p>L'offre premium de Marrakech s'articule autour de trois familles. Les <strong>berlines allemandes</strong> — Mercedes Classe C et E, BMW Série 3 et 5, Audi A4 et A6 — pour les déplacements professionnels et les trajets vers Casablanca. Les <strong>SUV premium</strong> — Range Rover, Porsche Cayenne, Mercedes GLE — qui restent les plus demandés, parce qu'ils encaissent les pistes d'Agafay et la route du Tichka sans effort. Et quelques <strong>cabriolets et sportives</strong>, Mustang en tête, loués surtout à la journée pour une occasion.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Catégorie</th><th>Prix / jour</th><th>Caution type</th></tr></thead>
<tbody>
<tr><td><strong>Berline premium</strong></td><td class="num">110–180 €</td><td class="num">20 000–30 000 MAD</td></tr>
<tr class="row-highlight"><td><strong>SUV premium</strong></td><td class="num">150–280 €</td><td class="num">30 000–50 000 MAD</td></tr>
<tr><td><strong>Cabriolet / sportive</strong></td><td class="num">200–400 €</td><td class="num">40 000–60 000 MAD</td></tr>
<tr><td><strong>Van VIP avec chauffeur</strong></td><td class="num">150–250 €</td><td class="num">aucune</td></tr>
</tbody>
</table>
</div>

<h2>Les conditions sont plus strictes</h2>
<p>Sur ces catégories, attendez-vous à un <strong>âge minimum de 25 à 30 ans</strong>, à une ancienneté de permis d'au moins trois à cinq ans, et à une caution qui dépasse largement les plafonds habituels des cartes bancaires. Prévenez votre banque avant le départ pour faire relever temporairement votre plafond d'autorisation : c'est le motif de refus numéro un au comptoir, et il ne se règle pas sur place.</p>
<p>Certains loueurs exigent également un justificatif de domicile et limitent le kilométrage ou interdisent la sortie du territoire — un point à vérifier si vous envisagez de descendre vers le sud.</p>
<div class="callout">
<span class="callout-label">La question à se poser honnêtement</span>
<p>Un SUV premium à 200 € par jour, immobilisé devant un riad parce que la médina est piétonne, coûte le même prix qu'un chauffeur privé à la journée qui vous attend, vous dépose et gère le stationnement. Si votre séjour est urbain, le second choix est plus confortable — et souvent moins cher au total.</p>
</div>

<h2>Voiture avec chauffeur : le vrai concurrent</h2>
<p>À Marrakech, la mise à disposition d'un véhicule avec chauffeur est une prestation courante, bien organisée et à un niveau de prix comparable à une location premium. Vous obtenez un van ou une berline, un conducteur qui connaît les routes de l'Atlas et les accès, et l'absence totale de souci de stationnement, de caution et d'état des lieux.</p>
<p>Elle s'impose en particulier pour trois usages : les <strong>trajets longue distance</strong> vers Ouarzazate ou Essaouira, où la route demande de l'attention ; les <strong>déplacements professionnels</strong> avec plusieurs rendez-vous dans la journée ; et les <strong>séjours en famille</strong>, où personne n'a envie de conduire après une journée dans l'Atlas.</p>

<h2>Réserver correctement</h2>
<p>Le parc premium est limité : à Marrakech, les mêmes véhicules tournent entre plusieurs agences. En haute saison — printemps, fêtes de fin d'année, grands événements —, réservez plusieurs semaines à l'avance et faites confirmer le <strong>modèle exact</strong>, pas seulement la catégorie, par écrit. Photographiez le véhicule dans le détail au départ : sur ces gammes, la moindre jante marquée se chiffre en milliers de dirhams.</p>
`,
    faqs: [
      {
        q: 'Combien coûte la location d\'une voiture de luxe à Marrakech ?',
        a: "De 110 à 180 € par jour pour une berline premium, 150 à 280 € pour un SUV type Range Rover ou Cayenne, et 200 à 400 € pour un cabriolet ou une sportive. Les cautions vont de 20 000 à 60 000 MAD selon le modèle.",
      },
      {
        q: 'Quel âge faut-il pour louer une voiture haut de gamme au Maroc ?',
        a: "Généralement 25 ans minimum, parfois 30 pour les sportives, avec trois à cinq ans de permis. Un justificatif de domicile peut être demandé, et certains contrats limitent le kilométrage ou interdisent de quitter le territoire.",
      },
      {
        q: 'Vaut-il mieux louer une voiture premium ou prendre un chauffeur ?',
        a: "Pour un séjour urbain, le chauffeur est plus confortable et souvent moins cher au total : pas de caution, pas de stationnement, pas d'état des lieux, et un véhicule qui vous attend. La location premium garde tout son sens pour un road-trip où le plaisir de conduire fait partie du voyage.",
      },
      {
        q: 'Ma carte bancaire suffira-t-elle pour la caution ?',
        a: "Rarement sans démarche préalable : les cautions de 30 000 à 60 000 MAD dépassent les plafonds standards. Faites relever temporairement votre plafond d'autorisation auprès de votre banque avant le départ — c'est la première cause de refus au comptoir et elle ne se résout pas sur place.",
      },
    ],
  },
} satisfies PageContent;
