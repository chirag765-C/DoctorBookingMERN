import Doctor from '../models/DoctorSchema.js';

// for finding the doctor by id and update
export const updateDoctor=async(req,res)=>{
    const id=req.params.id;

    try{
     const updateDoctor=await   Doctor.findByIdAndUpdate(id,{$set:req.body},{new:true});

     res.status(200).json({success:true,message:"Succesfully updated",data:updateDoctor});

    }
    catch(err){
     res.status(500).json({success:false,message:"Failed to update"});

    }
}
//for deleting the doctor by id

export const deleteDocotr=async(req,res)=>{
    const id=req.params.id;

    try{
     const deleteDoctor=await   Doctor.findByIdAndDelete(id);

     res.status(200).json({success:true,message:"Succesfully deleted"});

    }
    catch(err){
     res.status(500).json({success:false,message:"Failed to delete"});
     
    }
}
// for single doctor
export const getSingleDoctor=async(req,res)=>{
    const id=req.params.id;

    try{
     const Doctor=await   Doctor.findById(id).select("-password");

     res.status(200).json({success:true,message:"Doctor found",data:user});

    }
    catch(err){
     res.status(500).json({success:false,message:"No Doctor found"});
     
    }
}

//for all doctor
export const getAllDoctor=async(req,res)=>{
    

    try{
     const doctors=await  Doctor.find({}).select("-password");

     res.status(200).json({success:true,message:"Doctor found",data:doctors});

    }
    catch(err){
     res.status(500).json({success:false,message:"No doctors found"});
     
    }
}