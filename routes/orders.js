const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// INDEX User orders
router.get('/user', ctrl.orders.userOrders);

// router.get('/city/:id', ctrl.orders.cityOrders);

// SHOW order
router.get('/:id', ctrl.orders.show);

// CREATE order
router.order('/', ctrl.orders.create);

// UPDATE order
router.put('/:id', ctrl.orders.update);

// DELETE order
router.delete('/:id', ctrl.orders.deleteorder);

module.exports = router;
