import type { LocalizedPage } from '../types';

export default {
  title: "Destinos aeropuerto de Marrakech-Menara: vuelos directos",
  description: "Más de 100 ciudades en vuelo directo desde el aeropuerto de Marrakech-Menara: 39 compañías, 33 países, rutas de temporada y nacionales. Lista actualizada.",
  eyebrow: "Vuelos directos · actualizado en septiembre de 2026",
  h1: "Destinos aeropuerto Marrakech-Menara",
  lede: "El aeropuerto de Marrakech-Menara (RAK) tiene vuelos sin escalas a más de cien ciudades, sobre todo en Europa, pero también en Marruecos, Oriente Medio y Norteamérica. Aquí están todos los destinos, las compañías que los operan y las rutas de temporada.",
  highlights: [
    { icon: 'map', value: "106 ciudades", label: "Destinos en vuelo directo" },
    { icon: 'plane', value: "39 compañías", label: "Regulares y de temporada" },
    { icon: 'map-pin', value: "33 países", label: "En 3 continentes" },
  ],
  destinations: {
    airlinesHeading: "Las compañías aéreas del aeropuerto de Marrakech",
    airlinesIntro: "Las low cost europeas dominan el tráfico: solo Ryanair conecta más de cincuenta ciudades con el RAK. Estas son las principales compañías y su número de destinos.",
    tableHeading: "Todos los destinos desde el aeropuerto de Marrakech-Menara",
    tableIntro: "Ciudades con vuelo sin escalas y las compañías que las operan. Escriba una ciudad, un país o una compañía, o filtre por región.",
    regionsHeading: "Destinos por región",
  },
  services: {
    heading: "Organizar su vuelo a o desde Marrakech",
    intro: "Encontrar el billete adecuado y todo lo que ocurre en tierra al llegar.",
    items: [
      { icon: 'plane', key: 'flights', title: "Comparar vuelos", text: "Precios de vuelos directos a Marrakech desde su ciudad.", cta: "Buscar un vuelo" },
      { icon: 'building', key: 'hotels', title: "Hoteles en Marrakech", text: "Riads, palacios y hoteles cerca del aeropuerto.", cta: "Ver hoteles" },
      { icon: 'van', key: 'bookTransfer', title: "Traslado desde el aeropuerto", text: "Conductor con su nombre, precio fijo por vehículo desde 27 €.", cta: "Reservar" },
      { icon: 'tag', key: 'carRental', title: "Alquiler de coches", text: "Mostradores en la terminal, precios y trampas del contrato.", cta: "Comparar" },
      { icon: 'plane-landing', key: 'arrivals', title: "Llegadas en directo", text: "Seguir un vuelo que aterriza en Marrakech.", cta: "Ver llegadas" },
      { icon: 'plane-takeoff', key: 'departures', title: "Salidas en directo", text: "Horarios, retrasos y consejos antes del despegue.", cta: "Ver salidas" },
    ],
  },
  body: `
<h2>Vuelos directos a España y Europa desde Marrakech</h2>
<p>Casi ocho de cada diez destinos desde el aeropuerto de Marrakech están en Europa. <strong>España</strong> es uno de los mercados mejor conectados: Madrid con Ryanair, Iberia y Air Europa; Barcelona con Ryanair, Vueling y Royal Air Maroc; y también Sevilla, Málaga, Valencia, Alicante, Bilbao, Santander, Zaragoza, Girona y Santiago de Compostela, además de Palma y las Canarias en temporada.</p>
<p><strong>Francia</strong> suma una veintena de ciudades, con París servida por cuatro aeropuertos, seguida del <strong>Reino Unido</strong>, <strong>Italia</strong> y <strong>Alemania</strong>. Las rutas a Bélgica, los Países Bajos, Suiza y Portugal funcionan todo el año. El invierno, la temporada más suave en Marrakech, añade vuelos a Escandinavia, Austria, Grecia, Polonia y los países bálticos.</p>

<h2>Vuelos nacionales en Marruecos desde Marrakech</h2>
<p>Royal Air Maroc une Marrakech con <strong>Casablanca</strong>, <strong>Dajla</strong> y <strong>El Aaiún</strong>. Ryanair opera vuelos nacionales a <strong>Fez</strong>, <strong>Tánger</strong>, <strong>Tetuán</strong>, <strong>Uchda</strong> y <strong>Errachidia</strong>, a menudo a precios bajos. No hay vuelos regulares a Agadir, Esauira ni Uarzazat: se llega por carretera, como muestra la tabla al final de la página.</p>

<h2>Vuelos de largo recorrido: Norteamérica y Oriente Medio</h2>
<p>Desde 2024, el aeropuerto de Marrakech-Menara tiene enlaces sin escalas con Norteamérica: <strong>Montreal</strong> con Air Transat y, en temporada, <strong>Atlanta</strong> con Delta y <strong>Nueva York-Newark</strong> con United. Hacia el este, Qatar Airways vuela a <strong>Doha</strong> y Turkish Airlines a <strong>Estambul</strong>, dos centros de conexión con Asia. Saudia une <strong>Yeda</strong> y Royal Air Maroc <strong>Medina</strong> en temporada.</p>

<h2>Vuelos de temporada: qué cambia entre verano e invierno</h2>
<p>La programación cambia dos veces al año, a finales de marzo y a finales de octubre. El invierno es la temporada más completa: los europeos del norte huyen del frío y las compañías abren rutas a Copenhague, Oslo, Helsinki, Viena, Varsovia o Riga. En verano, Transavia añade vuelos a Cabo Verde y Dakar, y Ryanair a Canarias y Palma. Las rutas marcadas como «de temporada» en la tabla no operan todo el año: compruebe las fechas antes de reservar.</p>

<h2>Encontrar un vuelo barato a o desde Marrakech</h2>
<ul>
<li><strong>Compare low cost y compañías tradicionales</strong>: en Madrid o Barcelona, tres compañías compiten la misma semana.</li>
<li><strong>Reserve con seis a ocho semanas de antelación</strong>, antes para Semana Santa, puentes y Navidad, las fechas más caras.</li>
<li><strong>Mire el aeropuerto de salida</strong>: Girona está lejos de Barcelona y Beauvais lejos de París. El billete más barato puede costar un trayecto más.</li>
<li><strong>Busque un aterrizaje de día</strong>: los vuelos nocturnos llegan en la hora punta del aeropuerto y después del último autobús 19.</li>
</ul>
<p>Nuestro <a href="/es/flights/">comparador de vuelos a Marrakech</a> muestra los precios de todas las compañías. Para seguir un vuelo en tiempo real, consulte las <a href="/es/arrivals/">llegadas</a> y <a href="/es/departures/">salidas</a> del aeropuerto.</p>

<h2>Desde el aeropuerto, por carretera</h2>
<p>Una vez en Marrakech, los grandes destinos de la región se alcanzan en coche o en <a href="/es/book-transfer/">traslado privado</a>:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Destino</th><th>Distancia</th><th>Duración</th><th>Traslado privado</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Medina / Jemaa el-Fna</strong></td><td class="num">6 km</td><td class="num">15–30 min</td><td class="num">desde 27 €</td></tr>
<tr><td><strong>Desierto de Agafay</strong></td><td class="num">30 km</td><td class="num">40–50 min</td><td class="num">35–55 €</td></tr>
<tr><td><strong>Valle del Ourika</strong></td><td class="num">40 km</td><td class="num">1 h</td><td class="num">45–65 €</td></tr>
<tr><td><strong><a href="/es/blog/distance-essaouira-marrakech-airport/">Esauira</a></strong></td><td class="num">180 km</td><td class="num">2 h 30</td><td class="num">≈ 95 €</td></tr>
<tr><td><strong><a href="/es/blog/distance-ouarzazate-marrakech-airport/">Uarzazat</a></strong></td><td class="num">200 km</td><td class="num">4 h</td><td class="num">120–160 €</td></tr>
<tr><td><strong><a href="/es/blog/distance-casablanca-marrakech-airport/">Casablanca</a></strong></td><td class="num">240 km</td><td class="num">2 h 30</td><td class="num">130–170 €</td></tr>
<tr><td><strong><a href="/es/blog/distance-agadir-marrakech-airport/">Agadir</a></strong></td><td class="num">250 km</td><td class="num">3 h</td><td class="num">130–170 €</td></tr>
<tr><td><strong><a href="/es/blog/distance-fes-marrakech-airport/">Fez</a></strong></td><td class="num">530 km</td><td class="num">6 h</td><td class="num">bajo petición</td></tr>
</tbody>
</table>
</div>
<p>La lista de vuelos directos se elabora a partir de los programas publicados por las compañías y de la base de rutas de <a href="https://es.wikipedia.org/wiki/Aeropuerto_de_Marrakech-Menara" target="_blank" rel="noopener">Wikipedia</a>. Los horarios oficiales los publica la <a href="https://www.onda.ma/" target="_blank" rel="noopener">ONDA</a>, gestora del aeropuerto.</p>
`,
  faqHeading: "Destinos desde el aeropuerto de Marrakech: preguntas frecuentes",
  faqs: [
    { q: "¿Cuántos destinos directos hay desde el aeropuerto de Marrakech?", a: "El aeropuerto de Marrakech-Menara tiene vuelos sin escalas a 106 ciudades de 33 países, operados por 39 compañías, incluidas las rutas de temporada. La gran mayoría de los destinos están en Europa." },
    { q: "¿Qué compañías aéreas vuelan a Marrakech?", a: "Ryanair es con diferencia la primera, con más de cincuenta destinos, por delante de easyJet, Transavia y Royal Air Maroc. También vuelan Wizz Air, Vueling, Iberia, Air Europa, Volotea, TUI, British Airways, Air France, Turkish Airlines, Qatar Airways y Air Transat." },
    { q: "¿Qué compañías vuelan directo de Madrid o Barcelona a Marrakech?", a: "Desde Madrid, Ryanair, Iberia y Air Europa. Desde Barcelona, Ryanair, Vueling y Royal Air Maroc. Ryanair vuela además desde Sevilla, Málaga, Valencia, Alicante, Santander, Zaragoza y Girona." },
    { q: "¿Cuánto dura un vuelo Madrid – Marrakech?", a: "Unos 1 h 40 min sin escalas. Desde Barcelona, alrededor de 2 h 15 min; desde Sevilla o Málaga, apenas 1 h 15 min." },
    { q: "¿Hay vuelos directos entre Marrakech y Norteamérica?", a: "Sí: Air Transat vuela a Montreal todo el año, y Delta a Atlanta y United a Nueva York-Newark en temporada. Cuente unas 7 horas de vuelo hasta la costa este." },
    { q: "¿Qué vuelos nacionales salen de Marrakech?", a: "Royal Air Maroc vuela a Casablanca, Dajla y El Aaiún; Ryanair une Fez, Tánger, Tetuán, Uchda y Errachidia. No hay vuelos regulares a Agadir, Esauira ni Uarzazat, a los que se llega por carretera." },
    { q: "¿Se puede ir de Marrakech a Esauira o Agadir en avión?", a: "No, no hay vuelos regulares. Esauira está a 2 h 30 por carretera y Agadir a 3 horas por autopista; un traslado privado o un autobús CTM desde Marrakech es la opción más sencilla." },
    { q: "¿Cambian los destinos según la temporada?", a: "Sí. La programación cambia a finales de marzo y de octubre. El invierno añade rutas al norte de Europa y el verano vuelos a Canarias, Cabo Verde y Dakar. Las rutas de temporada están señaladas en la tabla." },
  ],
  cta: {
    heading: "¿Aterriza en Marrakech? Su conductor le espera",
    text: "Medina, Agafay, Ourika o Esauira: precio fijo por vehículo, seguimiento del vuelo y espera incluida en caso de retraso.",
    label: "Reservar un traslado",
  },
} satisfies LocalizedPage;
