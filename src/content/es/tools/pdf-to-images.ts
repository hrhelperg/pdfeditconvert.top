import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-images",
  hero: {
    eyebrow: "PDF a imágenes",
    h1: "Exporta cada página del PDF en PNG o JPG.",
    highlight: "PNG o JPG",
    lead: "Convierte las páginas de un PDF en archivos de imagen PNG o JPEG para descargar — generados en local, en tu navegador.",
  },
  privacyNote:
    "Tu archivo se genera en local, en tu navegador, y nunca se envía a nuestros servidores. Nada sale de tu dispositivo.",
  howTo: {
    heading: "Cómo convertir un PDF en imágenes",
    steps: [
      {
        title: "Elige el PDF",
        body: "Arrastra y suelta un único PDF o haz clic para elegir el archivo.",
      },
      {
        title: "Elige el formato",
        body: "PNG para texto nítido y transparencia; JPG para archivos más ligeros.",
      },
      {
        title: "Elige la escala",
        body: "Una escala mayor da una imagen más nítida y un archivo más grande. 2× suele ser el punto justo.",
      },
      { title: "Descarga", body: "Cada página se descarga como un archivo de imagen aparte." },
    ],
  },
  useCases: {
    heading: "Cuándo es útil esta herramienta",
    items: [
      {
        title: "Pegar una página en un chat",
        body: "La vista previa de la imagen aparece directamente en la conversación, algo que el PDF no hace.",
      },
      {
        title: "Reutilizar un gráfico en una presentación",
        body: "Saca una página del PDF y pégala en una diapositiva.",
      },
      {
        title: "Crear miniaturas",
        body: "Monta una hoja de contacto con las páginas del PDF para revisarlas rápido.",
      },
      {
        title: "Vistas previas en la web",
        body: "Usa las imágenes generadas como vistas previas ligeras en un sitio web.",
      },
    ],
  },
  limitations: {
    heading: "Límites",
    items: [
      {
        title: "Memoria del navegador",
        body: "Un PDF muy grande con escala alta puede agotar la memoria. Prueba con la escala 1,5× o divide el PDF antes.",
      },
      {
        title: "PDF protegidos con contraseña",
        body: "Los archivos cifrados no se pueden generar. Desbloquéalos antes o usa la app PDF Editor.",
      },
      {
        title: "El contenido vectorial se convierte en imagen",
        body: "Las imágenes no conservan texto buscable. Guarda el PDF original si lo necesitas.",
      },
    ],
  },
  related: [
    { label: "Imagen a PDF — el camino inverso", path: "/image-to-pdf" },
    { label: "Dividir PDF", path: "/split-pdf" },
    { label: "Todas las herramientas PDF gratis", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "¿Mi archivo se envía a algún servidor?",
      a: "No. El proceso funciona enteramente en tu navegador; nada sale de tu dispositivo.",
    },
    {
      q: "¿PNG o JPG — cuál elegir?",
      a: "El PNG es más nítido para el texto y admite transparencia. El JPG es más ligero y va bien para fotos y páginas enteras capturadas.",
    },
    {
      q: "¿Qué significa la escala?",
      a: "Cuántos píxeles de imagen por cada punto del PDF. 2× da un resultado nítido en pantallas de alta resolución. 3× genera archivos grandes pero muy nítidos.",
    },
    {
      q: "¿Se puede descargar todo en un ZIP?",
      a: "Todavía no — las páginas se descargan una a una. Para exportar en lote, la app PDF Editor es más rápida.",
    },
  ],
  appCta: {
    heading: "¿Necesitas herramientas PDF sin conexión?",
    sub: "PDF Editor para iPhone y Android dibuja las páginas al instante, con aceleración por hardware.",
  },
};

export default content;
