import type { PageContent } from '../types';

export default {
  fr: {
    title: 'Location de voiture pas chère à Marrakech',
    description: "Louer une voiture économique à l'aéroport de Marrakech : prix réels dès 25 €/jour, agences locales ou internationales, pièges du contrat à bas prix.",
    eyebrow: 'Marrakech Ménara · Économique',
    h1: 'Location de voiture économique à Marrakech',
    lede: "Les annonces à 12 € par jour existent, et elles ne sont pas fausses — elles sont simplement incomplètes. Voici ce que coûte réellement une petite voiture au Maroc, et comment payer peu sans se faire rattraper au comptoir.",
    body: `
<h2>Ce qu'on loue vraiment à ce prix</h2>
<p>La catégorie économique au Maroc, c'est la <strong>Dacia Sandero, la Kia Picanto, la Hyundai i10 ou la Fiat Panda</strong> : quatre à cinq places, coffre modeste, climatisation, boîte manuelle. Ces voitures sont produites ou massivement importées au Maroc, ce qui explique des tarifs nettement inférieurs à l'Europe. Comptez <strong>25 à 35 € par jour</strong> en saison normale, moins sur une location d'une semaine.</p>
<p>Elles suffisent parfaitement pour Marrakech, Essaouira, l'Ourika, Imlil et le Tichka : toutes ces routes sont goudronnées. Leur vraie limite est la climatisation en plein été, qui peine sur les petits moteurs lorsque l'on dépasse 42 °C, et la reprise en montagne à quatre passagers chargés.</p>

<h2>Comment un prix bas devient un prix élevé</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Ligne du contrat</th><th>Ce qui est annoncé</th><th>Ce que vous payez</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Franchise</strong></td><td>« Assurance incluse »</td><td>Franchise de 5 000 à 15 000 MAD à votre charge</td></tr>
<tr><td><strong>Rachat de franchise</strong></td><td>Optionnel</td><td>10 à 20 € / jour, parfois plus que la location</td></tr>
<tr><td><strong>Carburant</strong></td><td>« Plein / plein »</td><td>Plein facturé au départ, non remboursé au retour chez certains</td></tr>
<tr><td><strong>Second conducteur</strong></td><td>Non mentionné</td><td>5 à 10 € / jour</td></tr>
<tr><td><strong>Retour hors horaires</strong></td><td>Non mentionné</td><td>Supplément nuit ou dimanche</td></tr>
</tbody>
</table>
</div>
<p>Le réflexe qui protège : demandez <strong>le montant total débité, franchise comprise</strong>, par écrit, avant de valider. Un loueur sérieux le fournit sans difficulté.</p>

<h2>Agence locale ou enseigne internationale ?</h2>
<p>Les <strong>agences marocaines</strong> sont souvent 20 à 40 % moins chères, avec des véhicules plus anciens mais correctement entretenus, et un vrai interlocuteur sur place. Le risque tient à la qualité très variable de l'état des lieux et au traitement des litiges. Choisissez-en une avec un volume d'avis significatif et récent.</p>
<p>Les <strong>enseignes internationales</strong> présentes au RAK coûtent davantage mais offrent des procédures standardisées, une flotte plus récente et un recours plus simple en cas de problème. À budget serré, c'est le compromis raisonnable pour une première location au Maroc.</p>
<div class="callout">
<span class="callout-label">La précaution qui vaut tous les contrats</span>
<p>Filmez le véhicule sous tous les angles au départ — jantes, pare-brise, toit, bas de caisse, intérieur — avec l'horodatage activé, et refaites exactement la même série au retour. C'est la seule pièce qui compte en cas de contestation sur une rayure, et elle prend dix minutes.</p>
</div>

<h2>Payer moins, concrètement</h2>
<ul>
<li><strong>Réservez à l'avance</strong> : les prix au comptoir en haute saison sont systématiquement plus élevés qu'en ligne.</li>
<li><strong>Louez à la semaine</strong> : le tarif journalier chute nettement au-delà de cinq jours.</li>
<li><strong>Ne prenez pas la voiture dès l'atterrissage</strong> si vos deux premiers jours se passent en médina — vous payeriez un véhicule inutilisable.</li>
<li><strong>Refusez le GPS</strong> à 8 € par jour : votre téléphone avec une carte hors ligne fait mieux.</li>
<li><strong>Comparez le rachat de franchise du loueur</strong> avec une assurance tierce, souvent trois fois moins chère, en acceptant d'avancer les frais en cas de sinistre.</li>
</ul>
`,
    faqs: [
      {
        q: 'Quel est le vrai prix d\'une petite voiture de location à Marrakech ?',
        a: "De 25 à 35 € par jour en saison normale pour une Dacia Sandero, une Kia Picanto ou équivalent, avec des tarifs dégressifs à la semaine. Les annonces très en dessous excluent généralement le rachat de franchise, qui peut ajouter 10 à 20 € par jour.",
      },
      {
        q: 'Les agences locales marocaines sont-elles fiables ?',
        a: "Les meilleures le sont, et elles coûtent 20 à 40 % de moins que les enseignes internationales. La qualité tient surtout au sérieux de l'état des lieux : choisissez une agence avec des avis nombreux et récents, et filmez le véhicule au départ comme au retour.",
      },
      {
        q: 'Une citadine suffit-elle pour visiter l\'Atlas depuis Marrakech ?',
        a: "Oui pour l'Ourika, Imlil, Essaouira et le col du Tichka, qui sont goudronnés. Sa limite est la climatisation en plein été et la reprise en montagne à pleine charge. Seules les pistes non revêtues justifient un SUV.",
      },
      {
        q: 'Faut-il prendre le rachat de franchise du loueur ?',
        a: "Ce n'est pas obligatoire, et c'est souvent le poste le plus cher. Une assurance tierce spécialisée coûte généralement trois fois moins, avec une contrepartie : vous avancez les frais en cas de dommage et vous vous faites rembourser ensuite.",
      },
    ],
  },
} satisfies PageContent;
