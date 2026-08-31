import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "privacy-first-document-workflows",
  h1: "Une organisation documentaire sans aucun transfert (de bout en bout)",
  description:
    "Toute une chaîne documentaire — capture, retouche, signature, envoi, archivage — qui garde les fichiers sur vos appareils et hors des serveurs tiers. À quoi elle ressemble concrètement, et avec quels outils.",
  updated: "2026-05-29",
  intro: [
    "La plupart des méthodes documentaires fuient. Vous numérisez un papier sensible avec une application, vous l’envoyez sur un site pour le compresser, vous l’envoyez par e-mail via un outil tiers d’« amélioration », et vous vous retrouvez avec trois ou quatre serveurs détenant des copies de quelque chose que vous pensiez garder pour vous. Chaque étape est pratique ; le coût cumulé pour la confidentialité est important et invisible.",
    "Une méthode qui privilégie la confidentialité ne refuse pas les outils modernes — elle choisit ceux qui ne déplacent pas vos fichiers. La capture se fait avec votre appareil photo. La compression et la retouche se font dans votre navigateur. La signature se fait dans une application sur votre téléphone. Le transfert passe par un canal en qui vous avez confiance. À aucun moment le document ne réside sur le serveur d’un inconnu.",
    "Ce guide décrit la chaîne de bout en bout, les outils adaptés à chaque étape, et les endroits où le traitement local ne suffit vraiment pas encore (un ensemble plus restreint que ce que la plupart des gens pensent). C’est la méthode réaliste qui privilégie la confidentialité, pas la version absolutiste.",
  ],
  steps: [
    {
      title: "Capture : numérisez en local avec votre téléphone",
      body: "Numériser en PDF depuis votre téléphone exécute l’appareil photo et la détection de page directement sur l’appareil. Aucun transfert, aucun traitement dans le cloud. Le PDF que vous produisez commence local et le reste jusqu’à ce que vous décidiez de le partager.",
    },
    {
      title: "Retouchez et nettoyez dans un onglet de navigateur",
      body: "Compresser le PDF, Réorganiser les pages du PDF, Extraire des pages PDF, Faire pivoter le PDF, Ajouter un filigrane au PDF — tous fonctionnent dans le navigateur. Le fichier est lu par JavaScript sur votre machine ; le serveur ne voit jamais le contenu.",
    },
    {
      title: "Signez avec une vraie signature, en local",
      body: "Signer le PDF ou l’application PDF Editor capture une signature dessinée sur votre appareil et l’intègre au fichier. Aucune plateforme de signature tierce ne voit le document.",
    },
    {
      title: "Partagez par un canal de confiance",
      body: "AirDrop, Signal, e-mail chiffré, messagerie chiffrée de bout en bout. Le canal chiffre le transfert ; le destinataire reçoit le fichier sans qu’il passe par un intermédiaire capable de le lire.",
    },
    {
      title: "Archivez sur un support chiffré",
      body: "Disque local avec chiffrement intégral, ou sauvegarde cloud à connaissance nulle. Ne stockez pas de PDF sensibles sur un espace cloud classique — c’est un serveur qui lit vos fichiers.",
    },
    {
      title: "Passez en revue et supprimez régulièrement",
      body: "Parcourez vos PDF sensibles chaque trimestre. Supprimez ce qui n’est plus nécessaire. Chaque fichier sensible conservé représente un petit risque continu ; réduire l’inventaire réduit l’exposition.",
    },
  ],
  tips: [
    "Capture, retouche et signature peuvent toutes se faire sur un seul appareil. Moins il y a de passages d’un appareil à l’autre, plus la surface de fuite est réduite.",
    "Vérifiez qu’un outil « dans le navigateur » fonctionne réellement en local avant de lui faire confiance. L’onglet réseau des outils de développement est la vérification la plus rapide.",
    "Chiffrez les PDF sensibles par mot de passe même en les partageant via des canaux chiffrés. La défense en profondeur a du sens.",
    "Évitez les services de partage de fichiers par « lien d’envoi » pour du contenu sensible. Le lien est un pointeur côté serveur ; le fichier réside sur le disque de quelqu’un d’autre.",
    "N’imprimez pas de PDF sensibles sauf nécessité. La file d’attente de l’imprimante et le papier sont deux copies supplémentaires à suivre.",
  ],
  mobileNote:
    "Les méthodes qui privilégient la confidentialité sont plus simples sur téléphone qu’on ne le pense. L’application PDF Editor gère la capture, la retouche, la signature et le partage en local sur iOS et Android, pour qu’un document sensible puisse passer du papier au destinataire sans jamais toucher un serveur tiers.",
  faq: [
    {
      q: "Une vraie méthode peut-elle réellement rester entièrement locale ?",
      a: "Pour la plupart des étapes, oui. Capture, compression, retouche, signature et transfert ordinaire peuvent tous se faire sans transfert sur serveur. Certaines opérations (OCR haute précision, caviardage avancé) ont parfois besoin d’aide côté serveur ; choisissez ces outils avec soin si vous en avez besoin.",
    },
    {
      q: "N’est-ce pas exagérément prudent ?",
      a: "Pas pour du contenu sensible. La méthode du « tout part sur un serveur » fonctionnait quand les documents étaient moins sensibles et les violations de données plus rares. Les deux ont changé. La méthode qui privilégie la confidentialité prend le même temps une fois qu’elle devient une habitude.",
    },
    {
      q: "Comment savoir si un outil dans le navigateur est vraiment local ?",
      a: "Ouvrez les outils de développement, l’onglet réseau, ajoutez un fichier. Si vous ne voyez pas de grosse requête sortante, le traitement est local. Les outils de ce site correspondent à ce schéma.",
    },
    {
      q: "Qu’en est-il des sauvegardes ?",
      a: "Une sauvegarde cloud à connaissance nulle (le fournisseur ne peut pas lire vos fichiers) convient. Une sauvegarde cloud classique de PDF sensibles n’est pas privée — le fournisseur peut tout lire.",
    },
    {
      q: "Où cette méthode montre-t-elle ses limites ?",
      a: "À deux endroits : quand une tâche impose une plateforme payante spécifique (secteurs réglementés), et quand le destinataire utilise de son côté une méthode qui repose sur des transferts. La confidentialité dépend des deux parties.",
    },
  ],
  related: [
    { label: "Outils PDF — dans le navigateur, sans transfert", path: "/pdf-tools" },
    { label: "Outils PDF qui respectent la confidentialité", path: "/guides/privacy-first-pdf-tools" },
    { label: "Le traitement PDF local dans le navigateur, expliqué", path: "/guides/local-browser-pdf-processing-explained" },
    { label: "Les avantages du traitement documentaire dans le navigateur", path: "/guides/browser-based-document-processing-benefits" },
  ],
  parentHub: { label: "Outils PDF — gratuits, dans le navigateur", path: "/pdf-tools" },
};

export default content;
