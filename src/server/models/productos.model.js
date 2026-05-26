import db from '../database/db_connect.js'

export const findAll = () => db('SELECT * FROM productos;')

export const findById = (id_producto) => db('SELECT * FROM productos WHERE id = $1;', [id_producto])

export const create = ({ id_producto, nombre_producto, marca, categoria, precio, stock, descripcion }) =>
  db('INSERT INTO productos (id_producto, nombre_producto, marca, categoria, precio, stock) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;', [id_producto, nombre_producto, marca, categoria, precio, stock, descripcion])

export const updateById = ({ id_producto, nombre_producto, marca, categoria, precio, stock, descripcion }) =>
  db('UPDATE personal SET nombre_producto = $2, marca = $3, categoria = $4, precio = $5, stock = $6, descripcion = $7 WHERE id = $1 RETURNING *;', [id_producto, nombre_producto, marca, categoria, precio, stock, descripcion])

export const deleteById = (id_producto) => db('DELETE FROM personal WHERE id_producto = $1 RETURNING *;', [id_producto])
