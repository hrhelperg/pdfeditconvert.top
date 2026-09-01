import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-jpg",
  h1: "PDF czy JPG — kiedy używać którego formatu",
  description:
    "PDF czy JPG: kiedy skanować, kiedy fotografować. Porównanie jakości, rozmiaru pliku, OCR i dopasowania do pracy z dokumentami.",
  intro: [
    "JPG to format do zdjęć. PDF to format do dokumentów. Mimo tego prostego podziału ludzie regularnie wysyłają umowy w JPG i pojedyncze obrazy w PDF — oba wybory działają, ale nie są idealne.",
    "To niewłaściwe użycie bierze się stąd, że telefony domyślnie zapisują wszystko jako JPG — od zdjęć rodzinnych po zeskanowane paragony — a laptopy domyślnie tworzą PDF dla każdego dokumentu do druku. Bez zastanowienia ludzie kończą z paragonami w formacie JPG w galerii i plikami PDF pełnymi obrazów zaśmiecającymi folder Pobrane.",
    "To porównanie pomaga wybrać właściwy format dla dokumentów, które naprawdę wysyłasz: paragonów, dokumentów tożsamości, umów, zrzutów ekranu, zdjęć produktów oraz przypadków pośrednich, w których właściwa odpowiedź nie jest oczywista.",
  ],
  leftLabel: "PDF",
  rightLabel: "JPG",
  rows: [
    { feature: "Obsługa wielu stron", left: "tak", right: "nie" },
    { feature: "Przeszukiwalny tekst (z OCR)", left: "tak", right: "nie" },
    { feature: "Ostrość przy każdym powiększeniu", left: "tak", right: "nie" },
    { feature: "Mały rozmiar pliku dla zdjęć", left: "Ograniczone", right: "tak" },
    { feature: "Wyświetlane wszędzie", left: "tak", right: "tak" },
    { feature: "Ochrona hasłem", left: "tak", right: "nie" },
    { feature: "Możliwość edycji później", left: "tak", right: "Ograniczone" },
    { feature: "Najlepsze dla paragonów i umów", left: "tak", right: "nie" },
    { feature: "Najlepsze dla zdjęć produktowych", left: "nie", right: "tak" },
  ],
  whenLeft: [
    "Treść to dokument (paragon, umowa, dokument tożsamości, formularz)",
    "Wynik może wymagać wielu stron",
    "Chcesz przeszukiwalny tekst (OCR)",
    "Odbiorcą jest księgowa lub księgowy albo system biznesowy",
    "Możesz później potrzebować dodać podpis",
  ],
  whenRight: [
    "Treść to fotografia",
    "Rozmiar pliku liczy się bardziej niż wierność odwzorowania",
    "Pojedynczy obraz, bez potrzeby wielu stron",
    "Udostępnianie w aplikacjach do wiadomości, które preferują obrazy",
    "Publikowanie w mediach społecznościowych",
  ],
  faq: [
    {
      q: "Czy mogę przekonwertować JPG na PDF?",
      a: "Tak. PDF Editor (i większość narzędzi PDF) zamyka pliki JPG w plikach PDF, zachowując jakość obrazu.",
    },
    {
      q: "Czy OCR zadziała na zdjęciu dokumentu w JPG?",
      a: "Lepiej najpierw przekonwertować na PDF, a potem uruchomić OCR — wynikiem jest przeszukiwalny tekst wewnątrz prawdziwego formatu dokumentu.",
    },
    {
      q: "Dlaczego księgowi wolą pliki PDF?",
      a: "Ich narzędzia księgowe indeksują pliki PDF, a ignorują pliki JPG. Paragony w PDF są kategoryzowane automatycznie; pliki JPG po prostu leżą w folderze.",
    },
  ],
  related: [
    { label: "Konwerter PDF", path: "/pdf-converter" },
    { label: "Skanowanie do PDF", path: "/scan-to-pdf" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
};

export default content;
