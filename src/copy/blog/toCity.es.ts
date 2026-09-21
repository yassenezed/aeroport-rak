import type { LocalizedArticle } from '../types';

export default {
  title: 'Del aeropuerto de Marrakech al centro: las opciones',
  description: 'Llegar al centro de Marrakech desde el aeropuerto: taxi, traslado, autobús 19 o alquiler, con precios reales, duraciones y las puertas de la medina.',
  eyebrow: 'Transportes',
  h1: 'Del aeropuerto RAK al centro de Marrakech',
  lede: "Seis kilómetros, cuatro opciones y una sola dificultad real: la medina no se atraviesa en coche. Esto es lo que cuesta cada solución y cuál corresponde a su hora de aterrizaje.",
  excerpt: 'Taxi, traslado, autobús 19 o alquiler: las cuatro formas de llegar al centro, con los precios reales y las puertas de la medina.',
  date: '2026-09-15',
  facts: [
    { label: 'Distancia', value: '6', sub: 'km' },
    { label: 'Taxi (día)', value: '100–150', sub: 'MAD' },
    { label: 'Autobús 19', value: '30', sub: 'MAD' },
    { label: 'Traslado', value: '27 €', sub: 'desde' },
  ],
  body: `
<h2>La comparación en una tabla</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Opción</th><th>Precio</th><th>Duración</th><th>Deja en</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Traslado privado</strong></td><td class="num">desde 27 € / vehículo</td><td class="num">15–30 min</td><td>La puerta de la medina elegida o la dirección exacta</td></tr>
<tr><td><strong>Taxi</strong></td><td class="num">100–150 MAD de día</td><td class="num">15–30 min</td><td>La puerta que más convenga al conductor</td></tr>
<tr><td><strong>Autobús 19</strong></td><td class="num">30 MAD / persona</td><td class="num">≈ 20 min</td><td>Solo Jemaa el-Fna</td></tr>
<tr><td><strong>Alquiler</strong></td><td class="num">desde 25 € / día</td><td class="num">15–30 min</td><td>Parking y luego a pie</td></tr>
</tbody>
</table>
</div>

<h2>El taxi: la opción por defecto, y es buena</h2>
<p>Marrakech muestra sus tarifas en la parada del aeropuerto, por zonas. Para la medina, Guéliz y el Hivernage la horquilla es de <strong>100 a 150 MAD de día</strong>, es decir 9 a 14 € el coche entero, y de 150 a 240 MAD tras la puesta de sol. El precio corresponde a la carrera, no a cada pasajero.</p>
<p>La regla que evita el 90 % de los disgustos: nombre su puerta, cite el panel, confirme el importe y <strong>después</strong> abra el maletero. Si el conductor se niega, el siguiente aceptará.</p>
<p>Atención al tamaño: el petit taxi beige está limitado a tres pasajeros. Siendo cuatro con maletas, le ofrecerán dos coches: pida directamente un grand taxi o pagará el doble.</p>

<h2>El traslado reservado: cuándo sale más barato</h2>
<p>A 27 € por vehículo hasta siete pasajeros, el traslado no tiene ningún interés para dos personas que llegan a las 14 h. Lo tiene, y mucho, en tres casos: <strong>de noche</strong>, cuando el taxi sube a 150–240 MAD; <strong>a partir de cuatro pasajeros</strong>, cuando dos petits taxis cuestan más; y para un <strong>riad difícil de situar</strong>, donde el conductor parará en la puerta que le convenga y no en la más cercana.</p>
<p>A eso se suman el seguimiento del vuelo, la espera incluida en caso de retraso y la posibilidad de pedir sillas infantiles, que los taxis prácticamente nunca ofrecen.</p>

<h2>El autobús 19: imbatible, con condiciones</h2>
<p>La línea 19 de ALSA une el aeropuerto con Jemaa el-Fna por <strong>30 MAD la ida y 50 MAD ida y vuelta</strong>, válido unos quince días, con una salida cada treinta minutos aproximadamente entre las 6 h y las 23:30. La parada está a la salida de la terminal y el trayecto dura unos veinte minutos.</p>
<p>Funciona perfectamente para dos personas, de día, con un equipaje que se pueda cargar. Se vuelve pesado con dos maletas, un niño o después de las 22 h, y solo llega a la plaza, no a su alojamiento.</p>

<h2>Los últimos cien metros</h2>
<p>Sea cual sea la opción, la medina termina a pie: los <em>derbs</em> son demasiado estrechos y varios accesos están cerrados al tráfico. Según su zona le dejarán en <strong>Bab Doukkala, Bab Laksour, Bab Agnaou o Bab el Khemis</strong>, a tres o diez minutos andando.</p>
<div class="callout">
<span class="callout-label">Los dos mensajes que hay que enviar antes de salir</span>
<p>A su riad: «¿Qué puerta debo indicar al conductor?» y «¿Pueden enviar un mozo a tal hora?». Esas dos respuestas convierten una llegada nocturna complicada en un trámite.</p>
</div>
`,
  faqs: [
    {
      q: '¿Cuánto cuesta un taxi del aeropuerto de Marrakech al centro?',
      a: "De 100 a 150 MAD de día hacia la medina, Guéliz y el Hivernage, y de 150 a 240 MAD de noche, por el coche entero y no por pasajero. Las tarifas están publicadas en un panel en la parada de taxis.",
    },
    {
      q: '¿Funciona el autobús 19 de noche en Marrakech?',
      a: "No, la última salida es hacia las 23:30. Como buena parte de los vuelos de bajo coste aterrizan después de esa hora, suele ser inutilizable a la llegada: prevea un taxi o un traslado.",
    },
    {
      q: '¿Cuánto dura el trayecto del aeropuerto a Jemaa el-Fna?',
      a: "De 15 a 30 minutos en coche según el tráfico, para seis kilómetros, y unos veinte minutos en autobús 19, paradas incluidas. Las últimas horas de la tarde y el periodo del Ramadán alargan notablemente el trayecto.",
    },
    {
      q: '¿Puede un taxi dejarme delante de mi riad?',
      a: "No, la medina no es accesible en coche. El conductor para en la puerta más cercana —Bab Doukkala, Bab Laksour, Bab Agnaou o Bab el Khemis— y usted termina a pie, normalmente de tres a diez minutos.",
    },
  ],
  cta: {
    heading: 'El trayecto resuelto antes de aterrizar',
    text: "Precio fijo por vehículo, un conductor que sigue su vuelo y llegada a la puerta de la medina más cercana a su riad.",
    label: 'Reservar un traslado',
  },
} satisfies LocalizedArticle;
