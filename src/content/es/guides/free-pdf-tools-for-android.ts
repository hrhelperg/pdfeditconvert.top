import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "free-pdf-tools-for-android",
  h1: "Herramientas PDF gratis para Android (navegador y apps)",
  description:
    "Herramientas PDF gratuitas para Android elegidas para las tareas del día a día: comprimir, firmar, escanear, convertir. Las vías del navegador y la app PDF Editor para usar sin conexión.",
  updated: "2026-05-29",
  intro: [
    "El soporte de PDF integrado en Android varía mucho según el fabricante. Algunas capas de fábrica incluyen escaneo a PDF, firma o incluso una edición básica; otras casi no tienen nada más allá de un visor de solo lectura. Google Play está lleno de apps PDF, pero las que de verdad son gratuitas — que resuelven sus funciones principales sin suscripción, sin límites diarios, sin insistir en actualizarte — son una lista más corta de lo que sugieren los resultados de búsqueda.",
    "Hay dos vías realistas para trabajar gratis con PDF en Android: las herramientas basadas en el navegador en Chrome (o cualquier navegador moderno de Android) y las apps gratuitas que resuelven sus funciones principales en el propio dispositivo. Las herramientas del navegador funcionan sin instalar nada; las apps se integran con el menú para compartir y funcionan sin conexión. Las dos tienen su sitio; la mayoría de los usuarios de Android se benefician de combinar ambas.",
    "Esta guía cubre las dos vías, eligiendo las herramientas que de verdad se ganan la etiqueta de gratuitas. La preferencia va hacia las herramientas que respetan la privacidad procesando en local en el propio teléfono.",
  ],
  steps: [
    {
      title: "Usa Chrome para tareas puntuales basadas en el navegador",
      body: "Comprimir PDF, Fusionar PDF, Imagen a PDF y el resto del conjunto de herramientas del navegador de este sitio funcionan en Chrome en Android. No hace falta instalar nada, el procesamiento ocurre en tu propio dispositivo.",
    },
    {
      title: "Instala la app PDF Editor para los flujos que repites",
      body: "Para las tareas que haces a menudo (firmar, escanear, compartir), una app nativa es más rápida que visitar el navegador cada vez. La app PDF Editor gestiona esto sin conexión y se integra con el menú para compartir de Android.",
    },
    {
      title: "Escanea con la app PDF Editor o con el escáner de fábrica",
      body: "Muchos fabricantes de Android incluyen una función de escanear a PDF en su app de cámara o de notas de serie. La app PDF Editor ofrece una experiencia de escaneo uniforme entre fabricantes, con detección de bordes y gestión de varias páginas.",
    },
    {
      title: "Firma con la app PDF Editor",
      body: "Android no tiene un equivalente universal a Marcado para firmar. La app PDF Editor captura firmas dibujadas y las aplica a los PDF sin conexión.",
    },
    {
      title: "Convierte fotos a PDF con Imagen a PDF en el navegador",
      body: "Imagen a PDF en Chrome combina fotos en un único PDF. Funciona con el JPG y el PNG estándar que producen las cámaras de Android; no hace falta instalar nada.",
    },
    {
      title: "Comprime antes de compartir desde el menú correspondiente",
      body: "Los escaneos en Android pesan mucho enseguida. Comprimir PDF en Chrome o en la app PDF Editor reduce los archivos para los límites de adjuntos del correo y de los portales antes de compartirlos.",
    },
  ],
  tips: [
    "El menú para compartir de Android es el punto de integración de las apps PDF. Elige herramientas que aparezcan en «compartir con» para un flujo más fluido.",
    "La calidad de las apps PDF de fábrica varía mucho. La app PDF Editor ofrece una experiencia uniforme en Samsung, Google, OnePlus y otros fabricantes.",
    "Las herramientas basadas en el navegador funcionan en cualquier navegador de Android — Chrome, Firefox, Brave, Samsung Internet. La arquitectura es la misma.",
    "No pagues por funciones Pro de apps PDF sin comprobar antes las alternativas gratuitas — la mayoría de esas funciones Pro ya las cubren herramientas gratuitas.",
    "Organizar bien la carpeta de Archivos ayuda porque el sistema de archivos de Android es más navegable que el de iOS. Crea /Documents/PDFs/ desde el principio y úsala.",
  ],
  mobileNote:
    "La app PDF Editor es el complemento recomendado de las herramientas del navegador en Android — cubre los casos sin conexión y los integrados con el menú para compartir que las herramientas puramente del navegador no cubren. Gratuita para los flujos principales, sin necesidad de cuenta.",
  faq: [
    {
      q: "¿Tiene Android herramientas PDF integradas?",
      a: "Varía según el fabricante. Algunos incluyen escaneo, firma y edición básica; otros no. De forma universal, Android trae un visor de PDF básico y poco más sin herramientas adicionales.",
    },
    {
      q: "¿Son de fiar las apps PDF de Google Play?",
      a: "Es variado. Algunas están bien hechas y son de verdad gratuitas; otras tienen un bloqueo freemium agresivo o problemas de privacidad. La app PDF Editor y las herramientas basadas en el navegador de este sitio son opciones fiables.",
    },
    {
      q: "¿Debería firmar contratos desde Android?",
      a: "Sí — las firmas dibujadas con el dedo o con un lápiz óptico son algo normal en los flujos de trabajo actuales. Usa una herramienta de firma de verdad que produzca una firma cuidada.",
    },
    {
      q: "¿Puedo escanear desde Android en vez de usar un escáner de mesa?",
      a: "Para documentos normales, sí. El escaneo con la cámara del móvil y detección de bordes produce resultados comparables a un escáner de mesa para las necesidades habituales de un documento.",
    },
    {
      q: "¿Para qué sirve la integración con el menú para compartir?",
      a: "Te permite enviar un PDF desde cualquier app (correo, navegador, gestor de archivos) directamente a una herramienta PDF. Las apps que aparecen en el menú para compartir encajan de forma natural en el flujo habitual de Android.",
    },
  ],
  related: [
    { label: "Herramientas PDF — en el navegador, sin subir nada", path: "/pdf-tools" },
    { label: "Las mejores herramientas PDF gratis", path: "/guides/best-free-pdf-tools" },
    { label: "Herramientas PDF gratis para iPhone", path: "/guides/free-pdf-tools-for-iphone" },
    { label: "Cómo hacer un PDF más pequeño en Android", path: "/guides/how-to-make-pdf-smaller-on-android" },
  ],
  parentHub: { label: "Herramientas PDF — gratis, en el navegador", path: "/pdf-tools" },
};

export default content;
