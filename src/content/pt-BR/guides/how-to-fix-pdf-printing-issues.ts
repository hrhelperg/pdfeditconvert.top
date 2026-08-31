import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-printing-issues",
  h1: "Como resolver problemas de impressão de PDF (corte, escala, texto sumido)",
  description:
    "Quando o PDF sai cortado, com escala errada ou sem parte do texto, a solução depende do sintoma. Uma matriz curta ligando cada problema ao ajuste certo antes de imprimir.",
  updated: "2026-05-29",
  intro: [
    "O PDF foi criado para um documento ficar igual em todo lugar — inclusive no papel. Então, quando um imprime mal, o problema quase sempre é o trabalho de impressão, não o arquivo. A página é maior que o papel, a impressora está reduzindo, uma fonte não foi incorporada, uma trava de segurança está bloqueando a impressão, ou o documento foi dimensionado para um país que não é o seu.",
    "Cada um desses gera um sintoma diferente: bordas cortadas, texto minúsculo, páginas em branco, mensagens de erro ou fontes substituídas de forma estranha. Tratar tudo como “a impressora está com defeito” desperdiça muito papel. Tratar como problemas específicos, com soluções específicas, economiza tempo.",
    "Este guia é uma matriz curta: o que você vê, a causa mais provável e a solução certa. A maioria das soluções está nos ajustes da janela de impressão ou em um passo rápido antes de imprimir.",
  ],
  steps: [
    {
      title: "Se as bordas estão sendo cortadas, use “ajustar à área imprimível”",
      body: "Muitos PDFs são dimensionados até a borda do papel; impressoras não conseguem imprimir na borda. Na janela de impressão, escolha “Ajustar” ou “Reduzir à área imprimível” em vez de “Tamanho real”. A página reduz levemente e para de perder as bordas.",
    },
    {
      title: "Se o texto sai minúsculo, confira o descasamento de tamanho de papel",
      body: "Um documento feito para A3 impresso em A4 encolhe para caber. Reexporte a origem no tamanho de papel de destino, ou divida a página dupla em duas com a ferramenta Extrair páginas do PDF antes de reimprimir.",
    },
    {
      title: "Para páginas em branco ou texto sumido, incorpore as fontes",
      body: "Documentos que usam fontes que a sua impressora não tem podem sair com caracteres faltando. Reexporte com “incorporar todas as fontes” ativado no programa de origem, ou use imprimir em PDF antes, para achatar tudo em pixels.",
    },
    {
      title: "Em erros de “documento protegido”, verifique as permissões",
      body: "Alguns PDFs são exportados com uma trava que bloqueia a impressão. Só o autor consegue removê-la. Se o arquivo é seu, reexporte sem a restrição. Se não, peça uma cópia com impressão liberada.",
    },
    {
      title: "Gire as páginas antes de imprimir se a orientação estiver errada",
      body: "Se as páginas estão deitadas ou de cabeça para baixo, corrija antes de mandar para a impressora com a ferramenta Girar PDF. A rotação feita pela impressora costuma introduzir problemas próprios de escala — corrigir no arquivo é mais limpo.",
    },
    {
      title: "Imprima uma página de teste a partir de um extrato",
      body: "Não gaste um documento de 50 páginas para descobrir um problema de impressão. A ferramenta Extrair páginas do PDF salva uma página como arquivo separado; imprima essa, confirme os ajustes e depois rode o trabalho inteiro.",
    },
  ],
  tips: [
    "Confira sempre se o tamanho de papel selecionado na janela de impressão corresponde ao tamanho de página do PDF — descasamentos entre Carta e A4 causam a maior parte dos sintomas de “saiu pequeno demais”.",
    "Imprima em PDF primeiro se o arquivo estiver se comportando mal. A cópia achatada costuma imprimir bem quando o original não imprime.",
    "Ajustes de livreto e de encadernação causam mais problemas do que resolvem — imprima as páginas normais primeiro e reorganize fisicamente depois, se precisar.",
    "Perfis de cor vindos de programas de design podem gerar impressões escuras ou embarradas em impressoras domésticas. Reexportar em sRGB costuma resolver.",
    "Se o driver da impressora é antigo, uma reexportação por imprimir em PDF pode esconder recursos que o driver não entende.",
  ],
  mobileNote:
    "Imprimir do celular normalmente passa pelo AirPrint, pelo serviço do Google ou por um app do fabricante, e cada um lida com PDF de um jeito. O app PDF Editor permite dimensionar, girar e aparar páginas antes de enviar — consertar o PDF costuma funcionar melhor no celular do que brigar com a janela de impressão.",
  faq: [
    {
      q: "Por que o meu PDF imprime menor do que aparece na tela?",
      a: "Quase sempre porque o tamanho do documento não corresponde ao tamanho do papel. A impressora reduz para caber. Reexporte no tamanho de destino ou use “Tamanho real” com o papel correspondente.",
    },
    {
      q: "Por que alguns caracteres somem na impressão?",
      a: "As fontes não foram incorporadas e a sua impressora não as tem. Reexporte com as fontes incorporadas ou imprima em PDF antes, para achatar tudo.",
    },
    {
      q: "Por que a janela de impressão diz que o meu PDF está protegido?",
      a: "Ele tem uma permissão que bloqueia a impressão. Só o autor consegue retirá-la. Não existe um contorno seguro do lado de quem recebe.",
    },
    {
      q: "Devo girar as páginas na impressora ou no arquivo?",
      a: "No arquivo. A rotação da impressora pode introduzir escala, enquanto a ferramenta Girar PDF grava a orientação no próprio documento.",
    },
    {
      q: "Como evito desperdiçar papel diagnosticando problemas de impressão?",
      a: "Extraia uma página primeiro, imprima essa, confirme os ajustes e depois rode o trabalho inteiro. A ferramenta Extrair páginas do PDF faz isso no navegador.",
    },
  ],
  related: [
    { label: "Girar PDF — corrija a orientação antes de imprimir", path: "/rotate-pdf" },
    { label: "Extrair páginas do PDF — imprima uma página de teste", path: "/extract-pdf-pages" },
    { label: "Como corrigir problemas de formatação em PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "Como resolver problemas de fonte em PDF", path: "/guides/how-to-fix-pdf-font-issues" },
  ],
  parentHub: { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
};

export default content;
