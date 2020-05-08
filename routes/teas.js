const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// INDEX Teas
router.get('/', ctrl.teas.index);

// // SHOW Tea
router.get('/:id', ctrl.teas.show);

module.exports = router;
