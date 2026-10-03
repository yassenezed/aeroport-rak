import type { LocalizedPage } from '../types';

export default {
  title: "Restaurantes aeropuerto de Marrakech-Menara y duty free",
  description: "Restaurantes y tiendas del aeropuerto de Marrakech-Menara: Starbucks, Paul, cafés antes y después del control, duty free, horarios y McDonald's.",
  eyebrow: "Restaurantes · cafés · duty free",
  h1: "Restaurantes y tiendas del aeropuerto de Marrakech-Menara",
  lede: "Un café antes de embarcar, un bocadillo para el vuelo, un último perfume en el duty free: la oferta del aeropuerto es correcta pero limitada, y se reduce mucho por la noche. Esto es lo que encontrará, a qué lado del control, y nuestros consejos para no embarcar con hambre.",
  highlights: [
    { icon: 'coffee', value: "6 marcas", label: "Cafés y comida rápida identificados" },
    { icon: 'shop', value: "Duty free", label: "Zona de salidas, tras el control" },
    { icon: 'moon', value: "Oferta reducida", label: "Pocos mostradores abiertos de noche" },
    { icon: 'wallet', value: "Se acepta tarjeta", label: "En la mayoría de los puntos de venta" },
  ],
  cardSections: [
    {
      eyebrow: "Comer y beber",
      heading: "Cafés y restaurantes del aeropuerto de Marrakech-Menara",
      intro: "Las marcas presentes en las terminales. La ubicación exacta y los horarios cambian con las obras y las temporadas: siga la señalización.",
      variant: 'feature',
      items: [
        { icon: 'coffee', title: "Starbucks", text: "Café, bebidas frías y calientes, bollería: el punto más conocido antes de embarcar.", tags: ["Café", "Snacks"] },
        { icon: 'coffee', title: "Paul", text: "Panadería francesa: bocadillos, ensaladas y pasteles, práctica para llevarse una comida a bordo.", tags: ["Panadería", "Para llevar"] },
        { icon: 'coffee', title: "La Table du Marché", text: "Restauración más tranquila con platos, ensaladas y postres, para una comida de verdad antes de un vuelo largo.", tags: ["Restaurante", "Comida completa"] },
        { icon: 'coffee', title: "Segafredo", text: "Café italiano: expreso, bebidas y algo para picar.", tags: ["Café", "Rápido"] },
        { icon: 'coffee', title: "Pomme de Pain", text: "Bocadillos, wraps y menús rápidos a precios razonables.", tags: ["Comida rápida", "Menús"] },
        { icon: 'coffee', title: "Maymana", text: "Mostrador de snacks y dulces para esperar entre el control y la puerta.", tags: ["Snacks", "Dulces"] },
      ],
    },
    {
      eyebrow: "Compras",
      heading: "Tiendas y duty free del aeropuerto",
      variant: 'feature',
      items: [
        { icon: 'shop', title: "Duty free (salidas)", text: "Tras el control de pasaportes: perfumes, cosmética, alcohol, tabaco y dulces, con marcas como Victoria's Secret, Lacoste o Montblanc.", tags: ["Tras el control", "Tarjeta de embarque exigida"] },
        { icon: 'sparkles', title: "Artesanía y recuerdos", text: "Aceite de argán, cosmética marroquí, especias envasadas y pequeña artesanía: práctico, pero más caro que en la medina.", tags: ["Recuerdos", "Precios de aeropuerto"] },
        { icon: 'book', title: "Prensa y artículos de viaje", text: "Periódicos, libros, adaptadores, cargadores y agua para el vuelo.", tags: ["Imprevistos", "Antes y después del control"] },
      ],
    },
  ],
  body: `
<h2>¿Antes o después del control? Dónde comer en el aeropuerto de Marrakech-Menara</h2>
<p>A la salida, el control de seguridad y de pasaportes puede llevar de 30 minutos a más de una hora en temporada alta. El buen reflejo: <strong>pasar primero los controles</strong> y luego instalarse en la zona de embarque, donde están el duty free y la mayoría de los cafés. En la zona pública la oferta se limita a algunos cafés y mostradores, útiles para quien acompaña a un viajero o espera una <a href="/es/arrivals/">llegada</a>.</p>
<div class="callout">
<span class="callout-label">Vuelo nocturno o muy temprano</span>
<p>Entre medianoche y las 5 h, la mayoría de los mostradores están cerrados o con servicio mínimo. Cene en la ciudad antes de salir y guarde una botella de agua comprada tras el control.</p>
</div>

<h2>¿Hay un McDonald's en el aeropuerto de Marrakech?</h2>
<p>Que sepamos, <strong>no hay ningún McDonald's dentro del aeropuerto de Marrakech-Menara</strong> por ahora. Los más cercanos están en la ciudad: avenida Mohammed V en Gueliz, cerca de la estación y en los centros comerciales (Carré Eden, Menara Mall), a 10–15 minutos en coche. Para comer algo rápido allí, Paul y Pomme de Pain son las alternativas más próximas.</p>

<h2>El duty free del aeropuerto de Marrakech-Menara</h2>
<p>El duty free está en la zona de salidas, tras el control de pasaportes: se pide la tarjeta de embarque en caja. Hay perfumes, cosmética, alcohol, tabaco, chocolates y una selección de productos marroquíes. Los precios son los de cualquier duty free internacional: para el aceite de argán y la artesanía, la medina es mucho más barata si tiene tiempo de comparar.</p>
<p class="small">Líquidos comprados en el duty free: guárdelos en la bolsa precintada con el tique, sobre todo si hace escala en Europa.</p>

<h2>Precios y pago</h2>
<p>Cuente con precios de aeropuerto: unos <strong>30 a 50 MAD (≈ 3 a 5 €) por un café</strong> y 60 a 120 MAD (≈ 6 a 11 €) por un bocadillo o menú. La tarjeta se acepta en la mayoría de los puntos de venta, y a menudo también el euro, con el cambio devuelto en dírhams a un tipo poco favorable.</p>

<h2>Otros servicios útiles</h2>
<p>Wi-Fi, casas de cambio, cajeros, salas VIP y sala de oración: consulte nuestra página de <a href="/es/services/">servicios del aeropuerto</a>, y la facturación en la página de <a href="/es/departures/">salidas</a>.</p>
`,
  faqHeading: "Restaurantes del aeropuerto de Marrakech-Menara: preguntas frecuentes",
  faqs: [
    { q: "¿Hay un McDonald's en el aeropuerto de Marrakech?", a: "No, que sepamos no hay ningún McDonald's dentro del aeropuerto. Los más cercanos están en la ciudad, en Gueliz y en los centros comerciales Carré Eden y Menara Mall, a 10–15 minutos en coche." },
    { q: "¿Dónde comer en el aeropuerto de Marrakech?", a: "Las principales marcas son Starbucks, Paul, La Table du Marché, Segafredo, Pomme de Pain y Maymana. Lo esencial está en la zona de salidas, tras el control." },
    { q: "¿Hay restaurantes después del control de seguridad?", a: "Sí, la zona de embarque reúne la mayoría de los cafés y el duty free. Pase primero los controles y coma cerca de su puerta." },
    { q: "¿Los restaurantes del aeropuerto abren de noche?", a: "Muy pocos. Entre medianoche y las 5 h, la mayoría están cerrados o con servicio mínimo: cene en la ciudad antes de un vuelo nocturno." },
    { q: "¿Dónde está el duty free del aeropuerto de Marrakech-Menara?", a: "En la zona de salidas, tras el control de pasaportes. Se pide la tarjeta de embarque al pagar." },
    { q: "¿Qué se puede comprar en el duty free de Marrakech?", a: "Perfumes, cosmética, alcohol, tabaco, chocolates y productos marroquíes como el aceite de argán, con marcas como Victoria's Secret, Lacoste o Montblanc." },
    { q: "¿Se puede pagar con tarjeta en los restaurantes del aeropuerto?", a: "Sí, en la mayoría. El euro se acepta a menudo, pero el cambio se devuelve en dírhams a un tipo poco ventajoso." },
    { q: "¿Cuánto cuesta un café en el aeropuerto de Marrakech?", a: "Unos 30 a 50 MAD (≈ 3 a 5 €) por un café y 60 a 120 MAD (≈ 6 a 11 €) por un bocadillo o menú." },
  ],
  cta: {
    heading: "Cenar en la ciudad y llegar al aeropuerto sin estrés",
    text: "Un chófer le recoge en su hotel o en la puerta de la medina más cercana, precio fijo por vehículo, incluso para un vuelo nocturno.",
    label: "Reservar un traslado",
    secondary: { label: "Ver los servicios del aeropuerto", key: 'services' },
  },
} satisfies LocalizedPage;
