# Parcial2_PW_SEC01_C2_2025_-00018824-

## Nombre: Julio Alejandro Flores Diaz
## Carnet : 00018824
## seccion : 01

### ENDPOINTS SUGERIDOS

## Endpoint /cuentas
# http://localhost:3130/cuentas

## Endpoint /cuentas/:id_valido
# http://localhost:3130/cuenta/68f9a9cfb63bf8e29df4119a

## Endpoint /cuentas/:id_invalido
# http://localhost:3130/cuenta/123456789

## Endpoint cuentasParam?queryParam="valor"
# Links de prueba validos
http://localhost:3130/cuentasParam?queryParam=male
# estos ultimos 2 links son de datos repetidos para verificar que si se tomen en cuenta todos los datos y no solo uno
// http://localhost:3130/cuentasParam?queryParam=68f9a9cf03402b7fa8db4d31
// http://localhost:3130/cuentasParam?queryParam=Parrish%20Harrington

## Endpoint cuentasBalance
# http://localhost:3130/cuentasBalance
