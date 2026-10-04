import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: "Datenschutz — AeroportRAK, Flughafen Marrakesch-Menara",
  description: "Wie AeroportRAK, Ratgeber zum Flughafen Marrakesch-Menara, Ihre Daten verarbeitet: Reichweite, Affiliate-Links, Cookies und DSGVO.",
  eyebrow: 'AeroportRAK',
  h1: 'Datenschutzerklärung',
  lede: "Was diese Website erhebt, warum, wie lange und was Sie verlangen können. Kurz gesagt: keine Konten, keine Tracking-Formulare und Dienste Dritter strikt auf Reichweitenmessung und Buchung beschränkt.",
  body: `
<h2>Wer Ihre Daten verarbeitet</h2>
<p>Verantwortlicher ist der Herausgeber von AeroportRAK, erreichbar unter <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>. Die Website bietet weder Kontoerstellung noch persönlichen Bereich noch Newsletter.</p>

<h2>Was wir erheben</h2>
<ul>
<li><strong>Reichweitenmessung</strong>: aufgerufene Seiten, Herkunft, Gerätetyp, Land. Diese Daten helfen uns zu verstehen, welche Inhalte nützlich sind, und sie zu verbessern. Sie erlauben keine persönliche Identifizierung.</li>
<li><strong>Technische Protokolle</strong> des Hosters, aufbewahrt für Sicherheit und Betrieb der Website.</li>
<li><strong>Nachrichten, die Sie uns senden</strong>: nur wenn Sie uns schreiben, und nur so lange, wie die Bearbeitung dauert.</li>
</ul>
<p>Wir verkaufen keine Daten und geben nichts an Datenhändler weiter.</p>

<h2>Cookies und Dienste Dritter</h2>
<p>Einige Seiten binden Werkzeuge Dritter ein, die eigene Cookies setzen und eigene Richtlinien haben:</p>
<ul>
<li><strong>Buchungswidgets</strong> (Flüge, Transfers): Sie nutzen Affiliate-Tracking-Cookies, um eine eventuelle Buchung unserer Website zuzuordnen.</li>
<li><strong>Fluganzeigen</strong>: von einem Anbieter für Fluginformationen bereitgestellt und in einem isolierten Rahmen angezeigt.</li>
<li><strong>Reichweitenmessung</strong>: aggregierte Besuchsstatistiken.</li>
<li><strong>Wetter</strong>: Die Temperatur auf der Startseite stammt von Open-Meteo, ohne Cookie; übertragen wird nur Ihre IP-Adresse, wie bei jedem Seitenaufruf.</li>
</ul>
<p>Sie können diese Cookies in den Browsereinstellungen blockieren oder löschen. Die Website bleibt ohne sie vollständig lesbar; lediglich die Buchungswidgets funktionieren dann womöglich nicht korrekt.</p>

<h2>Einwilligung, Reichweitenmessung und Werbung</h2>
<p>Bei Ihrem ersten Besuch aus der Europäischen Union, dem Europäischen Wirtschaftsraum, dem Vereinigten Königreich oder der Schweiz bittet ein Banner um Ihre Einwilligung. Solange Sie nicht zustimmen, werden keine Analyse- oder Werbe-Cookies gesetzt und das Affiliate-Skript wird nicht geladen. Sie können Ihre Wahl jederzeit über den Link <strong>„Cookie-Einstellungen"</strong> unten auf jeder Seite ändern.</p>
<ul>
<li><strong>Google Analytics 4</strong> (Google Ireland Ltd): Besucherstatistiken, IP-Adressen werden nicht gespeichert. Der Einwilligungsmodus von Google sendet bis zu Ihrer Zustimmung nur anonyme Signale ohne Cookies.</li>
<li><strong>Affiliate-Partner</strong>: Travelpayouts und seine Partner (Kiwitaxi für Transfers, EconomyBookings für Mietwagen, Flugsuchmaschinen) sowie Booking.com für Hotels. Sie können ein Cookie setzen, um eine Buchung unserer Website zuzuordnen.</li>
<li><strong>Werbung (Google AdSense)</strong>: Die Website kann Anzeigen einblenden. Drittanbieter, einschließlich Google, verwenden Cookies, um Anzeigen auf Grundlage Ihrer früheren Besuche auf dieser oder anderen Websites zu schalten. Mit den Werbe-Cookies von Google können Google und seine Partner Ihnen passende Anzeigen zeigen. Personalisierte Werbung können Sie in den <a href="https://adssettings.google.com" rel="noopener" target="_blank">Google-Anzeigeneinstellungen</a> oder auf <a href="https://www.youronlinechoices.com/de/" rel="noopener" target="_blank">youronlinechoices.com</a> deaktivieren. Mehr dazu: <a href="https://policies.google.com/technologies/partner-sites?hl=de" rel="noopener" target="_blank">wie Google Daten von Partnerwebsites nutzt</a>.</li>
</ul>

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
