# Website KGP

Landing page dan katalog layanan KGP yang dibangun dengan Next.js 15, React 19, Tailwind CSS 4, dan beberapa komponen animasi. Proyek ini menampilkan halaman utama, deskripsi layanan, galeri, dan formulir kontak yang terhubung ke Google Apps Script.

## Prasyarat

- Node.js 18.18+ atau 20.x (sesuai persyaratan Next.js 15)
- npm 9+
- Git untuk mengelola repositori

## Cara Menjalankan Lokal

1. Klon repo ini dan masuk ke folder proyek.
2. Instal dependensi:
   ```bash
   npm install
   ```
3. Buat file `.env.local` di root proyek (lihat bagian **Konfigurasi Environment**).
4. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
5. Buka `http://localhost:3000` di browser.

Untuk build produksi:
```bash
npm run build
npm run start
```

## Konfigurasi Environment

File `.env.local` tidak dikomit untuk menjaga keamanan. Teman kamu perlu membuatnya secara manual dengan nilai yang valid:

```ini
NEWSDATA_API_KEY=masukkan_api_key_newsdata
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/<...>/exec
```

- `NEWSDATA_API_KEY` dipakai oleh endpoint `src/app/api/newsdata/route.ts` untuk mengambil berita terkini.
- `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` dipakai di komponen `src/components/ContactUs.tsx` untuk mengirim data formulir kontak ke Google Apps Script.

Jika ada variabel lain yang dibutuhkan di kemudian hari, tambahkan ke `.env.local` dan dokumentasikan di sini.

## Skrip npm

- `npm run dev` - menjalankan Next.js dalam mode pengembangan dengan hot reload.
- `npm run build` - membangun aplikasi untuk produksi.
- `npm run start` - menjalankan hasil build produksi.
- `npm run lint` - memeriksa kode dengan ESLint.

## Struktur Penting

- `src/app/` - rute Next.js, termasuk halaman layanan seperti `ATMModuleRework`, `CallCenter`, dan lain-lain.
- `src/components/` - komponen UI reuseable (Hero, ContactUs, animasi, dan sebagainya).
- `public/images/` - aset gambar resolusi tinggi yang digunakan di seluruh situs.

## Catatan Tambahan

- Proyek ini memiliki banyak aset gambar (sekitar 240 MB). Pastikan koneksi stabil saat cloning atau pushing agar tidak gagal karena ukuran payload besar.
- Komponen `ContactUs` menggunakan fetch ke Google Script; saat menjalankan lokal pastikan Apps Script tersebut mengizinkan permintaan dari origin lokal.
- Jika men-deploy, pastikan variabel environment sudah di-set pada platform hosting yang kamu gunakan.

Selamat berkontribusi!
