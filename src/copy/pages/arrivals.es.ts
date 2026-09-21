import type { LocalizedPage } from '../types';

export default {
  title: 'Llegadas aeropuerto de Marrakech (RAK): vuelos en directo',
  description: 'Llegadas en directo al aeropuerto de Marrakech Menara: estado de los vuelos, recorrido por la sala, policía, equipajes, cajeros y salida a la ciudad.',
  eyebrow: 'Marrakech Menara · Llegadas',
  h1: 'Llegadas al aeropuerto de Marrakech',
  lede: "El panel de abajo sigue los vuelos a medida que aterrizan en Menara. Debajo, el recorrido real entre la pasarela y la acera: policía, equipajes, cajeros y la puerta por la que se sale antes.",
  widget: 'flights-arrivals',
  body: `
<h2>Del avión a la acera</h2>
<p>De la pasarela a la salida, calcule <strong>de 30 a 60 minutos</strong> según la hora. El RAK concentra sus llegadas por la tarde-noche, cuando varios vuelos europeos aterrizan en la misma media hora: es entonces cuando la policía de fronteras marca la diferencia entre salir en veinte minutos o esperar una hora.</p>
<ol>
<li><strong>Policía de fronteras.</strong> Control del pasaporte y ficha de entrada. Se reparte a bordo en la mayoría de los vuelos; rellénela durante el vuelo o tendrá que salir de la cola a buscar un bolígrafo. Los ciudadanos de la Unión Europea, Suiza, Reino Unido, Canadá y Estados Unidos no necesitan visado para una estancia turística de 90 días.</li>
<li><strong>Recogida de equipajes.</strong> Las cintas están justo después del control. En los vuelos de la tarde la espera es real: 20 a 30 minutos no es raro.</li>
<li><strong>Aduana.</strong> Paso por lo general fluido, con controles aleatorios. El efectivo solo se declara por encima de 100.000 MAD.</li>
<li><strong>Sala pública.</strong> Cajeros, casas de cambio, tarjetas SIM, mostradores de alquiler y luego las puertas hacia la parada de taxis y los parkings.</li>
</ol>

<h2>Saque dinero antes de salir</h2>
<p>Es el paso que no conviene saltarse. Los taxis no aceptan tarjeta y el dirham no se compra fuera de Marruecos: la sala de llegadas es, por tanto, su primer punto de cambio. Los cajeros funcionan bien, pero entregan de buena gana billetes de 200 MAD. Retire lo necesario para el trayecto y los primeros días, y fraccione en la cafetería o la tienda de la terminal: con billetes de 50 y 100 MAD se ahorrará la discusión sobre el cambio en el taxi.</p>
<div class="callout">
<span class="callout-label">El reflejo que ahorra veinte minutos</span>
<p>Si alguien le espera —traslado reservado o lanzadera del riad—, el punto de encuentro es la acera delante de la sala de llegadas, no el interior de la terminal. Un mensaje al conductor en cuanto recupere cobertura, antes incluso de la aduana, basta para sincronizar la recogida.</p>
</div>

<h2>Salir de la sala: lo que le espera</h2>
<p>Le abordarán antes incluso de llegar a la puerta. Es normal y rara vez agresivo, pero conviene anticiparlo: la parada oficial de taxis está justo delante de la salida y su panel muestra las tarifas por zona. Cualquier oferta hecha <em>dentro</em> de la terminal queda fuera de ese marco.</p>
<p>Para un hotel de Guéliz o del Hivernage de día, tome el taxi y anuncie el importe del panel antes de abrir el maletero. Para un riad en la medina, un vuelo después de las 21 h o un grupo de cuatro o más, el traslado reservado fija de antemano el precio, el tamaño del vehículo y la puerta de destino.</p>

<h2>Llegar de noche</h2>
<p>Una parte importante de los vuelos de bajo coste aterriza entre las 21 h y la 1 de la madrugada. Tres consecuencias prácticas: el baremo de los taxis pasa a la tarifa nocturna, 150 a 240 MAD; el autobús 19 deja de circular después de las 23:30; y los callejones poco iluminados de la medina se prestan mal a buscar un riad con una maleta. Si su vuelo aterriza tarde, reservar un traslado no es un lujo: el conductor sigue el número de vuelo y espera si hay retraso.</p>
`,
  faqs: [
    {
      q: '¿Cuánto se tarda en salir del aeropuerto de Marrakech tras aterrizar?',
      a: "Entre 30 y 60 minutos en la práctica: la policía de fronteras lleva de 15 a 40 minutos según la afluencia y la entrega de equipajes de 20 a 30 minutos en los vuelos de la tarde. Las llegadas entre las 20 h y medianoche son las más cargadas, porque varios vuelos europeos aterrizan a la vez.",
    },
    {
      q: '¿Hay que rellenar una ficha de entrada en Marrakech?',
      a: "Sí, se exige una ficha policial a la llegada. Se reparte a bordo en la mayoría de los vuelos: rellénela durante el trayecto para no tener que salir de la cola. Necesitará la dirección de su alojamiento en Marrakech.",
    },
    {
      q: '¿Hay cajeros en la sala de llegadas?',
      a: "Sí, varios cajeros y casas de cambio se encuentran en la sala pública, después de la aduana. Retire antes de salir: los taxis no aceptan tarjeta y el dirham no puede comprarse fuera de Marruecos.",
    },
    {
      q: '¿Dónde se encuentra al conductor en Marrakech Menara?',
      a: "En la acera, delante de la sala de llegadas. Los traslados reservados indican un punto de encuentro preciso en el bono de confirmación y el conductor sostiene un cartel con su nombre. Escríbale en cuanto recupere cobertura.",
    },
    {
      q: 'Mi vuelo llega después de medianoche, ¿sigue habiendo taxis?',
      a: "Sí, la parada se mantiene abastecida mientras haya vuelos. El baremo simplemente pasa a la tarifa nocturna, 150 a 240 MAD hacia la medina, Guéliz y el Hivernage. El autobús 19, en cambio, se detiene a las 23:30.",
    },
  ],
  cta: {
    heading: 'Un conductor que espera a su vuelo, y no al revés',
    text: "Seguimiento del número de vuelo, espera incluida en caso de retraso, precio fijo por vehículo hasta siete pasajeros y llegada a la puerta de la medina más cercana a su riad.",
    label: 'Reservar un traslado',
  },
} satisfies LocalizedPage;
