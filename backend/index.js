// import express from "express"
// import cors from "cors"
// import mongoose from "mongoose";


// const app = express()
// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded())


// mongoose.connect("mongodb+srv://Hemanth1:12345@users.nfj0nqa.mongodb.net/?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, function(err, conn){
//     if(err){
//         console.log("mongodb connection error", err);
//     }
//     if(!err && conn){
//         console.log("mongodb connection established");
//     }
// })

// mongoose.set('strictQuery', true);
// const userSchema = mongoose.Schema({
//       firstname: {
//         type: String,
//         required: true,
//         maxlength: 32,
//         trim: true
//       },
//       lastname: {
//         type: String,
//         required: true,
//         maxlength: 32,
//         trim: true
//       },
//       email: {
//         type: String,
//         trim: true,
//         required: true,
//         unique: true
//       },
//       password: {
//         type: String,
//         required: true
//       },
//       country:String,
//       street:String,
//       city:String,
//       State:String,
//       pincode:{
//         type:Number,
//         required:true,
//         min:100000,
//         max:999999        
//       }

//     },{
//         timestamps:true,
//     }
// )


// const User = mongoose.model("UserSchema",userSchema)

// //Routes

// app.post("/login", (req, res)=> {
//     const data = req.body;
//     console.log('received')

//     User.findOne({email: data.email}, (err, user) => {
//         if(err){
//             console.log("Error noted"+err)
//         }

//         if(user){
//             console.log(`email:${data.email} password:${data.password}`)

//             if(data.password===user.password){
//                 console.log("Login successful")
//                 res.send({message: "Login Successfull", user: user})
//                 } 
//             else {
//                 console.log("Wrong password")
//                 res.send({ message: "Password didn't match"})
//             }
//         }
//     else{
//             console.log('User not registered');
//             res.send({message: "User not registered"})
//         }
//     })
// }) 

// app.post("/register", (req, res)=> {
//     const { fname,lname,email,password,country,street,state,city,pincode} = req.body
//     User.findOne({email: email}, (err, user) => {
//         if(err){
//             res.send({message: "Error"+err}) ;
//             console.log(err)
//         }
//         else if(user){
//             console.log(`name:${fname+lname} email:${email} password:${password} \n User exists`)
//             res.send({message: "User already registerd"})
//             res.redirect('./login')
//         }
//          else {

//             const user = new User({
//                 fname,
//                 lname,
//                 email,
//                 password,
//                 country,
//                 street,
//                 state,
//                 city,
//                 pincode
//             })

//             user.save(err => {
//                 if(err) {
//                     console.log(err)
//                     res.send(err)
//                 } else {
//                     console.log('Successfully Registered')
//                     res.send( { message: "Successfully Registered, Please login now." })
//                 }
//             })
//         }
//     })

// }) 

// app.listen(9002,() => {
//     console.log("BE started at port 9002");
// })
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user.js";

const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: true, limit: '30mb' }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use('/user', userRoutes);

const CONNECTION_URL = "mongodb://localhost:27017";
const PORT = process.env.PORT || 5000;


// to get the input feedback stored run mongoDB and uncomment this section.

// mongoose
//   .connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB connection established");
//     mongoose.set('strictQuery', true);
//     app.listen(PORT, () => {
//       console.log("BE started at port " + PORT);
//     });
//   })
//   .catch((error) => {
//     console.log("DB connection error" + error);
//   });

app.listen(PORT, () => {
  console.log("BE started at port " + PORT);
});