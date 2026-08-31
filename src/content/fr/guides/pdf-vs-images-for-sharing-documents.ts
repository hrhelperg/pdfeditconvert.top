import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-images-for-sharing-documents",
  h1: "PDF ou image pour partager un document (JPG, PNG, HEIC)",
  description:
    "Quand un JPG, un PNG ou un HEIC d’un document est le mauvais choix — et ce qui fait du PDF le bon format dès qu’on dépasse la capture d’écran rapide.",
  updated: "2026-05-29",
  intro: [
    "Une quantité surprenante de travail professionnel et scolaire s’envoie sous forme de fichiers image — des JPG de contrats, des photos HEIC de polycopiés, des captures d’écran PNG de reçus. Ça paraît plus rapide que de produire un PDF, le téléphone rend ça facile, et le destinataire arrive en général quand même à lire. Mais les images de documents sont le mauvais format pour presque toutes les méthodes documentaires réelles.",
    "Les PDF et les images de documents servent des objectifs différents. Les PDF gèrent plusieurs pages, sont consultables par recherche, imprimables, signables, archivables, et ne se déforment pas à la rotation. Les images tiennent sur une seule page, ne sont pas consultables par recherche, ont souvent un poids énorme, et ressortent fréquemment floues, de travers ou avec une mauvaise couleur. Au-delà d’un simple partage ponctuel rapide, le PDF fait mieux le travail.",
    "Ce guide explique pourquoi, dans quels cas l’approche image-de-document fonctionne réellement (ça arrive, parfois), et le chemin de conversion simple quand vous voulez la version PDF.",
  ],
  steps: [
    {
      title: "Repérez les cas où une image de document est le mauvais choix",
      body: "Document multipage : mauvais format. Document à imprimer : mauvais format. Document à rendre consultable par recherche : mauvais format. Tout ce qui est formel et destiné à un dossier : mauvais format.",
    },
    {
      title: "Repérez le petit nombre de cas où une image convient",
      body: "Une seule page, usage éphémère, contexte informel. Une photo rapide d’un reçu à un ami, une capture d’écran d’une page de confirmation, une photo d’une note manuscrite pour vous-même. L’image est le bon format quand ce n’est pas encore vraiment un document.",
    },
    {
      title: "Convertissez avec Image vers PDF quand le partage devient un document",
      body: "Image vers PDF combine JPG, PNG et WebP en un PDF dans votre navigateur. L’image devient consultable par recherche plus tard si elle passe par l’OCR ; elle reste un seul fichier au lieu de plusieurs.",
    },
    {
      title: "Utilisez le bon outil selon la source",
      body: "Photos → Image vers PDF. Pages numérisées → Numériser en PDF. Document Word/Pages → Word vers PDF. Chaque format source a son chemin de conversion le plus net.",
    },
    {
      title: "Traitez le cas particulier du HEIC sur iPhone",
      body: "L’iPhone utilise par défaut le HEIC, que tous les destinataires ne peuvent pas ouvrir. Convertissez HEIC → JPG → PDF, ou utilisez un outil qui gère directement le HEIC. Le flux de numérisation de l’application PDF Editor prend en charge le HEIC nativement.",
    },
    {
      title: "Compressez avec discernement",
      body: "Compressez le PDF si le fichier obtenu est énorme. Les conversions photo-vers-PDF héritent de la résolution de la photo, souvent bien supérieure à ce qu’exige un document.",
    },
  ],
  tips: [
    "Un JPG d’un document en mode portrait pris avec un téléphone est le mauvais format. Tournez le téléphone ou utilisez une application de numérisation — le résultat est nettement plus lisible.",
    "Les captures d’écran PNG se convertissent bien en PDF, mais les photos JPG de documents papier gagnent en général à passer par une application de numérisation pour la détection des bords.",
    "N’envoyez pas plusieurs JPG comme un document multipage. Combinez-les en un seul PDF ; les destinataires perdent le fil des fils à plusieurs pièces jointes.",
    "Le HEIC est le format par défaut d’iOS mais il est rejeté par de nombreux portails web et clients de messagerie. Convertissez avant de partager si vous ne connaissez pas la configuration du destinataire.",
    "Les photos d’écrans d’ordinateur sont le pire des cas — moiré, reflets, basse résolution. Utilisez plutôt la fonction d’export en PDF que de photographier l’écran.",
  ],
  mobileNote:
    "Le téléphone est l’endroit où se produisent le plus les erreurs d’image-de-document. Le flux de numérisation de l’application PDF Editor détecte les pages et produit des PDF propres dès le départ, pour qu’un partage rapide devienne un vrai document sans étape de conversion supplémentaire.",
  faq: [
    {
      q: "Pourquoi une photo de document vaut-elle moins qu’un PDF ?",
      a: "Les photos tiennent sur une seule page, sont souvent de travers, ne sont pas consultables par recherche, peuvent peser très lourd, et les problèmes de rotation ou de format masquent le contenu. Le PDF résout tout cela.",
    },
    {
      q: "Le JPG est-il parfois acceptable pour un document ?",
      a: "Pour des partages ponctuels sur une seule page, oui — un reçu rapide à un ami, une capture d’écran à un collègue. Pour tout ce qui est formel ou multipage, non.",
    },
    {
      q: "Et le HEIC ?",
      a: "C’est le format par défaut de l’iPhone, mais il n’est pas universellement pris en charge. Convertissez en JPG ou en PDF avant de partager si le destinataire n’est pas sur un appareil Apple.",
    },
    {
      q: "Comment combiner plusieurs photos en un seul PDF ?",
      a: "Image vers PDF combine JPG, PNG et WebP en un seul PDF dans votre navigateur. Définissez l’ordre avant l’ajout ; le PDF obtenu le conserve.",
    },
    {
      q: "Le PDF va-t-il alourdir le fichier ?",
      a: "Ça dépend de la source. Un JPG d’un document → PDF sans recompression donne à peu près le même poids. Compresser le PDF réduit la taille si besoin.",
    },
  ],
  related: [
    { label: "Image vers PDF — combiner des photos en un seul fichier", path: "/image-to-pdf" },
    { label: "PDF ou JPG pour les documents", path: "/guides/pdf-vs-jpg-for-documents" },
    { label: "Comment convertir un JPG en PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Comment convertir des photos en PDF sur iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Image vers PDF — combiner des photos en PDF", path: "/image-to-pdf" },
};

export default content;
