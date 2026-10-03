import type { LocalizedArticle } from '../types';

export default {
  title: "Bus Flughafen Marrakesch-Menara: Linie 19, Preis, Zeiten",
  description: "Der Bus 19 zwischen Flughafen Marrakesch-Menara und Djemaa el-Fna: Preis, Fahrplan, Takt, Fahrzeit, Haltestelle und wann er sich nicht eignet.",
  eyebrow: 'Unterwegs',
  h1: "Bus vom Flughafen Marrakesch-Menara: Linie 19 ins Zentrum",
  lede: "Dreißig Dirham bis Djemaa el-Fna: das günstigste Verkehrsmittel ab RAK, und es funktioniert gut – sofern Sie vor 23 Uhr landen und Ihr Gepäck selbst tragen können.",
  excerpt: 'Preis, Fahrplan, Takt und Grenzen der ALSA-Linie 19, die den Flughafen für 30 MAD mit Djemaa el-Fna verbindet.',
  date: '2026-09-13',
  facts: [
    { label: 'Einfach', value: '30', sub: 'MAD' },
    { label: 'Hin und zurück', value: '50', sub: 'MAD' },
    { label: 'Takt', value: '≈ 30', sub: 'Min.' },
    { label: 'Fahrzeit', value: '≈ 20', sub: 'Min.' },
  ],
  body: `
<h2>So funktioniert es</h2>
<p>Die Linie 19, betrieben von <strong>ALSA</strong>, verbindet den Flughafen Marrakesch Menara mit dem Platz Djemaa el-Fna. Die Haltestelle liegt gut ausgeschildert vor dem Terminal, die Fahrt dauert rund zwanzig Minuten mit einigen Zwischenhalten, unter anderem in Guéliz.</p>
<p>Das Ticket kostet <strong>30 MAD einfach</strong> und <strong>50 MAD hin und zurück</strong>, Letzteres etwa fünfzehn Tage gültig – die interessanteste Lösung, wenn Sie denselben Weg zurücknehmen. Gekauft wird beim Fahrer oder am Schalter, bar.</p>
<p>Abfahrten etwa alle dreißig Minuten zwischen <strong>6 und 23:30 Uhr</strong>. Die Zeiten können je nach Saison und Verkehr variieren: Prüfen Sie die Anzeige an der Haltestelle.</p>

<h2>Wann er die richtige Wahl ist</h2>
<ul>
<li>Sie landen <strong>tagsüber</strong>, zwischen 8 und 21 Uhr.</li>
<li>Sie reisen <strong>allein oder zu zweit</strong>, mit Gepäck, das Sie mühelos tragen.</li>
<li>Ihre Unterkunft liegt <strong>nahe Djemaa el-Fna</strong> oder im südlichen Teil der Medina.</li>
<li>Das Budget ist das Hauptkriterium: 30 MAD gegenüber 100 bis 150 MAD im Taxi ist ein echter Unterschied.</li>
</ul>

<h2>Wann man ihn nicht nehmen sollte</h2>
<p>In mehreren Fällen ist der Bus 19 eine schlechte Idee, und das weiß man besser, bevor man einen Koffer zur Haltestelle zieht.</p>
<p><strong>Nach 23:30 Uhr</strong> fährt er nicht mehr – und genau dann landet ein großer Teil der Billigflüge. <strong>Mit zwei Koffern</strong> oder einem kleinen Kind werden Einsteigen, Verstauen und der Fußweg zur Plage. Und <strong>wenn Ihr Riad nicht am Platz liegt</strong>, kommen zehn bis zwanzig Minuten zu Fuß durch die Gassen hinzu, mit Gepäck, oft im Dunkeln.</p>
<div class="callout">
<span class="callout-label">Die Rechnung zu viert</span>
<p>Vier Personen im Bus: 120 MAD. Ein Grand Taxi oder ein Transfer für dieselbe Gruppe: 150 MAD tagsüber oder 27 € für ein Fahrzeug mit bis zu sieben Plätzen, von Tür zu Tür. Der Unterschied wird verschwindend, der Komfort ist ein anderer.</p>
</div>

<h2>Für die Rückfahrt zum Flughafen</h2>
<p>Der Bus fährt in umgekehrter Richtung ab Djemaa el-Fna im selben Takt. Für einen Mittagsflug ist das eine brauchbare Option. Für einen Frühflug lässt die erste Abfahrt gegen 6 Uhr dagegen keinen Spielraum, wenn Ihr Check-in früh schließt: Buchen Sie dann am Vorabend einen Transfer.</p>
`,
  faqs: [
    { q: 'Was kostet der Bus 19 in Marrakesch?', a: "30 MAD einfach und 50 MAD hin und zurück, Letzteres etwa fünfzehn Tage gültig. Bezahlt wird bar beim Fahrer oder am Schalter." },
    { q: 'Wie sind die Fahrzeiten des Bus 19 am Flughafen Marrakesch?', a: "Abfahrten etwa alle dreißig Minuten zwischen 6 und 23:30 Uhr. Die Zeiten variieren je nach Saison: Prüfen Sie die Anzeige an der Haltestelle vor dem Terminal." },
    { q: 'Wo hält der Bus 19 in Marrakesch?', a: "Am Platz Djemaa el-Fna, mit einigen Zwischenhalten wie Guéliz. Er fährt nicht zu Ihrer Unterkunft: Liegt Ihr Riad abseits des Platzes, rechnen Sie mit zehn bis zwanzig Minuten Fußweg." },
    { q: 'Fährt der Bus 19 nachts?', a: "Nein, die letzte Abfahrt ist gegen 23:30 Uhr. Da viele Billigflüge später landen, ist er bei der Ankunft oft nicht nutzbar: Planen Sie Taxi oder gebuchten Transfer ein." },
    { q: 'Lohnt sich der Bus 19 für eine Gruppe?', a: "Selten. Zu viert kostet der Bus 120 MAD, gegenüber 150 MAD für ein Grand Taxi oder 27 € für einen Privattransfer mit bis zu sieben Plätzen, von Tür zu Tür. Der Preisunterschied ist minimal, der Komfort nicht vergleichbar." },
  ],
} satisfies LocalizedArticle;
