import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "merge-pdf",
  hero: {
    eyebrow: "Gabung PDF",
    h1: "Gabungkan beberapa PDF menjadi satu dokumen — di browser Anda.",
    highlight: "di browser Anda",
    lead: "Tambahkan dua atau lebih file PDF dan gabungkan menjadi satu dokumen. Urutkan ulang sebelum digabungkan. File Anda tetap berada di perangkat Anda.",
  },
  privacyNote:
    "File-file Anda diproses secara lokal di browser Anda dan tidak diunggah ke server kami. Tidak ada yang meninggalkan perangkat Anda.",
  howTo: {
    heading: "Cara menggabungkan PDF",
    steps: [
      {
        title: "Tambahkan PDF Anda",
        body: "Seret dan lepas dua atau lebih PDF, atau klik untuk memilihnya dari perangkat Anda.",
      },
      {
        title: "Urutkan ulang jika perlu",
        body: "Gunakan panah pada setiap baris untuk menempatkan halaman dalam urutan yang benar sebelum digabungkan.",
      },
      {
        title: "Gabungkan",
        body: "Klik Gabungkan PDF. File Anda digabungkan secara lokal di browser Anda.",
      },
      {
        title: "Unduh",
        body: "PDF gabungan terunduh secara otomatis. Ganti namanya setelah disimpan.",
      },
    ],
  },
  useCases: {
    heading: "Kapan menggabungkan adalah pilihan yang tepat",
    items: [
      {
        title: "Kirim satu file, bukan lima",
        body: "Klien, akuntan, dan pengacara lebih suka satu dokumen daripada rangkaian lampiran.",
      },
      {
        title: "Satukan penawaran, kontrak, dan faktur",
        body: "Buat satu file yang mudah diperiksa dari dokumen-dokumen yang dibuat dengan alat berbeda.",
      },
      {
        title: "Satukan halaman hasil pindaian",
        body: "Gabungkan pindaian paspor, KTP, atau kontrak halaman demi halaman menjadi satu dokumen yang diterima oleh sebuah portal.",
      },
      {
        title: "Susun sebuah laporan",
        body: "Jahit halaman sampul, PDF isi, dan lampiran pendukung menjadi satu berkas akhir.",
      },
    ],
  },
  limitations: {
    heading: "Keterbatasan",
    items: [
      {
        title: "PDF yang dilindungi kata sandi",
        body: "File yang terkunci tidak dapat digabungkan di browser. Buka kuncinya dulu dengan aplikasi sumbernya, atau gunakan aplikasi PDF Editor di ponsel.",
      },
      {
        title: "Kumpulan file yang sangat besar",
        body: "Browser kehabisan memori jauh lebih cepat daripada aplikasi native. Untuk 50 file atau lebih, atau pindaian yang sangat berat, gunakan aplikasi PDF Editor.",
      },
      {
        title: "Bookmark dan kolom formulir",
        body: "Beberapa struktur bawaan (kolom formulir, anotasi) dapat terkunci secara permanen saat digabungkan. Aplikasi di ponsel mempertahankannya dengan lebih baik.",
      },
    ],
  },
  related: [
    { label: "Bagi PDF — kebalikannya", path: "/split-pdf" },
    { label: "Putar Halaman PDF", path: "/rotate-pdf" },
    { label: "Kompres PDF", path: "/compress-pdf" },
    { label: "Urutkan Ulang Halaman PDF", path: "/reorder-pdf-pages" },
    { label: "Semua Alat PDF Gratis", path: "/pdf-tools" },
    { label: "Panduan: cara menggabungkan PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  faq: [
    {
      q: "Apakah file saya diunggah ke server?",
      a: "Tidak. Proses penggabungan berjalan sepenuhnya di browser Anda. File Anda tidak pernah meninggalkan perangkat Anda.",
    },
    {
      q: "Apakah ada batas jumlah PDF yang bisa saya gabungkan?",
      a: "Tidak ada batas pasti, tapi kami menyarankan agar satu batch tetap di bawah 30 file atau sekitar 500 MB total agar browser tetap responsif.",
    },
    {
      q: "Bisakah saya menggabungkan PDF yang dilindungi kata sandi?",
      a: "Tidak bisa di browser. Hapus dulu kata sandinya, atau gunakan aplikasi PDF Editor yang mendukung file terproteksi.",
    },
    {
      q: "Apakah format aslinya berubah?",
      a: "Tidak. Setiap halaman sumber dipertahankan persis seperti aslinya. Hanya urutan halaman dan dokumen pembungkusnya yang berubah.",
    },
    {
      q: "Bisakah saya memisahkannya lagi nanti?",
      a: "Bisa. Gunakan alat Bagi PDF untuk memecah kembali file gabungan menjadi halaman atau rentang halaman.",
    },
  ],
  appCta: {
    heading: "Butuh alat PDF saat bepergian?",
    sub: "PDF Editor untuk iPhone dan Android menggabungkan, menandatangani, dan memindai PDF langsung dari ponsel Anda.",
  },
};

export default content;
