import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-security",
  hero: {
    eyebrow: "Bezpieczeństwo PDF",
    h1: "Chroń wrażliwe pliki PDF we właściwy sposób.",
    highlight: "we właściwy sposób",
    lead: "Hasła, szyfrowanie AES-256, redakcja i ograniczenia użycia — na umowach, listach płac i skanach dokumentów tożsamości. Ochrona, na jaką wrażliwe dokumenty naprawdę zasługują.",
    primaryCta: { label: "Otwórz aplikację", href: SITE.app.appStore },
  },
  problem: {
    heading: "Dlaczego większość „chronionych\" plików PDF wcale taka nie jest",
    paragraphs: [
      "Zaskakująco często ludzie udostępniają skany paszportów, podpisane umowy i odcinki wypłat jako zwykłe pliki PDF — mailem, w aplikacjach do wiadomości albo jako załączniki do formularzy. Jeśli konto e-mail albo historia wiadomości zostanie przejęta, każdy z tych dokumentów zostaje ujawniony.",
      "Część użytkowników dodaje „ochronę\", która jest po prostu hasłem otwierającym ustawionym za pomocą darmowego narzędzia online. To lepsze niż nic, ale hasło jest często słabe, szyfrowanie bywa przestarzałym 40-bitowym szyfrem, a narzędzie przechowuje Twój plik na tyle długo, by samo stać się zagrożeniem.",
      "Prawdziwe bezpieczeństwo PDF to silne szyfrowanie (AES-256), silne hasła i — gdy trzeba — oddzielenie uprawnień do edycji i druku od samego otwierania pliku. Powinno się to odbywać na urządzeniu, bo w chwili, gdy przesyłasz wrażliwy dokument do narzędzia webowego, bitwę o prywatność masz już przegraną.",
    ],
  },
  features: {
    heading: "Narzędzia bezpieczeństwa dopasowane do realnego zagrożenia",
    items: [
      {
        icon: "Lock",
        title: "Ochrona hasłem",
        body: "Ustaw hasło potrzebne do otwarcia dokumentu. Bez niego nie da się wyświetlić pliku PDF.",
      },
      {
        icon: "ShieldCheck",
        title: "Szyfrowanie AES-256",
        body: "Silne, nowoczesne szyfrowanie — standard stosowany w systemach klasy enterprise.",
      },
      {
        icon: "Printer",
        title: "Ogranicz kopiowanie i drukowanie",
        body: "Zezwól na przeglądanie, ale zablokuj kopiowanie tekstu, drukowanie lub wyodrębnianie stron.",
      },
      {
        icon: "EyeOff",
        title: "Redakcja",
        body: "Trwale zaczerń imiona i nazwiska, numery kont lub podpisy przed udostępnieniem.",
      },
      {
        icon: "Stamp",
        title: "Znaki wodne",
        body: "Dodaj znak wodny „poufne\" albo dedykowany dla konkretnego odbiorcy, żeby zniechęcić do przesyłania dalej.",
      },
      {
        icon: "Link",
        title: "Wskazówki dotyczące udostępniania haseł",
        body: "Wbudowane wskazówki, jak udostępniać hasła innym kanałem niż sam dokument.",
      },
    ],
  },
  steps: {
    heading: "Jak chronić plik PDF",
    items: [
      {
        title: "Otwórz plik PDF",
        body: "Zaimportuj dokument do PDF Editor z Plików albo dowolnej chmury.",
      },
      {
        title: "Dotknij Chroń",
        body: "Znajdziesz to w menu narzędzi dokumentu. Wybierz poziom ochrony, jakiego potrzebujesz.",
      },
      {
        title: "Ustaw hasło",
        body: "Użyj silnego hasła — co najmniej 12 znaków, mieszanka liter, cyfr i symboli.",
      },
      {
        title: "(Opcjonalnie) Wybierz ograniczenia",
        body: "Zezwól na drukowanie, kopiowanie i edycję albo je zablokuj. Przydatne dla dokumentów udostępnianych tylko do odczytu.",
      },
      {
        title: "Zapisz chronioną kopię",
        body: "Zapisz jako nowy plik, aby oryginał pozostał dostępny, gdybyś zapomniał hasła.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Ochrona wrażliwych dokumentów w ruchu",
    body: "Większość błędów związanych z bezpieczeństwem zdarza się, gdy się spieszysz. Ochrona z poziomu telefonu oznacza, że możesz zabezpieczyć umowę przed wysłaniem jej z lotniska albo zabezpieczyć plik PDF z listą płac przed udostępnieniem go zleceniobiorcy — bez szukania komputera.",
  },
  faq: [
    {
      q: "Jakiego szyfrowania używa aplikacja?",
      a: "AES-256, nowoczesny standard. Unikaj starszego szyfrowania 40-bitowego i 128-bitowego RC4 — można je złamać bez trudu.",
    },
    {
      q: "Co jeśli zapomnę hasła?",
      a: "Nie ma żadnej furtki. Silne szyfrowanie oznacza, że bez hasła dokumentu nie da się odzyskać. Przechowuj hasło w menedżerze haseł.",
    },
    {
      q: "Jak bezpiecznie udostępnić hasło?",
      a: "Użyj innego kanału niż sam dokument — wyślij hasło SMS-em, jeśli plik PDF poszedł mailem, albo skorzystaj z funkcji bezpiecznego udostępniania w menedżerze haseł.",
    },
    {
      q: "Czy redakcja jest trwała?",
      a: "Tak. Właściwa redakcja usuwa tekst leżący pod spodem, a nie tylko zakrywa go wizualnie. Nawet skopiowanie i wklejenie tekstu z zredagowanego pliku PDF nie ujawni oryginału.",
    },
    {
      q: "Czy mogę dodać znak wodny i hasło jednocześnie?",
      a: "Tak. Są od siebie niezależne i można je zastosować razem.",
    },
  ],
  related: [
    {
      label: "Krok po kroku: jak zabezpieczyć plik PDF hasłem",
      path: "/guides/how-to-protect-pdf-file",
    },
    { label: "Podpisz pliki PDF, zanim je zablokujesz", path: "/sign-pdf" },
    {
      label: "Sposoby pracy z PDF dla zespołów biznesowych",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Zabezpiecz wrażliwe pliki PDF w kilka sekund.",
    sub: "Bezpłatnie na iOS i Androidzie. Ochrona działa na urządzeniu.",
  },
};

export default content;
