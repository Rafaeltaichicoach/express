CREATE TABLE clientes (
  id_cliente VARCHAR(20) primary key not null, 
  nombre VARCHAR(20), 
  email VARCHAR(100), 
  telefono VARCHAR(15), 
  direccion VARCHAR(25), 
  fecha_nacimiento VARCHAR(50), 
  genero VARCHAR(10), 
  fecha_registro VARCHAR(50)
);

CREATE TABLE productos (
  id_producto VARCHAR(20) primary key not null, 
  nombre_producto VARCHAR(100), 
  marca VARCHAR(50), 
  categoria VARCHAR(50), 
  precio VARCHAR(20), 
  stock VARCHAR(20), 
  descripcion VARCHAR(100)
);

CREATE TABLE pedidos (
  id_pedido VARCHAR(20) primary key not null, 
  id_cliente VARCHAR(10), 
  fecha_pedido VARCHAR(20), 
  metodo_pago VARCHAR(50), 
  estado VARCHAR(20)
);

CREATE TABLE usuarios (
  id VARCHAR(20) primary key not null,
  username VARCHAR(20), 
  pass VARCHAR(10)
);