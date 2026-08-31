import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-android",
  h1: "Cómo editar un PDF en Android (guía 2026)",
  description:
    "Edita tus PDF en Android: cambia el texto, inserta páginas y firma documentos. Instrucciones claras, paso a paso, con la app PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Android se defiende razonablemente bien con los PDF de serie — pero solo para verlos. En el momento en que necesitas corregir una errata, sustituir una imagen o reordenar páginas, el visor integrado llega a su límite y la solución habitual es enviar el archivo a una web. Hay una opción más rápida: un editor nativo que funciona directamente en el móvil.",
    "Esta guía usa la app PDF Editor en Android. El mismo flujo funciona en tablets y en Chromebooks con el entorno de Android. Necesitas Android 9 o posterior. La mayoría de los pasos son idénticos al flujo de iPhone, pero el Storage Access Framework de Android cambia cómo importas y guardas los archivos.",
    "Cada paso indica dónde tocar, incluidas las pequeñas diferencias entre móviles y tablets. Donde Android se separa de iOS — el selector de archivos, la integración con Drive, el botón atrás — lo señalamos.",
  ],
  steps: [
    {
      title: "Instala PDF Editor desde Google Play",
      body: "Busca «PDF Editor» y elige el publicado por hrhelperg. Instala y ábrela. No hace falta ninguna cuenta.",
    },
    {
      title: "Abre un PDF",
      body: "Toca el botón + en la pantalla de inicio. Aparece el diálogo del Storage Access Framework de Android — elige el PDF desde Archivos, Google Drive, OneDrive, Dropbox o cualquier otro proveedor en la nube conectado. También puedes tocar un PDF dentro de Gmail o cualquier app y elegir PDF Editor como aplicación para abrirlo.",
    },
    {
      title: "Edita el texto",
      body: "Toca un párrafo. Aparece un cuadro de edición azul. Escribe para sustituir o insertar texto. La app conserva la fuente y el color existentes, así que el diseño no se rompe.",
    },
    {
      title: "Sustituye una imagen",
      body: "Toca una imagen para resaltarla. Toca el icono de intercambio y elige un sustituto de tu galería o tus archivos. Arrastra las esquinas para cambiar el tamaño sin distorsionar la proporción.",
    },
    {
      title: "Inserta una página nueva",
      body: "Toca el icono de páginas para ver las miniaturas. Usa el botón + entre miniaturas para insertar una página en blanco o importar una imagen como página nueva.",
    },
    {
      title: "Rellena los campos del formulario",
      body: "Los PDF con campos interactivos se resaltan automáticamente. Toca un campo, escribe y toca Listo. El teclado se adapta al tipo de campo (texto, número, fecha).",
    },
    {
      title: "Firma el documento",
      body: "Toca la herramienta Firmar, dibuja con el dedo o con el lápiz óptico, y coloca la firma. Guárdala para usarla en el futuro — no tendrás que volver a dibujarla.",
    },
    {
      title: "Guarda como archivo nuevo",
      body: "Toca Listo y luego «Guardar como» para conservar tanto el original como la copia editada. El selector de archivos de Android te permite guardar en Archivos, Drive o cualquier proveedor en la nube que hayas conectado.",
    },
  ],
  tips: [
    "En tablets grandes, activa la pantalla dividida y coloca dos PDF uno junto al otro para comparar rápidamente.",
    "Si tienes un S Pen, cambia la entrada a «Solo lápiz» en el modo de edición — el rechazo de la palma funciona mucho mejor así.",
    "Usa nombres de archivo descriptivos antes de guardar — «Contrato-Firmado-2026-05-11.pdf» es mucho más útil que «Documento(1).pdf» cuando lo busques más adelante.",
    "Fija PDF Editor a tu menú para compartir manteniéndolo pulsado tras usarlo una vez — aparecerá arriba del todo la próxima vez.",
    "Si la edición va lenta en un dispositivo antiguo, cierra otras apps en segundo plano; el renderizado de PDF se beneficia de tener RAM libre.",
  ],
  mobileNote:
    "El Storage Access Framework de Android es la forma correcta de abrir archivos — concede acceso persistente sin copiar el archivo al almacenamiento propio de la app. Eso significa que las ediciones se guardan directamente en Drive o en OneDrive, no en un duplicado.",
  faq: [
    {
      q: "¿Funciona en versiones antiguas de Android?",
      a: "Oficialmente, Android 9 y posteriores. Los dispositivos más antiguos pueden instalar la app pero no tendrán las funciones más recientes (OCR mejorado, filtros de escaneo).",
    },
    {
      q: "¿Puedo abrir PDF protegidos con contraseña?",
      a: "Sí. Introduce la contraseña cuando se te pida. La app mantiene el documento cifrado mientras editas y vuelve a cifrarlo al guardar si así lo eliges.",
    },
    {
      q: "¿Qué hay de la integración con Google Drive?",
      a: "Abre y guarda directamente desde Drive mediante el selector de archivos del sistema. Las ediciones guardadas en Drive sobrescriben el original (o se guardan como archivo nuevo, según elijas).",
    },
    {
      q: "¿Las ediciones se sincronizarán con mi ordenador?",
      a: "Si guardaste en un proveedor en la nube (Drive, OneDrive, Dropbox), el archivo editado se sincroniza automáticamente en tus otros dispositivos. Los guardados solo locales se quedan en el móvil.",
    },
    {
      q: "¿Funciona sin conexión?",
      a: "Sí. La edición ocurre por completo en el dispositivo. La sincronización con la nube solo entra en juego cuando guardas en una ruta en la nube.",
    },
  ],
  related: [
    { label: "PDF Editor — resumen completo", path: "/pdf-editor" },
    {
      label: "Cómo editar un PDF en iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "Cómo comprimir un PDF", path: "/guides/how-to-compress-pdf" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
