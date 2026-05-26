import * as sql from '../models/usuarios.model.js'
import { jwtSign } from '../../util/auth/jwt.js'


export const register = (req, res) => sql.register(req.body)
  .then((result) => {
    if (result.code) {
      res.status(500).json({ status: false, code: 500, message: result })
      return
    }
    res.status(201).json({ status: true, code: 201, message: 'Usuario creado con éxito' })
    })
  .catch((error) => {
    const isDuplicate = error?.code === '23505'
    const statusCode = isDuplicate ? 409 : 500
    const message = isDuplicate ? 'El id de usuario ya existe' : error.message || 'Error interno del servidor'

    res.status(statusCode).json({ status: false, code: statusCode, message })
  })

export const login = (req, res) => sql.login(req.body)
  .then((result) => {

    console.log(result)
    if (result.length ===0 ){
      res.status(200).json({ status: true, code: 200, message: 'Usuario y/o contraseña no existen' })
      return
    } 
    const token = jwtSign(result[0])
    console.log(token)

    res.status(200).json({ 
      status: true, 
      code: 200, 
      message: {token} 
    })
  })
  .catch((error) => {
    console.log(error)

    const message = error.message || 'Error interno del servidor'
    const statusCode = ['Usuario no encontrado', 'Contraseña incorrecta'].includes(message) ? 401 : 500

    res.status(statusCode).json({ 
      status: false, 
      code: statusCode, 
      message 
    })
  })