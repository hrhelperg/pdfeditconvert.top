import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-cant-i-edit-a-pdf",
  h1: "¿Por qué no puedo editar este PDF? Las razones reales",
  description:
    "El PDF se diseñó para resistirse a la edición, pero unos pocos factores concretos — escaneos, protecciones, límites del lector — hacen que unos archivos sean más difíciles que otros. Qué está bloqueando el tuyo, y qué funciona de verdad.",
  updated: "2026-05-29",
  intro: [
    "El PDF se diseñó para verse igual en todas partes, y por eso mismo editarlo se siente más difícil que editar un documento de Word. El formato trata el texto más como una página impresa que como una cadena de caracteres — útil cuando quieres compartir algo con precisión de píxel, frustrante cuando necesitas cambiar un nombre en un contrato.",
    "Pero no todos los PDF están igual de bloqueados. Hay cuatro razones habituales por las que no puedes editar uno: es una imagen escaneada de un documento sin texto real debajo, el archivo tiene una marca de seguridad que bloquea la edición, tu lector es de solo lectura por diseño, o el original se exportó de una forma que fragmentó el texto en formas. Cada una tiene un camino distinto hacia delante.",
    "Esta guía repasa cada causa en términos claros, con la herramienta adecuada para cada una. Ninguna requiere software caro, y la mayoría de las soluciones funcionan en una pestaña del navegador.",
  ],
  steps: [
    {
      title: "Confirma si el PDF tiene texto real o imágenes escaneadas",
      body: "Intenta seleccionar texto con el cursor o el dedo. Si la selección funciona, el PDF tiene texto real y editarlo es viable. Si no puedes seleccionar nada, es un escaneo — imágenes de texto, no texto propiamente dicho.",
    },
    {
      title: "Comprueba si hay una marca de restricción de edición",
      body: "Los PDF pueden llevar permisos que permiten ver pero bloquean editar, imprimir o copiar. La mayoría de los lectores muestran un pequeño icono de candado o un aviso de «protegido» cuando esto está activado. El autor puede levantar la restricción; los destinatarios no pueden saltársela de forma segura.",
    },
    {
      title: "Usa un editor de PDF de verdad para ediciones reales",
      body: "Los navegadores y los visores básicos no editan texto — solo lo muestran. La app PDF Editor hace ediciones estructurales en texto, imágenes y páginas sin salir del formato PDF, lo que preserva la maquetación.",
    },
    {
      title: "Convierte a Word cuando necesites una reescritura amplia",
      body: "Si necesitas reescribir párrafos en vez de retocar palabras sueltas, PDF a Word extrae el texto a un editor real. Pierdes maquetación estricta pero ganas edición de flujo real — mejor para documentos que de todos modos se van a volver a publicar.",
    },
    {
      title: "Para PDF escaneados, cuenta con los límites del OCR",
      body: "Editar un escaneo significa convertir primero las imágenes en texto (OCR). Algunas herramientas lo hacen online, otras no, y la calidad varía muchísimo según la resolución del escaneo. Trata el resultado del OCR como un punto de partida, no como una edición terminada.",
    },
    {
      title: "Los cambios a nivel de página no necesitan «edición»",
      body: "Si solo necesitas eliminar, reordenar, girar o añadir páginas, no necesitas un editor de texto en absoluto — las herramientas Extraer, Reordenar y Girar PDF gestionan cambios estructurales sin desbloquear la capa de texto.",
    },
  ],
  tips: [
    "Si solo necesitas añadir una firma o rellenar un formulario, probablemente el archivo no necesita «edición» — los flujos de Firmar PDF y de rellenar formularios dejan intacto el texto original.",
    "Algunos PDF exportan cada carácter como una diminuta forma en vez de texto. La selección parece funcionar pero copiar y pegar produce basura. Es el peor caso para editar; el documento de origen es el único camino de vuelta realista.",
    "No confíes en webs que prometen «descifrar» contraseñas y eliminar restricciones de edición. O son ineficaces, o maliciosas, o ambas cosas.",
    "Si eres el autor y quieres habilitar la edición en un archivo que enviaste antes, el camino más limpio es volver a exportarlo sin la restricción.",
    "Para ediciones repetidas al mismo documento, edita el origen (Word, Pages, herramienta de diseño) y vuelve a exportar, en vez de parchear el PDF cada vez.",
  ],
  mobileNote:
    "En el móvil, la mayoría de los lectores nativos son de solo lectura a propósito. La app PDF Editor gestiona ediciones de texto, cambios de imagen y reordenación de páginas en iOS y Android sin aplanar el archivo, así un arreglo rápido no tiene que esperar a que vuelvas a un ordenador.",
  faq: [
    {
      q: "¿Por qué puedo ver el texto pero no hacer clic en él?",
      a: "O bien el PDF es un escaneo (una imagen de texto, sin caracteres reales debajo), o tu lector es de solo lectura. Un editor de PDF de verdad — como la app PDF Editor — te deja hacer clic en texto editable.",
    },
    {
      q: "¿Hay alguna forma de eliminar las restricciones de edición?",
      a: "Solo el autor original puede levantar de forma limpia las restricciones de permisos. Las herramientas que prometen eliminarlas o no funcionan o comprometen el archivo. Pide al remitente una copia sin restricciones.",
    },
    {
      q: "¿Qué es el OCR y cuándo lo necesito?",
      a: "El OCR es el proceso de convertir imágenes de texto en texto real — necesario cuando editas un PDF escaneado. La calidad depende del escaneo; los escaneos limpios y de alta resolución dan mucho mejor resultado con OCR que las fotos borrosas del móvil.",
    },
    {
      q: "¿Debería convertir a Word para editarlo?",
      a: "Solo si necesitas cambios de texto amplios. La conversión pierde fidelidad de maquetación. Para ediciones pequeñas, un editor de PDF de verdad preserva más.",
    },
    {
      q: "¿Puedo editar páginas sin tocar el texto?",
      a: "Sí. Reordenar, girar, extraer y eliminar páginas son ediciones estructurales y no requieren un editor de texto. Las herramientas del navegador de este sitio las gestionan sin subir nada.",
    },
  ],
  related: [
    { label: "PDF Editor — edita texto e imágenes en el móvil", path: "/pdf-editor" },
    { label: "PDF a Word — convierte para una edición amplia", path: "/pdf-to-word" },
    { label: "Cómo editar un PDF en iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
    { label: "Cómo editar un PDF en Android", path: "/guides/how-to-edit-pdf-on-android" },
  ],
  parentHub: { label: "PDF Editor — edita texto, imágenes y páginas", path: "/pdf-editor" },
};

export default content;
