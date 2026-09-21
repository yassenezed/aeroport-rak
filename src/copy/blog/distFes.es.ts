import type { LocalizedArticle } from '../types';

export default {
  title: 'Marrakech → Fez: ¿tren, autobús, avión o carretera?',
  description: 'Ir de Marrakech a Fez: 530 km, tren ONCF de 7 h desde Guéliz, autobús, vuelo vía Casablanca o carretera. Duraciones, precios y la mejor opción.',
  eyebrow: 'Distancias',
  h1: 'De Marrakech a Fez: qué opción elegir',
  lede: "Quinientos treinta kilómetros separan las dos ciudades imperiales: es el trayecto más largo de esta guía y aquel en el que la elección del transporte más cambia su jornada.",
  excerpt: 'Tren nocturno, autobús, vuelo vía Casablanca o carretera: comparativa honesta de las formas de unir Marrakech y Fez.',
  date: '2026-08-30',
  facts: [
    { label: 'Distancia', value: '530', sub: 'km' },
    { label: 'Tren ONCF', value: '≈ 7 h', sub: 'desde Guéliz' },
    { label: 'Carretera', value: '6 h', sub: 'por autopista' },
    { label: 'Billete 2.ª clase', value: '200–250', sub: 'MAD' },
  ],
  body: `
<h2>El tren: largo, pero cómodo</h2>
<p>La ONCF une Marrakech con Fez en <strong>unas siete horas</strong>, por lo general con un transbordo en Casablanca. El billete cuesta del orden de <strong>200 a 250 MAD en segunda clase</strong> y de 300 a 380 MAD en primera. Los trenes son cómodos, puntuales y permiten trabajar o dormir.</p>
<p>Recordatorio imprescindible: la estación de Marrakech está en <strong>Guéliz</strong>, no en el aeropuerto. Calcule un taxi de 50 a 70 MAD y un margen de espera, lo que eleva el total a unas ocho horas.</p>
<p>Algunos trenes nocturnos permiten hacer el trayecto durmiendo, lo que ahorra una noche de hotel: en esta distancia es una opción a considerar seriamente.</p>

<h2>Las cuatro opciones comparadas</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Opción</th><th>Precio</th><th>Duración puerta a puerta</th><th>Confort</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Tren ONCF</strong></td><td class="num">200–250 MAD + taxi</td><td class="num">≈ 8 h</td><td>Muy bueno</td></tr>
<tr><td><strong>Autobús CTM / Supratours</strong></td><td class="num">200–280 MAD</td><td class="num">8 h–9 h</td><td>Correcto</td></tr>
<tr><td><strong>Avión vía Casablanca</strong></td><td class="num">variable, a menudo alto</td><td class="num">5 h–7 h</td><td>Fraccionado</td></tr>
<tr><td><strong>Coche</strong></td><td class="num">combustible + peajes</td><td class="num">6 h</td><td>Cansado en solitario</td></tr>
</tbody>
</table>
</div>
<p>El avión decepciona sistemáticamente en este enlace: no hay vuelo directo útil, la conexión pasa por Casablanca y, una vez sumados los accesos a los aeropuertos, la facturación y la espera, la ganancia sobre el tren es escasa por un precio muy superior.</p>

<h2>La carretera</h2>
<p>La autopista pasa por Casablanca y después Rabat y Mequinez. Seis horas de conducción real, por un eje moderno y sin dificultad, pero largo y monótono. Solo se justifica si piensa parar por el camino —Rabat y Mequinez merecen la etapa— o si viajan varios con un coche ya alquilado.</p>
<div class="callout">
<span class="callout-label">El buen reparto del itinerario</span>
<p>Encadenar Marrakech y Fez directamente estropea ambas. Si su viaje lo permite, corte en Casablanca o en Rabat para pasar una noche: convertirá un traslado penoso en una etapa y llegará a Fez en condiciones de visitarla.</p>
</div>

<h2>¿Y si vuela directamente a Fez?</h2>
<p>Fez dispone de su propio aeropuerto, <strong>Fez Saiss (FEZ)</strong>, con varias aerolíneas europeas. Si Fez es su destino principal, un vuelo directo le evita por completo este trayecto. Marrakech solo se justifica como puerta de entrada si piensa pasar allí varios días.</p>
`,
  faqs: [
    {
      q: '¿Cuánto dura el tren entre Marrakech y Fez?',
      a: "Unas siete horas, por lo general con transbordo en Casablanca, por 200 a 250 MAD en segunda clase. Sumando el taxi desde el aeropuerto hasta la estación de Guéliz, calcule ocho horas puerta a puerta.",
    },
    {
      q: '¿Es mejor coger el avión entre Marrakech y Fez?',
      a: "Rara vez. No existe vuelo directo útil, la conexión pasa por Casablanca y, una vez sumados los accesos, la facturación y la espera, la ganancia sobre el tren es escasa por un precio claramente superior.",
    },
    {
      q: '¿Qué distancia separa Marrakech de Fez?',
      a: "Unos 530 kilómetros, es decir seis horas de carretera por la autopista vía Casablanca, Rabat y Mequinez. Es el trayecto más largo entre dos grandes ciudades turísticas marroquíes.",
    },
    {
      q: '¿Existe un tren nocturno entre Marrakech y Fez?',
      a: "Sí, algunos enlaces permiten hacer el trayecto durmiendo, lo que ahorra una noche de hotel. En esta distancia es una opción a considerar seriamente, reservando con antelación.",
    },
  ],
} satisfies LocalizedArticle;
