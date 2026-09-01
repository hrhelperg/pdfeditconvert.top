import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "reorder-pdf-pages",
  hero: {
    eyebrow: "Urutkan Ulang Halaman PDF",
    h1: "Urutkan ulang halaman PDF — di browser Anda.",
    highlight: "di browser Anda",
    lead: "Tambahkan file PDF, lihat pratinjau setiap halaman, pindahkan halaman ke urutan yang Anda inginkan, lalu unduh file yang sudah disusun ulang. Tidak ada yang diunggah ke server.",
  },
  privacyNote:
    "File Anda diproses secara lokal di browser Anda dan tidak diunggah ke server kami. Tidak ada yang meninggalkan perangkat Anda.",
  howTo: {
    heading: "Cara mengurutkan ulang halaman PDF",
    steps: [
      {
        title: "Tambahkan PDF Anda",
        body: "Seret dan lepas PDF, atau klik untuk memilih satu dari perangkat Anda.",
      },
      {
        title: "Periksa pratinjau",
        body: "Setiap halaman dirender sebagai thumbnail sehingga Anda bisa melihat persis apa yang sedang dipindahkan.",
      },
      {
        title: "Pindahkan halaman",
        body: "Gunakan panah atas/bawah pada setiap halaman untuk memindahkannya lebih awal atau lebih akhir dalam dokumen.",
      },
      {
        title: "Buat & unduh",
        body: "Klik Urutkan Ulang PDF. PDF yang sudah disusun ulang dibuat secara lokal dan terunduh secara otomatis.",
      },
    ],
  },
  useCases: {
    heading: "Kapan mengurutkan ulang membantu",
    items: [
      {
        title: "Perbaiki urutan hasil pindaian",
        body: "Aplikasi ponsel dan pemindai sering menangkap halaman secara tidak berurutan; perbaiki dulu sebelum dibagikan.",
      },
      {
        title: "Pindahkan sampul atau lampiran",
        body: "Tarik halaman sampul ke depan atau dorong materi pendukung ke belakang.",
      },
      {
        title: "Susun ulang file hasil gabungan",
        body: "Setelah menggabungkan dokumen, susun halaman ke urutan baca yang persis Anda butuhkan.",
      },
      {
        title: "Persiapan untuk cetak",
        body: "Atur halaman untuk buklet, materi bagikan, atau cetak bolak-balik.",
      },
    ],
  },
  limitations: {
    heading: "Keterbatasan yang jujur",
    items: [
      {
        title: "PDF yang dilindungi kata sandi",
        body: "File terenkripsi tidak dapat dibuka di browser. Buka kuncinya dulu, atau gunakan aplikasi PDF Editor di ponsel.",
      },
      {
        title: "PDF yang sangat besar",
        body: "Merender thumbnail untuk setiap halaman membutuhkan memori. Ratusan halaman bisa membuatnya lambat atau mencapai batas browser.",
      },
      {
        title: "Thumbnail butuh waktu sebentar",
        body: "Pratinjau dirender halaman demi halaman di perangkat Anda, sehingga PDF besar butuh beberapa detik sebelum Anda bisa mengurutkan ulang.",
      },
    ],
  },
  related: [
    { label: "Gabung PDF", path: "/merge-pdf" },
    { label: "Bagi PDF", path: "/split-pdf" },
    { label: "Putar Halaman PDF", path: "/rotate-pdf" },
    { label: "Ekstrak Halaman PDF", path: "/extract-pdf-pages" },
  ],
  faq: [
    {
      q: "Apakah file saya diunggah ke server?",
      a: "Tidak. PDF dirender dan dibangun ulang sepenuhnya di browser Anda. File Anda tidak pernah meninggalkan perangkat Anda.",
    },
    {
      q: "Bisakah saya menyeret halaman untuk mengurutkan ulang?",
      a: "Pengurutan ulang menggunakan tombol atas/bawah yang jelas pada setiap halaman. Ini bekerja dengan andal di ponsel maupun desktop, tanpa pegangan seret kecil yang merepotkan.",
    },
    {
      q: "Apakah konten atau kualitas halaman berubah?",
      a: "Tidak. Halaman disalin persis apa adanya. Hanya urutannya yang berubah. Teks tetap dapat dipilih.",
    },
    {
      q: "Mengapa butuh waktu sebentar setelah menambahkan file?",
      a: "Setiap halaman dirender menjadi thumbnail pratinjau secara lokal sehingga Anda bisa melihat apa yang sedang dipindahkan. PDF yang lebih besar butuh sedikit lebih lama.",
    },
    {
      q: "Bisakah saya mengurutkan ulang PDF yang dilindungi kata sandi?",
      a: "Tidak bisa di browser. Hapus dulu kata sandinya, atau gunakan aplikasi PDF Editor yang mendukung file terproteksi.",
    },
  ],
  appCta: {
    heading: "Butuh alat PDF saat bepergian?",
    sub: "PDF Editor untuk iPhone dan Android mengurutkan ulang, menggabungkan, dan menandatangani PDF langsung dari ponsel Anda.",
  },
};

export default content;
