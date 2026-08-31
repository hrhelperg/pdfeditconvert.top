import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-google-docs",
  h1: "PDF ou Google Docs — quando usar cada um",
  description:
    "O Google Docs é para colaborar; o PDF é para entregar. Quando usar cada um na prática e como converter de um para o outro nos momentos certos.",
  updated: "2026-05-29",
  intro: [
    "Google Docs e PDF não competem de verdade — eles servem a fases diferentes da vida de um documento. O Docs é para escrever, colaborar, revisar e comentar; o PDF é para entregar, travar, assinar e arquivar. Tentar usar qualquer um dos dois fora da sua força é de onde vem o atrito.",
    "Um documento típico passa pelos dois: é escrito no Docs, porque é ali que a colaboração acontece, e depois exportado em PDF quando a versão é final e vai sair do grupo de trabalho. No sentido contrário — receber um PDF e importar para o Docs para editar — funciona, mas sempre perde fidelidade, então é uma saída de emergência, não uma rotina.",
    "Este guia percorre o quando-usar-cada-um por fase, além da mecânica de conversão nos dois sentidos. Escolha o formato certo no momento certo e o atrito praticamente desaparece.",
  ],
  steps: [
    {
      title: "Use o Google Docs enquanto o documento está sendo escrito",
      body: "Edição de várias pessoas, cursores ao vivo, histórico de versões, comentários. O Docs resolve tudo isso com limpeza e o PDF não resolve nada disso. Escrever e revisar pertencem ao Docs.",
    },
    {
      title: "Passe para o PDF quando o documento for final ou externo",
      body: "Assim que um documento vai para um cliente, um órgão, um fornecedor ou um arquivo permanente, o PDF trava o layout e o conteúdo. O documento do Docs continua sendo a origem editável; o PDF é a entrega.",
    },
    {
      title: "Exporte do Docs para PDF com limpeza",
      body: "Arquivo → Fazer download → Documento PDF. Incorpore as fontes nas opções de exportação, se houver. O PDF resultante preserva títulos, tabelas, imagens e formatação.",
    },
    {
      title: "Converta o PDF em editável quando for necessário",
      body: "A ferramenta PDF para Word extrai o texto de um PDF no navegador. O resultado é aproximado — o layout sofre e as tabelas podem quebrar. Trate como caminho de recuperação, não como fluxo comum.",
    },
    {
      title: "Não assine nem arquive no Google Docs",
      body: "O Docs não tem suporte real a assinatura, e o histórico de versões está preso à sua conta Google. Documentos assinados e arquivos permanentes pertencem ao PDF, guardados localmente ou em um cofre pensado para isso.",
    },
    {
      title: "Case o formato a quem vai receber",
      body: "Clientes esperam PDF. Editores esperam Word ou Docs. Equipes internas podem preferir o Docs para colaborar. Mande o formato que a pessoa realmente vai usar.",
    },
  ],
  tips: [
    "Não mande um link do Google Docs para um cliente — ele pode não ter conta Google, as permissões de compartilhamento podem te surpreender e o documento continua mudando depois que ele abrir.",
    "Ao converter do Docs para PDF, confira a paginação — o que parecia uma página no Docs às vezes transborda para duas no PDF.",
    "Não “abra no Docs” um PDF que você recebeu, a menos que precise editar bastante. A conversão perde formatação; o PDF original é mais limpo para ler e compartilhar.",
    "Use o histórico de versões do Docs para a escrita colaborativa. O PDF é a fotografia no momento da entrega.",
    "Trate o Docs como fonte da verdade durante a escrita; trate o PDF como fonte da verdade depois da entrega.",
  ],
  mobileNote:
    "O celular resolve boa parte do trabalho de PDF da fase final, mesmo quando a escrita acontece no computador. O app PDF Editor cuida da compressão de última hora, da assinatura e do envio do PDF final no iOS e no Android — útil no intervalo entre “o Docs está pronto” e “o cliente recebeu o arquivo”.",
  faq: [
    {
      q: "Dá para manter tudo no Google Docs?",
      a: "Para colaboração interna, dá. Para entrega externa, não — clientes esperam PDF, e as permissões de compartilhamento do Docs podem liberar acesso de formas que você não previu.",
    },
    {
      q: "A conversão de PDF para Docs funciona bem?",
      a: "É aceitável para recuperar o texto e ruim para o layout. O texto costuma passar; tabelas, colunas e formatação precisa sofrem. Use só quando você precisa reeditar um PDF sem ter a origem.",
    },
    {
      q: "Devo assinar no Google Docs ou no PDF?",
      a: "No PDF. Assinaturas eletrônicas de verdade se ligam ao PDF com limpeza; o Docs não tem suporte nativo comparável ao das ferramentas de assinatura de PDF.",
    },
    {
      q: "E o Google Docs para arquivamento?",
      a: "É possível, mas arriscado — contas mudam, documentos podem ser apagados e o formato depende do serviço do Google. O PDF é o melhor formato de arquivo permanente.",
    },
    {
      q: "Dá para ir e voltar entre Docs, PDF e Docs?",
      a: "Dá, mas com perdas. Cada conversão perde fidelidade. Guarde o documento original do Docs como origem editável e só faça a ida e volta quando não houver alternativa.",
    },
  ],
  related: [
    { label: "Conversor de PDF — Word, JPG, PNG e o caminho de volta", path: "/pdf-converter" },
    { label: "PDF para Word — converta para edição pesada", path: "/pdf-to-word" },
    { label: "PDF ou DOCX — comparação de recursos", path: "/guides/pdf-vs-docx" },
    { label: "PDF ou DOCX para empresas", path: "/guides/pdf-vs-docx-for-business" },
  ],
  parentHub: { label: "Conversor de PDF", path: "/pdf-converter" },
};

export default content;
