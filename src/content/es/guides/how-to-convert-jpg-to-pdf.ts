import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-jpg-to-pdf",
  h1: "Cómo convertir un JPG a PDF — de imagen a documento",
  description:
    "Reúne una o varias fotos JPG en un solo PDF en tu navegador. Ideal para recibos, DNI y documentos fotografiados, con notas honestas sobre calidad y el HEIC del iPhone.",
  updated: "2026-05-23",
  intro: [
    "JPG es el formato que te entrega tu cámara y la mayoría de webs, lo que lo convierte en el punto de partida más habitual para «convertir esto en un PDF». El motivo para convertir suele ser siempre el mismo: un solo JPG es incómodo de enviar como documento. Varios JPG son peores todavía — cinco fotos de recibos por separado en un correo es algo que una gestoría agradece en silencio que no le manden. Un PDF, con las páginas en orden, es lo que la gente de verdad quiere recibir.",
    "Esta guía usa la herramienta gratuita Imagen a PDF, que combina archivos JPG en un solo PDF directamente en tu navegador — no se sube nada. Es ideal para recibos, fotos de DNI, capturas de pantalla y fotografías de documentos en papel que necesitas agrupar y enviar.",
    "JPG es un formato fotográfico con pérdida, así que conviene saber qué se traslada bien y qué no antes de confiar en él para algo que necesite ser legible.",
  ],
  steps: [
    {
      title: "Abre la herramienta Imagen a PDF",
      body: "Ve a la herramienta Imagen a PDF en tu navegador. Acepta JPG, PNG y WebP y funciona por completo en tu dispositivo — sin envíos, sin cuenta.",
    },
    {
      title: "Añade tus archivos JPG",
      body: "Arrastra tus fotos a la zona de soltar o haz clic para elegirlas. Añade las que necesites; cada imagen se convierte en una página del PDF.",
    },
    {
      title: "Ponlas en el orden correcto",
      body: "Usa las flechas arriba y abajo de cada fila para ordenar las páginas. Para un documento de varias páginas, este es el paso que más importa — la página dos de un contrato detrás de la página uno.",
    },
    {
      title: "Crea el PDF",
      body: "Haz clic en Crear PDF. Cada imagen se coloca en su propia página ajustada a la foto, y el archivo combinado se genera en local.",
    },
    {
      title: "Descarga y renombra",
      body: "El PDF se descarga automáticamente. Ponle un nombre descriptivo antes de enviarlo — «Recibos-Marzo.pdf» funciona mejor que «IMG_4821.pdf» en la bandeja de entrada de alguien.",
    },
    {
      title: "Comprímelo si va a ir por correo",
      body: "Los PDF hechos de fotos crecen rápido. Si el archivo supera el típico límite de adjunto de 25 MB, pásalo por la herramienta Comprimir PDF antes de enviarlo.",
    },
  ],
  tips: [
    "Recorta y endereza cada foto antes de convertir. La herramienta ajusta las páginas a la imagen, así que una foto torcida significa una página torcida.",
    "Una luz buena y uniforme gana a cualquier filtro para fotos de documentos. Evita las sombras de tu propia mano o del móvil sobre la página.",
    "JPG comprime bien las fotos, pero difumina el texto fino y los bordes nítidos. Para capturas de pantalla o cualquier cosa con letras precisas, el PNG mantiene el texto más limpio — consulta la guía de PNG a PDF.",
    "Las fotos del iPhone suelen guardarse como HEIC, no como JPG. La herramienta de navegador necesita JPG, PNG o WebP, así que cambia la cámara a «Máxima compatibilidad» en Ajustes, o usa la app PDF Editor, que lee el HEIC directamente.",
    "Una foto de un documento no es un escaneo buscable — no hay capa de texto, así que no puedes buscar ni copiar las palabras. Usa un flujo de escaneo si eso te importa.",
  ],
  mobileNote:
    "La mayoría de los JPG nacen en un móvil, que es justo donde brilla la app PDF Editor: saca las fotos directamente de tu carrete (HEIC incluido), las convierte en un PDF, y puede escanear páginas nuevas con detección de bordes — sin necesidad de pasar por el ordenador.",
  faq: [
    {
      q: "¿Puedo combinar varios JPG en un solo PDF?",
      a: "Sí — ese es el uso principal. Añade todas tus imágenes, arrástralas hasta el orden que quieras, y se convierten en páginas consecutivas de un único PDF.",
    },
    {
      q: "¿Se suben mis fotos a algún sitio?",
      a: "No. La conversión se ejecuta en tu navegador, en tu propio dispositivo. Tus imágenes nunca salen de él, lo cual importa para documentos de identidad y documentos personales.",
    },
    {
      q: "Mis fotos del iPhone no cargan — ¿por qué?",
      a: "Probablemente son archivos HEIC, que la herramienta de navegador no lee. Cambia el formato de la cámara a «Máxima compatibilidad» en Ajustes → Cámara → Formatos, o usa la app PDF Editor, que gestiona el HEIC.",
    },
    {
      q: "¿Será buscable el PDF?",
      a: "No. Una foto convertida es una imagen sin capa de texto, así que las palabras no se pueden buscar ni seleccionar. Para un documento buscable, escanea con reconocimiento de texto usando la app PDF Editor.",
    },
    {
      q: "¿Por qué mi PDF pesa tanto?",
      a: "Las fotos de móvil en alta resolución pesan mucho, y varias juntas suman rápido. Pasa el resultado por la herramienta Comprimir PDF para que quede dentro de los límites de correo y de subida.",
    },
  ],
  related: [
    { label: "Imagen a PDF — combina JPG en tu navegador", path: "/image-to-pdf" },
    { label: "Comprimir PDF — reduce el resultado para el correo", path: "/compress-pdf" },
    { label: "Cómo convertir PNG a PDF", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "Cómo convertir fotos a PDF en iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Convertidor de PDF", path: "/pdf-converter" },
};

export default content;
