<<<<<<< HEAD
import express from 'express'
import { createPayment } from '../controllers/Payment.js'

const router = express.Router()

router.post('/create-checkout-session', createPayment)

export default router  
=======
import express from 'express'
import { createOrders } from '../controllers/Payment.js' 

const router = express.Router()

router.get('/create', createOrders )


export default router
>>>>>>> cfa06a7437310d3261df96e4173bdc6cc30825c0
