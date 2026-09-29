import type { PageContent } from '../types';

export default {
  fr: {
    title: "Guide de l'aéroport de Marrakech-Ménara (RAK)",
    description: "Guide complet de l'aéroport de Marrakech-Ménara : terminaux, plan, formalités d'entrée, temps d'attente, correspondances et accès à la ville.",
    eyebrow: 'Marrakech Ménara · Guide',
    h1: 'Guide de l\'aéroport de Marrakech Ménara',
    lede: "Tout ce qu'il faut savoir sur le RAK avant d'y poser le pied : comment le terminal est organisé, où se forment les files, ce que demande la police des frontières et combien de temps prévoir à chaque étape.",
    facts: [
      { label: 'Code IATA / OACI', value: 'RAK', sub: '· GMMX' },
      { label: 'Altitude', value: '471', sub: 'm' },
      { label: 'Piste', value: '3 100', sub: 'm' },
      { label: 'Passagers 2024', value: '9,3', sub: 'millions' },
    ],
    body: `
<h2>Un aéroport, deux terminaux contigus</h2>
<p>Marrakech Ménara fonctionne avec deux halls reliés entre eux, ce qui rend les transferts à pied simples et rapides. Le T1, le plus récent, à la grande résille géométrique blanche, accueille la majorité des vols internationaux ; le T2 absorbe le complément et une partie des vols intérieurs. La répartition évolue selon les saisons et les compagnies : fiez-vous à votre carte d'embarquement plutôt qu'à une habitude.</p>
<p>L'aéroport se situe à six kilomètres du centre, à 471 mètres d'altitude, avec une piste unique de 3 100 mètres. Il a franchi les <strong>9,3 millions de passagers en 2024</strong>, un volume qui se ressent surtout en soirée, quand les rotations européennes se posent en série.</p>

<h2>À l'arrivée : le parcours et les temps réels</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Étape</th><th>Durée habituelle</th><th>Aux heures de pointe</th></tr></thead>
<tbody>
<tr><td>Passerelle → police des frontières</td><td class="num">5–10 min</td><td class="num">10–15 min</td></tr>
<tr class="row-highlight"><td>Contrôle des passeports</td><td class="num">15–25 min</td><td class="num">30–45 min</td></tr>
<tr><td>Livraison des bagages</td><td class="num">15–20 min</td><td class="num">25–35 min</td></tr>
<tr><td>Douane et sortie</td><td class="num">5 min</td><td class="num">10 min</td></tr>
</tbody>
</table>
</div>
<p>Il n'y a plus de <strong>fiche de police</strong> à remplir depuis septembre 2019 : préparez simplement votre passeport et l'adresse de votre hébergement. Il vous faudra l'adresse de votre hébergement.</p>

<h2>Au départ : le point de congestion</h2>
<p>Ce n'est pas l'enregistrement qui ralentit le RAK, mais le contrôle des passeports au départ (le scanner à l'entrée du terminal a été supprimé en mars 2025). Deux heures d'avance suffisent en saison creuse ; visez <strong>trois heures</strong> en haute saison, aux vacances scolaires, ou si vous enregistrez des bagages en soute. Les pics se situent entre 6 h et 9 h, puis en fin d'après-midi.</p>

<h2>Formalités d'entrée au Maroc</h2>
<ul>
<li><strong>Passeport</strong> valide au moins six mois après la date d'entrée.</li>
<li><strong>Pas de visa</strong> pour les ressortissants de l'Union européenne, de Suisse, du Royaume-Uni, du Canada et des États-Unis, pour un séjour touristique jusqu'à 90 jours.</li>
<li><strong>Plus de fiche de police</strong> depuis septembre 2019, à l'entrée comme à la sortie ; gardez l'adresse de séjour à portée de main.</li>
<li><strong>Espèces</strong> : déclaration obligatoire au-delà de 100 000 MAD. Le dirham ne s'importe ni ne s'exporte.</li>
<li><strong>Drones</strong> : leur importation est interdite et ils sont systématiquement saisis à l'arrivée.</li>
</ul>
<div class="callout">
<span class="callout-label">Escale longue ou nuit à l'aéroport</span>
<p>Le terminal n'est pas conçu pour y dormir confortablement. Avec plus de six heures d'attente, un hôtel proche de l'aéroport, à dix minutes, revient souvent moins cher qu'un salon et une nuit blanche. Voir notre page <a href="/hotels/">hôtels</a>.</p>
</div>

<h2>Rejoindre la ville</h2>
<p>Quatre options, et aucune de plus : le <strong>taxi</strong> de la station, à 100–150 MAD le jour et 150–240 MAD la nuit pour la voiture entière ; le <strong>transfert réservé</strong>, à partir de 27 € par véhicule jusqu'à sept passagers ; le <strong>bus 19</strong> d'ALSA, à 30 MAD par personne jusqu'à Jemaa el-Fna, entre 6 h et 23 h 30 ; et la <strong>voiture de location</strong>, dont les comptoirs se trouvent dans le hall des arrivées. Le détail de chacune est sur notre page <a href="/transferts/">transferts</a>.</p>
`,
    faqs: [
      {
        q: 'Combien de terminaux compte l\'aéroport de Marrakech ?',
        a: "Deux terminaux contigus et reliés à pied : le T1, le plus récent, accueille la majorité des vols internationaux, le T2 absorbe le complément et une partie des vols intérieurs. La répartition varie selon la compagnie et la saison : fiez-vous à votre carte d'embarquement.",
      },
      {
        q: 'Quel est le code de l\'aéroport de Marrakech ?',
        a: "RAK pour le code IATA, celui qui figure sur votre billet, et GMMX pour le code OACI utilisé par le contrôle aérien. L'aéroport s'appelle officiellement Marrakech Ménara.",
      },
      {
        q: 'Faut-il un visa pour entrer au Maroc par Marrakech ?',
        a: "Non pour les ressortissants de l'Union européenne, de Suisse, du Royaume-Uni, du Canada et des États-Unis, pour un séjour touristique jusqu'à 90 jours. Le passeport doit être valide pendant toute la durée du séjour (six mois de validité restante sont conseillés) ; la fiche de police a été supprimée en 2019.",
      },
      {
        q: 'Peut-on dormir à l\'aéroport de Marrakech ?',
        a: "Le terminal n'est pas aménagé pour cela et reste inconfortable la nuit. Au-delà de six heures d'attente, un hôtel situé à dix minutes de l'aérogare revient souvent moins cher qu'un accès salon suivi d'une nuit blanche.",
      },
      {
        q: 'Peut-on emporter un drone au Maroc ?',
        a: "Non. L'importation de drones est interdite et les appareils sont systématiquement saisis au contrôle à l'arrivée, y compris les modèles de loisir. Ne les mettez ni en cabine ni en soute.",
      },
    ],
    cta: {
      heading: 'Le trajet vers la ville, réglé d\'avance',
      text: "Prix fixe par véhicule, suivi du vol, dépose à la porte de médina la plus proche : ce qui reste après avoir passé la police et récupéré vos bagages.",
      label: 'Réserver un transfert',
    },
  },
} satisfies PageContent;
