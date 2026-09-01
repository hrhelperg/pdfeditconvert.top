import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-documents-to-pdf",
  h1: "Cara Memindai Dokumen ke PDF dengan HP",
  description:
    "Gunakan kamera HP untuk memindai dokumen multihalaman menjadi PDF yang rapi. Alur kerja mobile dengan deteksi tepi otomatis dan OCR.",
  updated: "2026-05-11",
  intro: [
    "HP menjadi pemindai dokumen yang sangat baik begitu Anda berhenti memakai aplikasi kamera bawaan. Aplikasi yang tepat menangani deteksi tepi, koreksi perspektif, penyesuaian kontras, dan OCR, mengubah foto yang diambil dengan tangan menjadi PDF yang bersih dan dapat dicari, terlihat seperti hasil pindaian sungguhan, bukan sekadar jepretan.",
    "Panduan ini membahas alur kerja pemindaian dokumen di aplikasi PDF Editor pada iPhone atau Android. Kedua platform menghasilkan hasil yang setara. Kita akan membahas kasus sehari-hari: struk, formulir yang sudah ditandatangani, kontrak multihalaman, kartu identitas, dan saat-saat memindai dengan HP lebih baik daripada berjalan ke pemindai flatbed.",
    "Di akhir panduan, Anda akan punya rutinitas pemindaian yang bisa diulang, tetap berfungsi dalam pencahayaan yang kurang ideal, menghasilkan file yang diterima tanpa pertanyaan oleh akuntan dan tim hukum, dan tetap seluruhnya di perangkat.",
  ],
  steps: [
    {
      title: "Buka pemindai",
      body: "Ketuk kotak \"Pindai\" di layar utama aplikasi PDF Editor. Jendela bidik kamera terbuka dengan deteksi tepi otomatis aktif.",
    },
    {
      title: "Letakkan dokumen di permukaan yang kontras",
      body: "Deteksi tepi bekerja paling baik saat ada kontras jelas antara halaman dan permukaan di belakangnya. Letakkan kertas putih di permukaan gelap atau sebaliknya.",
    },
    {
      title: "Arahkan HP ke atas halaman",
      body: "Pegang HP kira-kira tepat di atas dokumen. Aplikasi ini menggambar garis luar biru di sekeliling tepi yang terdeteksi. Saat garis luarnya stabil, foto akan diambil otomatis.",
    },
    {
      title: "Pengambilan otomatis atau ketuk manual",
      body: "Kamera akan berkedip dan mengambil gambar saat framing-nya sudah tepat. Jika pengambilan otomatis gagal mendeteksi tepinya, ketuk tombol ambil manual. Anda selalu bisa menyesuaikan sudutnya setelah itu.",
    },
    {
      title: "Sesuaikan sudut yang terdeteksi",
      body: "Seret gagang di sudut untuk merapikan tepinya jika perlu. Koreksi perspektif berjalan setelah langkah ini, menghasilkan halaman berbentuk persegi panjang dari jepretan yang diambil miring.",
    },
    {
      title: "Terapkan filter",
      body: "Pilih \"Warna\", \"Skala Abu-Abu\", atau \"Hitam-Putih\". Untuk struk dan formulir, Hitam-Putih memperkecil ukuran file secara signifikan tanpa penurunan kualitas. Untuk dokumen dengan foto atau elemen berwarna, tetap gunakan Warna.",
    },
    {
      title: "Tambahkan halaman lain",
      body: "Ketuk penghitung halaman di bagian bawah layar untuk memindai halaman tambahan. Setiap pengambilan baru ditambahkan ke PDF yang sedang dibuat. Urutkan ulang halaman dari strip miniatur jika perlu.",
    },
    {
      title: "Simpan PDF-nya",
      body: "Ketuk \"Selesai\", beri file nama yang jelas, dan simpan. OCR berjalan di latar belakang, membuat PDF hasilnya dapat dicari. Setelah itu Anda bisa membagikan, mencetak, atau mengunggahnya ke cloud drive.",
    },
  ],
  tips: [
    "Pencahayaan yang menyebar dan merata lebih baik daripada cahaya terang dari atas, cahaya langsung menimbulkan pantulan pada kertas mengilap atau formulir yang dilaminasi.",
    "Letakkan dokumen dalam keadaan rata. Halaman yang melengkung (seperti buku terbuka) menyebabkan distorsi teks yang tidak bisa sepenuhnya diperbaiki oleh koreksi perspektif.",
    "Untuk struk, filter \"Hitam-Putih\" biasanya mengurangi ukuran file 60-80% tanpa mengurangi keterbacaan.",
    "Jika Anda memindai kartu identitas atau paspor, simpan PDF hasilnya di folder yang dilindungi kata sandi atau terapkan kata sandi PDF sebelum dibagikan.",
    "Pengambilan otomatis bekerja dalam waktu kurang dari satu detik saat framing-nya bagus. Jika terasa sulit, kemungkinan besar masalahnya ada di pencahayaan atau kontras.",
  ],
  mobileNote:
    "Seluruh alur pindai-dan-simpan memakan waktu kurang dari 30 detik untuk dokumen multihalaman. Dibandingkan berjalan ke pemindai flatbed, mengunduh perangkat lunak pemindai, dan mengelola lampiran email, HP menang telak untuk kebutuhan bisnis sehari-hari. Hasilnya adalah PDF standar yang dapat dicari, sama seperti yang diterima oleh setiap alat akuntansi dan sistem dokumen.",
  faq: [
    {
      q: "Apakah kualitas pindaiannya sebaik pemindai flatbed?",
      a: "Untuk dokumen sehari-hari, struk, kontrak, kartu identitas, formulir, ya, dengan pencahayaan yang tepat dan dokumen yang rata. Untuk pemindaian foto arsip atau cetakan halus di kertas mengilap, pemindai flatbed khusus masih lebih unggul.",
    },
    {
      q: "Bahasa apa saja yang didukung OCR?",
      a: "Semua bahasa berhuruf Latin utama (Inggris, Spanyol, Prancis, Jerman, Italia, Portugis, Belanda, Ceko, Polandia, dll.) plus Sirilik, Yunani, Arab, Mandarin, Jepang, dan Korea. Kualitas pengenalan paling tinggi pada teks cetak yang bersih dan lebih rendah pada tulisan tangan.",
    },
    {
      q: "Bisakah saya memindai kartu identitas atau paspor?",
      a: "Bisa. Aplikasi ini menghasilkan pindaian yang bersih dan sudah diluruskan, siap untuk unggahan KYC atau pengiriman dokumen apa pun. Terapkan kata sandi pada PDF hasilnya jika Anda mengirimnya lewat email.",
    },
    {
      q: "Apakah pemindaian berfungsi secara offline?",
      a: "Ya. Deteksi tepi, koreksi perspektif, dan filter berjalan di perangkat. OCR berjalan secara lokal untuk bahasa-bahasa utama; bahasa yang kurang umum mungkin mengunduh model pengenalan saat pertama kali dipakai.",
    },
    {
      q: "Seberapa besar ukuran PDF hasil pindaian?",
      a: "Dokumen 5 halaman biasa dalam mode B&W biasanya berukuran sekitar 200-400 KB. Pindaian yang sama dalam warna penuh biasanya 1-2 MB. Kompresi bisa memperkecilnya lebih jauh jika Anda perlu mengirimnya lewat email.",
    },
  ],
  related: [
    { label: "Pindai ke PDF — ikhtisar lengkap", path: "/scan-to-pdf" },
    {
      label: "Edit PDF hasil pindaian setelahnya",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "PDF untuk Bisnis", path: "/pdf-for-business" },
  ],
  parentHub: { label: "Pindai ke PDF", path: "/scan-to-pdf" },
};

export default content;
