import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: "Afiliación — AeroportRAK, aeropuerto de Marrakech-Menara",
  description: "Cómo se financia AeroportRAK, guía del aeropuerto de Marrakech-Menara: enlaces de afiliación y comisiones que no cambian su precio.",
  eyebrow: 'AeroportRAK',
  h1: 'Divulgación de afiliación',
  lede: "Este sitio es gratuito y se financia con comisiones de afiliación. Así funciona exactamente, esto es lo que cambia para usted —nada en el precio— y esto es lo que no cambia en lo que escribimos.",
  body: `
<h2>El principio, en tres frases</h2>
<p>Algunas páginas contienen enlaces a plataformas de reserva de traslados, vuelos, alojamientos o alquiler de coches. Si reserva tras seguir uno de esos enlaces, el socio nos abona una comisión, detraída de su propio margen. <strong>El precio que usted paga es idéntico al que habría obtenido entrando directamente en su web.</strong></p>

<h2>Qué financia</h2>
<p>La redacción y, sobre todo, la actualización de las páginas: comprobar tarifas publicadas, verificar horarios, corregir una información que ha cambiado. Una guía práctica que no se mantiene se vuelve falsa en pocos meses; es precisamente lo que tratamos de evitar, y representa la mayor parte del trabajo.</p>

<h2>Qué no cambia</h2>
<ul>
<li><strong>Ningún socio paga por figurar en este sitio</strong>, ni por ocupar una posición determinada.</li>
<li><strong>Ningún socio revisa nuestros textos</strong> ni tiene derecho a opinar sobre lo que escribimos acerca de él.</li>
<li><strong>También recomendamos opciones que no nos reportan nada</strong> cuando son mejores. El taxi de la parada y el autobús 19 están en ese caso: los recomendamos abiertamente en las situaciones en que ganan, y no generan ninguna comisión.</li>
<li><strong>Señalamos los defectos</strong> de los servicios de los que hablamos, incluso cuando un enlace de afiliación remite a ellos.</li>
</ul>
<div class="callout">
<span class="callout-label">Un ejemplo concreto</span>
<p>En nuestra página de traslados escribimos que, para dos personas, de día, hacia Guéliz, el taxi a 100–150 MAD es difícil de batir y no hay ninguna razón para reservar nada. Es un consejo que nos cuesta dinero, y es la única forma de escribir una guía que merezca la pena leer.</p>
</div>

<h2>Dónde están esos enlaces</h2>
<p>Principalmente en los bloques de reserva de traslados y de vuelos, en los recuadros de llamada a la acción al pie de página y en algunos enlaces contextuales dentro de los artículos. Los enlaces a fuentes oficiales, textos normativos o a nuestras propias páginas nunca son de afiliación.</p>

<h2>Publicidad y contenido patrocinado</h2>
<p>No publicamos artículos patrocinados disfrazados de contenido editorial. Si esta política cambiara, todo contenido remunerado se identificaría como tal de forma clara y visible al inicio de la página.</p>

<h2>¿Alguna pregunta?</h2>
<p>Escríbanos a <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>. Si cree que alguna recomendación de este sitio está orientada por una comisión y no por el interés del lector, dígalo: es exactamente el tipo de aviso que queremos recibir.</p>
`,
} satisfies LocalizedPage;
