import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reorder-pdf-pages",
  h1: "Cómo reordenar las páginas de un PDF (gratis, en el navegador)",
  description:
    "Reordena las páginas de un PDF en la secuencia correcta desde tu navegador. Arregla escaneos que salieron al revés o archivos unidos que quedaron desordenados.",
  updated: "2026-05-23",
  intro: [
    "Las páginas acaban en el orden equivocado más a menudo de lo que crees. Un alimentador de documentos coge un montón y lo escanea de atrás hacia delante. Una unión junta dos archivos pero en la secuencia equivocada. Un anexo que debería ir al final aterriza en medio. Sea cual sea la causa, la solución es la misma: reorganizar las páginas hasta que el documento se lea como debe.",
    "Esta guía usa la herramienta gratuita Reordenar páginas de PDF, que previsualiza cada página y te deja moverlas con controles sencillos, directamente en tu navegador — no se sube nada. Ves las miniaturas, las colocas en su sitio, y descargas el archivo corregido.",
    "Es una operación pequeña con un efecto desproporcionado: un documento en el orden correcto se lee como algo intencionado, mientras que uno en el orden equivocado hace que todo parezca descuidado.",
  ],
  steps: [
    {
      title: "Abre la herramienta Reordenar páginas de PDF",
      body: "Ve a la herramienta Reordenar páginas de PDF en tu navegador. Funciona en tu dispositivo — sin subida, sin cuenta.",
    },
    {
      title: "Añade tu PDF",
      body: "Arrastra el archivo a la zona de soltar o haz clic para elegirlo. La herramienta genera una miniatura de cada página para que veas el orden actual de un vistazo.",
    },
    {
      title: "Localiza lo que está fuera de sitio",
      body: "Recorre las miniaturas buscando páginas invertidas, mal colocadas o duplicadas. Saber el orden objetivo antes de empezar hace que los movimientos sean rápidos.",
    },
    {
      title: "Mueve las páginas a la secuencia correcta",
      body: "Usa los controles para desplazar cada página a su posición correcta. Trabaja desde el principio del documento hacia el final para que las posiciones se mantengan predecibles.",
    },
    {
      title: "Revisa el nuevo orden",
      body: "Repasa las miniaturas de arriba abajo una vez más. La secuencia que ves es la secuencia que obtendrás en el archivo.",
    },
    {
      title: "Descarga el PDF corregido",
      body: "Exporta el archivo reordenado y guárdalo con un nombre claro. Conserva el original hasta confirmar que el nuevo orden es correcto.",
    },
  ],
  tips: [
    "Si un escaneo entero salió invertido, reordenar arregla la secuencia — pero una página de lado es un problema de rotación, que se resuelve con la herramienta Girar PDF.",
    "Reordena antes de comprimir o convertir. Es más fácil dejar bien la estructura primero y luego ejecutar las operaciones más pesadas sobre el documento terminado.",
    "Trabaja de delante hacia atrás al mover páginas, así cada movimiento no desordena las posiciones que ya habías fijado.",
    "En documentos que combinan varias fuentes, reordena justo después de unir, mientras la estructura prevista todavía está fresca en tu cabeza.",
    "Conserva el archivo original. Si una reordenación sale mal, es mucho más rápido empezar de nuevo desde la fuente intacta.",
  ],
  mobileNote:
    "Reordenar en el móvil es un trabajo de arrastrar miniaturas, y la app PDF Editor lo hace táctil: pulsar, arrastrar, soltar, listo — sin conexión y sin subir el archivo. Útil justo después de escanear, cuando las páginas suelen necesitar un reordenamiento rápido.",
  faq: [
    {
      q: "¿Puedo corregir un escaneo que salió en orden inverso?",
      a: "Sí. Reordenar te permite invertir la secuencia para que la última página escaneada vuelva al principio. Si además las páginas están giradas, corrige la orientación con la herramienta Girar PDF.",
    },
    {
      q: "¿Reordenar cambia el contenido de las páginas?",
      a: "No. Solo cambia la secuencia — el contenido y la orientación de cada página se mantienen exactamente igual.",
    },
    {
      q: "¿Se sube mi PDF?",
      a: "No. Reordenar se ejecuta en tu navegador, en tu dispositivo, así que el archivo se mantiene privado.",
    },
    {
      q: "¿Puedo eliminar páginas mientras reordeno?",
      a: "Reordenar solo afecta a la secuencia. Para quitar páginas, extrae las que quieras conservar con la herramienta Extraer páginas de PDF, que deja fuera las no deseadas.",
    },
    {
      q: "¿Se verá afectado el archivo original?",
      a: "No. La herramienta produce un nuevo PDF reordenado y deja tu fuente intacta, así que puedes volver a intentarlo desde el original si hace falta.",
    },
  ],
  related: [
    { label: "Reordenar páginas de PDF — reorganiza en tu navegador", path: "/reorder-pdf-pages" },
    { label: "Girar PDF — corrige páginas de lado", path: "/rotate-pdf" },
    { label: "Cómo organizar tus archivos PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Cómo unir archivos PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Reordenar páginas de PDF", path: "/reorder-pdf-pages" },
};

export default content;
