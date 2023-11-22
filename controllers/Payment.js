import mongoose from 'mongoose'
import Stripe from 'stripe'
import axios from 'axios'

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)


export const createPayment = async (req, res) =>{
    // try{
    //     console.log(req.body)
    //     const createCharges = await stripe.charges.create({
    //         amount: 1,
    //         currency: "inr",
    //         source: {
    //            
    //         },
    //         "description": "Free Trial"
    //     })
    //     console.log(createCharges)
    //     res.status(200).json({clientCharges: createCharges})
    //     // res.status(200).json({clientSecret: paymentIntents.client_secret})
    // }
    // catch(err){
    //     res.status(500).json({error: err.message})
    // }
    console.log(req.body)
    stripe.charges.create({
        amount: 1,
        currency: 'inr',
        source: {
            object: "card",
            number: "6521650191259828",
            exp_month: 7,
            exp_year: 2029,
            cvc: "691"
        },
        description: 'Free Trial'
    })
    // const {product, token} = req.body
    // console.log(product.price)
    // const idempotencyKey = uuid()
    // console.log(idempotencyKey)

    // return stripe.customers.create({
    //     email: token.emai,
    //     source: token.id
    // }).then(customer => {
    //     stripe.charges.create({
    //         amount: product.price,
    //         customer: customer.id,
    //         receipt_email: token.email,
    //         description: product.description,

    //     }, {idempotencyKey})
    // }).then((result) => res.status(200).json(result))
    // .catch((err) => console.log(err))
}
