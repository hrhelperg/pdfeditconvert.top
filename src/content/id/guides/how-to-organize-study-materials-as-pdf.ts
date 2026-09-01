import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-organize-study-materials-as-pdf",
  h1: "Cara Merapikan Materi Belajar sebagai PDF (Folder, Penamaan, Indeks)",
  description:
    "PDF mata kuliah cepat menumpuk. Konvensi folder, penamaan, dan penggabungan sederhana yang menjaga materi semester tetap bisa dicari sejak minggu pertama sampai ujian akhir.",
  updated: "2026-05-29",
  intro: [
    "Menjelang minggu keempat semester, folder unduhan Anda sudah berisi lima puluh PDF dengan nama seperti 'kuliah7.pdf', 'versi-final-2.pdf', 'Slide_v3_koreksi.pdf', dan 'Dokumen.pdf'. Menjelang minggu kesepuluh, Anda sudah tidak bisa menemukan apa pun. Saat minggu ujian, Anda mencari kuliah yang sama sampai tiga kali karena tidak ingat versi mana dari file mana yang berisi slide yang Anda butuhkan.",
    "Solusinya bukan software atau aplikasi — melainkan sebuah konvensi. Struktur folder yang singkat, nama file yang konsisten, dan kebiasaan menggabungkan file setiap minggu. Begitu ketiganya diterapkan, menemukan satu kuliah tertentu dua bulan kemudian hanya butuh lima detik, bukan lima belas menit.",
    "Panduan ini menjelaskan konvensi yang bertahan sepanjang semester: bagaimana seharusnya folder disusun, bagaimana seharusnya nama file terbaca, kapan harus menggabungkan, dan apa yang terjadi di akhir semester.",
  ],
  steps: [
    {
      title: "Buat folder tingkat atas untuk setiap mata kuliah",
      body: "/MataKuliah/[KodeMataKuliah]/. Di dalamnya: /kuliah/, /tugas/, /bacaan/, /ujian/. Empat folder ini mencakup sebagian besar hal yang masuk. Jangan bersarang lebih dari dua tingkat.",
    },
    {
      title: "Standarkan pola nama file",
      body: "MingguN_JenisDokumen_YYYY-MM-DD.pdf. Jadi Minggu3_Kuliah_2026-09-15.pdf, Tugas2_Pengumpulan_2026-09-20.pdf. Tanggal di akhir mengurutkan secara kronologis; minggu di depan mengelompokkan berdasarkan topik.",
    },
    {
      title: "Gabungkan per minggu, bukan per file",
      body: "Di akhir setiap minggu, Gabungkan PDF menyatukan catatan kuliah, slide, dan foto papan tulis minggu itu menjadi satu Minggu3_Paket_Kuliah_YYYY-MM-DD.pdf. Satu file per minggu jauh lebih mudah dibuka kembali nanti.",
    },
    {
      title: "Tambahkan halaman sampul pada paket gabungan",
      body: "Halaman sampul yang diketik (mata kuliah, minggu, topik yang dibahas) membuat paket itu menjelaskan dirinya sendiri saat masa ujian. Anda di masa depan yang membaca sekilas dua belas minggu paket akan berterima kasih pada Anda yang sekarang.",
    },
    {
      title: "Arsipkan di akhir semester",
      body: "Pindahkan /MataKuliah/[MataKuliah]/ ke /Arsip/[Tahun]/[MataKuliah]/ saat semester berakhir. Folder aktif tetap ramping; arsip tetap bisa dicari untuk tinjauan mata kuliah prasyarat nanti.",
    },
    {
      title: "Kompres arsip, bukan file aktif",
      body: "Kompres PDF materi yang diarsipkan untuk menghemat ruang penyimpanan. Jangan kompres file belajar yang masih aktif — keterbacaan lebih penting daripada ukuran selama semester berjalan.",
    },
  ],
  tips: [
    "Gunakan tanggal dalam format YYYY-MM-DD. Format ini terurut dengan benar di pengelola file mana pun. Format 15/9/26 tidak.",
    "Jangan memberi nomor versi pada materi belajar. Kuliah final ya kuliah itu sendiri; v2 berarti dosen mengunggah ulang.",
    "Beri label persiapan ujian secara terpisah — /ujian/tengah-semester/ dan /ujian/akhir/. Ini mode belajar yang berbeda dari tinjauan mingguan.",
    "Jangan menggabungkan lintas mata kuliah. PDF campuran antar mata kuliah jadi sulit ditemukan kembali.",
    "Simpan satu baris README.txt di setiap folder mata kuliah yang mencatat isi masing-masing subfolder. Membantu saat Anda kembali ke materi itu satu semester kemudian.",
  ],
  mobileNote:
    "Sebagian besar PDF belajar tiba lewat HP (melalui portal kelas, email dosen, atau hasil pindaian Anda sendiri). Aplikasi PDF Editor memungkinkan Anda mengganti nama, menyimpan, dan menggabungkan langsung di HP, sehingga file langsung berada di tempat yang tepat, bukan menumpuk di folder Unduhan.",
  faq: [
    {
      q: "Format nama file apa yang terbaik untuk materi belajar?",
      a: "MingguN_JenisDokumen_YYYY-MM-DD.pdf. Awalan minggu mengelompokkan berdasarkan topik, jenis dokumen memperjelas isinya, dan tanggal format ISO mengurutkan secara kronologis.",
    },
    {
      q: "Perlukah saya menggabungkan mingguan atau menyimpan file terpisah?",
      a: "Gabungkan mingguan. Satu PDF per minggu per mata kuliah adalah tingkat perincian yang tepat — cukup kecil untuk dimuat cepat, cukup besar untuk berdiri sendiri saat revisi.",
    },
    {
      q: "Seberapa dalam seharusnya struktur folder?",
      a: "Dua tingkat. /MataKuliah/[MataKuliah]/[jenis]/. Lebih dalam dari itu, file Anda akan mudah hilang.",
    },
    {
      q: "Apakah saya perlu folder arsip terpisah?",
      a: "Ya. Pindahkan semester yang sudah selesai keluar dari /MataKuliah/ agar folder aktif tetap mudah dipindai.",
    },
    {
      q: "Bagaimana dengan sinkronisasi cloud?",
      a: "Sinkronkan folder /MataKuliah/ ke setidaknya satu penyimpanan cloud. Akses dari HP ke laptop sangat penting saat ujian; sinkronisasi ini menanganinya.",
    },
  ],
  related: [
    { label: "PDF untuk Pelajar — catatan dan panduan belajar", path: "/pdf-for-students" },
    { label: "Gabungkan PDF — susun paket mingguan", path: "/merge-pdf" },
    { label: "Cara merapikan file PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Alur kerja PDF untuk mahasiswa", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "PDF untuk Pelajar — catatan, sorotan, panduan belajar", path: "/pdf-for-students" },
};

export default content;
