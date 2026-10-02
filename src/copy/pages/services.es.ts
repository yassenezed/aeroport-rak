import type { LocalizedPage } from '../types';

export default {
  title: "Servicios del aeropuerto de Marrakech-Menara: wifi y cambio",
  description: "Servicios del aeropuerto de Marrakech-Menara: cajeros, cambio, SIM y eSIM, wifi, salas VIP, consigna, embalaje de maletas, unidad médica y asistencia.",
  eyebrow: "Marrakech-Menara · Servicios",
  h1: "Servicios aeropuerto Marrakech-Menara",
  lede: "Dinero, conexión, salas VIP, equipaje, salud: todo lo que encontrará realmente en las terminales del aeropuerto de Marrakech-Menara, dónde está y qué conviene resolver antes de salir del vestíbulo.",
  highlights: [
    { icon: 'building', value: "T1 · T2", label: "Dos terminales comunicadas a pie" },
    { icon: 'wifi', value: "Gratis", label: "Wifi en las terminales" },
    { icon: 'medical', value: "24 h", label: "Unidad médica de urgencias" },
  ],
  cardSections: [
    {
      eyebrow: "Servicios esenciales",
      heading: "Los servicios esenciales del aeropuerto de Marrakech-Menara",
      intro: "Lo que necesitará nada más aterrizar y dónde encontrarlo en la terminal.",
      variant: 'feature',
      items: [
        { icon: 'wallet', title: "Dinero y cambio", text: "Cajeros y casas de cambio en el vestíbulo de llegadas y en la zona de salidas. El dírham no se compra fuera de Marruecos: saque dinero antes de salir.", tags: ["Visa y Mastercard", "Cambio", "MAD"], link: { key: 'money', label: "Guía del dinero" } },
        { icon: 'sim', title: "SIM, eSIM y wifi", text: "Mostradores de Maroc Telecom, Orange e inwi en llegadas, con pasaporte. El wifi gratuito saca de apuros; una eSIM activada antes del vuelo evita la cola.", tags: ["4G", "eSIM", "Wifi gratis"], link: { key: 'esim', label: "Elegir una eSIM" } },
        { icon: 'star', title: "Salas VIP", text: "El Pearl Lounge, la sala de Royal Air Maroc y el servicio Convives de Marque de la ONDA ofrecen asientos, wifi, enchufes y bufé ligero, con acceso de pago.", tags: ["Wifi", "Bufé", "Acceso de pago"], link: { key: 'vipLounges', label: "Acceso y precios" } },
        { icon: 'medical', title: "Salud y urgencias", text: "Una unidad médica de urgencias funciona las 24 horas en el aeropuerto. Lleve sus medicamentos en cabina, con la receta, y no en la bodega.", tags: ["24 h", "Primeros auxilios"] },
        { icon: 'accessibility', title: "Asistencia PMR", text: "Silla de ruedas y acompañamiento desde el avión hasta la salida. Se solicita a su compañía al menos 48 horas antes del vuelo.", tags: ["Silla de ruedas", "Acompañamiento", "48 h antes"] },
        { icon: 'shield-check', title: "Fast track", text: "Paso prioritario por los controles, con un agente que le acompaña. Útil sobre todo en las llegadas de la noche, cuando las colas se alargan.", tags: ["Vía rápida", "Llegada y salida"], link: { key: 'fastTrack', label: "¿Merece la pena?" } },
      ],
    },
    {
      eyebrow: "Comodidades",
      heading: "Las comodidades de la terminal",
      intro: "Para esperar, comer, rezar o encontrar a su conductor en buenas condiciones.",
      variant: 'compact',
      items: [
        { icon: 'shop', title: "Tiendas libres de impuestos", text: "Perfumes, cosmética, artesanía y productos locales, sobre todo tras la seguridad." },
        { icon: 'coffee', title: "Cafeterías y restauración", text: "Cafeterías en la zona pública y más oferta en la zona de embarque, a precios de aeropuerto." },
        { icon: 'prayer', title: "Salas de oración", text: "En ambas terminales, en la zona pública y en la de embarque." },
        { icon: 'baby', title: "Espacios para familias", text: "Cambiadores y puntos de agua para viajar con niños pequeños." },
        { icon: 'wifi', title: "Wifi gratuito", text: "Red abierta en las terminales, más lenta en horas punta." },
        { icon: 'sim', title: "Mostradores de telefonía", text: "Maroc Telecom, Orange e inwi venden tarifas turísticas a la llegada." },
        { icon: 'tag', title: "Alquiler de coches", text: "Mostradores de agencias internacionales y locales en el vestíbulo de llegadas." },
        { icon: 'van', title: "Punto de encuentro", text: "Los conductores esperan delante del vestíbulo de llegadas con un cartel con su nombre." },
      ],
    },
    {
      eyebrow: "Equipaje",
      heading: "Servicios de equipaje en el aeropuerto de Marrakech",
      intro: "Dejar una maleta, protegerla o reaccionar rápido si no llega.",
      variant: 'feature',
      items: [
        { icon: 'lock', title: "Consigna de equipajes", text: "Una consigna en el vestíbulo de llegadas guarda sus maletas unas horas o un día: práctica para una escala o una salida por la tarde.", tags: ["Vestíbulo de llegadas", "De pago"], link: { key: 'layover', label: "Escala en Marrakech" } },
        { icon: 'luggage', title: "Embalaje de maletas", text: "Algunos mostradores plastifican su equipaje antes de facturar, para protegerlo de golpes y aperturas.", tags: ["Antes de facturar", "De pago"] },
        { icon: 'trolley', title: "Carritos y maleteros", text: "Hay carritos en los vestíbulos. También ofrecen sus servicios maleteros: acuerde el precio antes de entregarles las maletas.", tags: ["Carritos", "Maleteros"] },
        { icon: 'alert', title: "Maleta perdida o dañada", text: "Declárela en el mostrador de equipajes de su compañía antes de salir de la zona de recogida, con la tarjeta de embarque y la etiqueta.", tags: ["Declaración inmediata", "Parte PIR"] },
      ],
    },
  ],
  services: {
    heading: "Llegar a Marrakech desde el aeropuerto",
    intro: "El aeropuerto está a 6 km de la medina. Estas son las formas de llegar, con precios comprobados.",
    items: [
      { icon: 'bus', key: 'bus19', title: "Autobús 19 (ALSA)", text: "30 MAD por persona, unos 20 minutos hasta Jemaa el-Fna, última salida hacia las 23:30.", cta: "Horarios y paradas" },
      { icon: 'car', key: 'transfers', title: "Taxi oficial", text: "100–150 MAD de día y 150–240 MAD de noche, con tarifas en la parada.", cta: "Tarifas del taxi" },
      { icon: 'van', key: 'bookTransfer', title: "Traslado privado", text: "Desde 27 € por vehículo, conductor con su nombre y vuelo seguido, incluso de noche.", cta: "Reservar" },
      { icon: 'tag', key: 'carRental', title: "Alquiler de coches", text: "Mostradores en el vestíbulo de llegadas, desde 25 € al día.", cta: "Comparar" },
      { icon: 'parking', key: 'parking', title: "Parking del aeropuerto", text: "6 MAD la primera hora y 42 MAD las 24 horas (tarifa ONDA), frente a las terminales.", cta: "Ver el parking" },
      { icon: 'plane-landing', key: 'arrivals', title: "Llegadas en directo", text: "Siga un vuelo y su hora real de aterrizaje antes de salir.", cta: "Ver llegadas" },
    ],
  },
  body: `
<h2>Sacar dinero en el aeropuerto de Marrakech</h2>
<p>Hay varios cajeros y casas de cambio en el vestíbulo público de llegadas, después de la aduana, y en la zona de salidas. Los cajeros aceptan Visa y Mastercard y cobran una comisión fija por retirada: más vale una retirada grande que tres pequeñas. El cambio del aeropuerto es correcto sin ser el mejor de la ciudad; cambie para dos días y complete en Guéliz si su estancia es larga.</p>
<p>Dos normas locales: el dírham no se compra fuera de Marruecos y tampoco se puede sacar del país. Prevea cambiar los billetes que le queden <strong>antes</strong> del control de pasaportes a la salida y conserve el recibo de su primer cambio. Todos los consejos en nuestra guía de <a href="/es/blog/money-in-morocco/">dinero y cambio en Marruecos</a>.</p>

<h2>Conectarse nada más aterrizar</h2>
<p>El wifi gratuito de la terminal sirve para enviar un mensaje, poco más. Para estar localizable al salir, algo útil para avisar a un conductor o a un riad, hay dos opciones:</p>
<ul>
<li><strong>Tarjeta SIM local</strong>: los mostradores de Maroc Telecom, Orange e inwi están en el vestíbulo de llegadas. Una tarifa turística con datos cuesta unas decenas de dírhams. Pasaporte obligatorio y activación en pocos minutos. Comparativa en nuestro artículo sobre <a href="/es/blog/morocco-sim-cards/">tarjetas SIM en Marruecos</a>.</li>
<li><strong>eSIM</strong>: activada antes de salir, funciona desde el aterrizaje, sin colas ni papeles. Es la opción más sencilla si su teléfono es compatible. Vea nuestra página <a href="/es/morocco-esim/">eSIM Marruecos</a>.</li>
</ul>

<h2>Equipaje perdido o dañado: qué hacer</h2>
<p>Si su maleta no aparece en la cinta, no salga de la zona de recogida: diríjase al mostrador de equipajes de su compañía o de su agente de handling, con la tarjeta de embarque y la etiqueta pegada al billete. Le entregarán un <strong>parte de irregularidad (PIR)</strong> y un número de expediente, imprescindibles para localizar la maleta y reclamar. Indique la dirección exacta de su alojamiento: el equipaje recuperado se entrega, pero un riad en la medina se encuentra mucho mejor con el nombre de la puerta más cercana.</p>

<h2>Viajar con niños o con movilidad reducida</h2>
<p>La asistencia a personas con movilidad reducida se solicita a la compañía aérea al menos 48 horas antes del vuelo: es ella quien activa el servicio con el aeropuerto. Recuérdelo en el mostrador de facturación el día de la salida. Con niños, lleve agua y algo para picar: las colas de pasaportes no se cruzan con una bandeja, y las salas VIP son un verdadero alivio si hay retraso.</p>
<p>En cuanto a trámites, la ficha policial se suprimió en septiembre de 2019: solo se revisa el pasaporte, a la entrada y a la salida. Los ciudadanos de la UE, Suiza, el Reino Unido, Canadá y EE. UU. no necesitan visado para una estancia turística de hasta 90 días, con un pasaporte válido durante toda la estancia.</p>
<div class="callout">
<span class="callout-label">Tres cosas antes de salir del vestíbulo</span>
<p>Sacar dírhams y dividirlos en billetes de 50 y 100. Activar su conexión, eSIM o SIM local. Y saber exactamente adónde va: nombre del riad, puerta de la medina o punto de encuentro con su conductor.</p>
</div>
`,
  spotlight: {
    icon: 'sparkles',
    heading: "Un aeropuerto en plena transformación",
    text: "Diseñado para unos 8 millones de pasajeros al año, el aeropuerto de Marrakech-Menara recibió <strong>9,3 millones en 2024</strong>. Dentro del plan «Aeropuertos 2030» de la ONDA, la terminal se ampliará para alcanzar <strong>16 millones de pasajeros al año en 2028</strong>. Desde marzo de 2025 se retiraron los escáneres de la entrada de la terminal para reducir las esperas. Para el plano de las terminales, vea nuestra <a href=\"/es/airport-guide/\">guía del aeropuerto</a>.",
  },
  faqHeading: "Servicios del aeropuerto de Marrakech: preguntas frecuentes",
  faqs: [
    { q: "¿Hay cajeros en el aeropuerto de Marrakech?", a: "Sí, hay varios cajeros y casas de cambio en el vestíbulo público de llegadas y en la zona de salidas. Aceptan Visa y Mastercard, con una comisión fija por retirada: mejor una sola retirada importante." },
    { q: "¿Hay wifi gratis en el aeropuerto de Marrakech-Menara?", a: "Sí, hay wifi gratuito en las terminales. Sirve para un mensaje, pero es irregular en horas punta: para contactar con un conductor con seguridad, mejor una eSIM o una SIM local." },
    { q: "¿Dónde comprar una tarjeta SIM en el aeropuerto de Marrakech?", a: "En los mostradores de Maroc Telecom, Orange e inwi del vestíbulo de llegadas. Una tarifa turística con datos cuesta unas decenas de dírhams, la activación tarda unos minutos y se pide el pasaporte." },
    { q: "¿Hay consigna de equipajes en el aeropuerto de Marrakech?", a: "Sí, una consigna en el vestíbulo de llegadas permite dejar maletas unas horas o un día, práctica para una escala o un vuelo por la tarde. Se paga allí mismo." },
    { q: "¿Qué salas VIP hay en el aeropuerto de Marrakech-Menara?", a: "El Pearl Lounge, la sala de Royal Air Maroc y el servicio Convives de Marque de la ONDA. Se accede con el billete o estatus, con ciertas tarjetas o programas, o pagando unos 25 a 45 € según la sala." },
    { q: "¿Hay servicio médico en el aeropuerto de Marrakech?", a: "Sí, una unidad médica de urgencias funciona las 24 horas en el aeropuerto para primeros auxilios. Lleve sus tratamientos en cabina con la receta: las farmacias están en la ciudad." },
    { q: "¿Hay sala de oración en el aeropuerto de Marrakech?", a: "Sí, hay salas de oración en ambas terminales, en la zona pública y en la de embarque." },
    { q: "¿Cómo solicitar asistencia para movilidad reducida?", a: "A través de su compañía aérea, al menos 48 horas antes del vuelo: ella activa el servicio con el aeropuerto. Recuérdelo también en el mostrador de facturación el día de la salida." },
  ],
  cta: {
    heading: "Salga de la terminal sin negociar",
    text: "Un conductor con su nombre, un precio fijo por vehículo y la puerta correcta de la medina: tres minutos de reserva que le ahorran la cola de taxis.",
    label: "Reservar un traslado",
  },
} satisfies LocalizedPage;
