import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-iphone",
  h1: "Comment réduire la taille d’un PDF sur iPhone",
  description:
    "Allégez un PDF sur iPhone avec un outil dans le navigateur ou l’application PDF Editor. Pourquoi les numérisations iPhone sont si lourdes et comment repasser sous les limites d’envoi.",
  updated: "2026-05-23",
  intro: [
    "Les iPhone produisent des fichiers magnifiques et énormes. Le même appareil photo et scanner haute résolution qui rend vos documents nets alourdit aussi les PDF — quelques pages numérisées peuvent dépasser une limite d’e-mail avant même d’y ajouter autre chose. Donc « réduire ce PDF sur mon iPhone » est un besoin très courant et très précis.",
    "Ce guide couvre deux voies fiables qui fonctionnent toutes deux sur iPhone. La première est l’outil gratuit Compresser un PDF dans Safari, qui fonctionne sur votre appareil sans rien envoyer. La seconde est l’application PDF Editor, qui compresse hors connexion et gère les fichiers protégés par mot de passe, ce que le navigateur ne peut pas faire.",
    "Dans les deux cas, l’objectif est le même : un fichier assez léger pour être envoyé par e-mail ou déposé en ligne tout en restant lisible — sans envoyer votre document sur le serveur de quelqu’un d’autre pour y arriver.",
  ],
  steps: [
    {
      title: "Retrouvez le PDF dans Fichiers",
      body: "Localisez le document dans l’app Fichiers ou là où il se trouve — une numérisation que vous avez faite, une pièce jointe enregistrée, un lot de photos converti.",
    },
    {
      title: "Ouvrez l’outil Compresser un PDF dans Safari",
      body: "Rendez-vous sur l’outil Compresser un PDF. Il fonctionne dans le navigateur sur votre iPhone et traite le fichier sur l’appareil — rien n’est envoyé.",
    },
    {
      title: "Ajoutez le PDF et choisissez un niveau",
      body: "Touchez pour sélectionner le fichier, puis choisissez un niveau. Recommandé convient à la plupart des cas ; choisissez Fort seulement si vous avez besoin d’un fichier encore plus léger.",
    },
    {
      title: "Compressez et vérifiez la taille",
      body: "Lancez l’opération et lisez la taille avant et après. Les numérisations iPhone perdent en général beaucoup de poids dès la première passe, car elles sont riches en images.",
    },
    {
      title: "Enregistrez-le dans Fichiers ou partagez-le",
      body: "Utilisez l’icône de partage pour enregistrer le PDF allégé dans Fichiers ou l’envoyer directement. Gardez l’original jusqu’à avoir confirmé que le résultat se lit bien.",
    },
    {
      title: "Pour les fichiers protégés, utilisez l’application",
      body: "Le navigateur ne peut pas compresser des PDF protégés par mot de passe. L’application PDF Editor les gère hors connexion, et se révèle plus rapide pour des fichiers que vous compressez souvent.",
    },
  ],
  tips: [
    "Les numérisations d’iPhone sont lourdes parce que ce sont des images en haute résolution. C’est aussi pour ça qu’elles se compressent si bien — les gains sont les plus grands précisément sur ces fichiers.",
    "Photographier les documents en format « Le plus compatible » (Réglages → Appareil photo → Formats) produit des JPG plus faciles à compresser et à partager que le HEIC.",
    "La compression transforme les pages en images, donc la copie allégée n’aura pas de texte sélectionnable. Gardez l’original si vous devez rechercher ou copier du texte.",
    "La mémoire du navigateur sur un téléphone est plus limitée que sur un ordinateur portable. Pour de très gros PDF, l’application PDF Editor est la voie la plus fiable.",
    "Enregistrez toujours le fichier compressé sous un nouveau nom pour que votre original net reste intact sur l’appareil.",
  ],
  mobileNote:
    "C’est une tâche pensée d’abord pour le téléphone, et l’application PDF Editor est conçue pour ça : compression hors connexion, aucun envoi, prise en charge des fichiers protégés, et transmission directe vers Mail, Messages ou le menu de partage. Pour des documents que vous réduisez régulièrement, elle est plus rapide que le navigateur à chaque fois.",
  faq: [
    {
      q: "Pourquoi mes PDF iPhone sont-ils si lourds ?",
      a: "Les numérisations et les photos d’iPhone sont des images en haute résolution, et un PDF composé de plusieurs d’entre elles est essentiellement une pile de grandes images. C’est pour ça qu’ils dépassent les limites d’e-mail — et pour ça qu’ils se compressent si efficacement.",
    },
    {
      q: "Puis-je compresser un PDF sur iPhone sans application ?",
      a: "Oui. L’outil Compresser un PDF fonctionne dans Safari et traite le fichier sur votre appareil, donc vous pouvez alléger un PDF sans rien installer.",
    },
    {
      q: "Mon document est-il envoyé quand j’utilise l’outil dans le navigateur ?",
      a: "Non. Il est traité localement sur votre iPhone. Rien n’est envoyé vers un serveur, ce qui compte pour des documents personnels ou financiers.",
    },
    {
      q: "Le texte restera-t-il sélectionnable ensuite ?",
      a: "Non. La compression redessine les pages sous forme d’images, supprimant la couche de texte sélectionnable. Gardez l’original si vous avez besoin d’un texte consultable.",
    },
    {
      q: "Qu’en est-il des PDF protégés par mot de passe ?",
      a: "Le navigateur ne peut pas les traiter. Utilisez l’application PDF Editor, qui ouvre et compresse les fichiers protégés hors connexion.",
    },
  ],
  related: [
    { label: "Compresser un PDF — réduire dans votre navigateur", path: "/compress-pdf" },
    { label: "Comment réduire la taille d’un PDF sur Android", path: "/guides/how-to-make-pdf-smaller-on-android" },
    { label: "Comment réduire la taille d’un PDF pour l’e-mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Comment modifier un PDF sur iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "Compresser un PDF", path: "/compress-pdf" },
};

export default content;
