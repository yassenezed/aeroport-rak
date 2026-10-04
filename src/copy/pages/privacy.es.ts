import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: "Privacidad — AeroportRAK, aeropuerto de Marrakech-Menara",
  description: "Cómo trata AeroportRAK, guía del aeropuerto de Marrakech-Menara, sus datos: audiencia, afiliación, cookies, widgets de terceros y RGPD.",
  eyebrow: 'AeroportRAK',
  h1: 'Política de privacidad',
  lede: "Lo que este sitio recopila, por qué, durante cuánto tiempo y lo que usted puede exigir. En resumen: ninguna cuenta, ningún formulario de seguimiento y herramientas de terceros limitadas estrictamente a la analítica y a la reserva.",
  body: `
<h2>Quién trata sus datos</h2>
<p>El responsable del tratamiento es el editor de AeroportRAK, localizable en <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>. El sitio no ofrece creación de cuenta, ni espacio personal, ni boletín.</p>

<h2>Qué recopilamos</h2>
<ul>
<li><strong>Medición de audiencia</strong>: páginas consultadas, procedencia, tipo de dispositivo, país. Estos datos sirven para entender qué contenidos son útiles y mejorarlos. No permiten identificarle personalmente.</li>
<li><strong>Registros técnicos</strong> del alojamiento, conservados por seguridad y para el correcto funcionamiento del sitio.</li>
<li><strong>Mensajes que nos envía</strong>: únicamente si nos escribe, y solo el tiempo necesario para atender su solicitud.</li>
</ul>
<p>No vendemos ningún dato y no transmitimos nada a intermediarios de datos.</p>

<h2>Cookies y servicios de terceros</h2>
<p>Algunas páginas integran herramientas facilitadas por terceros, que depositan sus propias cookies y tienen sus propias políticas:</p>
<ul>
<li><strong>Widgets de reserva</strong> (vuelos, traslados): utilizan cookies de seguimiento de afiliación para atribuir a nuestro sitio una eventual reserva.</li>
<li><strong>Paneles de vuelos</strong>: facilitados por un proveedor de información aérea y mostrados en un marco aislado.</li>
<li><strong>Medición de audiencia</strong>: estadísticas agregadas de tráfico.</li>
<li><strong>Tiempo</strong>: la temperatura de la portada procede de Open-Meteo, sin cookies; solo se transmite su dirección IP, como en cualquier carga de página.</li>
</ul>
<p>Puede bloquear o eliminar estas cookies desde los ajustes de su navegador. El sitio sigue siendo plenamente consultable sin ellas; solo los widgets de reserva pueden dejar de funcionar correctamente.</p>

<h2>Consentimiento, medición de audiencia y publicidad</h2>
<p>En su primera visita desde la Unión Europea, el Espacio Económico Europeo, el Reino Unido o Suiza, un aviso le pide su consentimiento. Mientras no acepte, no se instala ninguna cookie de medición ni de publicidad y el script de afiliación no se carga. Puede cambiar de opinión en cualquier momento mediante el enlace <strong>«Gestionar cookies»</strong> al pie de cada página.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google Ireland Ltd): estadísticas de visitas, sin conservar las direcciones IP. El modo de consentimiento de Google solo envía señales anónimas sin cookies hasta que usted acepte.</li>
<li><strong>Afiliación</strong>: Travelpayouts y sus socios (Kiwitaxi para traslados, EconomyBookings para alquiler de coches, buscadores de vuelos), y Booking.com para hoteles. Pueden instalar una cookie para atribuir una reserva a nuestro sitio.</li>
<li><strong>Publicidad (Google AdSense)</strong>: el sitio puede mostrar anuncios. Proveedores externos, incluido Google, utilizan cookies para mostrar anuncios según sus visitas anteriores a este u otros sitios web. Las cookies publicitarias de Google le permiten a Google y a sus socios mostrarle anuncios adaptados. Puede desactivar la publicidad personalizada en la <a href="https://adssettings.google.com" rel="noopener" target="_blank">configuración de anuncios de Google</a> o en <a href="https://www.youronlinechoices.com/es/" rel="noopener" target="_blank">youronlinechoices.com</a>. Más información: <a href="https://policies.google.com/technologies/partner-sites?hl=es" rel="noopener" target="_blank">cómo usa Google los datos de sitios asociados</a>.</li>
</ul>

<h2>Enlaces de afiliación</h2>
<p>Cuando sigue un enlace de reserva desde este sitio, el socio correspondiente puede registrar su procedencia para atribuirnos una comisión si usted reserva. Este mecanismo <strong>nunca aumenta el precio que usted paga</strong>. Se detalla en nuestra página de <a href="/es/affiliate-disclosure/">divulgación de afiliación</a>.</p>

<h2>Plazo de conservación</h2>
<p>Las estadísticas de audiencia se conservan de forma agregada. Los registros técnicos del alojamiento siguen el plazo definido por este. Los mensajes recibidos por correo se eliminan una vez atendida la solicitud, salvo cuando documentan una corrección aplicada al sitio.</p>

<h2>Sus derechos</h2>
<p>Conforme al RGPD, dispone de derechos de acceso, rectificación, supresión, limitación y oposición sobre los datos que le conciernen. Escriba a <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>: respondemos en el plazo de un mes. También puede presentar una reclamación ante la autoridad de control competente, la AEPD en el caso de los residentes en España.</p>

<h2>Modificaciones</h2>
<p>Esta política puede ajustarse, en particular si añadimos o retiramos una herramienta de terceros. Toda modificación sustancial se indicará en esta página.</p>
`,
} satisfies LocalizedPage;
