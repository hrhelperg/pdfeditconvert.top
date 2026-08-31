import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blank",
  h1: "¿Por qué mi PDF está en blanco? Causas reales y cómo recuperarlo",
  description:
    "Cuando un PDF se abre con páginas en blanco, el contenido suele seguir ahí, solo que oculto por un fallo de renderizado, una fuente que falta o un error de escaneo. Cómo saber qué pasó y recuperar el documento.",
  updated: "2026-05-29",
  intro: [
    "Abrir un PDF y encontrarte una página vacía es inquietante. Esperas texto, gráficos, contratos firmados — y no obtienes nada. La buena noticia es que el contenido casi siempre sigue en el archivo. La mala es que la causa puede ser una de varias cosas, y hay que identificar cuál antes de poder arreglarla.",
    "Los PDF en blanco suelen venir de un fallo de renderizado (tu lector se atascó con algo concreto), un fallo de fuente (el texto está técnicamente ahí pero apunta a un glifo que nadie puede dibujar), un fallo de escaneo o captura (el origen produjo páginas vacías), o un problema de contenido en capas u oculto. En casos raros, el archivo de verdad está vacío.",
    "Esta guía repasa los diagnósticos en el orden en que resulta más barato comprobarlos, y después te lleva a la solución correcta. La mayoría de los PDF en blanco vuelven a ser legibles con una reexportación o un cambio de lector.",
  ],
  steps: [
    {
      title: "Abre primero el archivo en un lector distinto",
      body: "Prueba el visor integrado de Chrome, Vista previa en macOS o un lector del móvil. Si alguno de ellos muestra el contenido, has aislado el problema a tu lector original — y el archivo está bien.",
    },
    {
      title: "Compara el tamaño del archivo con lo esperado",
      body: "Un PDF genuinamente vacío es diminuto — unos pocos KB. Un PDF que parece en blanco pero pesa varios megabytes casi seguro tiene contenido dentro que simplemente no se está renderizando para ti.",
    },
    {
      title: "Busca marcas de seguridad o de permisos",
      body: "Algunos PDF se exportan con una «vista protegida» o una marca de firma que hace que ciertos lectores oculten el contenido hasta que se concede permiso. Guardar una copia sin protección desde un lector permisivo suele solucionarlo.",
    },
    {
      title: "Vuelve a exportar el archivo con imprimir a PDF",
      body: "Abre el archivo en cualquier lector que muestre el contenido y usa «Imprimir → Guardar como PDF» (o Microsoft Print to PDF en Windows). Esto reconstruye el renderizado de la página y arregla la mayoría de los blancos relacionados con fuentes.",
    },
    {
      title: "Si es un escaneo, vuelve a escanear con otro ajuste",
      body: "Las páginas escaneadas en blanco suelen venir de un alimentador que cogió dos hojas a la vez, un contraste demasiado bajo, o un escaneo con el móvil enfocado al plano equivocado. El flujo de Escanear a PDF con detección de bordes evita la mayoría de esto.",
    },
    {
      title: "Extrae páginas individuales como imágenes para confirmarlo",
      body: "PDF a imágenes puede exportar cada página como PNG en tu navegador. Si los PNG exportados muestran contenido, el problema es tu lector. Si de verdad están en blanco, la página del archivo está en blanco.",
    },
  ],
  tips: [
    "Un PDF en blanco que pesa varios megabytes tiene contenido en algún sitio — sigue probando lectores y reexportaciones antes de dar por hecho que está perdido.",
    "El texto gris claro sobre blanco puede renderizarse como «en blanco» en pantallas de móvil bajo luz solar directa. Sube el brillo o invierte los colores antes de dar por hecho que la página está vacía.",
    "Los archivos exportados desde apps con restricciones de accesibilidad a veces incrustan todo en una única capa que los lectores más nuevos ignoran. Imprimir a PDF la aplana.",
    "Si te devolvieron un contrato con páginas de firma en blanco, quien firmó probablemente usó una herramienta de firma que sobrescribió los campos reales con anotaciones vacías — pide una copia recién firmada por otra persona.",
    "No sigas editando o uniendo un archivo que se renderiza en blanco hasta que sepas por qué. Construir sobre un renderizado roto produce un archivo todavía más roto.",
  ],
  mobileNote:
    "Los lectores del móvil son a veces más estrictos que los de escritorio. La app PDF Editor usa un renderizador permisivo que suele mostrar el contenido incluso cuando otros lectores móviles se quedan en blanco, y te deja guardar el documento de nuevo como una copia más limpia.",
  faq: [
    {
      q: "¿Un PDF en blanco está perdido para siempre?",
      a: "Rara vez. Si el tamaño del archivo supera unos pocos KB, el contenido casi seguro sigue ahí — prueba otro lector, una reexportación con imprimir a PDF, o una extracción de imágenes para confirmarlo.",
    },
    {
      q: "¿Por qué mi escáner produce a veces PDF en blanco?",
      a: "Lo más habitual es que el alimentador cogiera dos páginas pegadas y solo registrara la segunda, o que el contraste estuviera demasiado bajo. Volver a escanear con el contraste automático suele arreglarlo.",
    },
    {
      q: "¿Podría ser un problema de fuente?",
      a: "Sí. Cuando un PDF referencia una fuente que no está incrustada y tu lector no puede sustituirla, el texto desaparece aunque siga en el archivo. Reexportar incrusta una fuente utilizable.",
    },
    {
      q: "¿Comprimir o unir un PDF en blanco perderá el contenido?",
      a: "Puede pasar — ambas operaciones trabajan sobre lo que tu lector puede ver. No proceses un archivo que se renderiza en blanco hasta que puedas confirmar que el contenido de verdad está ahí.",
    },
    {
      q: "¿Por qué se ve en blanco en Acrobat pero bien en Chrome?",
      a: "Un análisis distinto. El lector de Chrome suele ser el más permisivo; las versiones antiguas de Acrobat son más estrictas. El archivo no está roto — tu lector sí.",
    },
  ],
  related: [
    { label: "PDF a imágenes — comprueba que las páginas no están realmente vacías", path: "/pdf-to-images" },
    { label: "Escanear a PDF — reescaneos limpios sin páginas en blanco", path: "/scan-to-pdf" },
    { label: "¿Por qué no se abre mi PDF?", path: "/guides/why-wont-my-pdf-open" },
    { label: "Cómo reparar un PDF dañado", path: "/guides/how-to-fix-a-corrupted-pdf" },
  ],
  parentHub: { label: "Herramientas PDF — gratis, en el navegador", path: "/pdf-tools" },
};

export default content;
