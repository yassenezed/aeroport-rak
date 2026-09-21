import type { PageContent } from '../types';

export default {
  fr: {
    title: 'À propos d\'AirportRAK',
    description: "Qui écrit AirportRAK, comment les informations sur l'aéroport de Marrakech sont vérifiées et comment le site est financé.",
    eyebrow: 'AirportRAK',
    h1: 'À propos d\'AirportRAK',
    lede: "AirportRAK est un guide indépendant consacré à l'aéroport de Marrakech Ménara. Nous n'appartenons pas à l'aéroport, nous ne vendons aucun transport, et nous écrivons uniquement ce que nous avons pu vérifier.",
    body: `
<h2>Ce que fait ce site</h2>
<p>Le RAK accueille plus de neuf millions de passagers par an, dont une majorité découvre le Maroc pour la première fois. Les informations pratiques qui les concernent — combien coûte un taxi, jusqu'où va une voiture dans la médina, à quelle heure s'arrête le bus 19, combien de temps prend la police des frontières — sont dispersées, souvent périmées, et régulièrement recopiées d'un site à l'autre sans vérification.</p>
<p>Notre objectif est simple : une page par question réelle, avec des chiffres datés, des ordres de grandeur honnêtes et l'indication claire de ce que nous ne savons pas.</p>

<h2>Comment nous vérifions</h2>
<ul>
<li><strong>Les tarifs</strong> sont relevés sur les affichages officiels, les grilles des opérateurs et les outils de réservation, avec la date du relevé indiquée sur la page.</li>
<li><strong>Les horaires et fréquences</strong> proviennent des exploitants concernés, et non de forums ou d'articles tiers.</li>
<li><strong>Les temps d'attente</strong> sont donnés en fourchettes, avec la distinction entre heure creuse et heure de pointe, parce qu'une valeur unique serait trompeuse.</li>
<li><strong>Les points juridiques</strong> — formalités, indemnisation, statut des VTC — sont rattachés au texte applicable et révisés lorsque la situation évolue.</li>
</ul>
<p>Quand une information change, nous corrigeons la page plutôt que d'en publier une nouvelle. Si vous constatez une erreur ou un prix qui ne correspond plus à la réalité, <a href="/contact/">écrivez-nous</a> : c'est la façon la plus utile de contribuer.</p>

<h2>Notre indépendance</h2>
<p>Nous ne sommes affiliés ni à l'Office National Des Aéroports, ni à l'aéroport de Marrakech Ménara, ni à aucune compagnie aérienne. Aucun hôtel, loueur ou opérateur de transfert ne paie pour figurer sur ce site, et aucun n'a de droit de regard sur ce que nous écrivons à son sujet.</p>
<p>Quand nous recommandons une option, c'est parce qu'elle nous paraît la meilleure dans une situation donnée — et nous disons aussi quand elle ne l'est pas. Le taxi de la station est souvent le meilleur choix à Marrakech, et nous l'écrivons, alors même qu'il ne nous rapporte rien.</p>

<h2>Comment le site est financé</h2>
<p>Certaines pages contiennent des liens d'affiliation vers des plateformes de réservation. Si vous réservez par leur intermédiaire, nous percevons une commission, <strong>sans que le prix que vous payez n'augmente</strong>. C'est ce qui finance la rédaction et la mise à jour des pages.</p>
<p>Ces liens ne déterminent pas nos recommandations, et notre page de <a href="/divulgation-affiliation/">divulgation d'affiliation</a> détaille précisément le fonctionnement.</p>
`,
  },
} satisfies PageContent;
