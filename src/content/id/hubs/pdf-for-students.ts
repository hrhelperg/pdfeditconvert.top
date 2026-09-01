import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-students",
  hero: {
    eyebrow: "PDF untuk Pelajar",
    h1: "Alat PDF yang sesuai dengan cara pelajar belajar sesungguhnya.",
    highlight: "sesungguhnya",
    lead: "Beri anotasi pada slide kuliah, sorot bahan bacaan, gabungkan makalah penelitian, pindai halaman buku teks, dan tanda tangani formulir — dari HP atau tablet yang sudah Anda miliki.",
    primaryCta: { label: "Buka aplikasi", href: SITE.app.appStore },
  },
  problem: {
    heading: "Kenapa PDF tetap jadi pusat cara belajar pelajar",
    paragraphs: [
      "Dosen mengunggah slide dalam bentuk PDF. Bahan bacaan mata kuliah datang sebagai PDF. Instruksi tugas berupa PDF. Silabus berupa PDF. Namun penampil bawaan di HP tidak memungkinkan Anda menyorot, memberi anotasi, atau mengatur dokumen-dokumen itu dengan baik — dan alternatif yang biasa dipakai kebanyakan pelajar adalah men-screenshot halaman lalu menyimpannya di Notes, yang menghilangkan kemampuan pencarian, struktur, dan kemungkinan untuk kembali ke sumber aslinya.",
      "Editor PDF yang tepat di HP memungkinkan pelajar memperlakukan bahan bacaan seperti buku teks — sorotan, catatan di margin, bookmark — tetapi dengan kemampuan dicari dan dibagikan. Bahan bacaan beranotasi yang sama terbuka di setiap perangkat, jadi pekerjaan yang Anda lakukan di bus tetap ada saat Anda duduk di perpustakaan.",
      "Dipadukan dengan stylus di tablet, cara ini bisa menggantikan sebagian besar catatan fisik untuk materi kuliah. Biayanya hanya harga aplikasi (gratis untuk fitur dasar) dan waktu untuk mengaturnya sekali saja.",
    ],
  },
  features: {
    heading: "Dirancang untuk sesi belajar",
    items: [
      {
        icon: "Highlighter",
        title: "Sorot dan beri anotasi",
        body: "Sorotan kuning, catatan bebas, komentar tempel, garis bawah — persis seperti yang Anda lakukan di kertas, tetapi dapat dicari.",
      },
      {
        icon: "Bookmark",
        title: "Bookmark dan kerangka",
        body: "Tandai bab atau bagian yang ingin Anda kunjungi lagi. Berpindah di antaranya dengan satu ketukan saat menulis esai.",
      },
      {
        icon: "Combine",
        title: "Gabungkan bahan bacaan",
        body: "Gabungkan artikel-artikel minggu ini menjadi satu dokumen untuk dibaca offline di kereta, pesawat, atau perjalanan pulang-pergi.",
      },
      {
        icon: "ScanLine",
        title: "Pindai halaman buku teks",
        body: "Ambil gambar halaman dari buku fisik menjadi PDF yang dapat dicari. Berguna untuk mengutip di esai saat Anda hanya punya buku cetaknya.",
      },
      {
        icon: "FileSignature",
        title: "Tanda tangani formulir seketika",
        body: "Formulir bantuan keuangan, daftar hadir, konfirmasi pendaftaran — tanda tangani dan kembalikan tanpa mencetak.",
      },
      {
        icon: "Layers",
        title: "Atur per mata kuliah",
        body: "Kelompokkan dokumen berdasarkan kelas. Pindahkan selama satu semester tanpa kehilangan anotasi Anda.",
      },
    ],
  },
  steps: {
    heading: "Alur kerja belajar yang sederhana",
    items: [
      {
        title: "Kumpulkan bahan bacaan minggu ini",
        body: "Unduh atau bagikan setiap PDF ke PDF Editor dari portal kampus Anda, Canvas, Moodle, atau email.",
      },
      {
        title: "Gabungkan menjadi satu file per minggu mata kuliah",
        body: "Gunakan alat Gabung PDF untuk menggabungkannya menjadi “Bacaan Minggu 3 - Mikroekonomi.pdf” untuk dipakai offline.",
      },
      {
        title: "Beri anotasi saat membaca",
        body: "Sorot bagian penting, tambahkan catatan di margin, tempelkan komentar di bagian yang masih perlu ditelusuri lebih lanjut. Catatan tersimpan langsung di tempatnya.",
      },
      {
        title: "Manfaatkan sorotan saat menulis esai",
        body: "Kembali ke bagian yang disorot lewat panel bookmark saat Anda mengutip sumber. Teks di bawah sorotan bisa dipilih dan disalin.",
      },
      {
        title: "Pindai dan gabungkan catatan tulisan tangan",
        body: "Saat Anda mencatat di kertas, pindai ke pustaka PDF Editor yang sama supaya semuanya ada di satu tempat yang dapat dicari.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Belajar di mana saja",
    body: "Ruang kuliah, perpustakaan, kereta, kafe — tempat pelajar membaca jarang sekali berupa meja belajar. Editor PDF yang mengutamakan HP berarti salinan beranotasi yang sama selalu ada di tangan Anda di mana pun Anda berada. Satu jam yang biasanya hilang menunggu bus berubah jadi waktu membaca yang produktif.",
  },
  faq: [
    {
      q: "Apakah aplikasi ini gratis untuk pelajar?",
      a: "Ya. Anotasi, penggabungan, pemindaian, dan tanda tangan dasar gratis tanpa batas harian. Beberapa fitur Pro (OCR massal, enkripsi lanjutan) berbayar, tetapi paket gratisnya sudah mencakup semua yang biasanya dibutuhkan pelajar.",
    },
    {
      q: "Apakah sorotan saya akan tersinkron di semua perangkat?",
      a: "Jika Anda menyimpan file ke iCloud Drive, Google Drive, atau penyedia cloud mana pun, perubahannya tersinkron di mana pun file yang sama dibuka. File yang hanya lokal tetap ada di perangkat tempat file itu diedit.",
    },
    {
      q: "Bolehkah saya memindai halaman buku teks secara legal?",
      a: "Untuk belajar pribadi, di sebagian besar yurisdiksi boleh (aturan penggunaan wajar biasanya mengizinkan kutipan singkat untuk keperluan belajar). Berhati-hatilah saat mendistribusikan salinan hasil pindaian — itu persoalan berbeda dan sering kali tidak diizinkan.",
    },
    {
      q: "Apakah aplikasi ini berjalan baik di iPad dan tablet Android?",
      a: "Ya. Tablet dengan input stylus (Apple Pencil, S Pen) membuat anotasi terasa jauh lebih mirip kertas dibanding HP yang hanya bisa disentuh jari. Jika Anda punya tablet, pakai untuk sesi membaca.",
    },
    {
      q: "Bisakah saya mengekspor catatan beranotasi saya?",
      a: "Bisa. PDF beranotasi bisa dibagikan apa adanya (dengan anotasi tertanam) atau dikunci menjadi PDF final. Anda juga bisa mengekstrak hanya teks yang disorot untuk kutipan.",
    },
  ],
  related: [
    {
      label: "Cara membagikan catatan belajar sebagai PDF",
      path: "/guides/how-to-share-study-notes-as-pdf",
    },
    {
      label: "Aplikasi PDF terbaik untuk pelajar",
      path: "/guides/best-pdf-app-for-students",
    },
    { label: "Pindai ke PDF", path: "/scan-to-pdf" },
  ],
  appCta: {
    heading: "Belajar dengan toolkit PDF sungguhan.",
    sub: "Gratis untuk iOS dan Android. Anotasi tersinkron lewat iCloud atau Drive.",
  },
};

export default content;
