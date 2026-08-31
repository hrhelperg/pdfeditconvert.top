import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "local-browser-pdf-processing-explained",
  h1: "El procesamiento local de PDF en el navegador, explicado",
  description:
    "Cómo puede una herramienta PDF funcionar en un navegador sin enviar tu archivo a ningún sitio. La tecnología, los compromisos, y cómo comprobar que una herramienta es de verdad local.",
  updated: "2026-05-29",
  intro: [
    "A mucha gente le sorprende que una pestaña del navegador pueda comprimir un PDF, fusionar dos archivos o extraer páginas de un documento de 200 páginas — todo sin enviar nada a ningún servidor. El navegador se percibe como una ventana hacia internet, no como un lugar donde ocurre trabajo pesado de verdad. Pero los navegadores actuales pueden ejecutar mucho código en tu propio equipo, y el procesamiento de PDF resulta ser exactamente el tipo de tarea que encaja ahí.",
    "La tecnología detrás de las herramientas PDF locales del navegador es JavaScript y WebAssembly ejecutándose en tu navegador, trabajando directamente sobre el archivo que aportas. El archivo lo lee el JavaScript, se transforma en la memoria de tu navegador, y se escribe de nuevo como un archivo nuevo que puedes descargar — todo sin ninguna llamada de red que lleve el contenido de tu archivo.",
    "Esta guía explica cómo funciona de verdad, por qué es privado por diseño, cuáles son sus límites (los tiene, y son reales), y cómo comprobar que una herramienta que te planteas usar es de verdad local. Nada exótico; la tecnología está madura.",
  ],
  steps: [
    {
      title: "Entiende el flujo básico",
      body: "Arrastras un archivo a la página. El JavaScript lo lee y lo carga en la memoria del navegador. El código en JavaScript o WebAssembly lo transforma (comprime, fusiona, divide). El resultado se escribe de nuevo como un archivo nuevo que descargas. Sin envío a ningún servidor, sin ningún contacto con el archivo en sí a través de la red.",
    },
    {
      title: "Entiende qué hace esto privado",
      body: "El servidor entrega el código en JavaScript (la herramienta en sí), pero nunca ve los datos que ese código procesa. La misma pestaña que descarga la herramienta la ejecuta después en local sobre tu archivo. La arquitectura separa la entrega del código del tratamiento de los datos.",
    },
    {
      title: "Compruébalo con las herramientas de desarrollador del navegador",
      body: "Abre las herramientas de desarrollador, la pestaña de red, y suelta tu archivo. Una herramienta realmente local no muestra ninguna solicitud saliente grande al añadir el archivo. Una herramienta que lo envía a un servidor manda el archivo como una solicitud POST de varios megabytes. La diferencia se ve a simple vista.",
    },
    {
      title: "Reconoce los límites con honestidad",
      body: "El procesamiento local está limitado por la memoria y la CPU de tu navegador. Los archivos muy grandes (cientos de páginas, gigabytes) pueden atascarse; las operaciones avanzadas (OCR completo sobre documentos largos) a veces necesitan ayuda de un servidor. Las herramientas basadas en el navegador rinden mejor en el trabajo cotidiano.",
    },
    {
      title: "Comprueba que ninguna telemetría filtra datos",
      body: "Algunas herramientas registran eventos analíticos con metadatos (número de páginas, tamaño del archivo). Eso es distinto de filtrar el contenido — y esa analítica también es visible en la misma pestaña de red. Distingue el contenido de los metadatos.",
    },
    {
      title: "Trata el navegador como una frontera de confianza",
      body: "Una vez que tu archivo está en la pestaña del navegador, sigue en tu dispositivo. Las herramientas de procesamiento de este sitio se apoyan en esa propiedad: hacen su trabajo dentro de la pestaña y nunca envían tu archivo fuera, así que la privacidad viene incluida sin coste adicional.",
    },
  ],
  tips: [
    "WebAssembly asume el trabajo pesado del procesamiento de PDF en los navegadores actuales — funciona a una velocidad casi nativa, y por eso las herramientas PDF locales han alcanzado el rendimiento de las aplicaciones de escritorio.",
    "Cerrar la pestaña del navegador borra el archivo de la memoria. Las herramientas locales no dejan una copia atrás.",
    "Las herramientas locales funcionan sin conexión una vez cargada la página — una forma útil de confirmar que el archivo no se está enviando a ningún sitio.",
    "Las afirmaciones sobre privacidad deberían poder comprobarse. Las herramientas de desarrollador son esa comprobación; no hace falta fiarse a ciegas del texto de marketing.",
    "Que algo sea «basado en el navegador» no es lo mismo que «sin servidor». Algunas herramientas «basadas en el navegador» siguen enviando tu archivo — solo la interfaz vive en el navegador. Comprueba el tráfico de red.",
  ],
  mobileNote:
    "Los navegadores móviles ejecutan el mismo JavaScript y WebAssembly locales que los navegadores de escritorio. La app PDF Editor usa una arquitectura parecida: todo el procesamiento ocurre en el propio dispositivo, sin enviar nada a ningún servidor, así que los usuarios de iPhone y Android tienen las mismas garantías de privacidad.",
  faq: [
    {
      q: "¿Cómo ocurre el procesamiento de PDF en un navegador?",
      a: "El JavaScript y WebAssembly leen tu archivo y lo cargan en la memoria de la pestaña, lo transforman, y escriben el resultado como una descarga. El servidor entrega el código pero nunca ve el archivo.",
    },
    {
      q: "¿Es de verdad privado el procesamiento local en el navegador?",
      a: "Sí, por arquitectura. El archivo no sale de la pestaña. La única forma en que una herramienta local filtraría algo sería un fallo o un envío oculto — algo que las herramientas de desarrollador dejarían ver.",
    },
    {
      q: "¿De qué tamaño puede ser el archivo que gestiona?",
      a: "Los navegadores actuales manejan sin problema PDF de hasta unos cientos de megabytes. Por encima de eso, puedes toparte con límites de memoria según el dispositivo.",
    },
    {
      q: "¿Funciona esto sin conexión?",
      a: "Sí, una vez cargada la página. El procesamiento ocurre en local; no hace falta red. Es una prueba útil de que la herramienta es de verdad local.",
    },
    {
      q: "¿Por qué no funcionan así todas las herramientas PDF?",
      a: "Algunas operaciones (OCR real sobre documentos largos, ciertas compresiones) siguen siendo más rápidas en un servidor. Muchas herramientas también dependen de un modelo de negocio basado en el servidor. Las herramientas basadas en el navegador se han convertido en una alternativa viable para la mayoría de las tareas cotidianas.",
    },
  ],
  related: [
    { label: "Herramientas PDF — en el navegador, sin subir nada", path: "/pdf-tools" },
    { label: "Herramientas PDF del navegador frente a herramientas que suben archivos", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Las ventajas de procesar documentos en el navegador", path: "/guides/browser-based-document-processing-benefits" },
    { label: "¿Son seguras las herramientas PDF online?", path: "/guides/are-online-pdf-tools-safe" },
  ],
  parentHub: { label: "Herramientas PDF — gratis, en el navegador", path: "/pdf-tools" },
};

export default content;
