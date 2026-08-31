import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-sensitive-pdf-files",
  h1: "Comment protéger ses PDF sensibles (stockage, partage, fin de vie)",
  description:
    "Un PDF sensible doit être protégé à trois moments : quand il est stocké, quand il est partagé, et une fois que le destinataire n’en a plus besoin. Une méthode qui couvre les trois.",
  updated: "2026-05-29",
  intro: [
    "Les PDF sensibles — contrats, documents financiers, pièces d’identité, dossiers médicaux — ont besoin d’être protégés à trois moments distincts de leur existence : quand ils reposent sur votre appareil ou votre disque (stockage), quand ils circulent entre vous et le destinataire (partage), et une fois que le destinataire les a utilisés (fin de vie). La plupart des gens se concentrent sur le partage et négligent les deux autres moments.",
    "Une méthode raisonnable couvre les trois. Le stockage suppose des disques chiffrés ou des fichiers protégés par mot de passe dans des emplacements non fiables. Le partage suppose de choisir un canal qui ne fuit pas, pas simplement d’envoyer le fichier au premier outil venu dans les résultats de recherche. La fin de vie suppose de réfléchir à ce qui arrive au fichier ensuite — la vôtre comme celle du destinataire.",
    "Ce guide détaille chacun des trois moments. Rien de tout cela n’est du niveau entreprise ; c’est le socle réaliste pour une personne ou une petite équipe qui manipule occasionnellement du contenu sensible, sans vouloir déployer une infrastructure certifiée pour autant.",
  ],
  steps: [
    {
      title: "Stockage : conservez les PDF sensibles sur un support chiffré",
      body: "FileVault sur macOS, BitLocker sur Windows, chiffrement intégral du disque sur les téléphones Linux. Cela couvre votre disque local. Pour les disques externes, utilisez des formats chiffrés. Les sauvegardes doivent aussi être chiffrées — synchronisez vers des services cloud qui prennent en charge le chiffrement à connaissance nulle, ou chiffrez le fichier vous-même avant l’envoi.",
    },
    {
      title: "Protégez chaque PDF sensible par mot de passe",
      body: "La protection par mot de passe d’un PDF ajoute une seconde couche. Le fichier reste protégé même si le chiffrement du disque échoue ou si quelqu’un obtient une copie du fichier en transit. Utilisez des mots de passe forts et uniques ; partagez-les par un canal différent de celui du fichier.",
    },
    {
      title: "Partage : choisissez le bon canal selon la sensibilité",
      body: "Un e-mail ordinaire convient pour les fichiers peu sensibles. Une messagerie chiffrée de bout en bout (Signal, e-mail sécurisé) pour un niveau moyen. Pour un niveau élevé, des services payants avec des engagements explicites sur le traitement des données. Évitez d’envoyer des PDF sensibles vers des « outils » gratuits tiers.",
    },
    {
      title: "Prétraitez en local avant l’envoi",
      body: "Si vous devez compresser, caviarder ou réorganiser un PDF sensible avant de l’envoyer, utilisez des outils dans le navigateur qui traitent le fichier en local — il ne passe par le serveur de personne d’autre. Compresser le PDF, Extraire des pages PDF, Réorganiser les pages du PDF fonctionnent tous sur votre appareil.",
    },
    {
      title: "Fin de vie : pensez à la conservation et à la suppression",
      body: "Ne gardez un PDF sensible que le temps où vous en avez réellement besoin. Le destinataire devrait faire de même. Envisagez de demander au destinataire de confirmer la suppression une fois le fichier utilisé, en particulier pour des pièces d’identité à usage unique.",
    },
    {
      title: "Retirez les métadonnées avant l’envoi",
      body: "Les PDF conservent souvent des noms d’auteur, des noms de fichier d’origine, un historique de modifications. Réexporter depuis une source propre supprime la plupart de ces éléments. L’application PDF Editor et d’autres outils permettent aussi de nettoyer explicitement les métadonnées.",
    },
  ],
  tips: [
    "N’envoyez pas un mot de passe dans le même message que le fichier protégé qu’il déverrouille. Envoyez le fichier sur un canal, le mot de passe sur un autre.",
    "Traitez les scans de pièces d’identité comme des documents à usage unique. Une fois que le destinataire les a reçus, demandez-lui de les supprimer, sauf obligation réglementaire de les conserver.",
    "Ne réutilisez pas les mêmes mots de passe pour plusieurs PDF sensibles. Si l’un fuite, les autres restent protégés.",
    "Évitez le wifi public pour envoyer des fichiers sensibles. Utilisez un partage de connexion ou attendez un réseau de confiance.",
    "Passez en revue vos PDF sensibles une fois par an. La plupart ne sont plus nécessaires — supprimez-les de façon sûre et réduisez la surface d’exposition.",
  ],
  mobileNote:
    "Les téléphones conservent et envoient désormais de nombreux PDF sensibles (contrats signés, scans de pièces d’identité). L’application PDF Editor les traite localement sur l’appareil — compression, signature, protection par mot de passe — pour que le contenu sensible n’ait jamais à quitter le téléphone avant l’envoi.",
  faq: [
    {
      q: "La protection par mot de passe d’un PDF est-elle vraiment robuste ?",
      a: "Le chiffrement AES moderne appliqué aux PDF est solide. Le point faible est en général le mot de passe lui-même — un mot de passe faible reste la seule brèche facile. Utilisez des mots de passe longs et uniques.",
    },
    {
      q: "Faut-il toujours chiffrer les PDF sensibles ?",
      a: "Oui, au repos comme en transit. Le chiffrement du disque protège au repos ; les mots de passe PDF ou les canaux chiffrés protègent en transit.",
    },
    {
      q: "Qu’en est-il du stockage cloud pour les PDF sensibles ?",
      a: "Acceptable avec un chiffrement à connaissance nulle (le fournisseur ne peut pas lire vos fichiers) ou avec un chiffrement côté client (vous chiffrez avant l’envoi). Le stockage cloud classique convient pour des fichiers ordinaires, pas pour du contenu hautement sensible.",
    },
    {
      q: "Comment caviarder une partie sensible d’un PDF ?",
      a: "Un vrai caviardage transforme le texte en image et le remplace. L’application PDF Editor le permet. Un simple cadre noir superposé ne caviarde rien — le texte sous-jacent reste extractible.",
    },
    {
      q: "Puis-je supprimer un PDF de façon sûre ?",
      a: "Sur les disques SSD, la suppression sûre est moins directe que sur les disques mécaniques. Déplacez le fichier vers un support chiffré, puis supprimez-le et laissez le TRIM du disque effacer les secteurs. Pour un niveau de sensibilité très élevé, le chiffrement intégral du disque dès le départ est la bonne approche.",
    },
  ],
  related: [
    { label: "Sécurité PDF — protéger un PDF par mot de passe", path: "/pdf-security" },
    { label: "Comment protéger un fichier PDF par mot de passe", path: "/guides/how-to-protect-pdf-file" },
    { label: "Comment partager un PDF en toute discrétion", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Comment éviter de transférer des documents sensibles", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "Sécurité PDF — protéger par mot de passe et chiffrer", path: "/pdf-security" },
};

export default content;
