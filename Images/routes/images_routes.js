const express = require("express")
const Images = require("../models/images")

const router = express.Router()

router.route("/").get((req,res)=>{
    Images.find({},(err,result)=>{
        if(err) {return res.status(500).json({msg:err})}
        else{
        //    console.log(result)
            return res.json(result)
        }
   })
})

 
// router.route("/:username").get(middleware.checkToken,(req,res)=>{
router.route("/id/:_id").get((req,res)=>{
       Images.findById({_id:req.params._id},(err,result)=>{
           if(err) return res.status(500).json({msg:err})
          return res.json(result)
      })
})

router.route("/productid/:ProductID").get((req,res)=>{
    Images.find({ProductID:req.params.ProductID},(err,result)=>{
        if(err) return res.status(500).json({msg:err})
       return res.json(result)
   })
})


router.route("/register").post((req,res)=>{
    const images = new Images({
        ProductID:req.body.ProductID,
        ImageUrl: req.body.ImageUrl
    })

    images
     .save()
     .then(()=>{
      //  console.log(` ${req.body.Imagesname} user registered`)
        res.status(200).json({msg:"success"})
       })
     .catch((err)=>{
        res.status(403).json({msg:err})
       })
})



router.route("/update/:_id").patch((req,res)=>{
    Images.findByIdAndUpdate(
        {_id: req.params._id},
        { $set: {
            ProductID:req.body.ProductID,
            ImageUrl: req.body.ImageUrl,
        }},
        (err,result) => {
            if(err) return res.status(500).json({msg:err})
            return res.json({msg:"success"})
        }
    )
})



router.route("/delete/:_id").delete((req,res)=>{
    Images.findOneAndDelete({ _id: req.params._id},(err,result) => {
            if(err) return res.status(500).json({msg:err})
            return res.json({msg:"success"})
        }
    )
})





module.exports = router