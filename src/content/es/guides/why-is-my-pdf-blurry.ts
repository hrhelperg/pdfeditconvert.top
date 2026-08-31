import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blurry",
  h1: "¿Por qué mi PDF está borroso? Resolución, compresión y escaneo",
  description:
    "Un PDF borroso viene de un escaneo de baja resolución, una compresión demasiado agresiva o una mala exportación — nunca del formato en sí. Cómo saber cuál es tu caso y recuperar la nitidez.",
  updated: "2026-05-29",
  intro: [
    "El PDF en sí mismo no difumina nada. El formato admite sin problema texto vectorial nítido e imágenes de alta resolución. Así que cuando un PDF se ve blando, borroso o pixelado, la borrosidad viene de algo concreto: una captura de baja resolución, una pasada de compresión que se fue de la mano, o un ajuste de exportación que aplanó contenido nítido en mapas de bits.",
    "Saber cuál de esas cosas causó tu archivo importa, porque las soluciones son completamente distintas. No puedes «descomprimir» un archivo que ya se estrujó, pero sí puedes volver a exportar desde el origen, reescanear a mejor resolución, o elegir otra herramienta de conversión. Y para algunos archivos, la borrosidad está solo en pantalla — el original sigue ahí con toda su calidad, solo que el lector lo muestra reducido.",
    "Esta guía separa las causas y recorre la solución práctica para cada una, incluyendo cuándo no hay nada que hacer salvo volver al origen.",
  ],
  steps: [
    {
      title: "Haz zoom y mira los bordes",
      body: "Bordes nítidos en el texto pero borrosos en las imágenes significa que el texto es vectorial (limpio) y solo las fotos están degradadas — normalmente por la compresión. Texto borroso significa que toda la página es una imagen rasterizada, lo que apunta a un escaneo o a una exportación de imprimir a imagen.",
    },
    {
      title: "Comprueba la resolución de captura original",
      body: "Los escaneos por debajo de 150 DPI se ven borrosos hagas lo que hagas. 200–300 DPI es el rango seguro para documentos que leerás en pantalla; 600 es excesivo salvo para archivo histórico e impresión de fotos.",
    },
    {
      title: "Investiga si la compresión se pasó de rosca",
      body: "Los archivos reducidos a compresión «extrema» a menudo se ven bien al 100% de zoom y fatal al 200%. Si tienes el original antes de comprimir, puedes volver a comprimir con un ajuste más suave — la herramienta Comprimir PDF te deja intercambiar tamaño por nitidez.",
    },
    {
      title: "Vuelve a exportar desde el origen si lo tienes",
      body: "Los documentos creados en Word, Pages, Google Docs o herramientas de diseño deberían exportarse a PDF directamente desde el origen, no imprimirse a PDF a partir de una captura de pantalla. La exportación directa mantiene el texto vectorial y nítido.",
    },
    {
      title: "Vuelve a escanear con ajustes más nítidos",
      body: "Si el problema es un escaneo y todavía tienes el papel, repítelo a 300 DPI con buena iluminación. Los escaneos con el móvil se benefician enormemente de una sola página colocada plana con luz uniforme — una buena captura supera al postprocesado.",
    },
    {
      title: "Confirma que el archivo no se está reduciendo solo en pantalla",
      body: "Algunos lectores reducen la resolución por rendimiento y se ven blandos hasta que haces zoom. Exporta una página a PNG con PDF a imágenes a escala 2× o 3× — si el PNG es nítido, tu lector te estaba engañando.",
    },
  ],
  tips: [
    "El texto que se selecciona con el cursor es texto vectorial y no debería verse borroso. Si lo está, tu lector está reduciendo la resolución — prueba con otro lector antes de reexportar.",
    "Las capturas de pantalla del móvil insertadas en un documento ya son de baja resolución. Siempre se verán blandas en un PDF; no hay solución salvo volver a capturarlas más grandes.",
    "No comprimas un archivo dos veces. La compresión repetida acumula borrosidad. Conserva el original, comprime una vez para compartir y archiva el origen.",
    "Los PDF con mucho JPEG se ven más borrosos que los que tienen mucho PNG con la misma compresión — el JPEG tiene pérdida por diseño. Las capturas en PNG se mantienen nítidas más tiempo.",
    "Si solo tienes una versión borrosa, el OCR a veces puede recuperar texto legible aunque la imagen se vea difusa. El texto quedará limpio incluso si la imagen no lo está.",
  ],
  mobileNote:
    "Los PDF capturados con el móvil se vuelven borrosos casi siempre por pulso inestable, poca luz o mal encuadre. El flujo de escaneo de la app PDF Editor incluye detección automática de bordes y estabilización, así que una sola captura firme por página produce un documento nítido a la primera.",
  faq: [
    {
      q: "¿La borrosidad la causa el propio formato PDF?",
      a: "No. El PDF guarda el texto como vectores y las imágenes a su resolución de origen. La borrosidad viene del origen — DPI bajo, compresión agresiva o una exportación por captura de pantalla.",
    },
    {
      q: "¿Puedo enfocar un PDF borroso a posteriori?",
      a: "Solo un poco. Algún procesamiento de imagen puede simular nitidez en fotos, pero no puedes añadir detalle que nunca se capturó. La solución honesta es rehacer el paso de origen.",
    },
    {
      q: "¿Por qué mi PDF comprimido está borroso solo en algunas páginas?",
      a: "La compresión afecta más a las páginas con mucha imagen. Las páginas de solo texto se mantienen nítidas. Si solo algunas páginas están borrosas, son las que tienen fotos, gráficos o escaneos.",
    },
    {
      q: "¿Qué resolución de escaneo debería usar?",
      a: "200–300 DPI para documentos que leerás en pantalla. 300 DPI para cualquier cosa que puedas imprimir. 600 DPI solo para fotos y archivo histórico.",
    },
    {
      q: "¿Por qué el PDF se ve bien al 100% pero borroso al 200%?",
      a: "O se rasterizó a baja resolución, o se comprimió más allá del punto en que el zoom revela la pérdida. No hay forma de recuperar el detalle sin volver a exportar.",
    },
  ],
  related: [
    { label: "Comprimir PDF — elige ajustes más suaves para un resultado más nítido", path: "/compress-pdf" },
    { label: "PDF a imágenes — exporta páginas en alta resolución", path: "/pdf-to-images" },
    { label: "Mejores ajustes de compresión PDF", path: "/guides/best-pdf-compression-settings" },
    { label: "Cómo mejorar la calidad de un PDF escaneado", path: "/guides/how-to-fix-scanned-pdf-quality" },
  ],
  parentHub: { label: "PDF a imágenes — exportaciones de página nítidas", path: "/pdf-to-images" },
};

export default content;
