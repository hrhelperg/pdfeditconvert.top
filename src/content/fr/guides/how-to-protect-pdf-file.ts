import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-pdf-file",
  h1: "Comment protéger un PDF par mot de passe",
  description:
    "Ajoutez un mot de passe et un chiffrement à un PDF sur mobile ou sur ordinateur. Guide pratique avec l’application PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Beaucoup de documents ne devraient pas circuler en PDF ordinaire : fiches de paie, contrats signés, scans de pièces d’identité, copies d’accords de confidentialité, dossiers médicaux, relevés financiers. Un mot de passe associé à un vrai chiffrement transforme le fichier en quelque chose que seul le destinataire prévu peut ouvrir — même si l’e-mail est transféré, intercepté, ou reste indéfiniment dans une boîte professionnelle.",
    "Ce guide détaille l’ajout d’une protection par mot de passe à un PDF avec l’application PDF Editor sur iPhone ou Android. Il couvre aussi ce qu’il faut éviter : mots de passe faibles, chiffrements dépassés, et l’erreur classique consistant à partager le mot de passe dans le même canal que le document.",
    "À la fin, vous aurez une routine de protection reproductible, applicable à un document sensible en moins d’une minute, avec un chiffrement AES-256 robuste accepté par les politiques de sécurité des entreprises.",
  ],
  steps: [
    {
      title: "Ouvrez le PDF à protéger",
      body: "Importez le document dans PDF Editor depuis Fichiers, iCloud Drive, Google Drive ou toute application de partage. Tout le circuit se déroule localement — votre fichier ne quitte jamais l’appareil.",
    },
    {
      title: "Touchez Protéger dans le menu des outils",
      body: "Il se trouve dans les outils du document. Choisissez « Protéger par mot de passe » pour exiger un mot de passe à l’ouverture du fichier, ou « Restreindre les permissions » pour un accès en lecture seule.",
    },
    {
      title: "Choisissez un mot de passe robuste",
      body: "Au moins 12 caractères, mélangeant lettres, chiffres et symboles. Évitez les mots courants et les informations personnelles (dates de naissance, noms). Générez-en un avec votre gestionnaire de mots de passe si vous en avez un — c’est le bon réflexe.",
    },
    {
      title: "Confirmez le mot de passe",
      body: "Saisissez-le une seconde fois pour éviter une faute de frappe. Une fois le fichier chiffré, aucune récupération n’est possible en cas d’erreur.",
    },
    {
      title: "Choisissez des restrictions (facultatif)",
      body: "Autorisez la lecture mais bloquez l’impression, la copie de texte ou l’extraction de pages. Utile quand le destinataire doit lire le document sans pouvoir en redistribuer des extraits.",
    },
    {
      title: "Enregistrez un nouveau fichier",
      body: "Gardez la version originale non protégée dans un endroit sûr — si vous oubliez un jour le mot de passe, vous y aurez toujours accès. Enregistrez la copie protégée sous un nom clairement différent.",
    },
    {
      title: "Partagez le mot de passe par un canal séparé",
      body: "Envoyez le PDF chiffré par e-mail ; communiquez le mot de passe par SMS ou par téléphone. Ne mettez jamais les deux dans le même e-mail — si la boîte de messagerie est compromise, les deux fuitent ensemble. Une petite habitude qui évite la plupart des incidents réels.",
    },
  ],
  tips: [
    "AES-256 est le bon chiffrement — l’application l’utilise par défaut. Si un outil propose un chiffrement « compatible » ou « ancien », il s’agit en général d’un chiffrement cassé ; évitez-les.",
    "Ne réutilisez pas le même mot de passe pour plusieurs documents. Si l’un fuit, vous ne voulez pas d’effet domino.",
    "Si le destinataire n’est pas technophile, donnez-lui des instructions simples : « Voici le mot de passe pour ouvrir le fichier : XYZ » suffit.",
    "Utilisez un gestionnaire de mots de passe pour partager des mots de passe en toute sécurité quand c’est possible — la plupart ont une fonction de partage qui ne demande pas de compte aux deux parties.",
    "Pour les fichiers très sensibles (juridique, médical, financier), envisagez les liens de partage sécurisé de 1Password ou Bitwarden plutôt qu’un mot de passe par SMS.",
  ],
  mobileNote:
    "La protection d’un PDF s’exécute entièrement sur l’appareil. Même en mode avion, vous pouvez verrouiller un contrat avant de l’envoyer dès que vous retrouvez une connexion. Cela compte pour les voyageurs qui manipulent des documents sensibles depuis un hall d’hôtel ou un aéroport — la protection se fait localement, et seule l’étape d’envoi nécessite une connexion.",
  faq: [
    {
      q: "Que se passe-t-il si j’oublie le mot de passe ?",
      a: "Il n’y a pas de porte dérobée. Un chiffrement robuste signifie qu’aucune récupération n’est possible sans le mot de passe. Stockez toujours vos mots de passe dans un gestionnaire plutôt que dans votre mémoire.",
    },
    {
      q: "Le mot de passe ralentit-il l’ouverture du fichier ?",
      a: "Aucun ralentissement notable. Le déchiffrement se fait une fois à l’ouverture et prend quelques millisecondes, même sur un appareil ancien.",
    },
    {
      q: "Puis-je retirer le mot de passe plus tard ?",
      a: "Oui, si vous le connaissez. Ouvrez le PDF protégé, saisissez le mot de passe, puis utilisez « Retirer la protection » dans le menu Protéger.",
    },
    {
      q: "Le mot de passe est-il vraiment sécurisé, ou n’est-ce qu’une façade ?",
      a: "C’est une vraie sécurité. L’AES-256 avec un mot de passe robuste est le même chiffrement utilisé par les systèmes d’entreprise, les gestionnaires de mots de passe et de nombreuses applications bancaires. Le maillon faible reste toujours le mot de passe lui-même — choisissez-en un solide.",
    },
    {
      q: "Qu’en est-il de la rédaction (masquage) de contenu ?",
      a: "La rédaction est différente de la protection par mot de passe. Elle supprime définitivement un contenu (comme masquer un nom) ; la protection par mot de passe conserve le contenu mais exige une authentification pour le consulter. Pour un document sensible, les deux peuvent se cumuler — masquer ce qui ne doit pas figurer dans le fichier, protéger par mot de passe ce qui reste.",
    },
  ],
  related: [
    { label: "Sécurité PDF — présentation complète", path: "/pdf-security" },
    { label: "Signer un PDF avant de le verrouiller", path: "/sign-pdf" },
    { label: "Flux PDF pour entreprise", path: "/pdf-for-business" },
  ],
  parentHub: { label: "Sécurité PDF", path: "/pdf-security" },
};

export default content;
