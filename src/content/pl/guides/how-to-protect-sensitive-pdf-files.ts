import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-sensitive-pdf-files",
  h1: "Jak chronić wrażliwe pliki PDF (przechowywanie, udostępnianie, cykl życia)",
  description:
    "Wrażliwe pliki PDF wymagają ochrony w trzech momentach: podczas przechowywania, podczas udostępniania i po tym, jak odbiorca skończy z nich korzystać. Praktyczny sposób pracy obejmujący wszystkie trzy.",
  updated: "2026-05-29",
  intro: [
    "Wrażliwe pliki PDF – umowy, dokumenty finansowe, dokumenty tożsamości, dokumentacja medyczna – wymagają ochrony w trzech odrębnych momentach swojego istnienia: gdy leżą na Twoim urządzeniu lub dysku (przechowywanie), gdy wędrują między Tobą a odbiorcą (udostępnianie), i po tym, jak odbiorca z nich skorzysta (cykl życia). Większość osób skupia się na udostępnianiu, a ignoruje pozostałe dwa momenty.",
    "Rozsądny sposób pracy obejmuje wszystkie trzy. Przechowywanie oznacza zaszyfrowane dyski albo zabezpieczone hasłem pliki w miejscach, którym nie ufasz. Udostępnianie oznacza wybór kanału, który niczego nie ujawnia, a nie przesłanie pliku do pierwszej strony, jaka pojawi się w wyszukiwarce. Cykl życia oznacza zastanowienie się, co dzieje się z plikiem potem – zarówno u Ciebie, jak i u odbiorcy.",
    "Ten poradnik omawia każdy z tych trzech momentów. Nic z tego nie jest na poziomie korporacyjnym; to realistyczny fundament dla osoby albo małego zespołu, który od czasu do czasu obsługuje wrażliwe materiały i nie chce wdrażać certyfikowanego stosu klasy SOC2.",
  ],
  steps: [
    {
      title: "Przechowywanie: trzymaj wrażliwe PDF-y na zaszyfrowanym dysku",
      body: "FileVault na macOS, BitLocker na Windows, pełne szyfrowanie dysku na Linuksie i telefonach. Te rozwiązania obejmują Twój lokalny dysk. Dla dysków zewnętrznych używaj zaszyfrowanych formatów. Kopie zapasowe też powinny być zaszyfrowane – synchronizuj z usługami chmurowymi obsługującymi szyfrowanie zero-knowledge albo zaszyfruj plik wcześniej.",
    },
    {
      title: "Zabezpiecz hasłem pojedyncze wrażliwe pliki PDF",
      body: "Ochrona hasłem PDF-a dodaje drugą warstwę zabezpieczeń. Plik jest bezpieczny, nawet gdy zawiedzie szyfrowanie dysku albo ktoś zdobędzie kopię pliku w trakcie przesyłania. Używaj mocnych, unikalnych haseł; przekazuj je innym kanałem niż sam plik.",
    },
    {
      title: "Udostępnianie: dobierz kanał do stopnia wrażliwości",
      body: "Zwykły e-mail wystarczy dla plików o niskiej wrażliwości. Komunikatory z szyfrowaniem end-to-end (Signal, bezpieczna poczta) dla średniej. Dla wysokiej wrażliwości – płatne usługi z jasnymi zobowiązaniami dotyczącymi przetwarzania danych. Unikaj przesyłania wrażliwych PDF-ów do darmowych „narzędzi” firm trzecich.",
    },
    {
      title: "Przetwórz lokalnie przed wysłaniem",
      body: "Jeśli musisz skompresować, ocenzurować albo zmienić układ wrażliwego PDF-a przed wysłaniem, użyj narzędzi w przeglądarce, które przetwarzają plik lokalnie – Twój plik nie przechodzi przez żaden cudzy serwer. Kompresuj PDF, Wyodrębnij strony PDF, Zmień kolejność stron PDF – wszystkie działają na Twoim urządzeniu.",
    },
    {
      title: "Cykl życia: pomyśl o przechowywaniu i usuwaniu",
      body: "Wrażliwe PDF-y przechowuj tylko tak długo, jak naprawdę musisz. Odbiorca też powinien. Rozważ poproszenie odbiorcy o potwierdzenie usunięcia pliku po skorzystaniu z niego, zwłaszcza przy dokumentach tożsamości do jednorazowego użytku.",
    },
    {
      title: "Usuń metadane przed wysłaniem",
      body: "PDF-y często niosą ze sobą nazwiska autorów, oryginalne nazwy plików, historię edycji. Ponowny eksport z czystego źródła usuwa większość z tego. Aplikacja PDF Editor i inne narzędzia pozwalają też wyraźnie wyczyścić metadane.",
    },
  ],
  tips: [
    "Nie wysyłaj hasła w tej samej wiadomości co zabezpieczony nim plik. Wyślij plik jednym kanałem, hasło innym.",
    "Traktuj skany dokumentów tożsamości jako jednorazowego użytku. Gdy odbiorca je otrzyma, poproś o usunięcie, chyba że ma prawny obowiązek ich przechowywania.",
    "Nie używaj tego samego hasła do różnych wrażliwych PDF-ów. Jeśli jedno wycieknie, pozostałe zostają chronione.",
    "Unikaj publicznego Wi-Fi przy wysyłaniu wrażliwych plików. Użyj hotspotu albo poczekaj na zaufaną sieć.",
    "Raz w roku przejrzyj swoje wrażliwe pliki PDF. Większość z nich nie jest już potrzebna – bezpiecznie je usuń i zmniejsz obszar narażony na ryzyko.",
  ],
  mobileNote:
    "Telefony przechowują i wysyłają dziś wiele wrażliwych PDF-ów (podpisane umowy, skany dokumentów tożsamości). Aplikacja PDF Editor przetwarza je lokalnie na urządzeniu – kompresja, podpisywanie, ochrona hasłem – więc wrażliwy materiał nie musi opuszczać telefonu, żeby zostać przygotowanym do wysyłki.",
  faq: [
    {
      q: "Czy ochrona hasłem PDF-a jest naprawdę silna?",
      a: "Nowoczesne szyfrowanie AES w PDF-ach jest silne. Słabym punktem zwykle jest samo hasło – słabe hasło to jedyna łatwa droga wejścia. Używaj długich, unikalnych haseł.",
    },
    {
      q: "Czy zawsze powinienem szyfrować wrażliwe PDF-y?",
      a: "Tak, zarówno w spoczynku, jak i podczas przesyłania. Szyfrowanie dysku chroni w spoczynku; hasła PDF albo zaszyfrowane kanały chronią podczas przesyłania.",
    },
    {
      q: "A co z przechowywaniem wrażliwych PDF-ów w chmurze?",
      a: "Do przyjęcia z szyfrowaniem zero-knowledge (dostawca nie może odczytać Twoich plików) albo z szyfrowaniem po stronie klienta (szyfrujesz przed przesłaniem). Zwykła chmura bez szyfrowania jest w porządku dla zwykłych plików, nie dla tych bardzo wrażliwych.",
    },
    {
      q: "Jak ocenzurować wrażliwe fragmenty PDF-a?",
      a: "Prawdziwa cenzura polega na przekonwertowaniu tekstu na obraz i zastąpieniu go nim. Aplikacja PDF Editor to obsługuje. Same czarne prostokąty nałożone na tekst nie cenzurują niczego – tekst pod spodem wciąż da się wyodrębnić.",
    },
    {
      q: "Czy mogę bezpiecznie usunąć PDF?",
      a: "Na dyskach SSD bezpieczne usuwanie jest mniej oczywiste niż na dyskach talerzowych. Przenieś plik na zaszyfrowany dysk, potem usuń i pozwól, żeby funkcja TRIM dysku wyczyściła sektory. Przy bardzo wysokiej wrażliwości właściwym podejściem jest pełne szyfrowanie dysku od samego początku.",
    },
  ],
  related: [
    { label: "Bezpieczeństwo PDF — zabezpiecz pliki hasłem", path: "/pdf-security" },
    { label: "Jak zabezpieczyć plik PDF hasłem", path: "/guides/how-to-protect-pdf-file" },
    { label: "Jak udostępniać pliki PDF prywatnie", path: "/guides/how-to-share-pdf-files-privately" },
    { label: "Jak unikać przesyłania wrażliwych dokumentów", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
  ],
  parentHub: { label: "Bezpieczeństwo PDF — zabezpiecz hasłem i zaszyfruj", path: "/pdf-security" },
};

export default content;
