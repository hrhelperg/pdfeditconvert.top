import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "mobile-pdf-form-workflow",
  h1: "El método móvil para formularios PDF (de recibirlo a enviarlo)",
  description:
    "Una rutina repetible, pensada para el móvil: recibir, abrir en la app correcta, rellenar, firmar, aplanar, enviar. El proceso completo que no necesita ningún ordenador.",
  updated: "2026-06-01",
  intro: [
    "Los formularios son una de las tareas con PDF genuinamente más cómodas de hacer en el móvil. Llegan por correo, los completas con la mano, y vuelven por el mismo camino — sin necesitar un ordenador en ningún paso. El truco no está en ninguna herramienta concreta; está en tener una rutina repetible para que cada formulario, interactivo o no interactivo, siga el mismo camino desde la bandeja de entrada hasta el envío.",
    "Esta guía expone ese método de principio a fin. Son deliberadamente los mismos cinco movimientos cada vez: llevar el formulario a una app competente, rellenarlo, firmarlo, aplanarlo, enviarlo. En cuanto se convierte en algo automático, un formulario que antes significaba «esperar a estar en el escritorio» se convierte en un trabajo de dos minutos entre otras cosas.",
    "Funciona para los dos tipos de formulario. Los interactivos los tocas y escribes; los escaneos planos los escribes por encima. El método no cambia — solo se adapta el paso de rellenado.",
  ],
  steps: [
    {
      title: "Recibe y guarda el formulario",
      body: "Cuando un formulario llega por correo o mensaje, guárdalo en algún sitio que controles — Archivos o el almacenamiento de tu móvil — en lugar de trabajar dentro de una vista previa que puede ignorar los campos del formulario.",
    },
    {
      title: "Ábrelo en una app capaz de gestionar formularios",
      body: "Abre el archivo guardado en la app PDF Editor. Detecta los campos interactivos si existen y te deja añadir texto a los formularios no interactivos si no. Este único paso evita la mayoría de los callejones sin salida de «no puedo escribir».",
    },
    {
      title: "Rellena según el tipo de formulario",
      body: "Toca y escribe en los campos interactivos, o coloca texto y marcas en un formulario no interactivo. Haz zoom para más precisión, trabaja de arriba abajo, y no te saltes ningún campo obligatorio.",
    },
    {
      title: "Firma en la misma sesión",
      body: "Añade tu firma guardada en la zona de firma sin cambiar de app. Hacerlo de una sola vez significa que no exportas, vuelves a abrir y vuelves a colocar todo otra vez.",
    },
    {
      title: "Aplana y envía",
      body: "Aplana el formulario completado para que las respuestas queden bloqueadas, y envíalo desde el menú para compartir — correo, portal, o mensaje. Guarda el original en blanco para la próxima vez.",
    },
  ],
  tips: [
    "Todo el sentido está en la repetibilidad: los mismos cinco pasos en cada formulario, así deja de ser una decisión y se convierte en un hábito.",
    "Guarda los formularios fuera de las vistas previas de correo antes de rellenarlos — ese único movimiento evita la frustración más común con los formularios en el móvil.",
    "Rellena y firma en una sola sesión para evitar volver a importar y volver a colocar las respuestas.",
    "Aplana antes de enviar para que el destinatario vea tus respuestas exactamente como las escribiste.",
    "Mantén una carpeta de «formularios» con los másteres en blanco para que rellenar de nuevo sea siempre una copia limpia y fresca.",
  ],
  mobileNote:
    "La app PDF Editor está pensada exactamente para este ciclo: detectar campos, rellenar, firmar, aplanar, exportar — todo en el dispositivo, sin subir nada. Como cada paso vive en una sola app, todo el método de recibir a enviar ocurre sin necesitar nunca un portátil.",
  faq: [
    {
      q: "¿De verdad puedo completar formularios PDF enteramente desde el móvil?",
      a: "Sí. Los formularios llegan por correo y vuelven por el mismo camino, y una app de PDF competente gestiona el relleno, la firma, el aplanado y la exportación — así que todo el método no necesita ningún ordenador.",
    },
    {
      q: "¿Cambia el método entre formularios no interactivos e interactivos?",
      a: "Solo el paso de rellenado. Los interactivos los tocas y escribes; los no interactivos les colocas texto encima. Recibir, firmar, aplanar y enviar son idénticos para ambos.",
    },
    {
      q: "¿Por qué abrir los formularios en una app aparte en lugar del correo?",
      a: "Las vistas previas de correo y los visores básicos suelen ignorar los campos de formulario, así que escribir parece imposible. Abrir el archivo guardado en una app de PDF dedicada activa los campos y evita ese callejón sin salida.",
    },
    {
      q: "¿Por qué aplanar antes de enviar?",
      a: "Aplanar fusiona tus respuestas con la página para que el visor del destinatario no las pueda borrar ni alterar, y se muestran de forma coherente en todas partes.",
    },
    {
      q: "¿Es privado el método de formularios en el móvil?",
      a: "Con la app PDF Editor cada paso ocurre en el dispositivo, así que los datos personales que introduces no se suben. Usa el canal oficial del destinatario al presentar formularios sensibles.",
    },
  ],
  related: [
    {
      label: "Cómo rellenar un formulario PDF en iPhone",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "Cómo rellenar un formulario PDF en Android",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "Cómo devolver un formulario PDF relleno",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
    {
      label: "Cómo firmar un PDF desde el móvil",
      path: "/guides/how-to-sign-pdf-on-phone",
    },
    { label: "PDF Editor — rellenar y firmar", path: "/pdf-editor" },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
