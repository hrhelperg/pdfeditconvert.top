import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-compression-settings",
  h1: "Mejores ajustes de compresión PDF — guía de decisión",
  description:
    "¿Qué nivel de compresión usar para correo, impresión, archivo o web? Una tabla práctica que relaciona cada ajuste con su uso, con los compromisos explicados sin rodeos.",
  updated: "2026-05-23",
  intro: [
    "No existe un único ajuste de compresión «mejor» — solo existe el mejor ajuste para lo que vas a hacer con el archivo. El nivel perfecto para enviar un recibo por correo arruinaría un documento que va camino de la imprenta. Así que, en vez de un número mágico, lo que necesitas es una forma rápida de relacionar el ajuste con el uso.",
    "Esta guía es esa tabla de decisión. Relaciona los niveles de la herramienta gratuita Comprimir PDF — Bajo, Recomendado y Fuerte — con las situaciones en las que cada uno tiene sentido, y explica el compromiso detrás de cada elección. La herramienta funciona en tu navegador sin enviar nada a ningún servidor, y muestra el ahorro de tamaño para que confirmes tu elección.",
    "Léela una vez y dejarás de adivinar: sabrás qué nivel elegir en el momento en que veas para qué es el documento.",
  ],
  steps: [
    {
      title: "Para adjuntos de correo: Recomendado",
      body: "El punto óptimo por defecto. Supera el límite de 25 MB de Gmail y los ~20 MB de Outlook en la mayoría de los archivos, manteniendo el documento cómodamente legible en pantalla.",
    },
    {
      title: "Para portales de subida con límites ajustados: Fuerte",
      body: "Los portales de administraciones públicas y de recursos humanos suelen limitar a pocos megabytes. Fuerte te lleva hasta ahí. Los documentos escaneados lo aguantan bien; comprueba que los documentos diseñados siguen siendo aceptables.",
    },
    {
      title: "Para impresión o archivo formal: Bajo",
      body: "Cuando el archivo se vaya a imprimir o se conserve como registro de calidad, usa Bajo para preservar el máximo detalle. Comprime solo si el archivo realmente necesita ser más pequeño.",
    },
    {
      title: "Para archivo a largo plazo: mínimo o ninguno",
      body: "Los archivos históricos deben priorizar la fidelidad sobre el tamaño. Comprime poco o nada, y conserva un original sin comprimir — siempre puedes reducir una copia más tarde, pero no puedes recuperar un detalle perdido.",
    },
    {
      title: "Para web y visualización solo en pantalla: de Recomendado a Fuerte",
      body: "Los documentos que solo se van a leer en pantalla toleran una compresión más agresiva. Inclínate hacia Fuerte para descargas web que carguen rápido, donde la calidad de impresión no importa.",
    },
    {
      title: "Confirma con el tamaño antes y después",
      body: "Elijas lo que elijas, la herramienta muestra el ahorro. Si un nivel más suave ya cumple tu objetivo, quédate con él — no hay premio por comprimir de más.",
    },
  ],
  tips: [
    "Primero el uso, después el ajuste. Decide qué va a pasar con el archivo y después elige el nivel — no al revés.",
    "Los documentos escaneados toleran ajustes más fuertes que los documentos diseñados. El mismo nivel Fuerte que va bien en un formulario escaneado puede suavizar demasiado un folleto lleno de fotos.",
    "Todos los niveles rasterizan las páginas y eliminan el texto seleccionable. Si el documento debe seguir siendo buscable, eso condiciona tu elección tanto como el tamaño.",
    "Los PDF con mucho texto y vectores apenas se reducen con cualquier ajuste — hay poca imagen que comprimir, así que no esperes que Fuerte haga milagros.",
    "Conserva un original sin comprimir de todo lo que sea importante. La compresión no tiene vuelta atrás; el original te permite volver a generar cualquier tamaño que necesites más adelante.",
  ],
  mobileNote:
    "La app PDF Editor hace fácil relacionar el ajuste con el uso estando fuera de casa: comprime sin conexión, previsualiza el resultado y ajusta el nivel antes de compartir. También admite archivos protegidos y mantiene todo en el dispositivo.",
  faq: [
    {
      q: "¿Cuál es el mejor ajuste de compresión en general?",
      a: "No hay uno solo — depende del uso. Recomendado sirve para el correo, Fuerte sirve para límites de subida ajustados y archivos solo para pantalla, y Bajo (o sin compresión) sirve para impresión y archivo.",
    },
    {
      q: "¿Qué ajuste es mejor para enviar un PDF por correo?",
      a: "Recomendado. Supera los límites típicos de correo de 20–25 MB en la mayoría de los archivos, manteniendo el documento legible. Pasa a Fuerte solo si sigues por encima.",
    },
    {
      q: "¿Qué debo usar para un documento que voy a imprimir?",
      a: "Bajo, o directamente sin compresión. La impresión necesita detalle, así que preserva la calidad y reduce el archivo solo si de verdad es demasiado grande para manejarlo.",
    },
    {
      q: "¿Los ajustes más fuertes eliminan el texto buscable?",
      a: "Todos los niveles vuelven a renderizar las páginas como imágenes, lo que elimina el texto seleccionable. Si el documento debe seguir siendo buscable, conserva el original al margen del nivel que elijas.",
    },
    {
      q: "¿Por qué Fuerte no redujo mucho mi PDF de texto?",
      a: "La compresión actúa sobre los datos de imagen. Un PDF solo de texto o vectores tiene poco que comprimir, así que incluso Fuerte produce un ahorro pequeño. Ese archivo es grande por otro motivo.",
    },
  ],
  related: [
    { label: "Comprimir PDF — elige tu nivel", path: "/compress-pdf" },
    { label: "Cómo comprimir un PDF sin perder demasiada calidad", path: "/guides/compress-pdf-without-losing-too-much-quality" },
    { label: "Cómo comprimir un PDF escaneado", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Cómo reducir un PDF antes de subirlo", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
