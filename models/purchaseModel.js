const db = require('../config/db');

const Purchase = {

    getAll: (callback) => {
        db.query(`
            SELECT purchases.*, products.nama_produk
            FROM purchases
            JOIN products ON purchases.product_id = products.id
        `, callback);
    },

    create: (data, callback) => {
        db.query(
            `INSERT INTO purchases (no_invoice, product_id, qty, total_harga, status)
             VALUES (?, ?, ?, ?, 'ACTIVE')`,
            [
                data.no_invoice,
                data.product_id,
                data.qty,
                data.total_harga
            ],
            callback
        );
    },

    cancel: (id, callback) => {
        db.query(
            "UPDATE purchases SET status='CANCELLED' WHERE id=?",
            [id],
            callback
        );
    },

    getById: (id, callback) => {
        db.query(
            "SELECT * FROM purchases WHERE id=?",
            [id],
            callback
        );
    }

};

module.exports = Purchase;