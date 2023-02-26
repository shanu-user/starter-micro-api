import jwt from 'jsonwebtoken'

const auth = (req, res, next) =>{
    try{
        const token = req.headers.authorization.split(' ')
        // let decodeData = jwt.verify(token, 'test')
        let decodeData = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decodeData?.id
        next()
    }catch(error){
        console.log(error)
    }
}

export default auth