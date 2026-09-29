import type { PageContent } from '../types';
import { site } from '../../data/site';

export default {
  fr: {
    title: "Contact — AirportRAK, guide de l'aéroport Marrakech-Ménara",
    description: "Contacter AirportRAK : correction d'une information sur l'aéroport de Marrakech-Ménara, signalement d'un tarif périmé ou demande professionnelle.",
    eyebrow: 'AirportRAK',
    h1: 'Nous contacter',
    lede: "Une information périmée, un tarif qui ne correspond plus, une précision à apporter : écrivez-nous. Nous lisons tous les messages et corrigeons les pages concernées.",
    body: `
<h2>Écrire à la rédaction</h2>
<p>Adresse : <a href="mailto:${site.contactEmail}">${site.contactEmail}</a></p>
<p>Pour un signalement d'erreur, indiquez si possible <strong>l'adresse de la page concernée</strong>, le passage en cause et ce que vous avez constaté sur place, avec la date. Une photo d'un affichage tarifaire ou d'un horaire vaut mieux qu'une longue explication : c'est ce qui nous permet de corriger vite et avec certitude.</p>

<h2>Ce que nous ne pouvons pas faire</h2>
<p>AirportRAK est un guide éditorial indépendant, pas un service de l'aéroport ni une agence de voyage. Nous ne pouvons donc pas :</p>
<ul>
<li>modifier, annuler ou retrouver une réservation de vol, d'hôtel ou de transfert ;</li>
<li>renseigner le statut d'un bagage perdu — cela relève du comptoir de votre compagnie aérienne ;</li>
<li>intervenir auprès d'un loueur, d'un hôtel ou d'un chauffeur ;</li>
<li>confirmer l'horaire d'un vol en temps réel, au-delà de ce que montrent nos tableaux d'<a href="/arrivees/">arrivées</a> et de <a href="/departs/">départs</a>.</li>
</ul>
<p>Pour ces démarches, adressez-vous directement à l'opérateur concerné, dont le service client dispose seul des informations de votre dossier.</p>

<h2>Demandes professionnelles</h2>
<p>Hôteliers, loueurs, opérateurs de transfert, offices de tourisme : nous ne vendons pas d'emplacement éditorial et aucun établissement ne peut acheter sa présence ou sa position sur ce site. En revanche, nous accueillons volontiers les corrections factuelles vous concernant — horaires, tarifs, capacités, services — avec une source vérifiable.</p>

<h2>Délai de réponse</h2>
<p>Nous répondons généralement sous quelques jours ouvrés. Les signalements d'erreurs factuelles sont traités en priorité, parce qu'ils affectent directement les lecteurs qui préparent un voyage.</p>
`,
  },
} satisfies PageContent;
