import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-fields-missing",
  h1: "Kolom Formulir PDF Hilang? Alasan dan Cara Mengembalikannya",
  description:
    "Membuka formulir dan kolomnya tidak ada? Alasan kolom interaktif hilang di sebagian aplikasi pembaca, cara mengembalikannya, dan apa yang harus dilakukan saat memang tidak pernah ada kolom sejak awal.",
  updated: "2026-06-01",
  intro: [
    "Anda membuka formulir dengan harapan ada kotak untuk diketik dan ternyata tidak ada apa pun, hanya halaman yang terlihat seperti gambar non-interaktif, atau kolom yang tampak sebagai garis luar kosong yang tidak bisa disentuh. Kolom formulir yang hilang memang mengkhawatirkan tapi biasanya tidak berbahaya: kolomnya masih ada di dalam file; aplikasi pembaca Anda saja yang tidak menampilkannya. Kadang formulirnya memang sejak awal tidak pernah punya kolom dan memang dimaksudkan untuk diisi dengan tangan.",
    "Dua skenario mencakup hampir semua kasus. Pada skenario pertama, formulirnya interaktif tapi Anda membukanya di tempat yang mengabaikan lapisan kolomnya, pratinjau browser, aplikasi pembaca email, aplikasi pembaca PDF dasar yang memperlakukan PDF seperti gambar. Pada skenario kedua, formulirnya memang benar-benar non-interaktif, jadi tidak ada kolom untuk ditemukan dan Anda menyelesaikannya dengan menempatkan teks di atasnya.",
    "Panduan ini membantu Anda membedakan keduanya dan mengembalikan kolomnya jika memang ada, tanpa langsung menganggap filenya rusak, karena hampir tidak pernah begitu.",
  ],
  steps: [
    {
      title: "Singkirkan dulu kemungkinan masalah pada aplikasi pembaca",
      body: "Buka file yang sama di aplikasi PDF khusus, bukan di tab browser atau pratinjau email. Jika kolomnya muncul kembali, berarti kolom itu memang selalu ada, aplikasi pembaca sebelumnya saja yang tidak menampilkan lapisan kolomnya.",
    },
    {
      title: "Periksa apakah kolomnya memang pernah ada",
      body: "Jika tidak ada satu pun aplikasi yang mumpuni menampilkan kolom di mana pun pada halaman, formulirnya memang non-interaktif, dipindai atau diekspor tanpa lapisan kolom. Tidak ada yang hilang; formulirnya memang sejak awal tidak pernah interaktif.",
    },
    {
      title: "Perbarui atau ganti aplikasi PDF Anda",
      body: "Aplikasi pembaca yang sudah usang atau minimalis mungkin menampilkan halamannya tapi melewati kolomnya. Aplikasi PDF terkini yang lengkap fiturnya adalah cara paling andal untuk menampilkan dan memakai kolom interaktif.",
    },
    {
      title: "Unduh ulang jika filenya terlihat tidak lengkap",
      body: "Unduhan yang terputus atau tidak selesai bisa menghilangkan isi. Unduh ulang formulirnya dari sumbernya dan buka lagi, salinan yang baru dan lengkap kadang mengembalikan kolom yang terlihat hilang.",
    },
    {
      title: "Isi formulir non-interaktif dengan menambahkan teks",
      body: "Jika formulirnya memang benar-benar tidak punya kolom, selesaikan dengan cara non-interaktif: tempatkan teks dan tanda centang di halaman memakai editor PDF, lalu ekspor. Anda tidak butuh kolom untuk menyelesaikannya.",
    },
  ],
  tips: [
    "Sebelum menganggap filenya rusak, ganti aplikasi pembaca dulu, aplikasi yang berbeda adalah cara tercepat untuk menguji apakah kolomnya memang ada.",
    "Pratinjau browser dan aplikasi pembaca email biasanya penyebab kolom yang “menghilang”; aplikasi PDF yang sesungguhnya memperbaiki sebagian besar kasus.",
    "Jika kolom tampak sebagai garis luar kosong yang tidak bisa diklik, itu sering berarti aplikasi pembacanya menggambar kolomnya tapi tidak mengaktifkannya, ganti aplikasi.",
    "Formulir yang memang benar-benar non-interaktif tidak kehilangan apa pun, menambahkan teks di atasnya memang cara yang dimaksudkan untuk mengisinya.",
    "Formulir dinamis tingkat lanjut kadang hanya menampilkan kolomnya di software tertentu; jika begitu, formulirnya mungkin butuh program itu atau format alternatif.",
  ],
  mobileNote:
    "Di HP, kolom yang hilang biasanya karena pratinjau yang tidak mau menampilkannya. Buka formulirnya di aplikasi PDF Editor: aplikasi ini mengaktifkan kolom interaktif jika ada, dan membiarkan Anda menempatkan teks di halaman jika tidak ada, jadi formulir yang tadinya terlihat tanpa kolom di email kini bisa diisi.",
  faq: [
    {
      q: "Kenapa kolom formulir hilang dari PDF saya?",
      a: "Paling sering karena aplikasi pembaca Anda tidak menampilkan lapisan kolomnya, umum terjadi pada pratinjau browser dan aplikasi pembaca email. Buka filenya di aplikasi PDF khusus dan kolomnya biasanya muncul kembali. Jika tidak ada aplikasi yang menampilkannya, formulirnya memang non-interaktif.",
    },
    {
      q: "Apakah saya kehilangan kolomnya, atau memang tidak pernah ada?",
      a: "Buka di aplikasi PDF yang mumpuni. Jika kolomnya muncul, berarti memang selalu ada dan aplikasi pembaca lama menyembunyikannya. Jika tidak muncul di mana pun, formulirnya non-interaktif dan memang tidak pernah punya lapisan kolom interaktif.",
    },
    {
      q: "Bisakah unduhan yang rusak menyebabkan kolom hilang?",
      a: "Kadang bisa. Unduhan yang terputus bisa menghilangkan isi. Unduh ulang formulirnya dari sumbernya dan buka lagi sebelum menyimpulkan kolomnya benar-benar hilang.",
    },
    {
      q: "Bagaimana cara mengisi formulir yang tidak punya kolom?",
      a: "Tempatkan teks dan tanda centang Anda sendiri langsung di halaman memakai editor PDF, lalu ekspor. Formulir non-interaktif diselesaikan dengan cara ini, tidak perlu kolom.",
    },
    {
      q: "Kenapa kolomnya tampak sebagai garis luar yang tidak bisa saya klik?",
      a: "Aplikasi pembaca Anda menggambar kotak kolomnya tapi tidak membuatnya interaktif. Beralihlah ke aplikasi PDF yang lengkap fiturnya, yang menampilkan sekaligus mengaktifkan kolomnya.",
    },
  ],
  related: [
    { label: "Formulir PDF tidak berfungsi", path: "/guides/pdf-form-not-working" },
    { label: "Mengapa saya tidak bisa mengetik di formulir PDF?", path: "/guides/why-cant-i-type-in-a-pdf-form" },
    { label: "Masalah kompatibilitas formulir PDF", path: "/guides/pdf-form-compatibility-problems" },
    { label: "Apa itu formulir PDF?", path: "/guides/what-is-a-pdf-form" },
  ],
  parentHub: { label: "Formulir PDF", path: "/pdf-forms" },
};

export default content;
