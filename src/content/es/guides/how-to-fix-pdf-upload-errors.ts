import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-upload-errors",
  h1: "Cómo solucionar errores al subir un PDF (demasiado pesado, rechazado, atascado)",
  description:
    "Los portales rechazan un PDF por un puñado de razones: tamaño, número de páginas, un formato demasiado estricto o una subida inestable. Cómo identificar la tuya y conseguir que el archivo se acepte a la próxima.",
  updated: "2026-05-29",
  intro: [
    "Los portales de subida son más estrictos que el correo. Muchos rechazan cualquier cosa por encima de 5 MB, algunos por encima de 2 MB, algunos no admiten archivos de varias páginas, y otros fallan en silencio con cualquier cosa que no sea un PDF/A perfectamente conforme. Los mensajes de error que muestran rara vez son concretos — «archivo demasiado grande», «formato no válido», «error al subir» — y la mayoría significan algo distinto de lo que dicen.",
    "Las causas reales suelen ser una de cuatro: el archivo supera el límite del portal, el formato interno del archivo no es estándar, tu conexión falló a mitad de la subida, o el portal espera un tipo concreto de PDF (PDF/A, una sola página, versión antigua). Cada una tiene una solución distinta, y la correcta depende de cuál sea.",
    "Esta guía repasa los diagnósticos por síntoma y muestra cómo arreglar cada uno en tu navegador. La mayoría de las subidas fallidas triunfan al segundo intento en cuanto se aborda la causa real.",
  ],
  steps: [
    {
      title: "Lee el mensaje de error de forma literal",
      body: "«El archivo supera el límite de tamaño» significa compresión. «Archivo no válido» significa formato. «Error al subir» normalmente significa red. Trata las palabras como la primera pista, incluso cuando son escuetas.",
    },
    {
      title: "Comprime con fuerza si el problema es el tamaño",
      body: "Comprimir PDF en tu navegador reduce los archivos de forma notable, sobre todo los llenos de escaneos. Prueba primero la compresión más fuerte; si la calidad baja demasiado, retrocede un nivel. Algunos portales limitan a 2 MB — la mayoría de los compresores dejan un documento típico muy por debajo.",
    },
    {
      title: "Divide un PDF grande de varias páginas si hace falta",
      body: "Si el portal acepta varios archivos pequeños pero rechaza uno grande, Dividir PDF o Extraer páginas PDF te deja partir el archivo en secciones. Numera las partes con claridad en el nombre para que el destinatario pueda volver a juntarlas.",
    },
    {
      title: "Vuelve a exportar a un PDF estándar si el formato se rechaza",
      body: "Algunos portales solo aceptan archivos guardados como PDF 1.4 o PDF/A. La solución más sencilla es abrir el archivo en cualquier lector e imprimir a PDF — la copia resultante es sencilla, estándar y casi siempre se acepta.",
    },
    {
      title: "Comprueba el número de páginas y las dimensiones",
      body: "Los portales de administraciones públicas y educativos a veces limitan el número de páginas o el tamaño de papel. Si el portal indica requisitos, ajústate a ellos: solo Carta o A4, sin páginas de tamaño excesivo, sin fondos transparentes. Extraer páginas PDF elimina cualquier cosa que se pase.",
    },
    {
      title: "Reinténtalo con una conexión estable",
      body: "Un corte de Wi-Fi a mitad de la subida se ve igual que un rechazo. Cambia de red o reinténtalo con otra conexión antes de dar por hecho que el problema es el propio archivo.",
    },
  ],
  tips: [
    "Comprime antes de dividir. Un único archivo comprimido a menudo entra en el límite; si sigue sin entrar, divide la copia comprimida.",
    "Evita el cifrado o la protección con contraseña al subir a portales — muchos bloquean los archivos protegidos aunque acepten el contenido subyacente.",
    "Vigila los límites de caracteres ocultos en los nombres de archivo. Algunos portales rechazan nombres con espacios, acentos o puntuación.",
    "Si el portal acepta JPG pero rechaza PDF, puedes exportar las páginas del PDF a imágenes con PDF a imágenes y subir esas — útil para requisitos de solo imagen, como el envío de un documento de identidad.",
    "Confirma siempre que una subida completada de verdad terminó (algunos portales fallan en silencio). Actualiza la página de confirmación y busca una confirmación real, no solo la ausencia de un error.",
  ],
  mobileNote:
    "Las subidas desde el móvil fallan más a menudo que desde un portátil simplemente porque la conexión se corta más. La app PDF Editor comprime y divide archivos sin conexión, así que el propio paso de subida es corto — un archivo más pequeño se sube más rápido y aguanta mejor una red inestable.",
  faq: [
    {
      q: "¿A qué tamaño limitan la mayoría de los portales?",
      a: "Los límites habituales son 2 MB, 5 MB y 10 MB. Los portales de administración y académicos suelen ser los más estrictos; los comerciales son más flexibles. Consulta la sección de ayuda del portal si no lo indica de entrada.",
    },
    {
      q: "¿La compresión siempre resuelve un rechazo por tamaño?",
      a: "Normalmente sí, sobre todo en archivos llenos de escaneos. Un escaneo de 30 MB suele comprimirse limpiamente por debajo de 5 MB. Los PDF solo de texto que ya son pequeños no se reducirán mucho más.",
    },
    {
      q: "¿Por qué el portal rechaza mi archivo como «no válido»?",
      a: "O el archivo no es realmente un PDF (algunas descargas están mal nombradas), o usa funciones de PDF que el analizador del portal no admite. Volver a exportar con imprimir a PDF produce una copia básica que casi siempre se acepta.",
    },
    {
      q: "¿Puedo saltarme el límite de tamaño comprimiéndolo en un ZIP?",
      a: "Casi nunca. Los portales que limitan los PDF suelen limitar también el tamaño total de la subida y rechazan los ZIP directamente. Comprimir el propio PDF es el camino correcto.",
    },
    {
      q: "¿Y si el portal pide PDF/A específicamente?",
      a: "PDF/A es un formato de archivo histórico. Microsoft Word y Google Docs pueden exportar directamente a él. Si no, abre el archivo, usa imprimir a PDF y comprueba las opciones de exportación para un ajuste compatible con A.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduce para entrar en los límites del portal", path: "/compress-pdf" },
    { label: "Dividir PDF — parte archivos grandes en partes aceptadas", path: "/split-pdf" },
    { label: "Cómo reducir un PDF antes de subirlo", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
    { label: "Cómo reducir el tamaño de un PDF para el correo", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "Comprimir PDF — reduce el tamaño en tu navegador", path: "/compress-pdf" },
};

export default content;
