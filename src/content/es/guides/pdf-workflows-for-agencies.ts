import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-agencies",
  h1: "Método PDF para agencias (presentaciones, briefs, aprobaciones)",
  description:
    "La cadena PDF de una agencia — presentaciones, briefs creativos, aprobaciones del cliente, entregas — mantenida rápida y predecible con herramientas gratuitas, privadas y del navegador.",
  updated: "2026-05-29",
  intro: [
    "Las agencias procesan más PDF de los que creen. Salen presentaciones, vuelven briefs, el trabajo creativo pasa por rondas de aprobación, los entregables salen por lotes, los informes de cierre acaban en carpetas compartidas. Cada uno de esos pasos es una tarea pequeña; juntos son la arteria por la que respira la agencia.",
    "La mayoría de los movimientos PDF de una agencia se repiten: convertir una presentación en un PDF listo para enviar, fusionar una versión para presentar en directo con sus anexos, comprimir para los portales del cliente, marcar los borradores durante la revisión, firmar aprobaciones, archivar al cerrar el proyecto. Con un ritmo bien pensado y las herramientas justas, esto se mantiene ligero. Sin él, se come horas.",
    "Esta guía describe el método que hemos visto funcionar en agencias pequeñas. Nada de esto requiere software PDF de pago; la mayor parte funciona en una pestaña del navegador sin enviar material sensible del cliente a ningún servidor.",
  ],
  steps: [
    {
      title: "Presentación comercial: exportar, comprimir, revisar la marca",
      body: "Presentación de diapositivas → exportación a PDF → compresión para el correo del prospecto. Confirma que las fuentes están incrustadas para que los títulos no se sustituyan en el equipo del prospecto. Portada con el nombre del prospecto, título en los metadatos, nombrado NombreProspecto_Presentacion_AAAA-MM-DD.pdf.",
    },
    {
      title: "Brief creativo: fusiona el encargo con los materiales",
      body: "Documento de brief más materiales del cliente (logotipos, ejemplos, manual de marca) → Fusionar PDF en un único archivo de trabajo al que el equipo pueda recurrir. Conserva los originales; la versión fusionada es solo para consulta rápida.",
    },
    {
      title: "Aprobaciones: PDF firmado, marcas de agua de borrador durante la revisión",
      body: "Los borradores circulan con Añadir marca de agua a PDF estampando BORRADOR. Cuando el cliente aprueba, un PDF firmado formaliza la aprobación, con Firmar PDF recogiendo el visto bueno. Los archivos finales pierden la marca de agua.",
    },
    {
      title: "Entregables: PDF de alta calidad, separado de los archivos de trabajo",
      body: "Los entregables finales se exportan con más calidad que las versiones internas. Reordenar páginas de PDF confirma el orden definitivo; Extraer páginas de PDF elimina lo que no debe salir.",
    },
    {
      title: "Comprime para los portales del cliente",
      body: "La mayoría de los portales de cliente de empresa limitan entre 10 y 25 MB. Comprimir PDF deja los entregables por debajo del límite sin pérdida de calidad evidente. El archivo entregado es la copia comprimida; el archivo de origen conserva la versión sin comprimir.",
    },
    {
      title: "Archiva al cerrar el proyecto",
      body: "Traslada la carpeta del proyecto a /Histórico/[Año]/[Cliente]/[NombreProyecto]/. La carpeta activa se mantiene ligera; el histórico es la fuente de casos de estudio para la siguiente presentación comercial.",
    },
  ],
  tips: [
    "Las presentaciones pensadas para pantalla deberían exportarse con menos compresión que las pensadas para imprimir — los artefactos visuales se notan menos en pantalla.",
    "Estandariza la portada de las presentaciones. Logotipo, nombre del prospecto, fecha, contacto de la agencia. Maquetaciones distintas en cada presentación transmiten incoherencia en la agencia.",
    "Marca todos los borradores con marca de agua. En cuanto un borrador pierde su marca de agua en la cadena, la trazabilidad se difumina.",
    "Las aprobaciones deben quedar en PDF firmados, no en hilos de chat. Tu yo del futuro necesitará un registro defendible.",
    "Prepara de antemano una carpeta /Plantillas/ con portada de presentación, plantilla de brief y formulario de visto bueno. Reutilizar siempre gana a volver a crear.",
  ],
  mobileNote:
    "La vida de agencia sucede en el móvil: durante los rodajes, en tránsito, en las oficinas del cliente. La app PDF Editor gestiona borradores, firmas y reexportaciones rápidas desde el móvil, así que una aprobación puede cerrarse desde el teléfono en vez de esperar a volver al ordenador.",
  faq: [
    {
      q: "¿Qué tamaño debería tener el PDF de una presentación comercial?",
      a: "Por debajo de 10 MB idealmente; por debajo de 25 MB siempre. Las presentaciones muy visuales comprimen menos que las de texto; vigila el tamaño a medida que crece la presentación.",
    },
    {
      q: "¿Deberíamos usar una única plantilla para cada presentación?",
      a: "Sí para la estructura, no para el contenido creativo. El lector debe reconocer al instante que «esto es una propuesta de la agencia»; el contenido creativo distingue a cada una.",
    },
    {
      q: "¿Cómo llevamos el control del estado de las aprobaciones?",
      a: "Con el estado de la carpeta: /borradores/, /aprobados/, /entregados/. El PDF de aprobación firmado es el documento que confirma el paso de una carpeta a la siguiente.",
    },
    {
      q: "¿Necesitamos PDF de trabajo y de entrega separados?",
      a: "Sí. Los archivos de trabajo van sin comprimir y con anotaciones; los entregables van comprimidos, limpios y finalizados. No envíes el archivo de trabajo por error.",
    },
    {
      q: "¿Cuál es el error más habitual con PDF en una agencia?",
      a: "Enviar una presentación sin finalizar. Marca los borradores con marca de agua, nómbralos con claridad, y que solo el archivo de /aprobados/ llegue al cliente.",
    },
  ],
  related: [
    { label: "PDF para empresa — contratos y flujos de trabajo", path: "/pdf-for-business" },
    { label: "Fusionar PDF — ensambla briefs y entregables", path: "/merge-pdf" },
    { label: "Método PDF para consultores", path: "/guides/pdf-workflows-for-consultants" },
    { label: "El mejor método PDF para equipos", path: "/guides/best-pdf-workflow-for-teams" },
  ],
  parentHub: { label: "PDF para empresa — contratos y flujos de trabajo", path: "/pdf-for-business" },
};

export default content;
