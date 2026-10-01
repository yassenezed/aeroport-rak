import type { PageContent } from '../types';

export default {
  fr: {
    title: "Réserver un transfert aéroport Marrakech-Ménara dès 27 €",
    description: "Transfert privé à l'aéroport de Marrakech-Ménara : prix fixe par véhicule jusqu'à 7 places, chauffeur avec pancarte, vol suivi et annulation gratuite.",
    eyebrow: "Transfert privé · réservation en ligne",
    h1: "Réserver un transfert aéroport Marrakech-Ménara",
    lede: "Indiquez votre destination et votre heure d'atterrissage : le prix s'affiche par véhicule, pas par passager. Un chauffeur vous attend à la sortie des arrivées avec votre nom et vous dépose à la porte de médina la plus proche de votre riad.",
    highlights: [
      { icon: 'wallet', value: "Dès 27 €", label: "Par véhicule, médina et Guéliz" },
      { icon: 'users', value: "Jusqu'à 7", label: "Passagers en monospace" },
      { icon: 'clock', value: "90 min", label: "D'attente offerte après l'atterrissage" },
      { icon: 'shield-check', value: "24 h", label: "Annulation gratuite (la plupart des offres)" },
    ],
    widget: 'transfer',
    cardSections: [
      {
        eyebrow: "Inclus dans la réservation",
        heading: "Pourquoi réserver son transfert à l'aéroport Marrakech-Ménara",
        intro: "Ce que vous obtenez de plus qu'avec un taxi pris à la station.",
        variant: 'feature',
        items: [
          { icon: 'wallet', title: "Prix fixe par véhicule", text: "Connu avant de partir, bagages compris. Rien à négocier à l'arrivée, même à deux heures du matin.", tags: ["Sans surprise"] },
          { icon: 'users', title: "Chauffeur avec pancarte", text: "Il vous attend à la sortie du hall des arrivées, votre nom à la main, et vous aide avec les valises.", tags: ["Accueil personnalisé"] },
          { icon: 'plane-landing', title: "Vol suivi en temps réel", text: "Votre numéro de vol est suivi : en cas de retard, l'heure de prise en charge s'ajuste sans supplément.", tags: ["Retard couvert"] },
          { icon: 'door', title: "Dépose à la bonne porte", text: "Le chauffeur s'arrête à la bab la plus proche de votre riad, celle que votre hébergement vous a indiquée.", tags: ["Médina"] },
          { icon: 'baby', title: "Siège enfant sur demande", text: "À signaler à la réservation avec l'âge de l'enfant. Les taxis de la station n'en ont presque jamais.", tags: ["Familles"] },
          { icon: 'moon', title: "Retour vers l'aéroport", text: "À 5 h du matin, aucun taxi n'attend dans la médina. Réserver l'aller-retour règle aussi le départ.", tags: ["Aller-retour"] },
        ],
      },
    ],
    steps: {
      heading: "Réserver en trois étapes",
      intro: "Deux minutes suffisent si vous avez votre numéro de vol sous la main.",
      items: [
        { icon: 'map-pin', title: "Choisissez le trajet", text: "Dans le module ci-dessus, gardez « Aéroport Marrakech Ménara » au départ et indiquez votre riad, votre hôtel ou votre ville d'arrivée." },
        { icon: 'clipboard', title: "Ajoutez vol et passagers", text: "Numéro de vol, nombre de passagers et de valises, siège enfant éventuel, et un numéro WhatsApp joignable." },
        { icon: 'users', title: "Retrouvez votre chauffeur", text: "Après la douane, sortez du hall des arrivées : le chauffeur vous attend avec votre nom sur une pancarte." },
      ],
    },
    body: `
<h2>Tarifs des transferts depuis l'aéroport Marrakech-Ménara</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Destination</th><th>Distance</th><th>Trajet</th><th>Tarif par véhicule</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Médina, Guéliz, Hivernage</strong></td><td class="num">6–8 km</td><td>15–25 min</td><td class="num">dès 27 €</td></tr>
<tr><td><strong>Palmeraie</strong></td><td class="num">≈ 15 km</td><td>25–35 min</td><td>affiché dans le module</td></tr>
<tr><td><strong>Désert d'Agafay</strong></td><td class="num">≈ 35 km</td><td>40–50 min</td><td>affiché dans le module</td></tr>
<tr><td><strong>Vallée de l'Ourika, Imlil</strong></td><td class="num">≈ 65 km</td><td>1 h 15–1 h 30</td><td>affiché dans le module</td></tr>
<tr><td><strong>Essaouira</strong></td><td class="num">≈ 185 km</td><td>2 h 30–3 h</td><td class="num">≈ 95 €</td></tr>
</tbody>
</table>
</div>
<p>Le prix est <strong>par véhicule</strong>, jusqu'à sept passagers en monospace, et non par personne. Pour toute autre destination, saisissez-la dans le module : le tarif exact s'affiche avant paiement.</p>

<h2>Choisir le bon véhicule</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Véhicule</th><th>Passagers</th><th>Valises</th><th>Pour qui</th></tr></thead>
<tbody>
<tr><td><strong>Berline</strong></td><td class="num">1–3</td><td class="num">2–3</td><td>Couple ou trio avec une valise chacun</td></tr>
<tr class="row-highlight"><td><strong>Monospace</strong></td><td class="num">4–7</td><td class="num">5–7</td><td>Famille ou groupe d'amis, le meilleur prix par place</td></tr>
<tr><td><strong>Minibus</strong></td><td class="num">8–15</td><td class="num">10+</td><td>Groupe, séminaire, mariage</td></tr>
<tr><td><strong>4x4 ou van premium</strong></td><td class="num">1–6</td><td class="num">4–6</td><td>Camps d'Agafay, clientèle affaires</td></tr>
</tbody>
</table>
</div>
<p>Le tarif étant fixé par véhicule, un monospace à quatre ou cinq revient bien moins cher par personne que deux petits taxis, limités à trois passagers chacun. Pour comparer avec le taxi et le bus 19, voir notre <a href="/transferts/">comparatif des transports</a>.</p>

<h2>Les informations à préparer</h2>
<p>Votre <strong>numéro de vol</strong> et l'heure d'atterrissage ; le <strong>nom exact de votre riad ou hôtel</strong> ; pour la médina, la <strong>porte de dépose</strong> que votre hébergement vous a indiquée ; le nombre de passagers et de valises ; un <strong>numéro joignable au Maroc</strong>, WhatsApp de préférence, que la plupart des chauffeurs utilisent.</p>
<div class="callout">
<span class="callout-label">Réservez dans les deux sens</span>
<p>Le retour vers l'aéroport est souvent plus compliqué que l'aller : tôt le matin, il n'y a pas de file de taxis dans les ruelles de la médina. Réserver l'aller-retour en une fois coûte en général moins cher que deux trajets séparés.</p>
</div>

<h2>Haute saison à l'aéroport Marrakech-Ménara : réservez tôt</h2>
<p>Vacances scolaires européennes, ponts de printemps, Marathon des Sables et fêtes de fin d'année vident d'abord les grands véhicules. À cinq ou plus entre décembre et avril, réservez quelques semaines à l'avance pour ne pas répartir votre groupe dans plusieurs voitures.</p>
`,
    faqHeading: "Transfert aéroport Marrakech-Ménara : questions fréquentes",
    faqs: [
      { q: "Le prix affiché est-il par personne ou par véhicule ?", a: "Par véhicule. Un transfert à 27 € vers la médina couvre jusqu'à sept passagers en monospace, bagages compris. Dès quatre personnes, c'est nettement moins cher que deux petits taxis, limités à trois passagers." },
      { q: "Que se passe-t-il si mon vol a du retard ?", a: "Le chauffeur suit votre numéro de vol et ajuste l'heure de prise en charge. Jusqu'à 90 minutes d'attente gratuite après l'atterrissage sont incluses dans la plupart des offres, le temps du contrôle des passeports et des bagages." },
      { q: "Où le chauffeur m'attend-il à l'aéroport de Marrakech ?", a: "À la sortie du hall des arrivées, avec une pancarte à votre nom. Le point de rendez-vous précis figure sur votre bon de confirmation. Envoyez-lui un message dès que vous avez du réseau." },
      { q: "Peut-on annuler un transfert réservé ?", a: "Chez la plupart des opérateurs, oui : annulation gratuite jusqu'à 24 heures avant la prise en charge, avec remboursement intégral. Les conditions exactes figurent avant le paiement." },
      { q: "Peut-on demander un siège-auto pour un enfant ?", a: "Oui, à signaler au moment de la réservation, avec l'âge et le poids de l'enfant. Les taxis de la station n'en proposent pratiquement jamais." },
      { q: "Faut-il payer en ligne ou sur place ?", a: "Les deux existent selon l'opérateur. La réservation en ligne bloque le tarif, et certains prestataires acceptent un paiement au chauffeur. Dans ce cas, prévoyez des dirhams." },
      { q: "Le chauffeur peut-il me déposer devant mon riad ?", a: "Presque jamais, car les ruelles de la médina sont trop étroites pour une voiture. Il s'arrête à la porte la plus proche, souvent à 3 à 10 minutes à pied. Demandez à votre riad d'envoyer un porteur." },
      { q: "Peut-on réserver le transfert retour vers l'aéroport Marrakech-Ménara ?", a: "Oui, en cochant le transfert retour dans le module ou en réservant un second trajet. Prévoyez d'arriver à l'aéroport 2 h 30 avant un vol international : comptez 15 à 25 minutes depuis la médina." },
    ],
    cta: {
      heading: "Votre transfert réglé en deux minutes",
      text: "Comparez les véhicules disponibles pour votre heure d'atterrissage et bloquez le tarif. Annulation gratuite sur la plupart des réservations.",
      label: "Voir les disponibilités",
      href: "#transfert",
      secondary: { label: "Comparer taxi, bus et transfert", key: 'transfers' },
    },
  },
} satisfies PageContent;
