import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-so-large",
  h1: "¿Por qué mi PDF pesa tanto? Causas y soluciones",
  description:
    "Las razones reales por las que un PDF se hincha de tamaño — escaneos, fotos incrustadas, fuentes y más — y la solución correcta para cada una, con herramientas gratuitas del navegador.",
  updated: "2026-05-23",
  intro: [
    "Un documento de diez páginas no tiene ningún motivo para pesar 60 MB, y sin embargo los PDF se hinchan constantemente. Antes de recurrir a un compresor, merece la pena entender por qué un archivo se ha hecho tan grande — porque la solución correcta depende de la causa, y la solución equivocada puede aplastar un documento que no necesitaba que lo aplastaran.",
    "Esta guía es un diagnóstico breve. Recorre los culpables habituales detrás de un PDF hinchado, cómo saber con cuál te enfrentas, y la respuesta más eficaz para cada uno. La mayoría de soluciones usan las herramientas gratuitas de este sitio, que funcionan en el navegador y se ejecutan todas en tu dispositivo sin subir nada.",
    "Al final sabrás si tu archivo necesita compresión, eliminar páginas, o simplemente volver a exportarlo desde la fuente — y dejarás de comprimir documentos por costumbre.",
  ],
  steps: [
    {
      title: "Sospecha primero de las páginas escaneadas",
      body: "Los escaneos son la causa número uno. Cada página escaneada es una imagen a resolución completa, así que unas pocas eclipsan un documento de texto. Si tu PDF viene de un escáner o de la cámara del móvil, esto es casi con toda seguridad el motivo.",
    },
    {
      title: "Comprueba si hay fotos y gráficos incrustados",
      body: "Las fotos en alta resolución, las capturas de pantalla y los gráficos colocados en un documento cargan con todos sus datos de píxel. Un informe con una docena de imágenes grandes puede ser enorme aunque el texto sea corto.",
    },
    {
      title: "Considera las fuentes incrustadas y los recursos de diseño",
      body: "Los documentos que incrustan varias familias de fuentes completas, o que se exportaron desde software de diseño pesado, cargan con un peso extra en fuentes y recursos vectoriales que el contenido no necesita de forma visible.",
    },
    {
      title: "Busca contenido sobrante u oculto",
      body: "Páginas duplicadas de una unión descuidada, hojas en blanco insertadas por el escáner, o historial de revisiones pueden inflar un archivo. Eliminar las páginas que no necesitas a veces es la victoria de tamaño más sencilla.",
    },
    {
      title: "Aplica la solución que corresponda",
      body: "Para escaneos y fotos, comprime con la herramienta Comprimir PDF. Para lo sobrante, quita páginas con la herramienta Extraer páginas de PDF. Para un documento de texto que resulta misteriosamente enorme, vuelve a exportarlo desde la aplicación de origen.",
    },
    {
      title: "Vuelve a comprobar el tamaño",
      body: "Confirma que el archivo ha llegado a donde lo necesitas. Si sigue siendo grande después de comprimir un archivo cargado de escaneos, un nivel más fuerte o dividir el documento es el siguiente paso.",
    },
  ],
  tips: [
    "Ajusta la solución a la causa: la compresión ayuda a los archivos cargados de imágenes; casi no hace nada por un PDF de solo texto que sea grande por otro motivo.",
    "Un documento de solo texto sorprendentemente grande suele tener fuentes incrustadas u objetos ocultos — volver a exportarlo desde la aplicación de origen a menudo lo reduce de forma más limpia que la compresión.",
    "Escanear a 600 PPP cuando bastarían 200-300 es una causa habitual y evitable de archivos enormes. Baja la resolución de escaneo en el origen para los documentos que vayas a compartir.",
    "Eliminar páginas innecesarias puede reducir el tamaño sin tocar la calidad en absoluto — merece la pena comprobarlo antes de comprimir.",
    "No comprimas por reflejo. Si un archivo ya tiene un tamaño razonable, comprimirlo solo lo degrada sin ninguna ganancia real.",
  ],
  mobileNote:
    "Los escaneos del móvil son el culpable clásico — imágenes de alta resolución guardadas como PDF. La app PDF Editor te permite escanear con una resolución sensata desde el principio y comprimir sin conexión, así que los documentos no se hinchan desde el principio y se reducen con facilidad cuando lo hacen.",
  faq: [
    {
      q: "¿Qué hace que un PDF sea grande la mayoría de las veces?",
      a: "Las páginas escaneadas y las fotos incrustadas. Cada una es una imagen a resolución completa, así que un puñado de ellas pesa muchas veces más que un documento de texto largo.",
    },
    {
      q: "¿Por qué mi PDF de solo texto sigue siendo grande?",
      a: "Probablemente fuentes incrustadas, objetos ocultos, o contenido sobrante de ediciones y uniones. Volver a exportarlo desde la aplicación de origen, o eliminar páginas innecesarias, suele ayudar más que la compresión.",
    },
    {
      q: "¿La compresión siempre reducirá mi archivo?",
      a: "No. La compresión afecta a los datos de imagen, así que los PDF cargados de escaneos y fotos se reducen mucho mientras que los archivos de solo texto o vectoriales apenas cambian. Si un archivo de texto es enorme, la causa está en otro sitio.",
    },
    {
      q: "¿Eliminar páginas reduce el tamaño?",
      a: "Sí, sobre todo si las páginas eliminadas son escaneos o imágenes. Quitar lo sobrante con la herramienta Extraer páginas de PDF puede reducir el tamaño sin afectar a la calidad de lo que queda.",
    },
    {
      q: "¿Cómo evito que los escaneos pesen tanto?",
      a: "Escanea a 200-300 PPP en lugar de 600 para los documentos que vayas a compartir, y los archivos empiezan mucho más pequeños. La app PDF Editor te deja controlar la calidad del escaneo desde el principio.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduce archivos cargados de imágenes", path: "/compress-pdf" },
    { label: "Extraer páginas de PDF — quita lo que sobra", path: "/extract-pdf-pages" },
    { label: "Cómo comprimir un PDF escaneado", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Mejores ajustes de compresión de PDF", path: "/guides/best-pdf-compression-settings" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
