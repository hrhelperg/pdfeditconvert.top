import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-working",
  h1: "Formulario PDF que no funciona — diagnóstico y soluciones",
  description:
    "Un formulario PDF rebelde tiene un puñado de causas habituales. Un diagnóstico rápido para identificar la tuya — campos ausentes, no deja escribir, no se guarda, solo lectura — y dónde arreglarlo.",
  updated: "2026-06-01",
  intro: [
    "«Mi formulario PDF no funciona» abarca muchos problemas distintos, y la solución depende por completo de cuál tengas de verdad. El formulario no te deja escribir, los campos han desaparecido, tus respuestas no se guardan, se abre en modo solo lectura, o simplemente se comporta de forma extraña. Cada uno tiene una causa concreta y una solución concreta — el truco está en ponerle nombre al síntoma primero.",
    "Esta página es un triaje. En lugar de una solución milagrosa única, te ayuda a identificar en unos segundos a qué problema te enfrentas, y luego te dirige a la guía que lo trata. La mayoría de los problemas de formulario no son fallos del archivo en absoluto; son un desajuste entre el formulario y el lector en el que lo abriste, o un ajuste deliberado como la protección de solo lectura.",
    "Repasa las comprobaciones rápidas de abajo. Te dirán si te enfrentas a un formulario no interactivo, un problema de lector, un problema de guardado, un ajuste de seguridad, o un problema de compatibilidad — y adónde ir después.",
  ],
  steps: [
    {
      title: "¿Ves los campos siquiera?",
      body: "Si los campos de formulario faltan o la página parece incompleta, es un problema de campos ausentes — normalmente un lector que no dibuja la capa de campos. Consulta la guía de campos ausentes para la solución.",
    },
    {
      title: "¿Los campos están ahí pero no puedes escribir?",
      body: "Si tocas un campo y no pasa nada, el formulario puede ser no interactivo, estar abierto en el lector equivocado, o ser de solo lectura. La guía de «no puedo escribir» repasa cómo distinguirlos.",
    },
    {
      title: "¿Las respuestas desaparecen después de guardar?",
      body: "Si rellenas el formulario, guardas, vuelves a abrir, y está en blanco otra vez, los valores de los campos no se están escribiendo en el archivo. La guía de «no se guarda» cubre cómo guardar los datos del formulario de forma fiable.",
    },
    {
      title: "¿El formulario se abre como solo lectura o bloqueado?",
      body: "Si todo aparece en gris o ves un aviso de protegido, el formulario está asegurado contra la edición. La guía de solo lectura explica tus opciones sin vencer una seguridad que no deberías saltarte.",
    },
    {
      title: "¿Funciona en una app pero no en otra?",
      body: "Si el formulario se comporta bien en un programa y se rompe en otro, es un problema de compatibilidad — posiblemente un tipo de formulario avanzado. Consulta la guía de compatibilidad, o prueba la lista de comprobación consolidada.",
    },
  ],
  tips: [
    "Ponle nombre al síntoma antes de probar soluciones — la solución correcta depende por completo de qué problema tengas.",
    "La prueba única más rápida para muchos problemas: abre el mismo archivo en una app de PDF dedicada. Distingue al instante «formulario roto» de «lector defectuoso».",
    "Un formulario que no se porta bien casi nunca está realmente roto; la mayoría de las causas son desajustes de lector o ajustes deliberados.",
    "Si solo necesitas tenerlo hecho, colocar texto por encima de la página funciona en casi cualquier formulario sea cual sea el problema de fondo.",
    "El aspecto y el comportamiento de un formulario pueden variar entre lectores de PDF, así que «aquí no funciona» rara vez significa «roto en todas partes».",
  ],
  mobileNote:
    "Muchos avisos de «formulario que no funciona» son simplemente una vista previa de correo o un lector básico ignorando los campos. Abrir el archivo en la app PDF Editor activa los campos interactivos donde existen y te deja colocar texto en los formularios no interactivos o bloqueados donde no — en el dispositivo, sin subir nada.",
  faq: [
    {
      q: "¿Por qué no funciona mi formulario PDF?",
      a: "Casi siempre es una de estas pocas cosas: el formulario es no interactivo y no tiene campos, tu lector no dibuja los campos, las respuestas no se guardan, el formulario es de solo lectura, o usa funciones que tu app no admite. Identifica el síntoma y aplica la solución correspondiente.",
    },
    {
      q: "¿Qué es lo más rápido que puedo probar primero?",
      a: "Abre el mismo archivo en una app de PDF dedicada en lugar de una vista previa de correo o el navegador. Ese único paso resuelve buena parte de los problemas de «formulario que no funciona», que en realidad son desajustes de lector.",
    },
    {
      q: "¿Cómo sé si el formulario está roto o es solo mi app?",
      a: "Pruébalo en otra app de PDF competente. Si funciona ahí, tu lector original era el problema. Si falla en todas partes, puede ser un tipo de formulario avanzado o un archivo genuinamente dañado.",
    },
    {
      q: "Solo necesito rellenarlo — ¿cuál es el remedio universal?",
      a: "Coloca tu propio texto y tus marcas de verificación encima de la página con un editor de PDF. Esto funciona tanto en formularios no interactivos, bloqueados, como sin campos, sea cual sea la causa de fondo.",
    },
    {
      q: "¿Adónde voy para mi problema concreto?",
      a: "Usa las comprobaciones anteriores para identificar tu síntoma — campos ausentes, no puedo escribir, no se guarda, solo lectura, o compatibilidad — y sigue la guía enlazada para ese problema, o la lista de comprobación consolidada.",
    },
  ],
  related: [
    {
      label: "¿Han desaparecido los campos de un formulario PDF?",
      path: "/guides/pdf-form-fields-missing",
    },
    {
      label: "¿Por qué no puedo escribir en un formulario PDF?",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    {
      label: "¿Por qué no se guarda mi formulario PDF?",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "Problemas de compatibilidad en formularios PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    { label: "Cómo corregir errores en un formulario PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
