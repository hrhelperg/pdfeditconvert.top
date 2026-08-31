import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-add-watermark-to-pdf",
  h1: "Como adicionar marca d'água em um PDF",
  description:
    "Carimbe textos como RASCUNHO ou CONFIDENCIAL em todas as páginas de um PDF, no navegador. O que uma marca d'água protege — e o que ela não protege.",
  updated: "2026-05-23",
  intro: [
    "Marca d'água é um rótulo escrito sobre a página — RASCUNHO, CONFIDENCIAL, o nome da empresa, o e-mail de quem recebe. As pessoas recorrem a ela para sinalizar situação (“isto não é a versão final”), marcar autoria ou desestimular o repasse casual, carimbando para quem aquela cópia foi feita.",
    "Este guia usa a ferramenta gratuita Marca d'água em PDF, que aplica uma marca de texto sobre todas as páginas direto no navegador — sem enviar nada. É rápida, privada e útil justamente para os usos de sinalização acima.",
    "É igualmente importante deixar claro o que a marca d'água não é: ela não é segurança. Vamos cobrir onde ela ajuda de verdade e onde você precisa de proteção real, para não contar com ela numa função que ela não cumpre.",
  ],
  steps: [
    {
      title: "Abra a ferramenta Marca d'água em PDF",
      body: "Vá até a ferramenta Marca d'água em PDF no navegador. Ela roda no seu aparelho — sem upload e sem conta.",
    },
    {
      title: "Escolha o PDF",
      body: "Arraste o arquivo até a área de soltar ou clique para escolhê-lo. A marca d'água será aplicada em todas as páginas do documento.",
    },
    {
      title: "Digite o texto da marca",
      body: "Escreva o rótulo desejado — RASCUNHO, CONFIDENCIAL, o nome da sua empresa ou um identificador de quem recebe. Mantenha curto para ler bem sobre a página.",
    },
    {
      title: "Aplique a marca d'água",
      body: "Rode a ferramenta. O seu texto é carimbado sobre cada página de uma nova cópia do documento.",
    },
    {
      title: "Confira a legibilidade dos dois lados",
      body: "Verifique se a marca está visível o bastante para cumprir a função, mas leve o suficiente para o texto por baixo continuar legível. Uma marca que esconde o conteúdo perde o propósito.",
    },
    {
      title: "Baixe a cópia marcada",
      body: "Salve o resultado como um arquivo novo, para manter um original limpo e sem marca nos seus registros.",
    },
  ],
  tips: [
    "Marca d'água é um rótulo visual, não proteção. Qualquer pessoa pode tirar print, imprimir ou reprocessar a página — trate como um aviso, não como uma tranca.",
    "Use uma marca com o nome ou o e-mail de quem recebe nas cópias que você compartilha, para desestimular o repasse — as pessoas são menos descuidadas com um documento visivelmente carimbado para elas.",
    "Mantenha o texto curto. Uma frase longa quebrada sobre a página compete com o conteúdo e vira poluição visual.",
    "Sempre marque uma cópia, nunca o seu arquivo mestre. A ideia toda é que o original continue limpo.",
    "Se você realmente precisa impedir a abertura, a cópia ou a edição, isso é trabalho de senha e criptografia — veja o guia sobre proteger um PDF, e não uma marca d'água.",
  ],
  mobileNote:
    "Marcar um documento como RASCUNHO ou CONFIDENCIAL antes de enviá-lo pelo celular leva segundos no app PDF Editor, que aplica marcas d'água offline e permite assinar ou proteger na mesma sessão — útil quando uma proposta sai antes de estar realmente pronta.",
  faq: [
    {
      q: "A marca d'água protege o meu documento?",
      a: "Não. A marca d'água é um rótulo visível, não segurança. Ela sinaliza situação ou autoria, mas não impede cópia, impressão ou edição. Para isso, use proteção por senha e criptografia.",
    },
    {
      q: "A marca aparece em todas as páginas?",
      a: "Aparece. A ferramenta carimba o seu texto em todas as páginas do documento, para o rótulo ficar consistente do começo ao fim.",
    },
    {
      q: "A marca d'água pode ser removida?",
      a: "Uma pessoa determinada consegue contornar qualquer marca visível, e é por isso que ela funciona como dissuasão, não como proteção. Guarde o seu original sem marca separadamente.",
    },
    {
      q: "Meu PDF é enviado?",
      a: "Não. A marca é aplicada no seu navegador, no seu aparelho, então o arquivo continua privado.",
    },
    {
      q: "Dá para usar imagem ou logotipo como marca d'água?",
      a: "A ferramenta de navegador aplica marca de texto. Para sobrepor uma imagem ou um logotipo, o app PDF Editor oferece mais opções.",
    },
  ],
  related: [
    { label: "Marca d'água em PDF — no navegador", path: "/add-watermark-to-pdf" },
    { label: "Como proteger um arquivo PDF com senha", path: "/guides/how-to-protect-pdf-file" },
    { label: "Como preparar um PDF antes de compartilhar", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Segurança de PDF — proteja documentos", path: "/pdf-security" },
  ],
  parentHub: { label: "Marca d'água em PDF", path: "/add-watermark-to-pdf" },
};

export default content;
