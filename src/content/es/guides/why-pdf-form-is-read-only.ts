import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-pdf-form-is-read-only",
  h1: "¿Por qué mi formulario PDF es de solo lectura? Y qué hacer",
  description:
    "¿Tu formulario se abre bloqueado y en gris? Por qué se marca un formulario como solo lectura, cómo distinguir una protección voluntaria de un capricho del lector, y las opciones honestas para completarlo igualmente.",
  updated: "2026-06-01",
  intro: [
    "Un formulario PDF de solo lectura se abre sin problemas pero rechaza cualquier intento de rellenarlo — campos en gris, un icono de candado, quizás un aviso de «protegido» o «asegurado» en la barra de título. A diferencia de un formulario no interactivo (que simplemente no tiene campos) o un problema de guardado (donde las respuestas no persisten), un formulario de solo lectura tiene campos que existen pero están desactivados a propósito. Algo o alguien lo ha bloqueado.",
    "Hay unas pocas razones honestas para esto, y importan porque cambian lo que deberías hacer. El autor del formulario puede haberlo protegido a propósito. El formulario puede estar certificado o ya firmado, así que cambiarlo rompería eso. O tu lector puede estar abriéndolo en un modo de solo lectura que puedes desactivar. Distinguir la protección deliberada de un capricho del lector es el primer paso clave.",
    "Esta guía explica las causas, cómo identificar cuál te está afectando, y las formas legítimas de completar un formulario de solo lectura — sin intentar vencer la seguridad de un documento que no es tuyo para alterar.",
  ],
  steps: [
    {
      title: "Busca un aviso de protegido o asegurado",
      body: "Mira la barra de título y las propiedades del documento en busca de palabras como «asegurado», «protegido», o un icono de candado. Eso indica una seguridad deliberada aplicada por el autor — el estado de solo lectura es intencionado.",
    },
    {
      title: "Descarta un modo de solo lectura del lector",
      body: "Algunas apps abren los archivos en un modo de solo lectura o «vista protegida» por defecto. Busca un aviso de «habilitar edición» o un interruptor de solo lectura, y prueba una app de PDF dedicada, antes de asumir que el archivo en sí está bloqueado.",
    },
    {
      title: "Considera si está certificado o firmado",
      body: "Si el formulario ya está firmado digitalmente o certificado, editarlo invalidaría esa firma, así que los lectores lo bloquean. Es el comportamiento correcto — en general no deberías alterar un formulario firmado.",
    },
    {
      title: "Complétalo añadiendo texto por encima",
      body: "Incluso con los campos bloqueados, a menudo puedes colocar tu propio texto y tus marcas de verificación en la página como si fuera no interactivo, y luego exportar — una forma legítima de rellenar un formulario de solo lectura.",
    },
    {
      title: "Pide a quien lo envió una versión sin bloquear",
      body: "Si de verdad necesitas los campos interactivos, la vía más limpia es pedir a quien lo envió una versión que permita la entrada. No intentes sortear la seguridad de un documento que no es tuyo.",
    },
  ],
  tips: [
    "Decide primero: ¿seguridad deliberada o capricho del lector? Busca un icono de candado o un aviso de «asegurado» frente a un aviso de «habilitar edición».",
    "Colocar texto encima de la página funciona en la mayoría de los formularios de solo lectura y suele ser la vía legítima más rápida para completarlo.",
    "No intentes quitar la protección de un formulario que no es tuyo — si necesitas los campos desbloqueados, pídeselo a quien lo envió.",
    "Un formulario certificado o firmado está bloqueado por una buena razón; alterarlo rompería la firma que lleva.",
    "La «vista protegida» de algunos lectores es solo un valor predeterminado — cambiar a una app de PDF completa o habilitar la edición puede ser todo lo que necesitas.",
  ],
  mobileNote:
    "En el móvil, un formulario de solo lectura casi siempre se puede completar en la app PDF Editor colocando texto y marcas de verificación en la página, incluso cuando sus campos están bloqueados. Funciona en el dispositivo, así que tus datos se mantienen privados — y no manipula la seguridad del formulario, solo coloca tus respuestas por encima.",
  faq: [
    {
      q: "¿Por qué mi formulario PDF es de solo lectura?",
      a: "O bien el autor lo protegió a propósito, está certificado o ya firmado (así que editarlo rompería eso), o tu lector lo abrió en un modo de solo lectura. Busca un icono de candado o un aviso de «asegurado» para distinguir la protección deliberada de un ajuste del lector.",
    },
    {
      q: "¿Cómo relleno un formulario PDF de solo lectura?",
      a: "A menudo puedes colocar tu propio texto y tus marcas de verificación en la página como si fuera no interactivo, y luego exportar — incluso con los campos bloqueados. Si necesitas los campos interactivos, pide a quien lo envió una copia sin bloquear.",
    },
    {
      q: "¿Solo lectura es lo mismo que no poder escribir?",
      a: "Es una de las causas de no poder escribir. Un formulario también puede rechazar la escritura por ser no interactivo o estar abierto en el lector equivocado. Solo lectura significa específicamente que los campos existen pero están desactivados a propósito.",
    },
    {
      q: "¿Puedo quitar la protección de solo lectura?",
      a: "Si el formulario es tuyo y fuiste tú quien aplicó la protección, puedes cambiarla en un editor competente. Si es de otra persona, no intentes vencer su seguridad — pide una versión sin bloquear en su lugar.",
    },
    {
      q: "¿Por qué se bloquea la edición de un formulario firmado?",
      a: "Editarlo invalidaría la firma digital o la certificación que lleva el formulario, así que los lectores lo bloquean. Es un comportamiento intencionado para mantener la fiabilidad de los documentos firmados.",
    },
  ],
  related: [
    {
      label: "¿Por qué no puedo escribir en un formulario PDF?",
      path: "/guides/why-cant-i-type-in-a-pdf-form",
    },
    { label: "Formulario PDF que no funciona", path: "/guides/pdf-form-not-working" },
    {
      label: "¿Por qué no se guarda mi formulario PDF?",
      path: "/guides/why-pdf-form-wont-save",
    },
    {
      label: "Cómo proteger un PDF con contraseña",
      path: "/guides/how-to-protect-pdf-file",
    },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
