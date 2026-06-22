const db = require('../config/db');

const Stock = {

    getByProductId: (product_id, callback) => {
        db.query("SELECT * FROM stocks WHERE product_id = ?", [product_id], callback);
    },

    decrease: (product_id, qty, callback) => {
        db.query(
            "UPDATE stocks SET qty = qty - ? WHERE product_id = ?",
            [qty, product_id],
            callback
        );
    },

    increase: (product_id, qty, callback) => {
        db.query(
            "UPDATE stocks SET qty = qty + ? WHERE product_id = ?",
            [qty, product_id],
            callback
        );
    }

};

module.exports = Stock;