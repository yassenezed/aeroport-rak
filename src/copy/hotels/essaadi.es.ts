import type { LocalizedHotel } from '../types';

export default {
  title: 'Es Saadi Marrakech: reseña y acceso aeropuerto',
  description: 'Es Saadi: una finca de varias hectáreas en el Hivernage, varias categorías de alojamiento y solo diez minutos desde el aeropuerto de Marrakech.',
  eyebrow: 'Marrakech · Hotel',
  h1: 'Es Saadi',
  lede: "Una finca familiar del Hivernage, a diez minutos de la terminal: la dirección más rápida de alcanzar desde el aeropuerto y una de las pocas con un verdadero parque en plena ciudad.",
  stars: '★★★★★',
  area: 'Hivernage, barrio de los grandes hoteles',
  priceRange: 'Alto, variable según el ala',
  rating: 4.5,
  ratingLabel: 'nuestra nota editorial',
  verdict: "Un parque de varias hectáreas en plena ciudad, varias categorías de alojamiento dentro de una misma finca y una gestión familiar de larga trayectoria. El barrio más rápido desde el aeropuerto: ideal en familia o para una última noche antes de un vuelo matinal.",
  body: `
<h2>Qué es</h2>
<p>Es Saadi es una finca, no un edificio: varias hectáreas de jardines en el Hivernage, con alojamientos de distintos niveles reunidos en el mismo terreno —un hotel histórico, villas y un ala palacio—. Esa organización permite elegir el nivel de servicio sin cambiar de dirección, algo poco común en Marrakech.</p>
<p>El establecimiento lo lleva la misma familia desde hace décadas, y se nota en una continuidad del servicio menos estandarizada que en una cadena internacional.</p>

<h2>El acceso desde el aeropuerto</h2>
<p>Es su ventaja más concreta: <strong>el Hivernage es el barrio más cercano al RAK</strong>, a cuatro o cinco kilómetros, diez a quince minutos de carretera. Acceso en coche directo, llegada delante de la entrada, ningún mozo ni callejón. Para una llegada tardía o una salida a las 5 de la mañana, la diferencia con un riad de la medina es considerable.</p>

<h2>A quién conviene</h2>
<p>A las familias, gracias al parque, las piscinas y el espacio, que faltan cruelmente en la medina. A las estancias que combinan ciudad y descanso, ya que la Koutoubia y Jemaa el-Fna quedan a corta distancia en taxi. Y a las noches de escala o de tránsito, para las que la proximidad al aeropuerto es un argumento decisivo.</p>
<p>Conviene menos a quien busca la inmersión en la medina: el Hivernage es un barrio tranquilo, verde y hotelero, que no se parece al Marrakech histórico.</p>
`,
  pros: [
    'Diez a quince minutos desde el aeropuerto, el mejor acceso de la selección',
    'Un parque de varias hectáreas, excepcional en plena ciudad',
    'Varias categorías de alojamiento dentro de una misma finca',
    'Gestión familiar de larga trayectoria, poco estandarizada',
    'Espacio y piscinas adaptados a las familias',
  ],
  cons: [
    'El Hivernage no ofrece el exotismo de la medina',
    'Diferencias notables de nivel entre alas',
    'Hace falta un taxi para cada salida hacia los zocos',
    'La cuenta sube rápido con la restauración y el spa',
  ],
  faqs: [
    {
      q: '¿Cuánto se tarda desde el aeropuerto hasta Es Saadi?',
      a: "De diez a quince minutos, para cuatro o cinco kilómetros. El Hivernage es el barrio hotelero más cercano a la terminal, con acceso en coche directo y llegada delante de la entrada.",
    },
    {
      q: '¿Es Saadi es adecuado para familias?',
      a: "Es uno de sus puntos fuertes: el parque, las piscinas y el espacio disponible compensan exactamente lo que falta en un riad de la medina. Varias categorías de alojamiento permiten además ajustar el presupuesto.",
    },
    {
      q: '¿Está lejos Jemaa el-Fna desde el Hivernage?',
      a: "A unos minutos en taxi, por una carrera de unos 20 a 30 MAD. La Koutoubia es accesible a pie para buenos caminantes, pero la mayoría de los visitantes toman un taxi, sobre todo en verano.",
    },
    {
      q: '¿Es una buena dirección para la última noche antes de un vuelo matinal?',
      a: "Sí, es incluso uno de sus usos más pertinentes: a diez minutos de la terminal, evita cruzar la ciudad al amanecer y buscar un taxi en un callejón de la medina.",
    },
  ],
  cta: {
    heading: 'Diez minutos desde la terminal',
    text: "Un conductor que sigue su vuelo y le deja delante de la entrada, precio fijo por vehículo.",
    label: 'Reservar un traslado',
  },
} satisfies LocalizedHotel;
