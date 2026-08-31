import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdf-files-privately",
  h1: "Cómo compartir un PDF con privacidad (sin subirlo a desconocidos)",
  description:
    "La forma privada de compartir un PDF no pasa por una web pública de «herramientas PDF». Los canales que mantienen el documento solo entre tú y el destinatario, con ajustes razonables.",
  updated: "2026-05-29",
  intro: [
    "Lo primero que hace mucha gente cuando quiere compartir un PDF con alguien es enviarlo a una herramienta que promete un intercambio «privado» — y esa herramienta, con frecuencia, es el mayor riesgo de privacidad de toda la cadena. Los servicios gratuitos de intercambio de archivos suelen conservar los archivos durante un tiempo, a veces los indexan, y dependen de un servidor con el que no tienes ninguna relación.",
    "Compartir con privacidad no es complicado; es cuestión de elegir bien el canal. Transferencia directa (AirDrop, USB), mensajería cifrada de extremo a extremo, correo cifrado, o archivos protegidos con contraseña enviados por correo normal. Cada uno sirve para una situación distinta. Ninguno exige enviar el archivo a un desconocido.",
    "Esta guía recorre las opciones realistas según el nivel de sensibilidad y el caso de uso, con las ventajas y los inconvenientes de cada una. El objetivo es que los documentos compartidos se queden entre tú y el destinatario, sin un tercero de por medio que se pueda evitar.",
  ],
  steps: [
    {
      title: "Para transferencias en el mismo sitio o entre dispositivos cercanos, usa AirDrop o el envío local",
      body: "De iPhone a iPhone, de iPhone a Mac: AirDrop. Android: Nearby Share. Mismo Mac, mismo PC: AirDrop local o carpeta compartida. El archivo nunca toca internet.",
    },
    {
      title: "Para destinatarios de confianza, usa mensajería cifrada de extremo a extremo",
      body: "Signal, WhatsApp (con matices), iMessage entre usuarios de Apple. El propio canal va cifrado; el archivo solo se descifra en el dispositivo del destinatario. Las plataformas ven los metadatos, no el contenido.",
    },
    {
      title: "Para archivos poco sensibles, el correo normal vale",
      body: "El correo estándar no va cifrado, pero es prácticamente seguro para la mayoría de documentos sin importancia. El riesgo es la interceptación, algo poco frecuente en documentos normales que pasan por los grandes proveedores de correo.",
    },
    {
      title: "Para archivos sensibles por correo normal, protégelos antes con contraseña",
      body: "Aplica una contraseña al PDF antes de adjuntarlo. El correo lleva el archivo; la contraseña va por un canal distinto (una llamada, un mensaje aparte). Aunque intercepten el correo, el archivo sigue protegido.",
    },
    {
      title: "Para material muy sensible, usa correo cifrado o un servicio de entrega segura",
      body: "ProtonMail, Tutanota, o el servicio de entrega segura de documentos de tu organización. Estos añaden cifrado real al propio canal, eliminando el paso de compartir la contraseña por otra vía.",
    },
    {
      title: "Evita subir contenido sensible a servicios gratuitos de intercambio de archivos",
      body: "Las herramientas gratuitas que suben tu archivo (compresores, fusionadores, divisores) lo retienen en su servidor, aunque sea brevemente. Para material sensible, usa herramientas basadas en el navegador que procesan en local antes de compartir nada.",
    },
  ],
  tips: [
    "No pongas la contraseña en el mismo correo que el archivo protegido con contraseña. El sentido de la contraseña es defenderse precisamente de una interceptación del correo.",
    "Confirma la identidad del destinatario antes de compartir — algunos intentos de phishing se hacen pasar por clientes para conseguir PDF sensibles.",
    "Para envíos repetidos al mismo destinatario, acordad un único canal y manteneos fieles a él. Cambiar de canal es donde suelen producirse las filtraciones.",
    "No compartas mediante enlaces públicos salvo que el enlace sea de un solo uso. Los enlaces permanentes se pueden descubrir o reenviar más allá de lo previsto.",
    "Después de compartir, elimina el archivo de cualquier zona temporal (carpeta de Descargas, disco de trabajo). Cuantas menos copias del material sensible existan, menor es la superficie expuesta.",
  ],
  mobileNote:
    "Hoy la mayoría de los envíos privados empiezan en el móvil. La app PDF Editor prepara los archivos (comprimir, firmar, proteger con contraseña) en el propio dispositivo en iOS y Android, y de ahí pasa directamente a AirDrop, Signal o tu correo — el archivo se queda en el móvil durante toda la preparación y solo se transfiere directamente al destinatario.",
  faq: [
    {
      q: "¿Cuál es la forma más sencilla de compartir con privacidad?",
      a: "AirDrop o Nearby Share cuando estás cerca del destinatario. Mensajería cifrada de extremo a extremo cuando no lo estás. Las dos mantienen el archivo fuera del alcance de servidores de terceros.",
    },
    {
      q: "¿Es WhatsApp suficientemente privado para documentos sensibles?",
      a: "El cifrado de extremo a extremo protege el contenido; WhatsApp sí ve los metadatos (quién envió qué a quién). Para la mayoría de los casos es suficiente; para material muy sensible, Signal es la opción más limpia.",
    },
    {
      q: "¿Debería usar un servicio de enlaces para compartir archivos?",
      a: "Solo con compromisos explícitos sobre el trato de los datos y una retención corta. Para archivos sensibles, los canales directos son más seguros.",
    },
    {
      q: "¿Cómo se compara la protección con contraseña de un PDF con el cifrado del canal?",
      a: "Las contraseñas de PDF protegen el archivo en sí; el cifrado del canal protege el transporte. Los dos tienen valor; protegen frente a ataques distintos.",
    },
    {
      q: "¿Cuál es la peor práctica habitual?",
      a: "Subir un PDF sensible a una herramienta gratuita de «conversión» o «compresión», y luego enviar por correo el archivo resultante. El paso de la subida es donde los datos salen de tu control. Usa herramientas basadas en el navegador que no suben nada.",
    },
  ],
  related: [
    { label: "Seguridad PDF — protege y cifra tus documentos", path: "/pdf-security" },
    { label: "Cómo proteger tus PDF sensibles", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "Cómo evitar subir documentos sensibles", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
    { label: "Una organización documental sin subir nada", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "Seguridad PDF — protege y cifra tus documentos", path: "/pdf-security" },
};

export default content;
