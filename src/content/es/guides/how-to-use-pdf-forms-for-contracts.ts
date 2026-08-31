import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-use-pdf-forms-for-contracts",
  h1: "Cómo usar un formulario PDF para un contrato (campos y firma)",
  description:
    "Convierte un contrato en un PDF rellenable: campos para nombres, fechas y rúbricas, zona de firma, y una pasada de aplanado para que la versión firmada no se pueda tocar. Con sus límites explicados con honestidad.",
  updated: "2026-06-01",
  intro: [
    "Muchos contratos repiten el mismo esqueleto y solo cambian unos pocos detalles — nombres de las partes, fechas, importes, una firma. Convertir esas partes variables en campos de formulario transforma un contrato estático en un PDF rellenable que la otra parte puede completar y firmar sin volver a escribir nada, lo cual es más rápido y limpio que ir y venir con un archivo de Word por correo.",
    "Esto trata específicamente de la mecánica de formulario de los contratos: dónde ayudan los campos, cómo gestionar rúbricas y zonas de firma, y el paso crucial de aplanado que bloquea un acuerdo firmado para que no se pueda editar en silencio después. Es el ángulo de los campos de formulario, distinto del trabajo más amplio de enviar y entregar contratos.",
    "Una nota honesta recorre toda la guía: esto cubre la mecánica del documento, no la validez legal. Que un contrato o un método de firma concreto sea legalmente suficiente depende de tu jurisdicción y del acuerdo — eso es una cuestión para las partes o sus asesores, no para una herramienta de PDF.",
  ],
  steps: [
    {
      title: "Identifica las partes variables",
      body: "Marca los detalles que cambian cada vez — nombres, direcciones, fechas, importes, duraciones. Esos se convierten en tus campos de formulario; las cláusulas fijas quedan como texto del documento bloqueado.",
    },
    {
      title: "Añade campos para los datos que se rellenan",
      body: "Coloca campos claramente etiquetados (o, en una plantilla no interactiva, líneas claras) para cada variable. Da suficiente espacio a fechas e importes, y mantén la maquetación evidente para que no se pase nada por alto.",
    },
    {
      title: "Gestiona las rúbricas y las zonas de firma",
      body: "Añade un campo de firma o una línea de firma clara, además de casillas para las iniciales donde las páginas las necesiten. La otra parte firma con una firma escrita o manuscrita en esas zonas.",
    },
    {
      title: "Aplana el acuerdo firmado",
      body: "Una vez que ambas partes han completado y firmado, aplana el PDF. Esto fusiona los datos rellenados y la firma con la página para que el contrato final no se pueda editar ni sus campos borrar.",
    },
    {
      title: "Entrega y guarda la versión final",
      body: "Envía el contrato aplanado y firmado a todas las partes y guarda tu propia copia. Un nombre de archivo consistente y una sola carpeta de contratos hacen que la versión ejecutada sea fácil de recuperar.",
    },
  ],
  tips: [
    "Bloquea las cláusulas y deja rellenables solo los campos variables, para que los términos del acuerdo no se puedan cambiar mientras se completa.",
    "Aplanar después de firmar es el paso clave — congela la versión ejecutada para que nada se desplace más tarde.",
    "Mantén una plantilla en blanco sin rellenar separada de las copias ejecutadas para poder reutilizar el esqueleto con limpieza.",
    "Para cualquier cosa con relevancia legal, trata el PDF solo como la mecánica y confirma los requisitos con las partes o un asesor.",
    "Los requisitos para contratos y firmas varían según el lugar y la situación, así que no des por hecho que un solo enfoque encaja en todos los acuerdos.",
  ],
  mobileNote:
    "La otra parte puede rellenar y firmar tu formulario de contrato en el móvil con la app PDF Editor — completando los campos variables, añadiendo una firma, y devolviendo una copia. Después puedes aplanar el acuerdo ejecutado para que quede bloqueado, todo en el dispositivo sin subir el contrato a terceros.",
  faq: [
    {
      q: "¿Puedo convertir un contrato en un formulario PDF rellenable?",
      a: "Sí. Convierte las partes variables — nombres, fechas, importes — en campos de formulario o líneas claras, mantén las cláusulas como texto bloqueado, y añade una zona de firma. La otra parte rellena y firma, y luego aplanas la versión final.",
    },
    {
      q: "¿Cómo evito que el contrato se edite después de firmarse?",
      a: "Aplana el PDF firmado. Aplanar fusiona los campos rellenados y la firma con la página para que se conviertan en contenido fijo que no se puede alterar ni borrar.",
    },
    {
      q: "¿Son legalmente válidas las firmas de formularios PDF en contratos?",
      a: "Depende de tu jurisdicción y del acuerdo, y no es algo que una herramienta de PDF pueda determinar. Esta guía cubre la mecánica del documento; confirma la suficiencia legal con las partes o un asesor.",
    },
    {
      q: "¿Los campos del contrato deberían ser interactivos o solo líneas?",
      a: "Los campos interactivos quedan más cuidados y reducen errores, pero las líneas claras en una plantilla no interactiva funcionan en cualquier sitio. Cualquiera de las dos está bien siempre que cada variable tenga un espacio evidente y bien dimensionado.",
    },
    {
      q: "¿En qué se diferencia esto de enviar contratos como PDF?",
      a: "Esto trata de construir el contrato como un formulario rellenable — campos, iniciales, zonas de firma. Enviar contratos como PDF cubre de forma más amplia el bloqueo, la entrega y la contrafirma.",
    },
  ],
  related: [
    {
      label: "Cómo enviar un contrato en PDF",
      path: "/guides/how-to-send-contracts-as-pdf",
    },
    {
      label: "Cómo crear un PDF rellenable",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    {
      label: "Cómo guardar un formulario PDF relleno",
      path: "/guides/how-to-save-a-filled-pdf-form",
    },
    { label: "Firmar PDF desde el móvil", path: "/sign-pdf" },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
