import type { ToolDictionary } from "@/lib/i18n/toolStrings";

/**
 * French tool copy. Terminology policy: docs/localization/fr-terminology.md.
 *
 * Two deliberate departures from a literal translation, mirroring the
 * reasoning already applied for pt-BR:
 *
 * - The first step is "Ajouter", not "Envoyer" or "Téléverser". Either of
 *   those reads as *upload to a server* to a French speaker, which is
 *   exactly what these tools do not do — it would contradict the privacy
 *   sentence printed directly beneath the button.
 * - Output filenames are localized ("-compresse", "-pages") and kept
 *   ASCII — no accents — since the file lands in the reader's own downloads
 *   folder and has to stay safe across every filesystem it might land on.
 */
export const TOOLS_FR: ToolDictionary = {
  common: {
    privacyText: "Les fichiers sont traités localement, dans votre navigateur.",
    fileMoveUp: "Monter {name}",
    fileMoveDown: "Descendre {name}",
    fileRemove: "Retirer {name}",
    downloadAgain: "Télécharger à nouveau",
    startOver: "Recommencer",
    tryNext: "À essayer aussi",
    clearAll: "Tout effacer",
    appCtaHeading: "Besoin d'outils PDF sur votre téléphone ?",
    dropPdfLabel: "Déposez un PDF ici ou cliquez pour le choisir",
    dropPdfHint: "Un PDF · 100 Mo maximum",
    genericErrorMessage: "Une erreur est survenue. Réessayez ou utilisez un fichier plus léger.",
    errors: {
      not_pdf: { message: "« {name} » n'est pas un PDF." },
      not_image: {
        message: "« {name} » n'est pas un format d'image pris en charge. Utilisez un JPG, un PNG ou un WebP.",
      },
      not_word: {
        message: "« {name} » n'est ni un fichier Word (.docx) ni un .txt.",
      },
      legacy_doc: {
        message: "Les anciens fichiers « .doc » ne peuvent pas être lus dans le navigateur.",
        hint: "Enregistrez le document au format « .docx » et réessayez.",
      },
      too_large: {
        message: "« {name} » est trop volumineux ({size} Mo).",
        hint: "La limite est de {limit} Mo par fichier, car tout le traitement se fait dans votre navigateur.",
      },
      unreadable_pdf: {
        message: "Impossible d'ouvrir ce fichier.",
        hint: "Il est peut-être endommagé ou protégé par un mot de passe. Débloquez ou réparez le fichier, puis réessayez.",
      },
      invalid_range: {
        message: "Indiquez une plage de pages valide.",
        hint: "Utilisez par exemple 1-3 ou 2,4,6.",
      },
      memory: {
        message: "Ce fichier est peut-être trop volumineux pour un traitement dans le navigateur.",
        hint: "Essayez un PDF plus léger, ou divisez-le en plusieurs parties avant.",
      },
      too_many_files: { message: "Ajoutez au maximum {limit} fichiers à la fois." },
      too_few_files: { message: "Ajoutez au moins deux PDF à fusionner." },
      canvas_unsupported: { message: "Ce navigateur ne prend pas en charge le canvas." },
      encode_failed: { message: "Échec de l'encodage de l'image." },
      generic: {
        message: "Une erreur est survenue. Réessayez ou utilisez un fichier plus léger.",
      },
    },
  },
  tools: {
    "image-to-pdf": {
      title: "Image en PDF",
      subtitle: "Choisissez des images JPG, PNG ou WebP et réunissez-les en un seul PDF.",
      steps: ["Ajouter", "Ajuster", "Télécharger"],
      successTitle: "Votre PDF est prêt",
      actionIdle: "Convertir en PDF",
      actionBusy: "Conversion en cours…",
      appCtaSub: "PDF Editor pour iPhone et Android fonctionne aussi hors connexion.",
      related: [
        { id: "merge-pdf", label: "Fusionner deux PDF" },
        { id: "add-watermark-to-pdf", label: "Ajouter un filigrane" },
      ],
      dropLabel: "Déposez vos images ici ou cliquez pour les choisir",
      dropHint: "JPG, PNG ou WebP · 100 Mo maximum chacune",
      busyCreating: "Création de votre PDF…",
      errorNoImages: "Ajoutez au moins une image.",
      pageSizeLabel: "Format de page",
      pageSizeAuto: "Automatique",
      orientationLabel: "Orientation",
      orientationAuto: "Automatique",
      orientationPortrait: "Portrait",
      orientationLandscape: "Paysage",
      fitLabel: "Ajustement de l'image",
      fitFit: "Tenir dans la page",
      fitFill: "Remplir la page",
      marginLabel: "Marge",
      marginNone: "Aucune",
      marginSmall: "Petite",
      marginMedium: "Moyenne",
      outputFilename: "images.pdf",
    },
    "merge-pdf": {
      title: "Fusionner des PDF",
      subtitle: "Choisissez deux fichiers PDF ou plus et regroupez-les en un seul document.",
      steps: ["Ajouter", "Ajuster", "Télécharger"],
      successTitle: "Votre PDF fusionné est prêt",
      actionIdle: "Fusionner les PDF",
      actionBusy: "Fusion en cours…",
      appCtaSub: "PDF Editor pour iPhone et Android fusionne et divise aussi vos fichiers.",
      related: [
        { id: "split-pdf", label: "Diviser un PDF" },
        { id: "rotate-pdf", label: "Faire pivoter des pages" },
      ],
      dropLabel: "Déposez vos PDF ici ou cliquez pour les choisir",
      dropHint: "PDF · 100 Mo maximum chacun",
      busyMerging: "Assemblage des PDF…",
      errorTooFew: "Ajoutez au moins deux PDF à fusionner.",
      outputFilename: "pdf-fusionne.pdf",
    },
    "split-pdf": {
      title: "Diviser un PDF",
      subtitle:
        "Choisissez un PDF et indiquez la plage de pages à exporter. Exemples : 1-3 ou 2,4,6.",
      steps: ["Ajouter", "Ajuster", "Télécharger"],
      successTitle: "Votre PDF avec les pages choisies est prêt",
      actionIdle: "Diviser le PDF",
      actionBusy: "Division en cours…",
      appCtaSub:
        "PDF Editor pour iPhone et Android divise et réorganise aussi les pages.",
      related: [
        { id: "merge-pdf", label: "Fusionner des PDF" },
        { id: "rotate-pdf", label: "Faire pivoter des pages" },
      ],
      busyExtracting: "Extraction des pages…",
      rangeLabel: "Pages à conserver (sur {total} au total)",
      rangeHint: "Exemples : 1-3 ou 2,4,6 ou 1-3,5,8-10",
      rangePlaceholder: "ex. 1-3 ou 2,4,6",
      outputSuffix: "-pages-{first}-a-{last}",
    },
    "compress-pdf": {
      title: "Compresser un PDF",
      subtitle:
        "Réduisez le poids d'un PDF pour l'envoyer par e-mail, le joindre à un dossier ou l'archiver — directement dans le navigateur.",
      steps: ["Ajouter", "Ajuster", "Télécharger"],
      successTitle: "Votre PDF compressé est prêt",
      actionIdle: "Compresser le PDF",
      actionBusy: "Compression en cours…",
      appCtaSub:
        "PDF Editor pour iPhone et Android compresse et partage aussi vos PDF.",
      related: [
        { id: "merge-pdf", label: "Fusionner des PDF" },
        { id: "split-pdf", label: "Diviser un PDF" },
      ],
      busyReading: "Lecture du PDF…",
      busyPage: "Compression de la page {page} sur {total}…",
      busyFinalizing: "Finalisation…",
      levelLabel: "Niveau de compression",
      levelLow: "Léger",
      levelRecommended: "Recommandé",
      levelStrong: "Fort",
      levelNote:
        "La compression forte transforme les pages en image (le texte n'est alors plus sélectionnable). C'est la meilleure option pour un PDF numérisé ou rempli d'images.",
      summaryAlreadyCompact:
        "Ce PDF est presque entièrement composé de texte et de graphiques vectoriels, et il est déjà compact ({size}). Le compresser n'apporterait rien, le fichier d'origine a donc été conservé tel quel.",
      summaryReduced:
        "Réduit de {from} à {to} (-{percent} %). Les pages ont été converties en image, le texte n'est donc plus sélectionnable.",
      outputSuffix: "-compresse",
    },
    "rotate-pdf": {
      title: "Faire pivoter un PDF",
      subtitle:
        "Faites pivoter toutes les pages, ou seulement celles que vous choisissez, puis téléchargez le PDF corrigé.",
      steps: ["Ajouter", "Ajuster", "Télécharger"],
      successTitle: "Votre PDF pivoté est prêt",
      actionIdle: "Faire pivoter le PDF",
      actionBusy: "Rotation en cours…",
      appCtaSub:
        "PDF Editor pour iPhone et Android fait aussi pivoter et réorganise les pages.",
      related: [
        { id: "split-pdf", label: "Diviser un PDF" },
        { id: "add-watermark-to-pdf", label: "Ajouter un filigrane" },
      ],
      busyRotating: "Rotation des pages…",
      angleLabel: "Rotation",
      scopeLabel: "Appliquer à",
      scopeAll: "Toutes les pages",
      scopeSome: "Certaines pages",
      rangeLabel: "Pages à faire pivoter",
      rangeHint: "Exemples : 1-3 ou 2,4,6",
      rangePlaceholder: "ex. 1,3-5",
      outputSuffix: "-pivote",
    },
    "pdf-to-images": {
      title: "PDF en images",
      subtitle: "Transformez les pages du PDF en fichiers image à télécharger.",
      steps: ["Ajouter", "Ajuster", "Télécharger"],
      successTitle: "Vos images sont prêtes",
      successDescription: "Chaque page a été téléchargée dans un fichier séparé.",
      actionIdle: "Convertir en images",
      actionBusy: "Conversion en cours…",
      appCtaSub:
        "PDF Editor pour iPhone et Android affiche les pages avec l'accélération matérielle.",
      related: [
        { id: "image-to-pdf", label: "Image en PDF — le chemin inverse" },
        { id: "split-pdf", label: "Diviser un PDF" },
      ],
      busyLoading: "Chargement du PDF…",
      busyPage: "Génération de la page {page} sur {total}…",
      formatLabel: "Format",
      scaleLabel: "Échelle",
      qualityLabel: "Qualité JPEG",
      rangeLabel: "Pages (facultatif)",
      rangeHint:
        "Laissez vide pour convertir toutes les pages. Exemples : 1-3 ou 2,4,6",
      rangePlaceholder: "Toutes les pages",
      downloadedSummary: {
        one: "{count} image téléchargée (dernière : {filename})",
        other: "{count} images téléchargées (dernière : {filename})",
      },
    },
    "add-watermark-to-pdf": {
      title: "Ajouter un filigrane au PDF",
      subtitle: "Posez un filigrane texte avant de partager le PDF.",
      steps: ["Ajouter", "Ajuster", "Télécharger"],
      successTitle: "Votre PDF avec filigrane est prêt",
      actionIdle: "Ajouter le filigrane",
      actionBusy: "Application en cours…",
      appCtaSub:
        "PDF Editor pour iPhone et Android tamponne et signe aussi vos documents.",
      related: [
        { id: "merge-pdf", label: "Fusionner des PDF" },
        { id: "rotate-pdf", label: "Faire pivoter des pages" },
      ],
      busyStamping: "Application du filigrane sur les pages…",
      textLabel: "Texte du filigrane",
      textDefault: "CONFIDENTIEL",
      errorEmptyText: "Le texte du filigrane ne peut pas être vide.",
      positionLabel: "Position",
      positionCenter: "Centre",
      positionTopLeft: "En haut à gauche",
      positionTopRight: "En haut à droite",
      positionBottomLeft: "En bas à gauche",
      positionBottomRight: "En bas à droite",
      fontSizeLabel: "Taille de police",
      opacityLabel: "Opacité",
      angleLabel: "Angle",
      outputSuffix: "-filigrane",
    },
    "pdf-to-word": {
      title: "PDF en Word",
      subtitle:
        "Récupérez le texte d'un PDF dans un document .docx modifiable — directement dans le navigateur.",
      steps: ["Ajouter", "Convertir", "Télécharger"],
      successTitle: "Votre document Word est prêt",
      successDescription:
        "Le texte modifiable a été extrait dans un fichier .docx. La mise en page, les colonnes et les images d'origine ne sont pas conservées.",
      actionIdle: "Convertir en Word",
      actionBusy: "Conversion en cours…",
      appCtaSub:
        "PDF Editor pour iPhone et Android convertit et modifie aussi vos documents.",
      related: [
        { id: "word-to-pdf", label: "Word en PDF — le chemin inverse" },
        { id: "pdf-to-images", label: "PDF en images" },
      ],
      dropHint: "Un PDF · 100 Mo maximum · uniquement des PDF avec du texte",
      explainerTitle: "Ce que fait cet outil",
      explainerBody:
        "Il extrait le texte sélectionnable de votre PDF et l'enregistre dans un fichier Word (.docx) modifiable. Il ne reproduit ni la mise en page, ni les polices, ni les colonnes, ni les tableaux, ni les images de l'original — c'est une conversion de texte honnête et pratique. Un PDF numérisé (simple image) n'a pas de couche de texte et ne peut pas être converti ici.",
      busyReading: "Lecture du PDF…",
      busyPage: "Extraction du texte de la page {page} sur {total}…",
      busyBuilding: "Création du document Word…",
      errorNoText:
        "Aucun texte sélectionnable n'a été trouvé. Ce PDF semble être une numérisation : il aurait besoin d'un OCR, et cet outil de navigateur n'en fait pas.",
    },
    "word-to-pdf": {
      title: "Word en PDF",
      subtitle:
        "Transformez un document .docx ou .txt en PDF net — directement dans le navigateur.",
      steps: ["Ajouter", "Convertir", "Télécharger"],
      successTitle: "Votre PDF est prêt",
      successDescription:
        "Le texte a été mis en page dans un PDF A4 net. Les polices, images, tableaux et l'espacement exact du .docx d'origine ne sont pas reproduits.",
      actionIdle: "Convertir en PDF",
      actionBusy: "Conversion en cours…",
      appCtaSub:
        "PDF Editor pour iPhone et Android convertit et signe aussi vos documents.",
      related: [
        { id: "pdf-to-word", label: "PDF en Word — le chemin inverse" },
        { id: "image-to-pdf", label: "Image en PDF" },
      ],
      dropLabel: "Déposez un fichier .docx ou .txt ici ou cliquez pour le choisir",
      dropHint: "Word .docx ou .txt brut · 100 Mo maximum",
      explainerTitle: "Ce que fait cet outil",
      explainerBody:
        "Il lit le texte d'un fichier Word (.docx) ou d'un texte brut (.txt) et le met en page dans un PDF A4 net et paginé. C'est une conversion de texte honnête — les polices, les images, les tableaux et la mise en forme exacte de l'original ne sont pas reproduits. L'ancien format binaire .doc n'est pas accepté ; enregistrez d'abord le fichier en .docx.",
      busyReading: "Lecture du document…",
      busyBuilding: "Création du PDF…",
      errorEmptyDocument: "Le document semble vide — il n'y a pas de texte à convertir.",
      errorUnreadable:
        "Impossible de lire ce document. Enregistrez-le à nouveau en .docx et réessayez.",
    },
    "reorder-pdf-pages": {
      title: "Réorganiser les pages du PDF",
      subtitle:
        "Prévisualisez chaque page, remettez-les dans l'ordre voulu, puis téléchargez le fichier.",
      steps: ["Ajouter", "Réorganiser", "Télécharger"],
      successTitle: "Votre PDF réorganisé est prêt",
      actionIdle: "Réorganiser le PDF",
      actionBusy: "Assemblage en cours…",
      appCtaSub: "PDF Editor pour iPhone et Android réorganise et fusionne aussi les pages.",
      related: [
        { id: "merge-pdf", label: "Fusionner des PDF" },
        { id: "extract-pdf-pages", label: "Extraire des pages" },
      ],
      busyBuilding: "Assemblage du PDF réorganisé…",
      prepRendering: "Génération des aperçus de pages…",
      prepRenderingProgress: "Génération des aperçus de pages… ({done}/{total})",
      instructions: {
        one: "{count} page. Utilisez les flèches pour avancer ou reculer une page, puis générez le PDF.",
        other:
          "{count} pages. Utilisez les flèches pour avancer ou reculer une page, puis générez le PDF.",
      },
      positionLabel: "Position {position}",
      wasPageLabel: "était la page {page}",
      originalPageAlt: "Page d'origine {page}",
      moveEarlier: "Avancer la position {position}",
      moveLater: "Reculer la position {position}",
      resetOrder: "Rétablir l'ordre",
      outputSuffix: "-reorganise",
    },
    "extract-pdf-pages": {
      title: "Extraire des pages du PDF",
      subtitle:
        "Choisissez des pages ou des plages précises et téléchargez un nouveau PDF ne contenant qu'elles.",
      steps: ["Ajouter", "Sélectionner", "Télécharger"],
      successTitle: "Votre PDF avec les pages extraites est prêt",
      actionIdle: "Extraire les pages",
      actionBusy: "Extraction en cours…",
      appCtaSub:
        "PDF Editor pour iPhone et Android extrait et réorganise aussi les pages.",
      related: [
        { id: "split-pdf", label: "Diviser un PDF" },
        { id: "reorder-pdf-pages", label: "Réorganiser les pages du PDF" },
      ],
      busyExtracting: "Extraction des pages…",
      pageCountNote: {
        one: "Ce PDF compte {count} page.",
        other: "Ce PDF compte {count} pages.",
      },
      rangeLabel: "Pages à extraire",
      rangeHint: "Exemples : 1-3 · 2,4,6 · 1-2,5,8-10",
      rangePlaceholder: "ex. 1-3,5",
      selectedNote: {
        one: "{count} page sélectionnée sur {total}.",
        other: "{count} pages sélectionnées sur {total}.",
      },
      outputSuffix: "-pages",
    },
  },
};
