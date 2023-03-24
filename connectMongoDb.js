import mongoose from 'mongoose'

const connectDB = async ()=>{
    try{
        mongoose.set('strictQuery',false)
        const conn = mongoose.connect(process.env.CONNECTION_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected: ${conn}`)
    }
    catch(err){
        console.log(err.message)
        process.exit(1)
    }
}

export default connectDB