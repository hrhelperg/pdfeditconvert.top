import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-work-documents-as-pdf",
  h1: "Cómo organizar tus documentos de trabajo en PDF (carpetas, nombres, versiones)",
  description:
    "Una convención práctica de nombres y carpetas para los PDF de trabajo — presupuestos, briefs, entregas, archivo — que evita el caos de versiones y deja que cualquiera encuentre cualquier cosa rápido.",
  updated: "2026-05-29",
  intro: [
    "El problema con los PDF de trabajo no suele ser el PDF en sí. Es el rastro: treinta archivos con nombres parecidos en una carpeta de descargas, versiones que no cuadran, versiones «finales» que no lo son, borradores que se ven idénticos a los entregables. El formato está bien; lo que se rompe es la convención alrededor del formato.",
    "Una convención que funciona es corta — una estructura de carpetas, un patrón de nombres y una costumbre sobre dónde van las versiones finales. Una vez que está en marcha, encontrar «el contrato que enviamos en marzo» lleva diez segundos en vez de diez minutos, y los conflictos de versión casi dejan de pasar.",
    "Esta guía describe la convención que hemos visto adoptar y mantener a equipos pequeños. No es la única que funciona; es una lo bastante sólida como para sobrevivir a un trimestre movido sin desmoronarse.",
  ],
  steps: [
    {
      title: "Elige una estructura de carpetas de nivel superior una sola vez",
      body: "Clientes/NombreContrato/, Interno/, Plantillas/, Archivo/. Cuatro carpetas cubren la mayor parte. No anides más de dos niveles al principio — la profundidad hace que te pierdas.",
    },
    {
      title: "Estandariza el patrón de nombre de archivo",
      body: "NombreCliente_TipoDocumento_vN_AAAA-MM-DD.pdf se lee con limpieza en cualquier explorador de archivos. La fecha al final para que los archivos se ordenen cronológicamente; la versión en línea para detectar la más reciente de un vistazo.",
    },
    {
      title: "Separa /borradores y /final dentro de cada proyecto",
      body: "Los borradores van en la subcarpeta /borradores del proyecto; las versiones finales se renombran a FINAL y se mueven a /final o /entregables. La carpeta /final debería contener solo versiones ya enviadas.",
    },
    {
      title: "Usa Unir PDF para consolidar en el traspaso",
      body: "Cuando un entregable en realidad son tres PDF (propuesta + condiciones + precios), únelos en uno para la entrega y conserva los archivos de origen en la carpeta del proyecto. El destinatario recibe un archivo limpio.",
    },
    {
      title: "Comprime y renombra solo en el momento de la entrega",
      body: "Comprimir PDF para la copia de salida; conserva el original sin comprimir. El archivo entregado va en /final/, el origen se queda en /borradores/. Son artefactos distintos.",
    },
    {
      title: "Archiva los proyectos cerrados con calendario",
      body: "Mueve los proyectos cerrados a /Archivo/ trimestralmente. Las carpetas activas se mantienen fáciles de repasar; el archivo es buscable cuando necesites encontrar algo más adelante.",
    },
  ],
  tips: [
    "Evita los espacios en los nombres de archivo si puedes — los guiones bajos o los guiones son más fáciles en URL, reenvíos de correo y comandos de terminal.",
    "El formato de fecha AAAA-MM-DD se ordena cronológicamente en cualquier herramienta. 29/5/26 no lo hace.",
    "No pongas números de versión en el nombre de archivo FINAL. FINAL es FINAL. Si algo cambia después, es FINAL-2 — y eso es una señal de que el proceso falló.",
    "No temas renombrar. Un nombre de archivo claro vale un minuto de trabajo, sobre todo antes de enviar.",
    "Mantén un archivo índice de una línea (LEEME.txt) en proyectos grandes que liste qué hay en cada subcarpeta. Ayuda al tú del futuro que vuelve seis meses después.",
  ],
  mobileNote:
    "En el móvil, organizar cuesta más porque editar nombres de archivo es incómodo. La app PDF Editor te deja renombrar, etiquetar y archivar PDF desde el móvil, así los archivos que llegan al móvil no se amontonan sin nombre en la carpeta de Descargas.",
  faq: [
    {
      q: "¿Cuál es el mejor formato de nombre de archivo?",
      a: "NombreCliente_TipoDocumento_vN_AAAA-MM-DD.pdf. La fecha al final ordena cronológicamente; la versión en línea distingue los borradores; el cliente y el tipo de documento hacen que el archivo se explique solo.",
    },
    {
      q: "¿Debería usar carpetas o etiquetas?",
      a: "Carpetas. Los sistemas de etiquetas existen pero se fragmentan entre dispositivos y apps. Las carpetas son universales.",
    },
    {
      q: "¿Qué hago con los borradores antiguos?",
      a: "Consérvalos en /borradores/ dentro de la carpeta del proyecto hasta que este se cierre, y después archiva todo el conjunto. No los borres — puede que necesites recuperar un dato de un borrador anterior.",
    },
    {
      q: "¿El archivo FINAL necesita un número de versión?",
      a: "No. Una vez que un archivo es FINAL, es la versión canónica. Si algo cambia después, estás en una conversación nueva que tiene su propio FINAL.",
    },
    {
      q: "¿Cómo gestiono archivos de clientes con nombres incoherentes?",
      a: "Renómbralos al recibirlos para que coincidan con tu convención. El minuto que dedicas a renombrar ahorra el tiempo que perderías buscando después.",
    },
  ],
  related: [
    { label: "Herramientas PDF — lista completa de herramientas en el navegador", path: "/pdf-tools" },
    { label: "Unir PDF — combina entregables en el traspaso", path: "/merge-pdf" },
    { label: "Cómo organizar tus archivos PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Método PDF para pequeñas empresas", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "Herramientas PDF — gratis, en el navegador", path: "/pdf-tools" },
};

export default content;
