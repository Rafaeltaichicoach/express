import express from 'express'
import cors from 'cors'

import { serverLog } from './middlewares/serverLog.middleware.js'
import { clientesRouter, productosRouter, usuariosRouter, errors } from './routers/index.js'

const app = express()
const PORT = process.env.PORT ?? 3_000

//app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
//Manejar errores de JSON mal formado
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ status: false, code:400, message: 'JSON inválido en el cuerpo de la petición'})
    }
    next(err)
})

app.use(serverLog)

app.use(usuariosRouter)
app.use(clientesRouter)
app.use(productosRouter)
app.use(errors)

// Error handler for uncaught server errors
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ status: false, code: 500, message: 'Error interno del servidor' })
})

app.listen(PORT, () => console.log('Server UP!!'))

export default app
