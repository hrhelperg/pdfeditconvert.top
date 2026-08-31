import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-webp-to-pdf",
  h1: "Cómo convertir un WebP a PDF — imágenes de la web a un documento",
  description:
    "Convierte imágenes WebP guardadas de la web en un solo PDF en tu navegador. Por qué otras apps las rechazan y cómo la conversión resuelve la compatibilidad.",
  updated: "2026-05-23",
  intro: [
    "WebP es el formato de imagen que acabas obteniendo al guardar una foto de una web moderna. Pesa menos que el JPG o el PNG con una calidad similar, que es justo por lo que a las webs les encanta — pero también es el formato que otras apps rechazan sin previo aviso. Sube un WebP a un portal antiguo, suéltalo en algunos editores de documentos, o envíaselo a un compañero con software heredado, y a menudo te encontrarás un simple «tipo de archivo no admitido».",
    "Convertir el WebP a PDF esquiva ese problema. Un PDF se abre en todas partes, así que envolver tus imágenes WebP en uno las hace compartibles de forma universal. Esta guía usa la herramienta gratuita Imagen a PDF, que acepta WebP y funciona por completo en tu navegador — no se sube nada.",
    "Es el movimiento correcto cuando has reunido imágenes de la web — fotos de producto, imágenes de referencia, infografías guardadas — y las necesitas en un formato que cualquier destinatario y cualquier sistema vaya a aceptar de verdad.",
  ],
  steps: [
    {
      title: "Abre la herramienta Imagen a PDF",
      body: "Ve a la herramienta Imagen a PDF en tu navegador. Acepta WebP junto con JPG y PNG, y procesa todo en tu dispositivo sin subida ni registro.",
    },
    {
      title: "Añade tus archivos WebP",
      body: "Arrastra las imágenes WebP guardadas a la zona de soltar o haz clic para elegirlas. Cada imagen se convierte en una página del PDF final.",
    },
    {
      title: "Ordénalas",
      body: "Usa las flechas arriba y abajo para secuenciar las imágenes. Si son fotos de referencia o una serie paso a paso, ajusta bien el orden aquí.",
    },
    {
      title: "Crea el PDF",
      body: "Haz clic en Crear PDF. Tus imágenes WebP se colocan en páginas de PDF y se combinan en un solo archivo, en local, en tu dispositivo.",
    },
    {
      title: "Descarga y comparte",
      body: "El PDF se descarga automáticamente. Ahora se abrirá en cualquier dispositivo o portal que se atragantara con los archivos WebP originales.",
    },
    {
      title: "Comprime si el archivo es grande",
      body: "El WebP es eficiente, pero un conjunto de imágenes en alta resolución suma igualmente. Pasa el resultado por Comprimir PDF si necesita ajustarse a un límite de adjunto o de subida.",
    },
  ],
  tips: [
    "Toda la razón para convertir WebP a PDF es la compatibilidad — un PDF se acepta donde un WebP no, así que estás cambiando un formato problemático por uno universal.",
    "Si solo necesitas las imágenes en sí en un formato más común (no un documento), puede que te convenga más un conversor de imágenes normal. Elige PDF cuando el objetivo sea un único archivo compartible e imprimible.",
    "El WebP puede tener o no pérdida según cómo se guardara; en cualquier caso, convertir a PDF no recupera el detalle que la web ya descartó.",
    "La transparencia en un WebP, igual que en un PNG, se renderiza sobre blanco en cuanto se convierte en una página de PDF.",
    "Algunos navegadores muy antiguos no pueden decodificar WebP. Si la herramienta no puede leer tu archivo, ábrelo en un navegador actual o usa la app PDF Editor.",
  ],
  mobileNote:
    "Guardar imágenes mientras navegas desde el móvil suele dejarte con archivos WebP que el resto de tus apps rechazan. La app PDF Editor los convierte en un PDF compartible al momento, así que una imagen que has encontrado en la web queda lista para enviar sin pasar por el portátil.",
  faq: [
    {
      q: "¿Por qué tengo siquiera que convertir el WebP?",
      a: "Muchas apps, portales y sistemas antiguos no aceptan WebP. Convertir a PDF te da un archivo que se abre en todas partes, que suele ser la razón por la que la gente quiere la conversión en primer lugar.",
    },
    {
      q: "¿Se pierde calidad de imagen en la conversión?",
      a: "Convertir a PDF no añade pérdida, pero tampoco puede recuperar el detalle que la web ya eliminó al guardar el WebP. El PDF se verá tan bien como se vea la imagen de origen.",
    },
    {
      q: "¿Se suben mis imágenes?",
      a: "No. La conversión se ejecuta en tu navegador, en tu propio dispositivo, así que tus imágenes se mantienen privadas.",
    },
    {
      q: "¿Puedo combinar WebP con JPG y PNG?",
      a: "Sí. La herramienta acepta los tres juntos, así que puedes construir un solo PDF a partir de fuentes de imagen mixtas.",
    },
    {
      q: "La herramienta no lee mi WebP — ¿ahora qué?",
      a: "Usa un navegador actualizado, ya que los más antiguos no pueden decodificar WebP. Como alternativa, la app móvil PDF Editor puede gestionar la conversión.",
    },
  ],
  related: [
    { label: "Imagen a PDF — combina archivos WebP en tu navegador", path: "/image-to-pdf" },
    { label: "Comprimir PDF — reduce el resultado", path: "/compress-pdf" },
    { label: "Cómo convertir PNG a PDF", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "Cómo convertir JPG a PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
  ],
  parentHub: { label: "Convertidor de PDF", path: "/pdf-converter" },
};

export default content;
