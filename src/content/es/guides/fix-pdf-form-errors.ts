import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "fix-pdf-form-errors",
  h1: "Cómo corregir errores en un formulario PDF — checklist de primeros auxilios",
  description:
    "Los gestos de primeros auxilios para un formulario PDF rebelde: cambiar de lector, volver a descargar, actualizar, escribir por encima, aplanar. Prueba esto antes de buscar una causa concreta.",
  updated: "2026-06-01",
  intro: [
    "Cuando un formulario se porta mal y solo quieres tenerlo resuelto, hay una secuencia corta de soluciones que arregla la mayoría de los problemas sea cual sea la causa exacta. Esta es la lista de primeros auxilios — lo que hay que probar en orden antes de diagnosticar un problema concreto. La mayoría de los errores de formulario caen en uno de estos cinco movimientos, y llevan un par de minutos repasarlos.",
    "Piensa en ella como el complemento de diagnosticar el síntoma preciso. Si prefieres identificar si es un problema de campos ausentes, de guardado, o un bloqueo de solo lectura, la guía de triaje te dirige allí. Pero a menudo la vía más rápida es simplemente ejecutar estos pasos universales, y el formulario empieza a comportarse bien.",
    "Cada paso ataca una categoría amplia de problema — desajustes de lector, archivos incompletos, software desactualizado, formularios bloqueados o no interactivos, y guardado inconsistente. Ejecútalos de arriba abajo y detente cuando el formulario funcione.",
  ],
  steps: [
    {
      title: "Ábrelo en una app de PDF dedicada",
      body: "La solución de mayor rendimiento. Las vistas previas de correo, las pestañas del navegador y los lectores básicos causan la mayoría de los errores de formulario al ignorar la capa de campos. Una app de PDF completa resuelve por sí sola una gran parte de los problemas.",
    },
    {
      title: "Vuelve a descargar una copia fresca",
      body: "Una descarga parcial o interrumpida puede producir campos ausentes, páginas en blanco, o errores de «archivo dañado». Descarga el formulario de nuevo desde el origen y vuelve a abrir la copia completa antes de asumir un fallo más profundo.",
    },
    {
      title: "Actualiza tu software de PDF",
      body: "Un lector desactualizado puede no renderizar las funciones más nuevas de los formularios. Actualizar a una versión reciente, o cambiar a una app de PDF bien mantenida, resuelve errores de tipo compatibilidad que en realidad no son sobre el archivo.",
    },
    {
      title: "Añade tu texto por encima",
      body: "Si el formulario es no interactivo, está bloqueado, o simplemente no coopera, coloca tu propio texto y tus marcas de verificación directamente en la página con un editor de PDF. Este remedio universal completa casi cualquier formulario, sea cual sea el problema de fondo.",
    },
    {
      title: "Guarda correctamente y aplana",
      body: "Para que las respuestas dejen de desaparecer, guarda con una herramienta que escriba los datos de los campos, y luego aplana el formulario completado. Aplanar bloquea tus respuestas en la página para que se muestren, impriman y envíen de forma fiable en todas partes.",
    },
  ],
  tips: [
    "Ejecuta los pasos en orden y detente cuando funcione — la mayoría de los formularios se arreglan en el paso uno o dos.",
    "Abrir el archivo en una app de PDF de verdad es el movimiento único de mayor rendimiento para casi cualquier error de formulario.",
    "Añadir texto por encima es la vía de escape universal cuando un formulario no coopera y solo necesitas tenerlo resuelto.",
    "Aplanar al final evita los problemas posteriores más comunes: respuestas desaparecidas e impresiones en blanco.",
    "Si nada de esto funciona, el formulario puede usar funciones no admitidas — consulta la guía de compatibilidad o pide a quien lo emite una versión estándar.",
  ],
  mobileNote:
    "En el móvil, esta lista es rápida: abre el formulario en la app PDF Editor en lugar de la vista previa de correo, rellena los campos o añade texto por encima, y luego aplana y exporta. Solo esos movimientos resuelven la mayoría de los errores de formulario en el móvil, todo en el dispositivo sin subir nada.",
  faq: [
    {
      q: "¿Cuál es la forma más rápida de arreglar un formulario PDF que se porta mal?",
      a: "Ábrelo en una app de PDF dedicada en lugar de una vista previa de correo o el navegador. Eso resuelve la mayor parte de los errores de formulario, que suelen ser desajustes de lector y no fallos del archivo.",
    },
    {
      q: "El formulario sigue sin funcionar después de cambiar de app — ¿qué sigue?",
      a: "Vuelve a descargar una copia fresca, actualiza tu software de PDF, y si sigue siendo terco, añade tu texto directamente por encima de la página. Ese enfoque manual completa casi cualquier formulario sea cual sea la causa.",
    },
    {
      q: "¿Cómo evito que mis respuestas desaparezcan?",
      a: "Guarda con una herramienta que escriba los datos de los campos del formulario, y luego aplana el formulario completado. Aplanar fusiona tus respuestas con la página para que no se puedan perder al reabrir, imprimir o enviar.",
    },
    {
      q: "¿Debería usar esta lista o diagnosticar el problema concreto?",
      a: "Cualquiera de las dos funciona. Esta lista arregla la mayoría de los errores rápidamente sin diagnóstico. Si prefieres identificar la causa exacta — campos ausentes, no se guarda, solo lectura — empieza con el triaje de solución de problemas de formularios.",
    },
    {
      q: "¿Y si nada de esto lo arregla?",
      a: "El formulario puede usar funciones avanzadas que tu software no puede gestionar. Consulta la guía de compatibilidad, o pide a quien lo envió un PDF estándar o una versión imprimible plana que puedas completar.",
    },
  ],
  related: [
    { label: "Formulario PDF que no funciona", path: "/guides/pdf-form-not-working" },
    {
      label: "¿Han desaparecido los campos de un formulario PDF?",
      path: "/guides/pdf-form-fields-missing",
    },
    {
      label: "Problemas de compatibilidad en formularios PDF",
      path: "/guides/pdf-form-compatibility-problems",
    },
    {
      label: "¿Por qué no se guarda mi formulario PDF?",
      path: "/guides/why-pdf-form-wont-save",
    },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
