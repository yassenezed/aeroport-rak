import type { LocalizedPage } from '../types';

export default {
  title: 'Salidas aeropuerto de Marrakech (RAK): panel en directo',
  description: 'Salidas en tiempo real del aeropuerto de Marrakech Menara: hora de llegada recomendada, facturación, control de pasaportes, devolución del IVA y tiendas.',
  eyebrow: 'Marrakech Menara · Salidas',
  h1: 'Salidas del aeropuerto de Marrakech',
  lede: "El panel sigue en directo los vuelos que salen de Menara. Debajo: a qué hora presentarse, dónde se forman realmente las colas y cómo no pasar su última hora en Marruecos de pie en un pasillo.",
  widget: 'flights-departures',
  body: `
<h2>A qué hora presentarse</h2>
<p>La regla que funciona en Marrakech: <strong>dos horas antes de un vuelo Schengen, tres en temporada alta</strong> o en cuanto lleve equipaje facturado. El problema no es la facturación, que es rápida, sino el control de pasaportes de salida, el auténtico cuello de botella del RAK. Los picos se sitúan entre las 6 h y las 9 h, y de nuevo a última hora de la tarde, cuando las rotaciones europeas regresan.</p>
<p>Salga de su alojamiento en consecuencia. Desde la medina, calcule de 20 a 30 minutos de trayecto más el tiempo de llegar a la puerta a pie con las maletas. Reserve el regreso la víspera, con su riad o como traslado: encontrar un taxi a las 5 de la mañana en un callejón es aleatorio, y la tarifa nocturna se aplica hasta el amanecer.</p>

<h2>El recorrido de salida</h2>
<ol>
<li><strong>Control de acceso a la terminal.</strong> Un primer escaneo de equipajes en la entrada del edificio, antes incluso de los mostradores.</li>
<li><strong>Facturación.</strong> Los mostradores suelen abrir de 2 a 3 horas antes del vuelo. La facturación en línea ahorra tiempo, pero no para la bodega: el depósito de maletas pasa por el mostrador.</li>
<li><strong>Policía de fronteras.</strong> La etapa más larga. Ficha de salida, control del pasaporte y del sello de entrada.</li>
<li><strong>Seguridad.</strong> Líquidos limitados a 100 ml por envase, aparatos electrónicos fuera de la bolsa.</li>
<li><strong>Zona de embarque.</strong> Tiendas libres de impuestos, cafeterías, salas VIP y puertas.</li>
</ol>

<h2>Lo que se puede llevar y lo que no</h2>
<p>Los dirhams no se exportan: por encima de una cantidad simbólica, cambie sus billetes <em>antes</em> de la policía de fronteras, en las casas de cambio de la sala pública. Una vez en zona de embarque ya no podrá hacerlo en buenas condiciones. Conserve el recibo de su cambio inicial, algunas ventanillas lo piden.</p>
<p>En cuanto a los recuerdos: las especias, el aceite de argán y los cosméticos en envases de más de 100 ml van a la bodega, sin excepción. La cerámica y los objetos frágiles soportan mal la bodega sin un embalaje serio; la mayoría de los vendedores de la medina saben preparar un paquete para el avión si se lo pide.</p>
<div class="callout">
<span class="callout-label">Devolución del IVA</span>
<p>Marruecos devuelve el IVA a los no residentes en determinadas compras hechas en comercios autorizados, con un formulario que hay que sellar en el mostrador de aduanas del aeropuerto <strong>antes</strong> de facturar el equipaje, con la mercancía disponible para inspección. Merece la pena por una alfombra o una pieza de orfebrería, rara vez por unas babuchas.</p>
</div>

<h2>Salas VIP y espera</h2>
<p>La zona de embarque del RAK está correctamente equipada, pero se satura a las mismas horas que las colas. Si sale a última hora del día o tiene una conexión larga, el acceso a una sala transforma la espera: es una de las pocas compras de confort que aquí se justifican de verdad. Nuestra página dedicada detalla las <a href="/es/blog/marrakech-airport-vip-lounges/">salas VIP del aeropuerto de Marrakech</a> y sus condiciones de acceso.</p>
`,
  faqs: [
    {
      q: '¿Con cuánta antelación hay que llegar al aeropuerto de Marrakech?',
      a: "Dos horas para un vuelo Schengen, tres en temporada alta o con equipaje facturado. El control de pasaportes de salida es el punto de congestión, sobre todo entre las 6 h y las 9 h y a última hora de la tarde.",
    },
    {
      q: '¿Se pueden sacar dirhams de Marruecos?',
      a: "No, el dirham no es exportable más allá de una cantidad simbólica. Cambie sus billetes en las casas de cambio de la sala pública, antes de la policía de fronteras: una vez en zona de embarque ya no es posible en buenas condiciones. Conserve el recibo de su cambio inicial.",
    },
    {
      q: '¿Hay devolución del IVA en el aeropuerto de Marrakech?',
      a: "Sí, para los no residentes, en compras hechas en comercios autorizados. El formulario debe sellarse en el mostrador de aduanas antes de facturar el equipaje, con la mercancía disponible. Afecta sobre todo a compras de valor, como una alfombra o una pieza de orfebrería.",
    },
    {
      q: '¿Cómo ir al aeropuerto desde la medina por la mañana?',
      a: "Reserve la víspera, con su riad o como traslado: encontrar un taxi a las 5 de la mañana en un callejón es aleatorio, y la tarifa nocturna se aplica hasta el amanecer. Calcule de 20 a 30 minutos de trayecto más el paseo hasta la puerta con las maletas.",
    },
    {
      q: '¿Se puede llevar aceite de argán en el equipaje de mano?',
      a: "Solo en envases de 100 ml o menos, reunidos en una bolsa de plástico transparente. Por encima, el aceite de argán, las especias líquidas y los cosméticos van a la bodega. Las compras hechas en la zona libre de impuestos tras el control no están sujetas a ese límite.",
    },
  ],
  cta: {
    heading: 'Su regreso al aeropuerto, resuelto la víspera',
    text: "Un conductor en la puerta correcta de la medina a la hora acordada, precio fijo, incluso a las 5 de la mañana. Cancelación gratuita en la mayoría de las reservas.",
    label: 'Reservar mi traslado de vuelta',
  },
} satisfies LocalizedPage;
