import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-iphone",
  h1: "Cómo convertir fotos a PDF en iPhone (y arreglar el HEIC)",
  description:
    "Reúne tus fotos del iPhone en un solo PDF, incluido el formato HEIC que tanto lío causa. La vía del navegador y la vía más rápida desde la app.",
  updated: "2026-05-23",
  intro: [
    "Convertir fotos en un PDF en un iPhone es algo a lo que la gente recurre constantemente — un contrato fotografiado, un montón de recibos para una nota de gastos, las dos caras de un documento de identidad para un formulario. La tarea es sencilla, pero hay un detalle propio del iPhone que causa la mayoría de la frustración: por defecto, el iPhone guarda las fotos como HEIC, no como JPG, y muchas herramientas no leen HEIC.",
    "Esta guía cubre dos vías fiables. La primera usa la herramienta gratuita Imagen a PDF en Safari, que funciona en cuanto tus fotos están en un formato admitido. La segunda usa la app PDF Editor, que lee el HEIC directamente desde tu carrete y se salta por completo el baile de formatos.",
    "Elige la que mejor encaje en cada momento — pero conoce primero el detalle del HEIC, porque es lo que convierte una tarea de 30 segundos en una confusa.",
  ],
  steps: [
    {
      title: "Decide el formato de tus fotos",
      body: "Abre Ajustes → Cámara → Formatos. «Alta eficiencia» guarda en HEIC; «Máxima compatibilidad» guarda en JPG. Cambiar a Máxima compatibilidad hace que las fotos nuevas funcionen en todas partes, incluidas las herramientas de navegador.",
    },
    {
      title: "Convierte las fotos HEIC que ya tengas si hace falta",
      body: "¿Ya las hiciste en HEIC? O bien las vuelves a exportar como JPG (ábrelas en Fotos, comparte, elige una opción que produzca JPG), o pasas directamente a la vía de la app que se explica más abajo, que lee el HEIC directamente.",
    },
    {
      title: "Abre la herramienta Imagen a PDF en Safari",
      body: "Ve a la herramienta Imagen a PDF. Acepta JPG, PNG y WebP y funciona por completo en tu dispositivo — no se sube nada.",
    },
    {
      title: "Añade tus fotos y ordénalas",
      body: "Toca para elegir fotos de tu biblioteca y usa las flechas para secuenciarlas. El orden de las páginas importa para documentos de varias páginas, como un contrato de dos hojas.",
    },
    {
      title: "Crea y guarda el PDF",
      body: "Toca Crear PDF. Cuando se descargue, usa el icono para compartir y guárdalo en la app Archivos o envíalo directamente.",
    },
    {
      title: "O usa la app PDF Editor para HEIC y escaneo",
      body: "La app lee las fotos HEIC de tu carrete, las convierte en un PDF, y también puede capturar páginas nuevas con detección de bordes — sin necesidad de convertir el formato.",
    },
  ],
  tips: [
    "La causa número uno de que «mis fotos no se conviertan» en el iPhone es el HEIC. Cambia a Máxima compatibilidad, o usa la app, y el problema desaparece.",
    "Recorta cada foto en la app Fotos antes de convertir — la página se ajusta al tamaño de la imagen, así que recortar el fondo da un documento más ordenado.",
    "Para recibos y documentos de identidad, dispara sobre una superficie oscura y plana con luz uniforme. Los reflejos y las sombras son más difíciles de corregir que de evitar.",
    "Una foto convertida en PDF no es un escaneo buscable. Si necesitas buscar el texto, usa la función de escaneo de la app, que puede reconocer texto.",
    "Si el PDF resultante es demasiado grande para el correo, pásalo por la herramienta Comprimir PDF — las fotos de móvil producen páginas pesadas.",
  ],
  mobileNote:
    "Todo este flujo vive en tu móvil, que es justo para lo que está pensada la app PDF Editor: HEIC directamente del carrete, conversión en el dispositivo sin subir nada, más escaneo y firma en el mismo sitio. Para cualquier cosa que hagas más de una vez, es la vía más rápida.",
  faq: [
    {
      q: "¿Por qué no cargan mis fotos del iPhone en el conversor?",
      a: "Están guardadas como HEIC, que la mayoría de herramientas de navegador no leen. Cambia a «Máxima compatibilidad» en Ajustes → Cámara → Formatos para las fotos nuevas, o usa la app PDF Editor, que lee el HEIC directamente.",
    },
    {
      q: "¿Puedo combinar varias fotos en un solo PDF?",
      a: "Sí. Añádelas todas, arrástralas hasta el orden que quieras, y cada foto se convierte en una página de un único PDF.",
    },
    {
      q: "¿Se suben mis fotos a un servidor?",
      a: "No. La herramienta de navegador procesa todo en tu dispositivo, y la app también. Tus fotos se mantienen privadas — importante para documentos de identidad y documentos personales.",
    },
    {
      q: "¿Será buscable el PDF?",
      a: "No a partir de una foto sencilla — no hay capa de texto. Usa la función de escaneo de la app PDF Editor para producir un documento con texto reconocido y buscable.",
    },
    {
      q: "El PDF es demasiado grande para enviarlo por correo — ¿qué hago?",
      a: "Las fotos del iPhone en alta resolución producen páginas grandes. Pasa el archivo por la herramienta Comprimir PDF para que quede dentro del límite de adjuntos.",
    },
  ],
  related: [
    { label: "Imagen a PDF — convierte fotos en tu navegador", path: "/image-to-pdf" },
    { label: "Escanear a PDF — captura papel con la cámara", path: "/scan-to-pdf" },
    { label: "Cómo convertir fotos a PDF en Android", path: "/guides/how-to-convert-photos-to-pdf-on-android" },
    { label: "Cómo convertir JPG a PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "Convertidor de PDF", path: "/pdf-converter" },
};

export default content;
