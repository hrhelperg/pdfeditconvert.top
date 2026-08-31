import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "editable-pdf-vs-flat-pdf",
  h1: "PDF editable o PDF plano — la diferencia real",
  description:
    "Algunos PDF tienen texto seleccionable de verdad y una estructura editable; otros son solo imágenes de páginas sin texto debajo. Cómo saber cuál tienes, y cuándo conviene cada uno.",
  updated: "2026-05-29",
  intro: [
    "Dos archivos pueden ser ambos PDF y comportarse de forma completamente distinta. Uno te deja seleccionar texto, copiar citas, buscar palabras y editar el contenido. El otro se ve idéntico en pantalla pero es, en esencia, una fotografía de un documento — el texto forma parte de la imagen, no existe por separado. El primero es un PDF editable; el segundo es un PDF plano (a veces llamado PDF escaneado o PDF de imagen).",
    "Saber cuál de los dos tienes importa porque las herramientas para trabajar con cada uno son distintas. Los PDF editables responden bien a los editores de PDF, a las herramientas de conversión y a la búsqueda. Los PDF planos necesitan OCR para volverse buscables, y editarlos significa aplicar OCR primero y editar después, o sustituir la imagen por completo. Intentar usar herramientas de PDF editable sobre un PDF plano suele acabar en frustración.",
    "Esta guía explica la diferencia, recorre la prueba que te lo dice en dos segundos, y muestra cuándo conviene cada uno. A veces lo plano es intencionado — a veces es solo un accidente de cómo se produjo el archivo.",
  ],
  steps: [
    {
      title: "La prueba de dos segundos: intenta seleccionar texto",
      body: "Abre el PDF, haz clic y arrastra sobre algo de texto. Si el texto se selecciona (se resalta, se puede copiar), es un PDF editable. Si el cursor dibuja un recuadro pero no se resalta ningún texto, es plano — el «texto» son datos de imagen.",
    },
    {
      title: "PDF editable: el texto es seleccionable, buscable, copiable",
      body: "Las exportaciones directas desde Word, Pages, Docs o herramientas de diseño producen PDF editables. El texto es un dato estructurado dentro del archivo; la búsqueda y el copiar y pegar funcionan; los editores de PDF pueden modificarlo.",
    },
    {
      title: "PDF plano: imagen de una página, sin texto debajo",
      body: "Los documentos escaneados son el PDF plano más habitual. El texto existe solo como píxeles; no hay ningún dato de carácter debajo. La búsqueda no devuelve nada; copiar y pegar tampoco.",
    },
    {
      title: "El OCR convierte lo plano en buscable (pero no del todo editable)",
      body: "El OCR analiza la imagen de la página y añade una capa de texto debajo de los píxeles. La búsqueda empieza a funcionar; copiar y pegar devuelve un texto aproximado. Editarlo sigue exigiendo sustituir manualmente los elementos de imagen.",
    },
    {
      title: "Cuando lo plano es intencionado: fijar el contenido, fidelidad perfecta a la imagen",
      body: "Algunos flujos de trabajo aplanan un PDF a propósito — el archivo no se puede editar con facilidad, y las firmas y sellos no alteran el texto subyacente. PDF a imágenes seguido de Imagen a PDF produce una copia plana.",
    },
    {
      title: "Cuando lo editable es intencionado: cualquier otro flujo de trabajo",
      body: "Para compartir, firmar, editar, archivar, reutilizar — el PDF editable es la elección correcta. No aplanes salvo que lo necesites específicamente.",
    },
  ],
  tips: [
    "Si no puedes seleccionar texto en un PDF que has producido tú, los ajustes de exportación descartaron la capa de texto. Reexporta con «conservar texto» activado.",
    "Los PDF escaneados con escáneres antiguos suelen ser planos. Aplícales OCR en el momento del escaneo o después con una herramienta, para que sean útiles a largo plazo.",
    "Los PDF planos pesan más que un PDF editable equivalente — los datos de imagen ocupan más espacio que los datos de carácter.",
    "No aplanes un PDF para «fijarlo» — las restricciones de edición adecuadas funcionan mejor y conservan el texto buscable.",
    "Algunos PDF «editables» exportan cada carácter como una diminuta forma en lugar de como texto. La selección parece funcionar, pero copiar y pegar produce sinsentido. Es el peor caso posible para editar.",
  ],
  mobileNote:
    "En el móvil, un PDF plano y uno editable se ven idénticos en un visor. La app PDF Editor marca la diferencia en el modo de edición — puedes ver qué archivos tienen texto real y cuáles son solo imagen, y dirigirlos al OCR o a la edición directa según corresponda.",
  faq: [
    {
      q: "¿Cómo distingo de un vistazo cuál de los dos tengo?",
      a: "Intenta seleccionar texto. Si la selección funciona y copiar devuelve texto limpio, es editable. Si no, es plano.",
    },
    {
      q: "¿Los PDF escaneados son siempre planos?",
      a: "Recién salidos del escáner, sí. Muchas apps de escaneo hoy aplican OCR de forma automática y producen un PDF plano pero buscable — el texto se sigue mostrando como imagen, pero se añade debajo una capa buscable.",
    },
    {
      q: "¿Puedo editar un PDF plano?",
      a: "Solo manipulando la imagen (girar, recortar, añadir texto superpuesto). La edición real de texto requiere OCR primero, e incluso así el resultado es aproximado.",
    },
    {
      q: "¿Por qué querría un PDF plano?",
      a: "Para impedir la edición del texto, para fijar firmas y sellos de forma que no se puedan mover, o para entregar una reproducción perfecta de la imagen. Son casos de uso poco frecuentes pero reales.",
    },
    {
      q: "¿El formato de origen determina qué tipo obtengo?",
      a: "Sí — las exportaciones directas desde un procesador de textos producen PDF editables; los archivos escaneados y luego guardados producen PDF planos. El origen determina el tipo.",
    },
  ],
  related: [
    { label: "PDF Editor — edita texto e imágenes en el móvil", path: "/pdf-editor" },
    { label: "¿Por qué no puedo editar un PDF?", path: "/guides/why-cant-i-edit-a-pdf" },
    { label: "PDF a Word — recupera texto editable", path: "/pdf-to-word" },
    { label: "Cuándo usar un PDF escaneado", path: "/guides/when-to-use-scanned-pdf" },
  ],
  parentHub: { label: "PDF Editor — edita texto, imágenes y páginas", path: "/pdf-editor" },
};

export default content;
