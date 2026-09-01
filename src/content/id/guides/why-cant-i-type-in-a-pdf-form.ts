import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-cant-i-type-in-a-pdf-form",
  h1: "Mengapa Saya Tidak Bisa Mengetik di Formulir PDF? Penyebab dan Solusinya",
  description:
    "Anda mengklik sebuah kolom dan tidak terjadi apa-apa. Tiga alasan yang biasa terjadi, formulir non-interaktif, aplikasi pembaca yang salah, atau file yang terkunci, dan apa yang perlu dilakukan untuk masing-masing.",
  updated: "2026-06-01",
  intro: [
    "Anda membuka formulir, klik di tempat nama Anda seharusnya diisi, dan… tidak terjadi apa-apa. Tidak ada kursor, tidak ada kotak, tidak ada cara untuk mengetik. Rasanya seperti formulirnya rusak, padahal hampir tidak pernah begitu. Ketidakmampuan mengetik ini bergantung pada salah satu dari tiga penyebab spesifik, masing-masing dengan solusi yang jelas begitu Anda bisa menamainya.",
    "Penyebab pertama dan paling umum adalah formulirnya non-interaktif, tidak ada kolom interaktif untuk diketik, hanya gambar sebuah formulir. Kedua, Anda membukanya di aplikasi pembaca yang tidak bisa menangani kolom formulir dengan baik. Ketiga, formulirnya terkunci atau hanya-baca, sengaja mencegah input. Membedakan ketiganya hanya butuh beberapa pemeriksaan cepat.",
    "Panduan ini membahas ketiga penyebab itu secara berurutan, menunjukkan cara memastikan mana yang sedang Anda alami, dan memberikan solusi praktis untuk masing-masing agar jawaban Anda bisa masuk ke halaman.",
  ],
  steps: [
    {
      title: "Pastikan apakah formulirnya punya kolom sama sekali",
      body: "Ketuk beberapa bagian kosong yang berbeda. Jika tidak satu pun menghasilkan kursor atau sorotan di mana pun pada halaman, formulirnya hampir pasti non-interaktif, tidak ada kolom untuk diketik, entah memang dirancang begitu atau karena hasil pindaian.",
    },
    {
      title: "Jika non-interaktif, tambahkan teks di atasnya",
      body: "Formulir non-interaktif tidak bisa diketik langsung, tapi Anda bisa menempatkan teks dan tanda centang Anda sendiri di atas halaman memakai alat teks pada editor PDF. Itulah cara yang memang dimaksudkan untuk menyelesaikan formulir hasil pindaian atau yang tanpa kolom.",
    },
    {
      title: "Singkirkan kemungkinan masalah pada aplikasi pembaca",
      body: "Sebagian browser dan aplikasi pratinjau ringan menampilkan formulir tapi mengabaikan kolomnya. Buka file yang sama di aplikasi PDF khusus. Jika kolomnya tiba-tiba berfungsi, berarti aplikasi pembaca sebelumnya yang bermasalah.",
    },
    {
      title: "Periksa apakah formulirnya terkunci atau hanya-baca",
      body: "Jika kolomnya ada tapi menolak input di mana saja, formulirnya mungkin diamankan atau ditandai hanya-baca. Cari ikon gembok atau keterangan “dilindungi”. Formulir hanya-baca memang sengaja memblokir pengetikan.",
    },
    {
      title: "Siasati formulir yang terkunci",
      body: "Untuk formulir hanya-baca, Anda biasanya tetap bisa menempatkan teks di atasnya seperti formulir non-interaktif, atau meminta versi yang tidak terkunci dari pengirimnya. Jangan mencoba mengakali keamanan pada formulir yang bukan hak Anda untuk mengubahnya.",
    },
  ],
  tips: [
    "Diagnosis tercepat: coba file yang sama di aplikasi PDF yang sesungguhnya. Cara ini langsung memisahkan “formulir non-interaktif” dari “aplikasi pembaca yang bermasalah”.",
    "Menambahkan teks di atasnya berfungsi pada hampir semua formulir, baik non-interaktif maupun terkunci, dan sering kali menjadi jalan tercepat menuju halaman yang selesai.",
    "Formulir yang bisa diketik dengan baik di komputer tapi tidak di pratinjau email HP adalah masalah aplikasi pembaca, buka saja di aplikasi PDF yang sesungguhnya.",
    "Jika hanya sebagian kolom yang menolak ketikan, kolom-kolom itu mungkin bersifat hasil perhitungan otomatis atau terkunci, sementara yang lain tetap terbuka.",
    "Tampilan dan perilaku formulir bisa berbeda antar aplikasi pembaca PDF, jadi “tidak berfungsi di sini” jarang berarti “rusak di mana-mana”.",
  ],
  mobileNote:
    "Di HP, aplikasi PDF Editor mengetik ke kolom interaktif jika ada, dan membiarkan Anda menempatkan teks langsung pada formulir non-interaktif atau yang terkunci jika tidak ada, jadi formulir yang tadinya menolak ketikan di pratinjau email Anda kini bisa diisi. Semuanya berjalan di perangkat, tanpa apa pun yang diunggah.",
  faq: [
    {
      q: "Kenapa saya tidak bisa mengetik di formulir PDF saya?",
      a: "Biasanya salah satu dari tiga alasan: formulirnya non-interaktif tanpa kolom, aplikasi pembaca Anda tidak mendukung kolom formulir, atau formulirnya terkunci/hanya-baca. Kenali dulu penyebabnya, lalu tambahkan teks di atasnya, ganti aplikasi pembaca, atau minta salinan yang tidak terkunci.",
    },
    {
      q: "Bagaimana cara mengetik di formulir PDF yang non-interaktif?",
      a: "Anda tidak bisa mengetik ke kolom karena memang tidak ada kolomnya. Sebagai gantinya, gunakan editor PDF untuk menempatkan teks dan tanda centang langsung di halaman, di tempat setiap jawaban seharusnya berada, lalu ekspor filenya.",
    },
    {
      q: "Kenapa formulirnya berfungsi di komputer saya tapi tidak di HP?",
      a: "HP Anda kemungkinan menampilkan pratinjaunya di aplikasi yang mengabaikan kolom formulir. Buka filenya di aplikasi PDF khusus dan kolomnya seharusnya menjadi aktif.",
    },
    {
      q: "Apa artinya formulir PDF yang hanya-baca?",
      a: "Ini adalah formulir yang diamankan pembuatnya sehingga kolomnya tidak bisa diedit atau diketik. Anda biasanya tetap bisa meletakkan teks di atasnya, atau meminta versi yang mengizinkan input dari pengirimnya.",
    },
    {
      q: "Bisakah sebuah formulir hanya sebagian yang bisa diketik?",
      a: "Bisa. Sebagian kolom mungkin terkunci atau hasil perhitungan otomatis, sementara yang lain menerima input. Isi kolom yang terbuka dan tambahkan teks secara manual untuk yang tidak bisa Anda jangkau.",
    },
  ],
  related: [
    { label: "Cara mengisi formulir PDF", path: "/guides/how-to-fill-out-a-pdf-form" },
    { label: "Mengapa formulir PDF hanya bisa dibaca", path: "/guides/why-pdf-form-is-read-only" },
    { label: "Kolom formulir PDF hilang", path: "/guides/pdf-form-fields-missing" },
    { label: "Formulir PDF tidak berfungsi", path: "/guides/pdf-form-not-working" },
  ],
  parentHub: { label: "Formulir PDF", path: "/pdf-forms" },
};

export default content;
