import type { PageContent } from '../types';

export default {
  fr: {
    title: "Vol retardé à l'aéroport Marrakech-Ménara : jusqu'à 600 €",
    description: "Vol retardé ou annulé à l'aéroport de Marrakech-Ménara ? Vérifiez gratuitement si vous avez droit à 250, 400 ou 600 € selon le règlement CE 261/2004.",
    eyebrow: "Vos droits de passager · CE 261/2004",
    h1: "Indemnisation vol retardé : aéroport Marrakech-Ménara",
    lede: "Votre vol vers ou depuis l'aéroport de Marrakech-Ménara est arrivé avec plus de trois heures de retard, ou a été annulé ? Vous pouvez avoir droit à 250, 400 ou 600 € par passager. Vérifiez votre vol en une minute, puis lisez ce qui s'applique vraiment à votre cas.",
    widget: 'compensation',
    highlights: [
      { icon: 'wallet', value: "250 €", label: "Moins de 1 500 km : Madrid, Séville, Lisbonne" },
      { icon: 'wallet', value: "400 €", label: "1 500 à 3 500 km : Paris, Londres, Bruxelles" },
      { icon: 'wallet', value: "600 €", label: "Plus de 3 500 km : Stockholm, Helsinki, Riga" },
    ],
    cardSections: [
      {
        eyebrow: "Qui est couvert ?",
        heading: "Quels vols de l'aéroport de Marrakech-Ménara sont couverts",
        intro: "Tout dépend du sens du vol et de la nationalité de la compagnie.",
        variant: 'feature',
        items: [
          { icon: 'plane-landing', title: "Europe → Marrakech", text: "Tous les vols au départ de l'Union européenne sont couverts, quelle que soit la compagnie, Royal Air Maroc comprise.", tags: ["Couvert", "Toutes compagnies"] },
          { icon: 'plane-takeoff', title: "Marrakech → Europe, compagnie européenne", text: "Couvert si le vol est opéré par une compagnie européenne : Ryanair, easyJet, Transavia, Air France, Vueling, Volotea, Wizz Air, TUI fly…", tags: ["Couvert", "Compagnie de l'UE"] },
          { icon: 'alert', title: "Marrakech → Europe, compagnie non européenne", text: "Royal Air Maroc, Qatar Airways, Turkish Airlines ou Saudia au départ du Maroc ne sont pas soumis au règlement. Restent leurs conditions de transport.", tags: ["Non couvert"] },
          { icon: 'shield-check', title: "Vols vers ou depuis le Royaume-Uni", text: "Le règlement britannique UK261 prévoit les mêmes droits, en livres sterling, pour les vols au départ du Royaume-Uni et ceux des compagnies britanniques.", tags: ["UK261", "220 à 520 £"] },
        ],
      },
      {
        eyebrow: "Vol en retard",
        heading: "Retard : ce que la compagnie doit vous fournir sur place",
        intro: "Avant même toute indemnisation, la compagnie doit vous prendre en charge à l'aéroport à partir d'un certain délai d'attente.",
        variant: 'feature',
        items: [
          { icon: 'coffee', title: "2 h et plus, vol de moins de 1 500 km", text: "Repas et rafraîchissements en rapport avec l'attente, et deux communications (appels ou e-mails).", tags: ["Repas", "Boissons", "Communications"] },
          { icon: 'clock', title: "3 h et plus, vol de 1 500 à 3 500 km", text: "La même prise en charge, pour la plupart des vols entre Marrakech et l'Europe : Paris, Londres, Bruxelles, Francfort.", tags: ["Repas", "Boissons", "Communications"] },
          { icon: 'building', title: "4 h et plus, vol de plus de 3 500 km", text: "Idem, et si le départ est reporté au lendemain : hôtel et transport entre l'aéroport et l'hôtel, quelle que soit la distance.", tags: ["Hôtel", "Transport", "Repas"] },
        ],
      },
      {
        eyebrow: "Vol annulé",
        heading: "Vol annulé : vos options",
        intro: "En cas d'annulation, la compagnie doit vous laisser le choix et vous prendre en charge.",
        variant: 'feature',
        items: [
          { icon: 'wallet', title: "Remboursement intégral", text: "Le prix du billet vous est remboursé sous sept jours, y compris la partie non utilisée d'un aller-retour." },
          { icon: 'plane', title: "Vol de remplacement", text: "Un réacheminement vers votre destination dans les meilleurs délais, ou à une date ultérieure de votre choix." },
          { icon: 'tag', title: "Indemnisation de 250 à 600 €", text: "Si vous avez été prévenu moins de 14 jours avant le départ, sauf réacheminement proche de l'horaire initial." },
          { icon: 'users', title: "Prise en charge", text: "Repas, communications et, si nécessaire, hôtel et transport pendant l'attente du vol de remplacement." },
        ],
      },
      {
        eyebrow: "Exceptions",
        heading: "Les circonstances extraordinaires",
        intro: "Dans ces cas, la compagnie doit toujours vous prendre en charge, mais elle n'a pas à verser l'indemnisation.",
        variant: 'compact',
        items: [
          { icon: 'cloud', title: "Météo", text: "Tempête, vents violents, brouillard ou orage rendant le vol dangereux." },
          { icon: 'shield', title: "Sécurité", text: "Menace à la sûreté, fermeture de l'espace aérien, instabilité politique." },
          { icon: 'alert', title: "Événements naturels", text: "Séisme, éruption volcanique ou autre événement imprévisible." },
          { icon: 'users', title: "Grève du contrôle aérien", text: "Grève externe à la compagnie, comme celles du contrôle aérien français." },
        ],
      },
    ],
    steps: {
      heading: "Comment réclamer votre indemnisation",
      intro: "Vous pouvez faire la démarche seul auprès de la compagnie, ou passer par le service de vérification ci-dessus, rémunéré seulement en cas de succès.",
      items: [
        { icon: 'clipboard', title: "Gardez vos documents", text: "Carte d'embarquement, confirmation de réservation, et toute preuve du retard ou de l'annulation : e-mails, SMS, photos du tableau des vols." },
        { icon: 'clock', title: "Notez l'heure d'arrivée", text: "Le retard se mesure à l'arrivée, à l'ouverture des portes de l'avion. Demandez aussi la raison du retard par écrit au comptoir de la compagnie." },
        { icon: 'users', title: "Réclamez à la compagnie", text: "Envoyez une réclamation écrite au service client, en citant le règlement CE 261/2004, le numéro de vol, la date et le montant demandé." },
        { icon: 'shield-check', title: "Faites valoir vos droits", text: "Sans réponse sous deux mois, ou en cas de refus, saisissez le médiateur ou l'autorité de l'aviation civile du pays de départ." },
      ],
    },
    body: `
<h2>Combien pouvez-vous toucher pour un vol de ou vers Marrakech ?</h2>
<p>Le montant ne dépend pas du prix du billet mais de la <strong>distance du vol</strong>. Pour l'aéroport de Marrakech-Ménara, cela donne :</p>
<div class="table-wrap">
<table class="data">
<thead><tr><th>Distance</th><th>Indemnisation</th><th>Exemples de lignes avec Marrakech</th></tr></thead>
<tbody>
<tr><td><strong>Jusqu'à 1 500 km</strong></td><td class="num">250 €</td><td>Madrid, Barcelone, Séville, Malaga, Valence, Lisbonne</td></tr>
<tr class="row-highlight"><td><strong>1 500 à 3 500 km</strong></td><td class="num">400 €</td><td>Paris, Lyon, Marseille, Toulouse, Bruxelles, Genève, Londres, Amsterdam, Francfort, Berlin</td></tr>
<tr><td><strong>Plus de 3 500 km</strong></td><td class="num">600 €</td><td>Stockholm, Helsinki, Riga</td></tr>
</tbody>
</table>
</div>
<p>L'indemnisation est due quand le vol arrive à destination avec <strong>trois heures de retard ou plus</strong>, ou en cas d'annulation tardive ou de refus d'embarquement. Elle peut être réduite de moitié si la compagnie vous a réacheminé avec une arrivée proche de l'horaire prévu. Les vols directs de Marrakech vers Montréal, Atlanta ou New York sont opérés par des compagnies non européennes au départ de pays hors Union : ils ne sont pas couverts.</p>

<h2>Les compagnies couvertes au départ de Marrakech</h2>
<p>Au départ de l'aéroport de Marrakech-Ménara, le règlement s'applique si la compagnie est européenne. C'est le cas de la grande majorité des vols vers l'Europe : <strong>Ryanair, easyJet, Transavia, Air France, Vueling, Iberia, Air Europa, Volotea, Wizz Air, TUI fly, Discover Airlines, Eurowings, TAP Air Portugal, Aer Lingus, Norwegian, SAS</strong> et les autres compagnies de l'Union, de Norvège et de Suisse. En revanche, <strong>Royal Air Maroc</strong> ne l'est pas au départ du Maroc, pas plus que Qatar Airways, Turkish Airlines, Saudia, Air Transat, Delta ou United. Consultez la liste des lignes et des compagnies sur notre page <a href="/destinations/">destinations depuis Marrakech</a>.</p>

<h2>Retards fréquents à Marrakech : ce qui compte</h2>
<p>Une grande partie des vols low cost arrivent à Marrakech en soirée, en fin de rotation : un premier retard dans la journée se répercute alors jusqu'au dernier vol. Quand un vol est <strong>dérouté</strong> vers Casablanca ou Agadir, c'est l'heure d'arrivée à Marrakech, votre destination finale, qui compte pour calculer le retard. Enfin, les grèves du contrôle aérien français touchent souvent les vols venant du Royaume-Uni, de Belgique ou des Pays-Bas qui survolent la France : elles sont considérées comme extraordinaires.</p>
<div class="callout">
<span class="callout-label">Bon à savoir</span>
<p>Une panne technique de l'avion n'est en général <strong>pas</strong> une circonstance extraordinaire, et une grève du personnel de la compagnie elle-même non plus : dans ces deux cas, vous conservez votre droit à indemnisation.</p>
</div>

<h2>Combien de temps pour réclamer ?</h2>
<p>Le règlement ne fixe pas de délai : c'est le droit du pays où vous agissez qui s'applique. Il est par exemple de <strong>5 ans en France et en Espagne</strong>, 3 ans en Allemagne, 2 ans aux Pays-Bas, 1 an en Belgique et 6 ans au Royaume-Uni. N'attendez pas pour autant : les preuves se perdent vite. Pour suivre un vol en temps réel, consultez les <a href="/arrivees/">arrivées</a> et les <a href="/departs/">départs</a> de l'aéroport de Marrakech.</p>
`,
    faqHeading: "Indemnisation vol à l'aéroport de Marrakech : questions fréquentes",
    faqs: [
      { q: "Le règlement CE 261/2004 s'applique-t-il aux vols de Marrakech ?", a: "Oui pour tous les vols au départ de l'Union européenne vers Marrakech, quelle que soit la compagnie. Au départ de Marrakech, seulement si la compagnie est européenne, comme Ryanair, easyJet, Transavia ou Air France. Royal Air Maroc n'est pas couverte au départ du Maroc." },
      { q: "Combien puis-je toucher pour un vol Paris–Marrakech retardé ?", a: "400 € par passager, car le vol fait environ 2 100 km. Il faut que le retard à l'arrivée dépasse trois heures et qu'il ne soit pas dû à une circonstance extraordinaire." },
      { q: "Et pour un vol Madrid–Marrakech ou Séville–Marrakech ?", a: "250 € par passager, car ces vols font moins de 1 500 km (environ 1 050 km pour Madrid et 680 km pour Séville), toujours pour un retard de plus de trois heures à l'arrivée." },
      { q: "Mon vol Royal Air Maroc au départ de Marrakech est retardé : ai-je droit à une indemnisation ?", a: "Pas au titre du règlement européen, car la compagnie n'est pas européenne et le vol part hors de l'Union. Vous pouvez néanmoins réclamer selon les conditions de transport de la compagnie et la convention de Montréal pour vos frais réels." },
      { q: "Mon vol a été dérouté vers Casablanca ou Agadir : que se passe-t-il ?", a: "C'est l'heure d'arrivée à Marrakech, votre destination finale, qui compte. Si vous y arrivez avec plus de trois heures de retard et que la cause n'est pas extraordinaire, l'indemnisation reste due." },
      { q: "Quand la compagnie n'est-elle pas obligée de payer ?", a: "En cas de circonstances extraordinaires : météo dangereuse, menace à la sécurité, catastrophe naturelle, grève du contrôle aérien. Une panne technique ou une grève du personnel de la compagnie ne suffisent en général pas à l'exonérer." },
      { q: "Quel est le délai pour réclamer une indemnisation ?", a: "Il dépend du pays où vous agissez : 5 ans en France et en Espagne, 3 ans en Allemagne, 2 ans aux Pays-Bas, 1 an en Belgique, 6 ans au Royaume-Uni. Conservez vos documents et réclamez au plus vite." },
      { q: "Mon vol pour Marrakech est annulé : quels sont mes droits ?", a: "La compagnie doit vous proposer le remboursement sous sept jours ou un réacheminement, et vous prendre en charge pendant l'attente. Si elle vous a prévenu moins de 14 jours avant le départ, vous pouvez aussi réclamer 250 à 600 € selon la distance." },
    ],
    cta: {
      heading: "Arrivé en retard à Marrakech ? Votre chauffeur vous attend",
      text: "Nos chauffeurs suivent votre vol et attendent sans supplément en cas de retard, même au milieu de la nuit, puis vous déposent à la porte de médina la plus proche de votre riad.",
      label: "Réserver un transfert",
    },
  },
} satisfies PageContent;
