const express = require('express');
const router = express.Router();
const middleware = require('../../middleware/middleware');
 
const createProduct = require('../../controllers/products/create-product');
const getProduts = require('../../controllers/products/get-products');
const updateProducts = require('../../controllers/products/updateProducts');
const deleteProduct = require('../../controllers/products/delete-product');


router.post('/product', middleware.validarTokenAdmin, createProduct.createProduct);
router.get('/product', getProduts.getProduts);
router.put('/product',  middleware.validarTokenAdmin, updateProducts.updateProducts);
router.delete('/product', middleware.validarTokenAdmin, deleteProduct.deleteProduct);




module.exports = router;