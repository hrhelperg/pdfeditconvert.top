import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-android",
  h1: "Comment réduire la taille d’un PDF sur Android",
  description:
    "Compressez un PDF sur n’importe quel Android avec un outil de navigateur sans installation, ou avec l’application PDF Editor. Passez sous les limites d’e-mail et de dépôt.",
  updated: "2026-05-23",
  intro: [
    "Android gère les PDF différemment selon le téléphone — Samsung, Pixel et Xiaomi enfouissent tous les réglages concernés à des endroits différents — mais le besoin est universel : un PDF numérisé ou riche en photos est trop lourd pour un e-mail ou un dépôt, et vous voulez le réduire. La correction la plus fiable ne dépend absolument pas de la marque de votre téléphone.",
    "Ce guide utilise l’outil gratuit Compresser un PDF, qui fonctionne dans votre navigateur sur n’importe quel appareil Android et traite le fichier localement — rien n’est envoyé. Il couvre aussi l’application PDF Editor pour un usage hors connexion et pour les fichiers protégés par mot de passe, que le navigateur ne peut pas toucher.",
    "Comme la voie du navigateur est identique sur tous les téléphones Android, c’est la méthode à retenir si vous changez d’appareil ou aidez quelqu’un sur une autre marque.",
  ],
  steps: [
    {
      title: "Localisez le PDF",
      body: "Trouvez le document dans votre app Fichiers, Téléchargements, ou là où il a été enregistré — une numérisation, une pièce jointe sauvegardée, un lot de photos converti.",
    },
    {
      title: "Ouvrez l’outil Compresser un PDF",
      body: "Rendez-vous sur l’outil Compresser un PDF dans Chrome ou votre navigateur. Il fonctionne de la même façon sur tous les téléphones Android et traite le fichier sur votre appareil — pas d’envoi, pas de compte.",
    },
    {
      title: "Ajoutez le PDF et choisissez un niveau",
      body: "Sélectionnez le fichier et choisissez un niveau : Recommandé pour la plupart des cas, Fort si vous avez besoin d’un fichier plus léger. Faible conserve le plus de détail.",
    },
    {
      title: "Compressez et vérifiez",
      body: "Lancez l’opération et regardez la taille avant et après. Les PDF riches en images ou numérisés perdent en général énormément de poids en une seule passe.",
    },
    {
      title: "Enregistrez ou partagez le résultat",
      body: "Enregistrez le fichier allégé sur votre appareil ou partagez-le directement vers un e-mail ou une application de messagerie. Gardez l’original jusqu’à avoir confirmé que la copie se lit bien.",
    },
    {
      title: "Utilisez l’application pour les fichiers protégés ou volumineux",
      body: "Le navigateur ne peut pas compresser des PDF protégés par mot de passe et peut peiner avec de très gros fichiers. L’application PDF Editor gère les deux hors connexion.",
    },
  ],
  tips: [
    "La méthode par navigateur se comporte à l’identique sur Samsung, Pixel, Xiaomi et les autres, c’est donc celle à retenir quel que soit l’appareil.",
    "Si un PDF est énorme, ce sont presque certainement les pages numérisées ou photographiées. Ce sont justement celles qui se compressent le mieux.",
    "La compression transforme les pages en images, donc la copie allégée perd le texte sélectionnable. Gardez l’original si vous devez rechercher ou copier du texte.",
    "Certains appareils photo Android enregistrent en HEIF en mode haute efficacité ; les numérisations en JPG standard sont plus faciles à compresser et à partager largement.",
    "Enregistrez le PDF compressé sous un nouveau nom pour que l’original net reste sur l’appareil.",
  ],
  mobileNote:
    "Compresser sur le téléphone est ce que les utilisateurs Android veulent vraiment, et l’application PDF Editor le fait hors connexion sans rien envoyer, prend en charge les fichiers protégés par mot de passe, et partage directement vers vos applications. Pour des documents que vous réduisez souvent, elle bat le fait de rouvrir le navigateur à chaque fois.",
  faq: [
    {
      q: "La méthode par navigateur fonctionne-t-elle sur tous les téléphones Android ?",
      a: "Oui. Comme l’outil Compresser un PDF fonctionne dans le navigateur, il se comporte de la même façon sur Samsung, Pixel, Xiaomi et tout autre appareil Android — contrairement aux fonctions intégrées qui varient selon la marque.",
    },
    {
      q: "Puis-je compresser un PDF sur Android sans rien installer ?",
      a: "Oui. L’outil Compresser un PDF fonctionne dans votre navigateur et traite le fichier sur votre appareil, donc aucune installation n’est nécessaire.",
    },
    {
      q: "Mon fichier est-il envoyé quelque part ?",
      a: "Non. La compression se fait localement sur votre téléphone ; rien n’est envoyé vers un serveur, ce qui compte pour des documents personnels.",
    },
    {
      q: "Le texte reste-t-il sélectionnable ?",
      a: "Non. Les pages sont redessinées sous forme d’images pendant la compression, ce qui supprime la couche de texte sélectionnable. Gardez l’original si vous en avez besoin.",
    },
    {
      q: "Comment compresser un PDF protégé par mot de passe sur Android ?",
      a: "Le navigateur ne peut pas traiter les fichiers protégés. Utilisez l’application PDF Editor, qui les ouvre et les compresse hors connexion.",
    },
  ],
  related: [
    { label: "Compresser un PDF — réduire dans votre navigateur", path: "/compress-pdf" },
    { label: "Comment réduire la taille d’un PDF sur iPhone", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
    { label: "Comment réduire la taille d’un PDF pour l’e-mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Comment modifier un PDF sur Android", path: "/guides/how-to-edit-pdf-on-android" },
  ],
  parentHub: { label: "Compresser un PDF", path: "/compress-pdf" },
};

export default content;
