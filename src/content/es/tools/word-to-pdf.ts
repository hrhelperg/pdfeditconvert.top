import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "word-to-pdf",
  hero: {
    eyebrow: "Word a PDF",
    h1: "Convierte Word en PDF — en tu navegador.",
    highlight: "en tu navegador",
    lead: "Convierte un archivo .docx o .txt en un PDF limpio y listo para enviar. Funciona enteramente en tu dispositivo — el documento nunca se envía a ningún sitio.",
  },
  privacyNote:
    "Tu archivo se procesa en local, en tu navegador, y nunca se envía a nuestros servidores. Nada sale de tu dispositivo.",
  howTo: {
    heading: "Cómo convertir Word en PDF",
    steps: [
      {
        title: "Elige el documento",
        body: "Arrastra y suelta un archivo .docx o .txt, o haz clic para elegir uno.",
      },
      {
        title: "Convierte",
        body: "Haz clic en Convertir a PDF. El texto se lee y se maqueta en un PDF en local, en tu navegador.",
      },
      { title: "Descarga", body: "Se descarga automáticamente un PDF A4 limpio." },
      {
        title: "Comparte",
        body: "Envía un formato que se ve igual en todas partes y que nadie puede cambiar por accidente.",
      },
    ],
  },
  useCases: {
    heading: "Cuándo es la herramienta correcta",
    items: [
      {
        title: "Enviar una copia no editable",
        body: "Comparte un borrador en PDF para que nadie cambie el contenido sin querer.",
      },
      {
        title: "Enviar una solicitud",
        body: "Muchos portales exigen PDF, no .docx — convierte antes de enviarlo.",
      },
      {
        title: "Archivar apuntes simples",
        body: "Convierte registros o notas en .txt en un PDF paginado y ordenado.",
      },
      {
        title: "Entrega lista para imprimir",
        body: "Genera un PDF A4 uniforme a partir de un documento simple.",
      },
    ],
  },
  limitations: {
    heading: "Límites honestos",
    items: [
      {
        title: "Conversión centrada en el texto",
        body: "Extraemos y volvemos a maquetar el texto del documento en un PDF limpio. Las fuentes originales, imágenes, tablas y el espaciado exacto del .docx no se reproducen.",
      },
      {
        title: "Sin .doc antiguo",
        body: "Los archivos .doc binarios antiguos no se pueden leer en el navegador. Guárdalos como .docx antes.",
      },
      {
        title: "Caracteres poco comunes simplificados",
        body: "La fuente integrada en el PDF cubre el alfabeto latino; algunos caracteres especiales se simplifican para que la conversión nunca falle.",
      },
    ],
  },
  related: [
    { label: "PDF a Word — el camino inverso", path: "/pdf-to-word" },
    { label: "Imagen a PDF", path: "/image-to-pdf" },
    { label: "Unir PDF", path: "/merge-pdf" },
    { label: "Todas las herramientas PDF gratis", path: "/pdf-tools" },
    {
      label: "Cómo convertir Word en PDF",
      path: "/guides/how-to-convert-word-to-pdf",
    },
  ],
  faq: [
    {
      q: "¿Mi archivo se envía a algún servidor?",
      a: "No. La conversión funciona enteramente en tu navegador. Tu documento nunca sale de tu dispositivo.",
    },
    {
      q: "¿El PDF quedará igual que mi archivo de Word?",
      a: "No — y no vamos a decir que sí. Es una conversión limpia, centrada en el texto: las fuentes, imágenes, tablas y el espaciado exacto del .docx no se reproducen.",
    },
    {
      q: "¿Qué archivos se admiten?",
      a: "El .docx moderno de Word y el .txt sin formato. El .doc binario antiguo no se admite — guárdalo antes como .docx.",
    },
    {
      q: "¿Hay un límite de tamaño?",
      a: "Hasta 100 MB por archivo, porque todo el procesamiento ocurre en la memoria de tu navegador.",
    },
    {
      q: "¿Se puede convertir el PDF de vuelta a Word?",
      a: "Sí — usa PDF a Word para extraer el texto de nuevo a un .docx editable.",
    },
  ],
  appCta: {
    heading: "¿Necesitas herramientas PDF con prisa?",
    sub: "PDF Editor para iPhone y Android convierte, firma y comparte documentos directamente desde el móvil.",
  },
};

export default content;
