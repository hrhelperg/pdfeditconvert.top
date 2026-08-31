import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdfs-with-clients",
  h1: "Cómo compartir PDF con tus clientes (con profesionalidad y privacidad)",
  description:
    "Una guía breve para enviar un PDF a un cliente — tamaño adecuado para el correo, elección de contraseña, identidad de marca, confirmación de recepción — sin subir nada a terceros.",
  updated: "2026-05-29",
  intro: [
    "Cómo le envías un PDF a un cliente dice sorprendentemente mucho sobre cómo trabajas. Un adjunto de 40 MB que rebota, un nombre de archivo genérico como «Documento (1).pdf», o un archivo que se abre con el nombre del cliente mal escrito en la barra de título — son detalles pequeños, y todos se quedan grabados.",
    "Un traspaso profesional a un cliente consiste sobre todo en un puñado de costumbres: dar al archivo el tamaño adecuado, nombrarlo como un entregable, mantener una identidad de marca coherente, proteger con contraseña cuando esté justificado, y confirmar la recepción. Ninguna de ellas lleva mucho tiempo en cuanto se vuelve rutina; juntas hacen que el archivo se sienta terminado.",
    "Esta guía es ese breve manual — qué hacer antes de pulsar enviar, y qué herramientas gratuitas gestionan cada paso sin subir nada sensible al servidor de un tercero.",
  ],
  steps: [
    {
      title: "Nombra el archivo pensando en el cliente, no en ti",
      body: "NombreCliente_NombreProyecto_Propuesta_2026-05-29.pdf es inconfundible. «final_v3_editado.pdf» es una confesión. El destinatario debería poder identificar el archivo en su carpeta de descargas un mes después.",
    },
    {
      title: "Ajusta el título del documento en los metadatos",
      body: "Las pestañas de PDF suelen mostrar el nombre de archivo original o un resto de Word. Vuelve a exportar desde la aplicación de origen con el título de metadatos fijado, o usa un editor de PDF para ponerlo. Un detalle pequeño, un acabado profesional.",
    },
    {
      title: "Comprime pensando en la bandeja del cliente",
      body: "Algunos portales de cliente limitan a 5 MB; la mayoría de los sistemas de correo, a 25. Comprimir PDF en tu navegador deja un entregable típico cómodamente por debajo de ambos. Que sea el último paso, no el primero.",
    },
    {
      title: "Protege con contraseña solo cuando de verdad importe",
      body: "Usa contraseñas para material genuinamente sensible — detalles financieros, datos personales identificables, borradores de contrato. No protejas con contraseña la propia propuesta; la fricción supera el beneficio de seguridad.",
    },
    {
      title: "Envía una nota de presentación que liste el contenido",
      body: "Una frase corta: «Adjunto: propuesta (12 páginas), condiciones (3 páginas), precios (1 página)». El cliente sabe qué está abriendo sin tener que ojear el archivo primero.",
    },
    {
      title: "Haz un seguimiento con confirmación de recepción",
      body: "O bien pregunta «avísame si llega bien» en la nota de presentación, o comprueba al día siguiente. Los archivos sí se van a la carpeta de spam, sobre todo los adjuntos con contraseña.",
    },
  ],
  tips: [
    "Marca con agua los borradores (BORRADOR, INTERNO) pero nunca la versión final. La final no debería necesitar etiqueta.",
    "Ajusta tu convención de nombres a la que use el cliente si puedes averiguarla — muchos clientes de empresa tienen un estándar de nomenclatura de documentos que puedes imitar.",
    "Evita enviar más de tres adjuntos. Une lo que pertenece junto; envía el resto como un seguimiento si hace falta.",
    "Si necesitas que te devuelvan una firma, firma tu parte primero y rellena de antemano el campo de firma para la suya. Es un pequeño detalle que hace que vuelva antes.",
    "Prueba tu archivo en un lector nuevo antes de enviarlo — tu propio lector puede mostrar maquetaciones que otros no muestran.",
  ],
  mobileNote:
    "Los clientes leen cada vez más los entregables primero en el móvil. La app PDF Editor te deja previsualizar, comprimir, firmar y volver a compartir PDF desde el móvil, así una revisión de última hora del cliente no espera a que vuelvas a la oficina.",
  faq: [
    {
      q: "¿Cuál es el error más habitual al enviar PDF a clientes?",
      a: "El nombre del archivo. «Documento (1).pdf» le dice al cliente que no te importa. Un nombre descriptivo con el proyecto y la fecha hace que el archivo se pueda encontrar después.",
    },
    {
      q: "¿Debería proteger con contraseña todo lo que envío?",
      a: "No. Reserva las contraseñas para contenido genuinamente sensible. Los entregables rutinarios no las necesitan, y abusar de las contraseñas enseña a los clientes a ignorarlas o a perderlas.",
    },
    {
      q: "¿Qué tamaño puede tener el archivo?",
      a: "El correo limita a 25 MB; muchos portales de cliente, a 5. Comprime todo lo que supere 5 MB salvo que sepas que el cliente acepta archivos mayores. Más pequeño siempre es más seguro.",
    },
    {
      q: "¿Debería enviar varios PDF o unirlos?",
      a: "Únelos cuando pertenezcan juntos (propuesta + condiciones + precios). Mantenlos separados cuando sean entregables genuinamente distintos. Tres adjuntos es el límite práctico antes de que las cosas se pierdan.",
    },
    {
      q: "¿Está bien usar herramientas PDF online para trabajo de cliente?",
      a: "Solo si funcionan en local, en tu navegador. Subir un documento sensible de un cliente al servidor de un tercero es un riesgo real. Las herramientas basadas en el navegador que procesan en tu dispositivo lo evitan por completo.",
    },
  ],
  related: [
    { label: "PDF para empresas — contratos y métodos de trabajo", path: "/pdf-for-business" },
    { label: "Comprimir PDF — reduce para los portales de cliente", path: "/compress-pdf" },
    { label: "Cómo preparar un PDF para uso profesional", path: "/guides/how-to-prepare-pdf-for-business-use" },
    { label: "Cómo crear un PDF listo para el cliente", path: "/guides/how-to-create-client-ready-pdf-files" },
  ],
  parentHub: { label: "PDF para empresas — contratos y métodos de trabajo", path: "/pdf-for-business" },
};

export default content;
