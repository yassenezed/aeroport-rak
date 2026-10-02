import type { LocalizedPage } from '../types';

export default {
  title: "15 hoteles cerca del aeropuerto de Marrakech-Menara",
  description: "Hoteles cerca del aeropuerto de Marrakech-Menara: 15 direcciones del Hivernage a la medina, tiempos de trayecto, gama de precios y 5 reseñas detalladas.",
  eyebrow: "Hoteles · aeropuerto y ciudad",
  h1: "Hoteles cerca del aeropuerto de Marrakech-Menara y en la ciudad",
  lede: "El aeropuerto está a 6 km de la medina: ningún hotel de Marrakech queda realmente lejos. Elegir el barrio importa más que la distancia a la terminal. Estas son 15 direcciones seleccionadas, del palacio al riad, agrupadas por barrio, con nuestras reseñas detalladas de cinco de ellas.",
  highlights: [
    { icon: 'clock', value: "10–15 min", label: "Del aeropuerto al Hivernage, el barrio hotelero más cercano" },
    { icon: 'building', value: "15 hoteles", label: "Seleccionados, del palacio al riad" },
    { icon: 'star', value: "5 reseñas detalladas", label: "Acceso, puntos fuertes y límites" },
    { icon: 'van', value: "Desde ≈ 290 MAD", label: "Traslado hasta el hotel (≈ 27 €)" },
  ],
  cardSections: [
    {
      eyebrow: "A 10–15 minutos de la terminal",
      heading: "Los hoteles más cercanos al aeropuerto de Marrakech-Menara",
      intro: "El Hivernage, la avenida de la Menara y el Agdal son los barrios hoteleros más cercanos al aeropuerto: piscinas, acceso directo en coche y la medina a pocos minutos.",
      variant: 'feature',
      items: [
        { icon: 'building', title: "Four Seasons Resort Marrakech", text: "Gran resort con jardines, piscinas y spa, junto a los jardines de la Menara.", tags: ["Lujo", "≈ 10 min del aeropuerto"], hotel: 'fourSeasons' },
        { icon: 'building', title: "Savoy Le Grand Hotel", text: "Gran hotel familiar con amplia piscina y spa, entre el Hivernage y la avenida de la Menara.", tags: ["Gama alta", "≈ 10 min del aeropuerto"], hotel: 'savoyGrandHotel' },
        { icon: 'building', title: "Pestana CR7 Marrakech", text: "Hotel de diseño y animado en el Hivernage, conocido por su azotea con piscina.", tags: ["Gama media-alta", "≈ 10–15 min"], hotel: 'pestanaCr7' },
        { icon: 'building', title: "Sofitel Marrakech Lounge & Spa", text: "Palacio contemporáneo del Hivernage, piscinas y spa, a pocos minutos a pie de la medina.", tags: ["Gama alta", "≈ 10–15 min"], hotel: 'sofitelLoungeSpa' },
        { icon: 'building', title: "Mövenpick Mansour Eddahbi", text: "Gran hotel junto al Palacio de Congresos, práctico para viajes de negocios y en familia.", tags: ["Gama alta", "≈ 10–15 min"], hotel: 'movenpickMansourEddahbi' },
        { icon: 'building', title: "Kenzi Menara Palace", text: "Hotel de la avenida Mohammed VI con piscina y jardines, en el barrio del Agdal.", tags: ["Gama alta", "≈ 10–15 min"], hotel: 'kenziMenaraPalace' },
      ],
    },
    {
      eyebrow: "Palacios y resorts",
      heading: "Palacios y grandes hoteles de Marrakech",
      intro: "Las direcciones excepcionales, tres de ellas con nuestra reseña detallada.",
      variant: 'feature',
      items: [
        { icon: 'star', title: "La Mamounia", text: "El palacio histórico de los jardines de olivos, junto a la medina y a 12–20 minutos del aeropuerto.", tags: ["Lujo", "Nuestra nota 4,8/5"], link: { key: 'mamounia', label: "Leer nuestra reseña" }, hotel: 'mamounia' },
        { icon: 'star', title: "Royal Mansour", text: "Riads privados en un recinto cerrado dentro de las murallas, a quince minutos del aeropuerto.", tags: ["Lujo", "Nuestra nota 4,9/5"], link: { key: 'mansour', label: "Leer nuestra reseña" }, hotel: 'royalMansour' },
        { icon: 'star', title: "Es Saadi", text: "Finca familiar del Hivernage en un parque de varias hectáreas, a diez minutos de la terminal.", tags: ["Lujo", "Nuestra nota 4,5/5"], link: { key: 'essaadi', label: "Leer nuestra reseña" }, hotel: 'esSaadi' },
        { icon: 'star', title: "Mandarin Oriental Marrakech", text: "Villas con piscina privada entre olivos, en la carretera del Golf Royal.", tags: ["Lujo", "≈ 25–30 min"], hotel: 'mandarinOriental' },
        { icon: 'star', title: "Fairmont Royal Palm", text: "Resort de golf al pie del Atlas, ideal para una estancia tranquila fuera de la ciudad.", tags: ["Lujo", "≈ 20–25 min"], hotel: 'fairmontRoyalPalm' },
      ],
    },
    {
      eyebrow: "En la ciudad y en la medina",
      heading: "Hoteles en la ciudad y riads con encanto",
      intro: "Guéliz por comodidad, la medina por ambiente.",
      variant: 'feature',
      items: [
        { icon: 'building', title: "Radisson Blu Carré Eden", text: "Hotel moderno en pleno Guéliz, sobre el centro comercial Carré Eden.", tags: ["Gama alta", "≈ 15–20 min"], hotel: 'radissonCarreEden' },
        { icon: 'building', title: "ibis Marrakech Gare Voyageurs", text: "La dirección sencilla y económica frente a la estación ONCF, ideal para una noche antes de un tren.", tags: ["Económico", "≈ 15 min"], hotel: 'ibisGare' },
        { icon: 'door', title: "Riad Yasmine", text: "El patio verde más fotografiado de la medina, en la zona de Dar el Bacha.", tags: ["Gama media", "Nuestra nota 4,4/5"], link: { key: 'yasmine', label: "Leer nuestra reseña" }, hotel: 'riadYasmine' },
        { icon: 'door', title: "Riad BE", text: "Patio, alberca y terraza en Bab Doukkala: uno de los riads más fáciles de alcanzar con maletas.", tags: ["Gama media", "Nuestra nota 4,3/5"], link: { key: 'riadbe', label: "Leer nuestra reseña" }, hotel: 'riadBe' },
      ],
    },
  ],
  body: `
<h2>¿Qué barrio elegir desde el aeropuerto de Marrakech-Menara?</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Barrio</th><th>Para quién</th><th>Acceso en coche</th><th>Desde el aeropuerto</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Hivernage, Menara, Agdal</strong></td><td>Grandes hoteles, calma, piscinas</td><td>Directo</td><td>10–15 min</td></tr>
<tr><td><strong>Medina</strong></td><td>Primera visita, ambiente, riads</td><td>Parada en una puerta, luego a pie</td><td>15–25 min</td></tr>
<tr><td><strong>Guéliz</strong></td><td>Restaurantes, estación, coche de alquiler</td><td>Directo</td><td>15–20 min</td></tr>
<tr><td><strong>Palmeraie, carretera del Golf</strong></td><td>Resorts, descanso, familias</td><td>Directo</td><td>25–35 min</td></tr>
</tbody>
</table>
</div>
<p>La pregunta decisiva: ¿cuántas veces al día piensa volver a descansar? Si son muchas, alójese en la medina o el Hivernage. Si prevé Agafay, el Atlas y noches en la ciudad, un resort de la Palmeraie le hará perder una hora de coche al día.</p>

<h2>Riad u hotel: dos experiencias distintas</h2>
<p>El <strong>riad</strong> es una casa tradicional en torno a un patio, de cinco a diez habitaciones, en la medina: trato personal, desayuno en la terraza y verdadera calma tras la puerta. A cambio: sin coche hasta la entrada, escaleras empinadas y calefacción desigual en invierno. El <strong>hotel</strong>, en el Hivernage, Guéliz o la Palmeraie, ofrece ascensor, climatización fiable, piscina y acceso en coche hasta la puerta.</p>
<div class="callout">
<span class="callout-label">Antes de reservar en la medina</span>
<p>Pida el nombre de la puerta de parada (Bab Doukkala, Bab Laksour, Bab Agnaou…), el tiempo a pie, un porteador a su hora de llegada, la calefacción en invierno y la forma de pago del saldo: muchos riads pequeños solo aceptan efectivo.</p>
</div>

<h2>Llegar tarde: el reflejo que evita la puerta cerrada</h2>
<p>Si su vuelo aterriza después de las 22:00, dé a su alojamiento el <strong>número de vuelo</strong>, no solo la hora: un riad que sabe que lleva dos horas de retraso mantiene a alguien en la puerta. Los hoteles de Marrakech rara vez tienen lanzadera gratuita: prevea un <a href="/es/book-transfer/">traslado reservado</a> o un taxi con tarifa nocturna.</p>
`,
  faqHeading: "Hoteles cerca del aeropuerto de Marrakech-Menara: preguntas frecuentes",
  faqs: [
    { q: "¿Cuál es el hotel más cercano al aeropuerto de Marrakech?", a: "No hay ningún gran hotel dentro del recinto del aeropuerto. Los más cercanos están en la avenida de la Menara y el Hivernage, como el Four Seasons o el Savoy Le Grand Hotel, a unos diez minutos en coche de la terminal." },
    { q: "¿Los hoteles de Marrakech tienen lanzadera gratuita al aeropuerto?", a: "Rara vez. La mayoría ofrece un traslado de pago bajo petición. Un traslado reservado desde 27 € por vehículo o un taxi de la parada siguen siendo lo más sencillo." },
    { q: "¿Dónde dormir para un vuelo de madrugada?", a: "En el Hivernage, la Menara o el Agdal, a 10–15 minutos de la terminal y con acceso en coche hasta la puerta. Evite la medina para una salida al amanecer: primero hay que llegar a pie a una puerta con el equipaje." },
    { q: "¿Mejor dormir en la medina o en Guéliz?", a: "La medina por el ambiente, los riads y los zocos, aceptando la parada en una puerta. Guéliz por comodidad: acceso en coche, restaurantes y estación ONCF, pero menos exotismo." },
    { q: "¿Un riad es adecuado con niños?", a: "Depende: escaleras empinadas, terrazas poco protegidas y patios abiertos. Muchas familias prefieren un hotel con piscina en el Hivernage o la Palmeraie." },
    { q: "¿Se puede llegar en coche a la puerta de un riad?", a: "Casi nunca: los callejones son demasiado estrechos. Le dejan en la puerta más cercana y termina a pie, en tres a diez minutos. Pida un porteador con carretilla." },
    { q: "¿Tienen calefacción los riads en invierno?", a: "De forma desigual: las noches de enero bajan de 8 °C. Compruebe que la habitación tiene calefacción antes de reservar en invierno." },
    { q: "¿Hay que pagar en efectivo en los riads?", a: "A menudo el saldo: muchos establecimientos pequeños solo aceptan tarjeta para el depósito en línea. Lleve dírhams y pregúntelo al reservar." },
  ],
  cta: {
    heading: "Del aeropuerto a la puerta de su hotel",
    text: "Indique el nombre de su alojamiento: el conductor le deja en el hotel, o en la puerta de la medina más cercana a su riad, a precio fijo por vehículo.",
    label: "Reservar mi traslado",
    secondary: { label: "Alquilar un coche", key: 'carRental' },
  },
} satisfies LocalizedPage;
