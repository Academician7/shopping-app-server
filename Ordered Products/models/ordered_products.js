const mongoose = require("mongoose")

const Schema = mongoose.Schema

const OrderedProduct = Schema({
    ProductName:{
        type:String
    },
   Price: {
       type: Number,
   },
   Quantity:{
       type:Number,
   },
   OrderID:{
       type:String,
   }
})

module.exports = mongoose.model("OrderedProduct", OrderedProduct)