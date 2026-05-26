Indicaciones de Uso de Código con Express y BD en Visual Studio Code.

//Abrir Programa PgAdmin4
Crear Base de Datos con el mismo nombre que el archivo DDL.sql en carpeta database.
Crear Tablas e ingresar Datos tal como en el archivo DML.sql en carpeta database.

//Configurar el archivo .env con la misma contraseña del PgAdmin4 y nombre del Database.

//Configurar los archivos .js en Carpeta src (server y util)
Archivos .js contenidos en la Carpeta Controllers, Database, Middlewares, Models y Routers contienen información relacionada con la Base de Datos, las cuales deben cuadrar antes de correr el programa.
Así tambien los archivos app.js e index.js, y también los archivos contenidos en la carpeta util/auth

//Configurar un archivo .gitignore
Esto es para que cuando se suba el repositorio a GitHub no considere algunos archivos que son muy pesados o no es relevante, tales como node_modules y .env

//Segurizar el Código en los archivos .js ubicados en la carpeta Models
En el archivo usuarios.model.js línea 6 y línea 10.
En el archivo productos.model.js línea 5, 8, 11.
en el archivo clientes.model.js línea 5, 8, 11 y 13.

//Inicializar Código y crear los Módulos (node_modules)
npm init -y

//Instalar dependencias previamente señaladas en el archivo package.json
npm i bcrypt cors dotenv express jsonwebtoken pg nodemon

//Correr programa en Servidor (Command Prompt)
npm run dev

//Crear requests con Thunder Client (Extensión previamente instalada) en VisualStudioCode, según lo que quiera el usuario: Crear usuario (register) o Ingresar con usuario ya creado (Login)

1.- POST http://localhost:3000/register
(Body) 
{
  "id": "K-133",
  "username": "Carolina Herrera",
  "pass": "4321"
}

2.- POST http://localhost:3000/login
(Body)
{
  "id": "K-133",
  "username": "Carolina Herrera",
  "pass": "4321"
}

3.- GET http://localhost:3000/clientes
(Sin Body)

Respaldo de requests en Word anexo a este archivo.