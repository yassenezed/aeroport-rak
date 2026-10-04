import type { PageContent } from '../types';
import { site } from '../../data/site';

export default {
  fr: {
    title: "Confidentialité — AeroportRAK, aéroport Marrakech-Ménara",
    description: "Comment AeroportRAK, guide de l'aéroport de Marrakech-Ménara, traite vos données : audience, affiliation, cookies, widgets tiers et RGPD.",
    eyebrow: 'AeroportRAK',
    h1: 'Politique de confidentialité',
    lede: "Ce que ce site collecte, pourquoi, pendant combien de temps, et ce que vous pouvez exiger. En résumé : aucun compte, aucun formulaire de suivi, et des outils tiers strictement limités à la mesure d'audience et à la réservation.",
    body: `
<h2>Qui traite vos données</h2>
<p>Le responsable du traitement est l'éditeur d'AeroportRAK, joignable à l'adresse <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>. Le site ne propose ni création de compte, ni espace personnel, ni newsletter.</p>

<h2>Ce que nous collectons</h2>
<ul>
<li><strong>Mesure d'audience</strong> : pages consultées, provenance, type d'appareil, pays. Ces données servent à comprendre quels contenus sont utiles et à les améliorer. Elles ne permettent pas de vous identifier personnellement.</li>
<li><strong>Journaux techniques</strong> de l'hébergeur, conservés pour la sécurité et le bon fonctionnement du site.</li>
<li><strong>Messages que vous nous envoyez</strong> : uniquement si vous nous écrivez, et seulement le temps de traiter votre demande.</li>
</ul>
<p>Nous ne vendons aucune donnée et ne transmettons rien à des courtiers en données.</p>

<h2>Cookies et services tiers</h2>
<p>Certaines pages intègrent des outils fournis par des tiers, qui déposent leurs propres cookies et disposent de leurs propres politiques :</p>
<ul>
<li><strong>Widgets de réservation</strong> (vols, transferts) : ils utilisent des cookies de suivi d'affiliation pour attribuer une éventuelle réservation à notre site.</li>
<li><strong>Tableaux de vols</strong> : fournis par un prestataire d'information aérienne, affichés dans un cadre isolé.</li>
<li><strong>Mesure d'audience</strong> : statistiques agrégées de fréquentation.</li>
<li><strong>Météo</strong> : la température affichée sur l'accueil est obtenue auprès d'Open-Meteo, sans cookie ; seule votre adresse IP transite, comme pour tout chargement de page.</li>
</ul>
<p>Vous pouvez bloquer ou supprimer ces cookies depuis les réglages de votre navigateur. Le site reste entièrement consultable sans eux ; seuls les widgets de réservation peuvent cesser de fonctionner correctement.</p>

<h2>Consentement, mesure d'audience et publicité</h2>
<p>Lors de votre première visite depuis l'Union européenne, l'Espace économique européen, le Royaume-Uni ou la Suisse, un bandeau vous demande votre accord. Tant que vous n'avez pas accepté, aucun cookie de mesure ou de publicité n'est déposé et le script d'affiliation n'est pas chargé. Vous pouvez changer d'avis à tout moment via le lien <strong>« Gérer les cookies »</strong> en bas de chaque page.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google Ireland Ltd) : statistiques de fréquentation, adresses IP non conservées. Le mode consentement de Google envoie uniquement des signaux anonymes sans cookie tant que vous n'avez pas accepté.</li>
<li><strong>Affiliation</strong> : Travelpayouts et ses partenaires (Kiwitaxi pour les transferts, EconomyBookings pour la location de voitures, comparateurs de vols), ainsi que Booking.com pour les hôtels. Ils peuvent déposer un cookie pour attribuer une réservation à notre site.</li>
<li><strong>Publicité (Google AdSense)</strong> : le site peut afficher des annonces. Des fournisseurs tiers, dont Google, utilisent des cookies pour diffuser des annonces en fonction de vos visites précédentes sur ce site ou sur d'autres. Les cookies publicitaires de Google permettent à Google et à ses partenaires de vous proposer des annonces adaptées. Vous pouvez désactiver la publicité personnalisée dans les <a href="https://adssettings.google.com" rel="noopener" target="_blank">paramètres des annonces Google</a> ou sur <a href="https://www.youronlinechoices.com/fr/" rel="noopener" target="_blank">youronlinechoices.com</a>. Plus d'informations : <a href="https://policies.google.com/technologies/partner-sites?hl=fr" rel="noopener" target="_blank">comment Google utilise les données des sites partenaires</a>.</li>
<li><strong>Formulaire de contact</strong> : les messages envoyés via le formulaire transitent par Formspree (Formspree Inc., États-Unis), qui nous les transmet par e-mail. Ils ne servent qu'à vous répondre.</li>
</ul>

<h2>Liens d'affiliation</h2>
<p>Lorsque vous suivez un lien de réservation depuis ce site, le partenaire concerné peut enregistrer votre provenance afin de nous attribuer une commission si vous réservez. Ce mécanisme <strong>n'augmente jamais le prix que vous payez</strong>. Il est détaillé sur notre page de <a href="/divulgation-affiliation/">divulgation d'affiliation</a>.</p>

<h2>Durée de conservation</h2>
<p>Les statistiques d'audience sont conservées de façon agrégée. Les journaux techniques de l'hébergeur suivent la durée définie par celui-ci. Les messages reçus par e-mail sont supprimés une fois la demande traitée, sauf lorsqu'ils documentent une correction apportée au site.</p>

<h2>Vos droits</h2>
<p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition sur les données vous concernant. Écrivez à <a href="mailto:${site.contactEmail}">${site.contactEmail}</a> : nous répondons dans un délai d'un mois. Vous pouvez également introduire une réclamation auprès de l'autorité de contrôle compétente, la CNIL pour les résidents français.</p>

<h2>Modifications</h2>
<p>Cette politique peut être ajustée, notamment si nous ajoutons ou retirons un outil tiers. Toute modification substantielle sera signalée sur cette page.</p>
`,
  },
} satisfies PageContent;
