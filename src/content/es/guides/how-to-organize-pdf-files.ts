import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-pdf-files",
  h1: "Cómo organizar tus archivos PDF — un método práctico",
  description:
    "Pon orden en unos PDF desordenados: une los archivos relacionados, reordena páginas, quita lo que sobra y nombra bien los archivos. Un método repetible con herramientas gratuitas del navegador.",
  updated: "2026-05-23",
  intro: [
    "«Organizar mis PDF» suele significar una de dos cosas: ordenar un solo documento desordenado, o poner en orden una carpeta llena de archivos relacionados. Ambas se reducen al mismo puñado de movimientos — combinar lo que pertenece junto, dejar las páginas en el orden correcto, quitar lo que no pertenece y nombrarlo todo para poder encontrarlo después.",
    "Esta guía plantea un método repetible construido con herramientas gratuitas del navegador, cada una ejecutándose en tu dispositivo sin subir nada. Ninguno de los pasos individuales es complicado; el valor está en hacerlos en el orden correcto para no tener que repetir trabajo.",
    "Piénsalo menos como una sola herramienta y más como una rutina que puedes aplicar a cualquier montón de documentos — una carpeta de impuestos, el papeleo de un proyecto, una pila de escaneos — para convertir el caos en algo que te gustaría entregar.",
  ],
  steps: [
    {
      title: "Haz balance de lo que tienes",
      body: "Lista los archivos y qué contiene cada uno. Decide cómo debería verse el resultado terminado — un documento combinado, o varios archivos limpios — antes de tocar nada.",
    },
    {
      title: "Combina los archivos que pertenecen juntos",
      body: "Usa la herramienta Unir PDF para juntar documentos relacionados en uno solo, en el orden que quieras. Un contrato y sus anexos, un informe y su apéndice — un archivo cada uno.",
    },
    {
      title: "Corrige el orden de las páginas",
      body: "Ejecuta la herramienta Reordenar páginas de PDF sobre cualquier cosa que haya salido en la secuencia equivocada — escaneos invertidos, secciones en el lugar equivocado — hasta que cada documento se lea correctamente.",
    },
    {
      title: "Elimina lo que sobra",
      body: "Quita las páginas en blanco, portadas y duplicados conservando solo las páginas que quieres con la herramienta Extraer páginas de PDF.",
    },
    {
      title: "Endereza las páginas de lado",
      body: "Usa la herramienta Girar PDF en cualquier página que se haya escaneado en apaisado o del revés para que todo el documento se lea en vertical.",
    },
    {
      title: "Nombra y guarda de forma coherente",
      body: "Dale a cada archivo un nombre descriptivo y con fecha — «Factura-Acme-2026-05.pdf» — y archívalo en una carpeta con sentido. Los nombres coherentes son lo que hace buscable una colección meses después.",
    },
  ],
  tips: [
    "Hazlo en orden: unir, reordenar, quitar, girar, nombrar. Nombrar primero y unir después significa volver a nombrar; reordenar antes de quitar desperdicia esfuerzo en páginas que vas a descartar.",
    "Adopta una convención de nombres y mantenla. «Tipo-Quién-Fecha» (Factura-Acme-2026-05) se ordena y se busca mucho mejor que los nombres improvisados.",
    "Conserva los originales en una carpeta separada hasta confirmar que las versiones organizadas están bien. Ordenar solo es reversible si no has sobrescrito la fuente.",
    "Comprime al final del todo si los archivos van a ir por correo o a un portal — no tiene sentido comprimir un documento que estás a punto de reestructurar.",
    "La memoria del navegador limita los trabajos muy grandes. Para cientos de páginas o archivos, la app PDF Editor gestiona con más comodidad el trabajo pesado.",
  ],
  mobileNote:
    "Buena parte del desorden documental empieza en el móvil — escaneos, capturas de pantalla, adjuntos de correo. La app PDF Editor te deja unir, reordenar, recortar y renombrar en un mismo sitio, sin conexión, así que puedes mantener las cosas ordenadas a medida que llegan en lugar de enfrentarte a un montón después.",
  faq: [
    {
      q: "¿Cuál es el orden correcto para organizar un PDF desordenado?",
      a: "Primero une los archivos relacionados, luego reordena las páginas, después quita lo que sobra, corrige la rotación y, por último, nombra y guarda. Trabajar en ese orden evita repetir pasos.",
    },
    {
      q: "¿Son privadas estas herramientas?",
      a: "Sí. Las herramientas de unir, reordenar, extraer y girar se ejecutan todas en tu navegador, en tu dispositivo — no se sube nada, lo cual importa para el papeleo personal o financiero.",
    },
    {
      q: "¿Cómo debería nombrar los archivos PDF?",
      a: "Usa un patrón coherente y descriptivo con fecha, como «Tipo-Quién-Fecha.pdf». La coherencia es lo que hace buscable y ordenable una carpeta más adelante.",
    },
    {
      q: "¿Puedo organizar un lote grande de una vez?",
      a: "Las herramientas de navegador gestionan bien los volúmenes habituales, pero los lotes muy grandes pueden forzar la memoria. La app PDF Editor está pensada para trabajos más grandes y funciona sin conexión.",
    },
    {
      q: "¿Debería comprimir mientras organizo?",
      a: "Comprime al final, una vez el documento esté terminado y solo si necesita ajustarse a límites de correo o de subida. Comprimir a mitad del proceso simplemente se deshace con las ediciones posteriores.",
    },
  ],
  related: [
    { label: "Todas las herramientas gratuitas de PDF", path: "/pdf-tools" },
    { label: "Unir PDF — combina archivos", path: "/merge-pdf" },
    { label: "Cómo reordenar las páginas de un PDF", path: "/guides/how-to-reorder-pdf-pages" },
    { label: "Cómo eliminar páginas no deseadas de un PDF", path: "/guides/how-to-remove-unwanted-pages-from-pdf" },
  ],
  parentHub: { label: "Todas las herramientas gratuitas de PDF", path: "/pdf-tools" },
};

export default content;
