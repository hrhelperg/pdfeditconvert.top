import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-out-a-pdf-form",
  h1: "Como preencher um formulário PDF",
  description:
    "Preencha qualquer formulário PDF, tenha ele campos de verdade ou seja uma digitalização plana em que você escreve por cima. O passo a passo completo no computador e no celular, com assinatura e como salvar.",
  updated: "2026-06-01",
  intro: [
    "Preencher um formulário PDF é simples depois que você sabe qual dos dois tipos tem em mãos. Um formulário interativo tem campos em que você toca e digita; um formulário plano é uma imagem de página em que você posiciona o seu próprio texto. A maioria é um ou outro, às vezes uma mistura, e os dois dão para completar digitalmente sem chegar perto de uma impressora.",
    "Este é o passo a passo completo — o centro do assunto, cobrindo o caso interativo e o plano, no computador e no celular. A mecânica é sempre a mesma ideia: colocar as suas respostas na página, resolver caixas de seleção e datas, assinar se for pedido, salvar uma cópia limpa e guardar o original em branco.",
    "Se você quer especificamente os passos no celular, os guias de iPhone e Android vão mais fundo. Aqui a meta é o método universal, que funciona em qualquer aparelho, com notas honestas sobre onde os formulários costumam complicar.",
  ],
  steps: [
    {
      title: "Abra o formulário e faça o teste do toque",
      body: "Abra o PDF e clique ou toque onde entra a primeira resposta. Cursor ou caixa acesa significa campos interativos; nada acontecendo significa que ele é plano e você mesmo vai acrescentar o texto.",
    },
    {
      title: "Preencha os campos interativos digitando",
      body: "Toque em um campo e digite. Use Tab ou role a página para andar entre os campos, clique nas caixas de seleção para marcá-las e abra as listas suspensas para escolher as opções fixas. Vá de cima para baixo para não pular nenhum.",
    },
    {
      title: "Preencha formulários planos com caixas de texto",
      body: "Em um formulário sem campos, use a ferramenta de texto para soltar a sua resposta em cada linha. Aproxime o zoom antes, para o texto cair certinho na linha em vez de flutuar acima ou abaixo dela.",
    },
    {
      title: "Resolva caixas de seleção, datas e escolhas",
      body: "Marque as caixas interativas direto; em formulários planos, posicione um visto ou um X. Preencha as datas onde forem exigidas, seguindo o formato que o formulário mostra (dia/mês/ano ou mês/dia/ano).",
    },
    {
      title: "Assine se o formulário pedir",
      body: "Use a ferramenta de assinatura para acrescentar uma assinatura digitada ou desenhada à mão na área indicada. O mesmo passo vale tanto para um campo de assinatura interativo quanto para uma simples linha impressa.",
    },
    {
      title: "Salve uma cópia preenchida e guarde o original",
      body: "Exporte a versão finalizada como um arquivo novo, achatando se quiser travar as respostas. Guarde o original em branco para preencher uma cópia limpa na próxima vez.",
    },
  ],
  tips: [
    "Mantenha sempre o original em branco intocado — preencher uma cópia limpa é mais organizado do que editar as respostas da vez passada.",
    "Em formulários planos, use um tamanho de texto constante para todas as respostas ficarem uniformes em vez de uma colcha de retalhos.",
    "Confira os campos obrigatórios antes de enviar; um formulário devolvido por causa de uma caixa em branco custa mais tempo do que uma revisão final.",
    "Se um campo não aceita digitação, o formulário pode ser plano ou estar bloqueado — passe a posicionar texto por cima ou consulte os guias de solução de problemas.",
    "Achate o formulário antes de enviar se quiser que as respostas apareçam do mesmo jeito para todo mundo que receber.",
  ],
  mobileNote:
    "O app PDF Editor preenche formulários interativos e planos no iPhone e no Android: ele detecta os campos reais onde eles existem e deixa você posicionar texto e marcações em qualquer lugar quando não existem. Assine na mesma sessão e exporte a cópia preenchida — tudo no aparelho, sem upload.",
  faq: [
    {
      q: "Como preencho um formulário PDF que não tem campos?",
      a: "Use a ferramenta de texto de um editor de PDF para posicionar as respostas direto na página, acrescente os vistos onde precisar e exporte. O formulário é plano, então você deposita texto por cima em vez de digitar em campos.",
    },
    {
      q: "Dá para preencher um formulário PDF de graça?",
      a: "Dá. Ferramentas gratuitas de navegador e de celular preenchem formulários interativos e planos. O app PDF Editor preenche e assina sem exigir conta.",
    },
    {
      q: "Preciso imprimir o formulário para preencher?",
      a: "Quase nunca. Os dois tipos podem ser completados na tela e devolvidos digitalmente. Imprima só se quem recebe exigir mesmo uma via em papel assinada à mão.",
    },
    {
      q: "Por que o formulário não deixa eu digitar?",
      a: "Normalmente ele é plano (sem campos), foi aberto em um leitor que não suporta campos ou está bloqueado. Tente posicionar texto por cima, troque para uma ferramenta que lide com formulários ou consulte os guias de solução de problemas.",
    },
    {
      q: "Como garanto que as minhas respostas não sejam apagadas?",
      a: "Salve com uma ferramenta que grave os valores dos campos no arquivo e achate o formulário antes de enviar, para as respostas se fundirem de vez à página.",
    },
  ],
  related: [
    { label: "O que é um formulário PDF?", path: "/guides/what-is-a-pdf-form" },
    { label: "Como preencher formulários PDF no iPhone", path: "/guides/how-to-fill-pdf-forms-on-iphone" },
    { label: "Como preencher formulários PDF no Android", path: "/guides/how-to-fill-pdf-forms-on-android" },
    { label: "Como salvar um formulário PDF preenchido", path: "/guides/how-to-save-a-filled-pdf-form" },
    { label: "Boas práticas para formulários PDF", path: "/guides/pdf-form-best-practices" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
