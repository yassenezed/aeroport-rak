import type { LocalizedHotel } from '../types';

export default {
  title: 'Riad Yasmine Marrakesch: Bewertung und Anfahrt',
  description: 'Riad Yasmine: der meistfotografierte Innenhof der Medina von Marrakesch, im Maßstab eines Hauses. Anfahrt vom Flughafen, Absetztor und Logistik.',
  eyebrow: 'Marrakesch · Riad',
  h1: 'Riad Yasmine',
  lede: "Der grüne Innenhof der Medina – und die Logistik, die dazugehört. Ein echtes Riad im häuslichen Maßstab, bei dem die Ankunft vorbereitet sein will, weil das Auto an einem Tor hält.",
  stars: '★★★★',
  area: 'Medina, Viertel Dar el Bacha',
  priceRange: 'Mittel bis hoch je nach Saison',
  rating: 4.4,
  ratingLabel: 'unsere redaktionelle Note',
  verdict: "Ein authentisches Riad mit dem bekanntesten Innenhof der Medina und nur einer Handvoll Zimmer. Perfekt für ein Paar; es verlangt eine vorbereitete Ankunft, denn das Auto hält an einem Tor und den Rest geht man zu Fuß.",
  body: `
<h2>Was es ist</h2>
<p>Riad Yasmine ist ein traditionelles Medinahaus um einen bepflanzten Innenhof mit einem grünen Becken, das um die Welt der sozialen Netzwerke gegangen ist. Man muss es klar sagen: <strong>Es ist ein Haus, kein Hotel</strong>. Eine Handvoll Zimmer, eine Terrasse, Frühstück im Haus und ein kleines Team, das man nach zwei Tagen kennt.</p>
<p>Genau das suchen alle, die wegen des Riad-Erlebnisses kommen – die Ruhe hinter einer dicken Tür, der Himmel über dem Hof, das wandernde Licht –, und genau das irritiert jene, die Hotelservice erwarten.</p>

<h2>Anfahrt vom Flughafen</h2>
<p>Sechs Kilometer bis ins Viertel Dar el Bacha, etwa zwanzig Minuten Fahrt, <strong>dann einige Minuten zu Fuß</strong>. Kein Fahrzeug erreicht den Eingang: Der Fahrer hält am nächstgelegenen Tor, und Sie gehen durch die Gassen weiter.</p>
<p>Zwei Vorkehrungen klären die Sache. Fragen Sie das Riad nach <strong>dem genauen Namen des Absetztors</strong> und geben Sie ihn an Fahrer oder Transfer weiter. Und nennen Sie Ihre Ankunftszeit: Das Haus schickt jemanden entgegen, bei Bedarf mit einem Karren für die Koffer. Bei Ankunft nach 22 Uhr ist das unverzichtbar, nicht nur bequem.</p>

<h2>Für wen es passt</h2>
<p>Für Paare, für Aufenthalte von drei bis fünf Nächten und für alle, für die die Medina genau der Reisegrund ist. Die Lage zwischen Dar el Bacha und den Souks erlaubt es, alles zu Fuß zu erledigen.</p>
<p>Viel weniger passend ist es mit kleinen Kindern – steile Treppen, offenes Becken, ungesicherte Terrasse –, mit schwerem Gepäck oder wenn Sie mehrmals täglich mit dem Auto zurückkehren wollen.</p>
`,
  pros: [
    'Ein Innenhof und Becken von echter Schönheit, im Maßstab eines Hauses',
    'Das authentische Riad-Erlebnis, ruhig und persönlich',
    'Eine zentrale Lage, um die Medina zu Fuß zu erkunden',
    'Ein Empfang im menschlichen Maßstab mit kleinem Team',
  ],
  cons: [
    'Keine Zufahrt: Absetzen am Tor, dann zu Fuß durch die Gassen',
    'Steile Treppen und offenes Becken, wenig geeignet für kleine Kinder',
    'Wenige Zimmer, daher begrenzte Verfügbarkeit in der Hochsaison',
    'Heizung und Dämmung eines alten Hauses im Winter',
  ],
  faqs: [
    { q: 'Wie erreicht man das Riad Yasmine vom Flughafen Marrakesch?', a: "Etwa zwanzig Minuten Fahrt bis ins Viertel Dar el Bacha, dann einige Minuten zu Fuß: Kein Fahrzeug erreicht den Eingang. Fragen Sie das Riad nach dem genauen Namen des Absetztors und geben Sie ihn an Ihren Fahrer weiter." },
    { q: 'Kann jemand die Koffer tragen?', a: "Ja, die meisten Medina-Riads schicken einen Träger mit Karren, wenn Sie Ihre Ankunftszeit nennen. Das ist kostenlos oder symbolisch und macht auf Kopfsteinpflaster einen großen Unterschied, besonders nachts." },
    { q: 'Eignet sich das Riad Yasmine für Kinder?', a: "Kaum: Die Treppen sind steil, das Becken im Hof ist offen und die Terrasse ungesichert. Familien mit kleinen Kindern sind in einem Hotel im Hivernage oder in der Palmeraie deutlich besser aufgehoben." },
    { q: 'Ist es gut gelegen, um die Medina zu besuchen?', a: "Ja, das Viertel Dar el Bacha ist zentral: Souks, Bahia-Palast und Djemaa el-Fna sind zu Fuß erreichbar. Das ist einer der großen Vorzüge der Adresse." },
  ],
  cta: { heading: 'Absetzen am richtigen Medina-Tor', text: "Nennen Sie den Namen des Riads: Der Fahrer hält am nächstgelegenen Tor, nicht an dem, das ihm passt.", label: 'Transfer buchen' },
} satisfies LocalizedHotel;
