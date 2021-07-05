
const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const productRouter = require('./products');

router.use('/', userRouter);
router.use('/', productRouter);

module.exports = router;