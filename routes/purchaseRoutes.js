const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');

router.get('/purchases',purchaseController.list);

router.get('/purchase/create',purchaseController.form);

router.post('/purchase/store',purchaseController.store);

router.get('/purchase/cancel/:id',purchaseController.cancel);

module.exports=router;