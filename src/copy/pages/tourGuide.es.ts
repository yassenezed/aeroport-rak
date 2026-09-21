import type { LocalizedPage } from '../types';

export default {
  title: 'Contratar un guía en Marrakech: ¿merece la pena?',
  description: 'Contratar un guía en Marrakech: tarifas, guías oficiales, visitas a la medina, excursiones al Atlas y los errores que conviene evitar desde el primer día.',
  eyebrow: 'Marrakech · Visitas guiadas',
  h1: 'Contratar un guía en Marrakech',
  lede: "Marrakech es una ciudad difícil de leer solo el primer día. Un guía oficial, en una media jornada bien elegida, ahorra más tiempo y dinero del que cuesta, siempre que sepa qué está comprando.",
  body: `
<h2>Guía oficial o falso guía: la diferencia es legal</h2>
<p>Un guía turístico marroquí posee una <strong>tarjeta profesional expedida por el Ministerio de Turismo</strong>, con su fotografía y su número, renovada periódicamente. Ha recibido formación, ha aprobado un examen y ejerce legalmente. Pídasela: un guía oficial la enseña sin problema.</p>
<p>Las personas que abordan a los visitantes cerca de Jemaa el-Fna o en las puertas de la medina ofreciéndose a «enseñar el camino» o a «hacer una visita por los zocos» no tienen, en su gran mayoría, esa tarjeta. El servicio termina casi siempre en una tienda que les paga comisión, y el precio anunciado al principio nunca es el precio final. No es peligroso, simplemente es una pérdida de tiempo y de dinero.</p>

<h2>Cuánto cuesta</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Servicio</th><th>Tarifa indicativa</th><th>Duración</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Guía oficial, medina</strong></td><td class="num">300–500 MAD</td><td>Media jornada</td></tr>
<tr><td><strong>Guía oficial, jornada completa</strong></td><td class="num">500–800 MAD</td><td>8 horas</td></tr>
<tr><td><strong>Visita guiada en grupo</strong></td><td class="num">15–30 € / persona</td><td>3–4 horas</td></tr>
<tr><td><strong>Excursión con chófer-guía</strong></td><td class="num">60–120 € / vehículo</td><td>Jornada, Ourika o Agafay</td></tr>
</tbody>
</table>
</div>
<p>Las tarifas corresponden al guía, sin entradas a monumentos, sin comida y sin transporte. Una propina de 50 a 100 MAD al final de la visita es habitual cuando el servicio ha sido bueno, sin ser obligatoria.</p>

<h2>Dónde un guía cambia realmente las cosas</h2>
<p><strong>La medina y los zocos</strong>, el primer día. Es el uso más rentable: en tres horas se entiende la lógica de los barrios, se sitúan las puertas y se aprende dónde comprar qué y a qué precio. El resto de la estancia resulta mucho más sencillo.</p>
<p><strong>Los monumentos históricos</strong> —palacio de la Bahía, tumbas saadíes, madraza Ben Youssef—, donde la ausencia casi total de cartelería explicativa deja la visita muda sin comentario.</p>
<p><strong>Las excursiones al Atlas y a los valles</strong>, donde el guía hace además de intérprete de bereber y abre puertas que de otro modo seguirían cerradas.</p>
<div class="callout">
<span class="callout-label">Dónde un guía no sirve de nada</span>
<p>Para pasear por Jemaa el-Fna al atardecer, para cenar, para un día de piscina o para Agafay en fórmula todo incluido: el guía no aporta nada y el acompañamiento ya forma parte del servicio.</p>
</div>

<h2>Reservar: ¿antes o en el momento?</h2>
<p>Funcionan dos enfoques. Su <strong>riad u hotel</strong> trabaja casi siempre con un guía oficial que conoce: es la solución más sencilla, a menudo la más segura, y el precio sigue siendo negociable. Las <strong>plataformas de reserva en línea</strong> permiten comparar opiniones y bloquear la tarifa por adelantado, útil en temporada alta o si quiere una visita en un idioma concreto.</p>
<p>En ambos casos, acuerde de antemano tres puntos: la duración exacta, lo que está incluido y que la visita <strong>no incluirá ninguna parada en tiendas</strong>. Esa última frase, dicha con claridad al principio, evita la mayoría de las decepciones.</p>
`,
  faqs: [
    {
      q: '¿Cuánto cuesta un guía oficial en Marrakech?',
      a: "Entre 300 y 500 MAD por media jornada en la medina, y de 500 a 800 MAD por una jornada completa, sin entradas a monumentos ni comida. Una propina de 50 a 100 MAD es habitual si el servicio ha sido bueno.",
    },
    {
      q: '¿Cómo reconocer a un guía oficial en Marrakech?',
      a: "Tiene una tarjeta profesional expedida por el Ministerio de Turismo, con su foto y su número, y la enseña sin problema si se la pide. Quienes abordan a los visitantes por la calle para ofrecer una visita no suelen tenerla.",
    },
    {
      q: '¿Hace falta un guía para visitar la medina de Marrakech?',
      a: "No obligatoriamente, pero media jornada guiada el primer día es una de las mejores inversiones del viaje: se entiende la geografía de los zocos, se sitúan las puertas y después se circula solo. Los monumentos históricos, sin cartelería, también ganan mucho con un comentario.",
    },
    {
      q: '¿Cómo evitar las visitas que acaban en una tienda?',
      a: "Anuncie al principio, con claridad, que la visita no incluirá ninguna parada comercial, y acuerde de antemano la duración y lo que está incluido. Un guía oficial lo acepta sin problema; es precisamente lo que lo distingue de un captador a comisión.",
    },
    {
      q: '¿Se puede reservar un guía antes de llegar a Marrakech?',
      a: "Sí, a través de su riad u hotel, que suele trabajar con un guía oficial conocido, o mediante una plataforma en línea que permite comparar opiniones y elegir el idioma. Reserve con antelación en temporada alta y para idiomas distintos del francés o el inglés.",
    },
  ],
} satisfies LocalizedPage;
