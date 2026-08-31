import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-compression-settings",
  h1: "Quel niveau de compression PDF choisir — guide de décision",
  description:
    "Quel réglage pour l’e-mail, l’impression, l’archivage ou le web ? Un tableau pratique qui associe chaque niveau à un usage, avec les compromis assumés.",
  updated: "2026-05-23",
  intro: [
    "Il n’existe pas un seul « meilleur » réglage de compression — il n’y a que le meilleur réglage pour ce que vous allez faire du fichier. Le niveau parfait pour envoyer un reçu par e-mail ruinerait un document destiné à l’imprimeur. Alors plutôt qu’un chiffre magique, ce qu’il vous faut, c’est un moyen rapide d’associer le réglage à l’usage.",
    "Ce guide est justement cette grille de décision. Il fait correspondre les niveaux de l’outil gratuit Compresser un PDF — Faible, Recommandé et Fort — aux situations où chacun a du sens, et explique le compromis derrière chaque choix. L’outil fonctionne dans votre navigateur, sans rien envoyer sur un serveur, et affiche le gain de taille pour que vous puissiez vérifier votre choix.",
    "Lisez-le une fois et vous arrêterez de deviner — vous saurez quel niveau choisir dès que vous verrez à quoi le document est destiné.",
  ],
  steps: [
    {
      title: "Pour les pièces jointes e-mail : Recommandé",
      body: "Le point d’équilibre par défaut. Il passe sous la limite de 25 Mo de Gmail et celle d’environ 20 Mo d’Outlook pour la plupart des fichiers, tout en gardant le document confortablement lisible à l’écran.",
    },
    {
      title: "Pour les portails de dépôt aux plafonds serrés : Fort",
      body: "Les portails administratifs et RH plafonnent souvent à quelques mégaoctets. Fort vous permet d’y arriver. Les documents numérisés le supportent bien ; vérifiez que les documents avec mise en page restent acceptables.",
    },
    {
      title: "Pour l’impression ou les archives officielles : Faible",
      body: "Quand le fichier sera imprimé ou conservé comme document de référence, utilisez Faible pour préserver un maximum de détail. Ne compressez que si le fichier doit vraiment être plus léger.",
    },
    {
      title: "Pour l’archivage à long terme : minimal ou aucun",
      body: "Les archives doivent privilégier la fidélité plutôt que la taille. Compressez légèrement, voire pas du tout, et gardez un exemplaire non compressé — vous pourrez toujours réduire une copie plus tard, mais vous ne pourrez pas restaurer le détail perdu.",
    },
    {
      title: "Pour le web et la lecture à l’écran uniquement : Recommandé à Fort",
      body: "Les documents qui ne seront jamais lus que sur écran tolèrent une compression plus forte. Penchez vers Fort pour des téléchargements web rapides, là où la qualité d’impression n’a aucune importance.",
    },
    {
      title: "Confirmez avec la taille avant/après",
      body: "Quel que soit votre choix, l’outil affiche le gain. Si un niveau plus léger atteint déjà votre objectif, gardez-le — il n’y a aucun mérite à trop compresser.",
    },
  ],
  tips: [
    "L’usage d’abord, le réglage ensuite. Décidez ce qui va arriver au fichier, puis choisissez le niveau — pas l’inverse.",
    "Les documents numérisés supportent des réglages plus forts que les documents avec mise en page soignée. Le même niveau Fort qui convient à un formulaire numérisé peut trop adoucir une brochure riche en photos.",
    "Chaque niveau transforme les pages en images et supprime le texte sélectionnable. Si le document doit rester consultable, cela pèse autant dans votre choix que la taille.",
    "Les PDF surtout composés de texte ou de vecteurs rétrécissent à peine, quel que soit le réglage — il y a peu de données image à compresser, alors n’attendez pas de miracle de Fort.",
    "Gardez un exemplaire non compressé pour tout ce qui compte. La compression est à sens unique ; l’exemplaire original vous permet de redériver n’importe quelle taille plus tard.",
  ],
  mobileNote:
    "L’application PDF Editor facilite l’association du réglage à l’usage en déplacement : compressez hors ligne, prévisualisez le résultat et ajustez le niveau avant de partager. Elle prend aussi en charge les fichiers protégés et garde tout sur l’appareil.",
  faq: [
    {
      q: "Quel est le meilleur réglage de compression, en général ?",
      a: "Il n’y en a pas — tout dépend de l’usage. Recommandé convient à l’e-mail, Fort convient aux plafonds de dépôt serrés et aux fichiers destinés à l’écran, et Faible (ou aucune compression) convient à l’impression et à l’archivage.",
    },
    {
      q: "Quel réglage choisir pour envoyer un PDF par e-mail ?",
      a: "Recommandé. Il passe sous les limites habituelles de 20 à 25 Mo pour la plupart des fichiers, tout en gardant le document lisible. Passez à Fort seulement si vous dépassez encore la limite.",
    },
    {
      q: "Que dois-je utiliser pour un document que je vais imprimer ?",
      a: "Faible, ou aucune compression du tout. L’impression a besoin de détail : préservez la qualité et ne réduisez le fichier que s’il est vraiment trop volumineux à gérer.",
    },
    {
      q: "Les réglages les plus forts suppriment-ils le texte consultable ?",
      a: "Tous les niveaux transforment les pages en images, ce qui supprime le texte sélectionnable. Si le document doit rester consultable, gardez l’original, quel que soit le niveau choisi.",
    },
    {
      q: "Pourquoi Fort n’a-t-il presque pas réduit mon PDF de texte ?",
      a: "La compression cible les données image. Un PDF surtout composé de texte ou de vecteurs a peu de choses à compresser, donc même Fort ne produit qu’un petit gain. Ce fichier est volumineux pour une autre raison.",
    },
  ],
  related: [
    { label: "Compresser un PDF — choisissez votre niveau", path: "/compress-pdf" },
    { label: "Comment compresser un PDF sans trop perdre en qualité", path: "/guides/compress-pdf-without-losing-too-much-quality" },
    { label: "Comment compresser un PDF numérisé", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Comment réduire la taille d’un PDF avant de le déposer", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "Compresser un PDF", path: "/compress-pdf" },
};

export default content;
