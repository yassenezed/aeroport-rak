import type { LocalizedArticle } from '../types';

export default {
  title: "Tarjeta SIM en el aeropuerto de Marrakech-Menara",
  description: "Comprar una tarjeta SIM en el aeropuerto de Marrakech-Menara: tarifas turísticas de los tres operadores, precios, cobertura en el Atlas y alternativa eSIM.",
  eyebrow: 'Práctico',
  h1: 'Qué tarjeta SIM elegir en Marruecos',
  lede: "Tres operadores, tarifas turísticas por unas decenas de dirhams y mostradores en la sala de llegadas. Este es el que conviene elegir según su itinerario, y cuándo una eSIM cumple mejor.",
  excerpt: 'Maroc Telecom, Orange o inwi: precios, datos incluidos, cobertura en el Atlas y comparación con una eSIM activada antes de salir.',
  date: '2026-09-11',
  body: `
<h2>Los tres operadores</h2>
<p>El mercado marroquí se reparte entre <strong>Maroc Telecom (IAM)</strong>, <strong>Orange Maroc</strong> e <strong>inwi</strong>. Los tres tienen mostradores en la sala de llegadas del aeropuerto de Marrakech, abiertos con amplio horario, y ofrecen tarifas de prepago pensadas para visitantes.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Operador</th><th>Punto fuerte</th><th>Cobertura</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Maroc Telecom</strong></td><td>La mejor cobertura fuera de las ciudades</td><td>Excelente, incluidos el Atlas y el sur</td></tr>
<tr><td><strong>Orange Maroc</strong></td><td>Buena relación datos/precio, interfaz familiar</td><td>Muy buena en zonas urbanas y turísticas</td></tr>
<tr><td><strong>inwi</strong></td><td>A menudo el más barato en datos</td><td>Buena en ciudad, más irregular en montaña</td></tr>
</tbody>
</table>
</div>
<p>El criterio decisivo no es el precio, que está muy igualado, sino <strong>su itinerario</strong>. Si se queda en Marrakech, Essaouira y los grandes ejes, los tres sirven. Si prevé el Atlas, los valles, Imlil o la carretera de Ouarzazate, Maroc Telecom sigue siendo la opción más segura.</p>

<h2>Lo que cuesta una tarifa turística</h2>
<p>Calcule <strong>50 a 100 MAD</strong> por una tarjeta SIM de prepago que incluya varios gigabytes válidos de una a cuatro semanas, a menudo con crédito de llamadas nacionales. Las recargas se encuentran en todas partes: tiendas de operadores, ultramarinos, quioscos.</p>
<p>Cuidado con las ofertas anunciadas como «ilimitadas»: suelen incluir un volumen a partir del cual la velocidad se reduce mucho. Para un uso turístico —mapas, mensajería, algunas búsquedas—, <strong>de 5 a 10 GB cubren de sobra una o dos semanas</strong>.</p>

<h2>El trámite en el mostrador</h2>
<ol>
<li><strong>Presente su pasaporte</strong>: el registro de identidad es obligatorio, sin excepción.</li>
<li>Elija la tarifa y pague, preferiblemente en efectivo.</li>
<li>El agente instala la SIM y comprueba la activación delante de usted: <strong>no se vaya sin haber visto funcionar los datos</strong>.</li>
<li>Apunte su nuevo número marroquí: lo necesitará para sus reservas y para que su riad o su conductor puedan localizarle.</li>
</ol>
<p>Su teléfono debe estar <strong>libre de operador</strong> para aceptar una SIM extranjera. Es lo que más suele bloquear, y no se resuelve en el mostrador.</p>

<h2>¿SIM local o eSIM?</h2>
<p>La <strong>eSIM</strong> se instala antes de salir, se activa al aterrizar y le evita la cola, los papeles y el cambio de número. Es la mejor solución para una estancia corta si su teléfono es compatible: vea nuestra página <a href="/es/morocco-esim/">eSIM Marruecos</a>.</p>
<p>La <strong>SIM local</strong> conserva dos ventajas claras: permite llamar a números marroquíes a tarifa local, algo que cuenta si necesita contactar con un riad, una empresa de alquiler o un guía; y resulta mucho más económica en estancias de más de dos o tres semanas.</p>
<div class="callout">
<span class="callout-label">Antes de salir de la sala</span>
<p>Descargue el mapa de Marrakech sin conexión mientras siga conectado al wifi del aeropuerto. Los callejones de la medina no corresponden a ninguna placa de calle, y un mapa sin conexión consume mucho menos que una navegación en directo.</p>
</div>
`,
  faqs: [
    {
      q: '¿Qué operador elegir en Marruecos?',
      a: "Maroc Telecom por la mejor cobertura fuera de las ciudades, sobre todo en el Atlas y hacia el sur. Orange por una buena relación datos/precio en zonas urbanas y turísticas. inwi suele ser el más barato pero más irregular en montaña.",
    },
    {
      q: '¿Cuánto cuesta una tarjeta SIM en el aeropuerto de Marrakech?',
      a: "De 50 a 100 MAD por una SIM de prepago con varios gigabytes válidos de una a cuatro semanas, con crédito de llamadas nacionales. Las recargas se encuentran en todas las tiendas y ultramarinos.",
    },
    {
      q: '¿Hace falta pasaporte para comprar una tarjeta SIM en Marruecos?',
      a: "Sí, el registro de identidad es obligatorio y sin excepción. Su teléfono debe estar además libre de operador para aceptar una tarjeta SIM extranjera.",
    },
    {
      q: '¿Cuántos datos prever para una semana en Marruecos?',
      a: "De cinco a diez gigabytes cubren de sobra una o dos semanas de uso turístico. Descargue el mapa de Marrakech sin conexión antes de salir: es lo que más consume en navegación.",
    },
  ],
} satisfies LocalizedArticle;
