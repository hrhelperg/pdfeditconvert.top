import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-scanned-pdf",
  h1: "Cómo comprimir un PDF escaneado (ahorro enorme)",
  description:
    "Los PDF escaneados son los más fáciles de reducir y los que más pesan. Cómo comprimirlos de forma drástica y qué pasa con el texto buscable.",
  updated: "2026-05-23",
  intro: [
    "Los PDF escaneados son los pesos pesados del mundo documental. Cada página es una imagen a resolución completa, así que un contrato escaneado corto puede pesar más que un informe de texto de cien páginas. La otra cara es la buena noticia: como los escaneos son casi todo datos de imagen, se comprimen de forma más drástica que cualquier otro tipo de PDF — a menudo un 70 % o más.",
    "Esta guía se centra específicamente en comprimir escaneos con la herramienta gratuita Comprimir PDF, que funciona en tu navegador sin subir nada. Los escaneos son precisamente el caso donde la compresión en el navegador brilla, y donde el ahorro de tamaño más merece la pena.",
    "También veremos lo único que hay que vigilar con los documentos escaneados — el texto buscable — para que no pierdas por accidente una capa de texto que te costó crear.",
  ],
  steps: [
    {
      title: "Abre la herramienta Comprimir PDF",
      body: "Ve a la herramienta Comprimir PDF en tu navegador. Procesa el archivo en tu dispositivo, así que incluso un contrato escaneado se mantiene privado.",
    },
    {
      title: "Añade tu PDF escaneado",
      body: "Arrastra el escaneo a la zona de soltar o haz clic para elegirlo. La herramienta lo lee en local — no se sube nada.",
    },
    {
      title: "Elige un nivel — aquí puedes ir fuerte",
      body: "Los escaneos toleran bien la compresión fuerte porque son imágenes, no texto vectorial nítido. Recomendado suele bastar; Fuerte puede seguir viéndose perfectamente legible para documentos del día a día.",
    },
    {
      title: "Comprime y comprueba la legibilidad",
      body: "Ejecútalo y abre el resultado. La prueba clave para un escaneo es la legibilidad — ¿puedes leer el texto cómodamente? Si sí a un nivel fuerte, quédate con el ahorro mayor.",
    },
    {
      title: "Cuidado con la capa de texto buscable",
      body: "Si tu escaneo pasó por OCR para hacerlo buscable, comprimirlo en el navegador vuelve a renderizar las páginas como imágenes y elimina esa capa. Conserva el original buscable si lo necesitas.",
    },
    {
      title: "Guarda la copia más pequeña",
      body: "Guarda con un nombre nuevo. Los archivos escaneados suelen caer bien por debajo de los límites de correo y de subida en una sola pasada.",
    },
  ],
  tips: [
    "Los escaneos se comprimen mejor que cualquier otro PDF — si un documento es enorme porque está escaneado, estás de suerte en cuanto al tamaño.",
    "Como los escaneos son imágenes, normalmente puedes empujar a un nivel más fuerte del que te atreverías con un documento diseñado y aun así mantenerlo legible.",
    "Si tu escaneo tenía una capa de texto buscable por OCR, la compresión en el navegador la elimina. Vuelve a ejecutar el reconocimiento de texto después, o conserva el original buscable por separado.",
    "Escanear a una resolución más baja (200-300 PPP) en el origen produce archivos más pequeños desde el principio, reduciendo lo mucho que tienes que comprimir después.",
    "Los escaneos en color pesan más que los de escala de grises. Si el color no aporta nada al documento, escanear en escala de grises lo reduce incluso antes de empezar a comprimir.",
  ],
  mobileNote:
    "Los escaneos suelen empezar en un móvil, y la app PDF Editor mantiene todo el ciclo en el dispositivo: escanea con una calidad sensata, comprime sin conexión, y — a diferencia de las herramientas de navegador — ejecuta reconocimiento de texto para que el archivo más pequeño siga siendo buscable. Sin subir nada en ningún paso.",
  faq: [
    {
      q: "¿Cuánto puede reducirse un PDF escaneado?",
      a: "A menudo un 70 % o más. Los escaneos son casi todo datos de imagen, que es exactamente lo que ataca la compresión, así que se reducen mucho más que los PDF basados en texto.",
    },
    {
      q: "¿Seguirá siendo legible el escaneo tras una compresión fuerte?",
      a: "Normalmente sí para documentos del día a día — los escaneos toleran la compresión fuerte porque son imágenes en lugar de texto vectorial nítido. Abre siempre el resultado y confirma la legibilidad.",
    },
    {
      q: "¿Comprimir elimina el texto buscable de un escaneo?",
      a: "Si el escaneo pasó por OCR para hacerlo buscable, la compresión en el navegador vuelve a renderizar las páginas como imágenes y elimina esa capa. Conserva el original buscable, o vuelve a ejecutar el reconocimiento de texto después.",
    },
    {
      q: "¿Se sube mi documento escaneado?",
      a: "No. La herramienta Comprimir PDF se ejecuta en tu navegador, en tu dispositivo, así que los escaneos sensibles como contratos y extractos se mantienen privados.",
    },
    {
      q: "¿Puedo comprimir un escaneo protegido con contraseña?",
      a: "No en el navegador. Quita la contraseña primero, o usa la app móvil PDF Editor, que comprime archivos protegidos sin conexión.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduce escaneos en tu navegador", path: "/compress-pdf" },
    { label: "Cómo convertir documentos escaneados a PDF", path: "/guides/how-to-convert-scanned-documents-to-pdf" },
    { label: "¿Por qué mi PDF pesa tanto?", path: "/guides/why-is-my-pdf-so-large" },
    { label: "Cómo escanear un documento a PDF con el móvil", path: "/guides/how-to-scan-documents-to-pdf" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
