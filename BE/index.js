import express from "express";
import { data } from "./data.js";           

const app = express();

app.use(express.json());

const PORT = 3130;


app.listen(PORT, () => {
  console.log("Server Listening on PORT: ", PORT);
});

app.get("/cuentas", (req, res) => {
  res.json({
    count: data.length,
    data
  });
});

//Link de prueba
// http://localhost:3130/cuentas

app.get('/cuenta/:id', (req, res) => {
  const { id } = req.params;
  const dat = data.find(d => d._id === String(id));

  if (dat) {
    res.json({
      finded: true,
      account: dat
    });
  } else {
    res.json({
      finded: false,
      account: null
    });
  }
});

//Link de prueba valido
// http://localhost:3130/cuenta/68f9a9cfb63bf8e29df4119a

//Link de prueba no valido
// http://localhost:3130/cuenta/123456789


//Realice este endpoint con dicho nombre para crear los 4 endpoints distintos, aunque se podia manejar todo desde el mismo endpoint cuentas :D
app.get('/cuentasParam', (req, res) => {
  const { queryParam } = req.query
  
  if (!queryParam) {
    return res.json({
      finded: false,
      message: "Debe proporcionar un parámetro de búsqueda"
    });
  }
  
  const resultados = data.filter(dat => {
    return (
      dat._id === queryParam ||
      dat.client.toLowerCase().includes(queryParam.toLowerCase()) ||
      dat.gender.toLowerCase() === queryParam.toLowerCase()
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
});
//Links de prueba validos
// http://localhost:3130/cuentasParam?queryParam=male
//estos ultimos 2 endpoints son de datos repetidos para verificar que si se tomen en cuenta todos los datos y no solo uno
// http://localhost:3130/cuentasParam?queryParam=68f9a9cf03402b7fa8db4d31
// http://localhost:3130/cuentasParam?queryParam=Parrish%20Harrington


app.get('/cuentasBalance', (req, res) => {
  const cuentasActivas = data.filter(dat=> dat.isActive === true);
  
  if (cuentasActivas.length === 0) {
    return res.json({
      status: false,
      accountBalance: 0
    });
  }

  const balanceTotal = cuentasActivas.reduce((total, dat) => {
    return total + parseFloat(dat.balance.replace(/[$,]/g, ''));
  }, 0);

  res.json({
    status: true,
    accountBalance: balanceTotal
  });
});

//Link de prueba
//http://localhost:3130/cuentasBalance


