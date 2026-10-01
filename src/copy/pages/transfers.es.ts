import type { LocalizedPage } from '../types';

export default {
  title: "Traslado aeropuerto Marrakech-Menara: taxi, bus y precios",
  description: "Cómo llegar a la medina desde el aeropuerto de Marrakech-Menara: traslado privado, taxi, bus 19, lanzadera del riad o alquiler. Precios 2026 y tiempos.",
  eyebrow: "Traslado · taxi · bus 19 · alquiler",
  h1: "Traslados aeropuerto Marrakech-Menara: 5 formas de llegar a la ciudad",
  lede: "Solo seis kilómetros separan la terminal de Jemaa el-Fna, y ningún tren hace el trayecto. Aterrizaje a medianoche, familia con equipaje o mochila y poco presupuesto: estas son las cinco opciones reales, sus precios comprobados sobre el terreno y la que mejor encaja con su llegada.",
  highlights: [
    { icon: 'map-pin', value: "6 km", label: "Aeropuerto → medina, 15–20 min" },
    { icon: 'van', value: "Desde 27 €", label: "Traslado, por vehículo (7 plazas)" },
    { icon: 'car', value: "100–150 MAD", label: "Taxi de día, el coche" },
    { icon: 'bus', value: "30 MAD", label: "Bus 19, por persona" },
  ],
  options: {
    heading: "Comparativa rápida de transportes desde el aeropuerto de Marrakech-Menara",
    intro: "Precios comprobados en septiembre de 2026, <strong>por vehículo</strong> salvo el bus. Ningún tren llega al aeropuerto: la estación ONCF está en Guéliz.",
    table: {
      head: ["Transporte", "Precio", "Hasta la medina", "Comodidad", "Ideal para"],
      rows: [
        ["Traslado privado", "desde 27 €", "15–25 min", "Excelente", "Llegadas nocturnas, familias, riads en la medina"],
        ["Parada de taxis", "100–150 MAD<br>150–240 MAD de noche", "15–25 min", "Correcta", "Dos personas de día, Guéliz o Hivernage"],
        ["Bus 19 (ALSA)", "30 MAD / pers.", "20–30 min", "Básica", "Poco presupuesto, equipaje ligero, de día"],
        ["Lanzadera del riad", "150–250 MAD", "15–25 min", "Muy buena", "Riads difíciles de encontrar"],
        ["Alquiler de coche", "desde 25 € / día", "—", "Excelente fuera de la medina", "Atlas, Agafay, Esauira, ruta por carretera"],
      ],
    },
    detailHeading: "Las 5 opciones en detalle",
    items: [
      {
        icon: 'van',
        title: "Traslado privado reservado",
        tagline: "La opción más tranquila de noche, en familia o para un riad en plena medina.",
        badge: "Nuestro consejo",
        meta: [
          { label: "Precio", value: "desde 27 € / vehículo" },
          { label: "Trayecto", value: "15–25 min" },
          { label: "Plazas", value: "hasta 7" },
        ],
        pros: [
          "Conductor esperándole en la sala de llegadas <strong>con un cartel con su nombre</strong>",
          "Seguimiento del vuelo: sin suplemento si se retrasa",
          "Precio fijo por vehículo, cerrado al reservar",
          "Parada en la puerta (<em>bab</em>) más cercana a su riad",
          "Silla infantil bajo petición, cancelación gratuita hasta 24 h con la mayoría de proveedores",
        ],
        prices: {
          heading: "Precios orientativos",
          rows: [
            { label: "Medina, Guéliz, Hivernage", value: "desde 27 €" },
            { label: "Palmeraie, Agafay", value: "según distancia" },
            { label: "Esauira", value: "≈ 95 €" },
            { label: "Minibús de 8 plazas o más", value: "bajo petición" },
          ],
          foot: "Precios por vehículo, no por persona.",
        },
        link: { key: 'bookTransfer', label: "Reservar mi traslado" },
      },
      {
        icon: 'car',
        title: "Taxi de la parada",
        tagline: "Disponible a cualquier hora en la parada situada frente a la terminal.",
        meta: [
          { label: "Día", value: "100–150 MAD" },
          { label: "Noche", value: "150–240 MAD" },
          { label: "Plazas", value: "3 (petit taxi)" },
        ],
        pros: [
          "Parada oficial a la salida de llegadas, con tarifas expuestas",
          "Nada que reservar ni pagar por adelantado",
          "Imbatible para dos de día: de 9 a 14 € el coche entero",
        ],
        cons: [
          "El petit taxi admite 3 pasajeros como máximo: cuatro personas necesitan dos coches",
          "Pago solo en efectivo y en dírhams",
          "Le deja en la puerta de la medina que conviene al conductor, no siempre la más cercana",
        ],
        note: { label: "Consejo:", text: "confirme el precio y el destino <strong>antes</strong> de cargar el equipaje, e ignore a los ganchos de la sala: los taxis se toman solo en la parada." },
        link: { key: 'taxiTips', label: "Nuestros consejos sobre taxis en Marrakech" },
      },
      {
        icon: 'bus',
        title: "Bus 19 (ALSA)",
        tagline: "La opción más barata, si viaja ligero y de día.",
        meta: [
          { label: "Precio", value: "30 MAD / pers." },
          { label: "Ida y vuelta", value: "50 MAD (15 días)" },
          { label: "Horario", value: "≈ 6:00 – 23:30" },
        ],
        pros: [
          "Parada justo a la salida de la terminal, salidas cada 30 minutos aproximadamente",
          "Unos veinte minutos hasta la plaza Jemaa el-Fna",
        ],
        cons: [
          "Sin salidas después de las 23:30 aproximadamente",
          "Poco espacio para maletas grandes",
          "Le deja en la plaza: queda caminar por la medina hasta el riad",
        ],
        link: { key: 'bus19', label: "Horarios y paradas del bus 19" },
      },
      {
        icon: 'door',
        title: "Lanzadera de su riad u hotel",
        tagline: "El conductor de su alojamiento, que conoce la puerta correcta y al porteador.",
        meta: [
          { label: "Precio", value: "150–250 MAD / vehículo" },
          { label: "Trayecto", value: "15–25 min" },
          { label: "Reserva", value: "a través del riad" },
        ],
        pros: [
          "El conductor sabe exactamente dónde parar para su riad",
          "A menudo coordinada con un porteador y su carretilla para el equipaje",
          "Pago a la llegada",
        ],
        cons: [
          "Precio muy variable según el alojamiento: compárelo con un traslado",
          "No siempre disponible para vuelos que aterrizan de madrugada",
        ],
      },
      {
        icon: 'car',
        title: "Alquiler de coche",
        tagline: "Para el Atlas, Agafay o Esauira, no para visitar la medina.",
        meta: [
          { label: "Precio", value: "desde 25 € / día" },
          { label: "Mostradores", value: "sala de llegadas" },
          { label: "Documentos", value: "carné, pasaporte, tarjeta" },
        ],
        pros: [
          "Mostradores de alquiladoras internacionales y marroquíes en la sala de llegadas",
          "Libertad total para el Ourika, Imlil, Agafay o la carretera de Esauira",
          "Reservar en línea unos días antes suele salir más barato que en el mostrador",
        ],
        cons: [
          "La medina es peatonal: el coche se queda en un aparcamiento",
          "Fianza bloqueada en una tarjeta de crédito a nombre del conductor",
        ],
        link: { key: 'carRental', label: "Comparar precios de alquiler" },
      },
    ],
  },
  body: `
<h2>Taxi o traslado desde el aeropuerto de Marrakech-Menara: la cuenta honesta</h2>
<p>El taxi no es caro en Marrakech: de 100 a 150 MAD anunciados para la medina, Guéliz y el Hivernage, es decir, de 9 a 14 € el coche entero. Para dos personas de día, ninguna reserva mejora ese precio.</p>
<p>La relación se invierte en tres casos. <strong>De noche</strong>, la tarifa sube a 150–240 MAD por el mismo trayecto. <strong>A partir de cuatro personas</strong>, un petit taxi solo lleva tres pasajeros: dos coches, es decir, 200–300 MAD de día y hasta 480 MAD de noche. <strong>Para un riad mal situado</strong>, el conductor para en la puerta que le conviene, lo que puede sumar quince minutos de caminata con las maletas. A 27 € por vehículo hasta siete plazas, el traslado reservado pasa a ser la opción más barata y la más cómoda.</p>

<h2>El verdadero problema: la parada en las puertas de la medina</h2>
<p>Ningún coche entra en los estrechos <em>derbs</em>, y varios accesos están cerrados al tráfico. El conductor para en la <em>bab</em> más cercana: Bab Doukkala al noroeste, Bab Laksour junto a la Koutoubia, Bab Agnaou al sur, Bab el Khemis al este. El final se hace a pie, normalmente de tres a diez minutos.</p>
<div class="callout">
<span class="callout-label">Dos preguntas para su riad</span>
<p>Antes de viajar, pida el nombre exacto de la puerta de parada y si un porteador con carretilla puede esperarle. La mayoría de riads lo ofrece gratis o por unos dírhams si les da su hora de llegada.</p>
</div>

<h2>Llegar de noche al aeropuerto de Marrakech-Menara</h2>
<p>Después de las 23:30, el bus 19 ya no circula: quedan el taxi con tarifa nocturna o un traslado reservado. Saque dírhams en el cajero de la sala de llegadas antes de salir, porque los taxis no aceptan tarjeta. Avise también a su riad: muchos cierran la puerta por la noche y envían a alguien a recibirle en la <em>bab</em> si conocen su hora de llegada.</p>
`,
  faqHeading: "Traslados desde el aeropuerto de Marrakech-Menara: preguntas frecuentes",
  faqs: [
    { q: "¿Qué transporte elegir si aterrizo a medianoche en Marrakech?", a: "Un traslado reservado, que le espera aunque el vuelo se retrase y le deja en la puerta de la medina más cercana a su riad. El taxi sigue siendo posible con tarifa nocturna, de 150 a 240 MAD el coche. El bus 19 deja de circular hacia las 23:30." },
    { q: "¿Cuánto cuesta un taxi del aeropuerto de Marrakech a la medina?", a: "De 100 a 150 MAD el coche de día y de 150 a 240 MAD de noche, hacia la medina, Guéliz o el Hivernage. El precio es por vehículo, con un máximo de tres pasajeros en un petit taxi. Confírmelo antes de cargar el equipaje." },
    { q: "¿Cuánto cuesta un traslado privado desde el aeropuerto de Marrakech-Menara?", a: "Desde 27 € por vehículo hasta 7 pasajeros hacia la medina, Guéliz o el Hivernage, con seguimiento del vuelo. Cuente con más para la Palmeraie o un campamento de Agafay, y unos 95 € hasta Esauira." },
    { q: "¿Se puede pagar el taxi con tarjeta?", a: "No, los taxis de Marrakech se pagan en efectivo y en dírhams. En la sala de llegadas hay cajeros y oficinas de cambio. Un traslado reservado se paga en línea o al conductor, según el proveedor." },
    { q: "¿Hay tren entre el aeropuerto de Marrakech y la ciudad?", a: "No, ninguna vía férrea llega al aeropuerto. La estación ONCF está en Guéliz, con trenes a Rabat, Fez y Tánger: se llega en taxi, traslado o autobús." },
    { q: "¿Se puede usar Uber, Careem o inDrive en el aeropuerto?", a: "No cuente con ello para su llegada. Uber volvió a Marrakech a finales de noviembre de 2025, pero solo con transportistas turísticos autorizados y una disponibilidad irregular; Careem e inDrive operan en un marco todavía poco claro. En la ciudad pueden servir de ayuda." },
    { q: "¿Puede el conductor dejarme en la puerta de mi riad?", a: "Casi nunca: los callejones de la medina son demasiado estrechos para un coche. El conductor para en la puerta más cercana y usted termina a pie, normalmente de 3 a 10 minutos. Pida un porteador a su riad." },
    { q: "¿Cómo ir del aeropuerto de Marrakech a Esauira?", a: "Lo más sencillo es un traslado privado, unos 95 € por vehículo para 2 h 30 a 3 h de carretera. Los autobuses Supratours y CTM salen de la ciudad, no del aeropuerto: primero hay que llegar a su estación en taxi." },
  ],
  cta: {
    heading: "Su trayecto resuelto antes del despegue",
    text: "Precio fijo por vehículo, conductor esperándole con su nombre y seguimiento del vuelo. O un coche para salir a descubrir el Atlas.",
    label: "Reservar un traslado",
    secondary: { label: "Alquilar un coche", key: 'carRental' },
  },
} satisfies LocalizedPage;
