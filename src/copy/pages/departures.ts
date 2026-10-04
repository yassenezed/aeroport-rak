import type { PageContent } from '../types';

export default {
  fr: {
    title: "Départs aéroport Marrakech-Ménara (RAK) : vols en direct",
    description: "Départs de l'aéroport de Marrakech-Ménara en direct : statut des vols, heure d'arrivée conseillée, enregistrement, contrôles, détaxe et accès au terminal.",
    eyebrow: "Tableau en direct · heure locale",
    h1: "Départs aéroport Marrakech-Ménara",
    lede: "Suivez en temps réel les vols au départ de l'aéroport de Marrakech-Ménara (RAK) : horaires, portes, retards et annulations. En dessous, à quelle heure arriver, comment se passent les contrôles et comment rejoindre le terminal sans stress.",
    widget: 'flights-departures',
    highlights: [
      { icon: 'clock', value: "--:--", label: "Heure locale", live: 'clock' },
      { icon: 'clipboard', value: "Ouvre 3 h avant le vol", label: "Enregistrement" },
      { icon: 'log-out', value: "45 min avant le décollage", label: "Embarquement" },
    ],
    steps: {
      heading: "Départ de l'aéroport de Marrakech-Ménara : les 5 étapes",
      intro: "Le parcours est le même au terminal 1 et au terminal 2. Comptez 1 h à 1 h 30 entre l'entrée du terminal et la porte d'embarquement aux heures de pointe.",
      items: [
        { icon: 'door', title: "Accès au terminal", text: "Depuis mars 2025, plus de scanner à l'entrée du terminal : on entre directement dans le hall d'enregistrement. Gardez passeport et carte d'embarquement à portée de main." },
        { icon: 'clipboard', title: "Enregistrement à l'aéroport de Marrakech-Ménara", text: "Comptoirs ouverts en général 3 h avant les vols internationaux, fermés 45 à 60 min avant. Dépôt des bagages au comptoir, même enregistré en ligne." },
        { icon: 'passport', title: "Police des frontières", text: "L'étape la plus longue. Contrôle du passeport et du tampon d'entrée, sans fiche à remplir." },
        { icon: 'shield-check', title: "Sûreté", text: "Liquides limités à 100 ml par contenant dans un sac transparent, ordinateur et tablette à sortir du sac." },
        { icon: 'plane-takeoff', title: "Porte d'embarquement", text: "Boutiques hors taxes, cafés et salons, puis la porte. L'embarquement commence environ 45 min avant le décollage." },
      ],
    },
    services: {
      heading: "Préparer son départ de Marrakech",
      intro: "Rejoindre le terminal à l'heure, attendre au calme et partir l'esprit tranquille.",
      items: [
        { icon: 'van', key: 'bookTransfer', title: "Transfert vers l'aéroport", text: "Prise en charge au riad ou à l'hôtel, prix fixe même à 5 h du matin.", cta: "Réserver" },
        { icon: 'car', key: 'transfers', title: "Taxi et bus 19", text: "Prix du taxi depuis la médina et horaires du bus 19 vers l'aéroport.", cta: "Voir les tarifs" },
        { icon: 'parking', key: 'parking', title: "Parking de l'aéroport de Marrakech", text: "Tarifs à l'heure et au jour, et où déposer un passager.", cta: "Voir le parking" },
        { icon: 'star', key: 'vipLounges', title: "Salons VIP de l'aéroport Marrakech-Ménara", text: "Accès, prix et services des salons en zone d'embarquement.", cta: "Découvrir" },
        { icon: 'shield-check', key: 'fastTrack', title: "Fast track", text: "Passer les contrôles par une file dédiée aux heures de pointe.", cta: "En savoir plus" },
        { icon: 'alert', key: 'compensation', title: "Vol retardé ou annulé", text: "Vos droits et l'indemnisation possible selon la compagnie.", cta: "Vérifier mes droits" },
      ],
    },
    body: `
<h2>Comment lire le tableau des départs de l'aéroport de Marrakech-Ménara</h2>
<p>Le tableau ci-dessus affiche tous les vols au départ de l'aéroport de Marrakech-Ménara, en <strong>heure locale de Marrakech</strong>. Chaque ligne indique l'heure prévue, la destination, le numéro de vol, la compagnie et le statut, mis à jour en continu.</p>
<ul>
<li><strong>Prévu / À l'heure</strong> : le vol part selon l'horaire. L'enregistrement n'est pas forcément encore ouvert.</li>
<li><strong>Enregistrement</strong> : les comptoirs sont ouverts ; présentez-vous sans attendre si vous avez un bagage en soute.</li>
<li><strong>Embarquement / Dernier appel</strong> : les passagers montent à bord. Au dernier appel, la porte ferme dans quelques minutes.</li>
<li><strong>Retardé / Annulé</strong> : l'heure estimée remplace l'heure prévue. Suivez les consignes de la compagnie, par SMS ou dans son application.</li>
<li><strong>Parti</strong> : l'avion a quitté la porte.</li>
</ul>
<p>Pour suivre un vol qui arrive à Marrakech, consultez le tableau des <a href="/arrivees/">arrivées de l'aéroport de Marrakech</a>.</p>

<h2>À quelle heure arriver à l'aéroport pour un vol au départ de Marrakech ?</h2>
<p>La règle qui fonctionne : <strong>2 h 30 à 3 heures avant un vol vers l'Europe</strong>, 3 heures en haute saison ou dès que vous avez des bagages en soute. Ce n'est pas l'enregistrement qui ralentit, mais la police des frontières et le contrôle de sûreté, qui reste le goulet d'étranglement de l'aéroport.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Type de vol</th><th>Arrivée conseillée</th><th>Pourquoi</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Europe, bagage en soute</strong></td><td class="num">3 h avant</td><td>Dépôt des bagages, puis police et sûreté</td></tr>
<tr><td><strong>Europe, bagage cabine seul</strong></td><td class="num">2 h 30 avant</td><td>Carte d'embarquement en ligne, mais mêmes contrôles</td></tr>
<tr><td><strong>Haute saison, vacances, Ramadan</strong></td><td class="num">3 h 30 avant</td><td>Files plus longues à la police des frontières</td></tr>
<tr><td><strong>Vol intérieur (Casablanca…)</strong></td><td class="num">1 h 30 avant</td><td>Pas de police des frontières</td></tr>
</tbody>
</table>
</div>
<p>Les comptoirs ferment en général 45 à 60 minutes avant le décollage, et la porte d'embarquement 20 minutes avant. Un passager arrivé trop tard perd son vol, même si l'avion est encore au sol.</p>

<h2>Les heures de pointe au départ</h2>
<p>Deux vagues de départs saturent le terminal. La première, <strong>entre 6 h et 9 h</strong>, correspond aux avions qui ont dormi à Marrakech et repartent tôt vers l'Europe. La seconde se forme en fin d'après-midi et en soirée, quand les rotations low cost repartent en série. Si votre vol décolle dans l'un de ces créneaux, ajoutez une demi-heure de marge ou réservez le <a href="/blog/fast-track-aeroport-marrakech/">fast track de l'aéroport de Marrakech</a>, qui fait passer les contrôles par une file dédiée.</p>

<h2>Terminal 1 ou terminal 2 : où se présenter ?</h2>
<p>L'aéroport de Marrakech-Ménara compte deux terminaux contigus, reliés à pied. Le <strong>terminal 1</strong> accueille la majorité des vols internationaux ; le <strong>terminal 2</strong> reçoit le reste du trafic, dont une partie des vols intérieurs et des charters. L'affectation varie selon la compagnie et la saison : le terminal figure sur votre carte d'embarquement et sur le tableau des départs. En cas de doute, présentez-vous au T1, le T2 est à quelques minutes à pied. Le plan détaillé est dans notre <a href="/guide-aeroport/">guide de l'aéroport de Marrakech</a>.</p>

<h2>Rejoindre l'aéroport de Marrakech pour votre vol</h2>
<p>L'aéroport est à 6 km de la médina, soit 15 à 30 minutes de route selon l'heure. Ajoutez le temps de rejoindre à pied la porte de la médina la plus proche de votre riad, valises à la main.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Mode</th><th>Prix</th><th>Durée</th><th>Bon à savoir</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong><a href="/reserver-transfert/">Transfert réservé</a></strong></td><td class="num">dès 27 € / véhicule</td><td class="num">15–30 min</td><td>Prise en charge à l'heure dite, même avant l'aube</td></tr>
<tr><td><strong>Petit taxi</strong></td><td class="num">70–150 MAD (jour)</td><td class="num">15–30 min</td><td>Plus cher la nuit ; fixez le prix avant de monter</td></tr>
<tr><td><strong><a href="/blog/bus-19-alsa-marrakech/">Bus 19 (ALSA)</a></strong></td><td class="num">30 MAD / pers.</td><td class="num">≈ 20 min</td><td>Depuis Jemaa el-Fna et Guéliz, pas de service tôt le matin</td></tr>
<tr><td><strong>Voiture de location</strong></td><td class="num">—</td><td class="num">15–30 min</td><td>Prévoyez 30 min de plus pour l'état des lieux</td></tr>
</tbody>
</table>
</div>
<p>Pour un vol avant 9 h, réservez votre trajet <strong>la veille</strong>, auprès du riad ou en <a href="/reserver-transfert/">transfert</a> : trouver un taxi à 5 h du matin dans une ruelle n'a rien d'évident, et le tarif de nuit s'applique jusqu'au lever du jour. Les détails des tarifs sont sur la page <a href="/transferts/">transferts et taxis de l'aéroport</a> et dans nos <a href="/blog/taxi-marrakech/">conseils taxi à Marrakech</a>.</p>

<h2>Déposer un passager ou se garer</h2>
<p>Le dépose-minute devant le terminal est réservé aux arrêts très courts. Pour accompagner quelqu'un jusqu'au comptoir, garez-vous au <a href="/parkings/">parking de l'aéroport</a>: 6 DH la première heure, 42 DH de 12 à 24 heures.</p>

<h2>Dirhams, souvenirs et bagages : ce qu'il faut savoir</h2>
<p>Les dirhams ne s'exportent pas au-delà d'une somme symbolique : rechangez vos derniers billets <em>avant</em> la police des frontières, aux bureaux de change du hall public, en gardant le reçu de votre change initial. Côté souvenirs, l'huile d'argan, les épices et les cosmétiques en flacon de plus de 100 ml partent en soute, sans exception. Les poteries voyagent mal sans emballage sérieux ; la plupart des vendeurs de la médina savent préparer un colis pour l'avion. Plus de conseils dans notre guide <a href="/blog/argent-maroc/">argent et change au Maroc</a>.</p>
<div class="callout">
<span class="callout-label">Détaxe</span>
<p>Le Maroc rembourse la TVA aux non-résidents sur certains achats effectués chez des commerçants agréés. Le formulaire doit être visé au comptoir douanier de l'aéroport <strong>avant</strong> l'enregistrement des bagages, marchandises présentables à l'appui. Cela vaut pour un tapis ou une pièce d'orfèvrerie, rarement pour des babouches.</p>
</div>

<h2>En zone d'embarquement : boutiques, salons et wifi</h2>
<p>Après la sûreté, la zone d'embarquement propose boutiques hors taxes, <a href="/restaurants-boutiques-aeroport-marrakech/">cafés et restaurants</a>, ainsi qu'un wifi gratuit, parfois saturé aux heures de pointe. Elle se remplit aux mêmes heures que les files : si vous partez en fin de journée ou avec une longue correspondance, un accès à l'un des <a href="/blog/salons-vip-aeroport-marrakech/">salons VIP de l'aéroport de Marrakech</a> transforme l'attente.</p>

<h2>Vol retardé ou annulé au départ de Marrakech</h2>
<p>Au départ du Maroc, le règlement européen 261/2004 s'applique si la compagnie est européenne (Ryanair, easyJet, Transavia, Air France…) : au-delà de trois heures de retard à l'arrivée, l'indemnisation atteint <strong>400 € par passager</strong> pour un trajet de 1 500 à 3 500 km, comme Marrakech–Paris. Les vols de compagnies non européennes au départ de Marrakech n'y sont pas soumis. Vérifiez votre cas sur notre page <a href="/indemnisation-vol/">indemnisation de vol</a>. L'aéroport est exploité par l'<a href="https://www.onda.ma/" target="_blank" rel="noopener">Office national des aéroports (ONDA)</a>.</p>
`,
    faqHeading: "Départs de l'aéroport de Marrakech : questions fréquentes",
    faqs: [
      { q: "Combien de temps avant mon vol dois-je arriver à l'aéroport de Marrakech ?", a: "2 h 30 à 3 heures avant un vol vers l'Europe, 3 h 30 en haute saison. Le contrôle des passeports au départ est le point de congestion, surtout entre 6 h et 9 h et en fin d'après-midi. Pour un vol intérieur, 1 h 30 suffit." },
      { q: "À quelle heure ouvre l'enregistrement à l'aéroport de Marrakech ?", a: "En général 3 heures avant les vols internationaux, et il ferme 45 à 60 minutes avant le départ selon la compagnie. Même enregistré en ligne, le dépôt des bagages en soute se fait au comptoir." },
      { q: "De quel terminal part mon vol à Marrakech-Ménara ?", a: "La plupart des vols internationaux partent du terminal 1, le terminal 2 accueillant une partie des vols intérieurs et des charters. Le terminal figure sur votre carte d'embarquement et sur le tableau des départs ; les deux terminaux sont reliés à pied." },
      { q: "Peut-on emporter des dirhams hors du Maroc ?", a: "Non, le dirham n'est pas exportable au-delà d'une somme symbolique. Rechangez vos billets aux bureaux de change du hall public, avant la police des frontières, en conservant le reçu de votre change initial." },
      { q: "Peut-on mettre de l'huile d'argan dans son bagage cabine ?", a: "Seulement en flacons de 100 ml ou moins, réunis dans un sac plastique transparent. Au-delà, l'huile d'argan, les épices liquides et les cosmétiques partent en soute. Les achats faits en zone hors taxes après la sûreté ne sont pas concernés." },
      { q: "Combien coûte un taxi de la médina à l'aéroport de Marrakech ?", a: "Comptez 70 à 150 MAD en journée pour un petit taxi, davantage la nuit ; fixez le prix avant de monter. Pour un départ tôt le matin, réservez la veille un transfert ou le chauffeur de votre riad." },
      { q: "Y a-t-il une détaxe à l'aéroport de Marrakech ?", a: "Oui, pour les non-résidents, sur les achats effectués chez des commerçants agréés. Le formulaire doit être visé au comptoir douanier avant l'enregistrement des bagages, avec les marchandises présentables." },
      { q: "Mon vol au départ de Marrakech est retardé : ai-je droit à une indemnisation ?", a: "Oui si la compagnie est européenne et que le retard à l'arrivée dépasse trois heures : 400 € par passager pour un trajet de 1 500 à 3 500 km, sauf circonstances extraordinaires. Les compagnies non européennes au départ du Maroc ne sont pas soumises au règlement 261/2004." },
    ],
    cta: {
      heading: "Votre trajet vers l'aéroport, réglé la veille",
      text: "Un chauffeur devant la bonne porte de médina à l'heure convenue, prix fixe, même à 5 h du matin. Annulation gratuite sur la plupart des réservations.",
      label: "Réserver mon transfert retour",
    },
  },
} satisfies PageContent;
