import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-small-business",
  h1: "Método PDF para pequeñas empresas (presupuestos, contratos, archivo)",
  description:
    "Cómo lleva una pequeña empresa el flujo de sus documentos en PDF — presupuesto enviado, contrato de vuelta, archivo guardado — sin comprar un paquete de suscripciones para ello.",
  updated: "2026-05-29",
  intro: [
    "Una pequeña empresa maneja más PDF de lo que su dueño espera. Salen presupuestos, vuelven contratos firmados, se emiten facturas, se archivan extractos, se acumulan documentos fiscales. Cada uno de esos pasos es una tarea pequeña, y cada uno puede consumir tiempo cuando el método de trabajo no está bien pensado.",
    "Los paquetes PDF caros se amortizan cuando tienes un equipo legal. Para una empresa de cinco personas con unas pocas docenas de documentos a la semana, herramientas gratuitas del navegador y una convención clara resuelven el mismo trabajo sin una línea más de suscripción en la cuenta. El truco es escribir el método una vez y respetarlo.",
    "Esta guía describe el método para los cuatro tipos de documento con los que más trabajan las pequeñas empresas en PDF: presupuestos, contratos, facturas y archivo. Cada apartado es breve, es concreto, y ninguno exige nada que tengas que pagar.",
  ],
  steps: [
    {
      title: "Presupuestos: plantilla de Word → Word a PDF → envío con tu marca",
      body: "Construye el presupuesto a partir de una plantilla de Word, rellena los datos del cliente y las partidas, y exporta a PDF con Word a PDF. Aplica tu marca en la portada, nombra el archivo NombreCliente_Presupuesto_AAAA-MM-DD.pdf y envíalo.",
    },
    {
      title: "Contratos: PDF → Firmar PDF → bloquear → contrafirma",
      body: "Cierra el texto en el origen, exporta a PDF, fírmalo con Firmar PDF, bloquéalo si tu herramienta lo permite y envíalo para la contrafirma. Guarda tanto la copia con una sola firma como la copia con ambas firmas.",
    },
    {
      title: "Facturas: numeración correlativa, marca de agua al cobrar",
      body: "FRA-2026-001, FRA-2026-002. Llévalas en una hoja de cálculo. Cuando se confirma el cobro, Añadir marca de agua a PDF estampa PAGADO y el archivo pasa de /pendientes/ a /pagadas/.",
    },
    {
      title: "Archivo: recibir, comprimir, guardar por año",
      body: "Extractos bancarios, facturas de proveedores, tickets de gastos. Recíbelos en PDF, comprímelos para archivar y clasifícalos por año en /Archivo/2026/. Consérvalos al menos siete años.",
    },
    {
      title: "Usa una estructura de carpetas compartida",
      body: "Carpetas de primer nivel para /Clientes/, /Archivo/, /Interno/, /Plantillas/, /Histórico/. Como máximo dos niveles de subcarpetas. Todo el equipo usa la misma organización.",
    },
    {
      title: "Concilia cada mes",
      body: "Una vez al mes, revisa la carpeta de facturas /pendientes/ y los proyectos activos en /clientes/. Más de 30 días de retraso, haz seguimiento. Más de 90, escala el asunto. La carpeta hace de lista de tareas.",
    },
  ],
  tips: [
    "No reinventes la plantilla cada vez. Construye una plantilla de presupuesto, una de contrato y una de factura, y reutilízalas.",
    "Firma con una firma manuscrita de verdad, no con un nombre escrito a máquina. Las firmas dibujadas se sostienen mejor ante una disputa.",
    "Comprime cada documento en el momento de enviarlo: los archivos que salen siempre pueden ser más pequeños que los originales internos.",
    "Evita enviar el archivo de Word en vivo a los clientes. En cuanto es PDF, la versión queda fijada.",
    "Haz una limpieza trimestral del archivo. Los proyectos cerrados van a /Histórico/; las carpetas activas se quedan cortas y fáciles de revisar de un vistazo.",
  ],
  mobileNote:
    "Los dueños de pequeñas empresas hacen la mitad de su trabajo con PDF desde el móvil: firman un contrato entre reunión y reunión, envían una factura desde una obra, archivan un ticket durante el día. La app PDF Editor gestiona los cuatro tipos de documento desde el móvil, sin conexión, para que el trabajo no espere a volver a la mesa.",
  faq: [
    {
      q: "¿Necesito un programa de contabilidad para facturar?",
      a: "No con poco volumen. Una plantilla de Word, una hoja de seguimiento y un sistema de carpetas funcionan bien para decenas de facturas al mes. El software se amortiza cuando creces.",
    },
    {
      q: "¿Cómo llevo el control de qué contratos están pendientes?",
      a: "Con una estructura de carpetas: /Clientes/Activos/[Nombre]/contratos/enviados/ y .../firmados/. El estado de la carpeta es el estado del contrato. No hace falta ninguna hoja.",
    },
    {
      q: "¿Y las copias de seguridad?",
      a: "Sincroniza la carpeta de documentos con al menos una nube (Dropbox, iCloud, Google Drive). Guarda además una copia externa periódica para los años de archivo fiscal.",
    },
    {
      q: "¿Debería usar una sola plantilla por tipo de documento?",
      a: "Sí. Las plantillas coherentes hacen que los documentos se reconozcan y reducen el esfuerzo en cada uno. Personaliza el contenido, no la estructura.",
    },
    {
      q: "¿Cuándo empieza a compensar un paquete PDF de pago?",
      a: "Cuando necesitas enrutamiento automático, firma electrónica masiva o registros de auditoría verificables: normalmente a partir de unos 20 empleados o en flujos regulados.",
    },
  ],
  related: [
    { label: "PDF para empresa — contratos y flujos de trabajo", path: "/pdf-for-business" },
    { label: "Firmar PDF — firmas electrónicas", path: "/sign-pdf" },
    { label: "Cómo gestionar facturas en PDF", path: "/guides/how-to-manage-invoices-as-pdf" },
    { label: "Las mejores herramientas PDF gratis para pequeñas empresas", path: "/guides/best-pdf-tools-for-small-business" },
  ],
  parentHub: { label: "PDF para empresa — contratos y flujos de trabajo", path: "/pdf-for-business" },
};

export default content;
