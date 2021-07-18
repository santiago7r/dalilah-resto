const express = require('express');
const router = express.Router();
const middleware = require('../../middleware/middleware');
 
const createOrder = require('../../controllers/orders/create-orders');
const getOrder = require('../../controllers/orders/get-orders')
// const getAllOrders = require();
// const getOrder = require();
const updateorders = require('../../controllers/orders/update-order');
// const deleteOrder = require(); 

// middleware.validarTokenAdmin,

router.post('/order', createOrder.createOrders);
router.get('/allOrders', middleware.validarTokenAdmin, getOrder.getOrder);
router.put('/order',  middleware.validarTokenAdmin, updateorders.updateorders);
// router.delete('/order', middleware.validarTokenAdmin, deleteorder.deleteorder);


module.exports = router;

