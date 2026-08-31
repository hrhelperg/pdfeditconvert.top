import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "document-collection-workflows-with-pdf",
  h1: "Cómo recopilar documentos en PDF — un método que funciona",
  description:
    "¿Tienes que recoger archivos y formularios firmados de tus clientes? Monta una recopilación repetible: una lista, formatos homogéneos, y una forma clara de saber qué falta todavía.",
  updated: "2026-06-01",
  intro: [
    "Recoger documentos de otras personas es su propio tipo de proyecto. Incorporar a un cliente, procesar una solicitud, cerrar un trato — cada uno suele necesitar de vuelta un conjunto de archivos y formularios firmados de otra persona, y el resultado habitual es un hilo de correos disperso en el que nunca recuerdas bien qué queda pendiente. Un método repetible de recopilación en PDF sustituye ese caos por una lista y una carpeta.",
    "Esto es distinto de recoger respuestas en un solo formulario. La recopilación de documentos trata de reunir varios elementos — un acuerdo firmado, un documento de identidad, una prueba de algo, un cuestionario completado — de una persona, y saber de un vistazo qué ha llegado y qué falta todavía. El PDF es el formato común natural porque todo puede convertirse en uno.",
    "Esta guía expone un método que escala de un cliente a muchos: define la petición con precisión, facilita la devolución de los elementos, controla lo completo que está, y ensambla lo recopilado en algo ordenado.",
  ],
  steps: [
    {
      title: "Define la petición como una lista de comprobación",
      body: "Enumera exactamente lo que necesitas — cada formulario, cada archivo de apoyo — con una descripción de una línea. Envía la lista junto con la petición para que la otra persona conozca el conjunto completo desde el principio, no a cuentagotas.",
    },
    {
      title: "Estandariza el formato de devolución",
      body: "Pide todo en PDF: formularios aplanados, escaneos de documentos como PDF en lugar de fotos sueltas. Un formato consistente significa que todo se archiva junto y se lee igual.",
    },
    {
      title: "Haz que devolver los elementos sea genuinamente fácil",
      body: "Dirige a la gente hacia una app de PDF para que puedan rellenar formularios, escanear documentos a PDF, y enviar un conjunto ordenado desde el móvil. Cuanto más fácil sea la devolución, más rápida y completa vuelve.",
    },
    {
      title: "Controla qué ha llegado y qué falta",
      body: "Mantén una carpeta por persona y marca la lista a medida que llegan los elementos. Un vistazo te dice qué queda pendiente, así que tu seguimiento es específico — «todavía falta el acuerdo firmado» — no vago.",
    },
    {
      title: "Ensambla el conjunto completado",
      body: "Cuando todo ha llegado, renombra de forma consistente y, si quieres, fusiona el conjunto en un solo PDF por persona. Terminas con un paquete limpio y ordenado en lugar de una docena de archivos sueltos.",
    },
  ],
  tips: [
    "Envía la lista completa desde el principio; las peticiones a cuentagotas son la razón principal por la que una recopilación se alarga.",
    "Pedir PDF (formularios aplanados, documentos escaneados a PDF) mantiene el conjunto devuelto consistente y fácil de archivar.",
    "Una carpeta por persona más una lista marcada hace que los seguimientos sean específicos en lugar de un «¿me puedes enviar el resto?».",
    "Fusionar un conjunto completado en un solo PDF te da un único paquete ordenado por persona.",
    "Los documentos recopilados suelen ser sensibles — mantenlos en canales directos o un disco privado, no en herramientas públicas de subida.",
  ],
  mobileNote:
    "Las personas de las que recopilas documentos pueden hacer toda su parte desde el móvil: escanear documentos a PDF, rellenar y aplanar formularios, y enviar el conjunto con la app PDF Editor. Como funciona en el dispositivo, los archivos sensibles que devuelven no se suben a un servidor de terceros de camino hacia ti.",
  faq: [
    {
      q: "¿Cómo recojo documentos y formularios de mis clientes de forma eficiente?",
      a: "Define la petición completa como una lista desde el principio, pide todo en PDF, facilita la devolución mediante una app de PDF, controla las llegadas contra la lista, y ensambla el conjunto completado en un solo paquete ordenado.",
    },
    {
      q: "¿En qué se diferencia la recopilación de documentos de recoger un formulario?",
      a: "Un solo formulario reúne respuestas en un archivo. La recopilación de documentos reúne varios elementos — formularios más archivos de apoyo — de una persona, así que el foco está en lo completo que está y en controlar qué falta todavía.",
    },
    {
      q: "¿En qué formato debería enviar la gente los documentos?",
      a: "PDF en todo el proceso: formularios aplanados, documentos en papel escaneados a PDF en lugar de fotos sueltas. La consistencia significa que todo se archiva junto y se lee igual.",
    },
    {
      q: "¿Cómo controlo qué queda pendiente?",
      a: "Mantén una carpeta por persona y una lista, marcando los elementos a medida que llegan. Un vistazo muestra qué falta, así que los seguimientos son específicos en lugar de vagos.",
    },
    {
      q: "¿Cómo mantengo privados los documentos recopilados?",
      a: "Usa canales directos o un disco privado en lugar de webs públicas de subida. La gente puede escanear y rellenar en el dispositivo con la app PDF Editor para que sus archivos no se suban al devolverlos.",
    },
  ],
  related: [
    {
      label: "Cómo enviar una ficha de cliente para rellenar",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "Cómo gestionar solicitudes en PDF",
      path: "/guides/how-to-manage-pdf-application-forms",
    },
    {
      label: "Cómo compartir un formulario PDF",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "Cómo escanear un documento a PDF",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
