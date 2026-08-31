import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "remote-work",
  h1: "PDF Editor para el trabajo remoto — tus documentos en cualquier sitio",
  description:
    "Trabaja con tus documentos estés donde estés: escanea, firma y comparte un PDF desde cualquier dispositivo.",
  intro: [
    "El trabajo remoto separa la oficina del empleo. La contrapartida es que las operaciones con documentos que antes pasaban por una impresora, un escáner o una unidad compartida ahora tienen que hacerse en el dispositivo que tengas a mano, muchas veces en un tren, en una cafetería o en las instalaciones de un cliente. Un editor de PDF nativo para móvil cierra esa brecha.",
    "El mínimo exigible a cualquier herramienta para el trabajo remoto es que funcione con wifi inestable, que funcione sin conexión cuando haga falta, que no obligue a subir documentos sensibles a un tercero y que funcione en el dispositivo que estés usando en ese momento. PDF Editor cumple los cuatro requisitos porque todas las operaciones pesadas se ejecutan en el dispositivo.",
    "Estos son los flujos de trabajo concretos que convierten un móvil en una oficina documental portátil, sin depender de un escritorio, un país o una conexión en particular.",
  ],
  workflows: [
    {
      title: "Firma documentos mientras viajas",
      body: "Firma un contrato en un vuelo o en un tren. La firma se guarda en el dispositivo; el archivo se cifra al guardarlo.",
    },
    {
      title: "Escanea cuando no tienes escáner",
      body: "Habitaciones de hotel, centros de congresos, oficinas de un cliente: la cámara del móvil más la corrección automática son más que suficientes para cualquier documento de empresa.",
    },
    {
      title: "Junta archivos para una entrega en remoto",
      body: "Une los documentos que necesita tu compañero en un solo PDF, compártelo por Drive o Slack, y ya está.",
    },
    {
      title: "Comprime antes de subir en redes lentas",
      body: "El wifi del hotel hace que los adjuntos grandes sean un suplicio. Comprime primero, sube después, y ahorra una hora.",
    },
    {
      title: "Haz retoques pequeños sin encender el portátil",
      body: "Una errata en un borrador, una fecha equivocada en un presupuesto: corrígelo desde el móvil en 60 segundos y sigue con lo tuyo.",
    },
  ],
  appPitch:
    "PDF Editor encaja de forma natural con el resto de un entorno de trabajo remoto: Drive, iCloud, Notion, Slack, Linear, GitHub. Es la capa que gestiona las operaciones con documentos sin exigir un escritorio ni una conexión estable.",
  related: [
    { label: "PDF para empresas", path: "/pdf-for-business" },
    { label: "Casos de uso: autónomos", path: "/use-cases/freelancers" },
    { label: "Escanear a PDF", path: "/scan-to-pdf" },
  ],
};

export default content;
