import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-pdf-application-forms",
  h1: "Cómo gestionar solicitudes en PDF (recogida y revisión)",
  description:
    "¿Recibes solicitudes en PDF? Cómo recogerlas, revisarlas, compararlas y archivarlas sin perder nada de vista — un sistema sencillo para manejar una pila de formularios rellenados.",
  updated: "2026-06-01",
  intro: [
    "Enviar un formulario es la parte fácil; gestionar la avalancha de formularios completados es donde las cosas se complican. Si recoges solicitudes en PDF — candidatos a un puesto, proveedores, participantes de un programa, socios — enseguida acabas con una carpeta llena de archivos llamados «formulario (3).pdf» y ninguna forma clara de revisarlos o compararlos. La solución es un sistema ligero aplicado con consistencia, no una base de datos.",
    "Una buena gestión de solicitudes en formulario se reduce a tres cosas: recibir cada envío en un formato usable y consistente; poder revisarlas y compararlas sin abrir veinte archivos a la vez; y archivarlas para poder encontrar cualquiera más tarde. Nada de eso necesita software especial — solo una convención de nombrado, una estructura de carpetas, y un par de hábitos con el PDF.",
    "Esta guía expone ese sistema para el lado de la recepción de formularios, la contrapartida de enviar fichas de cliente o solicitudes hacia fuera. Asume un goteo constante o un lote periódico, el volumen realista que maneja la mayoría de las pequeñas operaciones.",
  ],
  steps: [
    {
      title: "Insiste en un formato de devolución consistente",
      body: "Pide a los solicitantes que envíen PDF aplanados, no fotos ni archivos editables. Un formato consistente significa que cada envío se lee igual y nada llega a medio rellenar o alterable.",
    },
    {
      title: "Renombra al llegar",
      body: "Renombra cada archivo en el momento en que llega — nombre del solicitante, fecha, quizás una referencia. «apellido-nombre-2026-06.pdf» gana siempre a «escaneo_final.pdf» y hace que la carpeta se pueda revisar de un vistazo.",
    },
    {
      title: "Agrupa en lotes de revisión",
      body: "Coloca las solicitudes de cada ronda en una sola carpeta. Para comparar, puedes fusionar un lote en un solo PDF y pasar sus páginas, o mantenerlas separadas y hojearlas por el nombre del archivo.",
    },
    {
      title: "Controla el estado de forma sencilla",
      body: "Una estructura de subcarpetas — recibidas, preseleccionadas, rechazadas — o una nota breve en cada nombre de archivo mantiene el estado visible sin ninguna herramienta. Mueve los archivos a medida que cambia su estado.",
    },
    {
      title: "Archiva las rondas completadas",
      body: "Cuando se cierra una ronda, mueve su carpeta a un archivo y guarda el máster de solicitud en blanco por separado. Conservas un registro limpio y una plantilla reutilizable para la próxima vez.",
    },
  ],
  tips: [
    "Renombrar al llegar es el hábito de mayor valor — evita el caos de «formulario (3).pdf» antes de que empiece.",
    "Fusionar un lote de solicitudes en un solo PDF hace que la revisión lado a lado sea mucho más rápida que hacer malabares con muchos archivos.",
    "Pide envíos aplanados para que las respuestas no se puedan desplazar y cada archivo se lea de forma consistente.",
    "Una estructura sencilla de carpetas recibidas/preseleccionadas/rechazadas controla el estado sin software extra.",
    "Mantén los datos de los solicitantes fuera de herramientas públicas y sigue las normas de conservación de registros que te apliquen.",
  ],
  mobileNote:
    "Los solicitantes pueden completar y devolver tu formulario desde un móvil con la app PDF Editor, enviando una copia aplanada consistente para archivar. Por tu parte, también puedes revisar los envíos y fusionar un lote para compararlos desde el móvil — útil cuando llegan solicitudes mientras estás lejos de tu escritorio.",
  faq: [
    {
      q: "¿Cómo mantengo organizados los formularios de solicitud completados?",
      a: "Renombra cada archivo al llegar con el nombre del solicitante y la fecha, agrupa cada ronda en una carpeta, controla el estado con subcarpetas, y archiva las rondas cerradas. Una convención de nombrado más carpetas es suficiente — no hace falta ninguna base de datos.",
    },
    {
      q: "¿Cómo puedo comparar muchas solicitudes rápidamente?",
      a: "Fusiona los PDF de una ronda en un solo archivo y pasa sus páginas, o mantenlos separados y hojéalos por nombres de archivo consistentes. Ambos métodos ganan a abrir veinte archivos por separado.",
    },
    {
      q: "¿En qué formato deberían enviar los solicitantes sus formularios?",
      a: "PDF aplanados. Se leen de forma consistente, no se pueden alterar ni borrar, y se archivan con limpieza. Desanima las fotos de impresos y los archivos editables que llegan de forma inconsistente.",
    },
    {
      q: "¿Necesito software especial para gestionar formularios de solicitud?",
      a: "No. Una convención de nombrado consistente, una estructura de carpetas sensata, y herramientas básicas de PDF para fusionar y revisar cubren el volumen realista que maneja la mayoría de las pequeñas operaciones.",
    },
    {
      q: "¿Cuánto tiempo debería conservar los formularios completados?",
      a: "Depende de tus propias necesidades de conservación de registros y de las normas que te apliquen — los requisitos varían. Archiva las rondas cerradas donde puedas recuperarlas, y elimina los datos personales según tu política.",
    },
  ],
  related: [
    {
      label: "Cómo enviar una ficha de cliente para rellenar",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "Cómo recopilar documentos en PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
    {
      label: "Formularios PDF para pequeñas empresas",
      path: "/guides/pdf-forms-for-small-business",
    },
    { label: "Cómo unir archivos PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
