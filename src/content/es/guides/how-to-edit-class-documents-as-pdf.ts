import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-class-documents-as-pdf",
  h1: "Cómo anotar y rellenar documentos de clase en PDF",
  description:
    "Los apuntes fotocopiados, las hojas de ejercicios y las autorizaciones suelen llegar en PDF. Cómo marcarlos, rellenarlos y devolverlos sin imprimir, desde el móvil o el portátil.",
  updated: "2026-05-29",
  intro: [
    "Los documentos de clase te llegan hoy en PDF más que en ningún otro formato. Apuntes fotocopiados para anotar, hojas de ejercicios para rellenar, autorizaciones para firmar y devolver, programas de la asignatura para revisar. La tentación es imprimirlo todo, rellenarlo a mano y volver a escanearlo. Funciona, pero es lento y el resultado se ve peor que editar el PDF directamente.",
    "Las herramientas actuales de edición de PDF cubren bien los cuatro casos: subrayado y anotación para la lectura, relleno de formulario para hojas de ejercicios y formularios, firma para autorizaciones, y ediciones de estructura cuando necesitas añadir una página. Casi todo se puede hacer en una pestaña del navegador o en una app del móvil sin pagar por ningún programa.",
    "Esta guía recorre cada caso: cuál es la herramienta adecuada, qué hace y qué no hace, y cómo devolver una copia limpia y rellenada. Da por hecho que no quieres imprimir nada si puedes evitarlo.",
  ],
  steps: [
    {
      title: "Para leer y anotar: subraya y comenta",
      body: "La mayoría de los lectores de PDF (y la app PDF Editor) admiten subrayado, resaltado y comentarios tipo nota adhesiva. Úsalos para una lectura activa; las anotaciones se quedan en el archivo y se conservan al compartirlo.",
    },
    {
      title: "Para campos de formulario reales: rellena tocando",
      body: "Los PDF diseñados como formulario tienen campos interactivos de verdad. Toca cada uno, escribe, pasa al siguiente. El resultado se ve igual que un trabajo impreso y completado a máquina.",
    },
    {
      title: "Para PDF planos (sin campos de formulario): añade cajas de texto",
      body: "Un apunte escaneado sin campos reales requiere que superpongas cajas de texto sobre los espacios en blanco. La app PDF Editor lo permite; el resultado se ve más ordenado que unas respuestas escritas a mano sobre una hoja impresa.",
    },
    {
      title: "Para firmas: Firmar PDF",
      body: "Firmar PDF te permite dibujar o escribir una firma directamente sobre el formulario. Para autorizaciones y permisos, una firma dibujada es la opción correcta.",
    },
    {
      title: "Para añadir páginas: fusiona",
      body: "Si tu respuesta es más larga de lo que permiten los espacios en blanco del apunte, Fusionar PDF te deja añadir páginas adicionales. Mantenlas en el orden correcto; las páginas originales quedan intactas.",
    },
    {
      title: "Guarda como archivo nuevo, no sobre el original",
      body: "Guarda la versión rellenada con un nombre nuevo (Apunte3_Completado_Apellido.pdf). El original en blanco se queda intacto por si necesitas repetirlo o compartirlo con un compañero de estudio.",
    },
  ],
  tips: [
    "Comprueba primero si el PDF tiene campos de formulario reales. Si al tocar una línea en blanco aparece un cursor de escritura, es un formulario de verdad. Si no pasa nada, necesitas una caja de texto superpuesta.",
    "Usa un tamaño de letra constante para las respuestas rellenadas — igualando el tamaño del cuerpo del documento si puedes distinguirlo.",
    "No imprimas para rellenar salvo que sea imprescindible. La versión escaneada de vuelta siempre se lee peor que el relleno digital.",
    "Guarda antes de firmar. Una firma suele aplanar partes del archivo; la versión previa a la firma es la copia editable.",
    "Confirma que los formularios rellenados quedan bien exportando después a PDF — algunas herramientas guardan el estado rellenable por separado y el PDF exportado es el que fija tus respuestas.",
  ],
  mobileNote:
    "Muchos documentos de clase llegan al móvil y hay que devolverlos por la misma vía. La app PDF Editor gestiona la anotación, el relleno de formularios, la firma y la fusión en iOS y Android, así que un apunte no tiene que esperar a que tengas el portátil a mano para devolverlo completado.",
  faq: [
    {
      q: "¿Puedo editar un PDF desde el navegador?",
      a: "Para casos limitados sí — rellenar formularios y anotar funciona en muchos navegadores. Para ediciones de texto y cambios de estructura, un editor de verdad (basado en el navegador o en app) da más de sí.",
    },
    {
      q: "¿Por qué mi apunte no tiene campos de formulario reales?",
      a: "O el profesor lo exportó sin activarlos, o el archivo es un escaneo. Usa cajas de texto superpuestas sobre las líneas en blanco.",
    },
    {
      q: "¿Se aceptan los PDF firmados para los formularios de clase?",
      a: "Cada vez más, sí. Algunos formularios legales (autorizaciones que en ciertas jurisdicciones deben firmarse expresamente) todavía pueden exigir tinta — comprueba las instrucciones del formulario.",
    },
    {
      q: "¿Debería guardar siempre como archivo nuevo?",
      a: "Sí, para el trabajo de clase. Conservar el original en blanco te permite volver a intentarlo o compartirlo sin tener que descargarlo de nuevo.",
    },
    {
      q: "¿Cómo añado una página a un PDF que estoy rellenando?",
      a: "Escribe tu contenido adicional como un PDF aparte y luego usa Fusionar PDF para combinarlo. Coloca la página añadida donde tenga sentido dentro del documento.",
    },
  ],
  related: [
    { label: "PDF Editor — edita texto e imágenes en el móvil", path: "/pdf-editor" },
    { label: "Firmar PDF — añade firmas electrónicas", path: "/sign-pdf" },
    { label: "Cómo rellenar formularios PDF desde el móvil", path: "/guides/how-to-fill-pdf-forms-on-phone" },
    { label: "Cómo anotar un PDF en el móvil", path: "/guides/how-to-annotate-pdf-on-mobile" },
  ],
  parentHub: { label: "PDF Editor — edita texto, imágenes y páginas", path: "/pdf-editor" },
};

export default content;
