import mongoose from 'mongoose';

const DoctorSchema= new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    name:{type:String,required:true},
    phone:{type:Number},
    photo:{type:String},
    ticketPrice:{type:Number},
    role:{type:String},
    

    //fields of doctor only
    specialization:{type:String},
    qualification:{
        type:Array,
    },

    experience:{type:Array},
    bio:{type:String,maxLength:50},
    timeSlots:{type:Array},
    reviews:[{type:mongoose.Types.ObejectId,ref:"Review"}],
    averageRating:{
        type:Number,
        default:0,
    },
    totalRating:{
        type:Number,
        default:0,
    },

    isApproved:{
        type:String,
        enum:["pending","approved","cancelled"],
        default:"pending",
    },
    appointments:[{type:mongoose.Types.ObjectId,ref:"Appointmnet"}],



});

export default mongoose.model("Doctor",DoctorSchema);

