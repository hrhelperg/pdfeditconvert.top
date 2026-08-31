import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdf-from-phone",
  h1: "Cómo compartir un PDF desde el móvil",
  description:
    "Comparte un PDF desde iPhone o Android como es debido — correo, AirDrop, mensajería o enlace — y prepáralo para que llegue de verdad.",
  updated: "2026-05-23",
  intro: [
    "Compartir un PDF desde un móvil es cosa de un solo toque hasta que deja de serlo — el archivo pesa demasiado para el correo, el destinatario no puede abrir el enlace, o te das cuenta demasiado tarde de que enviaste la versión con una página que no debía salir. Hacerlo bien tiene menos que ver con el botón de compartir y más con elegir el canal correcto y preparar el archivo antes de tocarlo.",
    "Esta guía cubre las principales formas de compartir desde un iPhone o un móvil Android — correo, AirDrop o Nearby Share, apps de mensajería y enlaces en la nube — y cuándo cada una es la opción correcta. También cubre la preparación rápida que evita que un envío rebote o te deje en mal lugar.",
    "Todo el sentido de un móvil es enviar cosas desde donde estés. Un poco de cuidado convierte eso de un toque con esperanza en un documento que llega de forma fiable, con el tamaño adecuado, sin nada añadido.",
  ],
  steps: [
    {
      title: "Prepara el archivo antes de compartirlo",
      body: "Confirma que es la versión correcta, quita cualquier página que no deba salir y comprueba que el tamaño es razonable. Treinta segundos aquí evitan la mayoría de los contratiempos al compartir.",
    },
    {
      title: "Abre el menú para compartir",
      body: "Toca Compartir sobre el PDF — desde Archivos, tu app de correo o la app PDF Editor. Tanto iOS como Android muestran desde ahí todos los destinos relevantes.",
    },
    {
      title: "Correo para documentos formales",
      body: "Adjúntalo a un correo cuando quede un rastro que conservar — contratos, facturas, solicitudes. Ten en cuenta el límite de ~25 MB; comprime primero si el archivo pesa mucho.",
    },
    {
      title: "AirDrop o Nearby Share para alguien cerca",
      body: "¿Envías a un dispositivo que está en la misma sala? AirDrop (iPhone) o Nearby Share (Android) mueve el archivo directamente, rápido, sin límite de tamaño y sin necesitar internet.",
    },
    {
      title: "Apps de mensajería para envíos rápidos e informales",
      body: "WhatsApp, Mensajes y similares están bien para envíos casuales, pero algunas recomprimen o limitan los archivos. Para cualquier cosa que deba llegar impecable, prefiere el correo o un enlace.",
    },
    {
      title: "Un enlace en la nube para envíos grandes o a muchos destinatarios",
      body: "Para un archivo grande o una audiencia amplia, comparte un enlace desde un servicio en la nube que controles. Esquiva los límites de tamaño y te permite revocar el acceso más adelante.",
    },
  ],
  tips: [
    "Comprime antes de compartir si el archivo está lleno de escaneos — un correo rebotado es peor resultado que un archivo un poco más pequeño.",
    "Revisa las páginas antes de tocar compartir. El descuido más habitual es enviar una versión con una nota interna o una página pensada para otra persona.",
    "AirDrop y Nearby Share son los héroes anónimos para compartir en persona: instantáneo, sin límite de tamaño, sin internet, sin enviar nada a ningún servidor.",
    "Las apps de mensajería pueden recomprimir documentos sin avisar. Para archivos donde la calidad o la fidelidad importan, usa el correo o un enlace en la nube en su lugar.",
    "Para documentos sensibles por enlace, usa un servicio de confianza y desactiva el acceso en cuanto el destinatario tenga el archivo.",
  ],
  mobileNote:
    "La app PDF Editor comparte directamente desde el menú para compartir después de preparar el archivo — comprimir, recortar una página, firmar — así el documento que sale de tu móvil es el que querías enviar, con un tamaño que llega sin problemas. Todo lo anterior al envío ocurre en el dispositivo.",
  faq: [
    {
      q: "¿Cuál es la mejor forma de compartir un PDF desde mi móvil?",
      a: "Depende del destinatario: correo para documentos formales, AirDrop o Nearby Share para alguien cercano, apps de mensajería para envíos rápidos e informales, y un enlace en la nube para archivos grandes o muchos destinatarios.",
    },
    {
      q: "¿Por qué no se envía mi PDF por correo?",
      a: "Probablemente supera el límite de adjuntos de ~25 MB, casi siempre porque está lleno de escaneos. Comprímelo primero, o comparte un enlace en la nube en su lugar.",
    },
    {
      q: "¿Las apps de mensajería cambian mi PDF?",
      a: "Algunas recomprimen o limitan los adjuntos, lo que puede afectar a la calidad. Para documentos que deben llegar exactamente como los enviaste, usa el correo o un enlace en la nube en vez de una app de chat.",
    },
    {
      q: "¿Es privado AirDrop o Nearby Share?",
      a: "Sí — el archivo se transfiere directamente entre dispositivos sin pasar por ningún servidor ni por internet, lo que lo convierte en una buena opción para documentos sensibles compartidos en persona.",
    },
    {
      q: "¿Cómo evito compartir las páginas equivocadas?",
      a: "Revisa el documento antes de tocar compartir y elimina cualquier página que no deba salir. Consulta la guía sobre preparar un PDF antes de compartirlo para una checklist completa previa al envío.",
    },
  ],
  related: [
    { label: "PDF Editor — prepara y comparte en el móvil", path: "/pdf-editor" },
    { label: "Cómo preparar un PDF antes de compartirlo", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Cómo enviar un PDF pesado", path: "/guides/how-to-send-large-pdf-files" },
    { label: "Cómo reducir el tamaño de un PDF en Android", path: "/guides/how-to-make-pdf-smaller-on-android" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
