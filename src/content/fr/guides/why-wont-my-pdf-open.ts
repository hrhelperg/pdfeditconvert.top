import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-wont-my-pdf-open",
  h1: "Pourquoi mon PDF ne s’ouvre-t-il pas ? Causes et solutions",
  description:
    "Un PDF qui refuse de s’ouvrir, c’est presque toujours l’une de cinq causes. Comment reconnaître un téléchargement incomplet, un mot de passe, un bug de lecteur ou un fichier ancien — et corriger chacun.",
  updated: "2026-05-29",
  intro: [
    "Vous double-cliquez sur un PDF et rien ne se passe. Ou le lecteur affiche une erreur, se fige, ou fait apparaître une fenêtre de mot de passe que vous n’attendiez pas. Les PDF donnent l’impression qu’ils devraient simplement fonctionner, et la plupart du temps c’est le cas — alors quand ce n’est pas le cas, ça vaut la peine de connaître la courte liste des raisons possibles.",
    "Il n’existe vraiment qu’une poignée de causes derrière un PDF récalcitrant : le téléchargement était incomplet, le fichier est protégé par mot de passe, le lecteur ne correspond pas à la version du PDF, le fichier a été généré par un export bogué, ou c’est un format de fichier qui ressemble seulement à un PDF. Chacune a une solution précise et reproductible.",
    "Ce guide parcourt les diagnostics un par un, dans l’ordre où ça vaut la peine de les vérifier, avec le bon outil pour chacun. La plupart des corrections consistent à identifier quel problème vous avez, pas à apprendre une astuce avancée.",
  ],
  steps: [
    {
      title: "Retéléchargez le fichier avant toute autre chose",
      body: "Un téléchargement tronqué est la raison la plus courante pour laquelle un PDF ne s’ouvre pas. Récupérer le fichier à nouveau règle le problème en quelques secondes. Si ça échoue encore, que la taille correspond à la source, et que la source le charge toujours — vous avez écarté un mauvais téléchargement.",
    },
    {
      title: "Vérifiez s’il est protégé par mot de passe",
      body: "Certains lecteurs affichent une erreur générique plutôt qu’une invite de mot de passe. Si le fichier vient d’une banque, d’un employeur ou d’un prestataire juridique, supposez qu’il y a un mot de passe. L’expéditeur d’origine le connaîtra.",
    },
    {
      title: "Essayez un autre lecteur de PDF",
      body: "Les navigateurs, Aperçu sur macOS, Adobe Acrobat et les lecteurs mobiles analysent tous les PDF légèrement différemment. Un fichier qu’un lecteur refuse s’ouvre souvent très bien dans un autre. Si un onglet de navigateur fonctionne mais pas une application de bureau, c’est un décalage de version de lecteur, pas un fichier cassé.",
    },
    {
      title: "Inspectez le vrai type de fichier",
      body: "Les fichiers arrivant par e-mail ou par chat portent parfois une extension .pdf mais sont en réalité des .docx, des .html, une image ou une archive ZIP. Les ouvrir avec un éditeur de texte générique révèle les premiers octets. Un vrai PDF commence par %PDF-. Tout autre chose signifie qu’il faut renommer ou redemander le fichier.",
    },
    {
      title: "Réparez par un aller-retour de réexport",
      body: "Si le fichier est réellement valide mais cassé de façon subtile, l’ouvrir dans un lecteur qui arrive encore à l’afficher, puis l’imprimer en PDF ou l’exporter à nouveau, produit souvent une copie propre. Certains objets malformés sont réécrits et le nouveau fichier s’ouvre partout.",
    },
    {
      title: "Réduisez sa taille si la mémoire est la limite",
      body: "Sur d’anciens téléphones, de très gros PDF riches en numérisations peuvent carrément refuser de s’ouvrir. Compresser un PDF dans votre navigateur réduit le fichier sur place ; la copie compressée s’ouvre là où l’original ne le pouvait pas.",
    },
  ],
  tips: [
    "Comparez la taille du fichier téléchargé à ce que l’expéditeur a indiqué. Un écart pointe directement vers un téléchargement tronqué.",
    "Si un navigateur ouvre le PDF mais pas votre application de bureau, configurez-le pour s’ouvrir dans le navigateur pour l’instant — vous ne perdez rien et vous avancez.",
    "Un fichier qui s’ouvre sur téléphone mais échoue sur ordinateur portable (ou l’inverse) est généralement un problème de version de lecteur, pas un fichier corrompu. Choisissez le lecteur qui fonctionne.",
    "Quand des PDF joints à des e-mails échouent de façon répétée, essayez de les télécharger depuis l’interface webmail plutôt que le client de bureau — les clients tronquent parfois les grosses pièces jointes.",
    "Gardez les originaux avant de faire des allers-retours de réparation. Un mauvais réexport peut perdre des champs de formulaire ou des annotations que l’original conservait.",
  ],
  mobileNote:
    "Sur un téléphone, le coupable le plus courant est un téléchargement partiel sur une connexion cellulaire capricieuse. L’application PDF Editor stocke les fichiers localement et permet de retélécharger et d’ouvrir de gros PDF sans dépendre du cache du navigateur, qui est souvent là où se produit la troncature.",
  faq: [
    {
      q: "Pourquoi mon PDF dit-il qu’il est endommagé alors que l’expéditeur affirme qu’il est correct ?",
      a: "Presque toujours un téléchargement partiel. Retéléchargez le fichier ; vérifiez que la taille en octets correspond à ce que l’expéditeur a partagé. Si la nouvelle copie s’ouvre, l’originale était incomplète.",
    },
    {
      q: "Mon lecteur demande un mot de passe que je n’ai pas. Que faire ?",
      a: "Seul l’expéditeur d’origine peut le partager. Il n’existe aucun moyen sûr de contourner un vrai mot de passe PDF côté destinataire, et les outils qui le promettent sont à éviter.",
    },
    {
      q: "Pourquoi s’ouvre-t-il dans Chrome mais pas dans Acrobat ?",
      a: "Les lecteurs de bureau plus anciens peuvent ne pas prendre en charge des fonctionnalités PDF récentes. Continuez à utiliser le lecteur qui fonctionne, ou réexportez le fichier via une impression en PDF pour produire une copie compatible.",
    },
    {
      q: "Existe-t-il un outil qui « répare » simplement les PDF cassés ?",
      a: "Parfois — faire passer le fichier par un réexport (ouvrir, imprimer en PDF, enregistrer) nettoie les problèmes structurels mineurs. Mais les PDF sévèrement corrompus sont généralement irrécupérables.",
    },
    {
      q: "Compresser aide-t-il pour les fichiers qui ne s’ouvrent pas ?",
      a: "Seulement si la cause est la mémoire : d’énormes PDF riches en numérisations échouent parfois sur d’anciens téléphones. Compresser un PDF les rend assez petits pour se charger. Cela ne réparera pas un fichier structurellement cassé.",
    },
  ],
  related: [
    { label: "Compresser un PDF — réduire les gros fichiers qui ne s’ouvrent pas", path: "/compress-pdf" },
    { label: "Outils PDF — liste complète des corrections dans le navigateur", path: "/pdf-tools" },
    { label: "Comment réparer un PDF endommagé", path: "/guides/how-to-fix-a-corrupted-pdf" },
    { label: "Comment corriger la mise en page d’un PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
  ],
  parentHub: { label: "Outils PDF — gratuits, dans le navigateur", path: "/pdf-tools" },
};

export default content;
