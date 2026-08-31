import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "rotate-pdf",
  hero: {
    eyebrow: "Girar PDF",
    h1: "Endereza páginas de PDF tumbadas — en tu navegador.",
    highlight: "en tu navegador",
    lead: "Gira todas las páginas o solo las que elijas y descarga el PDF corregido — todo en tu navegador.",
  },
  privacyNote:
    "Tu archivo se procesa en local, en tu navegador, y nunca se envía a nuestros servidores. Nada sale de tu dispositivo.",
  howTo: {
    heading: "Cómo girar un PDF",
    steps: [
      {
        title: "Elige el PDF",
        body: "Arrastra y suelta un único PDF o haz clic para elegir el archivo.",
      },
      { title: "Elige el ángulo", body: "Selecciona 90°, 180° o 270° (en el sentido de las agujas del reloj)." },
      {
        title: "Elige las páginas",
        body: "Gira todas las páginas o indica los números (por ejemplo, 1,3-5).",
      },
      {
        title: "Gira y descarga",
        body: "Haz clic en Girar el PDF. Reconstruimos el archivo en local con la nueva orientación.",
      },
    ],
  },
  useCases: {
    heading: "Cuándo girar es la opción correcta",
    items: [
      {
        title: "Escaneos del móvil que salieron tumbados",
        body: "Las fotos de documentos suelen guardarse en horizontal — endereza con un clic.",
      },
      {
        title: "Informes con orientación mezclada",
        body: "¿Una tabla ancha en una página horizontal en medio de un informe vertical? Corrígelo sin volver a escanear.",
      },
      {
        title: "Documentos de identidad",
        body: "Asegúrate de que todas las páginas quedan en la misma dirección antes de que el portal se queje.",
      },
      {
        title: "Recibos y facturas",
        body: "Deja una pila de fotos de recibos legible en la misma dirección antes de unirlas.",
      },
    ],
  },
  limitations: {
    heading: "Límites",
    items: [
      {
        title: "PDF protegidos con contraseña",
        body: "Los archivos bloqueados no se pueden girar en el navegador. Desbloquéalos antes o usa la app PDF Editor.",
      },
      {
        title: "Ángulos distintos por página",
        body: "La herramienta aplica un ángulo a la vez. Para ángulos distintos, úsala dos veces con selecciones de páginas diferentes.",
      },
      {
        title: "Anotaciones y campos de formulario",
        body: "Girar puede desplazar visualmente las capas superpuestas. La app para el móvil gestiona mejor las anotaciones.",
      },
    ],
  },
  related: [
    { label: "Unir archivos PDF", path: "/merge-pdf" },
    { label: "Dividir PDF", path: "/split-pdf" },
    { label: "Marca de agua en PDF", path: "/add-watermark-to-pdf" },
    { label: "Reordenar páginas del PDF", path: "/reorder-pdf-pages" },
    { label: "Todas las herramientas PDF gratis", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "¿Mi archivo se envía a algún servidor?",
      a: "No. Girar funciona enteramente en tu navegador; nada sale de tu dispositivo.",
    },
    {
      q: "¿Se puede girar solo algunas páginas?",
      a: "Sí. Usa el campo de selección de páginas, por ejemplo 1,3-5,9.",
    },
    {
      q: "¿Girar reduce la calidad?",
      a: "No. Las páginas se conservan byte a byte; solo ajustamos la información de rotación del archivo.",
    },
    {
      q: "¿Se puede girar un PDF protegido con contraseña?",
      a: "En el navegador, no. Quita la contraseña antes o usa la app PDF Editor.",
    },
  ],
  appCta: {
    heading: "Gira también desde el móvil.",
    sub: "PDF Editor para iPhone y Android edita, gira y firma tus PDF sin conexión.",
  },
};

export default content;
