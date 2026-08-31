import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-online",
  h1: "Comment compresser un PDF en ligne sans l’envoyer sur un serveur",
  description:
    "Réduisez un PDF directement dans votre navigateur, sans transfert ni compte. En quoi la compression sur l’appareil diffère des outils en ligne classiques, et ce qu’elle coûte en qualité.",
  updated: "2026-05-23",
  intro: [
    "« Compresser un PDF en ligne » évoque en général une image familière et un peu inconfortable : envoyer son fichier sur le serveur d’un inconnu, attendre, télécharger le résultat, et espérer que le document que vous venez de confier ne contenait rien qui vous tenait à cœur. Il existe une meilleure version de ce circuit — une qui s’exécute directement dans l’onglet du navigateur, si bien que le fichier ne quitte jamais votre appareil.",
    "Ce guide utilise l’outil gratuit Compresser un PDF, qui fait tout le travail localement grâce au processeur de votre propre appareil. Il est « en ligne » au sens où vous y accédez via une page web, mais votre PDF n’est jamais envoyé nulle part. Cette distinction compte le plus pour les documents que les gens compressent réellement : contrats numérisés, relevés, dossiers de candidature.",
    "Nous détaillerons les étapes, expliquerons honnêtement le compromis sur la qualité, et signalerons les types de fichiers pour lesquels la compression dans le navigateur excelle ou atteint ses limites.",
  ],
  steps: [
    {
      title: "Ouvrez l’outil Compresser un PDF",
      body: "Rendez-vous sur l’outil Compresser un PDF dans votre navigateur. Il se charge dans la page et traite votre fichier sur votre appareil — pas d’envoi, pas d’inscription.",
    },
    {
      title: "Ajoutez votre PDF",
      body: "Glissez le fichier sur la zone de dépôt ou cliquez pour le choisir. Rien n’est transmis ; le fichier est lu localement.",
    },
    {
      title: "Choisissez un niveau de compression",
      body: "Faible conserve le plus de détail, Recommandé équilibre taille et qualité, Fort donne le fichier le plus léger. Pour l’e-mail et les dépôts, Recommandé est en général le bon compromis.",
    },
    {
      title: "Compressez",
      body: "Lancez l’opération. L’outil réencode et redessine les pages localement, puis affiche la taille avant et après et le pourcentage gagné.",
    },
    {
      title: "Vérifiez que le résultat est acceptable",
      body: "Ouvrez le fichier compressé et regardez les pages. Les numérisations doivent rester lisibles ; si un niveau paraît trop dégradé, revenez à un niveau plus léger.",
    },
    {
      title: "Téléchargez le fichier allégé",
      body: "Enregistrez-le comme un nouveau fichier pour garder votre original intact. La copie compressée est prête à joindre ou à déposer.",
    },
  ],
  tips: [
    "« En ligne » ici ne veut pas dire « envoyé ». Le fichier est traité dans votre navigateur, sur votre appareil, ce qui est la façon la plus sûre de compresser quoi que ce soit de sensible.",
    "La compression entraîne une perte — aucun outil honnête ne prétend le contraire. Les niveaux plus faibles gardent plus de détail ; choisissez celui qui reste acceptable pour votre usage.",
    "Pour obtenir de vrais gains dans le navigateur, l’outil redessine les pages sous forme d’images, donc le texte du résultat n’est plus sélectionnable ni consultable. Gardez l’original si vous en avez besoin.",
    "Les PDF uniquement textuels ou vectoriels rétrécissent à peine, car il y a peu de données d’image à compresser — les plus gros gains viennent des numérisations et des fichiers riches en photos.",
    "Les PDF protégés par mot de passe ne peuvent pas être traités dans le navigateur. Retirez d’abord le mot de passe, ou utilisez l’application PDF Editor, qui prend en charge les fichiers protégés.",
  ],
  mobileNote:
    "Compresser un document sensible en déplacement est exactement le cas où le traitement sur l’appareil fait ses preuves. L’application PDF Editor compresse entièrement hors connexion — vous pouvez réduire un contrat en mode avion sans qu’un seul octet ne quitte votre téléphone — et elle gère aussi les fichiers protégés par mot de passe.",
  faq: [
    {
      q: "Mon PDF est-il vraiment envoyé sur un serveur ?",
      a: "Non. Bien qu’on y accède via une page web, l’outil Compresser un PDF fonctionne dans votre navigateur et traite le fichier sur votre appareil. Rien n’est transmis, ce qui le rend sûr pour des documents confidentiels.",
    },
    {
      q: "De combien mon fichier va-t-il rétrécir ?",
      a: "Cela dépend du contenu. Les PDF numérisés ou riches en images rétrécissent souvent de 50 à 90 % ; les PDF uniquement textuels changent à peine. L’outil affiche la taille exacte avant et après.",
    },
    {
      q: "La qualité va-t-elle baisser ?",
      a: "Oui, dans une certaine mesure — c’est une compression avec perte et nous ne prétendons pas le contraire. Les niveaux plus faibles préservent plus de détail. Choisissez le niveau qui reste acceptable pour l’usage prévu du document.",
    },
    {
      q: "Pourquoi ne puis-je plus sélectionner le texte après compression ?",
      a: "Pour obtenir de vrais gains de taille dans le navigateur, chaque page est transformée en image, ce qui supprime la couche de texte sélectionnable. Si vous avez besoin d’un texte consultable, gardez l’original ou choisissez une approche plus légère.",
    },
    {
      q: "Puis-je compresser un PDF protégé de cette façon ?",
      a: "Pas dans le navigateur. Retirez d’abord le mot de passe, ou utilisez l’application mobile PDF Editor, qui peut ouvrir et compresser des fichiers protégés.",
    },
  ],
  related: [
    { label: "Compresser un PDF — réduire dans votre navigateur", path: "/compress-pdf" },
    { label: "Comment compresser un PDF sans perdre en qualité", path: "/guides/how-to-compress-pdf" },
    { label: "Comment réduire la taille d’un PDF pour l’e-mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Outils PDF respectueux de la confidentialité", path: "/guides/privacy-first-pdf-tools" },
  ],
  parentHub: { label: "Compresser un PDF", path: "/compress-pdf" },
};

export default content;
