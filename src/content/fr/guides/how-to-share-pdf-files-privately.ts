import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdf-files-privately",
  h1: "Comment partager un PDF en toute discrétion (sans le confier à des inconnus)",
  description:
    "La façon discrète de partager un PDF ne passe pas par un site public d’« outils PDF ». Les canaux qui gardent le document entre vous et le destinataire, avec des réglages raisonnables.",
  updated: "2026-05-29",
  intro: [
    "La première chose que beaucoup de gens font pour partager un PDF avec quelqu’un, c’est l’envoyer vers un outil qui promet un partage « privé » — et cet outil est souvent le plus gros risque de toute la chaîne. Les services gratuits de partage de fichiers conservent en général les fichiers pendant un certain temps, les indexent parfois, et dépendent d’un serveur avec lequel vous n’avez aucune relation.",
    "Le partage privé n’a rien de compliqué ; il s’agit de choisir le bon canal. Transfert direct (AirDrop, clé USB), messagerie chiffrée de bout en bout, e-mail chiffré, ou fichiers protégés par mot de passe via un e-mail ordinaire. Chacun convient à une situation différente. Aucun n’exige de l’envoyer à un inconnu.",
    "Ce guide passe en revue les options réalistes selon le niveau de sensibilité et le cas d’usage, avec les compromis de chacune. L’objectif : des documents partagés qui restent entre vous et le destinataire, sans intermédiaire tiers évitable.",
  ],
  steps: [
    {
      title: "Pour un transfert sur place ou entre appareils proches, utilisez AirDrop ou le partage local",
      body: "D’iPhone à iPhone, d’iPhone à Mac : AirDrop. Sur Android : Partage à proximité. Même Mac, même PC : AirDrop local ou dossier partagé. Le fichier ne touche jamais Internet.",
    },
    {
      title: "Pour des destinataires de confiance, utilisez une messagerie chiffrée de bout en bout",
      body: "Signal, WhatsApp (avec quelques réserves), iMessage entre utilisateurs Apple. Le transport lui-même est chiffré ; le fichier n’est déchiffré que sur l’appareil du destinataire. Les plateformes voient des métadonnées, pas le contenu.",
    },
    {
      title: "Pour les fichiers peu sensibles, l’e-mail ordinaire suffit",
      body: "L’e-mail standard n’est pas chiffré mais reste pratiquement sûr pour la plupart des documents non sensibles. Le risque est l’interception, rare pour des documents ordinaires transitant par de grands fournisseurs d’e-mail.",
    },
    {
      title: "Pour des fichiers sensibles envoyés par e-mail ordinaire, protégez-les d’abord par mot de passe",
      body: "Appliquez un mot de passe au PDF avant de le joindre. L’e-mail transporte le fichier ; le mot de passe passe par un autre canal (appel téléphonique, message séparé). Même intercepté, l’e-mail garde le fichier protégé.",
    },
    {
      title: "Pour du contenu très sensible, utilisez un e-mail chiffré ou un envoi sécurisé",
      body: "ProtonMail, Tutanota, ou le service de transmission sécurisée de documents de votre organisation. Ces solutions ajoutent un vrai chiffrement au canal lui-même, ce qui évite l’étape du mot de passe transmis à part.",
    },
    {
      title: "Évitez d’envoyer du contenu sensible vers des services gratuits de partage de fichiers",
      body: "Les outils gratuits qui envoient votre fichier sur un serveur (compresseurs, fusionneurs, diviseurs) conservent le fichier sur leur serveur, même brièvement. Pour du contenu sensible, utilisez des outils dans le navigateur qui traitent le fichier en local avant tout partage.",
    },
  ],
  tips: [
    "Ne mettez pas le mot de passe dans le même e-mail que le fichier protégé. Le mot de passe existe précisément pour se prémunir contre l’interception de l’e-mail.",
    "Confirmez l’identité du destinataire avant de partager — certaines tentatives d’hameçonnage se font passer pour des clients afin d’obtenir des PDF sensibles.",
    "Pour des partages répétés avec le même destinataire, convenez d’un seul canal et n’en changez plus. C’est en changeant de canal que les fuites se produisent.",
    "Ne partagez pas via un lien public sauf s’il est à usage unique. Un lien permanent peut être découvert ou repartagé.",
    "Après le partage, supprimez le fichier de tout emplacement temporaire (dossier Téléchargements, disque de travail). Moins il existe de copies du contenu sensible, plus la surface d’exposition est réduite.",
  ],
  mobileNote:
    "La plupart des partages privés commencent désormais sur téléphone. L’application PDF Editor prépare les fichiers (compression, signature, mot de passe) localement sur iOS et Android, puis les transmet vers AirDrop, Signal ou votre messagerie — le fichier reste sur le téléphone pendant la préparation, puis part directement vers le destinataire.",
  faq: [
    {
      q: "Quelle est la façon la plus simple de partager en toute discrétion ?",
      a: "AirDrop ou Partage à proximité quand vous êtes près du destinataire. La messagerie chiffrée de bout en bout quand vous ne l’êtes pas. Les deux gardent le fichier hors de portée de serveurs tiers.",
    },
    {
      q: "WhatsApp est-il assez discret pour des documents sensibles ?",
      a: "Le chiffrement de bout en bout protège le contenu ; WhatsApp voit bien les métadonnées (qui a envoyé quoi à qui). Pour la plupart des cas, ça suffit ; pour du contenu très sensible, Signal reste le choix le plus net.",
    },
    {
      q: "Faut-il utiliser un service de lien de partage de fichiers ?",
      a: "Seulement avec des engagements explicites sur le traitement des données et une conservation courte. Pour des fichiers sensibles, les canaux directs restent plus sûrs.",
    },
    {
      q: "Comment la protection par mot de passe d’un PDF se compare-t-elle au chiffrement du canal ?",
      a: "Le mot de passe du PDF protège le fichier lui-même ; le chiffrement du canal protège le transport. Les deux ont leur utilité ; ils protègent contre des attaques différentes.",
    },
    {
      q: "Quelle est la pire pratique courante ?",
      a: "Envoyer un PDF sensible vers un outil gratuit de « conversion » ou de « compression », puis envoyer le résultat par e-mail. C’est l’étape d’envoi vers le serveur qui fait perdre le contrôle des données. Utilisez des outils dans le navigateur qui n’envoient rien sur un serveur.",
    },
  ],
  related: [
    { label: "Sécurité PDF — protéger par mot de passe et chiffrer", path: "/pdf-security" },
    { label: "Comment protéger ses PDF sensibles", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "Comment éviter de transférer des documents sensibles", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
    { label: "Une organisation documentaire sans aucun transfert", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "Sécurité PDF — protéger par mot de passe et chiffrer", path: "/pdf-security" },
};

export default content;
