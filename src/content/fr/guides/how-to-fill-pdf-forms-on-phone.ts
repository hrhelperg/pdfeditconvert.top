import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-phone",
  h1: "Comment remplir un formulaire PDF depuis son téléphone",
  description:
    "Remplissez un formulaire PDF sur iPhone ou Android, qu’il ait de vrais champs ou qu’il s’agisse d’une simple numérisation. Saisir, ajouter du texte et signer au même endroit.",
  updated: "2026-05-23",
  intro: [
    "Les formulaires PDF existent en deux versions, et savoir laquelle vous avez détermine comment le remplir. Certains sont interactifs — vous touchez un champ et tapez, avec des cases nettes intégrées par le concepteur du formulaire. D’autres sont non interactifs : un formulaire numérisé ou imprimé puis transformé en PDF, sans aucun champ, où vous devez poser votre propre texte par-dessus. Les deux se remplissent parfaitement sur un téléphone ; ils demandent juste une manipulation légèrement différente.",
    "Ce guide couvre le remplissage des deux types sur iPhone et Android avec l’application PDF Editor, qui détecte les champs interactifs quand ils existent et laisse placer du texte et des coches n’importe où quand ce n’est pas le cas. De nombreux formulaires demandent aussi une signature, que la même application gère dans le même parcours.",
    "Le résultat est un formulaire rempli que vous pouvez renvoyer directement — sans impression, sans numérisation, sans chercher une imprimante qui fonctionne au pire moment.",
  ],
  steps: [
    {
      title: "Ouvrez le formulaire dans l’application PDF Editor",
      body: "Importez le PDF depuis Fichiers, Mail, Drive ou n’importe quel menu de partage. L’application vérifie si le formulaire a des champs interactifs.",
    },
    {
      title: "S’il a des champs, touchez et tapez",
      body: "Les formulaires interactifs permettent de toucher directement chaque champ et de taper. Passez d’un champ à l’autre par tabulation ou défilement, et touchez les cases à cocher pour les cocher.",
    },
    {
      title: "S’il est non interactif, ajoutez votre propre texte",
      body: "Pour un formulaire numérisé ou sans champs, utilisez l’outil texte pour déposer du texte à l’endroit de chaque réponse. Ajustez la taille et la position pour qu’il se pose bien sur la ligne.",
    },
    {
      title: "Gérez les cases à cocher et les dates",
      body: "Placez une coche ou une croix sur les cases, et ajoutez la date là où c’est demandé. Sur les formulaires non interactifs, ce sont simplement des objets texte ou des marques que vous positionnez vous-même.",
    },
    {
      title: "Signez si le formulaire le demande",
      body: "Utilisez l’outil Signer pour ajouter votre signature enregistrée dans la zone de signature — le même parcours, que le formulaire soit interactif ou non interactif.",
    },
    {
      title: "Exportez et envoyez",
      body: "Enregistrez une copie remplie sous un nouveau nom et renvoyez-la par e-mail ou n’importe quelle application. Gardez l’original vierge au cas où vous devriez le remplir à nouveau.",
    },
  ],
  tips: [
    "Vérifiez d’abord si les champs sont interactifs — touchez l’endroit d’une réponse. Si un curseur apparaît, tapez ; s’il ne se passe rien, c’est un formulaire non interactif et vous ajoutez du texte par-dessus.",
    "Sur les formulaires non interactifs, zoomez avant de placer le texte pour qu’il se pose précisément sur la ligne plutôt que de flotter au-dessus ou en dessous.",
    "Gardez une copie vierge des formulaires que vous remplissez régulièrement. Remplir un original tout neuf est plus propre que de modifier les réponses de la dernière fois.",
    "Remplissez et signez dans la même session pour éviter d’exporter, rouvrir et tout replacer — l’application le fait en une seule fois.",
    "Vérifiez les champs obligatoires avant l’envoi. Un formulaire renvoyé pour une date manquante fait perdre plus de temps que la vérification elle-même.",
  ],
  mobileNote:
    "Remplir des formulaires est l’une des tâches PDF les plus naturellement adaptées au téléphone — le formulaire arrive par e-mail et repart de la même façon. L’application PDF Editor remplit les formulaires interactifs et non interactifs, ajoute votre signature et exporte une copie complète, le tout sur l’appareil sans rien envoyer sur un serveur.",
  faq: [
    {
      q: "Comment savoir si un formulaire PDF est interactif ?",
      a: "Touchez l’endroit où une réponse devrait aller. Si un curseur de texte apparaît et que vous pouvez taper, il a des champs interactifs. S’il ne se passe rien, c’est un formulaire non interactif et vous ajoutez du texte par-dessus.",
    },
    {
      q: "Puis-je remplir un formulaire numérisé sans champs ?",
      a: "Oui. Utilisez l’outil texte pour placer vos réponses directement sur la page, et ajoutez des coches là où c’est nécessaire. L’application les traite comme des objets que vous positionnez vous-même.",
    },
    {
      q: "Puis-je signer le formulaire dans la même application ?",
      a: "Oui. L’outil Signer ajoute votre signature enregistrée dans la même session, donc vous remplissez et signez sans changer d’application.",
    },
    {
      q: "Le formulaire rempli est-il envoyé quelque part ?",
      a: "Non. L’application PDF Editor remplit les formulaires sur votre appareil, donc les informations personnelles qu’ils contiennent restent privées.",
    },
    {
      q: "Puis-je réutiliser un formulaire que je remplis souvent ?",
      a: "Gardez l’original vierge et remplissez une copie neuve à chaque fois. C’est plus propre que de modifier une version déjà complétée.",
    },
  ],
  related: [
    { label: "PDF Editor — modifier et remplir sur mobile", path: "/pdf-editor" },
    { label: "Comment signer un PDF sur son téléphone", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "Comment annoter un PDF sur mobile", path: "/guides/how-to-annotate-pdf-on-mobile" },
    { label: "Comment modifier un PDF sur iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
