import type { LocalizedPage } from '../types';

export default {
  title: 'Alquiler de coches de lujo en Marrakech',
  description: 'Alquilar una berlina, un SUV premium o un descapotable en el aeropuerto de Marrakech: modelos, tarifas, fianzas elevadas y la alternativa con chófer.',
  eyebrow: 'Marrakech Menara · Prestigio',
  h1: 'Alquiler de coches de prestigio en Marrakech',
  lede: "Marrakech es una de las pocas ciudades marroquíes donde la gama alta está realmente disponible en alquiler. Estos son los modelos que se encuentran, lo que cuestan y la pregunta que hay que hacerse antes de firmar: ¿conducir usted o que le lleven?",
  body: `
<h2>Lo que se encuentra realmente en el RAK</h2>
<p>La oferta premium de Marrakech se articula en tres familias. Las <strong>berlinas alemanas</strong> —Mercedes Clase C y E, BMW Serie 3 y 5, Audi A4 y A6— para desplazamientos profesionales y trayectos a Casablanca. Los <strong>SUV premium</strong> —Range Rover, Porsche Cayenne, Mercedes GLE—, los más solicitados, porque encajan las pistas de Agafay y la carretera del Tichka sin esfuerzo. Y algunos <strong>descapotables y deportivos</strong>, con el Mustang a la cabeza, alquilados sobre todo por día para una ocasión.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Categoría</th><th>Precio / día</th><th>Fianza habitual</th></tr></thead>
<tbody>
<tr><td><strong>Berlina premium</strong></td><td class="num">110–180 €</td><td class="num">20.000–30.000 MAD</td></tr>
<tr class="row-highlight"><td><strong>SUV premium</strong></td><td class="num">150–280 €</td><td class="num">30.000–50.000 MAD</td></tr>
<tr><td><strong>Descapotable / deportivo</strong></td><td class="num">200–400 €</td><td class="num">40.000–60.000 MAD</td></tr>
<tr><td><strong>Furgoneta VIP con chófer</strong></td><td class="num">150–250 €</td><td class="num">ninguna</td></tr>
</tbody>
</table>
</div>

<h2>Las condiciones son más estrictas</h2>
<p>En estas categorías, espere una <strong>edad mínima de 25 a 30 años</strong>, una antigüedad de carné de al menos tres a cinco años y una fianza que supera ampliamente los límites habituales de las tarjetas bancarias. Avise a su banco antes de salir para que le eleven temporalmente el límite de autorización: es el motivo de rechazo número uno en el mostrador, y no se resuelve allí.</p>
<p>Algunas empresas exigen además un justificante de domicilio y limitan el kilometraje o prohíben salir del país, algo que conviene comprobar si piensa bajar hacia el sur.</p>
<div class="callout">
<span class="callout-label">La pregunta honesta</span>
<p>Un SUV premium a 200 € al día, inmovilizado delante de un riad porque la medina es peatonal, cuesta lo mismo que un chófer privado por jornada que le espera, le deja y gestiona el aparcamiento. Si su estancia es urbana, la segunda opción es más cómoda y a menudo más barata en total.</p>
</div>

<h2>Coche con chófer: el verdadero competidor</h2>
<p>En Marrakech, la puesta a disposición de un vehículo con chófer es un servicio habitual, bien organizado y con un nivel de precio comparable al de un alquiler premium. Obtiene una furgoneta o una berlina, un conductor que conoce las carreteras del Atlas y los accesos, y la ausencia total de preocupaciones por el aparcamiento, la fianza y la inspección.</p>
<p>Se impone sobre todo en tres usos: los <strong>trayectos de larga distancia</strong> a Ouarzazate o Essaouira, donde la carretera exige atención; los <strong>desplazamientos profesionales</strong> con varias citas en el día; y las <strong>estancias en familia</strong>, donde nadie quiere conducir tras un día en el Atlas.</p>

<h2>Reservar correctamente</h2>
<p>El parque premium es limitado: en Marrakech, los mismos vehículos rotan entre varias agencias. En temporada alta —primavera, fiestas de fin de año, grandes eventos—, reserve con varias semanas de antelación y haga confirmar por escrito el <strong>modelo exacto</strong>, no solo la categoría. Fotografíe el vehículo con detalle en la entrega: en estas gamas, una simple llanta rozada se cifra en miles de dirhams.</p>
`,
  faqs: [
    {
      q: '¿Cuánto cuesta alquilar un coche de lujo en Marrakech?',
      a: "De 110 a 180 € al día para una berlina premium, 150 a 280 € para un SUV tipo Range Rover o Cayenne, y 200 a 400 € para un descapotable o un deportivo. Las fianzas van de 20.000 a 60.000 MAD según el modelo.",
    },
    {
      q: '¿Qué edad hay que tener para alquilar un coche de gama alta en Marruecos?',
      a: "Por lo general 25 años como mínimo, a veces 30 para los deportivos, con tres a cinco años de carné. Puede pedirse un justificante de domicilio, y algunos contratos limitan el kilometraje o prohíben salir del país.",
    },
    {
      q: '¿Es mejor alquilar un coche premium o contratar un chófer?',
      a: "Para una estancia urbana, el chófer es más cómodo y a menudo más barato en total: sin fianza, sin aparcamiento, sin inspección y con un vehículo que le espera. El alquiler premium mantiene su sentido para una ruta donde el placer de conducir forma parte del viaje.",
    },
    {
      q: '¿Bastará mi tarjeta bancaria para la fianza?',
      a: "Rara vez sin gestión previa: las fianzas de 30.000 a 60.000 MAD superan los límites estándar. Haga que su banco eleve temporalmente su límite de autorización antes de salir: es la primera causa de rechazo en el mostrador y no se resuelve allí.",
    },
  ],
} satisfies LocalizedPage;
