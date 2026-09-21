import type { LocalizedPage } from '../types';

export default {
  title: 'Transfer ab Flughafen Marrakesch online buchen',
  description: 'Buchen Sie Ihren Privattransfer ab Flughafen Marrakesch: fester Preis pro Fahrzeug, Flugverfolgung, Absetzen an den Medina-Toren, kostenlose Stornierung.',
  eyebrow: 'Marrakesch Menara · Buchung',
  h1: 'Transfer ab Flughafen Marrakesch buchen',
  lede: "Geben Sie Ziel und Landezeit an: Der Preis erscheint pro Fahrzeug, nicht pro Person. Ein Fahrer erwartet Sie am Ausgang der Ankunft mit Ihrem Namen und setzt Sie am nächstgelegenen Medina-Tor ab.",
  widget: 'transfer',
  body: `
<h2>Was eine Buchung umfasst</h2>
<ul>
<li><strong>Einen festen Preis pro Fahrzeug</strong>, vor der Reise bekannt, für bis zu sieben Personen im Van. Nichts zu verhandeln bei der Ankunft.</li>
<li><strong>Die Verfolgung der Flugnummer</strong>: Landen Sie eine Stunde später, passt der Fahrer an und wartet.</li>
<li><strong>Eine kostenlose Wartezeit</strong> nach der Landung, meist 45 bis 60 Minuten – genug für Polizei und Gepäck.</li>
<li><strong>Kostenlose Stornierung</strong> bis 24 Stunden vor der Abholung bei den meisten Anbietern.</li>
<li><strong>Kindersitze</strong> auf Anfrage, bei der Buchung anzugeben: In einem Taxi am Stand gibt es sie so gut wie nie.</li>
</ul>

<h2>Das richtige Fahrzeug wählen</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Fahrzeug</th><th>Personen</th><th>Koffer</th><th>Für wen</th></tr></thead>
<tbody>
<tr><td><strong>Limousine</strong></td><td class="num">1–3</td><td class="num">2–3</td><td>Paar oder Trio mit Handgepäck und einem Koffer</td></tr>
<tr class="row-highlight"><td><strong>Van</strong></td><td class="num">4–7</td><td class="num">5–7</td><td>Familie, Freundesgruppe, bestes Preis-Platz-Verhältnis</td></tr>
<tr><td><strong>Minibus</strong></td><td class="num">8–15</td><td class="num">10+</td><td>Gruppe, Tagung, Hochzeit</td></tr>
<tr><td><strong>4x4 oder Premium-Van</strong></td><td class="num">1–6</td><td class="num">4–6</td><td>Wüstencamps, Pisten von Agafay, Geschäftsreisen</td></tr>
</tbody>
</table>
</div>
<p>Entscheidend: Da der Preis pro Fahrzeug gilt, kommt ein Van für vier oder fünf Personen deutlich günstiger pro Kopf als zwei Petits Taxis, die auf je drei Personen begrenzt sind.</p>

<h2>Was Sie bereithalten sollten</h2>
<p>Die Buchung dauert zwei Minuten, wenn Sie Folgendes zur Hand haben: Ihre <strong>Flugnummer</strong> und die Landezeit; den <strong>genauen Namen Ihres Riads oder Hotels</strong>; für die Medina das <strong>Tor</strong>, das Ihre Unterkunft genannt hat; die Zahl der Personen und Koffer; und eine <strong>in Marokko erreichbare Telefonnummer</strong>, vorzugsweise WhatsApp, das die meisten Fahrer nutzen.</p>
<div class="callout">
<span class="callout-label">Buchen Sie in beide Richtungen</span>
<p>Die Rückfahrt ist oft schwieriger als die Hinfahrt: Um 5 Uhr morgens gibt es in einer Medina-Gasse keine Taxischlange. Hin- und Rückfahrt gemeinsam zu buchen, kostet meist weniger als zwei Einzelfahrten und löst das Problem.</p>
</div>

<h2>Hochsaison: früh buchen</h2>
<p>Europäische Schulferien, Frühjahrsbrücken, der Marathon des Sables und die Feiertage am Jahresende leeren die Verfügbarkeit großer Fahrzeuge als Erstes. Wenn Sie zwischen Dezember und April zu fünft oder mehr reisen, ist eine Buchung einige Wochen im Voraus keine übertriebene Vorsicht: Sie verhindert schlicht, dass Ihre Gruppe auf drei Wagen verteilt wird.</p>
`,
  faqs: [
    {
      q: 'Gilt der angezeigte Preis pro Person oder pro Fahrzeug?',
      a: "Pro Fahrzeug. Ein Transfer für 27 € in die Medina deckt bis zu sieben Personen im Van ab, Gepäck inklusive. Genau das macht ihn ab vier Personen deutlich günstiger als ein Taxi, denn ein Petit Taxi ist auf drei Personen begrenzt.",
    },
    {
      q: 'Was passiert, wenn mein Flug Verspätung hat?',
      a: "Der Fahrer verfolgt Ihre Flugnummer und passt die Abholzeit an. Eine kostenlose Wartezeit von 45 bis 60 Minuten nach der Landung ist in der Regel enthalten, was Grenzpolizei und Gepäckausgabe abdeckt.",
    },
    {
      q: 'Kann ein gebuchter Transfer storniert werden?',
      a: "Bei den meisten Anbietern ja: kostenlose Stornierung bis 24 Stunden vor der Abholung mit vollständiger Erstattung. Die genauen Bedingungen stehen vor der Zahlung auf Ihrem Bestätigungsvoucher.",
    },
    {
      q: 'Kann man einen Kindersitz anfordern?',
      a: "Ja, bei der Buchung angeben und Alter sowie Gewicht des Kindes nennen. Das ist ein entscheidendes Argument für den Transfer: Taxis am Stand führen praktisch nie welche mit.",
    },
    {
      q: 'Wo wartet der Fahrer am Flughafen Marrakesch?',
      a: "Am Ausgang der Ankunftshalle, mit einem Schild mit Ihrem Namen. Der genaue Treffpunkt steht auf Ihrem Bestätigungsvoucher. Schreiben Sie ihm, sobald Sie Netz haben, noch vor dem Zoll.",
    },
    {
      q: 'Zahlt man online oder vor Ort?',
      a: "Beides gibt es je nach Anbieter. Die Online-Buchung sichert den Preis, und viele Anbieter erlauben spätere Zahlung oder Zahlung an den Fahrer. Wenn Sie vor Ort zahlen, bringen Sie Dirham mit: Karten werden im Fahrzeug nicht immer akzeptiert.",
    },
  ],
  cta: {
    heading: 'Ihr Transfer, in zwei Minuten geklärt',
    text: "Vergleichen Sie die für Ihre Landezeit verfügbaren Fahrzeuge und sichern Sie den Preis. Kostenlose Stornierung bei den meisten Buchungen.",
    label: 'Verfügbarkeit prüfen',
  },
} satisfies LocalizedPage;
