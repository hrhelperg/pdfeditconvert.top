import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blank",
  h1: "Pourquoi mon PDF est-il vide ? Les vraies causes et comment le récupérer",
  description:
    "Quand un PDF s’ouvre sur des pages blanches, le contenu est presque toujours encore là, masqué par un défaut d’affichage, une police manquante ou une numérisation ratée. Comment identifier le cas et récupérer le document.",
  updated: "2026-05-29",
  intro: [
    "Ouvrir un PDF sur une page vide est déstabilisant. Vous attendez du texte, des graphiques, des contrats signés — et vous n’obtenez rien. La bonne nouvelle, c’est que le contenu est presque toujours encore dans le fichier. La mauvaise, c’est que la cause peut être l’une de plusieurs choses, et vous devez identifier laquelle avant de pouvoir la corriger.",
    "Les PDF vides viennent généralement d’un échec d’affichage (votre lecteur a buté sur quelque chose de précis), d’un échec de police (le texte est techniquement là mais pointe vers un glyphe que personne ne peut dessiner), d’un échec de numérisation ou de capture (la source a produit des pages vides), ou d’un problème de couche ou de contenu masqué. Dans de rares cas, le fichier est réellement vide.",
    "Ce guide parcourt les diagnostics dans l’ordre où ils coûtent le moins cher à vérifier, puis vous oriente vers la bonne correction. La plupart des PDF vides redeviennent lisibles avec un réexport ou un changement de lecteur.",
  ],
  steps: [
    {
      title: "Ouvrez d’abord le fichier dans un autre lecteur",
      body: "Essayez le lecteur intégré de Chrome, Aperçu sur macOS, ou un lecteur mobile. Si l’un d’eux affiche le contenu, vous avez isolé le problème à votre lecteur d’origine — et le fichier va bien.",
    },
    {
      title: "Vérifiez la taille du fichier par rapport à ce qui est attendu",
      body: "Un PDF réellement vide est minuscule — quelques Ko. Un PDF qui paraît vide mais fait plusieurs mégaoctets a presque certainement du contenu à l’intérieur qui ne s’affiche simplement pas pour vous.",
    },
    {
      title: "Cherchez des indicateurs de sécurité ou de permission",
      body: "Certains PDF sont exportés avec une « vue protégée » ou un indicateur de signature qui fait que certains lecteurs cachent le contenu jusqu’à ce que la permission soit accordée. Enregistrer une copie non protégée depuis un lecteur permissif corrige généralement cela.",
    },
    {
      title: "Réexportez le fichier via l’impression en PDF",
      body: "Ouvrez le fichier dans n’importe quel lecteur qui affiche le contenu et utilisez « Imprimer → Enregistrer en PDF » (ou Impression Microsoft en PDF sur Windows). Cela reconstruit l’affichage de la page et corrige la plupart des pages vides liées aux polices.",
    },
    {
      title: "S’il s’agit d’une numérisation, renumérisez avec un autre réglage",
      body: "Les pages numérisées vides viennent généralement d’un chargeur automatique qui a pris deux pages à la fois, d’un contraste réglé trop bas, ou d’une numérisation au téléphone qui a fait la mise au point sur le mauvais plan. Le parcours Numériser en PDF avec détection des bords évite la plupart de ces cas.",
    },
    {
      title: "Extrayez les pages individuellement en images pour confirmer",
      body: "PDF vers images peut exporter chaque page en PNG dans votre navigateur. Si les PNG exportés montrent du contenu, votre lecteur est le problème. S’ils sont vraiment vides, la page du fichier est vide.",
    },
  ],
  tips: [
    "Un PDF vide qui fait plusieurs mégaoctets a du contenu quelque part — continuez d’essayer des lecteurs et des réexports avant de supposer qu’il est perdu.",
    "Du texte gris clair sur fond blanc peut sembler « vide » sur un écran de téléphone en plein soleil. Augmentez la luminosité ou inversez les couleurs avant de conclure que la page est vide.",
    "Les fichiers exportés depuis des applications à accessibilité restreinte intègrent parfois tout dans une seule couche que les lecteurs récents ignorent. L’impression en PDF l’aplatit.",
    "Si vous avez reçu un contrat en retour avec des pages de signature vides, le signataire avait probablement un outil de signature qui a remplacé de vrais champs par des annotations vides — demandez une copie resignée avec un autre signataire.",
    "Ne continuez pas à modifier ou fusionner un fichier qui s’affiche vide avant de savoir pourquoi. Construire sur un affichage cassé produit un fichier encore plus cassé.",
  ],
  mobileNote:
    "Les lecteurs sur téléphone sont parfois plus stricts que ceux de bureau. L’application PDF Editor utilise un moteur d’affichage permissif qui a tendance à montrer le contenu même quand d’autres lecteurs mobiles restent sur du blanc, et permet d’enregistrer le document sous forme de copie plus propre.",
  faq: [
    {
      q: "Un PDF vide est-il perdu pour toujours ?",
      a: "Rarement. Si la taille du fichier dépasse quelques Ko, le contenu est presque certainement encore là — essayez un autre lecteur, un réexport par impression en PDF, ou une extraction en image pour confirmer.",
    },
    {
      q: "Pourquoi mon scanner produit-il parfois des PDF vides ?",
      a: "Le plus souvent, le chargeur a saisi deux pages collées et n’en a enregistré qu’une seule, ou le contraste était réglé trop bas. Renumériser avec le contraste automatique corrige généralement le problème.",
    },
    {
      q: "Cela pourrait-il être un problème de police ?",
      a: "Oui. Quand un PDF référence une police qui n’est pas intégrée et que votre lecteur ne peut pas la remplacer, le texte disparaît même s’il est encore dans le fichier. Réexporter intègre une police utilisable.",
    },
    {
      q: "Compresser ou fusionner un PDF vide fera-t-il perdre le contenu ?",
      a: "C’est possible — les deux opérations travaillent sur ce que votre lecteur peut voir. Ne traitez pas un fichier qui s’affiche vide avant de pouvoir confirmer que le contenu est vraiment là.",
    },
    {
      q: "Pourquoi paraît-il vide dans Acrobat mais correct dans Chrome ?",
      a: "Une analyse différente. Le lecteur de Chrome est souvent le plus tolérant ; les anciennes versions d’Acrobat sont plus strictes. Le fichier n’est pas cassé — c’est votre lecteur.",
    },
  ],
  related: [
    { label: "PDF vers images — vérifier que les pages ne sont pas vraiment vides", path: "/pdf-to-images" },
    { label: "Numériser en PDF — renumérisations propres sans pages vides", path: "/scan-to-pdf" },
    { label: "Pourquoi mon PDF ne s’ouvre-t-il pas ?", path: "/guides/why-wont-my-pdf-open" },
    { label: "Comment réparer un PDF endommagé", path: "/guides/how-to-fix-a-corrupted-pdf" },
  ],
  parentHub: { label: "Outils PDF — gratuits, dans le navigateur", path: "/pdf-tools" },
};

export default content;
