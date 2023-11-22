import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import paymentRoutes from './routes/Payment.js'
import connectDB from "./connectMongoDb.js"



dotenv.config();
connectDB()
const app=express();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());


//Handling API requests
app.get('/',(req,res)=>{
    res.send("This is a stack overflow clone API")
})

app.post('/payment', paymentRoutes)
app.use('/user',userRoutes)
app.use('/payment',paymentRoutes)
app.use('/questions',questionRoutes)
app.use('answer',answerRoutes)

const PORT=process.env.PORT || 5000

// const CONNECTION_URL="mongodb+srv://shanu-user:shanu-user@stack-overflow-clone.wulzsnw.mongodb.net/?retryWrites=true&w=majority"


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})


