const express = require('express');
const router = express.Router();
const middleware = require('../../middleware/middleware');
 
const createOrder = require('../../controllers/orders/create-orders');
const getOrder = require('../../controllers/orders/get-orders')
const clientOrder = require('../../controllers/orders/get-client-orders')
const updateorders = require('../../controllers/orders/update-order');




router.post('/order', createOrder.createOrders);
router.get('/allOrders', middleware.validarTokenAdmin, getOrder.getOrder);
router.get('/clientOrders', clientOrder.clientOrder);
router.put('/order',  middleware.validarTokenAdmin, updateorders.updateorders);



module.exports = router;

