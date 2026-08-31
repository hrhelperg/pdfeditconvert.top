import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-word-to-pdf",
  h1: "Como converter Word em PDF (e travar o layout)",
  description:
    "Transforme um arquivo .docx ou .txt em um PDF limpo e pronto para enviar, no navegador. Por que o PDF é o formato certo e o que conferir antes de exportar.",
  updated: "2026-05-23",
  intro: [
    "Mandar um documento do Word para alguém de fora da sua configuração é uma pequena aposta. A pessoa pode abrir em outra versão do Word, no Google Docs ou num celular sem nenhum app de escritório — e o layout que você arrumou com cuidado pode deslocar, refluir ou simplesmente não abrir. Converter em PDF elimina essa aposta. Um PDF aparece igual em todo lugar e não é editado por acidente.",
    "Este guia mostra como transformar um arquivo .docx ou .txt em PDF com a ferramenta gratuita Word para PDF, que roda no navegador e não envia nada. É a decisão certa sempre que um documento está pronto e vai para outra pessoa: um orçamento, uma carta de apresentação, uma cobrança, um formulário assinado, um relatório para um cliente.",
    "Também vamos cobrir as poucas coisas que vale conferir antes de exportar, para o PDF que você envia ser exatamente o que você queria enviar.",
  ],
  steps: [
    {
      title: "Termine a edição no Word primeiro",
      body: "Um PDF é uma fotografia, não um documento de trabalho. Faça todas as alterações que pretende fazer no Word, no Google Docs ou no Pages antes de converter — corrigir um erro depois significa converter de novo.",
    },
    {
      title: "Abra a ferramenta Word para PDF",
      body: "Vá até a ferramenta Word para PDF no seu navegador. Não há nada para instalar e nenhum cadastro; a conversão acontece no seu aparelho.",
    },
    {
      title: "Escolha o arquivo .docx ou .txt",
      body: "Arraste o arquivo até a área de soltar ou clique para selecioná-lo. Arquivos .txt simples também convertem — útil para transformar anotações ou registros em um documento organizado.",
    },
    {
      title: "Converta e baixe",
      body: "Clique em Converter para PDF. A ferramenta renderiza o seu documento e o PDF é baixado automaticamente, pronto para anexar ou enviar.",
    },
    {
      title: "Abra o PDF e revise",
      body: "Abra sempre o resultado antes de enviar. Confirme se as quebras de página caem em pontos razoáveis, se os títulos estão onde você espera e se nada ficou cortado na margem.",
    },
    {
      title: "Renomeie para algo descritivo",
      body: "“Cobranca-Acme-2026-05.pdf” diz a quem recebe o que está olhando; “Documento1.pdf” não diz nada. Um nome claro também ajuda o arquivo a aparecer numa busca depois.",
    },
  ],
  tips: [
    "Prefira fontes comuns (Calibri, Arial, Times New Roman, Inter). Fontes exóticas podem ser substituídas durante a conversão e deslocar o seu layout.",
    "Se o seu documento depende de um tamanho de página específico, defina isso no Word antes de converter, em vez de esperar que a ferramenta adivinhe.",
    "Converter em PDF não criptografa nem impede a cópia — só evita a edição casual. Para proteção de verdade, adicione uma senha à parte.",
    "Recursos complexos do Word, como comentários embutidos, controle de alterações e macros, não fazem parte de um PDF. Aceite ou remova as alterações controladas antes, para não aparecerem no resultado.",
    "Para um documento que você vai precisar editar de novo, guarde o .docx. O PDF é a via de envio, não o seu arquivo mestre.",
  ],
  mobileNote:
    "Precisa mandar um documento pronto pelo celular? O app PDF Editor transforma documentos em PDF, assina e compartilha direto pela folha de compartilhamento — útil quando um contrato precisa voltar antes de você chegar a uma mesa.",
  faq: [
    {
      q: "A minha formatação sobrevive à conversão?",
      a: "Em documentos comuns, com fontes comuns, sim — é justamente para isso que o PDF existe. O ponto de atenção são as fontes incomuns, que podem ser substituídas. Abra o PDF e confira antes de enviar.",
    },
    {
      q: "Dá para converter um arquivo .txt também?",
      a: "Dá. Arquivos de texto simples viram um PDF limpo e legível, o que é uma forma rápida de deixar anotações, registros ou dados exportados apresentáveis.",
    },
    {
      q: "Meu documento é enviado para algum lugar?",
      a: "Não. A conversão roda no seu navegador, no seu próprio aparelho, então o arquivo nunca sai dele. Isso importa em contratos, cobranças e qualquer coisa com dados pessoais.",
    },
    {
      q: "Converter em PDF protege o documento?",
      a: "Evita a edição casual e trava o layout, mas não é criptografia. Se você precisa impedir que o arquivo seja aberto ou copiado, adicione uma senha — só converter não faz isso.",
    },
    {
      q: "Dá para editar o PDF depois?",
      a: "PDFs servem para correções e assinaturas, não para reescrita pesada. Se você precisa mudar bastante coisa, edite o .docx original e exporte de novo, ou converta o PDF de volta em Word.",
    },
  ],
  related: [
    { label: "Word para PDF — converta no navegador", path: "/word-to-pdf" },
    { label: "PDF para Word — a conversão inversa", path: "/pdf-to-word" },
    { label: "Como converter PDF em Word", path: "/guides/how-to-convert-pdf-to-word" },
    { label: "Quando usar PDF em vez de DOCX", path: "/guides/when-to-use-pdf-instead-of-docx" },
  ],
  parentHub: { label: "Conversor de PDF", path: "/pdf-converter" },
};

export default content;
