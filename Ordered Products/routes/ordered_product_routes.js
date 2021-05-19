const express = require("express")
const OrderedProduct = require("../models/ordered_products")

const router = express.Router()

router.route("/").get((req,res)=>{
    OrderedProduct.find({},(err,result)=>{
        if(err) {return res.status(500).json({msg:err})}
        else{
        //    console.log(result)
            return res.json(result)
        }
   })
})

 
// router.route("/:username").get(middleware.checkToken,(req,res)=>{
router.route("/id/:_id").get((req,res)=>{
       OrderedProduct.findById({_id:req.params._id},(err,result)=>{
           if(err) return res.status(500).json({msg:err})
          return res.json(result)
      })
})

router.route("/orderid/:OrderID").get((req,res)=>{
    OrderedProduct.find({OrderID:req.params.OrderID},(err,result)=>{
        if(err) return res.status(500).json({msg:err})
       return res.json(result)
   })
})


router.route("/register").post((req,res)=>{
    const orderedProduct = new OrderedProduct({
        ProductName:req.body.ProductName,
        Price: req.body.Price,
        Quantity:req.body.Quantity,
        OrderID:req.body.OrderID,
    })
    orderedProduct
     .save()
     .then(()=>{
      //  console.log(` ${req.body.orderedProductname} user registered`)
        res.status(200).json({msg:"success"})
       })
     .catch((err)=>{
        res.status(403).json({msg:err})
       })
})



router.route("/update/:_id").patch((req,res)=>{
    OrderedProduct.findByIdAndUpdate(
        {_id: req.params._id},
        { $set: {
            ProductName:req.body.ProductName,
        Price: req.body.Price,
        Quantity:req.body.Quantity,
        OrderID:req.body.OrderID,
        }},
        (err,result) => {
            if(err) return res.status(500).json({msg:err})
            return res.json({msg:"success"})
        }
    )
})



router.route("/delete/:_id").delete((req,res)=>{
    OrderedProduct.findOneAndDelete({ _id: req.params._id},(err,result) => {
            if(err) return res.status(500).json({msg:err})
            return res.json({msg:"success"})
        }
    )
})





module.exports = router