const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Users = Schema({
   UserName: {
       type: String,
   },
   Email:{
       type:String,
   },
   Password:{
       type:String,
   },
    PhoneNumber:{
        type: Number,
    },
    Address:{
        type:String,
    },
    
})

module.exports = mongoose.model("Users", Users)