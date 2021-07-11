const express = require('express');
const router = express.Router();
 
const createProduct = require('../../controllers/products/create-product');
const getProduts = require('../../controllers/products/get-products');
const updateProducts = require('../../controllers/products/updateProducts');
const deleteProduct = require('../../controllers/products/delete-product');


router.post('/product', createProduct.createProduct);
router.get('/products', getProduts.getProduts);
router.put('/update-product', updateProducts.updateProducts);
router.delete('/delete-product', deleteProduct.deleteProduct);




module.exports = router;