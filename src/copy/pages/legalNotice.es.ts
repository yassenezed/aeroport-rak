import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: "Aviso legal — AeroportRAK, aeropuerto de Marrakech-Menara",
  description: "Aviso legal de AeroportRAK, guía independiente del aeropuerto de Marrakech-Menara: editor, alojamiento, propiedad intelectual y responsabilidad.",
  eyebrow: 'AeroportRAK',
  h1: 'Aviso legal',
  lede: "Quién edita este sitio, quién lo aloja y dentro de qué límites puede utilizarse la información publicada.",
  body: `
<h2>Editor del sitio</h2>
<p><strong>${site.name}</strong> (${site.url.replace('https://', '')}), guía de información independiente sobre el aeropuerto de Marrakech-Menara.<br>
Contacto: <a href="mailto:${site.contactEmail}">${site.contactEmail}</a><br>
Director de la publicación: el editor del sitio.</p>

<h2>Alojamiento</h2>
<p>Hostinger International Ltd.<br>61 Lordou Vironos Street, 6023 Larnaca, Chipre<br>hostinger.com</p>

<h2>Sitio independiente</h2>
<p>${site.name} no es el sitio oficial del aeropuerto ni está afiliado a la Oficina Nacional de Aeropuertos (ONDA), a las aerolíneas ni a las autoridades marroquíes. La información oficial se publica en onda.ma.</p>

<h2>Exactitud de la información</h2>
<p>Las tarifas, horarios y servicios se verifican con cuidado, pero pueden cambiar sin previo aviso. Se ofrecen a título indicativo: compruébelos siempre con su aerolínea o el proveedor antes de viajar. El editor no se hace responsable de decisiones tomadas únicamente a partir de este sitio.</p>

<h2>Enlaces de afiliación y publicidad</h2>
<p>Algunos enlaces y módulos de reserva son enlaces de afiliación: se puede percibir una comisión si reserva, sin coste adicional para usted. El sitio también puede mostrar anuncios. Los detalles figuran en nuestra <a href="/es/affiliate-disclosure/">divulgación de afiliación</a> y nuestra <a href="/es/privacy-policy/">política de privacidad</a>.</p>

<h2>Propiedad intelectual</h2>
<p>Los textos, el diseño, el logotipo y los elementos visuales originales de ${site.name} están protegidos. Queda prohibida cualquier reproducción, incluso parcial, sin autorización escrita. Las marcas y fotografías de establecimientos de terceros siguen siendo propiedad de sus titulares.</p>

<h2>Datos personales y cookies</h2>
<p>El tratamiento de sus datos y el uso de cookies se describen en la <a href="/es/privacy-policy/">política de privacidad</a>. Puede cambiar su elección en cualquier momento mediante el enlace «Gestionar cookies» al pie de cada página.</p>
`,
} satisfies LocalizedPage;
