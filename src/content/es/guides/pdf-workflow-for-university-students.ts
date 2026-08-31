import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflow-for-university-students",
  h1: "Método PDF para estudiantes universitarios (apuntes, trabajos, entregas)",
  description:
    "Un ritmo PDF que aguanta todo un semestre, hasta los exámenes finales: apuntes de clase escaneados, trabajos entregados, dosieres de estudio compartidos. En el navegador y gratis.",
  updated: "2026-05-29",
  intro: [
    "Un semestre universitario genera cientos de PDF. Diapositivas de clase, apuntes manuscritos escaneados, hojas de ejercicios, trabajos completados, lecturas complementarias, dosieres de estudio para los exámenes. La mayoría de los estudiantes se las apañan amontonándolo todo en la carpeta de descargas y rebuscando después. Eso funciona en la tercera semana; se desmorona en la décima; para los exámenes finales es peor que no tenerlo organizado en absoluto.",
    "Un ritmo PDF pensado para todo el semestre es breve y fácil de mantener. Paquetes semanales de apuntes por asignatura, entregas de trabajos nombradas de forma constante, dosieres de estudio montados antes de los exámenes, archivo al final del semestre. Nada de esto exige herramientas caras ni aplicaciones que no tengas ya, y la mayor parte se puede hacer desde el móvil.",
    "Esta guía describe ese ritmo: qué hacer cada semana, qué hacer por cada trabajo, qué hacer en el parcial y en los finales. Da por hecho que el objetivo es encontrar cualquier documento en cinco segundos, no construir un sistema personal de conocimiento perfecto.",
  ],
  steps: [
    {
      title: "Cada semana: captura y fusiona el material de clase",
      body: "Al final de cada semana y por asignatura: reúne los apuntes escritos a máquina, las diapositivas en PDF, las fotos de la pizarra y las páginas manuscritas escaneadas. Fusionar PDF las combina en Semana3_Pack_AAAA-MM-DD.pdf dentro de /Asignaturas/[Asignatura]/clases/.",
    },
    {
      title: "Por cada trabajo: produce, nombra, entrega, archiva",
      body: "Word a PDF para el trabajo escrito a máquina, Escanear a PDF para las páginas manuscritas, Fusionar PDF para combinarlas, Comprimir PDF si el portal tiene límite. Entrégalo y guarda una copia en /Asignaturas/[Asignatura]/trabajos/entregados/.",
    },
    {
      title: "A mitad de semestre: haz limpieza",
      body: "Hacia la semana 7, revisa las carpetas de las asignaturas. Elimina duplicados, corrige nombres de archivo mal puestos, archiva lo que ya está cerrado. Veinte minutos a mitad de semestre ahorran horas en los exámenes finales.",
    },
    {
      title: "Antes del examen: monta un dosier de estudio",
      body: "Combina los paquetes semanales relevantes en un único Asignatura_DosierFinal.pdf. Añade una portada con los temas. Comprímelo para usarlo cómodamente en la tablet o el móvil durante el repaso.",
    },
    {
      title: "Anota el dosier de estudio en la tablet o el móvil",
      body: "Anotar PDF en una tablet funciona mejor que el papel para algunos estudiantes. Usa subrayado, comentarios y resaltado; las marcas se conservan para repasos posteriores.",
    },
    {
      title: "Fin del semestre: archiva la asignatura",
      body: "Traslada /Asignaturas/[Asignatura]/ a /Histórico/[Año]/[Asignatura]/. Comprime todo lo que va al histórico. La carpeta activa se queda limpia para el siguiente semestre.",
    },
  ],
  tips: [
    "No fusiones entre asignaturas ni entre semanas distintas. La unidad mínima útil es un PDF por semana y por asignatura.",
    "Entrega siguiendo exactamente la convención de nombres que pida cada clase. «Apellido_Nombre_Trabajo3.pdf» es habitual; síguela al pie de la letra.",
    "Anota los dosieres de estudio en digital. Los PDF anotados y con texto buscable son mejores que el papel para repasar — encuentras temas concretos rápido.",
    "Comprime solo al entregar y al archivar. Durante el uso activo, prioriza la legibilidad.",
    "Sincroniza la carpeta de asignaturas con una nube. Poder acceder desde el móvil y desde el portátil durante los exámenes vale más que el espacio en disco.",
  ],
  mobileNote:
    "La mayor parte del día PDF de un estudiante sucede en el móvil — escanear una página manuscrita, fotografiar una diapositiva, entregar un trabajo. La app PDF Editor gestiona toda la cadena (escanear, fusionar, comprimir, firmar, compartir) sin conexión en iOS y Android, así que el método no depende de tener el portátil a mano.",
  faq: [
    {
      q: "¿Cuánto tiempo lleva este ritmo?",
      a: "Diez minutos a la semana por asignatura para el paquete semanal. Dos minutos por trabajo. Veinte minutos a mitad de semestre. El ahorro acumulado en los exámenes finales se mide en horas.",
    },
    {
      q: "¿Y si tengo muchas asignaturas?",
      a: "El ritmo escala bien — se aplica la misma convención a cada asignatura. Dos asignaturas en paralelo duplican el tiempo; la estructura se mantiene igual.",
    },
    {
      q: "¿Merece la pena conservar el papel?",
      a: "Los apuntes manuscritos originales, sí, como respaldo. Una vez escaneados y dentro del paquete semanal, el papel queda solo como referencia.",
    },
    {
      q: "¿Debería aplicar OCR a los escaneos para poder buscar en ellos?",
      a: "Si tu herramienta lo permite, sí. Un material de estudio con texto buscable vale mucho más en época de exámenes que uno que no lo tiene.",
    },
    {
      q: "¿Y las lecturas de referencia?",
      a: "Una carpeta /lecturas/ separada por asignatura. No fusiones las lecturas con los paquetes de clase; crecen por separado y cumplen una función distinta.",
    },
  ],
  related: [
    { label: "PDF para estudiantes — apuntes y guías de estudio", path: "/pdf-for-students" },
    { label: "Las mejores herramientas PDF gratis para estudiantes", path: "/guides/best-pdf-tools-for-students" },
    { label: "Cómo organizar tu material de estudio en PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Cómo entregar un trabajo en PDF", path: "/guides/how-to-submit-homework-as-pdf" },
  ],
  parentHub: { label: "PDF para estudiantes — apuntes, subrayados, guías de estudio", path: "/pdf-for-students" },
};

export default content;
