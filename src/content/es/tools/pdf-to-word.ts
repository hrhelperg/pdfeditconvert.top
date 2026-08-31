import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-word",
  hero: {
    eyebrow: "PDF a Word",
    h1: "Convierte un PDF en Word editable — en tu navegador.",
    highlight: "en tu navegador",
    lead: "Extrae el texto de un PDF a un .docx editable que puedes retocar en Word, Google Docs o Pages. Una conversión de texto honesta — sin promesa falsa de «diseño perfecto».",
  },
  privacyNote:
    "Tu archivo se procesa en local, en tu navegador, y nunca se envía a nuestros servidores. Nada sale de tu dispositivo.",
  howTo: {
    heading: "Cómo convertir un PDF a Word",
    steps: [
      {
        title: "Elige el PDF",
        body: "Arrastra y suelta un PDF con texto, o haz clic para elegir un archivo.",
      },
      {
        title: "Convierte",
        body: "Haz clic en Convertir a Word. El texto seleccionable se extrae en local, en tu navegador.",
      },
      {
        title: "Descarga",
        body: "Se descarga automáticamente un archivo .docx — ábrelo y edítalo donde quieras.",
      },
      {
        title: "Ajusta",
        body: "Vuelve a aplicar títulos y formato en tu editor. El texto queda listo para que lo reorganices.",
      },
    ],
  },
  useCases: {
    heading: "Cuándo es la herramienta correcta",
    items: [
      {
        title: "Reutilizar cláusulas de un contrato",
        body: "Saca fragmentos de un contrato en PDF a un borrador editable en vez de volver a escribirlos.",
      },
      {
        title: "Reutilizar un informe",
        body: "Lleva el cuerpo de texto de un informe en PDF a un documento que puedas reestructurar.",
      },
      {
        title: "Citar y resumir",
        body: "Extrae fragmentos para tus apuntes, un resumen o una cita sin transcribir a mano.",
      },
      {
        title: "Recuperar un PDF sin el archivo de origen",
        body: "Rescata el texto editable cuando el .docx original hace tiempo que desapareció.",
      },
    ],
  },
  limitations: {
    heading: "Límites honestos",
    items: [
      {
        title: "El diseño no se conserva",
        body: "La herramienta solo extrae el texto. Las columnas, tablas, espaciado exacto, fuentes e imágenes no se reproducen — tú vuelves a aplicar el formato en tu editor.",
      },
      {
        title: "Los PDF escaneados no funcionan",
        body: "Un PDF hecho solo de imagen no tiene capa de texto. El OCR no está disponible en el navegador; usa la app PDF Editor para escaneos.",
      },
      {
        title: "Los documentos complejos necesitan ajustes",
        body: "Un PDF muy maquetado (varias columnas, notas al pie) se extrae como un flujo de texto legible que tendrás que ordenar.",
      },
    ],
  },
  related: [
    { label: "Word a PDF — el camino inverso", path: "/word-to-pdf" },
    { label: "PDF a imágenes", path: "/pdf-to-images" },
    { label: "Todas las herramientas PDF gratis", path: "/pdf-tools" },
    { label: "PDF o DOCX — qué usar", path: "/compare/pdf-vs-docx" },
    {
      label: "Cómo convertir un PDF a Word",
      path: "/guides/how-to-convert-pdf-to-word",
    },
  ],
  faq: [
    {
      q: "¿Mi archivo se envía a algún servidor?",
      a: "No. La extracción del texto funciona enteramente en tu navegador. Tu PDF nunca sale de tu dispositivo.",
    },
    {
      q: "¿El archivo de Word quedará igual que el PDF?",
      a: "No — y no vamos a fingir lo contrario. Es una conversión de texto práctica. El diseño, las fuentes, las columnas y las imágenes no se conservan; tú vuelves a aplicar el formato en tu editor.",
    },
    {
      q: "Ha salido «no se ha encontrado texto» — ¿por qué?",
      a: "Tu PDF probablemente es un escaneo o un archivo solo de imagen, sin capa de texto. Las herramientas del navegador no hacen OCR; la app PDF Editor sí.",
    },
    {
      q: "¿Qué formato recibo?",
      a: "Un archivo .docx estándar, que abre en Microsoft Word, Google Docs, Pages y LibreOffice.",
    },
    {
      q: "¿Se puede convertir de vuelta?",
      a: "Sí — usa la herramienta Word a PDF para volver a convertir el .docx editado en PDF.",
    },
  ],
  appCta: {
    heading: "¿Necesitas herramientas PDF con prisa?",
    sub: "PDF Editor para iPhone y Android convierte, edita y firma documentos directamente desde el móvil.",
  },
};

export default content;
