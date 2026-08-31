import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-split-pdf-files",
  h1: "Cómo dividir un PDF en varios archivos (gratis)",
  description:
    "Parte un PDF grande en archivos más pequeños por rango de páginas, en tu navegador. Cuándo dividir en vez de extraer y cómo mantener a salvo el original.",
  updated: "2026-05-23",
  intro: [
    "Dividir un PDF es lo que haces cuando un archivo intenta ser varios documentos a la vez: un paquete escaneado que en realidad es un contrato más sus anexos, un informe de 200 páginas del que solo necesitas un capítulo, o un lote unido que tiene que volver a salir como archivos independientes. En lugar de enviar todo el conjunto y pedir a la gente que busque su parte, lo divides.",
    "Esta guía usa la herramienta gratuita Dividir PDF, que reparte un PDF por rango de páginas directamente en tu navegador — no se sube nada. Es una forma rápida y privada de convertir un archivo en las piezas más pequeñas que realmente necesitas enviar o guardar.",
    "También aclararemos un punto de confusión habitual: la diferencia entre dividir un PDF y extraer páginas, porque la herramienta correcta depende de lo que quieras obtener al final.",
  ],
  steps: [
    {
      title: "Abre la herramienta Dividir PDF",
      body: "Ve a la herramienta Dividir PDF en tu navegador. Funciona en tu dispositivo — sin subida, sin cuenta.",
    },
    {
      title: "Añade tu PDF",
      body: "Arrastra el archivo a la zona de soltar o haz clic para elegirlo. La herramienta lee el número de páginas para que puedas dividir por rango.",
    },
    {
      title: "Decide dónde se rompe el documento",
      body: "Mira los números de página e identifica los límites — por ejemplo, las páginas 1-10 son el contrato, las 11-24 el anexo. Planifica los rangos antes de dividir.",
    },
    {
      title: "Introduce el rango de páginas que quieres separar",
      body: "Especifica el rango que quieres como archivo independiente. Repite para cada sección que necesites separar.",
    },
    {
      title: "Descarga cada pieza",
      body: "La herramienta produce un PDF nuevo para el rango elegido. Guarda cada uno con un nombre claro y específico de su sección.",
    },
    {
      title: "Conserva el original intacto",
      body: "Dividir no modifica la fuente — tu PDF original queda entero en tu dispositivo. Consérvalo hasta confirmar que cada división ha salido bien.",
    },
  ],
  tips: [
    "Divide cuando quieras varios documentos independientes; extrae cuando quieras sacar unas pocas páginas a un archivo nuevo. Suenan parecido pero producen resultados distintos.",
    "Anota los límites de página antes de empezar. Dividir un informe largo es mucho más rápido cuando ya sabes que la metodología empieza en la página 31.",
    "Nombra cada archivo dividido por su contenido, no por su rango — «Anexo-B.pdf» es más útil para un destinatario que «paginas-25-40.pdf».",
    "Dividir primero un PDF enorme también acelera otras operaciones: comprimir o convertir una sección de 15 páginas gana a lidiar con el archivo completo de 300.",
    "Los PDF protegidos con contraseña no se pueden procesar en el navegador. Quita la contraseña primero, o usa la app PDF Editor, que admite archivos protegidos.",
  ],
  mobileNote:
    "En el móvil, dividir suele ser cuestión de enviar el fragmento correcto a la persona correcta desde donde estés. La app PDF Editor divide, extrae y comparte en unos pocos toques, y funciona sin conexión — útil cuando estás en una ubicación y necesitas devolver solo las páginas firmadas.",
  faq: [
    {
      q: "¿Cuál es la diferencia entre dividir y extraer?",
      a: "Dividir descompone un PDF en varios archivos independientes por rango. Extraer saca las páginas seleccionadas a un único archivo nuevo. Usa dividir para partir un documento, extraer para reunir páginas concretas.",
    },
    {
      q: "¿Dividir cambia mi archivo original?",
      a: "No. El PDF de origen queda intacto — la herramienta crea archivos nuevos para los rangos que elijas. Conserva el original hasta comprobar los resultados.",
    },
    {
      q: "¿Se sube mi PDF?",
      a: "No. Dividir se ejecuta en tu navegador, en tu dispositivo, así que el archivo nunca sale de él — seguro para contratos e informes confidenciales.",
    },
    {
      q: "¿En cuántas piezas puedo dividir un PDF?",
      a: "Tantas como necesites — repite la selección de rango para cada sección. Los PDF muy grandes pueden forzar la memoria del navegador, en cuyo caso la app PDF Editor es la mejor opción.",
    },
    {
      q: "¿Puedo dividir un PDF protegido con contraseña?",
      a: "No en el navegador. Quita la contraseña primero, o usa la app móvil PDF Editor, que puede abrir archivos protegidos.",
    },
  ],
  related: [
    { label: "Dividir PDF — reparte un archivo en tu navegador", path: "/split-pdf" },
    { label: "Extraer páginas de PDF — saca páginas a un archivo nuevo", path: "/extract-pdf-pages" },
    { label: "Cómo extraer páginas de un PDF", path: "/guides/how-to-extract-pages-from-pdf" },
    { label: "Cómo unir archivos PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Dividir PDF", path: "/split-pdf" },
};

export default content;
