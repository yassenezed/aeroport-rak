import type { LocalizedPage } from '../types';

export default {
  title: "Reservar traslado aeropuerto Marrakech-Menara desde 27 €",
  description: "Traslado privado en el aeropuerto de Marrakech-Menara: precio fijo por vehículo hasta 7 plazas, conductor con cartel, vuelo seguido y cancelación gratuita.",
  eyebrow: "Traslado privado · reserva en línea",
  h1: "Reservar un traslado aeropuerto Marrakech-Menara",
  lede: "Indique su destino y la hora de aterrizaje: el precio se muestra por vehículo, no por pasajero. Un conductor le espera a la salida de llegadas con su nombre y le deja en la puerta de la medina más cercana a su riad.",
  highlights: [
    { icon: 'wallet', value: "Desde 27 €", label: "Por vehículo, medina y Guéliz" },
    { icon: 'users', value: "Hasta 7", label: "Pasajeros en monovolumen" },
    { icon: 'clock', value: "90 min", label: "De espera gratuita tras aterrizar" },
    { icon: 'shield-check', value: "24 h", label: "Cancelación gratuita (mayoría de ofertas)" },
  ],
  widget: 'transfer',
  cardSections: [
    {
      eyebrow: "Incluido en la reserva",
      heading: "Por qué reservar su traslado en el aeropuerto de Marrakech-Menara",
      intro: "Lo que obtiene además de lo que ofrece un taxi de la parada.",
      variant: 'feature',
      items: [
        { icon: 'wallet', title: "Precio fijo por vehículo", text: "Conocido antes de viajar, equipaje incluido. Nada que negociar al llegar, ni siquiera a las dos de la madrugada.", tags: ["Sin sorpresas"] },
        { icon: 'users', title: "Conductor con cartel", text: "Le espera a la salida de la sala de llegadas con su nombre y le ayuda con las maletas.", tags: ["Recibimiento personal"] },
        { icon: 'plane-landing', title: "Vuelo seguido en tiempo real", text: "Su número de vuelo se sigue: si se retrasa, la hora de recogida se ajusta sin suplemento.", tags: ["Retrasos cubiertos"] },
        { icon: 'door', title: "Parada en la puerta correcta", text: "El conductor para en la bab más cercana a su riad, la que le haya indicado su alojamiento.", tags: ["Medina"] },
        { icon: 'baby', title: "Silla infantil bajo petición", text: "Indíquela al reservar con la edad del niño. Los taxis de la parada casi nunca la tienen.", tags: ["Familias"] },
        { icon: 'moon', title: "Vuelta al aeropuerto", text: "A las 5 de la mañana no hay taxis esperando en la medina. Reservar ida y vuelta resuelve también la salida.", tags: ["Ida y vuelta"] },
      ],
    },
  ],
  steps: {
    heading: "Reservar en tres pasos",
    intro: "Bastan dos minutos si tiene a mano su número de vuelo.",
    items: [
      { icon: 'map-pin', title: "Elija el trayecto", text: "En el formulario de arriba, deje «Aeropuerto Marrakech Menara» como origen e indique su riad, hotel o ciudad de destino." },
      { icon: 'clipboard', title: "Añada vuelo y pasajeros", text: "Número de vuelo, pasajeros y maletas, silla infantil si la necesita, y un número de WhatsApp en el que localizarle." },
      { icon: 'users', title: "Encuentre a su conductor", text: "Tras la aduana, salga de la sala de llegadas: el conductor le espera con un cartel con su nombre." },
    ],
  },
  body: `
<h2>Precios de los traslados desde el aeropuerto de Marrakech-Menara</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Destino</th><th>Distancia</th><th>Trayecto</th><th>Precio por vehículo</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Medina, Guéliz, Hivernage</strong></td><td class="num">6–8 km</td><td>15–25 min</td><td class="num">desde 27 €</td></tr>
<tr><td><strong>Palmeraie</strong></td><td class="num">≈ 15 km</td><td>25–35 min</td><td>indicado en el formulario</td></tr>
<tr><td><strong>Desierto de Agafay</strong></td><td class="num">≈ 35 km</td><td>40–50 min</td><td>indicado en el formulario</td></tr>
<tr><td><strong>Valle del Ourika, Imlil</strong></td><td class="num">≈ 65 km</td><td>1 h 15–1 h 30</td><td>indicado en el formulario</td></tr>
<tr><td><strong>Esauira</strong></td><td class="num">≈ 185 km</td><td>2 h 30–3 h</td><td class="num">≈ 95 €</td></tr>
</tbody>
</table>
</div>
<p>El precio es <strong>por vehículo</strong>, hasta siete pasajeros en monovolumen, no por persona. Para cualquier otro destino, introdúzcalo en el formulario: la tarifa exacta aparece antes del pago.</p>

<h2>Elegir el vehículo adecuado</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Vehículo</th><th>Pasajeros</th><th>Maletas</th><th>Para quién</th></tr></thead>
<tbody>
<tr><td><strong>Berlina</strong></td><td class="num">1–3</td><td class="num">2–3</td><td>Pareja o trío con una maleta cada uno</td></tr>
<tr class="row-highlight"><td><strong>Monovolumen</strong></td><td class="num">4–7</td><td class="num">5–7</td><td>Familia o grupo de amigos, el mejor precio por plaza</td></tr>
<tr><td><strong>Minibús</strong></td><td class="num">8–15</td><td class="num">10+</td><td>Grupos, eventos, bodas</td></tr>
<tr><td><strong>4x4 o furgoneta premium</strong></td><td class="num">1–6</td><td class="num">4–6</td><td>Campamentos de Agafay, viajes de negocios</td></tr>
</tbody>
</table>
</div>
<p>Como la tarifa es por vehículo, un monovolumen para cuatro o cinco sale mucho más barato por persona que dos petits taxis, limitados a tres pasajeros cada uno. Para comparar con el taxi y el bus 19, vea nuestra <a href="/es/transfers/">comparativa de transportes</a>.</p>

<h2>Qué tener preparado</h2>
<p>Su <strong>número de vuelo</strong> y la hora de aterrizaje; el <strong>nombre exacto de su riad u hotel</strong>; para la medina, la <strong>puerta de parada</strong> que le haya indicado su alojamiento; el número de pasajeros y maletas; un <strong>teléfono localizable en Marruecos</strong>, preferiblemente WhatsApp, que usan la mayoría de conductores.</p>
<div class="callout">
<span class="callout-label">Reserve en los dos sentidos</span>
<p>La vuelta al aeropuerto suele ser más complicada que la llegada: de madrugada no hay taxis en los callejones de la medina. Reservar ida y vuelta de una vez suele costar menos que dos trayectos por separado.</p>
</div>

<h2>Temporada alta en el aeropuerto de Marrakech-Menara: reserve pronto</h2>
<p>Las vacaciones escolares europeas, los puentes de primavera, el Marathon des Sables y las fiestas de fin de año agotan primero los vehículos grandes. Si viajan cinco o más entre diciembre y abril, reserve con varias semanas de antelación para no repartir al grupo en varios coches.</p>
`,
  faqHeading: "Traslado aeropuerto Marrakech-Menara: preguntas frecuentes",
  faqs: [
    { q: "¿El precio es por persona o por vehículo?", a: "Por vehículo. Un traslado de 27 € a la medina cubre hasta siete pasajeros en monovolumen, equipaje incluido. A partir de cuatro personas sale mucho más barato que dos petits taxis, limitados a tres pasajeros." },
    { q: "¿Qué pasa si mi vuelo se retrasa?", a: "El conductor sigue su número de vuelo y ajusta la hora de recogida. La mayoría de ofertas incluyen hasta 90 minutos de espera gratuita tras el aterrizaje, el tiempo del control de pasaportes y el equipaje." },
    { q: "¿Dónde me espera el conductor en el aeropuerto de Marrakech?", a: "A la salida de la sala de llegadas, con un cartel con su nombre. El punto exacto figura en su bono de confirmación. Escríbale en cuanto tenga cobertura." },
    { q: "¿Se puede cancelar un traslado reservado?", a: "Con la mayoría de operadores, sí: cancelación gratuita hasta 24 horas antes de la recogida, con reembolso íntegro. Las condiciones exactas aparecen antes del pago." },
    { q: "¿Se puede pedir una silla de coche para un niño?", a: "Sí, indíquelo al reservar, con la edad y el peso del niño. Los taxis de la parada casi nunca la ofrecen." },
    { q: "¿Se paga en línea o a la llegada?", a: "Existen ambas opciones según el operador. Reservar en línea fija la tarifa, y algunos proveedores aceptan el pago al conductor. En ese caso, lleve dírhams." },
    { q: "¿Puede el conductor dejarme en la puerta de mi riad?", a: "Casi nunca, porque los callejones de la medina son demasiado estrechos para un coche. Para en la puerta más cercana, a menudo a 3 a 10 minutos a pie. Pida a su riad que envíe un porteador." },
    { q: "¿Se puede reservar el traslado de vuelta al aeropuerto de Marrakech-Menara?", a: "Sí, marcando el traslado de vuelta en el formulario o reservando un segundo trayecto. Llegue al aeropuerto 2 h 30 antes de un vuelo internacional: cuente 15 a 25 minutos desde la medina." },
  ],
  cta: {
    heading: "Su traslado resuelto en dos minutos",
    text: "Compare los vehículos disponibles para su hora de aterrizaje y fije la tarifa. Cancelación gratuita en la mayoría de reservas.",
    label: "Ver disponibilidad",
    href: "#transfert",
    secondary: { label: "Comparar taxi, bus y traslado", key: 'transfers' },
  },
} satisfies LocalizedPage;
