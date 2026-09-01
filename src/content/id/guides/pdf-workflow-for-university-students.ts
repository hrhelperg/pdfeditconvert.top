import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflow-for-university-students",
  h1: "Alur Kerja PDF untuk Mahasiswa (Catatan, Tugas, Pengumpulan)",
  description:
    "Ritme PDF sepanjang semester yang bertahan sampai minggu ujian: catatan kuliah terpindai, tugas terkumpul, paket belajar terbagikan. Berbasis browser dan gratis.",
  updated: "2026-05-29",
  intro: [
    "Satu semester kuliah menghasilkan ratusan PDF. Slide kuliah, catatan tulisan tangan hasil pindaian, soal latihan, tugas yang sudah selesai, bacaan tambahan, paket belajar untuk ujian. Sebagian besar mahasiswa mengatasinya dengan menumpuk semuanya di folder unduhan dan mengobrak-abriknya saat butuh. Cara itu masih berfungsi di minggu ketiga; mulai berantakan di minggu kesepuluh; dan menjelang ujian akhir, keadaannya malah lebih buruk daripada tidak punya file-file itu sama sekali.",
    "Ritme PDF sepanjang semester itu singkat dan mudah dijaga. Paket catatan mingguan per mata kuliah, pengumpulan tugas yang diberi nama secara konsisten, paket belajar yang disusun sebelum ujian, arsip di akhir semester. Tidak satu pun membutuhkan alat mahal atau aplikasi yang belum Anda miliki, dan sebagian besar bisa dikerjakan dari HP.",
    "Panduan ini menjelaskan ritme itu — apa yang harus dilakukan setiap minggu, apa yang harus dilakukan per tugas, apa yang harus dilakukan saat ujian tengah semester dan ujian akhir. Panduan ini mengasumsikan tujuannya adalah menemukan dokumen apa pun dalam lima detik, bukan membangun sistem pengetahuan pribadi yang sempurna.",
  ],
  steps: [
    {
      title: "Mingguan: tangkap dan gabungkan materi kuliah",
      body: "Di akhir setiap minggu per mata kuliah: kumpulkan catatan yang diketik, PDF slide, foto papan tulis, dan halaman tulisan tangan hasil pindaian. Gabungkan PDF menyatukannya menjadi Minggu3_Paket_YYYY-MM-DD.pdf di /MataKuliah/[MataKuliah]/kuliah/.",
    },
    {
      title: "Per tugas: buat, beri nama, kumpulkan, arsipkan",
      body: "Word ke PDF untuk pekerjaan yang diketik, Pindai ke PDF untuk halaman tulisan tangan, Gabungkan PDF untuk menyatukannya, Kompres PDF jika ada batas dari portal. Kumpulkan, lalu simpan salinannya di /MataKuliah/[MataKuliah]/tugas/terkumpul/.",
    },
    {
      title: "Tengah semester: bersih-bersih",
      body: "Sekitar minggu ke-7, periksa folder-folder mata kuliah. Buang file duplikat, perbaiki file yang salah nama, arsipkan yang sudah selesai. Dua puluh menit di tengah semester menghemat berjam-jam saat ujian akhir.",
    },
    {
      title: "Sebelum ujian: susun paket belajar",
      body: "Gabungkan paket-paket mingguan yang relevan menjadi satu MataKuliah_PaketBelajar_Final.pdf. Tambahkan sampul berisi daftar topik. Kompres agar mudah dibawa di tablet atau HP saat meninjau ulang.",
    },
    {
      title: "Beri anotasi pada paket belajar di tablet atau HP",
      body: "Anotasi PDF di tablet bekerja lebih baik bagi sebagian mahasiswa dibanding kertas. Gunakan sorotan, komentar, dan garis bawah; tandanya tetap ada untuk ditinjau ulang nanti.",
    },
    {
      title: "Akhir semester: arsipkan mata kuliah",
      body: "Pindahkan /MataKuliah/[MataKuliah]/ ke /Arsip/[Tahun]/[MataKuliah]/. Kompres semua yang ada di arsip. Folder aktif tetap bersih untuk semester berikutnya.",
    },
  ],
  tips: [
    "Jangan menggabungkan lintas mata kuliah atau lintas minggu. Unit terkecil yang berguna adalah satu PDF per minggu per mata kuliah.",
    "Kumpulkan dengan konvensi penamaan persis seperti yang diminta setiap kelas. 'NamaBelakang_NamaDepan_Tugas3.pdf' adalah standarnya; ikuti dengan tepat.",
    "Beri anotasi pada paket belajar secara digital. PDF beranotasi yang dapat dicari lebih unggul dibanding kertas untuk meninjau ulang — Anda bisa menemukan topik tertentu dengan cepat.",
    "Kompres hanya saat pengumpulan dan saat pengarsipan. Selama masih dipakai aktif, utamakan keterbacaan.",
    "Sinkronkan folder MataKuliah ke satu penyimpanan cloud. Akses dari HP ke laptop saat ujian akhir jauh lebih berharga dibanding ruang penyimpanan yang dihemat.",
  ],
  mobileNote:
    "Sebagian besar aktivitas PDF harian mahasiswa terjadi di HP — memindai halaman tulisan tangan, memotret slide, mengumpulkan tugas. Aplikasi PDF Editor menangani seluruh rangkaian (pindai, gabung, kompres, tanda tangan, bagikan) secara offline di iOS dan Android, sehingga alur kerja tidak bergantung pada akses ke laptop.",
  faq: [
    {
      q: "Berapa lama waktu yang dibutuhkan ritme ini?",
      a: "Sepuluh menit seminggu per mata kuliah untuk paket mingguan. Dua menit per tugas. Dua puluh menit di tengah semester. Penghematan kumulatifnya saat ujian akhir bisa berjam-jam.",
    },
    {
      q: "Bagaimana jika saya punya banyak mata kuliah?",
      a: "Ritmenya bisa disesuaikan skalanya — konvensi yang sama berlaku untuk setiap mata kuliah. Dua mata kuliah paralel berarti waktunya dua kali lipat; strukturnya tetap sama.",
    },
    {
      q: "Apakah kertas masih layak disimpan?",
      a: "Catatan tulisan tangan aslinya, ya, sebagai cadangan. Begitu sudah dipindai dan masuk ke paket mingguan, kertasnya hanya berfungsi sebagai referensi.",
    },
    {
      q: "Perlukah saya menjalankan OCR pada hasil pindaian agar bisa dicari?",
      a: "Jika alat Anda menyediakannya, ya. Materi belajar yang dapat dicari jauh lebih berharga saat ujian dibanding yang tidak bisa dicari.",
    },
    {
      q: "Bagaimana dengan bacaan referensi?",
      a: "Buat folder /bacaan/ terpisah per mata kuliah. Jangan menggabungkan bacaan ke dalam paket kuliah; keduanya berkembang secara terpisah dan punya fungsi yang berbeda.",
    },
  ],
  related: [
    { label: "PDF untuk Pelajar — catatan dan panduan belajar", path: "/pdf-for-students" },
    { label: "Alat PDF gratis terbaik untuk pelajar", path: "/guides/best-pdf-tools-for-students" },
    { label: "Cara merapikan materi belajar sebagai PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Cara mengumpulkan tugas sebagai PDF", path: "/guides/how-to-submit-homework-as-pdf" },
  ],
  parentHub: { label: "PDF untuk Pelajar — catatan, sorotan, panduan belajar", path: "/pdf-for-students" },
};

export default content;
