import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-google-docs",
  h1: "PDF o Google Docs — cuándo usar cada uno",
  description:
    "Google Docs sirve para trabajar en equipo; el PDF sirve para entregar. Cuándo usar cada uno, en la práctica, y cómo pasar de forma limpia de uno a otro en el momento adecuado.",
  updated: "2026-05-29",
  intro: [
    "Google Docs y el PDF no compiten realmente entre sí — sirven a fases distintas de la vida de un documento. Docs sirve para redactar, colaborar, revisar, comentar; el PDF sirve para entregar, fijar, firmar, archivar. Intentar usar cualquiera de los dos fuera de su punto fuerte es precisamente de donde viene la fricción.",
    "Un documento habitual pasa por los dos: se redacta en Docs porque ahí es donde ocurre la colaboración, y luego se exporta a PDF cuando la versión es definitiva y va a salir del grupo de trabajo. En sentido contrario — recibir un PDF e importarlo a Docs para editarlo — funciona, pero siempre con alguna pérdida de fidelidad, así que es un recurso de emergencia, no una rutina.",
    "Esta guía recorre, fase por fase, cuándo usar cada uno de forma realista, además de la mecánica de conversión en ambos sentidos. Elige el formato correcto en el momento adecuado y la fricción prácticamente desaparece.",
  ],
  steps: [
    {
      title: "Usa Google Docs mientras se está redactando el documento",
      body: "Edición con varios autores, cursores en directo, historial de versiones, comentarios. Docs gestiona todo esto con soltura y el PDF no gestiona nada de eso. La redacción y la revisión pertenecen a Docs.",
    },
    {
      title: "Pasa a PDF cuando el documento sea definitivo o vaya a salir fuera",
      body: "En cuanto un documento va destinado a un cliente, un regulador, un proveedor o un archivo, el PDF fija la maquetación y el contenido. El documento de Docs se queda como fuente editable; el PDF es el entregable.",
    },
    {
      title: "Exporta de Docs a PDF con cuidado",
      body: "Archivo → Descargar → Documento PDF. Incrusta las fuentes desde las opciones de exportación si están disponibles. El PDF resultante conserva los títulos, las tablas, las imágenes y el formato.",
    },
    {
      title: "Convierte el PDF a un formato editable solo cuando sea necesario",
      body: "PDF a Word en tu navegador extrae el texto de un PDF. El resultado es aproximado — la maquetación se resiente, las tablas pueden romperse. Trátalo como una vía de recuperación, no como un método habitual.",
    },
    {
      title: "No firmes ni archives en Google Docs",
      body: "Docs no tiene un soporte de firma real, y el historial de versiones queda ligado a tu cuenta de Google. Los documentos firmados y el archivo pertenecen al PDF, guardado en local o en un lugar pensado para eso.",
    },
    {
      title: "Ajusta el formato al destinatario",
      body: "Los clientes esperan PDF. Los correctores esperan Word o Docs. Los equipos internos a veces prefieren Docs para colaborar. Envía el formato que la persona vaya a usar de verdad.",
    },
  ],
  tips: [
    "No envíes un enlace de Google Docs a un cliente — puede que no tenga cuenta de Google, los permisos para compartir pueden sorprenderte, y el documento puede seguir cambiando después de que lo abra.",
    "Al convertir de Docs a PDF, comprueba la paginación — lo que ocupaba una página en Docs a veces se desborda a dos en el PDF.",
    "No «abras en Docs» un PDF que has recibido salvo que necesites una edición pesada de verdad. La conversión pierde formato; el PDF original se lee y se comparte mejor.",
    "Usa el historial de versiones de Docs para la redacción colaborativa. El PDF es la fotografía del momento de la entrega.",
    "Trata Docs como la fuente de verdad mientras se redacta; trata el PDF como la fuente de verdad después de la entrega.",
  ],
  mobileNote:
    "El móvil se encarga de la mayor parte del trabajo PDF de última fase, incluso cuando la redacción ocurre en el ordenador. La app PDF Editor gestiona la compresión de última hora, la firma y el envío del PDF final en iOS y Android — útil en el intervalo entre «Docs ya está» y «el cliente tiene el archivo».",
  faq: [
    {
      q: "¿Puedo dejarlo todo simplemente en Google Docs?",
      a: "Para la colaboración interna, sí. Para la entrega externa, no — los clientes esperan PDF, y los permisos para compartir de Docs pueden abrir accesos de formas que no esperas.",
    },
    {
      q: "¿Funciona bien la conversión de PDF a Docs?",
      a: "Aceptable para recuperar texto, pobre para la maquetación. El texto suele pasar bien; las tablas, las columnas y el formato preciso se resienten. Úsala solo cuando necesites reeditar un PDF del que no tienes la fuente.",
    },
    {
      q: "¿Debería firmar en Google Docs o en el PDF?",
      a: "En el PDF. Las firmas electrónicas reales se aplican al PDF con limpieza; Docs no tiene un soporte de firma nativo comparable al de las herramientas de firma de PDF.",
    },
    {
      q: "¿Y Google Docs para archivar?",
      a: "Es posible, pero arriesgado — las cuentas pueden cambiar, los documentos se pueden borrar, y el formato depende del servicio de Google. El PDF es el mejor formato para un archivo duradero.",
    },
    {
      q: "¿Puedo ir y volver entre Docs → PDF → Docs?",
      a: "Es posible, pero con pérdidas. Cada conversión pierde fidelidad. Conserva el documento de Docs original como fuente editable y haz el ida y vuelta solo como último recurso.",
    },
  ],
  related: [
    { label: "Convertidor PDF — Word, JPG, PNG y viceversa", path: "/pdf-converter" },
    { label: "PDF a Word — convierte para una edición pesada", path: "/pdf-to-word" },
    { label: "PDF o DOCX — comparativa de funciones", path: "/guides/pdf-vs-docx" },
    { label: "PDF o DOCX en la empresa", path: "/guides/pdf-vs-docx-for-business" },
  ],
  parentHub: { label: "Convertidor PDF — Word, JPG, PNG y viceversa", path: "/pdf-converter" },
};

export default content;
