import express from 'express'
import { createPayment } from '../controllers/Payment.js'

const router = express.Router()

router.post('/create-checkout-session', createPayment)

export default router  
