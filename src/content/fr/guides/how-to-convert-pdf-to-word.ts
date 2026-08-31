import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-word",
  h1: "Comment convertir un PDF en Word, gratuitement et dans le navigateur",
  description:
    "Récupérez le texte d’un PDF dans un document Word modifiable, sans rien envoyer. Ce qui passe proprement, ce qu’il faut reprendre, et pourquoi un document numérisé ne fonctionne pas.",
  updated: "2026-05-23",
  intro: [
    "La plupart des gens qui veulent « convertir un PDF en Word » veulent en réalité une seule chose : récupérer le texte, dans un document qu’ils peuvent modifier. Peut-être que le .docx d’origine a disparu depuis longtemps, peut-être qu’un collègue n’a envoyé que le PDF, ou peut-être devez-vous récupérer quelques clauses d’un contrat sans les retaper. C’est un travail d’extraction de texte, plus rapide qu’il n’y paraît.",
    "Ce guide utilise l’outil gratuit PDF vers Word, qui fonctionne entièrement dans votre navigateur — votre fichier n’est jamais envoyé sur un serveur. Il lit la couche de texte du PDF et vous remet un .docx que vous pouvez ouvrir dans Word, Google Docs, Pages ou LibreOffice. Ce qu’il ne fait pas, c’est reconstruire la mise en page d’origine au pixel près, et mieux vaut le savoir à l’avance pour que le résultat ne surprenne pas.",
    "Voici le déroulé pratique, les types de PDF qui se convertissent bien, et les cas honnêtes où il faudra soit nettoyer le résultat après coup, soit passer par une approche entièrement différente.",
  ],
  steps: [
    {
      title: "Ouvrez l’outil PDF vers Word",
      body: "Rendez-vous sur l’outil PDF vers Word. Rien à installer, aucun compte — le convertisseur se charge dans votre navigateur et traite le fichier sur votre propre appareil.",
    },
    {
      title: "Ajoutez votre PDF",
      body: "Glissez le PDF sur la zone de dépôt ou cliquez pour le choisir. Utilisez un PDF à base de texte — un fichier où vous pouvez sélectionner et copier du texte dans n’importe quelle visionneuse. Si le texte ne se surligne pas quand vous essayez de le sélectionner, le fichier est une numérisation et ne se convertira pas (voir les limites ci-dessous).",
    },
    {
      title: "Lancez la conversion",
      body: "Cliquez sur Convertir en Word. L’outil parcourt la couche de texte du PDF et la reconstruit en .docx avec un texte qui s’écoule normalement. Pour un document type de plusieurs pages, cela prend quelques secondes.",
    },
    {
      title: "Téléchargez le .docx",
      body: "Le fichier Word se télécharge automatiquement. Ouvrez-le dans l’éditeur de votre choix — le texte arrive sous forme de paragraphes modifiables que vous pouvez restructurer librement.",
    },
    {
      title: "Réappliquez la mise en forme",
      body: "Titres, gras, colonnes et espacement demandent en général une reprise manuelle. Remarquez vos titres avec les styles de titre de votre éditeur, rétablissez les tableaux, et le document redevient pleinement le vôtre.",
    },
    {
      title: "Réinsérez les images si besoin",
      body: "L’extraction de texte ne transfère pas les images. Si l’original contenait un logo, un graphique ou une photo dont vous avez besoin, remettez-le depuis le PDF source — exportez la page en image d’abord si nécessaire.",
    },
  ],
  tips: [
    "Vérifiez d’abord la sélectionnabilité : si vous ne pouvez pas surligner de texte dans le PDF, c’est une image numérisée et l’extraction de texte ne renverra rien d’utilisable.",
    "Les documents simples, sur une seule colonne (lettres, notes de service, rapports sobres) se convertissent le plus proprement. Les PDF très mis en page, avec plusieurs colonnes et notes de bas de page, s’extraient en un seul flux de texte lisible qu’il faudra remettre en ordre.",
    "Ne comptez pas sur les tableaux pour rester intacts — ils arrivent en général sous forme de suites de texte. Reconstruisez les tableaux importants dans votre éditeur plutôt que de lutter avec la version extraite.",
    "Gardez le PDF original ouvert à côté pendant que vous remettez en forme. C’est bien plus rapide de jeter un œil à la source que de deviner la structure prévue.",
    "Si vous n’avez besoin que de quelques phrases, copiez-les directement depuis une visionneuse PDF plutôt que de convertir tout le fichier — la conversion sert quand vous avez besoin de la majeure partie du document.",
  ],
  mobileNote:
    "Vous travaillez depuis votre téléphone ? L’application PDF Editor convertit et modifie des documents en déplacement, et contrairement à un navigateur, elle peut lancer la reconnaissance de texte sur des pages numérisées — utile quand le PDF reçu est en réalité la photo d’un document imprimé plutôt qu’un fichier numérique.",
  faq: [
    {
      q: "Le fichier Word ressemblera-t-il exactement au PDF ?",
      a: "Non, et aucun outil honnête ne devrait le promettre. C’est une conversion de texte : les polices, les colonnes, l’espacement exact et les images ne sont pas reproduits. Vous récupérez les mots sous forme de paragraphes modifiables, puis vous réappliquez la mise en forme dans votre éditeur.",
    },
    {
      q: "Le message indique qu’aucun texte n’a été trouvé — qu’est-ce qui a échoué ?",
      a: "Votre PDF est presque certainement une numérisation ou un fichier uniquement composé d’images, sans couche de texte. Les outils de navigateur ne peuvent pas lire de texte dans une image. L’application mobile PDF Editor peut lancer la reconnaissance de texte sur des numérisations, c’est la voie à suivre dans ce cas.",
    },
    {
      q: "Mon document est-il envoyé sur un serveur ?",
      a: "Non. L’extraction se fait localement dans votre navigateur, donc le PDF ne quitte jamais votre appareil. Cela permet de l’utiliser en toute sécurité pour des contrats et d’autres fichiers sensibles.",
    },
    {
      q: "Quel format de fichier est-ce que je récupère ?",
      a: "Un .docx standard qui s’ouvre dans Microsoft Word, Google Docs, Apple Pages et LibreOffice. Vous pourrez le réexporter en PDF plus tard si besoin.",
    },
    {
      q: "Puis-je le reconvertir en PDF une fois la modification terminée ?",
      a: "Oui — utilisez l’outil Word vers PDF pour transformer votre .docx terminé en un PDF propre et prêt à partager.",
    },
  ],
  related: [
    { label: "PDF vers Word — convertir dans votre navigateur", path: "/pdf-to-word" },
    { label: "Word vers PDF — la conversion inverse", path: "/word-to-pdf" },
    { label: "Comment convertir un Word en PDF", path: "/guides/how-to-convert-word-to-pdf" },
    { label: "PDF ou DOCX — quel format utiliser", path: "/guides/pdf-vs-docx" },
  ],
  parentHub: { label: "Convertisseur PDF", path: "/pdf-converter" },
};

export default content;
