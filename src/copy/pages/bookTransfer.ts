import type { PageContent } from '../types';

export default {
  fr: {
    title: "Réserver un transfert aéroport Marrakech-Ménara en ligne",
    description: "Réservez votre transfert privé depuis l'aéroport de Marrakech-Ménara : prix fixe par véhicule, vol suivi, dépose en médina, annulation gratuite.",
    eyebrow: 'Marrakech Ménara · Réservation',
    h1: 'Réserver un transfert depuis l\'aéroport de Marrakech',
    lede: "Indiquez votre destination et votre heure d'atterrissage : le prix s'affiche par véhicule, pas par passager. Un chauffeur vous attend à la sortie des arrivées avec votre nom, et vous dépose à la porte de médina la plus proche de votre riad.",
    widget: 'transfer',
    body: `
<h2>Ce que comprend une réservation</h2>
<ul>
<li><strong>Un prix fixe par véhicule</strong>, connu avant de partir, jusqu'à sept passagers sur un monospace. Rien à négocier à l'arrivée.</li>
<li><strong>Le suivi du numéro de vol</strong> : si vous atterrissez avec une heure de retard, le chauffeur ajuste et attend.</li>
<li><strong>Une attente gratuite</strong> après l'atterrissage — en général 45 à 60 minutes, le temps de la police et des bagages.</li>
<li><strong>L'annulation gratuite</strong> jusqu'à 24 heures avant la prise en charge chez la plupart des opérateurs.</li>
<li><strong>Des sièges-auto</strong> sur demande, à signaler au moment de la réservation : ils ne sont presque jamais disponibles dans un taxi de la station.</li>
</ul>

<h2>Choisir le bon véhicule</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Véhicule</th><th>Passagers</th><th>Valises</th><th>Pour qui</th></tr></thead>
<tbody>
<tr><td><strong>Berline</strong></td><td class="num">1–3</td><td class="num">2–3</td><td>Couple ou trio avec bagage cabine et une valise</td></tr>
<tr class="row-highlight"><td><strong>Monospace</strong></td><td class="num">4–7</td><td class="num">5–7</td><td>Famille, groupe d'amis, le meilleur rapport prix/place</td></tr>
<tr><td><strong>Minibus</strong></td><td class="num">8–15</td><td class="num">10+</td><td>Groupe, séminaire, mariage</td></tr>
<tr><td><strong>4x4 ou van premium</strong></td><td class="num">1–6</td><td class="num">4–6</td><td>Camps du désert, pistes d'Agafay, clientèle affaires</td></tr>
</tbody>
</table>
</div>
<p>Le point à retenir : le tarif étant fixé par véhicule, un monospace à quatre ou cinq revient bien moins cher par personne que deux petits taxis, qui sont limités à trois passagers chacun.</p>

<h2>Les informations à préparer</h2>
<p>La réservation prend deux minutes si vous avez ces éléments sous la main : votre <strong>numéro de vol</strong> et l'heure d'atterrissage ; le <strong>nom exact de votre riad ou hôtel</strong> ; pour la médina, la <strong>porte de dépose</strong> que votre hébergement vous aura indiquée ; le nombre de passagers et de valises ; un <strong>numéro de téléphone joignable au Maroc</strong>, WhatsApp de préférence, que la plupart des chauffeurs utilisent.</p>
<div class="callout">
<span class="callout-label">Réservez dans les deux sens</span>
<p>Le retour vers l'aéroport est souvent plus compliqué que l'aller : à 5 h du matin, dans une ruelle de la médina, il n'y a pas de file de taxis. Réserver l'aller-retour en une fois coûte généralement moins cher que deux trajets séparés et supprime ce problème.</p>
</div>

<h2>Haute saison : réservez tôt</h2>
<p>Les vacances scolaires européennes, les ponts de printemps, le Marathon des Sables et les fêtes de fin d'année vident les disponibilités en grands véhicules avant tout le reste. Si vous voyagez à cinq ou plus entre décembre et avril, la réservation quelques semaines à l'avance n'est pas de la prudence excessive : c'est simplement ce qui vous évite de vous retrouver à répartir votre groupe dans trois voitures.</p>
`,
    faqs: [
      {
        q: 'Le prix affiché est-il par personne ou par véhicule ?',
        a: "Par véhicule. Un transfert à 27 € vers la médina couvre jusqu'à sept passagers sur un monospace, bagages compris. C'est ce qui rend la formule nettement plus économique qu'un taxi dès que vous êtes quatre, puisqu'un petit taxi est limité à trois personnes.",
      },
      {
        q: 'Que se passe-t-il si mon vol a du retard ?',
        a: "Le chauffeur suit votre numéro de vol et ajuste l'heure de prise en charge. Une attente gratuite de 45 à 60 minutes après l'atterrissage est généralement incluse, ce qui couvre la police des frontières et la livraison des bagages.",
      },
      {
        q: 'Peut-on annuler un transfert réservé ?',
        a: "Chez la plupart des opérateurs, oui : annulation gratuite jusqu'à 24 heures avant la prise en charge, avec remboursement intégral. Les conditions exactes figurent sur votre bon de confirmation avant paiement.",
      },
      {
        q: 'Peut-on demander un siège-auto pour un enfant ?',
        a: "Oui, à signaler au moment de la réservation, en précisant l'âge et le poids de l'enfant. C'est un argument décisif en faveur du transfert : les taxis de la station n'en proposent pratiquement jamais.",
      },
      {
        q: 'Où le chauffeur m\'attend-il à l\'aéroport de Marrakech ?',
        a: "À la sortie du hall des arrivées, avec une pancarte à votre nom. Le point de rendez-vous précis figure sur votre bon de confirmation. Envoyez-lui un message dès que vous récupérez du réseau, avant même la douane.",
      },
      {
        q: 'Faut-il payer en ligne ou sur place ?',
        a: "Les deux existent selon l'opérateur. La réservation en ligne bloque le tarif, et beaucoup de prestataires permettent un paiement différé ou au chauffeur. Si vous payez sur place, prévoyez des dirhams : la carte n'est pas toujours acceptée dans le véhicule.",
      },
    ],
    cta: {
      heading: 'Votre transfert, réglé en deux minutes',
      text: "Comparez les véhicules disponibles pour votre horaire d'atterrissage et bloquez le tarif. Annulation gratuite sur la plupart des réservations.",
      label: 'Voir les disponibilités',
    },
  },
} satisfies PageContent;
