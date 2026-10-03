import type { PageContent } from '../types';

export default {
  fr: {
    title: "Taxi aéroport Marrakech-Ménara : prix 2026 et conseils",
    description: "Taxi à l'aéroport de Marrakech-Ménara : prix affichés vers la médina (100–150 DH le jour, 150–240 DH la nuit), petit ou grand taxi, paiement et pièges.",
    eyebrow: "Taxi · prix affichés à la station",
    h1: "Taxi aéroport Marrakech-Ménara : prix et mode d'emploi",
    lede: "La station de taxis est juste devant le hall des arrivées, ouverte jour et nuit, et Marrakech y affiche ses tarifs par zone. Voici les vrais prix, le bon gabarit de voiture et la phrase qui évite les malentendus avant de charger les valises.",
    highlights: [
      { icon: 'sun', value: "100–150 DH", label: "Vers la médina, en journée (la voiture)" },
      { icon: 'moon', value: "150–240 DH", label: "Le même trajet, la nuit" },
      { icon: 'users', value: "3 ou 6", label: "Passagers : petit ou grand taxi" },
      { icon: 'clock', value: "24 h/24", label: "Station devant les arrivées" },
    ],
    widget: 'transfer',
    widgetIntro: {
      heading: "Plutôt un prix fixe ? Comparez avec un transfert",
      text: "Dès 27 € (≈ 290 DH) par véhicule jusqu'à 7 passagers, chauffeur avec pancarte et vol suivi : souvent moins cher qu'un taxi la nuit ou à quatre.",
    },
    cardSections: [
      {
        eyebrow: "Petit ou grand taxi",
        heading: "Quel taxi prendre à l'aéroport Marrakech-Ménara ?",
        variant: 'feature',
        items: [
          { icon: 'car', title: "Petit taxi", text: "La berline beige de Marrakech, limitée à 3 passagers et à la ville. Le bon choix à deux ou trois avec peu de bagages.", tags: ["3 passagers max", "Médina, Guéliz, Hivernage"] },
          { icon: 'van', title: "Grand taxi", text: "Jusqu'à 6 passagers et un vrai coffre. Il assure aussi les trajets hors de la ville : Ourika, Agafay, Essaouira.", tags: ["6 passagers max", "Ville et extérieur"] },
          { icon: 'shield-check', title: "Transfert réservé", text: "Prix fixe par véhicule, chauffeur qui attend avec votre nom et dépose à la bonne porte de la médina.", tags: ["Jusqu'à 7 passagers", "Dès 27 €"], link: { key: 'bookTransfer', label: "Voir les prix" } },
        ],
      },
    ],
    steps: {
      heading: "Prendre un taxi à l'aéroport en 4 étapes",
      items: [
        { icon: 'wallet', title: "Retirez des dirhams", text: "Avant de sortir, au distributeur du hall des arrivées : les taxis ne prennent pas la carte." },
        { icon: 'map-pin', title: "Allez à la station", text: "Sortez du hall : la station est juste devant. Ignorez les rabatteurs qui vous abordent à l'intérieur." },
        { icon: 'board', title: "Lisez le panneau", text: "Les tarifs sont affichés par zone : vérifiez celui de votre destination, de jour ou de nuit." },
        { icon: 'check', title: "Confirmez avant de charger", text: "Annoncez la destination et le prix du panneau, puis chargez les bagages une fois d'accord." },
      ],
    },
    body: `
<h2>Prix du taxi à l'aéroport Marrakech-Ménara par destination</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Destination</th><th>Jour</th><th>Nuit</th><th>Trajet</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Médina, Guéliz, Hivernage</strong></td><td class="num">100–150 DH</td><td class="num">150–240 DH</td><td>15–25 min</td></tr>
<tr><td><strong>Palmeraie</strong></td><td colspan="2">Plus cher : vérifiez le montant affiché au panneau</td><td>25–35 min</td></tr>
<tr><td><strong>Agafay, Ourika, Essaouira</strong></td><td colspan="2">Grand taxi, prix à convenir avant le départ</td><td>40 min à 3 h</td></tr>
</tbody>
</table>
</div>
<p class="small">Prix pour la voiture entière, pas par passager, relevés en 2026. Le panneau de la station fait foi.</p>

<h2>La phrase qui évite les malentendus</h2>
<p>« Médina, Bab Doukkala : c'est bien 100 dirhams, comme sur le panneau ? » Nommer la porte de la médina, citer l'affichage et confirmer le montant <strong>avant d'ouvrir le coffre</strong> règle l'essentiel des litiges. Si le chauffeur refuse, le suivant acceptera : il y a toujours une file.</p>
<div class="callout">
<span class="callout-label">Petits billets</span>
<p>Les distributeurs délivrent souvent des billets de 200 DH, sur lesquels un chauffeur rend difficilement la monnaie. Faites l'appoint au café du terminal pour avoir des coupures de 50 et 100 DH.</p>
</div>

<h2>De Marrakech vers l'aéroport</h2>
<p>Pour le retour, un petit taxi pris en ville coûte en général <strong>70 à 150 DH de jour</strong> depuis la médina, à convenir avant de monter car le compteur est rarement enclenché. Tôt le matin, il n'y a pas de taxi dans les ruelles : demandez à votre riad d'en réserver un, ou réservez un <a href="/reserver-transfert/">transfert</a> dans les deux sens.</p>

<h2>Taxi ou transfert : que choisir ?</h2>
<p>Le taxi est imbattable à deux en journée. Le <a href="/reserver-transfert/">transfert réservé</a> prend l'avantage <strong>la nuit</strong>, <strong>à quatre et plus</strong> (un petit taxi ne prend que trois passagers) et pour un <strong>riad difficile à trouver</strong>, puisque le chauffeur connaît la porte la plus proche. Comparez aussi le <a href="/blog/bus-19-alsa-marrakech/">bus 19</a> à 30 DH et toutes les options sur notre page <a href="/transferts/">transferts</a>.</p>

<h2>Uber, Careem ou inDrive à l'aéroport ?</h2>
<p>Ne comptez pas dessus pour votre arrivée : Uber est revenu à Marrakech fin novembre 2025, mais seulement avec des transporteurs touristiques agréés et une disponibilité irrégulière, et Careem comme inDrive opèrent dans un cadre encore flou. La station de taxis et le transfert réservé restent les solutions fiables.</p>
`,
    faqHeading: "Taxi à l'aéroport Marrakech-Ménara : questions fréquentes",
    faqs: [
      { q: "Combien coûte un taxi de l'aéroport de Marrakech à la médina ?", a: "100 à 150 DH en journée et 150 à 240 DH la nuit pour la médina, Guéliz ou l'Hivernage, selon le panneau de la station. C'est le prix de la voiture entière, pas par passager." },
      { q: "Où prendre un taxi à l'aéroport de Marrakech ?", a: "À la station située juste devant le hall des arrivées, ouverte 24 h/24. Ignorez les personnes qui vous proposent un taxi à l'intérieur du terminal : les taxis se prennent uniquement à la station." },
      { q: "Le taxi de l'aéroport utilise-t-il le compteur ?", a: "Non : au départ de l'aéroport, la pratique est un forfait affiché par zone. Confirmez le montant du panneau avec le chauffeur avant de charger les bagages." },
      { q: "Combien de passagers dans un taxi à Marrakech ?", a: "Trois au maximum dans un petit taxi, jusqu'à six dans un grand taxi. À quatre avec des valises, demandez directement un grand taxi ou réservez un transfert jusqu'à 7 places." },
      { q: "Peut-on payer le taxi par carte bancaire ?", a: "Non, uniquement en espèces et en dirhams. Retirez au distributeur du hall des arrivées et prévoyez des billets de 50 et 100 DH." },
      { q: "Combien coûte un taxi de Marrakech vers l'aéroport ?", a: "En général 70 à 150 DH de jour depuis la médina, à convenir avant de monter. Pour un départ très tôt, faites-le réserver par votre riad ou réservez un transfert." },
      { q: "Y a-t-il des taxis la nuit à l'aéroport de Marrakech ?", a: "Oui, la station fonctionne 24 h/24, au tarif de nuit (150 à 240 DH vers la médina). Pour un vol tardif, un transfert réservé vous attend même en cas de retard." },
      { q: "Taxi ou transfert depuis l'aéroport de Marrakech ?", a: "Le taxi pour deux personnes en journée ; le transfert la nuit, à quatre et plus, ou pour un riad au fond de la médina. Dès 27 € par véhicule, il devient souvent le moins cher dans ces cas." },
    ],
    cta: {
      heading: "Pas envie de négocier à une heure du matin ?",
      text: "Un prix fixe bloqué avant le départ, un chauffeur qui vous attend avec votre nom et qui connaît la bonne porte de la médina.",
      label: "Réserver un transfert",
      secondary: { label: "Comparer taxi, bus et transfert", key: 'transfers' },
    },
  },
} satisfies PageContent;
