import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-wont-my-pdf-open",
  h1: "Mengapa PDF Saya Tidak Mau Terbuka? Penyebab dan Solusi Praktis",
  description:
    "PDF yang menolak terbuka hampir selalu salah satu dari lima hal. Cara mendiagnosis unduhan yang rusak, kunci kata sandi, bug aplikasi pembaca, dan file lama, serta solusi untuk masing-masing.",
  updated: "2026-05-29",
  intro: [
    "Anda mengklik dua kali sebuah PDF dan tidak terjadi apa-apa. Atau aplikasi pembacanya menampilkan error, macet, atau memunculkan kotak kata sandi yang tidak Anda duga. PDF terasa seharusnya begitu saja berfungsi, dan memang biasanya begitu — jadi saat salah satu tidak berfungsi, ada baiknya tahu daftar singkat penyebabnya.",
    "Sebenarnya hanya ada segelintir penyebab di balik PDF yang membandel: unduhan yang tidak lengkap, file yang dilindungi kata sandi, aplikasi pembaca yang tidak cocok dengan versi PDF-nya, file yang dihasilkan dari ekspor yang bermasalah, atau format file yang cuma terlihat seperti PDF. Masing-masing punya solusi yang spesifik dan bisa diulang.",
    "Panduan ini membahas diagnosisnya satu per satu dalam urutan yang layak diperiksa, dengan alat yang tepat untuk masing-masing. Sebagian besar solusinya soal mengenali masalah mana yang Anda hadapi, bukan mempelajari trik tingkat lanjut.",
  ],
  steps: [
    {
      title: "Unduh ulang file-nya sebelum melakukan apa pun",
      body: "Unduhan yang terpotong adalah alasan paling umum sebuah PDF tidak mau terbuka. Mengambil ulang file-nya memperbaikinya dalam hitungan detik. Kalau masih gagal, ukuran file-nya cocok dengan sumbernya, dan sumbernya masih bisa memuatnya — Anda sudah menyingkirkan kemungkinan unduhan yang rusak.",
    },
    {
      title: "Periksa apakah file-nya dilindungi kata sandi",
      body: "Sebagian aplikasi pembaca menampilkan error umum, bukan permintaan kata sandi. Kalau file-nya berasal dari bank, perusahaan tempat Anda bekerja, atau penyedia layanan hukum, anggap saja ada kata sandinya. Pengirim aslinya akan tahu kata sandinya.",
    },
    {
      title: "Coba aplikasi pembaca PDF yang berbeda",
      body: "Browser, Preview di macOS, Adobe Acrobat, dan aplikasi pembaca mobile semuanya mengurai PDF dengan sedikit cara berbeda. File yang ditolak satu aplikasi pembaca sering terbuka baik-baik saja di aplikasi lain. Kalau tab browser berhasil tapi aplikasi desktop tidak, Anda sedang menghadapi ketidakcocokan versi aplikasi pembaca, bukan file yang rusak.",
    },
    {
      title: "Periksa jenis file yang sebenarnya",
      body: "File yang datang dari email atau chat kadang membawa ekstensi .pdf tapi sebenarnya .docx, .html, gambar, atau ZIP. Membukanya dengan editor teks biasa menampilkan beberapa byte pertamanya. PDF sungguhan dimulai dengan %PDF-. Apa pun selain itu berarti ganti nama atau minta ulang.",
    },
    {
      title: "Perbaiki lewat ekspor ulang bolak-balik",
      body: "Kalau file-nya sebenarnya valid tapi rusak dengan cara yang halus, membukanya di aplikasi pembaca yang masih bisa menampilkannya lalu mencetak-ke-PDF atau mengekspor ulang sering menghasilkan salinan yang bersih. Sebagian objek yang cacat ditulis ulang dan file barunya terbuka di mana saja.",
    },
    {
      title: "Perkecil ukurannya kalau memori jadi batasannya",
      body: "Di HP yang lebih lama, PDF penuh hasil pindaian yang sangat besar bisa gagal terbuka sama sekali. Kompres PDF di browser Anda memperkecil file itu di tempat; salinan yang sudah dikompres terbuka di tempat yang tidak bisa dibuka file aslinya.",
    },
  ],
  tips: [
    "Bandingkan ukuran file yang sudah diunduh dengan yang tercantum dari pengirim. Ketidakcocokan langsung menunjuk ke unduhan yang terpotong.",
    "Kalau browser bisa membuka PDF-nya tapi aplikasi desktop Anda tidak, jadikan browser sebagai default untuk saat ini — Anda tidak kehilangan apa pun dan bisa lanjut.",
    "File yang terbuka di HP tapi gagal di laptop (atau sebaliknya) biasanya masalah versi aplikasi pembaca, bukan file yang rusak. Pilih aplikasi pembaca yang berhasil.",
    "Saat PDF lampiran email berulang kali gagal, coba unduh dari antarmuka webmail, bukan klien desktop — klien terkadang memotong lampiran besar.",
    "Simpan file asli sebelum melakukan perbaikan bolak-balik. Ekspor ulang yang buruk bisa menghilangkan kolom formulir atau anotasi yang masih ada di file aslinya.",
  ],
  mobileNote:
    "Di HP, penyebab paling umum adalah unduhan sebagian lewat koneksi seluler yang tidak stabil. Aplikasi PDF Editor menyimpan file secara lokal dan memungkinkan Anda mengambil ulang dan membuka PDF besar tanpa bergantung pada cache browser, yang sering menjadi tempat terjadinya pemotongan itu.",
  faq: [
    {
      q: "Mengapa PDF saya bilang rusak padahal kata pengirim baik-baik saja?",
      a: "Hampir selalu karena unduhan sebagian. Ambil ulang file-nya; periksa apakah ukuran byte-nya cocok dengan yang dibagikan pengirim. Kalau salinan baru itu terbuka, salinan aslinya tidak lengkap.",
    },
    {
      q: "Aplikasi pembaca saya meminta kata sandi yang tidak saya punya. Apa yang harus dilakukan?",
      a: "Hanya pengirim aslinya yang bisa membagikannya. Tidak ada cara aman untuk melewati kata sandi PDF sungguhan dari sisi penerima, dan alat yang menjanjikan itu sebaiknya dihindari.",
    },
    {
      q: "Mengapa file-nya terbuka di Chrome tapi tidak di Acrobat?",
      a: "Aplikasi pembaca desktop yang lebih lama mungkin tidak mendukung fitur PDF yang lebih baru. Anda bisa terus memakai aplikasi pembaca yang berhasil, atau mengekspor ulang file-nya lewat langkah cetak-ke-PDF untuk menghasilkan salinan yang kompatibel.",
    },
    {
      q: "Apakah ada alat yang begitu saja 'memperbaiki' PDF yang rusak?",
      a: "Kadang — memproses file lewat ekspor ulang (buka, cetak-ke-PDF, simpan) membersihkan masalah struktural kecil. Tapi PDF yang rusak parah biasanya tidak bisa dipulihkan.",
    },
    {
      q: "Apakah mengompres membantu untuk file yang tidak mau terbuka?",
      a: "Hanya kalau penyebabnya memori: PDF penuh hasil pindaian yang sangat besar terkadang gagal di HP yang lebih lama. Kompres PDF membuatnya cukup kecil untuk dimuat. Ini tidak akan memperbaiki file yang rusak secara struktural.",
    },
  ],
  related: [
    { label: "Kompres PDF — perkecil file besar yang tidak mau terbuka", path: "/compress-pdf" },
    { label: "Alat PDF — daftar lengkap perbaikan di browser", path: "/pdf-tools" },
    { label: "Cara memperbaiki file PDF yang rusak", path: "/guides/how-to-fix-a-corrupted-pdf" },
    { label: "Cara mengatasi masalah format PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
  ],
  parentHub: { label: "Alat PDF — gratis, berbasis browser", path: "/pdf-tools" },
};

export default content;
