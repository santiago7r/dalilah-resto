const express = require('express');
const router = express.Router();
const productRouter = require('../../controllers/products/list-of-products');
const dishRequest = require('../../controllers/products/dish-request');
const dishState = require('../../controllers/products/update-dish-state');
const createProduct = require('../../controllers/products/create-product');
const editProduct = require('../../controllers/products/edit-product');
const deleteProduct = require('../../controllers/products/delete-product');

router.get('/list-of-products', productRouter.listOfProduts);
router.get('/dish-request', dishRequest.dishRequest);
router.post('/update-dish-state', dishState.updateDishState);
router.post('/create-product', createProduct.createProduct);
router.put('/update-product', editProduct.editProduct);
router.delete('/delete-product', deleteProduct.deleteProduct);



module.exports = router;