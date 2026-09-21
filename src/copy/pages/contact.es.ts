import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: 'Contacto AirportRAK',
  description: 'Contactar con AirportRAK: corregir una información sobre el aeropuerto de Marrakech, señalar una tarifa caducada o hacer una consulta profesional.',
  eyebrow: 'AirportRAK',
  h1: 'Contactar con nosotros',
  lede: "Una información caducada, una tarifa que ya no corresponde, una precisión que aportar: escríbanos. Leemos todos los mensajes y corregimos las páginas afectadas.",
  body: `
<h2>Escribir a la redacción</h2>
<p>Correo: <a href="mailto:${site.contactEmail}">${site.contactEmail}</a></p>
<p>Para señalar un error, indique si es posible <strong>la dirección de la página afectada</strong>, el pasaje en cuestión y lo que observó sobre el terreno, con la fecha. Una foto de un panel de tarifas o de un horario vale más que una explicación larga: es lo que nos permite corregir rápido y con certeza.</p>

<h2>Lo que no podemos hacer</h2>
<p>AirportRAK es una guía editorial independiente, no un servicio del aeropuerto ni una agencia de viajes. Por tanto no podemos:</p>
<ul>
<li>modificar, cancelar o localizar una reserva de vuelo, hotel o traslado;</li>
<li>informar del estado de un equipaje perdido: eso corresponde al mostrador de su aerolínea;</li>
<li>intervenir ante una empresa de alquiler, un hotel o un conductor;</li>
<li>confirmar el horario de un vuelo en tiempo real, más allá de lo que muestran nuestros paneles de <a href="/es/arrivals/">llegadas</a> y <a href="/es/departures/">salidas</a>.</li>
</ul>
<p>Para esas gestiones, diríjase directamente al operador correspondiente, cuyo servicio de atención al cliente es el único que dispone de los datos de su expediente.</p>

<h2>Consultas profesionales</h2>
<p>Hoteleros, empresas de alquiler, operadores de traslados, oficinas de turismo: no vendemos espacio editorial y ningún establecimiento puede comprar su presencia ni su posición en este sitio. En cambio, recibimos de buen grado las correcciones factuales que les afecten —horarios, tarifas, capacidades, servicios— con una fuente verificable.</p>

<h2>Plazo de respuesta</h2>
<p>Solemos responder en unos días laborables. Los avisos de errores factuales se tramitan con prioridad, porque afectan directamente a lectores que están preparando un viaje.</p>
`,
} satisfies LocalizedPage;
