INSERT INTO clientes (id_cliente, nombre, email, telefono, direccion, fecha_nacimiento, genero, fecha_registro) VALUES 
('A-1153', 'Mariana', 'mari@gmail.com', '932168465', 'Av. Valparaiso 102', '05-02-1988', 'femenino', '25-05-2023'),
('A-1234', 'Petronila', 'pac@gmail.com', '987654321', 'Los tulipanes 610', '25-03-1957', 'femenino', '28-02-2020'),
('A-4567', 'Javiera', 'jav@gmail.com', '912345678', 'Los acacios 456', '30-04-1984', 'femenino', '26-02-2020'),
('A-7895', 'Sandra', 'sand@gmail.com', '945678351', 'Las Rosas 102', '27-05-1980', 'femenino', '10-03-2021'),
('A-9516', 'Andrea', 'andy@gmail.com', '978413218', 'Pedro Montt 3020', '10-04-1995', 'femenino', '11-06-2022');


INSERT INTO productos (id_producto, nombre_producto, marca, categoria, precio, stock, descripcion) VALUES
('B-01', 'Fantasy EDP 100 ml', 'Britney Spears', 'Perfumes', '23990', '12', 'perfume'),
('B-03', 'Hidden Fantasy EDP 100 ml', 'Britney Spears', 'Perfumes', '18990', '10', 'perfume'),
('B-04', 'Curious EDP 100 ml', 'Britney Spears', 'Perfumes', '15990', '11', 'perfume'),
('B-05', 'Fantasy Intense EDP 100 ml', 'Britney Spears', 'Perfumes', '19990', '15', 'perfume'),
('B-06', 'Naked Fantasy EDP 100 ml', 'Britney Spears', 'Perfumes', '14990', '20', 'perfume');

INSERT INTO pedidos (id_pedido, id_cliente, fecha_pedido, metodo_pago, estado) VALUES 
('J-635', 'A-7895', '10-03-2021', 'efectivo', 'procesado'),
('J-763', 'A-1153', '25-05-2023', 'debito', 'enviado'),
('J-852', 'A-4567', '26-02-2020', 'debito', 'enviado'),
('J-857', 'A-9516', '11-06-2022', 'efectivo', 'pendiente'),
('J-965', 'A-1234', '28-02-2020', 'credito', 'procesado');

INSERT INTO usuarios (id, username, pass) VALUES
('K-654', 'Roberto', '3698'),
('K-987', 'Ricardo', '7412');

SELECT * FROM clientes;
SELECT * FROM productos;
SELECT * FROM pedidos;
SELECT * FROM usuarios;