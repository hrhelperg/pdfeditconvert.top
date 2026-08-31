import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-forms",
  hero: {
    eyebrow: "Formulaires PDF",
    h1: "Formulaires PDF — remplir, signer et gérer un PDF à compléter",
    highlight: "Formulaires PDF",
    lead: "Déclarations fiscales, dossiers de candidature, fiches d’admission, formulaires de consentement — la plupart arrivent en PDF. Découvrez comment les formulaires PDF fonctionnent vraiment, comment remplir les formulaires interactifs comme les formulaires non interactifs, et comment résoudre les problèmes les plus courants, sans imprimer une seule page.",
    primaryCta: { label: "Ouvrir l’application", href: SITE.app.appStore },
  },
  problem: {
    heading: "Pourquoi les formulaires PDF déroutent autant",
    paragraphs: [
      "Un formulaire PDF a l’air d’être une seule chose, mais il y en a en réalité deux sortes. Certains sont interactifs : leur créateur y a inséré de vrais champs sur lesquels on peut toucher et taper. D’autres sont non interactifs : un formulaire numérisé, ou imprimé puis enregistré, sans le moindre champ, où il faut poser son propre texte par-dessus. Les deux se comportent de façon totalement différente, et la plupart des frustrations viennent du fait qu’on ne sait pas lequel des deux on a sous les yeux.",
      "À cela s’ajoute que les formulaires posent des problèmes qu’un PDF ordinaire ne pose pas. Les champs disparaissent dans le mauvais lecteur, les réponses saisies refusent de s’enregistrer, le formulaire s’ouvre en lecture seule, ou les valeurs saisies n’apparaissent pas à l’impression. Rien de tout cela ne signifie que le formulaire est cassé — ce sont des problèmes prévisibles, avec des solutions prévisibles, une fois qu’on comprend ce qui se passe en coulisses.",
      "Ce centre de contenu réunit tout au même endroit : les bases du fonctionnement des formulaires, les étapes pour les remplir sur ordinateur ou sur téléphone, les méthodes professionnelles pour collecter des informations auprès de clients, et un ensemble de solutions pour quand un formulaire ne coopère pas. L’apparence et le comportement d’un formulaire peuvent varier d’un lecteur de PDF à l’autre : les guides restent donc honnêtes sur ce qui fonctionne partout et ce qui dépend de l’outil utilisé pour ouvrir le fichier.",
    ],
  },
  features: {
    heading: "Ce que vous pouvez faire avec les formulaires PDF",
    items: [
      {
        icon: "FileText",
        title: "Remplir des champs interactifs",
        body: "Touchez un vrai champ de formulaire et tapez. Passez d’un champ à l’autre, cochez des cases et choisissez dans des listes déroulantes, là où le créateur du fichier les a prévues.",
      },
      {
        icon: "TextCursorInput",
        title: "Compléter des formulaires non interactifs",
        body: "Pas de champs ? Placez votre propre texte et vos coches n’importe où sur la page — exactement là où chaque réponse doit figurer sur un formulaire numérisé ou imprimé.",
      },
      {
        icon: "PenLine",
        title: "Signer là où c’est nécessaire",
        body: "Ajoutez une signature saisie ou manuscrite dans la zone de signature, que le champ soit interactif ou qu’il s’agisse simplement d’une ligne sur un formulaire non interactif.",
      },
      {
        icon: "Save",
        title: "Enregistrer une copie complétée",
        body: "Exportez une version finalisée à renvoyer directement, et conservez l’original vierge pour la prochaine fois.",
      },
      {
        icon: "Lock",
        title: "Aplatir avant l’envoi",
        body: "Verrouillez vos réponses sur la page pour qu’elles ne puissent pas être modifiées ni effacées par mégarde dans le lecteur du destinataire.",
      },
      {
        icon: "Smartphone",
        title: "Tout faire depuis un téléphone",
        body: "Le formulaire arrive par e-mail et repart par le même chemin — le remplir et le signer depuis un téléphone est l’une des tâches PDF les plus authentiquement mobiles qui soient.",
      },
    ],
  },
  steps: {
    heading: "Remplir un formulaire PDF, du début à la fin",
    items: [
      {
        title: "Ouvrez le formulaire et repérez son type",
        body: "Ouvrez le PDF et touchez l’endroit où une réponse devrait figurer. Si un curseur apparaît, le formulaire a des champs interactifs. Si rien ne se passe, il est non interactif : vous ajouterez le texte par-dessus.",
      },
      {
        title: "Remplissez les champs",
        body: "Pour les formulaires interactifs, touchez et tapez, en passant d’un champ à l’autre. Pour les formulaires non interactifs, utilisez l’outil texte pour placer les réponses avec précision sur chaque ligne.",
      },
      {
        title: "Traitez les cases, les dates et les signatures",
        body: "Cochez les cases ou placez une coche, ajoutez la date là où elle est exigée, et utilisez l’outil de signature pour toute zone de signature.",
      },
      {
        title: "Vérifiez chaque champ obligatoire",
        body: "Repassez sur le formulaire à la recherche de champs vides. Un formulaire refusé pour une seule date manquante coûte plus de temps que la vérification n’en aurait pris.",
      },
      {
        title: "Enregistrez, aplatissez et envoyez",
        body: "Exportez une copie complétée, aplatissez-la pour verrouiller les réponses, et renvoyez-la par e-mail ou par envoi en ligne. Conservez l’original vierge.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Les formulaires sur votre téléphone",
    body: "Un formulaire arrive dans votre boîte de réception alors que vous êtes loin de votre bureau. Avec un téléphone, vous pouvez l’ouvrir, remplir les champs ou ajouter du texte sur un scan non interactif, le signer et le renvoyer avant même d’avoir trouvé une chaise — sans imprimante, sans scanner, sans attendre d’être chez vous. L’application PDF Editor détecte les champs interactifs quand ils existent, vous laisse placer du texte et des coches n’importe où quand ce n’est pas le cas, et garde les informations personnelles du formulaire sur votre appareil.",
  },
  faq: [
    {
      q: "Quelle est la différence entre un formulaire PDF interactif et un formulaire non interactif ?",
      a: "Un formulaire interactif possède des champs créés par son concepteur — touchez-en un et un curseur apparaît pour taper. Un formulaire non interactif est essentiellement l’image d’un formulaire, sans aucun champ : vous ajoutez donc votre propre texte par-dessus. Les deux peuvent être remplis ; ils demandent simplement un traitement légèrement différent.",
    },
    {
      q: "Dois-je imprimer un formulaire PDF pour le remplir ?",
      a: "Presque jamais. Les formulaires interactifs comme les non interactifs peuvent être complétés numériquement — tapez dans les champs ou placez le texte sur la page, puis signez et exportez. L’impression n’a d’intérêt que si le destinataire exige spécifiquement une signature manuscrite sur papier.",
    },
    {
      q: "Pourquoi ne puis-je pas taper dans certains formulaires PDF ?",
      a: "C’est généralement l’une de ces trois raisons : le formulaire est non interactif (aucun champ où taper), votre lecteur ne prend pas en charge les champs de formulaire, ou le fichier est en lecture seule ou protégé. Les guides de dépannage de ce centre passent en revue chaque cause.",
    },
    {
      q: "Le formulaire que je remplis apparaîtra-t-il de la même façon pour la personne qui le reçoit ?",
      a: "La plupart du temps, oui — mais pas toujours : l’apparence d’un formulaire peut varier d’un lecteur de PDF à l’autre. Aplatir votre formulaire complété avant de l’envoyer verrouille les réponses sur la page pour qu’elles s’affichent de la même façon partout où il est ouvert.",
    },
    {
      q: "Remplir un formulaire en ligne est-il confidentiel ?",
      a: "Cela dépend de l’outil. L’application PDF Editor remplit les formulaires directement sur votre appareil : les informations personnelles que vous saisissez ne sont envoyées nulle part. Les outils basés navigateur qui s’exécutent localement conservent eux aussi le fichier sur votre machine.",
    },
  ],
  related: [
    { label: "Qu’est-ce qu’un formulaire PDF ?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Comment remplir un formulaire PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Comment créer un PDF à remplir",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    {
      label: "Formulaire PDF qui ne fonctionne pas ? Commencez ici",
      path: "/guides/pdf-form-not-working",
    },
    { label: "PDF Editor — remplir et signer sur mobile", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Remplissez et signez vos formulaires PDF depuis votre téléphone.",
    sub: "Gratuit sur iOS et Android. Rien à envoyer sur un serveur.",
  },
};

export default content;
