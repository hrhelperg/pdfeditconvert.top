import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-workflows-for-small-business",
  h1: "Alur Kerja PDF untuk Bisnis Kecil (Penawaran, Kontrak, Catatan)",
  description:
    "Cara bisnis kecil menjalankan alur dokumennya lewat PDF, mulai dari penawaran keluar, kontrak kembali, hingga catatan terarsip, tanpa membeli paket langganan untuk itu.",
  updated: "2026-05-29",
  intro: [
    "Bisnis kecil mengelola PDF lebih banyak dari yang dibayangkan pemiliknya. Penawaran dikirim keluar, kontrak yang sudah ditandatangani kembali masuk, faktur terkirim, laporan diarsipkan, dokumen pajak menumpuk. Masing-masing adalah pekerjaan kecil, dan masing-masing bisa menghabiskan banyak waktu jika alur kerjanya tidak direncanakan dengan sengaja.",
    "Paket PDF yang mahal baru sepadan kalau Anda punya tim legal sendiri. Untuk bisnis beranggotakan lima orang dengan beberapa lusin dokumen per minggu, alat gratis berbasis browser dan satu konvensi yang rapi sudah cukup menangani pekerjaan yang sama tanpa perlu menambah pos langganan. Triknya adalah menuliskan alur kerja itu sekali saja lalu konsisten mengikutinya.",
    "Panduan ini menjelaskan alur kerja untuk empat jenis dokumen yang paling sering dikelola bisnis kecil dalam bentuk PDF: penawaran, kontrak, faktur, dan catatan. Setiap bagian singkat, konkret, dan tidak satu pun membutuhkan sesuatu yang berbayar.",
  ],
  steps: [
    {
      title: "Penawaran: template Word → Word ke PDF → kirim dengan identitas merek",
      body: "Susun penawaran dari template Word, isi detail klien dan rincian item, lalu ekspor ke PDF dengan Word ke PDF. Beri identitas merek pada sampul, beri nama file NamaKlien_Penawaran_YYYY-MM-DD.pdf, lalu kirim.",
    },
    {
      title: "Kontrak: PDF → Tanda Tangan PDF → kunci → tanda tangan balasan",
      body: "Finalisasi teks di sumbernya, ekspor ke PDF, tanda tangani dengan Tanda Tangan PDF, kunci jika alat Anda mendukungnya, lalu kirim untuk ditandatangani balik. Simpan salinan yang baru ditandatangani sepihak maupun yang sudah ditandatangani lengkap kedua pihak.",
    },
    {
      title: "Faktur: penomoran berurutan, watermark saat sudah dibayar",
      body: "INV-2026-001, INV-2026-002. Lacak dalam sebuah spreadsheet. Saat pembayaran masuk, gunakan Tambah Watermark ke PDF untuk mencap LUNAS dan pindahkan file dari /belum-lunas/ ke /lunas/.",
    },
    {
      title: "Catatan: terima, kompres, arsipkan per tahun",
      body: "Rekening koran, faktur pemasok, struk pengeluaran. Terima sebagai PDF, kompres untuk arsip, simpan per tahun di /Catatan/2026/. Simpan setidaknya selama tujuh tahun.",
    },
    {
      title: "Gunakan struktur folder bersama",
      body: "Folder tingkat atas untuk /Klien/, /Catatan/, /Internal/, /Template/, /Arsip/. Maksimal dua tingkat folder bersarang. Seluruh tim memakai tata letak yang sama.",
    },
    {
      title: "Rekonsiliasi bulanan",
      body: "Sebulan sekali, periksa folder faktur /belum-lunas/ dan proyek aktif di /klien/. Lebih dari 30 hari, tindak lanjuti. Lebih dari 90 hari, tingkatkan penanganannya. Folder itu sendiri adalah daftar tugas Anda.",
    },
  ],
  tips: [
    "Jangan membuat ulang template setiap kali. Buat satu template penawaran, kontrak, dan faktur, lalu pakai berulang kali.",
    "Tanda tangani dengan tanda tangan asli, bukan nama yang diketik. Tanda tangan yang digambar lebih kuat secara hukum jika terjadi sengketa.",
    "Kompres setiap dokumen saat akan dikirim — file yang keluar seharusnya selalu lebih kecil daripada file asli internal.",
    "Hindari mengirim file Word yang masih bisa diedit ke klien. Begitu sudah jadi PDF, versinya terkunci.",
    "Lakukan pembersihan arsip setiap kuartal. Proyek yang sudah selesai dipindahkan ke /Arsip/; folder aktif tetap ringkas dan mudah dipindai.",
  ],
  mobileNote:
    "Pemilik bisnis kecil mengerjakan separuh pekerjaan PDF-nya lewat HP — menandatangani kontrak di sela rapat, mengirim faktur dari lokasi kerja, menyimpan struk di tengah hari kerja. Aplikasi PDF Editor menangani keempat jenis dokumen ini dari HP, secara offline, sehingga pekerjaan tidak perlu menunggu waktu di meja kerja.",
  faq: [
    {
      q: "Apakah saya perlu software akuntansi untuk membuat faktur?",
      a: "Tidak untuk volume rendah. Template Word, spreadsheet pelacakan, dan sistem folder sudah cukup rapi untuk puluhan faktur per bulan. Software baru sepadan saat skala bisnis Anda membesar.",
    },
    {
      q: "Bagaimana cara melacak kontrak mana yang masih menggantung?",
      a: "Struktur folder: /Klien/Aktif/[Nama]/kontrak/terkirim/ dan .../ditandatangani/. Status folder itu sendiri sudah menunjukkan statusnya. Tidak perlu spreadsheet.",
    },
    {
      q: "Bagaimana dengan cadangan (backup)?",
      a: "Sinkronkan folder dokumen ke setidaknya satu penyimpanan cloud (Dropbox, iCloud, Google Drive). Simpan cadangan eksternal secara berkala untuk tahun-tahun catatan pajak.",
    },
    {
      q: "Perlukah saya memakai satu template untuk setiap jenis dokumen?",
      a: "Ya. Template yang konsisten membuat dokumen mudah dikenali dan mengurangi usaha per dokumen. Sesuaikan isinya, bukan strukturnya.",
    },
    {
      q: "Kapan paket PDF berbayar mulai masuk akal?",
      a: "Saat Anda butuh perutean otomatis, tanda tangan elektronik massal, atau jejak audit yang bisa dipertanggungjawabkan — biasanya sekitar 20 karyawan ke atas atau alur kerja yang diatur regulasi ketat.",
    },
  ],
  related: [
    { label: "PDF untuk Bisnis — kontrak dan alur kerja", path: "/pdf-for-business" },
    { label: "Tanda Tangan PDF — tanda tangan elektronik", path: "/sign-pdf" },
    { label: "Cara mengelola faktur sebagai PDF", path: "/guides/how-to-manage-invoices-as-pdf" },
    { label: "Alat PDF gratis terbaik untuk bisnis kecil", path: "/guides/best-pdf-tools-for-small-business" },
  ],
  parentHub: { label: "PDF untuk Bisnis — kontrak dan alur kerja", path: "/pdf-for-business" },
};

export default content;
