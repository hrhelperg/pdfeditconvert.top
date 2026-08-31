import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-font-issues",
  h1: "Cómo corregir problemas de fuente en un PDF (que falta, sustituida, ilegible)",
  description:
    "Cuando un PDF muestra la fuente equivocada, cuadrados en vez de caracteres o texto sustituido, casi siempre falta una fuente incrustada. Cómo funciona la incrustación y qué cambiar al exportar.",
  updated: "2026-05-29",
  intro: [
    "Cuando un PDF muestra cuadrados en vez de caracteres, o la fuente equivocada en todas partes, o un espaciado raro que no estaba en el original, es un problema de fuente. Los PDF referencian las fuentes por su nombre; el lector necesita encontrar esa fuente en el sistema o tenerla incrustada dentro del archivo. Si ninguna de las dos cosas es cierta, ves una sustitución — en el mejor caso una aproximación cercana, en el peor, cuadrados.",
    "La solución correcta es casi siempre volver a exportar con las fuentes incrustadas. Una vez incrustada una fuente, el archivo lleva consigo los datos del glifo y se ve correcto en todas partes. El precio es un archivo un poco más grande, pero para la mayoría de las fuentes la diferencia es insignificante comparada con el documento.",
    "Esta guía explica cómo funciona de verdad la incrustación de fuentes, repasa los síntomas más habituales y muestra las soluciones — incluyendo cuándo no es posible reexportar y hay que aplanar el archivo a imágenes.",
  ],
  steps: [
    {
      title: "Confirma que el archivo está renderizando fuentes sustitutas",
      body: "Abre el archivo en dos lectores distintos. Si ambos muestran la misma fuente equivocada, las fuentes no están incrustadas. Si un lector acierta y el otro no, es ese lector el que no tiene la fuente y está sustituyendo.",
    },
    {
      title: "Vuelve a exportar con todas las fuentes incrustadas",
      body: "En Word, Pages, Docs y la mayoría de las herramientas de diseño, los ajustes de exportación a PDF incluyen «incrustar todas las fuentes». Activarlo añade los datos de la fuente al archivo y hace que se renderice igual en todas partes.",
    },
    {
      title: "Usa imprimir a PDF como alternativa",
      body: "Si no puedes activar la incrustación de fuentes en la aplicación de origen, abre el documento en cualquier lector que lo muestre correctamente e imprímelo a PDF. La copia nueva graba los glifos renderizados como imagen — más pesada y no buscable, pero fiable.",
    },
    {
      title: "Comprueba si hay fuentes con licencia que no se pueden incrustar",
      body: "Algunas fuentes comerciales tienen restricciones de incrustación. La aplicación de origen te avisará. La solución realista es cambiar a una fuente parecida que sí permita incrustarse, o convertir el texto afectado en imágenes.",
    },
    {
      title: "Convierte a Word, corrige el texto, vuelve a exportar",
      body: "Si la sustitución ya ha estropeado el texto y solo tienes el PDF, PDF a Word extrae lo recuperable. Límpialo, fija las fuentes que tengas y vuelve a exportar a un PDF nuevo.",
    },
    {
      title: "Aplana a imágenes cuando nada más funciona",
      body: "PDF a imágenes exporta cada página como PNG en alta resolución. Si vuelves a ensamblar con Imagen a PDF, el resultado no tiene texto vivo — solo imágenes — pero el renderizado de la fuente queda fijado para cualquier lector.",
    },
  ],
  tips: [
    "No uses fuentes que no se puedan incrustar en documentos importantes — el archivo siempre estará expuesto a la sustitución.",
    "Las fuentes web y las fuentes decorativas descargadas son las principales causantes de problemas de incrustación. Las fuentes del sistema (Arial, Times, Helvetica, Calibri) se incrustan sin problemas.",
    "Incrustar fuentes en modo «subconjunto» (solo los caracteres usados) mantiene el archivo pequeño. La mayoría de las herramientas de exportación lo hacen así por defecto, y es la opción correcta.",
    "Si solo un carácter está mal (como una fracción o un símbolo especial), a la fuente le falta ese glifo. Sustituye el carácter de origen por un equivalente Unicode.",
    "Después de aplanar a imágenes, espera perder el copiar y pegar y el OCR. Usa ese camino solo cuando la fidelidad del renderizado importe más que la capacidad de búsqueda.",
  ],
  mobileNote:
    "Los lectores del móvil suelen tener menos fuentes instaladas que los de escritorio, así que los archivos sin fuentes incrustadas se ven peor en el móvil. La app PDF Editor muestra avisos de fuente sustituida y te deja volver a exportar documentos con las fuentes ya incorporadas, lo que los mantiene visualmente coherentes entre lectores de iOS, Android y escritorio.",
  faq: [
    {
      q: "¿Qué hace realmente «incrustar fuentes»?",
      a: "Empaqueta los datos del glifo de la fuente dentro del propio PDF, así cualquier lector puede renderizar el texto correctamente sin necesitar la fuente instalada en local.",
    },
    {
      q: "¿Por qué veo cuadrados en vez de letras?",
      a: "La fuente no está instalada en el sistema y no se incrustó. El lector no puede sustituirla porque no sabe qué glifos dibujar, así que muestra el cuadrado de carácter que falta.",
    },
    {
      q: "¿Puedo añadir una fuente a un PDF después de exportarlo?",
      a: "No de forma limpia. Volver a exportar desde el origen es el camino correcto. Hay herramientas que prometen incrustar a posteriori, pero la mayoría producen archivos con fallos.",
    },
    {
      q: "¿Por qué mi PDF exportado pesa más al incrustar fuentes?",
      a: "Porque ahora los datos de la fuente están en el archivo. El aumento suele ser pequeño salvo que incrustes muchas familias de fuentes. El subconjunto (incluir solo los caracteres usados) mantiene el tamaño a raya.",
    },
    {
      q: "¿La compresión eliminará las fuentes incrustadas?",
      a: "No. La compresión de PDF actúa sobre las imágenes, no sobre el texto ni las fuentes. Comprimir un PDF con fuentes incrustadas no lo rompe.",
    },
  ],
  related: [
    { label: "PDF a Word — recupera texto de fuentes sustituidas", path: "/pdf-to-word" },
    { label: "PDF a imágenes — aplana como último recurso", path: "/pdf-to-images" },
    { label: "Cómo corregir problemas de formato en un PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "Cómo solucionar problemas al imprimir un PDF", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "Convertidor de PDF", path: "/pdf-converter" },
};

export default content;
