import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-images-for-sharing-documents",
  h1: "PDF o imagen para compartir un documento (JPG, PNG, HEIC)",
  description:
    "Cuándo un JPG, un PNG o un HEIC de un documento es la opción equivocada — y qué hace del PDF el formato correcto en cuanto se supera la simple captura de pantalla.",
  updated: "2026-05-29",
  intro: [
    "Sorprende la cantidad de trabajo profesional y escolar que se envía como archivo de imagen — JPG de contratos, fotos HEIC de apuntes fotocopiados, capturas PNG de tickets. Se siente más rápido que producir un PDF, el móvil lo pone fácil, y el destinatario normalmente puede leerlo igual. Pero las imágenes de documentos son el formato equivocado para casi cualquier flujo de trabajo documental de verdad.",
    "El PDF y las imágenes de documentos sirven a propósitos distintos. El PDF admite varias páginas, tiene texto buscable, se imprime bien, se puede firmar, se puede archivar y no se rompe al girarlo. Las imágenes son de una sola página, no tienen texto buscable, suelen pesar mucho y con frecuencia salen borrosas, torcidas o con el color mal. Para cualquier cosa que vaya más allá de un envío rápido puntual, el PDF hace mejor el trabajo.",
    "Esta guía explica por qué, cuándo el enfoque de «imagen del documento» sí funciona (a veces funciona), y el camino sencillo de conversión cuando quieres pasarlo a PDF.",
  ],
  steps: [
    {
      title: "Reconoce cuándo una imagen de un documento es la opción equivocada",
      body: "Documento de varias páginas: formato equivocado. Documento que hay que imprimir: formato equivocado. Documento que necesita texto buscable: formato equivocado. Cualquier cosa formal que vaya a quedar archivada: formato equivocado.",
    },
    {
      title: "Reconoce el pequeño grupo de casos en los que una imagen vale",
      body: "Una sola página, algo puntual, informal. Una foto rápida de un ticket para un amigo, la captura de una página de confirmación, una instantánea de una nota escrita a mano para ti mismo. La imagen es el formato correcto cuando todavía no es realmente un documento.",
    },
    {
      title: "Convierte con Imagen a PDF cuando el envío se convierte en un documento",
      body: "Imagen a PDF combina JPG, PNG y WebP en un PDF desde tu navegador. La imagen se vuelve buscable más adelante si se le aplica OCR; queda como un solo archivo en lugar de varios sueltos.",
    },
    {
      title: "Usa la herramienta adecuada según el origen",
      body: "Fotos → Imagen a PDF. Páginas escaneadas → Escanear a PDF. Documento de Word/Pages → Word a PDF. Cada formato de origen tiene su ruta de conversión más limpia.",
    },
    {
      title: "Trata el HEIC del iPhone de forma específica",
      body: "El iPhone usa HEIC por defecto, un formato que no todos los destinatarios pueden abrir. Convierte HEIC → JPG → PDF, o usa una herramienta que gestione HEIC directamente. El flujo de escaneo de la app PDF Editor gestiona HEIC de forma nativa.",
    },
    {
      title: "Comprime con criterio",
      body: "Comprime el PDF si el archivo resultante pesa mucho. Las conversiones de foto a PDF heredan la resolución de la foto, que a menudo es más de lo que necesita un documento.",
    },
  ],
  tips: [
    "Un JPG de un documento en vertical hecho con el móvil es el formato equivocado. Gira el móvil o usa una app de escaneo — el resultado se lee muchísimo mejor.",
    "Las capturas PNG se convierten a PDF con limpieza, pero las fotos JPG de documentos en papel normalmente salen mejor pasando por una app de escaneo que aplique detección de bordes.",
    "No envíes varios JPG como si fueran un documento de varias páginas. Combínalos en un solo PDF; los destinatarios pierden el hilo en hilos con varios adjuntos.",
    "El HEIC es el formato por defecto de iOS pero muchos portales web y clientes de correo lo rechazan. Conviértelo antes de compartir si no sabes qué dispositivo tiene el destinatario.",
    "Las fotos de la pantalla del portátil son el peor caso — moiré, reflejos, poca resolución. Usa la opción de exportar a PDF en lugar de fotografiar la pantalla.",
  ],
  mobileNote:
    "El móvil es donde más ocurren los errores de enviar una imagen en vez de un documento. El flujo de escaneo de la app PDF Editor detecta las páginas y produce PDF limpios desde el principio, así que un envío rápido se convierte en un documento en condiciones sin necesitar un paso extra de conversión.",
  faq: [
    {
      q: "¿Por qué una foto de un documento es peor que un PDF?",
      a: "Las fotos son de una sola página, a menudo salen torcidas, no tienen texto buscable, pueden pesar mucho, y los problemas de rotación o formato dificultan ver el contenido. El PDF resuelve todo eso.",
    },
    {
      q: "¿Es aceptable alguna vez un JPG para un documento?",
      a: "Para envíos puntuales de una sola página, sí — un ticket rápido a un amigo, una captura a un compañero. Para cualquier cosa formal o de varias páginas, no.",
    },
    {
      q: "¿Y el HEIC?",
      a: "Es el formato por defecto del iPhone, pero no lo admite todo el mundo. Conviértelo a JPG o PDF antes de compartirlo si el destinatario no usa dispositivos Apple.",
    },
    {
      q: "¿Cómo combino varias fotos en un solo PDF?",
      a: "Imagen a PDF combina JPG, PNG y WebP en un único PDF desde tu navegador. Define el orden antes de añadirlas; el PDF resultante lo conserva.",
    },
    {
      q: "¿El PDF hará el archivo más grande?",
      a: "Depende del origen. Un JPG de un documento convertido a PDF sin recomprimir pesa más o menos lo mismo. Comprimir PDF lo reduce si hace falta.",
    },
  ],
  related: [
    { label: "Imagen a PDF — combina fotos en un solo archivo", path: "/image-to-pdf" },
    { label: "PDF o JPG para documentos", path: "/guides/pdf-vs-jpg-for-documents" },
    { label: "Cómo convertir JPG a PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Cómo convertir fotos a PDF en el iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Imagen a PDF — combina fotos en un PDF", path: "/image-to-pdf" },
};

export default content;
