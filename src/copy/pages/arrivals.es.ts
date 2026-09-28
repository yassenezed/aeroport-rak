import type { LocalizedPage } from '../types';

export default {
  title: "Llegadas aeropuerto de Marrakech-Menara (RAK) en directo",
  description: "Llegadas al aeropuerto de Marrakech-Menara en directo: horarios y estado de los vuelos, retrasos, pasaportes, equipaje, y taxi o traslado a la ciudad.",
  eyebrow: "Panel en directo · hora local",
  h1: "Llegadas al aeropuerto de Marrakech-Menara",
  lede: "Siga en tiempo real las llegadas al aeropuerto de Marrakech-Menara (RAK): hora prevista, hora estimada, retrasos y aterrizajes. Debajo, todo lo que ocurre entre la pasarela y la acera, y cómo llegar a la ciudad.",
  widget: 'flights-arrivals',
  highlights: [
    { icon: 'clock', value: "--:--", label: "Hora local", live: 'clock' },
    { icon: 'cloud', value: "— °C", label: "Tiempo en Marrakech", live: 'weather' },
    { icon: 'map-pin', value: "Terminal 1 y 2", label: "Terminales de llegada" },
  ],
  steps: {
    heading: "Del avión a la salida: los 4 pasos de la llegada",
    intro: "El recorrido es el mismo en la terminal 1 y en la terminal 2. Lo que cambia es la afluencia: un vuelo que aterriza a las 22 h no tiene nada que ver con uno de las 14 h.",
    items: [
      { icon: 'passport', title: 'Control de pasaportes', text: "Pasaporte y tarjeta de entrada, repartida a bordo. Sin visado para turistas de la UE, Suiza, Reino Unido, EE. UU. y Canadá (90 días). De 15 a 40 minutos según la hora." },
      { icon: 'luggage', title: 'Recogida de equipaje', text: "Las cintas están justo después del control. El número de cinta aparece en las pantallas; cuente de 20 a 30 minutos en los vuelos de la noche." },
      { icon: 'shield-check', title: 'Aduana', text: "Paso normalmente fluido, con controles aleatorios. El efectivo solo se declara a partir de 100 000 MAD. Drones y walkie-talkies quedan retenidos." },
      { icon: 'door', title: 'Vestíbulo de llegadas', text: "Cajeros, cambio de divisas, tarjetas SIM y alquiler de coches; después, la salida hacia la parada de taxis, los conductores y los parkings." },
    ],
  },
  services: {
    heading: "Tras el aterrizaje: llegar a Marrakech",
    intro: "Las opciones para salir del aeropuerto de Marrakech-Menara y empezar bien la estancia, con precios comprobados.",
    items: [
      { icon: 'van', key: 'bookTransfer', title: 'Traslado privado', text: "Conductor con su nombre, vuelo seguido, precio fijo por vehículo desde 27 €.", cta: 'Reservar' },
      { icon: 'car', key: 'transfers', title: 'Taxi y autobús 19', text: "Tarifas oficiales del taxi de día y de noche, horarios del autobús 19.", cta: 'Ver tarifas' },
      { icon: 'tag', key: 'carRental', title: 'Alquiler de coches', text: "Mostradores en el vestíbulo de llegadas, fianza y trampas del contrato.", cta: 'Comparar' },
      { icon: 'sim', key: 'esim', title: 'eSIM Marruecos', text: "Internet desde el aterrizaje para contactar con su conductor.", cta: 'Elegir una eSIM' },
      { icon: 'wallet', key: 'money', title: 'Dinero y cambio', text: "Cajeros, casas de cambio y qué billetes sacar.", cta: 'Leer la guía' },
      { icon: 'alert', key: 'compensation', title: 'Vuelo retrasado', text: "Hasta 400 € de compensación en la mayoría de vuelos desde Europa.", cta: 'Ver mis derechos' },
    ],
  },
  body: `
<h2>Cómo leer el panel de llegadas del aeropuerto de Marrakech</h2>
<p>El panel de arriba muestra todos los vuelos que llegan al aeropuerto de Marrakech-Menara, de todas las compañías. Los horarios están en <strong>hora local de Marrakech</strong>, no en la hora de la ciudad de salida: es la primera fuente de confusión cuando se va a recoger a alguien.</p>
<ul>
<li><strong>Previsto</strong>: la hora programada por la compañía. No cambia, aunque el vuelo se retrase.</li>
<li><strong>Estimado</strong>: la hora de aterrizaje recalculada en vuelo. Es la que hay que mirar.</li>
<li><strong>Aterrizado</strong>: el avión está en tierra. Sume de 30 a 60 minutos antes de ver salir al pasajero.</li>
<li><strong>Retrasado / Cancelado / Desviado</strong>: contacte con la compañía; un vuelo desviado suele aterrizar en Casablanca o en Agadir.</li>
</ul>
<p>Para un vuelo con salida de Marrakech, consulte el panel de <a href="/es/departures/">salidas del aeropuerto de Marrakech</a>.</p>

<h2>Horarios de llegada: cuándo está más lleno el aeropuerto de Marrakech</h2>
<p>El aeropuerto de Marrakech-Menara recibe sus vuelos por oleadas. Una primera oleada llega a media mañana y a primera hora de la tarde, con los vuelos que salieron temprano de Europa. Pero el verdadero pico se sitúa <strong>entre las 20 h y la medianoche</strong>, cuando las compañías de bajo coste encadenan aterrizajes desde España, Francia, Italia, Bélgica o el Reino Unido. Varios aviones llegan en la misma media hora y la cola del control de pasaportes se alarga.</p>
<p>Si puede elegir, un vuelo que aterrice entre las 13 h y las 17 h le ahorrará media hora a la salida. Si llega por la noche, el servicio de <a href="/es/blog/fast-track-marrakech-airport/">fast track del aeropuerto de Marrakech</a> permite pasar los controles por una fila exclusiva.</p>

<h2>Compañías y orígenes de los vuelos de llegada</h2>
<p>La mayoría de los vuelos que llegan a Marrakech proceden de Europa. Según la temporada, en el panel aparecen <strong>Ryanair</strong>, <strong>Vueling</strong>, <strong>Iberia Express</strong>, <strong>easyJet</strong>, <strong>Royal Air Maroc</strong>, <strong>Transavia</strong>, <strong>Air Europa</strong>, <strong>TUI fly</strong>, <strong>Wizz Air</strong> y <strong>Air France</strong>, entre otras.</p>
<ul>
<li><strong>España</strong>: Madrid, Barcelona, Sevilla, Málaga, Valencia, Bilbao, Palma, Santiago.</li>
<li><strong>Francia y Benelux</strong>: París, Lyon, Marsella, Toulouse, Burdeos, Bruselas, Ámsterdam.</li>
<li><strong>Reino Unido, Italia, Alemania, Suiza</strong>: Londres, Mánchester, Milán, Roma, Bolonia, Múnich, Fráncfort, Ginebra.</li>
<li><strong>Marruecos y Oriente Medio</strong>: Casablanca, además de enlaces de temporada con el Golfo.</li>
</ul>
<p>Para encontrar un vuelo a Marrakech desde su ciudad, use nuestro <a href="/es/flights/">comparador de vuelos</a>.</p>

<h2>Trámites de entrada: pasaporte, visado y tarjeta de policía</h2>
<p>Los ciudadanos de la Unión Europea, Suiza, el Reino Unido, Estados Unidos y Canadá entran en Marruecos <strong>sin visado para una estancia turística de hasta 90 días</strong>, con un pasaporte válido durante toda la estancia. La tarjeta de entrada se reparte a bordo: rellénela durante el vuelo, con la dirección de su alojamiento, para no salir de la cola en el último momento. Los menores que viajan con uno solo de sus padres deben llevar la autorización del otro progenitor.</p>

<h2>Saque dinero antes de salir</h2>
<p>Es el paso que no hay que saltarse. Los taxis no aceptan tarjeta y el dírham no se puede comprar fuera de Marruecos: el vestíbulo de llegadas es su primer punto de cambio. Los cajeros funcionan bien, pero suelen dar billetes de 200 MAD. Saque lo necesario para el trayecto y los primeros días y cambie un billete en la cafetería de la terminal: los billetes de 50 y 100 MAD evitan discutir por el cambio en el taxi. Todos los consejos en nuestra guía de <a href="/es/blog/money-in-morocco/">dinero y cambio en Marruecos</a>.</p>

<h2>Salir del vestíbulo: taxi, traslado o autobús 19</h2>
<p>Le abordarán antes incluso de llegar a la puerta. Rara vez es agresivo, pero conviene preverlo: la parada oficial de taxis está justo delante de la salida y su panel muestra las tarifas por zona. Cualquier oferta hecha <em>dentro</em> de la terminal queda fuera de ese marco.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Opción</th><th>Precio</th><th>Duración</th><th>Ideal para</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong><a href="/es/book-transfer/">Traslado privado</a></strong></td><td class="num">desde 27 € / vehículo</td><td class="num">15–30 min</td><td>Riad en la medina, llegada nocturna, familias</td></tr>
<tr><td><strong>Petit taxi oficial</strong></td><td class="num">100–150 MAD (día)</td><td class="num">15–30 min</td><td>Gueliz, Hivernage de día, máx. 3 personas</td></tr>
<tr><td><strong><a href="/es/blog/bus-19-alsa-marrakech/">Autobús 19 (ALSA)</a></strong></td><td class="num">30 MAD / persona</td><td class="num">≈ 20 min</td><td>Presupuesto ajustado, poco equipaje, antes de las 23:30</td></tr>
</tbody>
</table>
</div>
<p>Para un hotel en Gueliz o el Hivernage de día, basta con el taxi: acuerde la tarifa del panel antes de abrir el maletero (vea nuestros <a href="/es/blog/taxi-tips-marrakech/">consejos sobre taxis en Marrakech</a>). Para un riad en la medina, un vuelo después de las 21 h o un grupo de cuatro o más, el <a href="/es/book-transfer/">traslado reservado</a> fija de antemano el precio, el vehículo y la puerta de llegada. Todos los detalles en la página de <a href="/es/transfers/">traslados desde el aeropuerto</a>.</p>

<h2>Esperar a alguien en llegadas</h2>
<p>¿Va a recoger a alguien al aeropuerto de Marrakech? Siga el vuelo en el panel de llegadas y salga de casa según la hora <em>estimada</em>, no la prevista. Solo los pasajeros entran en la zona de equipajes: la espera se hace en el vestíbulo público, frente a las puertas de salida. Llegue entre 20 y 30 minutos después del aterrizaje. En coche, la zona de parada es solo para paradas breves; para esperar, use el <a href="/es/parking/">parking del aeropuerto</a>, a pocos minutos a pie de la terminal.</p>

<div class="callout">
<span class="callout-label">El gesto que ahorra veinte minutos</span>
<p>Si le espera un conductor (traslado reservado o recogida del riad), el punto de encuentro está delante del vestíbulo de llegadas, con un cartel con su nombre. Escríbale en cuanto tenga cobertura, incluso antes de la aduana: una <a href="/es/morocco-esim/">eSIM para Marruecos</a> activada antes de salir le evita buscar el wifi de la terminal.</p>
</div>

<h2>Llegar de noche a Marrakech</h2>
<p>Buena parte de los vuelos de bajo coste aterrizan entre las 21 h y la 1 h. Tres consecuencias prácticas: el taxi pasa a la tarifa nocturna, de 150 a 240 MAD; el autobús 19 deja de circular después de las 23:30; y los callejones poco iluminados de la medina no son el lugar para buscar un riad con la maleta. Si su vuelo aterriza tarde, reservar un traslado no es un lujo: el conductor sigue el número de vuelo y espera en caso de retraso.</p>

<h2>Vuelo retrasado, cancelado o desviado</h2>
<p>Si su vuelo llega a Marrakech con más de tres horas de retraso, puede tener derecho a una compensación según el Reglamento europeo 261/2004: cubre todos los vuelos que salen de la Unión Europea, sea cual sea la compañía. Para un trayecto de 1 500 a 3 500 km, como Madrid–Marrakech, el importe es de <strong>400 € por pasajero</strong>. Compruebe sus derechos en nuestra página de <a href="/es/flight-compensation/">compensación por vuelos</a>. El aeropuerto lo gestiona la <a href="https://www.onda.ma/" target="_blank" rel="noopener">Office National des Aéroports (ONDA)</a>, que también publica la información oficial de los vuelos.</p>
<p>Para las terminales, los servicios y el plano de la terminal, consulte nuestra <a href="/es/airport-guide/">guía del aeropuerto de Marrakech</a>.</p>
`,
  faqHeading: "Llegadas al aeropuerto de Marrakech: preguntas frecuentes",
  faqs: [
    { q: "¿Cómo saber la hora de llegada de un vuelo a Marrakech?", a: "El panel de llegadas de esta página muestra en tiempo real la hora prevista, la hora estimada y el estado de cada vuelo en el aeropuerto de Marrakech-Menara. Los horarios están en hora local de Marrakech. Fíese de la hora estimada, recalculada durante el vuelo." },
    { q: "¿Cuánto se tarda en salir del aeropuerto de Marrakech tras aterrizar?", a: "En la práctica, de 30 a 60 minutos: el control de pasaportes lleva de 15 a 40 minutos según la afluencia y el equipaje de 20 a 30 minutos en los vuelos de la noche. Las llegadas entre las 20 h y la medianoche son las más concurridas." },
    { q: "¿Hay que rellenar una tarjeta de entrada en Marrakech?", a: "Sí, se exige una tarjeta de policía a la llegada. Se reparte a bordo en la mayoría de los vuelos: rellénela durante el vuelo, con la dirección de su alojamiento en Marrakech." },
    { q: "¿Hay cajeros en el vestíbulo de llegadas?", a: "Sí, hay varios cajeros y casas de cambio en el vestíbulo público, después de la aduana. Saque dinero antes de salir: los taxis no aceptan tarjeta y el dírham no se puede comprar fuera de Marruecos." },
    { q: "¿Dónde esperar a alguien que llega al aeropuerto de Marrakech?", a: "En el vestíbulo público de llegadas, frente a las puertas de salida: solo los pasajeros acceden a los equipajes. Llegue entre 20 y 30 minutos después del aterrizaje indicado en el panel. En coche, use el parking del aeropuerto y no la zona de parada breve." },
    { q: "¿Dónde encuentro al conductor de mi traslado en Marrakech-Menara?", a: "Delante del vestíbulo de llegadas: el conductor lleva un cartel con su nombre y el bono de confirmación indica el punto de encuentro. Sigue su número de vuelo y espera en caso de retraso." },
    { q: "Mi vuelo llega después de medianoche: ¿sigue habiendo taxis?", a: "Sí, la parada funciona mientras haya vuelos. La tarifa pasa simplemente a la nocturna, de 150 a 240 MAD hacia la medina, Gueliz y el Hivernage. El autobús 19 termina a las 23:30." },
    { q: "Mi vuelo a Marrakech llegó con retraso: ¿tengo derecho a compensación?", a: "Si el retraso a la llegada supera las tres horas y el vuelo salió de la Unión Europea, el Reglamento 261/2004 prevé 400 € por pasajero para un trayecto de 1 500 a 3 500 km, salvo circunstancias extraordinarias como la meteorología." },
  ],
  cta: {
    heading: "Un conductor que espera su vuelo, y no al revés",
    text: "Seguimiento del número de vuelo, espera incluida en caso de retraso, precio fijo por vehículo hasta siete pasajeros y llegada a la puerta de la medina más cercana a su riad.",
    label: 'Reservar un traslado',
  },
} satisfies LocalizedPage;
