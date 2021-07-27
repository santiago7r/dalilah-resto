Como instalar y utilizar la API
1 - Clonar proyecto usando el siguiente link:

https://github.com/santiago7r/dalilah-resto.git

2 - Instalación de dependencias
npm install

3 - Creando base de datos

Abrir con XAMPP u otro programa alternativo que soporte MySQL un servidor local y asegurarse que el puerto sobre el cual se está ejecutando es el 3306
Inicializar los servicios de Apache y MySQL

Abrir el panel de control del servicio MySQL

Generar una nueva base de datos llamada delilah.

Dentro del panel de control de la base de datos creada importar el archivo /db/data-base.sql

4 - Iniciando el servidor
Crear un archivo .env en el repositorio local y declararle las siguientes variables.

ACCESS_TOKEN_SECRET=

En la consola correr el comando nodemon app.js

5 - Listo para usar!

Testear los endpoints provistos desde postman para poder hacer uso de la API y base de datos generadas

Documentación de la API


_________________________________________________________________________________________________________________________________________
_________________________________________________________________________________________________________________________________________

Nota: Al hacer login un client se genera un token pero este no tienen autorización para tareas de administrador, cuando se loguea un admin 
      se genera un token que sí tinene permisos para hacer actividades establecidas para un administrador. A futuro cada token podría ser
      usado para features adicionales.

      Cualquira puede ver los productos disponibles a través de el "get" de productos.

      