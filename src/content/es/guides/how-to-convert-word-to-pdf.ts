import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-word-to-pdf",
  h1: "Cómo convertir un Word a PDF, gratis y sin subir nada",
  description:
    "Convierte un .docx o un .txt en un PDF limpio y listo para compartir en tu navegador. Por qué el PDF es el formato correcto para enviar y qué revisar antes de exportar.",
  updated: "2026-05-23",
  intro: [
    "Enviar un documento Word a alguien fuera de tu propia configuración es una pequeña apuesta. Puede que lo abra en otra versión de Word, en Google Docs, o en un móvil sin ninguna app ofimática — y el diseño que preparaste con cuidado puede desplazarse, reajustarse o directamente negarse a abrir. Convertir a PDF elimina esa apuesta. Un PDF se ve igual en todas partes y no se puede editar por accidente.",
    "Esta guía cubre cómo convertir un .docx o un .txt en un PDF usando la herramienta gratuita Word a PDF, que funciona en tu navegador sin subir nada. Es el movimiento correcto siempre que un documento esté terminado y vaya a llegar a otra persona: un presupuesto, una carta de presentación, una factura, un formulario firmado, un informe para un cliente.",
    "También veremos el puñado de cosas que merece la pena comprobar antes de exportar, para que el PDF que envíes sea el que querías enviar.",
  ],
  steps: [
    {
      title: "Termina de editar primero en Word",
      body: "Un PDF es una instantánea, no un documento de trabajo. Haz todos los cambios que quieras hacer en Word, Google Docs o Pages antes de convertir — corregir erratas después de exportar significa volver a convertir.",
    },
    {
      title: "Abre la herramienta Word a PDF",
      body: "Ve a la herramienta Word a PDF en tu navegador. No hay nada que instalar ni que registrarse; la conversión ocurre en tu dispositivo.",
    },
    {
      title: "Añade tu archivo .docx o .txt",
      body: "Arrastra el archivo a la zona de soltar o haz clic para seleccionarlo. Los archivos .txt normales también se convierten — útil para transformar notas o registros en un documento presentable.",
    },
    {
      title: "Convierte y descarga",
      body: "Haz clic en Convertir a PDF. La herramienta renderiza tu documento y el PDF se descarga automáticamente, listo para adjuntar o subir.",
    },
    {
      title: "Abre el PDF y revísalo",
      body: "Abre siempre el resultado antes de enviarlo. Confirma que los saltos de página caen bien, que los títulos están donde esperas y que nada se ha cortado en un margen.",
    },
    {
      title: "Ponle un nombre descriptivo",
      body: "«Factura-Acme-2026-05.pdf» le dice al destinatario qué está viendo; «Documento1.pdf» no. Un nombre de archivo claro también ayuda a que aparezca más tarde en una búsqueda.",
    },
  ],
  tips: [
    "Cíñete a fuentes comunes (Calibri, Arial, Times New Roman, Inter). Las fuentes poco habituales pueden sustituirse durante la conversión y desplazar tu diseño.",
    "Si tu documento depende de un tamaño de página concreto, fíjalo en Word antes de convertir en lugar de esperar que la herramienta lo adivine.",
    "Convertir a PDF no cifra ni bloquea el archivo frente a la copia — solo evita la edición casual. Para una protección real, añade una contraseña por separado.",
    "Las funciones avanzadas de Word como comentarios incrustados, control de cambios y macros no forman parte de un PDF. Acepta o elimina primero el control de cambios para que no aparezca en el resultado.",
    "Para un documento que necesitarás volver a editar más adelante, conserva el .docx. El PDF es la copia de envío, no tu maestro.",
  ],
  mobileNote:
    "¿Necesitas enviar un documento terminado desde el móvil? La app PDF Editor convierte documentos a PDF, los firma y los comparte directamente desde el menú para compartir — útil cuando un contrato tiene que volver antes de que estés cerca de un escritorio.",
  faq: [
    {
      q: "¿Sobrevivirá mi formato a la conversión?",
      a: "Para documentos normales con fuentes comunes, sí — esa es toda la razón de ser del PDF. Lo único a vigilar son las fuentes poco habituales, que pueden sustituirse. Abre el PDF y revísalo antes de enviarlo.",
    },
    {
      q: "¿Puedo convertir también un archivo .txt?",
      a: "Sí. Los archivos de texto plano se convierten en un PDF limpio y legible, lo que es una forma rápida de presentar notas, registros o datos exportados.",
    },
    {
      q: "¿Se sube mi documento a algún sitio?",
      a: "No. La conversión ocurre en tu navegador, en tu propio dispositivo, así que el archivo nunca sale de él. Eso importa para contratos, facturas y cualquier cosa con datos personales.",
    },
    {
      q: "¿Convertir a PDF protege el documento?",
      a: "Evita la edición casual y fija el diseño, pero no es cifrado. Si necesitas impedir que el archivo se abra o se copie, añade una contraseña — convertir por sí solo no lo hace.",
    },
    {
      q: "¿Puedo editar el PDF después?",
      a: "Los PDF sirven para correcciones y firmas, no para una reescritura importante. Si necesitas hacer cambios grandes, edita el .docx original y vuelve a exportar, o convierte el PDF de nuevo a Word.",
    },
  ],
  related: [
    { label: "Word a PDF — convierte en tu navegador", path: "/word-to-pdf" },
    { label: "PDF a Word — la conversión inversa", path: "/pdf-to-word" },
    { label: "Cómo convertir PDF a Word", path: "/guides/how-to-convert-pdf-to-word" },
    { label: "Cuándo usar PDF en lugar de DOCX", path: "/guides/when-to-use-pdf-instead-of-docx" },
  ],
  parentHub: { label: "Convertidor de PDF", path: "/pdf-converter" },
};

export default content;
