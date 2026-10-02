import type { LocalizedPage } from '../types';

export default {
  title: "Alquiler de coche barato aeropuerto Marrakech-Menara",
  description: "Alquiler de coche económico en el aeropuerto de Marrakech-Menara desde 25 €/día: Sandero, Picanto, i10. Compare empresas y evite gastos ocultos.",
  eyebrow: "Alquiler económico · desde 25 €/día",
  h1: "Alquiler de coche económico en el aeropuerto de Marrakech-Menara",
  lede: "El utilitario es la categoría más alquilada en Marrakech y la adecuada para Esauira, el Ourika o Imlil. Esto es lo que cuesta de verdad un coche pequeño desde el aeropuerto, y cómo pagar poco sin sorpresas en el mostrador.",
  highlights: [
    { icon: 'wallet', value: "Desde 25 €", label: "Por día, en temporada baja" },
    { icon: 'car', value: "5–6 L/100 km", label: "Consumo medio de un utilitario" },
    { icon: 'map-pin', value: "Fácil de aparcar", label: "Tamaño ideal cerca de la medina" },
    { icon: 'shield-check', value: "Cancelación gratuita", label: "Hasta 48 h antes, en la mayoría de ofertas" },
  ],
  widget: 'car-rental',
  widgetIntro: {
    heading: "Reservar un coche económico en el aeropuerto de Marrakech-Menara",
    text: "Escriba «Marrakech» y elija «Marrakech Airport», luego sus fechas: ordene los resultados por precio para ver primero los utilitarios.",
  },
  cardSections: [
    {
      eyebrow: "Ventajas",
      heading: "Por qué elegir un utilitario en Marrakech",
      intro: "La categoría más reservada, y con razón.",
      variant: 'feature',
      items: [
        { icon: 'wallet', title: "El precio más bajo", text: "De 25 a 35 € al día en temporada normal, menos por semanas: varios días de alquiler por el precio de una excursión organizada." },
        { icon: 'sun', title: "Poco combustible", text: "Un utilitario gasta de 5 a 6 L/100 km: la ida y vuelta a Esauira sigue siendo asequible, incluso con el gasóleo a 12–14 MAD." },
        { icon: 'map-pin', title: "Fácil de aparcar", text: "Cerca de las puertas de la medina y en Guéliz las plazas son estrechas: un coche pequeño entra donde un SUV no." },
        { icon: 'map', title: "Suficiente para el Atlas", text: "El Ourika, Imlil y el puerto del Tichka están asfaltados: un utilitario sube sin problema con dos o tres pasajeros." },
      ],
    },
    {
      eyebrow: "Modelos",
      heading: "Los utilitarios más alquilados en Marrakech",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Dacia Sandero", text: "El más vendido en Marruecos: 5 plazas, buen maletero para su tamaño y robusto en montaña.", tags: ["25–32 €/día", "≈ 5,8 L/100 km"] },
        { icon: 'car', title: "Kia Picanto", text: "Muy compacto y manejable, ideal para dos en ciudad y por la costa.", tags: ["25–30 €/día", "≈ 5 L/100 km"] },
        { icon: 'car', title: "Hyundai i10", text: "4 plazas, aire acondicionado eficaz, el más fácil de aparcar cerca de la medina.", tags: ["25–30 €/día", "≈ 4,8 L/100 km"] },
        { icon: 'car', title: "Renault Clio", text: "Un escalón más en confort y potencia, mejor para cuatro personas o para Uarzazat.", tags: ["32–40 €/día", "≈ 5,6 L/100 km"] },
      ],
    },
    {
      eyebrow: "Consejos",
      heading: "4 consejos para pagar menos",
      variant: 'compact',
      items: [
        { icon: 'clock', title: "Reserve pronto", text: "Los precios en línea con 2 o 3 semanas mejoran los del mostrador en temporada alta." },
        { icon: 'sun', title: "Temporada baja", text: "Enero fuera de fiestas, junio y noviembre; evite vacaciones escolares y el Aíd." },
        { icon: 'dollar-circle', title: "Lleno a lleno", text: "Devuelva el depósito al nivel de salida y pague solo lo que consume." },
        { icon: 'check', title: "Alquile por semanas", text: "El precio diario baja claramente a partir de cinco días." },
      ],
    },
    {
      eyebrow: "Comparar",
      heading: "¿Utilitario, prestigio, monovolumen o automático?",
      variant: 'feature',
      items: [
        { icon: 'star', title: "Prestigio y SUV premium", text: "Berlinas y SUV de gama alta para viajar cómodo en largas distancias.", tags: ["Desde 110 €/día"], link: { key: 'carLuxury', label: "Ver prestigio" } },
        { icon: 'users', title: "Monovolumen de 7 a 9 plazas", text: "Familias y grupos: todos y las maletas en un solo vehículo.", tags: ["Desde 55 €/día"], link: { key: 'carMinivan', label: "Ver monovolúmenes" } },
        { icon: 'check', title: "Cambio automático", text: "Más descansado en el tráfico de Marrakech; reserve pronto.", tags: ["Desde 45 €/día"], link: { key: 'carEasy', label: "Ver automáticos" } },
      ],
    },
  ],
  steps: {
    heading: "Recoger el coche en el aeropuerto en 3 pasos",
    items: [
      { icon: 'clipboard', title: "Reserve antes del vuelo", text: "Compare las ofertas de arriba y reserve: recibirá un bono de confirmación por correo." },
      { icon: 'plane-landing', title: "Vaya al mostrador", text: "Tras el control de pasaportes y el equipaje, diríjase al mostrador o punto de encuentro de la empresa en la sala de llegadas." },
      { icon: 'shield-check', title: "Revise y salga", text: "Dé la vuelta al coche con el agente, fotografíe cada defecto, compruebe el combustible y salga a la carretera." },
    ],
  },
  body: `
<h2>El precio real de un coche barato en el aeropuerto de Marrakech-Menara</h2>
<p>Los anuncios a 12 € al día existen, pero están incompletos. Estas son las líneas del contrato que encarecen la factura:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Línea del contrato</th><th>Lo anunciado</th><th>Lo que paga</th></tr></thead>
<tbody>
<tr><td><strong>Franquicia</strong></td><td>«Seguro incluido»</td><td>5000 a 15 000 MAD a su cargo en caso de daños</td></tr>
<tr><td><strong>Seguro de franquicia</strong></td><td>Opcional</td><td>10 a 20 € al día, a veces más que el propio alquiler</td></tr>
<tr><td><strong>Combustible</strong></td><td>«Lleno a lleno»</td><td>En algunas empresas, depósito cobrado al salir y no reembolsado</td></tr>
<tr><td><strong>Segundo conductor</strong></td><td>No mencionado</td><td>5 a 10 € al día</td></tr>
<tr><td><strong>Devolución fuera de horario</strong></td><td>No mencionado</td><td>Recargo nocturno o de domingo</td></tr>
</tbody>
</table>
</div>
<p>El buen reflejo: pida el <strong>importe total cargado, franquicia incluida</strong>, antes de confirmar. Una empresa seria lo da sin problema.</p>

<h2>¿Agencia marroquí o marca internacional?</h2>
<p>Las agencias marroquíes suelen ser un 20 a 40 % más baratas, con coches algo más antiguos pero cuidados y un interlocutor en el lugar. Su punto débil es una inspección más o menos rigurosa: elija una con muchas opiniones recientes. Las marcas internacionales cuestan más, pero ofrecen procedimientos estándar y reclamaciones más sencillas: el término medio razonable para un primer alquiler en Marruecos.</p>
<div class="callout">
<span class="callout-label">La precaución que vale más que cualquier contrato</span>
<p>Grabe el coche desde todos los ángulos al salir (llantas, parabrisas, techo, bajos, interior) con la fecha activada, y repita la misma serie a la devolución. Diez minutos que resuelven la mayoría de litigios.</p>
</div>

<h2>Documentos necesarios</h2>
<div class="table-wrap">
<table class="data">
<tbody>
<tr><td><strong>Edad mínima</strong></td><td>21 años en general; posible recargo por conductor joven antes de los 23–25</td></tr>
<tr><td><strong>Carné</strong></td><td>Carné nacional con al menos 1 año de antigüedad</td></tr>
<tr><td><strong>Fianza</strong></td><td>Tarjeta de crédito a nombre del conductor principal (5000 a 8000 MAD)</td></tr>
<tr><td><strong>Identidad</strong></td><td>Pasaporte</td></tr>
</tbody>
</table>
</div>

<h2>Recogida y devolución</h2>
<p><strong>En el aeropuerto</strong>: lo más sencillo si sale directo hacia la costa o el Atlas. <strong>En la ciudad</strong>: si empieza por la medina, llegue a su riad en <a href="/es/book-transfer/">traslado</a> y alquile el día de la excursión, en Guéliz o con entrega. <strong>Solo ida</strong>: la mayoría de empresas aceptan la devolución en Esauira, Fez o Tánger, con un suplemento según la distancia.</p>
`,
  faqHeading: "Alquiler económico en el aeropuerto de Marrakech-Menara: preguntas frecuentes",
  faqs: [
    { q: "¿Cuánto cuesta un coche pequeño de alquiler en el aeropuerto de Marrakech?", a: "De 25 a 35 € al día en temporada normal por un Dacia Sandero, Kia Picanto o Hyundai i10, menos por semanas. Los anuncios mucho más bajos suelen excluir el seguro de franquicia, que añade 10 a 20 € al día." },
    { q: "¿Cuál es el coche económico más alquilado en Marrakech?", a: "El Dacia Sandero, fabricado en Marruecos: 5 plazas, buen maletero y robusto. El Kia Picanto y el Hyundai i10 son más pequeños y aún más fáciles de aparcar." },
    { q: "¿Basta un utilitario para el Atlas?", a: "Sí para el Ourika, Imlil y el puerto del Tichka, totalmente asfaltados. Sus límites son la potencia en subida con cuatro adultos cargados y el aire acondicionado por encima de 42 °C en pleno verano." },
    { q: "¿Qué documentos hacen falta?", a: "Un carné nacional con al menos un año de antigüedad, el pasaporte y una tarjeta de crédito a nombre del conductor principal para la fianza, de 5000 a 8000 MAD en un utilitario." },
    { q: "¿Se puede alquilar un utilitario automático?", a: "Es raro: casi todos los utilitarios son manuales. Los automáticos empiezan en la categoría compacta, desde unos 45 a 60 € al día, y conviene reservarlos con antelación." },
    { q: "¿Hay gastos ocultos?", a: "Los más habituales: franquicia alta, seguro de franquicia, segundo conductor, devolución nocturna y combustible mal gestionado. Pida el importe total cargado, franquicia incluida, antes de confirmar." },
    { q: "¿Cuándo es más barato alquilar?", a: "Enero fuera de fiestas, junio y noviembre. Las vacaciones escolares europeas, Semana Santa, el Aíd y el verano pueden duplicar los precios: reserve con 2 o 3 semanas." },
    { q: "¿Se puede devolver el coche en otra ciudad?", a: "Sí en la mayoría de empresas, por ejemplo en Esauira, Fez o Tánger, con un suplemento de solo ida según la distancia. Compruébelo en la oferta antes de reservar." },
  ],
  cta: {
    heading: "¿Listo para recorrer Marruecos con poco presupuesto?",
    text: "Compare los utilitarios de todas las empresas del aeropuerto y reserve en pocos clics, con cancelación gratuita en la mayoría de ofertas.",
    label: "Comparar precios",
    href: "#reserver",
    secondary: { label: "Ver todas las categorías", key: 'carRental' },
  },
} satisfies LocalizedPage;
