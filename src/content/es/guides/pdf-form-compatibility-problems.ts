import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-compatibility-problems",
  h1: "Problemas de compatibilidad en formularios PDF (XFA y formularios dinámicos)",
  description:
    "Un formulario que se abre bien en un programa y falla en otro suele usar funciones que no todos los lectores admiten. Cómo detectar un formulario dinámico, de dónde viene el problema, y qué opciones tienes.",
  updated: "2026-06-01",
  intro: [
    "A veces un formulario funciona sin problemas en un programa y se rompe en otro — los campos no aparecen, un aviso dice «ábralo en otro lector», o la página está en blanco con solo un mensaje de error. Esto es un problema de compatibilidad, y casi siempre significa que el formulario usa funciones que no todos los lectores de PDF admiten. El formulario no está roto; simplemente es más exigente que uno estándar sobre dónde se abre.",
    "La causa habitual es un formulario avanzado o dinámico construido con una tecnología (a menudo llamada XFA o LiveCycle) que solo cierto software renderiza correctamente. Los formularios interactivos estándar tienen una amplia compatibilidad, pero estos dinámicos pueden exigir un programa concreto, y muchos lectores modernos — sobre todo en móviles y navegadores — no llegan a abrirlos correctamente.",
    "Esta guía te ayuda a reconocer un problema de compatibilidad, entender por qué ocurre, y valorar tus opciones realistas — incluida la realidad honesta de que algunos formularios simplemente necesitan el software para el que se diseñaron, o un formato distinto por parte de quien los emite.",
  ],
  steps: [
    {
      title: "Reconoce las señales delatoras",
      body: "Un mensaje de «espere» o «ábralo en un lector compatible», una página en blanco donde debería estar el formulario, o campos que aparecen en un programa y desaparecen en otro apuntan todos a un formulario que usa funciones no admitidas.",
    },
    {
      title: "Identifica un formulario dinámico (XFA)",
      body: "Los formularios que muestran un aviso sobre necesitar software específico suelen ser formularios dinámicos XFA. No son formularios interactivos estándar, y muchos lectores — sobre todo móviles y de navegador — no pueden renderizarlos.",
    },
    {
      title: "Prueba con un lector distinto y completo",
      body: "Abre el formulario en un par de programas de PDF competentes. Un formulario interactivo estándar que se rompió en un lector básico a menudo funciona en uno completo. Un formulario dinámico puede seguir necesitando su software específico.",
    },
    {
      title: "Pide a quien lo emite una versión compatible",
      body: "Si un formulario genuinamente no se abre en ningún sitio que puedas usar, pide a quien lo envió un PDF estándar, una versión imprimible plana, o instrucciones sobre qué software necesita. Quien lo emite suele tener una alternativa.",
    },
    {
      title: "Recurre a imprimir y rellenar si hace falta",
      body: "Como último recurso para un formulario que no puedes abrir de forma interactiva, pide o genera una copia imprimible plana y complétala colocando texto en la página o a mano. No es elegante, pero siempre funciona.",
    },
  ],
  tips: [
    "Un aviso de «lector compatible» es la señal clásica de un formulario dinámico XFA que necesita software específico.",
    "Los formularios interactivos estándar tienen amplia compatibilidad; si uno solo se rompe en un lector básico, una app completa suele arreglarlo.",
    "Algunos formularios simplemente requieren el programa para el que se construyeron — es un límite real, no algo que forzar.",
    "Cuando un formulario no se abre en ningún sitio usable, quien lo emite casi siempre puede ofrecer una alternativa estándar o imprimible.",
    "Algunos formularios PDF pueden usar funciones no admitidas, así que «aquí no se abre» puede ser el diseño del formulario y no un fallo de tu parte.",
  ],
  mobileNote:
    "Los móviles son donde más muerden los problemas de compatibilidad — los formularios dinámicos XFA a menudo no se renderizan en absoluto en los lectores móviles. La app PDF Editor abre y rellena de forma fiable formularios interactivos estándar y formularios no interactivos; para un formulario dinámico que necesite software de escritorio específico, pide a quien lo emite una versión PDF estándar.",
  faq: [
    {
      q: "¿Por qué mi formulario PDF funciona en un programa pero no en otro?",
      a: "Probablemente usa funciones que no todos los lectores admiten — a menudo un formulario dinámico XFA. Los formularios estándar tienen amplia compatibilidad; los dinámicos pueden requerir software específico y no se renderizan en muchos lectores, sobre todo móviles y de navegador.",
    },
    {
      q: "¿Qué es un formulario dinámico o XFA?",
      a: "Es un tipo de formulario avanzado que se comporta más como un pequeño programa que como una página estática. Solo cierto software lo renderiza correctamente, por eso puede mostrar un aviso o una página en blanco en otro sitio.",
    },
    {
      q: "¿Cómo abro un formulario que dice «use un lector compatible»?",
      a: "Prueba con un programa de PDF completo. Si es un formulario dinámico que sigue sin abrirse, pide a quien lo emite un PDF estándar o una versión imprimible — muchos lectores genuinamente no pueden renderizar formularios dinámicos.",
    },
    {
      q: "¿Puedo convertir yo mismo un formulario dinámico en uno estándar?",
      a: "No de forma fiable desde el archivo terminado. La vía segura es pedir a quien lo emite una versión estándar o plana. Forzar una conversión suele perder campos o datos.",
    },
    {
      q: "¿Un problema de compatibilidad es lo mismo que campos ausentes?",
      a: "Se solapan — un problema de compatibilidad puede hacer que falten campos en un lector no compatible. Pero los campos ausentes suelen ser solo un lector básico que no renderiza un formulario estándar, algo que una app competente arregla.",
    },
  ],
  related: [
    {
      label: "¿Han desaparecido los campos de un formulario PDF?",
      path: "/guides/pdf-form-fields-missing",
    },
    { label: "Formulario PDF que no funciona", path: "/guides/pdf-form-not-working" },
    { label: "Cómo funcionan los formularios PDF", path: "/guides/how-pdf-forms-work" },
    { label: "Cómo corregir errores en un formulario PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formularios PDF", path: "/pdf-forms" },
};

export default content;
