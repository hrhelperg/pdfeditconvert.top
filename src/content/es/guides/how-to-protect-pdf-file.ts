import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-pdf-file",
  h1: "Cómo proteger un PDF con contraseña",
  description:
    "Añade una contraseña y cifrado a un PDF desde el móvil o el ordenador. Guía práctica con la app PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Muchos documentos no deberían viajar como PDF en abierto: nóminas, contratos firmados, escaneos de documentos de identidad, copias de acuerdos de confidencialidad, historiales médicos, estados financieros. Una contraseña y un cifrado en condiciones convierten el archivo en algo que solo puede abrir el destinatario previsto — aunque el correo se reenvíe, se intercepte o quede para siempre en un buzón corporativo.",
    "Esta guía recorre cómo añadir protección con contraseña a un PDF usando la app PDF Editor en iPhone o Android. También cubre qué evitar: contraseñas débiles, cifrados heredados y el error habitual de compartir la contraseña por el mismo canal que el documento.",
    "Al final tendrás un flujo de protección repetible que puedes aplicar a documentos sensibles en menos de un minuto, con un cifrado AES-256 fuerte que aceptan las políticas de seguridad de empresa.",
  ],
  steps: [
    {
      title: "Abre el PDF que quieres proteger",
      body: "Importa el documento a PDF Editor desde Archivos, iCloud Drive, Google Drive o cualquier app para compartir. Todo el flujo se ejecuta en local — tu archivo no sale nunca del dispositivo.",
    },
    {
      title: "Toca Proteger en el menú de herramientas",
      body: "Lo encontrarás entre las herramientas del documento. Elige «Proteger con contraseña» para exigir una contraseña al abrir el archivo, o «Restringir permisos» para un acceso de solo lectura.",
    },
    {
      title: "Elige una contraseña fuerte",
      body: "Al menos 12 caracteres, mezclando letras, números y símbolos. Evita palabras comunes y datos personales (cumpleaños, nombres). Genera una en tu gestor de contraseñas si tienes uno — es la decisión correcta.",
    },
    {
      title: "Confirma la contraseña",
      body: "Vuelve a introducirla para evitar errores. Una vez cifrado el archivo, no hay forma de recuperarlo si te has equivocado al escribirla.",
    },
    {
      title: "Elige restricciones (opcional)",
      body: "Permite la visualización pero bloquea la impresión, copiar texto o extraer páginas. Útil cuando el destinatario necesita leer el documento pero no quieres que redistribuya fragmentos de él.",
    },
    {
      title: "Guarda como archivo nuevo",
      body: "Conserva la versión original sin proteger en un lugar seguro — si alguna vez olvidas la contraseña, seguirás teniendo acceso. Guarda la copia protegida con un nombre claramente distinto.",
    },
    {
      title: "Comparte la contraseña por un canal distinto",
      body: "Envía el PDF cifrado por correo; envía o llama con la contraseña por otro medio. Nunca pongas ambos en el mismo correo — si la cuenta se ve comprometida, ambos quedan expuestos. Un pequeño hábito que evita la mayoría de incidentes reales.",
    },
  ],
  tips: [
    "AES-256 es el cifrado correcto — la app lo usa por defecto. Si una herramienta ofrece cifrado «compatible» o «heredado», suele estar roto; evítalos.",
    "No reutilices la contraseña en varios documentos. Si una se filtra, no quieres un efecto dominó.",
    "Si el destinatario no es técnico, dale instrucciones sencillas: «Necesitarás esta contraseña para abrir el archivo: XYZ» es suficiente.",
    "Usa un gestor de contraseñas para compartirlas de forma segura cuando puedas — la mayoría tienen una función de «compartir» que no exige que ambas partes tengan cuenta.",
    "Para archivos muy sensibles (legales, médicos, financieros), considera los enlaces de uso compartido seguro de 1Password o Bitwarden en lugar de enviar la contraseña por mensaje.",
  ],
  mobileNote:
    "Proteger un PDF se ejecuta por completo en el dispositivo. Incluso en modo avión, puedes bloquear un contrato antes de enviarlo en cuanto vuelvas a tener conexión. Esto importa para quien viaja gestionando documentos sensibles desde el vestíbulo de un hotel o un aeropuerto — la protección ocurre en local, y luego solo hace falta conexión para el envío en sí.",
  faq: [
    {
      q: "¿Qué pasa si olvido la contraseña?",
      a: "No hay puerta trasera. Un cifrado fuerte significa que no es posible recuperarlo sin la contraseña. Guarda siempre las contraseñas en un gestor de contraseñas en lugar de confiar en la memoria.",
    },
    {
      q: "¿La contraseña ralentizará la apertura del archivo?",
      a: "Ningún retraso apreciable. El descifrado ocurre una vez al abrir y tarda milisegundos incluso en dispositivos antiguos.",
    },
    {
      q: "¿Puedo quitar la contraseña más adelante?",
      a: "Sí, si tienes la contraseña. Abre el PDF protegido, introduce la contraseña y usa «Quitar protección» en el menú Proteger.",
    },
    {
      q: "¿Es realmente segura la contraseña, o es solo teatro de seguridad?",
      a: "Seguridad real. AES-256 con una contraseña fuerte es el mismo cifrado que usan los sistemas de empresa, los gestores de contraseñas y muchas apps bancarias. El eslabón débil siempre es la propia contraseña — elige una fuerte.",
    },
    {
      q: "¿Y el tachado de datos (redacción)?",
      a: "El tachado de datos es distinto de la protección con contraseña. El tachado elimina contenido de forma permanente (como tapar un nombre); la protección con contraseña conserva el contenido pero exige autenticación para verlo. Para documentos sensibles, puede que quieras ambas cosas — tacha lo que no debería estar en el archivo, protege con contraseña lo que quede.",
    },
  ],
  related: [
    { label: "Seguridad de PDF — resumen completo", path: "/pdf-security" },
    { label: "Firma los PDF antes de bloquearlos", path: "/sign-pdf" },
    { label: "Flujos de trabajo de PDF para empresas", path: "/pdf-for-business" },
  ],
  parentHub: { label: "Seguridad de PDF", path: "/pdf-security" },
};

export default content;
