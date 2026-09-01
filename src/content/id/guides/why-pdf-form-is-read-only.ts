import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-pdf-form-is-read-only",
  h1: "Mengapa Formulir PDF Hanya Bisa Dibaca (dan Apa yang Harus Dilakukan)",
  description:
    "Formulir Anda terbuka terkunci dan tampak pudar? Alasan formulir diset hanya-baca, cara membedakan pengamanan yang disengaja dari sekadar keanehan aplikasi pembaca, dan opsi jujur untuk tetap bisa mengisinya.",
  updated: "2026-06-01",
  intro: [
    "Formulir PDF yang hanya-baca terbuka dengan baik tapi menolak setiap upaya untuk mengisinya, kolomnya berwarna abu-abu, ada ikon gembok, mungkin juga keterangan “dilindungi” atau “diamankan” pada baris judul. Berbeda dari formulir non-interaktif (yang memang sama sekali tidak punya kolom) atau masalah penyimpanan (di mana jawabannya tidak bertahan), formulir hanya-baca punya kolom yang ada tapi sengaja dimatikan. Sesuatu atau seseorang telah menguncinya.",
    "Ada beberapa alasan jujur untuk ini, dan penting untuk diketahui karena memengaruhi apa yang seharusnya Anda lakukan. Pembuat formulirnya mungkin sengaja mengamankannya. Formulirnya mungkin sudah bersertifikat atau sudah ditandatangani, sehingga mengubahnya akan merusak itu. Atau aplikasi pembaca Anda mungkin membukanya dalam mode hanya-baca yang bisa Anda matikan. Membedakan perlindungan yang disengaja dari sekadar keanehan aplikasi pembaca adalah langkah pertama yang paling penting.",
    "Panduan ini menjelaskan penyebabnya, cara mengenali mana yang sedang Anda alami, dan cara-cara sah untuk menyelesaikan formulir hanya-baca, tanpa mencoba mengakali keamanan pada dokumen yang bukan hak Anda untuk mengubahnya.",
  ],
  steps: [
    {
      title: "Periksa keterangan dilindungi atau diamankan",
      body: "Lihat baris judul dan properti dokumen untuk kata-kata seperti “diamankan”, “dilindungi”, atau ikon gembok. Ini menandakan keamanan yang sengaja diterapkan oleh pembuatnya, keadaan hanya-baca itu memang disengaja.",
    },
    {
      title: "Singkirkan kemungkinan mode hanya-baca dari aplikasi pembaca",
      body: "Sebagian aplikasi membuka file dalam mode hanya-baca atau “tampilan terlindungi” secara bawaan. Cari petunjuk “aktifkan pengeditan” atau tombol hanya-baca, dan coba aplikasi PDF khusus, sebelum menganggap filenya sendiri yang terkunci.",
    },
    {
      title: "Pertimbangkan apakah formulirnya bersertifikat atau sudah ditandatangani",
      body: "Jika formulirnya sudah ditandatangani secara digital atau bersertifikat, mengeditnya akan membatalkan tanda tangan itu, jadi aplikasi pembaca menguncinya. Ini perilaku yang benar, Anda umumnya memang tidak seharusnya mengubah formulir yang sudah ditandatangani.",
    },
    {
      title: "Selesaikan dengan menambahkan teks di atasnya",
      body: "Bahkan saat kolomnya terkunci, Anda biasanya tetap bisa menempatkan teks dan tanda centang Anda sendiri di halaman seolah itu formulir non-interaktif, lalu ekspor, cara yang sah untuk mengisi formulir hanya-baca.",
    },
    {
      title: "Minta versi yang tidak terkunci dari pengirimnya",
      body: "Jika Anda benar-benar butuh kolom interaktifnya, cara paling bersih adalah meminta versi yang mengizinkan input dari pengirimnya. Jangan mencoba mengakali keamanan pada dokumen yang bukan hak Anda.",
    },
  ],
  tips: [
    "Tentukan dulu: keamanan yang disengaja atau keanehan aplikasi pembaca? Cari ikon gembok atau keterangan “diamankan” dibanding petunjuk “aktifkan pengeditan”.",
    "Menempatkan teks di atas halaman berfungsi pada sebagian besar formulir hanya-baca dan sering menjadi jalan sah tercepat untuk menyelesaikannya.",
    "Jangan mencoba melepas perlindungan dari formulir yang bukan milik Anda, jika Anda butuh kolomnya dibuka, tanyakan ke pengirimnya.",
    "Formulir yang bersertifikat atau sudah ditandatangani dikunci dengan alasan yang baik; mengubahnya akan merusak tanda tangan yang dibawanya.",
    "“Tampilan terlindungi” pada sebagian aplikasi pembaca hanyalah pengaturan bawaan, beralih ke aplikasi PDF yang lengkap atau mengaktifkan pengeditan mungkin sudah cukup.",
  ],
  mobileNote:
    "Di HP, formulir hanya-baca biasanya tetap bisa diselesaikan di aplikasi PDF Editor dengan menempatkan teks dan tanda centang di halaman, bahkan saat kolomnya terkunci. Ini berjalan di perangkat, jadi detail Anda tetap privat, dan tidak akan mengganggu keamanan formulirnya, hanya meletakkan jawaban Anda di atasnya.",
  faq: [
    {
      q: "Kenapa formulir PDF saya hanya-baca?",
      a: "Bisa karena pembuatnya sengaja mengamankannya, sudah bersertifikat atau sudah ditandatangani (sehingga mengeditnya akan merusak itu), atau aplikasi pembaca Anda membukanya dalam mode hanya-baca. Periksa ikon gembok atau keterangan “diamankan” untuk membedakan perlindungan yang disengaja dari sekadar pengaturan aplikasi pembaca.",
    },
    {
      q: "Bagaimana cara mengisi formulir PDF yang hanya-baca?",
      a: "Anda biasanya tetap bisa menempatkan teks dan tanda centang Anda sendiri di halaman seolah itu formulir non-interaktif, lalu ekspor, bahkan saat kolomnya terkunci. Jika Anda butuh kolom interaktifnya, minta salinan yang tidak terkunci dari pengirimnya.",
    },
    {
      q: "Apakah hanya-baca sama dengan tidak bisa mengetik?",
      a: "Ini salah satu penyebab tidak bisa mengetik. Formulir juga bisa menolak ketikan karena non-interaktif atau dibuka di aplikasi pembaca yang salah. Hanya-baca secara khusus berarti kolomnya ada tapi sengaja dinonaktifkan.",
    },
    {
      q: "Bisakah saya menghapus perlindungan hanya-baca ini?",
      a: "Jika formulirnya milik Anda dan Anda yang menerapkan perlindungannya, Anda bisa mengubahnya di editor yang mumpuni. Jika itu milik orang lain, jangan coba mengakali keamanannya, minta versi yang tidak terkunci sebagai gantinya.",
    },
    {
      q: "Kenapa mengedit formulir yang sudah ditandatangani diblokir?",
      a: "Mengeditnya akan membatalkan tanda tangan digital atau sertifikasi yang dibawa formulirnya, jadi aplikasi pembaca menguncinya. Ini memang perilaku yang disengaja untuk menjaga kepercayaan pada dokumen yang sudah ditandatangani.",
    },
  ],
  related: [
    { label: "Mengapa saya tidak bisa mengetik di formulir PDF?", path: "/guides/why-cant-i-type-in-a-pdf-form" },
    { label: "Formulir PDF tidak berfungsi", path: "/guides/pdf-form-not-working" },
    { label: "Mengapa formulir PDF tidak mau tersimpan", path: "/guides/why-pdf-form-wont-save" },
    { label: "Cara melindungi file PDF dengan kata sandi", path: "/guides/how-to-protect-pdf-file" },
  ],
  parentHub: { label: "Formulir PDF", path: "/pdf-forms" },
};

export default content;
