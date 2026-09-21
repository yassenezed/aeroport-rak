import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: 'Condiciones de uso — AirportRAK',
  description: 'Condiciones de uso de AirportRAK: carácter editorial del sitio, límites de responsabilidad, propiedad intelectual y enlaces a terceros.',
  eyebrow: 'AirportRAK',
  h1: 'Condiciones de uso',
  lede: "Lo que puede esperar de este sitio y lo que no. Al consultar AirportRAK, acepta las condiciones que siguen.",
  body: `
<h2>Naturaleza del sitio</h2>
<p>AirportRAK es una publicación editorial independiente dedicada al aeropuerto de Marrakech Menara. El sitio <strong>no está gestionado, ni mandatado, ni aprobado</strong> por la Office National Des Aéroports, por el aeropuerto de Marrakech Menara, ni por ninguna aerolínea. No vende ningún servicio de transporte y no es una agencia de viajes.</p>

<h2>Exactitud de la información</h2>
<p>Verificamos la información publicada e indicamos la fecha de consulta de las tarifas. No obstante, tarifas, horarios, frecuencias y procedimientos cambian sin previo aviso: <strong>confirme siempre con el operador correspondiente</strong> antes de tomar una decisión vinculante, en particular sobre un horario de vuelo, una formalidad de entrada o una reserva.</p>
<p>Los órdenes de magnitud que damos —tiempos de espera, duraciones de trayecto, horquillas de precios— son estimaciones basadas en condiciones habituales. No constituyen garantía ni compromiso.</p>

<h2>Limitación de responsabilidad</h2>
<p>La información de este sitio se facilita a título orientativo. No podemos ser considerados responsables de un vuelo perdido, una conexión fallida, un litigio con un proveedor, una denegación de embarque o un perjuicio derivado del uso de la información publicada. La decisión y su verificación le corresponden a usted.</p>
<p>Ningún contenido de este sitio constituye asesoramiento jurídico. Los apartados relativos a los derechos de los pasajeros o a las formalidades de entrada son información general que no sustituye el criterio de un profesional sobre su situación particular.</p>

<h2>Enlaces a sitios de terceros</h2>
<p>El sitio remite a plataformas de reserva, transportistas y fuentes oficiales. No ejercemos ningún control sobre su contenido, sus tarifas, sus condiciones generales ni su disponibilidad, y declinamos toda responsabilidad al respecto. Toda reserva realizada con un tercero se rige exclusivamente por el contrato celebrado con él.</p>

<h2>Propiedad intelectual</h2>
<p>Los textos, la estructura editorial, la identidad visual y los elementos gráficos de este sitio están protegidos. Queda prohibida toda reproducción o reutilización sustancial sin autorización previa por escrito. Sigue siendo posible una cita breve siempre que se indique la fuente y se incluya un enlace a la página original.</p>
<p>Las marcas, nombres comerciales y logotipos mencionados pertenecen a sus respectivos titulares y se citan únicamente a título informativo.</p>

<h2>Uso aceptable</h2>
<p>Quedan prohibidas la extracción automatizada masiva del contenido, la reproducción del sitio o de su estructura y cualquier intento de perturbar su funcionamiento.</p>

<h2>Legislación aplicable y contacto</h2>
<p>Estas condiciones se rigen por el derecho francés. Para cualquier pregunta al respecto: <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>.</p>
`,
} satisfies LocalizedPage;
