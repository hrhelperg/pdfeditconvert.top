import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "rotate-pdf",
  hero: {
    eyebrow: "Putar PDF",
    h1: "Perbaiki halaman PDF yang miring — di browser Anda.",
    highlight: "di browser Anda",
    lead: "Putar semua halaman atau hanya halaman tertentu, lalu unduh PDF yang sudah diperbaiki. Semuanya berjalan di browser Anda.",
  },
  privacyNote:
    "File Anda diproses secara lokal di browser Anda dan tidak diunggah ke server kami. Tidak ada yang meninggalkan perangkat Anda.",
  howTo: {
    heading: "Cara memutar PDF",
    steps: [
      {
        title: "Tambahkan PDF Anda",
        body: "Seret dan lepas satu file PDF, atau klik untuk memilihnya.",
      },
      {
        title: "Pilih sudut",
        body: "Pilih 90°, 180°, atau 270° (searah jarum jam).",
      },
      {
        title: "Pilih halaman mana",
        body: "Putar semua halaman, atau masukkan nomor halaman (misalnya 1,3-5).",
      },
      {
        title: "Putar dan unduh",
        body: "Klik Putar. Kami membuat ulang PDF secara lokal dengan orientasi baru.",
      },
    ],
  },
  useCases: {
    heading: "Kapan memutar adalah pilihan yang tepat",
    items: [
      {
        title: "Pindaian dari ponsel yang miring",
        body: "Pindaian dari galeri kamera sering tersimpan dalam orientasi lanskap; perbaiki dengan satu klik.",
      },
      {
        title: "Laporan dengan orientasi campuran",
        body: "Tabel lebar di halaman lanskap yang tercampur dalam laporan potret? Perbaiki tanpa perlu memindai ulang.",
      },
      {
        title: "Paspor dan KTP",
        body: "Pastikan setiap halaman terbaca dengan arah yang sama sebelum sebuah portal pemerintah menolaknya.",
      },
      {
        title: "Kuitansi dan faktur",
        body: "Buat sekumpulan foto kuitansi terbaca dalam satu arah sebelum digabungkan.",
      },
    ],
  },
  limitations: {
    heading: "Keterbatasan",
    items: [
      {
        title: "PDF yang dilindungi kata sandi",
        body: "File yang terkunci tidak dapat diputar di browser. Buka kuncinya dulu, atau gunakan aplikasi PDF Editor di ponsel.",
      },
      {
        title: "Sudut kustom per halaman",
        body: "Alat ini menerapkan satu sudut dalam satu waktu. Untuk sudut yang berbeda-beda, jalankan dua kali dengan pilihan halaman yang berbeda.",
      },
      {
        title: "Anotasi dan kolom formulir",
        body: "Rotasi dapat menggeser tampilan elemen yang bertumpuk. Aplikasi di ponsel menangani anotasi dengan lebih rapi.",
      },
    ],
  },
  related: [
    { label: "Gabung PDF", path: "/merge-pdf" },
    { label: "Bagi PDF", path: "/split-pdf" },
    { label: "Tambah Watermark ke PDF", path: "/add-watermark-to-pdf" },
    { label: "Urutkan Ulang Halaman PDF", path: "/reorder-pdf-pages" },
    { label: "Semua Alat PDF Gratis", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Apakah file saya diunggah ke server?",
      a: "Tidak. Rotasi berjalan sepenuhnya di browser Anda; tidak ada yang meninggalkan perangkat Anda.",
    },
    {
      q: "Bisakah saya memutar hanya beberapa halaman?",
      a: "Bisa. Gunakan kolom pemilihan halaman, misalnya 1,3-5,9.",
    },
    {
      q: "Apakah rotasi menurunkan kualitas?",
      a: "Tidak. Halaman dipertahankan byte demi byte; kami hanya mengatur metadata rotasinya.",
    },
    {
      q: "Bisakah saya memutar PDF yang dilindungi kata sandi?",
      a: "Tidak bisa di browser. Hapus dulu kata sandinya, atau gunakan aplikasi PDF Editor.",
    },
  ],
  appCta: {
    heading: "Putar PDF juga dari ponsel Anda.",
    sub: "PDF Editor untuk iPhone dan Android mengedit, memutar, dan menandatangani PDF secara offline.",
  },
};

export default content;
