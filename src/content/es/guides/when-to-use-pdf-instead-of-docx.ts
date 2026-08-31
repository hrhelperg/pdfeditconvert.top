import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "when-to-use-pdf-instead-of-docx",
  h1: "Cuándo enviar un PDF en vez de un DOCX (checklist)",
  description:
    "Tienes un documento de Word: ¿deberías enviarlo en PDF? Una checklist rápida de los momentos en que el PDF es la opción correcta, y cómo convertir.",
  updated: "2026-05-23",
  intro: [
    "Has terminado un documento en Word, y ahora hay una pequeña decisión: enviar el .docx tal cual, o convertirlo antes a PDF. Es fácil quedarse por defecto con lo que tienes delante, pero la elección equivocada tiene consecuencias — una maquetación que se rompe en la pantalla de otra persona, un precio que un cliente edita en silencio, un borrador confundido con la versión final. Esta guía trata de reconocer los momentos en que el PDF es claramente el mejor envío.",
    "En vez de una comparación general de formatos, esto es una checklist de decisión centrada: un conjunto de señales que significan «conviértelo a PDF antes de enviarlo». Cuando ninguna se aplica, tu DOCX está bien tal cual. Cuando alguna sí, la herramienta gratuita Word a PDF lo convierte en tu dispositivo en segundos.",
    "Repasa la checklist unas cuantas veces y se vuelve instinto — sabrás de un vistazo si un documento debe salir como Word o como PDF.",
  ],
  steps: [
    {
      title: "¿Es el documento definitivo?",
      body: "Si ya está terminado y no está pensado para editarse — una carta firmada, un informe acabado, una solicitud — envía PDF. El DOCX invita a cambios que no quieres una vez que un documento está terminado.",
    },
    {
      title: "¿Tiene que mantenerse la maquetación exactamente como se diseñó?",
      body: "Los folletos, los currículums, cualquier cosa donde importen el espaciado y las fuentes deberían ir como PDF. El DOCX puede recolocarse en otra versión de Word o en Google Docs, rompiendo tu maquetación cuidada.",
    },
    {
      title: "¿Podría el destinatario editarlo en tu contra?",
      body: "Los presupuestos, las facturas, los contratos — cualquier sitio donde una cifra o una condición se pueda alterar — pertenecen al PDF. Impide ediciones casuales y mantiene un registro fijo de lo que enviaste.",
    },
    {
      title: "¿Puede que no tenga Word?",
      body: "El PDF se abre de forma nativa en cualquier móvil, tablet u ordenador. Si no estás seguro de que el destinatario tenga un programa de ofimática, el PDF garantiza que pueda leerlo sin instalar nada.",
    },
    {
      title: "¿Va a un archivo histórico?",
      body: "Para el almacenamiento a largo plazo, el PDF se renderiza igual dentro de diez años; el DOCX puede desviarse entre versiones de Word. Archiva en PDF, conserva el DOCX como tu original editable.",
    },
    {
      title: "Si alguna respuesta es sí, conviértelo",
      body: "Abre la herramienta Word a PDF, añade tu .docx y descarga el PDF — en tu dispositivo, sin enviar nada a ningún servidor. Conserva el archivo Word original para futuras ediciones.",
    },
  ],
  tips: [
    "Conserva el DOCX cuando el documento todavía se esté trabajando, necesite comentarios o control de cambios, o el destinatario deba editarlo. El PDF es para documentos terminados y fijos.",
    "Conserva siempre el .docx editable. El PDF es la copia de envío; el archivo Word es tu original para la próxima revisión.",
    "Acepta o elimina los cambios controlados antes de convertir, o pueden aparecer en el PDF a la vista de todos.",
    "Convertir a PDF bloquea la maquetación pero no cifra el archivo. Si necesita protección de verdad, añade una contraseña como paso aparte.",
    "Si un destinatario pide un «PDF editable», normalmente se refiere a un DOCX — comprúebalo antes de dar nada por hecho, y envía el que corresponda.",
  ],
  mobileNote:
    "Decidir enviar PDF a menudo ocurre fuera de tu mesa, cuando un documento terminado tiene que salir ya. La app PDF Editor convierte y envía desde tu móvil, para que puedas bloquear un documento y enviarlo por correo sin esperar a volver a un ordenador.",
  faq: [
    {
      q: "¿Cuándo debería enviar un PDF en vez de un archivo de Word?",
      a: "Cuando el documento es definitivo, la maquetación debe mantenerse fija, el destinatario podría editarlo en tu contra, puede que no tenga Word, o va a un archivo histórico. Cualquiera de esas señales significa convertir a PDF.",
    },
    {
      q: "¿Cuándo es mejor conservar el DOCX?",
      a: "Cuando el documento todavía se está escribiendo, necesita comentarios o control de cambios, o el destinatario debe editarlo. El DOCX es el formato de trabajo; el PDF es el terminado.",
    },
    {
      q: "¿Convertir de Word a PDF cambiará mi maquetación?",
      a: "Para documentos con fuentes habituales, no — ese es precisamente el sentido del PDF. Vigila solo las fuentes poco comunes, que se pueden sustituir. Abre el PDF y compruébalo antes de enviarlo.",
    },
    {
      q: "¿Enviar un PDF protege el documento?",
      a: "Evita la edición casual y fija la maquetación, pero no es cifrado. Para una protección real frente a la apertura o la copia, añade una contraseña por separado.",
    },
    {
      q: "¿Dónde puedo ver una comparativa más completa entre PDF y DOCX?",
      a: "Consulta la guía y la comparativa PDF o DOCX para una mirada más amplia sobre cómo difieren los dos formatos en edición, fidelidad y firma.",
    },
  ],
  related: [
    { label: "Word a PDF — convierte en tu navegador", path: "/word-to-pdf" },
    { label: "PDF o DOCX — qué formato usar", path: "/guides/pdf-vs-docx" },
    { label: "Cómo convertir un Word a PDF", path: "/guides/how-to-convert-word-to-pdf" },
    { label: "PDF o DOCX — comparativa de funciones", path: "/compare/pdf-vs-docx" },
  ],
  parentHub: { label: "Convertidor de PDF", path: "/pdf-converter" },
};

export default content;
