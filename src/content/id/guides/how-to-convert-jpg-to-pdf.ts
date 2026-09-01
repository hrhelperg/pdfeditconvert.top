import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-jpg-to-pdf",
  h1: "Cara Mengonversi JPG ke PDF, Gratis dari Gambar ke PDF",
  description:
    "Gabungkan satu atau banyak foto JPG menjadi satu PDF di browser. Cocok untuk struk, kartu identitas, dan dokumen hasil foto, lengkap dengan catatan jujur soal kualitas dan HEIC di iPhone.",
  updated: "2026-05-23",
  intro: [
    "JPG adalah format yang diberikan kamera Anda dan sebagian besar situs web, itulah yang membuatnya titik awal paling umum untuk \"ubah ini jadi PDF\". Alasan orang mengonversinya hampir selalu sama: satu JPG canggung untuk dikirim sebagai dokumen. Beberapa JPG sekaligus lebih merepotkan lagi, lima foto struk terpisah dalam satu email adalah sesuatu yang diam-diam bikin kesal akuntan. Satu PDF, dengan halaman berurutan, adalah yang sebenarnya ingin diterima orang.",
    "Panduan ini memakai alat gratis Gambar ke PDF, yang menggabungkan file JPG menjadi satu PDF langsung di browser Anda, tanpa apa pun yang diunggah. Cocok untuk struk, foto kartu identitas, tangkapan layar, dan gambar dokumen kertas yang perlu Anda kumpulkan dan kirim.",
    "JPG adalah format foto yang mengalami kompresi lossy, jadi ada baiknya Anda tahu apa yang tetap bersih dan apa yang tidak sebelum mengandalkannya untuk sesuatu yang harus tetap terbaca.",
  ],
  steps: [
    {
      title: "Buka alat Gambar ke PDF",
      body: "Buka alat Gambar ke PDF di browser Anda. Alat ini menerima JPG, PNG, dan WebP serta berjalan sepenuhnya di perangkat Anda, tanpa unggah, tanpa akun.",
    },
    {
      title: "Tambahkan file JPG Anda",
      body: "Seret foto Anda ke zona unggah atau klik untuk memilihnya. Tambahkan sebanyak yang Anda butuhkan; setiap gambar menjadi satu halaman PDF.",
    },
    {
      title: "Susun ke urutan yang benar",
      body: "Gunakan panah atas dan bawah pada setiap baris untuk mengurutkan halaman. Untuk dokumen multihalaman, ini langkah yang paling penting, halaman dua sebuah kontrak harus berada setelah halaman satu.",
    },
    {
      title: "Buat PDF-nya",
      body: "Klik \"Buat PDF\". Setiap gambar ditempatkan di halamannya sendiri dengan ukuran menyesuaikan foto, dan file gabungannya dibuat secara lokal.",
    },
    {
      title: "Unduh dan ubah namanya",
      body: "PDF-nya otomatis terunduh. Beri nama yang deskriptif sebelum dikirim, \"Struk-Maret.pdf\" jauh lebih baik daripada \"IMG_4821.pdf\" di kotak masuk seseorang.",
    },
    {
      title: "Kompres jika akan dikirim lewat email",
      body: "PDF berbasis foto cepat membesar. Jika filenya melebihi batas lampiran umum 25 MB, jalankan lewat alat Kompres PDF sebelum dikirim.",
    },
  ],
  tips: [
    "Potong dan luruskan setiap foto sebelum dikonversi. Alat ini mengatur ukuran halaman sesuai gambar, jadi foto yang miring berarti halaman yang miring.",
    "Pencahayaan yang bagus dan merata mengalahkan filter apa pun untuk foto dokumen. Hindari bayangan dari tangan atau HP Anda sendiri yang jatuh di atas halaman.",
    "JPG mengompres foto dengan baik tapi mengaburkan teks kecil dan tepi yang tajam. Untuk tangkapan layar atau apa pun dengan huruf yang tajam, PNG menjaga teks lebih bersih, lihat panduan PNG ke PDF.",
    "Foto iPhone sering tersimpan sebagai HEIC, bukan JPG. Alat berbasis browser membutuhkan JPG, PNG, atau WebP, jadi ubah kamera Anda ke \"Paling Kompatibel\" di Pengaturan, atau gunakan aplikasi PDF Editor, yang membaca HEIC langsung.",
    "Foto sebuah dokumen bukan pindaian yang dapat dicari, tidak ada lapisan teks, jadi Anda tidak bisa mencari atau menyalin kata-katanya. Gunakan alur pemindaian jika itu penting.",
  ],
  mobileNote:
    "Kebanyakan JPG lahir di HP, dan di situlah aplikasi PDF Editor unggul: mengambil foto langsung dari galeri kamera (termasuk HEIC), mengubahnya menjadi PDF, dan bisa memindai halaman baru dengan deteksi tepi, tanpa perlu berpindah ke komputer.",
  faq: [
    {
      q: "Bisakah saya menggabungkan beberapa JPG menjadi satu PDF?",
      a: "Bisa, itulah kegunaan utamanya. Tambahkan semua gambar Anda, seret ke urutan yang benar, dan semuanya menjadi halaman berurutan dalam satu PDF.",
    },
    {
      q: "Apakah foto saya diunggah ke suatu tempat?",
      a: "Tidak. Konversinya berjalan di browser Anda, di perangkat Anda sendiri. Gambar Anda tidak pernah meninggalkannya, penting untuk kartu identitas dan dokumen pribadi.",
    },
    {
      q: "Foto iPhone saya tidak mau dimuat, kenapa?",
      a: "Kemungkinan besar itu file HEIC, yang tidak dibaca alat berbasis browser. Ubah format kamera Anda ke \"Paling Kompatibel\" di Pengaturan → Kamera → Format, atau gunakan aplikasi PDF Editor, yang menangani HEIC.",
    },
    {
      q: "Apakah PDF-nya akan dapat dicari?",
      a: "Tidak. Foto yang dikonversi adalah gambar tanpa lapisan teks, jadi kata-katanya tidak bisa dicari atau dipilih. Untuk dokumen yang dapat dicari, pindai dengan pengenalan teks memakai aplikasi PDF Editor.",
    },
    {
      q: "Kenapa PDF saya begitu besar?",
      a: "Foto HP beresolusi tinggi berukuran besar, dan beberapa di antaranya cepat menumpuk. Jalankan hasilnya lewat alat Kompres PDF agar masuk batas email dan unggahan.",
    },
  ],
  related: [
    { label: "Gambar ke PDF — gabungkan JPG di browser Anda", path: "/image-to-pdf" },
    { label: "Kompres PDF — perkecil hasilnya untuk email", path: "/compress-pdf" },
    { label: "Cara mengonversi PNG ke PDF", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "Cara mengonversi foto ke PDF di iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Konverter PDF", path: "/pdf-converter" },
};

export default content;
