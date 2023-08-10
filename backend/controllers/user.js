import mongoose from 'mongoose';
import userData from '../models/userModel.js';

mongoose.set('strictQuery', false);

export const login= async(req,res)=>{
    const {id}=req.params;
    try{
        const post = await userData.findById(id);
        res.status(200).json(post);
    }catch(err){
        console.log(err);
        res.status(404).json({message:err.message})
    }
}

export const register =async (req,res) => {
   const info=req.body;
   const newUser = new userData(info);
   try{
    await newUser.save();
    res.status(201).json(newUser);

   }catch(err){
    console.log(err);
    const errorMessage = err.message.includes('duplicate key') ? 'User already exists' : err.message;
    res.status(409).json({ message: errorMessage });
   }
}


export const updateUser =async (req,res) => {
    const {id}=req.params;
    const { fname,lname,email,password,country,street,city,state,pincode,website,about} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:`No user found with ${id}`});
    }
   const updatedPost = { fname,lname,email,password,country,street,city,state,pincode,website,about, _id: id };
   const updatedUser= await userData.findByIdAndUpdate(id, updatedPost, { new: true });
   res.json(updatedUser);
}




