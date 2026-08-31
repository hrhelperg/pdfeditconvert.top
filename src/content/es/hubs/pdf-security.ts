import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-security",
  hero: {
    eyebrow: "Seguridad de PDF",
    h1: "Seguridad de PDF — protege y cifra un documento con contraseña",
    highlight: "protege y cifra",
    lead: "Contraseñas, cifrado AES-256, tachado de datos sensibles y restricciones de uso, para contratos, nóminas y escaneos de documentos de identidad. El nivel de protección que de verdad merecen los documentos sensibles.",
    primaryCta: { label: "Abrir la app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Por qué la mayoría de PDF «protegidos» no lo están de verdad",
    paragraphs: [
      "Es sorprendentemente habitual compartir escaneos del DNI, contratos firmados y nóminas como PDF sin más, por correo, por apps de mensajería o como adjuntos en formularios. Si se compromete la cuenta de correo o el historial de la app de mensajería, cada uno de esos documentos queda expuesto.",
      "Algunas personas añaden una «protección» que no es más que una contraseña de apertura puesta con una herramienta gratuita online. Es mejor que nada, pero la contraseña suele ser débil, el cifrado a veces es el antiguo de 40 bits, y la herramienta guarda tu archivo el tiempo suficiente como para convertirse en un riesgo por sí misma.",
      "La seguridad de verdad en un PDF pasa por un cifrado fuerte (AES-256), contraseñas robustas y, cuando hace falta, separar el permiso para abrir el documento de los permisos para editarlo o imprimirlo. Y debe hacerse en el propio dispositivo, porque en el momento en que subes un documento sensible a una herramienta web ya has perdido la batalla de la privacidad.",
    ],
  },
  features: {
    heading: "Herramientas de seguridad a la altura de la amenaza",
    items: [
      {
        icon: "Lock",
        title: "Protección con contraseña",
        body: "Pon una contraseña para abrir el documento. El PDF no se puede ver sin ella.",
      },
      {
        icon: "ShieldCheck",
        title: "Cifrado AES-256",
        body: "Cifrado moderno y robusto, el estándar que usan los sistemas empresariales.",
      },
      {
        icon: "Printer",
        title: "Restringe copiar e imprimir",
        body: "Permite ver el documento pero bloquea copiar texto, imprimir o extraer páginas.",
      },
      {
        icon: "EyeOff",
        title: "Tachado de información",
        body: "Oculta de forma permanente nombres, números de cuenta o firmas antes de compartir el documento.",
      },
      {
        icon: "Stamp",
        title: "Marcas de agua",
        body: "Añade una marca de agua de «confidencial» o específica para cada destinatario para desanimar el reenvío.",
      },
      {
        icon: "Link",
        title: "Consejos para compartir la contraseña",
        body: "Recomendaciones integradas para enviar la contraseña por un canal distinto al del propio documento.",
      },
    ],
  },
  steps: {
    heading: "Cómo proteger un PDF",
    items: [
      {
        title: "Abre el PDF",
        body: "Importa el documento en PDF Editor desde Archivos o cualquier almacenamiento en la nube.",
      },
      {
        title: "Toca Proteger",
        body: "Está en el menú de herramientas del documento. Elige el nivel de protección que necesitas.",
      },
      {
        title: "Pon la contraseña",
        body: "Usa una contraseña robusta: al menos 12 caracteres, combinando letras, números y símbolos.",
      },
      {
        title: "(Opcional) Elige las restricciones",
        body: "Permite o bloquea imprimir, copiar y editar. Útil para documentos compartidos de solo lectura.",
      },
      {
        title: "Guarda la copia protegida",
        body: "Guárdala como un archivo nuevo para que el original siga accesible si olvidas la contraseña.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Proteger documentos sensibles sobre la marcha",
    body: "La mayoría de los fallos de seguridad ocurren cuando vas con prisa. Proteger desde el móvil te permite blindar un contrato antes de enviarlo desde el aeropuerto, o proteger una nómina en PDF antes de compartirla con un autónomo, sin tener que buscar un ordenador.",
  },
  faq: [
    {
      q: "¿Qué cifrado usa la app?",
      a: "AES-256, el estándar moderno. Evita el antiguo cifrado de 40 bits y el RC4 de 128 bits: se rompen con facilidad.",
    },
    {
      q: "¿Qué pasa si olvido la contraseña?",
      a: "No hay puerta trasera. Un cifrado fuerte significa que el documento es irrecuperable sin la contraseña. Guárdala en un gestor de contraseñas.",
    },
    {
      q: "¿Cómo comparto la contraseña de forma segura?",
      a: "Usa un canal distinto al del propio documento: envía la contraseña por SMS si mandaste el PDF por correo, o usa la función de compartir de forma segura de un gestor de contraseñas.",
    },
    {
      q: "¿El tachado es permanente?",
      a: "Sí. Un tachado bien hecho elimina el texto subyacente, no se limita a taparlo visualmente. Ni copiando y pegando desde el PDF tachado se puede recuperar el contenido original.",
    },
    {
      q: "¿Puedo añadir una marca de agua y una contraseña a la vez?",
      a: "Sí. Son funciones independientes y se pueden aplicar juntas.",
    },
  ],
  related: [
    {
      label: "Paso a paso: cómo proteger un PDF con contraseña",
      path: "/guides/how-to-protect-pdf-file",
    },
    { label: "Firma tus PDF antes de bloquearlos", path: "/sign-pdf" },
    {
      label: "Flujos de PDF para equipos",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Blinda tus PDF sensibles en segundos.",
    sub: "Gratis en iOS y Android. La protección se hace en el dispositivo.",
  },
};

export default content;
