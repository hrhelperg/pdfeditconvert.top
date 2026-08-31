import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-google-docs",
  h1: "PDF ou Google Docs — quand utiliser l’un et l’autre",
  description:
    "Google Docs sert à travailler à plusieurs ; le PDF sert à livrer. Quand utiliser lequel, concrètement, et comment passer proprement de l’un à l’autre au bon moment.",
  updated: "2026-05-29",
  intro: [
    "Google Docs et le PDF ne sont pas vraiment en concurrence — ils servent des phases différentes de la vie d’un document. Docs sert à rédiger, collaborer, réviser, commenter ; le PDF sert à livrer, verrouiller, signer, archiver. Essayer d’utiliser l’un ou l’autre en dehors de son point fort, c’est précisément d’où vient la friction.",
    "Un document type passe par les deux : rédigé dans Docs parce que c’est là que se fait la collaboration, puis exporté en PDF quand la version est finale et destinée à sortir du groupe de travail. Dans l’autre sens — recevoir un PDF et l’importer dans Docs pour l’éditer — ça fonctionne, mais avec toujours une perte de fidélité ; c’est donc une solution de secours, pas une routine.",
    "Ce guide détaille, phase par phase, quand utiliser lequel, ainsi que la mécanique de conversion dans les deux sens. Choisissez le bon format au bon moment et la friction disparaît presque entièrement.",
  ],
  steps: [
    {
      title: "Utilisez Google Docs pendant la rédaction du document",
      body: "Édition à plusieurs auteurs, curseurs en direct, historique des versions, commentaires. Docs gère tout cela proprement, et le PDF ne gère rien de tout ça. La rédaction et la relecture appartiennent à Docs.",
    },
    {
      title: "Passez au PDF quand le document est final ou externe",
      body: "Dès qu’un document part vers un client, un régulateur, un fournisseur ou une archive, le PDF verrouille la mise en page et le contenu. Le document Docs reste la source modifiable ; le PDF est le livrable.",
    },
    {
      title: "Exportez proprement de Docs vers PDF",
      body: "Fichier → Télécharger → Document PDF. Intégrez les polices via les options d’export si elles sont disponibles. Le PDF obtenu conserve les titres, les tableaux, les images et la mise en forme.",
    },
    {
      title: "Convertissez le PDF en format modifiable quand c’est nécessaire",
      body: "PDF vers Word dans votre navigateur extrait le texte d’un PDF. Le résultat est approximatif — la mise en page en souffre, les tableaux peuvent se casser. Traitez cela comme une solution de récupération, pas comme une méthode habituelle.",
    },
    {
      title: "Ne signez pas et n’archivez pas dans Google Docs",
      body: "Docs n’a pas de vrai support de signature, et l’historique des versions reste lié à votre compte Google. Les documents signés et les archives appartiennent au PDF, stockés en local ou dans un coffre pensé pour cela.",
    },
    {
      title: "Adaptez le format au destinataire",
      body: "Les clients attendent du PDF. Les correcteurs attendent du Word ou du Docs. Les équipes internes préfèrent parfois Docs pour collaborer. Envoyez le format que la personne va réellement utiliser.",
    },
  ],
  tips: [
    "N’envoyez pas un lien Google Docs à un client — il n’a peut-être pas de compte Google, les permissions de partage peuvent vous surprendre, et le document peut continuer à changer après son ouverture.",
    "En convertissant de Docs vers PDF, vérifiez la pagination — ce qui tenait sur une page dans Docs déborde parfois sur deux dans le PDF.",
    "N’« ouvrez pas dans Docs » un PDF que vous avez reçu, sauf besoin réel d’édition lourde. La conversion perd de la mise en forme ; le PDF d’origine est plus net pour lire et partager.",
    "Utilisez l’historique des versions de Docs pour la rédaction collaborative. Le PDF est l’instantané au moment de la livraison.",
    "Traitez Docs comme la source de vérité pendant la rédaction ; traitez le PDF comme la source de vérité après la livraison.",
  ],
  mobileNote:
    "Le téléphone gère l’essentiel du travail PDF de fin de chaîne, même quand la rédaction se fait sur ordinateur. L’application PDF Editor gère la compression de dernière minute, la signature et l’envoi du PDF final sur iOS et Android — utile dans l’intervalle entre « Docs est prêt » et « le client a le fichier ».",
  faq: [
    {
      q: "Peut-on simplement tout garder dans Google Docs ?",
      a: "Pour la collaboration interne, oui. Pour la livraison externe, non — les clients attendent du PDF, et les permissions de partage de Docs peuvent ouvrir des accès de façons imprévues.",
    },
    {
      q: "La conversion de PDF vers Docs fonctionne-t-elle bien ?",
      a: "Acceptable pour récupérer du texte, médiocre pour la mise en page. Le texte passe en général bien ; les tableaux, colonnes et mises en forme précises en souffrent. À utiliser seulement quand vous devez réditer un PDF dont vous n’avez pas la source.",
    },
    {
      q: "Faut-il signer dans Google Docs ou dans le PDF ?",
      a: "Dans le PDF. Les vraies signatures électroniques s’attachent proprement au PDF ; Docs n’a pas de support de signature natif comparable aux outils de signature PDF.",
    },
    {
      q: "Et Google Docs pour l’archivage ?",
      a: "Possible mais risqué — les comptes peuvent changer, les documents peuvent être supprimés, et le format dépend du service Google. Le PDF est le meilleur format d’archive durable.",
    },
    {
      q: "Peut-on faire l’aller-retour Docs → PDF → Docs ?",
      a: "Possible, mais avec des pertes. Chaque conversion perd de la fidélité. Gardez le document Docs original comme source modifiable et ne faites l’aller-retour qu’en dernier recours.",
    },
  ],
  related: [
    { label: "Conversion PDF — Word, JPG, PNG et retour", path: "/pdf-converter" },
    { label: "PDF vers Word — convertir pour une édition lourde", path: "/pdf-to-word" },
    { label: "PDF ou DOCX — comparaison des fonctionnalités", path: "/guides/pdf-vs-docx" },
    { label: "PDF ou DOCX en entreprise", path: "/guides/pdf-vs-docx-for-business" },
  ],
  parentHub: { label: "Convertisseur PDF — Word, JPG, PNG et retour", path: "/pdf-converter" },
};

export default content;
