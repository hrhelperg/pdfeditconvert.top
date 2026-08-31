import type { ToolDictionary } from "@/lib/i18n/toolStrings";

/**
 * Brazilian Portuguese tool copy.
 *
 * Two deliberate departures from a literal translation:
 *
 * - The first step is "Adicionar", not "Enviar". "Enviar" means *upload* to a
 *   Brazilian reader, and these tools never upload anything. Translating the
 *   English label literally would contradict the privacy claim printed
 *   directly beneath it.
 * - Output filenames are localized ("-comprimido", "-paginas"). The file
 *   lands in the reader's downloads folder, so it is interface text, not a
 *   technical identifier. ASCII-only, to stay safe across filesystems.
 */
export const TOOLS_PT_BR: ToolDictionary = {
  common: {
    privacyText: "Os arquivos são processados localmente, no seu navegador.",
    fileMoveUp: "Mover {name} para cima",
    fileMoveDown: "Mover {name} para baixo",
    fileRemove: "Remover {name}",
    downloadAgain: "Baixar de novo",
    startOver: "Começar de novo",
    tryNext: "Faça também",
    clearAll: "Limpar tudo",
    appCtaHeading: "Precisa de ferramentas de PDF no celular?",
    dropPdfLabel: "Solte um PDF aqui ou clique para escolher",
    dropPdfHint: "Um PDF · até 100 MB",
    genericErrorMessage: "Algo deu errado. Tente de novo ou use um arquivo menor.",
    errors: {
      not_pdf: { message: "“{name}” não é um PDF." },
      not_image: {
        message: "“{name}” não é um formato de imagem aceito. Use JPG, PNG ou WebP.",
      },
      not_word: {
        message: "“{name}” não é um arquivo do Word (.docx) nem um .txt.",
      },
      legacy_doc: {
        message: "Arquivos “.doc” antigos não podem ser lidos no navegador.",
        hint: "Salve o documento como “.docx” e tente de novo.",
      },
      too_large: {
        message: "“{name}” é grande demais ({size} MB).",
        hint: "O limite é de {limit} MB por arquivo, porque todo o processamento acontece no seu navegador.",
      },
      unreadable_pdf: {
        message: "Não foi possível abrir este arquivo.",
        hint: "Ele pode estar corrompido ou protegido por senha. Desbloqueie ou repare o arquivo e tente de novo.",
      },
      invalid_range: {
        message: "Digite um intervalo de páginas válido.",
        hint: "Use valores como 1-3 ou 2,4,6.",
      },
      memory: {
        message: "Este arquivo pode ser grande demais para o processamento no navegador.",
        hint: "Tente um PDF menor ou divida o arquivo em partes antes.",
      },
      too_many_files: { message: "Adicione no máximo {limit} arquivos por vez." },
      too_few_files: { message: "Adicione pelo menos dois PDFs para juntar." },
      canvas_unsupported: { message: "Este navegador não tem suporte a canvas." },
      encode_failed: { message: "Falha ao codificar a imagem." },
      generic: {
        message: "Algo deu errado. Tente de novo ou use um arquivo menor.",
      },
    },
  },
  tools: {
    "image-to-pdf": {
      title: "Imagem para PDF",
      subtitle: "Escolha imagens JPG, PNG ou WebP e reúna todas em um único PDF.",
      steps: ["Adicionar", "Ajustar", "Baixar"],
      successTitle: "Seu PDF está pronto",
      actionIdle: "Converter para PDF",
      actionBusy: "Convertendo…",
      appCtaSub: "O PDF Editor para iPhone e Android também funciona sem internet.",
      related: [
        { id: "merge-pdf", label: "Juntar dois PDFs" },
        { id: "add-watermark-to-pdf", label: "Adicionar marca d'água" },
      ],
      dropLabel: "Solte as imagens aqui ou clique para escolher",
      dropHint: "JPG, PNG ou WebP · até 100 MB cada",
      busyCreating: "Criando seu PDF…",
      errorNoImages: "Adicione pelo menos uma imagem.",
      pageSizeLabel: "Tamanho da página",
      pageSizeAuto: "Automático",
      orientationLabel: "Orientação",
      orientationAuto: "Automática",
      orientationPortrait: "Retrato",
      orientationLandscape: "Paisagem",
      fitLabel: "Ajuste da imagem",
      fitFit: "Caber na página",
      fitFill: "Preencher a página",
      marginLabel: "Margem",
      marginNone: "Nenhuma",
      marginSmall: "Pequena",
      marginMedium: "Média",
      outputFilename: "imagens.pdf",
    },
    "merge-pdf": {
      title: "Juntar PDFs",
      subtitle: "Escolha dois ou mais arquivos PDF e combine tudo em um só documento.",
      steps: ["Adicionar", "Ajustar", "Baixar"],
      successTitle: "Seu PDF unido está pronto",
      actionIdle: "Juntar PDFs",
      actionBusy: "Juntando…",
      appCtaSub: "O PDF Editor para iPhone e Android também junta e divide arquivos.",
      related: [
        { id: "split-pdf", label: "Dividir um PDF" },
        { id: "rotate-pdf", label: "Girar páginas" },
      ],
      dropLabel: "Solte os PDFs aqui ou clique para escolher",
      dropHint: "PDF · até 100 MB cada",
      busyMerging: "Combinando os PDFs…",
      errorTooFew: "Adicione pelo menos dois PDFs para juntar.",
      outputFilename: "pdf-unido.pdf",
    },
    "split-pdf": {
      title: "Dividir PDF",
      subtitle:
        "Escolha um PDF e informe o intervalo de páginas que quer exportar. Exemplos: 1-3 ou 2,4,6.",
      steps: ["Adicionar", "Ajustar", "Baixar"],
      successTitle: "Seu PDF com as páginas escolhidas está pronto",
      actionIdle: "Dividir PDF",
      actionBusy: "Dividindo…",
      appCtaSub:
        "O PDF Editor para iPhone e Android também divide e reorganiza páginas.",
      related: [
        { id: "merge-pdf", label: "Juntar PDFs" },
        { id: "rotate-pdf", label: "Girar páginas" },
      ],
      busyExtracting: "Extraindo as páginas…",
      rangeLabel: "Páginas que ficam (de {total} no total)",
      rangeHint: "Exemplos: 1-3 ou 2,4,6 ou 1-3,5,8-10",
      rangePlaceholder: "ex.: 1-3 ou 2,4,6",
      outputSuffix: "-paginas-{first}-a-{last}",
    },
    "compress-pdf": {
      title: "Comprimir PDF",
      subtitle:
        "Reduza o tamanho de um PDF para mandar por e-mail, anexar num sistema ou guardar — direto no navegador.",
      steps: ["Adicionar", "Ajustar", "Baixar"],
      successTitle: "Seu PDF comprimido está pronto",
      actionIdle: "Comprimir PDF",
      actionBusy: "Comprimindo…",
      appCtaSub:
        "O PDF Editor para iPhone e Android também comprime e compartilha PDFs.",
      related: [
        { id: "merge-pdf", label: "Juntar PDFs" },
        { id: "split-pdf", label: "Dividir um PDF" },
      ],
      busyReading: "Lendo o PDF…",
      busyPage: "Comprimindo a página {page} de {total}…",
      busyFinalizing: "Finalizando…",
      levelLabel: "Nível de compressão",
      levelLow: "Baixo",
      levelRecommended: "Recomendado",
      levelStrong: "Forte",
      levelNote:
        "A compressão forte rasteriza as páginas (o texto vira imagem e deixa de ser selecionável). É a melhor opção para PDFs digitalizados ou cheios de imagens.",
      summaryAlreadyCompact:
        "Este PDF é quase todo texto e gráficos vetoriais, e já está compacto ({size}). Comprimir não traria ganho, então o arquivo original ficou intacto.",
      summaryReduced:
        "Reduzido de {from} para {to} ({percent}% menor). As páginas foram convertidas em imagem, então o texto não fica mais selecionável.",
      outputSuffix: "-comprimido",
    },
    "rotate-pdf": {
      title: "Girar PDF",
      subtitle:
        "Gire todas as páginas ou só as que você escolher e baixe o PDF corrigido.",
      steps: ["Adicionar", "Ajustar", "Baixar"],
      successTitle: "Seu PDF girado está pronto",
      actionIdle: "Girar PDF",
      actionBusy: "Girando…",
      appCtaSub: "O PDF Editor para iPhone e Android também gira e reorganiza páginas.",
      related: [
        { id: "split-pdf", label: "Dividir um PDF" },
        { id: "add-watermark-to-pdf", label: "Adicionar marca d'água" },
      ],
      busyRotating: "Girando as páginas…",
      angleLabel: "Rotação",
      scopeLabel: "Aplicar em",
      scopeAll: "Todas as páginas",
      scopeSome: "Algumas páginas",
      rangeLabel: "Páginas a girar",
      rangeHint: "Exemplos: 1-3 ou 2,4,6",
      rangePlaceholder: "ex.: 1,3-5",
      outputSuffix: "-girado",
    },
    "pdf-to-images": {
      title: "PDF para imagens",
      subtitle: "Transforme as páginas do PDF em arquivos de imagem para baixar.",
      steps: ["Adicionar", "Ajustar", "Baixar"],
      successTitle: "Suas imagens estão prontas",
      successDescription: "Cada página foi baixada como um arquivo separado.",
      actionIdle: "Converter em imagens",
      actionBusy: "Convertendo…",
      appCtaSub:
        "O PDF Editor para iPhone e Android renderiza as páginas com aceleração de hardware.",
      related: [
        { id: "image-to-pdf", label: "Imagem para PDF — o caminho inverso" },
        { id: "split-pdf", label: "Dividir um PDF" },
      ],
      busyLoading: "Carregando o PDF…",
      busyPage: "Renderizando a página {page} de {total}…",
      formatLabel: "Formato",
      scaleLabel: "Escala",
      qualityLabel: "Qualidade do JPEG",
      rangeLabel: "Páginas (opcional)",
      rangeHint:
        "Deixe em branco para converter todas as páginas. Exemplos: 1-3 ou 2,4,6",
      rangePlaceholder: "Todas as páginas",
      downloadedSummary: {
        one: "{count} imagem baixada (última: {filename})",
        other: "{count} imagens baixadas (última: {filename})",
      },
    },
    "add-watermark-to-pdf": {
      title: "Adicionar marca d'água ao PDF",
      subtitle: "Coloque uma marca d'água de texto antes de compartilhar o PDF.",
      steps: ["Adicionar", "Ajustar", "Baixar"],
      successTitle: "Seu PDF com marca d'água está pronto",
      actionIdle: "Adicionar marca d'água",
      actionBusy: "Aplicando…",
      appCtaSub:
        "O PDF Editor para iPhone e Android também carimba e assina documentos.",
      related: [
        { id: "merge-pdf", label: "Juntar PDFs" },
        { id: "rotate-pdf", label: "Girar páginas" },
      ],
      busyStamping: "Aplicando a marca nas páginas…",
      textLabel: "Texto da marca d'água",
      textDefault: "CONFIDENCIAL",
      errorEmptyText: "O texto da marca d'água não pode ficar vazio.",
      positionLabel: "Posição",
      positionCenter: "Centro",
      positionTopLeft: "Superior esquerdo",
      positionTopRight: "Superior direito",
      positionBottomLeft: "Inferior esquerdo",
      positionBottomRight: "Inferior direito",
      fontSizeLabel: "Tamanho da fonte",
      opacityLabel: "Opacidade",
      angleLabel: "Ângulo",
      outputSuffix: "-com-marca-dagua",
    },
    "pdf-to-word": {
      title: "PDF para Word",
      subtitle:
        "Extraia o texto de um PDF para um documento .docx editável — direto no navegador.",
      steps: ["Adicionar", "Converter", "Baixar"],
      successTitle: "Seu documento do Word está pronto",
      successDescription:
        "O texto editável foi extraído para um arquivo .docx. O layout original, as colunas e as imagens não são preservados.",
      actionIdle: "Converter para Word",
      actionBusy: "Convertendo…",
      appCtaSub:
        "O PDF Editor para iPhone e Android também converte e edita documentos.",
      related: [
        { id: "word-to-pdf", label: "Word para PDF — o caminho inverso" },
        { id: "pdf-to-images", label: "PDF para imagens" },
      ],
      dropHint: "Um PDF · até 100 MB · somente PDFs com texto",
      busyReading: "Lendo o PDF…",
      busyPage: "Extraindo o texto da página {page} de {total}…",
      busyBuilding: "Montando o documento do Word…",
      errorNoText:
        "Nenhum texto selecionável foi encontrado. Este parece ser um PDF digitalizado — ele precisaria de OCR, e esta ferramenta de navegador não faz OCR.",
    },
    "word-to-pdf": {
      title: "Word para PDF",
      subtitle:
        "Transforme um documento .docx ou .txt em um PDF limpo — direto no navegador.",
      steps: ["Adicionar", "Converter", "Baixar"],
      successTitle: "Seu PDF está pronto",
      successDescription:
        "O texto foi diagramado em um PDF A4 limpo. As fontes, imagens, tabelas e o espaçamento exato do .docx original não são reproduzidos.",
      actionIdle: "Converter para PDF",
      actionBusy: "Convertendo…",
      appCtaSub:
        "O PDF Editor para iPhone e Android também converte e assina documentos.",
      related: [
        { id: "pdf-to-word", label: "PDF para Word — o caminho inverso" },
        { id: "image-to-pdf", label: "Imagem para PDF" },
      ],
      dropLabel: "Solte um arquivo .docx ou .txt aqui ou clique para escolher",
      dropHint: "Word .docx ou .txt simples · até 100 MB",
      busyReading: "Lendo o documento…",
      busyBuilding: "Montando o PDF…",
      errorEmptyDocument: "O documento parece vazio — não há texto para converter.",
      errorUnreadable:
        "Não foi possível ler este documento. Salve-o novamente como .docx e tente mais uma vez.",
    },
    "reorder-pdf-pages": {
      title: "Organizar páginas do PDF",
      subtitle:
        "Veja a prévia de cada página, coloque tudo na ordem que você quer e baixe o arquivo.",
      steps: ["Adicionar", "Organizar", "Baixar"],
      successTitle: "Seu PDF reorganizado está pronto",
      actionIdle: "Reorganizar PDF",
      actionBusy: "Montando…",
      appCtaSub: "O PDF Editor para iPhone e Android também organiza e junta páginas.",
      related: [
        { id: "merge-pdf", label: "Juntar PDFs" },
        { id: "extract-pdf-pages", label: "Extrair páginas" },
      ],
      busyBuilding: "Montando o PDF reorganizado…",
      prepRendering: "Gerando as prévias das páginas…",
      prepRenderingProgress: "Gerando as prévias das páginas… ({done}/{total})",
      instructions: {
        one: "{count} página. Use as setas para adiantar ou atrasar uma página e depois gere o PDF.",
        other:
          "{count} páginas. Use as setas para adiantar ou atrasar uma página e depois gere o PDF.",
      },
      positionLabel: "Posição {position}",
      wasPageLabel: "era a página {page}",
      originalPageAlt: "Página original {page}",
      moveEarlier: "Adiantar a posição {position}",
      moveLater: "Atrasar a posição {position}",
      resetOrder: "Restaurar a ordem",
      outputSuffix: "-reorganizado",
    },
    "extract-pdf-pages": {
      title: "Extrair páginas do PDF",
      subtitle:
        "Escolha páginas ou intervalos específicos e baixe um novo PDF só com elas.",
      steps: ["Adicionar", "Selecionar", "Baixar"],
      successTitle: "Seu PDF com as páginas extraídas está pronto",
      actionIdle: "Extrair páginas",
      actionBusy: "Extraindo…",
      appCtaSub:
        "O PDF Editor para iPhone e Android também extrai e reorganiza páginas.",
      related: [
        { id: "split-pdf", label: "Dividir um PDF" },
        { id: "reorder-pdf-pages", label: "Organizar páginas do PDF" },
      ],
      busyExtracting: "Extraindo as páginas…",
      pageCountNote: {
        one: "Este PDF tem {count} página.",
        other: "Este PDF tem {count} páginas.",
      },
      rangeLabel: "Páginas a extrair",
      rangeHint: "Exemplos: 1-3 · 2,4,6 · 1-2,5,8-10",
      rangePlaceholder: "ex.: 1-3,5",
      selectedNote: {
        one: "{count} de {total} página selecionada.",
        other: "{count} de {total} páginas selecionadas.",
      },
      outputSuffix: "-paginas",
    },
  },
};
