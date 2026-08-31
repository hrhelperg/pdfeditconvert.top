import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-add-watermark-to-pdf",
  h1: "Comment ajouter un filigrane à un PDF (gratuit)",
  description:
    "Apposez une mention comme BROUILLON ou CONFIDENTIEL sur chaque page d’un PDF, dans votre navigateur. Ce qu’un filigrane protège vraiment, et ce qu’il ne protège pas.",
  updated: "2026-05-23",
  intro: [
    "Un filigrane est une mention écrite en travers de la page — BROUILLON, CONFIDENTIEL, un nom d’entreprise, l’e-mail d’un destinataire. On y a recours pour signaler un statut (« ce n’est pas la version finale »), marquer une propriété, ou décourager une redistribution informelle en indiquant à qui la copie était destinée.",
    "Ce guide utilise l’outil gratuit Ajouter un filigrane à un PDF, qui pose un filigrane texte sur chaque page directement dans votre navigateur — rien n’est envoyé. C’est rapide et confidentiel, et utile précisément pour les usages de signalisation ci-dessus.",
    "Il est tout aussi important d’être clair sur ce qu’un filigrane n’est pas : ce n’est pas une mesure de sécurité. Nous verrons où les filigranes aident vraiment et où il faut une vraie protection à la place, pour ne pas leur demander un travail qu’ils ne peuvent pas faire.",
  ],
  steps: [
    {
      title: "Ouvrez l’outil Ajouter un filigrane à un PDF",
      body: "Rendez-vous sur l’outil Ajouter un filigrane à un PDF dans votre navigateur. Il fonctionne sur votre appareil — pas d’envoi, pas de compte.",
    },
    {
      title: "Ajoutez votre PDF",
      body: "Glissez le fichier sur la zone de dépôt ou cliquez pour le choisir. Le filigrane s’appliquera à chaque page du document.",
    },
    {
      title: "Saisissez le texte du filigrane",
      body: "Entrez la mention voulue — BROUILLON, CONFIDENTIEL, le nom de votre entreprise, ou un identifiant de destinataire. Restez court pour que ça se lise proprement en travers de la page.",
    },
    {
      title: "Appliquez le filigrane",
      body: "Lancez l’outil. Votre texte est apposé sur chaque page d’une nouvelle copie du document.",
    },
    {
      title: "Vérifiez la lisibilité dans les deux sens",
      body: "Confirmez que le filigrane est assez visible pour remplir son rôle, mais assez léger pour que le texte sous-jacent reste lisible. Un filigrane qui masque le contenu manque son but.",
    },
    {
      title: "Téléchargez la copie filigranée",
      body: "Enregistrez le résultat comme un nouveau fichier pour garder un original propre et sans mention pour vos propres archives.",
    },
  ],
  tips: [
    "Un filigrane est une mention visuelle, pas une protection. N’importe qui peut faire une capture d’écran, imprimer ou retraiter la page — traitez-le comme un signal, pas comme un verrou.",
    "Utilisez un filigrane propre au destinataire (son nom ou son e-mail) sur les copies partagées pour décourager le transfert — on est moins désinvolte avec un document visiblement marqué à son nom.",
    "Gardez le texte du filigrane court. Une longue phrase répétée en travers de la page concurrence le contenu et donne un rendu encombré.",
    "Filigranez toujours une copie, jamais votre version maîtresse. Tout l’intérêt est que l’original reste propre.",
    "Si vous devez vraiment empêcher l’ouverture, la copie ou la modification, c’est un travail de mot de passe et de chiffrement — voir le guide sur la protection d’un PDF, pas un filigrane.",
  ],
  mobileNote:
    "Marquer un document BROUILLON ou CONFIDENTIEL avant de l’envoyer depuis votre téléphone prend quelques secondes dans l’application PDF Editor, qui applique les filigranes hors connexion et permet de signer ou de protéger dans la même session — utile quand une proposition part avant d’être vraiment finalisée.",
  faq: [
    {
      q: "Un filigrane protège-t-il mon document ?",
      a: "Non. Un filigrane est une mention visible, pas une mesure de sécurité. Il signale un statut ou une propriété mais n’empêche ni la copie, ni l’impression, ni la modification. Pour cela, utilisez la protection par mot de passe et le chiffrement.",
    },
    {
      q: "Le filigrane apparaîtra-t-il sur chaque page ?",
      a: "Oui. L’outil appose votre texte sur toutes les pages du document, donc la mention est cohérente d’un bout à l’autre.",
    },
    {
      q: "Le filigrane peut-il être retiré ?",
      a: "Une personne déterminée peut contourner n’importe quel filigrane visible, ce pour quoi c’est un moyen de dissuasion plutôt qu’une protection. Gardez votre original sans mention à part.",
    },
    {
      q: "Mon PDF est-il envoyé quelque part ?",
      a: "Non. Le filigrane s’applique dans votre navigateur, sur votre appareil, donc le fichier reste confidentiel.",
    },
    {
      q: "Puis-je ajouter un filigrane avec une image ou un logo ?",
      a: "L’outil dans le navigateur applique un filigrane texte. Pour une superposition d’image ou de logo, l’application mobile PDF Editor offre plus d’options.",
    },
  ],
  related: [
    { label: "Ajouter un filigrane à un PDF — dans votre navigateur", path: "/add-watermark-to-pdf" },
    { label: "Comment protéger un PDF par mot de passe", path: "/guides/how-to-protect-pdf-file" },
    { label: "Comment préparer un PDF avant de l’envoyer", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Sécurité PDF — protéger vos documents", path: "/pdf-security" },
  ],
  parentHub: { label: "Ajouter un filigrane à un PDF", path: "/add-watermark-to-pdf" },
};

export default content;
