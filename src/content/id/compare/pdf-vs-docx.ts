import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-docx",
  h1: "PDF atau DOCX — Perbandingan Fitur demi Fitur",
  description:
    "Bandingkan PDF dan DOCX dari sisi kemudahan edit, akurasi tampilan, tanda tangan, keamanan, dan berbagi. Pilih format yang tepat untuk kebutuhan Anda.",
  intro: [
    "PDF dan DOCX adalah dua format yang paling sering jadi tujuan akhir sebagian besar dokumen. Keduanya punya perannya masing-masing — dan memilih format yang tepat untuk setiap tugas menghindarkan Anda dari sebagian besar masalah format dan berbagi yang biasa dikaitkan dengan dokumen pada umumnya.",
    "Perbandingan ini bersifat praktis, bukan akademis. Setiap baris mencerminkan bagaimana kedua format ini berperilaku dalam alur kerja dunia nyata, bukan bagaimana keduanya didefinisikan dalam dokumen standar. Kami berfokus pada hal-hal yang akan Anda sadari dalam bulan pertama memakai salah satu format secara intensif.",
    "Singkatnya: PDF lebih unggul saat dokumen sudah final, harus tampil identik bagi pembaca, atau berisi tanda tangan. DOCX lebih unggul saat dokumen masih berupa draf kerja, direview oleh banyak orang, atau Anda ingin memakai ulang isinya di tempat lain. Sebagian besar dokumen pada akhirnya melewati kedua format ini di tahap-tahap berbeda dalam siklus hidupnya.",
  ],
  leftLabel: "PDF",
  rightLabel: "DOCX",
  rows: [
    { feature: "Tata letak presisi piksel", left: "ya", right: "tidak" },
    { feature: "Kemudahan mengedit teks", left: "Terbatas", right: "ya" },
    { feature: "Bisa dilihat di mana saja", left: "ya", right: "tidak" },
    { feature: "Lacak perubahan dan komentar", left: "Terbatas", right: "ya" },
    { feature: "Proteksi kata sandi (AES-256)", left: "ya", right: "ya" },
    { feature: "Tampilan tetap andal 10 tahun kemudian", left: "ya", right: "tidak" },
    { feature: "Bisa dilihat di HP tanpa aplikasi tambahan", left: "ya", right: "tidak" },
    { feature: "Kolom formulir", left: "ya", right: "Terbatas" },
    { feature: "Dukungan tanda tangan bawaan", left: "ya", right: "Tambahan" },
  ],
  whenLeft: [
    "Dokumen sudah final dan tidak seharusnya diedit lagi",
    "Anda perlu tampilannya identik di setiap perangkat",
    "Penerima mungkin tidak punya Microsoft Word",
    "Dokumen akan diarsipkan selama bertahun-tahun",
    "Anda perlu format yang siap dicetak dan siap ditandatangani",
  ],
  whenRight: [
    "Dokumen masih dalam tahap penyusunan draf",
    "Banyak orang sedang mereview atau menulis bersama",
    "Lacak perubahan dan komentar itu penting",
    "Anda perlu memakai ulang atau mengubah gaya isinya",
    "Dokumen akan menjadi template",
  ],
  faq: [
    {
      q: "Bisakah saya mengonversi antara PDF dan DOCX?",
      a: "Bisa. Alat PDF yang baik bisa mengonversi ke dua arah dengan akurasi tinggi untuk dokumen berbasis teks.",
    },
    {
      q: "Format mana yang lebih aman?",
      a: "Keduanya mendukung enkripsi AES-256. Keamanannya bukan ditentukan oleh formatnya sendiri, melainkan oleh kata sandi dan cara Anda membagikannya.",
    },
    {
      q: "Apakah font saya tetap utuh setelah dikonversi?",
      a: "Sebagian besar iya. Jika sebuah font tidak tersedia di perangkat tujuan, font yang mirip akan dipakai sebagai gantinya. Gunakan font umum (Calibri, Inter, Helvetica) untuk meminimalkan penggantian.",
    },
  ],
  related: [
    { label: "Panduan: PDF atau DOCX", path: "/guides/pdf-vs-docx" },
    { label: "Konverter PDF", path: "/pdf-converter" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
};

export default content;
