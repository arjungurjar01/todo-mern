import jwt from "jsonwebtoken";

const isAuthenticated = async(req,res,next)=>{
       try {
        const token = req.cookies.token ;
        if(!token){
            return res.status(401).json({
                success:false,
                message :"User Not Authenticated"
            })
        }

        const decode =  jwt.verify(token,process.env.JWT_SECRET_KEY);

        if(!decode){
            return res.status(401).json({
                success:false,
                message :"Invalide token"
            })
        }
        console.log(decode);
        req.id = decode.userId;
        // req.user = decode;

        next() ;

       } catch (error) {
        console.log(error);
       }
}

export default isAuthenticated ;