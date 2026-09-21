import type { PageContent } from '../types';

export default {
  fr: {
    title: 'Arrivées aéroport Marrakech (RAK) : vols en direct',
    description: "Arrivées en direct à l'aéroport de Marrakech Ménara : statut des vols, parcours dans le hall, police, bagages, retrait d'espèces et sortie vers la ville.",
    eyebrow: 'Marrakech Ménara · Arrivées',
    h1: 'Arrivées à l\'aéroport de Marrakech',
    lede: "Le tableau ci-dessous suit les vols au fur et à mesure qu'ils se posent à Ménara. En dessous, le parcours réel entre la passerelle et le trottoir : police, bagages, distributeurs, et la porte par laquelle on sort le plus vite.",
    widget: 'flights-arrivals',
    body: `
<h2>Le parcours entre l'avion et le trottoir</h2>
<p>De la passerelle à la sortie, comptez <strong>30 à 60 minutes</strong> selon l'heure. Le RAK concentre ses arrivées en soirée, quand plusieurs vols européens se posent dans la même demi-heure : c'est à ce moment que la police des frontières fait la différence entre une sortie en vingt minutes et une heure d'attente.</p>
<ol>
<li><strong>Police des frontières.</strong> Contrôle du passeport et de la fiche d'entrée. Elle est distribuée à bord sur la plupart des vols ; remplissez-la dans l'avion, sinon vous sortirez de la file pour aller chercher un stylo. Les ressortissants français, belges, suisses, canadiens et de l'Union européenne n'ont pas besoin de visa pour un séjour touristique de 90 jours.</li>
<li><strong>Livraison des bagages.</strong> Les tapis sont juste après le contrôle. Sur les vols du soir, l'attente est réelle : 20 à 30 minutes ne sont pas rares.</li>
<li><strong>Douane.</strong> Passage en général fluide, avec un contrôle par sondage. L'entrée d'espèces n'est déclarée qu'au-delà de 100 000 MAD.</li>
<li><strong>Hall public.</strong> Distributeurs, bureaux de change, cartes SIM, comptoirs de location, puis les portes vers la station de taxis et les parkings.</li>
</ol>

<h2>Retirer de l'argent avant de sortir</h2>
<p>C'est l'étape à ne pas sauter. Les taxis n'acceptent pas la carte et le dirham ne s'achète pas hors du Maroc : le hall des arrivées est donc votre premier point de change. Les distributeurs y fonctionnent bien, mais délivrent volontiers des billets de 200 MAD. Retirez de quoi couvrir le trajet et les premiers jours, puis fractionnez au café ou à la boutique du terminal : des coupures de 50 et 100 MAD vous éviteront la discussion sur la monnaie dans le taxi.</p>
<div class="callout">
<span class="callout-label">Le réflexe qui fait gagner vingt minutes</span>
<p>Si quelqu'un vous attend — transfert réservé ou navette de riad —, le point de rendez-vous est le trottoir devant le hall des arrivées, pas l'intérieur du terminal. Un SMS au chauffeur dès que vous récupérez du réseau, avant même la douane, suffit à synchroniser l'arrivée.</p>
</div>

<h2>Sortir du hall : ce qui vous attend</h2>
<p>Vous serez abordé avant même d'atteindre la porte. C'est normal et rarement agressif, mais cela vaut d'être anticipé : le rang officiel de taxis se trouve directement devant la sortie, et son panneau affiche les tarifs par zone. Toute proposition faite <em>à l'intérieur</em> du terminal sort de ce cadre.</p>
<p>Pour un hôtel de Guéliz ou de l'Hivernage en journée, prenez le taxi et annoncez le montant affiché avant d'ouvrir le coffre. Pour un riad en médina, un vol après 21 h ou un groupe de quatre et plus, le transfert réservé règle d'avance le prix, le gabarit du véhicule et la porte de dépose.</p>

<h2>Arriver de nuit</h2>
<p>Une part importante des vols low cost se pose entre 21 h et 1 h du matin. Trois conséquences pratiques : le barème des taxis passe au tarif de nuit, soit 150 à 240 MAD ; le bus 19 ne circule plus après 23 h 30 ; et les ruelles de la médina, faiblement éclairées, se prêtent mal à la recherche d'un riad avec une valise. Si votre vol atterrit tard, la réservation d'un transfert n'est pas un luxe : le chauffeur suit le numéro de vol et attend en cas de retard.</p>
`,
    faqs: [
      {
        q: 'Combien de temps faut-il pour sortir de l\'aéroport de Marrakech après l\'atterrissage ?',
        a: "Entre 30 et 60 minutes en pratique : la police des frontières prend 15 à 40 minutes selon l'affluence, la livraison des bagages 20 à 30 minutes sur les vols du soir. Les arrivées entre 20 h et minuit sont les plus chargées, car plusieurs vols européens se posent simultanément.",
      },
      {
        q: 'Faut-il remplir une fiche d\'entrée à Marrakech ?',
        a: "Oui, une fiche de police est demandée à l'arrivée. Elle est distribuée à bord sur la plupart des vols : remplissez-la pendant le vol pour ne pas quitter la file au dernier moment. Il vous faudra l'adresse de votre hébergement à Marrakech.",
      },
      {
        q: 'Y a-t-il des distributeurs dans le hall des arrivées ?',
        a: "Oui, plusieurs distributeurs et des bureaux de change se trouvent dans le hall public, après la douane. Retirez avant de sortir : les taxis n'acceptent pas la carte et le dirham ne peut pas être acheté hors du Maroc.",
      },
      {
        q: 'Où retrouver un chauffeur qui m\'attend à Marrakech Ménara ?',
        a: "Devant le hall des arrivées, sur le trottoir. Les transferts réservés indiquent un point de rendez-vous précis dans le bon de confirmation, et le chauffeur tient une pancarte à votre nom. Envoyez-lui un message dès que vous récupérez du réseau.",
      },
      {
        q: 'Mon vol arrive après minuit : y a-t-il encore des taxis ?',
        a: "Oui, la station reste alimentée tant qu'il y a des vols. Le barème passe simplement au tarif de nuit, soit 150 à 240 MAD vers la médina, Guéliz et l'Hivernage. Le bus 19, lui, s'arrête à 23 h 30.",
      },
    ],
    cta: {
      heading: 'Un chauffeur qui attend votre vol, pas l\'inverse',
      text: "Suivi du numéro de vol, attente incluse en cas de retard, prix fixe par véhicule jusqu'à sept passagers et dépose à la porte de médina la plus proche de votre riad.",
      label: 'Réserver un transfert',
    },
  },
} satisfies PageContent;
