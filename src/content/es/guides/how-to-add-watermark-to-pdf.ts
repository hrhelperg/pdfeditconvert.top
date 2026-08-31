import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-add-watermark-to-pdf",
  h1: "Cómo añadir una marca de agua a un PDF (gratis)",
  description:
    "Estampa un texto como BORRADOR o CONFIDENCIAL en todas las páginas de un PDF en tu navegador. Qué protege una marca de agua y qué no, explicado con honestidad.",
  updated: "2026-05-23",
  intro: [
    "Una marca de agua es una etiqueta escrita sobre la página — BORRADOR, CONFIDENCIAL, el nombre de una empresa, el correo de un destinatario. La gente recurre a ella para señalar un estado («esto no es la versión final»), marcar la propiedad, o desalentar la redistribución casual estampando para quién era una copia.",
    "Esta guía usa la herramienta gratuita Añadir marca de agua a PDF, que coloca una marca de agua de texto sobre cada página directamente en tu navegador — no se sube nada. Es rápida y privada, y útil precisamente para las funciones de señalización de arriba.",
    "Es igual de importante dejar claro lo que una marca de agua no es: no es seguridad. Veremos dónde las marcas de agua ayudan de verdad y dónde necesitas protección real en su lugar, para que no te apoyes en una para hacer un trabajo que no puede hacer.",
  ],
  steps: [
    {
      title: "Abre la herramienta Añadir marca de agua a PDF",
      body: "Ve a la herramienta Añadir marca de agua a PDF en tu navegador. Funciona en tu dispositivo — sin subida, sin cuenta.",
    },
    {
      title: "Añade tu PDF",
      body: "Arrastra el archivo a la zona de soltar o haz clic para elegirlo. La marca de agua se aplicará a todas las páginas del documento.",
    },
    {
      title: "Escribe el texto de tu marca de agua",
      body: "Introduce la etiqueta que quieras — BORRADOR, CONFIDENCIAL, el nombre de tu empresa, o un identificador del destinatario. Mantenla corta para que se lea con limpieza sobre la página.",
    },
    {
      title: "Aplica la marca de agua",
      body: "Ejecuta la herramienta. Tu texto se estampa en cada página de una copia nueva del documento.",
    },
    {
      title: "Comprueba la legibilidad en ambos sentidos",
      body: "Confirma que la marca de agua es lo bastante visible para cumplir su función pero lo bastante suave para que el texto de fondo siga siendo legible. Una marca de agua que oculta el contenido pierde su sentido.",
    },
    {
      title: "Descarga la copia con marca de agua",
      body: "Guarda el resultado como un archivo nuevo para conservar un original limpio, sin marcar, para tus propios registros.",
    },
  ],
  tips: [
    "Una marca de agua es una etiqueta visual, no protección. Cualquiera puede hacer una captura, imprimir o volver a procesar la página — trátala como una señal, no como un candado.",
    "Usa una marca de agua específica del destinatario (su nombre o correo) en las copias que compartas para desalentar el reenvío — la gente es menos descuidada con un documento visiblemente estampado para ella.",
    "Mantén el texto de la marca de agua corto. Una frase larga que envuelve la página compite con el contenido y se lee como ruido visual.",
    "Marca siempre una copia, nunca tu original. Todo el sentido es que el original se mantenga limpio.",
    "Si de verdad necesitas impedir que se abra, se copie o se edite, eso es un trabajo de contraseña y cifrado — consulta la guía sobre proteger un PDF, no una marca de agua.",
  ],
  mobileNote:
    "Marcar un documento como BORRADOR o CONFIDENCIAL antes de enviarlo desde el móvil lleva segundos en la app PDF Editor, que aplica marcas de agua sin conexión y te deja firmar o proteger en la misma sesión — útil cuando una propuesta sale antes de estar realmente terminada.",
  faq: [
    {
      q: "¿Una marca de agua protege mi documento?",
      a: "No. Una marca de agua es una etiqueta visible, no seguridad. Señala un estado o una propiedad, pero no impide copiar, imprimir ni editar. Para eso, usa protección con contraseña y cifrado.",
    },
    {
      q: "¿La marca de agua aparecerá en todas las páginas?",
      a: "Sí. La herramienta estampa tu texto en todas las páginas del documento, así que la etiqueta es coherente a lo largo de todo el archivo.",
    },
    {
      q: "¿Se puede quitar la marca de agua?",
      a: "Una persona decidida puede sortear cualquier marca de agua visible, por eso es un elemento disuasorio y no protección. Conserva tu original sin marcar por separado.",
    },
    {
      q: "¿Se sube mi PDF?",
      a: "No. La marca de agua se aplica en tu navegador, en tu dispositivo, así que el archivo se mantiene privado.",
    },
    {
      q: "¿Puedo añadir una marca de agua con una imagen o un logotipo?",
      a: "La herramienta de navegador aplica una marca de agua de texto. Para superponer una imagen o un logotipo, la app móvil PDF Editor ofrece más opciones.",
    },
  ],
  related: [
    { label: "Añadir marca de agua a PDF — en tu navegador", path: "/add-watermark-to-pdf" },
    { label: "Cómo proteger un PDF con contraseña", path: "/guides/how-to-protect-pdf-file" },
    { label: "Cómo preparar un PDF antes de compartirlo", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Seguridad de PDF — protege documentos", path: "/pdf-security" },
  ],
  parentHub: { label: "Añadir marca de agua a PDF", path: "/add-watermark-to-pdf" },
};

export default content;
