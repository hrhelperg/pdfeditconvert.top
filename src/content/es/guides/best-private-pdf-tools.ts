import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-private-pdf-tools",
  h1: "Las mejores herramientas PDF privadas (cuando la confidencialidad importa de verdad)",
  description:
    "Para un contrato, un extracto bancario o cualquier otro PDF sensible, estas son las herramientas que respetan la privacidad por su propia arquitectura, no solo por una política escrita.",
  updated: "2026-05-29",
  intro: [
    "«Privado» se aplica a las herramientas PDF de la misma forma que «natural» se aplica a las etiquetas de comida — con generosidad y a menudo sin mucha exactitud. Muchas herramientas presumen de privacidad en su texto mientras envían cada archivo a su servidor y lo procesan allí. La privacidad, entonces, depende de una política: «no conservamos tu archivo más de una hora». Es mejor que nada, pero depende de que la política se cumpla, lo cual depende de que la empresa se mantenga fiel a ella — no es una garantía sólida para material genuinamente sensible.",
    "Las herramientas PDF privadas — las que de verdad lo son — son privadas por arquitectura. Tu archivo no llega en absoluto a su servidor. El procesamiento ocurre en tu navegador o en una app local del móvil. La privacidad no es una política; es una propiedad estructural. Ese es el criterio con el que hay que medir una herramienta cuando el archivo importa de verdad.",
    "Esta guía enumera las opciones privadas para las tareas PDF más habituales. La arquitectura es el listón; el resto se deriva de ahí.",
  ],
  steps: [
    {
      title: "Para comprimir archivos sensibles: Comprimir PDF en el navegador",
      body: "Comprimir PDF en tu navegador reduce el archivo en local. Extractos bancarios sensibles, DNI escaneados y contratos se comprimen sin salir nunca de tu dispositivo. Compruébalo con las herramientas de desarrollador — sin POST saliente al añadir el archivo.",
    },
    {
      title: "Para fusionar archivos sensibles: Fusionar PDF en el navegador",
      body: "Fusionar PDF combina contratos, anexos o paquetes firmados en local. El archivo fusionado se genera en la memoria del navegador; los componentes se quedan en tu equipo en todo momento.",
    },
    {
      title: "Para extraer páginas concretas antes de compartir: Extraer páginas de PDF",
      body: "Si solo necesitas enviar páginas concretas de un documento sensible, Extraer páginas de PDF produce un nuevo PDF con solo esas páginas — en local, en tu navegador.",
    },
    {
      title: "Para eliminar páginas al estilo de un tachado: Extraer o Reordenar",
      body: "El tachado real de texto es una tarea especializada; si lo que haces es quitar páginas enteras o sustituirlas, las herramientas a nivel de página de tu navegador hacen el trabajo sin exponer el contenido a ningún servidor.",
    },
    {
      title: "Para firmar contratos: Firmar PDF o la app PDF Editor",
      body: "Firmar PDF en el navegador o la app PDF Editor en el móvil mantienen el contrato en tu dispositivo durante toda la firma. Ninguna plataforma de firma electrónica ve el documento.",
    },
    {
      title: "Para archivos privados: almacenamiento local cifrado",
      body: "Después de procesarlos, archiva los PDF sensibles en un soporte cifrado — FileVault, BitLocker, discos externos cifrados, o una copia de seguridad en la nube con cifrado de conocimiento cero. El procesamiento local no sirve de mucho si el almacenamiento del archivo va sin cifrar.",
    },
  ],
  tips: [
    "La privacidad por arquitectura gana a la privacidad por política. La arquitectura se puede verificar; la política depende de la confianza.",
    "La pestaña de red de las herramientas de desarrollador es el paso de verificación. Si no puedes comprobarlo, no te fíes.",
    "No aceptes registrarte en herramientas que se presentan como genuinamente privadas — la cuenta es un dato más que la herramienta, si no, no tendría.",
    "Las herramientas privadas del móvil deberían funcionar sin conexión. Si una app «privada» exige red constante, pregúntate por qué.",
    "Combina herramientas privadas con canales privados. Procesar algo de forma privada y luego enviar el resultado por correo sin cifrar anula el sentido de todo lo anterior.",
  ],
  mobileNote:
    "En el móvil, la app PDF Editor es la opción privada — todo el procesamiento ocurre en el propio dispositivo, sin enviar nada a ningún servidor, sin cuenta. Útil para contratos y escaneos sensibles, cuando el móvil es el dispositivo natural pero el archivo no debería pasar por el servidor de nadie más.",
  faq: [
    {
      q: "¿Qué hace que una herramienta PDF sea de verdad privada?",
      a: "La arquitectura — que el archivo no llegue al servidor de la herramienta. Las políticas de retención declaradas son más débiles porque dependen de que la empresa cumpla sus propios compromisos.",
    },
    {
      q: "¿Son mejores las herramientas «privadas» de pago que las gratuitas?",
      a: "No necesariamente. Las herramientas gratuitas que funcionan en tu navegador tienen la misma privacidad estructural que las herramientas de pago sin subida. Las herramientas de pago ganan en funciones avanzadas (flujos regulados, e-discovery), no en la privacidad de base.",
    },
    {
      q: "¿Puedo comprobar yo mismo la privacidad de una herramienta?",
      a: "Sí — herramientas de desarrollador del navegador, pestaña de red. Suelta un archivo, observa si hay solicitudes salientes. Que no se vea ninguna subida significa que no ha habido ninguna subida.",
    },
    {
      q: "¿Y el cifrado de extremo a extremo?",
      a: "Es útil para compartir, pero no ayuda con el procesamiento. Si una herramienta necesita leer tu archivo para procesarlo, que el tránsito vaya cifrado no importa — el servidor sigue viendo el contenido.",
    },
    {
      q: "¿Cuál es la postura de privacidad más sólida para PDF sensibles?",
      a: "Procesar en local con herramientas del navegador o apps locales. Archivar en un soporte cifrado. Compartir por canales cifrados de extremo a extremo. Cada capa cubre una superficie de ataque distinta.",
    },
  ],
  related: [
    { label: "Seguridad PDF — protege y cifra tus documentos", path: "/pdf-security" },
    { label: "Herramientas PDF — en el navegador, sin subir nada", path: "/pdf-tools" },
    { label: "Herramientas PDF centradas en la privacidad", path: "/guides/privacy-first-pdf-tools" },
    { label: "Cómo proteger tus PDF sensibles", path: "/guides/how-to-protect-sensitive-pdf-files" },
  ],
  parentHub: { label: "Herramientas PDF — gratis, en el navegador", path: "/pdf-tools" },
};

export default content;
