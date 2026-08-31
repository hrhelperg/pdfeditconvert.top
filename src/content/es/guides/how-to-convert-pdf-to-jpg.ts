import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-jpg",
  h1: "Cómo convertir un PDF a JPG — exporta las páginas como imágenes",
  description:
    "Exporta las páginas de un PDF como imágenes JPG en tu navegador. Cuándo el JPG gana al PNG, cómo afecta la escala a la calidad y cuándo una imagen supera a un PDF.",
  updated: "2026-05-23",
  intro: [
    "A veces el PDF es el contenedor equivocado. Quieres soltar una sola página en un mensaje de Slack donde se previsualice en línea, pegar un gráfico en una diapositiva, o publicar una página en algún sitio que solo admita imágenes. Para todo eso necesitas las páginas como JPG, no como PDF.",
    "Esta guía usa la herramienta gratuita PDF a imágenes, que renderiza cada página de un PDF como una imagen descargable, por completo en tu navegador y sin subir nada. JPG es uno de los dos formatos que ofrece, y es la elección correcta cuando el tamaño del archivo importa más que un texto perfectamente nítido.",
    "Veremos cómo elegir la escala (que controla la nitidez), cuándo el JPG gana al PNG, y la limitación que conviene recordar: un JPG de una página es una imagen plana, no un documento.",
  ],
  steps: [
    {
      title: "Abre la herramienta PDF a imágenes",
      body: "Ve a la herramienta PDF a imágenes en tu navegador. Renderiza las páginas en local, en tu dispositivo — sin subida, sin cuenta.",
    },
    {
      title: "Añade tu PDF",
      body: "Arrastra un solo PDF a la zona de soltar o haz clic para elegirlo. La herramienta lee todas las páginas para poder exportarlas como imágenes.",
    },
    {
      title: "Elige JPG como formato",
      body: "Selecciona JPG. Produce archivos más pequeños que el PNG y es la elección correcta para fotos, capturas de página completa, y cualquier caso en que el tamaño del archivo importe más que un texto perfectamente nítido.",
    },
    {
      title: "Ajusta la escala",
      body: "La escala controla a cuántos píxeles se renderiza cada página. 2× es nítido en la mayoría de pantallas; baja a 1,5× para archivos más pequeños, o sube a 3× cuando necesites un resultado muy nítido y no te importe el tamaño.",
    },
    {
      title: "Exporta las páginas",
      body: "Ejecuta la conversión. Cada página se descarga como su propio archivo JPG, listo para soltar en un mensaje, una presentación o un formulario de subida.",
    },
    {
      title: "Elige la página que necesitas",
      body: "Si solo querías una página, coge ese JPG y elimina el resto. Para un PDF largo, dividirlo antes significa menos imágenes que ordenar.",
    },
  ],
  tips: [
    "Elige JPG cuando la página tenga muchas fotos o estés optimizando por tamaño; elige PNG cuando la página sea sobre todo texto o arte lineal que necesite mantenerse nítido.",
    "Una escala mayor significa imágenes más nítidas y archivos más grandes. No hay ninguna ventaja en usar 3× si la imagen solo se va a ver en tamaño pequeño.",
    "Un JPG de una página no tiene capa de texto — las palabras no se pueden buscar, seleccionar ni copiar. Conserva el PDF original si vas a necesitar el texto de nuevo.",
    "Los PDF muy grandes a escala alta pueden agotar la memoria del navegador. Si la herramienta tiene problemas, baja a escala 1,5× o divide el PDF antes.",
    "Los PDF protegidos con contraseña no se pueden renderizar en el navegador. Quita la contraseña primero, o usa la app PDF Editor.",
  ],
  mobileNote:
    "En el móvil, exportar una página como imagen suele ser cuestión de compartir: las vistas previas de imagen aparecen en línea en los chats, donde un adjunto de PDF se queda ahí como un simple icono. La app PDF Editor renderiza y exporta páginas al instante con aceleración por hardware, y las entrega directamente al menú para compartir.",
  faq: [
    {
      q: "¿JPG o PNG — cuál debería exportar?",
      a: "JPG para archivos más pequeños y páginas con muchas fotos; PNG cuando la página es sobre todo texto o diagramas que deben mantenerse nítidos. La compresión del JPG suaviza los bordes finos, algo que notarás en las letras.",
    },
    {
      q: "¿Obtendré una imagen por página?",
      a: "Sí. Cada página del PDF se renderiza y descarga como un JPG independiente. Si solo necesitas una página, conserva ese archivo y descarta el resto.",
    },
    {
      q: "¿Se sube mi PDF?",
      a: "No. El renderizado se ejecuta por completo en tu navegador, así que el archivo nunca sale de tu dispositivo.",
    },
    {
      q: "¿Puedo buscar el texto en el JPG después?",
      a: "No. Una página convertida es una imagen plana sin capa de texto. Para conservar texto buscable, guarda el PDF original.",
    },
    {
      q: "¿Qué hace el ajuste de escala?",
      a: "Fija cuántos píxeles de imagen se renderizan por punto del PDF. 2× se ve nítido en la mayoría de pantallas; 3× es muy nítido pero produce archivos grandes.",
    },
  ],
  related: [
    { label: "PDF a imágenes — exporta páginas en tu navegador", path: "/pdf-to-images" },
    { label: "Imagen a PDF — la conversión inversa", path: "/image-to-pdf" },
    { label: "Cómo convertir PDF a PNG", path: "/guides/how-to-convert-pdf-to-png" },
    { label: "Cómo dividir un PDF en archivos independientes", path: "/guides/how-to-split-pdf-files" },
  ],
  parentHub: { label: "Convertidor de PDF", path: "/pdf-converter" },
};

export default content;
