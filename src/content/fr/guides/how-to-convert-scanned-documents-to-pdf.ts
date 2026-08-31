import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-scanned-documents-to-pdf",
  h1: "Comment convertir des documents numérisés en PDF",
  description:
    "Vous avez déjà des images de numérisation ou des photos de papier ? Réunissez-les en un PDF dans votre navigateur, et comprenez à quoi sert l’OCR pour rendre le texte consultable.",
  updated: "2026-05-23",
  intro: [
    "Il existe une différence importante entre numériser un document et convertir un document déjà numérisé. Si vous avez une pile de papier fraîche, il vous faut un circuit de numérisation. Mais souvent, vous avez déjà les images — un scanner à plat a produit un dossier de JPEG, un collègue a envoyé par e-mail des photos d’un formulaire signé, ou votre pellicule photo déborde de photos de paperasse. La tâche consiste maintenant à rassembler tout ça en un seul PDF bien ordonné.",
    "Ce guide couvre exactement cela : combiner des images de numérisation que vous avez déjà en un seul PDF avec l’outil gratuit Image vers PDF, qui fonctionne dans votre navigateur sans rien envoyer. Il explique aussi le point que les gens comprennent souvent mal : une numérisation convertie est une image de texte, pas du texte consultable, et ce qu’il faut faire si vous avez besoin de récupérer les mots.",
    "Si vous devez encore capturer le papier au préalable, consultez le guide de numérisation dédié ; celui-ci suppose que les images existent déjà.",
  ],
  steps: [
    {
      title: "Rassemblez vos images de numérisation",
      body: "Regroupez au même endroit les fichiers JPG ou PNG de votre scanner, de votre e-mail ou de votre pellicule photo, pour pouvoir les ajouter en une seule fois.",
    },
    {
      title: "Ouvrez l’outil Image vers PDF",
      body: "Rendez-vous sur l’outil Image vers PDF dans votre navigateur. Il accepte le JPG, le PNG et le WebP et traite tout sur votre appareil — pas d’envoi, pas de compte.",
    },
    {
      title: "Ajoutez les images dans l’ordre du document",
      body: "Glissez les numérisations sur la zone de dépôt. Utilisez les flèches pour mettre les pages dans le bon ordre — la page un du formulaire avant la page deux.",
    },
    {
      title: "Créez le PDF",
      body: "Cliquez sur Créer le PDF. Chaque numérisation devient une page, et l’outil les combine en un seul document localement.",
    },
    {
      title: "Compressez si le fichier est lourd",
      body: "Les numérisations sont riches en images et le PDF peut être volumineux. Passez-le dans Compresser un PDF pour tenir sous les limites d’e-mail ou de dépôt — le contenu numérisé se réduit beaucoup avec peu de perte visible.",
    },
    {
      title: "Ajoutez du texte consultable si besoin",
      body: "Une numérisation convertie est une image, donc le texte ne peut pas être recherché. Pour le rendre consultable, lancez la reconnaissance de texte (OCR) avec l’application PDF Editor, qui ajoute une couche de texte invisible par-dessus la numérisation.",
    },
  ],
  tips: [
    "Redressez et recadrez chaque numérisation avant de les combiner — une page de travers le reste une fois dans le PDF.",
    "Une résolution homogène sur toutes les pages donne un document plus soigné. Des tailles d’image très inégales produisent des pages qui changent brusquement d’échelle.",
    "Les outils de navigateur peuvent combiner des numérisations mais ne peuvent pas lire le texte qu’elles contiennent. Si vous devez rechercher ou copier les mots, c’est un travail d’OCR, que gère l’application PDF Editor.",
    "Gardez les numérisations en couleur pour tout ce qui contient des tampons, des surlignages ou des signatures ; ne passez en niveaux de gris que quand la couleur n’apporte rien, car cela réduit la taille du fichier.",
    "Nommez le fichier en fonction de son contenu et de sa date. « Bail-signe-2026-05.pdf » se retrouve bien plus facilement plus tard qu’une série de numéros de scanner.",
  ],
  mobileNote:
    "Si les « numérisations » sont en réalité des photos sur votre téléphone, l’application PDF Editor est le raccourci : elle transforme des images de la pellicule en PDF, peut capturer de nouvelles pages avec détection des bords, et peut lancer la reconnaissance de texte pour que le résultat soit consultable — le tout sans rien envoyer.",
  faq: [
    {
      q: "Quelle est la différence avec la numérisation ?",
      a: "Numériser consiste d’abord à capturer du papier en images. Ce guide suppose que vous avez déjà les images de numérisation et devez simplement les combiner en un seul PDF. Si vous devez encore capturer le papier, utilisez un circuit de numérisation.",
    },
    {
      q: "Le texte de mon PDF numérisé sera-t-il consultable ?",
      a: "Pas à partir de la seule conversion — une numérisation est une image, donc il n’y a pas de couche de texte. Lancez l’OCR (reconnaissance de texte) avec l’application PDF Editor pour ajouter une couche consultable par-dessus la numérisation.",
    },
    {
      q: "Mes numérisations sont-elles envoyées quelque part ?",
      a: "Non. L’outil Image vers PDF traite les fichiers dans votre navigateur, sur votre appareil, donc les documents sensibles restent confidentiels.",
    },
    {
      q: "Pourquoi mon PDF numérisé est-il si lourd ?",
      a: "Les numérisations sont essentiellement des photos, et plusieurs pages en haute résolution s’additionnent vite. Compressez le PDF — les numérisations riches en images se réduisent en général beaucoup, avec peu de perte de qualité visible.",
    },
    {
      q: "Puis-je corriger une page numérisée de travers ?",
      a: "Oui. Utilisez l’outil Faire pivoter un PDF pour redresser les pages concernées après la combinaison, ou corrigez l’orientation de l’image source avant de convertir.",
    },
  ],
  related: [
    { label: "Image vers PDF — combiner des numérisations dans votre navigateur", path: "/image-to-pdf" },
    { label: "Numériser en PDF — capturer du papier avec l’appareil photo", path: "/scan-to-pdf" },
    { label: "Comment numériser un document en PDF avec son téléphone", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Comment compresser un PDF numérisé", path: "/guides/how-to-compress-scanned-pdf" },
  ],
  parentHub: { label: "Numériser en PDF", path: "/scan-to-pdf" },
};

export default content;
