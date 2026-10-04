import type { PageContent } from '../types';
import { site } from '../../data/site';

export default {
  fr: {
    title: "Mentions légales — AeroportRAK, aéroport Marrakech-Ménara",
    description: "Mentions légales d'AeroportRAK, guide indépendant de l'aéroport de Marrakech-Ménara : éditeur, hébergeur, propriété intellectuelle et responsabilité.",
    eyebrow: 'AeroportRAK',
    h1: 'Mentions légales',
    lede: "Qui édite ce site, qui l'héberge, et dans quelles limites les informations publiées peuvent être utilisées.",
    body: `
<h2>Éditeur du site</h2>
<p><strong>${site.name}</strong> (${site.url.replace('https://', '')}), guide d'information indépendant consacré à l'aéroport de Marrakech-Ménara.<br>
Contact : <a href="mailto:${site.contactEmail}">${site.contactEmail}</a><br>
Directeur de la publication : l'éditeur du site.</p>

<h2>Hébergeur</h2>
<p>Hostinger International Ltd.<br>61 Lordou Vironos Street, 6023 Larnaca, Chypre<br>hostinger.com</p>

<h2>Site indépendant</h2>
<p>${site.name} n'est ni le site officiel de l'aéroport, ni affilié à l'Office national des aéroports (ONDA), aux compagnies aériennes ou aux autorités marocaines. Les informations officielles sont publiées sur onda.ma.</p>

<h2>Exactitude des informations</h2>
<p>Les tarifs, horaires et services décrits sont vérifiés avec soin mais peuvent changer sans préavis. Ils sont donnés à titre indicatif : vérifiez toujours auprès de votre compagnie aérienne ou du prestataire concerné avant de voyager. L'éditeur ne saurait être tenu responsable d'une décision prise sur la seule base de ce site.</p>

<h2>Liens d'affiliation et publicité</h2>
<p>Certains liens et modules de réservation sont des liens d'affiliation : une commission peut être perçue en cas de réservation, sans surcoût pour vous. Le site peut aussi afficher des annonces publicitaires. Le détail figure dans notre <a href="/divulgation-affiliation/">divulgation d'affiliation</a> et notre <a href="/politique-confidentialite/">politique de confidentialité</a>.</p>

<h2>Propriété intellectuelle</h2>
<p>Les textes, la mise en page, le logo et les visuels originaux de ${site.name} sont protégés. Toute reproduction, même partielle, sans autorisation écrite est interdite. Les marques et photographies d'établissements tiers restent la propriété de leurs titulaires respectifs.</p>

<h2>Données personnelles et cookies</h2>
<p>Le traitement de vos données et l'usage des cookies sont décrits dans la <a href="/politique-confidentialite/">politique de confidentialité</a>. Vous pouvez modifier vos choix à tout moment via le lien « Gérer les cookies » en bas de chaque page.</p>
`,
  },
} satisfies PageContent;
