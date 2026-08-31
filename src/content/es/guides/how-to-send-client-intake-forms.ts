import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-client-intake-forms",
  h1: "Cómo enviar una ficha de cliente para rellenar (con limpieza y discreción)",
  description:
    "Consigue los datos de un cliente nuevo en una sola pasada. Cómo enviar una ficha en PDF fácil de rellenar, que vuelva completa y mantenga la información del cliente en privado.",
  updated: "2026-06-01",
  intro: [
    "Una ficha de cliente es la primera interacción real que muchos clientes tienen con tu forma de trabajar, así que merece la pena hacerlo bien. Bien hecha, una sola ficha de cliente en PDF recoge todo lo que necesitas para empezar — datos de contacto, detalles del proyecto, preferencias — en una sola pasada, sin un ida y vuelta de «¿me puedes enviar también...?». Mal hecha, rebota a medio rellenar y da una imagen descuidada.",
    "La mecánica es sencilla pero los detalles importan: la ficha tiene que ser fácil de rellenar en un móvil (donde la abrirán la mayoría de los clientes), tiene que volver completa y en un formato usable, y como lleva información personal, no debería pasar por una web pública cualquiera en el camino.",
    "Esta guía repasa cómo preparar la ficha de cliente, cómo enviarla para que los clientes puedan completarla de verdad, y cómo recoger las respuestas con limpieza — la versión práctica, no una teórica.",
  ],
  steps: [
    {
      title: "Construye una ficha que pida solo lo que necesitas",
      body: "Cada campo de más reduce la tasa de finalización. Pide lo que realmente necesitas para empezar, agrúpalo con lógica, y deja espacio real para las respuestas. Mantén un máster en blanco que reutilices con cada cliente nuevo.",
    },
    {
      title: "Envía la ficha en blanco, no una aplanada",
      body: "Adjunta el PDF rellenable directamente o compártelo por un disco que use el cliente. No aplanes el original en blanco — eso elimina los campos. Añade una nota de una línea sobre cómo rellenarla y devolverla.",
    },
    {
      title: "Haz que rellenarla sea sencillo desde el móvil",
      body: "Dile a los clientes que pueden completarla en una app de PDF — tocar campos o añadir texto a una ficha no interactiva — firmar si hace falta, y exportar. La mayoría lo hará desde el móvil, así que allana ese camino.",
    },
    {
      title: "Pide de vuelta una copia aplanada",
      body: "Solicita un PDF guardado o aplanado en lugar de una foto. Las fichas aplanadas se leen de forma coherente, no se pueden borrar, y encajan directamente en el expediente del cliente.",
    },
    {
      title: "Archívala y confirma la recepción",
      body: "Renombra la ficha devuelta por cliente y fecha, guárdala con los registros de ese cliente, y envía una confirmación breve. Haz un seguimiento si una ficha vuelve con campos obligatorios en blanco.",
    },
  ],
  tips: [
    "Las fichas de cliente más cortas se completan mejor; recorta cualquier campo que no sea genuinamente necesario al principio.",
    "Como las fichas de cliente llevan datos personales, prefiere los archivos adjuntos directos o un disco privado antes que servicios públicos de «rellenar en línea».",
    "Un máster en blanco reutilizable significa que cada cliente nuevo recibe una ficha limpia e idéntica, sin detalles sobrantes.",
    "Recomienda una app de PDF concreta en tu nota para que los clientes en el móvil no se queden atascados en una vista previa de correo que no deja escribir.",
    "Mantén un patrón de nombrado de archivos consistente para que la ficha de un cliente sea siempre fácil de localizar más tarde.",
  ],
  mobileNote:
    "Los clientes pueden completar tu ficha de cliente en el móvil con la app PDF Editor — rellenando campos o añadiendo texto a una ficha no interactiva, firmando, y exportando una copia aplanada para devolverla directamente. Funciona en el dispositivo, así que los datos personales que introducen no se suben a ningún sitio de camino hacia ti.",
  faq: [
    {
      q: "¿Cómo envío una ficha de cliente como PDF?",
      a: "Adjunta el PDF rellenable directamente al correo o compártelo por un disco que use el cliente, sin aplanar el original en blanco. Incluye una nota breve sobre cómo rellenarla en una app de PDF y devolver una copia completada.",
    },
    {
      q: "¿Por qué mi ficha de cliente vuelve en blanco o a medio rellenar?",
      a: "Los clientes suelen abrirla en una vista previa de correo que ignora los campos, o la ficha pide demasiado. Recomienda una app de PDF, recorta los campos innecesarios, y pide de vuelta una copia aplanada.",
    },
    {
      q: "¿Cómo mantengo privada la información del cliente al recoger fichas?",
      a: "Envía y recibe la ficha como archivo adjunto directo o por un disco privado en lugar de una web pública de relleno. La app PDF Editor rellena en el dispositivo, así que los datos del cliente no se suben.",
    },
    {
      q: "¿Las fichas de cliente deberían ser interactivas o no interactivas?",
      a: "La interactiva queda más cuidada si puedes construirla bien, pero una plantilla no interactiva limpia funciona en todas partes. Cualquiera de las dos está bien siempre que los campos estén claramente etiquetados y tengan espacio suficiente.",
    },
    {
      q: "¿Cómo mantengo organizadas las fichas de cliente devueltas?",
      a: "Renombra cada una por cliente y fecha, guárdala con los registros de ese cliente, y mantén el máster en blanco por separado para que cada cliente nuevo reciba una copia fresca.",
    },
  ],
  related: [
    {
      label: "Formularios PDF para pequeñas empresas",
      path: "/guides/pdf-forms-for-small-business",
    },
    {
      label: "Cómo recopilar documentos en PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
    {
      label: "Cómo compartir un formulario PDF",
      path: "/guides/how-to-share-a-pdf-form",
    },
    {
      label: "Cómo compartir PDF con tus clientes",
      path: "/guides/how-to-share-pdfs-with-clients",
    },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
