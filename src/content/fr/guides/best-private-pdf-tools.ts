import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-private-pdf-tools",
  h1: "Les meilleurs outils PDF confidentiels (quand la discrétion compte vraiment)",
  description:
    "Pour un contrat, un relevé bancaire ou tout autre PDF sensible, voici les outils qui respectent la confidentialité par leur architecture — et pas seulement dans leur politique affichée.",
  updated: "2026-05-29",
  intro: [
    "« Confidentiel » s’applique aux outils PDF un peu comme « naturel » s’applique aux étiquettes alimentaires — généreusement, et souvent à tort. Beaucoup d’outils revendiquent la confidentialité dans leur discours tout en envoyant chaque fichier sur leurs serveurs pour le traiter là-bas. La confidentialité repose alors sur une politique : « nous ne conservons pas votre fichier plus d’une heure ». C’est mieux que rien, mais cela dépend du respect de cette politique, qui dépend lui-même de la pérennité de l’entreprise — ce n’est pas une garantie solide pour du contenu réellement sensible.",
    "Les outils PDF véritablement confidentiels le sont par leur architecture. Votre fichier n’atteint jamais leur serveur. Le traitement se fait dans votre navigateur ou dans une application locale sur votre téléphone. La confidentialité n’est pas une politique ; c’est une propriété structurelle. C’est l’exigence à laquelle tenir les outils quand le fichier compte vraiment.",
    "Ce guide liste la sélection confidentielle pour les tâches PDF courantes. L’architecture est le critère ; le reste en découle.",
  ],
  steps: [
    {
      title: "Pour compresser des fichiers sensibles : Compresser le PDF dans le navigateur",
      body: "Compresser le PDF dans votre navigateur réduit le fichier en local. Relevés bancaires sensibles, pièces d’identité numérisées et contrats se compressent sans jamais quitter votre appareil. Vérifiez avec les outils de développement — aucune requête POST sortante quand vous ajoutez le fichier.",
    },
    {
      title: "Pour fusionner des fichiers sensibles : Fusionner le PDF dans le navigateur",
      body: "Fusionner le PDF combine contrats, pièces jointes ou dossiers signés en local. Le fichier fusionné est généré dans la mémoire du navigateur ; les éléments d’origine restent sur votre machine du début à la fin.",
    },
    {
      title: "Pour extraire des pages précises à partager : Extraire des pages PDF",
      body: "Si vous devez n’envoyer que certaines pages d’un document sensible, Extraire des pages PDF produit un nouveau PDF ne contenant que ces pages — en local, dans votre navigateur.",
    },
    {
      title: "Pour retirer des pages façon caviardage : Extraire ou Réorganiser",
      body: "Le vrai caviardage de texte est une tâche spécialisée ; si vous retirez des pages entières ou les remplacez par d’autres, les outils au niveau des pages dans votre navigateur font le travail sans exposer le contenu à un serveur.",
    },
    {
      title: "Pour signer des contrats : Signer le PDF ou l’application PDF Editor",
      body: "Signer le PDF dans le navigateur ou l’application PDF Editor sur téléphone garde le contrat sur votre appareil pendant toute la signature. Aucune plateforme de signature électronique ne voit le document.",
    },
    {
      title: "Pour des archives confidentielles : un stockage local chiffré",
      body: "Après traitement, archivez les PDF sensibles sur un support chiffré — FileVault, BitLocker, disques externes chiffrés, ou sauvegarde cloud à connaissance nulle. Le traitement local ne sert à rien si le stockage d’archive reste en clair.",
    },
  ],
  tips: [
    "La confidentialité par architecture vaut mieux que la confidentialité par politique. L’architecture se vérifie ; la politique repose sur la confiance.",
    "L’onglet réseau des outils de développement est l’étape de vérification. Si vous ne pouvez pas vérifier, ne faites pas confiance.",
    "N’acceptez pas de vous inscrire pour des outils censés être confidentiels — le compte est une donnée que l’outil n’aurait autrement pas eue.",
    "Les outils confidentiels mobiles devraient fonctionner hors connexion. Si une application « confidentielle » exige un réseau constant, demandez-vous pourquoi.",
    "Associez des outils confidentiels à des canaux confidentiels. Traiter un fichier en privé puis envoyer le résultat en clair par e-mail annule tout l’effort.",
  ],
  mobileNote:
    "Sur mobile, l’application PDF Editor est le choix confidentiel — tout le traitement se fait sur l’appareil, sans transfert, sans compte. Utile pour des contrats et des scans sensibles là où le téléphone est l’appareil naturel, sans que le fichier passe par le serveur de quelqu’un d’autre.",
  faq: [
    {
      q: "Qu’est-ce qui rend un outil PDF réellement confidentiel ?",
      a: "L’architecture — le fichier n’atteint jamais le serveur de l’outil. Les politiques de conservation affichées sont plus faibles parce qu’elles dépendent du respect de ses engagements par l’entreprise.",
    },
    {
      q: "Les outils « confidentiels » payants valent-ils mieux que les gratuits ?",
      a: "Pas nécessairement. Les outils gratuits qui fonctionnent dans votre navigateur ont la même confidentialité architecturale que les outils payants sans transfert. Les outils payants l’emportent sur les fonctionnalités avancées (flux réglementés, e-discovery), pas sur la confidentialité de base.",
    },
    {
      q: "Puis-je vérifier moi-même la confidentialité ?",
      a: "Oui — outils de développement du navigateur, onglet réseau. Déposez un fichier, surveillez les requêtes sortantes. Aucun envoi de fichier visible signifie qu’aucun envoi n’a eu lieu.",
    },
    {
      q: "Et le chiffrement de bout en bout ?",
      a: "Utile pour le partage, ça n’aide pas pour le traitement. Si un outil doit lire votre fichier pour le traiter, le chiffrement en transit n’y change rien — le serveur voit quand même le contenu.",
    },
    {
      q: "Quelle est la posture de confidentialité la plus solide pour des PDF sensibles ?",
      a: "Traitez en local avec des outils dans le navigateur ou des applications locales. Archivez sur un support chiffré. Partagez via des canaux chiffrés de bout en bout. Chaque couche couvre une surface d’attaque différente.",
    },
  ],
  related: [
    { label: "Sécurité PDF — protéger par mot de passe et chiffrer", path: "/pdf-security" },
    { label: "Outils PDF — dans le navigateur, sans transfert", path: "/pdf-tools" },
    { label: "Outils PDF qui respectent la confidentialité", path: "/guides/privacy-first-pdf-tools" },
    { label: "Comment protéger ses PDF sensibles", path: "/guides/how-to-protect-sensitive-pdf-files" },
  ],
  parentHub: { label: "Outils PDF — gratuits, dans le navigateur", path: "/pdf-tools" },
};

export default content;
