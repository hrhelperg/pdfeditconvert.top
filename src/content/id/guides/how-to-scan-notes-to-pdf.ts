import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-notes-to-pdf",
  h1: "Cara Memindai Catatan Tulisan Tangan ke PDF (Bersih, Dapat Dicari)",
  description:
    "Ubah halaman catatan kuliah tulisan tangan menjadi PDF multihalaman yang bersih dengan kamera HP. Pengaturan yang menghasilkan hasil pindaian terbaca sejak percobaan pertama.",
  updated: "2026-05-29",
  intro: [
    "Catatan kuliah tulisan tangan masih cara tercepat untuk menangkap isi kelas, dan sebagian besar mahasiswa membiarkannya tetap di kertas alih-alih mendigitalkannya — karena hasil pindaiannya biasanya jelek. Halaman miring, hasil pindaian abu-abu yang pudar, ukuran file yang membengkak, dan waktu yang terbuang untuk memindai ulang yang hasilnya jelek. Semua itu bertumpuk sepanjang semester, dan itulah sebabnya catatan tetap tinggal di buku catatan.",
    "Mendapatkan hasil pindaian yang bersih dari HP sebagian besar soal teknik dan pengaturan, bukan soal aplikasinya. Pencahayaan merata, framing yang lurus, kontras diaktifkan, skala abu-abu bukan warna, dan deteksi tepi jika alat Anda punya fitur itu. Halaman yang ditangkap dengan baik terlihat lebih mirip hasil scanner flatbed daripada sekadar jepretan biasa.",
    "Panduan ini menjelaskan teknik itu secara menyeluruh — kondisi ruangan yang menghasilkan pindaian bagus, pendekatan per halaman, alur kerja multihalaman, dan apa yang harus dilakukan dengan PDF setelah selesai dibuat. Panduan ini mengasumsikan Anda hanya punya HP dan ingin PDF multihalaman yang bersih tanpa membeli scanner.",
  ],
  steps: [
    {
      title: "Siapkan halaman di atas latar yang kontras",
      body: "Kertas bergaris di atas meja gelap. Kertas putih polos di atas kain gelap. Apa pun yang membuat tepi halaman terlihat jelas bagi kamera dan fitur potong-otomatis. Hindari silau; pencahayaan merata lebih baik daripada cahaya yang terlalu terang.",
    },
    {
      title: "Pegang HP sejajar dengan halaman",
      body: "Kamera seharusnya berada tegak lurus di atas halaman, tidak miring. Kemiringan menghasilkan distorsi perspektif yang bisa diperbaiki koreksi otomatis, tapi hasilnya tidak akan pernah sebaik jepretan yang lurus sejak awal.",
    },
    {
      title: "Gunakan aplikasi pemindai dengan deteksi tepi",
      body: "Pindai ke PDF, atau fitur pemindaian di aplikasi PDF Editor, mendeteksi tepi halaman dan memotongnya secara otomatis. Foto biasa dari HP tidak melakukan ini; aplikasi pemindai menghasilkan sesuatu yang mirip hasil scanner flatbed.",
    },
    {
      title: "Beralih ke mode skala abu-abu atau hitam putih",
      body: "Hasil pindaian berwarna dari tinta hitam di atas kertas putih lebih besar ukurannya, lebih berbintik, dan kurang tajam. Skala abu-abu menghasilkan pindaian yang lebih tajam, lebih kecil, dan lebih mudah dibaca. Hitam putih bahkan lebih kecil lagi, tapi kurang fleksibel untuk diedit nanti.",
    },
    {
      title: "Tangkap tiap halaman, lalu gabungkan",
      body: "Alur pemindaian multihalaman menangkap satu per satu halaman lalu menggabungkannya secara otomatis menjadi satu PDF. Jika Anda menangkapnya secara terpisah, Gabungkan PDF menyatukannya sesuai urutan.",
    },
    {
      title: "Potong, putar, dan urutkan ulang saat merapikan",
      body: "Gunakan Urutkan Ulang Halaman PDF jika ada halaman yang tertangkap tidak sesuai urutan. Gunakan Putar PDF untuk jepretan yang miring ke samping. Luangkan semenit untuk merapikan; Anda di masa depan akan berterima kasih pada Anda yang sekarang.",
    },
  ],
  tips: [
    "Pindai semua halaman dulu sebelum mulai merapikan — berpindah-pindah mode terus-menerus akan mengganggu alurnya.",
    "Jika cahaya tidak merata, selembar kertas putih yang dipegang di atas halaman sebagai pemantul cahaya bisa sangat meningkatkan kontras.",
    "Jangan memotong terlalu rapat. Menyisakan sedikit margin di sekitar tepi halaman membuat dokumen terasa lebih rapi, tidak terkesan amatir.",
    "Kompres PDF final sebelum diarsipkan. Catatan yang penuh hasil pindaian ukurannya besar; versi terkompresi lebih mudah dibagikan nanti.",
    "Tambahkan halaman sampul (diketik, dengan nama mata kuliah dan tanggal) sebelum menggabungkan. Koleksi catatan Anda jadi menjelaskan dirinya sendiri di dalam arsip.",
  ],
  mobileNote:
    "Memindai catatan adalah salah satu hal yang benar-benar lebih baik dikerjakan HP dibanding scanner flatbed untuk pemakaian santai. Fitur pemindaian di aplikasi PDF Editor berjalan sepenuhnya di HP — menangkap, mendeteksi tepi, mengatur kontras, menggabungkan multihalaman — menghasilkan PDF yang bersih tanpa harus bolak-balik ke server mana pun.",
  faq: [
    {
      q: "Apakah catatan tulisan tangan hasil pindaian bisa dicari?",
      a: "Hanya jika alatnya menjalankan OCR pada catatan itu — mengubah gambar tulisan tangan menjadi teks yang dapat dicari. OCR untuk tulisan tangan kurang akurat dibanding untuk teks cetak; kualitasnya tergantung pada tulisan tangan dan hasil pindaiannya.",
    },
    {
      q: "Pengaturan kamera HP apa yang terbaik untuk memindai catatan?",
      a: "Gunakan mode skala abu-abu atau hitam putih pada aplikasi pemindai dengan kontras otomatis. Jangan mengandalkan aplikasi kamera bawaan — fotonya lebih besar ukurannya, kurang kontras, dan lebih sulit dibaca.",
    },
    {
      q: "Berapa halaman sebaiknya dipindai dalam satu sesi?",
      a: "Sebanyak yang Anda tulis dalam satu waktu duduk. Memindai setiap minggu atau setelah tiap kuliah jauh lebih mudah daripada membiarkannya menumpuk selama satu semester.",
    },
    {
      q: "Perlukah saya memindai dengan warna?",
      a: "Hanya jika catatan Anda memakai warna (stabilo, diagram). Selain itu, skala abu-abu atau hitam putih lebih tajam dan lebih kecil.",
    },
    {
      q: "Bagaimana jika halamannya kusut atau bernoda?",
      a: "Kontras otomatis bisa membersihkan sebagian besar tanda usia pada kertas. Kekusutan yang parah biasanya tetap terlihat; pertimbangkan untuk memindai ulang atau menerimanya apa adanya jika hanya untuk materi belajar pribadi.",
    },
  ],
  related: [
    { label: "Pindai ke PDF — pemindaian kamera HP dengan deteksi tepi", path: "/scan-to-pdf" },
    { label: "Gabungkan PDF — satukan hasil pindaian multihalaman", path: "/merge-pdf" },
    { label: "Cara memindai dokumen ke PDF dengan HP", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Alur kerja PDF untuk mahasiswa", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "Pindai ke PDF — pemindaian kamera HP", path: "/scan-to-pdf" },
};

export default content;
