import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-pdfs-on-phone",
  h1: "Comment gérer ses PDF sur son téléphone",
  description:
    "Évitez que les PDF de votre téléphone tournent au chaos : renommer, classer, synchroniser et libérer de l’espace. Une routine d’entretien réaliste.",
  updated: "2026-05-23",
  intro: [
    "Les PDF s’accumulent sur un téléphone plus vite que partout ailleurs. Pièces jointes d’e-mail, numérisations, téléchargements, photos converties — ils s’entassent dans Téléchargements ou l’application Fichiers avec des noms comme « Document(3).pdf » jusqu’à ce que vous ne retrouviez plus celui dont vous avez besoin au moment où vous en avez besoin. Les gérer n’a rien de glamour, mais dix minutes de routine évitent une heure de recherche frénétique plus tard.",
    "Ce guide est une routine d’entretien pratique pour les PDF de votre iPhone ou de votre téléphone Android : les nommer pour qu’ils soient trouvables, les organiser dans des dossiers qui ont du sens, synchroniser les plus importants, et faire le tri dans ce qui dévore l’espace de stockage. Il s’appuie sur l’application Fichiers de votre téléphone, plus l’application PDF Editor pour le travail sur les documents.",
    "L’objectif est un téléphone où vous pouvez remettre la main sur n’importe quel document en quelques secondes, et où le stockage ne disparaît pas discrètement dans des numérisations oubliées de 40 Mo.",
  ],
  steps: [
    {
      title: "Renommez les fichiers dès leur arrivée",
      body: "Au moment où vous enregistrez un PDF, donnez-lui un vrai nom — « Bail-signe-2026-05.pdf », pas « scan_0007.pdf ». Un nom descriptif est ce qui rend un fichier trouvable des semaines plus tard.",
    },
    {
      title: "Créez quelques dossiers sensés",
      body: "Dans l’application Fichiers, créez des dossiers qui correspondent à votre façon de penser — Reçus, Contrats, Formulaires, Travail. Une poignée de dossiers clairs vaut mieux qu’un seul gros tas.",
    },
    {
      title: "Synchronisez les plus importants dans le cloud",
      body: "Déplacez les documents que vous ne pouvez pas vous permettre de perdre vers iCloud Drive, Google Drive ou OneDrive pour qu’ils survivent à un téléphone perdu ou remplacé — et s’ouvrent sur vos autres appareils.",
    },
    {
      title: "Élaguez et nettoyez les documents eux-mêmes",
      body: "Utilisez l’application PDF Editor pour fusionner les fichiers liés, retirer les pages vides et corriger les numérisations de travers, pour que chaque document conservé soit propre plutôt qu’un vrac brut.",
    },
    {
      title: "Compressez ce qui dévore l’espace",
      body: "Les grosses numérisations dévorent l’espace. Compressez celles que vous gardez mais n’avez pas besoin de conserver en pleine résolution, et votre stockage arrête de se remplir mystérieusement.",
    },
    {
      title: "Videz ce dont vous n’avez plus besoin",
      body: "Supprimez les doublons et les fichiers ponctuels déjà envoyés. Videz régulièrement le dossier des éléments récemment supprimés pour que l’espace libéré revienne vraiment.",
    },
  ],
  tips: [
    "Renommez à l’arrivée, pas « plus tard ». Plus tard n’arrive jamais, et un dossier plein de « Document(n).pdf » en est le résultat.",
    "Choisissez un seul modèle de nom — « Type-Qui-Date » fonctionne bien — et vos fichiers se trient et se retrouvent tout seuls.",
    "Synchronisez tout ce que vous seriez contrarié de perdre. Un téléphone est bien plus facile à perdre qu’un compte cloud, et les fichiers synchronisés s’ouvrent aussi sur votre ordinateur portable.",
    "Compresser des numérisations gardées mais rarement ouvertes récupère plus de stockage que supprimer de petits fichiers ne le fera jamais.",
    "Un petit rangement mensuel vaut mieux qu’une fouille archéologique annuelle. Dix minutes régulièrement empêchent le tas de devenir un projet.",
  ],
  mobileNote:
    "L’application PDF Editor est le volet documentaire de la gestion des PDF sur téléphone : fusionner, élaguer, faire pivoter, compresser et renommer au même endroit, hors ligne, avant de tout ranger. Associez-la à votre application Fichiers pour les dossiers et la synchronisation cloud, et le tas reste sous contrôle.",
  faq: [
    {
      q: "Où vivent les PDF sur mon téléphone ?",
      a: "Sur iPhone, dans l’application Fichiers (souvent dans Téléchargements ou iCloud Drive) ; sur Android, généralement dans Téléchargements via l’application Fichiers. Créer des dossiers dans l’une ou l’autre les garde organisés.",
    },
    {
      q: "Comment dois-je nommer mes fichiers PDF ?",
      a: "Utilisez un modèle cohérent et descriptif avec une date, comme « Type-Qui-Date.pdf ». Le faire dès l’arrivée des fichiers est ce qui les garde trouvables plus tard.",
    },
    {
      q: "Comment empêcher les PDF de dévorer mon stockage ?",
      a: "Compressez les grosses numérisations que vous gardez, supprimez les doublons et les fichiers ponctuels déjà envoyés, et videz le dossier des éléments récemment supprimés pour que l’espace soit vraiment récupéré.",
    },
    {
      q: "Dois-je garder les PDF dans le cloud ou sur l’appareil ?",
      a: "Gardez les plus importants dans le cloud pour qu’ils survivent à un téléphone perdu et se synchronisent sur vos autres appareils. Le stockage sur l’appareil seul convient aux fichiers temporaires que vous supprimerez bientôt.",
    },
    {
      q: "Puis-je organiser les documents eux-mêmes, pas seulement les fichiers ?",
      a: "Oui. L’application PDF Editor fusionne, élague et corrige les documents pour que ce que vous stockez soit propre — voir le guide sur l’organisation des fichiers PDF pour la méthode complète.",
    },
  ],
  related: [
    { label: "Tous les outils PDF gratuits", path: "/pdf-tools" },
    { label: "Comment organiser ses fichiers PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Comment réduire un PDF sur iPhone", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
    { label: "Comment partager un PDF depuis son téléphone", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
