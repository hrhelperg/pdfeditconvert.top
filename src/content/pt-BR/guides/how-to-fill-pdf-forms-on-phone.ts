import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-phone",
  h1: "Como preencher formulários PDF pelo celular",
  description:
    "Preencha formulários PDF no iPhone ou no Android, com campos de verdade ou em digitalizações planas. Toque para digitar, adicione caixas de texto e assine no mesmo lugar.",
  updated: "2026-05-23",
  intro: [
    "Formulários PDF vêm em dois sabores, e saber qual você tem em mãos determina como preenchê-lo. Alguns são interativos — você toca em um campo e digita, com caixas certinhas que quem criou o formulário inseriu. Outros são planos: um formulário digitalizado, ou impresso e salvo em PDF, sem campo nenhum, em que você precisa colocar o seu texto por cima. Os dois são perfeitamente preenchíveis no celular; eles só pedem um tratamento um pouco diferente.",
    "Este guia cobre o preenchimento dos dois tipos no iPhone e no Android com o app PDF Editor, que identifica os campos interativos quando existem e deixa você posicionar texto e marcas onde não existem. Muitos formulários também pedem assinatura, e o mesmo app resolve isso no mesmo fluxo.",
    "O resultado é um formulário preenchido que você devolve na hora — sem imprimir, sem digitalizar e sem caçar uma impressora funcionando no pior momento possível.",
  ],
  steps: [
    {
      title: "Abra o formulário no app PDF Editor",
      body: "Importe o PDF do app Arquivos, do e-mail, do Drive ou de qualquer folha de compartilhamento. O app verifica se o formulário tem campos interativos.",
    },
    {
      title: "Se tiver campos, toque e digite",
      body: "Formulários interativos deixam você tocar direto em cada campo e digitar. Passe de um campo a outro e toque nas caixas de seleção para marcá-las.",
    },
    {
      title: "Se for plano, adicione o seu próprio texto",
      body: "Em um formulário digitalizado ou sem campos, use a ferramenta de texto para posicionar a resposta onde ela deve ficar. Ajuste tamanho e posição para o texto assentar na linha.",
    },
    {
      title: "Resolva caixas de seleção e datas",
      body: "Coloque um sinal de seleção ou um X nas caixas e acrescente a data onde for exigida. Em formulários planos, são apenas objetos de texto ou marca que você posiciona.",
    },
    {
      title: "Assine se o formulário pedir",
      body: "Use a ferramenta Assinar para colocar a sua assinatura salva na área de assinatura — o mesmo fluxo, seja o formulário interativo ou plano.",
    },
    {
      title: "Exporte e envie",
      body: "Salve uma via preenchida como arquivo novo e devolva por e-mail ou por qualquer app. Guarde o original em branco, caso precise preencher de novo.",
    },
  ],
  tips: [
    "Confira primeiro se os campos são interativos — toque onde entra uma resposta. Se aparecer um cursor, digite; se não acontecer nada, é um formulário plano e você escreve por cima.",
    "Em formulários planos, dê zoom antes de posicionar o texto, para ele cair exatamente na linha e não flutuar acima ou abaixo dela.",
    "Guarde uma cópia em branco dos formulários que você preenche com frequência. Preencher um original novo é mais limpo que editar as respostas da vez anterior.",
    "Preencha e assine na mesma sessão, para não exportar, reabrir e reposicionar tudo — o app resolve em uma passada só.",
    "Confira os campos obrigatórios antes de enviar. Um formulário devolvido por causa de uma data faltando custa mais tempo do que a conferência.",
  ],
  mobileNote:
    "Preencher formulários é uma das tarefas de PDF mais genuinamente amigáveis ao celular — o formulário chega por e-mail e volta pelo mesmo caminho. O app PDF Editor preenche formulários interativos e planos, adiciona a sua assinatura e exporta a via preenchida, tudo no aparelho e sem enviar nada.",
  faq: [
    {
      q: "Como sei se um formulário PDF é interativo?",
      a: "Toque onde uma resposta deveria entrar. Se aparecer um cursor de texto e você conseguir digitar, ele tem campos interativos. Se nada acontecer, é um formulário plano e você escreve por cima.",
    },
    {
      q: "Dá para preencher um formulário digitalizado, sem campos?",
      a: "Dá. Use a ferramenta de texto para posicionar as respostas direto na página e adicione marcas de seleção onde for preciso. O app trata tudo como objetos que você posiciona.",
    },
    {
      q: "Dá para assinar o formulário no mesmo app?",
      a: "Dá. A ferramenta Assinar coloca a sua assinatura salva na mesma sessão, então você preenche e assina sem trocar de aplicativo.",
    },
    {
      q: "O formulário preenchido é enviado para algum lugar?",
      a: "Não. O app PDF Editor preenche formulários no seu aparelho, então os dados pessoais neles continuam privados.",
    },
    {
      q: "Dá para reaproveitar um formulário que eu preencho sempre?",
      a: "Guarde o original em branco e preencha uma cópia nova a cada vez. É mais limpo que editar uma versão preenchida anteriormente.",
    },
  ],
  related: [
    { label: "Editor de PDF — edite e preencha no celular", path: "/pdf-editor" },
    { label: "Como assinar um PDF pelo celular", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "Como fazer anotações em um PDF pelo celular", path: "/guides/how-to-annotate-pdf-on-mobile" },
    { label: "Como editar um PDF no iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "Editor de PDF", path: "/pdf-editor" },
};

export default content;
