import type { LocalizedPage } from '../types';

export default {
  title: "Coche automático aeropuerto Marrakech-Menara desde 490 MAD",
  description: "Alquiler de coche automático en el aeropuerto de Marrakech-Menara desde 490 MAD/día: disponibilidad, sobrecoste, modelos y consejos para conducir en Marruecos.",
  eyebrow: "Conducción fácil · cambio automático",
  h1: "Alquiler de coche automático en el aeropuerto de Marrakech-Menara",
  lede: "En Marruecos el cambio manual sigue siendo la norma y el automático hay que reservarlo. Si nunca ha conducido aquí, esta elección cambia mucho, empezando por su primera hora en el tráfico de Marrakech.",
  highlights: [
    { icon: 'wallet', value: "Desde 490 MAD", label: "Por día, compacto automático" },
    { icon: 'check', value: "Sin embrague", label: "Dos pedales, solo el pie derecho" },
    { icon: 'dollar-circle', value: "+15 a 30 %", label: "Sobrecoste frente al manual" },
    { icon: 'passport', value: "Carné B", label: "Sin permiso especial" },
  ],
  widget: 'car-rental',
  widgetIntro: {
    heading: "Reservar un coche automático en el aeropuerto de Marrakech-Menara",
    text: "Escriba «Marrakech» y elija «Marrakech Airport», luego sus fechas: filtre los resultados por transmisión automática.",
  },
  cardSections: [
    {
      eyebrow: "Ventajas",
      heading: "Por qué elegir un automático en Marrakech",
      intro: "En un tráfico denso e imprevisible, el automático no es un lujo.",
      variant: 'feature',
      items: [
        { icon: 'check', title: "Conducción sin esfuerzo", text: "Sin embrague ni marchas: toda su atención queda para la carretera." },
        { icon: 'users', title: "Adaptado al tráfico", text: "Motos que adelantan, carros, peatones, rotondas de Guéliz: imposible calarse, mucho menos estrés." },
        { icon: 'map', title: "Confort en montaña y carretera", text: "Las subidas a Imlil y las largas rectas hacia Esauira, sin cansancio." },
        { icon: 'star', title: "Tranquilizador en un primer viaje", text: "¿Primera vez en Marruecos o poca costumbre al volante? El automático lo simplifica todo." },
      ],
    },
    {
      eyebrow: "La gama",
      heading: "Los coches automáticos disponibles en Marrakech",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Compactos automáticos", text: "Renault Clio, Volkswagen Polo, Hyundai i20: fáciles de aparcar, ideales para la ciudad, Esauira y el Ourika.", tags: ["490–650 MAD/día"] },
        { icon: 'map', title: "SUV automáticos", text: "Dacia Duster, Kia Sportage: altura libre y confort para el Atlas y las pistas de Agafay.", tags: ["750–1100 MAD/día"] },
        { icon: 'star', title: "Berlinas automáticas", text: "Confort y espacio para largas distancias y viajes de negocios.", tags: ["950–1500 MAD/día"] },
      ],
    },
    {
      eyebrow: "Consejos",
      heading: "Primera vez con automático: 4 consejos",
      variant: 'compact',
      items: [
        { icon: 'info', title: "Solo el pie derecho", text: "Acelere y frene con el mismo pie; nunca apoye el izquierdo en el freno." },
        { icon: 'lock', title: "Frene antes de cambiar", text: "Mantenga el freno pisado para pasar de P a D o R." },
        { icon: 'map', title: "Controle las bajadas", text: "En el Tichka, use el modo manual o L para retener el coche en lugar de los frenos." },
        { icon: 'clock', title: "Reserve pronto", text: "Hay pocos automáticos: reserve con 2 o 3 semanas, sobre todo en temporada alta." },
      ],
    },
    {
      eyebrow: "Comparar",
      heading: "¿Automático, económico, prestigio o monovolumen?",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Económico", text: "Utilitarios manuales al mejor precio, para conductores seguros.", tags: ["Desde 270 MAD/día"], link: { key: 'carBudget', label: "Ver económicos" } },
        { icon: 'star', title: "Prestigio", text: "Berlinas y SUV premium, automáticos de serie.", tags: ["Desde 1200 MAD/día"], link: { key: 'carLuxury', label: "Ver prestigio" } },
        { icon: 'users', title: "Monovolumen de 7 a 9 plazas", text: "Para grupos; pocos automáticos, reserve muy pronto.", tags: ["Desde 600 MAD/día"], link: { key: 'carMinivan', label: "Ver monovolúmenes" } },
      ],
    },
  ],
  body: `
<h2>El automático en Marruecos: minoritario, así que hay que reservarlo</h2>
<p>La flota marroquí es mayoritariamente manual. Los automáticos existen en el aeropuerto de Marrakech, pero sobre todo a partir de la categoría compacta. Dos consecuencias: un <strong>sobrecoste del 15 al 30 %</strong> frente al mismo modelo manual, y una disponibilidad que se agota cuando sube la temporada. Si el automático es imprescindible (carné limitado, lesión), dígalo al reservar y haga <strong>confirmar la transmisión por escrito</strong>: «o similar» nunca garantiza el tipo de cambio.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Categoría automática</th><th>Precio / día</th><th>Adecuada para</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Compacto (Clio, Polo, i20)</strong></td><td class="num">≈ 490–650 MAD (45–60 €)</td><td>Ciudad, Esauira, Ourika</td></tr>
<tr><td><strong>SUV compacto (Duster, Sportage)</strong></td><td class="num">≈ 750–1100 MAD (70–100 €)</td><td>Atlas, pistas de Agafay</td></tr>
<tr><td><strong>Berlina</strong></td><td class="num">≈ 950–1500 MAD (90–140 €)</td><td>Largas distancias, negocios</td></tr>
</tbody>
</table>
</div>
<p class="small">Precios orientativos en dírhams, convertidos a un tipo aproximado de 1 € ≈ 10,8 MAD. El comparador muestra el precio exacto de cada oferta.</p>

<h2>Primera hora al volante desde el aeropuerto de Marrakech-Menara</h2>
<p>Salga del aeropuerto hacia Guéliz en lugar de la medina y tómese treinta minutos para adaptarse al ritmo local antes de ir a su alojamiento. Evite conducir por primera vez entre las 17 y las 19 h, y de noche: fuera de la ciudad, algunos vehículos circulan sin luces.</p>
<h3>Guía rápida P-R-N-D</h3>
<ul>
<li><strong>P</strong> (parking): para arrancar y apagar el motor.</li>
<li><strong>R</strong> (marcha atrás): siempre con el freno pisado antes de engranarla.</li>
<li><strong>N</strong> (punto muerto): rara vez útil.</li>
<li><strong>D</strong> (drive): la posición normal para circular.</li>
</ul>

<h2>Lo que el automático no resuelve</h2>
<p>El <strong>aparcamiento en la ciudad</strong>, gestionado por guardas con chaleco (5 a 10 MAD, 20 MAD la noche, a pagar al volver); el <strong>acceso a la medina</strong>, imposible en coche; los <strong>radares</strong>, fijos y móviles; y el <strong>puerto del Tichka</strong>, donde un automático pequeño se calienta en una subida larga. Si prefiere no conducir, un <a href="/es/book-transfer/">traslado</a> a la llegada, taxis en la ciudad y un chófer para las excursiones cubren toda la estancia, sin fianza ni inspección.</p>
`,
  faqHeading: "Coche automático en el aeropuerto de Marrakech-Menara: preguntas frecuentes",
  faqs: [
    { q: "¿Cuánto cuesta un coche automático en el aeropuerto de Marrakech?", a: "De ≈ 490 a 650 MAD (45 a 60 €) al día un compacto, de ≈ 750 a 1100 MAD (70 a 100 €) un SUV y de ≈ 950 a 1500 MAD (90 a 140 €) una berlina. Cuente un 15 a 30 % más que el mismo modelo manual." },
    { q: "¿Es fácil encontrar automáticos en Marrakech?", a: "Existen, pero son minoría, sobre todo a partir de la categoría compacta. Reserve con 2 o 3 semanas y haga confirmar la transmisión por escrito." },
    { q: "¿Hace falta un permiso especial para un automático?", a: "No, basta el carné B. Si su carné está limitado a automáticos, indíquelo: la empresa debe garantizarle uno." },
    { q: "¿Un automático consume más?", a: "Un poco en modelos antiguos, casi nada en los recientes. La diferencia pesa mucho menos que el sobrecoste del alquiler." },
    { q: "Es mi primera vez con automático, ¿es difícil?", a: "No: solo el pie derecho, freno pisado para pasar de P a D o R, y unos minutos en el aparcamiento bastan para habituarse." },
    { q: "¿Se puede hacer una ruta por Marruecos en automático?", a: "Sí. Para el Atlas, prefiera un SUV o un compacto reciente, y use el modo manual o L en las largas bajadas del Tichka." },
    { q: "¿El seguro es distinto para un automático?", a: "No, se aplican las mismas reglas: franquicia básica, seguro de franquicia opcional y fianza en tarjeta de crédito a nombre del conductor." },
    { q: "¿Y si no quiero conducir?", a: "Un traslado a la llegada y la salida, taxis en la ciudad a 15–50 MAD el trayecto y un chófer para las excursiones cubren toda la estancia, a menudo por un coste cercano al de un alquiler." },
  ],
  cta: {
    heading: "¿Listo para conducir sin estrés en Marrakech?",
    text: "Compare los coches automáticos de las empresas del aeropuerto y reserve en pocos clics.",
    label: "Comparar precios",
    href: "#reserver",
    secondary: { label: "Ver todas las categorías", key: 'carRental' },
  },
} satisfies LocalizedPage;
