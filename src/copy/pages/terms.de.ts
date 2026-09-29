import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: "Nutzungsbedingungen — Ratgeber Flughafen Marrakesch-Menara",
  description: "Nutzungsbedingungen von AeroportRAK, dem unabhängigen Ratgeber zum Flughafen Marrakesch-Menara: Haftung, Rechte und Links.",
  eyebrow: 'AeroportRAK',
  h1: 'Nutzungsbedingungen',
  lede: "Was Sie von dieser Website erwarten können und was nicht. Mit der Nutzung von AeroportRAK akzeptieren Sie die folgenden Bedingungen.",
  body: `
<h2>Charakter der Website</h2>
<p>AeroportRAK ist eine unabhängige redaktionelle Publikation über den Flughafen Marrakesch Menara. Die Website wird <strong>weder betrieben noch beauftragt noch gebilligt</strong> vom Office National Des Aéroports, vom Flughafen Marrakesch Menara oder von einer Airline. Sie verkauft keine Beförderungsleistungen und ist kein Reisebüro.</p>

<h2>Richtigkeit der Informationen</h2>
<p>Wir prüfen die veröffentlichten Informationen und nennen das Datum der Preiserhebung. Preise, Fahrpläne, Takte und Abläufe ändern sich dennoch ohne Vorankündigung: <strong>Prüfen Sie stets beim jeweiligen Anbieter</strong>, bevor Sie eine verbindliche Entscheidung treffen, insbesondere zu Flugzeiten, Einreiseformalitäten oder Buchungen.</p>
<p>Die angegebenen Größenordnungen – Wartezeiten, Fahrtdauern, Preisspannen – sind Schätzungen aus üblichen Bedingungen. Sie stellen weder eine Garantie noch eine Zusicherung dar.</p>

<h2>Haftungsbeschränkung</h2>
<p>Die Informationen dieser Website dienen der Orientierung. Wir haften nicht für einen verpassten Flug, einen verlorenen Anschluss, einen Streit mit einem Anbieter, eine Nichtbeförderung oder einen Schaden aus der Nutzung der veröffentlichten Informationen. Entscheidung und Überprüfung liegen bei Ihnen.</p>
<p>Kein Inhalt dieser Website ist Rechtsberatung. Ausführungen zu Passagierrechten oder Einreiseformalitäten sind allgemeine Informationen und ersetzen keine fachliche Beratung zu Ihrer konkreten Situation.</p>

<h2>Links zu Websites Dritter</h2>
<p>Die Website verweist auf Buchungsplattformen, Beförderer und offizielle Quellen. Wir haben keinen Einfluss auf deren Inhalte, Preise, Bedingungen oder Verfügbarkeit und übernehmen dafür keine Haftung. Jede Buchung bei einem Dritten unterliegt ausschließlich dem mit ihm geschlossenen Vertrag.</p>

<h2>Geistiges Eigentum</h2>
<p>Texte, redaktionelle Struktur, visuelle Identität und grafische Elemente dieser Website sind geschützt. Jede wesentliche Vervielfältigung oder Wiederverwendung ohne vorherige schriftliche Genehmigung ist untersagt. Kurze Zitate sind zulässig, sofern die Quelle genannt und auf die Originalseite verlinkt wird.</p>
<p>Genannte Marken, Handelsnamen und Logos gehören ihren jeweiligen Inhabern und werden nur zu Informationszwecken erwähnt.</p>

<h2>Zulässige Nutzung</h2>
<p>Untersagt sind die massenhafte automatisierte Extraktion von Inhalten, die Nachbildung der Website oder ihrer Struktur sowie jeder Versuch, ihren Betrieb zu stören.</p>

<h2>Anwendbares Recht und Kontakt</h2>
<p>Diese Bedingungen unterliegen französischem Recht. Für Fragen dazu: <a href="mailto:${site.contactEmail}">${site.contactEmail}</a>.</p>
`,
} satisfies LocalizedPage;
