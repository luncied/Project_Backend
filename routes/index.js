const express = require('express');
//import FrutaController from '../controller/fruta.controller.js';

const router = express.Router();

router.get('/products/:id', () => {})
router.post('/products', () => {})
router.put('/products/:id', () => {})
router.delete('/products/:id', () => {})

module.exports = {
  router
};