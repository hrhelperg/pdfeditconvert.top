import type { ToolDictionary } from "@/lib/i18n/toolStrings";

/**
 * Spanish tool copy. Terminology policy: docs/localization/es-terminology.md.
 *
 * Two deliberate departures from a literal translation, mirroring the
 * reasoning already applied for pt-BR and fr:
 *
 * - The first step is "Añadir", never "Subir". "Subir" reads as *upload to
 *   a server* to a Spanish speaker, which is exactly what these tools do
 *   not do — it would contradict the privacy sentence printed directly
 *   beneath the button.
 * - Output filenames are localized ("-comprimido", "-paginas") and kept
 *   ASCII — no accents — since the file lands in the reader's own
 *   downloads folder and has to stay safe across every filesystem.
 */
export const TOOLS_ES: ToolDictionary = {
  common: {
    privacyText: "Los archivos se procesan en local, en tu navegador.",
    fileMoveUp: "Subir {name} en la lista",
    fileMoveDown: "Bajar {name} en la lista",
    fileRemove: "Quitar {name}",
    downloadAgain: "Descargar de nuevo",
    startOver: "Empezar de nuevo",
    tryNext: "Prueba también esto",
    clearAll: "Borrar todo",
    appCtaHeading: "¿Necesitas herramientas PDF en el móvil?",
    dropPdfLabel: "Suelta un PDF aquí o haz clic para elegirlo",
    dropPdfHint: "Un PDF · hasta 100 MB",
    genericErrorMessage: "Algo ha fallado. Inténtalo de nuevo o usa un archivo más ligero.",
    errors: {
      not_pdf: { message: "«{name}» no es un PDF." },
      not_image: {
        message: "«{name}» no es un formato de imagen admitido. Usa JPG, PNG o WebP.",
      },
      not_word: {
        message: "«{name}» no es un archivo de Word (.docx) ni un .txt.",
      },
      legacy_doc: {
        message: "Los archivos «.doc» antiguos no se pueden leer en el navegador.",
        hint: "Guarda el documento como «.docx» e inténtalo de nuevo.",
      },
      too_large: {
        message: "«{name}» es demasiado grande ({size} MB).",
        hint: "El límite es de {limit} MB por archivo, porque todo el procesamiento ocurre en tu navegador.",
      },
      unreadable_pdf: {
        message: "No se ha podido abrir este archivo.",
        hint: "Puede estar dañado o protegido con contraseña. Desbloquéalo o repáralo e inténtalo de nuevo.",
      },
      invalid_range: {
        message: "Indica un rango de páginas válido.",
        hint: "Usa valores como 1-3 o 2,4,6.",
      },
      memory: {
        message: "Este archivo puede ser demasiado grande para procesarlo en el navegador.",
        hint: "Prueba con un PDF más ligero o divídelo en partes antes.",
      },
      too_many_files: { message: "Añade como máximo {limit} archivos a la vez." },
      too_few_files: { message: "Añade al menos dos PDF para unirlos." },
      canvas_unsupported: { message: "Este navegador no admite canvas." },
      encode_failed: { message: "No se ha podido codificar la imagen." },
      generic: {
        message: "Algo ha fallado. Inténtalo de nuevo o usa un archivo más ligero.",
      },
    },
  },
  tools: {
    "image-to-pdf": {
      title: "Imagen a PDF",
      subtitle: "Elige imágenes JPG, PNG o WebP y reúnelas en un solo PDF.",
      steps: ["Añadir", "Ajustar", "Descargar"],
      successTitle: "Tu PDF está listo",
      actionIdle: "Convertir a PDF",
      actionBusy: "Convirtiendo…",
      appCtaSub: "PDF Editor para iPhone y Android también funciona sin conexión.",
      related: [
        { id: "merge-pdf", label: "Unir dos PDF" },
        { id: "add-watermark-to-pdf", label: "Añadir marca de agua" },
      ],
      dropLabel: "Suelta tus imágenes aquí o haz clic para elegirlas",
      dropHint: "JPG, PNG o WebP · hasta 100 MB cada una",
      busyCreating: "Creando tu PDF…",
      errorNoImages: "Añade al menos una imagen.",
      pageSizeLabel: "Tamaño de página",
      pageSizeAuto: "Automático",
      orientationLabel: "Orientación",
      orientationAuto: "Automática",
      orientationPortrait: "Vertical",
      orientationLandscape: "Horizontal",
      fitLabel: "Ajuste de la imagen",
      fitFit: "Ajustar a la página",
      fitFill: "Rellenar la página",
      marginLabel: "Margen",
      marginNone: "Ninguno",
      marginSmall: "Pequeño",
      marginMedium: "Medio",
      outputFilename: "imagenes.pdf",
    },
    "merge-pdf": {
      title: "Unir PDF",
      subtitle: "Elige dos o más archivos PDF y combínalos en un solo documento.",
      steps: ["Añadir", "Ajustar", "Descargar"],
      successTitle: "Tu PDF unido está listo",
      actionIdle: "Unir los PDF",
      actionBusy: "Uniendo…",
      appCtaSub: "PDF Editor para iPhone y Android también une y divide tus archivos.",
      related: [
        { id: "split-pdf", label: "Dividir un PDF" },
        { id: "rotate-pdf", label: "Girar páginas" },
      ],
      dropLabel: "Suelta tus PDF aquí o haz clic para elegirlos",
      dropHint: "PDF · hasta 100 MB cada uno",
      busyMerging: "Combinando los PDF…",
      errorTooFew: "Añade al menos dos PDF para unirlos.",
      outputFilename: "pdf-unido.pdf",
    },
    "split-pdf": {
      title: "Dividir un PDF",
      subtitle:
        "Elige un PDF e indica el rango de páginas que quieres exportar. Ejemplos: 1-3 o 2,4,6.",
      steps: ["Añadir", "Ajustar", "Descargar"],
      successTitle: "Tu PDF con las páginas elegidas está listo",
      actionIdle: "Dividir el PDF",
      actionBusy: "Dividiendo…",
      appCtaSub:
        "PDF Editor para iPhone y Android también divide y reordena páginas.",
      related: [
        { id: "merge-pdf", label: "Unir PDF" },
        { id: "rotate-pdf", label: "Girar páginas" },
      ],
      busyExtracting: "Extrayendo las páginas…",
      rangeLabel: "Páginas que se quedan (de {total} en total)",
      rangeHint: "Ejemplos: 1-3 o 2,4,6 o 1-3,5,8-10",
      rangePlaceholder: "ej. 1-3 o 2,4,6",
      outputSuffix: "-paginas-{first}-a-{last}",
    },
    "compress-pdf": {
      title: "Comprimir un PDF",
      subtitle:
        "Reduce el tamaño de un PDF para enviarlo por correo, adjuntarlo a un trámite o guardarlo — directamente en el navegador.",
      steps: ["Añadir", "Ajustar", "Descargar"],
      successTitle: "Tu PDF comprimido está listo",
      actionIdle: "Comprimir el PDF",
      actionBusy: "Comprimiendo…",
      appCtaSub:
        "PDF Editor para iPhone y Android también comprime y comparte tus PDF.",
      related: [
        { id: "merge-pdf", label: "Unir PDF" },
        { id: "split-pdf", label: "Dividir un PDF" },
      ],
      busyReading: "Leyendo el PDF…",
      busyPage: "Comprimiendo la página {page} de {total}…",
      busyFinalizing: "Terminando…",
      levelLabel: "Nivel de compresión",
      levelLow: "Bajo",
      levelRecommended: "Recomendado",
      levelStrong: "Fuerte",
      levelNote:
        "La compresión fuerte convierte las páginas en imagen (el texto deja de ser seleccionable). Es la mejor opción para PDF escaneados o llenos de imágenes.",
      summaryAlreadyCompact:
        "Este PDF es casi todo texto y gráficos vectoriales, y ya está compacto ({size}). Comprimirlo no aportaría nada, así que hemos mantenido el archivo original tal cual.",
      summaryReduced:
        "Reducido de {from} a {to} ({percent}% menos). Las páginas se han convertido en imagen, así que el texto ya no es seleccionable.",
      outputSuffix: "-comprimido",
    },
    "rotate-pdf": {
      title: "Girar un PDF",
      subtitle:
        "Gira todas las páginas o solo las que elijas y descarga el PDF corregido.",
      steps: ["Añadir", "Ajustar", "Descargar"],
      successTitle: "Tu PDF girado está listo",
      actionIdle: "Girar el PDF",
      actionBusy: "Girando…",
      appCtaSub: "PDF Editor para iPhone y Android también gira y reordena páginas.",
      related: [
        { id: "split-pdf", label: "Dividir un PDF" },
        { id: "add-watermark-to-pdf", label: "Añadir marca de agua" },
      ],
      busyRotating: "Girando las páginas…",
      angleLabel: "Rotación",
      scopeLabel: "Aplicar a",
      scopeAll: "Todas las páginas",
      scopeSome: "Algunas páginas",
      rangeLabel: "Páginas a girar",
      rangeHint: "Ejemplos: 1-3 o 2,4,6",
      rangePlaceholder: "ej. 1,3-5",
      outputSuffix: "-girado",
    },
    "pdf-to-images": {
      title: "PDF a imágenes",
      subtitle: "Convierte las páginas del PDF en archivos de imagen para descargar.",
      steps: ["Añadir", "Ajustar", "Descargar"],
      successTitle: "Tus imágenes están listas",
      successDescription: "Cada página se ha descargado como un archivo aparte.",
      actionIdle: "Convertir en imágenes",
      actionBusy: "Convirtiendo…",
      appCtaSub:
        "PDF Editor para iPhone y Android dibuja las páginas con aceleración por hardware.",
      related: [
        { id: "image-to-pdf", label: "Imagen a PDF — el camino inverso" },
        { id: "split-pdf", label: "Dividir un PDF" },
      ],
      busyLoading: "Cargando el PDF…",
      busyPage: "Generando la página {page} de {total}…",
      formatLabel: "Formato",
      scaleLabel: "Escala",
      qualityLabel: "Calidad JPEG",
      rangeLabel: "Páginas (opcional)",
      rangeHint:
        "Déjalo en blanco para convertir todas las páginas. Ejemplos: 1-3 o 2,4,6",
      rangePlaceholder: "Todas las páginas",
      downloadedSummary: {
        one: "{count} imagen descargada (última: {filename})",
        other: "{count} imágenes descargadas (última: {filename})",
      },
    },
    "add-watermark-to-pdf": {
      title: "Añadir marca de agua a un PDF",
      subtitle: "Pon una marca de agua de texto antes de compartir el PDF.",
      steps: ["Añadir", "Ajustar", "Descargar"],
      successTitle: "Tu PDF con marca de agua está listo",
      actionIdle: "Añadir la marca de agua",
      actionBusy: "Aplicando…",
      appCtaSub:
        "PDF Editor para iPhone y Android también sella y firma tus documentos.",
      related: [
        { id: "merge-pdf", label: "Unir PDF" },
        { id: "rotate-pdf", label: "Girar páginas" },
      ],
      busyStamping: "Aplicando la marca a las páginas…",
      textLabel: "Texto de la marca de agua",
      textDefault: "CONFIDENCIAL",
      errorEmptyText: "El texto de la marca de agua no puede estar vacío.",
      positionLabel: "Posición",
      positionCenter: "Centro",
      positionTopLeft: "Arriba a la izquierda",
      positionTopRight: "Arriba a la derecha",
      positionBottomLeft: "Abajo a la izquierda",
      positionBottomRight: "Abajo a la derecha",
      fontSizeLabel: "Tamaño de fuente",
      opacityLabel: "Opacidad",
      angleLabel: "Ángulo",
      outputSuffix: "-marca-de-agua",
    },
    "pdf-to-word": {
      title: "PDF a Word",
      subtitle:
        "Recupera el texto de un PDF en un documento .docx editable — directamente en el navegador.",
      steps: ["Añadir", "Convertir", "Descargar"],
      successTitle: "Tu documento de Word está listo",
      successDescription:
        "El texto editable se ha extraído a un archivo .docx. El diseño original, las columnas y las imágenes no se conservan.",
      actionIdle: "Convertir a Word",
      actionBusy: "Convirtiendo…",
      appCtaSub:
        "PDF Editor para iPhone y Android también convierte y edita documentos.",
      related: [
        { id: "word-to-pdf", label: "Word a PDF — el camino inverso" },
        { id: "pdf-to-images", label: "PDF a imágenes" },
      ],
      dropHint: "Un PDF · hasta 100 MB · solo PDF con texto",
      explainerTitle: "Qué hace esta herramienta",
      explainerBody:
        "Extrae el texto seleccionable de tu PDF y lo guarda en un archivo de Word (.docx) editable. No reproduce el diseño, las fuentes, las columnas, las tablas ni las imágenes del original — es una conversión de texto honesta y práctica. Un PDF escaneado (solo imagen) no tiene capa de texto y no se puede convertir aquí.",
      busyReading: "Leyendo el PDF…",
      busyPage: "Extrayendo el texto de la página {page} de {total}…",
      busyBuilding: "Montando el documento de Word…",
      errorNoText:
        "No se ha encontrado texto seleccionable. Este PDF parece un escaneo: necesitaría OCR, y esta herramienta del navegador no hace OCR.",
    },
    "word-to-pdf": {
      title: "Word a PDF",
      subtitle:
        "Convierte un documento .docx o .txt en un PDF limpio — directamente en el navegador.",
      steps: ["Añadir", "Convertir", "Descargar"],
      successTitle: "Tu PDF está listo",
      successDescription:
        "El texto se ha maquetado en un PDF A4 limpio. Las fuentes, imágenes, tablas y el espaciado exacto del .docx original no se conservan.",
      actionIdle: "Convertir a PDF",
      actionBusy: "Convirtiendo…",
      appCtaSub:
        "PDF Editor para iPhone y Android también convierte y firma documentos.",
      related: [
        { id: "pdf-to-word", label: "PDF a Word — el camino inverso" },
        { id: "image-to-pdf", label: "Imagen a PDF" },
      ],
      dropLabel: "Suelta un archivo .docx o .txt aquí o haz clic para elegirlo",
      dropHint: "Word .docx o .txt sin formato · hasta 100 MB",
      explainerTitle: "Qué hace esta herramienta",
      explainerBody:
        "Lee el texto de un archivo de Word (.docx) o de texto sin formato (.txt) y lo distribuye en un PDF A4 limpio y paginado. Es una conversión de texto honesta — las fuentes, imágenes, tablas y el formato exacto del original no se conservan. El .doc binario antiguo no se admite; guárdalo antes como .docx.",
      busyReading: "Leyendo el documento…",
      busyBuilding: "Montando el PDF…",
      errorEmptyDocument: "El documento parece estar vacío — no hay texto que convertir.",
      errorUnreadable:
        "No se ha podido leer este documento. Guárdalo de nuevo como .docx e inténtalo otra vez.",
    },
    "reorder-pdf-pages": {
      title: "Reordenar las páginas del PDF",
      subtitle:
        "Previsualiza cada página, ponlas en el orden que quieras y descarga el archivo.",
      steps: ["Añadir", "Reordenar", "Descargar"],
      successTitle: "Tu PDF reordenado está listo",
      actionIdle: "Reordenar el PDF",
      actionBusy: "Montando…",
      appCtaSub: "PDF Editor para iPhone y Android también reordena y une páginas.",
      related: [
        { id: "merge-pdf", label: "Unir PDF" },
        { id: "extract-pdf-pages", label: "Extraer páginas" },
      ],
      busyBuilding: "Montando el PDF reordenado…",
      prepRendering: "Generando las vistas previas de las páginas…",
      prepRenderingProgress: "Generando las vistas previas de las páginas… ({done}/{total})",
      instructions: {
        one: "{count} página. Usa las flechas para adelantar o atrasar una página y luego genera el PDF.",
        other:
          "{count} páginas. Usa las flechas para adelantar o atrasar una página y luego genera el PDF.",
      },
      positionLabel: "Posición {position}",
      wasPageLabel: "era la página {page}",
      originalPageAlt: "Página original {page}",
      moveEarlier: "Adelantar la posición {position}",
      moveLater: "Atrasar la posición {position}",
      resetOrder: "Restaurar el orden",
      outputSuffix: "-reordenado",
    },
    "extract-pdf-pages": {
      title: "Extraer páginas del PDF",
      subtitle:
        "Elige páginas o rangos concretos y descarga un PDF nuevo solo con ellas.",
      steps: ["Añadir", "Seleccionar", "Descargar"],
      successTitle: "Tu PDF con las páginas extraídas está listo",
      actionIdle: "Extraer páginas",
      actionBusy: "Extrayendo…",
      appCtaSub:
        "PDF Editor para iPhone y Android también extrae y reordena páginas.",
      related: [
        { id: "split-pdf", label: "Dividir un PDF" },
        { id: "reorder-pdf-pages", label: "Reordenar las páginas del PDF" },
      ],
      busyExtracting: "Extrayendo las páginas…",
      pageCountNote: {
        one: "Este PDF tiene {count} página.",
        other: "Este PDF tiene {count} páginas.",
      },
      rangeLabel: "Páginas a extraer",
      rangeHint: "Ejemplos: 1-3 · 2,4,6 · 1-2,5,8-10",
      rangePlaceholder: "ej. 1-3,5",
      selectedNote: {
        one: "{count} de {total} página seleccionada.",
        other: "{count} de {total} páginas seleccionadas.",
      },
      outputSuffix: "-paginas",
    },
  },
};
