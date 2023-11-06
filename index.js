//third part modules
const mongoose=require("mongoose")
const express=require("express")
const app=express()
const morgan=require("morgan")

// app.use("/",(req,res)=>{
//     res.json("hi frnds use is running");
// })


//middlewares
app.use(morgan("dev"))
app.use(express.json())





// listen port
app.listen(5000,(req,res)=>{
    console.log(`server port is running on 5000`);
})







//Router
 const infoRouter=require("./router")
app.use("/info",infoRouter)


//db connection
 
mongoose.connect('mongodb://localhost:27017/myapp')
  .then(() => {
    console.log('Connected to MongoDB');
    // Your code here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
