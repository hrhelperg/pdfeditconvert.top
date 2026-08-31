import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-phone",
  h1: "Cómo rellenar un formulario PDF desde el móvil",
  description:
    "Rellena un formulario PDF en iPhone o Android, tenga campos de verdad o sea un simple escaneo. Toca y escribe, añade cajas de texto y firma todo en un mismo sitio.",
  updated: "2026-05-23",
  intro: [
    "Los formularios PDF vienen en dos variantes, y saber cuál tienes determina cómo lo rellenas. Algunos son interactivos — tocas un campo y escribes, con cajas limpias que quien diseñó el formulario ya incluyó. Otros son no interactivos: un formulario escaneado o impreso y luego convertido a PDF, sin ningún campo, donde tienes que colocar tú mismo el texto encima. Ambos se pueden rellenar perfectamente desde un móvil; solo necesitan un tratamiento ligeramente distinto.",
    "Esta guía cubre cómo rellenar los dos tipos en iPhone y Android con la app PDF Editor, que detecta los campos interactivos cuando existen y te deja colocar texto y marcas de verificación donde haga falta cuando no existen. Muchos formularios también piden una firma, que la misma app gestiona en el mismo proceso.",
    "El resultado es un formulario completo que puedes devolver directamente — sin imprimir, sin escanear, sin buscar una impresora que funcione en el peor momento posible.",
  ],
  steps: [
    {
      title: "Abre el formulario en la app PDF Editor",
      body: "Importa el PDF desde Archivos, Mail, Drive o cualquier menú para compartir. La app comprueba si el formulario tiene campos interactivos.",
    },
    {
      title: "Si tiene campos, toca y escribe",
      body: "Los formularios interactivos te dejan tocar directamente cada campo y escribir. Muévete entre campos con el tabulador o desplazándote, y toca las casillas para marcarlas.",
    },
    {
      title: "Si es no interactivo, añade tu propio texto",
      body: "Para un formulario escaneado o sin campos, usa la herramienta de texto para colocar cada respuesta donde corresponda. Ajusta el tamaño y la posición para que quede bien alineada sobre la línea.",
    },
    {
      title: "Gestiona casillas y fechas",
      body: "Coloca una marca o una X en las casillas de verificación, y añade la fecha donde se pida. En los formularios no interactivos, estos son solo objetos de texto o de marca que tú mismo colocas.",
    },
    {
      title: "Firma si el formulario lo pide",
      body: "Usa la herramienta Firmar para añadir tu firma guardada en la zona de firma — el mismo proceso, sea el formulario interactivo o no interactivo.",
    },
    {
      title: "Exporta y envía",
      body: "Guarda una copia completa como archivo nuevo y compártela por correo o por cualquier app. Conserva el original en blanco por si tienes que rellenarlo de nuevo.",
    },
  ],
  tips: [
    "Comprueba primero si los campos son interactivos — toca donde va una respuesta. Si aparece un cursor, escribe; si no pasa nada, es un formulario no interactivo y añades el texto encima.",
    "En los formularios no interactivos, haz zoom antes de colocar el texto para que caiga con precisión sobre la línea en vez de flotar por encima o por debajo.",
    "Guarda una copia en blanco de los formularios que rellenas a menudo. Rellenar de cero un original limpio es más práctico que editar las respuestas de la última vez.",
    "Rellena y firma en la misma sesión para no exportar, reabrir y volver a colocarlo todo — la app lo mantiene en un solo paso.",
    "Repasa los campos obligatorios antes de enviarlo. Un formulario devuelto por una fecha que falta hace perder más tiempo del que habría costado revisarlo.",
  ],
  mobileNote:
    "Rellenar formularios es una de las tareas de PDF que de verdad encajan con el móvil — el formulario llega por correo y vuelve por el mismo camino. La app PDF Editor rellena formularios interactivos y no interactivos, añade tu firma y exporta una copia completa, todo en el dispositivo y sin enviar nada a ningún servidor.",
  faq: [
    {
      q: "¿Cómo sé si un formulario PDF es interactivo?",
      a: "Toca donde debería ir una respuesta. Si aparece un cursor de texto y puedes escribir, tiene campos interactivos. Si no pasa nada, es un formulario no interactivo y añades el texto encima.",
    },
    {
      q: "¿Puedo rellenar un formulario escaneado sin campos?",
      a: "Sí. Usa la herramienta de texto para colocar tus respuestas directamente sobre la página, y añade marcas donde haga falta. La app las trata como objetos que tú mismo colocas.",
    },
    {
      q: "¿Puedo firmar el formulario en la misma app?",
      a: "Sí. La herramienta Firmar añade tu firma guardada en la misma sesión, así que rellenas y firmas sin cambiar de app.",
    },
    {
      q: "¿Se sube el formulario rellenado a algún sitio?",
      a: "No. La app PDF Editor rellena los formularios en tu dispositivo, así que los datos personales que contienen se quedan privados.",
    },
    {
      q: "¿Puedo reutilizar un formulario que relleno a menudo?",
      a: "Conserva el original en blanco y rellena una copia limpia cada vez. Es más práctico que editar una versión ya completada anteriormente.",
    },
  ],
  related: [
    { label: "PDF Editor — edita y rellena en el móvil", path: "/pdf-editor" },
    { label: "Cómo firmar un PDF desde el móvil", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "Cómo anotar un PDF desde el móvil", path: "/guides/how-to-annotate-pdf-on-mobile" },
    { label: "Cómo editar un PDF en iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
