import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-remove-unwanted-pages-from-pdf",
  h1: "Cómo eliminar páginas no deseadas de un PDF",
  description:
    "Quita páginas en blanco, portadas o secciones que no interesan de un PDF en tu navegador, quedándote solo con las páginas que quieres. Archivos limpios, proceso privado.",
  updated: "2026-05-23",
  intro: [
    "Muchos PDF llegan con páginas que no quieres: una portada de fax, una página en blanco que metió el escáner, un anexo de términos y condiciones que nadie pidió, o páginas duplicadas de una unión descuidada. Enviar el documento con ese lastre pegado se ve descuidado y, en ocasiones, filtra información que preferirías no compartir.",
    "La forma más limpia de quitar páginas en el navegador es conservar las que quieres. Esta guía usa la herramienta gratuita Extraer páginas de PDF: en lugar de eliminar páginas no deseadas una a una, listas las páginas que quieres conservar, y todo lo demás simplemente se queda fuera del archivo nuevo. Funciona por completo en tu dispositivo — no se sube nada.",
    "El resultado es un PDF ordenado con solo las páginas que corresponden, y tu original queda intacto por si te equivocas con un número de página.",
  ],
  steps: [
    {
      title: "Identifica las páginas que quieres quitar",
      body: "Abre el PDF y anota qué páginas no quieres — la página 2 en blanco, la portada, el duplicado del final. Después averigua cuáles quieres conservar.",
    },
    {
      title: "Abre la herramienta Extraer páginas de PDF",
      body: "Ve a la herramienta Extraer páginas de PDF en tu navegador. Funciona en tu dispositivo sin subida ni cuenta.",
    },
    {
      title: "Añade tu PDF",
      body: "Arrastra el archivo a la zona de soltar o haz clic para elegirlo. La herramienta carga el número de páginas para que puedas ser preciso.",
    },
    {
      title: "Lista las páginas que quieres conservar",
      body: "Introduce las páginas y rangos que quieres mantener — por ejemplo 1, 3-7, 9. Las páginas no deseadas no se listan, así que no aparecen en el resultado.",
    },
    {
      title: "Crea el PDF limpio",
      body: "Ejecuta la extracción. La herramienta construye un archivo nuevo que contiene solo las páginas que conservaste, en orden.",
    },
    {
      title: "Comprueba y guarda",
      body: "Abre el nuevo PDF, confirma que las páginas no deseadas han desaparecido y que no se ha ido nada importante con ellas, y guárdalo con un nombre claro.",
    },
  ],
  tips: [
    "Eliminar páginas conservando el resto es el método fiable en el navegador — describes lo que quieres, no lo que hay que borrar, lo que evita errores de un número de más o de menos.",
    "Vigila las páginas en blanco de los escáneres. Un alimentador de documentos suele insertar una en blanco entre originales a doble cara; son las páginas que más se olvida quitar.",
    "Quitar una página también es un paso de privacidad. Notas internas, un precio que no querías compartir, o los datos de un destinatario anterior pueden esconderse en páginas que no necesitas enviar.",
    "Verifica los números de página contra el propio documento. Una portada puede desplazar el recuento, de modo que «la página 5» en tu cabeza sea la página 6 del archivo.",
    "Conserva el original. Si por accidente quitas una página que necesitabas, la fuente intacta está ahí para volver a hacerlo.",
  ],
  mobileNote:
    "Recortar una página suelta antes de reenviar un documento desde el móvil son unos pocos toques en la app PDF Editor, que elimina páginas directamente y funciona sin conexión — así la portada o la página en blanco nunca llegan a la copia que envías.",
  faq: [
    {
      q: "¿Cómo elimino páginas con una herramienta de navegador?",
      a: "Conserva las páginas que quieres con la herramienta Extraer páginas de PDF. Al listar solo las páginas que quieres mantener, las no deseadas quedan fuera del archivo nuevo — una forma limpia de eliminar páginas sin un paso de borrado.",
    },
    {
      q: "¿Se modificará mi archivo original?",
      a: "No. La herramienta crea un PDF nuevo y deja la fuente intacta, así que un error es fácil de deshacer empezando de nuevo.",
    },
    {
      q: "¿Se sube el archivo a algún sitio?",
      a: "No. Todo se ejecuta en tu navegador, en tu dispositivo, lo cual importa cuando las páginas que estás eliminando contienen información sensible.",
    },
    {
      q: "¿Puedo eliminar páginas no consecutivas?",
      a: "Sí. Conserva una mezcla de páginas individuales y rangos, como 1, 4, 8-10, y cada página que no listaste se descarta.",
    },
    {
      q: "¿Y si prefiero eliminar páginas directamente?",
      a: "La app móvil PDF Editor te deja tocar y eliminar páginas concretas, algo que a algunas personas les resulta más intuitivo que el enfoque de conservar lo que quieres.",
    },
  ],
  related: [
    { label: "Extraer páginas de PDF — conserva solo lo que quieres", path: "/extract-pdf-pages" },
    { label: "Dividir PDF — reparte un archivo por rango", path: "/split-pdf" },
    { label: "Cómo extraer páginas de un PDF", path: "/guides/how-to-extract-pages-from-pdf" },
    { label: "Cómo organizar tus archivos PDF", path: "/guides/how-to-organize-pdf-files" },
  ],
  parentHub: { label: "Extraer páginas de PDF", path: "/extract-pdf-pages" },
};

export default content;
