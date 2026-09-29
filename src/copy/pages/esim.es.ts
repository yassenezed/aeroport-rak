import type { LocalizedPage } from '../types';

export default {
  title: "eSIM Marruecos: conectado en el aeropuerto Marrakech-Menara",
  description: "eSIM para Marruecos: conectado al bajar del avión en el aeropuerto de Marrakech-Menara, frente a una SIM local y la itinerancia.",
  eyebrow: 'Marrakech Menara · Conexión',
  h1: 'eSIM Marruecos: conectado desde el aterrizaje',
  lede: "Marruecos no está en la zona de itinerancia europea: su tarifa se vuelve allí muy cara o directamente inutilizable. Estas son las tres formas de resolverlo y la que le hará ganar veinte minutos a la llegada.",
  body: `
<h2>Por qué conviene prepararlo antes de salir</h2>
<p>Fuera de la Unión Europea, la itinerancia se factura a precio alto: varios euros por megabyte con algunos operadores, con facturas de tres cifras al volver. La mayoría de los viajeros desactivan por tanto los datos y se encuentran, a la salida de la terminal, sin forma de llamar a un riad, avisar a un conductor o abrir un mapa.</p>
<p>Es precisamente el momento en que más falta hace: para confirmar una puerta de la medina, encontrar un traslado o simplemente comprobar que se camina en la dirección correcta por callejones donde ninguna placa coincide con el mapa.</p>

<h2>Las tres opciones, comparadas</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Solución</th><th>Precio indicativo</th><th>Disponible</th><th>Límites</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>eSIM de prepago</strong></td><td class="num">4–15 € / semana</td><td>Desde el aterrizaje</td><td>Teléfono compatible y libre</td></tr>
<tr><td><strong>SIM local</strong></td><td class="num">≈ 50–100 MAD</td><td>Mostrador de llegadas</td><td>Cola, pasaporte, cambio de número</td></tr>
<tr><td><strong>Itinerancia de su tarifa</strong></td><td class="num">Muy variable</td><td>Inmediata</td><td>A menudo prohibitiva sin opción mundo</td></tr>
</tbody>
</table>
</div>

<h2>La eSIM, en concreto</h2>
<p>Una eSIM es una tarjeta SIM sin plástico: se compra en línea, se escanea un código QR y la tarifa se activa al aterrizar sin manipular ningún chip. Su número habitual sigue activo para llamadas y SMS, ya que la eSIM solo lleva los datos.</p>
<p>Tres comprobaciones antes de comprar: su teléfono debe <strong>admitir eSIM</strong> (todos los iPhone desde el XS, la mayoría de los Android recientes); debe estar <strong>libre de operador</strong>; y la instalación se hace <strong>mientras aún tiene wifi</strong>, es decir antes de despegar o desde el wifi del aeropuerto.</p>
<div class="callout">
<span class="callout-label">El volumen de datos adecuado</span>
<p>Para una estancia de una semana en Marrakech, de 3 a 5 GB bastan de sobra: mapas descargados sin conexión, mensajería, algunas búsquedas. No hace falta pagar por 20 GB, salvo que piense trabajar compartiendo conexión.</p>
</div>

<h2>Cuándo sigue siendo preferible la SIM local</h2>
<p>Si necesita <strong>llamar a números marroquíes</strong> —un riad, una empresa de alquiler, un guía—, una SIM local con voz es más práctica y más barata que una llamada internacional. Lo mismo ocurre en estancias largas, a partir de dos o tres semanas, donde las tarifas de Maroc Telecom, Orange o inwi se vuelven muy competitivas. Los mostradores están en la sala de llegadas: lleve su pasaporte y calcule unos diez minutos.</p>
<p>Nuestro artículo detallado sobre las <a href="/es/blog/morocco-sim-cards/">tarjetas SIM en Marruecos</a> compara las tarifas de los tres operadores y sus coberturas, incluida la del Atlas.</p>
`,
  faqs: [
    {
      q: '¿Funciona una eSIM nada más aterrizar en Marrakech?',
      a: "Sí, siempre que la haya instalado antes de salir, con wifi. La tarifa se activa automáticamente en cuanto su teléfono engancha una red marroquí, lo que le hace localizable antes incluso de pasar la policía de fronteras.",
    },
    {
      q: '¿Mi teléfono es compatible con eSIM?',
      a: "Lo son todos los iPhone desde el XS, los Google Pixel desde el 3 y la mayoría de los Samsung Galaxy S y Z recientes. El teléfono debe estar además libre de operador. Puede comprobarlo en los ajustes de red: una opción para añadir una tarifa eSIM confirma la compatibilidad.",
    },
    {
      q: '¿Cuántos datos hay que prever para una semana en Marrakech?',
      a: "De tres a cinco gigabytes bastan para un uso turístico: mapas, mensajería y búsquedas. Descargue el mapa de Marrakech sin conexión antes de salir, que es lo que más consume.",
    },
    {
      q: '¿eSIM o tarjeta SIM local?',
      a: "La eSIM para una estancia corta con necesidad solo de datos: sin cola, sin papeles, conexión inmediata. La SIM local si necesita llamar a números marroquíes o quedarse más de dos o tres semanas, ya que las tarifas locales resultan entonces mucho más ventajosas.",
    },
    {
      q: '¿Funciona la itinerancia europea en Marruecos?',
      a: "No, Marruecos no forma parte de la zona de itinerancia europea. Los datos se facturan a tarifa internacional, a menudo muy alta, salvo que su tarifa incluya explícitamente una opción mundo que cubra Marruecos.",
    },
  ],
} satisfies LocalizedPage;
