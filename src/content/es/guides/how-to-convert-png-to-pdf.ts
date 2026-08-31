import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-png-to-pdf",
  h1: "Cómo convertir un PNG a PDF — capturas y gráficos nítidos",
  description:
    "Convierte tus capturas de pantalla, diagramas y gráficos PNG en un solo PDF en tu navegador. Por qué el PNG mantiene el texto nítido y qué pasa con la transparencia.",
  updated: "2026-05-23",
  intro: [
    "PNG es el formato que obtienes al hacer una captura de pantalla, exportar un gráfico o guardar una imagen con bordes nítidos. A diferencia del JPG, no tiene pérdida, así que el texto y las líneas finas se mantienen nítidos en lugar de difuminarse por la compresión. Eso hace del PNG el punto de partida correcto cuando quieres agrupar capturas o diagramas en un PDF que se mantenga legible.",
    "Esta guía usa la herramienta gratuita Imagen a PDF para combinar archivos PNG en un solo documento, directamente en tu navegador y sin subir nada. Trabajos típicos: una secuencia de capturas de interfaz para una revisión, gráficos exportados para un informe, o una imagen que alguien necesita como archivo imprimible y compartible en lugar de una imagen suelta.",
    "Hay una peculiaridad propia del PNG que merece la pena conocer — la transparencia — y veremos qué le pasa cuando un PNG se convierte en una página de PDF.",
  ],
  steps: [
    {
      title: "Abre la herramienta Imagen a PDF",
      body: "Ve a la herramienta Imagen a PDF en tu navegador. Gestiona PNG, JPG y WebP, y funciona por completo en tu dispositivo, sin subida ni cuenta.",
    },
    {
      title: "Añade tus archivos PNG",
      body: "Arrastra las capturas o los gráficos a la zona de soltar, o haz clic para seleccionarlos. Cada PNG se convierte en una página del PDF resultante.",
    },
    {
      title: "Ordena las páginas",
      body: "Usa las flechas arriba y abajo para colocar las capturas en la secuencia que cuenta la historia — el paso uno antes del paso dos.",
    },
    {
      title: "Genera el PDF",
      body: "Haz clic en Crear PDF. La herramienta coloca cada imagen en su propia página con las dimensiones de la imagen y construye el archivo combinado en local.",
    },
    {
      title: "Descarga el documento",
      body: "El PDF se descarga automáticamente. Renómbralo para que coincida con su contenido, así es fácil de encontrar y evidente para quien lo abra.",
    },
    {
      title: "Comprueba que las páginas se ven nítidas",
      body: "Abre el PDF y haz zoom sobre cualquier texto. El PNG mantiene la letra nítida, así que las capturas de paneles, código o condiciones deberían seguir siendo legibles.",
    },
  ],
  tips: [
    "El PNG es mejor opción que el JPG siempre que la imagen contenga texto, interfaz o líneas nítidas — la compresión del JPG suaviza precisamente esos bordes.",
    "Las zonas transparentes de un PNG no siguen siendo transparentes en una página de PDF; se renderizan sobre fondo blanco. Si diseñaste un logotipo sobre fondo transparente, quedará sobre blanco, lo cual suele estar bien.",
    "Las capturas de pantalla completas pueden ser altas y estrechas. Se convierten sin problema, pero considera recortar a la parte que importa para que la página no quede en su mayoría vacía.",
    "Los archivos PNG son más grandes que los JPG para la misma imagen. Una tanda larga de capturas en alta resolución puede producir un PDF pesado — compímelo si vas a enviarlo por correo.",
    "Para un tamaño de página uniforme (todo ajustado a A4) en lugar de páginas ajustadas a cada imagen, la app PDF Editor te da ese control.",
  ],
  mobileNote:
    "Las capturas de pantalla se acumulan en el móvil. La app PDF Editor convierte un lote de ellas en un solo PDF en unos pocos toques, y te deja anotar o resaltar la parte importante antes de compartir — útil para informes de errores y revisiones rápidas sobre la marcha.",
  faq: [
    {
      q: "¿Por qué elegir PNG en vez de JPG para un PDF?",
      a: "El PNG no tiene pérdida, así que el texto, las capturas y los diagramas se mantienen nítidos. El JPG tiene pérdida y suaviza los bordes finos. Si tus imágenes contienen letras o interfaz, el PNG produce un PDF más limpio.",
    },
    {
      q: "¿Qué pasa con los fondos transparentes?",
      a: "Una página de PDF no es transparente, así que las zonas transparentes se renderizan sobre blanco. Un logotipo o icono con fondo transparente simplemente quedará sobre una página blanca.",
    },
    {
      q: "¿Se suben mis archivos?",
      a: "No. Todo se ejecuta en tu navegador, en tu dispositivo. Tus capturas y gráficos nunca salen de él.",
    },
    {
      q: "¿Puedo mezclar PNG y JPG en el mismo PDF?",
      a: "Sí. La herramienta acepta PNG, JPG y WebP juntos, así que puedes combinar una captura, una foto y un gráfico exportado en un solo documento.",
    },
    {
      q: "El PDF ha salido grande — ¿qué puedo hacer?",
      a: "Las páginas PNG pesan. Pasa el archivo por la herramienta Comprimir PDF para que quede por debajo de los límites de correo y de subida, aceptando una pequeña pérdida de calidad.",
    },
  ],
  related: [
    { label: "Imagen a PDF — combina PNG en tu navegador", path: "/image-to-pdf" },
    { label: "PDF a imágenes — la conversión inversa", path: "/pdf-to-images" },
    { label: "Cómo convertir JPG a PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Cómo convertir WebP a PDF", path: "/guides/how-to-convert-webp-to-pdf" },
  ],
  parentHub: { label: "Convertidor de PDF", path: "/pdf-converter" },
};

export default content;
