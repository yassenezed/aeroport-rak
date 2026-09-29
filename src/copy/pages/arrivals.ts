import type { PageContent } from '../types';

export default {
  fr: {
    title: "Arrivées aéroport Marrakech-Ménara (RAK) : vols en direct",
    description: "Arrivées à l'aéroport de Marrakech-Ménara en direct : horaires et statut des vols, retards, police, bagages, puis taxi ou transfert vers la ville.",
    eyebrow: "Tableau en direct · heure locale",
    h1: "Arrivées aéroport Marrakech-Ménara",
    lede: "Suivez en temps réel les vols à l'arrivée à l'aéroport de Marrakech-Ménara (RAK) : heure prévue, heure estimée, retards et atterrissages. En dessous, tout ce qui se passe entre la passerelle et le trottoir, et comment rejoindre la ville.",
    widget: 'flights-arrivals',
    highlights: [
      { icon: 'clock', value: "--:--", label: "Heure locale", live: 'clock' },
      { icon: 'cloud', value: "— °C", label: "Météo Marrakech", live: 'weather' },
      { icon: 'map-pin', value: "Terminal 1 & 2", label: "Terminaux d'arrivée" },
    ],
    steps: {
      heading: "Arrivée à l'aéroport de Marrakech-Ménara : les 4 étapes",
      intro: "Le parcours est le même au terminal 1 et au terminal 2. Ce qui change, c'est l'affluence : un vol posé à 22 h n'a rien à voir avec un vol de 14 h.",
      items: [
        { icon: 'passport', title: 'Police des frontières à Marrakech-Ménara', text: "Passeport contrôlé et tamponné, sans fiche à remplir depuis 2019. Pas de visa pour les touristes de l'UE, de Suisse, du Royaume-Uni et du Canada (90 jours). 15 à 40 minutes selon l'heure." },
        { icon: 'luggage', title: 'Livraison des bagages', text: "Les tapis sont juste après le contrôle. Le numéro du tapis s'affiche sur les écrans ; comptez 20 à 30 minutes sur les vols du soir." },
        { icon: 'shield-check', title: 'Douane', text: "Passage en général fluide, avec contrôles par sondage. Les espèces ne se déclarent qu'au-delà de 100 000 MAD. Drones et talkies-walkies sont retenus." },
        { icon: 'door', title: "Hall des arrivées de l'aéroport", text: "Distributeurs, change, cartes SIM et loueurs de voitures, puis la sortie vers la station de taxis, les chauffeurs et les parkings." },
      ],
    },
    services: {
      heading: "Depuis l'aéroport de Marrakech-Ménara : rejoindre la ville",
      intro: "Les solutions pour quitter l'aéroport de Marrakech-Ménara et bien démarrer le séjour, avec les prix vérifiés.",
      items: [
        { icon: 'van', key: 'bookTransfer', title: "Transfert privé depuis l'aéroport", text: "Chauffeur à votre nom, vol suivi, prix fixe par véhicule dès 27 €.", cta: 'Réserver' },
        { icon: 'car', key: 'transfers', title: "Taxi et bus 19 à l'aéroport de Marrakech", text: "Tarifs officiels du taxi de jour et de nuit, horaires du bus 19.", cta: 'Voir les tarifs' },
        { icon: 'tag', key: 'carRental', title: "Location de voiture à l'aéroport Marrakech-Ménara", text: "Comptoirs dans le hall des arrivées, caution et pièges du contrat.", cta: 'Comparer' },
        { icon: 'sim', key: 'esim', title: 'eSIM Maroc', text: "Internet dès l'atterrissage pour joindre votre chauffeur.", cta: "Choisir une eSIM" },
        { icon: 'wallet', key: 'money', title: 'Argent et change', text: "Distributeurs, bureaux de change et billets à retirer.", cta: 'Lire le guide' },
        { icon: 'alert', key: 'compensation', title: 'Vol retardé', text: "Jusqu'à 400 € d'indemnisation sur la plupart des vols depuis l'Europe.", cta: 'Vérifier mes droits' },
      ],
    },
    body: `
<h2>Comment lire le tableau des arrivées de l'aéroport de Marrakech-Ménara</h2>
<p>Le tableau ci-dessus affiche les vols à l'arrivée à l'aéroport de Marrakech-Ménara, toutes compagnies confondues. Les horaires sont en <strong>heure locale de Marrakech</strong>, et non en heure de votre ville de départ : c'est la première source de confusion quand on vient chercher quelqu'un.</p>
<ul>
<li><strong>Prévu</strong> : l'heure programmée par la compagnie. Elle ne bouge pas, même en cas de retard.</li>
<li><strong>Estimé</strong> : l'heure d'atterrissage recalculée en vol. C'est elle qu'il faut regarder.</li>
<li><strong>Atterri</strong> : l'avion est au sol. Ajoutez 30 à 60 minutes avant de voir le passager sortir.</li>
<li><strong>Retardé / Annulé / Dérouté</strong> : contactez la compagnie ; un vol dérouté se pose en général à Casablanca ou à Agadir.</li>
</ul>
<p>Pour un vol au départ de Marrakech, consultez le tableau des <a href="/departs/">départs de l'aéroport de Marrakech</a>.</p>

<h2>Horaires des arrivées : quand l'aéroport de Marrakech est le plus chargé</h2>
<p>L'aéroport de Marrakech-Ménara reçoit ses vols par vagues. Une première vague arrive en fin de matinée et en début d'après-midi, avec les vols partis tôt d'Europe. Mais le vrai pic se situe <strong>entre 20 h et minuit</strong>, quand les compagnies low cost enchaînent les atterrissages depuis la France, l'Espagne, l'Italie, la Belgique ou le Royaume-Uni. Plusieurs avions se posent alors dans la même demi-heure, et la file de la police des frontières s'allonge.</p>
<p>Si vous avez le choix, un vol qui atterrit entre 13 h et 17 h vous fera gagner une demi-heure à la sortie. Si vous arrivez le soir, le service de <a href="/blog/fast-track-aeroport-marrakech/">fast track à l'aéroport de Marrakech</a> permet de passer les contrôles par une file dédiée.</p>

<h2>Compagnies et provenances des vols à l'aéroport de Marrakech-Ménara</h2>
<p>La plupart des vols qui arrivent à Marrakech viennent d'Europe. On retrouve sur le tableau, selon la saison, <strong>Ryanair</strong>, <strong>easyJet</strong>, <strong>Transavia</strong>, <strong>Royal Air Maroc</strong>, <strong>Air France</strong>, <strong>Vueling</strong>, <strong>TUI fly</strong>, <strong>Jet2</strong>, <strong>Wizz Air</strong> ou encore <strong>Discover Airlines</strong>.</p>
<ul>
<li><strong>France</strong> : Paris (Orly, Charles-de-Gaulle, Beauvais), Lyon, Marseille, Nice, Toulouse, Bordeaux, Nantes, Lille.</li>
<li><strong>Belgique, Suisse, Pays-Bas</strong> : Bruxelles, Charleroi, Genève, Amsterdam, Eindhoven.</li>
<li><strong>Royaume-Uni et Irlande</strong> : Londres, Manchester, Bristol, Dublin.</li>
<li><strong>Espagne, Italie, Allemagne</strong> : Madrid, Barcelone, Séville, Malaga, Milan, Rome, Bologne, Munich, Francfort.</li>
<li><strong>Maroc et Moyen-Orient</strong> : Casablanca, ainsi que des liaisons vers le Golfe selon les saisons.</li>
</ul>
<p>Pour trouver un vol vers Marrakech depuis votre ville, utilisez notre <a href="/vols/">comparateur de vols</a>.</p>

<h2>Formalités d'entrée : passeport et visa</h2>
<p>Les ressortissants de l'Union européenne, de la Suisse, du Royaume-Uni, du Canada et des États-Unis entrent au Maroc <strong>sans visa pour un séjour touristique de 90 jours</strong>, avec un passeport valable pendant toute la durée du séjour. La fiche de police n'existe plus depuis septembre 2019 : il suffit de présenter son passeport, qui est tamponné. Gardez l'adresse de votre hébergement à portée de main, l'agent peut la demander. Les enfants voyageant avec un seul parent doivent pouvoir présenter une autorisation de l'autre parent.</p>

<h2>Retirer de l'argent à l'aéroport de Marrakech</h2>
<p>C'est l'étape à ne pas sauter. Les taxis n'acceptent pas la carte et le dirham ne s'achète pas hors du Maroc : le hall des arrivées est donc votre premier point de change. Les distributeurs y fonctionnent bien, mais délivrent volontiers des billets de 200 MAD. Retirez de quoi couvrir le trajet et les premiers jours, puis faites de la monnaie au café du terminal : des coupures de 50 et 100 MAD évitent la discussion sur la monnaie dans le taxi. Tous les conseils sont dans notre guide <a href="/blog/argent-maroc/">argent et change au Maroc</a>.</p>

<h2>Quitter l'aéroport de Marrakech-Ménara : taxi, transfert ou bus 19</h2>
<p>Vous serez abordé avant même d'atteindre la porte. C'est rarement agressif, mais mieux vaut l'anticiper : la station officielle de taxis se trouve devant la sortie, et son panneau affiche les tarifs par zone. Toute proposition faite <em>à l'intérieur</em> du terminal sort de ce cadre.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Mode</th><th>Prix</th><th>Durée</th><th>Idéal pour</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong><a href="/reserver-transfert/">Transfert privé</a></strong></td><td class="num">dès 27 € / véhicule</td><td class="num">15–30 min</td><td>Riad en médina, arrivée de nuit, familles</td></tr>
<tr><td><strong>Petit taxi officiel</strong></td><td class="num">100–150 MAD (jour)</td><td class="num">15–30 min</td><td>Guéliz, Hivernage en journée, 3 pers. max.</td></tr>
<tr><td><strong><a href="/blog/bus-19-alsa-marrakech/">Bus 19 (ALSA)</a></strong></td><td class="num">30 MAD / pers.</td><td class="num">≈ 20 min</td><td>Petit budget, bagage léger, avant 23 h 30</td></tr>
</tbody>
</table>
</div>
<p>Pour un hôtel de Guéliz ou de l'Hivernage en journée, le taxi suffit : annoncez le montant affiché avant d'ouvrir le coffre (voir nos <a href="/blog/taxi-marrakech/">conseils taxi à Marrakech</a>). Pour un riad en médina, un vol après 21 h ou un groupe de quatre et plus, le <a href="/reserver-transfert/">transfert réservé</a> règle d'avance le prix, le véhicule et la porte de dépose. Tous les détails sur la page <a href="/transferts/">transferts depuis l'aéroport</a>.</p>

<h2>Attendre un proche à l'aéroport de Marrakech</h2>
<p>Vous venez chercher quelqu'un à l'aéroport de Marrakech ? Suivez le vol sur le tableau des arrivées et partez de chez vous en fonction de l'heure <em>estimée</em>, pas de l'heure prévue. Seuls les passagers entrent dans la zone des bagages : l'attente se fait dans le hall public, face aux portes de sortie. Prévoyez d'arriver 20 à 30 minutes après l'atterrissage. En voiture, le dépose-minute est réservé aux arrêts courts ; pour attendre, garez-vous au <a href="/parkings/">parking de l'aéroport</a>, à quelques minutes à pied du terminal.</p>

<div class="callout">
<span class="callout-label">Le réflexe qui fait gagner vingt minutes</span>
<p>Si un chauffeur vous attend (transfert réservé ou navette de riad), le point de rendez-vous est devant le hall des arrivées, pancarte à votre nom. Envoyez-lui un message dès que vous captez du réseau, avant même la douane : une <a href="/esim-maroc/">eSIM Maroc</a> activée avant le départ vous évite de chercher le Wi-Fi du terminal.</p>
</div>

<h2>Arriver de nuit à Marrakech</h2>
<p>Une grande partie des vols low cost se pose entre 21 h et 1 h du matin. Trois conséquences pratiques : le taxi passe au tarif de nuit, soit 150 à 240 MAD ; le bus 19 ne circule plus après 23 h 30 ; et les ruelles de la médina, peu éclairées, se prêtent mal à la recherche d'un riad avec une valise. Si votre vol atterrit tard, la réservation d'un transfert n'est pas un luxe : le chauffeur suit le numéro de vol et attend en cas de retard.</p>

<h2>Vol retardé, annulé ou dérouté à l'aéroport de Marrakech-Ménara</h2>
<p>Si votre vol arrive à Marrakech avec plus de trois heures de retard, vous pouvez avoir droit à une indemnisation au titre du règlement européen 261/2004 : il couvre tous les vols au départ de l'Union européenne, quelle que soit la compagnie. Pour un trajet de 1 500 à 3 500 km, comme Paris–Marrakech, le montant est de <strong>400 € par passager</strong>. Vérifiez vos droits sur notre page <a href="/indemnisation-vol/">indemnisation de vol</a>. L'aéroport est exploité par l'<a href="https://www.onda.ma/" target="_blank" rel="noopener">Office national des aéroports (ONDA)</a>, qui publie aussi les informations officielles sur les vols.</p>
<p>Pour tout savoir sur les terminaux, les services et le plan du terminal, consultez notre <a href="/guide-aeroport/">guide de l'aéroport de Marrakech</a>.</p>
`,
    faqHeading: "Arrivées à l'aéroport de Marrakech : questions fréquentes",
    faqs: [
      { q: "Comment connaître l'heure d'arrivée d'un vol à Marrakech ?", a: "Le tableau des arrivées de cette page affiche en temps réel l'heure prévue, l'heure estimée et le statut de chaque vol à l'aéroport de Marrakech-Ménara. Les horaires sont en heure locale de Marrakech. Fiez-vous à l'heure estimée, recalculée pendant le vol." },
      { q: "Combien de temps faut-il pour sortir de l'aéroport de Marrakech après l'atterrissage ?", a: "Entre 30 et 60 minutes en pratique : la police des frontières prend 15 à 40 minutes selon l'affluence, la livraison des bagages 20 à 30 minutes sur les vols du soir. Les arrivées entre 20 h et minuit sont les plus chargées." },
      { q: "Faut-il remplir une fiche de police à Marrakech ?", a: "Non. La fiche de police d'entrée et de sortie a été supprimée dans les aéroports marocains en septembre 2019. Seul le passeport est contrôlé et tamponné ; gardez l'adresse de votre hébergement à portée de main, l'agent peut la demander." },
      { q: "Y a-t-il des distributeurs dans le hall des arrivées ?", a: "Oui, plusieurs distributeurs et bureaux de change se trouvent dans le hall public, après la douane. Retirez avant de sortir : les taxis n'acceptent pas la carte et le dirham ne peut pas être acheté hors du Maroc." },
      { q: "Où attendre quelqu'un qui arrive à l'aéroport de Marrakech ?", a: "Dans le hall public des arrivées, face aux portes de sortie : seuls les passagers accèdent aux bagages. Arrivez 20 à 30 minutes après l'atterrissage affiché sur le tableau. En voiture, garez-vous au parking de l'aéroport plutôt qu'au dépose-minute." },
      { q: "Où retrouver le chauffeur de mon transfert à Marrakech-Ménara ?", a: "Devant le hall des arrivées : le chauffeur tient une pancarte à votre nom et le bon de confirmation précise le point de rendez-vous. Il suit votre numéro de vol et attend en cas de retard." },
      { q: "Mon vol arrive après minuit : y a-t-il encore des taxis ?", a: "Oui, la station reste alimentée tant qu'il y a des vols. Le barème passe au tarif de nuit, soit 150 à 240 MAD vers la médina, Guéliz et l'Hivernage. Le bus 19, lui, s'arrête à 23 h 30." },
      { q: "Mon vol pour Marrakech est arrivé en retard : ai-je droit à une indemnisation ?", a: "Si le retard à l'arrivée dépasse trois heures et que le vol est parti de l'Union européenne, le règlement 261/2004 prévoit 400 € par passager pour un trajet de 1 500 à 3 500 km, sauf circonstances extraordinaires comme la météo." },
    ],
    cta: {
      heading: "Un chauffeur qui attend votre vol, pas l'inverse",
      text: "Suivi du numéro de vol, attente incluse en cas de retard, prix fixe par véhicule jusqu'à sept passagers et dépose à la porte de médina la plus proche de votre riad.",
      label: 'Réserver un transfert',
    },
  },
} satisfies PageContent;
