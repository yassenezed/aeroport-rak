import type { LocalizedPage } from '../types';

export default {
  title: "Alquiler de coches de lujo aeropuerto Marrakech-Menara",
  description: "Alquile una berlina premium, un SUV o un descapotable en el aeropuerto de Marrakech-Menara: modelos, precios desde 110 €/día, fianza y opción con chófer.",
  eyebrow: "Alquiler de prestigio · berlinas y SUV",
  h1: "Alquiler de coches de prestigio en el aeropuerto de Marrakech-Menara",
  lede: "Marrakech es una de las pocas ciudades de Marruecos donde los coches de alta gama se alquilan de verdad. Estos son los modelos disponibles, sus precios, las condiciones más estrictas y la pregunta clave: ¿conducir o que le lleven?",
  highlights: [
    { icon: 'star', value: "Desde 110 €", label: "Por día, berlina premium" },
    { icon: 'check', value: "Automático", label: "En casi todos los modelos" },
    { icon: 'passport', value: "25 años", label: "Edad mínima más habitual" },
    { icon: 'shield-check', value: "Sin franquicia", label: "Opción a todo riesgo disponible" },
  ],
  widget: 'car-rental',
  widgetIntro: {
    heading: "Reservar un coche de prestigio en el aeropuerto de Marrakech-Menara",
    text: "Escriba «Marrakech» y elija «Marrakech Airport», luego sus fechas: filtre los resultados por las categorías premium, SUV o lujo.",
  },
  cardSections: [
    {
      eyebrow: "Nuestra selección",
      heading: "Los coches de prestigio disponibles en Marrakech",
      variant: 'feature',
      items: [
        { icon: 'star', title: "Berlinas premium", text: "Mercedes Clase C y E, BMW Serie 3 y 5, Audi A4 y A6: confort y discreción para viajes de negocios.", tags: ["110–180 €/día", "Cuero, GPS"] },
        { icon: 'map', title: "SUV premium", text: "Range Rover, Porsche Cayenne, Mercedes GLE: los más pedidos, cómodos en las pistas de Agafay y en el Tichka.", tags: ["150–280 €/día", "Gran maletero"] },
        { icon: 'sun', title: "Descapotables y deportivos", text: "Con el Ford Mustang a la cabeza, alquilados sobre todo por días para una ocasión o una ruta panorámica.", tags: ["200–400 €/día", "Por días"] },
        { icon: 'users', title: "Furgoneta VIP con chófer", text: "Mercedes Clase V con conductor: la opción de grupos y viajes de negocios, sin fianza.", tags: ["150–250 €/día", "Chófer incluido"] },
      ],
    },
    {
      eyebrow: "Ventajas",
      heading: "Por qué alquilar un coche de prestigio en Marrakech",
      variant: 'feature',
      items: [
        { icon: 'map', title: "Confort en largas distancias", text: "Asientos de cuero, suspensión e insonorización marcan la diferencia en la ruta a Esauira o Uarzazat." },
        { icon: 'shield', title: "Seguridad avanzada", text: "Frenada de emergencia, mantenimiento de carril, control de crucero adaptativo: un plus para viajar en familia." },
        { icon: 'check', title: "Automático de serie", text: "Sin estrés en el tráfico de Marrakech: casi todos los modelos premium son automáticos." },
        { icon: 'luggage', title: "Recibimiento a medida", text: "Entrega de llaves en el aeropuerto o del coche en su hotel, según la empresa." },
      ],
    },
    {
      eyebrow: "Comparar",
      heading: "¿Prestigio, económico o monovolumen?",
      variant: 'feature',
      items: [
        { icon: 'car', title: "Económico", text: "Utilitarios para un presupuesto ajustado, perfectos para Esauira y el Ourika.", tags: ["Desde 25 €/día"], link: { key: 'carBudget', label: "Ver económicos" } },
        { icon: 'users', title: "Monovolumen de 7 a 9 plazas", text: "Para familias y grupos, con sitio para el equipaje.", tags: ["Desde 55 €/día"], link: { key: 'carMinivan', label: "Ver monovolúmenes" } },
        { icon: 'check', title: "Cambio automático", text: "Compactos y SUV automáticos a precios más suaves que el prestigio.", tags: ["Desde 45 €/día"], link: { key: 'carEasy', label: "Ver automáticos" } },
      ],
    },
  ],
  body: `
<h2>Precios y fianzas de coches de lujo en el aeropuerto de Marrakech-Menara</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Categoría</th><th>Precio / día</th><th>Fianza habitual</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Berlina premium</strong></td><td class="num">110–180 €</td><td class="num">20 000–30 000 MAD</td></tr>
<tr><td><strong>SUV premium</strong></td><td class="num">150–280 €</td><td class="num">30 000–50 000 MAD</td></tr>
<tr><td><strong>Descapotable / deportivo</strong></td><td class="num">200–400 €</td><td class="num">40 000–60 000 MAD</td></tr>
<tr><td><strong>Furgoneta VIP con chófer</strong></td><td class="num">150–250 €</td><td>ninguna</td></tr>
</tbody>
</table>
</div>

<h2>Condiciones más estrictas</h2>
<p>En estas categorías, cuente con una <strong>edad mínima de 25 a 30 años</strong>, un carné de <strong>3 a 5 años</strong> de antigüedad y una fianza que a menudo supera el límite habitual de una tarjeta. <strong>Avise a su banco antes de viajar</strong> para que suba temporalmente el límite de autorización: es el primer motivo de rechazo en el mostrador y no se resuelve allí. Algunas empresas limitan también el kilometraje o las pistas: compruébelo si va hacia el sur.</p>
<p>Para un coche de este valor, el <strong>seguro sin franquicia</strong> es muy recomendable: la menor llanta rozada cuesta miles de dírhams. Fotografíe el coche con detalle a la salida y a la devolución.</p>

<h2>¿Conducir o que le lleven?</h2>
<p>Un SUV premium a 200 € al día, aparcado delante de un riad porque la medina es peatonal, cuesta lo mismo que un <strong>chófer privado por día</strong> que espera, le deja y se ocupa del aparcamiento. El chófer se impone en las rutas largas a Uarzazat o Esauira, en jornadas de negocios con varias citas y en viajes en familia en los que nadie quiere conducir tras un día en el Atlas.</p>
<div class="callout">
<span class="callout-label">Reserve pronto y confirme el modelo</span>
<p>La flota premium es limitada y rota entre varias agencias. En primavera, a final de año y durante grandes eventos, reserve con varias semanas y haga confirmar <strong>el modelo exacto</strong> por escrito, no solo la categoría.</p>
</div>

<h2>Recogida y entrega</h2>
<p><strong>En el aeropuerto</strong>: llaves en el mostrador o en el aparcamiento, a veces en la terminal para los modelos de lujo. <strong>En el hotel</strong>: muchas empresas premium entregan en su hotel o a la entrada de la medina; llegue en <a href="/es/book-transfer/">traslado</a> y reciba el coche al día siguiente. <strong>Solo ida</strong>: devolución posible en Esauira, Fez o Tánger según la empresa, con suplemento.</p>
`,
  faqHeading: "Alquiler de prestigio en el aeropuerto de Marrakech-Menara: preguntas frecuentes",
  faqs: [
    { q: "¿Cuánto cuesta un coche de lujo en el aeropuerto de Marrakech?", a: "De 110 a 180 € al día una berlina premium, de 150 a 280 € un SUV tipo Range Rover o Cayenne y de 200 a 400 € un descapotable o deportivo. Las fianzas van de 20 000 a 60 000 MAD según el modelo." },
    { q: "¿Qué modelos de prestigio se pueden alquilar en Marrakech?", a: "Mercedes Clase C, E y GLE, BMW Serie 3 y 5, Audi A4 y A6, Range Rover, Porsche Cayenne y algunos descapotables como el Ford Mustang, según disponibilidad." },
    { q: "¿Qué edad hace falta?", a: "De 25 a 30 años según el modelo, con un carné de 3 a 5 años de antigüedad. Los deportivos y los SUV más grandes tienen las condiciones más estrictas." },
    { q: "¿Está incluido el seguro a todo riesgo?", a: "El seguro básico sí, con una franquicia alta. Para un coche de este valor se recomienda mucho la opción sin franquicia: cubre daños, robo y lunas." },
    { q: "¿Pueden entregarme el coche en el hotel?", a: "Sí, muchas empresas premium entregan en el hotel o a la entrada de la medina, gratis o con suplemento. Indíquelo al reservar." },
    { q: "¿Los coches de prestigio son automáticos?", a: "Casi todos. Aun así, haga confirmar la transmisión y el modelo exacto por escrito, porque «o similar» no garantiza nada." },
    { q: "¿Merece la pena un SUV premium para un viaje por Marruecos?", a: "Para Agafay, las pistas del sur o una ruta larga a Uarzazat, sí: confort, altura libre y gran maletero. Para una estancia urbana, un chófer privado suele ser más práctico." },
    { q: "¿Por qué pueden rechazar mi tarjeta en el mostrador?", a: "Porque la fianza, a menudo de 20 000 a 60 000 MAD, supera el límite de autorización habitual. Pida a su banco que lo suba temporalmente antes de viajar." },
  ],
  cta: {
    heading: "¿Listo para vivir Marrakech en primera clase?",
    text: "Compare las berlinas y SUV premium de las empresas del aeropuerto y reserve en pocos clics.",
    label: "Comparar precios",
    href: "#reserver",
    secondary: { label: "Ver todas las categorías", key: 'carRental' },
  },
} satisfies LocalizedPage;
