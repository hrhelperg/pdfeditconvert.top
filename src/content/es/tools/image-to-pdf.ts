import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "image-to-pdf",
  hero: {
    eyebrow: "Imagen a PDF",
    h1: "Convierte imágenes JPG, PNG y WebP en un solo PDF.",
    highlight: "un solo PDF",
    lead: "Elige imágenes JPG, PNG o WebP y reúnelas en un solo PDF. Reordena las páginas y descarga — las imágenes se quedan en tu dispositivo.",
  },
  privacyNote:
    "Tus archivos se procesan en local, en tu navegador, y nunca se envían a nuestros servidores. Nada sale de tu dispositivo.",
  howTo: {
    heading: "Cómo usar la herramienta Imagen a PDF",
    steps: [
      {
        title: "Elige las imágenes",
        body: "Arrastra y suelta archivos JPG, PNG o WebP, o haz clic para seleccionarlos en tu dispositivo.",
      },
      {
        title: "Reordena si hace falta",
        body: "Usa las flechas de subir y bajar de cada fila para colocar las páginas en el orden correcto.",
      },
      {
        title: "Genera el PDF",
        body: "Haz clic en Convertir a PDF. Tus imágenes se convierten en las páginas de un solo documento, con el tamaño de cada imagen.",
      },
      {
        title: "Descarga",
        body: "El PDF generado se descarga automáticamente. Puedes renombrarlo después de guardarlo.",
      },
    ],
  },
  useCases: {
    heading: "Cuándo es útil esta herramienta",
    items: [
      {
        title: "Fotos de recibos y gastos",
        body: "Reúne todo un mes de recibos en un PDF antes de mandarlo a contabilidad.",
      },
      {
        title: "Documentos escaneados",
        body: "Combina el anverso y el reverso de un documento en un solo archivo que el portal admita.",
      },
      {
        title: "Capturas de pantalla en un informe",
        body: "Reúne una serie de capturas de pantalla en un documento de revisión organizado.",
      },
      {
        title: "Fotos de una pizarra",
        body: "Convierte una serie de fotos de una reunión en un documento que el equipo pueda hojear.",
      },
    ],
  },
  limitations: {
    heading: "Límites",
    items: [
      {
        title: "Solo JPG, PNG y WebP",
        body: "HEIC, AVIF, GIF y TIFF no se admiten en el navegador. Conviértelos antes o usa la app para el móvil.",
      },
      {
        title: "Memoria del navegador",
        body: "Un lote muy grande (cientos de fotos en alta resolución) puede ir lento en dispositivos más antiguos.",
      },
      {
        title: "Sin OCR",
        body: "El texto dentro de las imágenes no se extrae. Para un PDF con texto buscable, escanea con la app PDF Editor.",
      },
    ],
  },
  related: [
    { label: "Unir archivos PDF", path: "/merge-pdf" },
    { label: "PDF a imágenes", path: "/pdf-to-images" },
    { label: "Todas las herramientas PDF gratis", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "¿Mis imágenes se envían a algún sitio?",
      a: "No. Todo funciona en tu navegador. Tus imágenes nunca salen de tu dispositivo.",
    },
    {
      q: "¿Hay un límite de tamaño de archivo?",
      a: "Sí — cada archivo está limitado a 100 MB para que el navegador siga respondiendo bien. La app PDF Editor admite lotes más grandes, con aceleración por hardware.",
    },
    {
      q: "¿Se puede cambiar el tamaño de la página?",
      a: "Cada página toma las dimensiones en píxeles de tu imagen, así que las proporciones son correctas. Para un resultado uniforme en A4, usa la app PDF Editor.",
    },
    {
      q: "¿Funciona en iPhone y en Android?",
      a: "Sí, en cualquier navegador móvil actual. Para uso frecuente, la app PDF Editor es más rápida y admite fotos HEIC directamente desde tu galería.",
    },
  ],
  appCta: {
    heading: "¿Lo necesitas cada semana desde el móvil?",
    sub: "PDF Editor para iPhone y Android escanea, organiza y firma tus PDF sin conexión.",
  },
};

export default content;
