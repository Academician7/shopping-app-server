const express = require("express")
const Orders = require("../models/orders")

const router = express.Router()

router.route("/").get((req,res)=>{
    Orders.find({},(err,result)=>{
        if(err) {return res.status(500).json({msg:err})}
        else{
        //    console.log(result)
            return res.json(result)
        }
   })
})

 
// router.route("/:username").get(middleware.checkToken,(req,res)=>{
router.route("/id/:_id").get((req,res)=>{
       Orders.findById({_id:req.params._id},(err,result)=>{
           if(err) return res.status(500).json({msg:err})
          return res.json(result)
      })
})

router.route("/customerid/:CustomerID").get((req,res)=>{
    Orders.find({CustomerID:req.params.CustomerID},(err,result)=>{
        if(err) return res.status(500).json({msg:err})
       return res.json(result)
   })
})


router.route("/register").post((req,res)=>{
    const order = new Orders({
        CustomerID: req.body.CustomerID,
        CustomerName:req.body.CustomerName,
        Address: req.body.Address,
        PhoneNumber:req.body.PhoneNumber,
        Email:req.body.Email,
        TotalPrice:req.body.TotalPrice,
        OrderConfirmed:req.body.OrderConfirmed,
        Delivered:req.body.Delivered
    })
    order
     .save()
     .then(()=>{
      //  console.log(` ${req.body.username} order registered`)
        res.status(200).json({msg:"success"})
       })
     .catch((err)=>{
        res.status(403).json({msg:err})
       })
})



router.route("/update/:_id").patch((req,res)=>{
    Orders.findByIdAndUpdate(
        {_id: req.params._id},
        { $set: {
            CustomerID: req.body.CustomerID,
            CustomerName:req.body.CustomerName,
            Address: req.body.Address,
            PhoneNumber:req.body.PhoneNumber,
            Email:req.body.Email,
            TotalPrice:req.body.TotalPrice,
            OrderConfirmed:req.body.OrderConfirmed,
            Delivered:req.body.Delivered
        }},
        (err,result) => {
            if(err) return res.status(500).json({msg:err})
            return res.json({msg:"success"})
        }
    )
})



router.route("/delete/:_id").delete((req,res)=>{
    Orders.findOneAndDelete({ _id: req.params._id},(err,result) => {
            if(err) return res.status(500).json({msg:err})
            return res.json({msg:"success"})
        }
    )
})





module.exports = router