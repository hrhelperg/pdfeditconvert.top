import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "split-pdf",
  hero: {
    eyebrow: "Dividir PDF",
    h1: "Extrae páginas de un PDF — con privacidad, en tu navegador.",
    highlight: "en tu navegador",
    lead: "Elige un PDF e indica el rango de páginas que quieres exportar. Usa rangos como 1-3,5,8-10 — el archivo se queda en tu dispositivo.",
  },
  privacyNote:
    "Tu archivo se procesa en local, en tu navegador, y nunca se envía a nuestros servidores. Nada sale de tu dispositivo.",
  howTo: {
    heading: "Cómo dividir un PDF",
    steps: [
      {
        title: "Elige el PDF",
        body: "Arrastra y suelta un único PDF o haz clic para elegir el archivo.",
      },
      {
        title: "Indica los rangos",
        body: "Escribe páginas y rangos separados por comas. Ejemplo: 1-3,5,8-10.",
      },
      {
        title: "Divide",
        body: "Haz clic en Dividir el PDF. Montamos un PDF nuevo solo con esas páginas, en local.",
      },
      {
        title: "Descarga",
        body: "El PDF nuevo se descarga automáticamente. Renómbralo después de guardarlo.",
      },
    ],
  },
  useCases: {
    heading: "Cuándo dividir es la opción correcta",
    items: [
      {
        title: "Envía solo lo que importa",
        body: "Comparte solo la cláusula del contrato que interesa, no el documento entero.",
      },
      {
        title: "Separa un lote escaneado",
        body: "Deshaz el escaneo de varios documentos y vuelve a tener archivos individuales.",
      },
      {
        title: "Saca una página de un informe",
        body: "Extrae un gráfico o una tabla sin enseñar el resto del archivo.",
      },
      {
        title: "Prepara un adjunto más limpio",
        body: "Quita la portada, las páginas en blanco y los anexos antes de enviarlo por correo.",
      },
    ],
  },
  limitations: {
    heading: "Límites",
    items: [
      {
        title: "PDF protegidos con contraseña",
        body: "Los archivos bloqueados no se pueden dividir en el navegador. Desbloquéalos antes o usa la app PDF Editor.",
      },
      {
        title: "Archivos muy grandes",
        body: "El navegador puede quedarse sin memoria en documentos de varios cientos de megabytes.",
      },
      {
        title: "Un archivo a la vez",
        body: "Esta herramienta exporta un único PDF con las páginas elegidas. Para generar varios archivos, úsala más de una vez.",
      },
    ],
  },
  related: [
    { label: "Unir PDF — el camino inverso", path: "/merge-pdf" },
    { label: "Girar páginas del PDF", path: "/rotate-pdf" },
    { label: "PDF a imágenes", path: "/pdf-to-images" },
    { label: "Comprimir un PDF", path: "/compress-pdf" },
    { label: "Extraer páginas del PDF", path: "/extract-pdf-pages" },
    { label: "Reordenar páginas del PDF", path: "/reorder-pdf-pages" },
    { label: "Todas las herramientas PDF gratis", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "¿Mis archivos se envían a algún servidor?",
      a: "No. La división funciona enteramente en tu navegador; el archivo nunca sale de tu dispositivo.",
    },
    {
      q: "¿Cuál es la sintaxis del rango de páginas?",
      a: "Páginas y rangos separados por comas. Por ejemplo, 1-3,5,8-10 conserva las páginas 1, 2, 3, 5, 8, 9 y 10.",
    },
    {
      q: "¿Se puede dividir un PDF protegido con contraseña?",
      a: "En el navegador, no. Quita la contraseña antes o usa la app PDF Editor.",
    },
    {
      q: "¿El resultado conserva la calidad original?",
      a: "Sí — las páginas se copian byte a byte. No hay ningún nuevo renderizado ni pérdida de calidad.",
    },
  ],
  appCta: {
    heading: "¿Divides PDF con prisa?",
    sub: "PDF Editor para iPhone y Android divide y une tus PDF directamente desde el móvil.",
  },
};

export default content;
