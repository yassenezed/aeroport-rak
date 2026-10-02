import type { LocalizedPage } from '../types';

export default {
  title: "Monovolumen 7 a 9 plazas aeropuerto de Marrakech-Menara",
  description: "Alquile un monovolumen de 7 o 9 plazas en el aeropuerto de Marrakech-Menara desde 55 €/día: plazas y maletas reales, precios y la opción con conductor.",
  eyebrow: "Alquiler de monovolumen · familias y grupos",
  h1: "Alquiler de monovolumen en el aeropuerto de Marrakech-Menara",
  lede: "A partir de cinco personas, el problema no son los asientos sino el maletero. Esto es lo que caben realmente en los monovolúmenes y furgonetas del aeropuerto de Marrakech, lo que cuestan y cuándo sale más barata una furgoneta con conductor.",
  highlights: [
    { icon: 'users', value: "7 a 9", label: "Plazas, basta el carné B" },
    { icon: 'wallet', value: "Desde 55 €", label: "Por día, monovolumen 7 plazas" },
    { icon: 'luggage', value: "6–8 maletas", label: "En una furgoneta de 9 plazas" },
    { icon: 'shield-check', value: "Cancelación gratuita", label: "En la mayoría de ofertas" },
  ],
  widget: 'car-rental',
  widgetIntro: {
    heading: "Reservar un monovolumen en el aeropuerto de Marrakech-Menara",
    text: "Escriba «Marrakech» y elija «Marrakech Airport», luego sus fechas: filtre los resultados por vehículos de 7 plazas o más.",
  },
  cardSections: [
    {
      eyebrow: "La gama",
      heading: "¿Qué monovolumen elegir en Marrakech?",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Monovolumen 7 plazas", text: "Dacia Lodgy o Jogger: perfecto para 5 pasajeros con equipaje, o 7 con bolsas blandas.", tags: ["55–75 €/día", "1–2 maletas con 7"] },
        { icon: 'car', title: "Monovolumen confort", text: "Volkswagen Touran, Citroën Berlingo: más confort y un maletero algo mayor.", tags: ["70–95 €/día", "2 maletas con 7"] },
        { icon: 'van', title: "Furgoneta 9 plazas", text: "Renault Trafic, Volkswagen Transporter: la solución real para 6 a 9 personas con maletas.", tags: ["100–150 €/día", "6–8 maletas"] },
        { icon: 'users', title: "Minibús 12 a 16 plazas", text: "Mercedes Sprinter para grandes grupos y bodas, normalmente con conductor.", tags: ["150–220 €/día", "Con conductor"] },
      ],
    },
    {
      eyebrow: "Ventajas",
      heading: "Por qué alquilar un monovolumen en Marrakech",
      variant: 'feature',
      items: [
        { icon: 'wallet', title: "Más barato que dos coches", text: "Un vehículo, un depósito, un aparcamiento: a partir de seis personas, la furgoneta cuesta menos que dos utilitarios." },
        { icon: 'users', title: "Todos juntos", text: "Sin convoyes que se pierden en la ruta del Tichka: el grupo viaja y para unido." },
        { icon: 'baby', title: "Ideal en familia", text: "Sillas infantiles bajo reserva en la mayoría de empresas, aire acondicionado trasero en las furgonetas." },
        { icon: 'map', title: "Perfecto para rutas", text: "Esauira, Uzud o Uarzazat: en carretera, una furgoneta cargada es mucho más cómoda que un compacto lleno." },
      ],
    },
    {
      eyebrow: "Comparar",
      heading: "¿Monovolumen, económico o prestigio?",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Económico", text: "Para 2 a 4 viajeros con poco equipaje y presupuesto ajustado.", tags: ["Desde 25 €/día"], link: { key: 'carBudget', label: "Ver económicos" } },
        { icon: 'star', title: "Prestigio y SUV", text: "Confort premium para largas distancias en grupo pequeño.", tags: ["Desde 110 €/día"], link: { key: 'carLuxury', label: "Ver prestigio" } },
        { icon: 'check', title: "Cambio automático", text: "Más descansado en ciudad; los monovolúmenes automáticos escasean, reserve pronto.", tags: ["Desde 45 €/día"], link: { key: 'carEasy', label: "Ver automáticos" } },
      ],
    },
  ],
  body: `
<h2>Plazas y maletas: la tabla que evita sorpresas</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Vehículo</th><th>Plazas</th><th>Maletas, 3.ª fila montada</th><th>Precio / día</th></tr></thead>
<tbody>
<tr><td><strong>Dacia Lodgy / Jogger</strong></td><td class="num">7</td><td class="num">1–2</td><td class="num">55–75 €</td></tr>
<tr><td><strong>VW Touran / Citroën Berlingo</strong></td><td class="num">7</td><td class="num">2</td><td class="num">70–95 €</td></tr>
<tr class="row-highlight"><td><strong>Renault Trafic / VW Transporter</strong></td><td class="num">9</td><td class="num">6–8</td><td class="num">100–150 €</td></tr>
<tr><td><strong>Mercedes Sprinter</strong></td><td class="num">12–16</td><td class="num">12+</td><td class="num">150–220 €</td></tr>
</tbody>
</table>
</div>
<p>La regla sencilla: <strong>a partir de seis personas con maletas, pase directamente a la furgoneta de 9 plazas</strong>. El carné B basta hasta 9 plazas con el conductor; por encima hace falta un permiso de transporte de viajeros, de ahí el conductor en los minibuses.</p>

<h2>Conducir un vehículo grande cerca del aeropuerto de Marrakech-Menara</h2>
<p>En la carretera de Esauira y los grandes ejes, una furgoneta va perfectamente. Dos lugares exigen más atención: <strong>los alrededores de la medina</strong>, con calles estrechas llenas de motos y carros, donde aparcar cerca de una puerta es cuestión de suerte; y <strong>el puerto del Tichka</strong>, cuyas curvas y adelantamientos de camiones requieren anticipación con el vehículo cargado.</p>
<div class="callout">
<span class="callout-label">Sillas infantiles</span>
<p>Nunca se incluyen por defecto: pídalas al reservar con la edad y el peso de cada niño. Las existencias son limitadas en temporada alta.</p>
</div>

<h2>Furgoneta con conductor: haga la cuenta completa</h2>
<p>Sume el alquiler, el combustible (una de 9 plazas gasta bastante), los peajes, el aparcamiento y la fianza bloqueada. Frente a eso, una furgoneta con conductor por un día al Ourika o a Agafay suele costar parecido, sin ninguna molestia. La mejor combinación: un <a href="/es/book-transfer/">traslado</a> a la llegada y a la salida, desde 27 € hasta 7 pasajeros, y el alquiler de la furgoneta solo para los días en que realmente conduce.</p>
<p>Los vehículos grandes son los primeros en agotarse: en vacaciones escolares, Navidad y primavera, las de 9 plazas se reservan <strong>con varias semanas</strong> de antelación.</p>
`,
  faqHeading: "Alquiler de monovolumen en el aeropuerto de Marrakech-Menara: preguntas frecuentes",
  faqs: [
    { q: "¿Cuánto cuesta un monovolumen en el aeropuerto de Marrakech?", a: "De 55 a 95 € al día un monovolumen de 7 plazas y de 100 a 150 € una furgoneta de 9 plazas con maletero real. Un Sprinter de 12 a 16 plazas, normalmente con conductor, cuesta de 150 a 220 € al día." },
    { q: "¿Cuántas maletas caben en un 7 plazas?", a: "Solo una o dos con la tercera fila montada en un Dacia Lodgy o Jogger. Con siete personas y maletas facturadas, pase a una furgoneta de 9 plazas tipo Renault Trafic." },
    { q: "¿Hace falta un carné especial para un monovolumen de 9 plazas?", a: "No, el carné B basta hasta 9 plazas con el conductor. Por encima, como en un Sprinter, se necesita un permiso de transporte de viajeros: estos vehículos se alquilan con conductor." },
    { q: "¿Es más barato un monovolumen que dos coches?", a: "Normalmente sí a partir de seis personas: un vehículo, un depósito, un aparcamiento y un solo seguro de franquicia en lugar de dos." },
    { q: "¿Los monovolúmenes son automáticos?", a: "Raramente: la mayoría son manuales. Si necesita uno automático, reserve pronto y haga confirmar la transmisión por escrito." },
    { q: "¿Se pueden pedir sillas infantiles?", a: "Sí en la mayoría de empresas, bajo reserva, indicando la edad y el peso de cada niño. Nunca se incluyen por defecto." },
    { q: "¿Se puede hacer una ruta por Marruecos en monovolumen?", a: "Sí: Esauira, Uzud o Uarzazat se hacen muy bien en furgoneta. Calcule más tiempo en el Tichka y evite aparcar cerca de la medina." },
    { q: "¿Cuándo hay que reservar un monovolumen?", a: "Con varias semanas de antelación para vacaciones escolares, Navidad y primavera: los vehículos grandes son los primeros en agotarse en Marrakech." },
  ],
  cta: {
    heading: "¿Listo para recorrer Marruecos en grupo?",
    text: "Compare los monovolúmenes y furgonetas de las empresas del aeropuerto y reserve en pocos clics, con cancelación gratuita en la mayoría de ofertas.",
    label: "Comparar precios",
    href: "#reserver",
    secondary: { label: "Ver todas las categorías", key: 'carRental' },
  },
} satisfies LocalizedPage;
