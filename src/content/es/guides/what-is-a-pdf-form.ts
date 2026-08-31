import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "what-is-a-pdf-form",
  h1: "¿Qué es un formulario PDF? Interactivo o no interactivo",
  description:
    "Un formulario PDF es un documento pensado para recoger respuestas — a veces con campos de verdad en los que escribes, a veces una simple página sobre la que escribes por encima. Qué significa eso y cómo distinguirlos.",
  updated: "2026-06-01",
  intro: [
    "Un formulario PDF es cualquier PDF diseñado para recoger información de la persona que lo abre: una solicitud de empleo, un documento fiscal, una autorización de consentimiento, una ficha de reserva. Lo que distingue a un formulario de un PDF corriente es la intención: espera que añadas respuestas, no que te limites a leerlo. Lo confuso es que dos formularios pueden parecer idénticos en pantalla y comportarse de forma completamente distinta cuando intentas rellenarlos.",
    "La diferencia está en si el formulario tiene campos interactivos. Un formulario interactivo tiene casillas que su diseñador integró en el archivo: tocas una y aparece un cursor, listo para que escribas. Un formulario no interactivo no tiene ninguna; en la práctica es la imagen de un formulario, a menudo el escaneo de un original en papel, donde las líneas y las etiquetas forman parte de la imagen en lugar de ser zonas activas. Los dos son formularios, y los dos se pueden rellenar, pero necesitan un trato distinto.",
    "Saber a cuál te enfrentas lleva unos dos segundos y ahorra mucha frustración. Esta guía explica qué es realmente un formulario PDF, los dos tipos que vas a encontrarte, y cómo distinguirlos antes de empezar a rellenar.",
  ],
  steps: [
    {
      title: "Reconoce que un formulario está pensado para completarse",
      body: "A diferencia de un informe o un contrato que solo lees, un formulario tiene espacios en blanco que esperan respuestas: líneas para el nombre, casillas de verificación, zonas de firma. Esa intención es lo que lo convierte en un formulario, sea cual sea la forma en que se creó.",
    },
    {
      title: "Identifica un formulario interactivo",
      body: "Abre el PDF y toca o haz clic donde debería ir una respuesta. Si aparece un cursor de texto, un campo se resalta o una casilla reacciona, el formulario tiene campos interactivos que su diseñador añadió a propósito.",
    },
    {
      title: "Identifica un formulario no interactivo",
      body: "Si al tocar un espacio en blanco no pasa nada — ni cursor, ni resalte —, el formulario es no interactivo. Las líneas y las etiquetas están integradas en la imagen de la página, así que no hay nada en lo que escribir directamente.",
    },
    {
      title: "Fíjate en cómo se creó",
      body: "Los formularios exportados desde software de diseño de formularios suelen ser interactivos. Los que se imprimieron, se firmaron a mano y luego se volvieron a escanear son casi siempre no interactivos. Conocer el origen del archivo suele predecir el tipo.",
    },
    {
      title: "Elige el método de relleno adecuado",
      body: "Formulario interactivo: toca y escribe. Formulario no interactivo: añade tus propios cuadros de texto y marcas de verificación encima de la página. Un editor de PDF competente gestiona los dos casos en el mismo archivo.",
    },
  ],
  tips: [
    "La prueba más rápida es tocar una línea en blanco. Si aparece un cursor, es interactivo; si no pasa nada, es no interactivo.",
    "Un formulario puede ser parcialmente interactivo: algunos campos son reales y otros faltan. Rellena los reales y añade texto a mano para los huecos.",
    "Los formularios interactivos se rellenan de forma más limpia, pero los no interactivos son perfectamente utilizables — simplemente colocas el texto tú mismo.",
    "Si diseñas un formulario para otras personas, hazlo interactivo siempre que puedas: facilita mucho el trabajo a quien tiene que rellenarlo.",
    "El aspecto de un formulario puede variar entre lectores de PDF, así que un campo que se ve de una forma en tu móvil puede mostrarse ligeramente distinto en el ordenador de otra persona.",
  ],
  mobileNote:
    "En el móvil, la app PDF Editor comprueba si un formulario tiene campos interactivos en cuanto lo abres: donde existen, tocas y escribes; donde no, colocas texto y marcas en cualquier parte de la página. En ambos casos puedes firmar y exportar una copia completada sin pasar por la impresora.",
  faq: [
    {
      q: "¿Todo PDF es un formulario?",
      a: "No. Un PDF solo cuenta como formulario cuando está pensado para recoger respuestas — campos, casillas de verificación, líneas de firma. Un informe o un artículo es un PDF, pero no un formulario.",
    },
    {
      q: "¿Cómo sé si mi formulario PDF es interactivo o no interactivo?",
      a: "Toca o haz clic en un espacio en blanco donde debería ir una respuesta. Si aparece un cursor y puedes escribir, es interactivo. Si no pasa nada, es un formulario no interactivo y añades el texto por encima.",
    },
    {
      q: "¿Se puede rellenar un formulario PDF no interactivo?",
      a: "Sí. Un formulario no interactivo no tiene campos, pero puedes colocar tu propio texto y tus marcas en cualquier parte de la página con un editor de PDF, y luego exportar el archivo completado.",
    },
    {
      q: "¿Por qué alguien enviaría un formulario no interactivo en lugar de uno interactivo?",
      a: "Normalmente porque empezó como papel y se escaneó, o porque la herramienta que lo creó no añade campos. No es un fallo — solo requiere un método de relleno ligeramente distinto.",
    },
    {
      q: "¿Es siempre mejor un formulario interactivo?",
      a: "Es más fácil de completar y tiene un aspecto más cuidado, pero también puede usar funciones que algunos lectores no admiten. Un formulario no interactivo bien hecho es fiable en cualquier sitio, aunque cueste un poco más rellenarlo.",
    },
  ],
  related: [
    {
      label: "PDF editable o PDF rellenable",
      path: "/guides/editable-pdf-vs-fillable-pdf",
    },
    { label: "Cómo funcionan los formularios PDF", path: "/guides/how-pdf-forms-work" },
    {
      label: "Cómo rellenar un formulario PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "PDF editable o PDF plano",
      path: "/guides/editable-pdf-vs-flat-pdf",
    },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
