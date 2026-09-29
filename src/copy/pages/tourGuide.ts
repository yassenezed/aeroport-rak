import type { PageContent } from '../types';

export default {
  fr: {
    title: "Guide touristique dès l'aéroport Marrakech-Ménara",
    description: "Prendre un guide dès l'aéroport de Marrakech-Ménara : tarifs, guides officiels, visites de la médina, excursions dans l'Atlas et erreurs à éviter.",
    eyebrow: 'Marrakech · Visites guidées',
    h1: 'Prendre un guide à Marrakech',
    lede: "Marrakech est une ville qui se laisse difficilement lire seul le premier jour. Un guide officiel, sur une demi-journée bien choisie, économise plus de temps et d'argent qu'il n'en coûte — à condition de savoir ce que vous achetez.",
    body: `
<h2>Guide officiel ou faux guide : la différence est réglementaire</h2>
<p>Un guide touristique marocain est titulaire d'une <strong>carte professionnelle délivrée par le ministère du Tourisme</strong>, portant sa photo et son numéro, et renouvelée périodiquement. Il a suivi une formation, passé un examen, et exerce légalement. Demandez-la : un guide officiel la présente sans difficulté.</p>
<p>Les personnes qui abordent les visiteurs à proximité de Jemaa el-Fna ou aux portes de la médina en proposant de « montrer le chemin » ou de « faire visiter les souks » n'ont, dans leur grande majorité, pas cette carte. Le service se termine presque systématiquement dans une boutique où une commission leur est versée, et le prix annoncé au départ n'est jamais le prix final. Ce n'est pas dangereux, c'est simplement une perte de temps et d'argent.</p>

<h2>Combien cela coûte</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Prestation</th><th>Tarif indicatif</th><th>Durée</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Guide officiel, médina</strong></td><td class="num">300–500 MAD</td><td>Demi-journée</td></tr>
<tr><td><strong>Guide officiel, journée complète</strong></td><td class="num">500–800 MAD</td><td>8 heures</td></tr>
<tr><td><strong>Visite guidée en groupe</strong></td><td class="num">15–30 € / personne</td><td>3–4 heures</td></tr>
<tr><td><strong>Excursion avec chauffeur-guide</strong></td><td class="num">60–120 € / véhicule</td><td>Journée, Ourika ou Agafay</td></tr>
</tbody>
</table>
</div>
<p>Les tarifs s'entendent pour le guide, hors entrées de monuments, hors déjeuner et hors transport. Un pourboire de 50 à 100 MAD en fin de visite est d'usage lorsque la prestation a été bonne, sans être obligatoire.</p>

<h2>Où un guide change vraiment quelque chose</h2>
<p><strong>La médina et les souks</strong>, le premier jour. C'est l'usage le plus rentable : en trois heures, vous comprenez la logique des quartiers, vous situez les portes, vous apprenez où acheter quoi et à quel prix. Le reste du séjour devient beaucoup plus simple.</p>
<p><strong>Les monuments historiques</strong> — palais de la Bahia, tombeaux saadiens, médersa Ben Youssef — où l'absence presque totale de signalétique explicative rend la visite muette sans commentaire.</p>
<p><strong>Les excursions dans l'Atlas et dans les vallées</strong>, où le guide fait aussi office d'interprète en berbère et ouvre des portes qui resteraient fermées autrement.</p>
<div class="callout">
<span class="callout-label">Où un guide ne sert à rien</span>
<p>Pour flâner à Jemaa el-Fna le soir, pour un dîner, pour une journée à la piscine ou pour Agafay en formule tout compris : le guide n'apporte rien et l'accompagnement fait déjà partie de la prestation.</p>
</div>

<h2>Réserver : avant ou sur place ?</h2>
<p>Deux approches fonctionnent. Votre <strong>riad ou hôtel</strong> travaille presque toujours avec un guide officiel qu'il connaît : c'est la solution la plus simple, souvent la plus sûre, et le prix reste négociable. Les <strong>plateformes de réservation en ligne</strong> permettent de comparer les avis et de bloquer le tarif à l'avance, ce qui est utile en haute saison ou si vous voulez une visite dans une langue précise.</p>
<p>Dans les deux cas, mettez-vous d'accord à l'avance sur trois points : la durée exacte, ce qui est inclus, et le fait que la visite <strong>ne comportera pas d'arrêt en boutique</strong>. Cette dernière phrase, dite clairement au départ, règle l'essentiel des déceptions.</p>
`,
    faqs: [
      {
        q: 'Combien coûte un guide officiel à Marrakech ?',
        a: "Entre 300 et 500 MAD pour une demi-journée dans la médina, et 500 à 800 MAD pour une journée complète, hors entrées de monuments et déjeuner. Un pourboire de 50 à 100 MAD est d'usage si la prestation a été bonne.",
      },
      {
        q: 'Comment reconnaître un guide officiel à Marrakech ?',
        a: "Il détient une carte professionnelle délivrée par le ministère du Tourisme, avec sa photo et son numéro, et la présente sans difficulté si vous la demandez. Les personnes qui abordent les visiteurs dans la rue pour proposer une visite n'en ont généralement pas.",
      },
      {
        q: 'Faut-il un guide pour visiter la médina de Marrakech ?',
        a: "Pas obligatoirement, mais une demi-journée guidée le premier jour est l'un des meilleurs investissements du séjour : vous comprenez la géographie des souks, vous situez les portes et vous savez ensuite circuler seul. Les monuments historiques, faute de signalétique, gagnent aussi beaucoup à être commentés.",
      },
      {
        q: 'Comment éviter les visites qui finissent en boutique ?',
        a: "Annoncez au départ, clairement, que la visite ne comportera pas d'arrêt commercial, et convenez à l'avance de la durée et de ce qui est inclus. Un guide officiel accepte sans problème ; c'est précisément ce qui le distingue d'un rabatteur rémunéré à la commission.",
      },
      {
        q: 'Peut-on réserver un guide avant d\'arriver à Marrakech ?',
        a: "Oui, soit par votre riad ou hôtel, qui travaille généralement avec un guide officiel connu de lui, soit via une plateforme en ligne permettant de comparer les avis et de choisir la langue. Réservez à l'avance en haute saison et pour les langues autres que le français ou l'anglais.",
      },
    ],
  },
} satisfies PageContent;
