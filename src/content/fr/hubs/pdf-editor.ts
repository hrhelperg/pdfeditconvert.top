import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-editor",
  hero: {
    eyebrow: "Éditeur PDF",
    h1: "Éditeur PDF — modifier le texte, les images et les pages sur mobile",
    highlight: "sur mobile",
    lead: "Corrigez le texte, remplacez une image, réorganisez les pages et signez vos documents — directement sur iPhone ou Android. PDF Editor transforme votre téléphone en véritable éditeur de documents, et non plus en simple visionneuse.",
    primaryCta: { label: "Ouvrir l’application", href: SITE.app.appStore },
  },
  problem: {
    heading: "Pourquoi modifier un PDF a toujours été un casse-tête",
    paragraphs: [
      "Le PDF a été conçu pour s’afficher à l’identique partout — ce qui explique justement pourquoi il est si difficile à modifier. La plupart des applications mobiles permettent seulement de le consulter ou de l’annoter. Dès qu’il faut corriger une faute de frappe, remplacer un nom ou déplacer une page, on vous renvoie vers un ordinateur ou l’on vous demande d’envoyer votre fichier sur un site inconnu.",
      "Ces sites où l’on envoie son fichier « en espérant que tout se passe bien » posent un vrai problème de confidentialité. Ils conservent le document pendant des heures, sont souvent lents, et rien ne garantit ce qu’ils font de contrats, de factures ou de pièces d’identité sensibles. Résultat : la plupart des gens font une capture d’écran de la partie à corriger, la modifient comme une image, puis envoient par e-mail une version moins soignée que l’original.",
      "Un éditeur mobile natif règle ce problème sans compromis. Les modifications se font directement sur l’appareil. La mise en page d’origine est conservée. Vous pouvez envoyer le résultat par e-mail une minute après avoir commencé — sans rien envoyer sur le serveur d’un inconnu.",
    ],
  },
  features: {
    heading: "Ce que vous pouvez vraiment faire",
    items: [
      {
        icon: "Type",
        title: "Modifier le texte en place",
        body: "Corrigez une faute de frappe, remplacez un nom, changez une date — sans casser la mise en page. Fonctionne sur les PDF contenant du texte.",
      },
      {
        icon: "ImagePlus",
        title: "Insérer et remplacer des images",
        body: "Ajoutez un nouveau logo ou une photo. Redimensionnez et repositionnez sans quitter la page.",
      },
      {
        icon: "Move",
        title: "Réorganiser les pages",
        body: "Faites glisser les vignettes pour les réordonner. Supprimez des pages, dupliquez-les ou insérez une nouvelle page vierge.",
      },
      {
        icon: "Pencil",
        title: "Signatures et paraphes",
        body: "Ajoutez une vraie signature manuscrite ou une signature saisie au clavier. Placez-la où vous voulez d’un simple toucher.",
      },
      {
        icon: "Highlighter",
        title: "Annotations et surlignage",
        body: "Surlignez, soulignez, barrez. Ajoutez des notes à main levée ou des commentaires.",
      },
      {
        icon: "FileText",
        title: "Remplir des formulaires",
        body: "Touchez les champs pour les remplir. Enregistrez le formulaire complété sous forme de nouveau PDF.",
      },
    ],
  },
  steps: {
    heading: "Comment modifier un PDF depuis votre téléphone",
    items: [
      {
        title: "Ouvrez l’application PDF Editor",
        body: "Lancez l’application depuis votre écran d’accueil. Aucun compte n’est nécessaire pour commencer.",
      },
      {
        title: "Choisissez le PDF à modifier",
        body: "Importez-le depuis Fichiers, iCloud Drive, Google Drive ou votre messagerie. Vous pouvez aussi toucher un PDF n’importe où et choisir PDF Editor comme application d’ouverture.",
      },
      {
        title: "Touchez l’élément à modifier",
        body: "Touchez un paragraphe pour modifier le texte, une image pour la remplacer, ou la vignette d’une page pour la réorganiser.",
      },
      {
        title: "Apportez vos modifications",
        body: "Les modifications s’affichent en temps réel sur la page. Pincez pour zoomer et gagner en précision. Annuler et rétablir fonctionnent comme prévu.",
      },
      {
        title: "Enregistrez le résultat",
        body: "Enregistrez par-dessus l’original, sous forme de nouvelle copie, ou partagez directement par Mail, AirDrop ou toute application de messagerie.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Modifier un PDF en déplacement",
    body: "La plupart des modifications de PDF surviennent au pire moment possible — cinq minutes avant une réunion, dans le train, entre deux cours. Un éditeur pensé pour le mobile permet de corriger ce nom mal orthographié sur un contrat en marchant vers le bureau, ou d’apposer votre signature sur un devis pendant une pause café. Pas d’ordinateur portable, pas de bureau, pas besoin d’attendre d’être chez vous.",
  },
  faq: [
    {
      q: "L’application PDF Editor est-elle gratuite ?",
      a: "Oui. Les fonctions d’édition principales — texte, images, réorganisation des pages, signatures et export — sont gratuites. Certaines fonctionnalités avancées sont débloquées avec la version Pro.",
    },
    {
      q: "Fonctionne-t-elle hors connexion ?",
      a: "Oui. La modification se fait entièrement sur l’appareil. Une connexion n’est nécessaire que pour récupérer des fichiers depuis un service cloud ou les partager via des services en ligne.",
    },
    {
      q: "Puis-je modifier des PDF numérisés ?",
      a: "Un PDF numérisé est techniquement une image. Vous pouvez tout de même l’annoter, le signer et réorganiser ses pages. Modifier le texte lui-même nécessite d’abord un OCR, que l’application peut exécuter sur la plupart des documents.",
    },
    {
      q: "Y a-t-il une limite de taille de fichier ?",
      a: "Il n’existe aucune limite artificielle. Les très gros PDF (plusieurs centaines de Mo avec des graphismes complexes) peuvent être plus lents sur les téléphones anciens, mais l’application est conçue pour traiter des documents réels.",
    },
    {
      q: "Mes modifications risquent-elles de casser la mise en page d’origine ?",
      a: "Non. Les modifications se font directement sur la page. Les polices, les marges et la mise en forme existante restent intactes sur les PDF contenant du texte.",
    },
    {
      q: "Puis-je exporter vers Word ?",
      a: "Oui. Vous pouvez convertir le PDF modifié vers Word ou d’autres formats depuis la même application.",
    },
  ],
  related: [
    {
      label: "Comment modifier un PDF sur iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    {
      label: "Comment modifier un PDF sur Android",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "Signer un PDF depuis son téléphone", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Modifiez vos PDF depuis votre téléphone en quelques secondes.",
    sub: "Gratuit sur iOS et Android. Aucun compte requis pour commencer.",
  },
};

export default content;
