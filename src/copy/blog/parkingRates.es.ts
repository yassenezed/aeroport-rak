import type { LocalizedArticle } from '../types';

export default {
  title: "Tarifas del parking del aeropuerto de Marrakech-Menara",
  description: "Tarifas del parking del aeropuerto de Marrakech-Menara: precios por hora, día y semana, parada breve, pago y alternativas más baratas.",
  eyebrow: 'Aeropuerto',
  h1: 'Parking del aeropuerto de Marrakech: la tabla de tarifas',
  lede: "Muy barato para dejar a alguien, razonable para una ida y vuelta en el día, bastante menos evidente para una semana. Estos son los órdenes de magnitud y la cuenta que hay que hacer antes de dejar el coche.",
  excerpt: 'Precios por hora, día y semana en el parking del RAK, con las alternativas cuando la estancia larga deja de compensar.',
  date: '2026-09-06',
  facts: [
    { label: '30 minutos', value: 'gratis', sub: 'o ≈ 10 MAD' },
    { label: '1 hora', value: '≈ 20', sub: 'MAD' },
    { label: '24 horas', value: '70–80', sub: 'MAD' },
    { label: '1 semana', value: '450–550', sub: 'MAD' },
  ],
  body: `
<h2>La tabla, en órdenes de magnitud</h2>
<p>El aparcamiento del RAK funciona por duración, con un primer tramo corto gratuito o simbólico y después una facturación por horas que se limita al día. Las cifras siguientes se comprobaron en septiembre de 2026 y sirven de orden de magnitud: <strong>el panel de la entrada es el que manda</strong>, ya que el baremo se revisa periódicamente.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Duración</th><th>Tarifa indicativa</th><th>Uso habitual</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Menos de 30 minutos</strong></td><td class="num">gratis o ≈ 10 MAD</td><td>Dejar o recoger a alguien</td></tr>
<tr><td><strong>1 hora</strong></td><td class="num">≈ 20 MAD</td><td>Esperar un vuelo retrasado</td></tr>
<tr><td><strong>3 horas</strong></td><td class="num">≈ 40 MAD</td><td>Acompañar una salida</td></tr>
<tr><td><strong>24 horas</strong></td><td class="num">70–80 MAD</td><td>Ida y vuelta en el día</td></tr>
<tr><td><strong>3 días</strong></td><td class="num">≈ 200–240 MAD</td><td>Fin de semana largo</td></tr>
<tr><td><strong>1 semana</strong></td><td class="num">450–550 MAD</td><td>Viaje al extranjero</td></tr>
</tbody>
</table>
</div>
<p>El pago se efectúa en la máquina o en la caja <strong>antes</strong> de volver al vehículo. Lleve efectivo: la tarjeta no se acepta en todas las máquinas.</p>

<h2>El umbral a partir del cual deja de compensar</h2>
<p>Compare con lo que cuesta una ida y vuelta a la ciudad: dos trayectos en taxi a la tarifa publicada suponen <strong>200 a 300 MAD</strong>, o unos 54 € por dos traslados privados. Más allá de tres o cuatro días, el aparcamiento alcanza y luego supera ese importe, y además deja un vehículo expuesto al sol.</p>
<div class="callout">
<span class="callout-label">Los 60 °C del habitáculo</span>
<p>Un coche aparcado a pleno sol en Marrakech en verano supera con creces los 60 °C en su interior. No deje dentro aparatos electrónicos, cosméticos, medicamentos ni mecheros. Y nada visible en los asientos, como en cualquier otro sitio.</p>
</div>

<h2>Dejar y recoger</h2>
<p>La zona delante de las terminales permite una parada breve, y los agentes hacen circular rápido, sobre todo por la tarde. Si viene a recoger a alguien, recuerde que <strong>pasan de 30 a 60 minutos entre el aterrizaje y la salida de la sala</strong>: entre en el parking y espere allí en lugar de dar vueltas delante de la terminal.</p>

<h2>Coche de alquiler: no coja ticket</h2>
<p>Si devuelve un vehículo alquilado, el aparcamiento de entrega lo prevé la empresa. Siga la señalización de la agencia y no coja ticket en la entrada del parking público, o pagará un tiempo que no le corresponde. Calcule un cuarto de hora para la revisión y guarde fotos fechadas del vehículo entregado.</p>
`,
  faqs: [
    {
      q: '¿Cuánto cuesta un día de parking en el aeropuerto de Marrakech?',
      a: "Unos 70 a 80 MAD por 24 horas, con una facturación por horas de unos 20 MAD la hora por debajo. El panel de la entrada es el que manda y se revisa periódicamente.",
    },
    {
      q: '¿Es gratuita la dejada rápida en el RAK?',
      a: "El primer tramo, de unos treinta minutos, es gratuito o simbólico, lo que cubre una dejada o una recogida rápida. Los agentes hacen circular rápido delante de las terminales, sobre todo por la tarde.",
    },
    {
      q: '¿Cuánto cuesta una semana de aparcamiento en el aeropuerto de Marrakech?',
      a: "Unos 450 a 550 MAD. Más allá de tres o cuatro días, dos trayectos de ida y vuelta en taxi o traslado suelen costar menos y le evitan dejar un vehículo al sol.",
    },
    {
      q: '¿Se puede pagar el parking con tarjeta en Marrakech Menara?',
      a: "No en todas las máquinas: lleve efectivo en dirhams. El pago se realiza antes de volver al vehículo, en la máquina o en la caja.",
    },
  ],
} satisfies LocalizedArticle;
