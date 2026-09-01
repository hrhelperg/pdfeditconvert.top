import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "compress-pdf",
  hero: {
    eyebrow: "Kompres PDF",
    h1: "Perkecil ukuran PDF — di browser Anda.",
    highlight: "di browser Anda",
    lead: "Perkecil ukuran PDF agar muat dalam batas lampiran email dan batas unggahan. Pilih tingkat kompresi, lihat persis berapa banyak ruang yang dihemat, lalu unduh. File Anda tidak pernah meninggalkan perangkat Anda.",
  },
  privacyNote:
    "File Anda diproses secara lokal di browser Anda dan tidak diunggah ke server kami. Tidak ada yang meninggalkan perangkat Anda.",
  howTo: {
    heading: "Cara mengompres PDF",
    steps: [
      {
        title: "Tambahkan PDF Anda",
        body: "Seret dan lepas PDF, atau klik untuk memilih satu dari perangkat Anda.",
      },
      {
        title: "Pilih tingkat kompresi",
        body: "Rendah mempertahankan detail terbanyak; Direkomendasikan menyeimbangkan ukuran dan kualitas; Kuat menghasilkan file terkecil.",
      },
      {
        title: "Kompres",
        body: "Klik Kompres PDF. Halaman dirender ulang dan dienkode ulang secara lokal di browser Anda.",
      },
      {
        title: "Unduh",
        body: "Lihat perbandingan ukuran sebelum/sesudah beserta persentase pengurangannya, lalu unduh file yang lebih kecil.",
      },
    ],
  },
  useCases: {
    heading: "Kapan kompresi paling membantu",
    items: [
      {
        title: "Batas ukuran email",
        body: "Buat kontrak hasil pindaian atau brosur muat di bawah batas lampiran 10 MB atau 25 MB.",
      },
      {
        title: "Formulir dan portal unggahan",
        body: "Portal pemerintah dan SDM sering menolak file berukuran lebih dari beberapa megabyte. Kompresi ini mengatasi masalah tersebut.",
      },
      {
        title: "Dokumen hasil pindaian",
        body: "Pindaian dari ponsel berukuran sangat besar. PDF yang penuh gambar dapat mengecil drastis dengan kompresi kuat.",
      },
      {
        title: "Penyimpanan dan berbagi",
        body: "Jaga arsip tetap ringkas dan buat tautan lebih cepat diunduh oleh penerima.",
      },
    ],
  },
  limitations: {
    heading: "Keterbatasan yang jujur",
    items: [
      {
        title: "Teks menjadi gambar",
        body: "Kompresi merender ulang setiap halaman sebagai gambar, sehingga teks pada hasilnya tidak lagi dapat dipilih atau dicari. Simpan file asli jika Anda membutuhkan fungsi itu.",
      },
      {
        title: "PDF berisi teks saja hampir tidak mengecil",
        body: "Jika PDF sudah sebagian besar berupa teks atau grafik vektor, hanya sedikit yang bisa dikompres. Dalam kasus ini, kami tetap mempertahankan file asli Anda, bukan mengembalikan file yang lebih besar.",
      },
      {
        title: "PDF sangat besar atau terkunci",
        body: "Browser kehabisan memori jauh lebih cepat daripada aplikasi native. PDF yang dilindungi kata sandi tidak dapat diproses di browser. Gunakan aplikasi PDF Editor di ponsel.",
      },
    ],
  },
  related: [
    { label: "Gabung PDF", path: "/merge-pdf" },
    { label: "Bagi PDF", path: "/split-pdf" },
    { label: "Ekstrak Halaman PDF", path: "/extract-pdf-pages" },
    { label: "Semua Alat PDF Gratis", path: "/pdf-tools" },
    { label: "Panduan: cara mengompres PDF", path: "/guides/how-to-compress-pdf" },
  ],
  faq: [
    {
      q: "Apakah file saya diunggah ke server?",
      a: "Tidak. Kompresi berjalan sepenuhnya di browser Anda menggunakan CPU perangkat Anda. File Anda tidak pernah meninggalkan perangkat Anda.",
    },
    {
      q: "Seberapa besar PDF saya akan mengecil?",
      a: "Tergantung isinya. PDF hasil pindaian dan yang penuh gambar sering mengecil 50–90%. PDF berisi teks saja mungkin tidak mengecil sama sekali. Dalam kasus ini kami tetap mempertahankan file asli Anda.",
    },
    {
      q: "Apakah kualitasnya akan menurun?",
      a: "Ya, sedikit. Ini adalah kompresi lossy. Tingkat yang lebih rendah mempertahankan lebih banyak detail. Kami tidak pernah mengklaim 'tanpa penurunan kualitas'; pilih tingkat yang menurut Anda cukup baik.",
    },
    {
      q: "Mengapa teks tidak lagi dapat dipilih setelah dikompres?",
      a: "Untuk benar-benar menghemat ukuran di browser, setiap halaman diubah menjadi gambar. Jika Anda membutuhkan teks yang dapat dipilih, simpan file asli atau gunakan tingkat kompresi yang lebih ringan.",
    },
    {
      q: "Bisakah saya mengompres PDF yang dilindungi kata sandi?",
      a: "Tidak bisa di browser. Hapus dulu kata sandinya, atau gunakan aplikasi PDF Editor yang mendukung file terproteksi.",
    },
  ],
  appCta: {
    heading: "Butuh alat PDF saat bepergian?",
    sub: "PDF Editor untuk iPhone dan Android mengompres, menandatangani, dan membagikan PDF langsung dari ponsel Anda.",
  },
};

export default content;
