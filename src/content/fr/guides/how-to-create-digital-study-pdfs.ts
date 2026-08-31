import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-digital-study-pdfs",
  h1: "Comment créer ses fiches de révision en PDF (fiches, synthèses, dossiers)",
  description:
    "Construisez vos propres PDF de révision à partir de notes, de diapositives et de surlignages : consultables, transportables, prêts à annoter sur tablette. La structure qui les rend vraiment utiles en période d’examens.",
  updated: "2026-05-29",
  intro: [
    "Un PDF de révision fait maison est l’un des meilleurs outils dont on puisse disposer pour un examen. Il est plus petit que l’ensemble complet des notes hebdomadaires, plus structuré qu’un fil de discussion de conseils de révision, et plus transportable que des fiches physiques. Ouvrez-le sur une tablette pendant une pause étude, dans un café, sur un ordinateur portable à la bibliothèque — même fichier, mêmes annotations, même recherche possible.",
    "Mais un PDF de révision ne se justifie que s’il est structuré. Déverser tous les cours dans un seul fichier le rend inutilisable ; une synthèse construite avec soin devient l’artefact que vous ouvrez réellement trois fois par semaine avant l’examen final. Tout tient dans la façon dont vous le construisez.",
    "Ce guide détaille la structure qui fonctionne : quoi inclure, quoi laisser de côté, comment organiser pour une lecture rapide versus une lecture approfondie, et comment garder un poids de fichier raisonnable sur tablette. Il part du principe que vous construisez à partir de notes hebdomadaires, de diapositives et de surlignages existants — pas depuis zéro.",
  ],
  steps: [
    {
      title: "Décidez du périmètre avant de commencer",
      body: "Un PDF de révision par cours, un par examen majeur (partiel, final), ou un par thème — choisissez la granularité qui correspond à votre façon réelle de réviser. Des PDF plus petits et ciblés valent mieux qu’un seul dossier géant.",
    },
    {
      title: "Construisez une couverture claire et un sommaire",
      body: "Code du cours, nom de l’examen, date, thèmes abordés. Un sommaire d’une page en début de document. Les deux sont rapides — cinq minutes à écrire, et ils triplent la facilité de navigation.",
    },
    {
      title: "Extrayez les diapositives et notes clés",
      body: "Extraire des pages PDF récupère uniquement les diapositives et les pages de notes réellement nécessaires depuis les dossiers hebdomadaires plus volumineux. N’incluez pas tout le semestre — seulement les parties utiles pour cet examen.",
    },
    {
      title: "Fusionnez dans un ordre cohérent",
      body: "Fusionner le PDF combine les extraits dans un ordre de révision : chronologique, conceptuel, ou pondéré selon l’importance à l’examen. Utilisez l’ordre dans lequel vous allez réellement réviser.",
    },
    {
      title: "Annotez à l’avance",
      body: "Surlignez d’avance les termes clés, les formules et les concepts. L’annotation fonctionne mieux pendant la révision quand vous n’avez pas aussi à surligner en temps réel.",
    },
    {
      title: "Compressez pour un usage nomade sur tablette",
      body: "Compresser le PDF ramène le dossier de révision à une taille adaptée à la tablette — généralement moins de 20 Mo. Les fichiers plus légers se chargent vite, défilent sans à-coups et épuisent moins la batterie pendant les longues sessions de révision.",
    },
  ],
  tips: [
    "Ne visez pas l’exhaustivité. Le PDF de révision complète les notes complètes ; il ne les remplace pas. Laissez le détail dans les dossiers hebdomadaires.",
    "Ajoutez une ou deux pages d’aide-mémoire à la fin, avec formules, dates, noms — tout ce qui demande un rappel immédiat le jour de l’examen.",
    "Reproduisez la structure de l’examen. Si l’examen combine questions courtes et dissertation, structurez le dossier de révision de la même façon pour que l’entraînement corresponde au format du test.",
    "Ne compressez pas trop fort. Certains artefacts de texte à forte compression nuisent à la lisibilité pendant les longues sessions de révision. Une compression moyenne est généralement le bon équilibre.",
    "Réexportez après une grande session d’annotation pour que les marques restent un contenu lisible plutôt que de simples superpositions.",
  ],
  mobileNote:
    "Les tablettes et les téléphones sont l’endroit où les PDF de révision servent réellement. L’application PDF Editor prend en charge l’annotation, le surlignage et la recherche sur le fichier que vous avez construit — transformant le dossier de révision en outil de relecture interactif, où que vous étudiiez.",
  faq: [
    {
      q: "Quelle longueur pour un PDF de révision ?",
      a: "Ce que vous pouvez réellement relire en deux ou trois sessions. Pour la plupart des cours, cela représente 30 à 80 pages. Au-delà de 100 pages, vous en sauterez la moitié.",
    },
    {
      q: "Faut-il inclure toutes les diapositives ou seulement les principales ?",
      a: "Seulement les principales. Tout inclure dilue la valeur du dossier. Choisissez les diapositives qui expliquent les concepts où vous êtes le plus fragile.",
    },
    {
      q: "Les fiches numériques valent-elles mieux que le papier ?",
      a: "Pour la plupart des étudiants, oui. Elles sont consultables par recherche, transportables, et résistent aux chutes ou aux liquides renversés. Les applications de répétition espacée ajoutent une couche supplémentaire.",
    },
    {
      q: "Faut-il partager son PDF de révision avec le groupe ?",
      a: "C’est facultatif. Certains étudiants révisent mieux avec leur propre dossier ; d’autres profitent d’un dossier partagé. Essayez les deux et voyez ce qui donne les meilleurs résultats de mémorisation.",
    },
    {
      q: "À quel moment faut-il le construire ?",
      a: "Deux à trois semaines avant l’examen. Trop tôt, il manque du contenu ; trop tard, vous n’avez plus le temps de le réviser.",
    },
  ],
  related: [
    { label: "PDF pour étudiants — notes et fiches de révision", path: "/pdf-for-students" },
    { label: "Fusionner le PDF — assembler des dossiers de révision", path: "/merge-pdf" },
    { label: "Comment organiser ses supports de révision en PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Organisation des PDF à l’université", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF pour étudiants — notes, surlignages, fiches de révision", path: "/pdf-for-students" },
};

export default content;
