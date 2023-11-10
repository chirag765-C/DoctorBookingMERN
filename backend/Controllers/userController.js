import User from '../models/UserSchema.js';
// for finding the user by id and update
export const updateUser=async(req,res)=>{
    const id=req.params.id;

    try{
     const updateUser=await   User.findByIdAndUpdate(id,{$set:req.body},{new:true});

     res.status(200).json({success:true,message:"Succesfully updated",data:updateUser});

    }
    catch(err){
     res.status(500).json({success:false,message:"Failed to update"});

    }
}
//for deleting the user by id

export const deleteUser=async(req,res)=>{
    const id=req.params.id;

    try{
     const deleteUser=await   User.findByIdAndDelete(id,);

     res.status(200).json({success:true,message:"Succesfully deleted"});

    }
    catch(err){
     res.status(500).json({success:false,message:"Failed to delete"});
     
    }
}
// for single user
export const getSingleUser=async(req,res)=>{
    const id=req.params.id;

    try{
     const user=await   User.findById(id,);

     res.status(200).json({success:true,message:"User found",data:user});

    }
    catch(err){
     res.status(500).json({success:false,message:"No user found"});
     
    }
}

//for all user
export const getAllUser=async(req,res)=>{
    

    try{
     const users=await   User.find({}).select("-password");

     res.status(200).json({success:true,message:"User found",data:users});

    }
    catch(err){
     res.status(500).json({success:false,message:"No Users found"});
     
    }
}