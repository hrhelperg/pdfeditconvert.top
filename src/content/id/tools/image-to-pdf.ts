import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "image-to-pdf",
  hero: {
    eyebrow: "Gambar ke PDF",
    h1: "Ubah gambar JPG, PNG, dan WebP menjadi satu PDF.",
    highlight: "satu PDF",
    lead: "Tambahkan gambar JPG, PNG, atau WebP dan gabungkan menjadi satu PDF. Urutkan ulang halaman, lalu unduh. Gambar Anda tetap berada di perangkat Anda.",
  },
  privacyNote:
    "File-file Anda diproses secara lokal di browser Anda dan tidak diunggah ke server kami. Tidak ada yang meninggalkan perangkat Anda.",
  howTo: {
    heading: "Cara menggunakan alat Gambar ke PDF",
    steps: [
      {
        title: "Tambahkan gambar Anda",
        body: "Seret dan lepas file JPG, PNG, atau WebP, atau klik untuk memilihnya dari perangkat Anda.",
      },
      {
        title: "Urutkan ulang jika perlu",
        body: "Gunakan panah atas dan bawah pada setiap baris untuk menempatkan halaman dalam urutan yang benar.",
      },
      {
        title: "Buat PDF",
        body: "Klik Buat PDF. Gambar Anda menjadi halaman dari satu dokumen, dengan ukuran menyesuaikan tiap gambar.",
      },
      {
        title: "Unduh",
        body: "PDF yang dihasilkan terunduh secara otomatis. Anda bisa mengganti namanya setelah disimpan.",
      },
    ],
  },
  useCases: {
    heading: "Kapan alat ini berguna",
    items: [
      {
        title: "Foto kuitansi dan pengeluaran",
        body: "Kumpulkan kuitansi selama sebulan menjadi satu PDF sebelum dikirim ke akuntan.",
      },
      {
        title: "Pindaian KTP dan paspor",
        body: "Gabungkan bagian depan dan belakang menjadi satu dokumen yang diterima oleh portal pemerintah.",
      },
      {
        title: "Screenshot menjadi laporan",
        body: "Kumpulkan serangkaian screenshot antarmuka menjadi dokumen tinjauan yang rapi.",
      },
      {
        title: "Foto papan tulis",
        body: "Ubah serangkaian foto dari sebuah rapat menjadi satu dokumen yang bisa dibolak-balik oleh anggota tim.",
      },
    ],
  },
  limitations: {
    heading: "Keterbatasan",
    items: [
      {
        title: "Hanya JPG, PNG, dan WebP",
        body: "HEIC, AVIF, GIF, dan TIFF tidak didukung di browser. Konversikan dulu atau gunakan aplikasi di ponsel.",
      },
      {
        title: "Memori browser",
        body: "Kumpulan file yang sangat besar (ratusan foto beresolusi tinggi) dapat memperlambat perangkat lama.",
      },
      {
        title: "Tanpa OCR",
        body: "Teks di dalam gambar tidak diekstrak. Untuk PDF yang dapat dicari, pindai dengan aplikasi PDF Editor.",
      },
    ],
  },
  related: [
    { label: "Gabung PDF", path: "/merge-pdf" },
    { label: "PDF ke Gambar", path: "/pdf-to-images" },
    { label: "Semua Alat PDF Gratis", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Apakah gambar saya diunggah ke suatu tempat?",
      a: "Tidak. Semua proses berjalan di browser Anda. Gambar Anda tidak pernah meninggalkan perangkat Anda.",
    },
    {
      q: "Apakah ada batas ukuran file?",
      a: "Ya, setiap file dibatasi hingga 100 MB agar browser Anda tetap responsif. Aplikasi PDF Editor di ponsel menangani kumpulan file yang lebih besar dengan akselerasi perangkat keras.",
    },
    {
      q: "Bisakah saya mengubah ukuran halaman?",
      a: "Setiap halaman mengikuti dimensi piksel gambarnya, sehingga rasio aspek tetap benar. Untuk hasil A4 yang seragam, gunakan aplikasi PDF Editor.",
    },
    {
      q: "Apakah ini berfungsi di iPhone dan Android?",
      a: "Ya, di browser ponsel modern mana pun. Untuk penggunaan yang sering, aplikasi PDF Editor lebih cepat dan mendukung foto HEIC langsung dari galeri kamera Anda.",
    },
  ],
  appCta: {
    heading: "Butuh alat ini setiap minggu, dari ponsel?",
    sub: "PDF Editor untuk iPhone dan Android memindai, mengatur, dan menandatangani PDF secara offline.",
  },
};

export default content;
