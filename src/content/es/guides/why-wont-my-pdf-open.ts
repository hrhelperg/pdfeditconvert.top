import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-wont-my-pdf-open",
  h1: "¿Por qué no se abre mi PDF? Causas y soluciones prácticas",
  description:
    "Un PDF que se niega a abrirse casi siempre es una de cinco cosas. Cómo diagnosticar una descarga incompleta, un bloqueo por contraseña, un fallo del lector o un archivo antiguo — y qué arregla cada uno.",
  updated: "2026-05-29",
  intro: [
    "Haces doble clic en un PDF y no pasa nada. O el lector muestra un error, se congela, o aparece un cuadro de contraseña que no esperabas. Los PDF dan la sensación de que deberían simplemente funcionar, y la mayoría de las veces funcionan — así que cuando uno no lo hace, merece la pena conocer la lista corta de motivos.",
    "En realidad solo hay un puñado de causas detrás de un PDF que se resiste: la descarga quedó incompleta, el archivo está protegido con contraseña, el lector no encaja con la versión del PDF, el archivo salió de una exportación con fallos, o es un formato que solo parece un PDF. Cada una tiene una solución concreta y repetible.",
    "Esta guía repasa los diagnósticos uno por uno, en el orden en que merece la pena comprobarlos, con la herramienta adecuada para cada caso. La mayoría de las soluciones consisten en identificar qué problema tienes, no en aprender algún truco avanzado.",
  ],
  steps: [
    {
      title: "Vuelve a descargar el archivo antes de nada",
      body: "Una descarga incompleta es el motivo más habitual de que un PDF no se abra. Volver a obtener el archivo lo arregla en segundos. Si sigue fallando, el tamaño coincide con el de origen, y ese origen sí lo carga — has descartado una mala descarga.",
    },
    {
      title: "Comprueba si está protegido con contraseña",
      body: "Algunos lectores muestran un error genérico en vez de pedir la contraseña. Si el archivo viene de un banco, un empleador o una gestoría, da por hecho que hay una contraseña. Quien te lo envió la conocerá.",
    },
    {
      title: "Prueba con un lector de PDF distinto",
      body: "Los navegadores, Vista previa en macOS, Adobe Acrobat y los lectores del móvil interpretan los PDF de forma ligeramente distinta. Un archivo que un lector rechaza a menudo se abre bien en otro. Si funciona en una pestaña del navegador pero no en una app de escritorio, estás ante un desajuste de versión del lector, no un archivo roto.",
    },
    {
      title: "Inspecciona el tipo de archivo real",
      body: "Los archivos que llegan por correo o chat a veces llevan la extensión .pdf pero en realidad son .docx, .html, una imagen o un ZIP. Abrirlo con un editor de texto genérico revela los primeros bytes. Un PDF real empieza por %PDF-. Cualquier otra cosa significa renombrarlo o pedirlo de nuevo.",
    },
    {
      title: "Repara con un ciclo de reexportación",
      body: "Si el archivo es genuinamente válido pero está roto de formas sutiles, abrirlo en un lector que todavía pueda mostrarlo e imprimirlo a PDF o volver a exportarlo suele producir una copia limpia. Algunos objetos mal formados se reescriben y el archivo nuevo se abre en todas partes.",
    },
    {
      title: "Reduce su tamaño si la memoria es el límite",
      body: "En móviles antiguos, los PDF muy pesados y llenos de escaneos pueden no llegar a abrirse. Comprimir PDF en tu navegador reduce el archivo en el sitio; la copia comprimida se abre donde el original no lo hacía.",
    },
  ],
  tips: [
    "Compara el tamaño del archivo descargado con lo que publicó quien lo envió. Un desajuste apunta directamente a una descarga incompleta.",
    "Si el navegador abre el PDF pero tu app de escritorio no, configúralo para que se abra en el navegador por ahora — no pierdes nada y sigues adelante.",
    "Un archivo que se abre en el móvil pero falla en el portátil (o al revés) suele ser un problema de versión del lector, no un archivo corrupto. Elige el lector que funcione.",
    "Cuando los PDF adjuntos al correo fallan repetidamente, prueba a descargarlos desde la interfaz web del correo en vez del cliente de escritorio — los clientes a veces truncan los adjuntos grandes.",
    "Guarda los originales antes de hacer ciclos de reparación. Una reexportación mala puede perder campos de formulario o anotaciones que el original conservaba.",
  ],
  mobileNote:
    "En el móvil, el culpable más habitual es una descarga parcial por una conexión móvil inestable. La app PDF Editor guarda los archivos en local y te deja volver a obtener y abrir PDF pesados sin depender de la caché del navegador, que es a menudo donde ocurre el truncado.",
  faq: [
    {
      q: "¿Por qué mi PDF dice que está dañado cuando quien lo envió dice que está bien?",
      a: "Casi siempre una descarga parcial. Vuelve a obtener el archivo; comprueba que el tamaño en bytes coincide con lo que compartió quien lo envió. Si la copia nueva se abre, la original estaba incompleta.",
    },
    {
      q: "Mi lector pide una contraseña que no tengo. ¿Y ahora qué?",
      a: "Solo quien lo envió puede compartirla. No existe una forma segura de saltarse una contraseña real de PDF desde el lado del destinatario, y conviene evitar las herramientas que prometen hacerlo.",
    },
    {
      q: "¿Por qué se abre en Chrome pero no en Acrobat?",
      a: "Los lectores de escritorio más antiguos pueden no admitir funciones más nuevas del PDF. O sigues usando el lector que funciona, o vuelves a exportar el archivo a través de un paso de impresión a PDF para producir una copia compatible.",
    },
    {
      q: "¿Hay alguna herramienta que simplemente «arregle» PDF rotos?",
      a: "A veces — pasar el archivo por una reexportación (abrir, imprimir a PDF, guardar) limpia problemas estructurales menores. Pero los PDF gravemente dañados suelen ser irrecuperables.",
    },
    {
      q: "¿Comprimir ayuda con los archivos que no se abren?",
      a: "Solo si la causa es la memoria: los PDF enormes y llenos de escaneos a veces fallan en móviles antiguos. Comprimir PDF los reduce lo suficiente para que carguen. No arregla un archivo estructuralmente roto.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduce archivos pesados que no se abren", path: "/compress-pdf" },
    { label: "Herramientas PDF — lista completa de soluciones en el navegador", path: "/pdf-tools" },
    { label: "Cómo reparar un PDF dañado", path: "/guides/how-to-fix-a-corrupted-pdf" },
    { label: "Cómo corregir problemas de formato en un PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
  ],
  parentHub: { label: "Herramientas PDF — gratis, en el navegador", path: "/pdf-tools" },
};

export default content;
