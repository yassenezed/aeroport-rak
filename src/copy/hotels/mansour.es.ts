import type { LocalizedHotel } from '../types';

export default {
  title: 'Royal Mansour Marrakech: reseña y acceso aeropuerto',
  description: 'Royal Mansour: riads privados en una finca cerrada, un servicio fuera de lo común y quince minutos en coche desde el aeropuerto de Marrakech.',
  eyebrow: 'Marrakech · Hotel',
  h1: 'Royal Mansour',
  lede: "No habitaciones, sino riads privados de varias plantas, reunidos en una finca cerrada dentro de las murallas. El establecimiento más singular de Marrakech y probablemente el más caro.",
  stars: '★★★★★',
  area: 'Dentro de las murallas, cerca del Hivernage',
  priceRange: 'Excepcional',
  rating: 4.9,
  ratingLabel: 'nuestra nota editorial',
  verdict: "Una reconstrucción integral de una medina a escala de hotel: cada huésped ocupa su propio riad, con patio, terraza y piscina. El servicio circula por galerías subterráneas para permanecer invisible. Es un objeto único, y su precio está a la altura de la ambición.",
  body: `
<h2>Qué es</h2>
<p>El Royal Mansour no funciona como un hotel clásico. La finca reproduce una medina en miniatura: callejones, puertas, patios y <strong>riads individuales de varias plantas</strong> asignados a cada reserva, con su propio patio, su terraza y a menudo su piscina. Uno no cruza un pasillo para volver a su habitación: vuelve a su casa.</p>
<p>La particularidad más comentada es la organización del servicio: el personal circula por una red de galerías subterráneas y solo aparece cuando se le llama. El resultado es una intimidad poco común para un establecimiento de este tamaño.</p>
<p>La artesanía movilizada —zellige, yeserías talladas, madera de cedro, tadelakt— implicó a cientos de artesanos marroquíes, y se nota en el detalle más que en el efecto de conjunto.</p>

<h2>El acceso desde el aeropuerto</h2>
<p>Unos seis kilómetros, quince a veinte minutos, con llegada en coche directamente a la finca. Ninguna atadura de medina: el establecimiento se sitúa dentro de las murallas pero dispone de un acceso rodado propio. Los traslados los gestiona el hotel bajo petición y, con este nivel de servicio, es la vía más sencilla.</p>

<h2>A quién conviene</h2>
<p>A quienes buscan intimidad absoluta más que la vida de un gran hotel, a los viajes excepcionales, a las familias que disponen de un riad entero. La configuración en casas individuales es especialmente adecuada para un grupo que quiere estar junto sin compartir un rellano de hotel.</p>
<p>Conviene menos a quien busca animación, encuentro o ambiente de vestíbulo: aquí todo está pensado para que no se cruce con nadie.</p>
`,
  pros: [
    'Riads privados enteros en lugar de habitaciones, con patio y terraza',
    'Una intimidad inigualable, servida por una circulación invisible del personal',
    'Artesanía marroquí de altísimo nivel, en el detalle',
    'Acceso rodado directo, sin ninguna atadura de medina',
    'Espacios de restauración y un spa a la altura del resto',
  ],
  cons: [
    'Tarifas que sitúan el establecimiento fuera del alcance de la mayoría de las estancias',
    'Un ambiente deliberadamente discreto, sin vida colectiva',
    'La finca invita a no salir de ella, con el riesgo de ver poco la ciudad',
    'La reserva en temporada alta exige una anticipación considerable',
  ],
  faqs: [
    {
      q: '¿Está el Royal Mansour lejos del aeropuerto de Marrakech?',
      a: "Unos seis kilómetros, es decir de quince a veinte minutos de carretera. El acceso se hace íntegramente en coche, directamente a la finca, sin ninguna atadura ligada a la medina pese a que el hotel se sitúa dentro de las murallas.",
    },
    {
      q: '¿Qué es un riad privado en el Royal Mansour?',
      a: "Una casa individual de varias plantas asignada a su reserva, con su patio, su terraza y por lo general su piscina. No ocupa una habitación en un edificio común: ocupa una casa entera dentro de la finca.",
    },
    {
      q: '¿El servicio subterráneo es una leyenda?',
      a: "No, es una realidad de diseño: una red de galerías permite al personal circular sin aparecer en los callejones de la finca. Eso explica el nivel de intimidad del establecimiento.",
    },
    {
      q: '¿El hotel organiza los traslados desde el aeropuerto?',
      a: "Sí, bajo petición, y con este nivel de servicio es la solución más sencilla. Un traslado privado reservado de forma independiente también funciona: el trayecto es corto y el acceso directo.",
    },
  ],
  cta: {
    heading: 'Un trayecto a la altura de la llegada',
    text: "Vehículo privado desde la terminal, seguimiento del vuelo y precio fijo, quince minutos hasta la finca.",
    label: 'Reservar un traslado',
  },
} satisfies LocalizedHotel;
