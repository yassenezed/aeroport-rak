import type { LocalizedPage } from '../types';

export default {
  title: 'Servicios del aeropuerto de Marrakech Menara',
  description: 'Servicios del aeropuerto de Marrakech: cajeros, cambio, tarjetas SIM y eSIM, wifi, consigna, salas VIP, restauración y asistencia a pasajeros.',
  eyebrow: 'Marrakech Menara · Servicios',
  h1: 'Los servicios del aeropuerto de Marrakech',
  lede: "Lo que encontrará realmente en la terminal, dónde está y las tres cosas que conviene resolver antes de salir de la sala: efectivo, conexión y transporte.",
  body: `
<h2>Dinero: cajeros y cambio</h2>
<p>Varios cajeros y casas de cambio están instalados en la sala pública de llegadas, después de la aduana, y también del lado de salidas. Los cajeros aceptan Visa y Mastercard y aplican comisiones fijas por operación: es mejor una retirada importante que tres pequeñas. El cambio del aeropuerto es correcto sin ser el mejor de la ciudad; cambie lo necesario para dos días y complete en Guéliz si se queda más tiempo.</p>
<p>Dos reglas locales que conviene conocer: el dirham no se compra fuera de Marruecos y tampoco se exporta. Prevea cambiar los billetes que le queden <strong>antes</strong> de la policía de fronteras en la salida, y conserve el recibo de su cambio inicial.</p>

<h2>Conectarse: SIM local, eSIM o wifi</h2>
<p>El wifi del aeropuerto existe y saca de un apuro, sin más. Para estar localizable nada más salir —útil para avisar a un conductor o a un riad—, hay dos opciones.</p>
<ul>
<li><strong>Tarjeta SIM local</strong>: los mostradores de Maroc Telecom, Orange e inwi están en la sala de llegadas. Una tarifa turística con datos cuesta unas decenas de dirhams. Pasaporte obligatorio, activación en unos minutos.</li>
<li><strong>eSIM</strong>: activada antes de salir, funciona desde el aterrizaje, sin cola ni papeles. Es la solución más sencilla si su teléfono es compatible. Vea nuestra página <a href="/es/morocco-esim/">eSIM Marruecos</a>.</li>
</ul>

<h2>Equipajes, consigna y objetos perdidos</h2>
<p>Existe un servicio de consigna en la terminal para dejar equipaje por el día, práctico en una escala larga o un vuelo nocturno tras dejar la habitación a mediodía. Las tarifas se pagan allí mismo, preferiblemente en efectivo. Para cualquier equipaje perdido o dañado, la reclamación se hace en el mostrador de la aerolínea <strong>antes de salir de la zona de recogida</strong>: después, el expediente se vuelve mucho más difícil de abrir.</p>

<h2>Comer, beber, esperar</h2>
<p>Cafeterías y comida rápida en la zona pública, oferta más amplia en la zona de embarque, con precios de aeropuerto. Si viaja con niños o su vuelo sale temprano, lleve agua y algo para picar: las colas de la policía de fronteras no se cruzan con una bandeja.</p>
<p>Para las esperas largas, las salas VIP del aeropuerto ofrecen asientos, wifi y bufé, accesibles mediante compra sin necesidad de tarjeta bancaria premium. Nuestro artículo sobre las <a href="/es/blog/marrakech-airport-vip-lounges/">salas VIP del RAK</a> detalla las condiciones.</p>

<h2>Movilidad reducida, familias, formalidades</h2>
<p>La asistencia a pasajeros con movilidad reducida se solicita a la aerolínea al menos 48 horas antes del vuelo: es ella quien activa el servicio, no el aeropuerto. La terminal dispone de espacios para cambiar a un bebé y de fuentes de agua.</p>
<p>En cuanto a formalidades, la ficha policial se suprimió en septiembre de 2019: solo se revisa el pasaporte, a la entrada y a la salida. Los ciudadanos de la Unión Europea, Suiza, Reino Unido, Canadá y Estados Unidos no necesitan visado para una estancia turística de 90 días, con pasaporte válido al menos seis meses.</p>
<div class="callout">
<span class="callout-label">Las tres cosas que hay que hacer antes de salir</span>
<p>Retirar dirhams y fraccionarlos en billetes de 50 y 100. Activar su conexión, eSIM o SIM local. Y saber exactamente adónde va: nombre del riad, nombre de la puerta de la medina o confirmación del punto de encuentro con su conductor.</p>
</div>
`,
  faqs: [
    {
      q: '¿Hay cajeros en el aeropuerto de Marrakech?',
      a: "Sí, varios cajeros y casas de cambio están instalados en la sala pública de llegadas y también del lado de salidas. Aceptan Visa y Mastercard, con comisiones fijas por operación: prefiera una retirada única e importante.",
    },
    {
      q: '¿Dónde comprar una tarjeta SIM en el aeropuerto de Marrakech?',
      a: "En los mostradores de Maroc Telecom, Orange e inwi de la sala de llegadas. Una tarifa turística con datos cuesta unas decenas de dirhams, la activación lleva unos minutos y el pasaporte es obligatorio. Una eSIM activada antes de salir evita por completo ese paso.",
    },
    {
      q: '¿El wifi es gratuito en el aeropuerto de Marrakech?',
      a: "Hay una red wifi disponible en la terminal. Saca de un apuro para enviar un mensaje, pero es desigual en hora punta: para avisar a un conductor de forma fiable, es preferible una eSIM o una SIM local.",
    },
    {
      q: '¿Existe consigna de equipajes en Marrakech Menara?',
      a: "Sí, un servicio de consigna permite dejar equipaje por el día, útil en una escala o un vuelo nocturno. El pago se hace allí mismo, preferiblemente en efectivo.",
    },
    {
      q: '¿Cómo solicitar asistencia por movilidad reducida?',
      a: "A su aerolínea, al menos 48 horas antes del vuelo: es ella quien activa el servicio con el aeropuerto. Recuérdelo también en el mostrador de facturación el día de la salida.",
    },
  ],
  cta: {
    heading: 'Salga de la terminal sin negociar',
    text: "Un conductor con su nombre, un precio fijo por vehículo y la puerta correcta de la medina: tres minutos de reserva que le ahorran la cola de taxis.",
    label: 'Reservar un traslado',
  },
} satisfies LocalizedPage;
