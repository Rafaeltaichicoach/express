import db from '../database/db_connect.js'
import {encryptPassword, comparePassword } from '../../util/auth/bcrypt.js'

export const register = async ({ id, username, pass}) => {
    const hashedPassword = await encryptPassword(pass)
    return db('INSERT INTO usuarios (id, username, pass) VALUES ($1, $2, $3);', [id, username, hashedPassword] )    
}

export const login = async ({ username, pass }) => {
    const result = await db('SELECT * FROM usuarios WHERE username = $1;', [username])

    if (result.length === 0) {
        throw new Error('Usuario no encontrado')
    }
    
    const user = result[0]
    const isMatch = await comparePassword(pass,user.pass)
    
    if (!isMatch) {
        throw new Error('Contraseña incorrecta')
    }

    // Return as an array to match controller expectations (result[0])
    return [{ id: user.id, username: user.username }]
}
