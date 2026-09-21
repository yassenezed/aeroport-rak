import type { LocalizedArticle } from '../types';

export default {
  title: 'Marrakech → Agadir: distancia, carretera y transportes',
  description: 'Ir del aeropuerto de Marrakech a Agadir: 250 km de autopista, 3 h de trayecto, autobuses CTM y Supratours, traslado privado y alquiler de coche.',
  eyebrow: 'Distancias',
  h1: 'Del aeropuerto de Marrakech a Agadir',
  lede: "Doscientos cincuenta kilómetros, tres horas por autopista y un cambio completo de decorado: se deja la ciudad roja por el Atlántico. Así se hace el trayecto y esto es lo que cuesta realmente.",
  excerpt: '250 km entre el RAK y Agadir: autobús, traslado privado, coche o avión, con duraciones y precios comparados.',
  date: '2026-09-01',
  facts: [
    { label: 'Distancia', value: '250', sub: 'km' },
    { label: 'Duración', value: '3 h', sub: 'por autopista' },
    { label: 'Autobús', value: '120–180', sub: 'MAD' },
    { label: 'Traslado privado', value: '130–170 €', sub: 'por vehículo' },
  ],
  body: `
<h2>Las opciones</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Opción</th><th>Precio</th><th>Duración</th><th>Salida</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Autobús CTM / Supratours</strong></td><td class="num">120–180 MAD / persona</td><td class="num">3 h 30–4 h</td><td>Estación de autobuses de Marrakech</td></tr>
<tr><td><strong>Traslado privado</strong></td><td class="num">130–170 € / vehículo</td><td class="num">3 h</td><td>Terminal del aeropuerto</td></tr>
<tr><td><strong>Coche de alquiler</strong></td><td class="num">desde 25 € / día + peajes</td><td class="num">3 h</td><td>Mostradores del aeropuerto</td></tr>
<tr><td><strong>Avión</strong></td><td class="num">variable, vía Casablanca</td><td class="num">4 h+ en total</td><td>RAK</td></tr>
</tbody>
</table>
</div>
<p>El avión no tiene ningún interés en este enlace: no existe un vuelo directo útil, y una conexión por Casablanca eleva el trayecto muy por encima de las tres horas de carretera, por un precio superior.</p>

<h2>La carretera</h2>
<p>La autopista A7 une Marrakech con Agadir cruzando el Alto Atlas occidental por un trazado moderno. La carretera es excelente, con áreas de servicio regulares, y se recorre en tres horas sin forzar. Los peajes suponen unas decenas de dirhams.</p>
<p>Dos puntos de atención: la travesía del macizo puede ser ventosa y las gasolineras se espacian en el tramo central; llene el depósito antes de salir de Marrakech si va justo.</p>

<h2>El autobús, la opción más racional siendo dos</h2>
<p>CTM y Supratours operan varios enlaces diarios en autocar climatizado con equipaje en bodega, por <strong>120 a 180 MAD por persona</strong>. Supratours tiene la ventaja de estar vinculado a la ONCF, lo que facilita los trayectos combinados de tren y autobús desde el norte del país.</p>
<p>Como en todos los enlaces de larga distancia, los autobuses salen de la <strong>estación de autobuses de Marrakech</strong> y no del aeropuerto: añada un taxi y un margen de espera.</p>
<div class="callout">
<span class="callout-label">Si Agadir es su destino final</span>
<p>Compruebe primero si existe un vuelo directo a Agadir Al Massira (AGA) desde su ciudad de salida. Aterrizar en Marrakech para hacer tres horas de carretera solo se justifica si el precio del billete es claramente inferior, o si piensa pasar unos días en Marrakech de paso.</p>
</div>

<h2>Qué opción elegir</h2>
<p><strong>El autobús</strong> siendo una o dos personas, con tiempo por delante: cómodo y muy barato. <strong>El traslado privado</strong> a partir de cuatro pasajeros, con niños, o si su vuelo aterriza tarde: sale directamente de la terminal. <strong>El coche de alquiler</strong> si piensa explorar la costa entre Essaouira, Taghazout y Agadir, algo que el transporte público no permite.</p>
`,
  faqs: [
    {
      q: '¿Qué distancia separa Marrakech de Agadir?',
      a: "Unos 250 kilómetros por la autopista A7, es decir tres horas de carretera a través del Alto Atlas occidental. La carretera es moderna, con áreas de servicio regulares y unas decenas de dirhams de peajes.",
    },
    {
      q: '¿Cómo ir del aeropuerto de Marrakech a Agadir?',
      a: "En autobús CTM o Supratours desde la estación de autobuses de Marrakech por 120 a 180 MAD por persona, en traslado privado directamente desde la terminal por 130 a 170 € por vehículo, o en coche de alquiler.",
    },
    {
      q: '¿Hay vuelos entre Marrakech y Agadir?',
      a: "No hay enlace directo útil: una conexión por Casablanca eleva el trayecto muy por encima de las tres horas de carretera, por un precio superior. Si Agadir es su destino final, busque un vuelo directo a AGA.",
    },
    {
      q: '¿Cuánto cuesta un taxi de Marrakech a Agadir?',
      a: "Un grand taxi negociado se sitúa por lo general entre 800 y 1.200 MAD por el vehículo. Un traslado privado reservado, de 130 a 170 €, ofrece precio fijo, salida desde la terminal y seguimiento del vuelo.",
    },
  ],
} satisfies LocalizedArticle;
