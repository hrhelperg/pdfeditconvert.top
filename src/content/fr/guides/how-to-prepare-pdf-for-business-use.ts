import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-for-business-use",
  h1: "Comment préparer un PDF avant de l’envoyer à un client (check-list)",
  description:
    "Avant qu’un PDF quitte le bureau : retirer les brouillons, vérifier la pagination, corriger l’orientation, intégrer les polices et alléger le fichier. La vérification finale des documents qui vous représentent.",
  updated: "2026-05-29",
  intro: [
    "Un PDF qui quitte votre entreprise est un petit ambassadeur. Il porte votre nom, votre identité visuelle, vos choix typographiques et — bien trop souvent — le nom de fichier original du genre « Document sans titre (4).pdf » laissé par la dernière personne qui l’a ouvert la semaine passée. La différence entre un PDF amateur et un PDF professionnel est rarement spectaculaire, mais elle est presque toujours visible d’un coup d’œil.",
    "Préparer un PDF pour un usage professionnel n’est pas une seule transformation ; c’est une courte check-list. Retirer les brouillons, fixer une bonne numérotation de pages, corriger l’orientation, confirmer l’intégration des polices, l’étiqueter proprement, compresser avec discernement, définir un nom de fichier utile. Chaque étape prend quelques secondes, le tout prend une minute, et le document arrive en donnant l’impression que vous l’avez voulu ainsi.",
    "Ce guide parcourt la check-list dans l’ordre qui rattrape le plus de problèmes en premier — la façon dont vous le feriez pour un vrai livrable un vrai mardi après-midi.",
  ],
  steps: [
    {
      title: "Retirez les pages inutilisées ou de brouillon",
      body: "Extraire des pages PDF ne garde que les pages que vous voulez vraiment envoyer. Des pages de couverture qui n’étaient que des espaces réservés, des pages de remerciement vides, de vieilles annexes — tout cela doit disparaître de la version finale.",
    },
    {
      title: "Vérifiez l’ordre des pages et la pagination",
      body: "Réorganisez les pages PDF si quelque chose s’est retrouvé désordonné après une fusion ou une révision. Vérifiez que les numéros de page visibles correspondent à l’ordre — les lecteurs repèrent vite une numérotation qui ne colle pas.",
    },
    {
      title: "Corrigez l’orientation",
      body: "Les pages larges (tableurs, graphiques) appartiennent au format paysage ; le reste à la verticale. Faire pivoter un PDF redresse les numérisations ou les imports arrivés de travers. Un document à l’orientation mixte paraît cassé même quand il ne l’est pas.",
    },
    {
      title: "Assurez-vous que les polices sont intégrées",
      body: "Les polices non intégrées sont remplacées côté lecteur, parfois maladroitement. Réexportez depuis la source avec « intégrer toutes les polices » activé, ou imprimez en PDF pour aplatir le rendu.",
    },
    {
      title: "Définissez le titre du fichier dans les métadonnées",
      body: "Le texte affiché dans les onglets du navigateur et les barres de titre des lecteurs diffère souvent du nom de fichier. Définissez les deux délibérément — les clients remarquent quand un onglet « Proposition » affiche « Sans titre.docx ».",
    },
    {
      title: "Compressez et nommez pour la livraison",
      body: "Compresser un PDF fait passer le fichier sous les limites habituelles de mail et de portail. Renommez en NomClient_TypeDoc_AAAA-MM-JJ.pdf pour que le destinataire puisse identifier le fichier depuis son dossier de téléchargements dans un an.",
    },
  ],
  tips: [
    "Parcourez le document une fois à 100 % de zoom avant l’envoi. L’œil repère des surprises que le défilement rapide manque.",
    "Ajoutez un filigrane aux brouillons, mais jamais aux versions finales — l’absence de filigrane est le signal que c’est la version finale.",
    "Retirez les anciennes métadonnées. L’application PDF Editor et les réexports permettent tous deux de remplacer l’auteur, l’entreprise et l’historique de modification qui peuvent fuiter depuis des brouillons.",
    "Si le document a des champs de formulaire destinés à être remplis, testez-les sur l’appareil vers lequel vous les envoyez. Beaucoup de champs fonctionnent dans Acrobat mais pas dans les navigateurs.",
    "Faites un dernier aperçu avant impression du document. S’il s’imprime mal, le destinataire rencontrera le même problème.",
  ],
  mobileNote:
    "Les finitions de dernière minute — corriger une numérisation de travers, retirer une page de brouillon égarée, recompresser pour un plafond d’e-mail — se font plus souvent sur téléphone que les gens ne l’admettent. L’application PDF Editor gère tout cela hors ligne pour que le livrable parte propre, même depuis le Wi-Fi d’un café.",
  faq: [
    {
      q: "Quelle est l’étape la plus souvent oubliée ?",
      a: "Définir les métadonnées. Le nom de fichier et le titre du document affichés dans les onglets et les en-têtes des lecteurs sont souvent des restes de la rédaction. Corrigez les deux avant l’envoi.",
    },
    {
      q: "La compression compte-t-elle vraiment beaucoup ?",
      a: "Beaucoup quand le destinataire est sur un portail strict ou une connexion lente. Moins pour un partage interne informel. Par défaut, compressez — cela ne fait presque jamais de mal.",
    },
    {
      q: "Dois-je intégrer les polices sur chaque PDF ?",
      a: "Sur tout ce qui est destiné à un client, oui. Sur des brouillons internes où tout le monde a les mêmes polices installées, c’est moins critique. Le coût de l’intégration est faible.",
    },
    {
      q: "Dois-je toujours inclure les numéros de page ?",
      a: "Sur les livrables multipages, oui. Sur les documents d’une seule page, non. Les numéros de page aident le lecteur à naviguer et à confirmer que rien ne manque.",
    },
    {
      q: "Existe-t-il un outil qui fait tout cela en une seule fois ?",
      a: "Non, et c’est volontaire — chaque étape est un choix délibéré, pas une transformation automatique. Les outils dans le navigateur de ce site permettent de faire chaque étape en quelques secondes sans les regrouper dans une boîte noire.",
    },
  ],
  related: [
    { label: "PDF pour les entreprises — contrats et flux de travail", path: "/pdf-for-business" },
    { label: "Extraire des pages PDF — élaguer les livrables finaux", path: "/extract-pdf-pages" },
    { label: "Comment partager des PDF avec ses clients", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Comment préparer un PDF avant de le partager", path: "/guides/how-to-prepare-pdf-before-sharing" },
  ],
  parentHub: { label: "PDF pour les entreprises — contrats et flux de travail", path: "/pdf-for-business" },
};

export default content;
