import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-printing-issues",
  h1: "Comment résoudre les problèmes d’impression d’un PDF (pages coupées, mauvais format, texte manquant)",
  description:
    "Quand un PDF s’imprime rogné, mal mis à l’échelle ou sans une partie du texte, la solution dépend du symptôme. Un tableau court qui associe chaque problème au bon réglage.",
  updated: "2026-05-29",
  intro: [
    "Les PDF ont été créés pour qu’un document paraisse identique partout — y compris sur papier. Donc quand l’un s’imprime mal, c’est presque toujours le travail d’impression, pas le fichier. La page est plus grande que le papier, l’imprimante réduit l’échelle, une police n’est pas intégrée, un indicateur de sécurité bloque l’impression, ou le document a été dimensionné pour une région où vous ne vous trouvez pas.",
    "Chacune de ces causes produit un symptôme différent : des bords coupés, un texte minuscule, des pages vides, des fenêtres d’erreur ou d’étranges polices de substitution. Traiter tout cela comme « l’imprimante est cassée » gaspille beaucoup de papier. Les traiter comme des problèmes précis avec des solutions précises fait gagner du temps.",
    "Ce guide est un tableau court : ce que vous voyez face à la cause la plus probable et la bonne correction. La plupart des corrections sont des réglages dans la fenêtre d’impression ou une étape rapide avant impression.",
  ],
  steps: [
    {
      title: "Si les bords sont coupés, réglez sur « Ajuster à la zone imprimable »",
      body: "Beaucoup de PDF sont dimensionnés au format plein bord de la page ; les imprimantes ne peuvent pas imprimer jusqu’au bord. Dans la fenêtre d’impression, choisissez « Ajuster » ou « Réduire à la zone imprimable » plutôt que « Taille réelle ». La page rétrécira très légèrement et arrêtera de perdre ses bords.",
    },
    {
      title: "Si le texte est minuscule, vérifiez le décalage de format de papier",
      body: "Un document conçu pour une impression A3 imprimé sur du Letter rétrécira pour s’adapter. Réexportez la source au format de papier cible, ou divisez la double page en deux avec Extraire des pages PDF avant de réimprimer.",
    },
    {
      title: "Pour les pages qui s’impriment vides ou sans texte, intégrez les polices",
      body: "Les documents utilisant des polices que votre imprimante n’a pas peuvent afficher des caractères manquants. Réexportez avec « intégrer toutes les polices » activé dans l’application source, ou passez d’abord par une impression en PDF pour aplatir le tout en pixels matriciels.",
    },
    {
      title: "Pour les erreurs « document sécurisé », vérifiez les permissions de modification",
      body: "Certains PDF sont exportés avec des indicateurs qui bloquent l’impression. Seul l’auteur peut les retirer. Si c’est votre fichier, réexportez sans la restriction d’impression. Sinon, demandez une copie autorisant l’impression.",
    },
    {
      title: "Faites pivoter les pages avant l’impression si l’orientation est fausse",
      body: "Si des pages sont de travers ou à l’envers, corrigez-les avant de les envoyer à l’imprimante avec Faire pivoter un PDF. La rotation côté imprimante introduit souvent ses propres problèmes de mise à l’échelle — corriger dans le fichier est plus propre.",
    },
    {
      title: "Imprimez une page test à partir d’un extrait d’une seule page",
      body: "Ne gaspillez pas un document de 50 pages à découvrir un problème d’impression. Extraire des pages PDF peut enregistrer une page comme PDF autonome ; imprimez-la, confirmez les réglages, puis lancez le travail complet.",
    },
  ],
  tips: [
    "Vérifiez toujours que le format de papier sélectionné dans la fenêtre d’impression correspond au format de page du PDF — les décalages Letter contre A4 causent la plupart des symptômes « trop petit ».",
    "Passez d’abord par une impression en PDF si le fichier se comporte mal. La copie aplatie s’imprime souvent proprement quand l’original ne le fait pas.",
    "Les réglages de livret et de piqûre à cheval causent plus de problèmes d’impression qu’ils n’en résolvent — imprimez d’abord les pages à plat, puis réorganisez-les physiquement si nécessaire.",
    "Les profils de couleur des logiciels de design peuvent produire des impressions sombres ou ternes sur des imprimantes domestiques. Réexporter en sRVB corrige généralement le problème.",
    "Si un pilote d’imprimante est ancien, un réexport via impression en PDF peut masquer des fonctionnalités que le pilote ne gère pas.",
  ],
  mobileNote:
    "Imprimer depuis un téléphone passe généralement par AirPrint, Google Print ou une application de constructeur, et chacune gère le PDF un peu différemment. L’application PDF Editor permet de dimensionner, faire pivoter et rogner les pages avant l’envoi — corriger le PDF plutôt que de lutter contre la fenêtre d’impression fonctionne généralement mieux sur mobile.",
  faq: [
    {
      q: "Pourquoi mon PDF s’imprime-t-il plus petit qu’à l’écran ?",
      a: "Presque toujours parce que le format du document ne correspond pas au format du papier. L’imprimante réduit l’échelle pour s’adapter. Réexportez au format de papier cible ou utilisez « Taille réelle » avec un papier correspondant.",
    },
    {
      q: "Pourquoi certains caractères manquent-ils à l’impression ?",
      a: "Les polices n’étaient pas intégrées et votre imprimante ne les a pas. Réexportez avec les polices intégrées, ou passez d’abord par une impression en PDF pour tout aplatir.",
    },
    {
      q: "Pourquoi la fenêtre d’impression dit-elle que mon PDF est sécurisé ?",
      a: "Il porte un indicateur de permission qui bloque l’impression. Seul l’auteur peut le lever. Il n’existe aucun contournement sûr côté destinataire.",
    },
    {
      q: "Dois-je faire pivoter les pages dans l’imprimante ou dans le fichier ?",
      a: "Dans le fichier. La rotation côté imprimante peut introduire une mise à l’échelle, alors que Faire pivoter un PDF intègre l’orientation directement dans le document.",
    },
    {
      q: "Comment éviter de gaspiller du papier en diagnostiquant les problèmes d’impression ?",
      a: "Extrayez d’abord une seule page, imprimez-la, confirmez les réglages, puis lancez le travail complet. Extraire des pages PDF fait cela dans votre navigateur.",
    },
  ],
  related: [
    { label: "Faire pivoter un PDF — corriger l’orientation avant impression", path: "/rotate-pdf" },
    { label: "Extraire des pages PDF — imprimer d’abord une page test", path: "/extract-pdf-pages" },
    { label: "Comment corriger la mise en page d’un PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "Comment corriger les problèmes de police d’un PDF", path: "/guides/how-to-fix-pdf-font-issues" },
  ],
  parentHub: { label: "Outils PDF — gratuits, dans le navigateur", path: "/pdf-tools" },
};

export default content;
