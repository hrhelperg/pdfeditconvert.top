import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-out-a-pdf-form",
  h1: "Cómo rellenar un formulario PDF (interactivo o no)",
  description:
    "Rellena cualquier formulario PDF, tenga campos de verdad o sea un escaneo sobre el que escribes. La guía completa para ordenador y móvil, con firma y guardado incluidos.",
  updated: "2026-06-01",
  intro: [
    "Rellenar un formulario PDF es sencillo en cuanto sabes a cuál de los dos tipos te enfrentas. Un formulario interactivo tiene campos que tocas y en los que escribes; un formulario no interactivo es la imagen de una página en la que colocas tu propio texto. La mayoría de los formularios son de un tipo o del otro, a veces una mezcla, y ambos se pueden completar digitalmente sin tocar nunca una impresora.",
    "Esta es la guía completa — la referencia central del tema, que cubre tanto el caso interactivo como el no interactivo, en ordenador y en móvil. La mecánica es la misma idea cada vez: colocar tus respuestas en la página, gestionar casillas y fechas, firmar si hace falta, y luego guardar una copia limpia conservando el original en blanco.",
    "Si buscas específicamente los pasos en el móvil, las guías móviles profundizan en iPhone y en Android. Aquí el objetivo es el método universal que funciona sea cual sea el dispositivo, con notas honestas sobre dónde los formularios pueden resultar incómodos.",
  ],
  steps: [
    {
      title: "Abre el formulario y haz la prueba del toque",
      body: "Abre el PDF y haz clic o toca donde debería ir la primera respuesta. Un cursor o una casilla resaltada indican campos interactivos; si no pasa nada, es no interactivo y tendrás que añadir el texto tú mismo.",
    },
    {
      title: "Rellena los campos interactivos escribiendo",
      body: "Toca un campo y escribe. Usa Tab o desplázate para pasar de un campo a otro, haz clic en las casillas de verificación para marcarlas, y abre los desplegables para elegir entre las opciones disponibles. Trabaja de arriba abajo para no dejarte ninguno.",
    },
    {
      title: "Rellena los formularios no interactivos con cuadros de texto",
      body: "En un formulario sin campos, usa la herramienta de texto para colocar tu respuesta en cada línea. Haz zoom primero para que el texto caiga con precisión sobre la línea en lugar de quedar flotando por encima o por debajo.",
    },
    {
      title: "Gestiona casillas, fechas y selecciones",
      body: "Marca directamente las casillas interactivas; en un formulario no interactivo, coloca una marca o una equis. Añade las fechas que se pidan, respetando el formato que muestre el formulario (día-mes-año o mes-día-año).",
    },
    {
      title: "Firma si el formulario lo pide",
      body: "Usa la herramienta de firma para añadir una firma escrita o manuscrita en la zona de firma. El mismo paso funciona tanto si el campo de firma es interactivo como si es simplemente una línea impresa.",
    },
    {
      title: "Guarda una copia rellena y conserva el original",
      body: "Exporta una versión terminada como un archivo nuevo, aplanándola si quieres para bloquear las respuestas. Conserva el original en blanco para poder rellenar una copia nueva la próxima vez.",
    },
  ],
  tips: [
    "Conserva siempre el original en blanco sin tocar — volver a rellenar una copia limpia es más ordenado que editar las respuestas de la última vez.",
    "En los formularios no interactivos, fija un tamaño de texto homogéneo para que todas las respuestas tengan un aspecto uniforme en lugar de un mosaico de fuentes.",
    "Revisa los campos obligatorios antes de enviar; un formulario devuelto por una sola casilla en blanco hace perder más tiempo que una última revisión.",
    "Si un campo no acepta texto, puede que el formulario sea no interactivo o esté bloqueado — pasa a colocar texto por encima, o consulta las guías de solución de problemas.",
    "Aplana el formulario antes de enviarlo si quieres que las respuestas se muestren igual para cada destinatario.",
  ],
  mobileNote:
    "La app PDF Editor rellena tanto formularios interactivos como no interactivos, en iPhone y en Android: detecta los campos reales donde existen y te deja colocar texto y marcas en cualquier parte donde no. Firma en la misma sesión y exporta una copia completada — todo en el dispositivo, sin subir nada.",
  faq: [
    {
      q: "¿Cómo relleno un formulario PDF que no tiene ningún campo?",
      a: "Usa la herramienta de texto de un editor de PDF para colocar tus respuestas directamente en la página, añade marcas donde haga falta, y luego exporta. El formulario es no interactivo, así que colocas texto por encima en lugar de escribir en campos.",
    },
    {
      q: "¿Puedo rellenar un formulario PDF gratis?",
      a: "Sí. Las herramientas gratuitas en el navegador y en el móvil rellenan tanto formularios interactivos como no interactivos. La app PDF Editor gestiona el relleno y la firma sin necesidad de cuenta.",
    },
    {
      q: "¿Tengo que imprimir el formulario para rellenarlo?",
      a: "Casi nunca. Los dos tipos de formulario se pueden completar en pantalla y devolver digitalmente. Imprime solo si un destinatario exige específicamente una copia en papel firmada a mano.",
    },
    {
      q: "¿Por qué el formulario no me deja escribir?",
      a: "Normalmente porque es no interactivo (sin campos), está abierto en un lector que no admite campos, o está bloqueado. Prueba a colocar texto por encima, cambia a una herramienta capaz de gestionar formularios, o consulta las guías de solución de problemas.",
    },
    {
      q: "¿Cómo me aseguro de que mis respuestas no se van a borrar?",
      a: "Guarda con una herramienta que escriba los valores de los campos en el archivo, y aplana el formulario antes de enviarlo para que las respuestas se fusionen de forma permanente con la página.",
    },
  ],
  related: [
    { label: "¿Qué es un formulario PDF?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Cómo rellenar un formulario PDF en iPhone",
      path: "/guides/how-to-fill-pdf-forms-on-iphone",
    },
    {
      label: "Cómo rellenar un formulario PDF en Android",
      path: "/guides/how-to-fill-pdf-forms-on-android",
    },
    {
      label: "Cómo guardar un formulario PDF relleno",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    { label: "Buenas prácticas para formularios PDF", path: "/guides/pdf-form-best-practices" },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
