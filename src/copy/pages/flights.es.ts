import type { LocalizedPage } from '../types';

export default {
  title: "Vuelos al aeropuerto de Marrakech-Menara: aerolíneas",
  description: "Vuelos al aeropuerto de Marrakech-Menara: aerolíneas que operan en el RAK, mejores épocas para reservar, equipaje de bajo coste y conexiones interiores.",
  eyebrow: 'Marrakech Menara · Vuelos',
  h1: 'Vuelos a Marrakech',
  lede: "El RAK es el aeropuerto más conectado de Marruecos después de Casablanca, con una densa red de rutas europeas y una estacionalidad marcada. Compare fechas y lea después lo que de verdad mueve el precio final.",
  widget: 'flight-search',
  body: `
<h2>Quién vuela a Marrakech</h2>
<p>Tres familias de aerolíneas se reparten el tráfico. Las <strong>compañías de bajo coste europeas</strong> —Ryanair, easyJet, Vueling, Transavia, Wizz Air— cubren la mayoría de las rutas directas desde España, Francia, Reino Unido, Bélgica, Países Bajos e Italia; son ellas las que explican la concentración de llegadas por la tarde-noche. Las <strong>compañías tradicionales</strong> —Royal Air Maroc, Iberia, Air Europa, Air France, Lufthansa, Brussels Airlines— ofrecen horarios más cómodos y equipaje incluido a tarifas superiores. Por último, <strong>Royal Air Maroc y Air Arabia Maroc</strong> conectan Marrakech con el resto del país y con varios destinos africanos.</p>

<h2>Cuándo suben los precios y cuándo bajan</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Periodo</th><th>Afluencia</th><th>Precio de los vuelos</th><th>Clima</th></tr></thead>
<tbody>
<tr><td><strong>Marzo–mayo</strong></td><td>Muy alta</td><td>Altos</td><td>Ideal, 22–28 °C</td></tr>
<tr><td><strong>Junio–agosto</strong></td><td>Media</td><td>Moderados salvo agosto</td><td>Muy caluroso, 38–45 °C</td></tr>
<tr class="row-highlight"><td><strong>Septiembre–noviembre</strong></td><td>Alta</td><td>Medios</td><td>Excelente, 24–30 °C</td></tr>
<tr><td><strong>Diciembre–febrero</strong></td><td>Picos en fiestas</td><td>Bajos fuera de fiestas</td><td>Suave de día, frío de noche</td></tr>
</tbody>
</table>
</div>
<p>La mejor ventana es de <strong>finales de septiembre a mediados de noviembre</strong>: el mejor clima del año, la medina recuperando su ritmo tras el verano y tarifas que aún no han entrado en la temporada de fiestas. Enero y febrero, fuera de vacaciones escolares, ofrecen los precios más bajos, a condición de aceptar noches por debajo de los 8 °C, algo que cuenta de verdad en un riad poco calefactado.</p>

<h2>El precio anunciado no es el precio pagado</h2>
<p>En una aerolínea de bajo coste, la diferencia entre el anuncio y el total se juega en tres líneas. El <strong>equipaje facturado</strong> añade a menudo 25 a 50 € por trayecto, a veces más que el propio billete. La <strong>selección de asiento</strong> se cobra en cuanto se viaja acompañado y se quiere ir junto. Y el <strong>equipaje de mano</strong> es de pago más allá de una bolsa pequeña en varias compañías, con controles aplicados con rigor en la salida de Marrakech.</p>
<div class="callout">
<span class="callout-label">La cuenta que hay que hacer</span>
<p>Sume siempre la vuelta antes de comparar. Una ida y vuelta de bajo coste a 79 € se convierte en 179 € con dos maletas facturadas y asientos reservados, un nivel en el que una compañía tradicional, con equipaje incluido y horarios diurnos, vuelve a ser competitiva.</p>
</div>

<h2>Conexiones con el resto de Marruecos</h2>
<p>Desde Marrakech, los enlaces interiores pasan por Casablanca en la mayoría de los casos. Para Agadir, Essaouira u Ouarzazate, la carretera suele ser más rápida y mucho más barata una vez contados los tiempos de acceso. Para Fez o Tánger, el tren de la ONCF desde la estación de Guéliz es una alternativa cómoda: solo hay que prever el trayecto entre el aeropuerto y la estación, que ninguna línea ferroviaria cubre.</p>
<p>Si su vuelo llega tarde y su conexión interior sale pronto, duerma en Marrakech y no en el aeropuerto: los hoteles cercanos al RAK están a diez minutos y cuestan menos que un billete modificado.</p>
`,
  faqs: [
    {
      q: '¿Qué aerolíneas operan en el aeropuerto de Marrakech?',
      a: "Principalmente Ryanair, easyJet, Vueling, Transavia y Wizz Air en las rutas europeas de bajo coste, además de Royal Air Maroc, Iberia, Air Europa, Air France, Lufthansa y Brussels Airlines en vuelos tradicionales. Royal Air Maroc y Air Arabia Maroc cubren los enlaces interiores y africanos.",
    },
    {
      q: '¿Cuál es la mejor época para volar a Marrakech?',
      a: "De finales de septiembre a mediados de noviembre: el clima es óptimo, entre 24 y 30 °C, y las tarifas siguen siendo razonables antes de la temporada de fiestas. Enero y febrero fuera de vacaciones escolares ofrecen los precios más bajos, con noches frescas.",
    },
    {
      q: '¿Cuánto dura un vuelo a Marrakech?',
      a: "Unas 2 h 45 desde Madrid, 2 h 30 desde Barcelona, 3 h 20 desde París, 3 h 30 desde Bruselas y Londres, y 3 h 45 desde Ámsterdam.",
    },
    {
      q: '¿Hay vuelos directos entre Marrakech y otras ciudades marroquíes?',
      a: "Pocos, y la mayoría hacen escala en Casablanca. Para Agadir, Essaouira u Ouarzazate, la carretera es más rápida y barata una vez contados los tiempos de acceso. Para Fez y Tánger, el tren de la ONCF desde la estación de Guéliz es una buena alternativa.",
    },
    {
      q: '¿Con cuánta antelación conviene reservar un vuelo a Marrakech?',
      a: "De seis a diez semanas en las rutas de bajo coste en temporada normal. Para vacaciones escolares, Navidad y primavera, apunte más bien a tres o cuatro meses: son los periodos en los que los precios se duplican más rápido.",
    },
  ],
  cta: {
    heading: 'Compare los vuelos a Marrakech',
    text: "Todas las aerolíneas que operan en el RAK, en las fechas que elija, con el detalle de escalas y duraciones.",
    label: 'Buscar un vuelo',
    href: '/es/flights/',
  },
} satisfies LocalizedPage;
