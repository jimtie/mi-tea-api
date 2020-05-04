const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// INDEX Cities
router.get('/', ctrl.machine.index);