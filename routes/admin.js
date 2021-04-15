const path = require('path');

const express = require('express');

const roootDir =require('../util/path')

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(roootDir, 'views', 'add-product.html'));
  // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
