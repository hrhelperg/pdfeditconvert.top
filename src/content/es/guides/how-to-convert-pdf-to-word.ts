import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-word",
  h1: "Cómo convertir un PDF a Word, gratis y en el navegador",
  description:
    "Recupera el texto de un PDF en un documento Word editable, sin subir nada. Qué se convierte bien, qué hay que retocar y por qué un escaneo no funciona.",
  updated: "2026-05-23",
  intro: [
    "La mayoría de personas que quieren «convertir un PDF a Word» en realidad quieren una sola cosa: recuperar el texto en un documento que puedan editar. Puede que el .docx original se haya perdido, que un compañero solo enviara el PDF, o que necesites sacar algunas cláusulas de un contrato sin volver a teclearlas. Eso es un trabajo de extracción de texto, y es más rápido de lo que parece.",
    "Esta guía usa la herramienta gratuita PDF a Word, que se ejecuta por completo en tu navegador — tu archivo nunca se envía a ningún servidor. Lee la capa de texto del PDF y te entrega un .docx que puedes abrir en Word, Google Docs, Pages o LibreOffice. Lo que no hace es reconstruir el diseño original píxel a píxel, y conviene saberlo de antemano para que el resultado no te sorprenda.",
    "A continuación, el flujo práctico, el tipo de PDF que se convierte bien, y los casos honestos donde tendrás que retocar después o recurrir a un enfoque distinto.",
  ],
  steps: [
    {
      title: "Abre la herramienta PDF a Word",
      body: "Ve a la herramienta PDF a Word. Nada que instalar, ninguna cuenta — el conversor se carga en tu navegador y procesa el archivo en tu propio dispositivo.",
    },
    {
      title: "Añade tu PDF",
      body: "Arrastra el PDF a la zona de soltar o haz clic para elegirlo. Usa un PDF con texto — uno en el que puedas seleccionar y copiar texto en cualquier visor. Si el texto no se resalta al intentar seleccionarlo, el archivo es un escaneo y no se convertirá (ver las limitaciones más abajo).",
    },
    {
      title: "Ejecuta la conversión",
      body: "Haz clic en Convertir a Word. La herramienta recorre la capa de texto del PDF y la reconstruye como un .docx de flujo continuo. Para un documento típico de varias páginas, esto tarda unos segundos.",
    },
    {
      title: "Descarga el .docx",
      body: "El archivo Word se descarga automáticamente. Ábrelo en el editor que prefieras — el texto llega como párrafos editables que puedes reestructurar libremente.",
    },
    {
      title: "Vuelve a aplicar el formato",
      body: "Los títulos, la negrita, las columnas y el espaciado suelen necesitar un repaso a mano. Vuelve a marcar tus encabezados con los estilos de título de tu editor, recupera las tablas que hubiera, y el documento vuelve a ser tuyo.",
    },
    {
      title: "Vuelve a insertar las imágenes si las necesitas",
      body: "La extracción de texto no traslada las imágenes. Si el original tenía un logotipo, un gráfico o una foto que necesitas, vuelve a colocarla desde el PDF de origen — exporta la página como imagen primero si hace falta.",
    },
  ],
  tips: [
    "Comprueba primero si es seleccionable: si no puedes resaltar texto en el PDF, es una imagen escaneada y la extracción de texto no devolverá nada utilizable.",
    "Los documentos simples de una sola columna (cartas, memorandos, informes sencillos) se convierten de la forma más limpia. Los PDF muy maquetados con varias columnas y notas al pie se extraen como un único flujo legible que querrás ordenar.",
    "No esperes que las tablas sobrevivan intactas — suelen llegar como series de texto. Reconstruye las tablas importantes en tu editor en lugar de pelear con la versión extraída.",
    "Mantén el PDF original abierto al lado mientras reformateas. Es mucho más rápido echar un vistazo a la fuente que adivinar la estructura pretendida.",
    "Si solo necesitas unas pocas frases, cópialas directamente desde un visor de PDF en lugar de convertir el archivo entero — convertir es para cuando necesitas recuperar la mayor parte del documento.",
  ],
  mobileNote:
    "¿Trabajando desde el móvil? La app PDF Editor convierte y edita documentos sobre la marcha, y a diferencia del navegador puede ejecutar reconocimiento de texto en páginas escaneadas — útil cuando el PDF que has recibido en realidad es la foto de un documento impreso, no un archivo digital.",
  faq: [
    {
      q: "¿El archivo Word se verá exactamente igual que el PDF?",
      a: "No, y ninguna herramienta honesta debería prometer eso. Esto es una conversión de texto: las fuentes, las columnas, el espaciado exacto y las imágenes no se reproducen. Recuperas las palabras como párrafos editables y vuelves a aplicar el formato en tu editor.",
    },
    {
      q: "Dice que no se ha encontrado texto — ¿qué ha fallado?",
      a: "Casi con toda seguridad tu PDF es un escaneo o un archivo de solo imagen sin capa de texto. Las herramientas de navegador no pueden leer texto dentro de una imagen. La app móvil PDF Editor puede ejecutar reconocimiento de texto en escaneos, que es la vía a seguir en ese caso.",
    },
    {
      q: "¿Se envía mi documento a un servidor?",
      a: "No. La extracción se ejecuta en local en tu navegador, así que el PDF nunca sale de tu dispositivo. Eso lo hace seguro de usar con contratos y otros archivos sensibles.",
    },
    {
      q: "¿Qué formato de archivo recibo?",
      a: "Un .docx estándar que se abre en Microsoft Word, Google Docs, Apple Pages y LibreOffice. Puedes volver a exportarlo a PDF más adelante si lo necesitas.",
    },
    {
      q: "¿Puedo volver a convertirlo a PDF cuando termine de editar?",
      a: "Sí — usa la herramienta Word a PDF para convertir tu .docx terminado de nuevo en un PDF limpio y listo para compartir.",
    },
  ],
  related: [
    { label: "PDF a Word — convierte en tu navegador", path: "/pdf-to-word" },
    { label: "Word a PDF — la conversión inversa", path: "/word-to-pdf" },
    { label: "Cómo convertir Word a PDF", path: "/guides/how-to-convert-word-to-pdf" },
    { label: "PDF o DOCX — qué formato usar", path: "/guides/pdf-vs-docx" },
  ],
  parentHub: { label: "Convertidor de PDF", path: "/pdf-converter" },
};

export default content;
