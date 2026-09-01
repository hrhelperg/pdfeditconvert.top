import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "extract-pdf-pages",
  hero: {
    eyebrow: "Ekstrak Halaman PDF",
    h1: "Ekstrak halaman dari PDF — di browser Anda.",
    highlight: "di browser Anda",
    lead: "Tambahkan file PDF, ketik halaman atau rentang halaman yang Anda inginkan, lalu unduh PDF baru yang hanya berisi halaman tersebut. Semua berjalan di perangkat Anda.",
  },
  privacyNote:
    "File Anda diproses secara lokal di browser Anda dan tidak diunggah ke server kami. Tidak ada yang meninggalkan perangkat Anda.",
  howTo: {
    heading: "Cara mengekstrak halaman PDF",
    steps: [
      {
        title: "Tambahkan PDF Anda",
        body: "Seret dan lepas PDF, atau klik untuk memilih satu file. Kami akan menampilkan jumlah total halamannya.",
      },
      {
        title: "Masukkan halaman",
        body: "Ketik halaman tunggal dan rentang halaman, misalnya 1-3,5,8-10. Jumlah halaman terpilih diperbarui saat Anda mengetik.",
      },
      {
        title: "Ekstrak",
        body: "Klik Ekstrak Halaman. PDF baru yang hanya berisi halaman tersebut dibuat secara lokal.",
      },
      {
        title: "Unduh",
        body: "PDF hasil ekstraksi terunduh secara otomatis.",
      },
    ],
  },
  useCases: {
    heading: "Kapan mengekstrak halaman membantu",
    items: [
      {
        title: "Bagikan hanya yang diperlukan",
        body: "Kirim satu bagian, satu bab, atau satu halaman yang sudah ditandatangani, bukan seluruh dokumen.",
      },
      {
        title: "Ambil satu formulir atau kuitansi",
        body: "Ambil satu halaman yang diminta oleh sebuah portal tanpa menampilkan sisanya.",
      },
      {
        title: "Pisahkan satu bab",
        body: "Buat PDF khusus dari laporan atau buku panjang untuk keperluan belajar atau tinjauan.",
      },
      {
        title: "Susun berkas kustom",
        body: "Urutkan ulang pilihan halaman dengan mencantumkan halaman sesuai urutan yang Anda inginkan.",
      },
    ],
  },
  limitations: {
    heading: "Keterbatasan yang jujur",
    items: [
      {
        title: "PDF yang dilindungi kata sandi",
        body: "File terenkripsi tidak dapat dibuka di browser. Buka kuncinya terlebih dahulu, atau gunakan aplikasi PDF Editor di ponsel.",
      },
      {
        title: "Halaman di luar rentang",
        body: "Nomor halaman yang melebihi jumlah halaman dokumen akan diabaikan; jika tidak ada halaman valid yang terpilih, Anda akan mendapat pesan error yang jelas.",
      },
      {
        title: "PDF yang sangat besar",
        body: "Browser kehabisan memori jauh lebih cepat daripada aplikasi native. Untuk file yang sangat besar, gunakan aplikasi PDF Editor.",
      },
    ],
  },
  related: [
    { label: "Bagi PDF", path: "/split-pdf" },
    { label: "Urutkan Ulang Halaman PDF", path: "/reorder-pdf-pages" },
    { label: "Kompres PDF", path: "/compress-pdf" },
    { label: "Gabung PDF", path: "/merge-pdf" },
  ],
  faq: [
    {
      q: "Apakah file saya diunggah ke server?",
      a: "Tidak. Ekstraksi berjalan sepenuhnya di browser Anda. File Anda tidak pernah meninggalkan perangkat Anda.",
    },
    {
      q: "Format halaman apa saja yang bisa saya masukkan?",
      a: "Halaman tunggal dan rentang yang dipisahkan koma: 1-3, 2,4,6, atau 1-2,5,8-10. Spasi juga diperbolehkan.",
    },
    {
      q: "Apa yang terjadi jika rentangnya tidak valid?",
      a: "Input yang tidak valid akan ditolak dengan pesan yang jelas; nomor di luar rentang akan diabaikan. Jika tidak ada yang valid tersisa, Anda akan diberi tahu alasannya.",
    },
    {
      q: "Bisakah saya mengulang atau mengurutkan ulang halaman?",
      a: "Bisa. Cantumkan halaman sesuai urutan yang Anda inginkan; mengulang satu halaman akan menghasilkannya lebih dari satu kali.",
    },
    {
      q: "Apakah ekstraksi mengubah kualitas?",
      a: "Tidak. Halaman yang dipilih disalin persis apa adanya. Teks tetap dapat dipilih dan tidak ada yang dikompres ulang.",
    },
  ],
  appCta: {
    heading: "Butuh alat PDF saat bepergian?",
    sub: "PDF Editor untuk iPhone dan Android mengekstrak, membagi, dan menandatangani PDF langsung dari ponsel Anda.",
  },
};

export default content;
