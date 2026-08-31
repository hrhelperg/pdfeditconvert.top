import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-iphone",
  h1: "Comment remplir un formulaire PDF sur iPhone (Fichiers, Annotation, applications)",
  description:
    "Remplissez un formulaire PDF interactif ou non sur iPhone, avec Fichiers et Annotation ou avec une application dédiée. Les étapes propres à iOS, le passage par le menu de partage, et les limites d’Annotation.",
  updated: "2026-06-01",
  intro: [
    "L’iPhone est vraiment efficace avec les formulaires PDF une fois qu’on connaît les deux voies proposées par iOS. La voie intégrée passe par l’application Fichiers et l’outil Annotation, qui peuvent remplir des formulaires non interactifs et ajouter une signature en cas de besoin. La voie la plus performante est une application PDF dédiée qui détecte les champs interactifs, y saisit correctement du texte, et exporte une copie remplie et propre — nettement préférable dès qu’un formulaire dépasse deux ou trois lignes.",
    "Ce sont les détails propres à iOS qui font trébucher les gens : un formulaire ouvert depuis l’aperçu de Mail n’affiche souvent pas ses champs, le menu de partage est le moyen de faire passer un formulaire d’une application à une autre, et Annotation traite tout comme une page non interactive même quand de vrais champs existent. Connaître ces particularités fait du remplissage de formulaire sur iPhone une affaire de 30 secondes.",
    "Ce guide couvre les deux voies — l’approche native avec Fichiers et Annotation, limites honnêtes comprises, et l’application PDF Editor pour les formulaires interactifs — afin que vous puissiez choisir celle qui convient au formulaire que vous avez sous les yeux.",
  ],
  steps: [
    {
      title: "Sortez le formulaire de l’aperçu de Mail",
      body: "Si un formulaire est arrivé par e-mail, touchez d’abord pour l’enregistrer dans Fichiers, ou ouvrez-le via le menu de partage dans une vraie application PDF. L’aperçu rapide de Mail ignore souvent les champs de formulaire, c’est pourquoi la saisie y semble impossible.",
    },
    {
      title: "Essayez Fichiers et Annotation pour les formulaires non interactifs",
      body: "Ouvrez le PDF dans Fichiers et touchez le stylo Annotation. Vous pouvez ajouter des zones de texte et une signature n’importe où sur la page — parfait pour les formulaires non interactifs et les remplissages rapides, même si Annotation n’exploite pas les vrais champs interactifs.",
    },
    {
      title: "Utilisez une application PDF pour les champs interactifs",
      body: "Pour les formulaires avec de vrais champs, ouvrez le fichier dans l’application PDF Editor. Elle détecte les champs pour que vous puissiez toucher et saisir, cocher des cases et passer proprement d’un champ à l’autre.",
    },
    {
      title: "Gérez les formulaires non interactifs en plaçant du texte",
      body: "Quand un formulaire n’a aucun champ, utilisez l’outil texte de l’application pour poser vos réponses exactement sur chaque ligne. Zoomez du bout des doigts pour que le texte se pose précisément plutôt que de flotter au-dessus ou en dessous.",
    },
    {
      title: "Signez et exportez via le menu de partage",
      body: "Ajoutez votre signature dans la zone de signature, puis exportez une copie remplie et envoyez-la directement depuis le menu de partage — vers Mail, Messages, ou vers celui qui vous l’a envoyée.",
    },
  ],
  tips: [
    "Si vous n’arrivez pas à saisir de texte dans un formulaire sur iPhone, vous êtes presque toujours dans l’aperçu de Mail — enregistrez d’abord dans Fichiers ou ouvrez dans une application PDF.",
    "Annotation est excellent pour une signature rapide ou un formulaire non interactif, mais il ne remplit pas les vrais champs interactifs comme le fait une application dédiée.",
    "Zoomez avant de placer du texte sur un formulaire non interactif ; les pouces manquent de précision, et un texte zoomé se pose bien sur la ligne.",
    "Gardez l’original vierge dans Fichiers pour pouvoir remplir un exemplaire neuf la prochaine fois plutôt que de modifier un ancien.",
    "iOS gère bien les fichiers HEIC et PDF, mais le comportement des formulaires varie encore d’une application à l’autre — une application PDF dédiée est la plus cohérente.",
  ],
  mobileNote:
    "L’application PDF Editor pour iPhone détecte les champs interactifs là où ils existent et vous laisse placer du texte et des coches sur les formulaires non interactifs là où ils n’existent pas, puis signer et exporter — tout se passe sur l’appareil, si bien que les informations personnelles du formulaire ne sont envoyées sur aucun serveur. C’est la voie qui évite les impasses de l’aperçu Mail.",
  faq: [
    {
      q: "Pourquoi ne puis-je pas saisir de texte dans un formulaire PDF sur mon iPhone ?",
      a: "Vous le consultez très probablement dans l’aperçu de Mail, qui ignore les champs de formulaire. Enregistrez le fichier dans Fichiers ou ouvrez-le dans une application PDF dédiée, et les champs deviennent actifs. Les formulaires non interactifs demandent quant à eux du texte placé par-dessus.",
    },
    {
      q: "Puis-je remplir un formulaire PDF avec l’outil Annotation intégré ?",
      a: "Oui, pour les formulaires non interactifs et les remplissages rapides — Annotation ajoute du texte et une signature n’importe où sur la page. Mais il traite le formulaire comme une image non interactive, donc il n’exploite pas les vrais champs interactifs. Utilisez une application PDF pour ceux-ci.",
    },
    {
      q: "Comment remplir un formulaire numérisé sur iPhone ?",
      a: "Un formulaire numérisé est non interactif : placez donc votre propre texte et vos coches sur la page avec Annotation ou l’application PDF Editor, puis exportez. Il n’y a aucun champ où saisir directement du texte.",
    },
    {
      q: "Remplir un formulaire sur iPhone est-il confidentiel ?",
      a: "Avec l’application PDF Editor, le formulaire est rempli sur l’appareil, si bien que les informations saisies ne sont envoyées nulle part. Annotation est également local. Les outils de remplissage en ligne peuvent envoyer le fichier sur un serveur.",
    },
    {
      q: "Comment renvoyer le formulaire rempli ?",
      a: "Exportez une copie remplie et utilisez le menu de partage d’iOS pour l’envoyer par Mail, Messages, ou n’importe quelle application. Aplatissez-la d’abord si vous voulez verrouiller les réponses.",
    },
  ],
  related: [
    {
      label: "Comment remplir un formulaire PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Comment remplir un formulaire PDF sur Android",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "Comment signer un PDF sur iPhone",
      path: "/guides/how-to-sign-pdf-on-iphone",
    },
    {
      label: "Quelle application de formulaires PDF choisir sur iPhone",
      path: "/guides/best-pdf-form-app-for-iphone",
    },
    { label: "La méthode mobile pour les formulaires PDF", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
