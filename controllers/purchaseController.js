const Product = require('../models/productModel');
const Purchase = require('../models/purchaseModel');
const Stock = require('../models/stockModel');


exports.form = (req,res)=>{

    Product.getAll((err,result)=>{
        res.render('createPurchase', {
            products: result
        });
    });

};


exports.store = (req,res)=>{

    const product_id = req.body.product_id;
    const qty = req.body.qty;

    Product.getById(product_id, (err, product)=>{

        const harga = product[0].harga;
        const total = harga * qty;

        const data = {
            no_invoice: "INV"+Date.now(),
            product_id,
            qty,
            total_harga: total
        };

        Purchase.create(data, ()=>{

            Stock.decrease(product_id, qty, ()=>{

                res.redirect('/purchases');

            });

        });

    });

};



exports.list = (req,res)=>{

    Purchase.getAll((err,result)=>{
        res.render('purchases', {
            purchases: result
        });
    });

};


exports.cancel = (req,res)=>{

    const id = req.params.id;

    Purchase.getById(id, (err,data)=>{

        const item = data[0];

        Purchase.cancel(id, ()=>{

            Stock.increase(item.product_id, item.qty, ()=>{
                res.redirect('/purchases');
            });

        });

    });

};