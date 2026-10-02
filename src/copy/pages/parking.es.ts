import type { LocalizedPage } from '../types';

export default {
  title: "Parking aeropuerto de Marrakech-Menara: tarifas 2026",
  description: "Parking del aeropuerto de Marrakech-Menara: 3 aparcamientos, 1550 plazas, 6 MAD la 1.ª hora y 42 MAD las 24 h según la tarifa ONDA. Paradas y alternativas.",
  eyebrow: "Parking · tarifas y guía 2026",
  h1: "Parking del aeropuerto de Marrakech-Menara: tarifas y guía",
  lede: "Tres aparcamientos al aire libre frente a las terminales, más de 1500 plazas y tarifas muy económicas. Estos son los precios oficiales, la mejor forma de dejar o esperar a un viajero y el cálculo para un viaje de una semana.",
  highlights: [
    { icon: 'parking', value: "6 MAD", label: "La primera hora (≈ 0,55 €)" },
    { icon: 'clock', value: "42 MAD", label: "De 12 a 24 horas (≈ 3,90 €)" },
    { icon: 'map-pin', value: "1550 plazas", label: "En 3 aparcamientos" },
    { icon: 'shield-check', value: "24 h", label: "Vigilados día y noche" },
  ],
  cardSections: [
    {
      eyebrow: "Instalaciones",
      heading: "Los aparcamientos del aeropuerto de Marrakech-Menara",
      intro: "Tres aparcamientos en superficie, delante de la terminal, abiertos día y noche.",
      variant: 'feature',
      items: [
        { icon: 'parking', title: "Parking 1", text: "El mayor de los tres aparcamientos del aeropuerto, en superficie delante de la terminal.", tags: ["740 plazas", "24 h"] },
        { icon: 'parking', title: "Parking 2", text: "El segundo en capacidad, a pocos minutos a pie de las salas de salidas y llegadas.", tags: ["460 plazas", "24 h"] },
        { icon: 'parking', title: "Parking 3", text: "El más pequeño de los tres, con las mismas tarifas que los demás.", tags: ["350 plazas", "24 h"] },
      ],
    },
    {
      eyebrow: "Conviene saber",
      heading: "Seguridad y funcionamiento",
      variant: 'compact',
      items: [
        { icon: 'shield-check', title: "Vigilancia 24 h", text: "Vallados y vigilados día y noche, también para los vuelos tardíos." },
        { icon: 'board', title: "Tique a la entrada", text: "Barrera automática: guarde el tique, sirve para pagar a la salida." },
        { icon: 'wallet', title: "Pago antes de salir", text: "En caja o en el cajero; lleve dírhams en efectivo, la tarjeta no siempre se acepta." },
        { icon: 'sun', title: "Plazas al aire libre", text: "En verano el interior supera los 60 °C: parasol y nada sensible al calor dentro." },
      ],
    },
    {
      eyebrow: "Alternativas",
      heading: "¿Prefiere no aparcar? Las alternativas",
      variant: 'feature',
      items: [
        { icon: 'van', title: "Traslado privado", text: "Un conductor le deja y le recoge: sin buscar plaza ni dejar el coche al sol.", link: { key: 'bookTransfer', label: "Reservar un traslado" } },
        { icon: 'car', title: "Alquiler de coche", text: "Recoja el coche al llegar: la empresa de alquiler gestiona el aparcamiento de devolución.", link: { key: 'carRental', label: "Ver coches" } },
        { icon: 'bus', title: "Taxi o bus 19", text: "Taxi de la parada o bus 19 por 30 MAD: las opciones sin coche para llegar a la ciudad.", link: { key: 'transfers', label: "Comparar transportes" } },
      ],
    },
  ],
  body: `
<h2>Tarifas del parking del aeropuerto de Marrakech-Menara</h2>
<p>Tarifa de la Oficina Nacional de Aeropuertos (ONDA) para coches al aire libre:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Duración</th><th>Coche</th><th>En euros (≈)</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Hasta 1 hora</strong></td><td class="num">6 MAD</td><td class="num">0,55 €</td></tr>
<tr><td><strong>De 1 a 2 horas</strong></td><td class="num">9 MAD</td><td class="num">0,85 €</td></tr>
<tr><td><strong>De 2 a 3 horas</strong></td><td class="num">11 MAD</td><td class="num">1 €</td></tr>
<tr><td><strong>De 3 a 4 horas</strong></td><td class="num">15 MAD</td><td class="num">1,40 €</td></tr>
<tr><td><strong>De 4 a 5 horas</strong></td><td class="num">17 MAD</td><td class="num">1,60 €</td></tr>
<tr><td><strong>De 5 a 12 horas</strong></td><td class="num">22 MAD</td><td class="num">2 €</td></tr>
<tr><td><strong>De 12 a 24 horas</strong></td><td class="num">42 MAD</td><td class="num">3,90 €</td></tr>
</tbody>
</table>
</div>
<p class="small">Autocares y vehículos pesados: 8 MAD la primera hora, 42 MAD de 12 a 24 horas. Tarifa orientativa que la ONDA puede revisar: prevalece el cartel de la entrada. Conversión aproximada 1 € ≈ 10,8 MAD.</p>

<h2>¿Cuánto cuesta una semana de parking?</h2>
<p>A 42 MAD por cada periodo de 24 horas, cuente <strong>unos 300 MAD (≈ 27 €) por 7 días</strong>, una cantidad muy modesta frente a los aeropuertos europeos. En comparación, un taxi de ida y vuelta a la medina cuesta 200–300 MAD de día, y dos <a href="/es/book-transfer/">traslados privados</a> unos 580 MAD (≈ 54 €). Si vive en Marrakech o su región y viaja una semana, el parking del aeropuerto suele ser lo más barato.</p>
<div class="callout">
<span class="callout-label">El verdadero coste oculto: el sol</span>
<p>Las plazas están al aire libre. En verano, un coche aparcado una semana en Marrakech soporta un calor extremo: parasol en el parabrisas, nada electrónico, ni medicamentos ni cosméticos dentro, y ventanillas bien cerradas.</p>
</div>

<h2>Dejar o esperar a un viajero</h2>
<p>El carril frente a las terminales sirve para parar y descargar el equipaje, no para aparcar: los agentes hacen circular rápido, sobre todo por la tarde. Para esperar a alguien, entre en el aparcamiento: <strong>la primera hora cuesta 6 MAD</strong>. Cuente 30 a 60 minutos entre el aterrizaje y la salida de la sala, por el control de pasaportes y el equipaje: siga el vuelo en nuestra página de <a href="/es/arrivals/">llegadas</a> antes de salir.</p>

<h2>Coche de alquiler: sin tique</h2>
<p>Si devuelve un coche de alquiler, siga la señalización de la empresa hasta su zona de devolución y no saque tique a la entrada del aparcamiento público. Calcule un cuarto de hora para la inspección y guarde fotos fechadas del coche entregado.</p>
`,
  faqHeading: "Parking del aeropuerto de Marrakech-Menara: preguntas frecuentes",
  faqs: [
    { q: "¿Cuánto cuesta el parking del aeropuerto de Marrakech?", a: "Según la tarifa ONDA, 6 MAD hasta 1 hora, 9 MAD hasta 2 horas, 22 MAD de 5 a 12 horas y 42 MAD de 12 a 24 horas para un coche. Prevalece el cartel de la entrada, ya que la tarifa puede revisarse." },
    { q: "¿Cuántas plazas tiene el parking del aeropuerto de Marrakech-Menara?", a: "Unas 1550 plazas en tres aparcamientos al aire libre: 740 en el parking 1, 460 en el parking 2 y 350 en el parking 3." },
    { q: "¿Cuánto cuesta una semana de parking?", a: "Unos 300 MAD (≈ 27 €) a 42 MAD por periodo de 24 horas. Suele ser más barato que un traslado privado de ida y vuelta, pero proteja el coche del sol." },
    { q: "¿Hay zona de parada gratuita?", a: "El carril frente a las terminales permite parar un momento para dejar pasajeros. Para esperar, entre en el aparcamiento: la primera hora cuesta 6 MAD." },
    { q: "¿Está vigilado el parking del aeropuerto?", a: "Sí, los aparcamientos están vallados y vigilados las 24 horas. Tome las precauciones habituales: nada visible dentro y nada sensible al calor." },
    { q: "¿Cómo se paga el parking?", a: "Saque el tique en la barrera de entrada y pague antes de volver al coche, en caja o en el cajero. Lleve dírhams en efectivo, la tarjeta no siempre se acepta." },
    { q: "¿Las plazas están cubiertas?", a: "La tarifa publicada corresponde a plazas al aire libre: no cuente con sombra. En verano, use un parasol y no deje electrónica ni medicamentos en el coche." },
    { q: "¿El parking abre por la noche?", a: "Sí, funciona las 24 horas, también para vuelos que llegan o salen de madrugada." },
  ],
  cta: {
    heading: "¿Prefiere no aparcar?",
    text: "Un traslado privado le deja y le recoge en el aeropuerto, sin buscar plaza ni dejar el coche al sol.",
    label: "Reservar un traslado",
    secondary: { label: "Alquilar un coche", key: 'carRental' },
  },
} satisfies LocalizedPage;
