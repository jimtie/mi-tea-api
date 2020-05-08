const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// INDEX User credits
router.get('/user/:id', ctrl.credits.userCredit);

// SHOW credit
router.get('/:id', ctrl.credits.show);

// CREATE credit
router.post('/', ctrl.credits.create);

// UPDATE credit
router.put('/:id', ctrl.credits.update);

// DELETE credit
router.delete('/:id', ctrl.credits.deleteCredit);

module.exports = router;