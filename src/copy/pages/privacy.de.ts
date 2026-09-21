import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: 'Datenschutzerklärung — AirportRAK',
  description: 'Wie AirportRAK Besucherdaten verarbeitet: Reichweitenmessung, Affiliate-Links, Cookies, Widgets Dritter und Ihre Rechte nach DSGVO.',
  eyebrow: 'AirportRAK',
  h1: 'Datenschutzerklärung',
  lede: "Was diese Website erhebt, warum, wie lange und was Sie verlangen können. Kurz gesagt: keine Konten, keine Tracking-Formulare und Dienste Dritter strikt auf Reichweitenmessung und Buchung beschränkt.",
  body: `
<h2>Wer Ihre Daten verarbeitet</h2>
<p>Verantwortlicher ist der Herausgeber von AirportRAK, erreichbar unter <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>. Die Website bietet weder Kontoerstellung noch persönlichen Bereich noch Newsletter.</p>

<h2>Was wir erheben</h2>
<ul>
<li><strong>Reichweitenmessung</strong>: aufgerufene Seiten, Herkunft, Gerätetyp, Land. Diese Daten helfen uns zu verstehen, welche Inhalte nützlich sind, und sie zu verbessern. Sie erlauben keine persönliche Identifizierung.</li>
<li><strong>Technische Protokolle</strong> des Hosters, aufbewahrt für Sicherheit und Betrieb der Website.</li>
<li><strong>Nachrichten, die Sie uns senden</strong>: nur wenn Sie uns schreiben, und nur so lange, wie die Bearbeitung dauert.</li>
</ul>
<p>Wir verkaufen keine Daten, erstellen keine Werbeprofile und geben nichts an Datenhändler weiter.</p>

<h2>Cookies und Dienste Dritter</h2>
<p>Einige Seiten binden Werkzeuge Dritter ein, die eigene Cookies setzen und eigene Richtlinien haben:</p>
<ul>
<li><strong>Buchungswidgets</strong> (Flüge, Transfers): Sie nutzen Affiliate-Tracking-Cookies, um eine eventuelle Buchung unserer Website zuzuordnen.</li>
<li><strong>Fluganzeigen</strong>: von einem Anbieter für Fluginformationen bereitgestellt und in einem isolierten Rahmen angezeigt.</li>
<li><strong>Reichweitenmessung</strong>: aggregierte Besuchsstatistiken.</li>
</ul>
<p>Sie können diese Cookies in den Browsereinstellungen blockieren oder löschen. Die Website bleibt ohne sie vollständig lesbar; lediglich die Buchungswidgets funktionieren dann womöglich nicht korrekt.</p>

<h2>Affiliate-Links</h2>
<p>Folgen Sie von dieser Website einem Buchungslink, kann der betreffende Partner Ihre Herkunft erfassen, um uns bei einer Buchung eine Provision zuzuordnen. Dieser Mechanismus <strong>erhöht nie den Preis, den Sie zahlen</strong>. Er ist auf unserer Seite zur <a href="/de/affiliate-disclosure/">Affiliate-Offenlegung</a> erläutert.</p>

<h2>Speicherdauer</h2>
<p>Reichweitendaten werden aggregiert gespeichert. Die technischen Protokolle des Hosters folgen dessen Fristen. Per E-Mail erhaltene Nachrichten werden nach Erledigung gelöscht, außer sie dokumentieren eine an der Website vorgenommene Korrektur.</p>

<h2>Ihre Rechte</h2>
<p>Nach der DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung und Widerspruch bezüglich Ihrer Daten. Schreiben Sie an <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>: Wir antworten innerhalb eines Monats. Sie können sich außerdem bei der zuständigen Aufsichtsbehörde beschweren, etwa beim Datenschutzbeauftragten Ihres Bundeslandes.</p>

<h2>Änderungen</h2>
<p>Diese Erklärung kann angepasst werden, insbesondere wenn wir ein Werkzeug Dritter hinzufügen oder entfernen. Wesentliche Änderungen werden auf dieser Seite vermerkt.</p>
`,
} satisfies LocalizedPage;
