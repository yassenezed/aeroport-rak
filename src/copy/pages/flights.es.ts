import type { LocalizedPage } from '../types';

export default {
  title: "Vuelos al aeropuerto de Marrakech-Menara: aerolíneas",
  description: "Vuelos baratos al aeropuerto de Marrakech-Menara: buscador, aerolíneas por ciudad, duración del vuelo, mejor época y extras de las low cost.",
  eyebrow: "Buscador de vuelos · 39 aerolíneas",
  h1: "Vuelos aeropuerto Marrakech-Menara",
  lede: "Compare los vuelos al aeropuerto de Marrakech-Menara (RAK) en todas las compañías y compruebe lo que de verdad marca el precio: ciudad de salida, temporada, equipaje y hora de llegada.",
  widget: 'flight-search',
  highlights: [
    { icon: 'plane', value: "39 aerolíneas", label: "Vuelos directos al RAK" },
    { icon: 'map', value: "106 ciudades", label: "Conectadas sin escalas" },
    { icon: 'clock', value: "≈ 1 h 40", label: "Madrid → Marrakech" },
  ],
  services: {
    heading: "Preparar su llegada al aeropuerto de Marrakech",
    intro: "Con el billete reservado, todo lo que ocurre en tierra.",
    items: [
      { icon: 'map', key: 'destinations', title: "Todos los destinos", text: "Las 106 ciudades con vuelo directo, filtrables por país y compañía.", cta: "Ver la lista" },
      { icon: 'plane-landing', key: 'arrivals', title: "Llegadas en directo", text: "Seguir un vuelo y su hora real de aterrizaje en Marrakech.", cta: "Ver llegadas" },
      { icon: 'plane-takeoff', key: 'departures', title: "Salidas en directo", text: "A qué hora llegar, facturación y controles.", cta: "Ver salidas" },
      { icon: 'van', key: 'bookTransfer', title: "Traslado desde el aeropuerto", text: "Conductor con su nombre, precio fijo por vehículo desde 27 €.", cta: "Reservar" },
      { icon: 'building', key: 'hotels', title: "Dónde dormir", text: "Medina, Guéliz, Hivernage o cerca del aeropuerto.", cta: "Ver hoteles" },
      { icon: 'alert', key: 'compensation', title: "Vuelo retrasado o cancelado", text: "Hasta 400 € de compensación según la distancia.", cta: "Ver mis derechos" },
    ],
  },
  body: `
<h2>Vuelos directos al aeropuerto de Marrakech-Menara desde España y Europa</h2>
<p>España es uno de los mercados mejor conectados con el aeropuerto de Marrakech: una docena de ciudades tienen vuelo sin escalas, y a menudo es el trayecto más corto de Europa. Estas son las rutas principales, las compañías que las operan y la duración media del vuelo.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Salida</th><th>Compañías</th><th>Duración</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Madrid</strong></td><td>Ryanair, Iberia, Air Europa</td><td class="num">≈ 1 h 40</td></tr>
<tr><td><strong>Barcelona</strong></td><td>Ryanair, Vueling, Royal Air Maroc</td><td class="num">≈ 2 h 15</td></tr>
<tr><td><strong>Sevilla</strong></td><td>Ryanair</td><td class="num">≈ 1 h 15</td></tr>
<tr><td><strong>Málaga</strong></td><td>Ryanair, easyJet</td><td class="num">≈ 1 h 10</td></tr>
<tr><td><strong>Valencia</strong></td><td>Ryanair</td><td class="num">≈ 1 h 55</td></tr>
<tr><td><strong>Alicante</strong></td><td>Ryanair</td><td class="num">≈ 1 h 45</td></tr>
<tr><td><strong>Bilbao</strong></td><td>Volotea (temporada), Vueling (temporada)</td><td class="num">≈ 2 h 15</td></tr>
<tr><td><strong>Gran Canaria / Tenerife</strong></td><td>Ryanair, Binter (temporada)</td><td class="num">≈ 1 h 45</td></tr>
</tbody>
</table>
</div>
<p>En total, el aeropuerto de Marrakech-Menara está conectado con 106 ciudades por 39 compañías. La lista completa, con las rutas de temporada, está en nuestra página de <a href="/es/destinations/">destinos desde Marrakech</a>.</p>

<h2>Cuándo reservar: temporadas y precios</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Periodo</th><th>Afluencia</th><th>Precios</th><th>Clima</th></tr></thead>
<tbody>
<tr><td><strong>Marzo–mayo</strong></td><td>Muy alta</td><td>Altos</td><td>Ideal, 22–28 °C</td></tr>
<tr><td><strong>Junio–agosto</strong></td><td>Media</td><td>Moderados salvo agosto</td><td>Muy caluroso, 38–45 °C</td></tr>
<tr class="row-highlight"><td><strong>Septiembre–noviembre</strong></td><td>Alta</td><td>Medios</td><td>Excelente, 24–30 °C</td></tr>
<tr><td><strong>Diciembre–febrero</strong></td><td>Picos en fiestas</td><td>Bajos fuera de fiestas</td><td>Suave de día, frío de noche</td></tr>
</tbody>
</table>
</div>
<p>La mejor ventana es de <strong>finales de septiembre a mediados de noviembre</strong>: el mejor clima del año antes de la temporada navideña. Enero y febrero, fuera de vacaciones, tienen los precios más bajos, con noches por debajo de 8 °C, algo que se nota en un riad poco calefactado. Reserve con seis a diez semanas de antelación normalmente, y con tres o cuatro meses para Semana Santa, puentes y Navidad.</p>

<h2>El precio anunciado no es el precio final</h2>
<p>En una low cost, la diferencia entre el precio anunciado y el total está en tres líneas. La <strong>maleta facturada</strong> suele sumar 25 a 50 € por trayecto, a veces más que el billete. La <strong>elección de asiento</strong> se cobra en cuanto se quiere viajar juntos. Y el <strong>equipaje de mano</strong> más allá de un bolso pequeño es de pago en varias compañías, con controles estrictos a la salida de Marrakech.</p>
<div class="callout">
<span class="callout-label">La cuenta que hay que hacer</span>
<p>Sume siempre ida y vuelta antes de comparar. Una ida y vuelta low cost de 79 € se convierte en 179 € con dos maletas y asientos reservados: a ese nivel, una compañía tradicional, con equipaje incluido y horarios de día, vuelve a ser competitiva.</p>
</div>

<h2>Elegir la hora de llegada</h2>
<p>Muchos vuelos low cost aterrizan entre las 20 h y la medianoche, en el pico de afluencia del aeropuerto. A esa hora el control de pasaportes es más lento, el taxi pasa a tarifa nocturna y el autobús 19 deja de circular hacia las 23:30. A precio similar, un vuelo que aterriza a mediodía ahorra media hora a la salida. Si llega tarde, reserve un <a href="/es/book-transfer/">traslado</a>: el conductor sigue el vuelo y espera en caso de retraso.</p>

<h2>Vuelos nacionales y de largo recorrido desde Marrakech</h2>
<p>Dentro de Marruecos, Royal Air Maroc une Marrakech con <strong>Casablanca</strong>, <strong>Dajla</strong> y <strong>El Aaiún</strong>, y Ryanair vuela directo a <strong>Fez</strong>, <strong>Tánger</strong>, <strong>Tetuán</strong>, <strong>Uchda</strong> y <strong>Errachidia</strong>. No hay vuelos a Agadir, Esauira ni Uarzazat: la carretera es más sencilla (vea <a href="/es/blog/distance-essaouira-marrakech-airport/">Marrakech–Esauira</a> y <a href="/es/blog/distance-agadir-marrakech-airport/">Marrakech–Agadir</a>).</p>
<p>Más lejos, el aeropuerto de Marrakech-Menara está conectado con <strong>Montreal</strong> (Air Transat) y, en temporada, con <strong>Atlanta</strong> (Delta) y <strong>Nueva York-Newark</strong> (United). Qatar Airways a <strong>Doha</strong> y Turkish Airlines a <strong>Estambul</strong> abren conexiones con Asia y el Golfo.</p>
`,
  faqHeading: "Vuelos al aeropuerto de Marrakech: preguntas frecuentes",
  faqs: [
    { q: "¿Qué compañías vuelan al aeropuerto de Marrakech?", a: "39 compañías operan en el aeropuerto de Marrakech-Menara. Ryanair es la primera con más de 50 rutas, por delante de easyJet, Transavia y Royal Air Maroc. También vuelan Vueling, Iberia, Air Europa, Volotea, Binter, Wizz Air, Air France, Turkish Airlines y Qatar Airways." },
    { q: "¿Qué compañías vuelan directo de Madrid o Barcelona a Marrakech?", a: "Desde Madrid, Ryanair, Iberia y Air Europa. Desde Barcelona, Ryanair, Vueling y Royal Air Maroc. Ryanair vuela además desde Sevilla, Málaga, Valencia, Alicante, Santander, Zaragoza y Girona." },
    { q: "¿Cuánto dura un vuelo Madrid–Marrakech?", a: "Alrededor de 1 h 40 min sin escalas. Desde Barcelona, unos 2 h 15 min; desde Sevilla o Málaga, apenas 1 h 10 a 1 h 15." },
    { q: "¿Cuál es la época más barata para volar a Marrakech?", a: "Enero y febrero, fuera de vacaciones, son los meses más baratos. Para el mejor equilibrio entre precio y clima, apunte a finales de septiembre a mediados de noviembre, con 24 a 30 °C." },
    { q: "¿Con cuánta antelación reservar un vuelo a Marrakech?", a: "De seis a diez semanas normalmente. Para Semana Santa, puentes y Navidad, mejor tres o cuatro meses: es cuando más rápido suben los precios." },
    { q: "¿La maleta está incluida en los vuelos low cost a Marrakech?", a: "Normalmente solo un bolso pequeño bajo el asiento. La maleta facturada suma a menudo 25 a 50 € por trayecto: compare siempre el precio total, ida y vuelta con equipaje." },
    { q: "¿Hay vuelos nacionales desde Marrakech?", a: "Sí: Royal Air Maroc a Casablanca, Dajla y El Aaiún, y Ryanair a Fez, Tánger, Tetuán, Uchda y Errachidia. No hay vuelos a Agadir, Esauira ni Uarzazat." },
    { q: "Mi vuelo a Marrakech se retrasa: ¿tengo derecho a compensación?", a: "Si el vuelo sale de la UE, o lo opera una compañía europea, y llega con más de tres horas de retraso, el Reglamento 261/2004 prevé 250 € por pasajero en trayectos de menos de 1 500 km, como Madrid–Marrakech, y 400 € entre 1 500 y 3 500 km." },
  ],
  cta: {
    heading: "¿Billete reservado? Organice la llegada",
    text: "Un conductor que sigue su vuelo, espera en caso de retraso y le deja en la puerta de la medina más cercana a su riad, a precio fijo por vehículo.",
    label: "Reservar un traslado",
  },
} satisfies LocalizedPage;
