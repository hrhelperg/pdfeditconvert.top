import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-android",
  h1: "Cómo reducir el tamaño de un PDF en Android",
  description:
    "Comprime un PDF en cualquier Android con una herramienta del navegador que no necesita instalación, o con la app PDF Editor. Baja de los límites de correo y de subida.",
  updated: "2026-05-23",
  intro: [
    "Android gestiona los PDF de forma distinta según el móvil — Samsung, Pixel y Xiaomi esconden los ajustes relevantes en sitios distintos — pero la necesidad es universal: un PDF escaneado o cargado de fotos pesa demasiado para el correo o para subirlo, y quieres reducirlo. La solución más fiable no depende en absoluto de la marca de tu móvil.",
    "Esta guía usa la herramienta gratuita Comprimir PDF, que funciona en tu navegador en cualquier dispositivo Android y procesa el archivo en local — no se sube nada. También cubre la app PDF Editor para el uso sin conexión y para los archivos protegidos con contraseña que el navegador no puede tocar.",
    "Como la vía del navegador es idéntica en todos los móviles Android, es el método que conviene recordar si cambias de dispositivo o ayudas a alguien con otra marca.",
  ],
  steps: [
    {
      title: "Localiza el PDF",
      body: "Encuentra el documento en tu app Archivos, en Descargas, o donde se guardara — un escaneo, un adjunto guardado, un conjunto de fotos convertido.",
    },
    {
      title: "Abre la herramienta Comprimir PDF",
      body: "Ve a la herramienta Comprimir PDF en Chrome o en tu navegador. Funciona igual en todos los móviles Android y procesa el archivo en tu dispositivo — sin subida, sin cuenta.",
    },
    {
      title: "Añade el PDF y elige un nivel",
      body: "Selecciona el archivo y elige un nivel: Recomendado para la mayoría de casos, Fuerte si lo necesitas más pequeño. Bajo conserva el máximo detalle.",
    },
    {
      title: "Comprime y revisa",
      body: "Ejecútalo y comprueba el tamaño antes y después. Los PDF cargados de imágenes o escaneados suelen bajar de forma drástica en una sola pasada.",
    },
    {
      title: "Guarda o comparte el resultado",
      body: "Guarda el archivo más pequeño en tu dispositivo o compártelo directamente por correo o una app de chat. Conserva el original hasta confirmar que la copia se lee bien.",
    },
    {
      title: "Usa la app para archivos protegidos o grandes",
      body: "El navegador no puede comprimir PDF protegidos con contraseña y puede tener dificultades con archivos muy grandes. La app PDF Editor gestiona ambos casos sin conexión.",
    },
  ],
  tips: [
    "El método del navegador se comporta de forma idéntica en Samsung, Pixel, Xiaomi y el resto, así que es el que merece la pena recordar entre dispositivos.",
    "Si un PDF es enorme, casi seguro que son las páginas escaneadas o fotografiadas. Son exactamente lo que mejor se comprime.",
    "La compresión rasteriza las páginas, así que la copia más pequeña pierde el texto seleccionable. Conserva el original si necesitas buscar o copiar de él.",
    "Algunas cámaras Android guardan en HEIF en modo de alta eficiencia; los escaneos en JPG estándar son más fáciles de comprimir y compartir ampliamente.",
    "Guarda el PDF comprimido con un nombre nuevo para que el original nítido permanezca en el dispositivo.",
  ],
  mobileNote:
    "Comprimir en el móvil es lo que de verdad quieren los usuarios de Android, y la app PDF Editor lo hace sin conexión y sin subir nada, admite archivos protegidos con contraseña, y comparte directamente con tus apps. Para documentos que reduces a menudo, gana a volver a abrir el navegador cada vez.",
  faq: [
    {
      q: "¿Funciona el método del navegador en cualquier móvil Android?",
      a: "Sí. Como la herramienta Comprimir PDF se ejecuta en el navegador, se comporta igual en Samsung, Pixel, Xiaomi y cualquier otro dispositivo Android — a diferencia de las funciones integradas, que varían según la marca.",
    },
    {
      q: "¿Puedo comprimir un PDF en Android sin instalar nada?",
      a: "Sí. La herramienta Comprimir PDF funciona en tu navegador y procesa el archivo en tu dispositivo, así que no hace falta instalar nada.",
    },
    {
      q: "¿Se sube mi archivo?",
      a: "No. La compresión ocurre en local en tu móvil; no se envía nada a ningún servidor, lo cual importa para documentos personales.",
    },
    {
      q: "¿El texto seguirá siendo seleccionable?",
      a: "No. Las páginas se vuelven a renderizar como imágenes durante la compresión, lo que elimina la capa de texto seleccionable. Conserva el original si lo necesitas.",
    },
    {
      q: "¿Cómo comprimo un PDF protegido con contraseña en Android?",
      a: "El navegador no puede procesar archivos protegidos. Usa la app PDF Editor, que los abre y comprime sin conexión.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduce en tu navegador", path: "/compress-pdf" },
    { label: "Cómo reducir el tamaño de un PDF en iPhone", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
    { label: "Cómo reducir el tamaño de un PDF para el correo", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Cómo editar un PDF en Android", path: "/guides/how-to-edit-pdf-on-android" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
