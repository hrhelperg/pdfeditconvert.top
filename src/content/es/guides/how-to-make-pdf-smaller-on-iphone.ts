import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-make-pdf-smaller-on-iphone",
  h1: "Cómo reducir el tamaño de un PDF en iPhone",
  description:
    "Reduce un PDF en tu iPhone con una herramienta del navegador o con la app PDF Editor. Por qué los escaneos del iPhone son tan pesados y cómo bajarlos de los límites de envío.",
  updated: "2026-05-23",
  intro: [
    "Los iPhone producen archivos preciosos y enormes. La misma cámara y el mismo escáner de alta resolución que hacen que tus documentos se vean nítidos también hacen que los PDF pesen — unas pocas páginas escaneadas pueden superar un límite de correo antes de que hayas añadido nada más. Así que «reduce este PDF en mi iPhone» es una necesidad muy habitual y muy concreta.",
    "Esta guía cubre dos vías fiables que funcionan ambas en el iPhone. La primera es la herramienta gratuita Comprimir PDF en Safari, que funciona en tu dispositivo sin subir nada. La segunda es la app PDF Editor, que comprime sin conexión y gestiona archivos protegidos con contraseña que el navegador no puede.",
    "En ambos casos, el objetivo es el mismo: un archivo lo bastante pequeño para enviar por correo o subir que se siga leyendo con limpieza — sin mandar tu documento al servidor de otra persona para conseguirlo.",
  ],
  steps: [
    {
      title: "Localiza el PDF en Archivos",
      body: "Encuentra el documento en la app Archivos o donde viva — un escaneo que hiciste, un adjunto que guardaste, un lote de fotos convertido.",
    },
    {
      title: "Abre la herramienta Comprimir PDF en Safari",
      body: "Ve a la herramienta Comprimir PDF. Funciona en el navegador de tu iPhone y procesa el archivo en el dispositivo — no se sube nada.",
    },
    {
      title: "Añade el PDF y elige un nivel",
      body: "Toca para seleccionar el archivo, y elige un nivel. Recomendado sirve para la mayoría de casos; elige Fuerte solo si lo necesitas aún más pequeño.",
    },
    {
      title: "Comprime y comprueba el tamaño",
      body: "Ejecútalo y lee el tamaño antes y después. Los escaneos de iPhone suelen bajar mucho en una sola pasada porque tienen muchas imágenes.",
    },
    {
      title: "Guárdalo de nuevo en Archivos o compártelo",
      body: "Usa el icono para compartir para guardar el PDF más pequeño en Archivos o enviarlo directamente. Conserva el original hasta confirmar que el resultado se lee bien.",
    },
    {
      title: "Para archivos protegidos, usa la app",
      body: "El navegador no puede comprimir PDF protegidos con contraseña. La app PDF Editor los gestiona sin conexión, y es más rápida para archivos que comprimes a menudo.",
    },
  ],
  tips: [
    "Los escaneos del iPhone pesan porque son imágenes de alta resolución. Por eso también se comprimen tan bien — el ahorro es mayor precisamente en estos archivos.",
    "Fotografiar documentos en formato «Máxima compatibilidad» (Ajustes → Cámara → Formatos) produce archivos JPG más fáciles de comprimir y compartir que el HEIC.",
    "La compresión rasteriza las páginas, así que la copia más pequeña no tendrá texto seleccionable. Conserva el original si necesitas buscar o copiar de él.",
    "La memoria del navegador en el móvil es más limitada que en un portátil. Para PDF muy grandes, la app PDF Editor es la vía más fiable.",
    "Guarda siempre el archivo comprimido con un nombre nuevo para que tu original nítido se mantenga intacto en el dispositivo.",
  ],
  mobileNote:
    "Esta es una tarea pensada primero para el móvil, y la app PDF Editor está hecha para ella: comprime sin conexión, sin subir nada, con soporte para archivos protegidos, y entrega directa a Correo, Mensajes o el menú para compartir. Para documentos que reduces con frecuencia, es más rápida que el navegador cada vez.",
  faq: [
    {
      q: "¿Por qué mis PDF del iPhone son tan grandes?",
      a: "Los escaneos y fotos del iPhone son imágenes de alta resolución, y un PDF hecho de varias de ellas es en esencia una pila de fotos grandes. Por eso superan los límites de correo — y por eso se comprimen tan bien.",
    },
    {
      q: "¿Puedo comprimir un PDF en el iPhone sin ninguna app?",
      a: "Sí. La herramienta Comprimir PDF funciona en Safari y procesa el archivo en tu dispositivo, así que puedes reducir un PDF sin instalar nada.",
    },
    {
      q: "¿Se sube mi documento al usar la herramienta del navegador?",
      a: "No. Se procesa en local en tu iPhone. No se envía nada a ningún servidor, lo cual importa para documentos personales o financieros.",
    },
    {
      q: "¿El texto seguirá siendo seleccionable después?",
      a: "No. La compresión vuelve a renderizar las páginas como imágenes, eliminando la capa de texto seleccionable. Conserva el original si necesitas texto buscable.",
    },
    {
      q: "¿Y los PDF protegidos con contraseña?",
      a: "El navegador no puede procesarlos. Usa la app PDF Editor, que abre y comprime archivos protegidos sin conexión.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduce en tu navegador", path: "/compress-pdf" },
    { label: "Cómo reducir el tamaño de un PDF en Android", path: "/guides/how-to-make-pdf-smaller-on-android" },
    { label: "Cómo reducir el tamaño de un PDF para el correo", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Cómo editar un PDF en iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
