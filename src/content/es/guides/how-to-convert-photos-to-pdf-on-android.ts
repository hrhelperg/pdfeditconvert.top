import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-photos-to-pdf-on-android",
  h1: "Cómo convertir fotos a PDF en Android",
  description:
    "Reúne tus fotos de Android en un solo PDF con una herramienta del navegador o con la función integrada de imprimir a PDF. Y el método más rápido desde la app, con escaneo.",
  updated: "2026-05-23",
  intro: [
    "Android te da más de una forma de convertir fotos en un PDF, lo cual es a la vez una ventaja y una fuente de confusión — los pasos varían entre Samsung, Pixel, Xiaomi y el resto. La buena noticia es que hay una vía que funciona igual en todos los móviles Android: una herramienta de navegador que se ejecuta en tu dispositivo y a la que le da igual quién fabricó el teléfono.",
    "Esta guía cubre esa vía universal del navegador con la herramienta gratuita Imagen a PDF, el truco integrado de «Imprimir a PDF» que se esconde en el menú para compartir, y la app PDF Editor para cuando quieras fotos, escaneo y firma en un mismo sitio.",
    "Las fotos de Android suelen guardarse como JPG, así que en general evitas los quebraderos de cabeza de formato que sufren los usuarios de iPhone — pero señalaremos la única excepción que conviene conocer.",
  ],
  steps: [
    {
      title: "Abre la herramienta Imagen a PDF en tu navegador",
      body: "Ve a la herramienta Imagen a PDF en Chrome o en el navegador que prefieras. Funciona en cualquier móvil Android sin importar la marca, y procesa las imágenes en tu dispositivo — sin subir nada.",
    },
    {
      title: "Añade tus fotos",
      body: "Toca para seleccionar fotos de tu galería o tus archivos. Tanto JPG como PNG funcionan; cada imagen se convierte en una página.",
    },
    {
      title: "Ordena las páginas",
      body: "Usa las flechas para organizar las fotos. Para un documento de varias páginas, comprueba dos veces la secuencia antes de crear el archivo.",
    },
    {
      title: "Crea y guarda el PDF",
      body: "Toca Crear PDF. El archivo se descarga a tu móvil; guárdalo en Archivos o en tu nube preferida, o compártelo directamente.",
    },
    {
      title: "Alternativa: usa Imprimir a PDF",
      body: "Abre las fotos en Google Fotos o en tu galería, toca Compartir → Imprimir, y elige «Guardar como PDF» como impresora. Esto agrupa las imágenes seleccionadas en un PDF sin ninguna herramienta, aunque tienes menos control sobre el orden.",
    },
    {
      title: "O usa la app PDF Editor",
      body: "La app combina fotos de la galería en un PDF, escanea páginas nuevas con detección automática de bordes, y te deja firmar — todo sin conexión, todo en el dispositivo.",
    },
  ],
  tips: [
    "La vía del navegador se comporta de forma idéntica en Samsung, Pixel, Xiaomi y otros, así que es la que conviene recordar si cambias de móvil o ayudas a alguien con otra marca.",
    "El truco de Imprimir a PDF es estupendo en un apuro, pero da poco control sobre el orden de las páginas — usa la herramienta Imagen a PDF cuando la secuencia importe.",
    "Recorta las fotos en tu galería primero. Las páginas se ajustan al tamaño de la imagen, así que recortar da un documento más limpio.",
    "La mayoría de cámaras Android guardan en JPG, pero algunas guardan en HEIF/HEIC en modo de alta eficiencia. Si una foto no carga, revisa los ajustes de tu cámara o usa la app PDF Editor.",
    "Las galerías grandes con fotos en alta resolución producen PDF pesados. Comprime el resultado antes de enviarlo por correo.",
  ],
  mobileNote:
    "El trabajo documental en Android ocurre en el móvil, y la app PDF Editor lo mantiene ahí: combina fotos de la galería, escanea papel con detección de bordes, firma y comparte — sin conexión y sin subir nada. Para tareas repetidas es más rápida que el navegador cada vez.",
  faq: [
    {
      q: "¿Funciona el método del navegador en cualquier móvil Android?",
      a: "Sí. Como la herramienta se ejecuta en el navegador, se comporta igual en Samsung, Pixel, Xiaomi y cualquier otro dispositivo Android — a diferencia de las funciones integradas, que varían según el fabricante.",
    },
    {
      q: "¿Cuál es la diferencia entre Imprimir a PDF y la herramienta?",
      a: "Imprimir a PDF viene integrado en el menú para compartir de Android y no necesita ninguna herramienta, pero ofrece poco control sobre el orden de las páginas. La herramienta Imagen a PDF te permite secuenciar las páginas con precisión, algo que importa en documentos de varias páginas.",
    },
    {
      q: "¿Se suben mis fotos a algún sitio?",
      a: "No. Tanto la herramienta Imagen a PDF como la app PDF Editor procesan las fotos en tu dispositivo. Tus imágenes se mantienen privadas.",
    },
    {
      q: "Mis fotos no cargan en la herramienta — ¿por qué?",
      a: "Algunos móviles Android guardan en HEIF/HEIC en modo de alta eficiencia, que las herramientas de navegador pueden no leer. Cambia tu cámara a JPG estándar, o usa la app PDF Editor.",
    },
    {
      q: "¿Puedo hacer que el PDF sea buscable?",
      a: "Una foto sencilla no tiene capa de texto. Para conseguir texto buscable, escanea el documento con el reconocimiento de texto de la app PDF Editor en lugar de limitarte a fotografiarlo.",
    },
  ],
  related: [
    { label: "Imagen a PDF — convierte fotos en tu navegador", path: "/image-to-pdf" },
    { label: "Escanear a PDF — captura papel con la cámara", path: "/scan-to-pdf" },
    { label: "Cómo convertir fotos a PDF en iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
    { label: "Cómo convertir JPG a PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "Convertidor de PDF", path: "/pdf-converter" },
};

export default content;
