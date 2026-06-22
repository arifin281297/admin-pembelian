const Product = require('../models/productModel');

exports.dashboard = (req,res)=>{
    res.render('index');
};

exports.products = (req,res)=>{

    Product.getAll((err,result)=>{
        res.render('products', {
            products: result
        });
    });

};