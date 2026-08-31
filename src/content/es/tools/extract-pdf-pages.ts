import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "extract-pdf-pages",
  hero: {
    eyebrow: "Extraer páginas del PDF",
    h1: "Extrae páginas de un PDF — en tu navegador.",
    highlight: "en tu navegador",
    lead: "Elige un PDF, indica las páginas o los rangos que quieras y descarga un PDF nuevo solo con ellas. Todo ocurre en tu dispositivo.",
  },
  privacyNote:
    "Tu archivo se procesa en local, en tu navegador, y nunca se envía a nuestros servidores. Nada sale de tu dispositivo.",
  howTo: {
    heading: "Cómo extraer páginas de un PDF",
    steps: [
      {
        title: "Elige el PDF",
        body: "Arrastra y suelta un PDF o haz clic para elegir uno. Te mostramos el número total de páginas del archivo.",
      },
      {
        title: "Indica las páginas",
        body: "Escribe páginas sueltas y rangos, por ejemplo 1-3,5,8-10. El recuento seleccionado se actualiza mientras escribes.",
      },
      {
        title: "Extrae",
        body: "Haz clic en Extraer páginas. Se monta en local un PDF nuevo solo con esas páginas.",
      },
      { title: "Descarga", body: "El PDF extraído se descarga automáticamente." },
    ],
  },
  useCases: {
    heading: "Cuándo ayuda extraer",
    items: [
      {
        title: "Compartir solo lo necesario",
        body: "Envía una sección, un capítulo o la página firmada en vez del documento entero.",
      },
      {
        title: "Sacar un formulario o un recibo",
        body: "Consigue la única página que pide el portal sin enseñar el resto.",
      },
      {
        title: "Separar un capítulo",
        body: "Crea un PDF ligero a partir de un informe largo o de un libro, para estudiar o revisar.",
      },
      {
        title: "Montar un material a medida",
        body: "Reordena la selección listando las páginas en el orden que quieras.",
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
        title: "Páginas fuera de rango",
        body: "Los números de página mayores que el total del documento se ignoran; si no queda nada válido seleccionado, verás un error claro.",
      },
      {
        title: "PDF muy grandes",
        body: "El navegador se queda sin memoria mucho antes que una app nativa. Para archivos enormes, usa la app PDF Editor.",
      },
    ],
  },
  related: [
    { label: "Dividir un PDF", path: "/split-pdf" },
    { label: "Reordenar páginas del PDF", path: "/reorder-pdf-pages" },
    { label: "Comprimir un PDF", path: "/compress-pdf" },
    { label: "Unir PDF", path: "/merge-pdf" },
  ],
  faq: [
    {
      q: "¿Mis archivos se envían a algún servidor?",
      a: "No. La extracción funciona enteramente en tu navegador. Tu archivo nunca sale de tu dispositivo.",
    },
    {
      q: "¿Qué formatos de página puedo escribir?",
      a: "Páginas sueltas y rangos separados por comas: 1-3, 2,4,6 o 1-2,5,8-10. Los espacios no molestan.",
    },
    {
      q: "¿Qué pasa con un rango no válido?",
      a: "Las entradas no válidas se rechazan con un mensaje claro; los números fuera de rango se ignoran. Si no queda nada válido, te explicamos el motivo.",
    },
    {
      q: "¿Se pueden repetir o reordenar páginas?",
      a: "Sí. Lista las páginas en el orden que quieras; repetir una página hace que aparezca más de una vez.",
    },
    {
      q: "¿Extraer cambia la calidad?",
      a: "No. Las páginas elegidas se copian exactamente tal cual — el texto sigue siendo seleccionable y nada se recomprime.",
    },
  ],
  appCta: {
    heading: "¿Necesitas herramientas PDF con prisa?",
    sub: "PDF Editor para iPhone y Android extrae, divide y firma tus PDF directamente desde el móvil.",
  },
};

export default content;
