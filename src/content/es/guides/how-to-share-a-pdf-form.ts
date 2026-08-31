import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-a-pdf-form",
  h1: "Cómo compartir un formulario PDF para que lo rellenen",
  description:
    "Enviar un formulario en blanco para que lo completen no es lo mismo que enviar un documento terminado. Cómo compartirlo para que quien lo reciba pueda rellenarlo de verdad, y cómo recoger los resultados.",
  updated: "2026-06-01",
  intro: [
    "Compartir un formulario PDF suena trivial — lo adjuntas, le das a enviar — pero hay una diferencia entre distribuir un formulario en blanco para que la gente lo complete y enviar un documento para que lo lean. Cuando compartes un formulario, necesitas que los destinatarios puedan rellenarlo en cualquier dispositivo que tengan, y necesitas que sus copias completadas vuelvan en un estado que realmente puedas usar.",
    "Suelen fallar dos cosas. El formulario llega de una forma que elimina u oculta sus campos, así que los destinatarios no pueden escribir. O las respuestas vuelven de forma inconsistente: unas aplanadas, otras editables, otras como fotos de un impreso. Un poco de cuidado en el momento de enviar evita ambos problemas, y hace que recoger las respuestas sea mucho menos doloroso.",
    "Esta guía cubre cómo compartir un formulario en blanco para que siga siendo rellenable, cómo dar a los destinatarios instrucciones claras, y cómo gestionar las copias completadas a medida que vuelven — sin hacer pasar nada por un servicio de subida de terceros si el contenido es sensible.",
  ],
  steps: [
    {
      title: "Confirma que el formulario en blanco es rellenable antes de enviarlo",
      body: "Abre tu formulario y compruébalo tú mismo. Si es interactivo, asegúrate de que los campos están activos; si es no interactivo, asegúrate de que hay espacio claro para las respuestas. No aplanes un formulario en blanco — eso elimina los campos que necesitan los destinatarios.",
    },
    {
      title: "Envía el archivo, no un enlace a un conversor",
      body: "Adjunta el PDF directamente a un correo o mensaje, o compártelo a través de un disco que el destinatario ya use. Evita hacer pasar un formulario sensible por herramientas públicas de subida cuando un simple archivo adjunto ya cumple la función.",
    },
    {
      title: "Dile a los destinatarios cómo rellenarlo",
      body: "Una nota de una línea ayuda: «Toca los campos para escribir, o añade texto por encima si tu lector no muestra campos, y luego exporta una copia completada». Dirige a los usuarios de móvil hacia una app de PDF adecuada en lugar de una vista previa de correo.",
    },
    {
      title: "Pide copias completadas en un formato usable",
      body: "Solicita que la gente devuelva un PDF guardado o aplanado en lugar de una foto de un impreso. Las copias aplanadas se muestran de forma coherente y son más fáciles de archivar y leer.",
    },
    {
      title: "Recoge y organiza las respuestas",
      body: "A medida que vuelven las copias, renómbralas por persona y fecha para que no se confundan entre sí. Mantén el máster en blanco por separado para tener siempre una plantilla limpia que volver a enviar.",
    },
  ],
  tips: [
    "Nunca aplanes el formulario en blanco que distribuyes — aplanarlo elimina los campos y no deja nada que rellenar a los destinatarios.",
    "Si los destinatarios siguen enviando fotos de impresos, tus instrucciones necesitan ser más claras sobre rellenar en pantalla y exportar.",
    "Para formularios sensibles, prefiere los archivos adjuntos directos o un disco privado antes que webs públicas de «rellenar en línea».",
    "Dale al archivo un nombre claro como «ficha-inicial-en-blanco.pdf» para que los destinatarios distingan el máster de su copia completada.",
    "El comportamiento de un formulario puede variar entre lectores, así que sugerir una app concreta y fiable evita la mayoría de respuestas de «no puedo escribir».",
  ],
  mobileNote:
    "Los destinatarios en el móvil pueden rellenar tu formulario en la app PDF Editor — activa los campos interactivos y deja añadir texto a los formularios no interactivos — y luego exportar una copia completada para devolverla directamente. Sugerirla en tu mensaje evita a la gente que, si no, se quedaría atascada en una vista previa de correo que ignora los campos.",
  faq: [
    {
      q: "¿Cómo comparto un formulario PDF para que la gente lo rellene?",
      a: "Envía el PDF rellenable como archivo adjunto directo o mediante un disco compartido, y no lo aplanes antes. Dile a los destinatarios que lo abran en una app de PDF real, rellenen los campos o añadan texto, y luego exporten una copia completada.",
    },
    {
      q: "¿Por qué mis destinatarios no pueden escribir en el formulario que envié?",
      a: "A menudo lo están abriendo en una vista previa de correo o un lector que ignora los campos de formulario, o el formulario es no interactivo. Recomienda una app de PDF dedicada, y avisa de que pueden añadir texto por encima si no aparece ningún campo.",
    },
    {
      q: "¿Debería compartir un formulario a través de un servicio de relleno en línea?",
      a: "Para formularios corrientes puede ser cómodo, pero para cualquier cosa sensible, un archivo adjunto directo o un disco privado mantiene el contenido fuera de servidores de terceros. Ajusta el canal a la sensibilidad.",
    },
    {
      q: "¿Cómo deberían volver a mí los formularios completados?",
      a: "Pide un PDF guardado o aplanado en lugar de una foto de un impreso. Las copias aplanadas se ven igual en todas partes y son mucho más fáciles de archivar y procesar.",
    },
    {
      q: "¿Cómo mantengo las respuestas organizadas?",
      a: "Renombra cada archivo devuelto por persona y fecha, guárdalos en una sola carpeta, y mantén el máster en blanco por separado para poder volver a enviar siempre una plantilla limpia.",
    },
  ],
  related: [
    {
      label: "Cómo devolver un formulario PDF relleno",
      path: "/guides/how-to-send-a-completed-pdf-form",
    },
    {
      label: "Cómo enviar una ficha de cliente para rellenar",
      path: "/guides/how-to-send-client-intake-forms",
    },
    {
      label: "Cómo recopilar documentos en PDF",
      path: "/guides/document-collection-workflows-with-pdf",
    },
    {
      label: "Cómo compartir PDF con tus clientes",
      path: "/guides/how-to-share-pdfs-with-clients",
    },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
