import type { PageContent } from '../types';

export default {
  fr: {
    title: "Restaurants aéroport Marrakech-Ménara : où manger, duty free",
    description: "Restaurants et boutiques de l'aéroport de Marrakech-Ménara : Starbucks, Paul, cafés avant et après le contrôle, duty free, horaires et McDonald's.",
    eyebrow: "Restaurants · cafés · duty free",
    h1: "Restaurants et boutiques de l'aéroport Marrakech-Ménara",
    lede: "Un café avant l'embarquement, un sandwich pour le vol, un dernier parfum au duty free : l'offre de l'aéroport est correcte mais limitée, et se réduit fortement la nuit. Voici ce que vous trouverez, de quel côté du contrôle, et nos conseils pour ne pas embarquer le ventre vide.",
    highlights: [
      { icon: 'coffee', value: "6 enseignes", label: "Cafés et restauration rapide identifiés" },
      { icon: 'shop', value: "Duty free", label: "Côté départs, après le contrôle" },
      { icon: 'moon', value: "Offre réduite", label: "Peu de comptoirs ouverts la nuit" },
      { icon: 'wallet', value: "Carte acceptée", label: "Dans la plupart des points de vente" },
    ],
    cardSections: [
      {
        eyebrow: "Manger et boire",
        heading: "Cafés et restaurants de l'aéroport Marrakech-Ménara",
        intro: "Les enseignes présentes dans les terminaux. L'emplacement exact et les horaires changent au fil des travaux et des saisons : fiez-vous à la signalétique sur place.",
        variant: 'feature',
        items: [
          { icon: 'coffee', title: "Starbucks", text: "Café, boissons chaudes et froides, viennoiseries : le repère le plus connu avant l'embarquement.", tags: ["Café", "Snacking"] },
          { icon: 'coffee', title: "Paul", text: "Boulangerie française : sandwichs, salades et pâtisseries, pratique pour emporter un repas à bord.", tags: ["Boulangerie", "À emporter"] },
          { icon: 'coffee', title: "La Table du Marché", text: "Restauration plus posée avec plats, salades et desserts, pour un vrai repas avant un vol long.", tags: ["Restaurant", "Repas complet"] },
          { icon: 'coffee', title: "Segafredo", text: "Bar à café italien : expresso, boissons et petite restauration.", tags: ["Café", "Rapide"] },
          { icon: 'coffee', title: "Pomme de Pain", text: "Sandwichs, wraps et formules rapides à prix raisonnables.", tags: ["Restauration rapide", "Formules"] },
          { icon: 'coffee', title: "Maymana", text: "Comptoir de snacking et de douceurs pour patienter entre le contrôle et la porte.", tags: ["Snacking", "Douceurs"] },
        ],
      },
      {
        eyebrow: "Shopping",
        heading: "Boutiques et duty free de l'aéroport",
        variant: 'feature',
        items: [
          { icon: 'shop', title: "Duty free (départs)", text: "Après le contrôle des passeports : parfums, cosmétiques, alcool, tabac et confiserie, avec des marques comme Victoria's Secret, Lacoste ou Montblanc.", tags: ["Après le contrôle", "Carte d'embarquement exigée"] },
          { icon: 'sparkles', title: "Artisanat et souvenirs", text: "Huile d'argan, cosmétiques marocains, épices emballées et petits objets d'artisanat : pratique, mais plus cher qu'en médina.", tags: ["Souvenirs", "Prix aéroport"] },
          { icon: 'book', title: "Presse et produits de voyage", text: "Journaux, livres, adaptateurs, chargeurs et bouteilles d'eau pour le vol.", tags: ["Dépannage", "Avant et après le contrôle"] },
        ],
      },
    ],
    body: `
<h2>Avant ou après le contrôle : où manger à l'aéroport Marrakech-Ménara ?</h2>
<p>Au départ, le passage du contrôle de sûreté et des passeports peut prendre de 30 minutes à plus d'une heure en saison. Le bon réflexe : <strong>passer les contrôles d'abord</strong>, puis s'installer côté embarquement, où se trouvent le duty free et l'essentiel des cafés. Côté public (zone avant contrôle), l'offre se limite à quelques cafés et comptoirs de snacking, utiles pour ceux qui accompagnent un voyageur ou attendent une <a href="/arrivees/">arrivée</a>.</p>
<div class="callout">
<span class="callout-label">Vol de nuit ou très tôt le matin</span>
<p>Entre minuit et 5 h, la plupart des comptoirs sont fermés ou n'offrent qu'un service minimal. Dînez en ville avant de partir et gardez une bouteille d'eau achetée après le contrôle.</p>
</div>

<h2>Y a-t-il un McDonald's à l'aéroport de Marrakech ?</h2>
<p>À notre connaissance, <strong>aucun McDonald's n'est installé dans l'aéroport Marrakech-Ménara</strong> à ce jour. Les plus proches sont en ville : avenue Mohammed V à Guéliz, près de la gare et dans les centres commerciaux (Carré Eden, Menara Mall), à 10–15 minutes en voiture. Pour un repas rapide sur place, Paul et Pomme de Pain sont les alternatives les plus proches.</p>

<h2>Le duty free de l'aéroport Marrakech-Ménara</h2>
<p>Le duty free se trouve côté départs, après le contrôle des passeports : la carte d'embarquement est demandée à la caisse. On y trouve parfums, cosmétiques, alcool, tabac, chocolats et une sélection de produits marocains. Les prix sont alignés sur les duty free internationaux : pour l'huile d'argan et l'artisanat, la médina reste bien moins chère si vous avez le temps de comparer.</p>
<p class="small">Liquides achetés au duty free : gardez-les dans le sac scellé avec le ticket, surtout si vous avez une correspondance en Europe.</p>

<h2>Prix et paiement</h2>
<p>Comptez des prix d'aéroport : environ <strong>30 à 50 DH (≈ 3 à 5 €) pour un café</strong> et 60 à 120 DH (≈ 6 à 11 €) pour un sandwich ou une formule. La carte bancaire est acceptée dans la plupart des points de vente, et les euros souvent aussi, avec une monnaie rendue en dirhams à un taux peu favorable. Gardez quelques dirhams pour les petits achats.</p>

<h2>Autres services à connaître</h2>
<p>Wi-Fi, bureaux de change, distributeurs, salons VIP et espace prière : retrouvez-les sur notre page <a href="/services/">services de l'aéroport</a>, et les infos d'enregistrement sur la page <a href="/departs/">départs</a>.</p>
`,
    faqHeading: "Restaurants de l'aéroport Marrakech-Ménara : questions fréquentes",
    faqs: [
      { q: "Y a-t-il un McDonald's à l'aéroport de Marrakech ?", a: "Non, à notre connaissance aucun McDonald's n'est installé dans l'aéroport. Les plus proches sont en ville, à Guéliz et dans les centres commerciaux Carré Eden et Menara Mall, à 10–15 minutes en voiture." },
      { q: "Où manger à l'aéroport de Marrakech ?", a: "Les principales enseignes sont Starbucks, Paul, La Table du Marché, Segafredo, Pomme de Pain et Maymana. L'essentiel de l'offre se trouve côté départs, après le contrôle." },
      { q: "Y a-t-il des restaurants après le contrôle de sécurité ?", a: "Oui, la zone d'embarquement regroupe la majorité des cafés et le duty free. Passez les contrôles d'abord, puis mangez près de votre porte." },
      { q: "Les restaurants de l'aéroport sont-ils ouverts la nuit ?", a: "Très peu. Entre minuit et 5 h, la plupart des comptoirs sont fermés ou en service minimal : dînez en ville avant un vol de nuit." },
      { q: "Où se trouve le duty free de l'aéroport Marrakech-Ménara ?", a: "Côté départs, après le contrôle des passeports. La carte d'embarquement est demandée au moment de payer." },
      { q: "Que peut-on acheter au duty free de Marrakech ?", a: "Parfums, cosmétiques, alcool, tabac, chocolats et produits marocains comme l'huile d'argan, avec des marques telles que Victoria's Secret, Lacoste ou Montblanc." },
      { q: "Peut-on payer par carte dans les restaurants de l'aéroport ?", a: "Oui, dans la plupart des points de vente. Les euros sont souvent acceptés, mais la monnaie est rendue en dirhams à un taux peu avantageux." },
      { q: "Combien coûte un café à l'aéroport de Marrakech ?", a: "Comptez environ 30 à 50 DH (≈ 3 à 5 €) pour un café et 60 à 120 DH (≈ 6 à 11 €) pour un sandwich ou une formule." },
    ],
    cta: {
      heading: "Dîner en ville, puis rejoindre l'aéroport sans stress",
      text: "Un chauffeur vous récupère à votre hôtel ou à la porte de médina la plus proche, prix fixe par véhicule, même pour un vol de nuit.",
      label: "Réserver un transfert",
      secondary: { label: "Voir les services de l'aéroport", key: 'services' },
    },
  },
} satisfies PageContent;
