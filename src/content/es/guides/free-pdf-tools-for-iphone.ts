import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "free-pdf-tools-for-iphone",
  h1: "Herramientas PDF gratis para iPhone (navegador y apps)",
  description:
    "Herramientas PDF gratuitas para iPhone que funcionan de verdad sin suscripción — comprimir, firmar, escanear, convertir. Las opciones del navegador y la app PDF Editor para trabajar sin conexión.",
  updated: "2026-05-29",
  intro: [
    "El iPhone tiene un soporte de PDF integrado bastante decente — Archivos los lee, Mail los adjunta, Marcado permite anotarlos. Pero para el trabajo real con documentos que la mayoría de la gente necesita (comprimir antes de enviar, unir varios adjuntos, firmar un contrato, convertir una foto a PDF), lo que trae de serie se queda corto enseguida. La App Store llena ese hueco con cientos de apps PDF, la mayoría de las cuales bloquean funciones básicas detrás de una suscripción o de límites diarios.",
    "Las herramientas PDF de verdad gratuitas en el iPhone se dividen en dos categorías: las basadas en el navegador, que funcionan en Safari sin instalar nada, y las apps gratuitas que resuelven sus funciones principales en el propio dispositivo sin muros de pago. Las dos tienen su sitio. Las herramientas del navegador no requieren instalación; las apps nativas funcionan sin conexión y se integran con Archivos y el menú para compartir.",
    "Esta guía cubre las dos vías, eligiendo las herramientas genuinamente gratuitas para las tareas PDF del día a día en el iPhone. La preferencia va hacia las herramientas que respetan la privacidad procesando en local en el propio teléfono.",
  ],
  steps: [
    {
      title: "Usa Safari para tareas puntuales basadas en el navegador",
      body: "Comprimir PDF, Fusionar PDF, Imagen a PDF y el resto del conjunto de herramientas de este sitio funcionan en Safari sin instalar nada. El procesamiento ocurre en la pestaña del navegador del propio teléfono — sin enviar nada a ningún servidor, sin cuenta.",
    },
    {
      title: "Instala la app PDF Editor para los flujos que repites",
      body: "Para las tareas que haces con frecuencia (firmar, escanear, compartir), una app nativa es más rápida que visitar el navegador cada vez. La app PDF Editor gestiona esto sin conexión y se integra con el menú para compartir de iOS.",
    },
    {
      title: "Escanea con la app PDF Editor o con Archivos",
      body: "Archivos tiene una función básica de escanear a PDF; la app PDF Editor tiene una detección de bordes más precisa y una mejor gestión de varias páginas. Las dos son gratuitas para el flujo de escaneo.",
    },
    {
      title: "Firma en Marcado para casos rápidos, en la app PDF Editor para firmas de verdad",
      body: "Marcado sirve para un garabato rápido en un formulario de una página. Para contratos, el flujo de firma de la app PDF Editor produce una firma más cuidada que se sostiene mejor en un contexto formal.",
    },
    {
      title: "Convierte fotos a PDF con Imagen a PDF en Safari",
      body: "Imagen a PDF en el navegador del iPhone combina fotos y capturas de pantalla en un único PDF, incluyendo la gestión del formato HEIC. No hace falta instalar ninguna app para esto.",
    },
    {
      title: "Comprime antes de enviar desde el menú para compartir",
      body: "Comprimir PDF en Safari o en la app PDF Editor reduce los archivos para los límites de adjuntos del correo y de los portales. Los escaneos del iPhone pesan mucho enseguida; comprimir antes de enviar evita el rebote.",
    },
  ],
  tips: [
    "El menú para compartir del iPhone es el punto de integración de las apps PDF. Elige herramientas que aparezcan en «compartir con» para un flujo más fluido.",
    "Las fotos en HEIC necesitan conversión antes de compartirlas con destinatarios fuera del ecosistema Apple. La app PDF Editor y las herramientas del navegador lo gestionan de forma transparente.",
    "No firmes nada importante en Marcado si vas a enviarlo fuera — la firma se ve poco cuidada. Usa una herramienta de firma en condiciones para los contratos.",
    "Las herramientas del navegador funcionan en Safari, pero también en Chrome y Firefox en el iPhone si lo prefieres. La arquitectura es la misma.",
    "Sincroniza la carpeta /Archivos con iCloud si trabajas con PDF entre varios dispositivos. La app PDF Editor guarda primero en local; tú decides si se sincronizan.",
  ],
  mobileNote:
    "La app PDF Editor es el complemento recomendado de las herramientas del navegador en el iPhone — cubre los casos sin conexión y los integrados con el menú para compartir que las herramientas puramente del navegador no cubren. Gratuita para los flujos principales, sin necesidad de cuenta.",
  faq: [
    {
      q: "¿Bastan las herramientas PDF integradas del iPhone?",
      a: "Para leer y anotar de forma básica, sí. Para comprimir, unir, firmar de verdad y convertir, necesitarás herramientas adicionales — basadas en el navegador o en una app.",
    },
    {
      q: "¿Se mantienen gratis de verdad las apps PDF gratuitas del iPhone?",
      a: "Algunas sí, otras no. La app PDF Editor mantiene gratuitos sus flujos principales. Muchas apps PDF de la App Store bloquean funciones básicas detrás de una suscripción.",
    },
    {
      q: "¿Debería firmar contratos desde el iPhone?",
      a: "Sí, es cada vez más habitual. Las firmas dibujadas con el dedo son lo bastante legibles como para parecer cuidadas. Usa una herramienta de firma de verdad, no Marcado, para los contratos.",
    },
    {
      q: "¿Puedo escanear desde el iPhone en vez de usar un escáner de mesa?",
      a: "Para documentos normales, sí. El flujo de escaneo con la cámara del móvil en PDF Editor o en Archivos produce resultados comparables a un escáner de mesa para la calidad habitual de un documento.",
    },
    {
      q: "¿Y el HEIC?",
      a: "El HEIC es el formato por defecto del iPhone y no lo admite todo el mundo fuera de ese ecosistema. Conviértelo a JPG o PDF antes de compartirlo con destinatarios que no usan dispositivos Apple.",
    },
  ],
  related: [
    { label: "Herramientas PDF — en el navegador, sin subir nada", path: "/pdf-tools" },
    { label: "Las mejores herramientas PDF gratis", path: "/guides/best-free-pdf-tools" },
    { label: "Herramientas PDF gratis para Android", path: "/guides/free-pdf-tools-for-android" },
    { label: "Cómo hacer un PDF más pequeño en el iPhone", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
  ],
  parentHub: { label: "Herramientas PDF — gratis, en el navegador", path: "/pdf-tools" },
};

export default content;
