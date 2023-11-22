<<<<<<< HEAD
import mongoose from 'mongoose'
import Stripe from 'stripe'
import axios from 'axios'
import {v4 as uuid} from 'uuid'

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)


export const createPayment = async (req, res) =>{
    // try{
    //     console.log(req.body)
    //     const createCharges = await stripe.charges.create({
    //         amount: 1,
    //         currency: "inr",
    //         source: {
    //             "object": "card",
    //             "number": "6521650191259828",
    //             "exp_month": 7,
    //             "exp_year": 2029,
    //             "cvc": "691"
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
=======
import express from 'express'
import stripePackage from 'stripe'
import { v4 as uuidv4} from 'uuid'

const stripe = stripePackage("pk_live_51OCHISSGM9rJz5UgnNk9jJkrb1EuBcsziHY4ROlfSeIJWIsPFYKYyyLPwHAwNVC47u0Vv4cBPkpwlMseuIpGH2k800fA4dXdMA")
const idempotencyKey = uuidv4()

export const createOrders = async (req, res) =>{
    stripe.products.create({
        name: 'Free Plan',
        description: '1 question/day free-of-cost'
    }).then(product => {
        stripe.prices.create({
            unit_amount: 0,
            currency: 'inr',
            recurring: {
                interval: 'month'
            },
            product: idempotencyKey
        }).then((result) => res.status(200).json(result))
        .catch(err => console.log(err))
    })
    
    stripe.products.create({
        name: 'Silver Plan',
        description: '5 questions/day costs 100 rupees/month'
    })
    
    stripe.products.create({
        name: 'Gold Plan',
        description: 'Unlimited questions priced at 1000 rupees/month'
    })

}
>>>>>>> cfa06a7437310d3261df96e4173bdc6cc30825c0
