import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "local-browser-pdf-processing-explained",
  h1: "Le traitement PDF local dans le navigateur, expliqué",
  description:
    "Comment un outil PDF peut fonctionner dans un navigateur sans envoyer votre fichier nulle part. La technologie, les compromis, et comment vérifier qu’un outil travaille vraiment en local.",
  updated: "2026-05-29",
  intro: [
    "Beaucoup s’étonnent qu’un onglet de navigateur puisse compresser un PDF, fusionner deux fichiers ou extraire des pages d’un document de 200 pages — le tout sans rien envoyer vers un serveur. Le navigateur donne l’impression d’une fenêtre ouverte sur Internet, pas d’un endroit où se déroule un travail lourd. Mais les navigateurs modernes peuvent exécuter beaucoup de code directement sur votre machine, et le traitement de PDF s’avère être exactement le genre de tâche qui s’y prête.",
    "La technologie derrière les outils PDF locaux dans le navigateur, c’est JavaScript et WebAssembly exécutés dans votre navigateur, travaillant directement sur le fichier que vous fournissez. Le fichier est lu par JavaScript, transformé dans la mémoire de votre navigateur, puis réécrit dans un nouveau fichier que vous pouvez télécharger — sans qu’aucun appel réseau ne transporte le contenu de votre fichier.",
    "Ce guide explique comment ça fonctionne vraiment, pourquoi c’est sûr par défaut, quelles sont les limites (il y en a de réelles), et comment vérifier qu’un outil que vous envisagez est réellement local. Rien d’exotique ; la technologie est mature.",
  ],
  steps: [
    {
      title: "Comprenez le déroulement de base",
      body: "Vous déposez un fichier sur la page. JavaScript le lit dans la mémoire du navigateur. Du code JavaScript ou WebAssembly le transforme (compression, fusion, division). Le résultat est réécrit dans un nouveau fichier que vous téléchargez. Aucun transfert, aucun contact serveur pour le fichier lui-même.",
    },
    {
      title: "Comprenez ce qui rend cela confidentiel",
      body: "Le serveur fournit le code JavaScript (l’outil lui-même) mais ne voit jamais les données que ce code traite. Le même onglet de navigateur qui télécharge l’outil l’exécute ensuite localement sur votre fichier. L’architecture sépare la livraison du code du traitement des données.",
    },
    {
      title: "Vérifiez avec les outils de développement du navigateur",
      body: "Ouvrez les outils de développement, l’onglet réseau, déposez votre fichier. Un outil réellement local ne montre aucune grosse requête sortante quand vous ajoutez le fichier. Un outil qui transfère envoie le fichier sous forme de requête POST de plusieurs mégaoctets. La différence est visible.",
    },
    {
      title: "Reconnaissez honnêtement les limites",
      body: "Le traitement local est limité par la mémoire et le processeur de votre navigateur. Les fichiers très volumineux (centaines de pages, plusieurs gigaoctets) peuvent bloquer l’appareil ; les opérations avancées (OCR complet sur de longs documents) ont parfois besoin d’aide côté serveur. Les outils dans le navigateur conviennent surtout au travail courant.",
    },
    {
      title: "Vérifiez qu’aucune télémétrie ne fait fuiter de données",
      body: "Certains outils enregistrent des événements analytiques avec des métadonnées (nombre de pages, taille du fichier). C’est différent d’une fuite de contenu — et cette analytique reste visible dans le même onglet réseau. Distinguez le contenu des métadonnées.",
    },
    {
      title: "Traitez le navigateur comme une frontière de confiance",
      body: "Une fois votre fichier chargé dans l’onglet du navigateur, il reste sur votre appareil. Les outils de traitement de ce site exploitent cette propriété : ils font leur travail dans l’onglet et n’envoient jamais votre fichier ailleurs, ce qui rend la confidentialité automatique.",
    },
  ],
  tips: [
    "WebAssembly assure le gros du travail pour le traitement de PDF dans les navigateurs modernes — sa vitesse est proche du natif, ce qui explique pourquoi les outils PDF locaux ont rattrapé les applications de bureau en performance.",
    "Fermer l’onglet du navigateur efface le fichier de la mémoire. Les outils locaux ne laissent aucune copie derrière eux.",
    "Les outils locaux fonctionnent hors connexion une fois la page chargée — une confirmation pratique que le fichier n’est envoyé nulle part.",
    "Les affirmations de confidentialité doivent être vérifiables. Les outils de développement permettent cette vérification ; vous n’avez pas à prendre le discours marketing pour argent comptant.",
    "« Dans le navigateur » n’est pas synonyme de « sans serveur ». Certains outils « dans le navigateur » envoient quand même votre fichier — seule l’interface se trouve dans le navigateur. Vérifiez le trafic réseau.",
  ],
  mobileNote:
    "Les navigateurs mobiles exécutent les mêmes outils locaux en JavaScript et WebAssembly que les navigateurs de bureau. L’application PDF Editor utilise une architecture similaire : tout le traitement se fait sur l’appareil, sans aucun transfert, si bien que les utilisateurs d’iPhone et d’Android bénéficient des mêmes garanties de confidentialité.",
  faq: [
    {
      q: "Comment se déroule le traitement d’un PDF dans un navigateur ?",
      a: "JavaScript et WebAssembly lisent votre fichier dans la mémoire de l’onglet du navigateur, le transforment, puis réécrivent le résultat dans un téléchargement. Le serveur fournit le code mais ne voit jamais le fichier.",
    },
    {
      q: "Le traitement local dans le navigateur est-il vraiment confidentiel ?",
      a: "Oui, par construction. Le fichier ne quitte pas l’onglet. La seule façon pour un outil local de fuiter serait un bug ou un transfert caché — ce que les outils de développement révéleraient.",
    },
    {
      q: "Quelle taille de fichier peut-il gérer ?",
      a: "Les navigateurs modernes gèrent confortablement des PDF allant jusqu’à quelques centaines de mégaoctets. Au-delà, vous pouvez atteindre des limites de mémoire selon l’appareil.",
    },
    {
      q: "Cela fonctionne-t-il hors connexion ?",
      a: "Oui, une fois la page chargée. Le traitement se fait en local ; aucun réseau n’est nécessaire. C’est un bon test pour vérifier qu’un outil est réellement local.",
    },
    {
      q: "Pourquoi tous les outils PDF ne fonctionnent-ils pas ainsi ?",
      a: "Certaines opérations (véritable OCR sur de longs documents, certaines compressions) restent plus rapides sur un serveur. Beaucoup d’outils dépendent aussi d’un modèle économique côté serveur. Les outils dans le navigateur sont devenus une alternative viable pour la plupart des tâches quotidiennes.",
    },
  ],
  related: [
    { label: "Outils PDF — dans le navigateur, sans transfert", path: "/pdf-tools" },
    { label: "Outils PDF dans le navigateur ou avec transfert", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Les avantages du traitement documentaire dans le navigateur", path: "/guides/browser-based-document-processing-benefits" },
    { label: "Les outils PDF en ligne sont-ils sûrs ?", path: "/guides/are-online-pdf-tools-safe" },
  ],
  parentHub: { label: "Outils PDF — gratuits, dans le navigateur", path: "/pdf-tools" },
};

export default content;
