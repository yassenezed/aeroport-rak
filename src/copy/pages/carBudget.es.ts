import type { LocalizedPage } from '../types';

export default {
  title: 'Alquiler de coches barato en Marrakech',
  description: 'Alquilar un coche económico en el aeropuerto de Marrakech: precios reales desde 25 €/día, agencias locales o internacionales y las trampas del contrato barato.',
  eyebrow: 'Marrakech Menara · Económico',
  h1: 'Alquiler de coches económico en Marrakech',
  lede: "Los anuncios de 12 € al día existen, y no son falsos: simplemente están incompletos. Esto es lo que cuesta realmente un coche pequeño en Marruecos y cómo pagar poco sin que le alcancen en el mostrador.",
  body: `
<h2>Qué se alquila realmente a ese precio</h2>
<p>La categoría económica en Marruecos es el <strong>Dacia Sandero, el Kia Picanto, el Hyundai i10 o el Fiat Panda</strong>: cuatro o cinco plazas, maletero modesto, aire acondicionado, cambio manual. Estos coches se fabrican o se importan masivamente en Marruecos, lo que explica tarifas claramente inferiores a las europeas. Calcule <strong>25 a 35 € al día</strong> en temporada normal, menos en un alquiler semanal.</p>
<p>Bastan perfectamente para Marrakech, Essaouira, Ourika, Imlil y el Tichka: todas esas carreteras están asfaltadas. Su verdadero límite es el aire acondicionado en pleno verano, que sufre con motores pequeños cuando se superan los 42 °C, y la recuperación en montaña con cuatro pasajeros cargados.</p>

<h2>Cómo un precio bajo se convierte en uno alto</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Línea del contrato</th><th>Lo que se anuncia</th><th>Lo que paga</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Franquicia</strong></td><td>«Seguro incluido»</td><td>Franquicia de 5.000 a 15.000 MAD a su cargo</td></tr>
<tr><td><strong>Exención de franquicia</strong></td><td>Opcional</td><td>10 a 20 € / día, a veces más que el alquiler</td></tr>
<tr><td><strong>Combustible</strong></td><td>«Lleno / lleno»</td><td>Lleno facturado a la salida, no reembolsado a la vuelta en algunas</td></tr>
<tr><td><strong>Segundo conductor</strong></td><td>No mencionado</td><td>5 a 10 € / día</td></tr>
<tr><td><strong>Devolución fuera de horario</strong></td><td>No mencionado</td><td>Suplemento de noche o domingo</td></tr>
</tbody>
</table>
</div>
<p>El reflejo que protege: pida <strong>el importe total que se le cargará, franquicia incluida</strong>, por escrito, antes de confirmar. Una empresa seria lo facilita sin problema.</p>

<h2>¿Agencia local o marca internacional?</h2>
<p>Las <strong>agencias marroquíes</strong> suelen ser un 20 a 40 % más baratas, con vehículos más antiguos pero correctamente mantenidos y un interlocutor real sobre el terreno. El riesgo está en la calidad muy variable de la inspección del vehículo y en la gestión de los litigios. Elija una con un volumen significativo y reciente de opiniones.</p>
<p>Las <strong>marcas internacionales</strong> presentes en el RAK cuestan más, pero ofrecen procedimientos estandarizados, una flota más reciente y una reclamación más sencilla si hay problemas. Con presupuesto ajustado, es el compromiso razonable para un primer alquiler en Marruecos.</p>
<div class="callout">
<span class="callout-label">La precaución que vale más que cualquier contrato</span>
<p>Grabe el vehículo desde todos los ángulos en la entrega —llantas, parabrisas, techo, bajos, interior— con la fecha activada, y repita exactamente la misma secuencia a la vuelta. Es la única prueba que cuenta en una discusión por un arañazo, y lleva diez minutos.</p>
</div>

<h2>Pagar menos, en concreto</h2>
<ul>
<li><strong>Reserve con antelación</strong>: los precios en mostrador en temporada alta son siempre más altos que en línea.</li>
<li><strong>Alquile por semana</strong>: la tarifa diaria cae claramente a partir de cinco días.</li>
<li><strong>No coja el coche al aterrizar</strong> si sus dos primeros días transcurren en la medina: pagaría por un vehículo inutilizable.</li>
<li><strong>Rechace el GPS</strong> a 8 € al día: su teléfono con un mapa sin conexión lo hace mejor.</li>
<li><strong>Compare la exención de franquicia</strong> de la empresa con un seguro de terceros, a menudo tres veces más barato, aceptando adelantar el importe en caso de siniestro.</li>
</ul>
`,
  faqs: [
    {
      q: '¿Cuál es el precio real de un coche pequeño de alquiler en Marrakech?',
      a: "De 25 a 35 € al día en temporada normal para un Dacia Sandero, un Kia Picanto o equivalente, con tarifas decrecientes por semana. Los anuncios muy por debajo excluyen por lo general la exención de franquicia, que puede añadir 10 a 20 € al día.",
    },
    {
      q: '¿Son fiables las agencias locales marroquíes?',
      a: "Las mejores lo son, y cuestan un 20 a 40 % menos que las marcas internacionales. La calidad depende sobre todo del rigor de la inspección del vehículo: elija una agencia con opiniones numerosas y recientes, y grabe el coche en la entrega y en la devolución.",
    },
    {
      q: '¿Basta un urbano para visitar el Atlas desde Marrakech?',
      a: "Sí para Ourika, Imlil, Essaouira y el puerto de Tichka, que están asfaltados. Su límite es el aire acondicionado en pleno verano y la recuperación en montaña a plena carga. Solo las pistas sin asfaltar justifican un SUV.",
    },
    {
      q: '¿Hay que contratar la exención de franquicia de la empresa?',
      a: "No es obligatoria y suele ser la partida más cara. Un seguro de terceros especializado cuesta por lo general tres veces menos, con una contrapartida: usted adelanta el importe en caso de daño y se lo reembolsan después.",
    },
  ],
} satisfies LocalizedPage;
