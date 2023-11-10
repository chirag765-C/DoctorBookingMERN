
import jwt from 'jsonwebtoken';
import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';

export const authenticate=async(req,res,next)=>{

    //get token from header
    const authToken=req.headers.authorization

    //check if token exists
    //Bearer means the actual token
    if(authToken || !authToken.startsWith('Bearer')){
        return res.status(401).json({success:false,message:'No token,authorization denied'})
    }

 try{
//here we will verify the token
console.log(authToken);
next();
 }
 catch(err){

 }
}