import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";

/**
 * Spanish route manifest for the guide library.
 *
 * Slugs follow Spanish search phrasing rather than a literal rendering of
 * the English slug, and always open questions with the inverted mark:
 * "como-comprimir-un-pdf", "por-que-mi-pdf-pesa-tanto". Titles carry the
 * question or task the way a Spanish reader would type it into Google, with
 * proper "¿ … ?" punctuation where the title is phrased as a question.
 * Terminology policy: docs/localization/es-terminology.md.
 */
export const ES_GUIDE_ROUTES: readonly LocaleRouteEntry[] = [
  {
    id: "guides/how-to-edit-pdf-on-iphone",
    slug: "guias/como-editar-un-pdf-en-iphone",
    title: "Cómo editar un PDF en iPhone (guía 2026)",
    description:
      "Corrige el texto, añade imágenes y reordena las páginas de un PDF directamente en el iPhone. Guía paso a paso con la app PDF Editor.",
  },
  {
    id: "guides/how-to-edit-pdf-on-android",
    slug: "guias/como-editar-un-pdf-en-android",
    title: "Cómo editar un PDF en Android (guía 2026)",
    description:
      "Edita tus PDF en Android: cambia el texto, inserta páginas y firma documentos. Instrucciones claras, paso a paso, con la app PDF Editor.",
  },
  {
    id: "guides/how-to-compress-pdf",
    slug: "guias/como-comprimir-un-pdf",
    title: "Cómo comprimir un PDF sin perder calidad",
    description:
      "Reduce el tamaño de un PDF para el correo o para subirlo a un portal, sin perder legibilidad. Tutorial pensado para el móvil con la app PDF Editor.",
  },
  {
    id: "guides/how-to-merge-pdf-files",
    slug: "guias/como-unir-archivos-pdf",
    title: "Cómo unir archivos PDF desde el móvil o el ordenador",
    description:
      "Combina varios PDF en un solo documento. Método paso a paso desde el móvil con la app PDF Editor.",
  },
  {
    id: "guides/how-to-sign-pdf-on-phone",
    slug: "guias/como-firmar-un-pdf-desde-el-movil",
    title: "Cómo firmar un PDF desde el móvil",
    description:
      "Añade una firma electrónica legal a un PDF desde el iPhone o Android. Guía práctica con la app PDF Editor.",
  },
  {
    id: "guides/how-to-scan-documents-to-pdf",
    slug: "guias/como-escanear-un-documento-a-pdf",
    title: "Cómo escanear un documento a PDF con el móvil",
    description:
      "Usa la cámara del móvil para escanear un documento de varias páginas en un PDF nítido. Detección de bordes y OCR explicados.",
  },
  {
    id: "guides/best-pdf-app-for-students",
    slug: "guias/mejor-app-de-pdf-para-estudiantes",
    title: "Cuál es la mejor app de PDF para estudiantes (2026)",
    description:
      "Lo que un estudiante necesita de verdad de una app de PDF: apuntes, subrayado, firma y conversiones gratuitas. Criterios de evaluación honestos.",
  },
  {
    id: "guides/best-pdf-app-for-business",
    slug: "guias/mejor-app-de-pdf-para-empresas",
    title: "Cuál es la mejor app de PDF para empresas (2026)",
    description:
      "Lo que un equipo pequeño debe exigir de una app de PDF: firma, contratos, seguridad y trabajo en equipo desde el móvil.",
  },
  {
    id: "guides/pdf-vs-docx",
    slug: "guias/pdf-o-docx",
    title: "PDF o DOCX — ¿qué formato usar?",
    description:
      "Cuándo elegir el PDF en lugar del DOCX, y al revés. Comparación clara de edición, fidelidad, firma y para compartir.",
  },
  {
    id: "guides/how-to-protect-pdf-file",
    slug: "guias/como-proteger-un-pdf-con-contrasena",
    title: "Cómo proteger un PDF con contraseña",
    description:
      "Añade una contraseña y cifrado a un PDF desde el móvil o el ordenador. Guía práctica con la app PDF Editor.",
  },
  {
    id: "guides/how-to-convert-pdf-to-word",
    slug: "guias/como-convertir-un-pdf-a-word",
    title: "Cómo convertir un PDF a Word, gratis y en el navegador",
    description:
      "Recupera el texto de un PDF en un documento Word editable, sin subir nada. Qué se convierte bien, qué hay que retocar y por qué un escaneo no funciona.",
  },
  {
    id: "guides/how-to-convert-word-to-pdf",
    slug: "guias/como-convertir-un-word-a-pdf",
    title: "Cómo convertir un Word a PDF, gratis y sin subir nada",
    description:
      "Convierte un .docx o un .txt en un PDF limpio y listo para compartir en tu navegador. Por qué el PDF es el formato correcto para enviar y qué revisar antes de exportar.",
  },
  {
    id: "guides/how-to-convert-jpg-to-pdf",
    slug: "guias/como-convertir-un-jpg-a-pdf",
    title: "Cómo convertir un JPG a PDF — de imagen a documento",
    description:
      "Reúne una o varias fotos JPG en un solo PDF en tu navegador. Ideal para recibos, DNI y documentos fotografiados, con notas honestas sobre calidad y el HEIC del iPhone.",
  },
  {
    id: "guides/how-to-convert-png-to-pdf",
    slug: "guias/como-convertir-un-png-a-pdf",
    title: "Cómo convertir un PNG a PDF — capturas y gráficos nítidos",
    description:
      "Convierte tus capturas de pantalla, diagramas y gráficos PNG en un solo PDF en tu navegador. Por qué el PNG mantiene el texto nítido y qué pasa con la transparencia.",
  },
  {
    id: "guides/how-to-convert-webp-to-pdf",
    slug: "guias/como-convertir-un-webp-a-pdf",
    title: "Cómo convertir un WebP a PDF — imágenes de la web a un documento",
    description:
      "Convierte imágenes WebP guardadas de la web en un solo PDF en tu navegador. Por qué otras apps las rechazan y cómo la conversión resuelve la compatibilidad.",
  },
  {
    id: "guides/how-to-convert-pdf-to-jpg",
    slug: "guias/como-convertir-un-pdf-a-jpg",
    title: "Cómo convertir un PDF a JPG — exporta las páginas como imágenes",
    description:
      "Exporta las páginas de un PDF como imágenes JPG en tu navegador. Cuándo el JPG gana al PNG, cómo afecta la escala a la calidad y cuándo una imagen supera a un PDF.",
  },
  {
    id: "guides/how-to-convert-pdf-to-png",
    slug: "guias/como-convertir-un-pdf-a-png",
    title: "Cómo convertir un PDF a PNG — páginas nítidas y sin pérdida",
    description:
      "Exporta las páginas de un PDF como imágenes PNG de alta calidad en tu navegador. Por qué el PNG mantiene nítidos el texto y los diagramas, con notas sobre escala y transparencia.",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-iphone",
    slug: "guias/como-convertir-fotos-a-pdf-en-iphone",
    title: "Cómo convertir fotos a PDF en iPhone (y arreglar el HEIC)",
    description:
      "Reúne tus fotos del iPhone en un solo PDF, incluido el formato HEIC que tanto lío causa. La vía del navegador y la vía más rápida desde la app.",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-android",
    slug: "guias/como-convertir-fotos-a-pdf-en-android",
    title: "Cómo convertir fotos a PDF en Android",
    description:
      "Reúne tus fotos de Android en un solo PDF con una herramienta del navegador o con la función integrada de imprimir a PDF. Y el método más rápido desde la app, con escaneo.",
  },
  {
    id: "guides/how-to-convert-scanned-documents-to-pdf",
    slug: "guias/como-convertir-documentos-escaneados-a-pdf",
    title: "Cómo convertir documentos escaneados a PDF",
    description:
      "¿Ya tienes imágenes de un escaneo o fotos de papel? Reúnelas en un PDF en tu navegador, y entiende para qué sirve el OCR para que el texto sea buscable.",
  },
  {
    id: "guides/how-to-split-pdf-files",
    slug: "guias/como-dividir-un-pdf",
    title: "Cómo dividir un PDF en varios archivos (gratis)",
    description:
      "Parte un PDF grande en archivos más pequeños por rango de páginas, en tu navegador. Cuándo dividir en vez de extraer y cómo mantener a salvo el original.",
  },
  {
    id: "guides/how-to-extract-pages-from-pdf",
    slug: "guias/como-extraer-paginas-de-un-pdf",
    title: "Cómo extraer páginas de un PDF (gratis, sin subir nada)",
    description:
      "Saca páginas o rangos concretos de un PDF a un archivo nuevo, desde tu navegador. Perfecto para enviar solo las páginas que alguien necesita.",
  },
  {
    id: "guides/how-to-reorder-pdf-pages",
    slug: "guias/como-reordenar-las-paginas-de-un-pdf",
    title: "Cómo reordenar las páginas de un PDF (gratis, en el navegador)",
    description:
      "Reordena las páginas de un PDF en la secuencia correcta desde tu navegador. Arregla escaneos que salieron al revés o archivos unidos que quedaron desordenados.",
  },
  {
    id: "guides/how-to-rotate-pdf-pages",
    slug: "guias/como-girar-las-paginas-de-un-pdf",
    title: "Cómo girar las páginas de un PDF (gratis, sin subir nada)",
    description:
      "Gira todas las páginas de un PDF o solo algunas, 90, 180 o 270 grados, en tu navegador. Arregla escaneos apaisados y páginas del revés para que el documento se lea bien.",
  },
  {
    id: "guides/how-to-add-watermark-to-pdf",
    slug: "guias/como-anadir-una-marca-de-agua-a-un-pdf",
    title: "Cómo añadir una marca de agua a un PDF (gratis)",
    description:
      "Estampa un texto como BORRADOR o CONFIDENCIAL en todas las páginas de un PDF en tu navegador. Qué protege una marca de agua y qué no, explicado con honestidad.",
  },
  {
    id: "guides/how-to-remove-unwanted-pages-from-pdf",
    slug: "guias/como-eliminar-paginas-no-deseadas-de-un-pdf",
    title: "Cómo eliminar páginas no deseadas de un PDF",
    description:
      "Quita páginas en blanco, portadas o secciones que no interesan de un PDF en tu navegador, quedándote solo con las páginas que quieres. Archivos limpios, proceso privado.",
  },
  {
    id: "guides/how-to-organize-pdf-files",
    slug: "guias/como-organizar-tus-archivos-pdf",
    title: "Cómo organizar tus archivos PDF — un método práctico",
    description:
      "Pon orden en unos PDF desordenados: une los archivos relacionados, reordena páginas, quita lo que sobra y nombra bien los archivos. Un método repetible con herramientas gratuitas del navegador.",
  },
  {
    id: "guides/how-to-prepare-pdf-before-sharing",
    slug: "guias/como-preparar-un-pdf-antes-de-compartirlo",
    title: "Cómo preparar un PDF antes de compartirlo (checklist)",
    description:
      "La revisión previa al envío para un PDF: quita páginas sueltas, corrige la orientación, reduce el tamaño y marca los borradores. Envía un documento limpio, del tamaño correcto y con intención.",
  },
  {
    id: "guides/how-to-fix-sideways-pdf-pages",
    slug: "guias/como-corregir-paginas-de-pdf-torcidas",
    title: "Cómo corregir páginas de un PDF torcidas o al revés",
    description:
      "Endereza de forma permanente las páginas de un PDF que se abren de lado o al revés, en tu navegador. Por qué girar la pantalla no ayuda y qué lo arregla de verdad.",
  },
  {
    id: "guides/how-to-compress-pdf-online",
    slug: "guias/como-comprimir-un-pdf-online-sin-subirlo",
    title: "Cómo comprimir un PDF online sin subirlo a ningún servidor",
    description:
      "Reduce un PDF directamente en tu navegador, sin subir nada ni crear una cuenta. En qué se diferencia la compresión en el dispositivo de las herramientas online típicas, y qué se pierde en calidad.",
  },
  {
    id: "guides/how-to-reduce-pdf-file-size-for-email",
    slug: "guias/como-reducir-el-tamano-de-un-pdf-para-el-correo",
    title: "Cómo reducir el tamaño de un PDF para el correo",
    description:
      "Baja de los límites de adjuntos de Gmail y Outlook. Los límites reales, por qué los escaneos los superan y cómo reducir un archivo para que se pueda enviar.",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-iphone",
    slug: "guias/como-reducir-un-pdf-en-iphone",
    title: "Cómo reducir el tamaño de un PDF en iPhone",
    description:
      "Reduce un PDF en tu iPhone con una herramienta del navegador o con la app PDF Editor. Por qué los escaneos del iPhone son tan pesados y cómo bajarlos de los límites de envío.",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-android",
    slug: "guias/como-reducir-un-pdf-en-android",
    title: "Cómo reducir el tamaño de un PDF en Android",
    description:
      "Comprime un PDF en cualquier Android con una herramienta del navegador que no necesita instalación, o con la app PDF Editor. Baja de los límites de correo y de subida.",
  },
  {
    id: "guides/why-is-my-pdf-so-large",
    slug: "guias/por-que-mi-pdf-pesa-tanto",
    title: "¿Por qué mi PDF pesa tanto? Causas y soluciones",
    description:
      "Las razones reales por las que un PDF se hincha de tamaño — escaneos, fotos incrustadas, fuentes y más — y la solución correcta para cada una, con herramientas gratuitas del navegador.",
  },
  {
    id: "guides/compress-pdf-without-losing-too-much-quality",
    slug: "guias/comprimir-un-pdf-sin-perder-demasiada-calidad",
    title: "Comprimir un PDF sin perder demasiada calidad",
    description:
      "Encuentra el punto justo entre tamaño y calidad. Cómo los niveles de compresión cambian detalle por tamaño, y cuál elegir para que siga funcionando bien.",
  },
  {
    id: "guides/how-to-compress-scanned-pdf",
    slug: "guias/como-comprimir-un-pdf-escaneado",
    title: "Cómo comprimir un PDF escaneado (ahorro enorme)",
    description:
      "Los PDF escaneados son los más fáciles de reducir y los que más pesan. Cómo comprimirlos de forma drástica y qué pasa con el texto buscable.",
  },
  {
    id: "guides/best-pdf-compression-settings",
    slug: "guias/mejores-ajustes-de-compresion-pdf",
    title: "Mejores ajustes de compresión PDF — guía de decisión",
    description:
      "¿Qué nivel de compresión usar para correo, impresión, archivo o web? Una tabla práctica que relaciona cada ajuste con su uso, con los compromisos explicados sin rodeos.",
  },
  {
    id: "guides/how-to-send-large-pdf-files",
    slug: "guias/como-enviar-un-pdf-pesado",
    title: "Cómo enviar un PDF pesado (5 formas fiables)",
    description:
      "Cinco formas fiables de enviar un PDF demasiado pesado para el correo — comprimir, dividir, enlaces en la nube y más — y cómo elegir entre ellas.",
  },
  {
    id: "guides/how-to-reduce-pdf-size-before-uploading",
    slug: "guias/como-reducir-un-pdf-antes-de-subirlo",
    title: "Cómo reducir un PDF antes de subirlo a un portal",
    description:
      "Los portales de subida rechazan los archivos pesados con más dureza que el correo. Cómo bajar de esos límites tan ajustados sin perder la legibilidad que revisan.",
  },
  {
    id: "guides/how-to-sign-pdf-on-iphone",
    slug: "guias/como-firmar-un-pdf-en-iphone",
    title: "Cómo firmar un PDF en iPhone (guía 2026)",
    description:
      "Firma un PDF en el iPhone con Marcado o con la app PDF Editor. Los límites de la vía nativa y cuándo una app dedicada firma mejor.",
  },
  {
    id: "guides/how-to-sign-pdf-on-android",
    slug: "guias/como-firmar-un-pdf-en-android",
    title: "Cómo firmar un PDF en Android (guía 2026)",
    description:
      "Firma un PDF en Android, donde no existe una firma nativa universal. La vía fiable por app, las distintas opciones según el fabricante y lo básico sobre validez legal.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-phone",
    slug: "guias/como-rellenar-un-formulario-pdf-desde-el-movil",
    title: "Cómo rellenar un formulario PDF desde el móvil",
    description:
      "Rellena un formulario PDF en iPhone o Android, tenga campos de verdad o sea un simple escaneo. Toca y escribe, añade cajas de texto y firma todo en un mismo sitio.",
  },
  {
    id: "guides/how-to-annotate-pdf-on-mobile",
    slug: "guias/como-anotar-un-pdf-desde-el-movil",
    title: "Cómo anotar un PDF desde el móvil",
    description:
      "Subraya, comenta y dibuja sobre tus PDF desde el móvil o la tablet. Las herramientas de anotación que de verdad importan, y cómo mantener tus notas legibles.",
  },
  {
    id: "guides/how-to-manage-pdfs-on-phone",
    slug: "guias/como-organizar-tus-pdf-en-el-movil",
    title: "Cómo organizar tus PDF en el móvil",
    description:
      "Evita que los PDF del móvil se conviertan en un caos: renombra, organiza en carpetas, sincroniza con la nube y libera espacio. Una rutina de mantenimiento realista.",
  },
  {
    id: "guides/how-to-create-pdf-from-camera",
    slug: "guias/como-crear-un-pdf-con-la-camara-del-movil",
    title: "Cómo crear un PDF con la cámara del móvil",
    description:
      "Convierte una foto en un PDF, y entiende por qué un escaneo de verdad supera a una foto suelta. Captura rápida para recibos y pizarras, escaneo para documentos.",
  },
  {
    id: "guides/how-to-share-pdf-from-phone",
    slug: "guias/como-compartir-un-pdf-desde-el-movil",
    title: "Cómo compartir un PDF desde el móvil",
    description:
      "Comparte un PDF desde iPhone o Android como es debido — correo, AirDrop, mensajería o enlace — y prepáralo para que llegue de verdad.",
  },
  {
    id: "guides/best-pdf-tools-for-students",
    slug: "guias/mejores-herramientas-pdf-gratis-para-estudiantes",
    title: "Las mejores herramientas PDF gratis para estudiantes (2026)",
    description:
      "Las herramientas PDF gratuitas y sin registro que cubren las tareas reales de un estudiante — unir lecturas, comprimir entregas, convertir y anotar — sin muro de pago.",
  },
  {
    id: "guides/best-pdf-workflow-for-freelancers",
    slug: "guias/mejor-metodo-pdf-para-autonomos",
    title: "El mejor método PDF para autónomos",
    description:
      "Un método PDF repetible para un autónomo: propuesta enviada, contrato firmado, factura emitida. Las herramientas gratuitas y la app que lo mantienen todo rápido y privado.",
  },
  {
    id: "guides/best-pdf-tools-for-small-business",
    slug: "guias/mejores-herramientas-pdf-gratis-para-pequenas-empresas",
    title: "Las mejores herramientas PDF gratis para pequeñas empresas",
    description:
      "Gestiona facturas, contratos y archivo con herramientas PDF gratuitas y privadas, sin suscripción por usuario. Qué herramienta para cada tarea, y dónde encaja la app.",
  },
  {
    id: "guides/pdf-vs-jpg-for-documents",
    slug: "guias/pdf-o-jpg-para-documentos",
    title: "PDF o JPG para documentos — deja de enviar fotos",
    description:
      "Por qué una foto JPG de un documento es lo que no hay que enviar, cuándo el PDF es lo correcto, y cómo convertir una foto en un documento de verdad.",
  },
  {
    id: "guides/when-to-use-pdf-instead-of-docx",
    slug: "guias/cuando-enviar-un-pdf-en-vez-de-un-docx",
    title: "Cuándo enviar un PDF en vez de un DOCX (checklist)",
    description:
      "Tienes un documento de Word: ¿deberías enviarlo en PDF? Una checklist rápida de los momentos en que el PDF es la opción correcta, y cómo convertir.",
  },
  {
    id: "guides/browser-based-pdf-tools-vs-upload-tools",
    slug: "guias/herramientas-pdf-en-el-navegador-o-con-subida-de-archivos",
    title: "Herramientas PDF en el navegador o con subida de archivos",
    description:
      "No todas las herramientas PDF «online» son iguales. La diferencia entre las que funcionan en tu navegador y las que suben tu archivo a un servidor — y cómo distinguirlas.",
  },
  {
    id: "guides/privacy-first-pdf-tools",
    slug: "guias/herramientas-pdf-que-respetan-tu-privacidad",
    title: "Herramientas PDF que respetan tu privacidad — tus documentos se quedan en tu dispositivo",
    description:
      "Los PDF guardan algunos de tus datos más sensibles. Cómo trabajar con ellos sin subir nada, y qué significa de verdad «privacidad primero».",
  },
  {
    id: "guides/common-pdf-mistakes-to-avoid",
    slug: "guias/errores-habituales-con-pdf-que-debes-evitar",
    title: "Errores habituales con PDF que debes evitar",
    description:
      "Los errores con PDF que hacen perder tiempo o filtran información — comprimir de más, enviar fotos, subir un archivo sensible, olvidar páginas — y cómo evitarlos.",
  },
  {
    id: "guides/why-wont-my-pdf-open",
    slug: "guias/por-que-no-se-abre-mi-pdf",
    title: "¿Por qué no se abre mi PDF? Causas y soluciones prácticas",
    description:
      "Un PDF que se niega a abrirse casi siempre es una de cinco cosas. Cómo diagnosticar una descarga incompleta, un bloqueo por contraseña, un fallo del lector o un archivo antiguo — y qué arregla cada uno.",
  },
  {
    id: "guides/why-is-my-pdf-blank",
    slug: "guias/por-que-mi-pdf-esta-en-blanco",
    title: "¿Por qué mi PDF está en blanco? Causas reales y cómo recuperarlo",
    description:
      "Cuando un PDF se abre con páginas en blanco, el contenido suele seguir ahí, solo que oculto por un fallo de renderizado, una fuente que falta o un error de escaneo. Cómo saber qué pasó y recuperar el documento.",
  },
  {
    id: "guides/why-cant-i-edit-a-pdf",
    slug: "guias/por-que-no-puedo-editar-un-pdf",
    title: "¿Por qué no puedo editar este PDF? Las razones reales",
    description:
      "El PDF se diseñó para resistirse a la edición, pero unos pocos factores concretos — escaneos, protecciones, límites del lector — hacen que unos archivos sean más difíciles que otros. Qué está bloqueando el tuyo, y qué funciona de verdad.",
  },
  {
    id: "guides/why-is-my-pdf-blurry",
    slug: "guias/por-que-mi-pdf-esta-borroso",
    title: "¿Por qué mi PDF está borroso? Resolución, compresión y escaneo",
    description:
      "Un PDF borroso viene de un escaneo de baja resolución, una compresión demasiado agresiva o una mala exportación — nunca del formato en sí. Cómo saber cuál es tu caso y recuperar la nitidez.",
  },
  {
    id: "guides/how-to-fix-a-corrupted-pdf",
    slug: "guias/como-reparar-un-pdf-danado",
    title: "Cómo reparar un PDF dañado (lo que funciona de verdad)",
    description:
      "La mayoría de los PDF «dañados» no lo están: son descargas incompletas, lectores incompatibles o escrituras a medias. La lista honesta de soluciones que recuperan el archivo, y el caso en que ya está perdido de verdad.",
  },
  {
    id: "guides/how-to-fix-pdf-printing-issues",
    slug: "guias/como-solucionar-problemas-al-imprimir-un-pdf",
    title: "Cómo solucionar problemas al imprimir un PDF (páginas cortadas, tamaño incorrecto, texto que falta)",
    description:
      "Cuando un PDF se imprime recortado, mal escalado o sin parte del texto, la solución depende del síntoma. Una tabla corta que relaciona cada problema con el ajuste correcto.",
  },
  {
    id: "guides/how-to-fix-pdf-upload-errors",
    slug: "guias/como-solucionar-errores-al-subir-un-pdf",
    title: "Cómo solucionar errores al subir un PDF (demasiado pesado, rechazado, atascado)",
    description:
      "Los portales rechazan un PDF por un puñado de razones: tamaño, número de páginas, un formato demasiado estricto o una subida inestable. Cómo identificar la tuya y conseguir que el archivo se acepte a la próxima.",
  },
  {
    id: "guides/how-to-fix-pdf-formatting-problems",
    slug: "guias/como-corregir-problemas-de-formato-en-un-pdf",
    title: "Cómo corregir problemas de formato en un PDF (saltos de línea, márgenes, espaciado)",
    description:
      "Cuando la maquetación de un PDF se ve rota — texto que se recoloca, márgenes descuadrados, espaciado incoherente — la solución suele estar en el documento de origen, no en el PDF. El método más limpio para conseguir una buena exportación.",
  },
  {
    id: "guides/how-to-fix-scanned-pdf-quality",
    slug: "guias/como-mejorar-la-calidad-de-un-pdf-escaneado",
    title: "Cómo mejorar la calidad de un PDF escaneado (nitidez, enderezado, color)",
    description:
      "Los PDF escaneados fallan siempre de la misma forma: torcidos, con el contraste apagado, con manchas de fondo, con un tamaño enorme. Los ajustes antes de escanear y las herramientas después que de verdad los arreglan.",
  },
  {
    id: "guides/how-to-fix-pdf-font-issues",
    slug: "guias/como-corregir-problemas-de-fuente-en-un-pdf",
    title: "Cómo corregir problemas de fuente en un PDF (que falta, sustituida, ilegible)",
    description:
      "Cuando un PDF muestra la fuente equivocada, cuadrados en vez de caracteres o texto sustituido, casi siempre falta una fuente incrustada. Cómo funciona la incrustación y qué cambiar al exportar.",
  },
  {
    id: "guides/best-pdf-tools-for-remote-work",
    slug: "guias/mejores-herramientas-pdf-para-trabajo-remoto",
    title: "Las mejores herramientas PDF para el trabajo remoto (gratis, en el navegador)",
    description:
      "Herramientas PDF que aguantan cuando tu oficina es un portátil y un móvil — firmar, comprimir, unir, escanear, compartir — todo sin instalar nada ni licencias por usuario.",
  },
  {
    id: "guides/best-pdf-tools-for-office-documents",
    slug: "guias/mejores-herramientas-pdf-para-documentos-de-oficina",
    title: "Las mejores herramientas PDF para documentos de oficina (Word, Excel, informes)",
    description:
      "El conjunto de herramientas PDF que el trabajo de oficina necesita de verdad: ida y vuelta limpia entre Word y PDF, unión de varios documentos, reordenar páginas y compresión fiable para adjuntos de correo.",
  },
  {
    id: "guides/best-pdf-workflow-for-teams",
    slug: "guias/mejor-metodo-pdf-en-equipo",
    title: "El mejor método PDF para trabajar en equipo (archivos compartidos, revisiones, aprobaciones)",
    description:
      "Cómo mueve sus documentos un equipo pequeño sin suscripciones de pago para PDF: un traspaso repetible para borradores, revisiones y aprobaciones firmadas con herramientas gratuitas del navegador.",
  },
  {
    id: "guides/how-to-share-pdfs-with-clients",
    slug: "guias/como-compartir-pdf-con-clientes",
    title: "Cómo compartir PDF con tus clientes (con profesionalidad y privacidad)",
    description:
      "Una guía breve para enviar un PDF a un cliente — tamaño adecuado para el correo, elección de contraseña, identidad de marca, confirmación de recepción — sin subir nada a terceros.",
  },
  {
    id: "guides/how-to-prepare-pdf-for-business-use",
    slug: "guias/como-preparar-un-pdf-para-uso-profesional",
    title: "Cómo preparar un PDF para uso profesional (checklist de repaso)",
    description:
      "Antes de que un PDF salga de la oficina: quita borradores, revisa la paginación, corrige la orientación, incrusta las fuentes y reduce el tamaño. Una checklist previa al envío para los documentos que representan tu negocio.",
  },
  {
    id: "guides/how-to-send-contracts-as-pdf",
    slug: "guias/como-enviar-un-contrato-en-pdf",
    title: "Cómo enviar un contrato en PDF (firmar, bloquear, entregar)",
    description:
      "Un contrato exige un método más estricto: bloquear el contenido, aplicar la firma, marcar los borradores con marca de agua y conseguir un archivo final que la otra parte pueda contrafirmar sin idas y venidas.",
  },
  {
    id: "guides/how-to-organize-work-documents-as-pdf",
    slug: "guias/como-organizar-tus-documentos-de-trabajo-en-pdf",
    title: "Cómo organizar tus documentos de trabajo en PDF (carpetas, nombres, versiones)",
    description:
      "Una convención práctica de nombres y carpetas para los PDF de trabajo — presupuestos, briefs, entregas, archivo — que evita el caos de versiones y deja que cualquiera encuentre cualquier cosa rápido.",
  },
  {
    id: "guides/how-to-manage-invoices-as-pdf",
    slug: "guias/como-gestionar-tus-facturas-en-pdf",
    title: "Cómo gestionar tus facturas en PDF (emitir, seguir, archivar)",
    description:
      "Un método de facturación en PDF que no necesita software de contabilidad: generar, numerar, enviar, seguir y archivar — solo con herramientas gratuitas del navegador y un sistema de carpetas ordenado.",
  },
  {
    id: "guides/how-to-create-client-ready-pdf-files",
    slug: "guias/como-crear-un-pdf-listo-para-el-cliente",
    title: "Cómo crear un PDF listo para el cliente (cuidado, con tu marca)",
    description:
      "Qué separa un PDF interno de uno listo para el cliente: portada, numeración de página, identidad de marca, tamaño y nombre del archivo. Los últimos retoques que hacen que el documento se vea terminado.",
  },
  {
    id: "guides/pdf-workflows-for-small-business",
    slug: "guias/metodo-pdf-para-pequenas-empresas",
    title: "Método PDF para pequeñas empresas (presupuestos, contratos, archivo)",
    description:
      "Cómo lleva una pequeña empresa el flujo de sus documentos en PDF — presupuesto enviado, contrato de vuelta, archivo guardado — sin comprar un paquete de suscripciones para ello.",
  },
  {
    id: "guides/pdf-workflows-for-consultants",
    slug: "guias/metodo-pdf-para-consultores",
    title: "Método PDF para consultores (propuestas, informes, facturas)",
    description:
      "El ritmo PDF de un consultor: propuestas que cierran, informes que se leen bien en el móvil, facturas que salen en segundos. Las herramientas del navegador que lo mantienen todo ligero.",
  },
  {
    id: "guides/pdf-workflows-for-agencies",
    slug: "guias/metodo-pdf-para-agencias",
    title: "Método PDF para agencias (presentaciones, briefs, aprobaciones)",
    description:
      "La cadena PDF de una agencia — presentaciones, briefs creativos, aprobaciones del cliente, entregas — mantenida rápida y predecible con herramientas gratuitas, privadas y del navegador.",
  },
  {
    id: "guides/how-to-submit-homework-as-pdf",
    slug: "guias/como-entregar-un-trabajo-en-pdf",
    title: "Cómo entregar un trabajo en PDF sin dramas con el portal",
    description:
      "Los portales del colegio rechazan las tareas por razones previsibles — tamaño, número de páginas, formato. El camino más simple desde el trabajo terminado hasta el PDF aceptado.",
  },
  {
    id: "guides/how-to-scan-notes-to-pdf",
    slug: "guias/como-escanear-apuntes-a-pdf",
    title: "Cómo escanear apuntes a mano a PDF (limpio y con texto buscable)",
    description:
      "Convierte páginas de apuntes de clase escritos a mano en PDF de varias páginas limpios con la cámara del móvil. Los ajustes que dan un escaneo legible a la primera.",
  },
  {
    id: "guides/how-to-compress-pdf-for-school-portals",
    slug: "guias/como-comprimir-un-pdf-para-un-portal-escolar",
    title: "Cómo comprimir un PDF para un portal escolar (límites estrictos)",
    description:
      "Los portales de subida de colegios y universidades limitan los PDF más que el correo. Cómo comprimir un trabajo para que quepa sin destrozar la legibilidad que revisa el profesor.",
  },
  {
    id: "guides/how-to-convert-lecture-notes-to-pdf",
    slug: "guias/como-convertir-apuntes-de-clase-a-pdf",
    title: "Cómo convertir apuntes de clase a PDF (Word, fotos, diapositivas)",
    description:
      "Los apuntes de clase llegan en todos los formatos — documento de Word, presentación, captura de pantalla, foto de la pizarra. Cómo convertir cada uno en un solo PDF legible sin perder la estructura.",
  },
  {
    id: "guides/how-to-organize-study-materials-as-pdf",
    slug: "guias/como-organizar-tu-material-de-estudio-en-pdf",
    title: "Cómo organizar tu material de estudio en PDF (carpetas, nombres, índice)",
    description:
      "Los PDF de una asignatura se acumulan rápido. Una convención sencilla de carpetas, nombres y unión que mantiene el material del semestre localizable desde la primera semana hasta los exámenes.",
  },
  {
    id: "guides/how-to-share-study-notes-as-pdf",
    slug: "guias/como-compartir-apuntes-de-estudio-en-pdf",
    title: "Cómo compartir apuntes de estudio en PDF (grupo, chat, nube)",
    description:
      "Comparte apuntes con un grupo de estudio sin perder el formato ni el control de versiones. Los hábitos con PDF que evitan que estudiar en grupo acabe en un caos de capturas de pantalla.",
  },
  {
    id: "guides/how-to-edit-class-documents-as-pdf",
    slug: "guias/como-anotar-y-rellenar-documentos-de-clase-en-pdf",
    title: "Cómo anotar y rellenar documentos de clase en PDF",
    description:
      "Los apuntes fotocopiados, las hojas de ejercicios y las autorizaciones suelen llegar en PDF. Cómo marcarlos, rellenarlos y devolverlos sin imprimir, desde el móvil o el portátil.",
  },
  {
    id: "guides/pdf-workflow-for-university-students",
    slug: "guias/metodo-pdf-para-estudiantes-universitarios",
    title: "Método PDF para estudiantes universitarios (apuntes, trabajos, entregas)",
    description:
      "Un ritmo PDF que aguanta todo un semestre, hasta los exámenes finales: apuntes de clase escaneados, trabajos entregados, dosieres de estudio compartidos. En el navegador y gratis.",
  },
  {
    id: "guides/how-to-create-digital-study-pdfs",
    slug: "guias/como-crear-tus-propios-pdf-de-estudio",
    title: "Cómo crear tus propios PDF de estudio (fichas, resúmenes, dosieres)",
    description:
      "Construye tus propios PDF de estudio a partir de apuntes, diapositivas y subrayados: con texto buscable, portátiles, listos para anotar en la tablet. La estructura que los hace útiles de verdad en época de exámenes.",
  },
  {
    id: "guides/are-online-pdf-tools-safe",
    slug: "guias/son-seguras-las-herramientas-pdf-online",
    title: "¿Son seguras las herramientas PDF online? Una mirada honesta al riesgo",
    description:
      "La mayoría de las herramientas PDF «online» suben tu archivo a un servidor. Algunas no. Los riesgos reales, las familias de herramientas que tratan tus datos de forma distinta, y cómo distinguirlas.",
  },
  {
    id: "guides/how-to-protect-sensitive-pdf-files",
    slug: "guias/como-proteger-tus-pdf-sensibles",
    title: "Cómo proteger tus PDF sensibles (almacenamiento, envío, final de vida)",
    description:
      "Un PDF sensible necesita protección en tres momentos: mientras está guardado, mientras se comparte y una vez que el destinatario ya no lo necesita. Un método práctico que cubre los tres.",
  },
  {
    id: "guides/how-to-share-pdf-files-privately",
    slug: "guias/como-compartir-un-pdf-con-privacidad",
    title: "Cómo compartir un PDF con privacidad (sin subirlo a desconocidos)",
    description:
      "La forma privada de compartir un PDF no pasa por una web pública de «herramientas PDF». Los canales que mantienen el documento solo entre tú y el destinatario, con ajustes razonables.",
  },
  {
    id: "guides/privacy-first-document-workflows",
    slug: "guias/organizacion-documental-sin-subir-nada",
    title: "Una organización documental sin subir nada (de principio a fin)",
    description:
      "Todo un flujo documental — captura, edición, firma, envío, archivo — que mantiene los archivos en tus dispositivos y fuera de servidores de terceros. La forma realista de conseguirlo, y con qué herramientas.",
  },
  {
    id: "guides/local-browser-pdf-processing-explained",
    slug: "guias/el-procesamiento-local-de-pdf-en-el-navegador-explicado",
    title: "El procesamiento local de PDF en el navegador, explicado",
    description:
      "Cómo puede una herramienta PDF funcionar en un navegador sin enviar tu archivo a ningún sitio. La tecnología, los compromisos, y cómo comprobar que una herramienta es de verdad local.",
  },
  {
    id: "guides/do-online-pdf-tools-store-files",
    slug: "guias/las-herramientas-pdf-online-guardan-tus-archivos",
    title: "¿Las herramientas PDF online guardan tus archivos? Qué comprobar",
    description:
      "Algunas herramientas PDF online borran lo que subes al instante, otras lo conservan horas, otras indefinidamente. Cómo leer rápido una política de privacidad y qué buscar en ella.",
  },
  {
    id: "guides/how-to-avoid-uploading-sensitive-documents",
    slug: "guias/como-evitar-subir-documentos-sensibles",
    title: "Cómo evitar subir documentos sensibles (alternativas prácticas)",
    description:
      "Cuando una tarea te tienta a subir un PDF sensible, casi siempre hay una alternativa que funciona solo en local. Las familias de tareas y la herramienta sin subida para cada una.",
  },
  {
    id: "guides/secure-pdf-workflows-for-business",
    slug: "guias/como-asegurar-tus-pdf-en-la-empresa",
    title: "Cómo asegurar tus PDF en la empresa (sin infraestructura pesada)",
    description:
      "Una pequeña empresa no necesita una caja fuerte documental certificada para trabajar con tranquilidad. La base realista — almacenamiento cifrado, envíos controlados, procesamiento local — que responde al riesgo de verdad.",
  },
  {
    id: "guides/browser-based-document-processing-benefits",
    slug: "guias/ventajas-de-procesar-documentos-en-el-navegador",
    title: "Las ventajas de procesar documentos en el navegador (velocidad, privacidad, coste)",
    description:
      "Por qué procesar un PDF en el navegador cambia la ecuación entre velocidad, privacidad y coste frente a las herramientas en la nube — y dónde están los límites reales del procesamiento local.",
  },
  {
    id: "guides/pdf-vs-google-docs",
    slug: "guias/pdf-o-google-docs",
    title: "PDF o Google Docs — cuándo usar cada uno",
    description:
      "Google Docs sirve para trabajar en equipo; el PDF sirve para entregar. Cuándo usar cada uno, en la práctica, y cómo pasar de forma limpia de uno a otro en el momento adecuado.",
  },
  {
    id: "guides/pdf-vs-docx-for-business",
    slug: "guias/pdf-o-docx-en-la-empresa",
    title: "PDF o DOCX en la empresa (contratos, informes, distribución)",
    description:
      "Por qué los documentos profesionales casi siempre circulan en PDF pero viven en DOCX. La herramienta correcta en cada etapa de la vida de un contrato, un informe o una factura.",
  },
  {
    id: "guides/pdf-vs-images-for-sharing-documents",
    slug: "guias/pdf-o-imagen-para-compartir-un-documento",
    title: "PDF o imagen para compartir un documento (JPG, PNG, HEIC)",
    description:
      "Cuándo un JPG, un PNG o un HEIC de un documento es la opción equivocada — y qué hace del PDF el formato correcto en cuanto se supera la simple captura de pantalla.",
  },
  {
    id: "guides/pdf-vs-png",
    slug: "guias/pdf-o-png",
    title: "PDF o PNG — documento de varias páginas o imagen única y nítida",
    description:
      "El PDF gana para un documento de varias páginas; el PNG gana para una imagen única, nítida, con fondo transparente. Las reglas claras y la conversión en ambos sentidos.",
  },
  {
    id: "guides/best-format-for-sharing-documents",
    slug: "guias/que-formato-elegir-para-compartir-un-documento",
    title: "Qué formato elegir para compartir un documento (PDF, DOCX, imágenes comparados)",
    description:
      "Cuándo el PDF es el formato correcto para compartir, cuándo no lo es, y qué valen de verdad las alternativas (DOCX, imágenes, HTML, Markdown) en las situaciones del día a día.",
  },
  {
    id: "guides/why-pdf-is-still-popular",
    slug: "guias/por-que-el-pdf-sigue-siendo-el-estandar",
    title: "¿Por qué el PDF sigue siendo el estándar para documentos en 2026?",
    description:
      "Décadas después, el PDF sigue dominando el intercambio de documentos. Las razones de su permanencia — fidelidad, universalidad, firma, capacidad de archivo — y sus puntos débiles.",
  },
  {
    id: "guides/when-to-use-scanned-pdf",
    slug: "guias/cuando-usar-un-pdf-escaneado",
    title: "Cuándo usar un PDF escaneado (y cuándo no)",
    description:
      "El PDF escaneado resuelve un problema concreto: pasar del papel a lo digital. También es más pesado, menos buscable y más difícil de editar. Cuándo merece la pena el cambio.",
  },
  {
    id: "guides/editable-pdf-vs-flat-pdf",
    slug: "guias/pdf-editable-o-pdf-plano",
    title: "PDF editable o PDF plano — la diferencia real",
    description:
      "Algunos PDF tienen texto seleccionable de verdad y una estructura editable; otros son solo imágenes de páginas sin texto debajo. Cómo saber cuál tienes, y cuándo conviene cada uno.",
  },
  {
    id: "guides/best-free-pdf-tools",
    slug: "guias/mejores-herramientas-pdf-gratis",
    title: "Las mejores herramientas PDF gratis en 2026 (selección honesta, sin registro)",
    description:
      "Las herramientas PDF gratuitas que merece la pena usar — comprimir, unir, firmar, convertir, escanear — elegidas por su calidad real y su privacidad, no por la cantidad de anuncios que muestran.",
  },
  {
    id: "guides/free-browser-based-pdf-tools",
    slug: "guias/herramientas-pdf-gratis-en-el-navegador",
    title: "Herramientas PDF gratis en el navegador (sin instalar, sin subir nada)",
    description:
      "Las herramientas PDF que funcionan enteramente en tu navegador: nada que instalar, ninguna cuenta, nada que subir. Qué hay disponible, qué cubre y cómo comprobar que de verdad funciona en local.",
  },
  {
    id: "guides/best-pdf-tools-without-upload",
    slug: "guias/mejores-herramientas-pdf-sin-subir-archivos",
    title: "Las mejores herramientas PDF sin subir archivos (tus archivos se quedan en tu dispositivo)",
    description:
      "Cuando no quieres que tu PDF salga de tu dispositivo, estas son las herramientas que hacen el trabajo en local. Compresión, unión, conversión — todo sin que el archivo se mueva de tu equipo.",
  },
  {
    id: "guides/best-private-pdf-tools",
    slug: "guias/mejores-herramientas-pdf-privadas",
    title: "Las mejores herramientas PDF privadas (cuando la confidencialidad importa de verdad)",
    description:
      "Para un contrato, un extracto bancario o cualquier otro PDF sensible, estas son las herramientas que respetan la privacidad por su propia arquitectura, no solo por una política escrita.",
  },
  {
    id: "guides/free-pdf-tools-for-iphone",
    slug: "guias/herramientas-pdf-gratis-para-iphone",
    title: "Herramientas PDF gratis para iPhone (navegador y apps)",
    description:
      "Herramientas PDF gratuitas para iPhone que funcionan de verdad sin suscripción — comprimir, firmar, escanear, convertir. Las opciones del navegador y la app PDF Editor para trabajar sin conexión.",
  },
  {
    id: "guides/free-pdf-tools-for-android",
    slug: "guias/herramientas-pdf-gratis-para-android",
    title: "Herramientas PDF gratis para Android (navegador y apps)",
    description:
      "Herramientas PDF gratuitas para Android elegidas para las tareas del día a día: comprimir, firmar, escanear, convertir. Las vías del navegador y la app PDF Editor para usar sin conexión.",
  },
  {
    id: "guides/what-is-a-pdf-form",
    slug: "guias/que-es-un-formulario-pdf",
    title: "¿Qué es un formulario PDF? Interactivo o no interactivo",
    description:
      "Un formulario PDF es un documento pensado para recoger respuestas — a veces con campos de verdad en los que escribes, a veces una simple página sobre la que escribes por encima. Qué significa eso y cómo distinguirlos.",
  },
  {
    id: "guides/editable-pdf-vs-fillable-pdf",
    slug: "guias/pdf-editable-o-pdf-rellenable",
    title: "PDF editable o PDF rellenable — ¿cuál es la diferencia?",
    description:
      "Editar un PDF es cambiar su contenido; rellenar un PDF es escribir respuestas en los campos de un formulario. Por qué son dos tareas distintas, y cuál necesitas de verdad.",
  },
  {
    id: "guides/how-pdf-forms-work",
    slug: "guias/como-funcionan-los-formularios-pdf",
    title: "Cómo funcionan los formularios PDF — campos, AcroForm y escaneos planos",
    description:
      "Por debajo, un formulario PDF es un conjunto de campos interactivos sobre la página, o una simple imagen sin ninguno. Cómo se construye cada uno y por qué eso importa a la hora de rellenarlo.",
  },
  {
    id: "guides/can-you-edit-a-pdf-form",
    slug: "guias/se-puede-editar-un-formulario-pdf",
    title: "¿Se puede editar un formulario PDF? Qué se puede cambiar y qué no",
    description:
      "Editar las preguntas de un formulario PDF no tiene nada que ver con rellenarlo. Qué es editable, qué está bloqueado, y cómo cambiar un formulario del que solo tienes el PDF terminado.",
  },
  {
    id: "guides/how-to-fill-out-a-pdf-form",
    slug: "guias/como-rellenar-un-formulario-pdf",
    title: "Cómo rellenar un formulario PDF (interactivo o no)",
    description:
      "Rellena cualquier formulario PDF, tenga campos de verdad o sea un escaneo sobre el que escribes. La guía completa para ordenador y móvil, con firma y guardado incluidos.",
  },
  {
    id: "guides/how-to-save-a-filled-pdf-form",
    slug: "guias/como-guardar-un-formulario-pdf-relleno",
    title: "Cómo guardar un formulario PDF relleno sin perder las respuestas",
    description:
      "¿Rellenas un formulario y luego ves cómo desaparecen tus respuestas? Cómo guardar los datos de forma fiable, por qué algunos lectores no lo hacen, y cuándo aplanar antes de enviarlo.",
  },
  {
    id: "guides/why-cant-i-type-in-a-pdf-form",
    slug: "guias/por-que-no-puedo-escribir-en-un-formulario-pdf",
    title: "¿Por qué no puedo escribir en este formulario PDF? Causas y soluciones",
    description:
      "Haces clic en un campo y no pasa nada. Las tres razones habituales — un formulario no interactivo, el lector equivocado o un archivo bloqueado — y qué hacer en cada caso.",
  },
  {
    id: "guides/how-to-create-a-fillable-pdf",
    slug: "guias/como-crear-un-pdf-rellenable",
    title: "Cómo crear un PDF rellenable — opciones honestas y sus límites",
    description:
      "Lo que hace falta de verdad para conseguir un PDF que otros puedan rellenar — campos interactivos de verdad frente a una plantilla simple no interactiva — y qué enfoque encaja con las herramientas que tienes.",
  },
  {
    id: "guides/how-to-share-a-pdf-form",
    slug: "guias/como-compartir-un-formulario-pdf-para-que-lo-rellenen",
    title: "Cómo compartir un formulario PDF para que lo rellenen",
    description:
      "Enviar un formulario en blanco para que lo completen no es lo mismo que enviar un documento terminado. Cómo compartirlo para que quien lo reciba pueda rellenarlo de verdad, y cómo recoger los resultados.",
  },
  {
    id: "guides/how-to-print-a-filled-pdf-form",
    slug: "guias/como-imprimir-un-formulario-pdf-relleno",
    title: "Cómo imprimir un formulario PDF relleno con todas las respuestas",
    description:
      "¿Imprimes tu formulario y los campos salen en blanco? Por qué a veces las respuestas no se imprimen, y cómo conseguir una copia en papel limpia con todo visible.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-iphone",
    slug: "guias/como-rellenar-un-formulario-pdf-en-iphone",
    title: "Cómo rellenar un formulario PDF en iPhone (Archivos, Marcado y apps)",
    description:
      "Rellena un formulario PDF interactivo o no en el iPhone, con Archivos y Marcado o con una app dedicada. Los pasos propios de iOS, la vía del menú para compartir, y dónde se queda corto Marcado.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-android",
    slug: "guias/como-rellenar-un-formulario-pdf-en-android",
    title: "Cómo rellenar un formulario PDF en Android (en cualquier móvil)",
    description:
      "Rellena un formulario PDF interactivo o no en Android. Por qué el visor integrado a menudo no deja escribir, la vía fiable con una app, y cómo afectan a los formularios las diferencias entre marcas.",
  },
  {
    id: "guides/how-to-send-a-completed-pdf-form",
    slug: "guias/como-devolver-un-formulario-pdf-relleno",
    title: "Cómo devolver un formulario PDF relleno (aplanar y enviar)",
    description:
      "Ya has rellenado el formulario; ahora toca devolverlo bien. Cómo aplanarlo para que las respuestas no se puedan cambiar, adjuntarlo correctamente, y confirmar que llegó sin perder datos.",
  },
  {
    id: "guides/how-to-fill-government-pdf-forms-on-phone",
    slug: "guias/como-rellenar-un-formulario-de-la-administracion-en-pdf-desde-el-movil",
    title: "Cómo rellenar un formulario de la administración en PDF desde el móvil",
    description:
      "Los formularios de la administración suelen ser escaneos planos con un formato muy estricto. Cómo completarlos desde el móvil, lidiar con los campos incómodos y seguir las instrucciones del propio organismo.",
  },
  {
    id: "guides/mobile-pdf-form-workflow",
    slug: "guias/metodo-movil-para-formularios-pdf",
    title: "El método móvil para formularios PDF (de recibirlo a enviarlo)",
    description:
      "Una rutina repetible, pensada para el móvil: recibir, abrir en la app correcta, rellenar, firmar, aplanar, enviar. El proceso completo que no necesita ningún ordenador.",
  },
  {
    id: "guides/best-pdf-form-app-for-iphone",
    slug: "guias/mejor-app-de-formularios-pdf-para-iphone",
    title: "Cuál es la mejor app de formularios PDF para iPhone",
    description:
      "Lo que de verdad importa en una app de formularios PDF en el iPhone — detección de campos, texto en formularios no interactivos, firma, privacidad en el dispositivo — y cómo juzgar una con tus propios formularios.",
  },
  {
    id: "guides/best-pdf-form-app-for-android",
    slug: "guias/mejor-app-de-formularios-pdf-para-android",
    title: "Cómo elegir la mejor app de formularios PDF para Android",
    description:
      "Cómo elegir una app de formularios PDF en Android: detección de campos, texto en formularios no interactivos, firma y privacidad en el dispositivo — y por qué una app dedicada gana al visor por defecto.",
  },
  {
    id: "guides/pdf-forms-for-small-business",
    slug: "guias/formularios-pdf-para-pequenas-empresas",
    title: "Los formularios PDF en una pequeña empresa (clientes, pedidos, RRHH)",
    description:
      "Los formularios del día a día de una pequeña empresa — ficha de cliente, pedido, reserva, RRHH básico — y cómo rellenarlos, recogerlos y gestionarlos en PDF sin comprar una plataforma.",
  },
  {
    id: "guides/how-to-send-client-intake-forms",
    slug: "guias/como-enviar-una-ficha-de-cliente-para-rellenar",
    title: "Cómo enviar una ficha de cliente para rellenar (con limpieza y discreción)",
    description:
      "Consigue los datos de un cliente nuevo en una sola pasada. Cómo enviar una ficha en PDF fácil de rellenar, que vuelva completa y mantenga la información del cliente en privado.",
  },
  {
    id: "guides/how-to-use-pdf-forms-for-contracts",
    slug: "guias/como-usar-un-formulario-pdf-para-un-contrato",
    title: "Cómo usar un formulario PDF para un contrato (campos y firma)",
    description:
      "Convierte un contrato en un PDF rellenable: campos para nombres, fechas y rúbricas, zona de firma, y una pasada de aplanado para que la versión firmada no se pueda tocar. Con sus límites explicados con honestidad.",
  },
  {
    id: "guides/how-to-manage-pdf-application-forms",
    slug: "guias/como-gestionar-solicitudes-en-pdf",
    title: "Cómo gestionar solicitudes en PDF (recogida y revisión)",
    description:
      "¿Recibes solicitudes en PDF? Cómo recogerlas, revisarlas, compararlas y archivarlas sin perder nada de vista — un sistema sencillo para manejar una pila de formularios rellenados.",
  },
  {
    id: "guides/pdf-forms-for-consultants",
    slug: "guias/formularios-pdf-para-consultores",
    title: "Los formularios PDF del consultor (cuestionarios y alcance)",
    description:
      "Cuestionarios de descubrimiento, fichas de alcance de proyecto y formularios de opinión — el lado formularios de la consultoría, resuelto en PDF rellenables que el cliente completa desde cualquier dispositivo.",
  },
  {
    id: "guides/pdf-forms-for-agencies",
    slug: "guias/formularios-pdf-para-agencias",
    title: "Los formularios PDF en una agencia (incorporación, briefs, aprobaciones)",
    description:
      "Dosieres de incorporación de cliente, formularios de brief creativo y fichas de aprobación — los formularios a varias manos de una agencia, resueltos en PDF rellenables que cualquiera puede completar.",
  },
  {
    id: "guides/pdf-forms-for-freelancers",
    slug: "guias/formularios-pdf-para-autonomos",
    title: "Los formularios PDF del autónomo (ficha inicial, contratos, señales)",
    description:
      "Ficha de inicio de proyecto, contrato de servicio simple y autorización de señal — el conjunto mínimo de formularios PDF rellenables que necesita un autónomo, sin suscripción y sin subir nada.",
  },
  {
    id: "guides/document-collection-workflows-with-pdf",
    slug: "guias/como-recopilar-documentos-en-pdf",
    title: "Cómo recopilar documentos en PDF — un método que funciona",
    description:
      "¿Tienes que recoger archivos y formularios firmados de tus clientes? Monta una recopilación repetible: una lista, formatos homogéneos, y una forma clara de saber qué falta todavía.",
  },
  {
    id: "guides/pdf-form-best-practices",
    slug: "guias/buenas-practicas-para-formularios-pdf",
    title: "Buenas prácticas para formularios PDF (diseña formularios que se terminan)",
    description:
      "Diseña formularios que la gente termina de verdad: etiquetas claras, espacio suficiente, campos con sentido, una zona de firma evidente y una pasada de aplanado. Reglas prácticas para quien los crea y quien los envía.",
  },
  {
    id: "guides/pdf-form-not-working",
    slug: "guias/formulario-pdf-que-no-funciona",
    title: "Formulario PDF que no funciona — diagnóstico y soluciones",
    description:
      "Un formulario PDF rebelde tiene un puñado de causas habituales. Un diagnóstico rápido para identificar la tuya — campos ausentes, no deja escribir, no se guarda, solo lectura — y dónde arreglarlo.",
  },
  {
    id: "guides/pdf-form-fields-missing",
    slug: "guias/han-desaparecido-los-campos-de-un-formulario-pdf",
    title: "¿Han desaparecido los campos de un formulario PDF? Por qué y cómo recuperarlos",
    description:
      "Abres un formulario y los campos no están. Por qué los campos interactivos desaparecen en algunos lectores, cómo recuperarlos, y qué hacer si nunca los hubo.",
  },
  {
    id: "guides/why-pdf-form-wont-save",
    slug: "guias/por-que-no-se-guarda-mi-formulario-pdf",
    title: "¿Por qué no se guarda mi formulario PDF? Y cómo arreglarlo",
    description:
      "¿Rellenas un formulario y las respuestas desaparecen al reabrirlo? Por qué algunos lectores solo imprimen en vez de guardar los datos, y los métodos fiables para que todo se quede en su sitio.",
  },
  {
    id: "guides/why-pdf-form-is-read-only",
    slug: "guias/por-que-mi-formulario-pdf-es-de-solo-lectura",
    title: "¿Por qué mi formulario PDF es de solo lectura? Y qué hacer",
    description:
      "¿Tu formulario se abre bloqueado y en gris? Por qué se marca un formulario como solo lectura, cómo distinguir una protección voluntaria de un capricho del lector, y las opciones honestas para completarlo igualmente.",
  },
  {
    id: "guides/pdf-form-not-printing-correctly",
    slug: "guias/formulario-pdf-que-se-imprime-mal",
    title: "Formulario PDF que se imprime mal — cómo corregir los campos en blanco",
    description:
      "¿El formulario sale con campos en blanco, texto descolocado o bordes cortados? Los problemas de impresión propios de los formularios — sobre todo los valores que faltan — y el ajuste que corrige cada uno.",
  },
  {
    id: "guides/pdf-form-font-problems",
    slug: "guias/problemas-de-fuente-en-un-formulario-pdf",
    title: "Problemas de fuente en un formulario PDF (tamaño automático, recorte, sustitución)",
    description:
      "¿El texto sale demasiado grande, demasiado pequeño, o se encoge mientras escribes? Las particularidades de fuente propias de los campos de formulario — tamaño automático, sustitución, recorte — y cómo conseguir respuestas nítidas y legibles.",
  },
  {
    id: "guides/pdf-form-formatting-issues",
    slug: "guias/problemas-de-formato-en-un-formulario-pdf",
    title: "Problemas de formato en un formulario PDF (alineación y desbordamiento)",
    description:
      "¿Campos descolocados, respuestas que se salen, el formulario distinto en la pantalla de otra persona? Los problemas de maquetación que varían según el lector, y cómo conseguir un resultado uniforme.",
  },
  {
    id: "guides/pdf-form-submission-errors",
    slug: "guias/errores-al-enviar-un-formulario-pdf",
    title: "Errores al enviar un formulario PDF (cuando falla el botón Enviar)",
    description:
      "¿El botón de envío del formulario falla o no hace nada? Por qué estos botones dependen del servidor de quien emite el formulario, qué significan los errores, y la forma manual fiable de enviarlo tú mismo.",
  },
  {
    id: "guides/pdf-form-compatibility-problems",
    slug: "guias/problemas-de-compatibilidad-en-formularios-pdf",
    title: "Problemas de compatibilidad en formularios PDF (XFA y formularios dinámicos)",
    description:
      "Un formulario que se abre bien en un programa y falla en otro suele usar funciones que no todos los lectores admiten. Cómo detectar un formulario dinámico, de dónde viene el problema, y qué opciones tienes.",
  },
  {
    id: "guides/fix-pdf-form-errors",
    slug: "guias/como-corregir-errores-en-un-formulario-pdf",
    title: "Cómo corregir errores en un formulario PDF — checklist de primeros auxilios",
    description:
      "Los gestos de primeros auxilios para un formulario PDF rebelde: cambiar de lector, volver a descargar, actualizar, escribir por encima, aplanar. Prueba esto antes de buscar una causa concreta.",
  },
];
