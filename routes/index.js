
const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const productRouter = require('./products');
const orderRouter = require('./orders');
const orderRouterProduct = require('./order_product_bridge');

router.use('/', userRouter);
router.use('/', productRouter);
router.use('/', orderRouter);
router.use('/', orderRouterProduct);

module.exports = router;