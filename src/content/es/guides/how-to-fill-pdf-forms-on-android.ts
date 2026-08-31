import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-android",
  h1: "Cómo rellenar un formulario PDF en Android (en cualquier móvil)",
  description:
    "Rellena un formulario PDF interactivo o no en Android. Por qué el visor integrado a menudo no deja escribir, la vía fiable con una app, y cómo afectan a los formularios las diferencias entre marcas.",
  updated: "2026-06-01",
  intro: [
    "Android no tiene un único rellenador de formularios PDF integrado, y esa es la raíz de la mayor parte de la confusión. El visor de PDF predeterminado en muchos móviles — a menudo dentro de Google Drive o Archivos — muestra bien un formulario pero no siempre te deja escribir en sus campos. Así que la gente asume que el formulario está roto cuando en realidad solo necesita una app que gestione bien los campos de formulario.",
    "La vía fiable en cualquier móvil Android es una app de PDF dedicada que detecta los campos interactivos y te deja colocar texto en los formularios no interactivos. Como el hardware y el software de Android varían tanto entre marcas, las opciones integradas exactas cambian de un móvil a otro — pero una app de PDF adecuada se comporta igual en todas partes, que es exactamente lo que quieres para los formularios.",
    "Esta guía cubre por qué el visor predeterminado se queda corto, el flujo de trabajo fiable con una app, y los detalles propios de Android — compartir mediante el menú del sistema, sacar formularios de Gmail y Drive — que hacen que rellenar formularios sea rápido.",
  ],
  steps: [
    {
      title: "Saca el formulario del visor básico",
      body: "Si un formulario abierto desde Gmail o Drive no te deja escribir, ese visor está ignorando sus campos. Descarga el archivo y ábrelo en una app de PDF dedicada en su lugar — ahí es donde los campos cobran vida.",
    },
    {
      title: "Ábrelo en la app PDF Editor",
      body: "Importa el PDF desde Archivos, Drive, o el menú para compartir. La app comprueba si hay campos interactivos y los hace tocables para que puedas escribir, marcar casillas y usar desplegables.",
    },
    {
      title: "Rellena los formularios no interactivos añadiendo texto",
      body: "Si el formulario no tiene campos, usa la herramienta de texto para colocar las respuestas directamente en cada línea. Haz zoom primero para que el texto caiga con precisión — los teclados de Android más los campos pequeños necesitan un poco de cuidado.",
    },
    {
      title: "Añade marcas, fechas y una firma",
      body: "Marca las casillas interactivas o coloca una marca en las no interactivas, introduce las fechas en el formato mostrado, y añade tu firma en la zona de firma con la herramienta de firma.",
    },
    {
      title: "Exporta y comparte de vuelta",
      body: "Guarda una copia completada y envíala mediante el menú para compartir de Android — Gmail, Drive, WhatsApp, cualquier cosa. Aplánala primero si quieres que las respuestas queden bloqueadas y no se puedan borrar.",
    },
  ],
  tips: [
    "Si no puedes escribir en un formulario en Android, el visor básico suele ser el culpable — abre el archivo en una app de PDF de verdad.",
    "Como cada marca de Android trae un software distinto, no des por hecho que existe un rellenador integrado; una app dedicada es la opción consistente.",
    "Haz zoom en los formularios no interactivos antes de colocar texto para que los campos pequeños reciban una respuesta del tamaño adecuado.",
    "Guarda el formulario en blanco en una carpeta conocida para poder volver a rellenar una copia limpia en lugar de editar una antigua.",
    "El comportamiento de un formulario varía según la app y el dispositivo, así que exportar una copia aplanada es la forma más segura de garantizar que las respuestas se muestren para el destinatario.",
  ],
  mobileNote:
    "La app PDF Editor para Android detecta los campos interactivos y te deja colocar texto en los formularios no interactivos, y luego firmar y exportar — funcionando igual sea cual sea la marca del móvil. Todo ocurre en el dispositivo, así que la información que introduces en el formulario no se sube.",
  faq: [
    {
      q: "¿Por qué no puedo escribir en un formulario PDF en Android?",
      a: "El visor predeterminado — a menudo el de Google Drive o la vista previa de Archivos de tu móvil — suele ignorar los campos de formulario. Descarga el formulario y ábrelo en una app de PDF dedicada, y los campos se volverán escribibles. Los formularios no interactivos necesitan que coloques texto por encima.",
    },
    {
      q: "¿Tiene Android un rellenador de formularios PDF integrado?",
      a: "No uno universal. Lo disponible depende de la marca y el software de tu móvil. Para resultados consistentes en cualquier dispositivo Android, usa una app de PDF dedicada.",
    },
    {
      q: "¿Cómo relleno un formulario escaneado en Android?",
      a: "Un formulario escaneado es no interactivo, así que añade tu propio texto y tus marcas de verificación en la página con un editor de PDF, y luego exporta. No hay campos en los que tocar.",
    },
    {
      q: "¿Es privado rellenar un formulario PDF en Android?",
      a: "Con la app PDF Editor, el relleno ocurre en el dispositivo, así que tus datos no se envían a ningún sitio. Las herramientas de navegador que suben el archivo lo procesan en un servidor.",
    },
    {
      q: "¿Cómo devuelvo el formulario relleno?",
      a: "Exporta una copia completada y usa el menú para compartir de Android para enviarla por correo, Drive, o una app de mensajería. Aplánala primero para bloquear las respuestas.",
    },
  ],
  related: [
    {
      label: "Cómo rellenar un formulario PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Cómo rellenar un formulario PDF en iPhone",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "Cómo firmar un PDF en Android",
      path: "/guides/how-to-sign-pdf-on-android",
    },
    {
      label: "La mejor app de formularios PDF para Android",
      path: "/guides/best-pdf-form-app-for-android",
    },
    { label: "El método móvil para formularios PDF", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
