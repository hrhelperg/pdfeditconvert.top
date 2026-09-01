import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-images",
  hero: {
    eyebrow: "PDF ke Gambar",
    h1: "Ekspor setiap halaman PDF sebagai PNG atau JPG.",
    highlight: "PNG atau JPG",
    lead: "Ubah halaman PDF menjadi file gambar PNG atau JPEG yang bisa diunduh, dihasilkan secara lokal di browser Anda.",
  },
  privacyNote:
    "File Anda dihasilkan secara lokal di browser Anda dan tidak diunggah ke server kami. Tidak ada yang meninggalkan perangkat Anda.",
  howTo: {
    heading: "Cara mengonversi PDF ke gambar",
    steps: [
      {
        title: "Tambahkan PDF Anda",
        body: "Seret dan lepas satu file PDF, atau klik untuk memilihnya.",
      },
      {
        title: "Pilih format",
        body: "Pilih PNG untuk teks yang tajam dan transparansi, atau JPG untuk file yang lebih kecil.",
      },
      {
        title: "Pilih skala",
        body: "Skala lebih tinggi = gambar lebih tajam, file lebih besar. 2× biasanya sudah pas.",
      },
      {
        title: "Unduh",
        body: "Setiap halaman terunduh sebagai gambar terpisah.",
      },
    ],
  },
  useCases: {
    heading: "Kapan alat ini berguna",
    items: [
      {
        title: "Bagikan satu halaman di Slack",
        body: "Pratinjau gambar tampil langsung di dalam pesan, sedangkan PDF tidak.",
      },
      {
        title: "Gunakan ulang grafik di presentasi",
        body: "Ambil satu halaman dan tempelkan ke sebuah slide.",
      },
      {
        title: "Buat thumbnail",
        body: "Susun lembar ringkasan berisi halaman-halaman PDF untuk tinjauan cepat.",
      },
      {
        title: "Pratinjau untuk web",
        body: "Gunakan gambar hasil konversi sebagai pratinjau ringan di sebuah situs web.",
      },
    ],
  },
  limitations: {
    heading: "Keterbatasan",
    items: [
      {
        title: "Memori browser",
        body: "PDF yang sangat besar dengan skala tinggi dapat menghabiskan memori. Coba skala 1,5× atau bagi PDF-nya terlebih dahulu.",
      },
      {
        title: "PDF yang dilindungi kata sandi",
        body: "File terenkripsi tidak dapat dihasilkan. Buka kuncinya dulu, atau gunakan aplikasi PDF Editor di ponsel.",
      },
      {
        title: "Konten vektor menjadi raster",
        body: "Gambar tidak mempertahankan teks yang dapat dicari. Simpan PDF aslinya untuk keperluan itu.",
      },
    ],
  },
  related: [
    { label: "Gambar ke PDF — kebalikannya", path: "/image-to-pdf" },
    { label: "Bagi PDF", path: "/split-pdf" },
    { label: "Semua Alat PDF Gratis", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Apakah file saya diunggah ke server?",
      a: "Tidak. Proses ini berjalan sepenuhnya di browser Anda; tidak ada yang meninggalkan perangkat Anda.",
    },
    {
      q: "PNG atau JPG, mana yang harus saya pilih?",
      a: "PNG lebih tajam untuk teks dan mendukung transparansi. JPG lebih kecil dan cocok untuk foto serta screenshot satu halaman penuh.",
    },
    {
      q: "Apa arti skala?",
      a: "Berapa banyak piksel gambar per titik PDF. 2× menghasilkan gambar tajam di layar retina. 3× lebih besar tapi sangat detail.",
    },
    {
      q: "Bisakah saya mendapatkan satu file ZIP berisi semua halaman?",
      a: "Belum bisa. Halaman diunduh satu per satu. Untuk ekspor massal, aplikasi PDF Editor di ponsel lebih cepat.",
    },
  ],
  appCta: {
    heading: "Butuh alat PDF bahkan saat offline?",
    sub: "PDF Editor untuk iPhone dan Android menghasilkan halaman secara instan dengan akselerasi perangkat keras.",
  },
};

export default content;
