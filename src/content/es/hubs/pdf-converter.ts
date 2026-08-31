import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-converter",
  hero: {
    eyebrow: "Convertidor de PDF",
    h1: "Convertidor de PDF — convierte un PDF a Word, JPG, PNG y viceversa",
    highlight: "viceversa",
    lead: "PDF a Word para editar. PDF a JPG para las apps de mensajería. Word e imágenes de vuelta a PDF para archivar. Una sola app, resultados rápidos, sin subir nada a servidores desconocidos.",
    primaryCta: { label: "Abrir la app", href: SITE.app.appStore },
  },
  problem: {
    heading: "El lío de las conversiones en el que casi todo el mundo cae",
    paragraphs: [
      "El PDF es perfecto hasta que alguien te pide el archivo en Word. O hasta que una app de mensajería no acepta más que JPG. O hasta que necesitas juntar unos recibos (que son imágenes) con un presupuesto (que es un PDF) en un solo documento que puedas enviar.",
      "Las webs públicas de conversión de PDF hacen el trabajo, y crean problemas nuevos. Suben tu archivo a su servidor, a veces lo guardan durante horas, muchas veces cobran por las conversiones a partir de cierto tamaño y raras veces generan un DOCX limpio. La maquetación se descoloca, las fuentes se sustituyen, las tablas se rompen.",
      "Un conversor nativo hace el trabajo en tu propio dispositivo. El mismo motor que maqueta el PDF lo reconstruye en el formato de destino. Las tablas quedan alineadas, las fuentes se sustituyen de forma inteligente, y nunca entregas un contrato sensible a una web gratuita que se financia con publicidad.",
    ],
  },
  features: {
    heading: "Convierte en los dos sentidos",
    items: [
      {
        icon: "FileText",
        title: "PDF → Word (DOCX)",
        body: "Documentos Word editables que conservan la maquetación, las fuentes, las tablas y las imágenes.",
      },
      {
        icon: "Image",
        title: "PDF → JPG y PNG",
        body: "Exporta una sola página o todas como imágenes independientes, listas para mensajería o para una presentación.",
      },
      {
        icon: "Sheet",
        title: "PDF → Excel",
        body: "Extrae las tablas en celdas XLSX de verdad en lugar de pegar capturas de pantalla.",
      },
      {
        icon: "FilePlus",
        title: "Word e imágenes → PDF",
        body: "Convierte un DOCX, la foto de un recibo o una captura de pantalla en un PDF limpio en cuestión de segundos.",
      },
      {
        icon: "ScanText",
        title: "OCR para PDF escaneados",
        body: "Ejecuta reconocimiento de texto en documentos escaneados para que el resultado sea seleccionable y con texto buscable.",
      },
      {
        icon: "Layers",
        title: "Conversión por lotes",
        body: "Pon varios archivos en cola. La app los procesa en local, en segundo plano.",
      },
    ],
  },
  steps: {
    heading: "Cómo convertir un PDF en el móvil",
    items: [
      {
        title: "Abre la app PDF Editor",
        body: "Toca la casilla Convertir en la pantalla de inicio.",
      },
      {
        title: "Elige el archivo de origen",
        body: "Selecciona un PDF, un DOCX, una imagen o cualquier documento que admita la app.",
      },
      {
        title: "Elige el formato de salida",
        body: "Word, Excel, JPG, PNG, PowerPoint: el que necesite quien vaya a recibirlo.",
      },
      {
        title: "Toca Convertir",
        body: "La conversión se hace en el dispositivo. La mayoría de los archivos terminan en pocos segundos.",
      },
      {
        title: "Guarda o comparte",
        body: "Guarda en Archivos, sincroniza con Drive o iCloud, o comparte directamente por Mail o mensajería.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Convertir mientras te mueves",
    body: "La conversión real casi nunca es «convertir esta memoria anual en un Word». Es más bien «convertir la foto de este recibo de hotel en un PDF que pueda adjuntar a un informe de gastos» o «sacar estas tres tablas de un presupuesto para pegarlas en una hoja de cálculo». Las dos cosas pasan en el móvil, entre otras tareas, y hay que hacerlas ya.",
  },
  faq: [
    {
      q: "¿Qué formatos admite?",
      a: "En los dos sentidos: Word (DOCX), Excel (XLSX), PowerPoint (PPTX), JPG, PNG y texto sin formato. Word, imágenes y algunos formatos habituales se pueden convertir a PDF.",
    },
    {
      q: "¿Qué precisión tiene la conversión de PDF a Word?",
      a: "Muy buena en PDF con texto: las tablas, las listas y los títulos se trasladan bien. Las maquetaciones complejas a varias columnas pueden necesitar algún retoque. Los PDF escaneados necesitan OCR primero.",
    },
    {
      q: "¿La conversión se hace sin conexión?",
      a: "Las conversiones estándar se ejecutan en local. Algunas funciones avanzadas (OCR de alta calidad para ciertos idiomas) pueden usar la nube; la app te avisa antes de enviar nada.",
    },
    {
      q: "¿Mis fuentes sobrevivirán a la conversión?",
      a: "La app sustituye las fuentes de forma inteligente. Si una fuente no está instalada en el dispositivo de destino, se usa la más parecida para que el documento se siga leyendo bien.",
    },
    {
      q: "¿Puedo convertir PDF protegidos?",
      a: "Si el PDF tiene contraseña, tendrás que introducirla antes de convertirlo. Los PDF con restricciones de edición suelen convertirse sin problema si conoces la contraseña de apertura.",
    },
  ],
  related: [
    { label: "PDF o DOCX: cuál usar", path: "/guides/pdf-vs-docx" },
    { label: "Comparativa PDF y JPG", path: "/compare/pdf-vs-jpg" },
    { label: "Edita tus PDF después de convertirlos", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Convierte tus PDF sin subirlos a ningún sitio.",
    sub: "Gratis en iOS y Android. Las conversiones se hacen en el dispositivo.",
  },
};

export default content;
