import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "common-pdf-mistakes-to-avoid",
  h1: "Erros comuns com PDF que você deve evitar",
  description:
    "Os erros com PDF que fazem perder tempo ou vazar informação — comprimir demais, mandar foto, subir arquivo sigiloso, esquecer páginas — e como escapar de cada um.",
  updated: "2026-05-23",
  intro: [
    "A maioria dos problemas com PDF não é técnica — são hábitos evitáveis. O arquivo que voltou porque ninguém comprimiu, a foto mandada no lugar de um documento, o contrato subido para um servidor qualquer, a página que não deveria ter saído e saiu. Cada um é pequeno, cada um é comum e cada um é fácil de evitar depois que você sabe o que procurar.",
    "Este guia reúne os erros que as pessoas mais cometem com PDF, por que cada um dói e qual é a solução rápida. Várias soluções usam as ferramentas gratuitas deste site, que rodam no aparelho; todas elas são mais hábito do que recurso.",
    "Leia uma vez e você vai se pegar antes do próximo tropeço evitável — o que, com documentos que vão para clientes, colegas e instituições, vale mais do que parece.",
  ],
  steps: [
    {
      title: "Mandar uma foto no lugar de um documento",
      body: "Um JPG de uma página é torto, não pesquisável e desconfortável de imprimir ou arquivar. Se é um documento, converta em PDF antes com a ferramenta Imagem para PDF, ou digitalize direito — não deixe o trabalho com quem recebe.",
    },
    {
      title: "Subir arquivos sigilosos para ferramentas desconhecidas",
      body: "Jogar um contrato ou um documento pessoal no primeiro serviço de “PDF online grátis” o envia para o servidor de um desconhecido. Use ferramentas no aparelho, que rodam no navegador, para qualquer coisa que você não gostaria que fosse lida.",
    },
    {
      title: "Comprimir demais por hábito",
      body: "Puxar a compressão ao máximo em todo arquivo degrada documentos que não precisavam. Use o nível mais leve que atinge a sua meta de tamanho e não comprima arquivos que já são pequenos.",
    },
    {
      title: "Esquecer de conferir as páginas antes de enviar",
      body: "Anotações internas, dados de um destinatário anterior, uma folha em branco do scanner — tudo isso pega carona sem ninguém notar. Revise página por página e descarte o que não deve sair com a ferramenta Extrair páginas do PDF.",
    },
    {
      title: "Mandar um arquivo editável como “final”",
      body: "Um orçamento ou contrato pronto enviado como documento do Word pode ser editado, por acidente ou não. Converta as versões finais em PDF, para o layout e os números ficarem fixos.",
    },
    {
      title: "Sobrescrever o seu único original",
      body: "Compressão, conversão e edição são de mão única para a cópia que você guarda. Salve sempre as versões editadas com um nome novo, para o original intocado sobreviver a um erro.",
    },
  ],
  tips: [
    "Trate “isto é um documento ou uma imagem?” como a primeira pergunta. Documentos vão em PDF; só figuras de verdade vão em JPG.",
    "Privacidade é hábito, não configuração. Use ferramentas no aparelho por padrão em arquivos sensíveis, para nunca precisar lembrar de ter cuidado.",
    "Comprima de propósito, não por reflexo — case o nível ao objetivo e pule a compressão em arquivos que já têm um tamanho sensato.",
    "Uma conferência página por página de dez segundos antes de enviar evita os erros mais constrangedores que existem com PDF.",
    "Guarde os originais. Quase toda operação de PDF só é reversível se você não sobrescreveu a origem.",
  ],
  mobileNote:
    "Muitos desses tropeços acontecem na pressa de mandar algo pelo celular. O app PDF Editor permite tirar uma página perdida, comprimir com bom senso, converter uma foto e travar uma versão final — tudo no aparelho —, então um envio apressado não vira um erro para se desculpar depois.",
  faq: [
    {
      q: "Qual é o erro mais comum com PDF?",
      a: "Mandar uma foto JPG quando a pessoa precisava de um documento. Fica torto, não é pesquisável e é difícil de imprimir ou arquivar. Converter a foto em PDF antes resolve.",
    },
    {
      q: "Por que subir PDFs para ferramentas gratuitas é arriscado?",
      a: "Muitas ferramentas “online” enviam o seu arquivo para um servidor, então um contrato ou documento pessoal passa brevemente por uma infraestrutura que você não controla. Ferramentas de navegador que rodam no aparelho evitam isso por completo.",
    },
    {
      q: "Mais compressão é sempre melhor?",
      a: "Não. Comprimir demais degrada documentos que não precisavam e não faz nada por arquivos que já são pequenos. Use o nível mais leve que atinge a sua meta de tamanho.",
    },
    {
      q: "Como evito mandar as páginas erradas?",
      a: "Revise o documento página por página antes de enviar e remova o que não deve sair com a ferramenta Extrair páginas do PDF. Anotações internas e páginas perdidas são os suspeitos de sempre.",
    },
    {
      q: "Por que eu não deveria sobrescrever o arquivo original?",
      a: "Compressão, conversão e edições são de mão única para a cópia que você guarda. Salvar com um nome novo preserva o original e deixa qualquer erro fácil de desfazer.",
    },
  ],
  related: [
    { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
    { label: "Como preparar um PDF antes de compartilhar", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Ferramentas de PDF que respeitam a privacidade", path: "/guides/privacy-first-pdf-tools" },
    { label: "PDF ou JPG para documentos", path: "/guides/pdf-vs-jpg-for-documents" },
  ],
  parentHub: { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
};

export default content;
