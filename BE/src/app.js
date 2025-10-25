import express from 'express';
import cuentasRoutes from './routes/cuentasRoutes.js';

const app = express();

app.use(express.json());

app.use('/', cuentasRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'API de Cuentas - Parcial 2',
    endpoints: [
      'GET /cuentas',
      'GET /cuenta/:id',
      'GET /cuentasParam?queryParam=valor',
      'GET /cuentasBalance'
    ]
  });
});

export default app;