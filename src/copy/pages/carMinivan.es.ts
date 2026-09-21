import type { LocalizedPage } from '../types';

export default {
  title: 'Alquiler de monovolumen de 7 a 9 plazas en Marrakech',
  description: 'Alquilar un monovolumen o una furgoneta en el aeropuerto de Marrakech: capacidad real, equipaje, precios y comparación con una furgoneta con chófer.',
  eyebrow: 'Marrakech Menara · Gran formato',
  h1: 'Alquilar un monovolumen en el aeropuerto de Marrakech',
  lede: "A partir de cinco personas, el problema no es el número de asientos: es el maletero. Esto es lo que caben realmente los monovolúmenes disponibles en el RAK, lo que cuestan y cuándo sale más barato una furgoneta con chófer.",
  body: `
<h2>Siete plazas sobre el papel, cinco maletas en el maletero</h2>
<p>Es el desengaño clásico. Un monovolumen anunciado como de siete plazas —Dacia Lodgy, Dacia Jogger, Citroën Berlingo, Volkswagen Touran— solo dispone, <strong>una vez desplegada la tercera fila</strong>, de un maletero residual minúsculo. En concreto: o siete pasajeros con bolsas blandas sobre las rodillas, o cinco pasajeros y maletas de verdad.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Vehículo</th><th>Plazas</th><th>Maletas, 3.ª fila desplegada</th><th>Precio / día</th></tr></thead>
<tbody>
<tr><td><strong>Dacia Lodgy / Jogger</strong></td><td class="num">7</td><td class="num">1–2</td><td class="num">55–75 €</td></tr>
<tr class="row-highlight"><td><strong>VW Touran / Citroën Berlingo</strong></td><td class="num">7</td><td class="num">2</td><td class="num">70–95 €</td></tr>
<tr><td><strong>Renault Trafic / VW Transporter</strong></td><td class="num">9</td><td class="num">6–8</td><td class="num">100–150 €</td></tr>
<tr><td><strong>Mercedes Sprinter</strong></td><td class="num">12–16</td><td class="num">12+</td><td class="num">150–220 €</td></tr>
</tbody>
</table>
</div>
<p>La regla es sencilla: a partir de seis personas con equipaje facturado, pase directamente a la furgoneta de nueve plazas. La diferencia de precio queda ampliamente compensada por no tener que alquilar dos coches.</p>

<h2>Conducir un vehículo grande en Marrakech</h2>
<p>Dos dificultades que conviene anticipar. En la <strong>medina y sus alrededores</strong>, las calles de acceso a las puertas son estrechas y están llenas de motos y carros: una furgoneta de nueve plazas maniobra mal allí, y aparcar cerca de una <em>bab</em> es cuestión de suerte. En la <strong>carretera del Tichka</strong>, las curvas y los adelantamientos a camiones exigen una conducción anticipativa, sobre todo cargado.</p>
<p>En cambio, en la autopista hacia Casablanca o Agadir y en la carretera de Essaouira, una furgoneta va perfectamente cómoda y resulta mucho más agradable que un compacto lleno hasta el techo.</p>
<div class="callout">
<span class="callout-label">Sillas infantiles</span>
<p>Nunca se incluyen de serie: pídalas al reservar, precisando la edad y el peso de cada niño. El stock de alzadores y sillas de bebé es limitado en temporada alta, y conseguirlas allí mismo suele ser cuestión de improvisación.</p>
</div>

<h2>Furgoneta con chófer: haga la cuenta completa</h2>
<p>Para un grupo, el alquiler autónomo no siempre es lo más barato. Sume el alquiler de la furgoneta, el combustible —una de nueve plazas consume en serio—, los peajes, el aparcamiento y la fianza inmovilizada. Frente a eso, una furgoneta privada con chófer por jornada, para Ourika o Agafay, se sitúa en el mismo orden de precio sin ninguna de esas ataduras.</p>
<p>El reparto sensato suele ser: <strong>un traslado para la llegada y la salida</strong>, a 27 € por vehículo hasta siete pasajeros, y alquiler de furgoneta solo para los días en que realmente conduce.</p>

<h2>Reserve pronto, de verdad</h2>
<p>El parque de vehículos grandes es lo primero que falta en Marrakech, mucho antes que los urbanos. En vacaciones escolares europeas, Navidad y primavera, las nueve plazas se agotan con varias semanas de antelación. Si viajan seis o más entre diciembre y abril, no cuente con disponibilidad de última hora.</p>
`,
  faqs: [
    {
      q: '¿Cuántas maletas caben en un monovolumen de 7 plazas en Marrakech?',
      a: "Solo una o dos con la tercera fila desplegada en un Dacia Lodgy o un Jogger, dos en un Touran. Con siete pasajeros y maletas facturadas hay que pasar a una furgoneta de nueve plazas tipo Renault Trafic o Volkswagen Transporter.",
    },
    {
      q: '¿Cuál es el precio de un monovolumen en el aeropuerto de Marrakech?',
      a: "De 55 a 95 € al día para un monovolumen de siete plazas, y de 100 a 150 € para una furgoneta de nueve plazas con un maletero real. Un Sprinter de doce a dieciséis plazas se sitúa entre 150 y 220 € al día.",
    },
    {
      q: '¿Se puede conducir una furgoneta por la medina de Marrakech?',
      a: "No, la medina es inaccesible para cualquier vehículo, y las calles que llevan a las puertas son estrechas y están congestionadas. Una furgoneta de nueve plazas maniobra con dificultad y aparcar cerca de una puerta es aleatorio: prevea un parking en Guéliz o en el hotel.",
    },
    {
      q: '¿Se incluyen las sillas infantiles con un monovolumen?',
      a: "Nunca de serie: se piden al reservar, precisando la edad y el peso de cada niño. El stock es limitado en temporada alta y contar con la disponibilidad en el mostrador es arriesgado.",
    },
  ],
} satisfies LocalizedPage;
