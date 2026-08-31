import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-a-completed-pdf-form",
  h1: "Como enviar um formulário PDF preenchido",
  description:
    "Você preencheu o formulário — agora devolva com limpeza. Como achatar para as respostas não mudarem, anexar do jeito certo e confirmar que chegou sem perder os dados.",
  updated: "2026-06-01",
  intro: [
    "Preencher o formulário é só metade do serviço; devolvê-lo intacto a quem enviou é a outra metade. Esta é a viagem de volta — você completou um formulário que te mandaram e agora precisa entregá-lo de um jeito que as suas respostas cheguem exatamente como você digitou, não possam ser apagadas sem querer e aterrissem em um formato que a outra pessoa consiga abrir.",
    "As duas coisas que dão errado aqui são respostas que somem no caminho (porque os dados dos campos não foram salvos nem achatados) e arquivos que chegam como fotos tortas de uma tela. As duas são evitáveis com alguns passos deliberados antes de apertar enviar. Um PDF achatado em anexo é quase sempre a resposta certa.",
    "Este guia cobre como preparar o formulário preenchido, como escolher a forma de enviar e as pequenas confirmações que poupam uma rodada de e-mails do tipo “o formulário voltou em branco”.",
  ],
  steps: [
    {
      title: "Faça uma conferência final de todas as respostas",
      body: "Passe os olhos pelo formulário inteiro mais uma vez procurando campos obrigatórios em branco, a data e a sua assinatura. Pegar uma caixa faltando agora custa bem menos do que depois que ele voltar.",
    },
    {
      title: "Salve a cópia preenchida do jeito certo",
      body: "Exporte ou salve de modo que os valores dos campos sejam gravados no arquivo. Se as respostas não sobrevivem a fechar e reabrir, a ferramenta só imprimiu — troque por uma que salve dados de formulário.",
    },
    {
      title: "Achate para travar as respostas",
      body: "Achate o formulário preenchido antes de enviar. Isso funde as respostas na página, então elas não podem ser editadas nem apagadas pelo leitor de quem recebe, e aparecem iguais em qualquer lugar.",
    },
    {
      title: "Anexe o PDF diretamente",
      body: "Mande o PDF achatado como anexo normal de e-mail, ou envie ao portal que a outra parte indicou. Evite mandar uma captura de tela ou foto do formulário, a menos que seja explicitamente o que pediram.",
    },
    {
      title: "Confirme e guarde uma cópia",
      body: "Registre que você enviou e guarde a sua própria cópia do arquivo preenchido. Se for para um portal, fique de olho em um comprovante na tela ou por e-mail confirmando o envio.",
    },
  ],
  tips: [
    "Achatar é o melhor hábito na hora de devolver formulários — garante que as suas respostas apareçam para quem recebe.",
    "Dê um nome útil ao arquivo, como “silva-inscricao-preenchida.pdf”, para a outra pessoa arquivar sem renomear.",
    "Se um portal recusar o arquivo por tamanho, comprima em vez de refazer as respostas — o conteúdo continua intacto.",
    "Guarde a sua cópia preenchida; se surgir uma dúvida ou cobrança depois, você vai querer exatamente a versão que enviou.",
    "Exigências de órgãos e empresas variam, então siga qualquer instrução específica de envio que a outra parte tenha dado, acima destes passos gerais.",
  ],
  mobileNote:
    "No celular, o app PDF Editor exporta uma cópia preenchida e achatada que você manda direto pela folha de compartilhamento — e-mail, envio a portal ou mensagem — com as respostas travadas na página. Ele funciona no aparelho, então os dados pessoais do formulário continuam privados enquanto você envia.",
  faq: [
    {
      q: "Como garanto que as respostas não sumam quando eu enviar o formulário?",
      a: "Salve de modo que os valores dos campos sejam gravados no arquivo e achate o formulário antes de enviar. Achatar funde as respostas na página, então elas não podem ser apagadas e aparecem iguais em qualquer leitor.",
    },
    {
      q: "Devo achatar um formulário preenchido antes de mandar por e-mail?",
      a: "Sim, em quase todos os casos. Depois que você terminou de editar, achatar trava as respostas e impede que o leitor de quem recebe as descarte ou altere.",
    },
    {
      q: "Tudo bem mandar uma foto do formulário preenchido?",
      a: "Só se for exatamente o que pediram. Um PDF achatado é mais limpo, mais legível e mais fácil de arquivar. Fotos de telas ou de impressões costumam chegar tortas ou com qualidade ruim.",
    },
    {
      q: "E se o portal de envio recusar o meu formulário?",
      a: "Normalmente é limite de tamanho ou de formato. Comprima o PDF ou confira os formatos aceitos — não é preciso preencher tudo de novo. O conteúdo continua o mesmo depois da compressão.",
    },
    {
      q: "Devo guardar uma cópia do que enviei?",
      a: "Deve. Guarde a sua cópia preenchida para o caso de perguntas posteriores ou de um pedido de reenvio, assim você remanda exatamente a versão que entregou.",
    },
  ],
  related: [
    { label: "Como salvar um formulário PDF preenchido", path: "/guides/how-to-save-a-filled-pdf-form" },
    { label: "Como preencher um formulário PDF", path: "/guides/how-to-fill-out-a-pdf-form" },
    { label: "Como compartilhar um formulário PDF", path: "/guides/how-to-share-a-pdf-form" },
    { label: "Erros no envio de formulários PDF", path: "/guides/pdf-form-submission-errors" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
