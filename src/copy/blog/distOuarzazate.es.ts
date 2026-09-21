import type { LocalizedArticle } from '../types';

export default {
  title: 'Marrakech → Ouarzazate por el puerto de Tichka',
  description: 'Ir del aeropuerto de Marrakech a Ouarzazate: 200 km por el puerto de Tichka a 2.260 m, 4 h de carretera, autobuses CTM, traslados y consejos.',
  eyebrow: 'Distancias',
  h1: 'Del aeropuerto de Marrakech a Ouarzazate',
  lede: "Solo doscientos kilómetros, pero cuatro horas de carretera: entre las dos ciudades se alza el puerto de Tichka, a 2.260 metros. Es uno de los trayectos más bonitos de Marruecos y uno de los que no hay que subestimar.",
  excerpt: '200 km y 4 h por el Tichka: duración real, opciones de transporte, condiciones invernales y consejos para no perderse Ait Ben Haddou.',
  date: '2026-08-31',
  facts: [
    { label: 'Distancia', value: '200', sub: 'km' },
    { label: 'Duración real', value: '4 h', sub: 'de carretera' },
    { label: 'Altitud del puerto', value: '2.260', sub: 'm' },
    { label: 'Autobús CTM', value: '100–150', sub: 'MAD' },
  ],
  body: `
<h2>Por qué cuatro horas para doscientos kilómetros</h2>
<p>La N9 cruza el Alto Atlas por el <strong>puerto de Tichka, a 2.260 metros</strong>. La carretera se ha ensanchado y asegurado en los últimos años, pero sigue siendo una sucesión de curvas a lo largo de decenas de kilómetros, con camiones lentos y adelantamientos que negociar. La media real ronda los cincuenta kilómetros por hora.</p>
<p>No es un inconveniente: es uno de los itinerarios más bonitos del país, con pueblos colgados de las laderas, puertos panorámicos y un cambio completo de paisaje en la vertiente sur, donde el verde deja paso al ocre.</p>

<h2>Las opciones</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Opción</th><th>Precio</th><th>Duración</th><th>Salida</th></tr></thead>
<tbody>
<tr><td><strong>Autobús CTM / Supratours</strong></td><td class="num">100–150 MAD / persona</td><td class="num">4 h 30–5 h</td><td>Estación de autobuses de Marrakech</td></tr>
<tr class="row-highlight"><td><strong>Traslado privado</strong></td><td class="num">120–160 € / vehículo</td><td class="num">4 h</td><td>Terminal del aeropuerto</td></tr>
<tr><td><strong>Coche de alquiler</strong></td><td class="num">desde 25 € / día</td><td class="num">4 h</td><td>Mostradores del aeropuerto</td></tr>
<tr><td><strong>Grand taxi</strong></td><td class="num">800–1.200 MAD / vehículo</td><td class="num">4 h</td><td>La parada, a negociar</td></tr>
</tbody>
</table>
</div>

<h2>Conducir el Tichka</h2>
<ul>
<li><strong>Salga por la mañana.</strong> La carretera de noche no tiene ningún interés y la visibilidad en las curvas lo cambia todo.</li>
<li><strong>Prevea pausas.</strong> Los puertos se suben despacio: cuatro horas de curvas cansan más que cuatro de autopista.</li>
<li><strong>Cuidado en invierno.</strong> La nieve y el hielo cierran a veces el puerto entre diciembre y febrero. Consulte el estado de la carretera antes de salir.</li>
<li><strong>Mareo.</strong> Los niños y los pasajeros sensibles lo llevan mal: lleve algo para remediarlo.</li>
<li><strong>Combustible.</strong> Llene el depósito en Marrakech: las gasolineras están espaciadas en el tramo alto.</li>
</ul>
<div class="callout">
<span class="callout-label">No se salte Ait Ben Haddou</span>
<p>El ksar declarado Patrimonio de la Humanidad se encuentra a unos treinta kilómetros antes de Ouarzazate, ligeramente apartado de la N9. Es uno de los lugares más espectaculares de Marruecos, y perdérselo por ir directo a Ouarzazate sería una lástima. Calcule una o dos horas de visita.</p>
</div>

<h2>Ida y vuelta en el día: mejor evitarlo</h2>
<p>Ocho horas de carretera para unas horas allí, en una carretera de montaña: es factible, es agotador y vacía el trayecto de su interés. <strong>Una noche en Ouarzazate o en Ait Ben Haddou</strong> cambia por completo la experiencia y permite ver la vertiente sur con la luz de la mañana.</p>
<p>Si continúa hacia las gargantas del Dadès, el valle del Draa o Merzouga, Ouarzazate es de todos modos una etapa natural más que un destino final.</p>
`,
  faqs: [
    {
      q: '¿Cuánto se tarda de Marrakech a Ouarzazate?',
      a: "Unas cuatro horas para 200 kilómetros, porque la N9 cruza el puerto de Tichka a 2.260 metros por una larga sucesión de curvas. La media real ronda los cincuenta kilómetros por hora.",
    },
    {
      q: '¿Es peligrosa la carretera del Tichka?',
      a: "Se ha ensanchado y asegurado en los últimos años y no presenta dificultad particular de día, pero exige atención: curvas, camiones lentos y adelantamientos. En invierno, la nieve y el hielo pueden cerrar el puerto.",
    },
    {
      q: '¿Se puede hacer Ouarzazate en un día desde Marrakech?',
      a: "Es factible pero agotador: ocho horas de carretera de montaña para unas horas allí. Una noche en Ouarzazate o en Ait Ben Haddou cambia por completo la experiencia y permite ver la vertiente sur por la mañana.",
    },
    {
      q: '¿Cómo visitar Ait Ben Haddou desde Marrakech?',
      a: "El ksar declarado patrimonio se sitúa a unos treinta kilómetros antes de Ouarzazate, ligeramente apartado de la N9. Calcule una o dos horas de visita: es uno de los lugares más espectaculares del país y sería una lástima perdérselo.",
    },
  ],
} satisfies LocalizedArticle;
