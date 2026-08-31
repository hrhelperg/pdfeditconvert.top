import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-workflow-for-freelancers",
  h1: "El mejor método PDF para autónomos",
  description:
    "Un método PDF repetible para un autónomo: propuesta enviada, contrato firmado, factura emitida. Las herramientas gratuitas y la app que lo mantienen todo rápido y privado.",
  updated: "2026-05-23",
  intro: [
    "Para un autónomo, los PDF no son papeleo — son el negocio. La propuesta que gana el proyecto, el contrato que te protege, la factura que hace que te paguen: todo viaja como PDF, y lo fluido que sea ese movimiento afecta directamente a tu flujo de caja y a lo profesional que pareces. Un enfoque disperso e improvisado te cuesta un tiempo que no facturas.",
    "Esta guía plantea un método PDF repetible construido alrededor de los documentos que más envía un autónomo. Usa herramientas gratuitas en el navegador que funcionan en tu dispositivo — sin subir nada, sin cuota de suscripción en tus gastos generales — más la app PDF Editor para firmar y enviar sobre la marcha entre reuniones con clientes.",
    "El objetivo es una rutina que funcione en piloto automático: propuesta a PDF, contrato firmado y devuelto, factura enviada, todo con aspecto deliberado y con el tamaño correcto.",
  ],
  steps: [
    {
      title: "Envía propuestas como PDF bloqueados",
      body: "Escribe en tu editor y después convierte a PDF con la herramienta Word a PDF. Un PDF conserva tu maquetación y tus precios exactamente como los diseñaste, e impide que un cliente edite las cifras.",
    },
    {
      title: "Combina los documentos de apoyo en un solo archivo",
      body: "Agrupa la propuesta con casos de éxito o condiciones usando la herramienta Unir PDF, para que el cliente abra un documento profesional en vez de un montón de adjuntos.",
    },
    {
      title: "Firma y devuelve contratos rápido",
      body: "Cuando el contrato vuelve para la firma, la app PDF Editor lo firma en tu móvil con una firma guardada y lo devuelve en menos de una hora — una rapidez que transmite que eres fácil de tratar.",
    },
    {
      title: "Envía facturas que no se puedan alterar",
      body: "Exporta las facturas a PDF para que el importe y los datos bancarios queden fijos. Añade una marca de agua discreta si envías borradores para aprobación antes de la versión final.",
    },
    {
      title: "Ajusta el tamaño de todo antes de enviarlo",
      body: "Comprime propuestas con muchas diapositivas y recibos escaneados con la herramienta Comprimir PDF para que nada rebote de la bandeja de un cliente o de un portal de contabilidad.",
    },
    {
      title: "Conserva originales limpios y archiva",
      body: "Guarda originales sin marcar de plantillas y acuerdos firmados en carpetas con nombres claros. Un contrato firmado que encuentras en segundos vale mucho cuando aparece una disputa o un cliente recurrente.",
    },
  ],
  tips: [
    "Envía siempre las versiones finales como PDF, nunca como documento editable — un cliente no debería poder ajustar en silencio tu alcance o tu precio.",
    "La rapidez al firmar es una ventaja competitiva. Devolver un contrato firmado en la misma hora te convierte en el autónomo fácil de tratar.",
    "Nombra los archivos como un profesional: «Propuesta-NombreCliente-2026-05.pdf». Se ve intencionado en su bandeja de entrada y es fácil de encontrar en la tuya.",
    "Usa herramientas que no suban el trabajo de tus clientes. Las propuestas confidenciales y los contratos firmados no deberían pasar por el servidor de un desconocido.",
    "Convierte en plantilla lo que repites. Una base reutilizable de propuesta y factura, exportada fresca a PDF cada vez, ahorra horas a lo largo de un mes.",
  ],
  mobileNote:
    "Ser autónomo pasa entre sitios — una cafetería, la oficina de un cliente, el tren. La app PDF Editor te deja firmar un contrato, enviar una factura y agrupar una propuesta desde tu móvil, sin conexión y en el dispositivo, para que un trato nunca se estanque porque no estabas en tu mesa.",
  faq: [
    {
      q: "¿Por qué enviar los documentos de autónomo como PDF en vez de Word?",
      a: "El PDF bloquea tu maquetación, precios y condiciones para que un cliente no pueda editarlos, ni de forma intencionada ni por accidente. También se abre igual en cualquier dispositivo, lo que resulta más profesional.",
    },
    {
      q: "¿Cuál es la forma más rápida de firmar y devolver un contrato?",
      a: "La app PDF Editor con una firma guardada. Abre el contrato, coloca tu firma, exporta y envía — a menudo en minutos desde que lo recibes.",
    },
    {
      q: "¿Son estas herramientas de suscripción?",
      a: "Las herramientas del navegador — convertir, unir, comprimir, dividir — son gratis y sin registro. Eso mantiene los costes recurrentes de software fuera de tus gastos generales.",
    },
    {
      q: "¿Se mantiene privado el trabajo de mis clientes?",
      a: "Las herramientas del navegador procesan los archivos en tu dispositivo sin subirlos, y la app funciona sin conexión. Las propuestas y contratos confidenciales siguen siendo tuyos.",
    },
    {
      q: "¿Cómo debería organizar los contratos firmados?",
      a: "Conserva originales fechados y con nombres claros en carpetas dedicadas, idealmente sincronizadas con la nube. Un acuerdo firmado que puedes recuperar al instante vale mucho si surge una disputa.",
    },
  ],
  related: [
    { label: "PDF Editor para el trabajo remoto", path: "/use-cases/remote-work" },
    { label: "PDF Editor para autónomos — visión general", path: "/use-cases/freelancers" },
    { label: "Todas las herramientas PDF gratis", path: "/pdf-tools" },
    { label: "Cómo firmar un PDF desde el móvil", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "Cómo unir archivos PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "PDF para empresas", path: "/pdf-for-business" },
};

export default content;
