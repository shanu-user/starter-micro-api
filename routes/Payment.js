import express from 'express'
import { createOrders } from '../controllers/Payment.js' 

const router = express.Router()

router.get('/create', createOrders )


export default router