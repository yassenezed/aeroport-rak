import type { LocalizedHotel } from '../types';

export default {
  title: "La Mamounia: acceso desde el aeropuerto Marrakech-Menara",
  description: "La Mamounia: un siglo de historia, amplios jardines a las puertas de la medina y quince minutos en coche desde el aeropuerto de Marrakech-Menara.",
  eyebrow: 'Marrakech · Hotel',
  h1: 'La Mamounia',
  lede: "El gran hotel histórico de Marrakech, a cinco kilómetros de la terminal, en la bisagra entre las murallas y la ciudad: la medina a pie, el acceso en coche sin ataduras.",
  stars: '★★★★★',
  area: 'Junto a las murallas, cerca de Bab Jdid',
  priceRange: 'Muy alto, fuerte estacionalidad',
  rating: 4.8,
  ratingLabel: 'nuestra nota editorial',
  verdict: "La dirección donde el hotel es el destino: un siglo de historia, jardines de olivos en plena ciudad y la medina accesible a pie. Es además uno de los pocos establecimientos de este nivel donde llegar desde el aeropuerto no plantea ninguna cuestión logística.",
  body: `
<h2>Qué es</h2>
<p>Inaugurado en 1923 sobre un terreno de olivos que un sultán regaló en su día a su hijo, La Mamounia es el gran hotel histórico de Marrakech, ese cuyo nombre circula mucho más allá de Marruecos. Churchill pintó aquí, y el establecimiento ha atravesado un siglo de restauraciones sucesivas sin perder lo que le hace singular: un vasto jardín cerrado, a dos pasos de las murallas.</p>
<p>La experiencia se apoya ante todo en ese jardín. En una ciudad de medina densa y mineral, disponer de varias hectáreas de olivos, paseos y estanques cambia radicalmente el ritmo de una estancia. El resto —restauración, spa, servicio— está a la altura, pero es la finca misma la que justifica la dirección.</p>

<h2>El acceso desde el aeropuerto de Marrakech-Menara</h2>
<p>Cinco kilómetros, doce a veinte minutos según el tráfico, y llegada delante de la entrada. Es uno de los pocos establecimientos de prestigio de Marrakech donde la cuestión logística no se plantea: ninguna puerta de la medina que negociar, ningún mozo que prever, ningún callejón que remontar con maletas.</p>
<p>El hotel suele organizar los traslados bajo petición. En su defecto, un taxi a la tarifa del panel, 100 a 150 MAD de día, o un <a href="/es/book-transfer/">traslado reservado</a> bastan perfectamente: el trayecto es corto y directo.</p>

<h2>A quién conviene</h2>
<p>A quienes vienen tanto por el hotel como por la ciudad y quieren poder volver a descansar entre dos salidas sin que se convierta en una expedición. A los viajeros que desean el ambiente de la medina sin sufrir sus dificultades de acceso. Y a las estancias cortas, donde la proximidad inmediata de la Koutoubia y de Jemaa el-Fna ahorra tiempo real.</p>
<p>Conviene menos a quien busca la intimidad de una casa pequeña: La Mamounia es un gran establecimiento, concurrido, y eso se nota en las horas punta alrededor de la piscina y de los restaurantes.</p>
`,
  pros: [
    'Jardines históricos que sostienen toda la experiencia, raros en plena ciudad',
    'Una posición bisagra: la medina a pie, el acceso en coche sin ataduras',
    'Una oferta de restauración amplia, marroquí e internacional',
    'Un spa y espacios de descanso a la escala de la finca',
    'Llegada directa delante de la entrada desde el aeropuerto, sin mozos ni callejones',
  ],
  cons: [
    'Tarifas entre las más altas de Marruecos, con marcada estacionalidad',
    'La escala de un gran hotel, lejos de la intimidad de un riad',
    'Afluencia notable en horas punta en las zonas comunes',
    'Los extras —spa, restauración, bebidas— engordan claramente la cuenta',
  ],
  faqs: [
    {
      q: '¿A qué distancia está La Mamounia del aeropuerto de Marrakech?',
      a: "Unos 5 km, es decir de 12 a 20 minutos de carretera según el tráfico. Es uno de los grandes hoteles más cercanos a la terminal, y el acceso se hace íntegramente en coche, con llegada delante de la entrada.",
    },
    {
      q: '¿La Mamounia está en la medina o en la ciudad nueva?',
      a: "En la bisagra entre ambas: el hotel bordea las murallas, a pocos minutos a pie de la Koutoubia y de Jemaa el-Fna, sin dejar de ser accesible en coche. Ese doble estatus explica buena parte de su atractivo.",
    },
    {
      q: '¿Hay que ser cliente para disfrutar de los jardines?',
      a: "Los jardines históricos forman parte de la experiencia hotelera. Una consumición en el bar o una comida permiten disfrutarlos sin alojarse, previa reserva y según las normas del establecimiento en el momento de su visita.",
    },
    {
      q: '¿Qué traslado prever desde el aeropuerto?',
      a: "El hotel suele organizar los traslados bajo petición. En su defecto, un traslado privado reservado o un taxi a la tarifa del panel bastan de sobra: el trayecto es corto, directo y la llegada es delante de la entrada.",
    },
  ],
  cta: {
    heading: 'Llegar directamente a la entrada',
    text: "Quince minutos desde la terminal, precio fijo por vehículo, un conductor que sigue su vuelo.",
    label: 'Reservar un traslado',
  },
} satisfies LocalizedHotel;
