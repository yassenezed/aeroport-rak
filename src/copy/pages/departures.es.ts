import type { LocalizedPage } from '../types';

export default {
  title: "Salidas aeropuerto de Marrakech-Menara (RAK) en directo",
  description: "Salidas del aeropuerto de Marrakech-Menara en directo: estado de los vuelos, a qué hora llegar, facturación, controles, devolución del IVA y acceso.",
  eyebrow: "Panel en directo · hora local",
  h1: "Salidas aeropuerto Marrakech-Menara",
  lede: "Siga en tiempo real las salidas del aeropuerto de Marrakech-Menara (RAK): horarios, puertas, retrasos y cancelaciones. Debajo: a qué hora llegar, cómo son los controles y cómo llegar a la terminal sin estrés.",
  widget: 'flights-departures',
  highlights: [
    { icon: 'clock', value: "--:--", label: "Hora local", live: 'clock' },
    { icon: 'clipboard', value: "Abre 3 h antes del vuelo", label: "Facturación" },
    { icon: 'log-out', value: "45 min antes del despegue", label: "Embarque" },
  ],
  steps: {
    heading: "Salida del aeropuerto de Marrakech-Menara: los 5 pasos",
    intro: "El recorrido es el mismo en la terminal 1 y en la terminal 2. Cuente de 1 h a 1 h 30 entre la entrada de la terminal y la puerta de embarque en horas punta.",
    items: [
      { icon: 'door', title: "Acceso a la terminal", text: "Desde marzo de 2025 ya no hay escáner en la entrada de la terminal: se accede directamente al vestíbulo de facturación. Tenga a mano el pasaporte y la tarjeta de embarque." },
      { icon: 'clipboard', title: "Facturación en el aeropuerto de Marrakech-Menara", text: "Mostradores abiertos normalmente 3 h antes de los vuelos internacionales y cerrados 45 a 60 min antes. Las maletas se dejan en el mostrador, aunque haya facturado en línea." },
      { icon: 'passport', title: "Control de pasaportes", text: "La etapa más larga. Se revisan el pasaporte y el sello de entrada, sin formulario que rellenar." },
      { icon: 'shield-check', title: "Seguridad", text: "Líquidos limitados a 100 ml por envase en una bolsa transparente; portátil y tableta fuera de la mochila." },
      { icon: 'plane-takeoff', title: "Puerta de embarque", text: "Tiendas libres de impuestos, cafeterías y salas VIP, y después la puerta. El embarque empieza unos 45 min antes del despegue." },
    ],
  },
  services: {
    heading: "Preparar la salida de Marrakech",
    intro: "Llegar a tiempo a la terminal, esperar con calma y volver tranquilo.",
    items: [
      { icon: 'van', key: 'bookTransfer', title: "Traslado al aeropuerto", text: "Recogida en el riad o el hotel, precio fijo incluso a las 5 de la mañana.", cta: "Reservar" },
      { icon: 'car', key: 'transfers', title: "Taxi y autobús 19", text: "Precio del taxi desde la medina y horarios del autobús 19 al aeropuerto.", cta: "Ver tarifas" },
      { icon: 'parking', key: 'parking', title: "Parking del aeropuerto de Marrakech", text: "Tarifas por hora y por día, y dónde dejar a un pasajero.", cta: "Ver el parking" },
      { icon: 'star', key: 'vipLounges', title: "Salas VIP del aeropuerto de Marrakech-Menara", text: "Acceso, precios y servicios de las salas de la zona de embarque.", cta: "Descubrir" },
      { icon: 'shield-check', key: 'fastTrack', title: "Fast track", text: "Pasar los controles por una fila exclusiva en horas punta.", cta: "Más información" },
      { icon: 'alert', key: 'compensation', title: "Vuelo retrasado o cancelado", text: "Sus derechos y la posible compensación según la compañía.", cta: "Ver mis derechos" },
    ],
  },
  body: `
<h2>Cómo leer el panel de salidas del aeropuerto de Marrakech-Menara</h2>
<p>El panel de arriba muestra todos los vuelos que salen del aeropuerto de Marrakech-Menara, en <strong>hora local de Marrakech</strong>. Cada línea indica la hora prevista, el destino, el número de vuelo, la compañía y el estado, actualizado de forma continua.</p>
<ul>
<li><strong>Previsto / En hora</strong>: el vuelo sale según lo programado. La facturación puede no estar abierta todavía.</li>
<li><strong>Facturación</strong>: los mostradores están abiertos; vaya directamente si lleva equipaje en bodega.</li>
<li><strong>Embarque / Última llamada</strong>: los pasajeros suben a bordo. En la última llamada, la puerta cierra en pocos minutos.</li>
<li><strong>Retrasado / Cancelado</strong>: la hora estimada sustituye a la prevista. Siga las instrucciones de la compañía por SMS o en su aplicación.</li>
<li><strong>Despegado</strong>: el avión ha dejado la puerta.</li>
</ul>
<p>Para seguir un vuelo que llega a Marrakech, consulte el panel de <a href="/es/arrivals/">llegadas del aeropuerto de Marrakech</a>.</p>

<h2>¿A qué hora llegar al aeropuerto para un vuelo desde Marrakech?</h2>
<p>La regla que funciona: <strong>de 2 h 30 a 3 horas antes de un vuelo a Europa</strong>, 3 horas en temporada alta o si lleva equipaje en bodega. Lo que retrasa no es la facturación, sino el control de pasaportes y el de seguridad, el cuello de botella del aeropuerto.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Tipo de vuelo</th><th>Llegada recomendada</th><th>Por qué</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Europa, con maleta facturada</strong></td><td class="num">3 h antes</td><td>Entrega del equipaje, pasaportes y seguridad</td></tr>
<tr><td><strong>Europa, solo equipaje de mano</strong></td><td class="num">2 h 30 antes</td><td>Tarjeta de embarque en línea, pero los mismos controles</td></tr>
<tr><td><strong>Temporada alta, vacaciones, Ramadán</strong></td><td class="num">3 h 30 antes</td><td>Colas más largas en pasaportes</td></tr>
<tr><td><strong>Vuelo nacional (Casablanca…)</strong></td><td class="num">1 h 30 antes</td><td>Sin control de pasaportes</td></tr>
</tbody>
</table>
</div>
<p>Los mostradores cierran normalmente de 45 a 60 minutos antes del despegue y la puerta de embarque, 20 minutos antes. Quien llega demasiado tarde pierde el vuelo, aunque el avión siga en tierra.</p>

<h2>Las horas punta de salida</h2>
<p>Dos oleadas de salidas saturan la terminal. La primera, <strong>entre las 6 y las 9 h</strong>, corresponde a los aviones que han pasado la noche en Marrakech y vuelven temprano a Europa. La segunda se forma a última hora de la tarde y por la noche, cuando las rotaciones de bajo coste salen en serie. Si su vuelo cae en una de estas franjas, añada media hora o reserve el <a href="/es/blog/fast-track-marrakech-airport/">fast track del aeropuerto de Marrakech</a>, que le hace pasar por una fila exclusiva.</p>

<h2>Terminal 1 o terminal 2: ¿dónde presentarse?</h2>
<p>El aeropuerto de Marrakech-Menara tiene dos terminales contiguas, comunicadas a pie. La <strong>terminal 1</strong> recibe la mayoría de los vuelos internacionales; la <strong>terminal 2</strong>, el resto del tráfico, incluidos parte de los vuelos nacionales y chárter. La asignación varía según la compañía y la temporada: la terminal figura en su tarjeta de embarque y en el panel de salidas. En caso de duda, vaya a la T1: la T2 está a pocos minutos a pie. El plano detallado está en nuestra <a href="/es/airport-guide/">guía del aeropuerto de Marrakech</a>.</p>

<h2>Cómo llegar al aeropuerto de Marrakech para su vuelo</h2>
<p>El aeropuerto está a 6 km de la medina, de 15 a 30 minutos por carretera según la hora. Añada el tiempo de ir a pie hasta la puerta de la medina más cercana a su riad, con las maletas.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Opción</th><th>Precio</th><th>Duración</th><th>Conviene saber</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong><a href="/es/book-transfer/">Traslado reservado</a></strong></td><td class="num">desde 27 € / vehículo</td><td class="num">15–30 min</td><td>Recogida a la hora acordada, incluso antes del amanecer</td></tr>
<tr><td><strong>Petit taxi</strong></td><td class="num">70–150 MAD (día)</td><td class="num">15–30 min</td><td>Más caro de noche; fije el precio antes de subir</td></tr>
<tr><td><strong><a href="/es/blog/bus-19-alsa-marrakech/">Autobús 19 (ALSA)</a></strong></td><td class="num">30 MAD / persona</td><td class="num">≈ 20 min</td><td>Desde Jemaa el-Fna y Gueliz, sin servicio de madrugada</td></tr>
<tr><td><strong>Coche de alquiler</strong></td><td class="num">—</td><td class="num">15–30 min</td><td>Cuente 30 min más para la devolución</td></tr>
</tbody>
</table>
</div>
<p>Para un vuelo antes de las 9 h, reserve su trayecto <strong>la víspera</strong>, con el riad o como <a href="/es/book-transfer/">traslado</a>: encontrar un taxi a las 5 de la mañana en un callejón no es nada evidente, y la tarifa nocturna se aplica hasta el amanecer. Los detalles de tarifas están en la página de <a href="/es/transfers/">traslados y taxis del aeropuerto</a> y en nuestros <a href="/es/blog/taxi-tips-marrakech/">consejos sobre taxis en Marrakech</a>.</p>

<h2>Dejar a un pasajero o aparcar</h2>
<p>La zona de parada breve delante de la terminal es solo para paradas muy cortas. Para acompañar a alguien hasta el mostrador, use el <a href="/es/parking/">parking del aeropuerto</a>: 6 MAD la primera hora, 42 MAD de 12 a 24 horas.</p>

<h2>Dírhams, recuerdos y equipaje: lo que hay que saber</h2>
<p>Los dírhams no pueden sacarse del país más allá de una cantidad simbólica: cambie sus últimos billetes <em>antes</em> del control de pasaportes, en las casas de cambio del vestíbulo público, y guarde el recibo de su cambio inicial. En cuanto a los recuerdos, el aceite de argán, las especias y los cosméticos en envases de más de 100 ml van en bodega, sin excepción. La cerámica viaja mal sin un buen embalaje; la mayoría de los vendedores de la medina saben preparar un paquete para el avión. Más consejos en nuestra guía de <a href="/es/blog/money-in-morocco/">dinero y cambio en Marruecos</a>.</p>
<div class="callout">
<span class="callout-label">Devolución del IVA</span>
<p>Marruecos devuelve el IVA a los no residentes en ciertas compras realizadas en comercios autorizados. El formulario debe sellarse en el mostrador de aduanas del aeropuerto <strong>antes</strong> de facturar el equipaje, con la mercancía disponible para su inspección. Tiene sentido para una alfombra o una pieza de orfebrería, rara vez para unas babuchas.</p>
</div>

<h2>En la zona de embarque: tiendas, salas VIP y wifi</h2>
<p>Tras la seguridad, la zona de embarque ofrece tiendas libres de impuestos, cafeterías y restaurantes, además de wifi gratuito, a veces saturado en horas punta. Se llena a las mismas horas que las colas: si sale a última hora del día o tiene una conexión larga, el acceso a una de las <a href="/es/blog/marrakech-airport-vip-lounges/">salas VIP del aeropuerto de Marrakech</a> cambia la espera.</p>

<h2>Vuelo retrasado o cancelado con salida de Marrakech</h2>
<p>Para los vuelos que salen de Marruecos, el Reglamento europeo 261/2004 se aplica si la compañía es europea (Ryanair, Vueling, Iberia Express, easyJet, Transavia…): con más de tres horas de retraso a la llegada, la compensación es de <strong>250 € por pasajero</strong> en trayectos de menos de 1 500 km, como Marrakech–Madrid, y de <strong>400 €</strong> entre 1 500 y 3 500 km, como Marrakech–París. Las compañías no europeas con salida de Marrakech no están sujetas a él. Compruebe su caso en nuestra página de <a href="/es/flight-compensation/">compensación por vuelos</a>. El aeropuerto lo gestiona la <a href="https://www.onda.ma/" target="_blank" rel="noopener">Office National des Aéroports (ONDA)</a>.</p>
`,
  faqHeading: "Salidas del aeropuerto de Marrakech: preguntas frecuentes",
  faqs: [
    { q: "¿Con cuánta antelación debo llegar al aeropuerto de Marrakech?", a: "De 2 h 30 a 3 horas antes de un vuelo a Europa, 3 h 30 en temporada alta. El control de pasaportes a la salida es el punto de congestión, sobre todo entre las 6 y las 9 h y a última hora de la tarde. Para un vuelo nacional basta con 1 h 30." },
    { q: "¿A qué hora abre la facturación en el aeropuerto de Marrakech?", a: "Normalmente 3 horas antes de los vuelos internacionales, y cierra de 45 a 60 minutos antes de la salida según la compañía. Aunque haya facturado en línea, el equipaje de bodega se entrega en el mostrador." },
    { q: "¿De qué terminal sale mi vuelo en Marrakech-Menara?", a: "La mayoría de los vuelos internacionales salen de la terminal 1; la terminal 2 recibe parte de los vuelos nacionales y chárter. La terminal figura en su tarjeta de embarque y en el panel de salidas; ambas terminales están comunicadas a pie." },
    { q: "¿Se pueden sacar dírhams de Marruecos?", a: "No, el dírham no se puede exportar más allá de una cantidad simbólica. Cambie sus billetes en las casas de cambio del vestíbulo público, antes del control de pasaportes, y guarde el recibo de su cambio inicial." },
    { q: "¿Se puede llevar aceite de argán en el equipaje de mano?", a: "Solo en envases de 100 ml o menos, dentro de una bolsa de plástico transparente. Por encima, el aceite de argán, las especias líquidas y los cosméticos van en bodega. Las compras hechas en la zona libre de impuestos tras la seguridad no están afectadas." },
    { q: "¿Cuánto cuesta un taxi de la medina al aeropuerto de Marrakech?", a: "Cuente de 70 a 150 MAD de día en petit taxi, más de noche; fije el precio antes de subir. Para una salida de madrugada, reserve la víspera un traslado o el conductor de su riad." },
    { q: "¿Hay devolución del IVA en el aeropuerto de Marrakech?", a: "Sí, para no residentes, en compras realizadas en comercios autorizados. El formulario debe sellarse en el mostrador de aduanas antes de facturar el equipaje, con la mercancía disponible." },
    { q: "Mi vuelo desde Marrakech se retrasa: ¿tengo derecho a compensación?", a: "Sí si la compañía es europea y el retraso a la llegada supera las tres horas: 250 € por pasajero en trayectos de menos de 1 500 km, como a Madrid, y 400 € entre 1 500 y 3 500 km, salvo circunstancias extraordinarias. Las compañías no europeas con salida de Marruecos no están sujetas al Reglamento 261/2004." },
  ],
  cta: {
    heading: "Su trayecto al aeropuerto, resuelto la víspera",
    text: "Un conductor en la puerta correcta de la medina a la hora acordada, precio fijo, incluso a las 5 de la mañana. Cancelación gratuita en la mayoría de las reservas.",
    label: "Reservar mi traslado de vuelta",
  },
} satisfies LocalizedPage;
