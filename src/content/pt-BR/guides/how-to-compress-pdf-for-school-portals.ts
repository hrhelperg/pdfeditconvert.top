import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-for-school-portals",
  h1: "Como comprimir PDF para portais acadêmicos (limites apertados)",
  description:
    "Portais de escolas e universidades limitam o tamanho do PDF mais que o e-mail. Como comprimir o trabalho para caber sem destruir a legibilidade que o professor vai conferir.",
  updated: "2026-05-29",
  intro: [
    "Portais acadêmicos estão entre os mais rígidos do dia a dia para envio de PDF. Onde o e-mail tolera 25 MB, um portal de disciplina costuma limitar a 5 MB — e sistemas de escola às vezes a 2 MB. Junte algumas páginas digitalizadas de material manuscrito a um trabalho digitado e, de repente, você está acima do limite, dois minutos antes do prazo.",
    "Comprimir é a resposta certa, mas comprimir com força demais deixa o trabalho mais difícil de ler — que é exatamente o que custa pontos. O truque é comprimir com inteligência: com força nas partes cheias de digitalização, que dominam o tamanho; de leve nas partes digitadas, que quase não encolhem; e só o quanto for preciso para vencer o limite do portal.",
    "Este guia percorre o processo realista, incluindo o que comprimir, o que deixar quieto e o que fazer quando nem a compressão máxima resolve.",
  ],
  steps: [
    {
      title: "Confira primeiro o limite informado pelo portal",
      body: "A maioria dos portais informa o teto; muitos estudantes nunca olham. Saber o número muda a estratégia: um limite de 2 MB é apertado, um de 25 MB é generoso. Mire em 80% do teto para ter folga.",
    },
    {
      title: "Identifique o que está deixando o arquivo pesado",
      body: "As páginas manuscritas digitalizadas são as culpadas de sempre. Cada página digitalizada é uma imagem em resolução cheia. Um trabalho digitado de 20 páginas é pequeno; o mesmo com cinco páginas digitalizadas pode triplicar.",
    },
    {
      title: "Comprima com a ferramenta Comprimir PDF",
      body: "A ferramenta Comprimir PDF reduz o arquivo no seu aparelho, dentro do navegador. Teste a compressão forte primeiro — compressores atuais deixam material manuscrito legível mesmo em ajustes fortes.",
    },
    {
      title: "Confira a legibilidade depois de comprimir",
      body: "Abra o arquivo comprimido e dê zoom onde quem corrige vai ler. Se o texto ou os diagramas ficarem macios demais, volte para a compressão média e tente de novo. Legível ganha de pequeno.",
    },
    {
      title: "Se ainda estiver acima, descarte páginas não usadas",
      body: "A ferramenta Extrair páginas do PDF mantém só as páginas necessárias. Uma contracapa em branco, uma lista duplicada, uma folha provisória — descarte-as e o tamanho cai junto.",
    },
    {
      title: "Se continuar acima, divida em vários envios",
      body: "Alguns portais aceitam vários arquivos. As ferramentas Dividir PDF ou Extrair páginas do PDF geram partes abaixo do limite. Nomeie com clareza (Trabalho3_Parte1.pdf, Trabalho3_Parte2.pdf).",
    },
  ],
  tips: [
    "Digitalize em tons de cinza, não em cores, antes mesmo de comprimir. A escolha antes da captura economiza mais que qualquer compressão depois.",
    "Digitalizar de novo em resolução mais baixa (200 em vez de 600 DPI) reduz o arquivo de 5 a 10 vezes sem mudar a legibilidade de material manuscrito.",
    "Não comprima duas vezes. Compressões repetidas acumulam perda de qualidade. Guarde um original sem compressão e comprima só para enviar.",
    "Evite compactar o PDF em ZIP para “deixar menor”. A maioria dos portais recusa ZIP; e, quando aceita, costuma aplicar o mesmo limite efetivo.",
    "Se o portal recusar o arquivo comprimido como inválido, reexporte antes por imprimir em PDF — isso o achata em um PDF básico que todo portal aceita.",
  ],
  mobileNote:
    "Envios a portais acadêmicos pelo celular são comuns hoje, e o celular costuma ser a origem das partes digitalizadas do trabalho. O app PDF Editor comprime as digitalizações no aparelho antes do envio, então o arquivo já está pronto para o portal antes de encarar uma rede móvel instável.",
  faq: [
    {
      q: "Que tamanho a maioria dos portais acadêmicos aceita?",
      a: "Os limites comuns são 2 MB (algumas escolas), 5 MB (muitos portais de ensino médio e universidades) e de 10 a 25 MB (portais universitários mais tolerantes). Confira o da sua disciplina.",
    },
    {
      q: "A compressão forte deixa o texto ilegível?",
      a: "Às vezes. Compressão pesada em digitalizações já de baixa resolução pode pixelar os caracteres. Teste a forte primeiro e volte para a média se o texto embaçar.",
    },
    {
      q: "Devo apagar páginas em branco?",
      a: "Deve. As ferramentas Extrair páginas do PDF ou Dividir PDF as removem. Páginas em branco ocupam espaço real e não fazem parte do trabalho.",
    },
    {
      q: "Posso entregar um ZIP no lugar?",
      a: "A maioria dos portais acadêmicos não aceita ZIP. Os poucos que aceitam ainda aplicam limites de tamanho e podem tratar o ZIP como um arquivo único, com o mesmo teto.",
    },
    {
      q: "E se o arquivo comprimido ainda estiver grande demais?",
      a: "Descarte páginas não usadas, digitalize de novo em tons de cinza ou preto e branco com DPI menor, ou divida em vários envios, se o portal permitir. Alguns trabalhos precisam mesmo ser fisicamente menores.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduza no navegador", path: "/compress-pdf" },
    { label: "Dividir PDF — quebre em partes aceitas", path: "/split-pdf" },
    { label: "Como entregar trabalhos em PDF", path: "/guides/how-to-submit-homework-as-pdf" },
    { label: "Como reduzir o tamanho do PDF antes de enviar", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
