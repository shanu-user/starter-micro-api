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
