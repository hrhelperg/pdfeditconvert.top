import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-png",
  h1: "PDF o PNG — documento de varias páginas o imagen única y nítida",
  description:
    "El PDF gana para un documento de varias páginas; el PNG gana para una imagen única, nítida, con fondo transparente. Las reglas claras y la conversión en ambos sentidos.",
  updated: "2026-05-29",
  intro: [
    "El PDF y el PNG son excelentes cada uno en lo suyo, y sirven para cosas distintas. El PDF contiene documentos de varias páginas con texto seleccionable, fuentes incrustadas, firmas y estructura. El PNG contiene imágenes de mapa de bits únicas con compresión sin pérdida y fondo transparente. Cada uno es la herramienta equivocada para el trabajo del otro, y la confusión suele venir de usar PNG para enviar algo que en realidad es un documento.",
    "El PNG brilla cuando necesitas una imagen única, nítida y exacta — un logotipo con fondo transparente, una captura de pantalla, un diagrama, una gráfica. Los píxeles son el propio dato; no hay texto subyacente. El PDF brilla cuando necesitas páginas, fuentes, texto seleccionable, o cualquier tipo de estructura de varios pasos.",
    "Esta guía da las reglas claras de cuándo usar cada uno, la conversión entre los dos en ambos sentidos, y los casos en los que la elección es de verdad una cuestión de criterio.",
  ],
  steps: [
    {
      title: "Usa PDF para cualquier cosa de varias páginas",
      body: "Cualquier documento con dos o más páginas debería ser un PDF, no una secuencia de PNG. El PDF mantiene las páginas unidas, conserva el orden y se presenta como un único archivo que el destinatario puede leer de corrido.",
    },
    {
      title: "Usa PNG para imágenes únicas y nítidas con transparencia",
      body: "Logotipos sobre fondo transparente, diagramas, capturas de pantalla — el PNG es el formato correcto. La compresión sin pérdida mantiene el texto y las líneas nítidas; el canal alfa admite transparencia.",
    },
    {
      title: "No uses PNG para contenido fotográfico",
      body: "Las fotos pesan mucho en PNG y no se benefician de la compresión sin pérdida. El JPG gestiona las fotos con una calidad visual similar y una fracción del tamaño.",
    },
    {
      title: "Convierte de PDF a PNG para extraer páginas como imágenes",
      body: "PDF a imágenes exporta cada página del PDF como un PNG de alta resolución. Útil cuando necesitas una página como imagen única para una presentación, una web o una herramienta de diseño.",
    },
    {
      title: "Convierte de PNG a PDF para empaquetar capturas de pantalla en un documento",
      body: "PNG a PDF o Imagen a PDF combina capturas de pantalla PNG en un único PDF. Útil cuando has hecho muchas capturas y quieres compartirlas como un solo archivo ordenado.",
    },
    {
      title: "Para páginas únicas con mucho texto, el PDF sigue siendo mejor",
      body: "Incluso una sola página con contenido de texto se beneficia más del PDF que del PNG — el texto se mantiene seleccionable, el archivo pesa menos, y el destinatario puede copiar directamente desde el archivo.",
    },
  ],
  tips: [
    "Un PNG de una captura de pantalla está bien; un PNG de un documento de varias páginas es un error. Lo de varias páginas pertenece al PDF.",
    "Si tu PNG contiene fotos, pásate a JPG — misma calidad visual, archivo mucho más pequeño.",
    "La conversión de PNG a PDF conserva la imagen a resolución completa; sin pérdida de calidad.",
    "La conversión de PDF a PNG te permite ajustar la resolución. Más alta es más nítido pero más pesado; una escala de 2× suele ser el equilibrio correcto.",
    "No «exportes a PNG» un documento que ya tienes en PDF a menos que necesites específicamente el formato de imagen. El PDF es más útil.",
  ],
  mobileNote:
    "El móvil suele capturar contenido como capturas de pantalla en PNG que en realidad deberían ser un PDF. La app PDF Editor combina las capturas PNG en un único PDF en el propio dispositivo, útil para compartir varias capturas como un solo archivo ordenado en lugar de un conjunto disperso.",
  faq: [
    {
      q: "¿Cuándo debería usar PNG en vez de PDF?",
      a: "Cuando necesitas una imagen única y nítida, sobre todo con transparencia. Logotipos, diagramas, capturas de pantalla, gráficas que van dentro de otros documentos.",
    },
    {
      q: "¿Pesa menos el PDF o el PNG para una sola página?",
      a: "Depende del contenido. Una página con mucho texto: gana el PDF. Una página con mucha imagen: parecido, o el PNG algo más pesado por ser sin pérdida.",
    },
    {
      q: "¿Puedo editar un PNG dentro de un PDF?",
      a: "Sí — el PDF contiene el PNG y puedes manipular la imagen con herramientas de edición de PDF. Útil para añadir logotipos o capturas de pantalla dentro de un documento.",
    },
    {
      q: "¿Por qué el PNG no admite varias páginas?",
      a: "El PNG es, en el fondo, un formato de imagen. Los formatos de documento de varias páginas (PDF, TIFF) están pensados para eso. El PNG no.",
    },
    {
      q: "¿Y si tengo muchos PNG que compartir?",
      a: "Imagen a PDF los combina en un solo PDF ordenado. Los destinatarios reciben un único archivo en lugar de una carpeta de adjuntos sueltos.",
    },
  ],
  related: [
    { label: "PDF a imágenes — exporta páginas como PNG o JPG", path: "/pdf-to-images" },
    { label: "Imagen a PDF — combina PNG en un solo PDF", path: "/image-to-pdf" },
    { label: "Cómo convertir PNG a PDF", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "Cómo convertir PDF a PNG", path: "/guides/how-to-convert-pdf-to-png" },
  ],
  parentHub: { label: "PDF a imágenes — exporta páginas como PNG o JPG", path: "/pdf-to-images" },
};

export default content;
