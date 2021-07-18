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

ACCESS_TOKEN_SECRET=fa5e467516420b47c83f72ac17a8ac737ef4eb812065de3fcb3c9c4112174528bc8d66177bf9d423b3744fc6789dd9c484e825e93bc8a2c314927ded807d08f6

En la consola correr el comando nodemon app.js

5 - Listo para usar!

Testear los endpoints provistos desde postman para poder hacer uso de la API y base de datos generadas

Documentación de la API