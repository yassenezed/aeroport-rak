import type { PageContent } from '../types';

export default {
  fr: {
    title: "Transfert aéroport Marrakech-Ménara : taxi, bus, prix 2026",
    description: "Rejoindre la médina depuis l'aéroport de Marrakech-Ménara : transfert privé, taxi, bus 19, navette du riad ou location. Prix réels 2026 et temps de trajet.",
    eyebrow: "Transfert · taxi · bus 19 · location",
    h1: "Transferts aéroport Marrakech-Ménara : 5 façons de rejoindre la ville",
    lede: "Six kilomètres seulement séparent le terminal de Jemaa el-Fna, et aucun train ne fait le trajet. Atterrissage à minuit, famille chargée, sac à dos et petit budget : voici les cinq solutions réelles, leurs prix relevés sur place et celle qui correspond à votre arrivée.",
    highlights: [
      { icon: 'map-pin', value: "6 km", label: "Aéroport → médina, 15–20 min" },
      { icon: 'van', value: "Dès 27 €", label: "Transfert, par véhicule (7 places)" },
      { icon: 'car', value: "100–150 MAD", label: "Taxi de jour, la voiture" },
      { icon: 'bus', value: "30 MAD", label: "Bus 19, par personne" },
    ],
    options: {
      heading: "Comparatif rapide des transports depuis l'aéroport Marrakech-Ménara",
      intro: "Prix relevés en septembre 2026, <strong>par véhicule</strong> sauf pour le bus. Aucun train ne dessert l'aéroport : la gare ONCF est à Guéliz.",
      table: {
        head: ["Transport", "Prix", "Trajet médina", "Confort", "Idéal pour"],
        rows: [
          ["Transfert privé", "dès 27 €", "15–25 min", "Excellent", "Arrivée de nuit, familles, riad dans la médina"],
          ["Taxi de la station", "100–150 MAD<br>150–240 MAD la nuit", "15–25 min", "Correct", "À deux en journée, Guéliz ou Hivernage"],
          ["Bus 19 (ALSA)", "30 MAD / pers.", "20–30 min", "Basique", "Petit budget, bagage léger, journée"],
          ["Navette du riad", "150–250 MAD", "15–25 min", "Très bon", "Riad difficile à trouver"],
          ["Location de voiture", "dès 25 € / jour", "—", "Excellent hors médina", "Atlas, Agafay, Essaouira, road-trip"],
        ],
      },
      detailHeading: "Les 5 solutions en détail",
      items: [
        {
          icon: 'van',
          title: "Transfert privé réservé",
          tagline: "Le plus serein de nuit, en famille ou pour un riad au cœur de la médina.",
          badge: "Notre conseil",
          meta: [
            { label: "Prix", value: "dès 27 € / véhicule" },
            { label: "Trajet", value: "15–25 min" },
            { label: "Places", value: "jusqu'à 7" },
          ],
          pros: [
            "Chauffeur qui vous attend dans le hall des arrivées, <strong>pancarte à votre nom</strong>",
            "Suivi du vol : en cas de retard, pas de supplément",
            "Prix fixe par véhicule, bloqué au moment de la réservation",
            "Dépose à la porte (<em>bab</em>) la plus proche de votre riad",
            "Siège enfant sur demande, annulation gratuite jusqu'à 24 h chez la plupart des prestataires",
          ],
          prices: {
            heading: "Tarifs indicatifs",
            rows: [
              { label: "Médina, Guéliz, Hivernage", value: "dès 27 €" },
              { label: "Palmeraie, Agafay", value: "selon distance" },
              { label: "Essaouira", value: "≈ 95 €" },
              { label: "Minibus 8 places et plus", value: "sur devis" },
            ],
            foot: "Prix par véhicule et non par personne.",
          },
          link: { key: 'bookTransfer', label: "Réserver mon transfert" },
        },
        {
          icon: 'car',
          title: "Taxi de la station",
          tagline: "Disponible à toute heure, à la station située devant le terminal.",
          meta: [
            { label: "Jour", value: "100–150 MAD" },
            { label: "Nuit", value: "150–240 MAD" },
            { label: "Places", value: "3 (petit taxi)" },
          ],
          pros: [
            "Station officielle à la sortie des arrivées, tarifs affichés",
            "Rien à réserver ni à payer à l'avance",
            "À deux en journée, imbattable : 9 à 14 € la voiture entière",
          ],
          cons: [
            "Petit taxi limité à 3 passagers : à quatre, il faut deux voitures",
            "Paiement en espèces et en dirhams uniquement",
            "Dépose à la porte de médina qui arrange le chauffeur, pas forcément la plus proche",
          ],
          note: { label: "Conseil :", text: "confirmez le prix et la destination <strong>avant</strong> de charger les valises, et ignorez les rabatteurs dans le hall : les taxis se prennent uniquement à la station." },
          link: { key: 'taxiTips', label: "Nos conseils taxi à Marrakech" },
        },
        {
          icon: 'bus',
          title: "Bus 19 (ALSA)",
          tagline: "La solution la moins chère, si vous voyagez léger et de jour.",
          meta: [
            { label: "Prix", value: "30 MAD / pers." },
            { label: "Aller-retour", value: "50 MAD (15 jours)" },
            { label: "Horaires", value: "≈ 6 h – 23 h 30" },
          ],
          pros: [
            "Arrêt juste à la sortie du terminal, départ toutes les 30 minutes environ",
            "Trajet d'une vingtaine de minutes jusqu'à la place Jemaa el-Fna",
          ],
          cons: [
            "Plus aucun départ après 23 h 30 environ",
            "Peu de place pour les grosses valises",
            "Dépose sur la place : il reste la marche dans la médina jusqu'au riad",
          ],
          link: { key: 'bus19', label: "Horaires et arrêts du bus 19" },
        },
        {
          icon: 'door',
          title: "Navette de votre riad ou hôtel",
          tagline: "Le chauffeur de votre hébergement, qui connaît la bonne porte et le porteur.",
          meta: [
            { label: "Prix", value: "150–250 MAD / véhicule" },
            { label: "Trajet", value: "15–25 min" },
            { label: "Réservation", value: "auprès du riad" },
          ],
          pros: [
            "Le chauffeur sait exactement où s'arrêter pour votre riad",
            "Souvent coordonnée avec un porteur et sa charrette pour les bagages",
            "Paiement sur place, à l'arrivée",
          ],
          cons: [
            "Tarif très variable d'un établissement à l'autre : comparez avec un transfert",
            "Pas toujours possible pour les vols qui atterrissent tard dans la nuit",
          ],
        },
        {
          icon: 'car',
          title: "Location de voiture",
          tagline: "Pour l'Atlas, Agafay ou Essaouira, pas pour visiter la médina.",
          meta: [
            { label: "Prix", value: "dès 25 € / jour" },
            { label: "Agences", value: "hall des arrivées" },
            { label: "Documents", value: "permis, passeport, carte" },
          ],
          pros: [
            "Comptoirs des loueurs internationaux et marocains dans le hall des arrivées",
            "Liberté totale pour l'Ourika, Imlil, Agafay ou la route d'Essaouira",
            "Réserver en ligne quelques jours avant revient en général moins cher qu'au comptoir",
          ],
          cons: [
            "La médina est piétonne : la voiture reste au parking",
            "Caution bloquée sur une carte de crédit au nom du conducteur",
          ],
          link: { key: 'carRental', label: "Comparer les prix de location" },
        },
      ],
    },
    body: `
<h2>Taxi ou transfert depuis l'aéroport Marrakech-Ménara : le calcul honnête</h2>
<p>Le taxi n'est pas cher à Marrakech : 100 à 150 MAD affichés pour la médina, Guéliz et l'Hivernage, soit 9 à 14 € la voiture entière. À deux, en journée, aucune réservation ne bat ce prix.</p>
<p>Le rapport s'inverse dans trois cas. <strong>La nuit</strong>, le barème passe à 150–240 MAD pour un confort identique. <strong>À quatre et plus</strong>, un petit taxi ne prend que trois passagers : deux voitures, soit 200 à 300 MAD le jour et jusqu'à 480 MAD la nuit. <strong>Pour un riad mal situé</strong>, le chauffeur s'arrête à la porte qui l'arrange, ce qui peut ajouter quinze minutes de marche avec les valises. À 27 € le véhicule jusqu'à sept places, le transfert réservé devient alors l'option la moins chère et la plus confortable.</p>

<h2>Le vrai sujet : la dépose aux portes de la médina</h2>
<p>Aucune voiture n'entre dans les <em>derbs</em>, trop étroits, et plusieurs accès sont fermés à la circulation. Le chauffeur s'arrête à la <em>bab</em> la plus proche : Bab Doukkala au nord-ouest, Bab Laksour près de la Koutoubia, Bab Agnaou au sud, Bab el Khemis à l'est. Vous terminez à pied, en général trois à dix minutes.</p>
<div class="callout">
<span class="callout-label">Deux questions à poser à votre riad</span>
<p>Avant de partir, demandez le nom exact de la porte de dépose, et si un porteur peut vous attendre avec une charrette. La plupart des riads le proposent gratuitement ou pour quelques dirhams si vous donnez votre heure d'arrivée.</p>
</div>

<h2>Arriver de nuit à l'aéroport Marrakech-Ménara</h2>
<p>Après 23 h 30, le bus 19 ne circule plus : il reste le taxi au tarif de nuit ou un transfert réservé. Retirez des dirhams au distributeur du hall des arrivées avant de sortir, car les taxis ne prennent pas la carte. Prévenez aussi votre riad : beaucoup ferment leur porte la nuit et envoient quelqu'un vous accueillir à la <em>bab</em> si l'heure est annoncée.</p>
`,
    faqHeading: "Transferts depuis l'aéroport Marrakech-Ménara : questions fréquentes",
    faqs: [
      { q: "Quel transport choisir si j'atterris à minuit à Marrakech ?", a: "Un transfert réservé, qui vous attend même en cas de retard et vous dépose à la porte de médina la plus proche de votre riad. Le taxi reste possible au tarif de nuit, 150 à 240 MAD la voiture. Le bus 19 ne circule plus après 23 h 30 environ." },
      { q: "Combien coûte un taxi de l'aéroport de Marrakech à la médina ?", a: "100 à 150 MAD la voiture en journée et 150 à 240 MAD la nuit, pour la médina, Guéliz ou l'Hivernage. Le prix est par véhicule, avec trois passagers au maximum dans un petit taxi. Confirmez-le avant de charger les bagages." },
      { q: "Combien coûte un transfert privé depuis l'aéroport Marrakech-Ménara ?", a: "Dès 27 € par véhicule jusqu'à 7 passagers pour la médina, Guéliz ou l'Hivernage, avec suivi du vol. Comptez davantage pour la Palmeraie ou un camp d'Agafay, et environ 95 € pour Essaouira." },
      { q: "Peut-on payer le taxi par carte bancaire ?", a: "Non, les taxis de Marrakech se paient en espèces et en dirhams. Des distributeurs et des bureaux de change se trouvent dans le hall des arrivées. Un transfert réservé se règle en ligne ou au chauffeur selon le prestataire." },
      { q: "Y a-t-il un train entre l'aéroport de Marrakech et la ville ?", a: "Non, aucune voie ferrée ne dessert l'aéroport. La gare ONCF est à Guéliz, avec des trains vers Rabat, Fès et Tanger : on s'y rend en taxi, en transfert ou en bus." },
      { q: "Peut-on utiliser Uber, Careem ou inDrive à l'aéroport ?", a: "Ne comptez pas dessus pour votre arrivée. Uber est revenu à Marrakech fin novembre 2025, mais seulement avec des transporteurs touristiques agréés et une disponibilité irrégulière ; Careem et inDrive opèrent dans un cadre encore flou. En ville, ces applications peuvent dépanner." },
      { q: "Le chauffeur peut-il me déposer devant mon riad ?", a: "Presque jamais : les ruelles de la médina sont trop étroites pour une voiture. Le chauffeur s'arrête à la porte la plus proche et vous finissez à pied, en général 3 à 10 minutes. Demandez un porteur à votre riad." },
      { q: "Comment aller de l'aéroport de Marrakech à Essaouira ?", a: "Le plus simple est un transfert privé, environ 95 € par véhicule pour 2 h 30 à 3 h de route. Les bus Supratours et CTM partent de la ville, pas de l'aéroport : il faut d'abord rejoindre leur gare en taxi." },
    ],
    cta: {
      heading: "Votre trajet réglé avant le décollage",
      text: "Prix fixe par véhicule, chauffeur qui vous attend avec votre nom et suivi du vol. Ou une voiture pour partir explorer l'Atlas.",
      label: "Réserver un transfert",
      secondary: { label: "Louer une voiture", key: 'carRental' },
    },
  },
} satisfies PageContent;
