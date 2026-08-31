import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-jpg-for-documents",
  h1: "PDF ou JPG pour un document — arrêtez d’envoyer des photos",
  description:
    "Pourquoi une photo JPG d’un document est le mauvais fichier à envoyer, quand le PDF s’impose, et comment transformer une photo en véritable document.",
  updated: "2026-05-23",
  intro: [
    "Quelqu’un demande un document, et le plus rapide semble être de le photographier et d’envoyer le JPG. Cela paraît efficace. C’est aussi pour cela que l’autre personne finit par plisser les yeux devant une image de travers, striée de reflets, incapable de l’imprimer proprement, de la rechercher ou de la classer avec d’autres documents. Pour un vrai document, une photo JPG est presque toujours le mauvais format — et un PDF est presque toujours le bon.",
    "Ce guide explique la différence là où elle compte : les documents. Ce n’est pas un tableau de fonctionnalités neutre — c’est un plaidoyer pour convertir cette photo en PDF avant de l’envoyer, et un moyen rapide de le faire exactement avec l’outil gratuit Image en PDF, qui fonctionne sur votre appareil sans rien envoyer sur un serveur.",
    "Si vous avez déjà reçu cinq JPG qui auraient dû être un seul PDF bien fait, voici le guide à renvoyer.",
  ],
  steps: [
    {
      title: "Comprenez ce qu’une photo JPG perd",
      body: "Un document photographié est une image unique : pas de plusieurs pages dans un seul fichier, pas de texte consultable, souvent de travers et mal éclairé. C’est la photo d’un document, pas un document.",
    },
    {
      title: "Voyez ce que le PDF apporte à un document",
      body: "Le PDF tient plusieurs pages dans un seul fichier, s’imprime à une taille prévisible, s’ouvre de façon identique partout, et se range naturellement à côté d’autres documents. C’est le format que le reste du monde classe et archive.",
    },
    {
      title: "Décidez selon l’usage",
      body: "Si le destinataire va le lire, l’imprimer, le classer ou le combiner avec d’autres documents, envoyez un PDF. Un simple JPG ne convient que quand l’image elle-même est le sujet — une photo, pas de la paperasse.",
    },
    {
      title: "Convertissez la photo en PDF",
      body: "Ouvrez l’outil Image en PDF, ajoutez vos JPG, ordonnez-les, et créez un PDF. Plusieurs pages photographiées deviennent un seul document au lieu d’un éparpillement d’images.",
    },
    {
      title: "Faites-le ressembler à un document",
      body: "Recadrez et redressez d’abord les photos pour que les pages soient bien carrées. Pour tout ce qui compte, une vraie numérisation avec détection des bords bat une photo brute.",
    },
    {
      title: "Ajustez la taille et envoyez",
      body: "Compressez le PDF si les pages photographiées l’ont alourdi, puis envoyez un seul fichier propre que le destinataire pourra vraiment utiliser.",
    },
  ],
  tips: [
    "Le signe qui montre que vous auriez dû envoyer un PDF : le destinataire vous demande de « l’envoyer comme un vrai document » ou n’arrive pas à l’imprimer proprement.",
    "Les pages multiples sont décisives. Deux JPG d’un formulaire de deux pages, c’est le désordre ; un PDF, c’est un document.",
    "Un JPG de texte n’est pas consultable. Les PDF faits à partir de vrai texte le sont, et même les PDF numérisés peuvent devenir consultables grâce à la reconnaissance de texte.",
    "Le JPG est le bon choix quand l’image est le contenu — une photo de produit, une capture d’écran que vous partagez comme image. C’est le mauvais choix quand le contenu est un document.",
    "Convertir ne corrige pas une mauvaise photo. Redressez et éclairez bien la page avant de convertir, ou numérisez-la correctement.",
  ],
  mobileNote:
    "Puisque le JPG fautif commence presque toujours comme une photo de téléphone, la correction a aussi sa place sur le téléphone. L’application PDF Editor transforme les photos de la pellicule en PDF, ou numérise correctement la page avec détection des bords et reconnaissance de texte — pour que ce que vous envoyez soit un document, pas un instantané.",
  faq: [
    {
      q: "Pourquoi ne pas simplement envoyer un JPG d’un document ?",
      a: "Une photo JPG est une image unique, souvent de travers, sans texte consultable, sans support multipage et avec une taille d’impression imprévisible. Pour un document, cela crée du travail pour le destinataire. Un PDF évite tout cela.",
    },
    {
      q: "Quand le JPG est-il vraiment le bon choix ?",
      a: "Quand l’image elle-même est le contenu — une photographie, une capture d’écran que vous partagez comme image. Le JPG est mauvais précisément quand le contenu est un document que quelqu’un doit lire, imprimer ou classer.",
    },
    {
      q: "Comment transformer une photo en document PDF ?",
      a: "Utilisez l’outil Image en PDF : ajoutez vos JPG, ordonnez-les, et créez un PDF. Pour un meilleur résultat, redressez d’abord les photos ou numérisez correctement la page.",
    },
    {
      q: "Le PDF converti sera-t-il consultable ?",
      a: "Pas à partir d’une simple photo — c’est toujours une image. Pour obtenir du texte consultable, numérisez le document avec reconnaissance de texte via l’application PDF Editor plutôt que de simplement le photographier.",
    },
    {
      q: "Existe-t-il une comparaison neutre des deux formats ?",
      a: "Oui. Pour une comparaison côte à côte du PDF et du JPG sur la qualité, la taille et l’usage, voir la page de comparaison PDF contre JPG.",
    },
  ],
  related: [
    { label: "Image en PDF — transformer des photos en document", path: "/image-to-pdf" },
    { label: "PDF ou JPG — comparaison de fonctionnalités", path: "/compare/pdf-vs-jpg" },
    { label: "Comment convertir un JPG en PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Comment créer un PDF avec l’appareil photo de son téléphone", path: "/guides/how-to-create-pdf-from-camera" },
  ],
  parentHub: { label: "Convertisseur PDF", path: "/pdf-converter" },
};

export default content;
