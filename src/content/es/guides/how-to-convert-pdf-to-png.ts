import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-png",
  h1: "Cómo convertir un PDF a PNG — páginas nítidas y sin pérdida",
  description:
    "Exporta las páginas de un PDF como imágenes PNG de alta calidad en tu navegador. Por qué el PNG mantiene nítidos el texto y los diagramas, con notas sobre escala y transparencia.",
  updated: "2026-05-23",
  intro: [
    "Cuando necesitas una página de un PDF como imagen y esa página está llena de texto, una tabla o un diagrama, el PNG es el formato al que recurrir. No tiene pérdida, así que las letras se mantienen nítidas en lugar de coger bordes borrosos — la diferencia es evidente en cuanto haces zoom sobre una factura o un esquema convertidos.",
    "Esta guía usa la herramienta gratuita PDF a imágenes, que renderiza cada página del PDF como una imagen descargable en tu navegador, sin subir nada. El PNG es uno de sus dos formatos de salida, y el que hay que elegir siempre que la claridad importe más que el tamaño del archivo.",
    "A continuación: cómo conseguir el resultado más nítido sin inflar el archivo, cuándo merece la pena elegir PNG en vez de JPG, y qué tener en cuenta sobre las imágenes de página en general.",
  ],
  steps: [
    {
      title: "Abre la herramienta PDF a imágenes",
      body: "Ve a la herramienta PDF a imágenes. Renderiza las páginas en local en tu navegador — sin subida, sin cuenta.",
    },
    {
      title: "Añade tu PDF",
      body: "Arrastra el PDF a la zona de soltar o haz clic para elegirlo. La herramienta prepara cada página para la exportación.",
    },
    {
      title: "Elige PNG como formato",
      body: "Selecciona PNG. No tiene pérdida y mantiene nítidos el texto, las tablas y el arte lineal — la elección correcta para documentos, diagramas y cualquier cosa a la que vayas a hacer zoom.",
    },
    {
      title: "Ajusta la escala para la nitidez",
      body: "Elige una escala: 2× es nítido en la mayoría de pantallas, 3× es extra nítido para imprenta o pantallas grandes, pero produce archivos grandes. Ajusta la escala a cómo se va a ver realmente la imagen.",
    },
    {
      title: "Exporta las páginas",
      body: "Ejecuta la conversión. Cada página se descarga como su propio PNG, listo para incrustar en un documento, una presentación o una página web.",
    },
    {
      title: "Usa la página que necesitas",
      body: "Conserva el PNG que querías y descarta el resto. Para un PDF largo, dividirlo antes deja menos archivos que gestionar.",
    },
  ],
  tips: [
    "Elige PNG en vez de JPG siempre que la página tenga texto, tablas o líneas nítidas — la compresión del JPG suaviza visiblemente esos bordes.",
    "Los archivos PNG son más grandes que los JPG. Si estás exportando muchas páginas y el tamaño importa más que la nitidez, el JPG es la opción pragmática.",
    "Una página de PDF no tiene transparencia, así que el PNG exportado se asienta sobre un fondo blanco sólido aunque el PNG admita transparencia.",
    "Una escala mayor no mejora una fuente de baja calidad. Si el propio PDF contiene un escaneo borroso, un PNG a 3× solo renderiza el borrón a mayor resolución.",
    "Las imágenes de página no son buscables — no hay capa de texto. Conserva el PDF original si más adelante necesitas encontrar o copiar las palabras.",
  ],
  mobileNote:
    "Sacar una imagen de página nítida de un PDF desde el móvil es útil para diapositivas, referencias de diseño e informes de errores. La app PDF Editor renderiza las páginas con aceleración por hardware y te permite marcar la imagen antes de compartirla — más rápido que enviarte el archivo por correo para tratarlo más tarde.",
  faq: [
    {
      q: "¿Por qué elegir PNG en vez de JPG?",
      a: "El PNG no tiene pérdida, así que el texto, las tablas y los diagramas se mantienen nítidos. El JPG es más pequeño pero suaviza los bordes finos. Para páginas de documento a las que vas a hacer zoom, el PNG es la mejor opción.",
    },
    {
      q: "¿Obtengo un PNG por página?",
      a: "Sí. Cada página se renderiza y descarga como un archivo PNG independiente. Conserva los que necesites y descarta el resto.",
    },
    {
      q: "¿Se sube mi PDF a algún sitio?",
      a: "No. El renderizado ocurre por completo en tu navegador, así que el archivo se queda en tu dispositivo.",
    },
    {
      q: "¿Por qué mi PNG pesa tanto?",
      a: "El PNG no tiene pérdida y una escala alta multiplica el recuento de píxeles. Baja la escala o cambia a JPG si el tamaño del archivo te preocupa.",
    },
    {
      q: "¿Puedo exportar un PDF protegido con contraseña?",
      a: "No en el navegador — los archivos cifrados no se pueden renderizar. Quita antes la contraseña, o usa la app móvil PDF Editor.",
    },
  ],
  related: [
    { label: "PDF a imágenes — exporta páginas en tu navegador", path: "/pdf-to-images" },
    { label: "Imagen a PDF — la conversión inversa", path: "/image-to-pdf" },
    { label: "Cómo convertir PDF a JPG", path: "/guides/how-to-convert-pdf-to-jpg" },
    { label: "Cómo extraer páginas de un PDF", path: "/guides/how-to-extract-pages-from-pdf" },
  ],
  parentHub: { label: "Convertidor de PDF", path: "/pdf-converter" },
};

export default content;
