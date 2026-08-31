import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-upload-errors",
  h1: "Comment résoudre les erreurs de dépôt d’un PDF (trop lourd, refusé, bloqué)",
  description:
    "Les portails refusent un PDF pour un petit nombre de raisons : poids, nombre de pages, format trop strict ou transfert instable. Comment identifier la vôtre et faire accepter le fichier au coup suivant.",
  updated: "2026-05-29",
  intro: [
    "Les portails de dépôt sont plus stricts que l’e-mail. Beaucoup rejettent tout ce qui dépasse 5 Mo, certains 2 Mo, certains refusent les fichiers multipages, et d’autres échouent discrètement sur tout ce qui n’est pas un PDF/A parfaitement conforme. Les messages d’erreur qu’ils affichent sont rarement précis — « fichier trop volumineux », « format invalide », « échec du dépôt » — et la plupart signifient autre chose que ce qu’ils disent.",
    "Les vraies causes sont généralement l’une de quatre : le fichier dépasse la limite du portail, le format interne du fichier n’est pas standard, votre connexion a échoué en cours de dépôt, ou le portail attend une déclinaison particulière du PDF (PDF/A, une seule page, une version basse). Chacune a une correction différente, et la bonne correction dépend de laquelle c’est.",
    "Ce guide parcourt les diagnostics par symptôme et montre comment corriger chacun dans votre navigateur. La plupart des dépôts échoués réussissent à la deuxième tentative une fois la vraie cause traitée.",
  ],
  steps: [
    {
      title: "Lisez le message d’erreur au pied de la lettre",
      body: "« Le fichier dépasse la limite de taille » signifie compression. « Fichier invalide » signifie format. « Échec du dépôt » signifie généralement réseau. Traitez les mots comme la première preuve, même quand ils sont laconiques.",
    },
    {
      title: "Compressez agressivement si la taille est le problème",
      body: "Compresser un PDF dans votre navigateur réduit significativement les fichiers, surtout ceux riches en numérisations. Essayez d’abord la compression la plus forte ; si la qualité chute trop, reculez d’un niveau. Certains portails plafonnent à 2 Mo — la plupart des compresseurs font passer un document typique bien en dessous.",
    },
    {
      title: "Divisez un gros PDF multipage si nécessaire",
      body: "Si le portail accepte plusieurs fichiers plus petits mais rejette un gros fichier unique, Diviser un PDF ou Extraire des pages PDF permet de découper le fichier en sections. Numérotez clairement les parties dans le nom du fichier pour que le destinataire puisse les rejoindre.",
    },
    {
      title: "Réexportez en PDF standard si le format est rejeté",
      body: "Certains portails n’acceptent que des fichiers enregistrés en PDF 1.4 ou PDF/A. La correction la plus simple est d’ouvrir le fichier dans n’importe quel lecteur et de l’imprimer en PDF — la copie résultante est simple, standard, et généralement acceptée.",
    },
    {
      title: "Vérifiez le nombre de pages et les dimensions",
      body: "Les portails administratifs et éducatifs limitent parfois le nombre de pages ou le format de papier. Si le portail liste des exigences, respectez-les : Letter ou A4 uniquement, pas de pages surdimensionnées, pas de fonds transparents. Extraire des pages PDF retire tout ce qui dépasse.",
    },
    {
      title: "Réessayez sur une connexion stable",
      body: "Une coupure Wi-Fi en cours de dépôt ressemble à un rejet. Changez de réseau ou réessayez sur une autre connexion avant de supposer que le fichier lui-même est le problème.",
    },
  ],
  tips: [
    "Compressez avant de diviser. Un fichier unique compressé tient souvent dans la limite ; s’il ne tient toujours pas, divisez la copie compressée.",
    "Évitez le chiffrement ou la protection par mot de passe lors du dépôt sur un portail — beaucoup bloquent les fichiers protégés même s’ils acceptent le contenu sous-jacent.",
    "Surveillez les limites de caractères cachées dans les noms de fichiers. Certains portails rejettent les noms avec espaces, accents ou ponctuation.",
    "Si le portail accepte le JPG mais rejette le PDF, vous pouvez exporter les pages du PDF en images avec PDF vers images et les envoyer — utile pour des exigences image uniquement comme une soumission de pièce d’identité.",
    "Confirmez toujours qu’un dépôt réussi s’est bien terminé (certains portails échouent silencieusement). Actualisez la page de reçu et cherchez une confirmation, pas seulement l’absence d’erreur.",
  ],
  mobileNote:
    "Les dépôts depuis un téléphone échouent plus souvent que depuis un ordinateur portable, simplement parce que la connexion coupe plus souvent. L’application PDF Editor compresse et divise les fichiers hors ligne, ce qui raccourcit l’étape de dépôt elle-même — un fichier plus petit se dépose plus vite et survit à un réseau capricieux.",
  faq: [
    {
      q: "À quelle taille la plupart des portails limitent-ils ?",
      a: "Les plafonds courants sont 2 Mo, 5 Mo et 10 Mo. Les portails administratifs et universitaires ont tendance à être les plus stricts ; les portails commerciaux sont plus indulgents. Vérifiez la section d’aide du portail si ce n’est pas indiqué d’emblée.",
    },
    {
      q: "La compression résout-elle toujours un rejet pour taille ?",
      a: "Généralement oui, surtout pour les fichiers riches en numérisations. Une numérisation de 30 Mo se compresse souvent proprement à moins de 5 Mo. Les PDF surtout composés de texte, déjà petits, ne se compresseront pas beaucoup plus.",
    },
    {
      q: "Pourquoi le portail rejette-t-il mon fichier comme « invalide » ?",
      a: "Soit le fichier n’est pas vraiment un PDF (certains téléchargements sont mal nommés), soit il utilise des fonctionnalités PDF que l’analyseur du portail ne prend pas en charge. Réexporter via une impression en PDF produit une copie de base presque toujours acceptée.",
    },
    {
      q: "Puis-je contourner la limite de taille en le mettant dans une archive ZIP ?",
      a: "Presque jamais. Les portails qui limitent les PDF limitent généralement aussi la taille totale du dépôt et rejettent complètement les archives ZIP. Compresser le PDF lui-même est la bonne voie.",
    },
    {
      q: "Et si le portail veut spécifiquement du PDF/A ?",
      a: "Le PDF/A est une déclinaison d’archivage. Microsoft Word et Google Docs peuvent exporter directement dans ce format. Sinon, ouvrez le fichier, imprimez-le en PDF, et vérifiez les options d’export pour un réglage compatible A.",
    },
  ],
  related: [
    { label: "Compresser un PDF — réduire pour respecter les limites du portail", path: "/compress-pdf" },
    { label: "Diviser un PDF — découper les gros fichiers en parties acceptées", path: "/split-pdf" },
    { label: "Comment réduire un PDF avant de le déposer sur un portail", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
    { label: "Comment réduire la taille d’un PDF pour l’e-mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "Compresser un PDF — réduire la taille dans votre navigateur", path: "/compress-pdf" },
};

export default content;
