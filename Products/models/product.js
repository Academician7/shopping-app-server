const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Product = Schema({
   ProductName: {
       type: String,
   },
   Description:{
       type:String,
   },
   Image:{
       type:String,
   },
    Price:{
        type: Number,
    },
    QuantityType:{
        type:String,
    },
    Availability:{
        type:Boolean
    },
    BaseQuantity:{
        type:Number
    }
})

module.exports = mongoose.model("Product", Product)