import type { HotelContent } from '../types';

export default {
  fr: {
    title: "Riad Yasmine : avis et accès aéroport Marrakech-Ménara",
    description: "Riad Yasmine, le patio le plus photographié de la médina : accès depuis l'aéroport de Marrakech-Ménara, porte de dépose et logistique.",
    eyebrow: 'Marrakech · Riad',
    h1: 'Riad Yasmine',
    lede: "Le patio vert de la médina, et la logistique qui va avec. Un vrai riad, à l'échelle domestique, où l'arrivée se prépare parce que la voiture s'arrête à une porte.",
    stars: '★★★★',
    area: 'Médina, secteur Dar el Bacha',
    priceRange: 'Moyen à élevé selon la saison',
    rating: 4.4,
    ratingLabel: 'notre note éditoriale',
    verdict: "Un riad authentique, avec le patio le plus reconnaissable de la médina et une poignée de chambres seulement. Parfait pour un couple ; demande de préparer son arrivée, puisque la voiture s'arrête à une porte et que le reste se fait à pied.",
    body: `
<h2>Ce que c'est</h2>
<p>Riad Yasmine est une maison traditionnelle de la médina, organisée autour d'un patio planté et d'un bassin vert qui a fait le tour des réseaux sociaux. Il faut le dire clairement : <strong>c'est une maison, pas un hôtel</strong>. Une poignée de chambres, une terrasse, un petit-déjeuner servi sur place, et une équipe réduite que l'on finit par connaître en deux jours.</p>
<p>C'est exactement ce que cherchent ceux qui viennent pour l'expérience du riad — le calme derrière une porte épaisse, le ciel au-dessus du patio, la lumière qui tourne — et exactement ce qui déroute ceux qui attendent les services d'un hôtel.</p>

<h2>L'accès depuis l'aéroport</h2>
<p>Six kilomètres jusqu'au secteur de Dar el Bacha, soit une vingtaine de minutes de route, <strong>puis quelques minutes à pied</strong>. Aucun véhicule ne rejoint l'entrée : le chauffeur s'arrête à la porte la plus proche et vous terminez dans les ruelles.</p>
<p>Deux précautions règlent la question. Demandez au riad <strong>le nom exact de la porte de dépose</strong> et communiquez-le à votre chauffeur ou à votre transfert. Et annoncez votre heure d'arrivée : la maison enverra quelqu'un à votre rencontre, avec une charrette pour les valises si nécessaire. Pour une arrivée après 22 h, c'est indispensable plutôt que confortable.</p>

<h2>À qui cela convient</h2>
<p>Aux couples, aux séjours de trois à cinq nuits, et à ceux dont la médina est précisément la raison du voyage. La position, entre Dar el Bacha et les souks, permet de tout faire à pied.</p>
<p>Cela convient beaucoup moins avec de jeunes enfants — escaliers raides, bassin ouvert, terrasse sans protection —, avec des bagages lourds, ou si vous comptez rentrer plusieurs fois par jour en voiture.</p>
`,
    pros: [
      "Un patio et un bassin d'une vraie beauté, à l'échelle d'une maison",
      "L'expérience riad authentique, calme et personnelle",
      'Une position centrale pour visiter la médina à pied',
      'Un accueil à taille humaine, avec une équipe restreinte',
    ],
    cons: [
      'Aucun accès en voiture : dépose à une porte, puis marche dans les ruelles',
      'Escaliers raides et bassin ouvert, peu adaptés aux jeunes enfants',
      'Peu de chambres, donc une disponibilité limitée en haute saison',
      "Chauffage et isolation typiques d'une maison ancienne en hiver",
    ],
    faqs: [
      {
        q: 'Comment rejoindre le Riad Yasmine depuis l\'aéroport de Marrakech ?',
        a: "Une vingtaine de minutes de route jusqu'au secteur de Dar el Bacha, puis quelques minutes à pied : aucun véhicule ne rejoint l'entrée. Demandez au riad le nom exact de la porte de dépose et transmettez-le à votre chauffeur.",
      },
      {
        q: 'Peut-on faire venir quelqu\'un pour porter les valises ?',
        a: "Oui, la plupart des riads de la médina envoient un porteur avec une charrette si vous annoncez votre heure d'arrivée. C'est gratuit ou symbolique, et cela change tout sur des pavés, en particulier de nuit.",
      },
      {
        q: 'Le Riad Yasmine convient-il avec des enfants ?',
        a: "Peu : les escaliers sont raides, le bassin du patio est ouvert et la terrasse n'est pas sécurisée. Les familles avec de jeunes enfants seront nettement plus à l'aise dans un hôtel de l'Hivernage ou de la Palmeraie.",
      },
      {
        q: 'Est-ce bien situé pour visiter la médina ?',
        a: "Oui, le secteur de Dar el Bacha est central : les souks, le palais de la Bahia et Jemaa el-Fna se rejoignent à pied. C'est l'un des intérêts majeurs de l'adresse.",
      },
    ],
    cta: {
      heading: 'Dépose à la bonne porte de médina',
      text: "Indiquez le nom du riad : le chauffeur s'arrête à la porte la plus proche et non à celle qui l'arrange.",
      label: 'Réserver un transfert',
    },
  },
} satisfies HotelContent;
