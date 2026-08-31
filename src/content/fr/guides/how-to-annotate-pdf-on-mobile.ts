import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-annotate-pdf-on-mobile",
  h1: "Comment annoter un PDF sur mobile",
  description:
    "Surlignez, commentez et dessinez sur vos PDF depuis un téléphone ou une tablette. Les outils d’annotation qui comptent, et comment garder des annotations lisibles.",
  updated: "2026-05-23",
  intro: [
    "Annoter un PDF, c’est transformer un document que vous lisez en quelque chose auquel vous répondez — surligner la clause qui compte, laisser un commentaire pour un collègue, entourer le chiffre qui est faux. Sur un téléphone ou une tablette, au doigt ou au stylet, c’est souvent plus naturel qu’à un bureau, parce que vous marquez la page comme vous marqueriez du papier.",
    "Ce guide couvre les outils d’annotation à connaître sur mobile avec l’application PDF Editor : surlignage, commentaires, dessin à main levée et formes. Elle fonctionne sur iPhone et Android, sans connexion, et garde le document sur votre appareil.",
    "Le but n’est pas de couvrir la page d’encre — c’est de laisser des annotations que la prochaine personne (souvent vous-même plus tard) pourra vraiment lire et exploiter.",
  ],
  steps: [
    {
      title: "Ouvrez le PDF dans l’application PDF Editor",
      body: "Importez le document depuis Fichiers, Mail, Drive ou n’importe quel menu de partage. Les outils d’annotation se trouvent dans la barre d’édition.",
    },
    {
      title: "Surlignez les passages clés",
      body: "Sélectionnez le surligneur, choisissez une couleur, et faites glisser sur le texte à marquer. Utilisez la couleur de façon délibérée — une couleur par type de note se lit bien mieux qu’un arc-en-ciel.",
    },
    {
      title: "Ajoutez des commentaires pour donner du contexte",
      body: "Déposez un commentaire là où un surlignage a besoin d’une explication. Les commentaires gardent votre raisonnement attaché à l’endroit précis sans encombrer la page elle-même.",
    },
    {
      title: "Dessinez et entourez à main levée",
      body: "Utilisez l’outil stylo pour entourer un chiffre, souligner une ligne ou esquisser une correction. Un stylet donne des traits plus nets qu’un doigt, si vous en avez un.",
    },
    {
      title: "Ajoutez des formes ou des flèches quand elles aident",
      body: "Une flèche qui pointe vers le problème ou un cadre autour d’une section communique plus vite que des mots. Utilisez-les avec parcimonie pour qu’ils ressortent.",
    },
    {
      title: "Enregistrez et partagez la copie annotée",
      body: "Exportez une copie avec vos annotations et renvoyez-la. Gardez l’original propre si vous aurez besoin d’une version non marquée plus tard.",
    },
  ],
  tips: [
    "Attribuez un sens aux couleurs — jaune pour les questions, vert pour les approbations, par exemple — et vos annotations deviennent lisibles d’un coup d’œil plutôt que décoratives.",
    "Un stylet (Apple Pencil ou S Pen) transforme l’annotation à main levée. Si vous en avez un, le rejet de paume et la sensibilité à la pression font que ça ressemble vraiment à marquer du papier.",
    "Les commentaires valent mieux que d’entasser des notes dans la marge. Ils se déploient quand on les touche et gardent la page lisible.",
    "N’annotez pas trop. Une page noyée sous l’encre est aussi inutile qu’une page sans aucune marque — surlignez ce qui compte, pas tout.",
    "Gardez un original non marqué. Les annotations sont parfaites pour une relecture, mais le prochain relecteur voudra peut-être une copie propre pour marquer lui-même.",
  ],
  mobileNote:
    "Annoter est le domaine où un téléphone ou une tablette bat vraiment un bureau : vous marquez la page directement, comme vous le feriez sur papier. L’application PDF Editor prend en charge le surlignage, les commentaires, le dessin et les formes avec support du stylet, le tout hors ligne et sur l’appareil — vos annotations ne quittent jamais vos mains.",
  faq: [
    {
      q: "Avec quoi puis-je annoter un PDF sur mobile ?",
      a: "Des surlignages, des commentaires, des marques au stylo à main levée, et des formes comme des flèches et des cadres. L’application PDF Editor offre tout cela sur iPhone et Android.",
    },
    {
      q: "Ai-je besoin d’un stylet ?",
      a: "Non, un doigt suffit pour surligner et faire des marques simples. Mais un stylet rend le dessin à main levée bien plus net, avec rejet de paume et sensibilité à la pression sur les tablettes compatibles.",
    },
    {
      q: "Mes annotations resteront-elles si j’envoie le fichier ?",
      a: "Oui. Les annotations exportées font partie du PDF et apparaissent pour quiconque l’ouvre. Gardez un original propre séparément si vous aurez besoin d’une copie non marquée.",
    },
    {
      q: "Mes annotations sont-elles envoyées quelque part ?",
      a: "Non. L’application PDF Editor annote sur votre appareil, donc vos notes et le document restent privés.",
    },
    {
      q: "Puis-je supprimer des annotations plus tard ?",
      a: "Oui, dans l’application vous pouvez modifier ou supprimer vos propres annotations avant d’exporter. Garder l’original permet aussi de repartir de zéro.",
    },
  ],
  related: [
    { label: "PDF Editor — annoter sur mobile", path: "/pdf-editor" },
    { label: "Comment remplir un formulaire PDF depuis son téléphone", path: "/guides/how-to-fill-pdf-forms-on-phone" },
    { label: "Comment modifier un PDF sur iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
    { label: "Les meilleurs outils PDF gratuits pour les étudiants", path: "/guides/best-pdf-tools-for-students" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
