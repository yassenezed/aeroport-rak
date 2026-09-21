import type { LocalizedPage } from '../types';

export default {
  title: 'Destinos desde el aeropuerto de Marrakech',
  description: 'Adónde ir desde el aeropuerto de Marrakech: medina, Guéliz, Palmeraie, Agafay, Ourika, Essaouira, Agadir y Ouarzazate, con distancias y precios.',
  eyebrow: 'Marrakech Menara · Destinos',
  h1: 'Adónde ir desde el aeropuerto de Marrakech',
  lede: "Menara es la puerta de entrada al centro de Marruecos: la medina está a quince minutos, las dunas de Agafay a cuarenta, el Atlas a una hora y el Atlántico a dos horas y media. Estas son las distancias reales y lo que cuesta cada trayecto.",
  body: `
<h2>Distancias y tiempos desde el RAK</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Destino</th><th>Distancia</th><th>En coche</th><th>Traslado privado</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Medina / Jemaa el-Fna</strong></td><td class="num">6 km</td><td class="num">15–30 min</td><td class="num">desde 27 €</td></tr>
<tr><td><strong>Guéliz / Hivernage</strong></td><td class="num">4–5 km</td><td class="num">10–20 min</td><td class="num">desde 27 €</td></tr>
<tr><td><strong>Palmeraie</strong></td><td class="num">12 km</td><td class="num">25–35 min</td><td class="num">30–40 €</td></tr>
<tr><td><strong>Desierto de Agafay</strong></td><td class="num">30 km</td><td class="num">40–50 min</td><td class="num">35–55 €</td></tr>
<tr><td><strong>Valle de Ourika</strong></td><td class="num">40 km</td><td class="num">1 h</td><td class="num">45–65 €</td></tr>
<tr><td><strong>Imlil / Toubkal</strong></td><td class="num">65 km</td><td class="num">1 h 30</td><td class="num">60–85 €</td></tr>
<tr><td><strong>Essaouira</strong></td><td class="num">180 km</td><td class="num">2 h 30</td><td class="num">≈ 95 €</td></tr>
<tr><td><strong>Ouarzazate</strong></td><td class="num">200 km</td><td class="num">4 h</td><td class="num">120–160 €</td></tr>
<tr><td><strong>Agadir</strong></td><td class="num">250 km</td><td class="num">3 h</td><td class="num">130–170 €</td></tr>
<tr><td><strong>Casablanca</strong></td><td class="num">240 km</td><td class="num">2 h 30</td><td class="num">130–170 €</td></tr>
</tbody>
</table>
</div>
<p>Los tiempos corresponden a condiciones normales, fuera de la salida de la ciudad a última hora de la tarde. La carretera de Ouarzazate cruza el puerto de Tichka, a 2.260 metros: es una carretera magnífica, pero no se recorre a media de autopista y exige atención en invierno.</p>

<h2>Los barrios de Marrakech, en un minuto</h2>
<h3>La medina</h3>
<p>El corazón histórico, sus riads y sus zocos. Ningún coche entra: le dejan en una puerta y usted termina a pie. Es la opción de quien viene por el ambiente y acepta el ruido, el calor y los callejones. Tenga preparado el nombre de su <em>bab</em>.</p>
<h3>Guéliz</h3>
<p>La ciudad moderna, cuadriculada y transitable, con sus restaurantes, sus galerías y la estación de la ONCF. Más tranquilo, mucho más práctico con niños o con coche de alquiler, menos exótico. A diez minutos del aeropuerto.</p>
<h3>El Hivernage</h3>
<p>El barrio de los grandes hoteles y los palacios de congresos, entre Guéliz y la medina, a distancia caminable de la Koutoubia. Mucha vegetación, poca vida de barrio.</p>
<h3>La Palmeraie</h3>
<p>A doce kilómetros del centro, villas y hoteles con piscina en un palmeral. Descansado, pero dependerá de un coche o un taxi para cada salida, un detalle que pesa en una estancia corta.</p>

<h2>Las excursiones más solicitadas</h2>
<p><strong>Agafay</strong> es el desierto de piedra a cuarenta minutos de la ciudad: cenas bajo jaima, noches en campamento y puesta de sol sobre el Atlas, sin las diez horas de carretera del Sáhara. <strong>Ourika</strong> ofrece agua, sombra y cascadas a una hora, la escapada preferida de los habitantes cuando la ciudad se calienta. <strong>Imlil</strong> es el punto de partida de las rutas hacia el Toubkal. Y <strong>Essaouira</strong> merece más de un día: dos horas y media de carretera, una medina declarada patrimonio, viento y diez grados menos.</p>
<div class="callout">
<span class="callout-label">Ir directamente a Essaouira o Agadir al llegar</span>
<p>Es frecuente, y se prepara. Un traslado privado desde el RAK a Essaouira ronda los 95 € por vehículo, frente a 3 o 4 horas de autobús CTM desde la estación de autobuses de Marrakech por unos euros por persona. Si aterriza por la tarde, duerma en Marrakech y salga por la mañana: la carretera de la costa no tiene ningún interés de noche.</p>
</div>
`,
  faqs: [
    {
      q: '¿Qué distancia hay entre el aeropuerto de Marrakech y la medina?',
      a: "Seis kilómetros, o sea de 15 a 30 minutos en coche según la hora. El autobús 19 tarda unos veinte minutos y deja directamente en Jemaa el-Fna.",
    },
    {
      q: '¿Cuánto se tarda de Marrakech a Essaouira?',
      a: "Dos horas y media por carretera, para 180 kilómetros. Un traslado privado cuesta unos 95 € por vehículo, y los autobuses CTM o Supratours hacen el trayecto desde la estación de autobuses de Marrakech por unos euros por persona.",
    },
    {
      q: '¿Se puede ir a Ouarzazate desde el aeropuerto de Marrakech en el día?',
      a: "Sí, pero calcule cuatro horas de carretera por el puerto de Tichka, a 2.260 metros. La ida y vuelta en el día es agotadora y deja poco tiempo allí: una noche en Ouarzazate o en Ait Ben Haddou cambia por completo la experiencia.",
    },
    {
      q: '¿En qué barrio de Marrakech conviene alojarse?',
      a: "La medina por el ambiente y los riads, aceptando los callejones y el ruido. Guéliz por la comodidad, los restaurantes y la circulación en coche. El Hivernage por los grandes hoteles tranquilos. La Palmeraie por las piscinas y el descanso, siempre que asuma doce kilómetros en cada salida.",
    },
  ],
  cta: {
    heading: 'Un trayecto directo a su destino',
    text: "Medina, Agafay, Ourika o Essaouira: indique su dirección de llegada y obtenga un precio fijo por vehículo, conductor incluido.",
    label: 'Calcular mi trayecto',
  },
} satisfies LocalizedPage;
