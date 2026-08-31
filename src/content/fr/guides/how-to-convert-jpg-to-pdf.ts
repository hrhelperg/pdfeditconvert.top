import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-jpg-to-pdf",
  h1: "Comment convertir un JPG en PDF — images vers document",
  description:
    "Réunissez une ou plusieurs photos JPG en un seul PDF dans votre navigateur. Idéal pour les reçus, les pièces d’identité et les documents photographiés, avec les limites de qualité et le cas HEIC de l’iPhone.",
  updated: "2026-05-23",
  intro: [
    "Le JPG est le format que votre appareil photo et la plupart des sites web vous remettent, ce qui en fait le point de départ le plus courant pour « transformer ça en PDF ». La raison de convertir est presque toujours la même : un seul JPG est malcommode à envoyer comme document. Plusieurs JPG, c’est pire — cinq photos de reçus séparées dans un e-mail, c’est le genre de chose qu’un comptable n’apprécie pas en silence. Un seul PDF, avec les pages dans l’ordre, c’est ce que les gens veulent vraiment recevoir.",
    "Ce guide utilise l’outil gratuit Image vers PDF, qui combine des fichiers JPG en un seul PDF directement dans votre navigateur — rien n’est envoyé sur un serveur. Il est idéal pour les reçus, les photos de pièces d’identité, les captures d’écran et les photos de documents papier à rassembler et à envoyer.",
    "Le JPG est un format photo avec perte, donc mieux vaut savoir ce qui passe proprement et ce qui ne passe pas avant de s’y fier pour quelque chose qui doit rester lisible.",
  ],
  steps: [
    {
      title: "Ouvrez l’outil Image vers PDF",
      body: "Rendez-vous sur l’outil Image vers PDF dans votre navigateur. Il accepte le JPG, le PNG et le WebP, et fonctionne entièrement sur votre appareil — aucun envoi, aucun compte.",
    },
    {
      title: "Ajoutez vos fichiers JPG",
      body: "Glissez vos photos sur la zone de dépôt ou cliquez pour les choisir. Ajoutez-en autant que nécessaire ; chaque image devient une page du PDF.",
    },
    {
      title: "Mettez-les dans le bon ordre",
      body: "Utilisez les flèches haut et bas sur chaque ligne pour ordonner les pages. Pour un document de plusieurs pages, c’est l’étape la plus importante — la page deux d’un contrat doit venir après la page un.",
    },
    {
      title: "Créez le PDF",
      body: "Cliquez sur Créer le PDF. Chaque image est placée sur sa propre page, dimensionnée à la taille de la photo, et le fichier combiné est généré localement.",
    },
    {
      title: "Téléchargez et renommez",
      body: "Le PDF se télécharge automatiquement. Donnez-lui un nom explicite avant de l’envoyer — « Recus-mars.pdf » vaut mieux que « IMG_4821.pdf » dans la boîte de réception de quelqu’un.",
    },
    {
      title: "Compressez-le s’il part par e-mail",
      body: "Les PDF composés de photos deviennent vite lourds. Si le fichier dépasse la limite habituelle de 25 Mo par pièce jointe, passez-le dans l’outil Compresser un PDF avant de l’envoyer.",
    },
  ],
  tips: [
    "Recadrez et redressez chaque photo avant la conversion. L’outil dimensionne les pages à la taille de l’image, donc une photo de travers donne une page de travers.",
    "Un éclairage bon et homogène vaut mieux que n’importe quel filtre pour des photos de documents. Évitez que l’ombre de votre main ou de votre téléphone ne tombe sur la page.",
    "Le JPG compresse bien les photos mais brouille le texte fin et les bords nets. Pour des captures d’écran ou tout ce qui contient du texte net, le PNG garde le texte plus propre — voir le guide PNG vers PDF.",
    "Les photos d’iPhone sont souvent enregistrées en HEIC, pas en JPG. L’outil dans le navigateur a besoin de JPG, PNG ou WebP, donc passez l’appareil photo en « Le plus compatible » dans Réglages, ou utilisez l’application PDF Editor, qui lit le HEIC directement.",
    "Une photo de document n’est pas une numérisation consultable — il n’y a pas de couche de texte, donc impossible de rechercher ou de copier les mots. Utilisez un circuit de numérisation si cela compte.",
  ],
  mobileNote:
    "La plupart des JPG naissent sur un téléphone, ce qui est exactement là où l’application PDF Editor excelle : elle récupère les photos directement depuis votre pellicule (HEIC compris), les transforme en PDF, et peut aussi capturer de nouvelles pages avec détection des bords — sans détour par un ordinateur.",
  faq: [
    {
      q: "Puis-je combiner plusieurs JPG en un seul PDF ?",
      a: "Oui — c’est l’usage principal. Ajoutez toutes vos images, mettez-les dans l’ordre, et elles deviennent des pages consécutives d’un même PDF.",
    },
    {
      q: "Mes photos sont-elles envoyées quelque part ?",
      a: "Non. La conversion se fait dans votre navigateur, sur votre propre appareil. Vos images ne le quittent jamais, ce qui compte pour les pièces d’identité et les documents personnels.",
    },
    {
      q: "Mes photos iPhone ne se chargent pas — pourquoi ?",
      a: "Il s’agit probablement de fichiers HEIC, que l’outil dans le navigateur ne lit pas. Passez le format de l’appareil photo à « Le plus compatible » dans Réglages → Appareil photo → Formats, ou utilisez l’application PDF Editor, qui gère le HEIC.",
    },
    {
      q: "Le PDF sera-t-il consultable ?",
      a: "Non. Une photo convertie est une image sans couche de texte, donc les mots ne peuvent pas être recherchés ni sélectionnés. Pour un document consultable, numérisez avec la reconnaissance de texte de l’application PDF Editor.",
    },
    {
      q: "Pourquoi mon PDF est-il si lourd ?",
      a: "Les photos de téléphone en haute résolution sont volumineuses, et plusieurs d’entre elles s’additionnent vite. Passez le résultat dans l’outil Compresser un PDF pour repasser sous les limites d’e-mail et de dépôt.",
    },
  ],
  related: [
    { label: "Image vers PDF — combiner des JPG dans votre navigateur", path: "/image-to-pdf" },
    { label: "Compresser un PDF — alléger le résultat pour l’e-mail", path: "/compress-pdf" },
    { label: "Comment convertir un PNG en PDF", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "Comment convertir des photos en PDF sur iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Convertisseur PDF", path: "/pdf-converter" },
};

export default content;
