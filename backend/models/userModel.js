import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:{
        type: String,
        required: true,
        unique: true,
      },
    password:String,
    country:String,
    state:String,
    city:String,
    pincode:String,
    website:String,
    description:String,
});

const userData= mongoose.model('PostMessage',userSchema);

export default userData;