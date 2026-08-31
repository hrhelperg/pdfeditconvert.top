import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-tools-without-upload",
  h1: "Las mejores herramientas PDF sin subir archivos (tus archivos se quedan en tu dispositivo)",
  description:
    "Cuando no quieres que tu PDF salga de tu dispositivo, estas son las herramientas que hacen el trabajo en local. Compresión, unión, conversión — todo sin que el archivo se mueva de tu equipo.",
  updated: "2026-05-29",
  intro: [
    "Hay un momento en el que vas a comprimir, unir o convertir un PDF y te detienes. El archivo es sensible — un contrato, un extracto bancario, un DNI escaneado — y los tres primeros resultados de búsqueda quieren que lo envíes a su servidor. El riesgo parece pequeño en cada caso concreto, pero se acumula a lo largo de un año de trabajo cotidiano con documentos.",
    "Las herramientas PDF sin subida quitan ese riesgo de la ecuación por diseño. El procesamiento ocurre en tu dispositivo — en la pestaña del navegador o en una app del móvil — y el archivo nunca llega al servidor de un tercero. La propiedad de privacidad es automática, no depende de una política de retención declarada.",
    "Esta guía enumera las herramientas sin subida para las tareas PDF más habituales. La preferencia va hacia las herramientas basadas en el navegador porque funcionan sin instalar nada; las apps del móvil complementan los casos en los que el teléfono es el mejor dispositivo para el trabajo.",
  ],
  steps: [
    {
      title: "Comprime sin subir nada: Comprimir PDF en el navegador",
      body: "Abre la página, suelta tu PDF, elige un nivel de compresión, descarga. El algoritmo de compresión funciona en tu navegador; el archivo se lee en local, se procesa en memoria y se escribe de nuevo como una descarga nueva.",
    },
    {
      title: "Fusiona sin subir nada: Fusionar PDF en el navegador",
      body: "Suelta varios PDF, arrastra para ordenarlos, descarga el archivo combinado. La fusión ocurre en local — tus archivos se combinan en la memoria del navegador y nunca se envían a ningún servidor.",
    },
    {
      title: "Divide y extrae sin subir nada",
      body: "Dividir PDF y Extraer páginas de PDF gestionan las operaciones a nivel de página en tu navegador. Indica las páginas, descarga el resultado. Útil cuando solo necesitas enviar páginas concretas de un documento sensible.",
    },
    {
      title: "Convierte sin subir nada",
      body: "PDF a Word, Word a PDF, Imagen a PDF, PDF a imágenes: todas funcionan en el navegador. La conversión ocurre en local; el archivo convertido se escribe de nuevo en tus descargas.",
    },
    {
      title: "Firma sin subir nada",
      body: "Firmar PDF o la app PDF Editor capturan la firma en tu propio dispositivo. El archivo firmado se queda en local hasta que decides compartirlo. Ninguna plataforma de firma de por medio.",
    },
    {
      title: "Comprueba que no se sube nada con las herramientas de desarrollador del navegador",
      body: "Abre las herramientas de desarrollador, la pestaña de red, suelta un archivo. Una herramienta que de verdad no sube nada no muestra ningún POST saliente grande. Si lo ves, la herramienta está enviando el archivo a pesar de lo que diga.",
    },
  ],
  tips: [
    "Las herramientas sin subida funcionan sin conexión una vez cargada la página. Compruébalo — prueba la herramienta con el wifi apagado después de cargar la página. Las herramientas verdaderamente locales siguen funcionando.",
    "Los archivos sensibles (financieros, legales, médicos) deberían usar por defecto herramientas sin subida. La reducción de riesgo es real aunque cada caso concreto parezca poco importante.",
    "No te fíes de afirmaciones tipo «no guardamos tu archivo» en herramientas que sí lo envían a un servidor sin comprobarlo tú mismo. La arquitectura gana a la política.",
    "Las apps del móvil que procesan en local suelen ser la mejor elección sin subida en el teléfono. La app PDF Editor encaja en este patrón en iOS y Android.",
    "Las herramientas del navegador sin subida se comprueban solas porque su procesamiento es visible en las herramientas de desarrollador. Úsalo al evaluar herramientas nuevas.",
  ],
  mobileNote:
    "La app PDF Editor es el equivalente en iOS y Android del patrón sin subida del navegador — todo el procesamiento ocurre en el propio dispositivo, sin enviar nada a ningún servidor, sin cuenta. Útil cuando el móvil es el dispositivo natural para el trabajo (firmar, escanear, ediciones rápidas).",
  faq: [
    {
      q: "¿Por qué importa no subir el archivo?",
      a: "Porque enviarlo crea copias de tu archivo en servidores que no controlas. Incluso con políticas sólidas, las brechas en servidores ocurren. Las herramientas sin subida eliminan ese riesgo por su propia arquitectura.",
    },
    {
      q: "¿Pueden las herramientas sin subida comprimir de verdad PDF grandes?",
      a: "Sí. Los navegadores actuales gestionan sin problema cientos de megabytes. El procesamiento lo hace WebAssembly a una velocidad casi nativa.",
    },
    {
      q: "¿Cómo confirmo que una herramienta no está enviando nada a un servidor?",
      a: "Herramientas de desarrollador del navegador, pestaña de red, arrastra un archivo. Sin solicitud saliente grande = sin envío. La comprobación es directa y visible.",
    },
    {
      q: "¿Son gratuitas las herramientas sin subida?",
      a: "Normalmente, sí. La economía de las herramientas sin subida es distinta a la de las que dependen de un servidor — el coste de alojamiento es mínimo — así que pueden seguir siendo gratuitas sin monetizar tus datos.",
    },
    {
      q: "¿Y si un flujo de trabajo exige enviar el archivo a un servidor?",
      a: "Algunas tareas especializadas (OCR de alta precisión sobre archivos largos) todavía necesitan procesamiento en servidor. Para esos casos, elige herramientas de pago con compromisos explícitos de retención y protege primero el archivo con contraseña.",
    },
  ],
  related: [
    { label: "Herramientas PDF — en el navegador, sin subir nada", path: "/pdf-tools" },
    { label: "Las mejores herramientas PDF gratis", path: "/guides/best-free-pdf-tools" },
    { label: "Herramientas PDF gratis en el navegador", path: "/guides/free-browser-based-pdf-tools" },
    { label: "Cómo evitar subir documentos sensibles", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "Herramientas PDF — gratis, en el navegador", path: "/pdf-tools" },
};

export default content;
