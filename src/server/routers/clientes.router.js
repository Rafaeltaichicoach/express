import { Router } from 'express'
import * as clientesController from '../controllers/clientes.controller.js'
import { authToken, validateClienteBody } from '../middlewares/clientes.middleware.js'

const router = Router()

router.get('/clientes', authToken, clientesController.findAll)
router.get('/clientes/:id', authToken, clientesController.findById)
router.post('/clientes', authToken, validateClienteBody, clientesController.create)
router.put('/clientes/:id', authToken, validateClienteBody, clientesController.updateById)
router.delete('/clientes/:id', authToken, clientesController.deleteById)

export default router
