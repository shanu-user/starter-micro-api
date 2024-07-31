import mongoose from 'mongoose'
import Stripe from 'stripe'
import axios from 'axios'

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)


export const createPayment = async (req, res) =>{
	

}
