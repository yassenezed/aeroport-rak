import type { LocalizedPage } from '../types';

export default {
  title: "Guía del aeropuerto de Marrakech-Menara (RAK)",
  description: "Guía completa del aeropuerto de Marrakech-Menara: terminales, plano, formalidades de entrada, tiempos de espera, conexiones y acceso a la ciudad.",
  eyebrow: 'Marrakech Menara · Guía',
  h1: 'Guía del aeropuerto de Marrakech Menara',
  lede: "Todo lo que conviene saber del RAK antes de pisarlo: cómo está organizada la terminal, dónde se forman las colas, qué pide la policía de fronteras y cuánto tiempo prever en cada etapa.",
  facts: [
    { label: 'Código IATA / OACI', value: 'RAK', sub: '· GMMX' },
    { label: 'Altitud', value: '471', sub: 'm' },
    { label: 'Pista', value: '3.100', sub: 'm' },
    { label: 'Pasajeros 2024', value: '9,3', sub: 'millones' },
  ],
  body: `
<h2>Un aeropuerto, dos terminales contiguas</h2>
<p>Marrakech Menara funciona con dos salas unidas entre sí, lo que hace que los traslados a pie sean sencillos y rápidos. La T1, la más reciente, con su gran celosía geométrica blanca, acoge la mayoría de los vuelos internacionales; la T2 absorbe el resto y parte de los vuelos interiores. El reparto varía según la temporada y la aerolínea: fíese de su tarjeta de embarque más que de la costumbre.</p>
<p>El aeropuerto está a seis kilómetros del centro, a 471 metros de altitud, con una única pista de 3.100 metros. Superó los <strong>9,3 millones de pasajeros en 2024</strong>, un volumen que se nota sobre todo por la tarde-noche, cuando las rotaciones europeas aterrizan en serie.</p>

<h2>A la llegada: el recorrido y los tiempos reales</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Etapa</th><th>Duración habitual</th><th>En hora punta</th></tr></thead>
<tbody>
<tr><td>Pasarela → policía de fronteras</td><td class="num">5–10 min</td><td class="num">10–15 min</td></tr>
<tr class="row-highlight"><td>Control de pasaportes</td><td class="num">15–25 min</td><td class="num">30–45 min</td></tr>
<tr><td>Entrega de equipajes</td><td class="num">15–20 min</td><td class="num">25–35 min</td></tr>
<tr><td>Aduana y salida</td><td class="num">5 min</td><td class="num">10 min</td></tr>
</tbody>
</table>
</div>
<p>Desde septiembre de 2019 ya no hay <strong>ficha policial</strong> que rellenar: tenga listos el pasaporte y la dirección de su alojamiento. Necesitará la dirección de su alojamiento.</p>

<h2>A la salida: el punto de congestión</h2>
<p>Lo que ralentiza el RAK no es la facturación, sino el control de pasaportes de salida (el escáner de la entrada de la terminal se retiró en marzo de 2025). Dos horas de antelación bastan en temporada baja; apunte a <strong>tres horas</strong> en temporada alta, en vacaciones escolares o si factura equipaje. Los picos se sitúan entre las 6 h y las 9 h y a última hora de la tarde.</p>

<h2>Formalidades de entrada en Marruecos</h2>
<ul>
<li><strong>Pasaporte</strong> con validez mínima de seis meses tras la fecha de entrada.</li>
<li><strong>Sin visado</strong> para ciudadanos de la Unión Europea, Suiza, Reino Unido, Canadá y Estados Unidos, en estancias turísticas de hasta 90 días.</li>
<li><strong>Sin ficha policial</strong> desde septiembre de 2019, ni a la entrada ni a la salida; tenga a mano la dirección de estancia.</li>
<li><strong>Efectivo</strong>: declaración obligatoria por encima de 100.000 MAD. El dirham no se importa ni se exporta.</li>
<li><strong>Drones</strong>: su importación está prohibida y se requisan sistemáticamente a la llegada.</li>
</ul>
<div class="callout">
<span class="callout-label">Escala larga o noche en el aeropuerto</span>
<p>La terminal no está pensada para dormir. Con más de seis horas de espera, un hotel cercano al aeropuerto, a diez minutos, suele salir más barato que una sala VIP y una noche en blanco. Vea nuestra página de <a href="/es/hotels/">hoteles</a>.</p>
</div>

<h2>Llegar a la ciudad</h2>
<p>Cuatro opciones y ninguna más: el <strong>taxi</strong> de la parada, a 100–150 MAD de día y 150–240 MAD de noche por el coche entero; el <strong>traslado reservado</strong>, desde 27 € por vehículo hasta siete pasajeros; el <strong>autobús 19</strong> de ALSA, a 30 MAD por persona hasta Jemaa el-Fna, entre las 6 h y las 23:30; y el <strong>coche de alquiler</strong>, con mostradores en la sala de llegadas. El detalle de cada una está en nuestra página de <a href="/es/transfers/">traslados</a>.</p>
`,
  faqs: [
    {
      q: '¿Cuántas terminales tiene el aeropuerto de Marrakech?',
      a: "Dos terminales contiguas y unidas a pie: la T1, la más reciente, acoge la mayoría de los vuelos internacionales, y la T2 absorbe el resto y parte de los interiores. El reparto varía según la aerolínea y la temporada: fíese de su tarjeta de embarque.",
    },
    {
      q: '¿Cuál es el código del aeropuerto de Marrakech?',
      a: "RAK como código IATA, el que figura en su billete, y GMMX como código OACI utilizado por el control aéreo. El aeropuerto se llama oficialmente Marrakech Menara.",
    },
    {
      q: '¿Hace falta visado para entrar en Marruecos por Marrakech?',
      a: "No para ciudadanos de la Unión Europea, Suiza, Reino Unido, Canadá y Estados Unidos, en estancias turísticas de hasta 90 días. El pasaporte debe ser válido durante toda la estancia (se recomiendan seis meses de validez restante); la ficha policial se suprimió en 2019.",
    },
    {
      q: '¿Se puede dormir en el aeropuerto de Marrakech?',
      a: "La terminal no está acondicionada para ello y resulta incómoda de noche. Por encima de seis horas de espera, un hotel a diez minutos del aeropuerto suele salir más barato que una sala VIP seguida de una noche en blanco.",
    },
    {
      q: '¿Se puede llevar un dron a Marruecos?',
      a: "No. La importación de drones está prohibida y los aparatos se requisan sistemáticamente en el control de llegada, incluidos los modelos de aficionado. No los lleve ni en cabina ni en bodega.",
    },
  ],
  cta: {
    heading: 'El trayecto a la ciudad, resuelto de antemano',
    text: "Precio fijo por vehículo, seguimiento del vuelo y llegada a la puerta de la medina más cercana: lo que queda tras pasar la policía y recoger el equipaje.",
    label: 'Reservar un traslado',
  },
} satisfies LocalizedPage;
