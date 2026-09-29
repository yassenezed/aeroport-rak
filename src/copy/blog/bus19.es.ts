import type { LocalizedArticle } from '../types';

export default {
  title: "Autobús 19: aeropuerto de Marrakech-Menara ↔ Jemaa el-Fna",
  description: "El autobús 19 entre el aeropuerto de Marrakech-Menara y Jemaa el-Fna: tarifa, horarios, frecuencia, duración, dónde cogerlo y cuándo no conviene.",
  eyebrow: 'Transportes',
  h1: 'El autobús 19 entre el aeropuerto de Marrakech y el centro',
  lede: "Treinta dirhams para llegar a Jemaa el-Fna: es el transporte más barato desde el RAK y funciona bien, a condición de aterrizar antes de las 23 h y de poder cargar con el equipaje.",
  excerpt: 'Tarifa, horarios, frecuencia y límites de la línea 19 de ALSA, el autobús que une el aeropuerto con Jemaa el-Fna por 30 MAD.',
  date: '2026-09-13',
  facts: [
    { label: 'Tarifa ida', value: '30', sub: 'MAD' },
    { label: 'Ida y vuelta', value: '50', sub: 'MAD' },
    { label: 'Frecuencia', value: '≈ 30', sub: 'min' },
    { label: 'Duración', value: '≈ 20', sub: 'min' },
  ],
  body: `
<h2>Cómo funciona</h2>
<p>La línea 19, explotada por <strong>ALSA</strong>, une el aeropuerto Marrakech Menara con la plaza Jemaa el-Fna. La parada está a la salida de la terminal, bien señalizada, y el trayecto dura unos veinte minutos con algunas paradas intermedias, entre ellas Guéliz.</p>
<p>El billete cuesta <strong>30 MAD la ida</strong> y <strong>50 MAD ida y vuelta</strong>, este último válido unos quince días, lo que lo convierte en la fórmula más interesante si vuelve por el mismo camino. La compra se hace al conductor o en la taquilla, en efectivo.</p>
<p>Las salidas se suceden cada treinta minutos aproximadamente, entre las <strong>6 h y las 23:30</strong>. Los horarios pueden variar según la temporada y el tráfico: consulte el panel de la parada.</p>

<h2>Cuándo es la buena elección</h2>
<ul>
<li>Aterriza <strong>de día</strong>, entre las 8 h y las 21 h.</li>
<li>Viaja <strong>una o dos personas</strong>, con un equipaje que pueda cargar sin esfuerzo.</li>
<li>Su alojamiento está <strong>cerca de Jemaa el-Fna</strong> o en la parte sur de la medina.</li>
<li>El presupuesto es el criterio principal: 30 MAD frente a 100 a 150 MAD en taxi, la diferencia es real.</li>
</ul>

<h2>Cuándo no hay que cogerlo</h2>
<p>El autobús 19 se convierte en mala idea en varios casos, y conviene saberlo antes de arrastrar una maleta hasta la parada.</p>
<p><strong>Después de las 23:30</strong> ya no circula, y precisamente buena parte de los vuelos de bajo coste aterrizan a esas horas. <strong>Con dos maletas</strong> o un niño pequeño, subir, colocar el equipaje y el paseo final se vuelven pesados. Y <strong>si su riad no está cerca de la plaza</strong>, añadirá diez a veinte minutos a pie por los callejones, con su equipaje, a menudo de noche.</p>
<div class="callout">
<span class="callout-label">La cuenta que hay que hacer siendo cuatro</span>
<p>Cuatro personas en autobús: 120 MAD. Un grand taxi o un traslado para el mismo grupo: 150 MAD de día, o 27 € por un vehículo de hasta siete plazas, puerta a puerta. La diferencia se vuelve irrisoria y la comodidad no tiene nada que ver.</p>
</div>

<h2>Para el regreso al aeropuerto</h2>
<p>El autobús sale de Jemaa el-Fna en sentido contrario, con las mismas frecuencias. Es una opción correcta para un vuelo a mediodía. Para un vuelo matinal, en cambio, el horario de la primera salida —hacia las 6 h— no deja ningún margen si su facturación cierra pronto: en ese caso, reserve un traslado la víspera.</p>
`,
  faqs: [
    {
      q: '¿Cuánto cuesta el autobús 19 en Marrakech?',
      a: "30 MAD la ida y 50 MAD ida y vuelta, este último válido unos quince días. El pago se hace en efectivo, al conductor o en la taquilla.",
    },
    {
      q: '¿Cuáles son los horarios del autobús 19 en el aeropuerto de Marrakech?',
      a: "Salidas cada treinta minutos aproximadamente, entre las 6 h y las 23:30. Los horarios varían según la temporada: consulte el panel de la parada, situada a la salida de la terminal.",
    },
    {
      q: '¿Dónde deja el autobús 19 en Marrakech?',
      a: "En la plaza Jemaa el-Fna, con algunas paradas intermedias como Guéliz. No llega a su alojamiento: si su riad está alejado de la plaza, prevea de diez a veinte minutos a pie por los callejones.",
    },
    {
      q: '¿Funciona el autobús 19 de noche?',
      a: "No, la última salida es hacia las 23:30. Como buena parte de los vuelos de bajo coste aterrizan más tarde, suele ser inutilizable a la llegada: prevea un taxi o un traslado reservado.",
    },
    {
      q: '¿Merece la pena el autobús 19 en grupo?',
      a: "Rara vez. Siendo cuatro, el autobús sale por 120 MAD, frente a 150 MAD de un grand taxi o 27 € de un traslado privado de hasta siete pasajeros, puerta a puerta. La diferencia de precio es mínima y la comodidad no tiene comparación.",
    },
  ],
} satisfies LocalizedArticle;
