const express = require('express');
const path = require('path');

const productRoutes = require('./routes/productRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine','ejs');

app.use('/',productRoutes);
app.use('/',purchaseRoutes);

app.listen(3000,()=>{
    console.log("Server berjalan di port 3000");
});