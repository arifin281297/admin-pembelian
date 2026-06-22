const express=require('express');
const router=express.Router();
const productController=require('../controllers/productController');

router.get('/',productController.dashboard);
router.get('/products',productController.products);

module.exports=router;