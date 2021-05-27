const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Descriptions = Schema({
    ProductID:{
        type:String
    },
    Description:{
        type:String
    },
})

module.exports = mongoose.model("Descriptions", Descriptions)