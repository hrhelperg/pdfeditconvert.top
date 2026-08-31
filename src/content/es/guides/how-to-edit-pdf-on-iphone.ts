import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-iphone",
  h1: "Cómo editar un PDF en iPhone (guía 2026)",
  description:
    "Corrige el texto, añade imágenes y reordena las páginas de un PDF directamente en el iPhone. Guía paso a paso con la app PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Editar un PDF en el iPhone antes significaba enviarlo a una web en la que apenas confiabas, iniciar sesión en un Mac, o hacer una captura de la parte que necesitabas y volver a pegarla como imagen. En 2026 nada de eso hace falta. Con la app adecuada puedes editar texto, sustituir imágenes, reordenar páginas, rellenar formularios y firmar documentos — todo desde el móvil, en menos de un minuto.",
    "Esta guía recorre exactamente los toques que hay que dar usando la app PDF Editor. Los mismos patrones funcionan en iPad y en la mayoría de editores de PDF modernos, así que los pasos te sirven aunque cambies de herramienta más adelante. Necesitas iOS 16 o posterior y la app PDF Editor instalada desde la App Store.",
    "Veremos cómo abrir un PDF desde cualquier origen (Archivos, Correo, iCloud Drive, Google Drive), editar el contenido y exportar el resultado. Cada paso describe qué hacer, no por qué — pero si algún paso resulta confuso en pantalla, la sección de consejos al final trae las soluciones rápidas.",
  ],
  steps: [
    {
      title: "Instala y abre PDF Editor",
      body: "Consíguela en la App Store y abre la app. No hace falta ninguna cuenta para empezar a editar.",
    },
    {
      title: "Trae el PDF a la app",
      body: "Toca el botón + en la pantalla de inicio. Elige el origen — Archivos, iCloud Drive, tu carrete, o «Explorar» para acceder a carpetas de Google Drive u OneDrive. También puedes abrir cualquier PDF desde Correo o Safari y elegir «Abrir en PDF Editor» en el menú para compartir.",
    },
    {
      title: "Edita el texto directamente",
      body: "Toca un párrafo o una palabra. Aparece una selección azul. Edita directamente en el cuadro de texto que se abre. La app conserva la fuente, el tamaño y el color originales, así que el diseño se mantiene intacto.",
    },
    {
      title: "Sustituye o añade una imagen",
      body: "Toca una imagen existente para sustituirla por otra de tu carrete. O toca la herramienta de imagen y coloca una nueva en cualquier parte de la página. Arrastra las esquinas para cambiar el tamaño.",
    },
    {
      title: "Reordena, elimina o duplica páginas",
      body: "Toca el icono de páginas para abrir la cuadrícula de miniaturas. Mantén pulsada cualquier página para moverla. Toca una miniatura para duplicarla o eliminarla.",
    },
    {
      title: "Firma el documento",
      body: "Toca la herramienta Firmar, dibuja tu firma (o usa una guardada) y colócala donde corresponda. La firma es un objeto normal del PDF, así que puedes moverla o redimensionarla después de colocarla.",
    },
    {
      title: "Rellena los campos del formulario",
      body: "Si el PDF tiene campos de formulario, toca cada uno para rellenarlo. La app detecta automáticamente el tipo de campo — texto, casilla, desplegable — y te muestra el teclado adecuado.",
    },
    {
      title: "Guarda y comparte",
      body: "Toca Listo. Elige «Guardar» para sobrescribir el original o «Guardar como» para conservar ambos. El menú para compartir te permite enviarlo por Correo, Mensajes, AirDrop o cualquier app instalada.",
    },
  ],
  tips: [
    "Haz zoom con dos dedos antes de editar texto pequeño — mejora muchísimo la precisión.",
    "Toca dos veces una palabra para seleccionar solo esa palabra; tres toques seleccionan toda la línea.",
    "Usa el Apple Pencil en el iPad para firmas notablemente más suaves que dibujando con el dedo.",
    "Activa la integración con Archivos en Ajustes → PDF Editor para que la app aparezca en todos los menús para compartir.",
    "Mantén pulsada la flecha atrás en la pantalla de edición para retroceder varios cambios seguidos si deshacer no es suficiente.",
  ],
  mobileNote:
    "La integración con Archivos en iOS importa: actívala en Ajustes para que PDF Editor aparezca en todos los menús para compartir del resto de apps. A partir de ahí, editar un PDF que recibas por Correo o Slack es cuestión de un toque.",
  faq: [
    {
      q: "¿Puedo editar un PDF escaneado en el iPhone?",
      a: "Puedes anotarlo, firmarlo y reordenar sus páginas. Para editar el texto real de una página escaneada, ejecuta antes el OCR — la app lo hace en un par de segundos.",
    },
    {
      q: "¿La app es gratuita?",
      a: "Sí, para la edición del día a día. Algunas funciones avanzadas se desbloquean con la mejora Pro.",
    },
    {
      q: "¿Funciona con el Apple Pencil?",
      a: "Sí. El Pencil funciona para firmas, notas a mano alzada y resaltados, con una sensación notablemente mejor que con el dedo.",
    },
    {
      q: "¿Puedo editar un PDF protegido con contraseña?",
      a: "Introduce la contraseña cuando se te pida al abrirlo. Una vez desbloqueado, la edición funciona con normalidad. Puedes volver a aplicar la contraseña al guardar.",
    },
    {
      q: "¿Dónde acaba el archivo editado?",
      a: "Donde tú lo guardes: Archivos, iCloud Drive, Google Drive, tu biblioteca de fotos, o directamente en un borrador de correo.",
    },
  ],
  related: [
    { label: "PDF Editor — resumen completo", path: "/pdf-editor" },
    {
      label: "Cómo editar un PDF en Android",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "Cómo firmar un PDF desde el móvil", path: "/sign-pdf" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
