import type { LocalizedPage } from '../types';

export default {
  title: 'Vuelo retrasado o cancelado en Marrakech: sus derechos',
  description: 'Vuelo retrasado, cancelado o con overbooking en Marrakech: cuándo se aplica la compensación, qué importes reclamar y cómo preparar el expediente.',
  eyebrow: 'Marrakech Menara · Sus derechos',
  h1: 'Vuelo retrasado o cancelado en Marrakech: ¿qué puede reclamar?',
  lede: "Un retraso de tres horas saliendo de Marrakech puede dar derecho a 400 € por pasajero, pero solo en determinados casos. Esta es la norma aplicable, los importes y las pruebas que hay que reunir antes de salir del aeropuerto.",
  body: `
<h2>¿Qué normativa se aplica saliendo de Marrakech?</h2>
<p>El reglamento europeo <strong>CE 261/2004</strong> cubre todos los vuelos <em>que salen</em> de un aeropuerto de la Unión Europea, sea cual sea la aerolínea, y los vuelos <em>con destino</em> a la Unión cuando los opera una compañía europea. En concreto, para un trayecto Marrakech-Europa:</p>
<ul>
<li><strong>Vuelo Marrakech → Madrid en Ryanair, Vueling, Iberia, Air Europa, easyJet…</strong>: cubierto, porque la compañía es europea.</li>
<li><strong>Vuelo Marrakech → Madrid en Royal Air Maroc</strong>: no cubierto por el CE 261, al no ser la compañía europea y producirse la salida fuera de la UE. Quedan las condiciones generales de transporte y el Convenio de Montreal.</li>
<li><strong>Vuelo Madrid → Marrakech, cualquier compañía</strong>: cubierto, porque la salida se produce en la Unión.</li>
</ul>

<h2>Los importes</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Distancia del vuelo</th><th>Compensación</th><th>Ejemplos desde Marrakech</th></tr></thead>
<tbody>
<tr><td>Menos de 1.500 km</td><td class="num">250 €</td><td>Málaga, Sevilla, Lisboa</td></tr>
<tr class="row-highlight"><td>De 1.500 a 3.500 km</td><td class="num">400 €</td><td>Madrid, Barcelona, París, Bruselas, Milán</td></tr>
<tr><td>Más de 3.500 km (fuera de la UE)</td><td class="num">600 €</td><td>Montreal, Dubái</td></tr>
</tbody>
</table>
</div>
<p>Estos importes se deben <strong>por pasajero</strong>, incluidos los niños con billete, y se suman al reembolso o al transporte alternativo. Son independientes del precio del billete: un vuelo de 39 € puede dar lugar a 400 € de compensación.</p>

<h2>¿En qué casos tiene derecho?</h2>
<ul>
<li><strong>Retraso de 3 horas o más</strong> en la llegada al destino final.</li>
<li><strong>Cancelación</strong> anunciada con menos de 14 días de antelación, sin transporte alternativo equivalente.</li>
<li><strong>Denegación de embarque</strong> por sobreventa, estando usted presente a su hora.</li>
<li><strong>Conexión perdida</strong> en una reserva única, por el retraso del primer vuelo.</li>
</ul>
<p>La compensación decae en caso de <strong>circunstancias extraordinarias</strong>: meteorología que impida el vuelo, huelga del control aéreo, cierre del espacio aéreo, urgencia médica a bordo. Atención: una huelga del personal de la propia compañía no suele entrar en esa categoría, y una avería técnica tampoco.</p>

<h2>Lo que la compañía le debe en el momento</h2>
<p>Con independencia de la compensación, el derecho a asistencia se aplica desde las <strong>2 horas de retraso</strong> en un vuelo corto: comida y bebida proporcionadas al tiempo de espera, dos comunicaciones y alojamiento con traslado si la salida se aplaza al día siguiente. En Marrakech, en plena temporada, hay que reclamar activamente estas prestaciones en el mostrador: no se ofrecen de forma sistemática.</p>
<div class="callout">
<span class="callout-label">Las pruebas que hay que reunir antes de salir del aeropuerto</span>
<p>Fotografíe el panel que indica el retraso, conserve su tarjeta de embarque, pida un <strong>justificante escrito del retraso</strong> en el mostrador de la compañía y guarde todos los comprobantes de gastos: comidas, hotel, taxi. Un expediente se gana o se pierde con esos documentos.</p>
</div>

<h2>Reclamar: primero la compañía, después un intermediario</h2>
<p>Envíe una primera reclamación escrita a la aerolínea, por correo certificado o mediante su formulario en línea, citando el reglamento CE 261/2004, su número de vuelo y la duración del retraso. Muchos casos sencillos se resuelven en esta fase, en unas semanas.</p>
<p>Si se lo deniegan o no responden, hay empresas especializadas que toman el relevo sin coste inicial, a cambio de una comisión del 25 al 35 % sobre lo obtenido. Es un arbitraje: cobra menos, pero no gestiona nada y solo paga si hay éxito. El plazo de prescripción varía según el país —cinco años en España para reclamaciones de este tipo—, lo que deja margen para tramitar un expediente antiguo.</p>
`,
  faqs: [
    {
      q: '¿Tengo derecho a compensación si mi vuelo Marrakech-Madrid se retrasa 4 horas?',
      a: "Sí si la compañía es europea —Ryanair, Vueling, Iberia, Air Europa, easyJet—, porque el reglamento CE 261/2004 se aplica entonces incluso saliendo de Marruecos. El importe es de 400 € por pasajero para esa distancia. En Royal Air Maroc, el reglamento europeo no se aplica a una salida de Marrakech.",
    },
    {
      q: '¿Qué importe se puede reclamar por un vuelo cancelado desde Marrakech?',
      a: "250 € para un vuelo de menos de 1.500 km, 400 € entre 1.500 y 3.500 km —lo que cubre Madrid, Barcelona, París y Milán— y 600 € más allá. Estas cantidades se deben por pasajero y se suman al reembolso del billete o al transporte alternativo.",
    },
    {
      q: '¿La meteorología anula mi derecho a compensación?',
      a: "Sí, las condiciones meteorológicas que impiden el vuelo son circunstancias extraordinarias que eximen a la compañía. En cambio, una avería técnica o una huelga del personal de la propia aerolínea no suelen serlo y sí dan derecho a compensación.",
    },
    {
      q: '¿Qué debe facilitarme la compañía durante la espera en el aeropuerto?',
      a: "Desde las dos horas de retraso en un vuelo corto: comida y bebida proporcionadas a la espera, dos comunicaciones y alojamiento con traslado si la salida se aplaza al día siguiente. En Marrakech hay que pedirlo en el mostrador, no siempre se ofrece.",
    },
    {
      q: '¿Cuánto tiempo tengo para presentar una reclamación?',
      a: "El plazo de prescripción varía según el país donde se presente: cinco años en España para este tipo de reclamaciones, lo que permite tramitar un vuelo antiguo. Conserve tarjetas de embarque, justificantes y comprobantes de gastos desde el día del vuelo.",
    },
  ],
} satisfies LocalizedPage;
