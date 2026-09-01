import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-business",
  hero: {
    eyebrow: "PDF untuk Bisnis",
    h1: "Alur kerja PDF untuk tim kecil.",
    highlight: "tim kecil",
    lead: "Kontrak, faktur, penawaran harga, perjanjian yang sudah ditandatangani, struk hasil pindaian — semua dokumen yang menjadi tulang punggung bisnis kecil, dikelola dari HP tanpa lisensi per kursi atau SaaS enterprise.",
    primaryCta: { label: "Buka aplikasi", href: SITE.app.appStore },
  },
  problem: {
    heading: "Kenapa tim kecil terus kesulitan dengan PDF",
    paragraphs: [
      "Bisnis kecil hidup di dalam PDF. Penawaran harga keluar sebagai PDF, kontrak kembali sudah ditandatangani sebagai PDF, faktur berupa PDF, struk dipindai menjadi PDF, NDA berupa PDF. Namun alat yang mengelola semua itu kebanyakan berharga enterprise atau berbasis web dan rapuh.",
      "Software PDF untuk enterprise mengasumsikan Anda punya departemen IT dan proses pengadaan. Alat web gratis mengasumsikan Anda tidak keberatan mengunggah kontrak klien ke server pihak ketiga. Tak satu pun dari kedua model itu cocok untuk agensi lima orang, pekerja lepas, atau bisnis online kecil yang perlu memproses dokumen dengan cepat tanpa birokrasi.",
      "Toolkit PDF native yang mengutamakan HP lebih cocok untuk tim kecil. Tidak ada lisensi kursi yang perlu dikelola, tidak ada antrean unggah yang perlu dikoordinasikan, tidak ada biaya bulanan untuk alat yang hanya dipakai beberapa kali seminggu. Setiap anggota tim memasang aplikasi di HP-nya dan langsung produktif sejak hari pertama.",
    ],
  },
  features: {
    heading: "Operasi yang penting bagi tim kecil",
    items: [
      {
        icon: "FileSignature",
        title: "Penawaran → kontrak → tanda tangan",
        body: "Kirim penawaran harga sebagai PDF, terima persetujuan yang sudah ditandatangani, simpan hasilnya. Seluruh siklus ini muat dalam satu HP.",
      },
      {
        icon: "Receipt",
        title: "Pindai struk langsung di kasir",
        body: "Pindai struk kertas begitu Anda menerimanya. Penamaan otomatis dan OCR membuatnya langsung siap dipakai software akuntansi.",
      },
      {
        icon: "ShieldCheck",
        title: "Lindungi dokumen sensitif",
        body: "Beri kata sandi pada kontrak, PDF slip gaji, dan salinan NDA sebelum dibagikan ke pihak luar. AES-256, langsung di perangkat.",
      },
      {
        icon: "Combine",
        title: "Gabungkan dan bagi deliverable",
        body: "Gabungkan penawaran harga dengan ruang lingkup pekerjaannya; bagi hasil ekspor panjang per klien. Keduanya cukup dengan 3 kali ketukan.",
      },
      {
        icon: "Wand",
        title: "Edit cepat, tanpa perlu laptop",
        body: "Perbaiki salah ketik pada penawaran harga, perbarui tanggal di faktur, ganti logo di brosur — semuanya dari HP.",
      },
      {
        icon: "Globe",
        title: "Berjalan dengan cloud yang sudah Anda pakai",
        body: "Drive, iCloud, OneDrive, Dropbox — aplikasi membaca dan menulis dari mana pun tim Anda sudah menyimpan file.",
      },
    ],
  },
  steps: {
    heading: "Alur kerja khas bisnis kecil",
    items: [
      {
        title: "Terima permintaan",
        body: "Klien meminta penawaran harga. Anda menyusunnya di alat invoicing lalu mengekspor ke PDF.",
      },
      {
        title: "Tanda tangani dan beri stempel tanggal",
        body: "Buka PDF di PDF Editor, tanda tangani dengan tanda tangan tersimpan Anda, tambahkan stempel tanggal.",
      },
      {
        title: "Kirim lewat email atau perpesanan",
        body: "Bagikan penawaran yang sudah ditandatangani langsung dari aplikasi lewat menu bagikan email atau alat perpesanan tim Anda.",
      },
      {
        title: "Terima versi yang sudah ditandatangani balik",
        body: "Saat klien mengembalikannya, buka filenya, arsipkan ke cloud Anda, dan beri kata sandi jika berisi ketentuan yang sensitif.",
      },
      {
        title: "Buat faktur dan gabungkan dengan kontrak",
        body: "Ekspor faktur dari alat akuntansi Anda, lalu gunakan Gabung PDF untuk menggabungkan faktur + kontrak yang sudah ditandatangani menjadi satu PDF arsip yang rapi.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Menjalankan bisnis dari HP",
    body: "Banyak pekerjaan dokumen bisnis kecil terjadi di sela-sela kegiatan lain — di lokasi pelanggan, di dalam taksi, di antara jemputan anak sekolah. Dengan pendekatan native di HP, alur kerja tidak lagi bergantung pada duduk di meja kerja. Kontrak yang dulu harus menunggu waktu malam di depan laptop kini bisa terkirim di jam yang sama saat diminta.",
  },
  faq: [
    {
      q: "Apakah aplikasi ini cocok untuk tim beranggotakan 5-20 orang?",
      a: "Ya, untuk pengguna perorangan dalam tim kecil — setiap orang memasangnya di HP masing-masing. Tidak ada konsol admin terpusat; ini alat per perangkat. Untuk organisasi yang lebih besar dari itu, sistem manajemen dokumen enterprise mungkin lebih cocok.",
    },
    {
      q: "Bisakah saya memakainya untuk kontrak yang mengikat secara hukum?",
      a: "Sebagian besar yurisdiksi menerima PDF bertanda tangan untuk kontrak bisnis standar. Regulasi eIDAS Uni Eropa dan ESIGN Act Amerika Serikat sama-sama mengakui tanda tangan elektronik. Untuk perjanjian bernilai tinggi, teregulasi, atau lintas negara, periksa aturan setempat dan pertimbangkan tanda tangan elektronik yang memenuhi syarat (qualified electronic signature).",
    },
    {
      q: "Apakah terintegrasi dengan alat akuntansi?",
      a: "PDF Editor menghasilkan PDF standar yang diterima semua alat akuntansi (Xero, QuickBooks, FreeAgent, Pleo, dan sejenisnya). Tidak perlu integrasi khusus — cukup simpan PDF-nya ke cloud drive Anda dan alat akuntansinya akan mengambilnya secara otomatis.",
    },
    {
      q: "Bagaimana cara menjaga privasi file klien?",
      a: "Semua operasi berjalan di perangkat. File hanya keluar dari HP Anda saat Anda aktif membagikannya. Terapkan proteksi kata sandi pada dokumen yang sangat sensitif sebelum dibagikan ke pihak luar.",
    },
    {
      q: "Bagaimana dengan jejak audit (audit trail)?",
      a: "PDF yang ditandatangani menyertakan metadata tanda tangan (stempel waktu, nama penanda tangan). Untuk industri teregulasi yang memerlukan jejak audit lengkap, lengkapi dengan platform tanda tangan elektronik khusus — PDF Editor menangani kontrak bisnis sehari-hari, bukan alur kerja yang teregulasi ketat.",
    },
  ],
  related: [
    { label: "Keamanan dan enkripsi PDF", path: "/pdf-security" },
    {
      label: "Alur kerja PDF yang aman untuk bisnis",
      path: "/guides/secure-pdf-workflows-for-business",
    },
    { label: "Tanda tangani PDF dari HP", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Jalankan operasi dokumen dari HP Anda.",
    sub: "Gratis untuk penggunaan bisnis sehari-hari. Tanpa lisensi per kursi.",
  },
};

export default content;
