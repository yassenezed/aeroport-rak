import type { LocalizedPage } from '../types';

export default {
  title: "Retraso en el aeropuerto de Marrakech-Menara: hasta 600 €",
  description: "¿Vuelo retrasado o cancelado en el aeropuerto de Marrakech-Menara? Compruebe gratis si puede reclamar 250, 400 o 600 € según el Reglamento CE 261/2004.",
  eyebrow: "Derechos del pasajero · CE 261/2004",
  h1: "Compensación por retraso: aeropuerto Marrakech-Menara",
  lede: "¿Su vuelo con origen o destino en el aeropuerto de Marrakech-Menara llegó con más de tres horas de retraso o fue cancelado? Puede tener derecho a 250, 400 o 600 € por pasajero. Compruebe su vuelo en un minuto y lea lo que realmente se aplica a su caso.",
  widget: 'compensation',
  highlights: [
    { icon: 'wallet', value: "250 €", label: "Menos de 1 500 km: Madrid, Sevilla, Barcelona" },
    { icon: 'wallet', value: "400 €", label: "De 1 500 a 3 500 km: París, Londres, Bruselas" },
    { icon: 'wallet', value: "600 €", label: "Más de 3 500 km: Estocolmo, Helsinki, Riga" },
  ],
  cardSections: [
    {
      eyebrow: "¿Quién está cubierto?",
      heading: "Qué vuelos del aeropuerto de Marrakech-Menara están cubiertos",
      intro: "Depende del sentido del vuelo y de la nacionalidad de la compañía.",
      variant: 'feature',
      items: [
        { icon: 'plane-landing', title: "España o Europa → Marrakech", text: "Todos los vuelos que salen de la Unión Europea están cubiertos, sea cual sea la compañía, incluida Royal Air Maroc.", tags: ["Cubierto", "Todas las compañías"] },
        { icon: 'plane-takeoff', title: "Marrakech → Europa, compañía europea", text: "Cubierto si el vuelo lo opera una compañía europea: Ryanair, Vueling, Iberia, Air Europa, Volotea, easyJet, Transavia, Air France…", tags: ["Cubierto", "Compañía de la UE"] },
        { icon: 'alert', title: "Marrakech → Europa, compañía no europea", text: "Royal Air Maroc, Qatar Airways, Turkish Airlines o Saudia con salida de Marruecos no están sujetas al Reglamento. Se aplican sus condiciones de transporte.", tags: ["No cubierto"] },
        { icon: 'shield-check', title: "Vuelos con el Reino Unido", text: "El reglamento británico UK261 prevé los mismos derechos, en libras, para los vuelos que salen del Reino Unido y los de compañías británicas.", tags: ["UK261", "220 a 520 £"] },
      ],
    },
    {
      eyebrow: "Vuelo retrasado",
      heading: "Retraso: lo que la compañía debe ofrecerle en el aeropuerto",
      intro: "Antes incluso de la compensación, la compañía debe atenderle en el aeropuerto a partir de cierto tiempo de espera.",
      variant: 'feature',
      items: [
        { icon: 'coffee', title: "2 h o más, vuelo de menos de 1 500 km", text: "Comida y refrescos según la espera y dos comunicaciones (llamadas o correos). Es el caso de la mayoría de vuelos entre España y Marrakech.", tags: ["Comida", "Bebidas", "Comunicaciones"] },
        { icon: 'clock', title: "3 h o más, vuelo de 1 500 a 3 500 km", text: "La misma atención, para vuelos como París, Londres, Bruselas o Fráncfort.", tags: ["Comida", "Bebidas", "Comunicaciones"] },
        { icon: 'building', title: "4 h o más, vuelo de más de 3 500 km", text: "Lo mismo y, si la salida pasa al día siguiente: hotel y transporte entre el aeropuerto y el hotel, sea cual sea la distancia.", tags: ["Hotel", "Transporte", "Comida"] },
      ],
    },
    {
      eyebrow: "Vuelo cancelado",
      heading: "Vuelo cancelado: sus opciones",
      intro: "En caso de cancelación, la compañía debe dejarle elegir y atenderle.",
      variant: 'feature',
      items: [
        { icon: 'wallet', title: "Reembolso íntegro", text: "El precio del billete reembolsado en siete días, incluida la parte no utilizada de una ida y vuelta." },
        { icon: 'plane', title: "Vuelo alternativo", text: "Un transporte a su destino lo antes posible, o en una fecha posterior que usted elija." },
        { icon: 'tag', title: "Compensación de 250 a 600 €", text: "Si le avisaron con menos de 14 días de antelación, salvo que le hayan reubicado cerca del horario inicial." },
        { icon: 'users', title: "Atención", text: "Comida, comunicaciones y, si hace falta, hotel y transporte mientras espera el vuelo alternativo." },
      ],
    },
    {
      eyebrow: "Excepciones",
      heading: "Las circunstancias extraordinarias",
      intro: "En estos casos la compañía debe seguir atendiéndole, pero no tiene que pagar la compensación.",
      variant: 'compact',
      items: [
        { icon: 'cloud', title: "Meteorología", text: "Tormenta, viento fuerte, niebla o temporal que hagan peligroso el vuelo." },
        { icon: 'shield', title: "Seguridad", text: "Amenaza a la seguridad, cierre del espacio aéreo, inestabilidad política." },
        { icon: 'alert', title: "Fenómenos naturales", text: "Terremoto, erupción volcánica u otro suceso imprevisible." },
        { icon: 'users', title: "Huelga de control aéreo", text: "Huelgas ajenas a la compañía, como las del control aéreo francés." },
      ],
    },
  ],
  steps: {
    heading: "Cómo reclamar su compensación",
    intro: "Puede reclamar directamente a la compañía o usar el servicio de verificación de arriba, que solo cobra si la reclamación prospera.",
    items: [
      { icon: 'clipboard', title: "Guarde sus documentos", text: "Tarjeta de embarque, confirmación de reserva y cualquier prueba del retraso o la cancelación: correos, SMS, fotos del panel de vuelos." },
      { icon: 'clock', title: "Anote la hora de llegada", text: "El retraso se mide a la llegada, al abrir las puertas del avión. Pida también por escrito el motivo del retraso en el mostrador de la compañía." },
      { icon: 'users', title: "Reclame a la compañía", text: "Envíe una reclamación escrita al servicio de atención al cliente citando el Reglamento CE 261/2004, el número de vuelo, la fecha y el importe." },
      { icon: 'shield-check', title: "Haga valer sus derechos", text: "Sin respuesta en dos meses, o si la rechazan, acuda a la AESA (Agencia Estatal de Seguridad Aérea) o a la autoridad del país de salida." },
    ],
  },
  body: `
<h2>¿Cuánto puede cobrar por un vuelo con origen o destino en Marrakech?</h2>
<p>El importe no depende del precio del billete, sino de la <strong>distancia del vuelo</strong>. Para el aeropuerto de Marrakech-Menara:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Distancia</th><th>Compensación</th><th>Ejemplos de rutas con Marrakech</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Hasta 1 500 km</strong></td><td class="num">250 €</td><td>Madrid, Barcelona, Sevilla, Málaga, Valencia, Lisboa</td></tr>
<tr><td><strong>De 1 500 a 3 500 km</strong></td><td class="num">400 €</td><td>París, Lyon, Marsella, Bruselas, Ginebra, Londres, Ámsterdam, Fráncfort, Berlín</td></tr>
<tr><td><strong>Más de 3 500 km</strong></td><td class="num">600 €</td><td>Estocolmo, Helsinki, Riga</td></tr>
</tbody>
</table>
</div>
<p>La compensación se debe cuando el vuelo llega a su destino con <strong>tres horas o más de retraso</strong>, o en caso de cancelación tardía o denegación de embarque. Puede reducirse a la mitad si la compañía le reubicó con una llegada cercana a la hora prevista. Los vuelos directos de Marrakech a Montreal, Atlanta o Nueva York los operan compañías no europeas desde fuera de la UE: no están cubiertos.</p>

<h2>Las compañías cubiertas con salida de Marrakech</h2>
<p>Con salida del aeropuerto de Marrakech-Menara, el Reglamento se aplica si la compañía es europea. Es el caso de la mayoría de vuelos hacia España y Europa: <strong>Ryanair, Vueling, Iberia, Air Europa, Volotea, Binter, easyJet, Transavia, Air France, Wizz Air, TUI fly, TAP, Aer Lingus, Norwegian, SAS</strong> y el resto de compañías de la UE, Noruega y Suiza. En cambio, <strong>Royal Air Maroc</strong> no está cubierta con salida de Marruecos, como tampoco Qatar Airways, Turkish Airlines, Saudia, Air Transat, Delta o United. Consulte rutas y compañías en nuestra página de <a href="/es/destinations/">destinos desde Marrakech</a>.</p>

<h2>Retrasos frecuentes en Marrakech: lo que cuenta</h2>
<p>Muchos vuelos low cost llegan a Marrakech por la noche, al final de la jornada del avión: un primer retraso se arrastra hasta el último vuelo. Si un vuelo se <strong>desvía</strong> a Casablanca o Agadir, lo que cuenta para el retraso es la hora de llegada a Marrakech, su destino final. Las huelgas del control aéreo francés afectan a menudo a los vuelos que sobrevuelan Francia: se consideran extraordinarias.</p>
<div class="callout">
<span class="callout-label">Conviene saber</span>
<p>Una avería técnica del avión <strong>no</strong> suele ser una circunstancia extraordinaria, ni tampoco una huelga del propio personal de la compañía: en ambos casos conserva su derecho a compensación.</p>
</div>

<h2>¿Cuánto tiempo tiene para reclamar?</h2>
<p>El Reglamento no fija plazo: depende del derecho del país donde reclame. Es de <strong>5 años en España y en Francia</strong>, 3 años en Alemania, 2 años en los Países Bajos, 1 año en Bélgica y 6 años en el Reino Unido. Aun así, no espere: las pruebas se pierden rápido. Para seguir un vuelo en tiempo real, consulte las <a href="/es/arrivals/">llegadas</a> y <a href="/es/departures/">salidas</a> del aeropuerto de Marrakech.</p>
`,
  faqHeading: "Compensación de vuelos en el aeropuerto de Marrakech: preguntas frecuentes",
  faqs: [
    { q: "¿Se aplica el Reglamento CE 261/2004 a los vuelos de Marrakech?", a: "Sí a todos los vuelos que salen de la Unión Europea hacia Marrakech, sea cual sea la compañía. Con salida de Marrakech, solo si la compañía es europea, como Ryanair, Vueling, Iberia o Air Europa. Royal Air Maroc no está cubierta con salida de Marruecos." },
    { q: "¿Cuánto puedo cobrar por un vuelo Madrid–Marrakech retrasado?", a: "250 € por pasajero, porque el vuelo tiene unos 1 050 km, menos de 1 500 km. El retraso a la llegada debe superar las tres horas y no deberse a circunstancias extraordinarias." },
    { q: "¿Y por un vuelo Barcelona–Marrakech o Sevilla–Marrakech?", a: "También 250 € por pasajero: Barcelona está a unos 1 400 km y Sevilla a unos 680 km, siempre con un retraso de más de tres horas a la llegada." },
    { q: "Mi vuelo de Royal Air Maroc con salida de Marrakech se retrasa: ¿puedo reclamar?", a: "No según el Reglamento europeo, porque la compañía no es europea y el vuelo sale de fuera de la UE. Aun así puede reclamar sus gastos reales según las condiciones de transporte y el Convenio de Montreal." },
    { q: "Mi vuelo se desvió a Casablanca o Agadir: ¿qué pasa?", a: "Cuenta la hora de llegada a Marrakech, su destino final. Si llega con más de tres horas de retraso y la causa no es extraordinaria, la compensación sigue siendo exigible." },
    { q: "¿Cuándo no está obligada a pagar la compañía?", a: "En circunstancias extraordinarias: meteorología peligrosa, amenazas a la seguridad, catástrofes naturales, huelgas de control aéreo. Una avería técnica o una huelga del propio personal no suelen eximirla." },
    { q: "¿Qué plazo hay para reclamar?", a: "Depende del país donde reclame: 5 años en España y Francia, 3 en Alemania, 2 en los Países Bajos, 1 en Bélgica y 6 en el Reino Unido. Guarde sus documentos y reclame cuanto antes." },
    { q: "Mi vuelo a Marrakech fue cancelado: ¿qué derechos tengo?", a: "La compañía debe ofrecerle el reembolso en siete días o un vuelo alternativo, y atenderle durante la espera. Si le avisaron con menos de 14 días, puede además reclamar de 250 a 600 € según la distancia." },
  ],
  cta: {
    heading: "¿Llegó tarde a Marrakech? Su conductor le espera",
    text: "Nuestros conductores siguen su vuelo y esperan sin coste adicional en caso de retraso, incluso de madrugada, y le dejan en la puerta de la medina más cercana a su riad.",
    label: "Reservar un traslado",
  },
} satisfies LocalizedPage;
