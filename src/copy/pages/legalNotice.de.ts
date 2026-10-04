import type { LocalizedPage } from '../types';
import { site } from '../../data/site';

export default {
  title: "Impressum — AeroportRAK, Flughafen Marrakesch-Menara",
  description: "Impressum von AeroportRAK, dem unabhängigen Ratgeber zum Flughafen Marrakesch-Menara: Herausgeber, Hosting, Urheberrecht und Haftung.",
  eyebrow: 'AeroportRAK',
  h1: 'Impressum',
  lede: "Wer diese Website herausgibt, wer sie hostet und in welchen Grenzen die veröffentlichten Informationen genutzt werden dürfen.",
  body: `
<h2>Herausgeber</h2>
<p><strong>${site.name}</strong> (${site.url.replace('https://', '')}), unabhängiger Informationsratgeber zum Flughafen Marrakesch-Menara.<br>
Kontakt: <a href="mailto:${site.contactEmail}">${site.contactEmail}</a><br>
Verantwortlich für den Inhalt: der Herausgeber der Website.</p>

<h2>Hosting</h2>
<p>Hostinger International Ltd.<br>61 Lordou Vironos Street, 6023 Larnaka, Zypern<br>hostinger.com</p>

<h2>Unabhängige Website</h2>
<p>${site.name} ist nicht die offizielle Website des Flughafens und steht in keiner Verbindung zum nationalen Flughafenamt (ONDA), zu Fluggesellschaften oder marokkanischen Behörden. Offizielle Informationen finden Sie auf onda.ma.</p>

<h2>Richtigkeit der Informationen</h2>
<p>Preise, Zeiten und Leistungen werden sorgfältig geprüft, können sich aber ohne Vorankündigung ändern. Sie dienen nur der Orientierung: Prüfen Sie sie vor der Reise immer bei Ihrer Fluggesellschaft oder dem jeweiligen Anbieter. Der Herausgeber haftet nicht für Entscheidungen, die allein auf Grundlage dieser Website getroffen werden.</p>

<h2>Affiliate-Links und Werbung</h2>
<p>Einige Links und Buchungsmodule sind Affiliate-Links: Bei einer Buchung kann eine Provision anfallen, ohne Mehrkosten für Sie. Die Website kann außerdem Werbung anzeigen. Details finden Sie in unserer <a href="/de/affiliate-disclosure/">Affiliate-Offenlegung</a> und unserer <a href="/de/privacy-policy/">Datenschutzerklärung</a>.</p>

<h2>Urheberrecht</h2>
<p>Texte, Gestaltung, Logo und eigene Bilder von ${site.name} sind geschützt. Jede auch auszugsweise Vervielfältigung ohne schriftliche Genehmigung ist untersagt. Marken und Fotos von Drittbetrieben bleiben Eigentum ihrer jeweiligen Inhaber.</p>

<h2>Personenbezogene Daten und Cookies</h2>
<p>Die Verarbeitung Ihrer Daten und der Einsatz von Cookies sind in der <a href="/de/privacy-policy/">Datenschutzerklärung</a> beschrieben. Sie können Ihre Wahl jederzeit über den Link „Cookie-Einstellungen" unten auf jeder Seite ändern.</p>
`,
} satisfies LocalizedPage;
