import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-format-for-sharing-documents",
  h1: "Qué formato elegir para compartir un documento (PDF, DOCX, imágenes comparados)",
  description:
    "Cuándo el PDF es el formato correcto para compartir, cuándo no lo es, y qué valen de verdad las alternativas (DOCX, imágenes, HTML, Markdown) en las situaciones del día a día.",
  updated: "2026-05-29",
  intro: [
    "No existe un único mejor formato para compartir documentos — existe el mejor formato para cada tipo de situación al compartir. El PDF acierta la mayoría de las veces, pero no siempre. El DOCX acierta para documentos que se van a editar. Las imágenes aciertan para contenido visual único. El HTML acierta para la web. El Markdown acierta para texto plano con una estructura ligera. Cada uno destaca en una cosa y resulta incómodo en las demás.",
    "La forma correcta de decidir es pensar en qué va a hacer el destinatario con el archivo. ¿Leer y archivar? PDF. ¿Editar? DOCX. ¿Ver en la web? HTML. ¿Citar en un chat? Markdown. ¿Mirar una sola imagen? PNG o JPG. Forzar cada envío a pasar por PDF es cómodo, pero genera fricción cuando el destinatario en realidad quería editar.",
    "Esta guía recorre la elección escenario por escenario. El objetivo es enviar el formato que el destinatario va a usar de verdad, no el que a ti te resulta más fácil producir.",
  ],
  steps: [
    {
      title: "Si van a leerlo y archivarlo, envía PDF",
      body: "Maquetación fijada, idéntica en cualquier dispositivo, se puede firmar, se puede archivar. El PDF es la opción por defecto para documentos compartidos y la elección correcta la mayoría de las veces.",
    },
    {
      title: "Si van a editarlo, envía DOCX o Google Docs",
      body: "La edición real ocurre en DOCX o en Docs. Enviar PDF cuando el destinatario va a editar le obliga a convertirlo de vuelta — obtendrá algo aproximado a lo que le enviaste.",
    },
    {
      title: "Si van a verlo en la web, envía un enlace o HTML",
      body: "Las páginas web se muestran en el navegador sin necesidad de descargar nada. Para contenido pensado para ser nativo de la web, el HTML gana al PDF.",
    },
    {
      title: "Si es texto plano con una estructura ligera, envía Markdown",
      body: "Notas, contenido técnico, documentación ligera. El Markdown se lee como texto en cualquier contexto y se renderiza bien donde hay soporte.",
    },
    {
      title: "Si es una sola imagen, envía PNG o JPG",
      body: "Imagen única, sin texto debajo, sin páginas que gestionar. PNG para nitidez o transparencia, JPG para fotos. Envolverla en un PDF es innecesario.",
    },
    {
      title: "Por defecto, usa PDF cuando no tengas claro qué hacer",
      body: "Cuando no puedes predecir qué va a hacer el destinatario con el archivo, el PDF es el recurso más seguro. Cualquiera puede leerlo, no cambia después de enviarlo, y se puede convertir a otros formatos si hace falta.",
    },
  ],
  tips: [
    "Pregunta al destinatario si va a necesitar editarlo. La respuesta cambia cuál es el formato correcto.",
    "No envíes PDF y DOCX a la vez salvo que te lo pidan. Transmite indecisión.",
    "El contenido de varias páginas en cualquier formato que no sea PDF suele ser un error.",
    "Las herramientas internas (chat, wiki, plataformas de documentos) suelen tener formatos nativos que superan al PDF en ese contexto. No exportes a PDF por reflejo para un envío interno.",
    "Ante la duda sobre el formato, envía PDF — los destinatarios pueden convertirlo si lo necesitan.",
  ],
  mobileNote:
    "Hoy la mayoría de los documentos compartidos se reciben en el móvil, y el PDF funciona mejor en pantallas pequeñas porque la maquetación está fijada. La app PDF Editor lee, firma y comparte PDF en iOS y Android sin sorpresas sobre cómo se va a ver el archivo en cada dispositivo.",
  faq: [
    {
      q: "¿Es el PDF de verdad la mejor opción por defecto?",
      a: "Para compartir documentos terminados, sí. Para borradores de trabajo, el DOCX es mejor. Para una sola imagen, PNG o JPG. Elige según lo que vaya a hacer el destinatario.",
    },
    {
      q: "¿Cuándo es mejor el DOCX que el PDF?",
      a: "Cuando el destinatario va a editar el documento. El PDF es difícil de editar; el DOCX es fácil. No le obligues a convertirlo.",
    },
    {
      q: "¿Debería enviar los dos formatos?",
      a: "Solo cuando te lo pidan expresamente. Enviar dos formatos transmite que no tienes claro cuál quiere el destinatario, y tendrá que elegir.",
    },
    {
      q: "¿Y los enlaces a documentos en la nube?",
      a: "Útiles para documentos colaborativos (Docs, Sheets). Para envíos en un solo sentido de documentos terminados, una descarga es más sencilla que gestionar permisos de un enlace.",
    },
    {
      q: "¿Importa el dispositivo del destinatario?",
      a: "Algo — los dispositivos más antiguos pueden no abrir las funciones más nuevas del DOCX. El PDF es el formato más compatible de forma universal.",
    },
  ],
  related: [
    { label: "Herramientas PDF — lista completa de herramientas en el navegador", path: "/pdf-tools" },
    { label: "PDF o DOCX — comparativa de funciones", path: "/guides/pdf-vs-docx" },
    { label: "PDF o Google Docs", path: "/guides/pdf-vs-google-docs" },
    { label: "PDF o imagen para compartir un documento", path: "/guides/pdf-vs-images-for-sharing-documents" },
  ],
  parentHub: { label: "Herramientas PDF — gratis, en el navegador", path: "/pdf-tools" },
};

export default content;
