import type { LocalizedPage } from '../types';

export default {
  title: "Reservar un traslado del aeropuerto de Marrakech-Menara",
  description: "Reserve su traslado privado desde el aeropuerto de Marrakech-Menara: precio fijo por vehículo, vuelo seguido, medina y cancelación gratuita.",
  eyebrow: 'Marrakech Menara · Reserva',
  h1: 'Reservar un traslado desde el aeropuerto de Marrakech',
  lede: "Indique su destino y su hora de aterrizaje: el precio se muestra por vehículo, no por pasajero. Un conductor le espera a la salida de llegadas con su nombre y le deja en la puerta de la medina más cercana a su riad.",
  widget: 'transfer',
  body: `
<h2>Qué incluye una reserva</h2>
<ul>
<li><strong>Un precio fijo por vehículo</strong>, conocido antes de salir, hasta siete pasajeros en un monovolumen. Nada que negociar a la llegada.</li>
<li><strong>El seguimiento del número de vuelo</strong>: si aterriza con una hora de retraso, el conductor se ajusta y espera.</li>
<li><strong>Una espera gratuita</strong> tras el aterrizaje, por lo general de 45 a 60 minutos, el tiempo de la policía y los equipajes.</li>
<li><strong>La cancelación gratuita</strong> hasta 24 horas antes de la recogida con la mayoría de los operadores.</li>
<li><strong>Sillas infantiles</strong> bajo petición, que hay que indicar al reservar: en un taxi de la parada casi nunca están disponibles.</li>
</ul>

<h2>Elegir el vehículo adecuado</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Vehículo</th><th>Pasajeros</th><th>Maletas</th><th>Para quién</th></tr></thead>
<tbody>
<tr><td><strong>Berlina</strong></td><td class="num">1–3</td><td class="num">2–3</td><td>Pareja o trío con equipaje de mano y una maleta</td></tr>
<tr class="row-highlight"><td><strong>Monovolumen</strong></td><td class="num">4–7</td><td class="num">5–7</td><td>Familia, grupo de amigos, la mejor relación precio/plaza</td></tr>
<tr><td><strong>Minibús</strong></td><td class="num">8–15</td><td class="num">10+</td><td>Grupo, congreso, boda</td></tr>
<tr><td><strong>4x4 o furgoneta premium</strong></td><td class="num">1–6</td><td class="num">4–6</td><td>Campamentos del desierto, pistas de Agafay, viajes de negocios</td></tr>
</tbody>
</table>
</div>
<p>Lo esencial: como la tarifa se fija por vehículo, un monovolumen para cuatro o cinco sale mucho más barato por persona que dos petits taxis, limitados a tres pasajeros cada uno.</p>

<h2>La información que conviene preparar</h2>
<p>La reserva lleva dos minutos si tiene a mano estos datos: su <strong>número de vuelo</strong> y la hora de aterrizaje; el <strong>nombre exacto de su riad u hotel</strong>; para la medina, la <strong>puerta de llegada</strong> que le haya indicado su alojamiento; el número de pasajeros y maletas; y un <strong>teléfono localizable en Marruecos</strong>, preferiblemente WhatsApp, que usan la mayoría de los conductores.</p>
<div class="callout">
<span class="callout-label">Reserve en los dos sentidos</span>
<p>El regreso al aeropuerto suele ser más complicado que la ida: a las 5 de la mañana, en un callejón de la medina, no hay cola de taxis. Reservar ida y vuelta de una vez sale por lo general más barato que dos trayectos sueltos y elimina el problema.</p>
</div>

<h2>Temporada alta: reserve pronto</h2>
<p>Las vacaciones escolares europeas, los puentes de primavera, el Marathon des Sables y las fiestas de fin de año agotan la disponibilidad de vehículos grandes antes que nada. Si viajan cinco o más entre diciembre y abril, reservar con varias semanas de antelación no es exceso de prudencia: es simplemente lo que evita repartir al grupo en tres coches.</p>
`,
  faqs: [
    {
      q: '¿El precio indicado es por persona o por vehículo?',
      a: "Por vehículo. Un traslado de 27 € a la medina cubre hasta siete pasajeros en un monovolumen, equipaje incluido. Eso es lo que lo hace claramente más económico que un taxi en cuanto son cuatro, ya que un petit taxi está limitado a tres personas.",
    },
    {
      q: '¿Qué pasa si mi vuelo se retrasa?',
      a: "El conductor sigue su número de vuelo y ajusta la hora de recogida. Suele incluirse una espera gratuita de 45 a 60 minutos tras el aterrizaje, lo que cubre la policía de fronteras y la entrega de equipajes.",
    },
    {
      q: '¿Se puede cancelar un traslado reservado?',
      a: "Con la mayoría de los operadores, sí: cancelación gratuita hasta 24 horas antes de la recogida, con reembolso íntegro. Las condiciones exactas figuran en su bono de confirmación antes del pago.",
    },
    {
      q: '¿Se puede pedir una silla infantil?',
      a: "Sí, indíquelo al reservar precisando la edad y el peso del niño. Es un argumento decisivo a favor del traslado: los taxis de la parada prácticamente nunca llevan.",
    },
    {
      q: '¿Dónde espera el conductor en el aeropuerto de Marrakech?',
      a: "A la salida de la sala de llegadas, con un cartel con su nombre. El punto de encuentro exacto figura en su bono de confirmación. Escríbale en cuanto recupere cobertura, antes incluso de la aduana.",
    },
    {
      q: '¿Hay que pagar en línea o en el momento?',
      a: "Existen las dos opciones según el operador. La reserva en línea bloquea la tarifa, y muchos proveedores permiten el pago diferido o al conductor. Si paga en el momento, lleve dirhams: la tarjeta no siempre se acepta en el vehículo.",
    },
  ],
  cta: {
    heading: 'Su traslado, resuelto en dos minutos',
    text: "Compare los vehículos disponibles para su hora de aterrizaje y bloquee la tarifa. Cancelación gratuita en la mayoría de las reservas.",
    label: 'Ver disponibilidad',
  },
} satisfies LocalizedPage;
