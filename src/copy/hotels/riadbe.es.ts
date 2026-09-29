import type { LocalizedHotel } from '../types';

export default {
  title: "Riad BE: reseña y acceso aeropuerto de Marrakech-Menara",
  description: "Riad BE, en la medina por Bab Doukkala: uno de los accesos más cómodos desde el aeropuerto de Marrakech-Menara con equipaje. Reseña.",
  eyebrow: 'Marrakech · Riad',
  h1: 'Riad BE',
  lede: "La experiencia de la medina, por la puerta más cómoda. Patio, estanque y terraza, pero en Bab Doukkala: uno de los pocos riads donde llegar con maletas no se convierte en una expedición.",
  stars: '★★★★',
  area: 'Medina, zona de Bab Doukkala',
  priceRange: 'Medio',
  rating: 4.3,
  ratingLabel: 'nuestra nota editorial',
  verdict: "El buen compromiso para una primera estancia en riad: patio, estanque y terraza, pero en Bab Doukkala, uno de los accesos más sencillos de la medina para quien llega cargado. Lo que se pierde en profundidad histórica se gana en logística.",
  body: `
<h2>Qué es</h2>
<p>Riad BE ocupa una casa de la medina en la zona de Bab Doukkala, con el vocabulario habitual del riad —patio central, estanque, terraza en la azotea, desayuno a la sombra— en una versión algo más contemporánea y algo menos confidencial que las casas de huéspedes muy pequeñas.</p>
<p>El tamaño cuenta aquí: suficientes habitaciones para que el establecimiento funcione como un hotel, las bastantes pocas para no sentirse anónimo.</p>

<h2>El acceso desde el aeropuerto</h2>
<p>Es su principal argumento, y está infravalorado. <strong>Bab Doukkala es una de las puertas más accesibles de la medina</strong>: ancha, bien comunicada, fácil de nombrar a un conductor y a poca distancia a pie del riad. Calcule unos veinte minutos de carretera desde el RAK y después unos minutos andando.</p>
<p>Para un primer viaje a Marrakech, o para una llegada al atardecer, esa diferencia con un riad situado al fondo de un <em>derb</em> se mide en comodidad real, sobre todo arrastrando una maleta.</p>

<h2>A quién conviene</h2>
<p>A quienes quieren la experiencia del riad sin la complejidad del acceso: primeras estancias, parejas, grupos pequeños de amigos. Es también una buena opción para un presupuesto intermedio, ya que la horquilla de precios queda sensiblemente por debajo de las direcciones más cotizadas de la medina.</p>
<p>Conviene menos a quien busca una casa histórica confidencial, o a quien necesita acceso en coche hasta la puerta: en ese caso, el Hivernage o Guéliz siguen siendo los barrios adecuados.</p>
`,
  pros: [
    'Bab Doukkala: uno de los accesos más sencillos de la medina con equipaje',
    'El vocabulario completo del riad: patio, estanque, terraza',
    'Sólida relación calidad-precio para la medina',
    'Un tamaño suficiente para ofrecer un verdadero servicio hotelero',
    'Una buena opción para una primera estancia en riad',
  ],
  cons: [
    'Menos confidencial que las casas de huéspedes muy pequeñas',
    'Siempre unos minutos a pie: ningún coche llega a la entrada',
    'Una decoración contemporánea, con menos carga histórica',
    'Las noches de invierno siguen siendo frescas, como en toda casa antigua',
  ],
  faqs: [
    {
      q: '¿Es fácil llegar al Riad BE desde el aeropuerto?',
      a: "Más que a la mayoría de los riads: Bab Doukkala es una puerta ancha, bien comunicada y fácil de indicar a un conductor. Calcule unos veinte minutos de carretera y después solo unos minutos a pie.",
    },
    {
      q: '¿Qué puerta de la medina hay que indicar al conductor?',
      a: "Bab Doukkala. Es el nombre que hay que dar al conductor o introducir en su reserva de traslado: no hay ambigüedad y el acceso es directo desde la carretera del aeropuerto.",
    },
    {
      q: '¿Es una buena opción para una primera estancia en Marrakech?',
      a: "Sí, y ese es precisamente su interés: obtiene la experiencia del riad —patio, estanque, terraza— sin la dificultad de acceso de una casa escondida al fondo de un derb, algo que cuenta mucho el primer día.",
    },
    {
      q: '¿Se puede llegar tarde por la noche?',
      a: "Sí, siempre que avise de su hora de llegada y, a ser posible, de su número de vuelo. El acceso por Bab Doukkala sigue siendo practicable al atardecer, y el riad puede enviar a alguien a recibirle.",
    },
  ],
  cta: {
    heading: 'Llegada a Bab Doukkala',
    text: "Un conductor que conoce la puerta, espera su vuelo y le deja lo más cerca posible, precio fijo por vehículo.",
    label: 'Reservar un traslado',
  },
} satisfies LocalizedHotel;
