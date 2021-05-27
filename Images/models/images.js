const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Images = Schema({
    ProductID:{
        type:String
    },
   ImageUrl: {
       type: String,
   }
})

module.exports = mongoose.model("Images", Images)