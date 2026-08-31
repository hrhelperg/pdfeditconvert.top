import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-pdfs-on-phone",
  h1: "Cómo organizar tus PDF en el móvil",
  description:
    "Evita que los PDF del móvil se conviertan en un caos: renombra, organiza en carpetas, sincroniza con la nube y libera espacio. Una rutina de mantenimiento realista.",
  updated: "2026-05-23",
  intro: [
    "Los PDF se acumulan en un móvil más rápido que en cualquier otro sitio. Adjuntos de correo, escaneos, descargas, fotos convertidas — se amontonan en Descargas o en la app Archivos con nombres como «Documento(3).pdf» hasta que no encuentras el que necesitas justo cuando lo necesitas. Organizarlos no tiene nada de glamuroso, pero diez minutos de rutina ahorran una hora de búsqueda desesperada más adelante.",
    "Esta guía es una rutina de mantenimiento práctica para los PDF de tu iPhone o tu móvil Android: nombrarlos para que se puedan encontrar, organizarlos en carpetas con sentido, sincronizar los importantes y limpiar lo que devora almacenamiento. Se apoya en la app Archivos de tu móvil junto con la app PDF Editor para el trabajo con los documentos.",
    "El objetivo es un móvil donde puedas poner la mano sobre cualquier documento en segundos, y donde el almacenamiento no desaparezca en silencio en escaneos olvidados de 40 MB.",
  ],
  steps: [
    {
      title: "Renombra los archivos según llegan",
      body: "En el momento en que guardes un PDF, ponle un nombre de verdad — «Alquiler-firmado-2026-05.pdf», no «scan_0007.pdf». Un nombre descriptivo es lo que hace que un archivo se pueda encontrar semanas después.",
    },
    {
      title: "Crea unas cuantas carpetas con sentido",
      body: "En la app Archivos, crea carpetas que encajen con tu forma de pensar — Recibos, Contratos, Formularios, Trabajo. Un puñado de carpetas claras supera a un montón gigante.",
    },
    {
      title: "Sincroniza los importantes con la nube",
      body: "Traslada los documentos que no puedes permitirte perder a iCloud Drive, Google Drive o OneDrive para que sobrevivan a un móvil perdido o sustituido — y se abran en tus otros dispositivos.",
    },
    {
      title: "Recorta y ordena los propios documentos",
      body: "Usa la app PDF Editor para fusionar archivos relacionados, quitar páginas en blanco y corregir escaneos torcidos, de modo que cada documento guardado esté limpio en vez de ser un volcado en bruto.",
    },
    {
      title: "Comprime lo que devora espacio",
      body: "Los escaneos grandes se comen el espacio. Comprime los que conservas pero no necesitas a resolución completa, y tu almacenamiento deja de llenarse misteriosamente.",
    },
    {
      title: "Elimina lo que ya no necesitas",
      body: "Borra duplicados y archivos puntuales que ya has enviado. Vacía periódicamente la carpeta de eliminados recientemente para que el espacio liberado se recupere de verdad.",
    },
  ],
  tips: [
    "Renombra en el momento, no «más tarde». Ese momento nunca llega, y una carpeta llena de «Documento(n).pdf» es el resultado.",
    "Elige un único patrón de nombres — «Tipo-Quién-Fecha» funciona bien — y tus archivos se ordenan y se buscan solos.",
    "Sincroniza todo lo que te fastidiaría perder. Un móvil se pierde mucho más fácilmente que una cuenta en la nube, y los archivos sincronizados también se abren en tu portátil.",
    "Comprimir escaneos que conservas pero abres poco recupera más almacenamiento que borrar archivos pequeños.",
    "Una limpieza mensual rápida supera a una excavación arqueológica anual. Diez minutos con regularidad evitan que el montón se convierta en un proyecto.",
  ],
  mobileNote:
    "La app PDF Editor es la parte documental de la gestión de PDF en el móvil: fusiona, recorta, gira, comprime y renombra en un mismo sitio, sin conexión, antes de archivar las cosas. Combínala con tu app Archivos para las carpetas y la sincronización en la nube, y el montón se mantiene bajo control.",
  faq: [
    {
      q: "¿Dónde viven los PDF en mi móvil?",
      a: "En el iPhone, en la app Archivos (a menudo en Descargas o en iCloud Drive); en Android, normalmente en Descargas a través de la app Archivos. Crear carpetas en cualquiera de los dos los mantiene organizados.",
    },
    {
      q: "¿Cómo debería nombrar mis archivos PDF?",
      a: "Usa un patrón coherente y descriptivo con una fecha, como «Tipo-Quién-Fecha.pdf». Hacerlo según llegan los archivos es lo que los mantiene localizables después.",
    },
    {
      q: "¿Cómo evito que los PDF se coman mi almacenamiento?",
      a: "Comprime los escaneos grandes que conservas, borra duplicados y archivos puntuales ya enviados, y vacía la carpeta de eliminados recientemente para recuperar espacio de verdad.",
    },
    {
      q: "¿Debería guardar los PDF en la nube o en el dispositivo?",
      a: "Guarda los importantes en la nube para que sobrevivan a un móvil perdido y se sincronicen con tus otros dispositivos. El almacenamiento solo en el dispositivo está bien para archivos pasajeros que vas a borrar pronto.",
    },
    {
      q: "¿Puedo organizar los propios documentos, no solo los archivos?",
      a: "Sí. La app PDF Editor fusiona, recorta y corrige documentos para que lo que guardes esté limpio — consulta la guía sobre organizar archivos PDF para el flujo completo.",
    },
  ],
  related: [
    { label: "Todas las herramientas PDF gratis", path: "/pdf-tools" },
    { label: "Cómo organizar tus archivos PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Cómo reducir el tamaño de un PDF en iPhone", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
    { label: "Cómo compartir un PDF desde el móvil", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
