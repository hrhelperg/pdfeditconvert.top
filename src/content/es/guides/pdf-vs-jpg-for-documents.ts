import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-jpg-for-documents",
  h1: "PDF o JPG para documentos — deja de enviar fotos",
  description:
    "Por qué una foto JPG de un documento es lo que no hay que enviar, cuándo el PDF es lo correcto, y cómo convertir una foto en un documento de verdad.",
  updated: "2026-05-23",
  intro: [
    "Alguien pide un documento, y lo más rápido es fotografiarlo y enviar el JPG. Parece eficiente. También es la razón por la que la otra persona acaba entornando los ojos ante una imagen torcida y llena de reflejos, incapaz de imprimirla con limpieza, de buscar en ella o de archivarla junto con lo demás. Para un documento de verdad, una foto JPG es casi siempre el formato equivocado — y un PDF es casi siempre el correcto.",
    "Esta guía explica la diferencia donde importa: los documentos. No es una tabla comparativa neutral — es un alegato a favor de convertir esa foto en un PDF antes de enviarla, y una forma rápida de hacerlo exactamente así con la herramienta gratuita Imagen a PDF, que funciona en tu dispositivo sin enviar nada a ningún servidor.",
    "Si alguna vez has recibido cinco JPG que deberían haber sido un solo PDF ordenado, esta es la guía que debes reenviar.",
  ],
  steps: [
    {
      title: "Entiende qué pierde una foto JPG",
      body: "Un documento fotografiado es una única imagen: sin varias páginas en un archivo, sin texto buscable, a menudo torcida y mal iluminada. Es una foto de un documento, no un documento.",
    },
    {
      title: "Comprueba qué le da el PDF a un documento",
      body: "El PDF guarda varias páginas en un archivo, se imprime a un tamaño previsible, se abre igual en todas partes y encaja de forma natural junto a otros documentos. Es el formato con el que el resto del mundo archiva.",
    },
    {
      title: "Decide según el uso",
      body: "Si el destinatario va a leerlo, imprimirlo, archivarlo o combinarlo con otros documentos, envía PDF. Un JPG suelto solo está bien cuando la propia imagen es el contenido — una foto, no papeleo.",
    },
    {
      title: "Convierte la foto en un PDF",
      body: "Abre la herramienta Imagen a PDF, añade tus JPG, ordénalos y crea un PDF. Varias páginas fotografiadas se convierten en un solo documento en vez de una dispersión de imágenes.",
    },
    {
      title: "Haz que parezca un documento",
      body: "Recorta y endereza primero las fotos para que las páginas queden cuadradas. Para cualquier cosa importante, un escaneo de verdad con detección de bordes supera a una foto en bruto.",
    },
    {
      title: "Ajusta el tamaño y envíalo",
      body: "Comprime el PDF si las páginas fotografiadas lo dejaron pesado, y envía un único archivo limpio que el destinatario pueda usar de verdad.",
    },
  ],
  tips: [
    "La señal de que deberías haber enviado un PDF: el destinatario te pide que lo «envíes como un documento como es debido» o no puede imprimirlo con limpieza.",
    "Las páginas múltiples son el detalle que lo decide. Dos JPG de un formulario de dos páginas es un lío; un PDF es un documento.",
    "Un JPG de texto no es buscable. Los PDF hechos de texto real sí lo son, e incluso los PDF escaneados se pueden hacer buscables con reconocimiento de texto.",
    "El JPG es la elección correcta cuando la imagen es el contenido — una foto de producto, una captura de pantalla que compartes como imagen. Se equivoca cuando el contenido es un documento.",
    "Convertir no arregla una mala foto. Endereza e ilumina bien la página antes de convertir, o escanéala como es debido.",
  ],
  mobileNote:
    "Como el JPG culpable casi siempre empieza como una foto del móvil, la solución también está en el móvil. La app PDF Editor convierte fotos del carrete en un PDF, o escanea la página como es debido con detección de bordes y reconocimiento de texto — así lo que envías es un documento, no una instantánea.",
  faq: [
    {
      q: "¿Por qué no debería simplemente enviar un JPG de un documento?",
      a: "Una foto JPG es una única imagen, a menudo torcida, sin texto buscable, sin soporte multipágina y con un tamaño de impresión impredecible. Para un documento, eso le crea trabajo al destinatario. Un PDF evita todo eso.",
    },
    {
      q: "¿Cuándo es el JPG realmente la opción correcta?",
      a: "Cuando la propia imagen es el contenido — una fotografía, una captura de pantalla que compartes como imagen. El JPG se equivoca específicamente cuando el contenido es un documento que alguien necesita leer, imprimir o archivar.",
    },
    {
      q: "¿Cómo convierto una foto en un documento PDF?",
      a: "Usa la herramienta Imagen a PDF: añade tus JPG, ordénalos y crea un PDF. Para el mejor resultado, endereza primero las fotos o escanea la página como es debido.",
    },
    {
      q: "¿Será buscable el PDF convertido?",
      a: "No a partir de una simple foto — sigue siendo una imagen. Para obtener texto buscable, escanea el documento con reconocimiento de texto usando la app PDF Editor en vez de limitarte a fotografiarlo.",
    },
    {
      q: "¿Hay una comparativa neutral de funciones entre ambos formatos?",
      a: "Sí. Para un cara a cara de PDF y JPG en calidad, tamaño y uso, consulta la página comparativa PDF o JPG.",
    },
  ],
  related: [
    { label: "Imagen a PDF — convierte fotos en un documento", path: "/image-to-pdf" },
    { label: "PDF o JPG — comparativa de funciones", path: "/compare/pdf-vs-jpg" },
    { label: "Cómo convertir un JPG a PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Cómo crear un PDF con la cámara del móvil", path: "/guides/how-to-create-pdf-from-camera" },
  ],
  parentHub: { label: "Convertidor de PDF", path: "/pdf-converter" },
};

export default content;
