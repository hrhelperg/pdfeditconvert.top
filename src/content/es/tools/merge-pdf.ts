import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "merge-pdf",
  hero: {
    eyebrow: "Unir PDF",
    h1: "Une varios PDF en un solo documento — en tu navegador.",
    highlight: "en tu navegador",
    lead: "Elige dos o más archivos PDF y combínalos en un solo documento. Reordénalos antes de unirlos — los archivos se quedan en tu dispositivo.",
  },
  privacyNote:
    "Tus archivos se procesan en local, en tu navegador, y nunca se envían a nuestros servidores. Nada sale de tu dispositivo.",
  howTo: {
    heading: "Cómo unir PDF",
    steps: [
      {
        title: "Elige los PDF",
        body: "Arrastra y suelta dos o más PDF, o haz clic para elegirlos en tu dispositivo.",
      },
      {
        title: "Reordena si hace falta",
        body: "Usa las flechas de cada fila para colocar los archivos en el orden correcto antes de unirlos.",
      },
      {
        title: "Únelos",
        body: "Haz clic en Unir los PDF. Los archivos se combinan en local, en tu navegador.",
      },
      {
        title: "Descarga",
        body: "El PDF combinado se descarga automáticamente. Puedes renombrarlo después de guardarlo.",
      },
    ],
  },
  useCases: {
    heading: "Cuándo unir es la opción correcta",
    items: [
      {
        title: "Envía un archivo, no cinco",
        body: "Clientes, gestorías y abogados prefieren un documento único a una serie de adjuntos.",
      },
      {
        title: "Presupuesto + contrato + factura",
        body: "Monta un único archivo, fácil de revisar, a partir de documentos creados en herramientas distintas.",
      },
      {
        title: "Reúne páginas escaneadas",
        body: "Combina escaneos página a página de un DNI o un contrato en un archivo que el portal admita.",
      },
      {
        title: "Monta un informe",
        body: "Une portada, cuerpo del texto y anexos de apoyo en una sola entrega.",
      },
    ],
  },
  limitations: {
    heading: "Límites",
    items: [
      {
        title: "PDF protegidos con contraseña",
        body: "Los archivos bloqueados no se pueden unir en el navegador. Desbloquéalos antes en la app de origen o usa la app PDF Editor.",
      },
      {
        title: "Lotes muy grandes",
        body: "El navegador se queda sin memoria mucho antes que una app nativa. Para más de 50 archivos o escaneos enormes, usa la app PDF Editor.",
      },
      {
        title: "Marcadores y campos de formulario",
        body: "Algunas estructuras internas (campos de formulario, anotaciones) pueden aplanarse al unir. La app para el móvil las conserva mejor.",
      },
    ],
  },
  related: [
    { label: "Dividir PDF — el camino inverso", path: "/split-pdf" },
    { label: "Girar páginas del PDF", path: "/rotate-pdf" },
    { label: "Comprimir un PDF", path: "/compress-pdf" },
    { label: "Reordenar páginas del PDF", path: "/reorder-pdf-pages" },
    { label: "Todas las herramientas PDF gratis", path: "/pdf-tools" },
    { label: "Guía: cómo unir PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  faq: [
    {
      q: "¿Mis archivos se envían a algún servidor?",
      a: "No. La unión funciona enteramente en tu navegador. Tus archivos nunca salen de tu dispositivo.",
    },
    {
      q: "¿Hay un límite de cuántos PDF puedo unir?",
      a: "No hay un límite estricto, pero recomendamos mantener cada lote por debajo de 30 archivos o unos 500 MB en total, para que el navegador siga respondiendo bien.",
    },
    {
      q: "¿Se puede unir PDF protegidos con contraseña?",
      a: "En el navegador, no. Quita la contraseña antes o usa la app PDF Editor, que sí trabaja con archivos protegidos.",
    },
    {
      q: "¿Cambia el formato original?",
      a: "No. Cada página de origen se conserva exactamente tal cual. Lo único que cambia es el orden de las páginas y el documento que las envuelve.",
    },
    {
      q: "¿Puedo volver a separarlas después?",
      a: "Sí. Usa la herramienta Dividir PDF para deshacer cualquier archivo unido y volver a páginas o rangos.",
    },
  ],
  appCta: {
    heading: "¿Necesitas herramientas PDF con prisa?",
    sub: "PDF Editor para iPhone y Android une, firma y escanea tus PDF directamente desde el móvil.",
  },
};

export default content;
