import type { LocalizedHotel } from '../types';

export default {
  title: 'Royal Mansour Marrakesch: Bewertung und Anfahrt',
  description: 'Royal Mansour: private Riads in einem ummauerten Anwesen, ein außergewöhnlicher Service und fünfzehn Autominuten vom Flughafen Marrakesch.',
  eyebrow: 'Marrakesch · Hotel',
  h1: 'Royal Mansour',
  lede: "Keine Zimmer, sondern private mehrstöckige Riads in einem ummauerten Anwesen innerhalb der Stadtmauer. Das ungewöhnlichste Haus von Marrakesch und vermutlich das teuerste.",
  stars: '★★★★★',
  area: 'Innerhalb der Stadtmauer, nahe Hivernage',
  priceRange: 'Außergewöhnlich',
  rating: 4.9,
  ratingLabel: 'unsere redaktionelle Note',
  verdict: "Die vollständige Nachbildung einer Medina im Hotelmaßstab: Jeder Gast bewohnt sein eigenes Riad mit Innenhof, Terrasse und Pool. Das Personal bewegt sich durch unterirdische Gänge, um unsichtbar zu bleiben. Ein Unikat, dessen Preis dem Anspruch entspricht.",
  body: `
<h2>Was es ist</h2>
<p>Das Royal Mansour funktioniert nicht wie ein klassisches Hotel. Das Anwesen bildet eine Medina im Kleinen nach: Gassen, Tore, Innenhöfe und <strong>einzelne mehrstöckige Riads</strong>, die jeder Buchung zugeteilt werden, mit eigenem Hof, eigener Terrasse und oft eigenem Pool. Man geht nicht über einen Flur zurück, man kommt nach Hause.</p>
<p>Am meisten besprochen wird die Organisation des Service: Das Personal bewegt sich durch ein Netz unterirdischer Galerien und erscheint nur, wenn man es ruft. Das Ergebnis ist eine für ein Haus dieser Größe seltene Privatsphäre.</p>
<p>Das eingesetzte Kunsthandwerk – Zellige, geschnitzter Stuck, Zedernholz, Tadelakt – beschäftigte Hunderte marokkanischer Handwerker, und das zeigt sich im Detail mehr als im Gesamteindruck.</p>

<h2>Anfahrt vom Flughafen</h2>
<p>Etwa sechs Kilometer, fünfzehn bis zwanzig Minuten, Ankunft mit dem Auto direkt am Anwesen. Keine Medina-Einschränkung: Das Haus liegt innerhalb der Stadtmauer, hat aber eine eigene Zufahrt. Transfers übernimmt das Hotel auf Anfrage, und auf diesem Serviceniveau ist das der einfachste Weg.</p>

<h2>Für wen es passt</h2>
<p>Für alle, die absolute Privatsphäre statt Grandhotel-Trubel suchen, für Ausnahmereisen und für Familien, die ein ganzes Riad bewohnen. Die Anordnung in Einzelhäusern eignet sich besonders für eine Gruppe, die zusammen sein möchte, ohne einen Hotelflur zu teilen.</p>
<p>Weniger passend ist es für alle, die Belebtheit, Begegnung oder Lobby-Atmosphäre suchen: Hier ist alles darauf angelegt, dass Sie niemandem begegnen.</p>
`,
  pros: [
    'Ganze private Riads statt Zimmer, mit Innenhof und Terrasse',
    'Unerreichte Privatsphäre dank unsichtbarer Personalwege',
    'Marokkanisches Kunsthandwerk auf höchstem Niveau, im Detail',
    'Direkte Zufahrt ohne jede Medina-Einschränkung',
    'Restaurants und Spa auf dem Niveau des Übrigen',
  ],
  cons: [
    'Preise, die das Haus für die meisten Reisen unerreichbar machen',
    'Eine bewusst gedämpfte Atmosphäre ohne gemeinschaftliches Leben',
    'Das Anwesen lädt dazu ein, es nicht zu verlassen – mit dem Risiko, wenig von der Stadt zu sehen',
    'Buchungen in der Hochsaison erfordern erheblichen Vorlauf',
  ],
  faqs: [
    { q: 'Ist das Royal Mansour weit vom Flughafen Marrakesch entfernt?', a: "Etwa sechs Kilometer, also fünfzehn bis zwanzig Minuten Fahrt. Die Anfahrt erfolgt vollständig mit dem Auto direkt zum Anwesen, ohne Medina-Einschränkung, obwohl das Hotel innerhalb der Stadtmauer liegt." },
    { q: 'Was ist ein privates Riad im Royal Mansour?', a: "Ein einzelnes mehrstöckiges Haus, das Ihrer Buchung zugeteilt wird, mit Innenhof, Terrasse und meist Pool. Sie bewohnen kein Zimmer in einem gemeinsamen Gebäude, sondern ein ganzes Haus innerhalb des Anwesens." },
    { q: 'Ist der unterirdische Service eine Legende?', a: "Nein, er ist baulich real: Ein Galerienetz erlaubt es dem Personal, sich zu bewegen, ohne in den Gassen des Anwesens zu erscheinen. Das erklärt die Privatsphäre des Hauses." },
    { q: 'Organisiert das Hotel Flughafentransfers?', a: "Ja, auf Anfrage, und auf diesem Serviceniveau ist das die einfachste Lösung. Ein separat gebuchter Privattransfer funktioniert ebenfalls: Die Fahrt ist kurz und die Zufahrt direkt." },
  ],
  cta: { heading: 'Eine Anreise, die zur Ankunft passt', text: "Privatfahrzeug ab dem Terminal, Flugverfolgung und fester Preis, fünfzehn Minuten bis zum Anwesen.", label: 'Transfer buchen' },
} satisfies LocalizedHotel;
