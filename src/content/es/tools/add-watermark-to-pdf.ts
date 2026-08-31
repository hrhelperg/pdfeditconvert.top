import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "add-watermark-to-pdf",
  hero: {
    eyebrow: "Marca de agua",
    h1: "Pon una marca de agua de texto en todas las páginas del PDF.",
    highlight: "todas las páginas",
    lead: "Añade una marca de agua de texto sencilla antes de compartir el PDF — elige posición, opacidad, tamaño de fuente y ángulo.",
  },
  privacyNote:
    "Tu archivo se procesa en local, en tu navegador, y nunca se envía a nuestros servidores. Nada sale de tu dispositivo.",
  howTo: {
    heading: "Cómo añadir una marca de agua",
    steps: [
      {
        title: "Elige el PDF",
        body: "Arrastra y suelta un único PDF o haz clic para elegir el archivo.",
      },
      {
        title: "Escribe el texto",
        body: "Unos 40 caracteres como máximo funcionan mejor. Ejemplos: CONFIDENCIAL, BORRADOR, Muestra.",
      },
      {
        title: "Ajusta opacidad y ángulo",
        body: "Una opacidad baja deja la marca discreta; una alta, bien visible. El ángulo de 45° sirve para la mayoría de diseños.",
      },
      {
        title: "Descarga",
        body: "Reconstruimos el PDF en local, con la marca de agua en todas las páginas.",
      },
    ],
  },
  useCases: {
    heading: "Cuándo es útil la marca de agua",
    items: [
      {
        title: "Borradores en revisión",
        body: "Marca los documentos como BORRADOR antes de hacerlos circular, para evitar confusiones.",
      },
      {
        title: "Documentos confidenciales",
        body: "Sella CONFIDENCIAL antes de compartir contratos o datos financieros sensibles.",
      },
      {
        title: "Material de muestra",
        body: "Marca las muestras de tu portfolio para que no se reutilicen sin permiso.",
      },
      {
        title: "Documentos de uso interno",
        body: "Señala lo que no debe salir de la empresa.",
      },
    ],
  },
  limitations: {
    heading: "Límites",
    items: [
      {
        title: "Solo marca de agua de texto",
        body: "Esta herramienta estampa texto. Para una marca de agua con imagen o logotipo, usa la app PDF Editor.",
      },
      {
        title: "Solo fuentes estándar",
        body: "Usamos la fuente Helvetica integrada para que el resultado sea portátil. No se incrustan fuentes personalizadas.",
      },
      {
        title: "Una marca de agua se puede quitar",
        body: "Una marca de agua no es una protección legal. Desanima el uso indebido casual, no una edición decidida.",
      },
    ],
  },
  related: [
    { label: "Unir archivos PDF", path: "/merge-pdf" },
    { label: "Dividir PDF", path: "/split-pdf" },
    { label: "Girar PDF", path: "/rotate-pdf" },
    { label: "Todas las herramientas PDF gratis", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "¿Mi archivo se envía a algún servidor?",
      a: "No. La marca de agua se aplica enteramente en tu navegador; nada sale de tu dispositivo.",
    },
    {
      q: "¿Se puede usar otra fuente?",
      a: "En esta herramienta, no — usamos Helvetica para que el resultado sea portátil. Para fuentes personalizadas, usa la app PDF Editor.",
    },
    {
      q: "¿La marca de agua entra en todas las páginas?",
      a: "Sí. El mismo texto se aplica en diagonal, en el centro de cada página.",
    },
    {
      q: "¿Se puede quitar una marca de agua?",
      a: "Con las herramientas adecuadas, sí. Desanima el uso indebido casual, pero no es una función de seguridad.",
    },
  ],
  appCta: {
    heading: "¿Necesitas una marca de agua con imagen o logotipo?",
    sub: "PDF Editor para iPhone y Android admite fuentes personalizadas, imágenes y posición por página.",
  },
};

export default content;
