import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "privacy-first-pdf-tools",
  h1: "Herramientas PDF que respetan tu privacidad — tus documentos se quedan en tu dispositivo",
  description:
    "Los PDF guardan algunos de tus datos más sensibles. Cómo trabajar con ellos sin subir nada, y qué significa de verdad «privacidad primero».",
  updated: "2026-05-23",
  intro: [
    "Piensa en lo que hay en tus PDF: contratos, extractos bancarios, formularios de hacienda, escaneos del pasaporte, cartas médicas, acuerdos firmados. Son algunos de los archivos más sensibles que tienes — y la costumbre de soltarlos en la primera «herramienta PDF online gratis» para unirlos o comprimirlos significa entregar exactamente esos datos a un servidor del que no sabes nada.",
    "Las herramientas PDF que respetan tu privacidad plantean un enfoque distinto: el archivo nunca sale de tu dispositivo. El procesamiento ocurre en tu navegador, o en tu móvil, usando tu propio hardware — así que no hay subida, ni copia en un servidor, ni política de retención de la que preocuparse porque no hay nada que retener. Esta guía explica qué significa eso en la práctica y cómo ponerlo a trabajar.",
    "Las herramientas de este sitio están construidas así, y la app PDF Editor extiende esto al uso en el móvil y sin conexión. Aquí tienes cómo mantener tus documentos siendo tuyos.",
  ],
  steps: [
    {
      title: "Entiende qué significa aquí «privacidad primero»",
      body: "Significa que el procesamiento ocurre en tu dispositivo, no en un servidor. Tu archivo se lee en local, la operación se ejecuta en tu navegador o en la app, y nada se transmite — no hay ninguna subida que se pueda filtrar, interceptar o retener.",
    },
    {
      title: "Usa herramientas del navegador que trabajan en el dispositivo para lo cotidiano",
      body: "Unir, dividir, comprimir, convertir, girar y extraer funcionan todas en tu navegador aquí. Para documentos sensibles, esa es la diferencia entre una operación privada y una subida.",
    },
    {
      title: "Trabaja sin conexión para los archivos más sensibles",
      body: "Para un escaneo del pasaporte o un contrato confidencial, la garantía más sólida es la más sencilla: desconéctate de internet y usa una herramienta que siga funcionando. Si funciona, el archivo de verdad no va a ningún sitio.",
    },
    {
      title: "Añade protección donde el documento la justifique",
      body: "La privacidad en el envío también significa no compartir de más. Envía solo las páginas necesarias, y protege con contraseña los documentos genuinamente confidenciales antes de que salgan de tus manos.",
    },
    {
      title: "Sé deliberado al compartir",
      body: "Las transferencias directas como AirDrop o Nearby Share, o un enlace en la nube que controlas y puedes revocar, te mantienen al mando de quién ve el archivo — más que soltarlo en una app de chat.",
    },
    {
      title: "Reserva las herramientas con subida de archivos solo para lo público",
      body: "Si un documento no es sensible — un folleto público, una plantilla en blanco — una herramienta con subida de archivos está bien. Guarda las herramientas del dispositivo para cualquier cosa que te importaría que leyera un desconocido.",
    },
  ],
  tips: [
    "La prueba sin conexión demuestra la privacidad: si una herramienta sigue funcionando con tu conexión apagada, tu archivo no se está subiendo.",
    "«Archivos eliminados pasada una hora» sigue significando que tu documento se subió. Una herramienta que procesa en el dispositivo nunca lo tuvo para eliminarlo.",
    "La privacidad no va solo de subidas — enviar únicamente las páginas necesarias, en vez del archivo entero, limita lo que expones.",
    "En el móvil, el procesamiento en el dispositivo también significa que funciona sin cobertura y no gasta tus datos — privacidad y practicidad en uno.",
    "Ajusta el cuidado al contenido. Un contrato o un documento de identidad merece una herramienta del dispositivo; un documento público no necesita el mismo cuidado.",
  ],
  mobileNote:
    "La app PDF Editor respeta la privacidad por diseño: procesa los documentos en tu móvil y funciona por completo sin conexión, así puedes comprimir un contrato o escanear un documento de identidad en modo avión sin que nada salga del dispositivo. Sin cuenta, sin subir nada, sin copia en un servidor.",
  faq: [
    {
      q: "¿Qué hace que una herramienta PDF respete tu privacidad?",
      a: "Que el archivo se procese en tu dispositivo en vez de subirlo a un servidor. No hay transmisión, ni copia remota, ni política de retención en la que confiar — porque el documento nunca sale de tu hardware.",
    },
    {
      q: "¿Respetan la privacidad las herramientas de este sitio?",
      a: "Sí. Unir, dividir, comprimir, convertir, girar y extraer funcionan todas en tu navegador, en tu dispositivo. Tus archivos no se suben.",
    },
    {
      q: "¿Cómo puedo verificar que una herramienta no sube mi archivo?",
      a: "Cárgala, desconéctate y prueba a usarla. Una herramienta genuina que trabaja en el dispositivo sigue funcionando; una con subida de archivos no puede, porque no tiene dónde enviarlo.",
    },
    {
      q: "¿Qué documentos necesitan más un trato que respete la privacidad?",
      a: "Cualquier cosa sensible: contratos, extractos bancarios, formularios de hacienda, escaneos de identidad y pasaporte, cartas médicas, acuerdos firmados. Para archivos públicos, una herramienta con subida de archivos está bien.",
    },
    {
      q: "¿Respetar la privacidad significa herramientas más débiles?",
      a: "No. Las herramientas del dispositivo gestionan bien las tareas cotidianas de PDF y suelen ser más rápidas, ya que no hay espera de subida ni de descarga. Los trabajos muy grandes o especializados son donde ayuda la aceleración por hardware de la app móvil.",
    },
  ],
  related: [
    {
      label: "App de PDF o herramientas PDF online",
      path: "/compare/pdf-app-vs-online-pdf-tools",
    },
    { label: "Todas las herramientas PDF gratis — sin subir nada, sin cuenta", path: "/pdf-tools" },
    { label: "Herramientas PDF en el navegador o con subida de archivos", path: "/guides/browser-based-pdf-tools-vs-upload-tools" },
    { label: "Seguridad de PDF — protege tus documentos", path: "/pdf-security" },
    { label: "Cómo proteger un PDF con contraseña", path: "/guides/how-to-protect-pdf-file" },
  ],
  parentHub: { label: "Seguridad de PDF", path: "/pdf-security" },
};

export default content;
