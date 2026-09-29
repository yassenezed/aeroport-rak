import type { LocalizedHotel } from '../types';

export default {
  title: "Riad Yasmine: acceso desde el aeropuerto Marrakech-Menara",
  description: "Riad Yasmine, el patio más fotografiado de la medina: acceso desde el aeropuerto de Marrakech-Menara, puerta de llegada y logística.",
  eyebrow: 'Marrakech · Riad',
  h1: 'Riad Yasmine',
  lede: "El patio verde de la medina y la logística que lo acompaña. Un riad de verdad, a escala doméstica, donde hay que preparar la llegada porque el coche se detiene en una puerta.",
  stars: '★★★★',
  area: 'Medina, zona de Dar el Bacha',
  priceRange: 'Medio a alto según la temporada',
  rating: 4.4,
  ratingLabel: 'nuestra nota editorial',
  verdict: "Un riad auténtico, con el patio más reconocible de la medina y apenas un puñado de habitaciones. Perfecto para una pareja; exige preparar la llegada, ya que el coche se detiene en una puerta y el resto se hace a pie.",
  body: `
<h2>Qué es</h2>
<p>Riad Yasmine es una casa tradicional de la medina, organizada en torno a un patio ajardinado y un estanque verde que ha dado la vuelta a las redes sociales. Hay que decirlo con claridad: <strong>es una casa, no un hotel</strong>. Un puñado de habitaciones, una terraza, un desayuno servido allí mismo y un equipo reducido al que se acaba conociendo en dos días.</p>
<p>Es exactamente lo que buscan quienes vienen por la experiencia del riad —la calma tras una puerta gruesa, el cielo sobre el patio, la luz que gira— y exactamente lo que desconcierta a quienes esperan los servicios de un hotel.</p>

<h2>El acceso desde el aeropuerto</h2>
<p>Seis kilómetros hasta la zona de Dar el Bacha, unos veinte minutos de carretera, <strong>y después unos minutos a pie</strong>. Ningún vehículo llega a la entrada: el conductor para en la puerta más cercana y usted termina por los callejones.</p>
<p>Dos precauciones resuelven la cuestión. Pida al riad <strong>el nombre exacto de la puerta de llegada</strong> y comuníquelo a su conductor o a su traslado. Y anuncie su hora de llegada: la casa enviará a alguien a recibirle, con una carretilla para las maletas si hace falta. Para una llegada después de las 22 h, es imprescindible más que cómodo.</p>

<h2>A quién conviene</h2>
<p>A las parejas, a las estancias de tres a cinco noches y a quienes la medina es precisamente el motivo del viaje. La ubicación, entre Dar el Bacha y los zocos, permite hacerlo todo a pie.</p>
<p>Conviene mucho menos con niños pequeños —escaleras empinadas, estanque abierto, terraza sin protección—, con equipaje pesado, o si piensa volver varias veces al día en coche.</p>
`,
  pros: [
    'Un patio y un estanque de verdadera belleza, a escala de casa',
    'La experiencia de riad auténtica, tranquila y personal',
    'Una ubicación central para recorrer la medina a pie',
    'Una acogida a escala humana, con un equipo reducido',
  ],
  cons: [
    'Ningún acceso en coche: llegada a una puerta y luego a pie por los callejones',
    'Escaleras empinadas y estanque abierto, poco adecuados para niños pequeños',
    'Pocas habitaciones, por tanto disponibilidad limitada en temporada alta',
    'Calefacción y aislamiento propios de una casa antigua en invierno',
  ],
  faqs: [
    {
      q: '¿Cómo llegar al Riad Yasmine desde el aeropuerto de Marrakech?',
      a: "Unos veinte minutos de carretera hasta la zona de Dar el Bacha y después unos minutos a pie: ningún vehículo llega a la entrada. Pida al riad el nombre exacto de la puerta de llegada y transmítalo a su conductor.",
    },
    {
      q: '¿Puede venir alguien a llevar las maletas?',
      a: "Sí, la mayoría de los riads de la medina envían un mozo con carretilla si anuncia su hora de llegada. Es gratis o simbólico, y lo cambia todo sobre los adoquines, sobre todo de noche.",
    },
    {
      q: '¿El Riad Yasmine es adecuado con niños?',
      a: "Poco: las escaleras son empinadas, el estanque del patio está abierto y la terraza no está protegida. Las familias con niños pequeños estarán claramente más cómodas en un hotel del Hivernage o de la Palmeraie.",
    },
    {
      q: '¿Está bien situado para visitar la medina?',
      a: "Sí, la zona de Dar el Bacha es céntrica: los zocos, el palacio de la Bahía y Jemaa el-Fna se alcanzan a pie. Es uno de los grandes atractivos de la dirección.",
    },
  ],
  cta: {
    heading: 'Llegada a la puerta correcta de la medina',
    text: "Indique el nombre del riad: el conductor para en la puerta más cercana y no en la que más le convenga.",
    label: 'Reservar un traslado',
  },
} satisfies LocalizedHotel;
