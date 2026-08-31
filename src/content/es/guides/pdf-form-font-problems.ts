import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-font-problems",
  h1: "Problemas de fuente en un formulario PDF (tamaño automático, recorte, sustitución)",
  description:
    "¿El texto sale demasiado grande, demasiado pequeño, o se encoge mientras escribes? Las particularidades de fuente propias de los campos de formulario — tamaño automático, sustitución, recorte — y cómo conseguir respuestas nítidas y legibles.",
  updated: "2026-06-01",
  intro: [
    "Los campos de formulario tienen su propio comportamiento de fuente, aparte del resto de un PDF, y produce un conjunto concreto de dolores de cabeza. Texto que se encoge cuanto más escribes, respuestas que se ven enormes en un campo y diminutas en el siguiente, caracteres recortados por arriba o por abajo de un campo, o una fuente distinta a la de las etiquetas del formulario. Son particularidades de fuente propias de los campos de formulario, no problemas generales de fuente en PDF — y la mayoría tienen que ver con cómo se configuró el campo.",
    "El principal culpable es el tamaño automático. Muchos campos están configurados para encoger el texto automáticamente y así encajar respuestas más largas, por eso tu texto se hace más pequeño cuanto más escribes. Otros problemas vienen de una fuente de campo que no está incrustada, así que se sustituye en algunos lectores, o de un campo demasiado corto para su tamaño de fuente, que recorta los caracteres.",
    "Esta guía cubre los problemas de fuente propios de los campos de formulario, cómo reconocer cada uno, y qué cambiar para conseguir respuestas legibles y consistentes. Para problemas de fuente en todo un documento en lugar de en sus campos, la guía general de fuentes de PDF profundiza más.",
  ],
  steps: [
    {
      title: "Reconoce el encogimiento por tamaño automático",
      body: "Si el texto de un campo se hace más pequeño cuando añades caracteres, el campo usa tamaño automático para que quepa todo. Es intencionado, pero puede hacer diminutas las respuestas largas. Mantén las respuestas concisas o, si controlas el formulario, fija un tamaño estable.",
    },
    {
      title: "Corrige tamaños inconsistentes entre campos",
      body: "Las respuestas que se ven grandes en un campo y pequeñas en otro suelen significar que cada campo tiene un tamaño de fuente distinto configurado. Si el formulario es tuyo, estandariza el tamaño de fuente de los campos para que todas las respuestas coincidan.",
    },
    {
      title: "Aborda los caracteres recortados",
      body: "Si las letras se cortan por arriba o por abajo, el campo es demasiado corto para su tamaño de fuente. Amplía el campo o reduce el tamaño de fuente (en un formulario que controles), o acepta un tamaño menor al rellenar uno que no controlas.",
    },
    {
      title: "Gestiona las fuentes sustituidas",
      body: "Si el texto de un campo aparece en una fuente distinta a la esperada, la fuente prevista no está incrustada y el lector la ha sustituido por otra. Incrustar la fuente del campo al construir el formulario la mantiene consistente entre lectores.",
    },
    {
      title: "Aplana para fijar el aspecto",
      body: "Una vez que tus respuestas se ven bien, aplana el formulario. Aplanar fija el texto de los campos dentro de la página para que su tamaño y su fuente se muestren igual en todas partes, sea cual sea el lector del destinatario.",
    },
  ],
  tips: [
    "El tamaño automático es la razón habitual de que el texto de un campo se encoja al escribir — las respuestas concisas se mantienen legibles, o fija un tamaño estable en los formularios que construyas.",
    "Si estás diseñando el formulario, estandariza los tamaños de fuente de los campos para que las respuestas no salgan como un mosaico de tamaños grandes y pequeños.",
    "Los caracteres recortados significan que el campo es demasiado corto para su fuente; redimensiona el campo o la fuente en un formulario que controles.",
    "Aplana antes de enviar para que las fuentes y tamaños de tus campos no se puedan desplazar en la pantalla del destinatario.",
    "El aspecto de un campo puede variar entre lectores, así que un resultado fijo, con la fuente incrustada y aplanado es el más consistente.",
  ],
  mobileNote:
    "En el móvil, la app PDF Editor te deja colocar texto en formularios no interactivos con el tamaño que elijas, evitando por completo el tamaño automático de los campos, y aplanar el resultado para que la fuente y el tamaño queden fijos. En los campos interactivos, mantener las respuestas concisas evita el encogimiento automático que dificulta leer las entradas largas.",
  faq: [
    {
      q: "¿Por qué se encoge el texto de mi formulario mientras escribo?",
      a: "El campo usa tamaño automático, que encoge el texto para que quepan respuestas más largas. Es un comportamiento intencionado. Mantén las respuestas concisas para que sigan siendo legibles, o fija un tamaño de fuente estable si controlas el formulario.",
    },
    {
      q: "¿Por qué mis respuestas aparecen en tamaños distintos?",
      a: "Probablemente cada campo tiene su propio tamaño de fuente configurado. En un formulario que construiste tú, estandariza el tamaño de fuente de los campos para que todas las respuestas coincidan. En uno que no construiste, los tamaños vienen integrados en los campos.",
    },
    {
      q: "¿Por qué los caracteres de mis campos de formulario salen cortados?",
      a: "El campo es demasiado corto para su tamaño de fuente, y recorta las letras. Amplía el campo o reduce el tamaño de fuente en un formulario que controles, o usa un tamaño menor al rellenar uno que no controlas.",
    },
    {
      q: "¿Por qué la fuente del campo se ve distinta a la de las etiquetas?",
      a: "La fuente prevista del campo no está incrustada, así que tu lector la ha sustituido por otra. Incrustar la fuente del campo al crear el formulario la mantiene consistente entre distintos lectores.",
    },
    {
      q: "¿En qué se diferencia esto de los problemas generales de fuente en PDF?",
      a: "Esto trata de las fuentes dentro de los campos de formulario — tamaño automático, dimensionado a nivel de campo, recorte. La guía general de fuentes de PDF cubre fuentes ausentes o sustituidas en todo un documento.",
    },
  ],
  related: [
    {
      label: "Cómo corregir problemas de fuente en un PDF",
      path: "/guides/how-to-fix-pdf-font-issues",
    },
    {
      label: "Problemas de formato en un formulario PDF",
      path: "/guides/pdf-form-formatting-issues",
    },
    { label: "Buenas prácticas para formularios PDF", path: "/guides/pdf-form-best-practices" },
    { label: "Cómo corregir errores en un formulario PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
