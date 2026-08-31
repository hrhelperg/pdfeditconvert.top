import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "reorder-pdf-pages",
  hero: {
    eyebrow: "Reordenar páginas del PDF",
    h1: "Reordena las páginas de un PDF — en tu navegador.",
    highlight: "en tu navegador",
    lead: "Elige un PDF, previsualiza cada página, ponlas en el orden que quieras y descarga el archivo reordenado. Nada se envía a ningún servidor.",
  },
  privacyNote:
    "Tu archivo se procesa en local, en tu navegador, y nunca se envía a nuestros servidores. Nada sale de tu dispositivo.",
  howTo: {
    heading: "Cómo reordenar las páginas de un PDF",
    steps: [
      {
        title: "Elige el PDF",
        body: "Arrastra y suelta un PDF o haz clic para elegir un archivo de tu dispositivo.",
      },
      {
        title: "Revisa las vistas previas",
        body: "Cada página se convierte en una miniatura, para que veas exactamente lo que estás moviendo.",
      },
      {
        title: "Mueve las páginas",
        body: "Usa las flechas de subir y bajar de cada página para adelantarla o atrasarla en el documento.",
      },
      {
        title: "Genera y descarga",
        body: "Haz clic en Reordenar el PDF. El archivo reordenado se monta en local y se descarga automáticamente.",
      },
    ],
  },
  useCases: {
    heading: "Cuándo ayuda reordenar",
    items: [
      {
        title: "Corregir el orden de un escaneo",
        body: "Las apps de escaneo suelen capturar las páginas fuera de orden — arréglalo antes de compartir.",
      },
      {
        title: "Mover la portada o un anexo",
        body: "Trae la portada al principio o manda el material de apoyo al final.",
      },
      {
        title: "Recomponer un archivo unido",
        body: "Después de unir documentos, coloca las páginas en el orden de lectura que necesites.",
      },
      {
        title: "Preparar para imprimir",
        body: "Organiza las páginas para folletos, cuadernillos o impresión a doble cara.",
      },
    ],
  },
  limitations: {
    heading: "Límites honestos",
    items: [
      {
        title: "PDF protegidos con contraseña",
        body: "Los archivos cifrados no se pueden abrir en el navegador. Desbloquéalos antes o usa la app PDF Editor.",
      },
      {
        title: "PDF muy grandes",
        body: "Generar una miniatura de cada página consume memoria. Cientos de páginas pueden ir lentas o topar con los límites del navegador.",
      },
      {
        title: "Las vistas previas tardan un momento",
        body: "Las miniaturas se generan página a página en tu dispositivo, así que un PDF grande necesita unos segundos antes de que puedas reordenarlo.",
      },
    ],
  },
  related: [
    { label: "Unir PDF", path: "/merge-pdf" },
    { label: "Dividir un PDF", path: "/split-pdf" },
    { label: "Girar páginas del PDF", path: "/rotate-pdf" },
    { label: "Extraer páginas del PDF", path: "/extract-pdf-pages" },
  ],
  faq: [
    {
      q: "¿Mis archivos se envían a algún servidor?",
      a: "No. El PDF se genera y se vuelve a montar enteramente en tu navegador. Tu archivo nunca sale de tu dispositivo.",
    },
    {
      q: "¿Se pueden arrastrar las páginas para reordenarlas?",
      a: "El reordenado usa botones claros de subir y bajar en cada página. Esto funciona de forma fiable en el móvil y en el ordenador, sin asas diminutas que arrastrar.",
    },
    {
      q: "¿Cambia el contenido o la calidad de las páginas?",
      a: "No. Las páginas se copian exactamente tal cual — solo cambia el orden. El texto sigue siendo seleccionable.",
    },
    {
      q: "¿Por qué tarda un momento después de elegir el archivo?",
      a: "Cada página se convierte en una miniatura en local, para que veas lo que estás moviendo. Un PDF más grande tarda un poco más.",
    },
    {
      q: "¿Se puede reordenar un PDF protegido con contraseña?",
      a: "En el navegador, no. Quita la contraseña antes o usa la app PDF Editor, que sí trabaja con archivos protegidos.",
    },
  ],
  appCta: {
    heading: "¿Necesitas herramientas PDF con prisa?",
    sub: "PDF Editor para iPhone y Android reordena, une y firma tus PDF directamente desde el móvil.",
  },
};

export default content;
