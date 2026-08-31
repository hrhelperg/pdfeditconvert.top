import type {
  ContactContent,
  GuidesIndexContent,
  LegalContent,
  ToolsIndexContent,
} from "@/types/content";
import { PRIVACY_UPDATED } from "@/content/legal/privacy";
import { TERMS_UPDATED } from "@/content/legal/terms";

export const TOOLS_INDEX_ES: ToolsIndexContent = {
  crumbLabel: "Herramientas PDF gratis",
  heroEyebrow: "Herramientas PDF gratis",
  heroH1: "Herramientas PDF en el navegador — tus archivos nunca salen de tu dispositivo.",
  heroHighlight: "nunca salen",
  heroLead:
    "Une, divide, gira, marca y convierte tus PDF sin subir nada. Todo el procesamiento ocurre en local, en tu navegador, gratis y sin registro.",
  privacyNote:
    "Todas las herramientas de esta página procesan tus archivos en local, en tu navegador. No se envía nada a nuestros servidores y no se guarda nada.",
  clusterHeading: "{count} guías sobre trabajar con PDF en el navegador",
  goingFurtherHeading: "Ir más allá con los PDF",
  goingFurtherBody:
    "Estas herramientas resuelven tareas puntuales en el navegador. Para los métodos de trabajo que hay detrás — editar, convertir, firmar, proteger y escanear — empieza por las secciones de abajo.",
  hubs: [
    { id: "pdf-editor", label: "Editor de PDF" },
    { id: "pdf-converter", label: "Convertidor de PDF" },
    { id: "pdf-forms", label: "Formularios PDF" },
    { id: "sign-pdf", label: "Firmar PDF" },
    { id: "pdf-security", label: "Seguridad de PDF" },
    { id: "scan-to-pdf", label: "Escanear a PDF" },
    {
      id: "compare/pdf-app-vs-online-pdf-tools",
      label: "App de PDF o herramientas online",
    },
  ],
  appCtaHeading: "¿Necesitas herramientas PDF en el móvil?",
  appCtaSub: "Descarga la app PDF Editor para iPhone y Android — gratis.",
};

export const GUIDES_INDEX_ES: GuidesIndexContent = {
  h1: "Guías de PDF",
  lead: "{count} tutoriales prácticos, pensados para el móvil, sobre edición, conversión, compresión, firma y protección de tus PDF — agrupados por herramienta o por tema.",
};

export const CONTACT_ES: ContactContent = {
  h1: "Contacto",
  lead: "Dudas, colaboraciones, prensa u opiniones sobre la app PDF Editor — leemos todos los correos.",
  emailLabel: "Correo",
  officeLabel: "Sede social",
  sections: [
    {
      heading: "Qué esperar",
      body: "El correo es nuestro único canal de contacto: no hay sistema de tickets ni chatbot por delante. Las respuestas llegan del mismo equipo pequeño que hace la app, normalmente en menos de dos días laborables. Para una duda sobre la app, indica el dispositivo y la versión del sistema; para un problema con un documento concreto, describe qué estabas haciendo en vez de adjuntar el archivo, porque no queremos ni necesitamos tus documentos.",
    },
    {
      heading: "Con qué no podemos ayudar",
      body: "Las herramientas de este sitio funcionan enteramente en tu dispositivo, así que nada de lo que procesas nos llega. Eso también significa que no podemos recuperar un archivo que hayas convertido, reenviarte una descarga ni consultar nada en tu nombre: no existe ninguna copia por nuestra parte. Si una herramienta falló con un PDF concreto, cuéntanos qué tipo de archivo era (escaneado, protegido con contraseña, un formulario relleno) y qué hizo la herramienta.",
    },
    {
      heading: "Privacidad y solicitudes legales",
      body: "Las preguntas sobre protección de datos, las solicitudes de eliminación y las notificaciones legales van a la misma dirección y llegan a hrhelperg s.r.o., en la sede social indicada arriba.",
    },
  ],
  legalSentence:
    "Nuestra {privacy} explica qué se recoge y qué no, y nuestros {terms} regulan el uso del sitio y de las herramientas.",
  privacyLinkLabel: "política de privacidad",
  termsLinkLabel: "términos de uso",
  tryAppHeading: "Descubre la app",
};

/**
 * Spanish privacy policy.
 *
 * A translation, not a separate policy: the operator, the registered
 * office, the contact address, the analytics vendor and the legal basis are
 * the same facts the English version states, because the same company
 * processes the same data under the same law.
 *
 * "RGPD" replaces "GDPR" deliberately, for the same reason it does in the
 * French version: the regulation applies because the controller is
 * established in the EU, and RGPD (Reglamento General de Protección de
 * Datos) is the term a Spanish reader — themselves inside the EU — already
 * uses for the same regulation.
 */
