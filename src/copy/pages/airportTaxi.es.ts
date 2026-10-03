import type { LocalizedPage } from '../types';

export default {
  title: "Taxi aeropuerto de Marrakech-Menara: precios 2026",
  description: "Taxi en el aeropuerto de Marrakech-Menara: precios expuestos a la medina (100–150 MAD de día, 150–240 de noche), taxi pequeño o grande, pago y trampas.",
  eyebrow: "Taxi · tarifas expuestas en la parada",
  h1: "Taxi en el aeropuerto de Marrakech-Menara: precios y funcionamiento",
  lede: "La parada de taxis está justo delante de la sala de llegadas, abierta día y noche, y Marrakech expone allí sus tarifas por zonas. Estos son los precios reales, el tamaño de coche adecuado y la frase que evita malentendidos antes de cargar las maletas.",
  highlights: [
    { icon: 'sun', value: "100–150 MAD", label: "A la medina, de día (el coche)" },
    { icon: 'moon', value: "150–240 MAD", label: "El mismo trayecto de noche" },
    { icon: 'users', value: "3 o 6", label: "Pasajeros: taxi pequeño o grande" },
    { icon: 'clock', value: "24 h", label: "Parada frente a llegadas" },
  ],
  widget: 'transfer',
  widgetIntro: {
    heading: "¿Prefiere un precio fijo? Compare con un traslado",
    text: "Desde 27 € (≈ 290 MAD) por vehículo hasta 7 pasajeros, conductor con cartel y vuelo seguido: a menudo más barato que un taxi de noche o entre cuatro.",
  },
  cardSections: [
    {
      eyebrow: "Taxi pequeño o grande",
      heading: "¿Qué taxi tomar en el aeropuerto de Marrakech-Menara?",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Petit taxi", text: "La berlina beige de Marrakech, limitada a 3 pasajeros y a la ciudad. La opción adecuada para dos o tres con poco equipaje.", tags: ["3 pasajeros máx.", "Medina, Guéliz, Hivernage"] },
        { icon: 'van', title: "Grand taxi", text: "Hasta 6 pasajeros y un maletero de verdad. También hace trayectos fuera de la ciudad: Ourika, Agafay, Esauira.", tags: ["6 pasajeros máx.", "Ciudad y alrededores"] },
        { icon: 'shield-check', title: "Traslado reservado", text: "Precio fijo por vehículo, conductor que le espera con su nombre y parada en la puerta correcta de la medina.", tags: ["Hasta 7 pasajeros", "Desde 27 €"], link: { key: 'bookTransfer', label: "Ver precios" } },
      ],
    },
  ],
  steps: {
    heading: "Tomar un taxi en el aeropuerto en 4 pasos",
    items: [
      { icon: 'wallet', title: "Saque dírhams", text: "Antes de salir, en el cajero de la sala de llegadas: los taxis no aceptan tarjeta." },
      { icon: 'map-pin', title: "Vaya a la parada", text: "Salga de la sala: la parada está justo enfrente. Ignore a los ganchos que le abordan dentro." },
      { icon: 'board', title: "Lea el panel", text: "Las tarifas se exponen por zonas: compruebe la de su destino, de día o de noche." },
      { icon: 'check', title: "Confirme antes de cargar", text: "Indique el destino y el precio del panel, y cargue el equipaje una vez de acuerdo." },
    ],
  },
  body: `
<h2>Precios del taxi en el aeropuerto de Marrakech-Menara por destino</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Destino</th><th>Día</th><th>Noche</th><th>Trayecto</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Medina, Guéliz, Hivernage</strong></td><td class="num">100–150 MAD</td><td class="num">150–240 MAD</td><td>15–25 min</td></tr>
<tr><td><strong>Palmeraie</strong></td><td colspan="2">Más caro: compruebe el importe del panel</td><td>25–35 min</td></tr>
<tr><td><strong>Agafay, Ourika, Esauira</strong></td><td colspan="2">Grand taxi, precio pactado antes de salir</td><td>40 min a 3 h</td></tr>
</tbody>
</table>
</div>
<p class="small">Precios por coche entero, no por pasajero, comprobados en 2026. Prevalece el panel de la parada.</p>

<h2>La frase que evita malentendidos</h2>
<p>«Medina, Bab Doukkala: son 100 dírhams, como en el panel, ¿verdad?» Nombrar la puerta de la medina, citar el panel y confirmar el importe <strong>antes de abrir el maletero</strong> resuelve la mayoría de los conflictos. Si un conductor se niega, el siguiente aceptará: siempre hay cola.</p>
<div class="callout">
<span class="callout-label">Billetes pequeños</span>
<p>Los cajeros suelen dar billetes de 200 MAD, que los conductores cambian con dificultad. Rómpalo en la cafetería de la terminal para tener billetes de 50 y 100 MAD.</p>
</div>

<h2>De Marrakech al aeropuerto</h2>
<p>Para la vuelta, un petit taxi tomado en la ciudad cuesta en general <strong>de 70 a 150 MAD de día</strong> desde la medina, a pactar antes de subir porque el taxímetro rara vez se pone. A primera hora no hay taxis en los callejones: pida a su riad que reserve uno o reserve un <a href="/es/book-transfer/">traslado</a> de ida y vuelta.</p>

<h2>¿Taxi o traslado?</h2>
<p>El taxi es imbatible para dos de día. El <a href="/es/book-transfer/">traslado reservado</a> gana <strong>de noche</strong>, <strong>a partir de cuatro personas</strong> (un petit taxi solo lleva tres) y para un <strong>riad difícil de encontrar</strong>, porque el conductor conoce la puerta más cercana. Compare también el <a href="/es/blog/bus-19-alsa-marrakech/">bus 19</a> por 30 MAD y todas las opciones en nuestra página de <a href="/es/transfers/">traslados</a>.</p>

<h2>¿Uber, Careem o inDrive en el aeropuerto?</h2>
<p>No cuente con ellos para su llegada: Uber volvió a Marrakech a finales de noviembre de 2025, pero solo con transportistas turísticos autorizados y una disponibilidad irregular, mientras Careem e inDrive operan en un marco poco claro. La parada de taxis y el traslado reservado siguen siendo lo fiable.</p>
`,
  faqHeading: "Taxi en el aeropuerto de Marrakech-Menara: preguntas frecuentes",
  faqs: [
    { q: "¿Cuánto cuesta un taxi del aeropuerto de Marrakech a la medina?", a: "De 100 a 150 MAD de día y de 150 a 240 MAD de noche a la medina, Guéliz o el Hivernage, según el panel de la parada. Es el precio del coche entero, no por pasajero." },
    { q: "¿Dónde se toma un taxi en el aeropuerto de Marrakech?", a: "En la parada situada justo delante de la sala de llegadas, abierta las 24 horas. Ignore a quienes le ofrecen un taxi dentro de la terminal: los taxis solo se toman en la parada." },
    { q: "¿El taxi del aeropuerto usa taxímetro?", a: "No: desde el aeropuerto se aplica una tarifa fija expuesta por zonas. Confirme el precio del panel con el conductor antes de cargar el equipaje." },
    { q: "¿Cuántos pasajeros caben en un taxi de Marrakech?", a: "Tres como máximo en un petit taxi y hasta seis en un grand taxi. Cuatro con maletas: pida directamente un grand taxi o reserve un traslado de hasta 7 plazas." },
    { q: "¿Se puede pagar el taxi con tarjeta?", a: "No, solo en efectivo y en dírhams. Saque dinero en el cajero de la sala de llegadas y lleve billetes de 50 y 100 MAD." },
    { q: "¿Cuánto cuesta un taxi de Marrakech al aeropuerto?", a: "En general de 70 a 150 MAD de día desde la medina, a pactar antes de subir. Para una salida muy temprana, pida a su riad que lo reserve o reserve un traslado." },
    { q: "¿Hay taxis de noche en el aeropuerto de Marrakech?", a: "Sí, la parada funciona las 24 horas con tarifa nocturna (150 a 240 MAD a la medina). Para un vuelo tardío, un traslado reservado le espera aunque llegue con retraso." },
    { q: "¿Taxi o traslado desde el aeropuerto de Marrakech?", a: "El taxi para dos de día; el traslado de noche, a partir de cuatro personas o para un riad en plena medina. Desde 27 € por vehículo, suele ser lo más barato en esos casos." },
  ],
  cta: {
    heading: "¿No quiere negociar a la una de la madrugada?",
    text: "Un precio fijo cerrado antes de salir, un conductor que le espera con su nombre y conoce la puerta correcta de la medina.",
    label: "Reservar un traslado",
    secondary: { label: "Comparar taxi, bus y traslado", key: 'transfers' },
  },
} satisfies LocalizedPage;
