import type { LocalizedArticle } from '../types';

export default {
  title: 'Alquiler de coche de larga duración en Marrakech',
  description: 'Alquilar un coche por meses en Marrakech: tarifas decrecientes, renting de corta duración, seguro, mantenimiento y alternativas para varias semanas.',
  eyebrow: 'Alquiler',
  h1: 'Alquilar un coche por meses en Marrakech',
  lede: "A partir de dos semanas, la lógica del alquiler cambia: las tarifas diarias se desploman, pero las cuestiones de seguro, mantenimiento y kilometraje pasan a ser centrales. Así se negocia correctamente.",
  excerpt: 'Tarifas mensuales, renting de corta duración, seguro y mantenimiento: lo que cambia cuando se alquila un coche varias semanas en Marruecos.',
  date: '2026-09-04',
  body: `
<h2>La tarifa se desploma, pero no en todo</h2>
<p>El descuento por duración es fuerte en Marruecos. Un urbano a 30 € al día en alquiler corto baja habitualmente a <strong>12 a 18 € al día en un mes completo</strong>, es decir 350 a 550 € mensuales. Las agencias locales suelen ser más flexibles que las marcas internacionales en este tipo de duración, y el precio se negocia de verdad, sobre todo fuera de temporada alta.</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Categoría</th><th>1 semana</th><th>1 mes</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Urbano</strong></td><td class="num">150–210 €</td><td class="num">350–550 €</td></tr>
<tr><td><strong>Compacto</strong></td><td class="num">210–280 €</td><td class="num">500–750 €</td></tr>
<tr><td><strong>SUV compacto</strong></td><td class="num">350–550 €</td><td class="num">850–1.300 €</td></tr>
</tbody>
</table>
</div>

<h2>Los cinco puntos que hay que cerrar por escrito</h2>
<ol>
<li><strong>El kilometraje.</strong> Muchas ofertas mensuales están limitadas, a menudo en torno a 3.000 km. Si piensa bajar hacia el sur o hacer varias idas y vueltas a la costa, haga precisar el paquete incluido y el precio del kilómetro adicional.</li>
<li><strong>El mantenimiento.</strong> ¿Quién paga el cambio de aceite, los neumáticos, la revisión en una larga duración? A partir de un mes la cuestión se plantea de verdad, y la respuesta debe figurar en el contrato.</li>
<li><strong>La avería y el vehículo de sustitución.</strong> ¿Qué plazo de cambio y en qué perímetro? Una avería en Ouarzazate no se gestiona como una en Guéliz.</li>
<li><strong>El seguro y la franquicia.</strong> En larga duración, la exención de franquicia de la empresa resulta muy cara: compare siempre con un seguro de terceros anual.</li>
<li><strong>La fianza.</strong> Permanece bloqueada durante todo el periodo: compruebe que su límite bancario lo soporta varias semanas.</li>
</ol>

<h2>Renting de corta duración: la otra vía</h2>
<p>Para tres meses o más, algunas empresas marroquíes ofrecen fórmulas de alquiler de larga duración con vehículo reciente, mantenimiento incluido y seguro integrado. La tarifa mensual se acerca a la de un alquiler clásico bien negociado, pero el contenido es más completo y el vehículo más fiable.</p>
<p>Estas fórmulas se dirigen sobre todo a estancias profesionales, a jubilados que pasan el invierno en Marruecos y a largas estancias de trabajo en remoto. Exigen en cambio un expediente más completo: justificante de domicilio y, a veces, una dirección en Marruecos.</p>
<div class="callout">
<span class="callout-label">La alternativa que no hay que descartar</span>
<p>En una estancia larga pero básicamente urbana, la suma de los taxis, algunas jornadas con chófer y dos o tres alquileres puntuales suele salir más barata que un mes de coche inmovilizado. Haga esa cuenta antes de firmar: en Marrakech, un coche solo sirve los días en que se sale de la ciudad.</p>
</div>

<h2>Vivir con un coche en Marrakech</h2>
<p>El aparcamiento en la ciudad está en manos de guardas informales con chaleco: 5 a 10 MAD por unas horas, unos 20 MAD por la noche, a pagar a la vuelta. Muchas residencias y riads tienen un acuerdo con un parking cercano: pregúntelo, es más seguro y más sencillo a largo plazo.</p>
<p>Prevea por último el efecto del clima: en verano, un coche aparcado al sol supera los 60 °C en su interior, lo que daña los plásticos, las baterías de los aparatos y los neumáticos. Un techo, aunque sea rudimentario, cambia la vida útil del vehículo y su comodidad diaria.</p>
`,
  faqs: [
    {
      q: '¿Cuánto cuesta un coche por meses en Marrakech?',
      a: "De 350 a 550 € al mes para un urbano, es decir 12 a 18 € al día, y de 500 a 750 € para un compacto. El descuento por duración es fuerte en Marruecos y el precio se negocia de verdad, sobre todo fuera de temporada alta.",
    },
    {
      q: '¿Hay límite de kilometraje en un alquiler mensual?',
      a: "A menudo sí, con frecuencia en torno a 3.000 km al mes. Haga precisar el paquete incluido y el precio del kilómetro adicional si piensa bajar hacia el sur o multiplicar las idas y vueltas a la costa.",
    },
    {
      q: '¿Quién paga el mantenimiento en un alquiler de larga duración en Marruecos?',
      a: "Depende del contrato, y es precisamente el punto que hay que cerrar por escrito: cambio de aceite, neumáticos y revisión se plantean de verdad más allá de un mes. Las fórmulas de renting de corta duración suelen incluirlos.",
    },
    {
      q: '¿Es mejor alquilar por meses o coger taxis en Marrakech?',
      a: "Si su estancia es básicamente urbana, la suma de los taxis, algunas jornadas con chófer y dos o tres alquileres puntuales suele salir más barata. Un coche solo se justifica los días en que sale de la ciudad.",
    },
  ],
} satisfies LocalizedArticle;
