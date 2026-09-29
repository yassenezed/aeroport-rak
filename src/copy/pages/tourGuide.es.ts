import type { LocalizedPage } from '../types';

export default {
  title: "Guía en Marrakech desde el aeropuerto de Marrakech-Menara",
  description: "Guía turístico en Marrakech desde el aeropuerto de Marrakech-Menara: visitas a la medina, excursiones a Agafay y al Atlas, precios 2026 y guías oficiales.",
  eyebrow: "Visitas guiadas · medina y excursiones",
  h1: "Guía turístico en Marrakech: visitas y excursiones",
  lede: "A quince minutos del aeropuerto de Marrakech-Menara, la medina cuesta entenderla solo el primer día. Un guía oficial durante media jornada bien elegida ahorra más tiempo y dinero del que cuesta. Estas son las visitas que merecen la pena, los precios reales y cómo evitar a los falsos guías.",
  widget: 'tours',
  highlights: [
    { icon: 'users', value: "300–500 MAD", label: "Guía oficial, media jornada" },
    { icon: 'clock', value: "3–4 horas", label: "Para entender la medina" },
    { icon: 'shield-check', value: "Carné oficial", label: "Expedido por el Ministerio de Turismo" },
  ],
  cardSections: [
    {
      eyebrow: "Ideas de visitas",
      heading: "Las visitas guiadas que merecen la pena en Marrakech",
      intro: "Todas se alcanzan fácilmente desde el aeropuerto de Marrakech-Menara o desde su riad.",
      variant: 'feature',
      items: [
        { icon: 'map', title: "Medina y zocos", text: "El mejor uso de un guía, el primer día: los barrios, las puertas, los zocos de artesanos y dónde comprar qué y a qué precio.", tags: ["Media jornada", "A pie"] },
        { icon: 'building', title: "Palacios y monumentos", text: "Palacio de la Bahía, tumbas saadíes, madrasa Ben Youssef: sin apenas carteles explicativos, la visita queda muda sin comentario.", tags: ["2–3 horas", "Entradas aparte"] },
        { icon: 'sparkles', title: "Jardín Majorelle y Guéliz", text: "El jardín azul de Yves Saint Laurent, el museo bereber y la ciudad nueva. Reserve las entradas con antelación: las colas son largas.", tags: ["2 horas", "Reservar entradas"] },
        { icon: 'sun', title: "Desierto de Agafay", text: "El desierto de piedra a 40 minutos de la ciudad: puesta de sol sobre el Atlas, cena en jaima, paseo en dromedario o en quad.", tags: ["Media jornada", "Tarde"] },
        { icon: 'wave', title: "Valle del Ourika e Imlil", text: "Aldeas bereberes, cascadas y las primeras cumbres del Alto Atlas, a una hora u hora y media. El guía hace también de intérprete.", tags: ["Jornada", "Senderismo"] },
        { icon: 'van', title: "Esauira y Uzud", text: "La ciudad portuaria declarada patrimonio a 2 h 30, o las cascadas de Uzud a 3 horas: jornadas largas, más cómodas con conductor-guía.", tags: ["Jornada", "Conductor-guía"] },
      ],
    },
  ],
  steps: {
    heading: "Reservar un guía en Marrakech sin sorpresas",
    intro: "Tres puntos que conviene cerrar antes de empezar, reserve en línea o allí.",
    items: [
      { icon: 'shield-check', title: "Compruebe el carné oficial", text: "Un guía autorizado muestra sin problema su carné profesional del Ministerio de Turismo, con foto y número." },
      { icon: 'clipboard', title: "Fije duración y contenido", text: "Acuerde de antemano la duración exacta, los lugares y lo que incluye: entradas, transporte, comida." },
      { icon: 'alert', title: "Rechace las paradas en tiendas", text: "Diga desde el principio que la visita no tendrá paradas comerciales. Un guía oficial lo acepta sin discutir." },
    ],
  },
  body: `
<h2>Guía oficial o falso guía: la diferencia es legal</h2>
<p>Un guía turístico marroquí tiene un <strong>carné profesional expedido por el Ministerio de Turismo</strong>, con su foto y su número. Se ha formado, ha aprobado un examen y ejerce legalmente. Pídaselo: un guía oficial lo muestra sin problema.</p>
<p>Quienes abordan a los visitantes alrededor de Jemaa el-Fna o en las puertas de la medina para «enseñar el camino» casi nunca tienen ese carné. La visita acaba casi siempre en una tienda que les paga comisión, y el precio anunciado nunca es el final. Téngalo presente desde que aterrice en el aeropuerto de Marrakech-Menara.</p>

<h2>Cuánto cuesta un guía en Marrakech en 2026</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Servicio</th><th>Precio orientativo</th><th>Duración</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Guía oficial, medina</strong></td><td class="num">300–500 MAD</td><td>Media jornada</td></tr>
<tr><td><strong>Guía oficial, jornada completa</strong></td><td class="num">500–800 MAD</td><td>8 horas</td></tr>
<tr><td><strong>Visita guiada en grupo</strong></td><td class="num">15–30 € / persona</td><td>3–4 horas</td></tr>
<tr><td><strong>Excursión con conductor-guía</strong></td><td class="num">60–120 € / vehículo</td><td>Jornada, Ourika o Agafay</td></tr>
</tbody>
</table>
</div>
<p>Los precios son solo del guía, sin entradas a monumentos, comida ni transporte. Una propina de 50 a 100 MAD al final es habitual si la visita ha sido buena, pero no obligatoria.</p>

<h2>Dónde un guía cambia de verdad las cosas</h2>
<p><strong>La medina y los zocos</strong>, el primer día. En tres horas entiende la lógica de los barrios, sitúa las puertas y aprende dónde comprar qué y a qué precio: el resto de la estancia se vuelve mucho más fácil. <strong>Los monumentos históricos</strong>, donde la falta de señalización deja la visita muda sin comentario. <strong>Las excursiones al Atlas y a los valles</strong>, donde el guía hace también de intérprete del bereber.</p>
<div class="callout">
<span class="callout-label">Dónde un guía no aporta nada</span>
<p>Para pasear por Jemaa el-Fna de noche, una cena, un día de piscina o Agafay con todo incluido: el guía no aporta nada, el acompañamiento ya forma parte del servicio.</p>
</div>

<h2>¿Reservar antes de salir o allí?</h2>
<p>Su <strong>riad u hotel</strong> casi siempre trabaja con un guía oficial de confianza: es lo más sencillo y el precio sigue siendo negociable. Las <strong>plataformas en línea</strong> permiten comparar opiniones, elegir el idioma y fijar el precio de antemano, algo útil en temporada alta. Las <strong>visitas con audioguía</strong> de arriba se hacen solo, con el móvil y auriculares, desde unos 10 €: una opción económica para descubrir la medina a su ritmo, sin cita. Para llegar a la medina desde el aeropuerto, reserve un <a href="/es/book-transfer/">traslado</a>; para una excursión por su cuenta, vea el <a href="/es/car-rental/">alquiler de coches</a> y nuestras páginas <a href="/es/blog/distance-essaouira-marrakech-airport/">Marrakech–Esauira</a> y <a href="/es/blog/distance-ouarzazate-marrakech-airport/">Marrakech–Uarzazat</a>.</p>
`,
  faqHeading: "Guía turístico en Marrakech: preguntas frecuentes",
  faqs: [
    { q: "¿Cuánto cuesta un guía oficial en Marrakech?", a: "De 300 a 500 MAD por media jornada en la medina, y de 500 a 800 MAD por jornada completa, sin entradas ni comida. Una propina de 50 a 100 MAD es habitual si la visita ha sido buena." },
    { q: "¿Cómo reconocer a un guía oficial en Marrakech?", a: "Tiene un carné profesional expedido por el Ministerio de Turismo, con foto y número, y lo muestra sin problema. Quienes abordan a los visitantes en la calle para ofrecer una visita no suelen tenerlo." },
    { q: "¿Hace falta un guía para visitar la medina de Marrakech?", a: "No es obligatorio, pero media jornada guiada el primer día es una de las mejores inversiones del viaje: entiende los zocos, sitúa las puertas y luego se mueve solo sin perderse." },
    { q: "¿Qué excursiones hacer desde Marrakech con guía?", a: "El desierto de Agafay a 40 minutos, el valle del Ourika e Imlil en el Alto Atlas a una hora u hora y media, y jornadas completas a Esauira (2 h 30) o a las cascadas de Uzud (3 horas)." },
    { q: "¿Cómo evitar las visitas que acaban en tiendas?", a: "Diga al principio que la visita no tendrá paradas comerciales y acuerde la duración y lo incluido. Un guía oficial lo acepta sin problema: es lo que lo distingue de un gancho que cobra comisión." },
    { q: "¿Se puede reservar un guía antes de aterrizar en Marrakech?", a: "Sí, a través de su riad u hotel, o en una plataforma en línea que permita comparar opiniones y elegir idioma. En temporada alta o para un idioma poco común, reserve con varios días de antelación." },
    { q: "¿Puede el guía recogerme en el aeropuerto de Marrakech-Menara?", a: "Los guías no suelen hacer el transporte. Reserve un traslado hasta su riad y reúnase con el guía a la mañana siguiente en la puerta de la medina más cercana." },
    { q: "¿Qué es una visita con audioguía de Marrakech?", a: "Un recorrido comentado que sigue solo con el móvil y auriculares, desde unos 10 €. Menos personalizado que un guía oficial, permite descubrir la medina o los monumentos a su ritmo, sin cita." },
    { q: "¿Hay que dar propina al guía?", a: "No es obligatorio, pero sí habitual si la visita ha sido buena: 50 a 100 MAD por media jornada, algo más por una jornada completa o un grupo pequeño." },
  ],
  cta: {
    heading: "Del aeropuerto al riad, antes de la primera visita",
    text: "Un conductor le espera en el aeropuerto de Marrakech-Menara y le deja en la puerta de la medina más cercana: a la mañana siguiente, su guía le espera allí.",
    label: "Reservar un traslado",
  },
} satisfies LocalizedPage;
