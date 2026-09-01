import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "freelancers",
  h1: "PDF Editor untuk Pekerja Lepas",
  description:
    "Alur kerja favorit para pekerja lepas: proposal, kontrak bertanda tangan, dan faktur — semuanya dari HP.",
  intro: [
    "Pekerja lepas menjalankan sebagian besar operasi bisnisnya dari HP. Tidak ada kantor, tidak ada departemen IT, tidak ada printer bersama. Alur kerja PDF yang bagi tim korporat butuh tiga aplikasi dan langganan tanda tangan elektronik, di sini sering kali harus selesai dalam satu aplikasi, cepat, di sela-sela jam kerja yang bisa ditagihkan.",
    "Setiap menit yang dihabiskan berjuang dengan alat kerja adalah menit yang tidak terpakai untuk pekerjaan yang bisa ditagihkan. Editor PDF yang langsung berfungsi — tanpa unggah, tanpa membuat akun, tanpa biaya bulanan untuk alat yang cuma dipakai dua kali seminggu — adalah salah satu investasi diam-diam yang hasilnya terasa dalam hitungan bulan.",
    "Berikut ini operasi-operasi spesifik yang membuat gaya hidup pekerja lepas dari HP benar-benar bisa dijalankan — cepat, privat, dan tanpa beban biaya langganan.",
  ],
  workflows: [
    {
      title: "Kirim proposal yang rapi sebagai PDF",
      body: "Ekspor proposal Anda dari Notion, Pages, atau Google Docs ke PDF. Tanda tangani, lampirkan ke email, kirim. Penerima melihat persis seperti yang Anda maksud.",
    },
    {
      title: "Tanda tangani perjanjian klien dari HP",
      body: "Gambar tanda tangan Anda sekali saja, pakai lagi di setiap kontrak berikutnya. Tidak perlu lagi bilang “saya balas nanti kalau sudah di depan laptop”.",
    },
    {
      title: "Pindai struk pengeluaran begitu Anda belanja",
      body: "Meeting sambil ngopi, naik taksi, membeli peralatan — pindai saat itu juga. PDF-nya dapat dicari dan cocok untuk software akuntansi.",
    },
    {
      title: "Selalu buat faktur dalam bentuk PDF",
      body: "Apa pun alat invoicing yang Anda pakai, ekspor ke PDF sebelum mengirim. Mengurangi risiko diedit orang lain dan terlihat lebih profesional dibanding DOCX.",
    },
    {
      title: "Kumpulkan deliverable untuk serah terima",
      body: "Gabungkan brief final, perjanjian yang sudah ditandatangani, dan riset pendukung menjadi satu PDF arsip saat menutup sebuah proyek.",
    },
  ],
  appPitch:
    "PDF Editor adalah kuda pekerja diam-diam bagi pekerja lepas — tidak menggantikan alat desain atau invoicing Anda, hanya membuat lapisan dokumen jadi tanpa usaha. Gratis, native, langsung di perangkat. Tersedia untuk iOS dan Android.",
  related: [
    { label: "Tanda tangani PDF dari HP", path: "/sign-pdf" },
    { label: "Alur kerja PDF untuk bisnis", path: "/pdf-for-business" },
    { label: "Kasus penggunaan — kerja jarak jauh", path: "/use-cases/remote-work" },
  ],
};

export default content;
