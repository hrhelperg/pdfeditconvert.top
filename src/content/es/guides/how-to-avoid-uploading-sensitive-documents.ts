import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-avoid-uploading-sensitive-documents",
  h1: "Cómo evitar subir documentos sensibles (alternativas prácticas)",
  description:
    "Cuando una tarea te tienta a subir un PDF sensible, casi siempre hay una alternativa que funciona solo en local. Las familias de tareas y la herramienta sin subida para cada una.",
  updated: "2026-05-29",
  intro: [
    "Toda tarea con PDF tiene un momento en el que el primer resultado de una búsqueda quiere que subas tu archivo a un servidor. Comprimir, fusionar, dividir, convertir, firmar — todas vienen acompañadas de cientos de webs construidas sobre el modelo de subir y procesar en remoto. Para archivos normales no pasa nada. Para los sensibles (registros financieros, documentos de identidad, contratos, historiales médicos) es un riesgo que se puede evitar.",
    "Evitar la subida de archivos no significa renunciar a las herramientas modernas. Significa elegir herramientas que funcionan en tu propio dispositivo — en tu navegador, en una app del móvil, en tu ordenador. Toda tarea PDF habitual tiene al menos una opción que funciona solo en local y hace el trabajo sin que el archivo llegue nunca al servidor de un tercero.",
    "Esta guía es el reemplazo práctico: las familias de tareas, la herramienta que funciona en local para cada una, y el pequeño número de casos en los que el procesamiento local todavía no cubre de verdad la necesidad.",
  ],
  steps: [
    {
      title: "Para comprimir, usa un compresor basado en el navegador",
      body: "Comprimir PDF, dentro del conjunto de herramientas de este sitio, funciona en local. Gestiona sin problema el archivo típico con muchos escaneos o fotos, sin enviarlo a ningún sitio. Compruébalo con las herramientas de desarrollador — no debería aparecer ninguna solicitud saliente grande al añadir el archivo.",
    },
    {
      title: "Para fusionar, usa un fusionador basado en el navegador",
      body: "Fusionar PDF combina los archivos en local. El archivo combinado se escribe de nuevo en tus descargas; ninguna copia vive en un servidor. Misma arquitectura que la compresión — local desde el principio.",
    },
    {
      title: "Para dividir y extraer, usa un divisor basado en el navegador",
      body: "Dividir PDF y Extraer páginas de PDF funcionan en tu propio dispositivo. Las operaciones a nivel de página son mecánicas y encajan a la perfección con el procesamiento local.",
    },
    {
      title: "Para convertir, usa un convertidor basado en el navegador",
      body: "PDF a Word, Word a PDF, Imagen a PDF, PDF a imágenes: todas están disponibles en versiones basadas en el navegador que no envían nada a ningún servidor. La conversión ocurre en tu propia pestaña.",
    },
    {
      title: "Para firmar, usa una app de firma local",
      body: "Firmar PDF en el navegador o la app PDF Editor en el móvil. Firma dibujada, sin ninguna plataforma de firma en la nube de por medio. El archivo firmado se queda en tu dispositivo hasta que decides compartirlo.",
    },
    {
      title: "Para tareas que realmente necesitan ayuda de un servidor, usa una herramienta de pago con garantías explícitas",
      body: "Algunos flujos de trabajo (OCR pesado sobre documentos largos, tachado avanzado) todavía se benefician del procesamiento en servidor. Para esos casos, elige una herramienta de pago con compromisos explícitos de retención y trato de datos — no una herramienta gratuita con un lenguaje vago.",
    },
  ],
  tips: [
    "Los resultados de búsqueda favorecen a las herramientas que pagan por posicionarse. El primer resultado rara vez es el más privado; comprueba qué te ofrece realmente.",
    "Las herramientas que solo funcionan en local trabajan sin conexión. Probar la herramienta sin internet es una comprobación rápida de que no necesita red para tu archivo.",
    "No te fíes de herramientas que dicen «no guardamos tu archivo» pero aun así exigen subirlo para procesarlo. Esa breve ventana de retención sigue siendo una exposición real para material muy sensible.",
    "Las apps del móvil que procesan en local suelen ser fáciles de reconocer — funcionan sin internet una vez instaladas. La app PDF Editor encaja en ese patrón.",
    "Convierte esto en un hábito. En cuanto tu opción por defecto sean las herramientas locales, el material sensible queda más protegido sin que tengas que pensarlo cada vez.",
  ],
  mobileNote:
    "En el móvil la tentación es usar la primera herramienta PDF que recomienda la tienda de aplicaciones — muchas de las cuales suben el archivo a un servidor. La app PDF Editor procesa todo en el propio dispositivo en iOS y Android, así que un documento sensible puede pasar de la captura con la cámara a un entregable firmado sin tocar ningún servidor.",
  faq: [
    {
      q: "¿Puedo hacer de verdad todas las tareas PDF habituales sin enviar nada a un servidor?",
      a: "Sí, para las tareas del día a día: comprimir, fusionar, dividir, convertir, firmar, poner marca de agua, reordenar, extraer. Las herramientas de este sitio las cubren todas en local. Algunas operaciones avanzadas (OCR completo sobre documentos largos) a veces todavía necesitan ayuda de un servidor.",
    },
    {
      q: "¿Cómo compruebo que una herramienta no envía nada a un servidor?",
      a: "Herramientas de desarrollador del navegador, pestaña de red, suelta un archivo. Si ves una solicitud POST saliente grande, se está enviando. Si no, es local. La diferencia se ve a simple vista.",
    },
    {
      q: "¿Son más lentas las herramientas locales?",
      a: "A veces. El WebAssembly moderno hace que el procesamiento local compita bien con el procesamiento en servidor para la mayoría de las tareas. Las operaciones pesadas sobre archivos grandes pueden tardar más en local, pero el intercambio en privacidad suele merecer la pena para material sensible.",
    },
    {
      q: "¿Y el OCR? ¿Puede funcionar en local?",
      a: "El OCR ligero sí; el OCR de alta precisión sobre documentos largos a menudo sigue usando procesamiento en servidor. Si el OCR te importa, elige herramientas que indiquen explícitamente dónde ocurre el procesamiento.",
    },
    {
      q: "¿No es esto una exageración?",
      a: "No para material sensible. El modelo de que todo se sube por defecto funcionaba cuando los documentos eran menos sensibles y las brechas de seguridad eran menos frecuentes. Las dos cosas han cambiado. Priorizar lo local es hoy una base sensata.",
    },
  ],
  related: [
    {
      label: "Apps PDF frente a herramientas PDF online",
      path: "/compare/pdf-app-vs-online-pdf-tools",
    },
    { label: "Seguridad PDF — protege y cifra tus documentos", path: "/pdf-security" },
    { label: "Cómo proteger tus PDF sensibles", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "Cómo compartir un PDF con privacidad", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Una organización documental sin subir nada", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "Seguridad PDF — protege y cifra tus documentos", path: "/pdf-security" },
};

export default content;
