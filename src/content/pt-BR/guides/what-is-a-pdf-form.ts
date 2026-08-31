import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "what-is-a-pdf-form",
  h1: "O que é um formulário PDF?",
  description:
    "Um formulário PDF é um documento feito para coletar respostas — às vezes com campos de verdade para digitar, às vezes uma página plana em que você escreve por cima. O que isso significa e como identificar.",
  updated: "2026-06-01",
  intro: [
    "Formulário PDF é qualquer PDF pensado para coletar informação de quem o abre: uma inscrição de emprego, uma declaração, um termo de consentimento, uma ficha de agendamento. O que separa um formulário de um PDF comum é a intenção — ele espera que você acrescente respostas, não que só leia. A parte confusa é que dois formulários podem parecer idênticos na tela e se comportar de formas completamente diferentes na hora de preencher.",
    "A diferença está em ter ou não campos interativos. Um formulário interativo tem caixas que o autor colocou no arquivo — toque em uma e aparece o cursor, pronto para digitar. Um formulário plano não tem nenhuma; ele é praticamente uma foto de um formulário, muitas vezes a digitalização de um papel, em que as linhas e os rótulos fazem parte da imagem em vez de serem áreas ativas. Os dois são formulários e os dois dão para preencher, mas pedem tratamentos diferentes.",
    "Saber com qual dos dois você está lidando leva uns dois segundos e evita muita frustração. Este guia explica o que é um formulário PDF de fato, os dois tipos que você vai encontrar e como distingui-los antes de começar a preencher.",
  ],
  steps: [
    {
      title: "Entenda que um formulário existe para ser preenchido",
      body: "Diferente de um relatório ou contrato que você só lê, um formulário tem lacunas esperando respostas — linhas de nome, caixas de seleção, área de assinatura. É essa intenção que faz dele um formulário, não importa como foi produzido.",
    },
    {
      title: "Identifique um formulário interativo",
      body: "Abra o PDF e toque ou clique onde uma resposta deveria entrar. Se aparecer um cursor de texto, um campo acender ou uma caixa marcar, o formulário tem campos interativos que o autor colocou de propósito.",
    },
    {
      title: "Identifique um formulário plano",
      body: "Se tocar em uma lacuna não faz nada — sem cursor, sem destaque — o formulário é plano. As linhas e os rótulos estão embutidos na imagem da página, então não existe nada para digitar diretamente.",
    },
    {
      title: "Veja como ele foi criado",
      body: "Formulários exportados de programas de criação de formulários costumam ser interativos. Formulários que foram impressos, assinados à mão e digitalizados de volta são quase sempre planos. Conhecer a origem já prevê o tipo.",
    },
    {
      title: "Escolha a forma certa de preencher",
      body: "Formulários interativos: toque e digite. Formulários planos: acrescente suas próprias caixas de texto e marcações por cima da página. Um editor de PDF competente resolve os dois no mesmo arquivo.",
    },
  ],
  tips: [
    "O teste mais rápido é o do toque — encoste em uma linha em branco. Cursor significa interativo; nada acontecendo significa plano.",
    "Um formulário pode ser parcialmente interativo: alguns campos são reais e outros faltam. Preencha os reais e acrescente texto à mão nas lacunas.",
    "Formulários interativos são mais fáceis de preencher com limpeza, mas os planos funcionam perfeitamente — você é que posiciona o texto.",
    "Se você está criando um formulário para outras pessoas, faça-o interativo sempre que possível; isso facilita muito a vida de quem recebe.",
    "A aparência do formulário pode variar entre leitores de PDF, então um campo que aparece de um jeito no seu celular pode aparecer um pouco diferente no computador de outra pessoa.",
  ],
  mobileNote:
    "No celular, o app PDF Editor confere se o formulário tem campos interativos ao abrir: onde eles existem, você toca e digita; onde não existem, você posiciona texto e marcações em qualquer ponto da página. De um jeito ou de outro dá para assinar e exportar uma cópia preenchida sem imprimir.",
  faq: [
    {
      q: "Todo PDF é um formulário?",
      a: "Não. Um PDF só conta como formulário quando serve para coletar respostas — campos, caixas de seleção, linhas de assinatura. Um relatório ou artigo é um PDF, mas não um formulário.",
    },
    {
      q: "Como sei se o meu formulário PDF é interativo ou plano?",
      a: "Toque ou clique em uma lacuna onde entra uma resposta. Se aparecer o cursor e você conseguir digitar, é interativo. Se não acontecer nada, é plano e você acrescenta texto por cima.",
    },
    {
      q: "Dá para preencher um formulário PDF plano?",
      a: "Dá. Um formulário plano não tem campos, mas você pode posicionar o seu próprio texto e as marcações em qualquer ponto da página com um editor de PDF e depois exportar o arquivo preenchido.",
    },
    {
      q: "Por que alguém mandaria um formulário plano em vez de um interativo?",
      a: "Normalmente porque ele começou em papel e foi digitalizado, ou porque a ferramenta que o gerou não cria campos. Não está errado — só pede um jeito um pouco diferente de preencher.",
    },
    {
      q: "Formulários interativos são sempre melhores?",
      a: "São mais fáceis de completar e ficam mais organizados, mas também podem usar recursos que alguns leitores não suportam. Um formulário plano bem-feito é confiável em qualquer lugar, mesmo dando um pouco mais de trabalho.",
    },
  ],
  related: [
    { label: "PDF editável ou PDF preenchível", path: "/guides/editable-pdf-vs-fillable-pdf" },
    { label: "Como funcionam os formulários PDF", path: "/guides/how-pdf-forms-work" },
    { label: "Como preencher um formulário PDF", path: "/guides/how-to-fill-out-a-pdf-form" },
    { label: "PDF editável ou PDF plano", path: "/guides/editable-pdf-vs-flat-pdf" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
