import type { ArticleContent } from '../types';

export default {
  fr: {
    title: 'Escale à Marrakech : que faire sur place',
    description: "Escale à l'aéroport de Marrakech : combien de temps faut-il pour sortir, que voir en 4, 6 ou 10 heures, consigne à bagages et retour à temps pour le vol.",
    eyebrow: 'Aéroport',
    h1: 'Escale à Marrakech : sortir ou rester ?',
    lede: "Six kilomètres séparent le terminal de Jemaa el-Fna : une escale à Marrakech se prête particulièrement bien à une sortie. Encore faut-il calculer correctement, parce que c'est le retour qui coince, pas l'aller.",
    excerpt: "Quatre, six ou dix heures d'escale : ce que vous pouvez raisonnablement voir de Marrakech, et le calcul de temps à ne pas rater.",
    date: '2026-09-09',
    body: `
<h2>Le calcul, avant tout</h2>
<p>Ne raisonnez jamais en « durée de l'escale », mais en <strong>temps utile en ville</strong>. Il faut soustraire, dans l'ordre : la sortie du terminal (30 à 60 minutes selon l'heure, police et bagages compris), le trajet aller (15 à 30 minutes), le trajet retour (idem), et surtout la <strong>présentation à l'enregistrement, deux heures avant le vol</strong>, trois en haute saison.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Escale</th><th>Temps utile en ville</th><th>Ce qui est réaliste</th></tr></thead>
<tbody>
<tr><td><strong>Moins de 4 h</strong></td><td class="num">0</td><td>Rester dans le terminal</td></tr>
<tr><td><strong>5 à 6 h</strong></td><td class="num">1 h 30 – 2 h</td><td>Jemaa el-Fna et la Koutoubia, rien de plus</td></tr>
<tr class="row-highlight"><td><strong>7 à 9 h</strong></td><td class="num">3 h – 4 h 30</td><td>Place, souks, un monument, un déjeuner</td></tr>
<tr><td><strong>10 h et plus</strong></td><td class="num">5 h+</td><td>Médina complète, jardins Majorelle, hammam</td></tr>
</tbody>
</table>
</div>
<p>Deux nuances importantes. Si vous ne quittez pas la zone internationale et que vos bagages sont enregistrés jusqu'à destination finale, <strong>vous n'avez pas à passer la police</strong> — vérifiez ce point avec votre compagnie, il change tout. Et si votre escale se situe la nuit, sortir n'a guère d'intérêt : la médina ferme, et le tarif de nuit s'applique aux taxis.</p>

<h2>Cinq à six heures : la version courte</h2>
<p>Taxi jusqu'à Jemaa el-Fna, une heure sur la place et dans les premières travées des souks, un thé sur une terrasse avec vue, la Koutoubia de l'extérieur, et retour. C'est court mais réel : vous aurez vu ce qui fait l'identité de la ville.</p>
<p>Ne tentez pas d'y ajouter un monument : les entrées, les files et la marche consomment exactement le temps qui vous manque.</p>

<h2>Sept à neuf heures : la version raisonnable</h2>
<p>De quoi ajouter <strong>un</strong> monument — le palais de la Bahia ou la médersa Ben Youssef sont les plus accessibles depuis la place — et un vrai déjeuner. Gardez un rythme et fixez-vous une heure de départ ferme, écrite, que vous respectez même si vous êtes bien installé.</p>

<h2>Dix heures et plus</h2>
<p>La médina se visite correctement, avec les souks, un monument, un déjeuner et éventuellement les jardins Majorelle, dans le quartier de Guéliz, plus proche de l'aéroport que la médina — ce qui est pratique pour finir la journée. Un hammam peut s'envisager, mais réservez : les bons créneaux partent vite.</p>
<div class="callout">
<span class="callout-label">Ce qu'il faut régler avant de sortir</span>
<p>Déposez vos bagages à la consigne du terminal plutôt que de les traîner. Retirez des dirhams et fractionnez en petites coupures. Activez une connexion, eSIM ou SIM locale. Et convenez d'un horaire de retour avec votre chauffeur si vous avez réservé un transfert aller-retour : c'est ce qui sécurise le vol.</p>
</div>

<h2>Rester dans le terminal</h2>
<p>En dessous de quatre heures, ou la nuit, c'est la seule option raisonnable. Le RAK dispose de cafés et de boutiques, et l'accès à un salon transforme une attente de plusieurs heures — voir notre article sur les <a href="/blog/salons-vip-aeroport-marrakech/">salons de l'aéroport</a>. Au-delà de six heures d'attente nocturne, un hôtel proche de l'aérogare revient souvent moins cher qu'un salon suivi d'une nuit blanche.</p>
`,
    faqs: [
      {
        q: 'Peut-on sortir de l\'aéroport pendant une escale à Marrakech ?',
        a: "Oui, si vous disposez du droit d'entrée sur le territoire — ce qui est le cas sans visa pour les ressortissants européens, suisses, britanniques, canadiens et américains. Comptez 30 à 60 minutes pour sortir du terminal, puis 15 à 30 minutes jusqu'au centre.",
      },
      {
        q: 'Combien de temps d\'escale faut-il pour visiter Marrakech ?',
        a: "Au moins cinq à six heures pour une sortie utile, qui vous laissera une à deux heures en ville. En dessous de quatre heures, restez dans le terminal : la sortie, les trajets et la présentation deux heures avant le vol consomment tout le temps disponible.",
      },
      {
        q: 'Y a-t-il une consigne à bagages à l\'aéroport de Marrakech ?',
        a: "Oui, un service de consigne permet de déposer des bagages à la journée. C'est la première chose à faire si vous sortez en ville : traîner une valise dans les souks n'a aucun intérêt.",
      },
      {
        q: 'Que voir en une escale de six heures à Marrakech ?',
        a: "Jemaa el-Fna, les premières travées des souks, un thé sur une terrasse et la Koutoubia vue de l'extérieur. N'ajoutez pas de monument : les entrées, les files et la marche consomment précisément le temps qui vous manquerait pour le retour.",
      },
    ],
  },
} satisfies ArticleContent;
