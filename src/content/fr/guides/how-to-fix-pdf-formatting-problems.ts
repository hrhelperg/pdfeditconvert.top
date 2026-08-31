import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-formatting-problems",
  h1: "Comment corriger la mise en page d’un PDF (retours à la ligne, marges, espacements)",
  description:
    "Quand la mise en page d’un PDF part de travers — texte qui se replace, marges décalées, espacements incohérents — la correction se fait dans le document source, pas dans le PDF. La méthode la plus propre pour obtenir un bon export.",
  updated: "2026-05-29",
  intro: [
    "Une mauvaise mise en page PDF remonte presque toujours au moment de l’export. Le PDF lui-même ne replace rien — il verrouille la page exactement telle qu’elle était au moment de l’enregistrement. Donc si l’espacement est faux, les marges sont décalées, ou le tableau se casse d’une page à l’autre, le fichier source produisait déjà ce résultat.",
    "La correction, presque toujours, consiste à retourner à la source — Word, Pages, Google Docs, outil de design — ajuster la mise en page, et réexporter. C’est frustrant quand la source n’est pas la vôtre, mais c’est la voie la plus propre. Les alternatives — convertir en Word, modifier le PDF directement, ou « corriger » avec un autre lecteur — perdent chacune quelque chose que l’original avait.",
    "Ce guide parcourt les symptômes de mise en page courants et la correction réaliste pour chacun, y compris les méthodes qui produisent des PDF propres dès la première fois.",
  ],
  steps: [
    {
      title: "Identifiez s’il s’agit d’un problème de contenu ou d’affichage",
      body: "Ouvrez le PDF dans deux lecteurs différents. Si les deux montrent la même mise en page cassée, le fichier est la source du problème. Si l’un s’affiche correctement, vous avez un problème de lecteur, pas de mise en page.",
    },
    {
      title: "Corrigez la mise en page dans le document source, pas dans le PDF",
      body: "Ouvrez le fichier Word, Pages ou Docs, corrigez les marges, l’espacement ou le tableau, puis réexportez en PDF. La source corrigée produit directement un PDF corrigé. Modifier un PDF pour rafistoler la mise en page va à contre-courant du format.",
    },
    {
      title: "Réexportez avec un format de papier explicite",
      body: "Les réglages d’ajustement automatique produisent souvent des surprises. Définissez explicitement le format de papier (Letter ou A4), les marges (2,5 cm) et l’orientation dans l’application source avant d’exporter.",
    },
    {
      title: "Convertissez en Word seulement pour de lourdes réécritures de texte",
      body: "PDF vers Word dans votre navigateur extrait le texte pour le modifier à nouveau. La conversion perd un peu de mise en page — acceptez cela comme le prix pour retrouver l’édition de texte. Après nettoyage, réexportez en PDF pour le partage.",
    },
    {
      title: "Utilisez des outils au niveau des pages pour les corrections structurelles",
      body: "Si seules certaines pages sont fausses — une numérisation mal ordonnée, une couverture dupliquée, un insert de travers — Réorganiser les pages PDF, Extraire des pages PDF et Faire pivoter un PDF corrigent la structure sans toucher à la mise en forme du texte.",
    },
    {
      title: "Réexportez en PDF avant de partager",
      body: "Une fois la mise en page corrigée dans la source, exportez à nouveau plutôt que de réenregistrer un PDF existant. L’export le plus propre vient directement de l’application qui a créé le document.",
    },
  ],
  tips: [
    "L’aperçu avant impression dans Word ou Pages montre le même comportement de saut de page que le PDF. Corrigez les mauvais sauts avant d’exporter, pas après.",
    "Les tableaux qui se cassent maladroitement sont un problème de mise en forme de paragraphe dans la source, pas un problème PDF. Utilisez « conserver avec le suivant » pour lier une ligne d’en-tête à son contenu.",
    "N’ouvrez pas un PDF dans Word pour le modifier — Word le convertit, souvent mal. Utilisez la source d’origine si vous l’avez, ou PDF vers Word seulement quand vous ne l’avez pas.",
    "Le contenu collé depuis le web apporte souvent une mise en forme d’arrière-plan. Retirez-la avant d’exporter (coller comme texte brut) pour éviter des bordures et des couleurs surprises dans le PDF.",
    "Si vous n’avez que le PDF et ne pouvez pas revenir à la source, acceptez que le nettoyage de la mise en page sera partiel. Priorisez les changements que le lecteur remarquera en premier.",
  ],
  mobileNote:
    "Les problèmes de mise en page PDF sur mobile viennent souvent de documents créés sur ordinateur et exportés avec le mauvais format de papier cible. L’application PDF Editor permet de faire pivoter, réorganiser et rogner des pages sur le téléphone — utile pour nettoyer des problèmes structurels même quand vous ne pouvez pas corriger la source.",
  faq: [
    {
      q: "Pourquoi mon PDF paraît-il différent de la version Word ?",
      a: "Généralement à cause des polices, du format de papier ou des réglages de zone d’impression pendant l’export. Réexporter avec un format de papier explicite et des polices intégrées produit un PDF qui correspond à la source.",
    },
    {
      q: "Puis-je modifier le texte d’un PDF pour corriger l’espacement ?",
      a: "Vous pouvez modifier des caractères et des mots individuels, mais reformer des paragraphes est difficile parce que les PDF traitent le texte comme des blocs positionnés. Corrigez dans la source si possible.",
    },
    {
      q: "Pourquoi mon PDF converti en Word paraît-il cassé ?",
      a: "Les PDF encodent la mise en page, pas le flux. La conversion les retransforme en flux mais les repères structurels ont disparu. Attendez-vous à un vrai nettoyage sur un fichier converti.",
    },
    {
      q: "Pourquoi mes tableaux se cassent-ils maladroitement d’une page à l’autre ?",
      a: "Presque toujours un problème de mise en forme de paragraphe dans la source. Les réglages « conserver avec le suivant » et « ne pas fractionner entre les pages » dans Word corrigent la plupart des cassures avant l’export.",
    },
    {
      q: "La compression affecte-t-elle la mise en page ?",
      a: "Non. La compression touche les images, pas la mise en page. Un PDF compressé a la même mise en forme que l’original — juste des images intégrées plus petites.",
    },
  ],
  related: [
    { label: "PDF vers Word — convertir pour de lourdes corrections de texte", path: "/pdf-to-word" },
    { label: "Word vers PDF — réexporter proprement", path: "/word-to-pdf" },
    { label: "Comment corriger les problèmes de police d’un PDF", path: "/guides/how-to-fix-pdf-font-issues" },
    { label: "Comment résoudre les problèmes d’impression d’un PDF", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "Convertisseur PDF", path: "/pdf-converter" },
};

export default content;
