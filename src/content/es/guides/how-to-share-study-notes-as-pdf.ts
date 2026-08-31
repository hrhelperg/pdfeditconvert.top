import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-study-notes-as-pdf",
  h1: "Cómo compartir apuntes de estudio en PDF (grupo, chat, nube)",
  description:
    "Comparte apuntes con un grupo de estudio sin perder el formato ni el control de versiones. Los hábitos con PDF que evitan que estudiar en grupo acabe en un caos de capturas de pantalla.",
  updated: "2026-05-29",
  intro: [
    "Compartir apuntes con un grupo de estudio debería ser sencillo, pero en la práctica suele acabar en un hilo de chat con treinta capturas de pantalla y tres versiones distintas de la misma clase. La noche antes del examen, nadie encuentra la versión con el ejemplo resuelto que todos siguen mencionando, y alguien ha mandado una foto de sus anotaciones al margen escritas a mano que nadie consigue leer.",
    "El PDF resuelve casi todo esto. Fija el formato, funciona en cualquier dispositivo, cabe en el menú para compartir de cualquier plataforma y no depende de una sola cuenta en la nube. Unos pocos hábitos al compartir — nombrar el archivo siempre igual, versionar con criterio, elegir el canal adecuado — mantienen el estudio en grupo coherente sin que nadie tenga que gestionarlo como si fuera un proyecto.",
    "Esta guía describe esos hábitos. Ninguno es una herramienta; todos son convenciones que tú y tu grupo acordáis una vez. A partir de ahí, todo funciona solo.",
  ],
  steps: [
    {
      title: "Acordad primero el canal para compartir",
      body: "Elegid un único sitio — chat de grupo, carpeta compartida en la nube, un Discord dedicado — y manteneos fieles a él. Los apuntes repartidos entre dos canales son imposibles de encontrar. El canal importa menos que la constancia.",
    },
    {
      title: "Comparte siempre en PDF, nunca fotos del documento",
      body: "Una captura de pantalla de un PDF es peor que el propio PDF. Envía el archivo directamente. En el móvil es fácil — menú para compartir → archivo, no captura.",
    },
    {
      title: "Nombra el archivo pensando en el grupo, no en ti",
      body: "CodigoAsignatura_Semana3_Apuntes_TuNombre.pdf. El grupo ve quién compartió qué y de qué semana. «Apuntes.pdf» no sirve de nada en un hilo con quince archivos llamados Apuntes.pdf.",
    },
    {
      title: "Marca los apuntes provisionales con marca de agua",
      body: "Si tus apuntes son un primer borrador que probablemente vas a revisar, Añadir marca de agua a PDF estampa BORRADOR o EN PROCESO en cada página. El grupo sabe que llegará una revisión.",
    },
    {
      title: "Comprime antes de compartir",
      body: "Comprimir PDF reduce el tamaño del archivo para plataformas de chat con límites de adjuntos. Ahorra tiempo de subida con datos móviles y evita el rechazo por «archivo demasiado grande».",
    },
    {
      title: "Lleva el control de versiones en el nombre del archivo, no en el chat",
      body: "Semana3_Apuntes_v2.pdf no deja lugar a dudas. «He revisado los apuntes, va adjunto» en un hilo de chat sí. El nombre del archivo es el registro de versiones.",
    },
  ],
  tips: [
    "No compartas documentos de Word con el grupo. Se ven distinto en cada dispositivo, quedan bloqueados a un editor a la vez y se dividen en versiones enseguida. El PDF lo fija todo.",
    "Usa PDF con OCR de los apuntes manuscritos siempre que puedas — el texto buscable ayuda al grupo a encontrar temas concretos rápido.",
    "No publiques fotos de la pantalla del portátil. Los artefactos (moiré, reflejos, poca resolución) hacen los apuntes más difíciles de leer, no más fáciles.",
    "Si tu grupo comparte con regularidad, preparad de antemano una plantilla común para los PDF de apuntes. Las portadas coherentes ayudan a reconocer quién compartió cada cosa.",
    "Evita el correo electrónico para los apuntes de grupo. El chat lleva registro de quién ha visto qué; el correo dispersa la misma conversación en muchas bandejas de entrada.",
  ],
  mobileNote:
    "El móvil se encarga de la mayor parte de compartir en grupo — captura rápida de fotos, envío inmediato al chat, confirmación al momento. La app PDF Editor gestiona la cadena de escanear, fusionar, comprimir y renombrar desde el móvil, así que el archivo que llega al chat del grupo está limpio en lugar de ser un volcado en bruto del carrete.",
  faq: [
    {
      q: "¿Cuál es la peor forma de compartir apuntes de estudio?",
      a: "Capturas de pantalla del documento o apuntes solo en el chat. Ambos son imposibles de buscar y no sobreviven cuando la conversación sigue avanzando.",
    },
    {
      q: "¿Debería compartir apuntes todo el mundo o solo una persona?",
      a: "Que comparta todo el mundo con un plan: semanas repartidas por persona, o «esta semana la hago yo, la siguiente la haces tú». Rotar reduce el esfuerzo de cada uno y produce apuntes con varios puntos de vista.",
    },
    {
      q: "¿Dónde deberían vivir los apuntes definitivos?",
      a: "Una carpeta compartida en la nube es lo mejor para guardarlos a largo plazo. El chat de grupo sirve para repartirlos rápido; la carpeta es el archivo.",
    },
    {
      q: "¿Cómo llevamos las versiones de los apuntes?",
      a: "Solo con el nombre del archivo. v1, v2, v3. Cuando el grupo acuerda que ya es la DEFINITIVA, renombradla y moved el archivo a /definitivo/. No llevéis el control de versiones en el chat.",
    },
    {
      q: "¿Y si los apuntes están escritos a mano?",
      a: "Escanéalos a PDF primero. Los escaneos en blanco y negro de apuntes manuscritos salen más nítidos y más pequeños que unas fotos. Añade OCR si tu herramienta lo permite.",
    },
  ],
  related: [
    { label: "PDF para estudiantes — apuntes y guías de estudio", path: "/pdf-for-students" },
    { label: "Comprimir PDF — reduce el tamaño para los límites de adjuntos del chat", path: "/compress-pdf" },
    { label: "Cómo organizar tu material de estudio en PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Cómo compartir un PDF desde el móvil", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "PDF para estudiantes — apuntes, subrayados, guías de estudio", path: "/pdf-for-students" },
};

export default content;
