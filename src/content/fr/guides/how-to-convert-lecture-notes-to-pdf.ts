import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-lecture-notes-to-pdf",
  h1: "Comment convertir ses notes de cours en PDF (Word, photos, diapositives)",
  description:
    "Les notes de cours arrivent dans tous les formats : document Word, diaporama, capture d’écran, photo du tableau. Comment réunir chacun en un PDF lisible sans perdre la structure.",
  updated: "2026-05-29",
  intro: [
    "À la fin d’une semaine, les notes d’un seul cours peuvent exister sous cinq formats différents : un document Word tapé pendant le cours, un PowerPoint partagé par l’enseignant, une photo du tableau, des captures d’écran d’une vidéo enregistrée, et quelques pages manuscrites du jour où la batterie de l’ordinateur a lâché.",
    "Tout cela peut — et devrait — finir dans un seul PDF par thème ou par semaine. Les PDF gèrent raisonnablement bien tous les formats, se lisent sur n’importe quel appareil, et ne se perdent pas comme des fichiers éparpillés. L’astuce, c’est de produire le PDF sans perdre la structure de chaque source.",
    "Ce guide détaille le chemin de conversion pour chaque format, puis la stratégie de fusion qui produit un fichier unique et cohérent. L’objectif : un support de révision réellement utilisable le jour de l’examen.",
  ],
  steps: [
    {
      title: "Convertissez les notes Word avec Word vers PDF",
      body: "Notes tapées dans un document Word → Word vers PDF dans votre navigateur. Conserve les titres, la mise en forme et les captures d’écran intégrées. Exportez à la taille complète du document ; compressez plus tard.",
    },
    {
      title: "Exportez les diaporamas en PDF",
      body: "PowerPoint et Keynote exportent directement en PDF. Utilisez le menu d’export, pas des captures d’écran. La version PDF garde le texte sélectionnable et reste nette à tous les niveaux de zoom.",
    },
    {
      title: "Convertissez photos et captures d’écran avec Image vers PDF",
      body: "Photos du tableau, captures d’écran d’enregistrements → Image vers PDF les réunit en un seul PDF. Définissez l’ordre avant l’import ; réordonner après demande plus de travail.",
    },
    {
      title: "Numérisez les pages manuscrites",
      body: "Numériser en PDF depuis votre téléphone, avec niveaux de gris et détection des bords, produit des scans multipages nets. Plus net et plus léger que des photos prises au hasard.",
    },
    {
      title: "Fusionnez en un seul PDF par thème",
      body: "Fusionner le PDF réunit tous les formats en un seul fichier ordonné. L’ordre compte : chronologie du cours, ou structure logique (diapositives d’introduction → notes de cours → photos du tableau → récapitulatif). Choisissez-en un et gardez-le.",
    },
    {
      title: "Ajoutez une page de couverture et un sommaire",
      body: "Une couverture tapée (cours, semaine, thème) rend le fichier auto-descriptif six mois plus tard. Pour les longs PDF compilés (plus de 30 pages), incluez un sommaire d’une page.",
    },
  ],
  tips: [
    "Résistez à l’envie de faire des captures d’écran des diaporamas. Utilisez l’export PDF du diaporama — plus net, et le texte reste sélectionnable pour la recherche.",
    "Photographiez le tableau bien de face, pas en biais. La correction automatique peut rattraper une inclinaison modérée, mais une photo bien perpendiculaire est toujours plus propre.",
    "Si un enregistrement contient des moments clés, capturez ces images précises plutôt que toute la vidéo. Le PDF reste maîtrisable.",
    "Ne fusionnez pas d’une semaine à l’autre. Un PDF par semaine garde les fichiers faciles à parcourir ; un PDF par semestre devient illisible.",
    "Compressez le PDF fusionné final seulement une fois le semestre terminé. Pendant le semestre, gardez la copie lisible pour les révisions actives.",
  ],
  mobileNote:
    "La moitié de la conversion des notes de cours se fait sur téléphone — photographier le tableau, numériser une page manuscrite, capturer des diapositives. L’application PDF Editor gère la chaîne de conversion et de fusion sur mobile, produisant un PDF hebdomadaire net avant même que le fichier ne quitte le téléphone.",
  faq: [
    {
      q: "Faut-il garder les notes dans leur format d’origine ou les convertir ?",
      a: "Les deux. Gardez les originaux modifiables pour retravailler le contenu ; produisez une copie PDF par thème pour réviser. Le PDF ne remplace pas la source — c’est un support d’étude.",
    },
    {
      q: "Quelle est la meilleure façon de fusionner ?",
      a: "Fusionner le PDF dans votre navigateur. Définissez l’ordre avant la fusion ; réordonner après est techniquement possible mais plus lent.",
    },
    {
      q: "Faut-il appliquer l’OCR aux scans manuscrits ?",
      a: "Si votre outil le propose, oui — des notes manuscrites consultables par recherche sont plus utiles le jour de l’examen. L’OCR sur l’écriture manuscrite est imparfait ; traitez le texte reconnu comme approximatif.",
    },
    {
      q: "Quel poids devraient faire les PDF de notes hebdomadaires ?",
      a: "Ce que la semaine produit naturellement. Compressez en fin de semestre pour l’archivage ; pendant le semestre, privilégiez la lisibilité sur la légèreté.",
    },
    {
      q: "Peut-on tout faire depuis un téléphone ?",
      a: "Oui. L’application PDF Editor gère chaque format et les fusionne directement sur l’appareil. Utile quand vous ne voulez pas que les notes attendent un accès à l’ordinateur portable.",
    },
  ],
  related: [
    { label: "Convertisseur PDF — conversions Word, JPG, PNG", path: "/pdf-converter" },
    { label: "Image vers PDF — photos du tableau et captures d’écran", path: "/image-to-pdf" },
    { label: "Comment numériser ses notes manuscrites en PDF", path: "/guides/how-to-scan-notes-to-pdf" },
    { label: "Comment organiser ses supports de révision en PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
  ],
  parentHub: { label: "Convertisseur PDF — Word, JPG, PNG et retour", path: "/pdf-converter" },
};

export default content;
