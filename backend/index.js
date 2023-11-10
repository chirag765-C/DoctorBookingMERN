import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './Routes/auth.js';
import userRoute from './Routes/user.js';
import doctorRoute from '/Routes/doctor.js';
import  reviewRoute from './Routes/review.js';


dotenv.config();

const app=express();

const port=8000;

const corsOptions={
    origin:true
};

//database connection

mongoose.set('strictQuery',false);

const connectDB=async()=>{
    try{
 
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("Mongodb database connected");
    }
    catch(err){
        console.log("Monogdb connection failed");

    }
}



app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions)); 
  //if there comes domain like /api/v1/auth/register or /api/v1/auth/login then we have to use this route
app.use('/api/v1/auth',authRoute); 
app.use('/api/v1/users',userRoute);
app.use('/api/v1/doctors',doctorRoute);
app.use('/api/v1/reviews',reviewRoute);
app.get("/",(req,res)=>{
    res.send("Doctor Home Page")
});

app.listen(port,(req,res)=>{
    connectDB();
    console.log(`your server is running on port ${port}`);
})

