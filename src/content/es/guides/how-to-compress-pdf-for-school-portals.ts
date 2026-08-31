import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-for-school-portals",
  h1: "Cómo comprimir un PDF para un portal escolar (límites estrictos)",
  description:
    "Los portales de subida de colegios y universidades limitan los PDF más que el correo. Cómo comprimir un trabajo para que quepa sin destrozar la legibilidad que revisa el profesor.",
  updated: "2026-05-29",
  intro: [
    "Los portales escolares están entre los sistemas de subida de PDF más estrictos del uso cotidiano. Donde el correo puede tolerar 25 MB, un portal de clase suele limitar a 5 MB — y algunos sistemas de primaria y secundaria, incluso a 2 MB. Añade unas pocas páginas escaneadas de trabajo manuscrito a un trabajo escrito a máquina y de repente te pasas del límite, dos minutos antes de la hora de entrega.",
    "Comprimir es la solución correcta, pero comprimir con demasiada fuerza hace el trabajo más difícil de leer, que es justo lo que te resta puntos. El truco está en comprimir con criterio: con fuerza en las partes escaneadas, que son las que más pesan; con suavidad en las partes escritas a máquina, que apenas comprimen de todos modos; y solo lo justo para bajar del límite del portal.",
    "Esta guía recorre el proceso realista, incluyendo qué comprimir, qué dejar tal cual, y qué hacer cuando ni siquiera la compresión máxima consigue que el archivo quepa.",
  ],
  steps: [
    {
      title: "Comprueba primero el límite indicado por el portal",
      body: "La mayoría de los portales indican el tope; muchos estudiantes nunca lo miran. Conocer la cifra cambia la estrategia: un límite de 2 MB aprieta mucho, uno de 25 MB da margen. Apunta al 80 % del límite para tener un colchón.",
    },
    {
      title: "Identifica qué está haciendo grande el archivo",
      body: "Las páginas manuscritas escaneadas son las culpables habituales. Cada página escaneada es una imagen a resolución completa. Un trabajo escrito a máquina de 20 páginas pesa poco; el mismo trabajo con cinco páginas escaneadas puede triplicarse.",
    },
    {
      title: "Comprime con Comprimir PDF",
      body: "Comprimir PDF en tu navegador reduce el archivo en tu dispositivo. Prueba primero con compresión fuerte — los compresores actuales dejan el trabajo manuscrito legible incluso en los ajustes más agresivos.",
    },
    {
      title: "Comprueba la legibilidad después de comprimir",
      body: "Abre el archivo comprimido y haz zoom en la zona que va a leer el profesor. Si el texto o los diagramas se ven demasiado difusos, vuelve a una compresión media y prueba otra vez. La legibilidad gana siempre al tamaño.",
    },
    {
      title: "Si sigues por encima, elimina páginas que no necesitas",
      body: "Extraer páginas de PDF conserva solo las páginas que hacen falta. Una contraportada en blanco, un ejercicio duplicado, una página de relleno: elimínalas y el tamaño baja con ellas.",
    },
    {
      title: "Si sigue sin caber, divídelo en varias subidas",
      body: "Algunos portales admiten varios archivos. Dividir PDF o Extraer páginas de PDF produce partes por debajo del límite. Nómbralas con claridad (Tarea3_Parte1.pdf, Tarea3_Parte2.pdf).",
    },
  ],
  tips: [
    "Escanea en escala de grises, no en color, antes de comprimir siquiera. Esa decisión previa ahorra más tamaño que cualquier compresión posterior.",
    "Volver a escanear a una resolución más baja (200 en vez de 600 ppp) reduce el archivo entre 5 y 10 veces sin cambiar la legibilidad del trabajo manuscrito.",
    "No comprimas dos veces. La compresión repetida acumula pérdida de calidad. Conserva un original sin comprimir y comprime solo para la entrega.",
    "Evita meter un PDF en un ZIP para «hacerlo más pequeño». La mayoría de los portales rechazan directamente los ZIP; si los aceptan, suelen descomprimirlos y aplicar el mismo límite efectivo.",
    "Si el portal rechaza el archivo comprimido por considerarlo no válido, reexpórtalo primero con la opción de imprimir a PDF — eso lo reduce a un PDF básico que cualquier portal acepta.",
  ],
  mobileNote:
    "Subir trabajos al portal escolar desde el móvil es ya algo habitual, y el móvil suele ser también el origen de las partes escaneadas del trabajo. La app PDF Editor comprime los escaneos en el propio dispositivo antes de la subida, así que el archivo ya está listo para el portal antes de pasar por una conexión móvil inestable.",
  faq: [
    {
      q: "¿Qué tamaño aceptan la mayoría de los portales escolares?",
      a: "Los límites habituales son 2 MB (algunos de primaria y secundaria), 5 MB (muchos portales de instituto y universidad) y entre 10 y 25 MB (portales universitarios más flexibles). Comprueba tu clase concreta.",
    },
    {
      q: "¿La compresión agresiva vuelve el texto ilegible?",
      a: "A veces. Una compresión fuerte sobre escaneos que ya tienen poca resolución puede pixelar los caracteres. Prueba primero con compresión fuerte; baja a media si el texto se ve borroso.",
    },
    {
      q: "¿Debería eliminar las páginas en blanco?",
      a: "Sí. Extraer páginas de PDF o Dividir PDF las quita. Las páginas en blanco ocupan espacio real y no forman parte del trabajo.",
    },
    {
      q: "¿Puedo entregar un ZIP en su lugar?",
      a: "La mayoría de los portales escolares no aceptan ZIP. Los pocos que lo hacen igualmente aplican límites de tamaño y a veces tratan el ZIP como un solo archivo con el mismo tope.",
    },
    {
      q: "¿Y si mi archivo comprimido sigue pesando demasiado?",
      a: "Elimina páginas que no necesites, vuelve a escanear en escala de grises o blanco y negro a menor resolución, o divide el trabajo en varias subidas si el portal lo permite. Algunos trabajos necesitan de verdad ser más pequeños.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduce el tamaño en tu navegador", path: "/compress-pdf" },
    { label: "Dividir PDF — separa en partes aceptadas", path: "/split-pdf" },
    { label: "Cómo entregar un trabajo en PDF", path: "/guides/how-to-submit-homework-as-pdf" },
    { label: "Cómo reducir el tamaño de un PDF antes de subirlo", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "Comprimir PDF — reduce el tamaño en tu navegador", path: "/compress-pdf" },
};

export default content;
