import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-contracts-as-pdf",
  h1: "Jak wysyłać umowy w PDF (podpisz, zablokuj, dostarcz)",
  description:
    "Umowy wymagają bardziej rygorystycznego sposobu pracy z PDF: zablokowania treści, dodania podpisu, oznaczenia wersji roboczych znakiem wodnym i przygotowania ostatecznego pliku, który druga strona może podpisać bez zbędnej wymiany wiadomości.",
  updated: "2026-05-29",
  intro: [
    "Umowy to typ dokumentu, w którym niewłaściwe obchodzenie się z PDF-em wyrządza największą szkodę. Podpisana kopia, która jest inną wersją niż niepodpisana wersja robocza. Kontrasygnata naniesiona na plik, który pierwsza osoba podpisująca uważała za zablokowany. Znak wodny wersji roboczej zapomniany na wersji ostatecznej. Nic z tego nie jest egzotyczne; wszystko to wciąga ludzi w prawdziwe spory.",
    "Lekarstwem jest bardziej rygorystyczny sposób pracy wokół trzech rzeczy: zablokowania treści przed podpisem, naniesienia podpisów w jasnej kolejności i dostarczenia wyniku jako ostatecznego pliku. Nic z tego nie wymaga drogiego oprogramowania do umów; wymaga świadomego użycia podstawowych narzędzi PDF i uczciwej kolejności.",
    "Ten poradnik pokazuje sposób pracy tak, jak powinien przebiegać – od ostatecznej wersji roboczej przez podpisy obu stron aż po czysty, kontrasygnowany PDF, z którego zadowolony będzie prawnik. Omawia też, co zrobić, gdy druga strona chce użyć własnej platformy do podpisywania.",
  ],
  steps: [
    {
      title: "Najpierw ustal ostateczną treść umowy",
      body: "Wszystkie negocjacje wracają do źródła – Word, Pages, Docs. Nie nanoś poprawek w PDF-ie. Eksportuj do PDF dopiero, gdy obie strony zgodzą się, że tekst jest zablokowany.",
    },
    {
      title: "Usuń wersje robocze i znak wodny",
      body: "Usuń znaki wodne WERSJA ROBOCZA (Dodaj znak wodny do PDF pozwala od razu uniknąć dodania go na wersji ostatecznej). Ostateczny PDF powinien wyglądać na ostateczny.",
    },
    {
      title: "Dodaj swój podpis jako pierwszy",
      body: "Podpisz PDF pozwala dodać wpisany albo odręczny podpis we właściwym miejscu. Podpisz najpierw, jeśli jesteś stroną inicjującą; druga strona kontrasygnuje PDF, który już ma Twój podpis.",
    },
    {
      title: "Zablokuj plik przed wysłaniem",
      body: "Jeśli Twoje narzędzie to obsługuje, zastosuj ograniczenia edycji po podpisaniu. Druga strona może czytać i podpisać, ale nie może zmienić treści. To jedyny sposób, żeby pewnie zamrozić umowę.",
    },
    {
      title: "Wyślij z jasnymi instrukcjami",
      body: "Krótka notatka przewodnia: „W załączniku: podpisana umowa. Proszę o kontrasygnatę na stronie 8 i odesłanie”. Jedno zdanie oszczędza wymianę pytań w obie strony.",
    },
    {
      title: "Odbierz kontrasygnowany plik i zarchiwizuj oba",
      body: "Gdy dotrze kontrasygnowany PDF, zapisz go jako wersję kanoniczną. Trzymaj niepodpisaną wersję roboczą, Twoją jednostronnie podpisaną kopię i w pełni podpisaną kopię w tym samym folderze. Łańcuch wersji jest śladem audytowym.",
    },
  ],
  tips: [
    "Nie używaj oryginalnego podpisanego PDF-a do drugiej umowy. Zawsze zaczynaj świeży eksport dla każdej nowej umowy – czyste metadane, czyste podpisy.",
    "Jeśli druga strona chce użyć swojej platformy do podpisywania (DocuSign, Adobe Sign, inne), ustąp jej. Nie warto walczyć o to, które narzędzie jest czystsze.",
    "Upewnij się, że Twój podpis jest wizualnie wyróżniający się. Wpisane imię kursywą to podpis, ale sprawia wrażenie mniej przemyślanego niż narysowany.",
    "Strony tytułowe wymieniające tytuł umowy, datę i strony umowy znacznie ułatwiają późniejsze odnalezienie niż poleganie samej nazwie pliku.",
    "Oznaczaj wersje robocze znakiem wodnym (WERSJA ROBOCZA, NIE DO PODPISU) w trakcie negocjacji. Widoczna etykieta zapobiega przypadkowej kontrasygnacie.",
  ],
  mobileNote:
    "Kontrasygnaty często dzieją się na telefonie – wspólnik przegląda w pociągu, klient podpisuje między spotkaniami. Aplikacja PDF Editor dobrze się do tego nadaje: przejrzyj umowę, podpisz palcem na ekranie, odeślij bez odbijania się przez komputer. Podpisany plik opuszcza telefon jako czysty PDF.",
  faq: [
    {
      q: "Czy wpisany podpis na PDF-ie jest prawnie wiążący?",
      a: "W większości jurysdykcji tak, dla zwykłych umów. Niektóre konkretne przypadki (akty notarialne, pewne instrumenty finansowe) wymagają więcej – sprawdź typ umowy, zanim założysz inaczej.",
    },
    {
      q: "Czy umowa powinna być zabezpieczona hasłem?",
      a: "Zwykle nie. Hasła dodają utrudnienie bez większej korzyści bezpieczeństwa. Zachowaj hasła dla wysoce poufnych załączników, nie samej umowy.",
    },
    {
      q: "Jak zablokować PDF po podpisaniu?",
      a: "Wiele narzędzi edycyjnych, w tym aplikacja PDF Editor, pozwala zastosować ograniczenia edycji podczas procesu podpisywania. Zablokuj po ostatecznym podpisie, nie w trakcie negocjacji.",
    },
    {
      q: "Co, jeśli druga strona edytuje PDF po tym, jak podpiszę?",
      a: "Zablokowanie pliku przed wysłaniem sprawi, że zmiany będą wykrywalne. Nawet bez blokady podpisany PDF jest wersją obowiązującą; kolejne edycje unieważniają podpis.",
    },
    {
      q: "Czy zawsze powinienem podpisywać jako pierwszy?",
      a: "Jeśli jesteś stroną inicjującą – tak, to sygnalizuje zaangażowanie. Jeśli kontrasygnujesz, podpisz plik, który przysłała druga strona, zamiast zaczynać od nowa.",
    },
  ],
  related: [
    { label: "Podpisz PDF — dodaj podpisy elektroniczne", path: "/sign-pdf" },
    { label: "Dodaj znak wodny do PDF — oznaczaj wersje robocze wyraźnie", path: "/add-watermark-to-pdf" },
    { label: "Jak udostępniać PDF klientom", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Sposoby pracy z PDF dla małych firm", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "Podpisz PDF — podpisy elektroniczne na telefonie", path: "/sign-pdf" },
};

export default content;
