import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-students",
  hero: {
    eyebrow: "PDF para estudiantes",
    h1: "PDF para estudiantes — apuntes, subrayados y resúmenes",
    highlight: "resúmenes",
    lead: "Anota diapositivas de clase, subraya tus lecturas, une trabajos de investigación, escanea páginas de libros de texto y firma formularios, desde el móvil o la tablet que ya tienes.",
    primaryCta: { label: "Abrir la app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Por qué el PDF sigue siendo el centro del trabajo de los estudiantes",
    paragraphs: [
      "Los profesores cuelgan las diapositivas de clase en PDF. Los dosieres de la asignatura llegan en PDF. Los enunciados de los trabajos son PDF. Los programas de la asignatura son PDF. Pero el visor por defecto del móvil no permite subrayar, anotar ni organizar bien esos documentos, y la alternativa a la que recurre la mayoría de estudiantes es hacer capturas de pantalla en una app de notas, lo que hace perder el texto buscable, la estructura y la posibilidad de volver a la fuente.",
      "Un editor de PDF para móvil de verdad permite tratar las lecturas como se trataría un libro de texto (subrayados, notas al margen, marcadores), pero con texto buscable y la posibilidad de compartir. Las mismas lecturas anotadas se abren en todos los dispositivos, así que el trabajo que hiciste en el autobús sigue ahí cuando te sientas en la biblioteca.",
      "Combinado con un lápiz óptico en una tablet, este método puede sustituir la mayor parte de los apuntes en papel para el material de clase. El coste es el precio de la app (gratis para lo básico) y el tiempo de configurarla una vez.",
    ],
  },
  features: {
    heading: "Pensado para las sesiones de estudio",
    items: [
      {
        icon: "Highlighter",
        title: "Subraya y anota",
        body: "Subrayado en amarillo, notas a mano alzada, comentarios, líneas de subrayado: justo lo que harías en papel, pero con texto buscable.",
      },
      {
        icon: "Bookmark",
        title: "Marcadores y esquema",
        body: "Marca los capítulos o las secciones a los que vas a volver. Salta de uno a otro con un solo toque mientras redactas un trabajo.",
      },
      {
        icon: "Combine",
        title: "Une tus lecturas",
        body: "Combina los artículos de la semana en un solo documento para leerlos sin conexión en el tren, el avión o el transporte.",
      },
      {
        icon: "ScanLine",
        title: "Escanea páginas de libros de texto",
        body: "Captura páginas de libros físicos como PDF con texto buscable. Útil para citar un pasaje en un trabajo cuando solo tienes el ejemplar en papel.",
      },
      {
        icon: "FileSignature",
        title: "Firma formularios al instante",
        body: "Solicitudes de beca, hojas de asistencia, confirmaciones de matrícula: fírmalos y devuélvelos sin imprimir.",
      },
      {
        icon: "Layers",
        title: "Organiza por asignatura",
        body: "Agrupa los documentos por asignatura. Consérvalos a lo largo del cuatrimestre sin perder tus anotaciones.",
      },
    ],
  },
  steps: {
    heading: "Un método de estudio sencillo",
    items: [
      {
        title: "Reúne las lecturas de la semana",
        body: "Descarga o comparte cada PDF a PDF Editor desde el portal de tu universidad, el campus virtual o el correo.",
      },
      {
        title: "Únelas en un solo archivo por semana y asignatura",
        body: "Usa la herramienta Unir para crear «Semana 3 - lecturas de microeconomía.pdf» y leerlo sin conexión.",
      },
      {
        title: "Anota mientras lees",
        body: "Subraya los pasajes importantes, añade notas al margen, deja comentarios donde tengas dudas. Las anotaciones se guardan en el propio documento.",
      },
      {
        title: "Aprovecha los subrayados al redactar",
        body: "Vuelve a los pasajes subrayados desde el panel de marcadores cuando cites tus fuentes. El texto bajo el subrayado sigue siendo seleccionable y se puede copiar.",
      },
      {
        title: "Escanea y une tus apuntes a mano",
        body: "Cuando hayas tomado notas en papel, escanéalas en la misma biblioteca de PDF Editor para tenerlo todo en un solo sitio, con texto buscable.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Estudiar en cualquier sitio",
    body: "Clase, biblioteca, tren, cafetería: rara vez un estudiante lee sentado en un escritorio. Un editor de PDF pensado para el móvil significa que la misma copia anotada está en tu mano estés donde estés. La hora que antes perdías esperando el autobús se convierte en tiempo de lectura productivo.",
  },
  faq: [
    {
      q: "¿Es gratis la app para estudiantes?",
      a: "Sí. Anotar, unir, escanear y firmar son gratis, sin límite diario. Algunas funciones Pro (OCR por lotes, cifrado avanzado) son de pago, pero la versión gratuita cubre todo lo que suele necesitar un estudiante.",
    },
    {
      q: "¿Se sincronizan mis subrayados entre dispositivos?",
      a: "Si guardas el archivo en iCloud Drive, Google Drive o cualquier proveedor en la nube, los cambios aparecen allí donde se abra el mismo archivo. Los archivos guardados solo en local se quedan en el dispositivo donde se editaron.",
    },
    {
      q: "¿Puedo escanear una página de un libro de texto de forma legal?",
      a: "Para uso de estudio personal, en la mayoría de los casos sí, según la normativa aplicable, que suele permitir extractos breves con fines de estudio. Ten cuidado con distribuir las copias escaneadas: es una cuestión distinta y a menudo no está permitida.",
    },
    {
      q: "¿Funciona bien la app en iPad y en tablets Android?",
      a: "Sí. Las tablets con lápiz óptico (Apple Pencil, S Pen) hacen que anotar se parezca mucho más al papel que un móvil que solo se usa con el dedo. Si tienes una tablet, resérvala para las sesiones de lectura.",
    },
    {
      q: "¿Puedo exportar mis notas anotadas?",
      a: "Sí. El PDF anotado se puede compartir tal cual (con las anotaciones integradas) o aplanarlo en un PDF final. También puedes extraer solo el texto subrayado para tus citas.",
    },
  ],
  related: [
    {
      label: "Cómo compartir apuntes de clase en PDF",
      path: "/guides/how-to-share-study-notes-as-pdf",
    },
    {
      label: "La mejor app de PDF para estudiantes",
      path: "/guides/best-pdf-app-for-students",
    },
    { label: "Escanear a PDF", path: "/scan-to-pdf" },
  ],
  appCta: {
    heading: "Estudia con una auténtica caja de herramientas PDF.",
    sub: "Gratis en iOS y Android. Las anotaciones se sincronizan por iCloud o Drive.",
  },
};

export default content;
