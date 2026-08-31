import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-scanned-documents-to-pdf",
  h1: "Cómo convertir documentos escaneados a PDF",
  description:
    "¿Ya tienes imágenes de un escaneo o fotos de papel? Reúnelas en un PDF en tu navegador, y entiende para qué sirve el OCR para que el texto sea buscable.",
  updated: "2026-05-23",
  intro: [
    "Hay una diferencia importante entre escanear un documento y convertir uno que ya has escaneado. Si tienes un montón nuevo de papel, quieres un flujo de escaneo. Pero muchas veces ya tienes las imágenes — un escáner plano volcó una carpeta de JPEG, un compañero te envió por correo fotos de un formulario firmado, o la galería de tu móvil está llena de fotos de papeleo. La tarea ahora es reunir todo eso en un único PDF ordenado.",
    "Esta guía cubre exactamente eso: combinar las imágenes de escaneo que ya tienes en un solo PDF con la herramienta gratuita Imagen a PDF, que funciona en tu navegador sin subir nada. También explica lo que la gente suele malinterpretar — que un escaneo convertido es una imagen de texto, no texto buscable, y qué hacer si necesitas recuperar las palabras.",
    "Si todavía necesitas capturar el papel en primer lugar, consulta la guía dedicada al escaneo; esta asume que las imágenes ya existen.",
  ],
  steps: [
    {
      title: "Reúne tus imágenes de escaneo",
      body: "Junta los archivos JPG o PNG de tu escáner, tu correo o tu carrete en un mismo lugar para poder añadirlos de una sola vez.",
    },
    {
      title: "Abre la herramienta Imagen a PDF",
      body: "Ve a la herramienta Imagen a PDF en tu navegador. Acepta JPG, PNG y WebP y procesa todo en tu dispositivo — sin subida, sin cuenta.",
    },
    {
      title: "Añade las imágenes en el orden del documento",
      body: "Arrastra los escaneos a la zona de soltar. Usa las flechas para poner las páginas en la secuencia correcta — la página uno del formulario antes que la página dos.",
    },
    {
      title: "Crea el PDF",
      body: "Haz clic en Crear PDF. Cada escaneo se convierte en una página, y la herramienta las combina en un solo documento, en local.",
    },
    {
      title: "Comprime si pesa mucho",
      body: "Los escaneos tienen muchas imágenes y el PDF puede resultar grande. Pásalo por Comprimir PDF para ajustarlo a los límites de correo o de subida — el contenido escaneado se reduce mucho con poca pérdida visible.",
    },
    {
      title: "Añade texto buscable si lo necesitas",
      body: "Un escaneo convertido es una imagen, así que el texto no se puede buscar. Para hacerlo buscable, ejecuta reconocimiento de texto (OCR) con la app PDF Editor, que añade una capa de texto invisible sobre el escaneo.",
    },
  ],
  tips: [
    "Endereza y recorta cada escaneo antes de combinarlos — una página torcida sigue torcida una vez dentro del PDF.",
    "Una resolución uniforme entre páginas da un documento más ordenado. Tamaños de imagen muy desiguales producen páginas que saltan de escala.",
    "Las herramientas de navegador pueden combinar escaneos, pero no pueden leer el texto que contienen. Si necesitas buscar o copiar las palabras, eso es un trabajo de OCR, que gestiona la app PDF Editor.",
    "Conserva los escaneos en color para cualquier cosa con sellos, resaltados o firmas; pasa a escala de grises solo cuando el color no aporte nada, ya que así el archivo pesa menos.",
    "Nombra el archivo por su contenido y su fecha. «Contrato-alquiler-firmado-2026-05.pdf» es mucho más fácil de recuperar después que una cadena de números del escáner.",
  ],
  mobileNote:
    "Si los «escaneos» son en realidad fotos en tu móvil, la app PDF Editor es el atajo: convierte imágenes del carrete en un PDF, puede capturar páginas nuevas con detección de bordes, y puede ejecutar reconocimiento de texto para que el resultado sea buscable — todo sin subir nada.",
  faq: [
    {
      q: "¿Cuál es la diferencia entre esto y escanear?",
      a: "Escanear captura el papel en imágenes desde el principio. Esta guía asume que ya tienes las imágenes de escaneo y solo necesitas combinarlas en un PDF. Si todavía necesitas capturar el papel, usa un flujo de escaneo.",
    },
    {
      q: "¿Será buscable el texto de mi PDF escaneado?",
      a: "No solo con la conversión — un escaneo es una imagen, así que no hay capa de texto. Ejecuta OCR (reconocimiento de texto) con la app PDF Editor para añadir una capa buscable sobre el escaneo.",
    },
    {
      q: "¿Se suben mis escaneos?",
      a: "No. La herramienta Imagen a PDF procesa los archivos en tu navegador, en tu dispositivo, así que los documentos sensibles se mantienen privados.",
    },
    {
      q: "¿Por qué mi PDF escaneado pesa tanto?",
      a: "Los escaneos son básicamente fotos, y varias páginas en alta resolución suman rápido. Comprime el PDF — el contenido escaneado con muchas imágenes suele reducirse mucho con poca pérdida de calidad visible.",
    },
    {
      q: "¿Puedo corregir una página que se escaneó de lado?",
      a: "Sí. Usa la herramienta Girar PDF para poner en vertical las páginas afectadas después de combinarlas, o corrige la orientación de la imagen de origen antes de convertir.",
    },
  ],
  related: [
    { label: "Imagen a PDF — combina escaneos en tu navegador", path: "/image-to-pdf" },
    { label: "Escanear a PDF — captura papel con la cámara", path: "/scan-to-pdf" },
    { label: "Cómo escanear un documento a PDF con el móvil", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Cómo comprimir un PDF escaneado", path: "/guides/how-to-compress-scanned-pdf" },
  ],
  parentHub: { label: "Escanear a PDF", path: "/scan-to-pdf" },
};

export default content;