export const PRIVACY_ES: LegalContent = {
  h1: "Política de privacidad",
  updated: PRIVACY_UPDATED,
  sections: [
    {
      heading: "Quiénes somos",
      body: [
        "pdfeditconvert.top está operado por hrhelperg s.r.o., una sociedad de responsabilidad limitada checa con sede social registrada en Husitská 502/36, Žižkov, 130 00 Praga 3, República Checa. Puedes escribirnos a info@hrhelperg.com.",
      ],
    },
    {
      heading: "Qué recoge este sitio",
      body: [
        "Este sitio es informativo. No te pide crear una cuenta, enviar documentos ni compartir datos personales para leer ninguna página.",
        "Usamos una herramienta de análisis respetuosa con la privacidad (WebmasterID) para entender qué páginas se visitan y cómo nos encuentran los lectores. Registra la dirección de la página visitada, tu región aproximada, el tipo de dispositivo y el sitio de origen. No usa cookies publicitarias ni construye un perfil tuyo en otros sitios.",
      ],
    },
    {
      heading: "Qué recoge la app móvil",
      body: [
        "La app PDF Editor puede guardar datos en local en tu dispositivo (archivos abiertos, tus ajustes) y puede sincronizar archivos con el servicio en la nube que elijas (iCloud, Google Drive y otros) si activas esa opción. Consulta la información de privacidad de la app en la App Store y en Google Play para la lista oficial.",
      ],
    },
    {
      heading: "Cookies",
      body: [
        "Usamos un número reducido de cookies y tecnologías de almacenamiento similares para el funcionamiento básico del sitio y para las mediciones de audiencia. No usamos cookies publicitarias.",
      ],
    },
    {
      heading: "Tus derechos",
      body: [
        "Si resides en la Unión Europea o en el Espacio Económico Europeo, tienes derechos reconocidos por el RGPD, entre ellos acceso, rectificación, supresión, limitación y portabilidad. Escribe a info@hrhelperg.com para ejercerlos.",
      ],
    },
    {
      heading: "Contacto",
      body: [
        "Las preguntas sobre esta política pueden enviarse a info@hrhelperg.com.",
      ],
    },
    {
      heading: "Cambios",
      body: [
        "Podemos actualizar esta política. Los cambios importantes se señalarán en esta página, junto con una nueva fecha de actualización.",
      ],
    },
  ],
};

/** Spanish terms of service — a translation of the same terms. */
export const TERMS_ES: LegalContent = {
  h1: "Términos de uso",
  updated: TERMS_UPDATED,
  sections: [
    {
      heading: "Sobre estos términos",
      body: [
        "Estos términos regulan el uso de pdfeditconvert.top, operado por hrhelperg s.r.o. (Husitská 502/36, Žižkov, 130 00 Praga 3, República Checa).",
      ],
    },
    {
      heading: "Uso del sitio",
      body: [
        "Puedes leer, enlazar y compartir las páginas de este sitio. No puedes extraer grandes fragmentos del contenido para republicarlos, ni usar el sitio de una forma que moleste a otras personas.",
      ],
    },
    {
      heading: "Sobre la app PDF Editor",
      body: [
        "PDF Editor es una app móvil distribuida por la App Store de Apple y por Google Play. Su uso se rige por los términos propios de la app, que se muestran durante la instalación.",
      ],
    },
    {
      heading: "Sin garantías",
      body: [
        "El contenido de pdfeditconvert.top se ofrece con fines informativos generales y no constituye asesoramiento legal, fiscal ni financiero. Hacemos un esfuerzo razonable por mantenerlo correcto, pero no garantizamos que sea completo ni adecuado para un fin concreto.",
      ],
    },
    {
      heading: "Responsabilidad",
      body: [
        "En la medida permitida por la legislación checa y de la Unión Europea, hrhelperg s.r.o. no se responsabiliza de daños indirectos o consecuentes derivados del uso de este sitio.",
      ],
    },
    {
      heading: "Legislación aplicable",
      body: [
        "Estos términos se rigen por las leyes de la República Checa. Cualquier disputa se resolverá ante los tribunales checos competentes.",
      ],
    },
    {
      heading: "Contacto",
      body: [
        "Las preguntas sobre estos términos pueden enviarse a info@hrhelperg.com.",
      ],
    },
  ],
};
