import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blurry",
  h1: "Pourquoi mon PDF est-il flou ? Résolution, compression et numérisation",
  description:
    "Un PDF flou vient d’une numérisation basse résolution, d’une compression trop forte ou d’un mauvais export — jamais du format lui-même. Comment identifier la cause et retrouver de la netteté.",
  updated: "2026-05-29",
  intro: [
    "Les PDF eux-mêmes ne rendent rien flou. Le format tient sans problème du texte vectoriel parfaitement net et des images haute résolution. Donc quand un PDF paraît doux, flou ou pixelisé, le flou vient de quelque chose de précis : une capture basse résolution, une compression poussée trop loin, ou un réglage d’export qui a aplati un contenu net en bitmap.",
    "Savoir laquelle de ces causes a touché votre fichier compte, parce que les corrections sont complètement différentes. Vous ne pouvez pas « décompresser » un fichier déjà écrasé, mais vous pouvez réexporter depuis la source, renumériser à une meilleure résolution, ou choisir un autre outil de conversion. Et pour certains fichiers, le flou n’est qu’à l’écran — l’original est toujours là en pleine qualité, simplement réduit par le lecteur.",
    "Ce guide sépare les causes et parcourt la correction pratique pour chacune, y compris quand il n’y a rien à faire à part revenir à la source.",
  ],
  steps: [
    {
      title: "Zoomez et regardez les bords",
      body: "Des bords nets sur le texte mais flous sur les images signifie que le texte est vectoriel (propre) et que seules les photos sont dégradées — généralement par la compression. Un texte flou signifie que toute la page est une image matricielle, ce qui pointe vers une numérisation ou un export impression-vers-image.",
    },
    {
      title: "Vérifiez la résolution de capture d’origine",
      body: "Les numérisations sous 150 DPI paraissent floues quoi qu’il arrive. 200 à 300 DPI est la plage sûre pour les documents que vous lirez à l’écran ; 600 est excessif pour tout sauf le travail d’archive et l’impression de photos.",
    },
    {
      title: "Vérifiez si la compression a été excessive",
      body: "Les fichiers réduits en compression « extrême » paraissent souvent corrects à 100 % de zoom et affreux à 200 %. Si vous avez l’original avant compression, vous pouvez recompresser avec un réglage plus léger — l’outil Compresser un PDF permet d’échanger de la taille contre de la netteté.",
    },
    {
      title: "Réexportez depuis la source si vous l’avez",
      body: "Les documents créés dans Word, Pages, Google Docs ou des outils de design devraient être exportés en PDF directement depuis la source, pas imprimés en PDF depuis une capture d’écran. L’export direct garde le texte vectoriel et net.",
    },
    {
      title: "Renumérisez avec des réglages plus nets",
      body: "Si une numérisation est le problème et que vous avez encore le papier, refaites-la à 300 DPI avec un bon éclairage. Les numérisations au téléphone profitent énormément d’une seule page posée à plat avec un éclairage régulier — une bonne capture bat tout post-traitement.",
    },
    {
      title: "Vérifiez que le fichier n’est pas simplement sous-échantillonné à l’écran",
      body: "Certains lecteurs sous-échantillonnent pour la performance et paraissent doux jusqu’à ce que vous zoomiez. Exportez une page en PNG avec PDF vers images à une échelle de 2× ou 3× — si le PNG est net, votre lecteur mentait.",
    },
  ],
  tips: [
    "Le texte qui se sélectionne avec votre curseur est du texte vectoriel et ne devrait pas être flou. S’il l’est, votre lecteur fait un rendu dégradé — essayez un autre lecteur avant de réexporter.",
    "Les captures d’écran de téléphone insérées dans un document sont déjà basse résolution. Elles paraîtront toujours douces dans un PDF ; il n’y a pas de correction sans recapturer plus grand.",
    "Ne compressez pas un fichier deux fois. La compression répétée aggrave le flou. Gardez l’original, compressez une fois pour le partage, archivez la source.",
    "Les PDF riches en JPEG deviennent plus flous que ceux riches en PNG à la même compression — le JPEG est intrinsèquement avec perte. Les captures d’écran en PNG restent plus nettes plus longtemps.",
    "Si vous n’avez qu’une version floue, l’OCR peut parfois récupérer du texte lisible même quand l’image paraît floue. Le texte sera propre même si l’image ne l’est pas.",
  ],
  mobileNote:
    "Les PDF capturés au téléphone deviennent flous le plus souvent à cause de mains tremblantes, d’un faible éclairage ou d’un mauvais cadrage. Le parcours de numérisation de l’application PDF Editor inclut la détection automatique des bords et la stabilisation, pour qu’une seule capture stable par page produise un document net dès la première fois.",
  faq: [
    {
      q: "Le flou est-il causé par le format PDF lui-même ?",
      a: "Non. Le PDF stocke le texte en vecteurs et les images à leur résolution source. Le flou vient de la source — un DPI bas, une compression trop forte ou un export par capture d’écran.",
    },
    {
      q: "Puis-je rendre un PDF flou plus net après coup ?",
      a: "À peine. Un traitement d’image peut simuler de la netteté sur des photos, mais vous ne pouvez pas ajouter du détail qui n’a pas été capturé. La correction honnête est de refaire l’étape source.",
    },
    {
      q: "Pourquoi mon PDF compressé est-il flou seulement sur certaines pages ?",
      a: "La compression touche le plus fort les pages riches en images. Les pages uniquement textuelles restent nettes. Si seules certaines pages sont floues, ce sont celles avec des photos, des graphiques ou des numérisations.",
    },
    {
      q: "Quelle résolution de numérisation dois-je utiliser ?",
      a: "200 à 300 DPI pour les documents que vous lirez à l’écran. 300 DPI pour tout ce que vous pourriez imprimer. 600 DPI seulement pour les photos et l’archivage.",
    },
    {
      q: "Pourquoi le PDF paraît-il correct à 100 % mais flou à 200 % ?",
      a: "Soit il a été matricé à basse résolution, soit compressé au-delà du point où zoomer révèle la perte. Il n’y a aucun moyen de récupérer le détail sans réexporter.",
    },
  ],
  related: [
    { label: "Compresser un PDF — choisir des réglages plus légers pour un résultat plus net", path: "/compress-pdf" },
    { label: "PDF vers images — exporter des pages en haute résolution", path: "/pdf-to-images" },
    { label: "Quel niveau de compression PDF choisir", path: "/guides/best-pdf-compression-settings" },
    { label: "Comment améliorer la qualité d’un PDF numérisé", path: "/guides/how-to-fix-scanned-pdf-quality" },
  ],
  parentHub: { label: "PDF vers images — exports de pages nets", path: "/pdf-to-images" },
};

export default content;
