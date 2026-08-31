import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-a-corrupted-pdf",
  h1: "Cómo reparar un PDF dañado (lo que funciona de verdad)",
  description:
    "La mayoría de los PDF «dañados» no lo están: son descargas incompletas, lectores incompatibles o escrituras a medias. La lista honesta de soluciones que recuperan el archivo, y el caso en que ya está perdido de verdad.",
  updated: "2026-05-29",
  intro: [
    "Casi todos los PDF que se tildan de «dañados» son algo menos dramático: una descarga que no terminó, un lector que se niega a leer un archivo un poco raro, o una escritura interrumpida antes de que el archivo se cerrara bien. El daño real — cuando los bytes del archivo están de verdad estropeados — es más raro de lo que la gente cree, y cuando ocurre, la recuperación es como mucho parcial.",
    "El motivo por el que esto importa es que las soluciones para esas cuatro causas son completamente distintas. Volver a descargar tarda segundos; cambiar de lector, segundos; un ciclo de reexportación, un minuto; la recuperación real a nivel de bytes son horas de trabajo y a menudo imposible. Saber en qué categoría está tu archivo ahorra tiempo de verdad.",
    "Esta guía repasa los diagnósticos en orden de lo más barato a lo más caro, y después explica qué hacer cuando no es recuperable. La mayoría de los archivos vuelven a la vida en el paso tres.",
  ],
  steps: [
    {
      title: "Vuelve a descargar o a recibir el archivo",
      body: "Una descarga incompleta es idéntica al daño desde el punto de vista del lector. Vuelve a obtener el archivo. Si la segunda copia se abre, la primera estaba incompleta. Comprueba el tamaño en bytes contra el origen si aparece indicado.",
    },
    {
      title: "Prueba al menos otros dos lectores",
      body: "Los navegadores, Vista previa, los lectores del móvil y las apps de escritorio gestionan el PDF de forma distinta. Un archivo que Acrobat rechaza a veces se abre bien en Chrome. Si aunque sea un lector lo interpreta, el archivo no está realmente roto.",
    },
    {
      title: "Abre el archivo en cualquier lector que funcione y vuelve a exportarlo",
      body: "Imprimir a PDF (macOS, Windows, Linux) o «Guardar como PDF» desde el lector que funciona reconstruye la estructura del archivo. La copia nueva a menudo se abre en lectores que rechazaban el original.",
    },
    {
      title: "Extrae las páginas una a una con PDF a imágenes",
      body: "Si ningún lector muestra el archivo completo pero alguno enseña contenido parcial, exporta cada página como PNG con PDF a imágenes. Después puedes reensamblar un PDF nuevo a partir de esos PNG con Imagen a PDF — perdiendo la búsqueda y la editabilidad, pero rescatando el contenido.",
    },
    {
      title: "Comprueba la cabecera del archivo en un editor de texto plano",
      body: "Abre el archivo en TextEdit, el Bloc de notas o VS Code. Un PDF real empieza por %PDF- seguido de un número de versión. Si los primeros bytes son otra cosa, el archivo no es un PDF — lo renombraron, lo etiquetaron mal o lo sustituyeron.",
    },
    {
      title: "Pide una copia nueva a la fuente",
      body: "Si nada recupera el archivo, la fuente todavía tiene el original. Vuelve a exportar desde Word, Google Docs o lo que sea que lo produjo. Este es el único camino que devuelve la calidad completa.",
    },
  ],
  tips: [
    "No sigas editando o uniendo un archivo que se comporta de forma extraña. Incrustarás el fallo en el archivo nuevo.",
    "Guarda a salvo el original roto antes de cualquier intento de reparación. Las herramientas de reparación a veces sobrescriben, y el archivo roto puede contener contenido parcial que perderías.",
    "Los archivos que fallan justo después de una interrupción durante la escritura (corte de luz, cierre forzado durante el guardado) suelen ser irrecuperables — el índice estructural del final del archivo nunca llegó a escribirse.",
    "Evita las webs de «reparación de PDF» que prometen milagros. La mayoría hacen la misma reexportación de imprimir a PDF que puedes hacer tú mismo, y encima suben tu archivo.",
    "Los PDF recuperados vía imagen pierden todo el texto real y la capacidad de búsqueda. Usa ese camino solo para archivos donde el contenido importa más que la fidelidad del archivo.",
  ],
  mobileNote:
    "En el móvil, la causa habitual de un PDF «dañado» es una descarga inestable por datos móviles. La app PDF Editor guarda los archivos en local y te deja volver a obtenerlos y reabrirlos, lo que resuelve el problema de truncado sin necesitar un ordenador.",
  faq: [
    {
      q: "¿Cuál es la causa más habitual de un PDF dañado?",
      a: "Una descarga que no terminó. El archivo está técnicamente incompleto, no dañado, pero los lectores no pueden distinguirlo. Volver a descargarlo arregla la mayoría de los casos.",
    },
    {
      q: "¿Existen herramientas de reparación de PDF de verdad?",
      a: "Algunas herramientas comerciales prometen reparación, pero la mayor parte de lo que hacen es la misma reexportación de imprimir a PDF que puedes hacer tú mismo gratis. La reparación estructural real de PDF muy dañados es un trabajo especializado.",
    },
    {
      q: "¿Ayudará comprimir un PDF dañado?",
      a: "Solo si la herramienta de compresión puede leerlo. Si tu lector no puede abrirlo, tampoco podrá ningún compresor. La compresión no es una técnica de reparación.",
    },
    {
      q: "¿Por qué mi archivo recuperado pierde los campos de formulario?",
      a: "Imprimir a PDF aplana los elementos interactivos en píxeles estáticos. Los campos de formulario, las anotaciones y las firmas se convierten en imágenes. Si los necesitas de vuelta, vuelve a pedirlos a la fuente.",
    },
    {
      q: "¿La extracción de imágenes siempre puede rescatar el contenido?",
      a: "Solo si algún lector puede renderizar las páginas, aunque sea parcialmente. Si el archivo es ilegible en todas partes, hasta una herramienta de extracción de imágenes fallará.",
    },
  ],
  related: [
    { label: "PDF a imágenes — extrae páginas recuperables", path: "/pdf-to-images" },
    { label: "Imagen a PDF — reensambla páginas tras el rescate", path: "/image-to-pdf" },
    { label: "¿Por qué no se abre mi PDF?", path: "/guides/why-wont-my-pdf-open" },
    { label: "¿Por qué mi PDF está en blanco?", path: "/guides/why-is-my-pdf-blank" },
  ],
  parentHub: { label: "Herramientas PDF — gratis, en el navegador", path: "/pdf-tools" },
};

export default content;
