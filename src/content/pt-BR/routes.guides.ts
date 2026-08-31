import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";

/**
 * Brazilian Portuguese route manifest for the guide library.
 *
 * Slugs follow Brazilian search phrasing rather than a literal rendering of
 * the English slug: "como-converter-pdf-em-word" (Brazilians say *converter
 * PDF em Word*, not *para Word*, when the verb is convert), "por-que-meu-pdf",
 * "como-diminuir-o-tamanho". Titles carry the question or task the way a
 * Brazilian would type it into Google.
 */
export const PT_BR_GUIDE_ROUTES: readonly LocaleRouteEntry[] = [
  {
    id: "guides/how-to-edit-pdf-on-iphone",
    slug: "guias/como-editar-pdf-no-iphone",
    title: "Como editar um PDF no iPhone (guia 2026)",
    description:
      "Edite o texto, insira imagens e reorganize as páginas de um PDF direto no iPhone. Passo a passo completo com o app PDF Editor.",
  },
  {
    id: "guides/how-to-edit-pdf-on-android",
    slug: "guias/como-editar-pdf-no-android",
    title: "Como editar um PDF no Android (guia 2026)",
    description:
      "Edite PDFs no Android: altere o texto, insira páginas e assine documentos. Instruções claras, passo a passo, com o app PDF Editor.",
  },
  {
    id: "guides/how-to-compress-pdf",
    slug: "guias/como-comprimir-pdf",
    title: "Como comprimir um PDF (sem perder qualidade)",
    description:
      "Reduza o tamanho do PDF para enviar por e-mail ou anexar em sistemas, sem perder qualidade. Tutorial pensado para o celular, com o app PDF Editor.",
  },
  {
    id: "guides/how-to-merge-pdf-files",
    slug: "guias/como-juntar-arquivos-pdf",
    title: "Como juntar arquivos PDF no celular ou no computador",
    description:
      "Combine vários PDFs em um único documento. Fluxo passo a passo pelo celular com o app PDF Editor.",
  },
  {
    id: "guides/how-to-sign-pdf-on-phone",
    slug: "guias/como-assinar-pdf-no-celular",
    title: "Como assinar um PDF pelo celular",
    description:
      "Coloque assinaturas eletrônicas válidas em PDFs pelo iPhone ou Android. Guia prático com o app PDF Editor.",
  },
  {
    id: "guides/how-to-scan-documents-to-pdf",
    slug: "guias/como-digitalizar-documentos-em-pdf",
    title: "Como digitalizar documentos em PDF com o celular",
    description:
      "Use a câmera do celular para digitalizar documentos de várias páginas em PDFs limpos. Fluxo no celular com detecção de bordas e OCR.",
  },
  {
    id: "guides/best-pdf-app-for-students",
    slug: "guias/melhor-app-de-pdf-para-estudantes",
    title: "Melhor app de PDF para estudantes (2026)",
    description:
      "O que um estudante precisa de um app de PDF: anotações, grifos, assinaturas e conversões grátis. Critérios de avaliação honestos.",
  },
  {
    id: "guides/best-pdf-app-for-business",
    slug: "guias/melhor-app-de-pdf-para-empresas",
    title: "Melhor app de PDF para empresas (2026)",
    description:
      "O que equipes pequenas devem procurar em um app de PDF: assinaturas, contratos, segurança e colaboração pelo celular.",
  },
  {
    id: "guides/pdf-vs-docx",
    slug: "guias/pdf-ou-docx-qual-usar",
    title: "PDF ou DOCX — qual formato usar?",
    description:
      "Quando escolher PDF em vez de DOCX e vice-versa. Comparação clara de edição, fidelidade visual, assinatura e compartilhamento.",
  },
  {
    id: "guides/how-to-protect-pdf-file",
    slug: "guias/como-proteger-pdf-com-senha",
    title: "Como proteger um arquivo PDF com senha",
    description:
      "Adicione senha e criptografia a um PDF no celular ou no computador. Guia prático com o app PDF Editor.",
  },
  {
    id: "guides/how-to-convert-pdf-to-word",
    slug: "guias/como-converter-pdf-em-word",
    title: "Como converter PDF em Word — grátis, no navegador",
    description:
      "Extraia o texto de um PDF para um documento Word editável no navegador. O que converte bem, o que precisa de ajuste e por que PDFs digitalizados não funcionam.",
  },
  {
    id: "guides/how-to-convert-word-to-pdf",
    slug: "guias/como-converter-word-em-pdf",
    title: "Como converter Word em PDF — grátis e sem upload",
    description:
      "Transforme um arquivo .docx ou .txt em um PDF limpo e pronto para enviar, no navegador. Por que PDF é o formato certo e o que conferir antes de exportar.",
  },
  {
    id: "guides/how-to-convert-jpg-to-pdf",
    slug: "guias/como-converter-jpg-em-pdf",
    title: "Como converter JPG em PDF — imagem para PDF grátis",
    description:
      "Reúna uma ou várias fotos JPG em um único PDF no navegador. Ideal para recibos, documentos e papéis fotografados — com notas honestas sobre qualidade e HEIC do iPhone.",
  },
  {
    id: "guides/how-to-convert-png-to-pdf",
    slug: "guias/como-converter-png-em-pdf",
    title: "Como converter PNG em PDF — prints e gráficos nítidos",
    description:
      "Transforme prints de tela, diagramas e gráficos em PNG num único PDF, no navegador. Por que o PNG mantém o texto nítido e o que acontece com a transparência.",
  },
  {
    id: "guides/how-to-convert-webp-to-pdf",
    slug: "guias/como-converter-webp-em-pdf",
    title: "Como converter WebP em PDF — imagens da web em documento",
    description:
      "Transforme imagens WebP salvas da internet em um único PDF, no navegador. Por que o WebP é recusado por tantos sistemas e como a conversão resolve.",
  },
  {
    id: "guides/how-to-convert-pdf-to-jpg",
    slug: "guias/como-converter-pdf-em-jpg",
    title: "Como converter PDF em JPG — páginas viram imagens",
    description:
      "Exporte as páginas de um PDF como imagens JPG no navegador. Quando o JPG é melhor que o PNG, como a escala afeta a qualidade e onde a imagem ganha do PDF.",
  },
  {
    id: "guides/how-to-convert-pdf-to-png",
    slug: "guias/como-converter-pdf-em-png",
    title: "Como converter PDF em PNG — imagens nítidas e sem perdas",
    description:
      "Exporte páginas de PDF como imagens PNG de alta qualidade no navegador. Por que o PNG mantém texto e diagramas nítidos, além de notas sobre escala e transparência.",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-iphone",
    slug: "guias/como-converter-fotos-em-pdf-no-iphone",
    title: "Como converter fotos em PDF no iPhone (e resolver o HEIC)",
    description:
      "Transforme fotos do iPhone em um único PDF — incluindo a pegadinha do formato HEIC que trava tanta gente. O caminho pelo navegador e o caminho mais rápido pelo app.",
  },
  {
    id: "guides/how-to-convert-photos-to-pdf-on-android",
    slug: "guias/como-converter-fotos-em-pdf-no-android",
    title: "Como converter fotos em PDF no Android",
    description:
      "Transforme fotos do Android em um PDF usando uma ferramenta de navegador ou a função Imprimir em PDF do sistema. E o fluxo mais rápido pelo app, com digitalização.",
  },
  {
    id: "guides/how-to-convert-scanned-documents-to-pdf",
    slug: "guias/como-converter-documentos-digitalizados-em-pdf",
    title: "Como converter documentos digitalizados em PDF",
    description:
      "Já tem imagens digitalizadas ou fotos de papel? Junte tudo em um só PDF no navegador — e entenda o que o OCR faz e por que digitalizações precisam dele.",
  },
  {
    id: "guides/how-to-split-pdf-files",
    slug: "guias/como-dividir-arquivos-pdf",
    title: "Como dividir um PDF em arquivos separados (grátis)",
    description:
      "Quebre um PDF grande em arquivos menores por intervalo de páginas, no navegador. Quando dividir e quando extrair, e como manter o original seguro.",
  },
  {
    id: "guides/how-to-extract-pages-from-pdf",
    slug: "guias/como-extrair-paginas-de-um-pdf",
    title: "Como extrair páginas de um PDF (grátis, sem upload)",
    description:
      "Tire páginas ou intervalos específicos de um PDF e salve num arquivo novo, no navegador. Perfeito para enviar só as páginas que a pessoa pediu.",
  },
  {
    id: "guides/how-to-reorder-pdf-pages",
    slug: "guias/como-reordenar-paginas-de-pdf",
    title: "Como reordenar as páginas de um PDF (grátis, no navegador)",
    description:
      "Coloque as páginas do PDF na sequência certa pelo navegador. Conserte digitalizações que saíram de trás para frente e arquivos unidos fora de ordem.",
  },
  {
    id: "guides/how-to-rotate-pdf-pages",
    slug: "guias/como-girar-paginas-de-pdf",
    title: "Como girar páginas de um PDF (grátis, sem upload)",
    description:
      "Gire todas as páginas de um PDF, ou só algumas, em 90, 180 ou 270 graus no navegador. Conserte digitalizações deitadas e páginas de cabeça para baixo.",
  },
  {
    id: "guides/how-to-add-watermark-to-pdf",
    slug: "guias/como-adicionar-marca-dagua-em-pdf",
    title: "Como adicionar marca d'água em um PDF (grátis)",
    description:
      "Carimbe textos como RASCUNHO ou CONFIDENCIAL em todas as páginas de um PDF, no navegador. O que uma marca d'água protege — e o que ela não protege.",
  },
  {
    id: "guides/how-to-remove-unwanted-pages-from-pdf",
    slug: "guias/como-remover-paginas-de-um-pdf",
    title: "Como remover páginas indesejadas de um PDF",
    description:
      "Tire páginas em branco, folhas de rosto e trechos irrelevantes de um PDF no navegador, guardando só o que interessa. Arquivo limpo e processo privado.",
  },
  {
    id: "guides/how-to-organize-pdf-files",
    slug: "guias/como-organizar-arquivos-pdf",
    title: "Como organizar arquivos PDF — um fluxo que funciona",
    description:
      "Ponha ordem na bagunça de PDFs: junte arquivos relacionados, reordene páginas, corte o excesso e nomeie tudo direito. Um fluxo repetível com ferramentas grátis.",
  },
  {
    id: "guides/how-to-prepare-pdf-before-sharing",
    slug: "guias/como-preparar-um-pdf-antes-de-compartilhar",
    title: "Como preparar um PDF antes de compartilhar (checklist)",
    description:
      "Checklist antes de enviar um PDF: corte páginas soltas, corrija a orientação, reduza o tamanho e marque rascunhos. Envie um documento limpo e proposital.",
  },
  {
    id: "guides/how-to-fix-sideways-pdf-pages",
    slug: "guias/como-corrigir-paginas-de-pdf-de-lado",
    title: "Como corrigir páginas de PDF deitadas ou de cabeça para baixo",
    description:
      "Endireite de vez as páginas de um PDF que abrem deitadas ou invertidas, no navegador. Por que girar a tela não resolve e o que realmente conserta.",
  },
  {
    id: "guides/how-to-compress-pdf-online",
    slug: "guias/como-comprimir-pdf-online",
    title: "Como comprimir um PDF online sem fazer upload",
    description:
      "Reduza um PDF direto no navegador — sem upload e sem conta. Como a compressão no dispositivo difere dos sites comuns, e qual é a troca de qualidade.",
  },
  {
    id: "guides/how-to-reduce-pdf-file-size-for-email",
    slug: "guias/como-reduzir-o-tamanho-do-pdf-para-e-mail",
    title: "Como reduzir o tamanho de um PDF para enviar por e-mail",
    description:
      "Deixe o PDF abaixo do limite de anexo do Gmail e do Outlook. Os limites reais, por que digitalizações estouram tudo e como encolher o arquivo para ele sair.",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-iphone",
    slug: "guias/como-diminuir-o-tamanho-do-pdf-no-iphone",
    title: "Como diminuir o tamanho de um PDF no iPhone",
    description:
      "Reduza um PDF no iPhone com uma ferramenta de navegador ou com o app PDF Editor. Por que digitalizações do iPhone ficam enormes e como caber nos limites de envio.",
  },
  {
    id: "guides/how-to-make-pdf-smaller-on-android",
    slug: "guias/como-diminuir-o-tamanho-do-pdf-no-android",
    title: "Como diminuir o tamanho de um PDF no Android",
    description:
      "Comprima um PDF em qualquer Android com uma ferramenta de navegador que não exige instalação, ou com o app PDF Editor. Caiba nos limites de e-mail e de envio.",
  },
  {
    id: "guides/why-is-my-pdf-so-large",
    slug: "guias/por-que-meu-pdf-esta-tao-grande",
    title: "Por que meu PDF está tão grande? Causas e soluções",
    description:
      "Os motivos reais de um PDF inchar — digitalizações, fotos embutidas, fontes e mais — e a solução certa para cada um, com ferramentas grátis de navegador.",
  },
  {
    id: "guides/compress-pdf-without-losing-too-much-quality",
    slug: "guias/comprimir-pdf-sem-perder-qualidade",
    title: "Comprimir um PDF sem perder qualidade demais",
    description:
      "Encontre o ponto de equilíbrio entre tamanho e qualidade. Como cada nível de compressão troca detalhe por espaço e como escolher o mais leve que ainda serve.",
  },
  {
    id: "guides/how-to-compress-scanned-pdf",
    slug: "guias/como-comprimir-pdf-digitalizado",
    title: "Como comprimir um PDF digitalizado (economia enorme)",
    description:
      "PDFs digitalizados são os mais fáceis de encolher e os maiores vilões de tamanho. Como comprimi-los de forma drástica e o que acontece com o texto pesquisável.",
  },
  {
    id: "guides/best-pdf-compression-settings",
    slug: "guias/melhores-configuracoes-de-compressao-de-pdf",
    title: "Melhores configurações de compressão de PDF — guia de decisão",
    description:
      "Qual nível de compressão usar para e-mail, impressão, arquivamento ou web? Uma matriz prática ligando cada ajuste ao seu objetivo, com trocas honestas.",
  },
  {
    id: "guides/how-to-send-large-pdf-files",
    slug: "guias/como-enviar-arquivos-pdf-grandes",
    title: "Como enviar arquivos PDF grandes (5 formas confiáveis)",
    description:
      "Cinco formas confiáveis de enviar um PDF grande demais para o e-mail — comprimir, dividir, links na nuvem e mais — e como escolher entre elas.",
  },
  {
    id: "guides/how-to-reduce-pdf-size-before-uploading",
    slug: "guias/como-reduzir-o-pdf-antes-de-enviar",
    title: "Como reduzir o tamanho do PDF antes de enviar a um sistema",
    description:
      "Portais de envio recusam arquivos grandes com mais rigor que o e-mail. Como caber nos limites apertados sem perder a legibilidade que eles conferem.",
  },
  {
    id: "guides/how-to-sign-pdf-on-iphone",
    slug: "guias/como-assinar-pdf-no-iphone",
    title: "Como assinar um PDF no iPhone (guia 2026)",
    description:
      "Assine um PDF no iPhone com a Marcação do iOS ou com o app PDF Editor. Os limites do caminho nativo e quando um app dedicado assina melhor.",
  },
  {
    id: "guides/how-to-sign-pdf-on-android",
    slug: "guias/como-assinar-pdf-no-android",
    title: "Como assinar um PDF no Android (guia 2026)",
    description:
      "Assine um PDF no Android, onde não existe um assinador nativo universal. O caminho confiável pelo app, as opções que variam por fabricante e o básico da parte legal.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-phone",
    slug: "guias/como-preencher-formularios-pdf-no-celular",
    title: "Como preencher formulários PDF pelo celular",
    description:
      "Preencha formulários PDF no iPhone ou no Android, com campos de verdade ou em digitalizações planas. Toque para digitar, adicione caixas de texto e assine no mesmo lugar.",
  },
  {
    id: "guides/how-to-annotate-pdf-on-mobile",
    slug: "guias/como-anotar-em-pdf-no-celular",
    title: "Como fazer anotações em um PDF pelo celular",
    description:
      "Grife, comente e desenhe em PDFs pelo celular ou tablet. As ferramentas de anotação que importam e como manter as marcações legíveis.",
  },
  {
    id: "guides/how-to-manage-pdfs-on-phone",
    slug: "guias/como-organizar-pdfs-no-celular",
    title: "Como organizar seus PDFs no celular",
    description:
      "Evite que os PDFs do celular virem bagunça: renomeie, separe em pastas, sincronize com a nuvem e libere espaço. Uma rotina de manutenção que funciona.",
  },
  {
    id: "guides/how-to-create-pdf-from-camera",
    slug: "guias/como-criar-pdf-com-a-camera",
    title: "Como criar um PDF com a câmera do celular",
    description:
      "Transforme uma foto em PDF — e entenda por que uma digitalização de verdade é melhor que uma foto crua. Captura rápida para recibos e quadros, digitalização para documentos.",
  },
  {
    id: "guides/how-to-share-pdf-from-phone",
    slug: "guias/como-compartilhar-pdf-pelo-celular",
    title: "Como compartilhar um PDF pelo celular",
    description:
      "Compartilhe um PDF do iPhone ou do Android do jeito certo — e-mail, AirDrop, mensagem ou link — e prepare o tamanho para que ele realmente chegue.",
  },
  {
    id: "guides/best-pdf-tools-for-students",
    slug: "guias/melhores-ferramentas-de-pdf-para-estudantes",
    title: "Melhores ferramentas de PDF grátis para estudantes (2026)",
    description:
      "As ferramentas de PDF grátis e sem cadastro que dão conta das tarefas reais de quem estuda — juntar leituras, comprimir entregas, converter e anotar — sem paywall.",
  },
  {
    id: "guides/best-pdf-workflow-for-freelancers",
    slug: "guias/melhor-fluxo-de-pdf-para-freelancers",
    title: "O melhor fluxo de trabalho com PDF para freelancers",
    description:
      "Um fluxo repetível de PDF para freelancers: proposta enviada, contrato assinado, cobrança emitida. As ferramentas grátis e o app que mantêm tudo rápido e privado.",
  },
  {
    id: "guides/best-pdf-tools-for-small-business",
    slug: "guias/melhores-ferramentas-de-pdf-para-pequenas-empresas",
    title: "Melhores ferramentas de PDF grátis para pequenas empresas",
    description:
      "Cuide de cobranças, contratos e registros com ferramentas de PDF grátis e privadas — sem assinatura por usuário. Qual ferramenta para cada tarefa e onde o app entra.",
  },
  {
    id: "guides/pdf-vs-jpg-for-documents",
    slug: "guias/pdf-ou-jpg-para-documentos",
    title: "PDF ou JPG para documentos — pare de mandar foto",
    description:
      "Por que mandar a foto JPG de um documento é a escolha errada, quando o PDF é o formato certo e como transformar uma foto em documento de verdade.",
  },
  {
    id: "guides/when-to-use-pdf-instead-of-docx",
    slug: "guias/quando-usar-pdf-em-vez-de-docx",
    title: "Quando usar PDF em vez de DOCX (checklist)",
    description:
      "Você tem um documento do Word — vale mandar como PDF? Um checklist rápido dos momentos em que o PDF é a escolha certa, e como converter.",
  },
  {
    id: "guides/browser-based-pdf-tools-vs-upload-tools",
    slug: "guias/ferramentas-de-pdf-no-navegador-ou-com-upload",
    title: "Ferramentas de PDF no navegador ou com upload — a diferença",
    description:
      "Nem toda ferramenta “online” de PDF é igual. A diferença entre as que rodam no seu navegador e as que enviam o arquivo para um servidor — e como identificar cada uma.",
  },
  {
    id: "guides/privacy-first-pdf-tools",
    slug: "guias/ferramentas-de-pdf-que-respeitam-a-privacidade",
    title: "Ferramentas de PDF que respeitam a privacidade",
    description:
      "PDFs guardam alguns dos seus dados mais sensíveis. Como trabalhar com eles sem enviar nada para lugar nenhum — e o que “foco em privacidade” significa de verdade.",
  },
  {
    id: "guides/common-pdf-mistakes-to-avoid",
    slug: "guias/erros-comuns-com-pdf-para-evitar",
    title: "Erros comuns com PDF que você deve evitar",
    description:
      "Os erros com PDF que fazem perder tempo ou vazar informação — comprimir demais, mandar foto, subir arquivo sigiloso, esquecer páginas — e como escapar de cada um.",
  },
  {
    id: "guides/why-wont-my-pdf-open",
    slug: "guias/por-que-meu-pdf-nao-abre",
    title: "Por que meu PDF não abre? Causas e soluções práticas",
    description:
      "Um PDF que se recusa a abrir quase sempre é uma de cinco coisas. Como diagnosticar download corrompido, senha, falha do leitor e arquivo antigo — e o que resolve cada caso.",
  },
  {
    id: "guides/why-is-my-pdf-blank",
    slug: "guias/por-que-meu-pdf-esta-em-branco",
    title: "Por que meu PDF está em branco? Causas reais e como recuperar",
    description:
      "Quando um PDF abre com páginas em branco, o conteúdo costuma estar lá — só escondido por falha de renderização, fonte ausente ou erro de digitalização. Como identificar e recuperar.",
  },
  {
    id: "guides/why-cant-i-edit-a-pdf",
    slug: "guias/por-que-nao-consigo-editar-um-pdf",
    title: "Por que não consigo editar um PDF? Os motivos reais",
    description:
      "O PDF foi feito para resistir à edição, mas alguns fatores específicos — digitalização, travas de segurança, limites do leitor — deixam certos arquivos ainda mais difíceis. O que trava o seu.",
  },
  {
    id: "guides/why-is-my-pdf-blurry",
    slug: "guias/por-que-meu-pdf-esta-borrado",
    title: "Por que meu PDF está borrado? Resolução, compressão e digitalização",
    description:
      "PDFs borrados vêm de digitalização em baixa resolução, compressão agressiva ou exportação ruim — não do formato em si. Como descobrir a causa e recuperar a nitidez.",
  },
  {
    id: "guides/how-to-fix-a-corrupted-pdf",
    slug: "guias/como-consertar-um-pdf-corrompido",
    title: "Como consertar um PDF corrompido (o que funciona de verdade)",
    description:
      "A maioria dos PDFs “corrompidos” não está corrompida — são downloads incompletos, leitores incompatíveis ou gravações interrompidas. O checklist honesto de soluções, e quando o arquivo já era.",
  },
  {
    id: "guides/how-to-fix-pdf-printing-issues",
    slug: "guias/como-resolver-problemas-de-impressao-de-pdf",
    title: "Como resolver problemas de impressão de PDF (corte, escala, texto sumido)",
    description:
      "Quando o PDF sai cortado, com escala errada ou sem parte do texto, a solução depende do sintoma. Uma matriz curta ligando cada problema ao ajuste certo antes de imprimir.",
  },
  {
    id: "guides/how-to-fix-pdf-upload-errors",
    slug: "guias/como-resolver-erros-de-envio-de-pdf",
    title: "Como resolver erros ao enviar PDF (grande demais, recusado, travado)",
    description:
      "Portais recusam PDFs por poucos motivos: tamanho, número de páginas, rigor de formato ou upload instável. Como identificar o seu caso e conseguir o aceite na próxima tentativa.",
  },
  {
    id: "guides/how-to-fix-pdf-formatting-problems",
    slug: "guias/como-corrigir-problemas-de-formatacao-em-pdf",
    title: "Como corrigir problemas de formatação em PDF (quebras, margens, espaçamento)",
    description:
      "Quando o layout do PDF sai quebrado — texto reposicionado, margens erradas, espaçamento estranho — a solução costuma estar no documento de origem, não no PDF. O fluxo mais limpo para exportar bem.",
  },
  {
    id: "guides/how-to-fix-scanned-pdf-quality",
    slug: "guias/como-melhorar-a-qualidade-de-pdf-digitalizado",
    title: "Como melhorar a qualidade de um PDF digitalizado (nitidez, alinhamento, cor)",
    description:
      "PDFs digitalizados dão errado de formas previsíveis: torto, contraste lavado, fundo sujo, arquivo enorme. Os ajustes antes de digitalizar e as ferramentas depois que realmente limpam o resultado.",
  },
  {
    id: "guides/how-to-fix-pdf-font-issues",
    slug: "guias/como-resolver-problemas-de-fonte-em-pdf",
    title: "Como resolver problemas de fonte em PDF (ausente, substituída, ilegível)",
    description:
      "Quando um PDF mostra a fonte errada, quadradinhos no lugar de letras ou texto substituído, quase sempre falta uma fonte embutida. Como funciona a incorporação e o que mudar na exportação.",
  },
  {
    id: "guides/best-pdf-tools-for-remote-work",
    slug: "guias/melhores-ferramentas-de-pdf-para-trabalho-remoto",
    title: "Melhores ferramentas de PDF para trabalho remoto (grátis, no navegador)",
    description:
      "Ferramentas de PDF que aguentam o tranco quando o escritório é um notebook e um celular — assinar, comprimir, juntar, digitalizar e compartilhar — sem instalar nada nem pagar por usuário.",
  },
  {
    id: "guides/best-pdf-tools-for-office-documents",
    slug: "guias/melhores-ferramentas-de-pdf-para-documentos-de-escritorio",
    title: "Melhores ferramentas de PDF para documentos de escritório (Word, Excel, relatórios)",
    description:
      "O kit de PDF que o trabalho de escritório realmente exige: idas e vindas limpas entre Word e PDF, junção de vários documentos, reordenação de páginas e compressão confiável para anexos.",
  },
  {
    id: "guides/best-pdf-workflow-for-teams",
    slug: "guias/melhor-fluxo-de-pdf-para-equipes",
    title: "Melhor fluxo de PDF para equipes (arquivos compartilhados, revisões, aprovações)",
    description:
      "Como equipes pequenas movimentam documentos sem assinatura paga de PDF: um repasse repetível para rascunhos, revisões e aprovações assinadas com ferramentas grátis de navegador.",
  },
  {
    id: "guides/how-to-share-pdfs-with-clients",
    slug: "guias/como-compartilhar-pdfs-com-clientes",
    title: "Como compartilhar PDFs com clientes (com profissionalismo e privacidade)",
    description:
      "Um roteiro curto para mandar PDFs a clientes — tamanho para e-mail, escolha de senha, identidade visual, confirmação de recebimento — sem enviar nada a terceiros.",
  },
  {
    id: "guides/how-to-prepare-pdf-for-business-use",
    slug: "guias/como-preparar-um-pdf-para-uso-profissional",
    title: "Como preparar um PDF para uso profissional (checklist de revisão)",
    description:
      "Antes de o PDF sair da empresa: corte rascunhos, confira a paginação, corrija a orientação, embuta as fontes e reduza o tamanho. Um checklist para documentos que representam o seu negócio.",
  },
  {
    id: "guides/how-to-send-contracts-as-pdf",
    slug: "guias/como-enviar-contratos-em-pdf",
    title: "Como enviar contratos em PDF (assinar, travar, entregar)",
    description:
      "Contratos exigem um fluxo de PDF mais rígido: travar o conteúdo, aplicar assinaturas, marcar rascunhos e entregar um arquivo final que a outra parte assina sem idas e vindas.",
  },
  {
    id: "guides/how-to-organize-work-documents-as-pdf",
    slug: "guias/como-organizar-documentos-de-trabalho-em-pdf",
    title: "Como organizar documentos de trabalho em PDF (pastas, nomes, versões)",
    description:
      "Uma convenção prática de nomes e pastas para PDFs de trabalho — orçamentos, briefings, entregas, arquivo morto — que evita o caos de versões e faz qualquer pessoa achar tudo rápido.",
  },
  {
    id: "guides/how-to-manage-invoices-as-pdf",
    slug: "guias/como-organizar-faturas-em-pdf",
    title: "Como organizar faturas em PDF (emitir, acompanhar, arquivar)",
    description:
      "Um fluxo de cobrança em PDF que não exige sistema contábil: gerar, numerar, enviar, acompanhar e arquivar — só com ferramentas grátis de navegador e uma estrutura de pastas limpa.",
  },
  {
    id: "guides/how-to-create-client-ready-pdf-files",
    slug: "guias/como-criar-pdfs-prontos-para-o-cliente",
    title: "Como criar PDFs prontos para o cliente (caprichados e com a sua marca)",
    description:
      "O que separa um PDF interno de um pronto para o cliente: capa, numeração de páginas, identidade visual, tamanho do arquivo e nome do arquivo. O acabamento rápido que faz o documento parecer pronto.",
  },
  {
    id: "guides/pdf-workflows-for-small-business",
    slug: "guias/fluxos-de-pdf-para-pequenas-empresas",
    title: "Fluxos de PDF para pequenas empresas (orçamentos, contratos, registros)",
    description:
      "Como uma pequena empresa toca o fluxo de documentos em PDF — orçamento sai, contrato volta, registro arquivado — sem comprar uma pilha de assinaturas para isso.",
  },
  {
    id: "guides/pdf-workflows-for-consultants",
    slug: "guias/fluxos-de-pdf-para-consultores",
    title: "Fluxos de PDF para consultores (propostas, relatórios, cobranças)",
    description:
      "O ritmo de PDF de um consultor: propostas que fecham, relatórios que leem bem no celular e cobranças que saem em segundos. As ferramentas de navegador que mantêm tudo enxuto.",
  },
  {
    id: "guides/pdf-workflows-for-agencies",
    slug: "guias/fluxos-de-pdf-para-agencias",
    title: "Fluxos de PDF para agências (apresentações, briefings, aprovações)",
    description:
      "A corrente de PDFs de uma agência — apresentações, briefings de criação, aprovações de cliente, entregas — rápida e previsível, com ferramentas grátis, privadas e no navegador.",
  },
  {
    id: "guides/how-to-submit-homework-as-pdf",
    slug: "guias/como-entregar-trabalhos-em-pdf",
    title: "Como entregar trabalhos em PDF (sem drama com o portal)",
    description:
      "Portais acadêmicos recusam trabalhos por motivos previsíveis — tamanho, número de páginas, formato. O caminho mais simples entre o trabalho pronto e o PDF aceito no envio.",
  },
  {
    id: "guides/how-to-scan-notes-to-pdf",
    slug: "guias/como-digitalizar-anotacoes-em-pdf",
    title: "Como digitalizar anotações à mão em PDF (limpo e pesquisável)",
    description:
      "Transforme páginas de anotações de aula feitas à mão em PDFs limpos de várias páginas com a câmera do celular. Os ajustes que geram uma digitalização legível de primeira.",
  },
  {
    id: "guides/how-to-compress-pdf-for-school-portals",
    slug: "guias/como-comprimir-pdf-para-portais-academicos",
    title: "Como comprimir PDF para portais acadêmicos (limites apertados)",
    description:
      "Portais de escolas e universidades limitam o tamanho do PDF mais que o e-mail. Como comprimir o trabalho para caber sem destruir a legibilidade que o professor vai conferir.",
  },
  {
    id: "guides/how-to-convert-lecture-notes-to-pdf",
    slug: "guias/como-converter-anotacoes-de-aula-em-pdf",
    title: "Como converter anotações de aula em PDF (Word, fotos, slides)",
    description:
      "Anotações de aula chegam em todo formato — documento do Word, apresentação, print, foto do quadro. Como transformar cada uma em um PDF legível sem perder a estrutura.",
  },
  {
    id: "guides/how-to-organize-study-materials-as-pdf",
    slug: "guias/como-organizar-materiais-de-estudo-em-pdf",
    title: "Como organizar materiais de estudo em PDF (pastas, nomes, índice)",
    description:
      "Os PDFs da faculdade acumulam rápido. Uma convenção simples de pastas, nomes e junção que mantém o material do semestre pesquisável da primeira semana até a prova final.",
  },
  {
    id: "guides/how-to-share-study-notes-as-pdf",
    slug: "guias/como-compartilhar-anotacoes-de-estudo-em-pdf",
    title: "Como compartilhar anotações de estudo em PDF (grupo, chat, nuvem)",
    description:
      "Compartilhe anotações com o grupo de estudo sem perder formatação nem controle de versão. Os hábitos de PDF que evitam que o estudo coletivo vire uma bagunça de prints.",
  },
  {
    id: "guides/how-to-edit-class-documents-as-pdf",
    slug: "guias/como-editar-documentos-de-aula-em-pdf",
    title: "Como editar documentos de aula em PDF (anotar, grifar, assinar)",
    description:
      "Apostilas, listas de exercícios e autorizações chegam em PDF. Como marcar, preencher e devolver sem imprimir — pelo celular ou pelo notebook.",
  },
  {
    id: "guides/pdf-workflow-for-university-students",
    slug: "guias/fluxo-de-pdf-para-universitarios",
    title: "Fluxo de PDF para universitários (anotações, trabalhos, entregas)",
    description:
      "Um ritmo de PDF que aguenta o semestre inteiro: anotações de aula digitalizadas, trabalhos entregues, resumos compartilhados. Tudo no navegador e de graça.",
  },
  {
    id: "guides/how-to-create-digital-study-pdfs",
    slug: "guias/como-criar-pdfs-de-estudo-digitais",
    title: "Como criar PDFs de estudo digitais (flashcards, resumos, apostilas)",
    description:
      "Monte seus próprios PDFs de estudo a partir de anotações, slides e grifos — pesquisáveis, portáteis e prontos para anotar no tablet. A estrutura que os torna úteis na véspera da prova.",
  },
  {
    id: "guides/are-online-pdf-tools-safe",
    slug: "guias/ferramentas-de-pdf-online-sao-seguras",
    title: "Ferramentas de PDF online são seguras? Uma análise honesta do risco",
    description:
      "A maioria das ferramentas “online” de PDF envia seu arquivo para um servidor. Algumas não. Os riscos reais, os tipos de ferramenta que tratam dados de formas diferentes e como distinguir.",
  },
  {
    id: "guides/how-to-protect-sensitive-pdf-files",
    slug: "guias/como-proteger-arquivos-pdf-sigilosos",
    title: "Como proteger arquivos PDF sigilosos (guarda, envio, descarte)",
    description:
      "PDFs sigilosos precisam de proteção em três momentos: quando guardados, quando enviados e depois que o destinatário terminou. Um fluxo prático que cobre os três.",
  },
  {
    id: "guides/how-to-share-pdf-files-privately",
    slug: "guias/como-compartilhar-pdf-com-privacidade",
    title: "Como compartilhar arquivos PDF com privacidade",
    description:
      "O jeito privado de compartilhar um PDF não passa por um site público de “ferramentas de PDF”. Os canais que mantêm o documento entre você e o destinatário, com ajustes sensatos.",
  },
  {
    id: "guides/privacy-first-document-workflows",
    slug: "guias/fluxos-de-documentos-com-foco-em-privacidade",
    title: "Fluxos de documentos com foco em privacidade (do início ao fim, sem upload)",
    description:
      "Um fluxo completo de documentos — capturar, editar, assinar, enviar, arquivar — que mantém os arquivos nos seus dispositivos e fora de servidores de terceiros. O formato realista e as ferramentas.",
  },
  {
    id: "guides/local-browser-pdf-processing-explained",
    slug: "guias/processamento-de-pdf-no-navegador-explicado",
    title: "Processamento local de PDF no navegador, explicado",
    description:
      "Como uma ferramenta de PDF consegue rodar no navegador sem mandar o arquivo para lugar nenhum. A tecnologia, as limitações e como verificar se a ferramenta é mesmo local.",
  },
  {
    id: "guides/do-online-pdf-tools-store-files",
    slug: "guias/ferramentas-de-pdf-online-guardam-seus-arquivos",
    title: "Ferramentas de PDF online guardam seus arquivos? O que conferir",
    description:
      "Algumas ferramentas de PDF online apagam o envio na hora, outras guardam por horas e outras mantêm por tempo indeterminado. Como ler uma política de privacidade rápido e o que procurar.",
  },
  {
    id: "guides/how-to-avoid-uploading-sensitive-documents",
    slug: "guias/como-evitar-enviar-documentos-sigilosos",
    title: "Como evitar enviar documentos sigilosos (alternativas práticas)",
    description:
      "Quando o fluxo te empurra a subir um PDF sigiloso, quase sempre existe uma alternativa que roda só no seu dispositivo. Os tipos de tarefa e a ferramenta sem upload para cada uma.",
  },
  {
    id: "guides/secure-pdf-workflows-for-business",
    slug: "guias/fluxos-de-pdf-seguros-para-empresas",
    title: "Fluxos de PDF seguros para empresas (sem estrutura corporativa)",
    description:
      "Uma empresa pequena não precisa de um cofre de PDF certificado para operar com segurança. A base realista — armazenamento criptografado, envio assinado, processamento local — que atende ao risco real.",
  },
  {
    id: "guides/browser-based-document-processing-benefits",
    slug: "guias/vantagens-do-processamento-de-documentos-no-navegador",
    title: "Vantagens de processar documentos no navegador (velocidade, privacidade, custo)",
    description:
      "Por que processar PDFs no navegador muda a conta entre velocidade, privacidade e custo em relação às ferramentas na nuvem — e onde estão os limites reais do processamento local.",
  },
  {
    id: "guides/pdf-vs-google-docs",
    slug: "guias/pdf-ou-google-docs",
    title: "PDF ou Google Docs — quando usar cada um",
    description:
      "O Google Docs é para colaborar; o PDF é para entregar. Quando usar cada um na prática e como converter de um para o outro nos momentos certos.",
  },
  {
    id: "guides/pdf-vs-docx-for-business",
    slug: "guias/pdf-ou-docx-para-empresas",
    title: "PDF ou DOCX para empresas (contratos, relatórios, distribuição)",
    description:
      "Por que documentos corporativos quase sempre circulam em PDF, mas vivem em DOCX. A ferramenta certa em cada etapa da vida de um contrato, relatório ou cobrança.",
  },
  {
    id: "guides/pdf-vs-images-for-sharing-documents",
    slug: "guias/pdf-ou-imagem-para-compartilhar-documentos",
    title: "PDF ou imagem para compartilhar documentos (JPG, PNG, HEIC)",
    description:
      "Quando um JPG, PNG ou HEIC de um documento é a escolha errada — e o que faz do PDF o formato certo para qualquer coisa além de um print rápido.",
  },
  {
    id: "guides/pdf-vs-png",
    slug: "guias/pdf-ou-png",
    title: "PDF ou PNG — documentos de várias páginas ou imagens nítidas",
    description:
      "O PDF ganha para documentos de várias páginas; o PNG ganha para imagens únicas, nítidas e com fundo transparente. As regras claras e a conversão entre os dois.",
  },
  {
    id: "guides/best-format-for-sharing-documents",
    slug: "guias/melhor-formato-para-compartilhar-documentos",
    title: "Melhor formato para compartilhar documentos (PDF, DOCX e imagens comparados)",
    description:
      "Quando o PDF é o formato certo para compartilhar, quando não é e como as alternativas realistas (DOCX, imagens, HTML, Markdown) se comparam nos cenários do dia a dia.",
  },
  {
    id: "guides/why-pdf-is-still-popular",
    slug: "guias/por-que-o-pdf-continua-sendo-o-padrao",
    title: "Por que o PDF continua sendo o padrão para documentos em 2026",
    description:
      "Décadas depois, o PDF ainda domina o compartilhamento de documentos. Os motivos de ele ter ficado — fidelidade, universalidade, assinatura, arquivamento — e onde ele é vulnerável.",
  },
  {
    id: "guides/when-to-use-scanned-pdf",
    slug: "guias/quando-usar-pdf-digitalizado",
    title: "Quando usar um PDF digitalizado (e quando não usar)",
    description:
      "PDFs digitalizados resolvem um problema específico: transformar papel em digital. Eles também são maiores, menos pesquisáveis e mais difíceis de editar. Quando a troca compensa.",
  },
  {
    id: "guides/editable-pdf-vs-flat-pdf",
    slug: "guias/pdf-editavel-ou-pdf-plano",
    title: "PDF editável ou PDF plano — qual é a diferença de verdade",
    description:
      "Alguns PDFs têm texto selecionável e estrutura editável; outros são imagens de páginas sem texto por baixo. Como saber qual é o seu e quando cada um faz sentido.",
  },
  {
    id: "guides/best-free-pdf-tools",
    slug: "guias/melhores-ferramentas-de-pdf-gratis",
    title: "Melhores ferramentas de PDF grátis em 2026 (escolhas honestas, sem cadastro)",
    description:
      "As ferramentas de PDF grátis que valem a pena — comprimir, juntar, assinar, converter, digitalizar — escolhidas por qualidade real e privacidade, não por anúncios ou tempo de teste.",
  },
  {
    id: "guides/free-browser-based-pdf-tools",
    slug: "guias/ferramentas-de-pdf-gratis-no-navegador",
    title: "Ferramentas de PDF grátis no navegador (sem instalar, sem upload)",
    description:
      "As ferramentas de PDF que rodam inteiramente no navegador — sem instalação, sem conta, sem upload. O que existe, o que elas cobrem e como confirmar que rodam mesmo localmente.",
  },
  {
    id: "guides/best-pdf-tools-without-upload",
    slug: "guias/melhores-ferramentas-de-pdf-sem-upload",
    title: "Melhores ferramentas de PDF sem upload (o arquivo fica com você)",
    description:
      "Quando você não quer que o PDF saia do seu dispositivo, estas são as ferramentas que fazem o trabalho localmente. Compressão, junção e conversão com o arquivo sempre na sua máquina.",
  },
  {
    id: "guides/best-private-pdf-tools",
    slug: "guias/melhores-ferramentas-de-pdf-privadas",
    title: "Melhores ferramentas de PDF privadas (quando o sigilo importa de verdade)",
    description:
      "Para contratos, dados financeiros e outros PDFs sensíveis, estas são as ferramentas que respeitam a privacidade por arquitetura — e não apenas por promessa na política.",
  },
  {
    id: "guides/free-pdf-tools-for-iphone",
    slug: "guias/ferramentas-de-pdf-gratis-para-iphone",
    title: "Ferramentas de PDF grátis para iPhone (navegador e app)",
    description:
      "Ferramentas de PDF grátis para iPhone que funcionam de verdade sem assinatura — comprimir, assinar, digitalizar, converter. As opções no navegador e o app PDF Editor para uso offline.",
  },
  {
    id: "guides/free-pdf-tools-for-android",
    slug: "guias/ferramentas-de-pdf-gratis-para-android",
    title: "Ferramentas de PDF grátis para Android (navegador e app)",
    description:
      "Ferramentas de PDF grátis para Android escolhidas para as tarefas do dia a dia — comprimir, assinar, digitalizar, converter. Os caminhos pelo navegador e o app PDF Editor para uso offline.",
  },
  {
    id: "guides/what-is-a-pdf-form",
    slug: "guias/o-que-e-um-formulario-pdf",
    title: "O que é um formulário PDF? Interativo e plano, explicados",
    description:
      "Um formulário PDF é um documento feito para coletar respostas — às vezes com campos de verdade para digitar, às vezes uma página plana em que você escreve por cima. O que isso muda e como identificar.",
  },
  {
    id: "guides/editable-pdf-vs-fillable-pdf",
    slug: "guias/pdf-editavel-ou-pdf-preenchivel",
    title: "PDF editável ou PDF preenchível — qual é a diferença?",
    description:
      "Editar um PDF muda o conteúdo dele; preencher um PDF significa responder em campos de formulário. Por que são tarefas diferentes e qual delas você realmente precisa.",
  },
  {
    id: "guides/how-pdf-forms-work",
    slug: "guias/como-funcionam-os-formularios-pdf",
    title: "Como funcionam os formulários PDF — campos, AcroForms e digitalizações planas",
    description:
      "Por baixo do capô, um formulário PDF é um conjunto de campos interativos sobre a página ou uma imagem plana sem campo nenhum. Como cada um é montado e por que isso muda o preenchimento.",
  },
  {
    id: "guides/can-you-edit-a-pdf-form",
    slug: "guias/da-para-editar-um-formulario-pdf",
    title: "Dá para editar um formulário PDF? O que muda e o que trava",
    description:
      "Editar as perguntas de um formulário PDF é diferente de preenchê-lo. O que é editável, o que fica travado e como alterar um formulário que você só tem em PDF pronto.",
  },
  {
    id: "guides/how-to-fill-out-a-pdf-form",
    slug: "guias/como-preencher-um-formulario-pdf",
    title: "Como preencher um formulário PDF (interativo ou plano)",
    description:
      "Preencha qualquer formulário PDF, tendo ele campos de verdade ou sendo uma digitalização plana em que você escreve por cima. Passo a passo completo no computador e no celular, com assinatura e salvamento.",
  },
  {
    id: "guides/how-to-save-a-filled-pdf-form",
    slug: "guias/como-salvar-um-formulario-pdf-preenchido",
    title: "Como salvar um formulário PDF preenchido sem perder as respostas",
    description:
      "Preencheu o formulário e viu as respostas sumirem? Como salvar os dados preenchidos de forma confiável, por que alguns leitores não salvam e quando achatar o arquivo antes de enviar.",
  },
  {
    id: "guides/why-cant-i-type-in-a-pdf-form",
    slug: "guias/por-que-nao-consigo-digitar-no-formulario-pdf",
    title: "Por que não consigo digitar no formulário PDF? Causas e soluções",
    description:
      "Você clica no campo e nada acontece. Os três motivos mais comuns — formulário plano, leitor errado ou arquivo travado — e exatamente o que fazer em cada caso.",
  },
  {
    id: "guides/how-to-create-a-fillable-pdf",
    slug: "guias/como-criar-um-pdf-preenchivel",
    title: "Como criar um PDF preenchível — opções honestas e limites",
    description:
      "O que é realmente necessário para fazer um PDF que as pessoas consigam preencher — campos interativos ou um modelo plano simples — e qual caminho combina com as ferramentas que você tem.",
  },
  {
    id: "guides/how-to-share-a-pdf-form",
    slug: "guias/como-compartilhar-um-formulario-pdf",
    title: "Como compartilhar um formulário PDF para outras pessoas preencherem",
    description:
      "Mandar um formulário em branco para ser preenchido é diferente de mandar um documento pronto. Como compartilhar para que o destinatário consiga preencher — e como receber as respostas.",
  },
  {
    id: "guides/how-to-print-a-filled-pdf-form",
    slug: "guias/como-imprimir-um-formulario-pdf-preenchido",
    title: "Como imprimir um formulário PDF preenchido com as respostas aparecendo",
    description:
      "Imprimiu o formulário e os campos saíram em branco? Por que os valores preenchidos às vezes não imprimem e como conseguir uma via em papel com todas as respostas visíveis.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-iphone",
    slug: "guias/como-preencher-formularios-pdf-no-iphone",
    title: "Como preencher formulários PDF no iPhone (Arquivos, Marcação e apps)",
    description:
      "Preencha formulários PDF interativos e planos no iPhone — pelo app Arquivos e pela Marcação, ou por um app dedicado. Os passos no iOS, o caminho pela folha de compartilhamento e onde a Marcação falha.",
  },
  {
    id: "guides/how-to-fill-pdf-forms-on-android",
    slug: "guias/como-preencher-formularios-pdf-no-android",
    title: "Como preencher formulários PDF no Android (qualquer celular)",
    description:
      "Preencha formulários PDF interativos e planos no Android. Por que o visualizador nativo muitas vezes não deixa digitar, o caminho confiável pelo app e como cada fabricante muda o comportamento.",
  },
  {
    id: "guides/how-to-send-a-completed-pdf-form",
    slug: "guias/como-enviar-um-formulario-pdf-preenchido",
    title: "Como enviar um formulário PDF preenchido (achatar e entregar)",
    description:
      "Você preencheu o formulário — agora devolva do jeito certo. Como achatar para que as respostas não sejam alteradas, anexar corretamente e confirmar a chegada sem perder dados.",
  },
  {
    id: "guides/how-to-fill-government-pdf-forms-on-phone",
    slug: "guias/como-preencher-formularios-de-orgaos-publicos-no-celular",
    title: "Como preencher formulários PDF de órgãos públicos pelo celular",
    description:
      "Formulários de órgãos públicos costumam ser digitalizações planas com formatação rígida. Como preencher pelo celular, lidar com os campos difíceis e seguir as instruções do próprio órgão.",
  },
  {
    id: "guides/mobile-pdf-form-workflow",
    slug: "guias/fluxo-de-formularios-pdf-no-celular",
    title: "O fluxo de formulários PDF no celular (do recebimento ao envio)",
    description:
      "Uma rotina repetível e feita para o celular: receber, abrir no app certo, preencher, assinar, achatar e enviar. O caminho completo, sem precisar de computador.",
  },
  {
    id: "guides/best-pdf-form-app-for-iphone",
    slug: "guias/melhor-app-de-formulario-pdf-para-iphone",
    title: "Melhor app de formulário PDF para iPhone (o que observar)",
    description:
      "O que realmente importa em um app de formulário PDF para iPhone — detecção de campos, texto em formulário plano, assinatura, privacidade no dispositivo — e como avaliar com os seus formulários.",
  },
  {
    id: "guides/best-pdf-form-app-for-android",
    slug: "guias/melhor-app-de-formulario-pdf-para-android",
    title: "Melhor app de formulário PDF para Android (como escolher)",
    description:
      "Como escolher um app de formulário PDF no Android: detecção de campos, texto em formulário plano, assinatura e privacidade no dispositivo — e por que um app dedicado ganha do visualizador padrão.",
  },
  {
    id: "guides/pdf-forms-for-small-business",
    slug: "guias/formularios-pdf-para-pequenas-empresas",
    title: "Formulários PDF para pequenas empresas (cadastro, pedidos, RH)",
    description:
      "Os formulários do dia a dia de uma pequena empresa — cadastro, pedidos, agendamentos, RH simples — e como preencher, coletar e organizar tudo em PDF sem contratar uma plataforma.",
  },
  {
    id: "guides/how-to-send-client-intake-forms",
    slug: "guias/como-enviar-formularios-de-cadastro-de-cliente",
    title: "Como enviar formulários de cadastro de cliente (com clareza e privacidade)",
    description:
      "Colete os dados de um cliente novo de uma vez só. Como enviar um formulário PDF de cadastro fácil de preencher, que volta completo e mantém as informações do cliente privadas.",
  },
  {
    id: "guides/how-to-use-pdf-forms-for-contracts",
    slug: "guias/como-usar-formularios-pdf-em-contratos",
    title: "Como usar formulários PDF em contratos (campos e assinatura)",
    description:
      "Transforme um contrato em um PDF preenchível: campos para nome, data e rubrica, uma área de assinatura e uma etapa de achatamento para que a via assinada não seja alterada. Com os limites honestos.",
  },
  {
    id: "guides/how-to-manage-pdf-application-forms",
    slug: "guias/como-organizar-formularios-de-inscricao-em-pdf",
    title: "Como organizar formulários de inscrição em PDF (receber e avaliar)",
    description:
      "Recebe inscrições em PDF? Como coletar, avaliar, comparar e arquivar sem se perder — um sistema simples para dar conta de uma pilha de formulários preenchidos.",
  },
  {
    id: "guides/pdf-forms-for-consultants",
    slug: "guias/formularios-pdf-para-consultores",
    title: "Formulários PDF para consultores (questionários e escopo)",
    description:
      "Questionários de diagnóstico, fichas de escopo do trabalho e formulários de feedback — o lado formulário da consultoria, resolvido em PDFs preenchíveis em qualquer dispositivo.",
  },
  {
    id: "guides/pdf-forms-for-agencies",
    slug: "guias/formularios-pdf-para-agencias",
    title: "Formulários PDF para agências (onboarding, briefings, aprovações)",
    description:
      "Kits de onboarding de cliente, formulários de briefing de criação e fichas de aprovação — os formulários de várias mãos que uma agência usa, em PDFs preenchíveis por qualquer pessoa.",
  },
  {
    id: "guides/pdf-forms-for-freelancers",
    slug: "guias/formularios-pdf-para-freelancers",
    title: "Formulários PDF para freelancers (cadastro, contratos, sinal)",
    description:
      "Cadastro de projeto, contratos de serviço simples e autorização de sinal — o conjunto enxuto de formulários PDF preenchíveis que um freelancer precisa, sem assinatura e sem upload.",
  },
  {
    id: "guides/document-collection-workflows-with-pdf",
    slug: "guias/fluxos-de-coleta-de-documentos-em-pdf",
    title: "Fluxos de coleta de documentos em PDF",
    description:
      "Precisa reunir arquivos e formulários assinados de clientes? Monte um fluxo repetível de coleta em PDF — um checklist, formatos consistentes e um jeito organizado de acompanhar o que falta.",
  },
  {
    id: "guides/pdf-form-best-practices",
    slug: "guias/boas-praticas-para-formularios-pdf",
    title: "Boas práticas para formulários PDF (que as pessoas terminam de preencher)",
    description:
      "Crie formulários que as pessoas realmente terminam: rótulos claros, espaçamento de verdade, campos sensatos, uma área de assinatura óbvia e uma etapa de achatamento. Regras práticas para quem cria e quem envia.",
  },
  {
    id: "guides/pdf-form-not-working",
    slug: "guias/formulario-pdf-nao-funciona",
    title: "Formulário PDF não funciona? Diagnóstico e soluções",
    description:
      "Um formulário PDF com defeito costuma ter poucas causas. Um diagnóstico rápido para saber qual delas pegou você — campos ausentes, não digita, não salva, somente leitura — e onde resolver.",
  },
  {
    id: "guides/pdf-form-fields-missing",
    slug: "guias/campos-do-formulario-pdf-sumiram",
    title: "Campos do formulário PDF sumiram? Por que acontece e como recuperar",
    description:
      "Abriu o formulário e os campos não estão lá? Por que campos interativos desaparecem em alguns leitores, como trazê-los de volta e o que fazer quando eles nunca existiram.",
  },
  {
    id: "guides/why-pdf-form-wont-save",
    slug: "guias/por-que-o-formulario-pdf-nao-salva",
    title: "Por que o formulário PDF não salva (e como resolver)",
    description:
      "Preencheu o formulário e as respostas somem ao reabrir? Por que alguns leitores só imprimem em vez de salvar os dados dos campos, e os jeitos confiáveis de fazer as respostas ficarem.",
  },
  {
    id: "guides/why-pdf-form-is-read-only",
    slug: "guias/por-que-o-formulario-pdf-e-somente-leitura",
    title: "Por que o formulário PDF é somente leitura (e o que fazer)",
    description:
      "Seu formulário abre travado e acinzentado? Por que formulários são marcados como somente leitura, como distinguir segurança proposital de falha do leitor e as opções honestas para preencher.",
  },
  {
    id: "guides/pdf-form-not-printing-correctly",
    slug: "guias/formulario-pdf-nao-imprime-direito",
    title: "Formulário PDF não imprime direito? Resolva os campos em branco",
    description:
      "Formulário sai com campos em branco, texto deslocado ou bordas cortadas? Os problemas de impressão específicos de formulário — principalmente valores que somem — e o ajuste que resolve cada um.",
  },
  {
    id: "guides/pdf-form-font-problems",
    slug: "guias/problemas-de-fonte-em-formulario-pdf",
    title: "Problemas de fonte em formulário PDF (tamanho automático, corte, substituição)",
    description:
      "Texto do campo grande demais, pequeno demais ou encolhendo enquanto você digita? As peculiaridades de fonte próprias dos campos de formulário — tamanho automático, substituição, corte — e como obter respostas legíveis.",
  },
  {
    id: "guides/pdf-form-formatting-issues",
    slug: "guias/problemas-de-formatacao-em-formulario-pdf",
    title: "Problemas de formatação em formulário PDF (alinhamento e transbordo)",
    description:
      "Campos desalinhados, respostas transbordando, o formulário aparecendo diferente na tela de outra pessoa? Os problemas de layout que variam de leitor para leitor e como obter um resultado consistente.",
  },
  {
    id: "guides/pdf-form-submission-errors",
    slug: "guias/erros-de-envio-em-formulario-pdf",
    title: "Erros de envio em formulário PDF (quando o botão Enviar falha)",
    description:
      "O botão Enviar do formulário falha ou não faz nada? Por que os botões de envio embutidos dependem do servidor de quem emitiu, o que os erros significam e o jeito manual confiável de mandar o formulário.",
  },
  {
    id: "guides/pdf-form-compatibility-problems",
    slug: "guias/problemas-de-compatibilidade-em-formulario-pdf",
    title: "Problemas de compatibilidade em formulário PDF (XFA e formulários dinâmicos)",
    description:
      "Um formulário que abre em um programa e quebra em outro costuma usar recursos que nem todo leitor entende. Como identificar formulários dinâmicos, o que causa a incompatibilidade e quais são as opções.",
  },
  {
    id: "guides/fix-pdf-form-errors",
    slug: "guias/como-resolver-erros-de-formulario-pdf",
    title: "Como resolver erros de formulário PDF — checklist de primeiros socorros",
    description:
      "Os primeiros socorros universais para um formulário PDF com problema: trocar de leitor, baixar de novo, atualizar, escrever por cima e achatar. Faça isso antes de investigar uma causa específica.",
  },
];
