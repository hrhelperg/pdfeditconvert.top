import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-iphone",
  h1: "Cara Mengisi Formulir PDF di iPhone (Files, Markup, dan Aplikasi)",
  description:
    "Isi formulir PDF interaktif dan non-interaktif di iPhone, memakai Files dan Markup, atau aplikasi PDF khusus. Langkah-langkah spesifik iOS, jalur menu bagikan, dan di mana Markup kurang memadai.",
  updated: "2026-06-01",
  intro: [
    "iPhone sebenarnya cukup andal untuk formulir PDF begitu Anda tahu dua jalur di iOS. Jalur bawaan memakai aplikasi Files dan Markup, yang bisa mengisi formulir non-interaktif dan menambahkan tanda tangan kalau mendesak. Jalur yang lebih mumpuni adalah aplikasi PDF khusus yang mendeteksi kolom interaktif, mengetik ke dalamnya dengan benar, dan mengekspor salinan yang sudah selesai dengan bersih, lebih unggul begitu formulirnya lebih dari sekadar beberapa baris.",
    "Detail khas iOS inilah yang sering bikin orang keliru: formulir yang dibuka dari pratinjau Mail sering kali tidak menampilkan kolomnya, menu bagikan adalah cara Anda memindahkan formulir antar aplikasi, dan Markup memperlakukan semuanya sebagai halaman non-interaktif meski ada kolom asli. Mengetahui keanehan-keanehan ini membuat pengisian formulir di iPhone jadi pekerjaan 30 detik.",
    "Panduan ini membahas kedua jalur itu, pendekatan Files-dan-Markup bawaan beserta batasannya yang sebenarnya, dan aplikasi PDF Editor untuk formulir interaktif, sehingga Anda bisa memilih yang tepat untuk formulir yang sedang Anda hadapi.",
  ],
  steps: [
    {
      title: "Keluarkan formulirnya dari pratinjau Mail",
      body: "Jika formulir tiba lewat email, ketuk untuk menyimpannya ke Files dulu, atau buka lewat menu bagikan di aplikasi PDF yang sesungguhnya. Pratinjau cepat Mail sering mengabaikan kolom formulir, itu sebabnya mengetik terasa mustahil di sana.",
    },
    {
      title: "Coba Files dan Markup untuk formulir non-interaktif",
      body: "Buka PDF-nya di Files dan ketuk pena Markup. Anda bisa menambahkan kotak teks dan tanda tangan di mana pun di halaman, cukup baik untuk formulir non-interaktif dan pengisian cepat, meski Markup tidak bisa mengetuk kolom interaktif yang asli.",
    },
    {
      title: "Gunakan aplikasi PDF untuk kolom interaktif",
      body: "Untuk formulir dengan kolom asli, buka filenya di aplikasi PDF Editor. Aplikasi ini mendeteksi kolomnya sehingga Anda bisa ketuk lalu ketik, mencentang kotak centang, dan berpindah antar kolom dengan rapi.",
    },
    {
      title: "Tangani formulir non-interaktif dengan menempatkan teks",
      body: "Saat formulir tidak punya kolom, gunakan alat teks aplikasinya untuk meletakkan jawaban tepat pada setiap baris. Cubit layar untuk memperbesar agar teksnya jatuh persis, bukan melayang di atas garisnya.",
    },
    {
      title: "Tanda tangani dan ekspor lewat menu bagikan",
      body: "Tambahkan tanda tangan Anda di area tanda tangan, lalu ekspor salinan yang sudah selesai dan kirim langsung lewat menu bagikan, ke Mail, Messages, atau kembali ke pengirimnya.",
    },
  ],
  tips: [
    "Jika Anda tidak bisa mengetik di formulir di iPhone, Anda hampir selalu sedang berada di pratinjau Mail, simpan ke Files atau buka di aplikasi PDF dulu.",
    "Markup bagus untuk tanda tangan cepat atau formulir non-interaktif, tapi tidak bisa mengisi kolom interaktif asli seperti aplikasi khusus.",
    "Perbesar tampilan sebelum menempatkan teks pada formulir non-interaktif; jempol kurang presisi, dan teks yang diperbesar akan jatuh tepat di garisnya.",
    "Simpan file kosong aslinya di Files agar Anda bisa mengisi salinan baru lain kali, bukan mengedit yang lama.",
    "iOS menangani HEIC dan PDF dengan baik, tapi perilaku formulir tetap bervariasi antar aplikasi, aplikasi PDF khusus adalah yang paling konsisten.",
  ],
  mobileNote:
    "Aplikasi PDF Editor untuk iPhone mendeteksi kolom interaktif jika ada, dan membiarkan Anda menempatkan teks serta tanda centang pada formulir non-interaktif jika tidak ada, lalu menandatangani dan mengekspor, semuanya di perangkat, jadi detail pribadi pada formulirnya tidak diunggah. Ini adalah jalur yang menghindari jalan buntu pratinjau Mail.",
  faq: [
    {
      q: "Kenapa saya tidak bisa mengetik di formulir PDF di iPhone saya?",
      a: "Kemungkinan besar Anda sedang melihatnya di pratinjau Mail, yang mengabaikan kolom formulir. Simpan filenya ke Files atau buka di aplikasi PDF khusus, dan kolomnya akan menjadi aktif. Formulir non-interaktif justru butuh teks yang ditempatkan di atasnya.",
    },
    {
      q: "Bisakah saya mengisi formulir PDF dengan alat Markup bawaan?",
      a: "Bisa, untuk formulir non-interaktif dan pengisian cepat, Markup menambahkan teks dan tanda tangan di mana pun di halaman. Tapi Markup memperlakukan formulirnya sebagai gambar non-interaktif, jadi tidak bisa mengetuk kolom interaktif asli. Gunakan aplikasi PDF untuk itu.",
    },
    {
      q: "Bagaimana cara mengisi formulir hasil pindaian di iPhone?",
      a: "Formulir hasil pindaian bersifat non-interaktif, jadi tempatkan teks dan tanda centang Anda sendiri di halaman memakai Markup atau aplikasi PDF Editor, lalu ekspor. Tidak ada kolom untuk diketik.",
    },
    {
      q: "Apakah mengisi formulir di iPhone bersifat privat?",
      a: "Dengan aplikasi PDF Editor, formulirnya diisi di perangkat, jadi detail yang Anda masukkan tidak dikirim ke mana pun. Markup juga bekerja secara lokal. Alat pengisian berbasis web mungkin mengunggah filenya ke server.",
    },
    {
      q: "Bagaimana cara mengirim kembali formulir yang sudah selesai?",
      a: "Ekspor salinan yang sudah selesai dan gunakan menu bagikan iOS untuk mengirimnya lewat Mail, Messages, atau aplikasi apa pun. Kunci dulu formulirnya jika Anda ingin jawabannya terkunci.",
    },
  ],
  related: [
    { label: "Cara mengisi formulir PDF", path: "/guides/how-to-fill-out-a-pdf-form" },
    { label: "Cara mengisi formulir PDF di Android", path: "/guides/how-to-fill-pdf-forms-on-android" },
    { label: "Cara tanda tangan PDF di iPhone", path: "/guides/how-to-sign-pdf-on-iphone" },
    { label: "Aplikasi formulir PDF terbaik untuk iPhone", path: "/guides/best-pdf-form-app-for-iphone" },
    { label: "Alur kerja formulir PDF di HP", path: "/guides/mobile-pdf-form-workflow" },
  ],
  parentHub: { label: "Formulir PDF", path: "/pdf-forms" },
};

export default content;
