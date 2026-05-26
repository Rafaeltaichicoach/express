import { jwtVerify } from "../../util/auth/jwt.js";

export const authToken = (req, res, next) => {
    const authorization = req.header('Authorization')

    if (authorization === undefined){
       return res.status(401).json({ status: false, code: 401, message: 'Token no proporcionado' }) // valida que viene el jwt, sin validar aún
    }

    const [bearer, token] = authorization.split(' ')
    if (bearer !== 'Bearer'){
        return res.status(401).json({ status: false, code: 401, message: 'Formato de token inválido' }) //mal sintaxis en token
    }

    try {
        jwtVerify(token) && next() //si falla es error, sino no devuelve nada
    } catch (error) {
        res.status(401).json({ status: false, code: 401, message: 'Token inválido' })
    }
}

export const validateClienteBody = (req, res, next) => {
    const max = {
        id_cliente: 20,
        nombre: 20,
        email: 100,
        telefono: 15,
        direccion: 25,
        fecha_nacimiento: 50,
        genero: 10,
        fecha_registro: 50,
    }

    const body = req.body || {}
    for (const [field, limit] of Object.entries(max)) {
        if (body[field] !== undefined && body[field] !== null) {
            const val = String(body[field])
            if (val.length > limit) {
                return res.status(400).json({ status: false, code: 400, message: `Field '${field}' exceeds max length ${limit}` })
            }
        }
    }
    next()
}

