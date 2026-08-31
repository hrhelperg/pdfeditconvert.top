import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-pdf-from-camera",
  h1: "Comment créer un PDF avec l’appareil photo de son téléphone",
  description:
    "Transformez une photo en PDF — et comprenez pourquoi une vraie numérisation vaut mieux qu’un cliché brut. La capture rapide pour les reçus, la numérisation pour les documents.",
  updated: "2026-05-23",
  intro: [
    "Pointer son appareil photo vers quelque chose et en tirer un PDF est le moyen le plus rapide de capturer le monde physique sous forme de document — un reçu, un tableau blanc après une réunion, une page d’un livre, une affiche sur un mur. Mais il existe une vraie différence entre une photo brute enveloppée dans un PDF et une vraie numérisation, et savoir laquelle vous faut vous évite un résultat de travers, strié de reflets.",
    "Ce guide couvre les deux : la capture rapide, où une photo prise à l’appareil photo devient une page PDF grâce à l’outil gratuit Image en PDF, et la vraie numérisation, où l’application PDF Editor détecte les bords du document, corrige l’angle et peut reconnaître le texte. Les deux fonctionnent sur votre appareil sans rien envoyer sur un serveur.",
    "Pour un cliché dont vous avez juste besoin pour vos archives, la capture rapide suffit. Pour tout ce qui doit ressembler à un document — plat, carré, lisible — la numérisation vaut le moment supplémentaire.",
  ],
  steps: [
    {
      title: "Décidez : capture rapide ou vraie numérisation",
      body: "Un reçu pour vos propres archives peut être une photo rapide. Un document que vous allez envoyer ou devez lire clairement mérite une vraie numérisation avec détection des bords et correction d’angle.",
    },
    {
      title: "Capture rapide : photographiez-le bien",
      body: "Photographiez droit au-dessus, avec un éclairage régulier, en remplissant le cadre avec la page et en évitant les ombres de votre main ou de votre téléphone. Une bonne photo fait une bonne page PDF.",
    },
    {
      title: "Transformez la photo en PDF",
      body: "Ouvrez l’outil Image en PDF, ajoutez la photo (ou plusieurs), mettez-les dans l’ordre, et créez le PDF. Chaque cliché devient une page.",
    },
    {
      title: "Vraie numérisation : utilisez le scanner de l’application",
      body: "Dans l’application PDF Editor, utilisez la fonction de numérisation. Elle trouve automatiquement les bords du document, redresse la perspective et nettoie la page pour qu’elle ressemble à une numérisation, pas à un instantané.",
    },
    {
      title: "Capturez plusieurs pages en séquence",
      body: "Pour un document de plusieurs pages, le scanner permet de photographier page après page dans un seul PDF, en les gardant dans l’ordre au fur et à mesure.",
    },
    {
      title: "Rendez-le consultable si besoin",
      body: "Une photo brute n’a pas de couche de texte. L’application peut exécuter la reconnaissance de texte pour que les pages capturées deviennent consultables — utile pour tout ce que vous devrez plus tard retrouver par son contenu.",
    },
  ],
  tips: [
    "Une photo brute est l’image d’un document ; une numérisation est une version corrigée, aplatie et lisible. Adaptez l’effort à l’usage du résultat.",
    "Un éclairage régulier et un angle bien droit font plus pour une page capturée que n’importe quel filtre. Les reflets et les ombres sont plus faciles à éviter qu’à corriger.",
    "Un fond sombre et uni derrière la page aide la détection des bords à trouver le document proprement.",
    "Les photos capturées comme les numérisations peuvent être volumineuses — compressez le PDF s’il part vers un e-mail ou un portail de dépôt.",
    "La capture rapide n’a pas de texte consultable. Si vous devrez rechercher dans le document plus tard, numérisez avec reconnaissance de texte plutôt que de simplement le photographier.",
  ],
  mobileNote:
    "Votre appareil photo est déjà dans votre main, c’est pourquoi capturer des documents est une tâche naturellement adaptée au téléphone. L’application PDF Editor numérise avec détection automatique des bords, capture multipage et reconnaissance de texte — tout hors ligne — transformant ce qui est devant vous en un PDF propre et partageable sur-le-champ.",
  faq: [
    {
      q: "Quelle est la différence entre photographier et numériser un document ?",
      a: "Une photo est une image brute enveloppée dans un PDF — bien pour des archives rapides. Une numérisation détecte les bords de la page, corrige l’angle et l’aplatit pour qu’elle ressemble à un vrai document. Numérisez tout ce que vous allez envoyer ou devez lire clairement.",
    },
    {
      q: "Puis-je faire un PDF à partir d’une seule photo prise à l’appareil ?",
      a: "Oui. Prenez la photo, puis utilisez l’outil Image en PDF pour la transformer (ou en transformer plusieurs) en un PDF, une page par cliché.",
    },
    {
      q: "Un PDF créé à l’appareil photo sera-t-il consultable ?",
      a: "Pas à partir d’une photo brute — il n’y a pas de couche de texte. L’application PDF Editor peut exécuter la reconnaissance de texte pendant la numérisation pour que le résultat soit consultable.",
    },
    {
      q: "Mes documents capturés sont-ils envoyés quelque part ?",
      a: "Non. L’outil Image en PDF et le scanner de l’application fonctionnent tous les deux sur votre appareil, donc les documents capturés restent privés.",
    },
    {
      q: "Comment capturer plusieurs pages dans un seul PDF ?",
      a: "Utilisez le scanner de l’application, qui permet de photographier page après page dans un seul document et les garde dans l’ordre. L’outil Image en PDF combine aussi plusieurs photos en un seul fichier.",
    },
  ],
  related: [
    { label: "Numériser en PDF — capturer du papier avec son appareil photo", path: "/scan-to-pdf" },
    { label: "Image en PDF — transformer des photos en PDF", path: "/image-to-pdf" },
    { label: "Comment numériser des documents en PDF avec son téléphone", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Comment convertir des photos en PDF sur iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Numériser en PDF", path: "/scan-to-pdf" },
};

export default content;
