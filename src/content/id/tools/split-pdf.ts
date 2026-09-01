import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "split-pdf",
  hero: {
    eyebrow: "Bagi PDF",
    h1: "Ekstrak halaman dari PDF — secara privat, di browser Anda.",
    highlight: "di browser Anda",
    lead: "Tambahkan file PDF dan pilih rentang halaman yang ingin Anda ekspor. Gunakan rentang seperti 1-3,5,8-10. File Anda tetap berada di perangkat Anda.",
  },
  privacyNote:
    "File Anda diproses secara lokal di browser Anda dan tidak diunggah ke server kami. Tidak ada yang meninggalkan perangkat Anda.",
  howTo: {
    heading: "Cara membagi PDF",
    steps: [
      {
        title: "Tambahkan PDF Anda",
        body: "Seret dan lepas satu file PDF, atau klik untuk memilihnya.",
      },
      {
        title: "Masukkan rentang halaman",
        body: "Ketik halaman dan rentang yang dipisahkan koma. Contoh: 1-3,5,8-10.",
      },
      {
        title: "Bagi",
        body: "Klik Ekstrak Halaman. Kami membuat PDF baru berisi hanya halaman tersebut, secara lokal.",
      },
      {
        title: "Unduh",
        body: "PDF baru terunduh secara otomatis. Ganti namanya setelah disimpan.",
      },
    ],
  },
  useCases: {
    heading: "Kapan membagi adalah pilihan yang tepat",
    items: [
      {
        title: "Kirim hanya halaman yang relevan",
        body: "Bagikan hanya klausul kontrak yang penting, bukan seluruh dokumen.",
      },
      {
        title: "Pisahkan sebuah batch hasil pindaian",
        body: "Pecah pindaian yang berisi banyak dokumen kembali menjadi file-file terpisah.",
      },
      {
        title: "Ambil satu halaman dari sebuah laporan",
        body: "Ekstrak satu grafik atau tabel tanpa menampilkan sisa file.",
      },
      {
        title: "Buat lampiran yang lebih rapi",
        body: "Buang halaman sampul, halaman kosong, atau lampiran sebelum dikirim lewat email.",
      },
    ],
  },
  limitations: {
    heading: "Keterbatasan",
    items: [
      {
        title: "PDF yang dilindungi kata sandi",
        body: "File yang terkunci tidak dapat dibagi di browser. Buka kuncinya dulu, atau gunakan aplikasi PDF Editor.",
      },
      {
        title: "File yang sangat besar",
        body: "Browser bisa kehabisan memori pada dokumen di atas beberapa ratus megabyte.",
      },
      {
        title: "Tidak ada output per rentang terpisah",
        body: "Alat ini mengekspor satu PDF gabungan berisi halaman-halaman terpilih. Untuk beberapa file output, jalankan dua kali.",
      },
    ],
  },
  related: [
    { label: "Gabung PDF — kebalikannya", path: "/merge-pdf" },
    { label: "Putar Halaman PDF", path: "/rotate-pdf" },
    { label: "PDF ke Gambar", path: "/pdf-to-images" },
    { label: "Kompres PDF", path: "/compress-pdf" },
    { label: "Ekstrak Halaman PDF", path: "/extract-pdf-pages" },
    { label: "Urutkan Ulang Halaman PDF", path: "/reorder-pdf-pages" },
    { label: "Semua Alat PDF Gratis", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Apakah file saya diunggah ke server?",
      a: "Tidak. Proses pembagian berjalan sepenuhnya di browser Anda. File Anda tidak pernah meninggalkan perangkat Anda.",
    },
    {
      q: "Apa sintaks untuk rentang halaman?",
      a: "Halaman dan rentang yang dipisahkan koma. Contoh: 1-3,5,8-10 mempertahankan halaman 1, 2, 3, 5, 8, 9, dan 10.",
    },
    {
      q: "Bisakah saya membagi PDF yang dilindungi kata sandi?",
      a: "Tidak bisa di browser. Hapus dulu kata sandinya, atau gunakan aplikasi PDF Editor di ponsel.",
    },
    {
      q: "Apakah hasilnya mempertahankan kualitas asli?",
      a: "Ya, halaman disalin byte demi byte. Tanpa render ulang, tanpa penurunan kualitas.",
    },
  ],
  appCta: {
    heading: "Perlu membagi PDF saat bepergian?",
    sub: "PDF Editor untuk iPhone dan Android membagi dan menggabungkan PDF langsung dari ponsel Anda.",
  },
};

export default content;
