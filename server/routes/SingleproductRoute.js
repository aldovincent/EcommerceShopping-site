const express = require('express')
const  SingleproductRouter = express.Router()
const singleproduct = require('../model/singleproductdata')

SingleproductRouter.post('/items',(req, res) =>{
    console.log(req.body);
    var item = {
       product_id:req.body.product_id
 

        
      
        
    }
    console.log(item);
    singleproduct(item).save().then((data) => {
        console.log(data);
        if (data) {
            return res.status(200).json({
                details: data,
                success: true,
                error: false,
                message:"single product added"
            })

        }
    })
})
module.exports = SingleproductRouter;