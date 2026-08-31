import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-pdf-from-camera",
  h1: "Cómo crear un PDF con la cámara del móvil",
  description:
    "Convierte una foto en un PDF, y entiende por qué un escaneo de verdad supera a una foto suelta. Captura rápida para recibos y pizarras, escaneo para documentos.",
  updated: "2026-05-23",
  intro: [
    "Apuntar la cámara a algo y obtener un PDF es la forma más rápida de capturar el mundo físico como documento — un recibo, una pizarra después de una reunión, una página de un libro, un aviso pegado en una pared. Pero hay una diferencia real entre una foto en bruto envuelta en un PDF y un escaneo de verdad, y saber cuál necesitas te ahorra un resultado torcido y lleno de reflejos.",
    "Esta guía cubre ambas vías: la captura rápida, donde una foto con la cámara se convierte en una página PDF con la herramienta gratuita Imagen a PDF, y el escaneo de verdad, donde la app PDF Editor detecta los bordes del documento, corrige el ángulo y puede reconocer el texto. Las dos funcionan en tu dispositivo sin enviar nada a ningún servidor.",
    "Para una instantánea que solo necesitas archivar, la captura rápida está bien. Para cualquier cosa que tenga que parecer un documento — plana, cuadrada, legible — el escaneo merece el momento extra.",
  ],
  steps: [
    {
      title: "Decide: captura rápida o escaneo de verdad",
      body: "Un recibo para tus propios registros puede ser una foto rápida. Un documento que vas a enviar o necesitas leer con claridad merece un escaneo de verdad con detección de bordes y corrección del ángulo.",
    },
    {
      title: "Captura rápida: fotografíalo bien",
      body: "Dispara en vertical, con luz uniforme, llenando el encuadre con la página y evitando sombras de tu mano o del móvil. Una buena foto hace una buena página PDF.",
    },
    {
      title: "Convierte la foto en un PDF",
      body: "Abre la herramienta Imagen a PDF, añade la foto (o varias), ponlas en orden y crea el PDF. Cada foto se convierte en una página.",
    },
    {
      title: "Escaneo de verdad: usa el escáner de la app",
      body: "En la app PDF Editor, usa la función de escaneo. Encuentra los bordes del documento automáticamente, endereza la perspectiva y limpia la página para que se lea como un escaneo, no como una instantánea.",
    },
    {
      title: "Captura varias páginas seguidas",
      body: "Para un documento de varias páginas, el escáner te deja fotografiar página tras página dentro de un mismo PDF, manteniendo el orden a medida que avanzas.",
    },
    {
      title: "Hazlo buscable si lo necesitas",
      body: "Una foto en bruto no tiene texto en capa. La app puede aplicar reconocimiento de texto para que las páginas capturadas se vuelvan buscables — útil para cualquier cosa que más adelante necesites encontrar por su contenido.",
    },
  ],
  tips: [
    "Una foto en bruto es una imagen de un documento; un escaneo es una versión corregida, aplanada y legible. Ajusta el esfuerzo al uso que le vas a dar al resultado.",
    "Una luz uniforme y un ángulo recto hacen más por una página capturada que cualquier filtro. Los reflejos y las sombras son más fáciles de evitar que de corregir después.",
    "Un fondo oscuro y liso detrás de la página ayuda a la detección de bordes a encontrar el documento con limpieza.",
    "Tanto las fotos capturadas como los escaneos pueden pesar mucho — comprime el PDF si va camino del correo o de un portal de subida.",
    "La captura rápida no tiene texto buscable. Si más adelante necesitarás buscar en el documento, escanea con reconocimiento de texto en vez de limitarte a fotografiarlo.",
  ],
  mobileNote:
    "Tu cámara ya está en tu mano, por eso capturar documentos es una tarea nativa del móvil. La app PDF Editor escanea con detección automática de bordes, captura de varias páginas y reconocimiento de texto — todo sin conexión — convirtiendo lo que tienes delante en un PDF limpio y listo para compartir al momento.",
  faq: [
    {
      q: "¿Cuál es la diferencia entre fotografiar y escanear un documento?",
      a: "Una foto es una imagen en bruto envuelta en un PDF — bien para un registro rápido. Un escaneo detecta los bordes de la página, corrige el ángulo y la aplana para que se lea como un documento real. Escanea todo lo que vayas a enviar o necesites leer con claridad.",
    },
    {
      q: "¿Puedo crear un PDF a partir de una sola foto?",
      a: "Sí. Haz la foto y después usa la herramienta Imagen a PDF para convertirla (o varias) en un PDF, una página por foto.",
    },
    {
      q: "¿Será buscable un PDF hecho con la cámara?",
      a: "No a partir de una foto en bruto — no hay texto en capa. La app PDF Editor puede aplicar reconocimiento de texto mientras escanea, de modo que el resultado sí sea buscable.",
    },
    {
      q: "¿Se suben mis documentos capturados a algún sitio?",
      a: "No. Tanto la herramienta Imagen a PDF como el escáner de la app funcionan en tu dispositivo, así que los documentos capturados se quedan privados.",
    },
    {
      q: "¿Cómo capturo varias páginas en un mismo PDF?",
      a: "Usa el escáner de la app, que te deja fotografiar página tras página dentro de un mismo documento y mantiene el orden. La herramienta Imagen a PDF también combina varias fotos en un solo archivo.",
    },
  ],
  related: [
    { label: "Escanear a PDF — captura papel con tu cámara", path: "/scan-to-pdf" },
    { label: "Imagen a PDF — convierte fotos en un PDF", path: "/image-to-pdf" },
    { label: "Cómo escanear un documento a PDF con el móvil", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Cómo convertir fotos a PDF en iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Escanear a PDF", path: "/scan-to-pdf" },
};

export default content;
