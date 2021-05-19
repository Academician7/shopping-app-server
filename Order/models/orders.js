const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Orders = Schema({
    CustomerID:{
        type:String
    },
   CustomerName: {
       type: String,
   },
   Address:{
       type:String,
   },
   PhoneNumber:{
       type:Number,
   },
    Email:{
        type: String,
    },
    TotalPrice:{
        type:Number,
    },
    OrderConfirmed:{
        type:String,
    },
    Delivered:{
        type:String
    }
    
})

module.exports = mongoose.model("Orders", Orders)