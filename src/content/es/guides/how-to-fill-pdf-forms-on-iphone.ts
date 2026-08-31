import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-iphone",
  h1: "Cómo rellenar un formulario PDF en iPhone (Archivos, Marcado y apps)",
  description:
    "Rellena un formulario PDF interactivo o no en el iPhone, con Archivos y Marcado o con una app dedicada. Los pasos propios de iOS, la vía del menú para compartir, y dónde se queda corto Marcado.",
  updated: "2026-06-01",
  intro: [
    "El iPhone se le da genuinamente bien lidiar con formularios PDF en cuanto conoces las dos vías de iOS. La vía integrada usa la app Archivos y Marcado, que puede rellenar formularios no interactivos y añadir una firma en caso de apuro. La vía más completa es una app de PDF dedicada que detecta los campos interactivos, escribe en ellos correctamente y exporta una copia completada y limpia — mejor en cuanto un formulario tiene más de un par de líneas.",
    "Los detalles propios de iOS son los que despistan a la gente: un formulario abierto desde la vista previa de Mail a menudo no muestra sus campos, el menú para compartir es cómo mueves un formulario entre apps, y Marcado trata todo como una página plana incluso cuando existen campos reales. Conocer estas particularidades convierte rellenar un formulario en el iPhone en un trabajo de 30 segundos.",
    "Esta guía cubre las dos vías — el enfoque nativo de Archivos y Marcado con sus límites honestos, y la app PDF Editor para formularios interactivos — para que elijas la adecuada para el formulario que tienes delante.",
  ],
  steps: [
    {
      title: "Saca el formulario de la vista previa de Mail",
      body: "Si un formulario llegó por correo, tócalo para guardarlo en Archivos primero, o ábrelo mediante el menú para compartir en una app de PDF de verdad. La vista previa rápida de Mail suele ignorar los campos de formulario, por eso ahí parece imposible escribir.",
    },
    {
      title: "Prueba Archivos y Marcado para formularios no interactivos",
      body: "Abre el PDF en Archivos y toca el bolígrafo de Marcado. Puedes añadir cuadros de texto y una firma en cualquier parte de la página — perfecto para formularios no interactivos y rellenos rápidos, aunque Marcado no accede a campos interactivos reales.",
    },
    {
      title: "Usa una app de PDF para campos interactivos",
      body: "Para formularios con campos reales, abre el archivo en la app PDF Editor. Detecta los campos para que puedas tocar y escribir, marcar casillas, y moverte entre campos con limpieza.",
    },
    {
      title: "Gestiona los formularios no interactivos colocando texto",
      body: "Cuando un formulario no tiene campos, usa la herramienta de texto de la app para colocar las respuestas exactamente en cada línea. Haz zoom con dos dedos para que el texto caiga con precisión en lugar de quedar flotando por encima de la línea.",
    },
    {
      title: "Firma y exporta desde el menú para compartir",
      body: "Añade tu firma en la zona de firma, y luego exporta una copia completada y envíala directamente desde el menú para compartir — a Mail, Mensajes, o de vuelta a quien la envió.",
    },
  ],
  tips: [
    "Si no puedes escribir en un formulario en el iPhone, casi siempre estás en la vista previa de Mail — guárdalo en Archivos o ábrelo primero en una app de PDF.",
    "Marcado es estupendo para una firma rápida o un formulario no interactivo, pero no rellena campos interactivos reales como lo hace una app dedicada.",
    "Haz zoom antes de colocar texto en un formulario no interactivo; los pulgares son imprecisos y el texto ampliado cae bien sobre la línea.",
    "Guarda el original en blanco en Archivos para poder rellenar una copia nueva la próxima vez en lugar de editar una antigua.",
    "iOS gestiona bien HEIC y PDF, pero el comportamiento de los formularios sigue variando según la app — una app de PDF dedicada es la más consistente.",
  ],
  mobileNote:
    "La app PDF Editor para iPhone detecta los campos interactivos donde existen y te deja colocar texto y marcas de verificación en los formularios no interactivos donde no, y luego firmar y exportar — todo en el dispositivo, así que los datos personales del formulario no se suben. Es la vía que evita los callejones sin salida de la vista previa de Mail.",
  faq: [
    {
      q: "¿Por qué no puedo escribir en un formulario PDF en mi iPhone?",
      a: "Lo más probable es que lo estés viendo en la vista previa de Mail, que ignora los campos de formulario. Guarda el archivo en Archivos o ábrelo en una app de PDF dedicada, y los campos se activarán. Los formularios no interactivos necesitan que coloques texto por encima.",
    },
    {
      q: "¿Puedo rellenar un formulario PDF con la herramienta Marcado integrada?",
      a: "Sí, para formularios no interactivos y rellenos rápidos — Marcado añade texto y una firma en cualquier parte de la página. Pero trata el formulario como una imagen plana, así que no accede a campos interactivos reales. Usa una app de PDF para esos casos.",
    },
    {
      q: "¿Cómo relleno un formulario escaneado en el iPhone?",
      a: "Un formulario escaneado es no interactivo, así que coloca tu propio texto y tus marcas de verificación en la página con Marcado o con la app PDF Editor, y luego exporta. No hay campos en los que escribir.",
    },
    {
      q: "¿Es privado rellenar un formulario en el iPhone?",
      a: "Con la app PDF Editor el formulario se rellena en el dispositivo, así que los datos que introduces no se envían a ningún sitio. Marcado también es local. Las herramientas de relleno basadas en la web pueden subir el archivo a un servidor.",
    },
    {
      q: "¿Cómo devuelvo el formulario completado?",
      a: "Exporta una copia completada y usa el menú para compartir de iOS para enviarla por Mail, Mensajes, o cualquier app. Aplánala primero si quieres que las respuestas queden bloqueadas.",
    },
  ],
  related: [
    {
      label: "Cómo rellenar un formulario PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Cómo rellenar un formulario PDF en Android",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "Cómo firmar un PDF en iPhone",
      path: "/guides/how-to-sign-pdf-on-iphone",
    },
    {
      label: "La mejor app de formularios PDF para iPhone",
      path: "/guides/best-pdf-form-app-for-iphone",
    },
    { label: "El método móvil para formularios PDF", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
