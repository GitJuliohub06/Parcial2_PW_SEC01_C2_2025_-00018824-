import { cuentas } from '../data/cuentas.data.js';

export const getAllCuentas = (req, res) => {
  res.json({
    count: cuentas.length,
    data: cuentas
  });
};

export const getCuentaById = (req, res) => {
  const { id } = req.params;
  const cuenta = cuentas.find(c => c._id === String(id));

  if (cuenta) {
    res.json({
      finded: true,
      account: cuenta
    });
  } else {
    res.json({
      finded: false,
      account: null
    });
  }
};

export const searchCuentas = (req, res) => {
  const { queryParam } = req.query;
  
  if (!queryParam) {
    return res.json({
      finded: false,
      message: "Debe proporcionar un parámetro de búsqueda"
    });
  }
  
  const resultados = cuentas.filter(cuenta => {
    return (
      cuenta._id === queryParam ||
      cuenta.client.toLowerCase().includes(queryParam.toLowerCase()) ||
      cuenta.gender.toLowerCase() === queryParam.toLowerCase()
    );
  });
  
  if (resultados.length === 0) {
    return res.json({
      finded: false
    });
  }
  
  if (resultados.length === 1) {
    return res.json({
      finded: true,
      account: resultados[0]
    });
  }
  
  return res.json({
    finded: true,
    data: resultados
  });
};

export const getCuentasBalance = (req, res) => {
  const cuentasActivas = cuentas.filter(cuenta => cuenta.isActive === true);
  
  if (cuentasActivas.length === 0) {
    return res.json({
      status: false,
      accountBalance: 0
    });
  }

  const balanceTotal = cuentasActivas.reduce((total, cuenta) => {
    const balance = parseFloat(cuenta.balance.replace(/[$,]/g, ''));
    return total + balance;
  }, 0);

  res.json({
    status: true,
    accountBalance: balanceTotal
  });
};