
const express = require('express');
const router = express.Router();
const middleware = require('../../middleware/middleware');
 
const orderProductBridge = require('../../controllers/order_product_bridge/post-order-product');
const getOrderProduct = require('../../controllers/order_product_bridge/get-order-product')


// middleware.validarTokenAdmin,

router.post('/order-product', orderProductBridge.orderProductBridge);
router.get('/order-product', getOrderProduct.getOrderProduct);


module.exports = router;

