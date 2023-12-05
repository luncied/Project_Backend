import express from 'express';
//import FrutaController from '../controller/fruta.controller.js';

const router = express.Router();

router.get('/frutas/:id', FrutaController.getFrutasById)
router.post('/frutas', FrutaController.createFrutas)
router.put('/frutas/:id', FrutaController.updateFruta)
router.delete('/frutas/:id', FrutaController.deleteFruta)

export default router