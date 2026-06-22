const mysql = require('mysql2');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_pembelian'
});

db.connect((err) => {
    if (err) {
        console.log("DB Error:", err);
    } else {
        console.log("Database connected");
    }
});

module.exports = db;