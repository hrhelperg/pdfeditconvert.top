import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "compress-pdf",
  hero: {
    eyebrow: "Comprimir PDF",
    h1: "Reduce tus PDF — directamente en el navegador.",
    highlight: "directamente en el navegador",
    lead: "Reduce el tamaño de un PDF para cumplir los límites de correo y de subida. Elige el nivel de compresión, mira exactamente cuánto has ahorrado y descarga — el archivo nunca sale de tu dispositivo.",
  },
  privacyNote:
    "Tu archivo se procesa en local, en tu navegador, y nunca se envía a nuestros servidores. Nada sale de tu dispositivo.",
  howTo: {
    heading: "Cómo comprimir un PDF",
    steps: [
      {
        title: "Elige el PDF",
        body: "Arrastra y suelta un PDF o haz clic para elegir un archivo de tu dispositivo.",
      },
      {
        title: "Elige el nivel",
        body: "Bajo conserva más detalle; Recomendado equilibra tamaño y calidad; Fuerte da el archivo más pequeño.",
      },
      {
        title: "Comprime",
        body: "Haz clic en Comprimir el PDF. Las páginas se vuelven a generar y a codificar en local, en tu navegador.",
      },
      {
        title: "Descarga",
        body: "Compara el tamaño antes y después, con el porcentaje de reducción, y descarga el archivo más ligero.",
      },
    ],
  },
  useCases: {
    heading: "Cuándo ayuda más comprimir",
    items: [
      {
        title: "Límite de adjuntos de correo",
        body: "Consigue que un contrato escaneado o un catálogo baje del límite de 10 o 25 MB de un adjunto.",
      },
      {
        title: "Formularios y portales de subida",
        body: "Los sistemas de la administración y de RRHH suelen rechazar archivos de pocos megabytes — esto lo soluciona.",
      },
      {
        title: "Documentos escaneados",
        body: "Los escaneos hechos con el móvil pesan muchísimo. Los PDF llenos de imágenes se reducen mucho con la compresión fuerte.",
      },
      {
        title: "Almacenamiento y envío",
        body: "Mantén tu archivo ligero y haz que los enlaces se descarguen más rápido para quien los recibe.",
      },
    ],
  },
  limitations: {
    heading: "Límites honestos",
    items: [
      {
        title: "El texto se convierte en imagen",
        body: "La compresión convierte cada página en imagen, así que el texto deja de ser seleccionable y buscable en el resultado. Guarda el original si lo necesitas.",
      },
      {
        title: "Los PDF solo de texto se reducen poco",
        body: "Si el PDF ya es casi todo texto o gráfico vectorial, hay poco que comprimir — en ese caso te devolvemos tu archivo original en vez de uno más grande.",
      },
      {
        title: "PDF muy grandes o bloqueados",
        body: "El navegador se queda sin memoria mucho antes que una app nativa. Un PDF protegido con contraseña no se puede procesar en el navegador — usa la app PDF Editor.",
      },
    ],
  },
  related: [
    { label: "Unir PDF", path: "/merge-pdf" },
    { label: "Dividir un PDF", path: "/split-pdf" },
    { label: "Extraer páginas de un PDF", path: "/extract-pdf-pages" },
    { label: "Todas las herramientas PDF gratis", path: "/pdf-tools" },
    { label: "Guía: cómo comprimir un PDF", path: "/guides/how-to-compress-pdf" },
  ],
  faq: [
    {
      q: "¿Mi archivo se envía a algún servidor?",
      a: "No. La compresión funciona enteramente en tu navegador, usando el procesador de tu dispositivo. El archivo nunca sale de tu dispositivo.",
    },
    {
      q: "¿Cuánto se va a reducir mi PDF?",
      a: "Depende del contenido. Los PDF escaneados y llenos de imágenes suelen reducirse entre un 50% y un 90%. Los PDF solo de texto puede que no se reduzcan nada — en ese caso, te devolvemos tu original.",
    },
    {
      q: "¿Baja la calidad?",
      a: "Sí, un poco — es una compresión con pérdida. Los niveles más bajos conservan más detalle. Nunca prometemos «sin pérdida de calidad»; elige el nivel que te resulte aceptable.",
    },
    {
      q: "¿Por qué el texto deja de ser seleccionable después de comprimir?",
      a: "Para conseguir un ahorro real de tamaño en el navegador, cada página se convierte en imagen. Si necesitas el texto seleccionable, guarda el original o usa un nivel más suave.",
    },
    {
      q: "¿Se puede comprimir un PDF protegido con contraseña?",
      a: "En el navegador, no. Quita la contraseña antes o usa la app PDF Editor, que sí trabaja con archivos protegidos.",
    },
  ],
  appCta: {
    heading: "¿Necesitas herramientas PDF con prisa?",
    sub: "PDF Editor para iPhone y Android comprime, firma y comparte tus PDF directamente desde el móvil.",
  },
};

export default content;
