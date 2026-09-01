import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-working",
  h1: "Formulir PDF Tidak Berfungsi? Triase dan Solusinya",
  description:
    "Formulir PDF yang bermasalah biasanya punya beberapa penyebab umum. Triase cepat untuk mengenali mana yang Anda alami, kolom hilang, tidak bisa diketik, tidak bisa disimpan, atau hanya-baca, dan di mana perbaikannya.",
  updated: "2026-06-01",
  intro: [
    "“Formulir PDF saya tidak berfungsi” mencakup banyak masalah yang berbeda, dan solusinya sepenuhnya bergantung pada masalah mana yang sebenarnya Anda alami. Formulirnya tidak bisa diketik, kolomnya menghilang, jawaban Anda tidak mau tersimpan, terbuka dalam keadaan hanya-baca, atau sekadar berperilaku aneh. Masing-masing punya penyebab spesifik dan solusi spesifik, triknya adalah menamai gejalanya lebih dulu.",
    "Halaman ini adalah sebuah triase. Daripada satu solusi raksasa untuk semuanya, halaman ini membantu Anda mengenali masalah mana yang sedang Anda hadapi dalam beberapa detik, lalu mengarahkan Anda ke panduan yang menanganinya. Sebagian besar masalah formulir sama sekali bukan cacat pada filenya; itu adalah ketidakcocokan antara formulir dan aplikasi pembaca tempat Anda membukanya, atau pengaturan yang memang disengaja seperti perlindungan hanya-baca.",
    "Telusuri pemeriksaan cepat di bawah ini. Semuanya akan memberi tahu Anda apakah Anda menghadapi formulir non-interaktif, masalah aplikasi pembaca, masalah penyimpanan, pengaturan keamanan, atau masalah kompatibilitas, dan ke mana harus melangkah selanjutnya.",
  ],
  steps: [
    {
      title: "Bisakah Anda melihat kolomnya sama sekali?",
      body: "Jika kolom formulir hilang atau halamannya terlihat tidak lengkap, itu masalah kolom yang hilang, biasanya aplikasi pembaca yang tidak menampilkan lapisan kolomnya. Lihat panduan kolom hilang untuk solusinya.",
    },
    {
      title: "Kolomnya ada tapi Anda tidak bisa mengetik?",
      body: "Jika Anda mengetuk sebuah kolom dan tidak terjadi apa-apa, formulirnya mungkin non-interaktif, dibuka di aplikasi pembaca yang salah, atau hanya-baca. Panduan “tidak bisa mengetik” membahas cara membedakan ketiganya.",
    },
    {
      title: "Jawaban hilang setelah disimpan?",
      body: "Jika Anda mengisi formulirnya, menyimpan, membuka lagi, dan kembali kosong, berarti nilai kolomnya tidak tertulis ke file. Panduan “tidak mau tersimpan” membahas cara menyimpan data formulir secara andal.",
    },
    {
      title: "Formulir terbuka dalam keadaan hanya-baca atau terkunci?",
      body: "Jika semuanya berwarna abu-abu atau Anda melihat keterangan yang dilindungi, formulirnya diamankan dari pengeditan. Panduan hanya-baca menjelaskan opsi yang Anda punya tanpa mengakali keamanan yang tidak seharusnya Anda akali.",
    },
    {
      title: "Berfungsi di satu aplikasi tapi tidak di aplikasi lain?",
      body: "Jika formulirnya berperilaku baik di satu program tapi rusak di program lain, itu masalah kompatibilitas, kemungkinan jenis formulir tingkat lanjut. Lihat panduan kompatibilitas, atau coba daftar periksa perbaikan gabungan.",
    },
  ],
  tips: [
    "Namai gejalanya dulu sebelum mencoba solusi, solusi yang tepat sepenuhnya bergantung pada masalah mana yang Anda alami.",
    "Uji tercepat untuk banyak masalah: buka file yang sama di aplikasi PDF khusus. Ini langsung memisahkan “formulir rusak” dari “aplikasi pembaca yang bermasalah”.",
    "Formulir yang tidak mau bekerja jarang benar-benar rusak; sebagian besar penyebabnya adalah ketidakcocokan aplikasi pembaca atau pengaturan yang memang disengaja.",
    "Jika Anda hanya perlu menyelesaikannya, menempatkan teks di atas halaman berfungsi pada hampir semua formulir apa pun masalah yang mendasarinya.",
    "Tampilan dan perilaku formulir bisa berbeda antar aplikasi pembaca PDF, jadi “tidak berfungsi di sini” jarang berarti “rusak di mana-mana”.",
  ],
  mobileNote:
    "Banyak laporan “formulir tidak berfungsi” sebenarnya hanya pratinjau email atau aplikasi pembaca dasar yang mengabaikan kolomnya. Membuka filenya di aplikasi PDF Editor mengaktifkan kolom interaktif jika ada, dan membiarkan Anda menempatkan teks pada formulir non-interaktif atau yang terkunci jika tidak ada, di perangkat, tanpa apa pun yang diunggah.",
  faq: [
    {
      q: "Kenapa formulir PDF saya tidak berfungsi?",
      a: "Hampir selalu salah satu dari beberapa hal ini: formulirnya non-interaktif tanpa kolom, aplikasi pembaca Anda tidak menampilkan kolomnya, jawabannya tidak tersimpan, formulirnya hanya-baca, atau memakai fitur yang tidak didukung aplikasi Anda. Kenali gejalanya, lalu terapkan solusi yang sesuai.",
    },
    {
      q: "Apa hal tercepat yang bisa dicoba pertama kali?",
      a: "Buka file yang sama di aplikasi PDF khusus, bukan di pratinjau email atau browser. Langkah tunggal ini menyelesaikan sebagian besar masalah “formulir tidak berfungsi”, yang sebenarnya adalah ketidakcocokan aplikasi pembaca.",
    },
    {
      q: "Bagaimana saya tahu apakah formulirnya rusak atau hanya masalah aplikasi saya?",
      a: "Coba di aplikasi PDF lain yang mumpuni. Jika berfungsi di sana, berarti aplikasi pembaca Anda sebelumnya yang bermasalah. Jika gagal di mana-mana, mungkin itu jenis formulir tingkat lanjut atau file yang benar-benar rusak.",
    },
    {
      q: "Saya hanya perlu mengisinya, apa solusi universalnya?",
      a: "Tempatkan teks dan tanda centang Anda sendiri di atas halaman memakai editor PDF. Ini berfungsi pada formulir non-interaktif, terkunci, maupun yang tanpa kolom, apa pun penyebab yang mendasarinya.",
    },
    {
      q: "Ke mana saya harus pergi untuk masalah spesifik saya?",
      a: "Gunakan pemeriksaan di atas untuk mencocokkan gejala Anda, kolom hilang, tidak bisa mengetik, tidak mau tersimpan, hanya-baca, atau kompatibilitas, lalu ikuti panduan yang tertaut untuk masalah itu, atau daftar periksa perbaikan gabungan.",
    },
  ],
  related: [
    { label: "Kolom formulir PDF hilang", path: "/guides/pdf-form-fields-missing" },
    { label: "Mengapa saya tidak bisa mengetik di formulir PDF?", path: "/guides/why-cant-i-type-in-a-pdf-form" },
    { label: "Mengapa formulir PDF tidak mau tersimpan", path: "/guides/why-pdf-form-wont-save" },
    { label: "Masalah kompatibilitas formulir PDF", path: "/guides/pdf-form-compatibility-problems" },
    { label: "Perbaiki error formulir PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formulir PDF", path: "/pdf-forms" },
};

export default content;
