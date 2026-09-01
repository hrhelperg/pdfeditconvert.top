import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "add-watermark-to-pdf",
  hero: {
    eyebrow: "Tambah Watermark",
    h1: "Tambahkan watermark teks ke setiap halaman PDF.",
    highlight: "setiap halaman",
    lead: "Tambahkan watermark teks sederhana sebelum membagikan PDF Anda: pilih posisi, opasitas, ukuran font, dan rotasi.",
  },
  privacyNote:
    "File Anda diproses secara lokal di browser Anda dan tidak diunggah ke server kami. Tidak ada yang meninggalkan perangkat Anda.",
  howTo: {
    heading: "Cara menambahkan watermark",
    steps: [
      {
        title: "Tambahkan PDF Anda",
        body: "Seret dan lepas satu file PDF, atau klik untuk memilihnya.",
      },
      {
        title: "Ketik watermark Anda",
        body: "Maksimal sekitar 40 karakter memberikan hasil terbaik. Contoh: RAHASIA, DRAF, Contoh.",
      },
      {
        title: "Sesuaikan opasitas dan sudut",
        body: "Opasitas lebih rendah untuk efek halus, lebih tinggi untuk efek mencolok. Sudut 45° cocok untuk sebagian besar tata letak.",
      },
      {
        title: "Unduh",
        body: "Kami membuat ulang PDF secara lokal dengan watermark di setiap halaman.",
      },
    ],
  },
  useCases: {
    heading: "Kapan watermark berguna",
    items: [
      {
        title: "Draf dalam peninjauan",
        body: "Tandai dokumen sebagai DRAF sebelum diedarkan agar tidak membingungkan.",
      },
      {
        title: "Kebocoran dokumen rahasia",
        body: "Bubuhkan cap RAHASIA sebelum membagikan kontrak atau data finansial yang sensitif.",
      },
      {
        title: "Materi contoh",
        body: "Beri watermark pada contoh portofolio Anda agar tidak dapat digunakan ulang tanpa izin.",
      },
      {
        title: "Dokumen khusus internal",
        body: "Tandai dokumen yang tidak ditujukan untuk didistribusikan ke luar.",
      },
    ],
  },
  limitations: {
    heading: "Keterbatasan",
    items: [
      {
        title: "Hanya watermark teks",
        body: "Alat ini hanya membubuhkan teks. Untuk watermark gambar atau logo, gunakan aplikasi PDF Editor di ponsel.",
      },
      {
        title: "Hanya font standar",
        body: "Kami menggunakan font Helvetica bawaan agar hasilnya tetap portabel. Font kustom tidak disematkan.",
      },
      {
        title: "Watermark bisa dihapus",
        body: "Watermark bukan perlindungan hukum. Ini mencegah penyalahgunaan biasa, bukan penyuntingan yang disengaja.",
      },
    ],
  },
  related: [
    { label: "Gabung PDF", path: "/merge-pdf" },
    { label: "Bagi PDF", path: "/split-pdf" },
    { label: "Putar PDF", path: "/rotate-pdf" },
    { label: "Semua Alat PDF Gratis", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Apakah file saya diunggah ke server?",
      a: "Tidak. Pembuatan watermark berjalan sepenuhnya di browser Anda; tidak ada yang meninggalkan perangkat Anda.",
    },
    {
      q: "Bisakah saya menggunakan font lain?",
      a: "Tidak di alat ini. Kami menggunakan Helvetica agar hasilnya tetap portabel. Untuk font kustom, gunakan aplikasi PDF Editor di ponsel.",
    },
    {
      q: "Apakah watermark diterapkan di setiap halaman?",
      a: "Ya. Teks yang sama diletakkan secara diagonal di tengah setiap halaman.",
    },
    {
      q: "Bisakah watermark dihapus?",
      a: "Oleh orang yang punya alat yang tepat, bisa. Watermark mencegah penyalahgunaan biasa, tapi bukan fitur keamanan.",
    },
  ],
  appCta: {
    heading: "Butuh watermark gambar atau logo?",
    sub: "PDF Editor untuk iPhone dan Android mendukung font kustom, gambar, dan penempatan per halaman.",
  },
};

export default content;
