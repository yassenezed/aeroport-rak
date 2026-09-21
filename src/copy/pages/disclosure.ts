import type { PageContent } from '../types';
import { site } from '../../data/site';

export default {
  fr: {
    title: 'Divulgation d\'affiliation — AirportRAK',
    description: "Comment AirportRAK gagne de l'argent : liens d'affiliation, commissions, et pourquoi cela ne change ni le prix que vous payez ni nos recommandations.",
    eyebrow: 'AirportRAK',
    h1: 'Divulgation d\'affiliation',
    lede: "Ce site est gratuit et financé par des commissions d'affiliation. Voici exactement comment cela fonctionne, ce que cela change pour vous — rien sur le prix — et ce que cela ne change pas dans ce que nous écrivons.",
    body: `
<h2>Le principe, en trois phrases</h2>
<p>Certaines pages contiennent des liens vers des plateformes de réservation de transferts, de vols, d'hébergements ou de location de voiture. Si vous réservez après avoir suivi l'un de ces liens, le partenaire nous verse une commission, prélevée sur sa propre marge. <strong>Le prix que vous payez est identique à celui que vous auriez obtenu en allant directement sur son site.</strong></p>

<h2>Ce que cela finance</h2>
<p>La rédaction et surtout la mise à jour des pages : relever les tarifs affichés, vérifier des horaires, corriger une information qui a changé. Un guide pratique qui n'est pas entretenu devient faux en quelques mois — c'est précisément ce que nous cherchons à éviter, et cela représente l'essentiel du travail.</p>

<h2>Ce que cela ne change pas</h2>
<ul>
<li><strong>Aucun partenaire ne paie pour figurer sur ce site</strong>, ni pour occuper une position particulière.</li>
<li><strong>Aucun partenaire ne relit nos textes</strong> ni n'a de droit de regard sur ce que nous écrivons à son sujet.</li>
<li><strong>Nous recommandons aussi des options qui ne nous rapportent rien</strong> lorsqu'elles sont meilleures. Le taxi de la station et le bus 19 sont dans ce cas : nous les recommandons ouvertement dans les situations où ils l'emportent, et ils ne génèrent aucune commission.</li>
<li><strong>Nous signalons les défauts</strong> des services dont nous parlons, y compris lorsqu'un lien d'affiliation y renvoie.</li>
</ul>
<div class="callout">
<span class="callout-label">Un exemple concret</span>
<p>Sur notre page transferts, nous écrivons qu'à deux, en journée, vers Guéliz, le taxi à 100–150 MAD est difficile à battre et qu'il n'y a aucune raison de réserver quoi que ce soit. C'est un conseil qui nous coûte de l'argent, et c'est la seule façon d'écrire un guide qui vaille la peine d'être lu.</p>
</div>

<h2>Où se trouvent ces liens</h2>
<p>Principalement dans les blocs de réservation de transferts et de vols, dans les encadrés d'appel à l'action en bas de page, et dans certains liens contextuels à l'intérieur des articles. Les liens vers des sources officielles, des textes réglementaires ou nos propres pages ne sont jamais affiliés.</p>

<h2>Publicité et contenu sponsorisé</h2>
<p>Nous ne publions pas d'articles sponsorisés déguisés en contenu éditorial. Si cette politique devait évoluer, tout contenu rémunéré serait identifié comme tel de façon claire et visible en tête de page.</p>

<h2>Une question ?</h2>
<p>Écrivez-nous à <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>. Si vous pensez qu'une recommandation de ce site est orientée par une commission plutôt que par l'intérêt du lecteur, dites-le : c'est exactement le type de signalement que nous voulons recevoir.</p>
`,
  },
} satisfies PageContent;
