import mongoose from 'mongoose';
import Doctor from '../models/DoctorSchema.js';

const reviewSchema=new mongoose.model({
    doctor:{
        type:mongoose.Types.ObjectId,
        ref:"Doctor",
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User",
    },
    reviewText:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
        min:0,
        max:5,
        default:0,
    },
},
    {timestamps:true}
);

reviewSchema.pre(/^find/,function(next){
    this.populate({
        path:'user',
        select:'name photo',
    });
    next();
});

reviewSchema.statics.calcAverageRatings=async function(doctorId){
    //this pounts the current review
    const stats=await this.aggregate([{
        $match:{doctor:doctorId}},
        {
            $group:{
                _id:'$doctor',
                numofRating:{$sum:1},
                avgRating:{$avg:'$rating'}
            }
        }
    ]);
    await  Doctor.findByIdAndUpdate(doctorId,{
        totalRating:stats[0].numberofRating,
        averageRating:stats[0].avgRating,
    });
};
reviewSchema.post('save',function(){
    this.contructor.calcAverageRatings(this.doctor)
})

export default mongoose.model("Review",reviewSchema);