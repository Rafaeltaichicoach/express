import db from '../database/db_connect.js'

export const findAll = () => db('SELECT * FROM clientes;')

export const findById = (id_cliente) => db('SELECT * FROM clientes WHERE id_cliente = $1;', [id_cliente])

export const create = ({id_cliente, nombre, email, telefono, direccion, fecha_nacimiento, genero, fecha_registro}) =>
  db('INSERT INTO clientes (id_cliente, nombre, email, telefono, direccion, fecha_nacimiento, genero, fecha_registro) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;', [id_cliente, nombre, email, telefono, direccion, fecha_nacimiento, genero, fecha_registro])

export const updateById = ({id_cliente, nombre, email, telefono, direccion, fecha_nacimiento, genero, fecha_registro}) =>
  db('UPDATE clientes SET nombre = $2, email = $3, telefono = $4, direccion = $5, fecha_nacimiento = $6, genero = $7, fecha_registro = $8 WHERE id_cliente = $1 RETURNING *;', [id_cliente, nombre, email, telefono, direccion, fecha_nacimiento, genero, fecha_registro])

export const deleteById = (id_cliente) => db('DELETE FROM clientes WHERE id_clientes = $1 RETURNING *;', [id_cliente])
