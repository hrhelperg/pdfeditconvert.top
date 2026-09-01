import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-formatting-issues",
  h1: "Masalah Format pada Formulir PDF (Perataan dan Luapan Teks)",
  description:
    "Kolom tidak sejajar, jawaban meluap keluar, tampilan formulir berbeda di layar orang lain? Masalah tata letak formulir yang berbeda-beda tergantung aplikasi pembaca, dan cara mendapatkan hasil yang konsisten.",
  updated: "2026-06-01",
  intro: [
    "Sebuah formulir bisa terlihat sempurna di layar Anda tapi tiba dengan tampilan yang salah di layar orang lain, kolom yang bergeser dari garisnya, jawaban yang meluap keluar dari kotaknya, kotak centang yang tidak sejajar, seluruh tata letak yang bergeser secara halus. Karena kolom formulir digambar oleh masing-masing aplikasi pembaca, bukan tertanam tetap ke halaman, tampilan persisnya bisa berbeda, dan itulah akar dari sebagian besar keluhan format formulir.",
    "Ini berbeda dari masalah format PDF secara umum, yang biasanya berakar dari margin dan spasi dokumen sumbernya. Masalah format formulir berkaitan dengan lapisan kolom: bagaimana kolom diposisikan relatif terhadap halaman, bagaimana jawaban muat di dalamnya, dan seberapa konsisten itu digambar di berbagai aplikasi. Solusinya pun khas untuk formulir.",
    "Panduan ini membahas masalah tata letak formulir yang umum terjadi, alasan terjadinya, dan solusi tunggal yang paling andal, mengunci, yang membuat formulir terlihat sama di mana saja.",
  ],
  steps: [
    {
      title: "Pastikan itu perbedaan aplikasi pembaca",
      body: "Buka formulirnya di dua aplikasi PDF yang berbeda. Jika tata letaknya bergeser antara keduanya, masalahnya ada pada cara kolom digambar, bukan pada filenya, kolomnya digambar sedikit berbeda oleh masing-masing aplikasi pembaca.",
    },
    {
      title: "Perbaiki jawaban yang meluap keluar dari kolomnya",
      body: "Jika teks meluap melewati tepi kolom, berarti kolomnya terlalu kecil atau jawabannya terlalu panjang. Pada formulir yang Anda kendalikan, perbesar kolomnya; saat mengisi, jaga jawaban tetap dalam ruang yang terlihat atau gunakan ukuran otomatis.",
    },
    {
      title: "Sejajarkan ulang kolom yang bergeser dari garisnya",
      body: "Kolom yang bergeser ke atas atau bawah dari labelnya biasanya berarti posisi kolomnya tidak cocok dengan halaman di baliknya. Jika itu formulir Anda, posisikan ulang kolomnya; jika bukan, menambahkan teks di atasnya bisa lebih andal daripada mengandalkan kolom yang tidak sejajar itu.",
    },
    {
      title: "Kunci untuk hasil yang konsisten",
      body: "Mengunci menggabungkan kolom ke halaman, mengunci posisi dan tampilannya. Setelah dikunci, formulirnya terlihat identik di aplikasi pembaca mana pun, solusi paling andal untuk tata letak yang berubah-ubah.",
    },
    {
      title: "Pilih template non-interaktif saat konsistensi sangat penting",
      body: "Jika sebuah formulir harus terlihat sama bagi semua orang, template non-interaktif yang dirancang dengan baik (tanpa lapisan kolom interaktif) sama sekali menghindari perbedaan cara menggambar antar aplikasi pembaca.",
    },
  ],
  tips: [
    "Buka formulirnya di dua aplikasi untuk memastikan masalah tata letaknya adalah soal cara aplikasi pembaca menggambar, bukan file yang rusak.",
    "Mengunci adalah solusi paling andal, ini mengunci posisi dan tampilan kolom ke halaman untuk aplikasi pembaca mana pun.",
    "Saat mengisi formulir dengan kolom yang tidak sejajar, menempatkan teks di atasnya bisa lebih presisi daripada berjuang dengan kolomnya.",
    "Jika Anda membangun formulir yang harus terlihat identik di mana saja, template non-interaktif menghindari perbedaan cara menggambar kolom.",
    "Tampilan formulir memang bisa berbeda antar aplikasi pembaca PDF, jadi “terlihat salah di layar mereka” biasanya soal cara menggambar, bukan kerusakan.",
  ],
  mobileNote:
    "Aplikasi PDF Editor membiarkan Anda mengunci formulir yang sudah selesai sehingga tata letaknya tetap sebelum Anda mengirimnya, sehingga tidak akan bergeser di layar penerima. Untuk formulir dengan kolom yang merepotkan, Anda juga bisa menempatkan teks dengan presisi di halaman lalu mengunci, hasil yang konsisten di perangkat apa pun.",
  faq: [
    {
      q: "Kenapa formulir PDF saya terlihat berbeda di layar orang lain?",
      a: "Kolom formulir digambar oleh masing-masing aplikasi pembaca, jadi posisi dan tampilannya bisa berbeda antar aplikasi. Mengunci formulir menggabungkan kolomnya ke halaman sehingga terlihat identik di mana saja.",
    },
    {
      q: "Kenapa jawaban saya meluap keluar dari kotak kolomnya?",
      a: "Kolomnya terlalu kecil untuk jawabannya, atau jawabannya terlalu panjang. Perbesar kolomnya pada formulir yang Anda kendalikan, jaga jawaban tetap dalam ruang yang terlihat, atau andalkan ukuran otomatis agar muat.",
    },
    {
      q: "Bagaimana cara memperbaiki kolom yang bergeser dari garisnya?",
      a: "Posisi kolomnya tidak cocok dengan halaman di baliknya. Posisikan ulang kolomnya jika itu formulir Anda; jika bukan, menempatkan teks Anda langsung di halaman bisa lebih andal daripada mengandalkan kolom yang tidak sejajar itu.",
    },
    {
      q: "Apa cara paling andal menjaga tata letak formulir tetap konsisten?",
      a: "Kuncilah. Mengunci mengunci tampilan kolom ke halaman sehingga digambar sama di aplikasi pembaca mana pun. Untuk formulir yang Anda buat, template non-interaktif menghindari masalah ini sejak awal.",
    },
    {
      q: "Apa bedanya ini dari masalah format PDF secara umum?",
      a: "Ini membahas soal lapisan kolom, perataan, luapan, cara aplikasi pembaca menggambar. Masalah format PDF secara umum biasanya berasal dari margin dan spasi dokumen sumbernya, bukan kolom formulirnya.",
    },
  ],
  related: [
    { label: "Cara mengatasi masalah format PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "Masalah font pada formulir PDF", path: "/guides/pdf-form-font-problems" },
    { label: "Masalah kompatibilitas formulir PDF", path: "/guides/pdf-form-compatibility-problems" },
    { label: "Praktik terbaik formulir PDF", path: "/guides/pdf-form-best-practices" },
  ],
  parentHub: { label: "Formulir PDF", path: "/pdf-forms" },
};

export default content;
