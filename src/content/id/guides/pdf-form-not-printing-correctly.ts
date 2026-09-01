import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-printing-correctly",
  h1: "Formulir PDF Tidak Tercetak dengan Benar? Perbaiki Kolom yang Kosong",
  description:
    "Formulir tercetak dengan kolom kosong, teks bergeser, atau tepi terpotong? Masalah cetak yang khas untuk formulir, terutama nilai kolom yang hilang, dan pengaturan yang memperbaiki masing-masing.",
  updated: "2026-06-01",
  intro: [
    "Formulir tercetak dengan buruk dengan cara yang tidak dialami PDF biasa. Yang paling umum dan paling membingungkan adalah kolom yang sudah diisi malah keluar kosong, Anda sudah menyelesaikan semuanya di layar, tapi kertasnya hanya menampilkan formulir kosong. Diikuti dengan teks kolom yang bergeser dari garisnya, kotak centang yang tidak tercetak, dan tepi yang terpotong. Masing-masing punya penyebab spesifik yang bisa diperbaiki, berakar dari cara kolom formulir tercetak berbeda dari isi halaman biasa.",
    "Masalah utamanya, kolom kosong di atas kertas, terjadi karena jawaban yang sudah diisi hidup di lapisan kolom formulir, dan sebagian jalur cetak sama sekali melewati lapisan itu. Solusinya adalah pengaturan cetak yang menyertakan kolom formulir, atau mengunci formulirnya agar jawabannya menjadi bagian dari halaman. Masalah-masalah lainnya soal skala dan rendering kolom, masing-masing dengan pengaturannya sendiri.",
    "Panduan ini berfokus pada masalah cetak yang khas untuk formulir. Untuk masalah pencetakan PDF secara umum seperti ukuran halaman yang salah pada dokumen apa pun, panduan mencetak yang lebih luas membahasnya lebih lengkap.",
  ],
  steps: [
    {
      title: "Perbaiki kolom kosong: cetak nilai kolom atau kunci",
      body: "Jika kolom yang sudah diisi tercetak kosong, aktifkan opsi mencetak kolom formulir (kadang disebut “dokumen dan markup”), atau kunci formulirnya lebih dulu agar jawabannya menyatu ke halaman dan selalu tercetak.",
    },
    {
      title: "Perbaiki teks kolom yang bergeser",
      body: "Jika teks kolom tercetak di tempat yang salah atau dengan font yang salah, berarti aplikasi pembaca menggambar kolomnya secara berbeda untuk pencetakan. Mengunci mengunci tampilan yang Anda lihat di layar sehingga tercetak dengan cara yang sama.",
    },
    {
      title: "Perbaiki kotak centang dan tanda yang hilang",
      body: "Tanda centang yang hilang di atas kertas adalah masalah lapisan kolom yang sama seperti teks kosong. Pengaturan cetak-kolom-formulir atau langkah mengunci akan mengembalikannya bersama jawaban Anda yang lain.",
    },
    {
      title: "Perbaiki tepi yang terpotong",
      body: "Set skala ke “fit” atau 100% daripada zoom kustom, dan samakan ukuran kertas dengan formulirnya. Ini masalah skala, terpisah dari masalah lapisan kolom, tapi umum terjadi pada formulir yang padat.",
    },
    {
      title: "Cetak satu halaman untuk memastikan",
      body: "Setelah mengubah pengaturan, cetak satu halaman dulu. Pastikan jawaban, perataan, dan marginnya semua terlihat benar sebelum mencetak seluruh formulir multihalaman ke kertas.",
    },
  ],
  tips: [
    "Mengunci sebelum mencetak adalah solusi universal untuk kolom yang kosong atau bergeser, formulir yang terkunci mencetak jawabannya di mana saja tanpa perlu pengaturan khusus.",
    "Jika jawabannya tampil di layar tapi tidak di kertas, itu masalah pengaturan cetak, bukan filenya, cari opsi kolom formulir.",
    "Masalah skala dan ukuran kertas terpisah dari masalah kolom kosong; perbaiki dengan “fit”/100% dan kertas yang sesuai.",
    "Formulir non-interaktif hasil pindaian tidak mengalami masalah kolom kosong karena jawabannya sudah menjadi bagian dari halaman.",
    "Nama opsi cetak berbeda-beda antar aplikasi dan printer, jadi cari apa pun yang menyebut kolom formulir, markup, atau komentar.",
  ],
  mobileNote:
    "Pintasan cetak di HP bisa menghilangkan nilai kolom sama seperti di desktop. Di aplikasi PDF Editor, kunci formulir yang sudah selesai sebelum mencetak atau membagikannya ke printer agar setiap jawaban sudah menyatu ke halaman dan tercetak dengan andal.",
  faq: [
    {
      q: "Kenapa formulir saya tercetak dengan kolom kosong?",
      a: "Jawaban yang sudah diisi ada di lapisan kolom formulir, dan jalur cetak Anda melewatinya. Aktifkan opsi mencetak kolom formulir, atau kunci formulirnya agar jawabannya menjadi bagian dari halaman dan selalu tercetak.",
    },
    {
      q: "Kenapa teks kolomnya tercetak di tempat atau font yang salah?",
      a: "Aplikasi pembaca menggambar kolomnya secara berbeda untuk pencetakan. Kunci formulirnya lebih dulu, mengunci mengunci tampilan sesuai yang Anda lihat di layar, sehingga tercetak sama persis.",
    },
    {
      q: "Tanda centang saya tidak tercetak, kenapa?",
      a: "Penyebabnya sama seperti teks kosong: kotak centang adalah bagian dari lapisan kolom. Pengaturan cetak-kolom-formulir atau langkah mengunci akan mencetaknya bersama jawaban Anda yang lain.",
    },
    {
      q: "Kenapa formulir tercetak saya terpotong di tepinya?",
      a: "Itu ketidaksesuaian skala atau ukuran kertas, bukan masalah kolom. Set skala ke fit atau 100% dan samakan ukuran kertas dengan ukuran halaman formulirnya.",
    },
    {
      q: "Apa bedanya ini dari masalah pencetakan PDF secara umum?",
      a: "Ini membahas masalah yang khas untuk formulir, terutama nilai kolom yang kosong. Panduan pencetakan PDF secara umum menangani masalah pada dokumen secara keseluruhan seperti ukuran yang salah dan pemotongan pada PDF apa pun.",
    },
  ],
  related: [
    { label: "Cara mencetak formulir PDF yang sudah diisi", path: "/guides/how-to-print-a-filled-pdf-form" },
    { label: "Cara mengatasi masalah mencetak PDF", path: "/guides/how-to-fix-pdf-printing-issues" },
    { label: "Formulir PDF tidak berfungsi", path: "/guides/pdf-form-not-working" },
    { label: "Perbaiki error formulir PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formulir PDF", path: "/pdf-forms" },
};

export default content;
