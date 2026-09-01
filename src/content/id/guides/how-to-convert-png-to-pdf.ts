import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-png-to-pdf",
  h1: "Cara Mengonversi PNG ke PDF untuk Tangkapan Layar dan Grafik yang Tajam",
  description:
    "Ubah tangkapan layar, diagram, dan grafik PNG menjadi satu PDF di browser. Alasan PNG membuat teks tetap tajam, dan yang terjadi pada transparansi.",
  updated: "2026-05-23",
  intro: [
    "PNG adalah format yang Anda dapatkan saat mengambil tangkapan layar, mengekspor sebuah grafik, atau menyimpan gambar dengan tepi tajam. Berbeda dari JPG, formatnya lossless, jadi teks dan garis halus tetap tajam alih-alih kabur karena kompresi. Itu membuat PNG titik awal yang tepat saat Anda ingin menggabungkan tangkapan layar atau diagram menjadi PDF yang tetap terbaca.",
    "Panduan ini memakai alat gratis Gambar ke PDF untuk menggabungkan file PNG menjadi satu dokumen, langsung di browser Anda tanpa apa pun yang diunggah. Kegunaan tipikalnya: rangkaian tangkapan layar antarmuka untuk ditinjau, grafik hasil ekspor untuk laporan, atau sebuah gambar yang perlu jadi file yang bisa dicetak dan dibagikan, bukan sekadar gambar lepas.",
    "Ada satu keunikan khas PNG yang layak diketahui, yaitu transparansi, dan kita akan membahas apa yang terjadi padanya saat PNG menjadi halaman PDF.",
  ],
  steps: [
    {
      title: "Buka alat Gambar ke PDF",
      body: "Buka alat Gambar ke PDF di browser Anda. Alat ini menangani PNG, JPG, dan WebP, serta berjalan sepenuhnya di perangkat Anda tanpa unggah atau akun.",
    },
    {
      title: "Tambahkan file PNG Anda",
      body: "Seret tangkapan layar atau grafik ke zona unggah, atau klik untuk memilihnya. Setiap PNG menjadi satu halaman di PDF hasilnya.",
    },
    {
      title: "Urutkan halamannya",
      body: "Gunakan panah atas dan bawah untuk menyusun tangkapan layar ke urutan yang menceritakan alurnya, langkah satu sebelum langkah dua.",
    },
    {
      title: "Buat PDF-nya",
      body: "Klik \"Buat PDF\". Alat ini menempatkan setiap gambar di halamannya sendiri sesuai dimensi gambar, dan membangun file gabungannya secara lokal.",
    },
    {
      title: "Unduh dokumennya",
      body: "PDF-nya otomatis terunduh. Ubah namanya sesuai isinya supaya mudah ditemukan dan jelas bagi siapa pun yang membukanya.",
    },
    {
      title: "Periksa ketajaman halamannya",
      body: "Buka PDF-nya dan perbesar teks apa pun. PNG menjaga huruf tetap tajam, jadi tangkapan layar dasbor, kode, atau ketentuan seharusnya tetap terbaca.",
    },
  ],
  tips: [
    "PNG adalah pilihan yang lebih baik daripada JPG kapan pun gambarnya berisi teks, antarmuka, atau garis tajam, kompresi JPG melembutkan justru tepi-tepi itu.",
    "Area transparan pada PNG tidak tetap transparan di halaman PDF; area itu dirender dengan latar putih. Jika Anda merancang logo dengan latar transparan, hasilnya akan berada di atas putih, yang biasanya tidak masalah.",
    "Tangkapan layar satu halaman penuh bisa jadi tinggi dan sempit. Tetap terkonversi dengan baik, tapi pertimbangkan memotong ke bagian yang penting supaya halamannya tidak sebagian besar kosong.",
    "File PNG lebih besar daripada JPG untuk gambar yang sama. Rangkaian panjang tangkapan layar beresolusi tinggi bisa menghasilkan PDF yang berat, kompres jika hasilnya akan dikirim lewat email.",
    "Untuk ukuran halaman yang seragam (semuanya disesuaikan ke A4) alih-alih halaman berukuran sesuai tiap gambar, aplikasi PDF Editor memberi Anda kontrol itu.",
  ],
  mobileNote:
    "Tangkapan layar menumpuk di HP. Aplikasi PDF Editor mengubah sekumpulan tangkapan layar menjadi satu PDF dalam beberapa ketukan, dan membiarkan Anda memberi anotasi atau menyorot bagian penting sebelum membagikannya, berguna untuk laporan bug dan tinjauan cepat saat bepergian.",
  faq: [
    {
      q: "Kenapa pilih PNG dibanding JPG untuk sebuah PDF?",
      a: "PNG bersifat lossless, jadi teks, tangkapan layar, dan diagram tetap tajam. JPG bersifat lossy dan melembutkan tepi halus. Jika gambar Anda berisi huruf atau antarmuka, PNG menghasilkan PDF yang lebih bersih.",
    },
    {
      q: "Apa yang terjadi pada latar belakang transparan?",
      a: "Halaman PDF tidak transparan, jadi area transparan dirender dengan latar putih. Logo atau ikon dengan latar transparan akan begitu saja berada di atas halaman putih.",
    },
    {
      q: "Apakah file saya diunggah?",
      a: "Tidak. Semuanya berjalan di browser Anda, di perangkat Anda. Tangkapan layar dan grafik Anda tidak pernah meninggalkannya.",
    },
    {
      q: "Bisakah saya mencampur PNG dan JPG dalam satu PDF?",
      a: "Bisa. Alat ini menerima PNG, JPG, dan WebP sekaligus, jadi Anda bisa menggabungkan tangkapan layar, foto, dan grafik hasil ekspor menjadi satu dokumen.",
    },
    {
      q: "PDF-nya jadi besar, apa yang bisa saya lakukan?",
      a: "Halaman PNG memang berat. Jalankan filenya lewat alat Kompres PDF agar masuk batas email dan unggahan, dengan sedikit kompromi pada kualitas.",
    },
  ],
  related: [
    { label: "Gambar ke PDF — gabungkan PNG di browser Anda", path: "/image-to-pdf" },
    { label: "PDF ke Gambar — proses sebaliknya", path: "/pdf-to-images" },
    { label: "Cara mengonversi JPG ke PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Cara mengonversi WebP ke PDF", path: "/guides/how-to-convert-webp-to-pdf" },
  ],
  parentHub: { label: "Konverter PDF", path: "/pdf-converter" },
};

export default content;
