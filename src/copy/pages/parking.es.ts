import type { LocalizedPage } from '../types';

export default {
  title: "Parking del aeropuerto de Marrakech-Menara: tarifas y acceso",
  description: "Parkings del aeropuerto de Marrakech-Menara: tarifas por hora y por día, zona de dejada rápida, estancia larga y alternativas más baratas.",
  eyebrow: 'Marrakech Menara · Parkings',
  h1: 'Aparcar en el aeropuerto de Marrakech',
  lede: "El RAK dispone de parkings en superficie delante de las terminales, con un baremo progresivo: muy barato para dejar a alguien, bastante menos para una semana. Esto es lo que pagará y cuándo es mejor no venir en coche.",
  body: `
<h2>Las tarifas, a grandes rasgos</h2>
<p>El aparcamiento del aeropuerto funciona por duración, con un primer tramo muy corto gratuito o simbólico y después una facturación por horas que se limita al día. A título indicativo, comprobado en septiembre de 2026:</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Duración</th><th>Tarifa indicativa</th><th>Uso</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Menos de 30 minutos</strong></td><td class="num">gratis o ≈ 10 MAD</td><td>Dejar y recoger</td></tr>
<tr><td><strong>1 hora</strong></td><td class="num">≈ 20 MAD</td><td>Esperar un vuelo retrasado</td></tr>
<tr><td><strong>24 horas</strong></td><td class="num">≈ 70–80 MAD</td><td>Ida y vuelta en el día</td></tr>
<tr><td><strong>1 semana</strong></td><td class="num">≈ 450–550 MAD</td><td>Viaje corto al extranjero</td></tr>
</tbody>
</table>
</div>
<p>Son órdenes de magnitud: el baremo se revisa periódicamente y el panel de la entrada es el que manda. El pago se hace en la máquina o en la caja antes de volver al vehículo, preferiblemente en efectivo.</p>

<h2>Dejar y recoger: el buen reflejo</h2>
<p>La zona delante de las terminales está pensada para parar, no para aparcar: los agentes hacen circular rápido, sobre todo por la tarde. Si viene a recoger a alguien cuyo vuelo acaba de aterrizar, recuerde que <strong>pasan de 30 a 60 minutos entre el aterrizaje y la salida de la sala</strong>. Es mejor esperar en el parking, con un mensaje acordado, que dar vueltas delante de la terminal.</p>

<h2>Estancia larga: haga la cuenta antes</h2>
<p>Para una semana, el parking oficial sigue siendo razonable comparado con los estándares europeos, pero no es insignificante. Merece la pena comparar dos alternativas:</p>
<ul>
<li><strong>La ida y vuelta en traslado o taxi.</strong> Dos trayectos al centro cuestan entre 200 y 300 MAD, menos que una semana de aparcamiento, y no deja un coche al sol durante siete días.</li>
<li><strong>El parking vigilado de un hotel cercano.</strong> Algunos establecimientos a pocos minutos del aeropuerto ofrecen una fórmula de noche más aparcamiento, interesante cuando su vuelo sale a las 6 de la mañana.</li>
</ul>
<div class="callout">
<span class="callout-label">Coche de alquiler: no pague el parking</span>
<p>Si devuelve un vehículo de alquiler, el aparcamiento de entrega lo prevé la empresa: siga la señalización de la agencia y no coja ticket en la entrada del parking público. Calcule un cuarto de hora para la revisión y guarde fotos fechadas del vehículo entregado.</p>
</div>

<h2>Seguridad y sentido común</h2>
<p>Los parkings están vallados y vigilados, pero la regla es la misma que en cualquier sitio: nada visible en el habitáculo, ningún GPS en el parabrisas, ninguna bolsa en el asiento trasero. En verano, el interior de un coche aparcado a pleno sol en Marrakech supera con creces los 60 °C: no deje aparatos electrónicos, cosméticos ni medicamentos dentro.</p>
`,
  faqs: [
    {
      q: '¿Cuánto cuesta el parking en el aeropuerto de Marrakech?',
      a: "Unos 20 MAD la hora, 70 a 80 MAD por 24 horas y 450 a 550 MAD por una semana, con un primer tramo de treinta minutos gratuito o simbólico para dejar pasajeros. El panel de la entrada es el que manda y se revisa periódicamente.",
    },
    {
      q: '¿Hay zona de dejada rápida en Marrakech Menara?',
      a: "Sí, la zona delante de las terminales permite parar el tiempo de dejar pasajeros, con un tramo corto gratuito o simbólico. Los agentes hacen circular rápido: para esperar a alguien, entre mejor en el parking.",
    },
    {
      q: '¿El parking del aeropuerto de Marrakech está vigilado?',
      a: "Los parkings están vallados y vigilados. Aun así, aplique las precauciones habituales: nada visible en el habitáculo y ningún objeto sensible al calor en un coche aparcado a pleno sol.",
    },
    {
      q: '¿Es mejor aparcar en el aeropuerto o venir en taxi?',
      a: "Para una estancia de una semana, dos trayectos de ida y vuelta en taxi o traslado suelen costar menos que el aparcamiento, y le evitan dejar un vehículo expuesto. El parking se justifica sobre todo para idas y vueltas cortas, de unas horas a dos días.",
    },
  ],
  cta: {
    heading: '¿No quiere dejar su coche una semana al sol?',
    text: "Una ida y vuelta en traslado privado suele costar menos que un aparcamiento de larga duración, conductor incluido.",
    label: 'Comparar con un traslado',
  },
} satisfies LocalizedPage;
