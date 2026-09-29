import type { LocalizedPage } from '../types';

export default {
  title: "Coche automático en el aeropuerto de Marrakech-Menara",
  description: "Alquilar un automático en el aeropuerto de Marrakech-Menara: disponibilidad real, sobrecoste, conducción urbana y consejos.",
  eyebrow: 'Marrakech Menara · Conducción fácil',
  h1: 'Alquiler de conducción fácil: cambio automático en Marrakech',
  lede: "En Marruecos el cambio manual es la norma y el automático hay que reservarlo. Si nunca ha conducido aquí, esa elección cambia más cosas de las que imagina, empezando por su primera hora de circulación.",
  body: `
<h2>El automático en Marruecos: minoritario, hay que reservarlo</h2>
<p>La flota marroquí es mayoritariamente manual. Los cambios automáticos existen en el RAK, pero se concentran en las categorías compacta y superior y representan una parte limitada del parque. Dos consecuencias: un <strong>sobrecoste del 15 al 30 %</strong> respecto al mismo modelo en manual, y una disponibilidad que escasea en cuanto sube la temporada.</p>
<p>Si el automático es una necesidad y no una preferencia —carné de automático, lesión, simple comodidad—, indíquelo <strong>explícitamente al reservar</strong> y haga confirmar por escrito el tipo de cambio. La mención «o similar» de un contrato de alquiler nunca garantiza la caja.</p>

<h2>Por qué importa de verdad aquí</h2>
<p>La circulación de Marrakech no es agresiva, pero es <strong>densa, fluida y lateral</strong>: motos que adelantan por la derecha, carros, peatones que cruzan, prioridades que se negocian con la mirada más que con la señal. Las grandes rotondas de Guéliz y la avenida Mohammed VI funcionan por incorporación permanente.</p>
<p>En ese contexto, no tener que gestionar el embrague libera exactamente la atención que necesita para mirar alrededor. Es el único argumento real, y basta.</p>
<div class="callout">
<span class="callout-label">Primera hora al volante</span>
<p>Salga del aeropuerto en dirección a Guéliz y no hacia la medina, y dedique treinta minutos a coger el ritmo local antes de llegar a su alojamiento. Evite la primera conducción entre las 17 h y las 19 h, y evítela de noche: fuera de poblado circulan vehículos sin luces.</p>
</div>

<h2>Lo que el automático no resuelve</h2>
<ul>
<li><strong>El aparcamiento en la ciudad</strong>, en manos de guardas informales con chaleco: calcule 5 a 10 MAD, 20 MAD por la noche, y pague a la vuelta, no al llegar.</li>
<li><strong>El acceso a la medina</strong>, imposible en coche sea cual sea el cambio.</li>
<li><strong>Los radares</strong>, fijos y móviles, activos en todas las carreteras principales.</li>
<li><strong>El puerto de Tichka</strong>, donde un automático de pequeña cilindrada se calienta en subida prolongada y el freno motor se gestiona de otra manera en el descenso.</li>
</ul>

<h2>Elegir bien el vehículo</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Categoría automática</th><th>Precio / día</th><th>Adecuada para</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Compacto</strong> (Clio, Polo, i20)</td><td class="num">45–60 €</td><td>Ciudad, Essaouira, Ourika</td></tr>
<tr><td><strong>SUV compacto</strong> (Duster, Sportage)</td><td class="num">70–100 €</td><td>Atlas, pistas de Agafay</td></tr>
<tr><td><strong>Berlina</strong></td><td class="num">90–140 €</td><td>Larga distancia, Casablanca</td></tr>
</tbody>
</table>
</div>
<p>Para un primer volante en Marruecos, el compacto automático es el buen compromiso: lo bastante pequeño para las calles de Guéliz, lo bastante potente para el aire acondicionado y las cuestas, y mucho más fácil de aparcar que un SUV.</p>

<h2>¿Y si prefiere no conducir?</h2>
<p>Es una opción perfectamente razonable, y muchos visitantes la eligen tras el primer día. Un traslado para la llegada y la salida, taxis en la ciudad a 15–50 MAD la carrera y un vehículo con chófer para las excursiones cubren toda una estancia, a menudo por un coste total cercano al de un alquiler, sin fianza, sin inspección y sin aparcamiento.</p>
`,
  faqs: [
    {
      q: '¿Se encuentran fácilmente coches automáticos en Marrakech?',
      a: "Existen pero son minoritarios, concentrados en las categorías compacta y superior. Reserve con antelación y haga confirmar por escrito el tipo de cambio: la mención «o similar» de un contrato nunca garantiza la caja.",
    },
    {
      q: '¿Cuánto cuesta de más un cambio automático en Marruecos?',
      a: "Entre un 15 y un 30 % más que el mismo modelo en manual. Un compacto automático ronda los 45 a 60 € al día, frente a 35 a 45 € en manual.",
    },
    {
      q: '¿Es difícil conducir en Marrakech para un principiante?',
      a: "Es densa más que agresiva: motos que adelantan por la derecha, carros, peatones y prioridades negociadas con la mirada. Un cambio automático libera la atención necesaria para observar. Evite la primera conducción entre las 17 h y las 19 h, y de noche fuera de poblado.",
    },
    {
      q: '¿Cómo funciona el aparcamiento en la ciudad en Marrakech?',
      a: "Guardas informales con chaleco vigilan calles y plazas: calcule 5 a 10 MAD por unas horas y unos 20 MAD por la noche, a pagar a la vuelta y no al llegar. La medina, en cambio, sigue siendo inaccesible en coche.",
    },
  ],
} satisfies LocalizedPage;
