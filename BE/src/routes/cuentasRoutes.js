import express from 'express';
import {
  getAllCuentas,
  getCuentaById,
  searchCuentas,
  getCuentasBalance
} from '../controllers/cuentasController.js';

const router = express.Router();

router.get('/cuentas', getAllCuentas);

router.get('/cuenta/:id', getCuentaById);

router.get('/cuentasParam', searchCuentas);

router.get('/cuentasBalance', getCuentasBalance);

export default router;