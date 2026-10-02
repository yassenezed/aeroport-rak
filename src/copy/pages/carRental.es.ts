import type { LocalizedPage } from '../types';

export default {
  title: "Alquiler de coches aeropuerto Marrakech-Menara desde 270 MAD",
  description: "Alquiler de coches en el aeropuerto de Marrakech-Menara: compare empresas, precios desde 270 MAD/día, fianza, seguro y consejos para el Atlas y Esauira.",
  eyebrow: "Alquiler de coches · comparador",
  h1: "Alquiler de coches en el aeropuerto de Marrakech-Menara",
  lede: "Compare las empresas de alquiler de la sala de llegadas y recoja su coche nada más aterrizar. Un utilitario para Esauira, un SUV para el Atlas o un monovolumen para la familia: estos son los precios reales, la fianza que hay que prever y las trampas del contrato.",
  highlights: [
    { icon: 'wallet', value: "Desde 270 MAD", label: "Por día, utilitario en temporada baja" },
    { icon: 'plane-landing', value: "Sala de llegadas", label: "Mostradores en el aeropuerto" },
    { icon: 'passport', value: "Carné nacional", label: "Aceptado para una estancia turística" },
    { icon: 'shield-check', value: "Cancelación gratuita", label: "En la mayoría de ofertas" },
  ],
  widget: 'car-rental',
  widgetIntro: {
    heading: "Comparar alquileres en el aeropuerto de Marrakech-Menara",
    text: "Escriba «Marrakech» y elija «Marrakech Airport» como lugar de recogida, luego sus fechas y horas: las ofertas de empresas internacionales y marroquíes aparecen con el precio total.",
  },
  cardSections: [
    {
      eyebrow: "Antes de reservar",
      heading: "4 claves para pagar menos",
      variant: 'compact',
      items: [
        { icon: 'clock', title: "Reserve con 2 o 3 semanas", text: "Los coches pequeños y los automáticos son los primeros en agotarse en vacaciones." },
        { icon: 'dollar-circle', title: "Elija «lleno a lleno»", text: "Devuelve el depósito lleno y solo paga el combustible usado, sin cargos de servicio." },
        { icon: 'sun', title: "Apueste por la temporada baja", text: "Enero fuera de fiestas, junio y noviembre tienen los precios más bajos del año." },
        { icon: 'shield-check', title: "Mantenga la cancelación gratuita", text: "La mayoría de ofertas se cancelan sin coste hasta 48 h antes de la recogida." },
      ],
    },
    {
      eyebrow: "Categorías",
      heading: "¿Qué coche alquilar para su viaje a Marrakech?",
      intro: "Elija según su itinerario, no según el precio de reclamo.",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Económico", text: "Dacia Sandero, Kia Picanto, Hyundai i10: ideal para Esauira, el valle del Ourika y carreteras asfaltadas.", tags: ["Desde 270 MAD/día", "4–5 plazas"], link: { key: 'carBudget', label: "Ver ofertas" } },
        { icon: 'star', title: "Prestigio", text: "Berlinas y SUV premium para viajar con comodidad o en viaje de negocios.", tags: ["Desde 1200 MAD/día", "Fianza alta"], link: { key: 'carLuxury', label: "Descubrir" } },
        { icon: 'users', title: "Monovolumen de 7 a 9 plazas", text: "Dacia Jogger, Renault Trafic: toda la familia y el equipaje en un solo vehículo.", tags: ["Desde 600 MAD/día", "7–9 plazas"], link: { key: 'carMinivan', label: "Explorar" } },
        { icon: 'check', title: "Cambio automático", text: "Más escaso y más caro en Marruecos, pero mucho más descansado en el tráfico de Marrakech.", tags: ["Desde 490 MAD/día", "Reservar pronto"], link: { key: 'carEasy', label: "Ver vehículos" } },
      ],
    },
    {
      eyebrow: "Por qué el aeropuerto",
      heading: "Por qué alquilar en el aeropuerto de Marrakech-Menara",
      variant: 'feature',
      items: [
        { icon: 'plane-landing', title: "Coche nada más aterrizar", text: "Los mostradores están en la sala de llegadas: salga hacia el Atlas o la costa sin pasar por la ciudad." },
        { icon: 'map', title: "Salida directa a las carreteras", text: "El aeropuerto está al suroeste de la ciudad, hacia Agafay, con acceso rápido a las carreteras de Esauira y del Atlas." },
        { icon: 'building', title: "Empresas internacionales y locales", text: "Grandes marcas y agencias marroquíes, una al lado de otra: el comparador lo muestra todo en una página." },
        { icon: 'luggage', title: "Devolución fácil antes del vuelo", text: "Deje el coche en el aparcamiento del aeropuerto justo antes de facturar, sin buscar taxi." },
      ],
    },
  ],
  body: `
<h2>Precio del alquiler de coches en Marrakech en 2026</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Categoría</th><th>Precio / día</th><th>Fianza habitual</th><th>Para</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Utilitario (Sandero, Picanto)</strong></td><td class="num">≈ 270–380 MAD (25–35 €)</td><td class="num">5000–8000 MAD</td><td>Parejas, carreteras asfaltadas</td></tr>
<tr><td><strong>Compacto (Clio, Polo)</strong></td><td class="num">≈ 380–490 MAD (35–45 €)</td><td class="num">6000–10 000 MAD</td><td>Comodidad, largas distancias</td></tr>
<tr><td><strong>SUV (Duster, Sportage)</strong></td><td class="num">≈ 600–950 MAD (55–90 €)</td><td class="num">10 000–15 000 MAD</td><td>Atlas, pistas de Agafay</td></tr>
<tr><td><strong>Monovolumen 7 plazas</strong></td><td class="num">≈ 600–1050 MAD (55–95 €)</td><td class="num">8000–15 000 MAD</td><td>Familias, grupos</td></tr>
</tbody>
</table>
</div>
<p class="small">Precios orientativos en dírhams, convertidos a un tipo aproximado de 1 € ≈ 10,8 MAD. El comparador muestra el precio exacto de cada oferta.</p>
<p>Sume el combustible (el gasóleo ronda los 12 a 14 MAD el litro), los peajes de autopista y, si lo contrata, el seguro de franquicia. Los precios suben mucho en las vacaciones escolares europeas y en verano.</p>

<h2>¿De verdad necesita un coche en Marrakech?</h2>
<p><strong>Si se queda en la ciudad</strong>, no: la medina es peatonal, el aparcamiento es de pago y gestionado por guardas, y un petit taxi cuesta de 15 a 50 MAD por trayecto. <strong>Si sale de la ciudad</strong>, sí: el Ourika, Imlil, Agafay, Esauira o el puerto del Tichka se disfrutan mucho más por libre.</p>
<div class="callout">
<span class="callout-label">La fórmula más rentable</span>
<p>Pase los primeros días en la medina sin coche, llegando a su riad en <a href="/es/book-transfer/">traslado</a>, y alquile solo para los días de excursión. Se ahorra el alquiler y el aparcamiento de los días en que el coche no se movería.</p>
</div>

<h2>Rutas en coche desde el aeropuerto de Marrakech-Menara</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Destino</th><th>Distancia</th><th>Trayecto</th><th>Coche recomendado</th></tr></thead>
<tbody>
<tr><td><strong>Desierto de Agafay</strong></td><td class="num">≈ 35 km</td><td>40–50 min</td><td>Utilitario (SUV para pistas)</td></tr>
<tr><td><strong>Valle del Ourika</strong></td><td class="num">≈ 65 km</td><td>1 h 15–1 h 30</td><td>Utilitario</td></tr>
<tr><td><strong>Imlil, Alto Atlas</strong></td><td class="num">≈ 65 km</td><td>1 h 15–1 h 30</td><td>Utilitario o SUV</td></tr>
<tr><td><strong>Cascadas de Uzud</strong></td><td class="num">≈ 170 km</td><td>2 h 45–3 h</td><td>Compacto</td></tr>
<tr><td><strong>Esauira</strong></td><td class="num">≈ 185 km</td><td>2 h 30–3 h</td><td>Compacto</td></tr>
<tr><td><strong>Uarzazat por el Tichka</strong></td><td class="num">≈ 200 km</td><td>4 h–4 h 30</td><td>Compacto o SUV</td></tr>
</tbody>
</table>
</div>
<p>Todas estas carreteras están asfaltadas. El puerto del Tichka (2260 m) es sinuoso y con muchos camiones: calcule tiempo de sobra y evite cruzarlo de noche. Más detalles en nuestras guías de <a href="/es/blog/distance-essaouira-marrakech-airport/">Esauira</a> y <a href="/es/blog/distance-ouarzazate-marrakech-airport/">Uarzazat</a>.</p>

<h2>Las tres líneas del contrato que importan</h2>
<h3>La fianza</h3>
<p>De 5000 a 15 000 MAD según la categoría, bloqueados en una <strong>tarjeta de crédito a nombre del conductor principal</strong>. Las tarjetas prepago y muchas de débito se rechazan: es el primer motivo de rechazo en el mostrador. Compruebe su límite antes de viajar.</p>
<h3>La franquicia</h3>
<p>El contrato básico deja a su cargo una franquicia elevada en caso de daños. Puede aceptarla, contratar el seguro de franquicia de la empresa (≈ 110 a 220 MAD, 10 a 20 € al día) o un seguro externo más barato, en cuyo caso adelanta el pago y luego le reembolsan.</p>
<h3>La inspección del vehículo</h3>
<p><strong>Fotografíe y grabe el coche desde todos los ángulos antes de salir</strong>: llantas, parabrisas, techo, interior y nivel de combustible. Haga anotar cada arañazo en el documento y repita las fotos a la devolución. Esos diez minutos evitan la mayoría de litigios.</p>

<h2>Lo que conviene saber antes de alquilar</h2>
<div class="table-wrap">
<table class="data">
<tbody>
<tr><td><strong>Edad mínima</strong></td><td>21 años en general, 23 a 25 para premium; posible recargo por conductor joven</td></tr>
<tr><td><strong>Carné</strong></td><td>Carné nacional con al menos 1 o 2 años de antigüedad según la empresa</td></tr>
<tr><td><strong>Fianza</strong></td><td>Tarjeta de crédito a nombre del conductor, obligatoria</td></tr>
<tr><td><strong>Kilometraje</strong></td><td>A menudo ilimitado; compruébelo en las ofertas muy baratas</td></tr>
<tr><td><strong>Límites de velocidad</strong></td><td>60 km/h en ciudad, 100 km/h en carretera, 120 km/h en autopista; muchos radares</td></tr>
</tbody>
</table>
</div>
<p>Lleve a mano el carné, el contrato y el pasaporte: los controles son frecuentes en las carreteras interurbanas y las multas se pagan en el acto con recibo. Más información en nuestras guías para <a href="/es/blog/car-rental-marrakech-airport/">alquilar un coche en el aeropuerto de Marrakech</a> y sobre el <a href="/es/blog/long-term-car-rental-marrakech/">alquiler de larga duración</a>.</p>
`,
  faqHeading: "Alquiler de coches en el aeropuerto de Marrakech-Menara: preguntas frecuentes",
  faqs: [
    { q: "¿Cuánto cuesta alquilar un coche en el aeropuerto de Marrakech?", a: "Desde 270 a 380 MAD (25 a 35 €) al día un utilitario, ≈ 380 a 490 MAD (35 a 45 €) un compacto y ≈ 600 a 950 MAD (55 a 90 €) un SUV. Añada combustible, peajes y el posible seguro de franquicia. Los precios suben en vacaciones escolares y en verano." },
    { q: "¿Qué empresas de alquiler hay en el aeropuerto de Marrakech-Menara?", a: "Grandes marcas internacionales y muchas agencias marroquíes tienen mostrador o punto de encuentro en la sala de llegadas. El comparador de esta página muestra sus ofertas juntas con el precio total." },
    { q: "¿Qué fianza hay que prever?", a: "De 5000 a 15 000 MAD según la categoría, bloqueados en una tarjeta de crédito a nombre del conductor principal. Las tarjetas prepago y muchas de débito se rechazan: compruebe su límite antes de viajar." },
    { q: "¿Basta el carné de conducir español en Marruecos?", a: "Sí, el carné nacional basta para una estancia turística si tiene al menos 1 o 2 años de antigüedad según la empresa. Llévelo con el contrato y el pasaporte: los controles son frecuentes." },
    { q: "¿Conviene contratar el seguro de franquicia?", a: "Reduce o elimina lo que paga en caso de daños, por ≈ 110 a 220 MAD (10 a 20 €) al día con la empresa de alquiler. Un seguro externo es más barato, pero adelanta el pago y luego reclama. Sin seguro, la franquicia corre de su cuenta." },
    { q: "¿Hace falta un 4x4 para el Atlas?", a: "No para el Ourika, Imlil o el puerto del Tichka, totalmente asfaltados. Un SUV solo es útil en las pistas de Agafay o los valles remotos, donde importa más la altura libre que la tracción." },
    { q: "¿Cuáles son los límites de velocidad en Marruecos?", a: "60 km/h en ciudad, 100 km/h en carretera y 120 km/h en autopista. Hay muchos radares fijos y móviles, y las multas se pagan en el acto con recibo." },
    { q: "¿Cuándo es más barato alquilar?", a: "En enero fuera de fiestas, junio y noviembre. Las vacaciones escolares europeas, Semana Santa y el verano encarecen los precios: reserve con 2 o 3 semanas y mantenga la cancelación gratuita." },
    { q: "¿Se puede cancelar la reserva sin coste?", a: "Sí en la mayoría de ofertas, hasta 48 h antes de la recogida. Las condiciones exactas aparecen antes del pago: revíselas, sobre todo en las tarifas promocionales." },
    { q: "¿Mejor alquilar en el aeropuerto o en la ciudad?", a: "En el aeropuerto si sale de ruta enseguida. Si empieza con unos días en la medina, tome un traslado hasta el riad y alquile solo para los días de excursión." },
  ],
  cta: {
    heading: "¿Listo para recorrer el Atlas y la costa?",
    text: "Compare las empresas del aeropuerto y reserve en pocos clics, con cancelación gratuita en la mayoría de ofertas.",
    label: "Comparar precios",
    href: "#reserver",
    secondary: { label: "Prefiero un traslado", key: 'bookTransfer' },
  },
} satisfies LocalizedPage;
