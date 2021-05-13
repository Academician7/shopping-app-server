const { Router } = require("express")
const express = require("express")
const PORT = process.env.PORT || 5000
const app = express()
const Mongoose = require("mongoose")


///////////////////// MONGODB Connection //////////////////////////////////////////////////////////////////


Mongoose.connect("mongodb+srv://shopping:shopping@123@shopping.nejhl.mongodb.net/Products?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
})

 const connection = Mongoose.connection
 connection.once("open", ()=>{
     console.log("Shopping App Database connected")
 })

 ///////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////// Products Route /////////////////////////////////////////////////////////////////

app.use(express.json())
const productRoute = require("./Products/routes/product_routes")
app.use("/products",productRoute)

////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////// User Route /////////////////////////////////////////////////////////////////

app.use(express.json())
const userRoute = require("./Users/routes/users_routes")
app.use("/users",userRoute)

////////////////////////////////////////////////////////////////////////////////////////////////////////


app.route("/").get((req,res)=>{
    res.json("Products Server")
})


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT} `)
})