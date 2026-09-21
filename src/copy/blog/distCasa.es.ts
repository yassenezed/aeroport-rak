import type { LocalizedArticle } from '../types';

export default {
  title: 'Marrakech → Casablanca: tren, autobús y carretera',
  description: 'Ir del aeropuerto de Marrakech a Casablanca: 240 km, autopista, tren ONCF desde la estación de Guéliz, autobús CTM y traslado privado.',
  eyebrow: 'Distancias',
  h1: 'Del aeropuerto de Marrakech a Casablanca',
  lede: "Doscientos cuarenta kilómetros de autopista, o tres horas de tren desde la estación de Guéliz. La elección depende sobre todo de un detalle: ninguna línea ferroviaria llega al aeropuerto, hay que ir primero a la estación.",
  excerpt: 'Tren ONCF, autobús CTM, autopista o traslado privado entre el RAK y Casablanca: duraciones, precios y el enlace hasta la estación.',
  date: '2026-09-02',
  facts: [
    { label: 'Distancia', value: '240', sub: 'km' },
    { label: 'Autopista', value: '2 h 30', sub: 'de carretera' },
    { label: 'Tren ONCF', value: '≈ 3 h', sub: 'desde Guéliz' },
    { label: 'Billete 2.ª clase', value: '100–140', sub: 'MAD' },
  ],
  body: `
<h2>El tren, la mejor opción, con una reserva</h2>
<p>La ONCF une Marrakech con Casablanca en unas <strong>tres horas</strong>, con salidas regulares a lo largo del día. El billete cuesta del orden de <strong>100 a 140 MAD en segunda clase</strong> y de 150 a 210 MAD en primera, con asientos cómodos y equipaje a bordo.</p>
<p>La reserva está en el punto de partida: la estación de Marrakech se sitúa en el barrio de <strong>Guéliz</strong>, no en el aeropuerto. Calcule un taxi de 50 a 70 MAD desde el RAK, diez a quince minutos, más un margen de espera. El trayecto total se acerca por tanto a las cuatro horas.</p>
<p>Atención también a la estación de llegada: <strong>Casa-Voyageurs</strong> es la principal, mientras que <strong>Casa-Port</strong> está más cerca del centro y de la corniche. Compruebe cuál sirve a su destino.</p>

<h2>Las demás opciones</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Opción</th><th>Precio</th><th>Duración puerta a puerta</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Tren ONCF</strong></td><td class="num">100–140 MAD + taxi</td><td class="num">≈ 4 h</td></tr>
<tr><td><strong>Autobús CTM / Supratours</strong></td><td class="num">100–150 MAD + taxi</td><td class="num">4 h–4 h 30</td></tr>
<tr><td><strong>Traslado privado</strong></td><td class="num">130–170 € / vehículo</td><td class="num">2 h 30</td></tr>
<tr><td><strong>Coche de alquiler</strong></td><td class="num">desde 25 € / día + peajes</td><td class="num">2 h 30</td></tr>
</tbody>
</table>
</div>
<p>La autopista A7 une las dos ciudades sin dificultad, con peajes y áreas de servicio regulares. Es una carretera fácil, rápida y monótona.</p>

<h2>Caso particular: la conexión aérea</h2>
<p>Si aterriza en Marrakech y tiene que coger un vuelo en Casablanca Mohammed V, importan dos precisiones. El aeropuerto de Casablanca dispone de <strong>su propia estación de tren</strong>, conectada directamente con Casa-Voyageurs: el tren es por tanto pertinente de extremo a extremo. Y hay que contar, en total, de cinco a seis horas entre las dos terminales incluyendo los accesos: prevea margen o una noche allí.</p>
<div class="callout">
<span class="callout-label">El error que hay que evitar al reservar</span>
<p>CMN (Casablanca Mohammed V) aparece a menudo en cabeza de los resultados de búsqueda sobre Marruecos y está a 240 kilómetros de Marrakech. Si su destino es Marrakech, compruebe que su billete indica <strong>RAK</strong>.</p>
</div>

<h2>Qué opción elegir</h2>
<p><strong>El tren</strong> para uno o dos viajeros sin horarios ajustados: cómodo, puntual y barato. <strong>El traslado privado</strong> a partir de tres o cuatro pasajeros, o con horarios rígidos: sale de la terminal y llega a su dirección, sin cambios. <strong>El coche de alquiler</strong> solo si piensa continuar hacia Rabat o la costa.</p>
`,
  faqs: [
    {
      q: '¿Hay tren entre el aeropuerto de Marrakech y Casablanca?',
      a: "Desde el aeropuerto no: la estación de la ONCF de Marrakech está en el barrio de Guéliz, a diez o quince minutos en taxi de la terminal. Desde allí, el tren llega a Casablanca en unas tres horas.",
    },
    {
      q: '¿Cuánto cuesta el tren Marrakech-Casablanca?',
      a: "De 100 a 140 MAD en segunda clase y de 150 a 210 MAD en primera, con salidas regulares a lo largo del día. Añada de 50 a 70 MAD de taxi para llegar a la estación desde el aeropuerto.",
    },
    {
      q: '¿Qué distancia separa Marrakech de Casablanca?',
      a: "Unos 240 kilómetros por la autopista A7, es decir dos horas y media de carretera en coche, peajes incluidos. El tren tarda unas tres horas de estación a estación.",
    },
    {
      q: '¿Cuánto tiempo prever entre el RAK y el aeropuerto de Casablanca?',
      a: "De cinco a seis horas de terminal a terminal incluyendo los accesos. El aeropuerto Mohammed V tiene su propia estación conectada con Casa-Voyageurs, lo que hace pertinente el tren, pero el margen sigue siendo imprescindible.",
    },
  ],
} satisfies LocalizedArticle;
