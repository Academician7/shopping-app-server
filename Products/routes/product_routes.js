const express = require("express")
const Product = require("../models/product")

const router = express.Router()

router.route("/").get((req,res)=>{
    Product.find({},(err,result)=>{
        if(err) {return res.status(500).json({msg:err})}
        else{
        //    console.log(result)
            return res.json(result)
        }
   })
})

 
// router.route("/:username").get(middleware.checkToken,(req,res)=>{
router.route("/id/:_id").get((req,res)=>{
       Product.findById({_id:req.params._id},(err,result)=>{
           if(err) return res.status(500).json({msg:err})
          return res.json(result)
      })
})




router.route("/register").post((req,res)=>{
    const product = new Product({
        ProductName: req.body.ProductName,
        Description:req.body.Description,
        Image:req.body.Image,
        Price:req.body.Price,
        QuantityType: req.body.QuantityType,
        Availability: req.body.Availability,
        BaseQuantity:req.body.BaseQuantity
    })
    product
     .save()
     .then(()=>{
      //  console.log(` ${req.body.username} user registered`)
        res.status(200).json({msg:"success"})
       })
     .catch((err)=>{
        res.status(403).json({msg:err})
       })
})



router.route("/update/:_id").patch((req,res)=>{
    Product.findByIdAndUpdate(
        {_id: req.params._id},
        { $set: {
                ProductName: req.body.ProductName,
                Description:req.body.Description,
                Image:req.body.Image,
                Price:req.body.Price,
                QuantityType: req.body.QuantityType,
                Availability: req.body.Availability,
                BaseQuantity:req.body.BaseQuantity
        }},
        (err,result) => {
            if(err) return res.status(500).json({msg:err})
            return res.json({msg:"success"})
        }
    )
})



router.route("/delete/:_id").delete((req,res)=>{
    Product.findOneAndDelete({ _id: req.params._id},(err,result) => {
            if(err) return res.status(500).json({msg:err})
            return res.json({msg:"success"})
        }
    )
})





module.exports = router