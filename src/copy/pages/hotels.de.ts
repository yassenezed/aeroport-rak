import type { LocalizedPage } from '../types';

export default {
  title: "Hotels nahe Flughafen Marrakesch-Menara und in der Stadt",
  description: "Übernachten in Marrakesch, in der Stadt oder nahe Flughafen Marrakesch-Menara: Medina, Guéliz, Hivernage oder Palmeraie, Riad oder Hotel.",
  eyebrow: 'Marrakesch · Unterkunft',
  h1: 'Wo in Marrakesch übernachten',
  lede: "Die Wahl des Viertels zählt mehr als die des Hauses: Sie bestimmt Ihre Fahrzeiten, Ihren Geräuschpegel und die Art, wie Sie die Stadt erleben. So entscheiden Sie – und hier unsere Bewertungen von fünf Adressen.",
  body: `
<h2>Riad oder Hotel: zwei verschiedene Erfahrungen</h2>
<p>Das <strong>Riad</strong> ist ein traditionelles Haus um einen Innenhof, meist mit fünf bis zehn Zimmern, in der Medina. Man wird persönlich empfangen, das Frühstück wird auf der Terrasse serviert, und hinter der Tür ist es wirklich ruhig. Im Gegenzug: kein Auto bis zum Eingang, oft steile Treppen, bauartbedingt manchmal dunkle Zimmer und ungleichmäßige Heizung im Winter.</p>
<p>Das <strong>Hotel</strong> in Guéliz, im Hivernage oder in der Palmeraie bietet Aufzug, verlässliche Klimaanlage, Pool und Zufahrt bis vor die Tür. Es ist die Wahl des Komforts, mit weniger Fremdheit.</p>

<h2>Die vier Viertel und für wen sie passen</h2>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Viertel</th><th>Für wen</th><th>Zufahrt</th><th>Zum Flughafen</th></tr></thead>
<tbody>
<tr class="row-highlight"><td><strong>Medina</strong></td><td>Erster Besuch, Atmosphäre, Riads</td><td>Absetzen am Tor, dann zu Fuß</td><td class="num">15–30 Min.</td></tr>
<tr><td><strong>Guéliz</strong></td><td>Restaurants, Bequemlichkeit, Mietwagen</td><td>Direkt</td><td class="num">10–20 Min.</td></tr>
<tr><td><strong>Hivernage</strong></td><td>Große Hotels, Ruhe, Spas</td><td>Direkt</td><td class="num">10–15 Min.</td></tr>
<tr><td><strong>Palmeraie</strong></td><td>Pools, Erholung, Familien</td><td>Direkt</td><td class="num">25–35 Min.</td></tr>
</tbody>
</table>
</div>
<p>Entscheidend ist eine Frage: Wie oft wollen Sie tagsüber zurückkommen und ausruhen? Lautet die Antwort „oft“, wohnen Sie in der Medina oder im Hivernage. Planen Sie einen Tag in Agafay, einen im Atlas und Abende in der Stadt, kostet Sie die Palmeraie täglich eine Stunde im Auto.</p>

<h2>Was Sie vor einer Buchung in der Medina fragen sollten</h2>
<ul>
<li><strong>Den Namen des Tors</strong> – Bab Doukkala, Bab Laksour, Bab Agnaou, Bab el Khemis – und die Gehzeit von dort.</li>
<li><strong>Einen Gepäckträger mit Karren</strong> zu Ihrer Ankunftszeit: Die meisten Riads bieten das kostenlos oder für ein paar Dirham an.</li>
<li><strong>Die Heizung</strong> im Winter: Januarnächte sinken unter 8 °C, und ein steinernes Riad kühlt schnell aus.</li>
<li><strong>Die Klimaanlage</strong> im Sommer, wenn tagsüber regelmäßig über 42 °C erreicht werden.</li>
<li><strong>Die Zahlungsweise</strong>: Viele kleine Riads nehmen für den Restbetrag nur Bargeld.</li>
</ul>
<div class="callout">
<span class="callout-label">Späte Ankunft</span>
<p>Landet Ihr Flug nach 22 Uhr, nennen Sie Ihrer Unterkunft die Flugnummer, nicht nur die Uhrzeit. Ein Riad, das weiß, dass Sie zwei Stunden später kommen, hält jemanden an der Tür bereit; sonst klingeln Sie in einer leeren Gasse.</p>
</div>

<h2>Unsere ausführlichen Bewertungen</h2>
<p>Wir haben fünf Adressen geprüft, die repräsentativ für Marrakesch sind, vom historischen Palast bis zum Charme-Riad: <a href="/de/hotels/la-mamounia/">La Mamounia</a>, <a href="/de/hotels/royal-mansour/">Royal Mansour</a>, <a href="/de/hotels/es-saadi/">Es Saadi</a>, <a href="/de/hotels/riad-yasmine/">Riad Yasmine</a> und <a href="/de/hotels/riad-be/">Riad BE</a>. Jede Seite nennt Viertel, Preisniveau, was funktioniert und was Sie vor der Buchung wissen sollten.</p>
`,
  faqs: [
    {
      q: 'Besser in der Medina oder in Guéliz übernachten?',
      a: "Die Medina wegen Atmosphäre, Riads und Nähe zu den Souks, wenn Sie das Absetzen am Tor und den Fußweg akzeptieren. Guéliz wegen der Bequemlichkeit: Zufahrt, Restaurants, ONCF-Bahnhof und einfacherer Verkehr, dafür weniger Fremdheit.",
    },
    {
      q: 'Eignet sich ein Riad mit Kindern?',
      a: "Das hängt vom Riad ab: Die Treppen sind oft steil, Terrassen selten gesichert und Innenhöfe offen. Viele Familien bevorzugen ein Hotel im Hivernage oder in der Palmeraie mit Pool. Manche großzügigen Riads funktionieren sehr gut, fragen Sie aber direkt nach.",
    },
    {
      q: 'Kann man mit dem Auto bis zu einem Riad in der Medina fahren?',
      a: "Fast nie: Die Derbs sind zu eng, und mehrere Zugänge sind gesperrt. Man setzt Sie am nächstgelegenen Tor ab, den Rest gehen Sie in drei bis zehn Minuten zu Fuß. Bitten Sie bei der Buchung um einen Gepäckträger mit Karren.",
    },
    {
      q: 'Sind Riads in Marrakesch im Winter beheizt?',
      a: "Ungleichmäßig. Die Nächte im Januar und Februar sinken unter 8 °C, und Steingebäude kühlen schnell aus. Prüfen Sie vor einer Winterbuchung ausdrücklich, ob das Zimmer eine Heizung hat.",
    },
    {
      q: 'Muss man in Riads bar bezahlen?',
      a: "Oft ja, für den Restbetrag: Viele kleine Häuser akzeptieren Karten nur für die Online-Anzahlung oder gar nicht. Bringen Sie Dirham mit und fragen Sie bei der Buchung nach.",
    },
  ],
  cta: {
    heading: 'Vom Flughafen bis vor Ihr Riad',
    text: "Nennen Sie den Namen Ihrer Unterkunft: Der Fahrer kennt das nächstgelegene Medina-Tor und setzt Sie dort ab, fester Preis pro Fahrzeug.",
    label: 'Transfer buchen',
  },
} satisfies LocalizedPage;
