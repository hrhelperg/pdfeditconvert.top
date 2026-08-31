import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-docx-for-business",
  h1: "PDF o DOCX en la empresa (contratos, informes, distribución)",
  description:
    "Por qué los documentos profesionales casi siempre circulan en PDF pero viven en DOCX. La herramienta correcta en cada etapa de la vida de un contrato, un informe o una factura.",
  updated: "2026-05-29",
  intro: [
    "Los documentos de empresa tienen un ciclo de vida bastante predecible. Se redactan en Word (DOCX), se revisan y editan en Word, se cierran en Word, y luego se exportan a PDF para la entrega, la firma, el archivo y la distribución. El mismo archivo existe en dos formatos en fases distintas, y usar el formato equivocado en la fase equivocada es de donde viene la mayor parte de la fricción.",
    "El DOCX es el formato de trabajo porque es editable, cómodo para colaborar y lleva bien el control de cambios. El PDF es el formato de entrega porque fija la maquetación, se ve igual en cualquier dispositivo, admite firmas electrónicas y es el estándar universal para archivar documentos de empresa.",
    "Esta guía recorre el ciclo de vida etapa por etapa — cuándo usar cada formato, cómo pasar de uno a otro con limpieza, y los errores habituales que cometen las empresas al enviar el formato equivocado en el momento equivocado.",
  ],
  steps: [
    {
      title: "Redacta en DOCX allí donde ocurre la edición",
      body: "Microsoft Word, Google Docs (exportado a DOCX), Pages → DOCX. El formato admite edición real, comentarios, control de cambios, trabajo con varios autores. El PDF no, por mucho que algunas herramientas lo simulen.",
    },
    {
      title: "Negocia los contratos en DOCX con control de cambios",
      body: "Las correcciones de un contrato pertenecen al DOCX. La otra parte ve qué has cambiado, comenta cada punto y propone una contrapropuesta. Existen herramientas de marcado sobre PDF, pero son más lentas y menos colaborativas.",
    },
    {
      title: "Exporta a PDF cuando la versión sea definitiva",
      body: "Word a PDF en tu navegador produce una exportación limpia con las fuentes incrustadas y una maquetación estable. Esta es la versión que llega al cliente, se firma y vive en el archivo.",
    },
    {
      title: "Firma y entrega en PDF",
      body: "Las firmas se aplican al PDF, no al DOCX. Firmar PDF o la app PDF Editor capturan la firma sobre el PDF ya fijado; la fuente en DOCX se queda como el registro editable.",
    },
    {
      title: "Archiva el PDF, conserva el DOCX",
      body: "El PDF es el registro oficial de lo que se entregó o se firmó. El DOCX se conserva por si necesitas producir un documento relacionado más adelante. Los dos tienen su función; no los confundas.",
    },
    {
      title: "Convierte el PDF de vuelta a DOCX solo cuando no quede otra",
      body: "PDF a Word recupera el texto de un PDF cuando no tienes la fuente. El resultado es aproximado — cuenta con tener que limpiar la maquetación después. Trátalo como recurso de emergencia, no como método habitual.",
    },
  ],
  tips: [
    "No envíes el DOCX a un cliente salvo que lo pida expresamente. La versión en PDF es sobre la que se cierra el acuerdo; el DOCX es tu fuente de trabajo.",
    "Lleva el control de cambios solo en el DOCX. Existen herramientas de anotación sobre PDF, pero no sustituyen un control de cambios real.",
    "Incrusta las fuentes al exportar a PDF. Un PDF que se ve distinto en el ordenador del cliente da una imagen poco profesional.",
    "Comprime el PDF para el correo o para subirlo a un portal. La fuente en DOCX no necesita compresión; ya es pequeña. El PDF, a menudo sí.",
    "Guarda los dos formatos en la carpeta del proyecto. El PDF en /final/, el DOCX en /borradores/ o /fuente/.",
  ],
  mobileNote:
    "El móvil suele encargarse de los últimos momentos del PDF en la empresa — firmar un contrato, comprimir un informe, enviar la versión definitiva. La app PDF Editor gestiona todo esto en iOS y Android, completando el trabajo en DOCX hecho antes en el ordenador.",
  faq: [
    {
      q: "¿Por qué no usar PDF para todo directamente?",
      a: "El PDF no admite edición real, control de cambios ni colaboración con varios autores. Para redactar, el DOCX es genuinamente mejor.",
    },
    {
      q: "¿Por qué no usar también DOCX para entregar?",
      a: "El DOCX se ve distinto según la versión y el dispositivo. El cliente ve una maquetación diferente a la que tú pretendías. El PDF fija el aspecto.",
    },
    {
      q: "¿Los contratos deberían enviarse en PDF o en DOCX?",
      a: "Los contratos definitivos: en PDF, firmados. Los borradores en negociación: en DOCX con control de cambios. Herramientas distintas para fases distintas.",
    },
    {
      q: "¿Y para archivar — DOCX o PDF?",
      a: "PDF, como registro de lo que se entregó o se firmó. Conserva también el DOCX como referencia, pero el PDF es la copia oficial del archivo.",
    },
    {
      q: "¿Cuándo tiene sentido convertir de PDF a Word?",
      a: "Cuando necesitas editar un PDF y no tienes la fuente. Cuenta con tener que limpiar la maquetación; la conversión es aproximada.",
    },
  ],
  related: [
    { label: "PDF para empresa — contratos y flujos de trabajo", path: "/pdf-for-business" },
    { label: "Word a PDF — exportaciones limpias para distribuir", path: "/word-to-pdf" },
    { label: "PDF a Word — recupera texto editable", path: "/pdf-to-word" },
    { label: "PDF o DOCX — comparativa completa de funciones", path: "/guides/pdf-vs-docx" },
  ],
  parentHub: { label: "PDF para empresa — contratos y flujos de trabajo", path: "/pdf-for-business" },
};

export default content;
