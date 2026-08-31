import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-business",
  hero: {
    eyebrow: "PDF para empresas",
    h1: "PDF para empresas — contratos, facturas y flujos de trabajo",
    highlight: "flujos de trabajo",
    lead: "Contratos, facturas, presupuestos, acuerdos firmados, recibos escaneados: todos los documentos con los que funciona una pequeña empresa, gestionados desde el móvil, sin licencias por usuario ni SaaS de gran empresa.",
    primaryCta: { label: "Abrir la app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Por qué los equipos pequeños siguen batallando con el PDF",
    paragraphs: [
      "Las pequeñas empresas viven en PDF. Los presupuestos salen en PDF, los contratos vuelven firmados en PDF, las facturas son PDF, los recibos se escanean a PDF, los acuerdos de confidencialidad son PDF. Y sin embargo, las herramientas para gestionarlos o tienen precio de gran empresa o son webs poco fiables.",
      "El software PDF para grandes empresas da por hecho que tienes un departamento de informática y un proceso de compras. Las herramientas web gratuitas dan por hecho que no te importa subir los contratos de tus clientes a un servidor de terceros. Ninguno de los dos modelos encaja con una agencia de cinco personas, un autónomo o un pequeño negocio online que necesita procesar documentos rápido y sin burocracia.",
      "Un conjunto de herramientas PDF nativo, pensado para el móvil, encaja mejor con los equipos pequeños. Sin licencias que gestionar, sin colas de subida que coordinar, sin cuota mensual por una herramienta que se usa unas pocas veces por semana. Cada persona del equipo instala la app en su móvil y es productiva desde el primer día.",
    ],
  },
  features: {
    heading: "Las operaciones que de verdad importan a los equipos pequeños",
    items: [
      {
        icon: "FileSignature",
        title: "Presupuesto → contrato → firma",
        body: "Envía un presupuesto en PDF, recibe la aceptación firmada, guarda el resultado. Todo el ciclo cabe en un móvil.",
      },
      {
        icon: "Receipt",
        title: "Escaneo de recibos en el momento",
        body: "Escanea los recibos de papel en cuanto los recibes. El nombrado automático y el OCR los dejan listos para tu herramienta de contabilidad.",
      },
      {
        icon: "ShieldCheck",
        title: "Protege documentos sensibles",
        body: "Protege con contraseña contratos, nóminas en PDF y copias de acuerdos de confidencialidad antes de compartirlos fuera de la empresa. AES-256, en el dispositivo.",
      },
      {
        icon: "Combine",
        title: "Combina y divide entregables",
        body: "Une un presupuesto con su alcance de trabajo; divide una exportación larga por cliente. Las dos cosas se hacen en tres toques.",
      },
      {
        icon: "Wand",
        title: "Retoques rápidos, sin ordenador portátil",
        body: "Corrige una errata en un presupuesto, actualiza una fecha en una factura, cambia el logotipo de un folleto: todo desde el móvil.",
      },
      {
        icon: "Globe",
        title: "Funciona con tu nube de siempre",
        body: "Drive, iCloud, OneDrive, Dropbox: la app lee y guarda donde tu equipo ya almacena sus archivos.",
      },
    ],
  },
  steps: {
    heading: "Un flujo de trabajo típico de una pequeña empresa",
    items: [
      {
        title: "Recibes una petición",
        body: "Un cliente pide un presupuesto. Lo redactas en tu herramienta de facturación y lo exportas a PDF.",
      },
      {
        title: "Firma y pon fecha",
        body: "Abre el PDF en PDF Editor, fírmalo con tu firma guardada, añade un sello de fecha.",
      },
      {
        title: "Envíalo por correo o mensajería",
        body: "Comparte el presupuesto firmado directamente desde la app mediante el menú para compartir del correo o la herramienta de mensajería de tu equipo.",
      },
      {
        title: "Recibes la versión contrafirmada",
        body: "Cuando el cliente te la devuelva, abre el archivo, archívalo en tu nube y protégelo con contraseña si contiene condiciones sensibles.",
      },
      {
        title: "Genera la factura y únela al contrato",
        body: "Exporta la factura desde tu herramienta de contabilidad y usa Unir para juntar factura y contrato firmado en un único PDF de archivo.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Dirigir un negocio desde el móvil",
    body: "Buena parte del trabajo documental de una pequeña empresa ocurre entre otras tareas: en las instalaciones de un cliente, en un taxi, entre recogida y recogida del colegio. Que sea nativo del móvil significa que el flujo de trabajo ya no depende de estar sentado en un escritorio. Los contratos que antes esperaban a la noche y al portátil ahora salen en la misma hora en que se piden.",
  },
  faq: [
    {
      q: "¿Sirve la app para un equipo de 5 a 20 personas?",
      a: "Sí, para usuarios individuales dentro de un equipo pequeño: cada persona la instala en su propio móvil. No hay una consola de administración centralizada; es una herramienta por dispositivo. Para organizaciones más grandes, un sistema de gestión documental de empresa puede ser más adecuado.",
    },
    {
      q: "¿Puedo usarla para contratos con validez legal?",
      a: "La mayoría de las jurisdicciones aceptan PDF firmados para contratos comerciales estándar. El Reglamento eIDAS de la Unión Europea y la ESIGN Act de Estados Unidos reconocen la firma electrónica. Para acuerdos de alto valor, regulados o transfronterizos, consulta la normativa local y valora una firma electrónica cualificada.",
    },
    {
      q: "¿Se integra con herramientas de contabilidad?",
      a: "PDF Editor genera PDF estándar que acepta cualquier herramienta de contabilidad (Xero, QuickBooks, FreeAgent, Pleo, etc.). No hace falta ninguna integración especial: basta con guardar el PDF en tu nube para que la herramienta de contabilidad lo recoja.",
    },
    {
      q: "¿Cómo mantengo privados los archivos de mis clientes?",
      a: "Todas las operaciones se ejecutan en el dispositivo. Los archivos solo salen de tu móvil cuando tú decides compartirlos. Aplica protección con contraseña a los documentos especialmente sensibles antes de compartirlos fuera de la empresa.",
    },
    {
      q: "¿Qué pasa con el registro de auditoría?",
      a: "Los PDF firmados incluyen metadatos de la firma (fecha y hora, nombre de quien firma). Para sectores regulados que exigen un registro de auditoría completo, complementa con una plataforma dedicada de firma electrónica: PDF Editor gestiona los contratos del día a día, no los flujos regulados.",
    },
  ],
  related: [
    { label: "Seguridad y cifrado de PDF", path: "/pdf-security" },
    {
      label: "Flujos de PDF seguros para empresas",
      path: "/guides/secure-pdf-workflows-for-business",
    },
    { label: "Firma un PDF en el móvil", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Gestiona tus documentos de empresa desde el móvil.",
    sub: "Gratis para el uso diario de empresa. Sin licencias por usuario.",
  },
};

export default content;
