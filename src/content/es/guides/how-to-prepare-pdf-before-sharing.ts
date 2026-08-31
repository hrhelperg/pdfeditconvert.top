import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-before-sharing",
  h1: "Cómo preparar un PDF antes de compartirlo (checklist)",
  description:
    "La revisión previa al envío para un PDF: quita páginas sueltas, corrige la orientación, reduce el tamaño y marca los borradores. Envía un documento limpio, del tamaño correcto y con intención.",
  updated: "2026-05-23",
  intro: [
    "El minuto antes de pulsar enviar es el momento más barato para detectar un problema en un PDF. En cuanto llega a la bandeja de entrada de alguien, la página en blanco, el escaneo de lado, los 40 MB de tamaño o la nota interna que olvidaste quitar pasan a ser también su problema — y el tuyo por el que disculparte. Un repaso breve y deliberado antes de enviar evita casi todo eso.",
    "Esta guía es ese repaso: una checklist práctica que lleva un par de minutos y usa herramientas gratuitas del navegador, cada una ejecutándose en tu dispositivo sin subir nada. Está pensada para los documentos que realmente salen hacia otras personas — presupuestos, contratos, solicitudes, informes.",
    "Nada de esto va de pulir por pulir. Va de que un destinatario abra tu archivo y encuentre exactamente lo esperado, con un tamaño que pueda recibir de verdad, y sin nada de más adjunto.",
  ],
  steps: [
    {
      title: "Confirma que es la versión correcta y final",
      body: "Abre el archivo y comprueba que es el último borrador, completamente editado. Un PDF es una instantánea — corregir una errata después de enviarlo significa reenviar.",
    },
    {
      title: "Elimina lo que no debería salir",
      body: "Quita páginas en blanco, portadas, notas internas y páginas destinadas a otra persona conservando solo lo que corresponde, con la herramienta Extraer páginas de PDF.",
    },
    {
      title: "Corrige la orientación y el orden",
      body: "Usa la herramienta Girar PDF en las páginas de lado y la herramienta Reordenar páginas de PDF en cualquier cosa fuera de secuencia, para que el documento se lea con limpieza de principio a fin.",
    },
    {
      title: "Reduce el tamaño por debajo del límite",
      body: "Si el archivo pesa mucho — los escaneos y las fotos lo consiguen —, pásalo por la herramienta Comprimir PDF para ajustarlo a los límites habituales de correo y portal, de 10 a 25 MB.",
    },
    {
      title: "Marca su estado si no es la versión final",
      body: "Si compartes un borrador para revisión, añade una marca de agua de BORRADOR con la herramienta Añadir marca de agua a PDF para que nadie lo confunda con la versión firmada.",
    },
    {
      title: "Nómbralo con claridad y envíalo",
      body: "Dale un nombre de archivo descriptivo y con fecha para que resulte evidente en la bandeja de entrada del destinatario y fácil de encontrar después, y adjúntalo o súbelo.",
    },
  ],
  tips: [
    "El descuido más habitual antes de enviar es una página que no debería estar ahí — una en blanco, un duplicado, o una página con detalles destinados a otra persona. Revisa página por página.",
    "Ajusta el tamaño al canal: el correo tiene un límite alrededor de los 25 MB, muchos portales de subida mucho menos. Comprimir un archivo cargado de escaneos suele ser la solución.",
    "Una marca de agua de BORRADOR o CONFIDENCIAL fija expectativas y evita que una versión de trabajo se trate como definitiva — un seguro barato para cualquier cosa que aún no esté firmada.",
    "Un nombre de archivo claro forma parte de preparar el documento. Es lo primero que ve el destinatario y lo que buscarás después.",
    "Para cualquier cosa genuinamente sensible, considera también una contraseña — la preparación no es solo orden, es no compartir de más.",
  ],
  mobileNote:
    "Enviar documentos directamente desde el móvil es exactamente donde un repaso rápido antes de enviar merece la pena. La app PDF Editor te deja recortar páginas, girar, comprimir, marcar con agua y renombrar en un mismo sitio antes de que salga — sin conexión, sin subir nada.",
  faq: [
    {
      q: "¿Qué debería comprobar antes de enviar un PDF?",
      a: "Que es la versión final, libre de páginas sueltas o sensibles, correctamente orientado y ordenado, lo bastante pequeño para el canal, marcado si es un borrador, y con un nombre claro. Un repaso de dos minutos lo cubre todo.",
    },
    {
      q: "¿Cómo me aseguro de que no estoy compartiendo las páginas equivocadas?",
      a: "Conserva solo las páginas que corresponden con la herramienta Extraer páginas de PDF, y revisa el resultado página por página. Las notas internas y los datos de otros destinatarios a menudo se esconden en páginas que no necesitas enviar.",
    },
    {
      q: "¿Por qué importa tanto el tamaño del archivo?",
      a: "Los servicios de correo rechazan adjuntos de más de unos 25 MB, y muchos portales de subida tienen un límite bastante más bajo. Un PDF cargado de escaneos supera esos límites con facilidad, así que comprimirlo evita un rebote o una subida rechazada.",
    },
    {
      q: "¿Son privadas estas herramientas de preparación?",
      a: "Sí. Las herramientas de extraer, girar, reordenar, comprimir y marca de agua se ejecutan todas en tu navegador, en tu dispositivo — no se sube nada.",
    },
    {
      q: "¿Debería protegerse con contraseña cada PDF que comparto?",
      a: "No — solo los genuinamente sensibles. Una contraseña añade fricción para el destinatario, así que resérvala para documentos cuyo contenido realmente necesite protección.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduce para el correo", path: "/compress-pdf" },
    { label: "Añadir marca de agua a PDF — marca borradores", path: "/add-watermark-to-pdf" },
    { label: "Cómo reducir el tamaño de un PDF para el correo", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Cómo compartir un PDF desde el móvil", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "Todas las herramientas gratuitas de PDF", path: "/pdf-tools" },
};

export default content;
