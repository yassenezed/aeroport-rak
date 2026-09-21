import type { PageContent } from '../types';

export default {
  fr: {
    title: 'Destinations depuis l\'aéroport de Marrakech',
    description: "Où aller depuis l'aéroport de Marrakech : médina, Guéliz, Palmeraie, Agafay, Ourika, Essaouira, Agadir et Ouarzazate, avec distances, durées et prix.",
    eyebrow: 'Marrakech Ménara · Destinations',
    h1: 'Où aller depuis l\'aéroport de Marrakech',
    lede: "Ménara est la porte d'entrée du centre du Maroc : la médina est à quinze minutes, les dunes d'Agafay à quarante, l'Atlas à une heure et l'Atlantique à deux heures et demie. Voici les distances réelles et ce que coûte chaque trajet.",
    body: `
<h2>Distances et temps de trajet depuis le RAK</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Destination</th><th>Distance</th><th>Durée en voiture</th><th>Transfert privé</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Médina / Jemaa el-Fna</strong></td><td class="num">6 km</td><td class="num">15–30 min</td><td class="num">dès 27 €</td></tr>
<tr><td><strong>Guéliz / Hivernage</strong></td><td class="num">4–5 km</td><td class="num">10–20 min</td><td class="num">dès 27 €</td></tr>
<tr><td><strong>Palmeraie</strong></td><td class="num">12 km</td><td class="num">25–35 min</td><td class="num">30–40 €</td></tr>
<tr><td><strong>Désert d'Agafay</strong></td><td class="num">30 km</td><td class="num">40–50 min</td><td class="num">35–55 €</td></tr>
<tr><td><strong>Vallée de l'Ourika</strong></td><td class="num">40 km</td><td class="num">1 h</td><td class="num">45–65 €</td></tr>
<tr><td><strong>Imlil / Toubkal</strong></td><td class="num">65 km</td><td class="num">1 h 30</td><td class="num">60–85 €</td></tr>
<tr><td><strong>Essaouira</strong></td><td class="num">180 km</td><td class="num">2 h 30</td><td class="num">≈ 95 €</td></tr>
<tr><td><strong>Ouarzazate</strong></td><td class="num">200 km</td><td class="num">4 h</td><td class="num">120–160 €</td></tr>
<tr><td><strong>Agadir</strong></td><td class="num">250 km</td><td class="num">3 h</td><td class="num">130–170 €</td></tr>
<tr><td><strong>Casablanca</strong></td><td class="num">240 km</td><td class="num">2 h 30</td><td class="num">130–170 €</td></tr>
</tbody>
</table>
</div>
<p>Les durées correspondent à des conditions normales, hors sortie de ville en fin d'après-midi. La route d'Ouarzazate franchit le col du Tichka, à 2 260 mètres : c'est une belle route, mais elle ne se parcourt pas à la moyenne d'une autoroute, et elle demande de la vigilance en hiver.</p>

<h2>Les quartiers de Marrakech, en une minute</h2>
<h3>La médina</h3>
<p>Le cœur historique, ses riads et ses souks. Aucune voiture n'y entre : on vous dépose à une porte et vous terminez à pied. C'est le choix de ceux qui viennent pour l'atmosphère et acceptent le bruit, la chaleur et les ruelles. Prévoyez le nom exact de votre <em>bab</em> de dépose.</p>
<h3>Guéliz</h3>
<p>La ville moderne, quadrillée et roulante, avec ses restaurants, ses galeries et la gare ONCF. Plus calme, plus pratique avec des enfants ou une voiture de location, moins dépaysant. À dix minutes de l'aéroport.</p>
<h3>L'Hivernage</h3>
<p>Le quartier des grands hôtels et des palais des congrès, entre Guéliz et la médina, à distance de marche de la Koutoubia. Beaucoup de verdure, peu de vie de quartier.</p>
<h3>La Palmeraie</h3>
<p>À douze kilomètres du centre, des villas et des hôtels avec piscine dans une palmeraie. Reposant, mais vous dépendrez d'une voiture ou d'un taxi pour chaque sortie — un détail qui pèse sur un séjour court.</p>

<h2>Les excursions les plus demandées</h2>
<p><strong>Agafay</strong> est le désert de pierre à quarante minutes de la ville : dîners sous tente, nuits en camp et coucher de soleil sur l'Atlas, sans les dix heures de route du Sahara. <strong>L'Ourika</strong> offre de l'eau, de l'ombre et des cascades à une heure, c'est l'échappée préférée des habitants quand la ville chauffe. <strong>Imlil</strong> est le point de départ des randonnées vers le Toubkal. <strong>Essaouira</strong>, enfin, mérite plus qu'une journée : deux heures trente de route, une médina classée, du vent et une température qui descend de dix degrés.</p>
<div class="callout">
<span class="callout-label">Aller directement à Essaouira ou Agadir en arrivant</span>
<p>C'est fréquent, et cela se prépare. Un transfert privé depuis le RAK vers Essaouira tourne autour de 95 € par véhicule, contre 3 à 4 heures de bus CTM depuis la gare routière de Marrakech pour quelques euros par personne. Si vous atterrissez le soir, dormez à Marrakech et partez au matin : la route côtière n'a aucun intérêt de nuit.</p>
</div>
`,
    faqs: [
      {
        q: 'Quelle est la distance entre l\'aéroport de Marrakech et la médina ?',
        a: "Six kilomètres, soit 15 à 30 minutes en voiture selon l'heure. Le bus 19 met une vingtaine de minutes et dépose directement à Jemaa el-Fna.",
      },
      {
        q: 'Combien de temps faut-il pour aller de Marrakech à Essaouira ?',
        a: "Deux heures trente par la route, pour 180 kilomètres. Un transfert privé coûte environ 95 € par véhicule, et les bus CTM ou Supratours font le trajet depuis la gare routière de Marrakech pour quelques euros par personne.",
      },
      {
        q: 'Peut-on aller à Ouarzazate depuis l\'aéroport de Marrakech dans la journée ?',
        a: "Oui, mais comptez quatre heures de route par le col du Tichka, à 2 260 mètres d'altitude. L'aller-retour dans la journée est fatigant et laisse peu de temps sur place : une nuit à Ouarzazate ou à Aït-Ben-Haddou change complètement l'expérience.",
      },
      {
        q: 'Dans quel quartier de Marrakech vaut-il mieux loger ?',
        a: "La médina pour l'atmosphère et les riads, en acceptant les ruelles et le bruit. Guéliz pour la commodité, les restaurants et la circulation en voiture. L'Hivernage pour les grands hôtels au calme. La Palmeraie pour les piscines et le repos, à condition d'assumer douze kilomètres de trajet à chaque sortie.",
      },
    ],
    cta: {
      heading: 'Un trajet direct vers votre destination',
      text: "Médina, Agafay, Ourika ou Essaouira : indiquez votre adresse d'arrivée et obtenez un prix fixe par véhicule, chauffeur compris.",
      label: 'Calculer mon trajet',
    },
  },
} satisfies PageContent;
