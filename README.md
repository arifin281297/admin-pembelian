#  Admin Pembelian Sederhana

Aplikasi sederhana berbasis **Node.js**, **Express.js**, **EJS**, dan **MySQL** untuk mengelola data produk, stok, dan transaksi pembelian dengan konsep **MVC (Model-View-Controller)**.

---

##  Teknologi yang Digunakan

- Node.js
- Express.js
- EJS
- MySQL
- TailwindCSS

---

#  Struktur Folder

```text
admin-pembelian
│
├── app.js
├── package.json
├── config
│     └── db.js
├── controllers
│     ├── productController.js
│     └── purchaseController.js
├── models
│     ├── productModel.js
│     ├── stockModel.js
│     └── purchaseModel.js
├── routes
│     ├── productRoutes.js
│     └── purchaseRoutes.js
├── views
│     ├── index.ejs
│     ├── products.ejs
│     ├── purchases.ejs
│     ├── createPurchase.ejs
│     └── partials
│          ├── header.ejs
│          ├── sidebar.ejs
│          └── footer.ejs
├── public
└── sql
      └── db_pembelian.sql
```

---

# Instalasi

## 1. Clone Repository

```bash
git clone https://github.com/arifin281297/admin-pembelian.git
cd admin-pembelian
```

## 2. Install Dependency

```bash
npm install
```

Dependency yang digunakan:

- express
- ejs
- mysql2
- nodemon

---

## 3. Buat Database

Jalankan query berikut:

```sql
CREATE DATABASE db_pembelian;
```

Import file:

```text
sql/db_pembelian.sql
```

atau melalui phpMyAdmin.

---

## 4. Konfigurasi Database

Edit file:

```text
config/db.js
```

Sesuaikan konfigurasi MySQL:

```javascript
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_pembelian'
});

module.exports = db;
```

---

## 5. Menjalankan Aplikasi

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Server berjalan di:

```text
http://localhost:3000
```

---

#  Fitur

##  Data Produk

Menampilkan:

- Kode Produk
- Nama Produk
- Harga
- Stok

---

##  Input Pembelian

Admin dapat:

- Memilih produk
- Memasukkan jumlah pembelian
- Menyimpan transaksi

Saat transaksi dibuat:

- Data masuk ke tabel `purchases`
- Stok produk otomatis berkurang

Contoh:

| Produk | Stok Awal | Qty | Stok Akhir |
|----------|---------:|----:|---------:|
| Mouse Logitech | 50 | 10 | 40 |

---

## Cancel Pembelian

Admin dapat membatalkan transaksi.

Saat transaksi dibatalkan:

- Status berubah menjadi `CANCELLED`
- Stok produk dikembalikan

Contoh:

| Stok Sebelum Cancel | Qty Transaksi | Stok Setelah Cancel |
|-------------------:|---------------:|-------------------:|
| 40 | 10 | 50 |

---

# Flow Sistem

## Input Pembelian

```text
Input Pembelian
        │
        ▼
Insert ke purchases
        │
        ▼
Update stock
        │
        ▼
Stock berkurang
```

## Cancel Pembelian

```text
Cancel Purchase
        │
        ▼
Status = CANCELLED
        │
        ▼
Update stock
        │
        ▼
Stock kembali
```

---

# Arsitektur MVC

## Model

Berisi query database:

- productModel.js
- stockModel.js
- purchaseModel.js

## Controller

Berisi business logic:

- productController.js
- purchaseController.js

## View

Tampilan halaman:

- index.ejs
- products.ejs
- purchases.ejs
- createPurchase.ejs

## Routes

Penghubung URL dengan controller:

- productRoutes.js
- purchaseRoutes.js

---


# Author

**Ahmad Zainul Arifin**