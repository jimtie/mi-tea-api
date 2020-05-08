const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// INDEX User addresses
router.get('/user/:id', ctrl.addresses.userAddress);

// SHOW address
router.get('/:id', ctrl.addresses.show);

// CREATE address
router.post('/', ctrl.addresses.create);

// UPDATE address
router.put('/:id', ctrl.addresses.update);

// DELETE address
router.delete('/:id', ctrl.addresses.deleteAddress);

module.exports = router;