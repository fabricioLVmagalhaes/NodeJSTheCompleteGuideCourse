const path = require('path');

const express = require('express');

const router = express.Router();

const procuctsController = require('../controllers/products');

// /admin/add-product => GET
router.get('/add-product', procuctsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', procuctsController.postAddProduct);

module.exports = router;
