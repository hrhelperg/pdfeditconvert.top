import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-protect-pdf-file",
  h1: "Jak zabezpieczyć plik PDF hasłem",
  description:
    "Dodaj ochronę hasłem i szyfrowanie do pliku PDF na telefonie lub komputerze. Praktyczny poradnik z aplikacją PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Wiele dokumentów nie powinno wędrować jako zwykłe, niezabezpieczone pliki PDF: paski wypłat, podpisane umowy, skany dowodów tożsamości, kopie NDA, dokumentacja medyczna, wyciągi finansowe. Hasło i właściwe szyfrowanie zamieniają plik w coś, co otworzyć może wyłącznie zamierzony odbiorca — nawet jeśli mail zostanie przekazany dalej, przechwycony albo utknie na zawsze w firmowej skrzynce.",
    "Ten poradnik pokazuje, jak dodać ochronę hasłem do PDF-a za pomocą aplikacji PDF Editor na iPhonie lub Androidzie. Omawia też, czego unikać: słabych haseł, przestarzałych szyfrów oraz typowego błędu, jakim jest przekazanie hasła tym samym kanałem co dokument.",
    "Na koniec będziesz mieć powtarzalny sposób zabezpieczania, który zastosujesz do wrażliwych dokumentów w mniej niż minutę, z silnym szyfrowaniem AES-256 akceptowanym przez firmowe polityki bezpieczeństwa.",
  ],
  steps: [
    {
      title: "Otwórz PDF, który chcesz zabezpieczyć",
      body: "Dodaj dokument do PDF Editor z Plików, iCloud Drive, Google Drive albo dowolnej aplikacji do udostępniania. Cały proces odbywa się lokalnie — Twój plik nie opuszcza urządzenia.",
    },
    {
      title: "Dotknij Zabezpiecz w menu narzędzi",
      body: "Znajdziesz je wśród narzędzi dokumentu. Wybierz „Zabezpiecz hasłem”, żeby otwarcie pliku wymagało hasła, albo „Ogranicz uprawnienia” dla dostępu tylko do odczytu.",
    },
    {
      title: "Wybierz silne hasło",
      body: "Co najmniej 12 znaków, mieszanka liter, cyfr i symboli. Unikaj popularnych słów i danych osobowych (dat urodzenia, imion). Jeśli masz menedżer haseł, wygeneruj hasło w nim — to właściwy krok.",
    },
    {
      title: "Potwierdź hasło",
      body: "Wpisz je ponownie, żeby uniknąć literówek. Gdy plik jest już zaszyfrowany, nie ma odzyskiwania, jeśli się pomyliłeś.",
    },
    {
      title: "Wybierz ograniczenia (opcjonalnie)",
      body: "Zezwól na przeglądanie, ale zablokuj drukowanie, kopiowanie tekstu albo wyodrębnianie stron. Przydatne, gdy odbiorca musi przeczytać dokument, ale nie chcesz, żeby rozpowszechniał jego fragmenty.",
    },
    {
      title: "Zapisz jako nowy plik",
      body: "Zachowaj oryginalną, niezabezpieczoną wersję w bezpiecznym miejscu — jeśli kiedyś zapomnisz hasła, wciąż będziesz mieć dostęp. Zapisz zabezpieczoną kopię pod wyraźnie inną nazwą.",
    },
    {
      title: "Przekaż hasło osobnym kanałem",
      body: "Zaszyfrowany PDF wyślij mailem; hasło przekaż SMS-em lub telefonicznie. Nigdy nie umieszczaj obu w tym samym mailu — jeśli konto pocztowe zostanie przejęte, wycieknie i jedno, i drugie. Ten drobny nawyk zapobiega większości realnych incydentów.",
    },
  ],
  tips: [
    "AES-256 to właściwe szyfrowanie — aplikacja używa go domyślnie. Jeśli narzędzie oferuje szyfrowanie „kompatybilne” albo „starszego typu”, zwykle jest ono złamane — unikaj go.",
    "Nie używaj tego samego hasła w wielu dokumentach. Jeśli jedno wycieknie, nie chcesz efektu domina.",
    "Jeśli odbiorca nie jest osobą techniczną, daj mu proste instrukcje: wystarczy „Do otwarcia pliku będziesz potrzebować tego hasła: XYZ”.",
    "Kiedy to możliwe, przekazuj hasła bezpiecznie przez menedżer haseł — większość ma funkcję „udostępnij”, która nie wymaga kont po obu stronach.",
    "Przy bardzo wrażliwych plikach (prawnych, medycznych, finansowych) rozważ bezpieczne linki udostępniania z 1Password lub Bitwarden zamiast wysyłania hasła SMS-em.",
  ],
  mobileNote:
    "Zabezpieczanie PDF-a odbywa się w całości na urządzeniu. Nawet w trybie samolotowym możesz zablokować umowę hasłem, zanim wyślesz ją, gdy tylko odzyskasz połączenie. Ma to znaczenie dla podróżujących zajmujących się wrażliwymi dokumentami w hotelowym lobby czy na lotnisku — zabezpieczenie dzieje się lokalnie, a połączenie potrzebne jest dopiero do samej wysyłki.",
  faq: [
    {
      q: "Co jeśli zapomnę hasła?",
      a: "Nie ma żadnej furtki. Silne szyfrowanie oznacza, że bez hasła odzyskanie dostępu jest niemożliwe. Zawsze przechowuj hasła w menedżerze haseł, a nie w pamięci.",
    },
    {
      q: "Czy hasło spowolni otwieranie pliku?",
      a: "Bez zauważalnego opóźnienia. Odszyfrowanie następuje raz przy otwarciu i trwa milisekundy nawet na starszych urządzeniach.",
    },
    {
      q: "Czy mogę później usunąć hasło?",
      a: "Tak, jeśli znasz hasło. Otwórz zabezpieczony PDF, podaj hasło, a potem użyj „Usuń zabezpieczenie” w menu Zabezpiecz.",
    },
    {
      q: "Czy hasło naprawdę zabezpiecza, czy to tylko pozory bezpieczeństwa?",
      a: "To prawdziwe bezpieczeństwo. AES-256 z silnym hasłem to to samo szyfrowanie, którego używają systemy firmowe, menedżery haseł i wiele aplikacji bankowych. Najsłabszym ogniwem zawsze jest samo hasło — wybierz mocne.",
    },
    {
      q: "A co z redakcją (zaczernianiem danych)?",
      a: "Redakcja to co innego niż zabezpieczenie hasłem. Redakcja trwale usuwa treść (np. zaczernia imię i nazwisko); zabezpieczenie hasłem zachowuje treść, ale wymaga uwierzytelnienia do jej wyświetlenia. Przy wrażliwych dokumentach warto połączyć oba — zaczernić to, czego nie powinno być w pliku, i zabezpieczyć hasłem to, co zostało.",
    },
  ],
  related: [
    { label: "Bezpieczeństwo PDF — pełny przegląd", path: "/pdf-security" },
    { label: "Podpisz PDF-y, zanim je zablokujesz", path: "/sign-pdf" },
    { label: "Sposoby pracy z PDF w firmie", path: "/pdf-for-business" },
  ],
  parentHub: { label: "PDF Security", path: "/pdf-security" },
};

export default content;
