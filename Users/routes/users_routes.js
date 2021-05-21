const express = require("express")
const { findOne } = require("../models/users")
const Users = require("../models/users")

const router = express.Router()

router.route("/").get((req,res)=>{
    Users.find({},(err,result)=>{
        if(err) {return res.status(500).json({msg:err})}
        else{
        //    console.log(result)
            return res.json(result)
        }
   })
})



router.route("/id/:_id").get((req,res)=>{
       Users.findById({_id:req.params._id},(err,result)=>{
           if(err) return res.status(500).json({msg:err})
          return res.json(result)
      })
})



router.route("/login").post((req,res)=>{
    Users.findOne({Email:req.body.Email},(err,result)=>{
        if(err) return res.status(500).json({msg:err})
        if(result===null)
        {
            return res.status(403).json("Username incorect")
        }  
        if(result.Password===req.body.Password)
        {
            res.json({   
                msg:"success",
                result:result._id
            })
        }
        else
        {
            res.status(403).json("password is incorrect")
        }
   })
})


router.route("/register").post((req,res)=>{
    Users.findOne({Email:req.body.Email},(err,result)=>{
        if(err) return res.status(500).json({msg:err})
        if(result===null)
        {
            const user = new Users({
                UserName: req.body.UserName,
                Email:req.body.Email,
                Password:req.body.Password,
                PhoneNumber:req.body.PhoneNumber,
                Address: req.body.Address,
            })
            user
             .save()
             .then(()=>{
              //  console.log(` ${req.body.username} user registered`)
                res.status(200).json({msg:"success"})
               })
             .catch((err)=>{
                res.status(403).json({msg:err})
               })
        }  
        else
        {
            res.json("email already exist")
        }
   })
})


// router.route("/register").post((req,res)=>{
//     const user = new Users({
//         UserName: req.body.UserName,
//         Email:req.body.Email,
//         Password:req.body.Password,
//         PhoneNumber:req.body.PhoneNumber,
//         Address: req.body.Address,
//     })
//     user
//      .save()
//      .then(()=>{
//       //  console.log(` ${req.body.username} user registered`)
//         res.status(200).json({msg:"success"})
//        })
//      .catch((err)=>{
//         res.status(403).json({msg:err})
//        })
// })



router.route("/update/:_id").patch((req,res)=>{
    Users.findByIdAndUpdate(
        {_id: req.params._id},
        { $set: {
            UserName: req.body.UserName,
            Email:req.body.Email,
            Password:req.body.Password,
            PhoneNumber:req.body.PhoneNumber,
            Address: req.body.Address,
        }},
        (err,result) => {
            if(err) return res.status(500).json({msg:err})
            return res.json({msg:"success"})
        }
    )
})



router.route("/delete/:_id").delete((req,res)=>{
    Users.findOneAndDelete({ _id: req.params._id},(err,result) => {
            if(err) return res.status(500).json({msg:err})
            return res.json({msg:"success"})
        }
    )
})





module.exports = router