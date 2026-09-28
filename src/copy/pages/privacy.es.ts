import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: 'Política de privacidad — AirportRAK',
  description: 'Cómo trata AirportRAK los datos de los visitantes: medición de audiencia, enlaces de afiliación, cookies, widgets de terceros y derechos RGPD.',
  eyebrow: 'AirportRAK',
  h1: 'Política de privacidad',
  lede: "Lo que este sitio recopila, por qué, durante cuánto tiempo y lo que usted puede exigir. En resumen: ninguna cuenta, ningún formulario de seguimiento y herramientas de terceros limitadas estrictamente a la analítica y a la reserva.",
  body: `
<h2>Quién trata sus datos</h2>
<p>El responsable del tratamiento es el editor de AirportRAK, localizable en <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>. El sitio no ofrece creación de cuenta, ni espacio personal, ni boletín.</p>

<h2>Qué recopilamos</h2>
<ul>
<li><strong>Medición de audiencia</strong>: páginas consultadas, procedencia, tipo de dispositivo, país. Estos datos sirven para entender qué contenidos son útiles y mejorarlos. No permiten identificarle personalmente.</li>
<li><strong>Registros técnicos</strong> del alojamiento, conservados por seguridad y para el correcto funcionamiento del sitio.</li>
<li><strong>Mensajes que nos envía</strong>: únicamente si nos escribe, y solo el tiempo necesario para atender su solicitud.</li>
</ul>
<p>No vendemos ningún dato, no elaboramos ningún perfil publicitario y no transmitimos nada a intermediarios de datos.</p>

<h2>Cookies y servicios de terceros</h2>
<p>Algunas páginas integran herramientas facilitadas por terceros, que depositan sus propias cookies y tienen sus propias políticas:</p>
<ul>
<li><strong>Widgets de reserva</strong> (vuelos, traslados): utilizan cookies de seguimiento de afiliación para atribuir a nuestro sitio una eventual reserva.</li>
<li><strong>Paneles de vuelos</strong>: facilitados por un proveedor de información aérea y mostrados en un marco aislado.</li>
<li><strong>Medición de audiencia</strong>: estadísticas agregadas de tráfico.</li>
<li><strong>Tiempo</strong>: la temperatura de la portada procede de Open-Meteo, sin cookies; solo se transmite su dirección IP, como en cualquier carga de página.</li>
</ul>
<p>Puede bloquear o eliminar estas cookies desde los ajustes de su navegador. El sitio sigue siendo plenamente consultable sin ellas; solo los widgets de reserva pueden dejar de funcionar correctamente.</p>

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
