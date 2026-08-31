import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-large-pdf-files",
  h1: "Cómo enviar un PDF pesado (5 formas fiables)",
  description:
    "Cinco formas fiables de enviar un PDF demasiado pesado para el correo — comprimir, dividir, enlaces en la nube y más — y cómo elegir entre ellas.",
  updated: "2026-05-23",
  intro: [
    "El correo es donde los PDF pesados rebotan. Los límites son reales e implacables — 25 MB en Gmail, unos 20 MB en Outlook, a veces menos por parte del destinatario — y un documento lleno de escaneos los supera con facilidad. La solución no es un único truco: es conocer el puñado de opciones fiables y saber cuál encaja con tu archivo y con quien lo recibe.",
    "Esta guía plantea las rutas prácticas, más o menos en el orden en que conviene probarlas: reducirlo, dividirlo o compartir un enlace. Dos de ellas usan herramientas gratuitas en el navegador que funcionan en tu dispositivo sin enviar nada a ningún servidor; la tercera consiste en elegir un método de compartición acorde con la sensibilidad del documento.",
    "El objetivo es un archivo que llegue íntegro y legible, sin que estropees su calidad ni acabes compartiéndolo de más a través de un servicio del que no te fías.",
  ],
  steps: [
    {
      title: "Primero, intenta comprimirlo",
      body: "Pasa el archivo por la herramienta Comprimir PDF. Los escaneos y los PDF con muchas imágenes suelen bajar del límite del correo en una sola pasada, que es la solución más sencilla posible.",
    },
    {
      title: "Si sigue siendo demasiado pesado, divídelo",
      body: "Usa la herramienta Dividir PDF para enviar el documento en dos o tres archivos más pequeños. Dos mitades legibles superan a un archivo comprimido hasta la ilegibilidad.",
    },
    {
      title: "Para archivos muy pesados, comparte un enlace en la nube",
      body: "Súbelo a un servicio en la nube que controles y envía un enlace. Esto esquiva del todo los límites del correo y te permite revocar el acceso más adelante — pero elige un servicio de confianza si el documento es sensible.",
    },
    {
      title: "Comprueba el límite del destinatario, no solo el tuyo",
      body: "Tu proveedor puede permitir un envío de 25 MB mientras el suyo rechaza cualquier cosa por encima de 10 MB. Si tienes dudas, apunta bajo o usa un enlace.",
    },
    {
      title: "Confirma que lo que envías tiene el tamaño correcto y está limpio",
      body: "Elijas la ruta que elijas, abre primero el archivo final — páginas correctas, calidad legible, nada que no debiera estar ahí.",
    },
  ],
  tips: [
    "Trabaja en orden: comprime, luego divide, luego enlaza. Cada paso cuesta más esfuerzo que el anterior, así que para en cuanto el archivo se pueda enviar.",
    "Un enlace en la nube suele ser la respuesta honesta para archivos genuinamente enormes — pero para documentos confidenciales, elige un servicio de confianza y revoca el acceso cuando ya no haga falta.",
    "La compresión rasteriza las páginas y elimina el texto seleccionable. Si el destinatario necesita copiar texto, envía el original a través de un enlace en vez de un adjunto muy comprimido.",
    "Dividir por límites naturales (capítulos, secciones, firmado frente a sin firmar) es más útil para el destinatario que dividir por una página arbitraria.",
    "No envíes documentos sensibles a un servicio gratuito de terceros para «archivos pesados» que no conoces de nada solo por superar un límite de tamaño — eso cambia una pequeña molestia por un riesgo real para tu privacidad.",
  ],
  mobileNote:
    "Cuando el archivo demasiado pesado está en tu móvil, la app PDF Editor comprime y divide sin conexión y entrega el resultado directamente a tu app de correo o mensajería — así puedes enviar un escaneo grande desde donde estés sin subirlo antes a un servicio desconocido.",
  faq: [
    {
      q: "¿Cuál es la forma más fácil de enviar un PDF demasiado pesado?",
      a: "Comprímelo primero. Los escaneos y los PDF con muchas imágenes suelen bajar del límite del correo en una sola pasada, lo que evita dividir o usar enlaces.",
    },
    {
      q: "¿Cuándo debería dividir en vez de comprimir?",
      a: "Cuando la compresión sola no puede reducir el archivo lo suficiente sin arruinar la calidad. Dos o tres archivos legibles son mejor que uno degradado.",
    },
    {
      q: "¿Son seguros los enlaces en la nube para documentos sensibles?",
      a: "Pueden serlo, si usas un servicio de confianza y revocas el acceso al terminar. Evita servicios gratuitos y desconocidos de «archivos grandes» para cualquier cosa confidencial.",
    },
    {
      q: "¿Cómo sé que el destinatario puede recibirlo?",
      a: "Su límite puede ser más bajo que el tuyo. Si tienes dudas, comprime bien por debajo de 10 MB o envía un enlace en vez de arriesgarte a un rebote silencioso.",
    },
    {
      q: "¿Comprimir para enviarlo dañará el documento?",
      a: "Es una compresión con pérdida que elimina el texto seleccionable. Para documentos donde la calidad o el texto buscable importan, comparte el original a través de un enlace en vez de comprimirlo hasta reventar en un adjunto.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduce para enviar", path: "/compress-pdf" },
    { label: "Dividir PDF — envíalo por partes", path: "/split-pdf" },
    { label: "Cómo reducir el tamaño de un PDF para el correo", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Cómo compartir un PDF desde el móvil", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
