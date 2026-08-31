import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-extract-pages-from-pdf",
  h1: "Cómo extraer páginas de un PDF (gratis, sin subir nada)",
  description:
    "Saca páginas o rangos concretos de un PDF a un archivo nuevo, desde tu navegador. Perfecto para enviar solo las páginas que alguien necesita.",
  updated: "2026-05-23",
  intro: [
    "Extraer páginas es la respuesta a una necesidad muy concreta: alguien quiere parte de un documento, no el documento entero. El banco necesita la página 3, el formulario necesita la página de firma, la revisión de una propuesta solo afecta a la sección de precios. Reenviar el archivo completo de 40 páginas y decir «mira la página 12» es descuidado y, para cualquier cosa sensible, poco cuidadoso.",
    "Esta guía usa la herramienta gratuita Extraer páginas de PDF, que te deja elegir las páginas que quieres y guardarlas como un PDF completamente nuevo — todo en tu navegador, sin subir nada. El original queda intacto; solo obtienes un archivo limpio con únicamente lo que elegiste.",
    "Es una de las operaciones de PDF más útiles precisamente porque hace doble función como herramienta de privacidad: envías exactamente las páginas necesarias y nada más.",
  ],
  steps: [
    {
      title: "Abre la herramienta Extraer páginas de PDF",
      body: "Ve a la herramienta Extraer páginas de PDF en tu navegador. Funciona por completo en tu dispositivo — sin subida, sin cuenta.",
    },
    {
      title: "Añade tu PDF",
      body: "Arrastra el archivo a la zona de soltar o haz clic para seleccionarlo. La herramienta carga el número de páginas para que puedas elegir con precisión.",
    },
    {
      title: "Elige las páginas que quieres",
      body: "Introduce páginas individuales o rangos — por ejemplo 3, luego 8-10. Solo las páginas que listes acabarán en el archivo nuevo.",
    },
    {
      title: "Crea el nuevo PDF",
      body: "Ejecuta la extracción. La herramienta construye un PDF nuevo que contiene solo tus páginas seleccionadas, en el orden que elegiste.",
    },
    {
      title: "Descarga y ponle nombre",
      body: "Guarda el archivo extraído con un nombre que diga qué es — «Pagina-de-firma.pdf» o «Seccion-de-precios.pdf».",
    },
    {
      title: "Confirma antes de enviar",
      body: "Abre el nuevo PDF y comprueba que solo contiene las páginas previstas. Este es el momento de detectar un número de página equivocado antes de que llegue a alguien.",
    },
  ],
  tips: [
    "Extrae cuando quieras reunir unas pocas páginas en un archivo nuevo; divide cuando quieras partir un documento en varios archivos. Ajusta la herramienta al objetivo.",
    "Extraer es una pequeña victoria de privacidad: enviar solo las páginas relevantes evita exponer por accidente el resto del documento.",
    "Comprueba los números de página contra el propio documento, no contra el índice del visor de PDF — las portadas y las hojas insertadas pueden desplazar el recuento en uno.",
    "El original nunca se modifica, así que puedes extraer distintos conjuntos de páginas del mismo archivo tantas veces como necesites.",
    "Para quitar páginas y conservar el resto, extrae las que quieras conservar — es la forma más limpia de eliminar unas pocas páginas no deseadas.",
  ],
  mobileNote:
    "¿Necesitas devolver solo la página firmada desde el móvil? La app PDF Editor extrae y comparte páginas concretas en unos pocos toques, sin conexión — así la página correcta sale sin reenviar todo el archivo confidencial.",
  faq: [
    {
      q: "¿En qué se diferencia extraer de dividir?",
      a: "Extraer reúne las páginas que elijas en un único archivo nuevo. Dividir descompone un PDF en varios archivos independientes. Usa extraer para reunir páginas concretas, dividir para partir un documento.",
    },
    {
      q: "¿Puedo elegir páginas no consecutivas?",
      a: "Sí. Lista páginas individuales y rangos juntos, como 1, 4, 9-12, y el nuevo PDF contendrá exactamente esas páginas en ese orden.",
    },
    {
      q: "¿Extraer cambia el original?",
      a: "No. El PDF de origen queda intacto; la herramienta crea un archivo nuevo. Puedes hacer tantas extracciones como quieras a partir del mismo original.",
    },
    {
      q: "¿Se sube mi archivo?",
      a: "No. La extracción se ejecuta en tu navegador, en tu dispositivo, así que los documentos confidenciales se mantienen privados.",
    },
    {
      q: "¿Cómo quito páginas en lugar de conservarlas?",
      a: "Extrae las páginas que quieres conservar — las no deseadas simplemente no se incluyen. Es la ruta más sencilla para eliminar unas pocas páginas de un PDF.",
    },
  ],
  related: [
    { label: "Extraer páginas de PDF — saca páginas en tu navegador", path: "/extract-pdf-pages" },
    { label: "Dividir PDF — reparte un archivo por rango", path: "/split-pdf" },
    { label: "Cómo dividir un PDF en varios archivos", path: "/guides/how-to-split-pdf-files" },
    { label: "Cómo eliminar páginas no deseadas de un PDF", path: "/guides/how-to-remove-unwanted-pages-from-pdf" },
  ],
  parentHub: { label: "Extraer páginas de PDF", path: "/extract-pdf-pages" },
};

export default content;
