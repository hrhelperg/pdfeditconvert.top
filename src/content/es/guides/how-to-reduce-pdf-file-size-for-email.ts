import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-file-size-for-email",
  h1: "Cómo reducir el tamaño de un PDF para el correo",
  description:
    "Baja de los límites de adjuntos de Gmail y Outlook. Los límites reales, por qué los escaneos los superan y cómo reducir un archivo para que se pueda enviar.",
  updated: "2026-05-23",
  intro: [
    "Los límites de adjuntos de correo apenas se han movido en años, pero los documentos que adjuntamos siguen pesando más. Gmail te detiene en 25 MB. Outlook traza la línea alrededor de los 20 MB. El servidor del destinatario puede tener un límite aún más bajo. Así que adjuntas un contrato escaneado o un informe lleno de fotos, le das a enviar, y rebota — o peor, falla en silencio.",
    "Esta guía trata de conseguir un PDF lo bastante pequeño para enviarlo de verdad. Usa la herramienta gratuita Comprimir PDF, que funciona en tu navegador sin subir nada, y cubre las decisiones prácticas: qué nivel de compresión, cuándo comprimir frente a dividir, y qué hacer cuando ni siquiera la compresión es suficiente.",
    "La buena noticia es que los archivos que más probablemente rebotan — escaneos y PDF cargados de imágenes — son exactamente los que más se comprimen.",
  ],
  steps: [
    {
      title: "Comprueba cuánto te pasas del límite",
      body: "Anota el tamaño del archivo y tu objetivo. Gmail tiene un límite de 25 MB, Outlook alrededor de 20 MB, y algunos servidores corporativos menos. Conocer la diferencia te dice cuán agresivo tienes que ser.",
    },
    {
      title: "Abre la herramienta Comprimir PDF",
      body: "Ve a la herramienta Comprimir PDF en tu navegador. Procesa el archivo en tu dispositivo — no se sube nada, lo cual importa para documentos que vas a enviar por correo.",
    },
    {
      title: "Añade el PDF y elige un nivel",
      body: "Empieza con Recomendado. Equilibra tamaño y calidad y basta para la mayoría de archivos. Baja a Fuerte solo si sigues por encima del límite.",
    },
    {
      title: "Comprime y lee el nuevo tamaño",
      body: "Ejecútalo y comprueba las cifras de antes y después. Los documentos escaneados a menudo caen bien por debajo de 25 MB en una sola pasada.",
    },
    {
      title: "Si sigue siendo demasiado grande, divídelo",
      body: "Cuando un único documento no puede reducirse lo suficiente, usa la herramienta Dividir PDF para enviarlo como dos o tres archivos más pequeños — a menudo más práctico que aplastar aún más la calidad.",
    },
    {
      title: "Adjunta y envía",
      body: "Adjunta el archivo comprimido (o dividido). Ábrelo una vez primero para confirmar que se sigue leyendo con limpieza al nivel que elegiste.",
    },
  ],
  tips: [
    "El nivel Recomendado supera la mayoría de límites de correo con calidad de sobra. Reserva Fuerte para archivos que sigan por encima del límite tras la primera pasada.",
    "Los escaneos y los PDF cargados de fotos se reducen más; un documento de solo texto ya es pequeño de por sí, así que si es enorme, busca imágenes o fuentes incrustadas como causa.",
    "Si la compresión sola no basta, dividir el documento gana a degradarlo hasta hacerlo ilegible — dos mitades legibles son mejor que un todo tosco.",
    "La compresión rasteriza las páginas, así que la copia enviada no tendrá texto seleccionable. Si el destinatario necesita copiar el texto, envía el original por otro medio y una vista previa comprimida por correo.",
    "Cuando incluso un archivo comprimido es demasiado grande, un enlace compartido en la nube es la respuesta honesta — consulta la guía sobre enviar archivos PDF grandes.",
  ],
  mobileNote:
    "La mayoría de adjuntos que rebotan ocurren cuando envías un documento desde el móvil entre otras cosas. La app PDF Editor comprime sin conexión y comparte directamente con tu app de correo, así que un escaneo demasiado grande se convierte en un archivo que se puede enviar sin salir de tu bandeja de entrada.",
  faq: [
    {
      q: "¿Cuál es el límite real de adjuntos de correo?",
      a: "Gmail tiene un límite de 25 MB, Outlook alrededor de 20 MB, y algunos servidores de correo de empresa aún menos. Apunta a quedar cómodamente por debajo del límite del destinatario, no solo del tuyo.",
    },
    {
      q: "¿Por qué mi PDF pesa demasiado para el correo en primer lugar?",
      a: "Casi siempre por páginas escaneadas o fotos incrustadas. Cada página escaneada es en esencia una imagen de alta resolución, y un puñado de ellas supera rápidamente los 25 MB.",
    },
    {
      q: "¿Qué nivel de compresión debería usar para el correo?",
      a: "Empieza con Recomendado — supera la mayoría de límites manteniendo el documento legible. Pasa a Fuerte solo si sigues por encima tras la primera pasada.",
    },
    {
      q: "¿Se sube mi archivo cuando lo comprimo?",
      a: "No. La herramienta Comprimir PDF se ejecuta en tu navegador, en tu dispositivo, así que el documento se mantiene privado incluso mientras lo preparas para enviar.",
    },
    {
      q: "¿Y si la compresión sigue sin ser suficiente?",
      a: "Divide el PDF en archivos más pequeños, o comparte un enlace en la nube en lugar de un adjunto. Ambas opciones ganan a comprimir un documento hasta hacerlo ilegible.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduce para el correo", path: "/compress-pdf" },
    { label: "Cómo enviar archivos PDF grandes", path: "/guides/how-to-send-large-pdf-files" },
    { label: "Cómo comprimir un PDF online sin subirlo", path: "/guides/how-to-compress-pdf-online" },
    { label: "Cómo dividir un PDF en varios archivos", path: "/guides/how-to-split-pdf-files" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
