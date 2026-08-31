import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-study-materials-as-pdf",
  h1: "Cómo organizar tu material de estudio en PDF (carpetas, nombres, índice)",
  description:
    "Los PDF de una asignatura se acumulan rápido. Una convención sencilla de carpetas, nombres y unión que mantiene el material del semestre localizable desde la primera semana hasta los exámenes.",
  updated: "2026-05-29",
  intro: [
    "Para la cuarta semana de semestre, tu carpeta de descargas ya tiene cincuenta PDF con nombres como «clase7.pdf», «version-final-2.pdf», «Diapositivas_v3_corregido.pdf» y «Documento.pdf». Para la décima semana ya no encuentras nada. En la semana de exámenes buscas la misma clase tres veces porque no recuerdas en qué versión de qué archivo está la diapositiva que necesitas.",
    "La solución no son ni el software ni las aplicaciones — es una convención. Una estructura de carpetas breve, un nombre de archivo constante y el hábito de fusionar cada semana. Con esas tres cosas en marcha, encontrar una clase concreta dos meses después lleva cinco segundos en lugar de quince minutos.",
    "Esta guía describe la convención que aguanta todo un semestre: cómo deben verse las carpetas, cómo deben leerse los nombres de archivo, cuándo fusionar, y qué pasa al final del curso.",
  ],
  steps: [
    {
      title: "Crea una carpeta de primer nivel por asignatura",
      body: "/Asignaturas/[CodigoAsignatura]/. Dentro: /clases/, /trabajos/, /lecturas/, /examenes/. Cuatro carpetas cubren la mayor parte de lo que va llegando. No anides más de dos niveles.",
    },
    {
      title: "Estandariza el patrón del nombre de archivo",
      body: "SemanaN_TipoDocumento_AAAA-MM-DD.pdf. Así: Semana3_Clase_2026-09-15.pdf, Trabajo2_Entrega_2026-09-20.pdf. La fecha al final ordena cronológicamente; la semana al principio agrupa por tema.",
    },
    {
      title: "Fusiona por semana, no por archivo",
      body: "Al final de cada semana, Fusionar PDF combina los apuntes de esa semana, las diapositivas y las fotos de la pizarra en un único Semana3_Pack_Clase_AAAA-MM-DD.pdf. Un solo archivo por semana es mucho más fácil de retomar después.",
    },
    {
      title: "Añade portadas a los paquetes fusionados",
      body: "Una portada escrita a máquina (asignatura, semana, temas tratados) hace que el paquete se explique solo cuando llegue la época de exámenes. Tu yo del futuro, hojeando doce semanas de paquetes, te lo agradecerá.",
    },
    {
      title: "Archiva al final del semestre",
      body: "Traslada /Asignaturas/[Asignatura]/ a /Histórico/[Año]/[Asignatura]/ cuando termina el semestre. Las carpetas activas se mantienen ligeras; el histórico queda localizable si más adelante necesitas repasar contenido previo.",
    },
    {
      title: "Comprime el histórico, no los archivos activos",
      body: "Comprime el PDF del material archivado para ahorrar espacio en disco. No comprimas los archivos de estudio activos — la legibilidad importa más que el tamaño durante el semestre.",
    },
  ],
  tips: [
    "Usa las fechas en formato AAAA-MM-DD. Se ordenan correctamente en cualquier explorador de archivos. 15/9/26 no lo hace.",
    "No pongas números de versión en el material de estudio. La clase final es la clase; una v2 significa que el profesor volvió a subir el archivo.",
    "Etiqueta la preparación de exámenes por separado — /examenes/parcial/ y /examenes/final/. Es un modo de estudio distinto al repaso semanal.",
    "No fusiones entre asignaturas distintas. Los PDF mezclados entre asignaturas son imposibles de encontrar después.",
    "Mantén un README.txt de una línea en cada carpeta de asignatura indicando qué hay en cada subcarpeta. Ayuda cuando vuelves al material un semestre después.",
  ],
  mobileNote:
    "La mayoría del material de estudio en PDF llega al móvil (por el portal de la clase, por correo del profesor o por tu propio escaneo). La app PDF Editor te permite renombrar, archivar y fusionar directamente desde el móvil, así que el archivo llega al sitio correcto en lugar de acumularse en Descargas.",
  faq: [
    {
      q: "¿Cuál es el mejor formato de nombre para el material de estudio?",
      a: "SemanaN_TipoDocumento_AAAA-MM-DD.pdf. El prefijo de semana agrupa por tema, el tipo de documento aclara el contenido, y la fecha en formato ISO ordena cronológicamente.",
    },
    {
      q: "¿Debería fusionar cada semana o mantener archivos individuales?",
      a: "Fusiona cada semana. Un PDF por semana y por asignatura es la unidad correcta — lo bastante pequeño para cargar rápido, lo bastante grande para bastarse solo a la hora de repasar.",
    },
    {
      q: "¿Hasta qué profundidad deben llegar las carpetas?",
      a: "Dos niveles. /Asignaturas/[Asignatura]/[tipo]/. Más profundo que eso y empiezas a perder archivos.",
    },
    {
      q: "¿Necesito una carpeta de histórico aparte?",
      a: "Sí. Saca los semestres ya terminados de /Asignaturas/ para que la carpeta activa se mantenga fácil de revisar de un vistazo.",
    },
    {
      q: "¿Y la sincronización en la nube?",
      a: "Sincroniza la carpeta /Asignaturas/ con al menos una nube. Poder acceder desde el móvil y desde el portátil importa mucho durante los exámenes; la sincronización lo resuelve.",
    },
  ],
  related: [
    { label: "PDF para estudiantes — apuntes y guías de estudio", path: "/pdf-for-students" },
    { label: "Fusionar PDF — arma paquetes semanales", path: "/merge-pdf" },
    { label: "Cómo organizar archivos PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Método PDF para estudiantes universitarios", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF para estudiantes — apuntes, subrayados, guías de estudio", path: "/pdf-for-students" },
};

export default content;
