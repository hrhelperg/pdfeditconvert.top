import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-iphone",
  h1: "Comment convertir des photos en PDF sur iPhone (et régler le cas HEIC)",
  description:
    "Réunissez vos photos iPhone en un seul PDF, y compris le format HEIC qui bloque tant de monde. La voie du navigateur et la voie plus rapide dans l’application.",
  updated: "2026-05-23",
  intro: [
    "Transformer des photos en PDF sur iPhone est un geste que beaucoup de gens font constamment — un contrat photographié, une pile de reçus pour une note de frais, les deux faces d’une pièce d’identité pour un formulaire. La tâche est simple, mais il existe un piège propre à l’iPhone qui cause la plupart des frustrations : par défaut, votre iPhone enregistre les photos en HEIC, pas en JPG, et beaucoup d’outils ne lisent pas le HEIC.",
    "Ce guide couvre deux voies fiables. La première utilise l’outil gratuit Image vers PDF dans Safari, qui fonctionne une fois vos photos dans un format pris en charge. La seconde utilise l’application PDF Editor, qui lit le HEIC directement depuis votre pellicule et évite complètement la question du format.",
    "Choisissez celle qui convient au moment — mais connaissez d’abord le détail du HEIC, car c’est ce qui transforme une tâche de 30 secondes en une tâche déroutante.",
  ],
  steps: [
    {
      title: "Choisissez le format de vos photos",
      body: "Ouvrez Réglages → Appareil photo → Formats. « Haute efficacité » enregistre en HEIC ; « Le plus compatible » enregistre en JPG. Passer sur Le plus compatible fait que les nouvelles photos fonctionnent partout, y compris avec les outils du navigateur.",
    },
    {
      title: "Convertissez les photos déjà en HEIC si besoin",
      body: "Déjà prises en HEIC ? Réexportez-les en JPG (ouvrez dans Photos, partagez, choisissez une option qui produit du JPG), ou passez directement à la voie de l’application ci-dessous, qui lit le HEIC directement.",
    },
    {
      title: "Ouvrez l’outil Image vers PDF dans Safari",
      body: "Rendez-vous sur l’outil Image vers PDF. Il accepte le JPG, le PNG et le WebP et fonctionne entièrement sur votre appareil — rien n’est envoyé sur un serveur.",
    },
    {
      title: "Ajoutez vos photos et ordonnez-les",
      body: "Touchez pour choisir des photos dans votre photothèque, puis utilisez les flèches pour les ordonner. L’ordre des pages compte pour des documents de plusieurs pages, comme un contrat de deux pages.",
    },
    {
      title: "Créez et enregistrez le PDF",
      body: "Touchez Créer le PDF. Une fois téléchargé, utilisez l’icône de partage pour l’enregistrer dans l’app Fichiers ou l’envoyer directement.",
    },
    {
      title: "Ou utilisez l’application PDF Editor pour le HEIC et la numérisation",
      body: "L’application lit les photos HEIC depuis votre pellicule, les transforme en PDF, et peut aussi capturer de nouvelles pages avec détection des bords — aucune conversion de format nécessaire.",
    },
  ],
  tips: [
    "La première cause de « mes photos ne se convertissent pas » sur iPhone, c’est le HEIC. Passez sur Le plus compatible, ou utilisez l’application, et le problème disparaît.",
    "Recadrez chaque photo dans l’app Photos avant de convertir — la page est dimensionnée à la taille de l’image, donc rogner l’arrière-plan donne un document plus soigné.",
    "Pour les reçus et les pièces d’identité, photographiez sur une surface sombre et plate avec un éclairage homogène. Les reflets et les ombres sont plus difficiles à corriger qu’à éviter.",
    "Une photo transformée en PDF n’est pas une numérisation consultable. Si vous devez rechercher le texte, utilisez la fonction de numérisation de l’application, qui sait reconnaître le texte.",
    "Si le PDF final est trop lourd pour un e-mail, passez-le dans l’outil Compresser un PDF — les photos de téléphone donnent des pages lourdes.",
  ],
  mobileNote:
    "Tout ce circuit se passe sur votre téléphone, ce pour quoi l’application PDF Editor est justement conçue : le HEIC directement depuis la pellicule, une conversion sur l’appareil sans rien envoyer, plus la numérisation et la signature au même endroit. Pour tout ce que vous faites plus d’une fois, c’est la voie la plus rapide.",
  faq: [
    {
      q: "Pourquoi mes photos iPhone ne se chargent-elles pas dans le convertisseur ?",
      a: "Elles sont enregistrées en HEIC, que la plupart des outils de navigateur ne lisent pas. Passez sur « Le plus compatible » dans Réglages → Appareil photo → Formats pour les nouvelles photos, ou utilisez l’application PDF Editor, qui lit le HEIC directement.",
    },
    {
      q: "Puis-je combiner plusieurs photos en un seul PDF ?",
      a: "Oui. Ajoutez-les toutes, mettez-les dans l’ordre par glisser-déposer, et chaque photo devient une page d’un seul PDF.",
    },
    {
      q: "Mes photos sont-elles envoyées sur un serveur ?",
      a: "Non. L’outil dans le navigateur traite tout sur votre appareil, tout comme l’application. Vos photos restent confidentielles — important pour les pièces d’identité et les documents personnels.",
    },
    {
      q: "Le PDF sera-t-il consultable ?",
      a: "Pas depuis une simple photo — il n’y a pas de couche de texte. Utilisez la fonction de numérisation de l’application PDF Editor pour produire un document avec du texte reconnu et consultable.",
    },
    {
      q: "Le PDF est trop lourd pour un e-mail — que faire ?",
      a: "Les photos d’iPhone en haute résolution donnent de grandes pages. Passez le fichier dans l’outil Compresser un PDF pour repasser sous la limite de pièce jointe.",
    },
  ],
  related: [
    { label: "Image vers PDF — convertir des photos dans votre navigateur", path: "/image-to-pdf" },
    { label: "Numériser en PDF — capturer du papier avec l’appareil photo", path: "/scan-to-pdf" },
    { label: "Comment convertir des photos en PDF sur Android", path: "/guides/how-to-convert-photos-to-pdf-on-android" },
    { label: "Comment convertir un JPG en PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "Convertisseur PDF", path: "/pdf-converter" },
};

export default content;
