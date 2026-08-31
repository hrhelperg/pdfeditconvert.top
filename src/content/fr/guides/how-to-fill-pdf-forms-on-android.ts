import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-android",
  h1: "Comment remplir un formulaire PDF sur Android (sur n’importe quel téléphone)",
  description:
    "Remplissez un formulaire PDF interactif ou non sur Android. Pourquoi le lecteur intégré refuse souvent la saisie, la voie fiable par application, et l’influence des différences entre constructeurs.",
  updated: "2026-06-01",
  intro: [
    "Android n’a pas de remplisseur de formulaires PDF intégré unique, ce qui est à l’origine de la plupart des confusions. Le lecteur PDF par défaut sur beaucoup de téléphones — souvent intégré à Google Drive ou à Fichiers — affiche bien le formulaire mais ne permet pas toujours de saisir du texte dans ses champs. Les gens croient alors le formulaire cassé, alors qu’ils ont simplement besoin d’une application qui gère correctement les champs de formulaire.",
    "La voie fiable sur n’importe quel téléphone Android est une application PDF dédiée qui détecte les champs interactifs et vous laisse placer du texte sur les formulaires non interactifs. Comme le matériel et les logiciels Android varient énormément d’une marque à l’autre, les options intégrées exactes diffèrent d’un téléphone à l’autre — mais une vraie application PDF se comporte de la même façon partout, ce qui est exactement ce qu’il faut pour les formulaires.",
    "Ce guide explique pourquoi le lecteur par défaut est insuffisant, décrit le flux de travail fiable avec une application, et couvre les détails propres à Android — partage via le menu de partage système, extraction des formulaires depuis Gmail et Drive — qui rendent le remplissage rapide.",
  ],
  steps: [
    {
      title: "Sortez le formulaire du lecteur basique",
      body: "Si un formulaire ouvert depuis Gmail ou Drive ne vous laisse pas saisir de texte, c’est que ce lecteur ignore ses champs. Téléchargez plutôt le fichier et ouvrez-le dans une application PDF dédiée — c’est là que les champs prennent vie.",
    },
    {
      title: "Ouvrez-le dans l’application PDF Editor",
      body: "Importez le PDF depuis Fichiers, Drive, ou le menu de partage. L’application recherche les champs interactifs et les rend utilisables au toucher, pour que vous puissiez saisir du texte, cocher des cases et utiliser les listes déroulantes.",
    },
    {
      title: "Remplissez les formulaires non interactifs en ajoutant du texte",
      body: "Si le formulaire n’a aucun champ, utilisez l’outil texte pour placer vos réponses directement sur chaque ligne. Zoomez d’abord pour que le texte se pose précisément — les claviers Android combinés à de petits champs demandent un peu de soin.",
    },
    {
      title: "Ajoutez des coches, des dates et une signature",
      body: "Cochez les cases interactives ou placez une coche sur celles d’un formulaire non interactif, saisissez les dates dans le format affiché, et ajoutez votre signature dans la zone de signature avec l’outil de signature.",
    },
    {
      title: "Exportez et renvoyez",
      body: "Enregistrez une copie remplie et envoyez-la via le menu de partage Android — Gmail, Drive, WhatsApp, peu importe. Aplatissez-la d’abord si vous voulez verrouiller les réponses pour qu’elles ne puissent pas être effacées.",
    },
  ],
  tips: [
    "Si vous n’arrivez pas à saisir de texte dans un formulaire sur Android, le lecteur basique est en général le coupable — ouvrez le fichier dans une vraie application PDF.",
    "Comme les marques Android proposent des logiciels différents, ne comptez pas sur la présence d’un remplisseur intégré ; une application dédiée est le choix cohérent.",
    "Zoomez sur les formulaires non interactifs avant de placer du texte, pour que les petits champs reçoivent une réponse à la bonne taille.",
    "Gardez le formulaire vierge dans un dossier connu pour pouvoir remplir un nouvel exemplaire propre plutôt que de modifier un ancien.",
    "Le comportement d’un formulaire varie selon l’application et l’appareil, donc un export aplati est le moyen le plus sûr de garantir que les réponses s’affichent chez le destinataire.",
  ],
  mobileNote:
    "L’application PDF Editor pour Android détecte les champs interactifs et vous laisse placer du texte sur les formulaires non interactifs, puis signer et exporter — avec le même fonctionnement quelle que soit la marque du téléphone. Tout se passe sur l’appareil, si bien que les informations que vous saisissez sur le formulaire ne sont envoyées sur aucun serveur.",
  faq: [
    {
      q: "Pourquoi ne puis-je pas saisir de texte dans un formulaire PDF sur Android ?",
      a: "Le lecteur par défaut — souvent celui de Google Drive ou l’aperçu Fichiers de votre téléphone — ignore fréquemment les champs de formulaire. Téléchargez le formulaire et ouvrez-le dans une application PDF dédiée, et les champs deviennent utilisables. Les formulaires non interactifs demandent quant à eux du texte placé par-dessus.",
    },
    {
      q: "Android dispose-t-il d’un remplisseur de formulaires PDF intégré ?",
      a: "Pas de façon universelle. Ce qui est disponible dépend de la marque et du logiciel de votre téléphone. Pour un résultat cohérent sur n’importe quel appareil Android, utilisez une application PDF dédiée.",
    },
    {
      q: "Comment remplir un formulaire numérisé sur Android ?",
      a: "Un formulaire numérisé est non interactif : ajoutez donc votre propre texte et vos coches sur la page avec un éditeur de PDF, puis exportez. Il n’y a aucun champ à toucher.",
    },
    {
      q: "Remplir un formulaire PDF sur Android est-il confidentiel ?",
      a: "Avec l’application PDF Editor, le remplissage se fait sur l’appareil, si bien que vos informations ne sont envoyées nulle part. Les outils de navigateur qui envoient votre fichier le traitent quant à eux sur un serveur.",
    },
    {
      q: "Comment renvoyer le formulaire rempli ?",
      a: "Exportez une copie remplie et utilisez le menu de partage Android pour l’envoyer par e-mail, via Drive, ou par une application de messagerie. Aplatissez-la d’abord pour verrouiller les réponses.",
    },
  ],
  related: [
    {
      label: "Comment remplir un formulaire PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Comment remplir un formulaire PDF sur iPhone",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "Comment signer un PDF sur Android",
      path: "/guides/how-to-sign-pdf-on-android",
    },
    {
      label: "Quelle application de formulaires PDF choisir sur Android",
      path: "/guides/best-pdf-form-app-for-android",
    },
    { label: "La méthode mobile pour les formulaires PDF", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "Formulaires PDF", path: "/pdf-forms" },
};

export default content;
