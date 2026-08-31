import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "free-browser-based-pdf-tools",
  h1: "Herramientas PDF gratis en el navegador (sin instalar, sin subir nada)",
  description:
    "Las herramientas PDF que funcionan enteramente en tu navegador: nada que instalar, ninguna cuenta, nada que subir. Qué hay disponible, qué cubre y cómo comprobar que de verdad funciona en local.",
  updated: "2026-05-29",
  intro: [
    "Las herramientas PDF basadas en el navegador cambiaron lo que significa «online». El modelo antiguo era: envía tu archivo, el servidor lo procesa, descarga el resultado. El modelo nuevo es: visita una página, tu navegador procesa el archivo en local, descarga el resultado. La diferencia importa — velocidad, privacidad, y el hecho de que la herramienta pueda seguir siendo gratuita de verdad.",
    "Que una herramienta sea «basada en el navegador» no es una frase de marketing; es una arquitectura. El procesamiento ocurre en JavaScript o WebAssembly en tu propio equipo, dentro de la pestaña del navegador. Ningún servidor interviene en el manejo de tu archivo. La privacidad y la gratuidad vienen de la arquitectura, no de una política escrita.",
    "Esta guía recorre lo que hay disponible hoy en herramientas PDF basadas en el navegador, las tareas que cubren bien, las que todavía no cubren, y cómo comprobar que una herramienta es de verdad local antes de confiar en ella.",
  ],
  steps: [
    {
      title: "Conoce lo que hay disponible en formato de navegador",
      body: "Compresión, unión, división, extracción de páginas, reordenación de páginas, rotación, marca de agua, imagen a PDF, PDF a imágenes, Word a PDF, PDF a Word, firma. El conjunto de herramientas del navegador cubre casi todo el trabajo PDF cotidiano.",
    },
    {
      title: "Comprueba que la herramienta es de verdad local",
      body: "Herramientas de desarrollador del navegador, pestaña de red, suelta un archivo. Una herramienta realmente basada en el navegador no muestra ninguna solicitud saliente grande al añadir el archivo. La comprobación lleva segundos.",
    },
    {
      title: "Usa Comprimir PDF para reducir el tamaño",
      body: "Suelta un PDF, elige un nivel de compresión, descarga. Toda la operación ocurre en tu navegador. Los archivos con muchos escaneos se reducen de forma drástica; los archivos solo de texto apenas cambian.",
    },
    {
      title: "Usa Fusionar PDF para combinar archivos",
      body: "Suelta varios PDF, arrastra para reordenar, descarga el archivo fusionado. La fusión ocurre en local; el archivo combinado se genera en la memoria de tu navegador.",
    },
    {
      title: "Usa Imagen a PDF y PDF a imágenes para las conversiones entre imagen y documento",
      body: "Imagen a PDF combina JPG, PNG y WebP en un solo PDF. PDF a imágenes extrae cada página como PNG o JPG. Las dos funcionan en local.",
    },
    {
      title: "Usa la app PDF Editor para los flujos pensados para el móvil",
      body: "Algunos flujos de trabajo (firmar, escanear, editar desde el móvil) funcionan mejor en una app dedicada que en el navegador. La app PDF Editor es el complemento en iOS y Android del conjunto de herramientas del navegador — la misma postura de privacidad, pero mejor adaptada al uso desde el móvil.",
    },
  ],
  tips: [
    "Las herramientas basadas en el navegador funcionan sin conexión una vez cargada la página. Una forma útil de confirmar que de verdad son locales.",
    "Las operaciones pesadas sobre archivos muy grandes pueden ocupar la CPU de la pestaña del navegador durante unos segundos — es normal, no un bloqueo.",
    "Las operaciones sobre varias páginas se procesan de forma fluida en los navegadores actuales — no hace falta esperar a que se suba el archivo entero porque no se está subiendo nada.",
    "Guarda la URL de la herramienta — las herramientas basadas en el navegador funcionan sin cuenta, así que la URL hace de marcador.",
    "No te fíes sin más de la etiqueta «basado en el navegador». Algunas herramientas tienen una interfaz en el navegador pero igualmente envían el archivo a un servidor.",
  ],
  mobileNote:
    "Los navegadores móviles también ejecutan herramientas PDF basadas en el navegador. La app PDF Editor usa la misma arquitectura dentro de una app nativa, con el mismo procesamiento en el propio dispositivo — los usuarios de iPhone y Android tienen la misma garantía de gratuidad y de no enviar nada a ningún servidor.",
  faq: [
    {
      q: "¿Qué tareas con PDF pueden hacerse en un navegador?",
      a: "Compresión, unión, división, extracción de páginas, reordenación, rotación, marca de agua, conversión entre imagen y PDF, entre Word y PDF, firma. La mayor parte del trabajo PDF cotidiano encaja.",
    },
    {
      q: "¿Qué es lo que todavía no puede hacerse en un navegador?",
      a: "El OCR de alta precisión sobre documentos largos, el tachado avanzado y algunos flujos especializados de preimpresión todavía se benefician del procesamiento en servidor.",
    },
    {
      q: "¿Cómo sé si una herramienta es de verdad basada en el navegador?",
      a: "Herramientas de desarrollador del navegador, pestaña de red. Suelta un archivo. Si no ves ninguna solicitud saliente grande, se está procesando en local. Si ves un POST de varios MB, se está enviando a un servidor.",
    },
    {
      q: "¿Es más lento lo basado en el navegador que lo basado en servidor?",
      a: "Comparable para la mayoría de las tareas. Los navegadores actuales y WebAssembly son rápidos. Los archivos muy grandes pueden tardar más en local, pero te ahorras el tiempo de subida y descarga.",
    },
    {
      q: "¿Por qué suelen ser gratuitas las herramientas basadas en el navegador?",
      a: "Porque el trabajo pesado ocurre en tu dispositivo, no en los servidores de la herramienta. Los costes de alojamiento son mínimos; la herramienta puede seguir siendo gratuita sin presión de suscripción.",
    },
  ],
  related: [
    { label: "Herramientas PDF — lista completa de herramientas en el navegador", path: "/pdf-tools" },
    { label: "Las mejores herramientas PDF gratis", path: "/guides/best-free-pdf-tools" },
    { label: "Las mejores herramientas PDF sin subir archivos", path: "/guides/best-pdf-tools-without-upload" },
    { label: "Las ventajas de procesar documentos en el navegador", path: "/guides/browser-based-document-processing-benefits" },
  ],
  parentHub: { label: "Herramientas PDF — gratis, en el navegador", path: "/pdf-tools" },
};

export default content;
