const express = require("express")
const Descriptions = require("../models/descriptions")

const router = express.Router()

router.route("/").get((req,res)=>{
    Descriptions.find({},(err,result)=>{
        if(err) {return res.status(500).json({msg:err})}
        else{
        //    console.log(result)
            return res.json(result)
        }
   })
})

 
// router.route("/:username").get(middleware.checkToken,(req,res)=>{
router.route("/id/:_id").get((req,res)=>{
       Descriptions.findById({_id:req.params._id},(err,result)=>{
           if(err) return res.status(500).json({msg:err})
          return res.json(result)
      })
})

router.route("/productid/:ProductID").get((req,res)=>{
    Descriptions.find({ProductID:req.params.ProductID},(err,result)=>{
        if(err) return res.status(500).json({msg:err})
       return res.json(result)
   })
})


router.route("/register").post((req,res)=>{
    const descriptions = new Descriptions({
        ProductID:req.body.ProductID,
        Description:req.body.Description
    })
    console.log(descriptions)
    descriptions
     .save()
     .then(()=>{
      //  console.log(` ${req.body.Descriptionsname} user registered`)
        res.status(200).json({msg:"success"})
       })
     .catch((err)=>{
        res.status(403).json({msg:err})
       })
})



router.route("/update/:_id").patch((req,res)=>{
    Descriptions.findByIdAndUpdate(
        {_id: req.params._id},
        { $set: {
            ProductID:req.body.ProductID,
            Description: req.body.Description
        }},
        (err,result) => {
            if(err) return res.status(500).json({msg:err})
            return res.json({msg:"success"})
        }
    )
})



router.route("/delete/:_id").delete((req,res)=>{
    Descriptions.findOneAndDelete({ _id: req.params._id},(err,result) => {
            if(err) return res.status(500).json({msg:err})
            return res.json({msg:"success"})
        }
    )
})





module.exports = router