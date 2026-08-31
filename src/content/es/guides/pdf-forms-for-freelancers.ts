import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-forms-for-freelancers",
  h1: "Los formularios PDF del autónomo (ficha inicial, contratos, señales)",
  description:
    "Ficha de inicio de proyecto, contrato de servicio simple y autorización de señal — el conjunto mínimo de formularios PDF rellenables que necesita un autónomo, sin suscripción y sin subir nada.",
  updated: "2026-06-01",
  intro: [
    "Los autónomos no tienen un equipo de operaciones, así que los formularios adecuados tienen que hacer ese trabajo en silencio. Una ficha de inicio de proyecto corta pone en marcha un encargo nuevo sin una llamada larga. Un contrato de servicio simple fija las expectativas antes de empezar a trabajar. Un formulario de autorización de señal o pago resuelve la cuestión del dinero con limpieza. Tres PDF rellenables mínimos cubren la mayor parte de lo que necesita un operador en solitario.",
    "Todo el atractivo para un autónomo es no tener gastos generales: ninguna suscripción de formularios, ningún inicio de sesión para el cliente, ninguna plataforma que mantener. Un formulario es solo un PDF que envías y recibes. La habilidad está en mantener ese conjunto pequeño y los formularios fáciles de completar, para que un cliente pueda hacer su parte en el móvil en un par de minutos en lugar de posponerlo.",
    "Esta guía cubre los formularios básicos del autónomo y cómo gestionarlos. Es el lado de los formularios del trabajo en solitario — distinto del método de propuesta a factura que gestiona tus entregables.",
  ],
  steps: [
    {
      title: "Mantén una ficha de inicio de proyecto ajustada",
      body: "Recoge solo lo que necesitas para empezar: alcance, plazo, entregables, contacto. Una ficha corta y bien espaciada se devuelve rápido y pone en marcha el proyecto con una base clara.",
    },
    {
      title: "Usa un formulario de contrato de servicio simple",
      body: "Un acuerdo corto con campos para las partes, el alcance, el calendario y las condiciones de pago fija las expectativas desde el principio. Mantén los términos como texto bloqueado y solo los detalles variables como campos.",
    },
    {
      title: "Gestiona las señales con un formulario de autorización",
      body: "Un formulario claro que cubra el importe, qué asegura y el calendario convierte la conversación sobre el dinero en algo rutinario en lugar de incómodo. El cliente lo completa y lo firma antes de que empiece el trabajo.",
    },
    {
      title: "Envíalo todo como PDF rellenables",
      body: "Adjunta los formularios en blanco directamente y dile al cliente que puede rellenarlos en una app de PDF desde el móvil — tocar campos o añadir texto, firmar, y devolver una copia aplanada.",
    },
    {
      title: "Archiva los formularios completados por cliente",
      body: "Renombra los formularios devueltos por cliente y fecha, guárdalos con ese proyecto, y mantén los másteres en blanco por separado. Todo tu rastro administrativo vive en carpetas ordenadas, sin necesidad de ninguna herramienta.",
    },
  ],
  tips: [
    "Mantén el conjunto en tres o cuatro formularios; un kit ligero es más fácil de mantener y más rápido para los clientes que uno enorme.",
    "Haz que cada formulario se pueda rellenar desde el móvil — la mayoría de los clientes completarán el tuyo desde ahí, y un formulario fácil se devuelve antes.",
    "Bloquea las condiciones y deja rellenables solo los detalles variables, para que un contrato de servicio no se pueda alterar en silencio mientras se completa.",
    "Para acuerdos con relevancia legal, el PDF gestiona la mecánica; confirma cualquier duda de validez con las partes o un asesor, ya que los requisitos varían.",
    "Los formularios de cliente llevan datos personales y de pago — mantenlos en archivos adjuntos directos en lugar de webs públicas de relleno.",
  ],
  mobileNote:
    "Los clientes completan tu ficha de inicio, tu contrato y tu formulario de señal en el móvil con la app PDF Editor — rellenando campos o añadiendo texto a formularios no interactivos, firmando, y devolviendo una copia aplanada. Es en el dispositivo, así que los datos personales y de pago que introducen no se suben a ningún sitio.",
  faq: [
    {
      q: "¿Qué formularios PDF necesita un autónomo?",
      a: "Un conjunto ligero: una ficha de inicio de proyecto, un contrato de servicio simple, y un formulario de autorización de señal o pago. Tres o cuatro PDF rellenables cubren la mayor parte del trabajo en solitario sin ninguna suscripción.",
    },
    {
      q: "¿Necesito una plataforma de formularios como autónomo?",
      a: "No. Un formulario es solo un PDF que envías y recibes. Una app de PDF competente los rellena y los firma, y un sistema de carpetas ordenado gestiona el resto — sin necesidad de plataforma ni de que el cliente inicie sesión.",
    },
    {
      q: "¿Son legalmente vinculantes los acuerdos de servicio en PDF?",
      a: "Depende de tu jurisdicción y del acuerdo, algo que una herramienta de PDF no puede determinar. El PDF gestiona la mecánica — campos, firma, aplanado; confirma las dudas de validez con las partes o un asesor.",
    },
    {
      q: "¿Cómo rellenan mis clientes los formularios desde el móvil?",
      a: "Abren el formulario en una app de PDF, tocan campos o añaden texto a un formulario no interactivo, firman, y exportan una copia completada. Recomendar una app evita el problema de «no puedo escribir» en la vista previa de correo.",
    },
    {
      q: "¿En qué se diferencia esto de un método PDF para autónomos?",
      a: "Esto trata de los formularios que rellenan los clientes — ficha inicial, acuerdos, señales. La guía de método para autónomos cubre tus entregables: propuestas, documentos firmados y facturas.",
    },
  ],
  related: [
    {
      label: "El mejor método PDF para autónomos",
      path: "/guides/best-pdf-workflow-for-freelancers",
    },
    {
      label: "Cómo enviar una ficha de cliente para rellenar",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "Cómo usar un formulario PDF para un contrato",
      path: "/guides/how-to-use-pdf-forms-for-contracts",
    },
    {
      label: "Formularios PDF para pequeñas empresas",
      path: "/guides/pdf-forms-for-small-business",
    },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
