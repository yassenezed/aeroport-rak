import type { PageContent } from '../types';
import { site } from '../../data/site';

export default {
  fr: {
    title: "Conditions d'utilisation — guide aéroport Marrakech-Ménara",
    description: "Conditions d'utilisation d'AeroportRAK, guide indépendant de l'aéroport de Marrakech-Ménara : nature du site, responsabilité et liens tiers.",
    eyebrow: 'AeroportRAK',
    h1: 'Conditions d\'utilisation',
    lede: "Ce que vous pouvez attendre de ce site, et ce que vous ne pouvez pas en attendre. En consultant AeroportRAK, vous acceptez les conditions qui suivent.",
    body: `
<h2>Nature du site</h2>
<p>AeroportRAK est une publication éditoriale indépendante consacrée à l'aéroport de Marrakech Ménara. Le site <strong>n'est ni exploité, ni mandaté, ni approuvé</strong> par l'Office National Des Aéroports, par l'aéroport de Marrakech Ménara, ni par aucune compagnie aérienne. Il ne vend aucun service de transport et n'est pas une agence de voyage.</p>

<h2>Exactitude des informations</h2>
<p>Nous vérifions les informations publiées et indiquons la date des relevés tarifaires. Les tarifs, horaires, fréquences et procédures évoluent néanmoins sans préavis : <strong>vérifiez toujours auprès de l'opérateur concerné</strong> avant de prendre une décision engageante, en particulier pour un horaire de vol, une formalité d'entrée ou une réservation.</p>
<p>Les ordres de grandeur que nous donnons — temps d'attente, durées de trajet, fourchettes de prix — sont des estimations issues de conditions habituelles. Ils ne constituent ni une garantie ni un engagement.</p>

<h2>Limitation de responsabilité</h2>
<p>Les informations de ce site sont fournies à titre indicatif. Nous ne pouvons être tenus responsables d'un vol manqué, d'une correspondance perdue, d'un litige avec un prestataire, d'un refus d'embarquement ou d'un préjudice résultant de l'usage des informations publiées. La décision et sa vérification vous appartiennent.</p>
<p>Aucun contenu de ce site ne constitue un conseil juridique. Les développements relatifs aux droits des passagers ou aux formalités d'entrée sont des informations générales, qui ne remplacent pas l'avis d'un professionnel sur votre situation particulière.</p>

<h2>Liens vers des sites tiers</h2>
<p>Le site renvoie vers des plateformes de réservation, des transporteurs et des sources officielles. Nous n'exerçons aucun contrôle sur leur contenu, leurs tarifs, leurs conditions générales ni leur disponibilité, et nous déclinons toute responsabilité à leur égard. Toute réservation effectuée chez un tiers relève exclusivement du contrat conclu avec lui.</p>

<h2>Propriété intellectuelle</h2>
<p>Les textes, la structure éditoriale, l'identité visuelle et les éléments graphiques de ce site sont protégés. Toute reproduction ou réutilisation substantielle sans autorisation écrite préalable est interdite. Une citation courte reste possible à condition d'indiquer la source et d'inclure un lien vers la page d'origine.</p>
<p>Les marques, noms commerciaux et logos mentionnés appartiennent à leurs titulaires respectifs et ne sont cités qu'à titre d'information.</p>

<h2>Usage acceptable</h2>
<p>Sont interdits l'extraction automatisée massive du contenu, la reproduction du site ou de sa structure, ainsi que toute tentative de perturber son fonctionnement.</p>

<h2>Droit applicable et contact</h2>
<p>Ces conditions sont soumises au droit français. Pour toute question les concernant : <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>.</p>
`,
  },
} satisfies PageContent;
